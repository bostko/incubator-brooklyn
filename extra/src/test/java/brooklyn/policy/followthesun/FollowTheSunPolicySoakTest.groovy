package brooklyn.policy.followthesun

import static brooklyn.test.TestUtils.*
import static java.util.concurrent.TimeUnit.*
import static org.testng.Assert.*

import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.testng.annotations.Test

import brooklyn.location.Location
import brooklyn.location.basic.SimulatedLocation
import brooklyn.policy.loadbalancing.MockContainerEntity
import brooklyn.policy.loadbalancing.MockItemEntity
import brooklyn.policy.loadbalancing.Movable
import brooklyn.test.entity.TestApplication

import com.google.common.collect.HashMultimap
import com.google.common.collect.Iterables
import com.google.common.collect.Multimap

public class FollowTheSunPolicySoakTest extends AbstractFollowTheSunPolicyTest {

    // FIXME Implement stopping/starting items and containers (and new locations)
    
    // FIXME Implement lockedItems
    
    protected static final Logger LOG = LoggerFactory.getLogger(FollowTheSunPolicySoakTest.class)
    
    private static final long TIMEOUT_MS = 10*1000;
    
    @Test(groups="WIP")
    public void testFollowTheSunQuickTest() {
        RunConfig config = new RunConfig()
        config.numCycles = 1
        config.numLocations=3
        config.numContainersPerLocation = 5
        config.numLockedItemsPerLocation = 2
        config.numMovableItems = 10
    
        runFollowTheSunSoakTest(config)
    }
    
    @Test(groups="WIP")
    public void testLoadBalancingManyItemsQuickTest() {
        RunConfig config = new RunConfig()
        config.numCycles = 1
        config.numLocations=3
        config.numContainersPerLocation = 5
        config.numLockedItemsPerLocation = 2
        config.numMovableItems = 100
        config.numContainerStopsPerCycle = 1
        config.numItemStopsPerCycle = 1
    
        runFollowTheSunSoakTest(config)
    }
    
    @Test(groups=["WIP","Integration","Acceptance"]) // acceptance group, because it's slow to run many cycles
    public void testLoadBalancingSoakTest() {
        RunConfig config = new RunConfig()
        config.numCycles = 100
        config.numLocations=3
        config.numContainersPerLocation = 5
        config.numLockedItemsPerLocation = 2
        config.numMovableItems = 10
    
        runFollowTheSunSoakTest(config)
    }

    @Test(groups=["WIP","Integration","Acceptance"]) // acceptance group, because it's slow to run many cycles
    public void testLoadBalancingManyItemsSoakTest() {
        RunConfig config = new RunConfig()
        config.numCycles = 100
        config.numLocations=3
        config.numContainersPerLocation = 5
        config.numLockedItemsPerLocation = 2
        config.numMovableItems = 100
        config.numContainerStopsPerCycle = 3
        config.numItemStopsPerCycle = 10
        
        runFollowTheSunSoakTest(config)
    }

    @Test(groups=["WIP","Integration","Acceptance"])
    public void testLoadBalancingManyManyItemsTest() {
        RunConfig config = new RunConfig()
        config.numCycles = 1
        config.numLocations=10
        config.numContainersPerLocation = 5
        config.numLockedItemsPerLocation = 100
        config.numMovableItems = 1000
        config.numContainerStopsPerCycle = 0
        config.numItemStopsPerCycle = 0
        config.verbose = false
        
        runFollowTheSunSoakTest(config)
    }
    
    private void runFollowTheSunSoakTest(RunConfig config) {
        int numCycles = config.numCycles
        int numLocations = config.numLocations
        int numContainersPerLocation = config.numContainersPerLocation
        int numLockedItemsPerLocation = config.numLockedItemsPerLocation
        int numMovableItems = config.numMovableItems
        
        int numContainerStopsPerCycle = config.numContainerStopsPerCycle
        int numItemStopsPerCycle = config.numItemStopsPerCycle
        boolean verbose = config.verbose
        
        MockItemEntity.totalMoveCount.set(0)
        
        List<Location> locations = new ArrayList<Location>()
        Multimap<Location,MockContainerEntity> containers = new HashMultimap<Location,MockContainerEntity>()
        Multimap<Location,MockItemEntity> lockedItems = new HashMultimap<Location,MockItemEntity>()
        List<MockItemEntity> movableItems = new ArrayList<MockItemEntity>()
        
        for (int i in 1..numLocations) {
            String locName = "loc"+i
            Location loc = new SimulatedLocation(name:locName)
            locations.add(loc)
            
            for (int j in 1..numContainersPerLocation) {
                MockContainerEntity container = newContainer(app, loc, "container-$locName-$j")
                containers.put(loc, container)
            }
            for (int j in 1..numLockedItemsPerLocation) {
                MockContainerEntity container = Iterables.get(containers.get(loc), j%numContainersPerLocation);
                MockItemEntity item = newLockedItem(app, container, "item-locked-$locName-$j")
                lockedItems.put(loc, item)
            }
        }

        for (int i in 1..numMovableItems) {
            MockContainerEntity container = Iterables.get(containers.values(), i%containers.size());
            MockItemEntity item = newItem(app, container, "item-movable$i")
            movableItems.add(item)
        }

        for (int i in 1..numCycles) {
            LOG.info(FollowTheSunPolicySoakTest.class.getSimpleName()+": cycle $i")
            
//            // Stop items, and start others
//            for (j in 1..numItemStopsPerCycle) {
//                int itemIndex = random.nextInt(numItems)
//                MockItemEntity itemToStop = items.get(itemIndex)
//                itemToStop.stop()
//                LOG.debug("Unmanaging item {}", itemToStop)
//                app.managementContext.unmanage(itemToStop)
//                items.set(itemIndex, newItem(app, containers.get(0), "item-"+(itemIndex+1)+".$i.$j", 5))
//            }

            // Choose a location to be busiest
            int locIndex = random.nextInt(numLocations)
            Location busiestLocation = locations.get(locIndex)
            
            // Repartition the load across the items
            for (int j in 0..(numMovableItems-1)) {
                MockItemEntity item = movableItems.get(j)
                Map<MockItemEntity, Double> workrates = [:]
                
                for (Map.Entry<Location,MockItemEntity> entry : lockedItems.entries()) {
                    Location location = entry.getKey()
                    MockItemEntity source = entry.getValue()
                    double baseWorkrate = (location == busiestLocation ? 1000 : 100);
                    double jitter = 10
                    double jitteredWorkrate = Math.max(0, baseWorkrate + (random.nextDouble()*jitter*2 - jitter))
                    workrates.put(source, jitteredWorkrate)
                }
                item.setAttribute(MockItemEntity.TEST_METRIC, workrates)
            }

//            // Stop containers, and start others
//            for (j in 1..numContainerStopsPerCycle) {
//                int containerIndex = random.nextInt(numContainers)
//                MockContainerEntity containerToStop = containers.get(containerIndex)
//                containerToStop.offloadAndStop(containers.get((containerIndex+1)%numContainers))
//                LOG.debug("Unmanaging container {}", containerToStop)
//                app.managementContext.unmanage(containerToStop)
//                
//                MockContainerEntity containerToAdd = newContainer(app, "container-"+(containerIndex+1)+".$i.$j", lowThreshold, highThreshold)
//                containers.set(containerIndex, containerToAdd)
//            }

            // Assert that the items all end up in the location with maximum load-generation
            executeUntilSucceeds(timeout:TIMEOUT_MS) {
                List<Location> itemLocs = movableItems.collect { 
                    Collection<Location> locs = it.getAttribute(Movable.CONTAINER)?.getLocations()
                    return (locs != null && locs.size() > 0) ? Iterables.get(locs, 0) : null
                }
                String errMsg
                if (verbose) {
                    errMsg = verboseDumpToString()+"; itemLocs=$itemLocs"
                } else {
                    Collection<Location> locsInUse = new LinkedHashSet<Location>(itemLocs)
                    errMsg = "locsInUse=$locsInUse; totalMoves=${MockItemEntity.totalMoveCount}"
                }
                
                assertEquals(itemLocs, Collections.nCopies(movableItems.size(), busiestLocation), errMsg)
            }
        }
    }
    
    private static class RunConfig {
        int numCycles = 1
        int numLocations = 3
        int numContainersPerLocation = 5
        int numLockedItemsPerLocation = 5
        int numMovableItems = 5
        int numContainerStopsPerCycle = 0
        int numItemStopsPerCycle = 0
        boolean verbose = true
    }

    // Testing conveniences.
    
    private double sum(Iterable<Double> vals) {
        double total = 0;
        vals.each { total += it }
        return total;
    }
    
    /**
     * Distributes a given load across a number of items randomly. The variability in load for an item is dictated by the variance,
     * but the total will always equal totalLoad.
     * 
     * The distribution of load is skewed: one side of the list will have bigger values than the other.
     * Which side is skewed will vary, so when balancing a policy will find that things have entirely changed.
     * 
     * TODO This is not particularly good at distributing load, but it's random and skewed enough to force rebalancing.
     */
    private List<Integer> randomlyDivideLoad(int numItems, int totalLoad, int min, int max) {
        List<Integer> result = new ArrayList<Integer>(numItems);
        int totalRemaining = totalLoad;
        int variance = 3
        int skew = 3
        
        for (int i = 0; i < numItems; i++) {
            int itemsRemaining = numItems-i;
            int itemFairShare = (totalRemaining/itemsRemaining)
            double skewFactor = ((double)i/numItems)*2 - 1; // a number between -1 and 1, depending how far through the item set we are
            int itemSkew = (int) (random.nextInt(skew)*skewFactor)
            int itemLoad = itemFairShare + (random.nextInt(variance*2)-variance) + itemSkew;
            itemLoad = Math.max(min, itemLoad)
            itemLoad = Math.min(totalRemaining, itemLoad)
            itemLoad = Math.min(max, itemLoad)
            result.add(itemLoad);
            totalRemaining -= itemLoad;
        }

        if (random.nextBoolean()) Collections.reverse(result)
        
        assertTrue(sum(result) <= totalLoad, "totalLoad=$totalLoad; result=$result")
        
        return result
    }
}
