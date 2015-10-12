/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package org.apache.brooklyn.entity.software.base;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;
import org.apache.brooklyn.api.entity.EntitySpec;
import org.apache.brooklyn.api.location.MachineProvisioningLocation;
import org.apache.brooklyn.core.entity.BrooklynConfigKeys;
import org.apache.brooklyn.core.entity.Entities;
import org.apache.brooklyn.core.entity.factory.ApplicationBuilder;
import org.apache.brooklyn.core.internal.BrooklynProperties;
import org.apache.brooklyn.core.mgmt.internal.ManagementContextInternal;
import org.apache.brooklyn.core.test.entity.LocalManagementContextForTests;
import org.apache.brooklyn.core.test.entity.TestApplication;
import org.apache.brooklyn.entity.software.base.test.location.WindowsTestFixture;
import org.apache.brooklyn.location.winrm.WinRmMachineLocation;
import org.apache.brooklyn.util.collections.MutableList;
import org.apache.brooklyn.util.collections.MutableMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.util.List;
import java.util.Map;

public class WindowsScriptsWinrmExitStatusLiveTest {
    private static final Logger LOG = LoggerFactory.getLogger(WindowsScriptsWinrmExitStatusLiveTest.class);

    private static final String INVALID_CMD = "thisCommandDoesNotExistAEFafiee3d";
    
    protected ManagementContextInternal mgmt;
    protected TestApplication app;
    protected MachineProvisioningLocation<WinRmMachineLocation> location;
    protected WinRmMachineLocation machine;

    @BeforeClass(alwaysRun=true)
    public void setUpClass() throws Exception {
        mgmt = new LocalManagementContextForTests(BrooklynProperties.Factory.newDefault());

        location = WindowsTestFixture.setUpWindowsLocation(mgmt);
        machine = location.obtain(ImmutableMap.of());
    }

    @AfterClass(alwaysRun=true)
    public void tearDownClass() throws Exception {
        try {
            try {
                if (location != null) location.release(machine);
            } finally {
                if (mgmt != null) Entities.destroyAll(mgmt);
            }
        } catch (Throwable t) {
            LOG.error("Caught exception in tearDownClass method", t);
        } finally {
            mgmt = null;
        }
    }

    @BeforeMethod(alwaysRun=true)
    public void setUp() throws Exception {
        EntitySpec<TestApplication> appSpec = EntitySpec.create(TestApplication.class)
                .configure(BrooklynConfigKeys.SKIP_ON_BOX_BASE_DIR_RESOLUTION, true);
        app = ApplicationBuilder.newManagedApp(appSpec, mgmt);
    }

    @AfterMethod(alwaysRun=true)
    public void tearDown() throws Exception {
        try {
            try {
                if (app != null) Entities.destroy(app);
            } catch (Throwable t) {
                LOG.error("Caught exception in tearDown method", t);
            }
        } finally {
            app = null;
        }
    }

    @Test(groups = "Live")
    public void testExecWithZeroExitCodes() {
        Assert.assertEquals(machine.executeNativeOrPsScript(MutableMap.of(), ImmutableList.of("echo HiWorld"), null, "working-script", false), 0, "an echo script should return zero");
        Assert.assertEquals(machine.executeNativeOrPsScript(MutableMap.of(), ImmutableList.of(INVALID_CMD), null, "working-script", false), 1, "an echo script should return zero");
    }

    @Test(groups = "Live")
    public void testExecWithNonZeroExitCodes() {
        List<String> simpleScript = ImmutableList.of(INVALID_CMD, "exit /b %ERRORLEVEL%");
        Assert.assertEquals(machine.executeNativeOrPsScript(MutableMap.of(), simpleScript, null, "non-working-script", false), 9009, "an echo script should return one (invalid command)");

        List<String> simpleScript2 = ImmutableList.of("echo hi", "exit /b 333");
        Assert.assertEquals(machine.executeNativeOrPsScript(MutableMap.of(), simpleScript2, null, "non-working-script", false), 333, "an echo script should return one (invalid command)");
    }

    //// https://social.technet.microsoft.com/forums/en-US/6f414857-8288-4b11-b8b0-c6fa2339ed7c/run-net-script-powershell-exit-and-published-data
    @Test(groups = "Live")
    public void testPsExecWithNonZeroExitCodes() {
        List<String> simpleScript = ImmutableList.of(INVALID_CMD, "exit 444");

        Assert.assertEquals(machine.executeNativeOrPsScript(MutableMap.of(), null, simpleScript, "non-working-script", false), 1, "an echo script should return one (invalid command)");
    }

    //// https://technet.microsoft.com/en-us/library/hh847796.aspx
    @Test(groups = "Live")
    public void testPsExecWithErrorActionPreferenceExitCodes() {
        Map<String, Object> flags = MutableMap.of("scriptFilename", null);

        List<String> simpleScript = ImmutableList.of(
                "$ErrorActionPreference = \"Stop\"",
                "Write-Error \"writing error\"",
                "Write-Host goodbye");
        Assert.assertEquals(machine.executeNativeOrPsScript(flags, null, simpleScript, "non-working-script", false), 1, "simple script should return 1");
        String scriptFilename1 = (String) flags.get("scriptFilename");

        Assert.assertEquals(machine.executeCmdCommandNoRetry("powershell -File %TEMP%\\" + scriptFilename1).getStatusCode(), 0, "consecutive failing commands script should return 444");
    }

    @Test(groups = "Live")
    public void testPsExecWithConsecutiveNonZeroExitCodes() {
        Map<String, Object> flags = MutableMap.of("scriptFilename", null);

        List<String> simpleScript = ImmutableList.of(
                "Write-Host hi",
                "exit 111");
        Assert.assertEquals(machine.executeNativeOrPsScript(flags, null, simpleScript, "non-working-script", false), 1, "simple script should return 1");
        String scriptFilename1 = (String)flags.get("scriptFilename");

        Assert.assertEquals(machine.executeCmdCommandNoRetry("powershell -File %TEMP%\\" + scriptFilename1).getStatusCode(), 111, "consecutive failing commands script should return 111");

        ////

        List<String> consecutiveFailingScript = MutableList.of(
                "Write-Host hi",
                "& $env:temp\\" + scriptFilename1,
                "Write-Host bye",
                "exit 222");
        Assert.assertEquals(machine.executeNativeOrPsScript(flags, null, consecutiveFailingScript, "non-working-script", false), 1, "consecutive failing commands script should return 1");
        String scriptFilename2 = (String)flags.get("scriptFilename");

        Assert.assertEquals(machine.executeCmdCommandNoRetry("powershell -File %TEMP%\\" + scriptFilename2).getStatusCode(), 222, "consecutive failing commands script should return 222");

        ////

        List<String> complicatedPsScript = MutableList.of(
                "Write-Host hi",
                "& $env:temp\\" + scriptFilename1,
                "If ($lastexitcode -ne 0) {",
                "exit $lastexitcode",
                "}",
                "Write-Host bye",
                "exit 333");
        Assert.assertEquals(machine.executeNativeOrPsScript(flags, null, complicatedPsScript, "non-working-script", false), 1, "Again returns 1, but this time because it failed before bye command");
        String scriptFilename3 = (String)flags.get("scriptFilename");

        Assert.assertEquals(machine.executeCmdCommandNoRetry("powershell -File %TEMP%\\" + scriptFilename3).getStatusCode(), 111, "consecutive failing commands script should return 444");
    }
}
