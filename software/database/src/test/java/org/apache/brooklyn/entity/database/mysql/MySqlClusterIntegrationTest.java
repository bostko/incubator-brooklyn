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
package org.apache.brooklyn.entity.database.mysql;

import org.apache.brooklyn.api.entity.Entity;
import org.apache.brooklyn.api.location.Location;
import org.apache.brooklyn.core.test.BrooklynAppLiveTestSupport;
import org.apache.brooklyn.util.os.Os;
import org.testng.annotations.Test;

import com.google.common.collect.ImmutableMap;
import com.google.common.collect.Iterables;

public class MySqlClusterIntegrationTest extends BrooklynAppLiveTestSupport {

    @Test(groups = {"Integration"})
    public void testAllNodesInit() throws Exception {
        try {
            MySqlClusterTestHelper.test(app, getLocation());
        } finally {
            for (Entity member : Iterables.getOnlyElement(app.getChildren()).getChildren()) {
                String runDir = member.getAttribute(MySqlNode.RUN_DIR);
                if (runDir != null) {
                    Os.deleteRecursively(runDir);
                }
            }
        }
    }

    @Test(groups = {"Integration"})
    public void testMasterInit() throws Exception {
        try {
            MySqlClusterTestHelper.testMasterInit(app, getLocation());
        } finally {
            for (Entity member : Iterables.getOnlyElement(app.getChildren()).getChildren()) {
                String runDir = member.getAttribute(MySqlNode.RUN_DIR);
                if (runDir != null) {
                    Os.deleteRecursively(runDir);
                }
            }
        }
    }

    private Location getLocation() {
        return mgmt.getLocationRegistry().resolve("localhost");
    }
}
