var items = {
  "entities" : [ {
    "type" : "brooklyn.entity.messaging.activemq.ActiveMQBroker",
    "defaultVersion" : "5.10.2",
    "name" : "ActiveMQ Broker",
    "description" : "ActiveMQ is an open source message broker which fully implements the Java Message Service 1.1 (JMS)",
    "iconUrl" : "classpath:///activemq-logo.png",
    "config" : [ {
      "name" : "activemq.brokerName",
      "type" : "java.lang.String",
      "defaultValue" : "localhost",
      "description" : "ActiveMQ Broker Name",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "activemq.install.mirror.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://www.mirrorservice.org/sites/ftp.apache.org/activemq",
      "description" : "URL of mirror",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "activemq.jetty.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8161-65535",
      "description" : "jetty port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "activemq.templateConfigurationUrl",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/messaging/activemq/activemq.xml",
      "description" : "Template file (in freemarker format) for the conf/activemq.xml file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "${driver.mirrorUrl}/${version}/apache-activemq-${version}-bin.tar.gz",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "5.10.2",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.check.hostname.bug",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Check whether hostname is too long and will likely crash Javadue to bug 7089443",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.opts",
      "type" : "java.util.Set",
      "defaultValue" : [ ],
      "description" : "Java command line options",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.sysprops",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Java command line system properties",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Path to JMX driver on the local machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : "AUTODETECT",
      "description" : "What type of JMX agent to use; defaults to null (autodetect) which means JMXMP_AND_RMI allowing firewall access through a single port as well as local access supporting jconsole (unless JMX_SSL_ENABLED is set, in which case it is JMXMP only)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "AUTODETECT",
        "description" : "AUTODETECT"
      }, {
        "value" : "JMXMP",
        "description" : "JMXMP"
      }, {
        "value" : "JMXMP_AND_RMI",
        "description" : "JMXMP_AND_RMI"
      }, {
        "value" : "JMX_RMI_CUSTOM_AGENT",
        "description" : "JMX_RMI_CUSTOM_AGENT"
      }, {
        "value" : "JMX_RMI",
        "description" : "JMX_RMI"
      }, {
        "value" : "NONE",
        "description" : "NONE"
      } ],
      "links" : null
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "defaultValue" : "jmxrmi",
      "description" : "JMX context path",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "31001-65535",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : null,
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "JMX enabled",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "defaultValue" : "admin",
      "description" : "JMX password",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.cert",
      "type" : "java.security.cert.Certificate",
      "defaultValue" : null,
      "description" : "certificate of key used to access a JMX agent",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.key",
      "type" : "java.security.PrivateKey",
      "defaultValue" : null,
      "description" : "key used to access a JMX agent (typically per entity, embedded in the managed JVM)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "JMX over JMXMP enabled with SSL/TLS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "defaultValue" : "admin",
      "description" : "JMX username",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "openwire.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "61616-65535",
      "description" : "OpenWire port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "rmi.registry.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "1099,19099-65535",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "activemq.brokerName",
      "type" : "java.lang.String",
      "description" : "ActiveMQ Broker Name",
      "links" : { }
    }, {
      "name" : "activemq.jetty.port",
      "type" : "java.lang.Integer",
      "description" : "jetty port",
      "links" : { }
    }, {
      "name" : "activemq.templateConfigurationUrl",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the conf/activemq.xml file",
      "links" : { }
    }, {
      "name" : "broker.url",
      "type" : "java.lang.String",
      "description" : "Broker Connection URL",
      "links" : { }
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "description" : "Path to JMX driver on the local machine",
      "links" : { }
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "description" : "JMX context path",
      "links" : { }
    }, {
      "name" : "jmx.direct.port",
      "type" : "java.lang.Integer",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "java.lang.Integer",
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "description" : "JMX password",
      "links" : { }
    }, {
      "name" : "jmx.service.url",
      "type" : "java.lang.String",
      "description" : "The URL for connecting to the MBean Server",
      "links" : { }
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "description" : "JMX username",
      "links" : { }
    }, {
      "name" : "openwire.port",
      "type" : "java.lang.Integer",
      "description" : "OpenWire port",
      "links" : { }
    }, {
      "name" : "rmi.registry.port",
      "type" : "java.lang.Integer",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.nosql.cassandra.CassandraFabric",
    "name" : "Apache Cassandra Database Fabric",
    "description" : "Cassandra is a highly scalable, eventually consistent, distributed, structured key-value store which provides a ColumnFamily-based data model richer than typical key/value systems",
    "iconUrl" : "classpath:///cassandra-logo.jpeg",
    "config" : [ {
      "name" : "cassandra.fabric.datacenter.namer",
      "type" : "com.google.common.base.Function",
      "defaultValue" : null,
      "description" : "Function used to provide the cassandra.replication.datacenterName for a given location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccfabric.memberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "entity spec for creating new cluster members",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamicfabric.customChildFlags",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Additional flags to be passed to children when they are being created",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamicfabric.displayNamePrefix",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Display name prefix, for created children",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamicfabric.displayNameSuffix",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Display name suffix, for created children",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamicfabric.factory",
      "type" : "brooklyn.entity.basic.EntityFactory",
      "defaultValue" : null,
      "description" : "factory for creating new cluster members",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.running",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[all;require=0,100.0%]",
      "description" : "Problems check from children actual states (lifecycle), applied by default to members and children, not checking upness, but requiring by default that none are on-fire",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.up",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[atLeastOne;require=1,0.0%]",
      "description" : "Up check, applied by default to members, requiring at least one present and up",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "fabric.initial.quorumSize",
      "type" : "java.lang.Integer",
      "defaultValue" : -1,
      "description" : "Initial fabric quorum size - number of initial nodes that must have been successfully started to report success (if less than 0, then use a value based on INITIAL_SIZE of clusters)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Add delegate child entities for members of the group",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate.nameFormat",
      "type" : "java.lang.String",
      "defaultValue" : "%s",
      "description" : "Delegate members name format string (Use %s for the original entity display name)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "cassandra.cluster.datacenterUsages",
      "type" : "com.google.common.collect.Multimap",
      "description" : "Current set of datacenters in use, with nodes in each",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.datacenters",
      "type" : "java.util.Set",
      "description" : "Current set of datacenters in use",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.hostname",
      "type" : "java.lang.String",
      "description" : "Hostname to connect to cluster with",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.seeds.current",
      "type" : "java.util.Set",
      "description" : "Current set of seeds to use to bootstrap the cluster",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.seeds.hasPublished",
      "type" : "java.lang.Boolean",
      "description" : "Whether we have published any seeds",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.thrift.port",
      "type" : "java.lang.Integer",
      "description" : "Cassandra Thrift RPC port to connect to cluster with",
      "links" : { }
    }, {
      "name" : "cluster.first",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is the first member of a cluster",
      "links" : { }
    }, {
      "name" : "cluster.first.entity",
      "type" : "brooklyn.entity.Entity",
      "description" : "The first member of the cluster",
      "links" : { }
    }, {
      "name" : "fabric.size",
      "type" : "java.lang.Integer",
      "description" : "Fabric size",
      "links" : { }
    }, {
      "name" : "group.members",
      "type" : "java.util.Collection",
      "description" : "Members of the group",
      "links" : { }
    }, {
      "name" : "group.members.added",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity added to group members",
      "links" : { }
    }, {
      "name" : "group.members.count",
      "type" : "java.lang.Integer",
      "description" : "Number of members",
      "links" : { }
    }, {
      "name" : "group.members.removed",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity removed from group members",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "update",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Updates the cluster members",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.nosql.cassandra.CassandraDatacenter",
    "name" : "Apache Cassandra Datacenter Cluster",
    "description" : "Cassandra is a highly scalable, eventually consistent, distributed, structured key-value store which provides a ColumnFamily-based data model richer than typical key/value systems",
    "iconUrl" : "classpath:///cassandra-logo.jpeg",
    "config" : [ {
      "name" : "cassandra.cluster.delayBeforeAdvertisingCluster",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "Delay after cluster is started before checking and advertising its availability",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.cluster.name",
      "type" : "java.lang.String",
      "defaultValue" : "BrooklynCluster",
      "description" : "Name of the Cassandra cluster",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.cluster.seedSupplier",
      "type" : "com.google.common.base.Supplier",
      "defaultValue" : null,
      "description" : "For determining the seed nodes",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.cluster.snitchName",
      "type" : "java.lang.String",
      "defaultValue" : "SimpleSnitch",
      "description" : "Type of the Cassandra snitch",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.cluster.tokenGenerator.class",
      "type" : "java.lang.Class",
      "defaultValue" : "class brooklyn.entity.nosql.cassandra.TokenGenerators$PosNeg63TokenGenerator",
      "description" : "For determining the tokens of nodes",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.cluster.tokenShift",
      "type" : "java.math.BigInteger",
      "defaultValue" : null,
      "description" : "Delta applied to all tokens generated for this Cassandra datacenter, useful when configuring multiple datacenters which should be shifted; if not set, a random shift is applied. (Pass 0 to prevent any shift.)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.cluster.useVnodes",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Determines whether to use vnodes; if doing so, tokens will not be explicitly assigned to nodes in the cluster",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.numTokensPerNode",
      "type" : "java.lang.Integer",
      "defaultValue" : 256,
      "description" : "Number of tokens per node; if using vnodes, should set this to a value like 256; will be overridden to 1 if USE_VNODES==false",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cluster.initial.quorumSize",
      "type" : "java.lang.Integer",
      "defaultValue" : -1,
      "description" : "Initial cluster quorum size - number of initial nodes that must have been successfully started to report success (if < 0, then use value of INITIAL_SIZE)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cluster.initial.size",
      "type" : "java.lang.Integer",
      "defaultValue" : 1,
      "description" : "Initial cluster size",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.availabilityZones",
      "type" : "java.util.Collection",
      "defaultValue" : null,
      "description" : "availability zones to use (if non-null, overrides other configuration)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.customChildFlags",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Additional flags to be passed to children when they are being created",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.factory",
      "type" : "brooklyn.entity.basic.EntityFactory",
      "defaultValue" : null,
      "description" : "factory for creating new cluster members",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.firstmemberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "entity spec for creating new cluster members, used for the very first member if different",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.memberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "entity spec for creating new cluster members",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.numAvailabilityZones",
      "type" : "java.lang.Integer",
      "defaultValue" : null,
      "description" : "number of availability zones to use (will attempt to auto-discover this number)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.quarantineFailedEntities",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "If true, will quarantine entities that fail to start; if false, will get rid of them (i.e. delete them)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.removalstrategy",
      "type" : "com.google.common.base.Function",
      "defaultValue" : null,
      "description" : "strategy for deciding what to remove when down-sizing",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.enable",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Whether to use availability zones, or just deploy everything into the generic location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.failureDetector",
      "type" : "brooklyn.entity.group.DynamicCluster$ZoneFailureDetector",
      "defaultValue" : "brooklyn.entity.group.zoneaware.ProportionalZoneFailureDetector@77acc39c",
      "description" : "Zone failure detector",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.placementStrategy",
      "type" : "brooklyn.entity.group.DynamicCluster$NodePlacementStrategy",
      "defaultValue" : "brooklyn.entity.group.zoneaware.BalancingNodePlacementStrategy@45498134",
      "description" : "Node placement strategy",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.running",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[all;require=0,100.0%]",
      "description" : "Problems check from children actual states (lifecycle), applied by default to members and children, not checking upness, but requiring by default that none are on-fire",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.up",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[atLeastOne;require=1,0.0%]",
      "description" : "Up check, applied by default to members, requiring at least one present and up",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Add delegate child entities for members of the group",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate.nameFormat",
      "type" : "java.lang.String",
      "defaultValue" : "%s",
      "description" : "Delegate members name format string (Use %s for the original entity display name)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "cassandra.cluster.datacenterUsages",
      "type" : "com.google.common.collect.Multimap",
      "description" : "Current set of datacenters in use, with nodes in each",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.datacenters",
      "type" : "java.util.Set",
      "description" : "Current set of datacenters in use",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.first.node.started.utc",
      "type" : "java.lang.Long",
      "description" : "Time (UTC) when the first node was started",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.hostname",
      "type" : "java.lang.String",
      "description" : "Hostname to connect to cluster with",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.metrics.processCpuTime.fraction.perNode",
      "type" : "java.lang.Double",
      "description" : "Fraction of CPU time used (percentage reported by JMX), averaged over all nodes",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.metrics.processCpuTime.fraction.windowed",
      "type" : "java.lang.Double",
      "description" : "Fraction of CPU time used (percentage, over time window), averaged over all nodes",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.name",
      "type" : "java.lang.String",
      "description" : "Name of the Cassandra cluster",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.nodes",
      "type" : "java.util.List",
      "description" : "List of host:port of all active nodes in the cluster (thrift port, and public hostname/IP)",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.read.active",
      "type" : "java.lang.Integer",
      "description" : "Current active ReadStage tasks",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.read.pending",
      "type" : "java.lang.Long",
      "description" : "Current pending ReadStage tasks",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.schema.versions.count",
      "type" : "java.lang.Integer",
      "description" : "Number of different schema versions in the cluster; should be 1 for a healthy cluster, 0 when off; 2 and above indicats a Schema Disagreement Error (and keyspace access may fail)",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.seeds.current",
      "type" : "java.util.Set",
      "description" : "Current set of seeds to use to bootstrap the cluster",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.seeds.hasPublished",
      "type" : "java.lang.Boolean",
      "description" : "Whether we have published any seeds",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.start.nodes.queued",
      "type" : "java.util.List",
      "description" : "Nodes queued for starting (for sequential start)",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.thrift.latency.perNode",
      "type" : "java.lang.Long",
      "description" : "Latency for thrift port connection  averaged over all nodes (ms)",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.thrift.port",
      "type" : "java.lang.Integer",
      "description" : "Cassandra Thrift RPC port to connect to cluster with",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.write.active",
      "type" : "java.lang.Integer",
      "description" : "Current active MutationStage tasks",
      "links" : { }
    }, {
      "name" : "cassandra.cluster.write.pending",
      "type" : "java.lang.Long",
      "description" : "Current pending MutationStage tasks",
      "links" : { }
    }, {
      "name" : "cassandra.reads.perSec.last.perNode",
      "type" : "java.lang.Double",
      "description" : "Reads/sec (last datapoint) averaged over all nodes",
      "links" : { }
    }, {
      "name" : "cassandra.reads.perSec.windowed.perNode",
      "type" : "java.lang.Double",
      "description" : "Reads/sec (over time window) averaged over all nodes",
      "links" : { }
    }, {
      "name" : "cassandra.thrift.latency.windowed.perNode",
      "type" : "java.lang.Double",
      "description" : "Latency for thrift port (ms, over time window) averaged over all nodes",
      "links" : { }
    }, {
      "name" : "cassandra.write.perSec.last.perNode",
      "type" : "java.lang.Double",
      "description" : "Writes/sec (last datapoint) averaged over all nodes",
      "links" : { }
    }, {
      "name" : "cassandra.writes.perSec.windowed.perNode",
      "type" : "java.lang.Double",
      "description" : "Writes/sec (over time window) averaged over all nodes",
      "links" : { }
    }, {
      "name" : "cluster.entity",
      "type" : "brooklyn.entity.Entity",
      "description" : "The cluster an entity is a member of",
      "links" : { }
    }, {
      "name" : "cluster.first",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is the first member of a cluster",
      "links" : { }
    }, {
      "name" : "cluster.first.entity",
      "type" : "brooklyn.entity.Entity",
      "description" : "The first member of the cluster",
      "links" : { }
    }, {
      "name" : "cluster.member",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is a member of a cluster",
      "links" : { }
    }, {
      "name" : "datastore.url",
      "type" : "java.lang.String",
      "description" : "Primary contact URL for a datastore (e.g. mysql://localhost:3306/)",
      "links" : { }
    }, {
      "name" : "dynamiccluster.entityQuarantined",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity failed to start, and has been quarantined",
      "links" : { }
    }, {
      "name" : "dynamiccluster.failedSubLocations",
      "type" : "java.util.Set",
      "description" : "Sub locations that seem to have failed",
      "links" : { }
    }, {
      "name" : "dynamiccluster.quarantineGroup",
      "type" : "brooklyn.entity.group.QuarantineGroup",
      "description" : "Group of quarantined entities that failed to start",
      "links" : { }
    }, {
      "name" : "dynamiccluster.subLocations",
      "type" : "java.util.List",
      "description" : "Locations for each availability zone to use",
      "links" : { }
    }, {
      "name" : "group.members",
      "type" : "java.util.Collection",
      "description" : "Members of the group",
      "links" : { }
    }, {
      "name" : "group.members.added",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity added to group members",
      "links" : { }
    }, {
      "name" : "group.members.count",
      "type" : "java.lang.Integer",
      "description" : "Number of members",
      "links" : { }
    }, {
      "name" : "group.members.removed",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity removed from group members",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "executeScript",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "commands",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "executes the given script contents using cassandra-cli",
      "links" : null
    }, {
      "name" : "replaceMember",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "memberId",
        "type" : "java.lang.String",
        "description" : "The entity id of a member to be replaced",
        "defaultValue" : null
      } ],
      "description" : "Replaces the entity with the given ID, if it is a member; first adds a new member, then removes this one. Returns id of the new entity; or throws exception if couldn't be replaced.",
      "links" : null
    }, {
      "name" : "resize",
      "returnType" : "java.lang.Integer",
      "parameters" : [ {
        "name" : "desiredSize",
        "type" : "java.lang.Integer",
        "description" : "The new size of the cluster",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the entity (e.g. the number of nodes in a cluster)",
      "links" : null
    }, {
      "name" : "resizeByDelta",
      "returnType" : "java.util.Collection",
      "parameters" : [ {
        "name" : "delta",
        "type" : "int",
        "description" : "The change in number of nodes",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the cluster.",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "update",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Updates the cluster members",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.nosql.cassandra.CassandraNode",
    "defaultVersion" : "1.2.16",
    "name" : "Apache Cassandra Node",
    "description" : "Cassandra is a highly scalable, eventually consistent, distributed, structured key-value store which provides a ColumnFamily-based data model richer than typical key/value systems",
    "iconUrl" : "classpath:///cassandra-logo.jpeg",
    "config" : [ {
      "name" : "cassandra.broadcastAddressSensor",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "sensor name from which to take the broadcast address; default (null) is a smart lookup",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.cluster.name",
      "type" : "java.lang.String",
      "defaultValue" : "BrooklynCluster",
      "description" : "Name of the Cassandra cluster",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.cluster.seeds.initial",
      "type" : "java.util.Set",
      "defaultValue" : null,
      "description" : "List of cluster nodes to seed this node",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.cluster.snitchName",
      "type" : "java.lang.String",
      "defaultValue" : "SimpleSnitch",
      "description" : "Type of the Cassandra snitch",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.config.customSnitchUrl",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URL for a jar file to be uploaded (e.g. \"classpath://brooklyn/entity/nosql/cassandra/cassandra-multicloud-snitch.jar\"); defaults to null which means nothing to upload",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.config.fileName",
      "type" : "java.lang.String",
      "defaultValue" : "cassandra.yaml",
      "description" : "Name for the copied config file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.config.rackdc.fileName",
      "type" : "java.lang.String",
      "defaultValue" : "cassandra-rackdc.properties",
      "description" : "Name for the copied rackdc config file (used for configuring replication, when a suitable snitch is used)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.config.rackdc.templateUrl",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/nosql/cassandra/cassandra-rackdc.properties",
      "description" : "Template file (in freemarker format) for the cassandra-rackdc.properties config file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.config.templateUrl",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/nosql/cassandra/cassandra-${entity.majorMinorVersion}.yaml",
      "description" : "A URL (in freemarker format) for a cassandra.yaml config file (in freemarker format)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.gossip.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "7000-65535",
      "description" : "Cassandra Gossip communications port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.install.mirror.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://www.mirrorservice.org/sites/ftp.apache.org/cassandra",
      "description" : "URL of mirror",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.install.tgzUrl",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URL of TGZ download file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.listenAddressSensor",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "sensor name from which to take the listen address; default (null) is a smart lookup",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.native.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "9042-65535",
      "description" : "Cassandra Native Transport port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.numTokensPerNode",
      "type" : "java.lang.Integer",
      "defaultValue" : 1,
      "description" : "Number of tokens per node; if using vnodes, should set this to a value like 256",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.replication.datacenterName",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Datacenter name (used for configuring replication, when a suitable snitch is used)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.replication.rackName",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Rack name (used for configuring replication, when a suitable snitch is used)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.rpcAddressSensor",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "sensor name from which to take the RPC address; default (null) is 0.0.0.0",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.ssl-gossip.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "7001-65535",
      "description" : "Cassandra Gossip SSL communications port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.thrift.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "9160-65535",
      "description" : "Cassandra Thrift RPC port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.token",
      "type" : "java.math.BigInteger",
      "defaultValue" : null,
      "description" : "Cassandra Token",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cassandra.tokens",
      "type" : "java.util.Set",
      "defaultValue" : null,
      "description" : "Cassandra Tokens",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "datastore.creation.script.contents",
      "type" : "java.lang.String",
      "defaultValue" : "",
      "description" : "Contensts of creation script to initialize the datastore",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "datastore.creation.script.url",
      "type" : "java.lang.String",
      "defaultValue" : "",
      "description" : "URL of creation script to use to initialize the datastore (ignored if contents are specified)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "${driver.mirrorUrl}/${version}/apache-cassandra-${version}-bin.tar.gz",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "1.2.16",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.check.hostname.bug",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Check whether hostname is too long and will likely crash Javadue to bug 7089443",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.metrics.mxbeanStatsEnabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Enables collection of JVM stats from the MXBeans, such as memory and thread usage (default is true)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.opts",
      "type" : "java.util.Set",
      "defaultValue" : [ ],
      "description" : "Java command line options",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.sysprops",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Java command line system properties",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Path to JMX driver on the local machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : "JMXMP_AND_RMI",
      "description" : "What type of JMX agent to use; defaults to null (autodetect) which means JMXMP_AND_RMI allowing firewall access through a single port as well as local access supporting jconsole (unless JMX_SSL_ENABLED is set, in which case it is JMXMP only)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "AUTODETECT",
        "description" : "AUTODETECT"
      }, {
        "value" : "JMXMP",
        "description" : "JMXMP"
      }, {
        "value" : "JMXMP_AND_RMI",
        "description" : "JMXMP_AND_RMI"
      }, {
        "value" : "JMX_RMI_CUSTOM_AGENT",
        "description" : "JMX_RMI_CUSTOM_AGENT"
      }, {
        "value" : "JMX_RMI",
        "description" : "JMX_RMI"
      }, {
        "value" : "NONE",
        "description" : "NONE"
      } ],
      "links" : null
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "defaultValue" : "jmxrmi",
      "description" : "JMX context path",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "31001-65535",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : null,
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "JMX enabled",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "JMX password",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.cert",
      "type" : "java.security.cert.Certificate",
      "defaultValue" : null,
      "description" : "certificate of key used to access a JMX agent",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.key",
      "type" : "java.security.PrivateKey",
      "defaultValue" : null,
      "description" : "key used to access a JMX agent (typically per entity, embedded in the managed JVM)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "JMX over JMXMP enabled with SSL/TLS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "JMX username",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "rmi.registry.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "7199",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "5m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "cassandra.cluster.name",
      "type" : "java.lang.String",
      "description" : "Name of the Cassandra cluster",
      "links" : { }
    }, {
      "name" : "cassandra.gossip.port",
      "type" : "java.lang.Integer",
      "description" : "Cassandra Gossip communications port",
      "links" : { }
    }, {
      "name" : "cassandra.liveNodeCount",
      "type" : "java.lang.Integer",
      "description" : "Number of live nodes in cluster",
      "links" : { }
    }, {
      "name" : "cassandra.native.port",
      "type" : "java.lang.Integer",
      "description" : "Cassandra Native Transport port",
      "links" : { }
    }, {
      "name" : "cassandra.peers",
      "type" : "java.lang.Integer",
      "description" : "Number of peers in cluster",
      "links" : { }
    }, {
      "name" : "cassandra.read.active",
      "type" : "java.lang.Integer",
      "description" : "Current active ReadStage tasks",
      "links" : { }
    }, {
      "name" : "cassandra.read.completed",
      "type" : "java.lang.Long",
      "description" : "Total completed ReadStage tasks",
      "links" : { }
    }, {
      "name" : "cassandra.read.pending",
      "type" : "java.lang.Long",
      "description" : "Current pending ReadStage tasks",
      "links" : { }
    }, {
      "name" : "cassandra.reads.perSec.last",
      "type" : "java.lang.Double",
      "description" : "Reads/sec (last datapoint)",
      "links" : { }
    }, {
      "name" : "cassandra.reads.perSec.windowed",
      "type" : "java.lang.Double",
      "description" : "Reads/sec (over time window)",
      "links" : { }
    }, {
      "name" : "cassandra.replication.datacenterName",
      "type" : "java.lang.String",
      "description" : "Datacenter name (used for configuring replication, when a suitable snitch is used)",
      "links" : { }
    }, {
      "name" : "cassandra.replication.rackName",
      "type" : "java.lang.String",
      "description" : "Rack name (used for configuring replication, when a suitable snitch is used)",
      "links" : { }
    }, {
      "name" : "cassandra.service.jmx.up",
      "type" : "java.lang.Boolean",
      "description" : "Whether JMX is up for this service",
      "links" : { }
    }, {
      "name" : "cassandra.ssl-gossip.port",
      "type" : "java.lang.Integer",
      "description" : "Cassandra Gossip SSL communications port",
      "links" : { }
    }, {
      "name" : "cassandra.thrift.latency",
      "type" : "java.lang.Long",
      "description" : "Latency for thrift port connection (ms) or null if down",
      "links" : { }
    }, {
      "name" : "cassandra.thrift.latency.windowed",
      "type" : "java.lang.Double",
      "description" : "Latency for thrift port (ms, averaged over time window)",
      "links" : { }
    }, {
      "name" : "cassandra.thrift.port",
      "type" : "java.lang.Integer",
      "description" : "Cassandra Thrift RPC port",
      "links" : { }
    }, {
      "name" : "cassandra.token",
      "type" : "java.math.BigInteger",
      "description" : "Cassandra Token",
      "links" : { }
    }, {
      "name" : "cassandra.tokens",
      "type" : "java.util.Set",
      "description" : "Cassandra Tokens",
      "links" : { }
    }, {
      "name" : "cassandra.write.active",
      "type" : "java.lang.Integer",
      "description" : "Current active MutationStage tasks",
      "links" : { }
    }, {
      "name" : "cassandra.write.completed",
      "type" : "java.lang.Long",
      "description" : "Total completed MutationStage tasks",
      "links" : { }
    }, {
      "name" : "cassandra.write.pending",
      "type" : "java.lang.Long",
      "description" : "Current pending MutationStage tasks",
      "links" : { }
    }, {
      "name" : "cassandra.write.perSec.last",
      "type" : "java.lang.Double",
      "description" : "Writes/sec (last datapoint)",
      "links" : { }
    }, {
      "name" : "cassandra.writes.perSec.windowed",
      "type" : "java.lang.Double",
      "description" : "Writes/sec (over time window)",
      "links" : { }
    }, {
      "name" : "datastore.url",
      "type" : "java.lang.String",
      "description" : "Primary contact URL for a datastore (e.g. mysql://localhost:3306/)",
      "links" : { }
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "java.metrics.gc.time",
      "type" : "java.util.Map",
      "description" : "garbage collection time",
      "links" : { }
    }, {
      "name" : "java.metrics.heap.committed",
      "type" : "java.lang.Long",
      "description" : "Commited heap size (bytes)",
      "links" : { }
    }, {
      "name" : "java.metrics.heap.init",
      "type" : "java.lang.Long",
      "description" : "Initial heap size (bytes)",
      "links" : { }
    }, {
      "name" : "java.metrics.heap.max",
      "type" : "java.lang.Long",
      "description" : "Max heap size (bytes)",
      "links" : { }
    }, {
      "name" : "java.metrics.heap.used",
      "type" : "java.lang.Long",
      "description" : "Current heap size (bytes)",
      "links" : { }
    }, {
      "name" : "java.metrics.nonheap.used",
      "type" : "java.lang.Long",
      "description" : "Current non-heap size (bytes)",
      "links" : { }
    }, {
      "name" : "java.metrics.physicalmemory.free",
      "type" : "java.lang.Long",
      "description" : "The free memory available to the operating system",
      "links" : { }
    }, {
      "name" : "java.metrics.physicalmemory.total",
      "type" : "java.lang.Long",
      "description" : "The physical memory available to the operating system",
      "links" : { }
    }, {
      "name" : "java.metrics.processCpuTime.fraction.last",
      "type" : "java.lang.Double",
      "description" : "Fraction of CPU time used, reported by JVM (percentage, last datapoint)",
      "links" : { }
    }, {
      "name" : "java.metrics.processCpuTime.fraction.windowed",
      "type" : "java.lang.Double",
      "description" : "Fraction of CPU time used, reported by JVM (percentage, over time window)",
      "links" : { }
    }, {
      "name" : "java.metrics.processCpuTime.total",
      "type" : "java.lang.Double",
      "description" : "Process CPU time (total millis since start)",
      "links" : { }
    }, {
      "name" : "java.metrics.processors.available",
      "type" : "java.lang.Integer",
      "description" : "number of processors available to the Java virtual machine",
      "links" : { }
    }, {
      "name" : "java.metrics.starttime",
      "type" : "java.lang.Long",
      "description" : "Start time of Java process (UTC)",
      "links" : { }
    }, {
      "name" : "java.metrics.systemload.average",
      "type" : "java.lang.Double",
      "description" : "average system load",
      "links" : { }
    }, {
      "name" : "java.metrics.threads.current",
      "type" : "java.lang.Integer",
      "description" : "Current number of threads",
      "links" : { }
    }, {
      "name" : "java.metrics.threads.max",
      "type" : "java.lang.Integer",
      "description" : "Peak number of threads",
      "links" : { }
    }, {
      "name" : "java.metrics.uptime",
      "type" : "java.lang.Long",
      "description" : "Uptime of Java process (millis, elapsed since start)",
      "links" : { }
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "description" : "Path to JMX driver on the local machine",
      "links" : { }
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "description" : "JMX context path",
      "links" : { }
    }, {
      "name" : "jmx.direct.port",
      "type" : "java.lang.Integer",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "java.lang.Integer",
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "description" : "JMX password",
      "links" : { }
    }, {
      "name" : "jmx.service.url",
      "type" : "java.lang.String",
      "description" : "The URL for connecting to the MBean Server",
      "links" : { }
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "description" : "JMX username",
      "links" : { }
    }, {
      "name" : "rmi.registry.port",
      "type" : "java.lang.Integer",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "executeScript",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "commands",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "executes the given script contents using cassandra-cli",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.nosql.solr.SolrServer",
    "defaultVersion" : "4.7.2",
    "name" : "Apache Solr Node",
    "description" : "Solr is the popular, blazing fast open source enterprise search platform from the Apache Lucene project.",
    "iconUrl" : "classpath:///solr-logo.jpeg",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "${driver.mirrorUrl}/${version}/solr-${version}.tgz",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "4.7.2",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.check.hostname.bug",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Check whether hostname is too long and will likely crash Javadue to bug 7089443",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.metrics.mxbeanStatsEnabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Enables collection of JVM stats from the MXBeans, such as memory and thread usage (default is true)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.opts",
      "type" : "java.util.Set",
      "defaultValue" : [ ],
      "description" : "Java command line options",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.sysprops",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Java command line system properties",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Path to JMX driver on the local machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : "AUTODETECT",
      "description" : "What type of JMX agent to use; defaults to null (autodetect) which means JMXMP_AND_RMI allowing firewall access through a single port as well as local access supporting jconsole (unless JMX_SSL_ENABLED is set, in which case it is JMXMP only)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "AUTODETECT",
        "description" : "AUTODETECT"
      }, {
        "value" : "JMXMP",
        "description" : "JMXMP"
      }, {
        "value" : "JMXMP_AND_RMI",
        "description" : "JMXMP_AND_RMI"
      }, {
        "value" : "JMX_RMI_CUSTOM_AGENT",
        "description" : "JMX_RMI_CUSTOM_AGENT"
      }, {
        "value" : "JMX_RMI",
        "description" : "JMX_RMI"
      }, {
        "value" : "NONE",
        "description" : "NONE"
      } ],
      "links" : null
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "defaultValue" : "jmxrmi",
      "description" : "JMX context path",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "31001-65535",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : null,
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "JMX enabled",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "JMX password",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.cert",
      "type" : "java.security.cert.Certificate",
      "defaultValue" : null,
      "description" : "certificate of key used to access a JMX agent",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.key",
      "type" : "java.security.PrivateKey",
      "defaultValue" : null,
      "description" : "key used to access a JMX agent (typically per entity, embedded in the managed JVM)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "JMX over JMXMP enabled with SSL/TLS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "JMX username",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "rmi.registry.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "1099,19099-65535",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "solr.config.templateUrl",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/nosql/solr/solr.xml",
      "description" : "Template file (in freemarker format) for the solr.xml config file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "solr.core.config",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of core names to core configuration archive URL",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "solr.http.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8983-65535",
      "description" : "Solr HTTP communications port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "solr.install.mirror.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://mirrors.ukfast.co.uk/sites/ftp.apache.org/lucene/solr/",
      "description" : "URL of mirror",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "5m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "java.metrics.gc.time",
      "type" : "java.util.Map",
      "description" : "garbage collection time",
      "links" : { }
    }, {
      "name" : "java.metrics.heap.committed",
      "type" : "java.lang.Long",
      "description" : "Commited heap size (bytes)",
      "links" : { }
    }, {
      "name" : "java.metrics.heap.init",
      "type" : "java.lang.Long",
      "description" : "Initial heap size (bytes)",
      "links" : { }
    }, {
      "name" : "java.metrics.heap.max",
      "type" : "java.lang.Long",
      "description" : "Max heap size (bytes)",
      "links" : { }
    }, {
      "name" : "java.metrics.heap.used",
      "type" : "java.lang.Long",
      "description" : "Current heap size (bytes)",
      "links" : { }
    }, {
      "name" : "java.metrics.nonheap.used",
      "type" : "java.lang.Long",
      "description" : "Current non-heap size (bytes)",
      "links" : { }
    }, {
      "name" : "java.metrics.physicalmemory.free",
      "type" : "java.lang.Long",
      "description" : "The free memory available to the operating system",
      "links" : { }
    }, {
      "name" : "java.metrics.physicalmemory.total",
      "type" : "java.lang.Long",
      "description" : "The physical memory available to the operating system",
      "links" : { }
    }, {
      "name" : "java.metrics.processCpuTime.fraction.last",
      "type" : "java.lang.Double",
      "description" : "Fraction of CPU time used, reported by JVM (percentage, last datapoint)",
      "links" : { }
    }, {
      "name" : "java.metrics.processCpuTime.fraction.windowed",
      "type" : "java.lang.Double",
      "description" : "Fraction of CPU time used, reported by JVM (percentage, over time window)",
      "links" : { }
    }, {
      "name" : "java.metrics.processCpuTime.total",
      "type" : "java.lang.Double",
      "description" : "Process CPU time (total millis since start)",
      "links" : { }
    }, {
      "name" : "java.metrics.processors.available",
      "type" : "java.lang.Integer",
      "description" : "number of processors available to the Java virtual machine",
      "links" : { }
    }, {
      "name" : "java.metrics.starttime",
      "type" : "java.lang.Long",
      "description" : "Start time of Java process (UTC)",
      "links" : { }
    }, {
      "name" : "java.metrics.systemload.average",
      "type" : "java.lang.Double",
      "description" : "average system load",
      "links" : { }
    }, {
      "name" : "java.metrics.threads.current",
      "type" : "java.lang.Integer",
      "description" : "Current number of threads",
      "links" : { }
    }, {
      "name" : "java.metrics.threads.max",
      "type" : "java.lang.Integer",
      "description" : "Peak number of threads",
      "links" : { }
    }, {
      "name" : "java.metrics.uptime",
      "type" : "java.lang.Long",
      "description" : "Uptime of Java process (millis, elapsed since start)",
      "links" : { }
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "description" : "Path to JMX driver on the local machine",
      "links" : { }
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "description" : "JMX context path",
      "links" : { }
    }, {
      "name" : "jmx.direct.port",
      "type" : "java.lang.Integer",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "java.lang.Integer",
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "description" : "JMX password",
      "links" : { }
    }, {
      "name" : "jmx.service.url",
      "type" : "java.lang.String",
      "description" : "The URL for connecting to the MBean Server",
      "links" : { }
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "description" : "JMX username",
      "links" : { }
    }, {
      "name" : "rmi.registry.port",
      "type" : "java.lang.Integer",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    }, {
      "name" : "solr.http.port",
      "type" : "java.lang.Integer",
      "description" : "Solr HTTP communications port",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.network.bind.BindDnsServer",
    "defaultVersion" : null,
    "name" : "BIND",
    "description" : "BIND is an Internet Domain Name Server.",
    "iconUrl" : "classpath:///isc-logo.png",
    "config" : [ {
      "name" : "bind.access.cidr",
      "type" : "java.lang.String",
      "defaultValue" : "0.0.0.0/0",
      "description" : "Subnet CIDR or ACL allowed to access DNS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "bind.domain.name",
      "type" : "java.lang.String",
      "defaultValue" : "brooklyn.local",
      "description" : "The DNS domain name to serve",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "bind.entity.filter",
      "type" : "com.google.common.base.Predicate",
      "defaultValue" : "Predicates.instanceOf(brooklyn.entity.basic.SoftwareProcess)",
      "description" : "Filter for entities which will use the BIND DNS service for name resolution.Default is all instances of SoftwareProcess in the application.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "bind.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "53",
      "description" : "BIND DNS port for TCP and UDP",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "bind.resolv-conf.replce",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Set to replace resolv.conf with the template (default is to use eth0 script)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "bind.reverse-lookup.address",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Network address for reverse lookup zone",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "bind.sensor.hostname",
      "type" : "brooklyn.event.AttributeSensor",
      "defaultValue" : null,
      "description" : "Sensor on managed entities that reports the hostname",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "bind.template.domain-zone",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/network/bind/domain.zone",
      "description" : "The BIND domain zone file to serve (as FreeMarker template)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "bind.template.interface-cfg",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/network/bind/ifcfg",
      "description" : "The network interface configuration file for clients (as FreeMarker template)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "bind.template.named-conf",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/network/bind/named.conf",
      "description" : "The BIND named configuration file (as FreeMarker template)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "bind.template.resolv-conf",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/network/bind/resolv.conf",
      "description" : "The resolver configuration file for clients (as FreeMarker template)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "bind.template.reverse-zone",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/network/bind/reverse.zone",
      "description" : "The BIND reverse lookup zone file to serve (as FreeMarker template)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "bind.updateRootZones",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Instructs the entity to fetch the latest root zones file from ftp.rs.internic.net.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "bind.entities",
      "type" : "brooklyn.entity.basic.DynamicGroup",
      "description" : "The entities being managed by this server",
      "links" : { }
    }, {
      "name" : "bind.mappings",
      "type" : "com.google.common.collect.Multimap",
      "description" : "All address mappings maintained by the server, in form address -> [names]",
      "links" : { }
    }, {
      "name" : "bind.port",
      "type" : "java.lang.Integer",
      "description" : "BIND DNS port for TCP and UDP",
      "links" : { }
    }, {
      "name" : "bind.records.a",
      "type" : "java.util.Map",
      "description" : "All A records for the server, in form name -> address",
      "links" : { }
    }, {
      "name" : "bind.records.cname",
      "type" : "com.google.common.collect.Multimap",
      "description" : "All CNAME records for the server, in form name -> [names]",
      "links" : { }
    }, {
      "name" : "bind.records.ptr",
      "type" : "java.util.Map",
      "description" : "All PTR records for the server, in form address -> name. Entries will be in REVERSE_LOOKUP_CIDR. Entries are guaranteed to have an inverse mapping in A_RECORDS.",
      "links" : { }
    }, {
      "name" : "bind.reverse-lookup.cidr",
      "type" : "brooklyn.util.net.Cidr",
      "description" : "The network CIDR that hosts must have for reverse lookup entries to be added (default uses server address /24)",
      "links" : { }
    }, {
      "name" : "bind.reverse-lookup.domain",
      "type" : "java.lang.String",
      "description" : "The in-addr.arpa reverse lookup domain name",
      "links" : { }
    }, {
      "name" : "bind.serial",
      "type" : "java.lang.Long",
      "description" : "A serial number guaranteed to be valid for use in a modified domain.zone or reverse.zone file",
      "links" : { }
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "getReverseMappings",
      "returnType" : "java.util.Map",
      "parameters" : [ ],
      "description" : "Gets the IP to hostname mappings stored in this DNS server's conf file",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.brooklynnode.BrooklynEntityMirror",
    "name" : "Brooklyn Entity Mirror",
    "description" : "Provides an entity which can sit in one brooklyn domain and reflect the status of an entity via the REST API of another domain.",
    "iconUrl" : "",
    "config" : [ {
      "name" : "brooklyn.mirror.entity_id",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Brooklyn ID of the entity being mirrored",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklyn.mirror.entity_url",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URL for the entity in the remote Brooklyn mgmt endpoint",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklyn.mirror.poll_period",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "5s",
      "description" : "Frequency to poll for client sensors",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.managementPassword",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Password for MANAGEMENT_USER",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.managementUser",
      "type" : "java.lang.String",
      "defaultValue" : "admin",
      "description" : "The user for logging into the brooklyn web-console (also used for health-checks)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "brooklyn.mirror.monitoring_status",
      "type" : "java.lang.String",
      "description" : "brooklyn.mirror.monitoring_status",
      "links" : { }
    } ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.entity.brooklynnode.BrooklynNode",
    "defaultVersion" : "0.7.0-SNAPSHOT",
    "name" : "Brooklyn Node",
    "description" : "Deploys a Brooklyn management server",
    "iconUrl" : "",
    "config" : [ {
      "name" : "brooklynnode.app",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Application (fully qualified class name) to launch using the brooklyn CLI",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.brooklyncatalog.contents",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Contents for the brooklyn catalog.xml file (uploaded to ~/.brooklyn/catalog.xml)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.brooklyncatalog.remotepath",
      "type" : "java.lang.String",
      "defaultValue" : "${HOME}/.brooklyn/catalog.xml",
      "description" : "Remote path for the brooklyn catalog.xml file to be uploaded",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.brooklyncatalog.uri",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URI for the brooklyn catalog.xml file (uploaded to ~/.brooklyn/catalog.xml)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.brooklynproperties.global.contents",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Contents for the global brooklyn properties file (uploaded to ~/.brooklyn/brooklyn.properties)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.brooklynproperties.global.remotepath",
      "type" : "java.lang.String",
      "defaultValue" : "${HOME}/.brooklyn/brooklyn.properties; only useful for testing as this path will not be used on the remote system",
      "description" : "Remote path for the global brooklyn.properties file to be uploaded",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.brooklynproperties.global.uri",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URI for the global brooklyn properties file (uploaded to ~/.brooklyn/brooklyn.properties)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.brooklynproperties.local.contents",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Contents for the launch-specific brooklyn properties file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.brooklynproperties.local.remotepath",
      "type" : "java.lang.String",
      "defaultValue" : "${driver.runDir}/brooklyn-local.properties",
      "description" : "Remote path for the launch-specific brooklyn.properties file to be uploaded",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.brooklynproperties.local.uri",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URI for the launch-specific brooklyn properties file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.classpath",
      "type" : "java.util.List",
      "defaultValue" : [ ],
      "description" : "classpath to use, as list of URL entries",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.copytorundir",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "URLs of resources to be copied across to the server, giving the path they are to be copied to",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.customization.extraScript",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Optional additional script commands to run as part of customization; this might e.g. ensure id_rsa is set up",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.distro.uploadurl",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URL for uploading the brooklyn distro (retrieved locally and pushed to remote install location)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.download.archive.subpath",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Path to the main directory in the archive being supplied for installation; to use the root of an archive, specify '.'; default value taken based on download URL (e.g. 'name' for 'http://path/name.tgz' or 'http://path/name-dist.tgz') falling back to an appropriate value for brooklyn, e.g. 'brooklyn-0.7.0-SNAPSHOT'",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : "bin/brooklyn",
      "description" : "Path to the script to launch Brooklyn / the app relative to the subpath in the archive, defaulting to 'bin/brooklyn'",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.launch.command.pid.updated",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Whether the launch script creates/updates the PID file, if not the entity will do so, but note it will not necessarily kill sub-processes",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.launch.parameters.extra",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Launch parameters passed on the CLI, in addition to 'launch' and parameters implied by other config keys (and placed afterwards on the command line)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.locations",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Locations to use when launching the app",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.managementPassword",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Password for MANAGEMENT_USER",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.managementUser",
      "type" : "java.lang.String",
      "defaultValue" : "admin",
      "description" : "The user for logging into the brooklyn web-console (also used for health-checks)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.noshutdownonexit",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Whether to pass the (deprecated) noShutdownOnExit flag to the process",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.poll_period",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2s",
      "description" : "Frequency to poll for client sensors",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.properties.file.ifExists",
      "type" : "java.lang.Enum",
      "defaultValue" : "FAIL",
      "description" : "What to do in the case where a global brooklyn.properties already exists",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "DO_NOT_USE",
        "description" : "DO_NOT_USE"
      }, {
        "value" : "USE_EXISTING",
        "description" : "USE_EXISTING"
      }, {
        "value" : "OVERWRITE",
        "description" : "OVERWRITE"
      }, {
        "value" : "FAIL",
        "description" : "FAIL"
      } ],
      "links" : null
    }, {
      "name" : "brooklynnode.webconsole.address.bind",
      "type" : "java.net.InetAddress",
      "defaultValue" : "0.0.0.0/0.0.0.0",
      "description" : "Specifies the IP address of the NIC to bind the Brooklyn Management Console to (default 0.0.0.0)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.webconsole.address.public",
      "type" : "java.net.InetAddress",
      "defaultValue" : null,
      "description" : "Specifies the public IP address or hostname for the Brooklyn Management Console",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.webconsole.enabledHttpProtocols",
      "type" : "java.util.List",
      "defaultValue" : [ "http" ],
      "description" : "List of enabled protocols (e.g. http, https)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.webconsole.httpPort",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8081-65535",
      "description" : "HTTP Port for the brooklyn web-console",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.webconsole.httpsPort",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8443-65535",
      "description" : "HTTPS Port for the brooklyn web-console",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.webconsole.nosecurity",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Whether to start the web console with no security",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklynnode.webconsole.portMapper",
      "type" : "com.google.common.base.Function",
      "defaultValue" : "identity",
      "description" : "Function for mapping private to public ports, for use in inferring the brooklyn URI",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "<#if version?contains(\"SNAPSHOT\")>https://repository.apache.org/service/local/artifact/maven/redirect?r=snapshots&g=org.apache.brooklyn&v=${version}&a=brooklyn-dist&c=dist&e=tar.gz<#else>http://search.maven.org/remotecontent?filepath=org/apache/brooklyn/brooklyn-dist/${version}/brooklyn-dist-${version}-dist.tar.gz</#if>",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "0.7.0-SNAPSHOT",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.check.hostname.bug",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Check whether hostname is too long and will likely crash Javadue to bug 7089443",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.opts",
      "type" : "java.util.Set",
      "defaultValue" : [ ],
      "description" : "Java command line options",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.sysprops",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Java command line system properties",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "brooklynnode.app",
      "type" : "java.lang.String",
      "description" : "Application (fully qualified class name) to launch using the brooklyn CLI",
      "links" : { }
    }, {
      "name" : "brooklynnode.classpath",
      "type" : "java.util.List",
      "description" : "classpath to use, as list of URL entries",
      "links" : { }
    }, {
      "name" : "brooklynnode.copytorundir",
      "type" : "java.util.Map",
      "description" : "URLs of resources to be copied across to the server, giving the path they are to be copied to",
      "links" : { }
    }, {
      "name" : "brooklynnode.ha.state",
      "type" : "brooklyn.management.ha.ManagementNodeState",
      "description" : "High-availability state of the management node (MASTER, HOT_STANDBY, etc)",
      "links" : { }
    }, {
      "name" : "brooklynnode.locations",
      "type" : "java.lang.String",
      "description" : "Locations to use when launching the app",
      "links" : { }
    }, {
      "name" : "brooklynnode.webconsole.address.bind",
      "type" : "java.net.InetAddress",
      "description" : "Specifies the IP address of the NIC to bind the Brooklyn Management Console to (default 0.0.0.0)",
      "links" : { }
    }, {
      "name" : "brooklynnode.webconsole.address.public",
      "type" : "java.net.InetAddress",
      "description" : "Specifies the public IP address or hostname for the Brooklyn Management Console",
      "links" : { }
    }, {
      "name" : "brooklynnode.webconsole.enabledHttpProtocols",
      "type" : "java.util.List",
      "description" : "List of enabled protocols (e.g. http, https)",
      "links" : { }
    }, {
      "name" : "brooklynnode.webconsole.httpPort",
      "type" : "java.lang.Integer",
      "description" : "HTTP Port for the brooklyn web-console",
      "links" : { }
    }, {
      "name" : "brooklynnode.webconsole.httpsPort",
      "type" : "java.lang.Integer",
      "description" : "HTTPS Port for the brooklyn web-console",
      "links" : { }
    }, {
      "name" : "brooklynnode.webconsole.nosecurity",
      "type" : "java.lang.Boolean",
      "description" : "Whether to start the web console with no security",
      "links" : { }
    }, {
      "name" : "brooklynnode.webconsole.up",
      "type" : "java.lang.Boolean",
      "description" : "Whether the web console is responding normally",
      "links" : { }
    }, {
      "name" : "brooklynnode.webconsole.url",
      "type" : "java.net.URI",
      "description" : "URL of the brooklyn web-console",
      "links" : { }
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "deployBlueprint",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "blueprintType",
        "type" : "java.lang.String",
        "description" : "blueprintType",
        "defaultValue" : null
      }, {
        "name" : "blueprintConfig",
        "type" : "java.util.Map",
        "description" : "blueprintConfig",
        "defaultValue" : null
      }, {
        "name" : "blueprintPlan",
        "type" : "java.util.Map",
        "description" : "CAMP plan for the blueprint to be deployed; currently only supports Java map or JSON string (not yet YAML)",
        "defaultValue" : null
      } ],
      "description" : "Deploy a blueprint, either given a plan (as Java map or JSON string for a map), or given URL and optional config",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "setHighAvailabilityMode",
      "returnType" : "brooklyn.management.ha.ManagementNodeState",
      "parameters" : [ {
        "name" : "mode",
        "type" : "brooklyn.management.ha.HighAvailabilityMode",
        "description" : "HA mode",
        "defaultValue" : null
      } ],
      "description" : "Set the HA mode on the node, returning the existing state",
      "links" : null
    }, {
      "name" : "setHighAvailabilityPriority",
      "returnType" : "java.lang.Integer",
      "parameters" : [ {
        "name" : "priority",
        "type" : "java.lang.Integer",
        "description" : "HA priority",
        "defaultValue" : null
      } ],
      "description" : "Set the HA priority on the node, returning the old priority",
      "links" : null
    }, {
      "name" : "shutdown",
      "returnType" : "java.lang.Void",
      "parameters" : [ {
        "name" : "stopAppsFirst",
        "type" : "java.lang.Boolean",
        "description" : "Whether to stop apps before shutting down",
        "defaultValue" : null
      }, {
        "name" : "forceShutdownOnError",
        "type" : "java.lang.Boolean",
        "description" : "Force shutdown if apps fail to stop or timeout",
        "defaultValue" : null
      }, {
        "name" : "shutdownTimeout",
        "type" : "brooklyn.util.time.Duration",
        "description" : "A maximum delay to wait for apps to gracefully stop before giving up or forcibly exiting",
        "defaultValue" : null
      }, {
        "name" : "requestTimeout",
        "type" : "brooklyn.util.time.Duration",
        "description" : "Maximum time to block the request for the shutdown to finish, 0 to wait infinitely",
        "defaultValue" : null
      }, {
        "name" : "delayForHttpReturn",
        "type" : "brooklyn.util.time.Duration",
        "description" : "The delay before exiting the process, to permit the REST response to be returned",
        "defaultValue" : null
      } ],
      "description" : "Shutdown the remote brooklyn instance (stops via the REST API only; leaves any VM)",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stopNodeAndKillApps",
      "returnType" : "java.lang.Void",
      "parameters" : [ {
        "name" : "timeout",
        "type" : "brooklyn.util.time.Duration",
        "description" : "How long to wait before giving up on stopping the node",
        "defaultValue" : {
          "nanos" : 3600000000000
        }
      } ],
      "description" : "Stop all apps managed by the Brooklyn process, stop the process, and any VM created, and unmanage this entity",
      "links" : null
    }, {
      "name" : "stopNodeButLeaveApps",
      "returnType" : "java.lang.Void",
      "parameters" : [ {
        "name" : "timeout",
        "type" : "brooklyn.util.time.Duration",
        "description" : "How long to wait before giving up on stopping the node",
        "defaultValue" : {
          "nanos" : 3600000000000
        }
      } ],
      "description" : "Stop the Brooklyn process, and any VM created, and unmanage this entity; but if it was managing other applications, leave them running",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.webapp.ControlledDynamicWebAppCluster",
    "name" : "Controlled Dynamic Web-app Cluster",
    "description" : "A cluster of load-balanced web-apps, which can be dynamically re-sized",
    "iconUrl" : "",
    "config" : [ {
      "name" : "cluster.initial.size",
      "type" : "java.lang.Integer",
      "defaultValue" : 1,
      "description" : "Initial cluster size",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "controlleddynamicwebappcluster.controller",
      "type" : "brooklyn.entity.proxy.LoadBalancer",
      "defaultValue" : null,
      "description" : "Controller for the cluster; if null a default will created (using controllerSpec)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "controlleddynamicwebappcluster.controllerSpec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "Spec for creating the controller (if one not supplied explicitly); if null an NGINX instance will be created",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "controlleddynamicwebappcluster.webClusterSpec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "Spec for creating the cluster; if null a DynamicWebAppCluster will be created",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.factory",
      "type" : "brooklyn.entity.basic.ConfigurableEntityFactory",
      "defaultValue" : null,
      "description" : "factory (or closure) to create the web server",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.memberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "Spec for web server entiites to be created",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamicgroup.entityfilter",
      "type" : "com.google.common.base.Predicate",
      "defaultValue" : null,
      "description" : "Filter for entities which will automatically be in the group",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.running",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[all;require=0,100.0%]",
      "description" : "Problems check from children actual states (lifecycle), applied by default to members and children, not checking upness, but requiring by default that none are on-fire",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.up",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[atLeastOne;require=1,0.0%]",
      "description" : "Up check, applied by default to members, requiring at least one present and up",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Add delegate child entities for members of the group",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate.nameFormat",
      "type" : "java.lang.String",
      "defaultValue" : "%s",
      "description" : "Delegate members name format string (Use %s for the original entity display name)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "http.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8080,18080-65535",
      "description" : "HTTP port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "https.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8443,18443-65535",
      "description" : "HTTP port (with SSL/TLS)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.check.hostname.bug",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Check whether hostname is too long and will likely crash Javadue to bug 7089443",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.opts",
      "type" : "java.util.Set",
      "defaultValue" : [ ],
      "description" : "Java command line options",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.sysprops",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Java command line system properties",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.by.context",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Map of context keys (path in user-facing URL, typically without slashes) to archives (e.g. WARs by URL) to deploy, supporting file: and classpath: prefixes)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.named",
      "type" : "java.util.List",
      "defaultValue" : null,
      "description" : "Archive files to deploy, as URL strings (supporting file: and classpath: prefixes); context (path in user-facing URL) will be inferred by name",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.root",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "WAR file to deploy as the ROOT, as URL (supporting file: and classpath: prefixes)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.enabledProtocols",
      "type" : "java.util.Set",
      "defaultValue" : [ "http" ],
      "description" : "List of enabled protocols (e.g. http, https)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.https.ssl",
      "type" : "brooklyn.entity.webapp.HttpsSslConfig",
      "defaultValue" : null,
      "description" : "SSL Configuration for HTTPS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "cluster.first",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is the first member of a cluster",
      "links" : { }
    }, {
      "name" : "cluster.first.entity",
      "type" : "brooklyn.entity.Entity",
      "description" : "The first member of the cluster",
      "links" : { }
    }, {
      "name" : "controlleddynamicwebappcluster.cluster",
      "type" : "brooklyn.entity.webapp.DynamicWebAppCluster",
      "description" : "Underlying web-app cluster",
      "links" : { }
    }, {
      "name" : "controlleddynamicwebappcluster.controller",
      "type" : "brooklyn.entity.proxy.LoadBalancer",
      "description" : "Controller for the cluster; if null a default will created (using controllerSpec)",
      "links" : { }
    }, {
      "name" : "controlleddynamicwebappcluster.controllerSpec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "description" : "Spec for creating the controller (if one not supplied explicitly); if null an NGINX instance will be created",
      "links" : { }
    }, {
      "name" : "controlleddynamicwebappcluster.webClusterSpec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "description" : "Spec for creating the cluster; if null a DynamicWebAppCluster will be created",
      "links" : { }
    }, {
      "name" : "dynamiccluster.factory",
      "type" : "brooklyn.entity.basic.ConfigurableEntityFactory",
      "description" : "factory (or closure) to create the web server",
      "links" : { }
    }, {
      "name" : "dynamiccluster.memberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "description" : "Spec for web server entiites to be created",
      "links" : { }
    }, {
      "name" : "dynamicgroup.running",
      "type" : "java.lang.Boolean",
      "description" : "Whether the entity is running, and will automatically update group membership",
      "links" : { }
    }, {
      "name" : "group.members",
      "type" : "java.util.Collection",
      "description" : "Members of the group",
      "links" : { }
    }, {
      "name" : "group.members.added",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity added to group members",
      "links" : { }
    }, {
      "name" : "group.members.count",
      "type" : "java.lang.Integer",
      "description" : "Number of members",
      "links" : { }
    }, {
      "name" : "group.members.removed",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity removed from group members",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "http.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port",
      "links" : { }
    }, {
      "name" : "https.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port (with SSL/TLS)",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "webapp.deployedWars",
      "type" : "java.util.Set",
      "description" : "Names of archives/contexts that are currently deployed",
      "links" : { }
    }, {
      "name" : "webapp.enabledProtocols",
      "type" : "java.util.Set",
      "description" : "List of enabled protocols (e.g. http, https)",
      "links" : { }
    }, {
      "name" : "webapp.https.ssl",
      "type" : "brooklyn.entity.webapp.HttpsSslConfig",
      "description" : "SSL Configuration for HTTPS",
      "links" : { }
    }, {
      "name" : "webapp.reqs.bytes.received",
      "type" : "java.lang.Long",
      "description" : "Total bytes received by the webserver",
      "links" : { }
    }, {
      "name" : "webapp.reqs.bytes.sent",
      "type" : "java.lang.Long",
      "description" : "Total bytes sent by the webserver",
      "links" : { }
    }, {
      "name" : "webapp.reqs.errors",
      "type" : "java.lang.Integer",
      "description" : "Request errors",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.last",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (last datapoint)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.windowed",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (over time window)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.last",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing, reported by webserver (percentage, last datapoint)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.windowed",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing, reported by webserver (percentage, over time window)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.max",
      "type" : "java.lang.Integer",
      "description" : "Max processing time for any single request, reported by webserver (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.total",
      "type" : "java.lang.Integer",
      "description" : "Total processing time, reported by webserver (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.total",
      "type" : "java.lang.Integer",
      "description" : "Request count",
      "links" : { }
    }, {
      "name" : "webapp.url",
      "type" : "java.lang.String",
      "description" : "URL",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "deploy",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "url",
        "type" : "java.lang.String",
        "description" : "URL of WAR file",
        "defaultValue" : null
      }, {
        "name" : "targetName",
        "type" : "java.lang.String",
        "description" : "context path where WAR should be deployed (/ for ROOT)",
        "defaultValue" : null
      } ],
      "description" : "Deploys the given artifact, from a source URL, to a given deployment filename/context",
      "links" : null
    }, {
      "name" : "redeployAll",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Redeploys all web apps known here across the cluster (e.g. if it gets into an inconsistent state)",
      "links" : null
    }, {
      "name" : "replaceMember",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "memberId",
        "type" : "java.lang.String",
        "description" : "The entity id of a member to be replaced",
        "defaultValue" : null
      } ],
      "description" : "Replaces the entity with the given ID, if it is a member; first adds a new member, then removes this one. Returns id of the new entity; or throws exception if couldn't be replaced.",
      "links" : null
    }, {
      "name" : "rescanEntities",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Rescans all entities to determine whether they match the configured filter.",
      "links" : null
    }, {
      "name" : "resize",
      "returnType" : "java.lang.Integer",
      "parameters" : [ {
        "name" : "desiredSize",
        "type" : "java.lang.Integer",
        "description" : "The new size of the cluster",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the entity (e.g. the number of nodes in a cluster)",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "undeploy",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "targetName",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "Undeploys the given context/artifact",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.nosql.couchbase.CouchbaseCluster",
    "name" : "CouchBase Cluster",
    "description" : "Couchbase is an open source, distributed (shared-nothing architecture) NoSQL document-oriented database that is optimized for interactive applications.",
    "iconUrl" : "",
    "config" : [ {
      "name" : "cluster.initial.quorumSize",
      "type" : "java.lang.Integer",
      "defaultValue" : -1,
      "description" : "Initial cluster quorum size - number of initial nodes that must have been successfully started to report success (if < 0, then use value of INITIAL_SIZE)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cluster.initial.size",
      "type" : "java.lang.Integer",
      "defaultValue" : 1,
      "description" : "Initial cluster size",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.adminPassword",
      "type" : "java.lang.String",
      "defaultValue" : "Password",
      "description" : "Password for the admin user on the node",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.adminUsername",
      "type" : "java.lang.String",
      "defaultValue" : "Administrator",
      "description" : "Username for the admin user on the node",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.cluster.createBuckets",
      "type" : "java.util.List",
      "defaultValue" : null,
      "description" : "a list of all dedicated port buckets to be created on the couchbase cluster",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.cluster.delayBeforeAdvertisingCluster",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "Delay after cluster is started before checking and advertising its availability",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.cluster.intialQuorumSize",
      "type" : "java.lang.Integer",
      "defaultValue" : -1,
      "description" : "Initial cluster quorum size - number of initial nodes that must have been successfully started to report success (if < 0, then use value of INITIAL_SIZE)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.cluster.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Optional name for this cluster",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.cluster.postStartStabilizationDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "Delay after nodes have been started before treating it as a cluster",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.cluster.replicationConfiguration",
      "type" : "java.util.List",
      "defaultValue" : null,
      "description" : "List of replication rules to configure, each rule including target (id of another cluster) and mode (unidirectional or bidirectional)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.availabilityZones",
      "type" : "java.util.Collection",
      "defaultValue" : null,
      "description" : "availability zones to use (if non-null, overrides other configuration)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.customChildFlags",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Additional flags to be passed to children when they are being created",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.factory",
      "type" : "brooklyn.entity.basic.EntityFactory",
      "defaultValue" : null,
      "description" : "factory for creating new cluster members",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.firstmemberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "entity spec for creating new cluster members, used for the very first member if different",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.memberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "entity spec for creating new cluster members",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.numAvailabilityZones",
      "type" : "java.lang.Integer",
      "defaultValue" : null,
      "description" : "number of availability zones to use (will attempt to auto-discover this number)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.quarantineFailedEntities",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "If true, will quarantine entities that fail to start; if false, will get rid of them (i.e. delete them)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.removalstrategy",
      "type" : "com.google.common.base.Function",
      "defaultValue" : null,
      "description" : "strategy for deciding what to remove when down-sizing",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.enable",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Whether to use availability zones, or just deploy everything into the generic location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.failureDetector",
      "type" : "brooklyn.entity.group.DynamicCluster$ZoneFailureDetector",
      "defaultValue" : "brooklyn.entity.group.zoneaware.ProportionalZoneFailureDetector@77acc39c",
      "description" : "Zone failure detector",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.placementStrategy",
      "type" : "brooklyn.entity.group.DynamicCluster$NodePlacementStrategy",
      "defaultValue" : "brooklyn.entity.group.zoneaware.BalancingNodePlacementStrategy@45498134",
      "description" : "Node placement strategy",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.running",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[all;require=0,100.0%]",
      "description" : "Problems check from children actual states (lifecycle), applied by default to members and children, not checking upness, but requiring by default that none are on-fire",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.up",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[atLeastOne;require=1,0.0%]",
      "description" : "Up check, applied by default to members, requiring at least one present and up",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Add delegate child entities for members of the group",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate.nameFormat",
      "type" : "java.lang.String",
      "defaultValue" : "%s",
      "description" : "Delegate members name format string (Use %s for the original entity display name)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "cluster.entity",
      "type" : "brooklyn.entity.Entity",
      "description" : "The cluster an entity is a member of",
      "links" : { }
    }, {
      "name" : "cluster.first",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is the first member of a cluster",
      "links" : { }
    }, {
      "name" : "cluster.first.entity",
      "type" : "brooklyn.entity.Entity",
      "description" : "The first member of the cluster",
      "links" : { }
    }, {
      "name" : "cluster.member",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is a member of a cluster",
      "links" : { }
    }, {
      "name" : "coucbase.cluster.actualClusterSize",
      "type" : "java.lang.Integer",
      "description" : "returns the actual number of nodes in the cluster",
      "links" : { }
    }, {
      "name" : "couchbase.cluster.bucketCreationInProgress",
      "type" : "java.lang.Boolean",
      "description" : "Indicates that a bucket is currently being created, andfurther bucket creation should be deferred",
      "links" : { }
    }, {
      "name" : "couchbase.cluster.buckets",
      "type" : "java.util.List",
      "description" : "Names of all the buckets the couchbase cluster",
      "links" : { }
    }, {
      "name" : "couchbase.cluster.clusterEntities",
      "type" : "java.util.Set",
      "description" : "the set of service up nodes",
      "links" : { }
    }, {
      "name" : "couchbase.cluster.connection.url",
      "type" : "java.lang.String",
      "description" : "Couchbase-style URL to connect to the cluster (e.g. http://127.0.0.1:8091/ or couchbase://10.0.0.1,10.0.0.2/)",
      "links" : { }
    }, {
      "name" : "couchbase.cluster.isClusterInitialized",
      "type" : "java.lang.Boolean",
      "description" : "flag to emit if the couchbase cluster was intialized",
      "links" : { }
    }, {
      "name" : "couchbase.cluster.node.addresses",
      "type" : "java.util.List",
      "description" : "List of host:port of all active nodes in the cluster (http admin port, and public hostname/IP)",
      "links" : { }
    }, {
      "name" : "couchbase.cluster.primaryNode",
      "type" : "brooklyn.entity.Entity",
      "description" : "The primary couchbase node to query and issue add-server and rebalance on",
      "links" : { }
    }, {
      "name" : "couchbase.stats.cluster.per.node.cmd.get",
      "type" : "java.lang.Double",
      "description" : "Average across cluster for pools/nodes/<current node>/interestingStats/cmd_get",
      "links" : { }
    }, {
      "name" : "couchbase.stats.cluster.per.node.couch.docs.actual.disk.size",
      "type" : "java.lang.Long",
      "description" : "Average across cluster for pools/nodes/<current node>/interestingStats/couch_docs_actual_disk_size",
      "links" : { }
    }, {
      "name" : "couchbase.stats.cluster.per.node.couch.docs.data.size",
      "type" : "java.lang.Long",
      "description" : "Average across cluster for pools/nodes/<current node>/interestingStats/couch_docs_data_size",
      "links" : { }
    }, {
      "name" : "couchbase.stats.cluster.per.node.couch.views.actual.disk.size",
      "type" : "java.lang.Long",
      "description" : "Average across cluster for pools/nodes/<current node>/interestingStats/couch_views_actual_disk_size",
      "links" : { }
    }, {
      "name" : "couchbase.stats.cluster.per.node.couch.views.data.size",
      "type" : "java.lang.Long",
      "description" : "Average across cluster for pools/nodes/<current node>/interestingStats/couch_views_data_size",
      "links" : { }
    }, {
      "name" : "couchbase.stats.cluster.per.node.curr.items",
      "type" : "java.lang.Double",
      "description" : "Average across cluster for pools/nodes/<current node>/interestingStats/curr_items",
      "links" : { }
    }, {
      "name" : "couchbase.stats.cluster.per.node.curr.items.tot",
      "type" : "java.lang.Double",
      "description" : "Average across cluster for pools/nodes/<current node>/interestingStats/curr_items_tot",
      "links" : { }
    }, {
      "name" : "couchbase.stats.cluster.per.node.ep.bg.fetched",
      "type" : "java.lang.Double",
      "description" : "Average across cluster for pools/nodes/<current node>/interestingStats/ep_bg_fetched",
      "links" : { }
    }, {
      "name" : "couchbase.stats.cluster.per.node.get.hits",
      "type" : "java.lang.Double",
      "description" : "Average across cluster for pools/nodes/<current node>/interestingStats/get_hits",
      "links" : { }
    }, {
      "name" : "couchbase.stats.cluster.per.node.mem.used",
      "type" : "java.lang.Long",
      "description" : "Average across cluster for pools/nodes/<current node>/interestingStats/mem_used",
      "links" : { }
    }, {
      "name" : "couchbase.stats.cluster.per.node.ops",
      "type" : "java.lang.Double",
      "description" : "Average across cluster for pools/nodes/<current node>/interestingStats/ops",
      "links" : { }
    }, {
      "name" : "couchbase.stats.cluster.per.node.vb.replica.curr.items",
      "type" : "java.lang.Double",
      "description" : "Average across cluster for pools/nodes/<current node>/interestingStats/vb_replica_curr_items",
      "links" : { }
    }, {
      "name" : "dynamiccluster.entityQuarantined",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity failed to start, and has been quarantined",
      "links" : { }
    }, {
      "name" : "dynamiccluster.failedSubLocations",
      "type" : "java.util.Set",
      "description" : "Sub locations that seem to have failed",
      "links" : { }
    }, {
      "name" : "dynamiccluster.quarantineGroup",
      "type" : "brooklyn.entity.group.QuarantineGroup",
      "description" : "Group of quarantined entities that failed to start",
      "links" : { }
    }, {
      "name" : "dynamiccluster.subLocations",
      "type" : "java.util.List",
      "description" : "Locations for each availability zone to use",
      "links" : { }
    }, {
      "name" : "group.members",
      "type" : "java.util.Collection",
      "description" : "Members of the group",
      "links" : { }
    }, {
      "name" : "group.members.added",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity added to group members",
      "links" : { }
    }, {
      "name" : "group.members.count",
      "type" : "java.lang.Integer",
      "description" : "Number of members",
      "links" : { }
    }, {
      "name" : "group.members.removed",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity removed from group members",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "replaceMember",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "memberId",
        "type" : "java.lang.String",
        "description" : "The entity id of a member to be replaced",
        "defaultValue" : null
      } ],
      "description" : "Replaces the entity with the given ID, if it is a member; first adds a new member, then removes this one. Returns id of the new entity; or throws exception if couldn't be replaced.",
      "links" : null
    }, {
      "name" : "resize",
      "returnType" : "java.lang.Integer",
      "parameters" : [ {
        "name" : "desiredSize",
        "type" : "java.lang.Integer",
        "description" : "The new size of the cluster",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the entity (e.g. the number of nodes in a cluster)",
      "links" : null
    }, {
      "name" : "resizeByDelta",
      "returnType" : "java.util.Collection",
      "parameters" : [ {
        "name" : "delta",
        "type" : "int",
        "description" : "The change in number of nodes",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the cluster.",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.nosql.couchbase.CouchbaseNode",
    "defaultVersion" : "3.0.0",
    "name" : "CouchBase Node",
    "description" : "Couchbase Server is an open source, distributed (shared-nothing architecture) NoSQL document-oriented database that is optimized for interactive applications.",
    "iconUrl" : "",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "couchbase.adminPassword",
      "type" : "java.lang.String",
      "defaultValue" : "Password",
      "description" : "Password for the admin user on the node",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.adminUsername",
      "type" : "java.lang.String",
      "defaultValue" : "Administrator",
      "description" : "Username for the admin user on the node",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.apiPort",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8092-65535",
      "description" : "Couchbase API Port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.clientInterfaceProxy",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "11211",
      "description" : "Client interface (proxy)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.clusterInitRamSize",
      "type" : "java.lang.Integer",
      "defaultValue" : 300,
      "description" : "initial ram size of the cluster",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.enterprise.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Whether to use Couchbase Enterprise; if false uses the community version. Defaults to true.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.erlangPortMapper",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "4369",
      "description" : "Erlang Port Mapper Daemon Listener Port (epmd)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.incomingSslProxy",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "11214",
      "description" : "Incoming SSL Proxy",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.internalBucketPort",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "11209",
      "description" : "Internal Bucket Port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.internalCapiHttpsForSsl",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "18092",
      "description" : "Internal CAPI HTTPS for SSL",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.internalExternalBucketPort",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "11210",
      "description" : "Internal/External Bucket Port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.internalOutgoingSslProxy",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "11215",
      "description" : "Internal Outgoing SSL Proxy",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.internalRestHttpsForSsl",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "18091",
      "description" : "Internal REST HTTPS for SSL",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.nodeDataExchangePortRangeEnd",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "21199-65535",
      "description" : "Node data exchange Port Range End",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.nodeDataExchangePortRangeStart",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "21100-65535",
      "description" : "Node data exchange Port Range Start",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchbase.webAdminPort",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8091-65535",
      "description" : "Web Administration Port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://packages.couchbase.com/releases/${version}/couchbase-server-${driver.communityOrEnterprise}${driver.downloadLinkPreVersionSeparator}${version}${driver.downloadLinkOsTagWithPrefix}",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "3.0.0",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "couchbase.apiPort",
      "type" : "java.lang.Integer",
      "description" : "Couchbase API Port",
      "links" : { }
    }, {
      "name" : "couchbase.clientInterfaceProxy",
      "type" : "java.lang.Integer",
      "description" : "Client interface (proxy)",
      "links" : { }
    }, {
      "name" : "couchbase.clusterInitRamSize",
      "type" : "java.lang.Integer",
      "description" : "initial ram size of the cluster",
      "links" : { }
    }, {
      "name" : "couchbase.erlangPortMapper",
      "type" : "java.lang.Integer",
      "description" : "Erlang Port Mapper Daemon Listener Port (epmd)",
      "links" : { }
    }, {
      "name" : "couchbase.incomingSslProxy",
      "type" : "java.lang.Integer",
      "description" : "Incoming SSL Proxy",
      "links" : { }
    }, {
      "name" : "couchbase.internalBucketPort",
      "type" : "java.lang.Integer",
      "description" : "Internal Bucket Port",
      "links" : { }
    }, {
      "name" : "couchbase.internalCapiHttpsForSsl",
      "type" : "java.lang.Integer",
      "description" : "Internal CAPI HTTPS for SSL",
      "links" : { }
    }, {
      "name" : "couchbase.internalExternalBucketPort",
      "type" : "java.lang.Integer",
      "description" : "Internal/External Bucket Port",
      "links" : { }
    }, {
      "name" : "couchbase.internalOutgoingSslProxy",
      "type" : "java.lang.Integer",
      "description" : "Internal Outgoing SSL Proxy",
      "links" : { }
    }, {
      "name" : "couchbase.internalRestHttpsForSsl",
      "type" : "java.lang.Integer",
      "description" : "Internal REST HTTPS for SSL",
      "links" : { }
    }, {
      "name" : "couchbase.isInCluster",
      "type" : "java.lang.Boolean",
      "description" : "flag to determine if the current couchbase node has been added to a cluster, including being the first / primary node",
      "links" : { }
    }, {
      "name" : "couchbase.isPrimaryNode",
      "type" : "java.lang.Boolean",
      "description" : "flag to determine if the current couchbase node is the primary node for the cluster",
      "links" : { }
    }, {
      "name" : "couchbase.nodeDataExchangePortRangeEnd",
      "type" : "java.lang.Integer",
      "description" : "Node data exchange Port Range End",
      "links" : { }
    }, {
      "name" : "couchbase.nodeDataExchangePortRangeStart",
      "type" : "java.lang.Integer",
      "description" : "Node data exchange Port Range Start",
      "links" : { }
    }, {
      "name" : "couchbase.rebalance.status",
      "type" : "java.lang.String",
      "description" : "Displays the current rebalance status from pools/nodes/rebalanceStatus",
      "links" : { }
    }, {
      "name" : "couchbase.stats.cmd.get",
      "type" : "java.lang.Double",
      "description" : "Retrieved from pools/nodes/<current node>/interestingStats/cmd_get",
      "links" : { }
    }, {
      "name" : "couchbase.stats.couch.docs.actual.disk.size",
      "type" : "java.lang.Long",
      "description" : "Retrieved from pools/nodes/<current node>/interestingStats/couch_docs_actual_disk_size",
      "links" : { }
    }, {
      "name" : "couchbase.stats.couch.docs.data.size",
      "type" : "java.lang.Long",
      "description" : "Retrieved from pools/nodes/<current node>/interestingStats/couch_docs_data_size",
      "links" : { }
    }, {
      "name" : "couchbase.stats.couch.views.actual.disk.size",
      "type" : "java.lang.Long",
      "description" : "Retrieved from pools/nodes/<current node>/interestingStats/couch_views_actual_disk_size",
      "links" : { }
    }, {
      "name" : "couchbase.stats.couch.views.data.size",
      "type" : "java.lang.Long",
      "description" : "Retrieved from pools/nodes/<current node>/interestingStats/couch_views_data_size",
      "links" : { }
    }, {
      "name" : "couchbase.stats.curr.items",
      "type" : "java.lang.Long",
      "description" : "Retrieved from pools/nodes/<current node>/interestingStats/curr_items",
      "links" : { }
    }, {
      "name" : "couchbase.stats.curr.items.tot",
      "type" : "java.lang.Long",
      "description" : "Retrieved from pools/nodes/<current node>/interestingStats/curr_items_tot",
      "links" : { }
    }, {
      "name" : "couchbase.stats.ep.bg.fetched",
      "type" : "java.lang.Long",
      "description" : "Retrieved from pools/nodes/<current node>/interestingStats/ep_bg_fetched",
      "links" : { }
    }, {
      "name" : "couchbase.stats.get.hits",
      "type" : "java.lang.Long",
      "description" : "Retrieved from pools/nodes/<current node>/interestingStats/get_hits",
      "links" : { }
    }, {
      "name" : "couchbase.stats.mem.used",
      "type" : "java.lang.Long",
      "description" : "Retrieved from pools/nodes/<current node>/interestingStats/mem_used",
      "links" : { }
    }, {
      "name" : "couchbase.stats.ops",
      "type" : "java.lang.Double",
      "description" : "Retrieved from pools/nodes/<current node>/interestingStats/ops",
      "links" : { }
    }, {
      "name" : "couchbase.stats.vb.replica.curr.items",
      "type" : "java.lang.Long",
      "description" : "Retrieved from pools/nodes/<current node>/interestingStats/vb_replica_curr_items",
      "links" : { }
    }, {
      "name" : "couchbase.webAdminPort",
      "type" : "java.lang.Integer",
      "description" : "Web Administration Port",
      "links" : { }
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "main.uri",
      "type" : "java.net.URI",
      "description" : "Main URI for contacting the service/endpoint offered by this entity",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "addReplicationRule",
      "returnType" : "java.lang.Void",
      "parameters" : [ {
        "name" : "fromBucket",
        "type" : "java.lang.String",
        "description" : "Bucket to be replicated",
        "defaultValue" : null
      }, {
        "name" : "toCluster",
        "type" : "java.lang.Object",
        "description" : "Entity (or ID) of the cluster to which this should replicate",
        "defaultValue" : null
      }, {
        "name" : "toBucket",
        "type" : "java.lang.String",
        "description" : "Destination bucket for replication in the toCluster, defaulting to the same as the fromBucket",
        "defaultValue" : null
      } ],
      "description" : "Adds a replication rule from the indicated bucket on the cluster where this node is located to the indicated cluster and optional destination bucket",
      "links" : null
    }, {
      "name" : "bucketCreate",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "bucketName",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      }, {
        "name" : "bucketType",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      }, {
        "name" : "bucketPort",
        "type" : "java.lang.Integer",
        "description" : null,
        "defaultValue" : null
      }, {
        "name" : "bucketRamSize",
        "type" : "java.lang.Integer",
        "description" : null,
        "defaultValue" : null
      }, {
        "name" : "bucketReplica",
        "type" : "java.lang.Integer",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "create a new bucket",
      "links" : null
    }, {
      "name" : "rebalance",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "rebalance the couchbase cluster",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "serverAdd",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "serverHostname",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      }, {
        "name" : "username",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      }, {
        "name" : "password",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "add a server to a cluster",
      "links" : null
    }, {
      "name" : "serverAddAndRebalance",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "serverHostname",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      }, {
        "name" : "username",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      }, {
        "name" : "password",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "add a server to a cluster, and immediately rebalances",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.nosql.couchdb.CouchDBNode",
    "defaultVersion" : "1.2.1",
    "name" : "CouchDB Node",
    "description" : "Apache CouchDB is a database that uses JSON for documents, JavaScript for MapReduce queries, and regular HTTP for an API",
    "iconUrl" : "classpath:///couchdb-logo.png",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "couchdb.cluster.name",
      "type" : "java.lang.String",
      "defaultValue" : "BrooklynCluster",
      "description" : "Name of the CouchDB cluster",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchdb.config.fileName",
      "type" : "java.lang.String",
      "defaultValue" : "local.ini",
      "description" : "Name for the copied config file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchdb.config.templateUrl",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/nosql/couchdb/couch.ini",
      "description" : "Template file (in freemarker format) for the couchdb config file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "couchdb.uri.templateUrl",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/nosql/couchdb/couch.uri",
      "description" : "Template file (in freemarker format) for the couchdb URI file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "erlang.version",
      "type" : "java.lang.String",
      "defaultValue" : "R15B",
      "description" : "Erlang runtime version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "http.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8080,18080-65535",
      "description" : "HTTP port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "https.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8443,18443-65535",
      "description" : "HTTP port (with SSL/TLS)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "1.2.1",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.enabledProtocols",
      "type" : "java.util.Set",
      "defaultValue" : [ "http" ],
      "description" : "List of enabled protocols (e.g. http, https)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.https.ssl",
      "type" : "brooklyn.entity.webapp.HttpsSslConfig",
      "defaultValue" : null,
      "description" : "SSL Configuration for HTTPS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "couchdb.cluster.name",
      "type" : "java.lang.String",
      "description" : "Name of the CouchDB cluster",
      "links" : { }
    }, {
      "name" : "couchdb.config.fileName",
      "type" : "java.lang.String",
      "description" : "Name for the copied config file",
      "links" : { }
    }, {
      "name" : "couchdb.config.templateUrl",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the couchdb config file",
      "links" : { }
    }, {
      "name" : "couchdb.uri.templateUrl",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the couchdb URI file",
      "links" : { }
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "http.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port",
      "links" : { }
    }, {
      "name" : "https.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port (with SSL/TLS)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    }, {
      "name" : "webapp.enabledProtocols",
      "type" : "java.util.Set",
      "description" : "List of enabled protocols (e.g. http, https)",
      "links" : { }
    }, {
      "name" : "webapp.https.ssl",
      "type" : "brooklyn.entity.webapp.HttpsSslConfig",
      "description" : "SSL Configuration for HTTPS",
      "links" : { }
    }, {
      "name" : "webapp.reqs.bytes.received",
      "type" : "java.lang.Long",
      "description" : "Total bytes received by the webserver",
      "links" : { }
    }, {
      "name" : "webapp.reqs.bytes.sent",
      "type" : "java.lang.Long",
      "description" : "Total bytes sent by the webserver",
      "links" : { }
    }, {
      "name" : "webapp.reqs.errors",
      "type" : "java.lang.Integer",
      "description" : "Request errors",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.last",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (last datapoint)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.windowed",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (over time window)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.last",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing, reported by webserver (percentage, last datapoint)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.windowed",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing, reported by webserver (percentage, over time window)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.max",
      "type" : "java.lang.Integer",
      "description" : "Max processing time for any single request, reported by webserver (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.total",
      "type" : "java.lang.Integer",
      "description" : "Total processing time, reported by webserver (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.total",
      "type" : "java.lang.Integer",
      "description" : "Request count",
      "links" : { }
    }, {
      "name" : "webapp.url",
      "type" : "java.lang.String",
      "description" : "URL",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.webapp.DynamicWebAppCluster",
    "name" : "Dynamic Web-app Cluster",
    "description" : "A cluster of web-apps, which can be dynamically re-sized; this does not include a load-balancer",
    "iconUrl" : "",
    "config" : [ {
      "name" : "cluster.initial.quorumSize",
      "type" : "java.lang.Integer",
      "defaultValue" : -1,
      "description" : "Initial cluster quorum size - number of initial nodes that must have been successfully started to report success (if < 0, then use value of INITIAL_SIZE)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cluster.initial.size",
      "type" : "java.lang.Integer",
      "defaultValue" : 1,
      "description" : "Initial cluster size",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.availabilityZones",
      "type" : "java.util.Collection",
      "defaultValue" : null,
      "description" : "availability zones to use (if non-null, overrides other configuration)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.customChildFlags",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Additional flags to be passed to children when they are being created",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.factory",
      "type" : "brooklyn.entity.basic.EntityFactory",
      "defaultValue" : null,
      "description" : "factory for creating new cluster members",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.firstmemberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "entity spec for creating new cluster members, used for the very first member if different",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.memberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "entity spec for creating new cluster members",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.numAvailabilityZones",
      "type" : "java.lang.Integer",
      "defaultValue" : null,
      "description" : "number of availability zones to use (will attempt to auto-discover this number)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.quarantineFailedEntities",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "If true, will quarantine entities that fail to start; if false, will get rid of them (i.e. delete them)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.removalstrategy",
      "type" : "com.google.common.base.Function",
      "defaultValue" : null,
      "description" : "strategy for deciding what to remove when down-sizing",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.enable",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Whether to use availability zones, or just deploy everything into the generic location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.failureDetector",
      "type" : "brooklyn.entity.group.DynamicCluster$ZoneFailureDetector",
      "defaultValue" : "brooklyn.entity.group.zoneaware.ProportionalZoneFailureDetector@77acc39c",
      "description" : "Zone failure detector",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.placementStrategy",
      "type" : "brooklyn.entity.group.DynamicCluster$NodePlacementStrategy",
      "defaultValue" : "brooklyn.entity.group.zoneaware.BalancingNodePlacementStrategy@45498134",
      "description" : "Node placement strategy",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.running",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[all;require=0,100.0%]",
      "description" : "Problems check from children actual states (lifecycle), applied by default to members and children, not checking upness, but requiring by default that none are on-fire",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.up",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[atLeastOne;require=1,0.0%]",
      "description" : "Up check, applied by default to members, requiring at least one present and up",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Add delegate child entities for members of the group",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate.nameFormat",
      "type" : "java.lang.String",
      "defaultValue" : "%s",
      "description" : "Delegate members name format string (Use %s for the original entity display name)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "http.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8080,18080-65535",
      "description" : "HTTP port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "https.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8443,18443-65535",
      "description" : "HTTP port (with SSL/TLS)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.check.hostname.bug",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Check whether hostname is too long and will likely crash Javadue to bug 7089443",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.opts",
      "type" : "java.util.Set",
      "defaultValue" : [ ],
      "description" : "Java command line options",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.sysprops",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Java command line system properties",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.by.context",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Map of context keys (path in user-facing URL, typically without slashes) to archives (e.g. WARs by URL) to deploy, supporting file: and classpath: prefixes)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.named",
      "type" : "java.util.List",
      "defaultValue" : null,
      "description" : "Archive files to deploy, as URL strings (supporting file: and classpath: prefixes); context (path in user-facing URL) will be inferred by name",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.root",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "WAR file to deploy as the ROOT, as URL (supporting file: and classpath: prefixes)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.enabledProtocols",
      "type" : "java.util.Set",
      "defaultValue" : [ "http" ],
      "description" : "List of enabled protocols (e.g. http, https)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.https.ssl",
      "type" : "brooklyn.entity.webapp.HttpsSslConfig",
      "defaultValue" : null,
      "description" : "SSL Configuration for HTTPS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "cluster.entity",
      "type" : "brooklyn.entity.Entity",
      "description" : "The cluster an entity is a member of",
      "links" : { }
    }, {
      "name" : "cluster.first",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is the first member of a cluster",
      "links" : { }
    }, {
      "name" : "cluster.first.entity",
      "type" : "brooklyn.entity.Entity",
      "description" : "The first member of the cluster",
      "links" : { }
    }, {
      "name" : "cluster.member",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is a member of a cluster",
      "links" : { }
    }, {
      "name" : "dynamiccluster.entityQuarantined",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity failed to start, and has been quarantined",
      "links" : { }
    }, {
      "name" : "dynamiccluster.failedSubLocations",
      "type" : "java.util.Set",
      "description" : "Sub locations that seem to have failed",
      "links" : { }
    }, {
      "name" : "dynamiccluster.quarantineGroup",
      "type" : "brooklyn.entity.group.QuarantineGroup",
      "description" : "Group of quarantined entities that failed to start",
      "links" : { }
    }, {
      "name" : "dynamiccluster.subLocations",
      "type" : "java.util.List",
      "description" : "Locations for each availability zone to use",
      "links" : { }
    }, {
      "name" : "group.members",
      "type" : "java.util.Collection",
      "description" : "Members of the group",
      "links" : { }
    }, {
      "name" : "group.members.added",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity added to group members",
      "links" : { }
    }, {
      "name" : "group.members.count",
      "type" : "java.lang.Integer",
      "description" : "Number of members",
      "links" : { }
    }, {
      "name" : "group.members.removed",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity removed from group members",
      "links" : { }
    }, {
      "name" : "http.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port",
      "links" : { }
    }, {
      "name" : "https.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port (with SSL/TLS)",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "webapp.deployedWars",
      "type" : "java.util.Set",
      "description" : "Names of archives/contexts that are currently deployed",
      "links" : { }
    }, {
      "name" : "webapp.enabledProtocols",
      "type" : "java.util.Set",
      "description" : "List of enabled protocols (e.g. http, https)",
      "links" : { }
    }, {
      "name" : "webapp.https.ssl",
      "type" : "brooklyn.entity.webapp.HttpsSslConfig",
      "description" : "SSL Configuration for HTTPS",
      "links" : { }
    }, {
      "name" : "webapp.reqs.bytes.received",
      "type" : "java.lang.Long",
      "description" : "Total bytes received by the webserver",
      "links" : { }
    }, {
      "name" : "webapp.reqs.bytes.sent",
      "type" : "java.lang.Long",
      "description" : "Total bytes sent by the webserver",
      "links" : { }
    }, {
      "name" : "webapp.reqs.errors",
      "type" : "java.lang.Integer",
      "description" : "Request errors",
      "links" : { }
    }, {
      "name" : "webapp.reqs.errors.perNode",
      "type" : "java.lang.Integer",
      "description" : "Cluster entity request error average",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.last",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (last datapoint)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.last.perNode",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (last datapoint) averaged over all nodes",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.windowed",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (over time window)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.windowed.perNode",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (over time window) averaged over all nodes",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.last",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing, reported by webserver (percentage, last datapoint)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.windowed",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing, reported by webserver (percentage, over time window)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.windowed.perNode",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing reported by webserver (percentage, over time window) averaged over all nodes",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.max",
      "type" : "java.lang.Integer",
      "description" : "Max processing time for any single request, reported by webserver (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.perNode",
      "type" : "java.lang.Integer",
      "description" : "Total processing time per node (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.total",
      "type" : "java.lang.Integer",
      "description" : "Total processing time, reported by webserver (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.total",
      "type" : "java.lang.Integer",
      "description" : "Request count",
      "links" : { }
    }, {
      "name" : "webapp.reqs.total.perNode",
      "type" : "java.lang.Double",
      "description" : "Cluster entity request average",
      "links" : { }
    }, {
      "name" : "webapp.url",
      "type" : "java.lang.String",
      "description" : "URL",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "deploy",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "url",
        "type" : "java.lang.String",
        "description" : "URL of WAR file",
        "defaultValue" : null
      }, {
        "name" : "targetName",
        "type" : "java.lang.String",
        "description" : "context path where WAR should be deployed (/ for ROOT)",
        "defaultValue" : null
      } ],
      "description" : "Deploys the given artifact, from a source URL, to a given deployment filename/context",
      "links" : null
    }, {
      "name" : "redeployAll",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Redeploys all web apps known here across the cluster (e.g. if it gets into an inconsistent state)",
      "links" : null
    }, {
      "name" : "replaceMember",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "memberId",
        "type" : "java.lang.String",
        "description" : "The entity id of a member to be replaced",
        "defaultValue" : null
      } ],
      "description" : "Replaces the entity with the given ID, if it is a member; first adds a new member, then removes this one. Returns id of the new entity; or throws exception if couldn't be replaced.",
      "links" : null
    }, {
      "name" : "resize",
      "returnType" : "java.lang.Integer",
      "parameters" : [ {
        "name" : "desiredSize",
        "type" : "java.lang.Integer",
        "description" : "The new size of the cluster",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the entity (e.g. the number of nodes in a cluster)",
      "links" : null
    }, {
      "name" : "resizeByDelta",
      "returnType" : "java.util.Collection",
      "parameters" : [ {
        "name" : "delta",
        "type" : "int",
        "description" : "The change in number of nodes",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the cluster.",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "undeploy",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "targetName",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "Undeploys the given context/artifact",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.nosql.elasticsearch.ElasticSearchCluster",
    "name" : "Elastic Search Cluster",
    "description" : "Elasticsearch is an open-source search server based on Lucene. It provides a distributed, multitenant-capable full-text search engine with a RESTful web interface and schema-free JSON documents.",
    "iconUrl" : "",
    "config" : [ {
      "name" : "cluster.initial.quorumSize",
      "type" : "java.lang.Integer",
      "defaultValue" : -1,
      "description" : "Initial cluster quorum size - number of initial nodes that must have been successfully started to report success (if < 0, then use value of INITIAL_SIZE)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cluster.initial.size",
      "type" : "java.lang.Integer",
      "defaultValue" : 1,
      "description" : "Initial cluster size",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.availabilityZones",
      "type" : "java.util.Collection",
      "defaultValue" : null,
      "description" : "availability zones to use (if non-null, overrides other configuration)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.customChildFlags",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Additional flags to be passed to children when they are being created",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.factory",
      "type" : "brooklyn.entity.basic.EntityFactory",
      "defaultValue" : null,
      "description" : "factory for creating new cluster members",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.firstmemberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "entity spec for creating new cluster members, used for the very first member if different",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.memberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "entity spec for creating new cluster members",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.numAvailabilityZones",
      "type" : "java.lang.Integer",
      "defaultValue" : null,
      "description" : "number of availability zones to use (will attempt to auto-discover this number)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.quarantineFailedEntities",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "If true, will quarantine entities that fail to start; if false, will get rid of them (i.e. delete them)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.removalstrategy",
      "type" : "com.google.common.base.Function",
      "defaultValue" : null,
      "description" : "strategy for deciding what to remove when down-sizing",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.enable",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Whether to use availability zones, or just deploy everything into the generic location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.failureDetector",
      "type" : "brooklyn.entity.group.DynamicCluster$ZoneFailureDetector",
      "defaultValue" : "brooklyn.entity.group.zoneaware.ProportionalZoneFailureDetector@77acc39c",
      "description" : "Zone failure detector",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.placementStrategy",
      "type" : "brooklyn.entity.group.DynamicCluster$NodePlacementStrategy",
      "defaultValue" : "brooklyn.entity.group.zoneaware.BalancingNodePlacementStrategy@45498134",
      "description" : "Node placement strategy",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "elasticsearch.cluster.name",
      "type" : "java.lang.String",
      "defaultValue" : "BrooklynCluster",
      "description" : "Name of the ElasticSearch cluster",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.running",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[all;require=0,100.0%]",
      "description" : "Problems check from children actual states (lifecycle), applied by default to members and children, not checking upness, but requiring by default that none are on-fire",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.up",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[atLeastOne;require=1,0.0%]",
      "description" : "Up check, applied by default to members, requiring at least one present and up",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Add delegate child entities for members of the group",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate.nameFormat",
      "type" : "java.lang.String",
      "defaultValue" : "%s",
      "description" : "Delegate members name format string (Use %s for the original entity display name)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "cluster.entity",
      "type" : "brooklyn.entity.Entity",
      "description" : "The cluster an entity is a member of",
      "links" : { }
    }, {
      "name" : "cluster.first",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is the first member of a cluster",
      "links" : { }
    }, {
      "name" : "cluster.first.entity",
      "type" : "brooklyn.entity.Entity",
      "description" : "The first member of the cluster",
      "links" : { }
    }, {
      "name" : "cluster.member",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is a member of a cluster",
      "links" : { }
    }, {
      "name" : "dynamiccluster.entityQuarantined",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity failed to start, and has been quarantined",
      "links" : { }
    }, {
      "name" : "dynamiccluster.failedSubLocations",
      "type" : "java.util.Set",
      "description" : "Sub locations that seem to have failed",
      "links" : { }
    }, {
      "name" : "dynamiccluster.quarantineGroup",
      "type" : "brooklyn.entity.group.QuarantineGroup",
      "description" : "Group of quarantined entities that failed to start",
      "links" : { }
    }, {
      "name" : "dynamiccluster.subLocations",
      "type" : "java.util.List",
      "description" : "Locations for each availability zone to use",
      "links" : { }
    }, {
      "name" : "elasticsearch.cluster.name",
      "type" : "java.lang.String",
      "description" : "Name of the ElasticSearch cluster",
      "links" : { }
    }, {
      "name" : "group.members",
      "type" : "java.util.Collection",
      "description" : "Members of the group",
      "links" : { }
    }, {
      "name" : "group.members.added",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity added to group members",
      "links" : { }
    }, {
      "name" : "group.members.count",
      "type" : "java.lang.Integer",
      "description" : "Number of members",
      "links" : { }
    }, {
      "name" : "group.members.removed",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity removed from group members",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "replaceMember",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "memberId",
        "type" : "java.lang.String",
        "description" : "The entity id of a member to be replaced",
        "defaultValue" : null
      } ],
      "description" : "Replaces the entity with the given ID, if it is a member; first adds a new member, then removes this one. Returns id of the new entity; or throws exception if couldn't be replaced.",
      "links" : null
    }, {
      "name" : "resize",
      "returnType" : "java.lang.Integer",
      "parameters" : [ {
        "name" : "desiredSize",
        "type" : "java.lang.Integer",
        "description" : "The new size of the cluster",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the entity (e.g. the number of nodes in a cluster)",
      "links" : null
    }, {
      "name" : "resizeByDelta",
      "returnType" : "java.util.Collection",
      "parameters" : [ {
        "name" : "delta",
        "type" : "int",
        "description" : "The change in number of nodes",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the cluster.",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.nosql.elasticsearch.ElasticSearchNode",
    "defaultVersion" : "1.2.1",
    "name" : "Elastic Search Node",
    "description" : "Elasticsearch is an open-source search server based on Lucene. It provides a distributed, multitenant-capable full-text search engine with a RESTful web interface and schema-free JSON documents.",
    "iconUrl" : "",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-${version}.tar.gz",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "elasticsearch.node.UNicast.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Indicates whether zen discovery unicast should be enabled for a node",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "elasticsearch.node.cluster.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Cluster name (or elasticsearch selected if not set",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "elasticsearch.node.data.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for writing data files",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "elasticsearch.node.log.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for writing log files",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "elasticsearch.node.multicast.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Indicates whether zen discovery multicast should be enabled for a node",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "elasticsearch.node.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Node name (or randomly selected if not set",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "elasticsearch.node.template.configuration.url",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URL where the elasticsearch configuration file (in freemarker format) can be found",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "http.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "9200-65535",
      "description" : "HTTP port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "1.2.1",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "datastore.url",
      "type" : "java.lang.String",
      "description" : "Primary contact URL for a datastore (e.g. mysql://localhost:3306/)",
      "links" : { }
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "elasticsearch.node.cluster.name",
      "type" : "java.lang.String",
      "description" : "Cluster name (or elasticsearch selected if not set",
      "links" : { }
    }, {
      "name" : "elasticsearch.node.docs.count",
      "type" : "java.lang.Integer",
      "description" : "elasticsearch.node.docs.count",
      "links" : { }
    }, {
      "name" : "elasticsearch.node.get.time.in.millis",
      "type" : "java.lang.Integer",
      "description" : "elasticsearch.node.get.time.in.millis",
      "links" : { }
    }, {
      "name" : "elasticsearch.node.get.total",
      "type" : "java.lang.Integer",
      "description" : "elasticsearch.node.get.total",
      "links" : { }
    }, {
      "name" : "elasticsearch.node.id",
      "type" : "java.lang.String",
      "description" : "elasticsearch.node.id",
      "links" : { }
    }, {
      "name" : "elasticsearch.node.name",
      "type" : "java.lang.String",
      "description" : "Node name (or randomly selected if not set",
      "links" : { }
    }, {
      "name" : "elasticsearch.node.search.query.time.in.millis",
      "type" : "java.lang.Integer",
      "description" : "elasticsearch.node.search.query.time.in.millis",
      "links" : { }
    }, {
      "name" : "elasticsearch.node.search.query.total",
      "type" : "java.lang.Integer",
      "description" : "elasticsearch.node.search.query.total",
      "links" : { }
    }, {
      "name" : "elasticsearch.node.store.bytes",
      "type" : "java.lang.Integer",
      "description" : "elasticsearch.node.store.bytes",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "http.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.webapp.jboss.JBoss6Server",
    "defaultVersion" : "6.0.0.Final",
    "name" : "JBoss Application Server 6",
    "description" : "AS6: an open source Java application server from JBoss",
    "iconUrl" : "classpath:///jboss-logo.png",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://downloads.sourceforge.net/project/jboss/JBoss/JBoss-${version}/jboss-as-distribution-${version}.zip?r=http%3A%2F%2Fsourceforge.net%2Fprojects%2Fjboss%2Ffiles%2FJBoss%2F${version}%2F&ts=1307104229&use_mirror=kent",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "http.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8080,18080-65535",
      "description" : "HTTP port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "https.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8443,18443-65535",
      "description" : "HTTP port (with SSL/TLS)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "6.0.0.Final",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.check.hostname.bug",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Check whether hostname is too long and will likely crash Javadue to bug 7089443",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.opts",
      "type" : "java.util.Set",
      "defaultValue" : [ ],
      "description" : "Java command line options",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.sysprops",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Java command line system properties",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jboss6.bind.address",
      "type" : "java.lang.String",
      "defaultValue" : "0.0.0.0",
      "description" : "Address of interface JBoss should listen on, defaulting 0.0.0.0 (but could set e.g. to attributeWhenReady(HOSTNAME)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jboss6.clusterName",
      "type" : "java.lang.String",
      "defaultValue" : "",
      "description" : "Identifier used to group JBoss instances",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jboss6.portincrement",
      "type" : "java.lang.Integer",
      "defaultValue" : 0,
      "description" : "Increment to be used for all jboss ports",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Path to JMX driver on the local machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : "AUTODETECT",
      "description" : "What type of JMX agent to use; defaults to null (autodetect) which means JMXMP_AND_RMI allowing firewall access through a single port as well as local access supporting jconsole (unless JMX_SSL_ENABLED is set, in which case it is JMXMP only)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "AUTODETECT",
        "description" : "AUTODETECT"
      }, {
        "value" : "JMXMP",
        "description" : "JMXMP"
      }, {
        "value" : "JMXMP_AND_RMI",
        "description" : "JMXMP_AND_RMI"
      }, {
        "value" : "JMX_RMI_CUSTOM_AGENT",
        "description" : "JMX_RMI_CUSTOM_AGENT"
      }, {
        "value" : "JMX_RMI",
        "description" : "JMX_RMI"
      }, {
        "value" : "NONE",
        "description" : "NONE"
      } ],
      "links" : null
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "defaultValue" : "jmxrmi",
      "description" : "JMX context path",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "31001-65535",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : null,
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "JMX enabled",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "JMX password",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.cert",
      "type" : "java.security.cert.Certificate",
      "defaultValue" : null,
      "description" : "certificate of key used to access a JMX agent",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.key",
      "type" : "java.security.PrivateKey",
      "defaultValue" : null,
      "description" : "key used to access a JMX agent (typically per entity, embedded in the managed JVM)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "JMX over JMXMP enabled with SSL/TLS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "JMX username",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "rmi.registry.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "1099,19099-65535",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.by.context",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Map of context keys (path in user-facing URL, typically without slashes) to archives (e.g. WARs by URL) to deploy, supporting file: and classpath: prefixes)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.named",
      "type" : "java.util.List",
      "defaultValue" : null,
      "description" : "Archive files to deploy, as URL strings (supporting file: and classpath: prefixes); context (path in user-facing URL) will be inferred by name",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.root",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "WAR file to deploy as the ROOT, as URL (supporting file: and classpath: prefixes)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.enabledProtocols",
      "type" : "java.util.Set",
      "defaultValue" : [ "http" ],
      "description" : "List of enabled protocols (e.g. http, https)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.https.ssl",
      "type" : "brooklyn.entity.webapp.HttpsSslConfig",
      "defaultValue" : null,
      "description" : "SSL Configuration for HTTPS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "http.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port",
      "links" : { }
    }, {
      "name" : "https.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port (with SSL/TLS)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "jboss6.bind.address",
      "type" : "java.lang.String",
      "description" : "Address of interface JBoss should listen on, defaulting 0.0.0.0 (but could set e.g. to attributeWhenReady(HOSTNAME)",
      "links" : { }
    }, {
      "name" : "jboss6.clusterName",
      "type" : "java.lang.String",
      "description" : "Identifier used to group JBoss instances",
      "links" : { }
    }, {
      "name" : "jboss6.portincrement",
      "type" : "java.lang.Integer",
      "description" : "Increment to be used for all jboss ports",
      "links" : { }
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "description" : "Path to JMX driver on the local machine",
      "links" : { }
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "description" : "JMX context path",
      "links" : { }
    }, {
      "name" : "jmx.direct.port",
      "type" : "java.lang.Integer",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "java.lang.Integer",
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "description" : "JMX password",
      "links" : { }
    }, {
      "name" : "jmx.service.url",
      "type" : "java.lang.String",
      "description" : "The URL for connecting to the MBean Server",
      "links" : { }
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "description" : "JMX username",
      "links" : { }
    }, {
      "name" : "rmi.registry.port",
      "type" : "java.lang.Integer",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    }, {
      "name" : "webapp.deployedWars",
      "type" : "java.util.Set",
      "description" : "Names of archives/contexts that are currently deployed",
      "links" : { }
    }, {
      "name" : "webapp.enabledProtocols",
      "type" : "java.util.Set",
      "description" : "List of enabled protocols (e.g. http, https)",
      "links" : { }
    }, {
      "name" : "webapp.https.ssl",
      "type" : "brooklyn.entity.webapp.HttpsSslConfig",
      "description" : "SSL Configuration for HTTPS",
      "links" : { }
    }, {
      "name" : "webapp.reqs.bytes.received",
      "type" : "java.lang.Long",
      "description" : "Total bytes received by the webserver",
      "links" : { }
    }, {
      "name" : "webapp.reqs.bytes.sent",
      "type" : "java.lang.Long",
      "description" : "Total bytes sent by the webserver",
      "links" : { }
    }, {
      "name" : "webapp.reqs.errors",
      "type" : "java.lang.Integer",
      "description" : "Request errors",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.last",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (last datapoint)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.windowed",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (over time window)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.last",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing, reported by webserver (percentage, last datapoint)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.windowed",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing, reported by webserver (percentage, over time window)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.max",
      "type" : "java.lang.Integer",
      "description" : "Max processing time for any single request, reported by webserver (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.total",
      "type" : "java.lang.Integer",
      "description" : "Total processing time, reported by webserver (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.total",
      "type" : "java.lang.Integer",
      "description" : "Request count",
      "links" : { }
    }, {
      "name" : "webapp.url",
      "type" : "java.lang.String",
      "description" : "URL",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "deploy",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "url",
        "type" : "java.lang.String",
        "description" : "URL of WAR file",
        "defaultValue" : null
      }, {
        "name" : "targetName",
        "type" : "java.lang.String",
        "description" : "context path where WAR should be deployed (/ for ROOT)",
        "defaultValue" : null
      } ],
      "description" : "Deploys the given artifact, from a source URL, to a given deployment filename/context",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "undeploy",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "targetName",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "Undeploys the given context/artifact",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.webapp.jboss.JBoss7Server",
    "defaultVersion" : "7.1.1.Final",
    "name" : "JBoss Application Server 7",
    "description" : "AS7: an open source Java application server from JBoss",
    "iconUrl" : "classpath:///jboss-logo.png",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://download.jboss.org/jbossas/7.1/jboss-as-${version}/jboss-as-${version}.tar.gz",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "http.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8080,18080-65535",
      "description" : "HTTP port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "https.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8443,18443-65535",
      "description" : "HTTP port (with SSL/TLS)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "7.1.1.Final",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.check.hostname.bug",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Check whether hostname is too long and will likely crash Javadue to bug 7089443",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.opts",
      "type" : "java.util.Set",
      "defaultValue" : [ ],
      "description" : "Java command line options",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.sysprops",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Java command line system properties",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jboss.bind.address",
      "type" : "java.lang.String",
      "defaultValue" : "0.0.0.0",
      "description" : "Address of interface JBoss should listen on, defaulting 0.0.0.0 (but could set e.g. to attributeWhenReady(HOSTNAME)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.by.context",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Map of context keys (path in user-facing URL, typically without slashes) to archives (e.g. WARs by URL) to deploy, supporting file: and classpath: prefixes)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.named",
      "type" : "java.util.List",
      "defaultValue" : null,
      "description" : "Archive files to deploy, as URL strings (supporting file: and classpath: prefixes); context (path in user-facing URL) will be inferred by name",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.root",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "WAR file to deploy as the ROOT, as URL (supporting file: and classpath: prefixes)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.enabledProtocols",
      "type" : "java.util.Set",
      "defaultValue" : [ "http" ],
      "description" : "List of enabled protocols (e.g. http, https)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.https.ssl",
      "type" : "brooklyn.entity.webapp.HttpsSslConfig",
      "defaultValue" : null,
      "description" : "SSL Configuration for HTTPS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.jboss.deploymentTimeout",
      "type" : "java.lang.Integer",
      "defaultValue" : 600,
      "description" : "Deployment timeout, in seconds",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.jboss.managementHttpPort",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "9990-65535",
      "description" : "Management port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.jboss.managementHttpsPort",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "9443-65535",
      "description" : "Management port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.jboss.managementNativePort",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "10999-65535",
      "description" : "Management native port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.jboss.managementPassword",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Password for MANAGEMENT_USER.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.jboss.managementUser",
      "type" : "java.lang.String",
      "defaultValue" : "brooklyn",
      "description" : "A user to be placed in the management realm. Brooklyn will use this user to poll sensors",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.jboss.portIncrement",
      "type" : "java.lang.Integer",
      "defaultValue" : 0,
      "description" : "Port increment for all ports in config file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.jboss.templateConfigurationUrl",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/webapp/jboss/jboss7-standalone.xml",
      "description" : "Template file (in freemarker format) for the standalone.xml file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "http.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port",
      "links" : { }
    }, {
      "name" : "https.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port (with SSL/TLS)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "jboss.bind.address",
      "type" : "java.lang.String",
      "description" : "Address of interface JBoss should listen on, defaulting 0.0.0.0 (but could set e.g. to attributeWhenReady(HOSTNAME)",
      "links" : { }
    }, {
      "name" : "jboss.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    }, {
      "name" : "webapp.deployedWars",
      "type" : "java.util.Set",
      "description" : "Names of archives/contexts that are currently deployed",
      "links" : { }
    }, {
      "name" : "webapp.enabledProtocols",
      "type" : "java.util.Set",
      "description" : "List of enabled protocols (e.g. http, https)",
      "links" : { }
    }, {
      "name" : "webapp.https.ssl",
      "type" : "brooklyn.entity.webapp.HttpsSslConfig",
      "description" : "SSL Configuration for HTTPS",
      "links" : { }
    }, {
      "name" : "webapp.jboss.managementHttpPort",
      "type" : "java.lang.Integer",
      "description" : "Management port",
      "links" : { }
    }, {
      "name" : "webapp.jboss.managementHttpsPort",
      "type" : "java.lang.Integer",
      "description" : "Management port",
      "links" : { }
    }, {
      "name" : "webapp.jboss.managementNativePort",
      "type" : "java.lang.Integer",
      "description" : "Management native port",
      "links" : { }
    }, {
      "name" : "webapp.jboss.managementStatus",
      "type" : "java.lang.Integer",
      "description" : "HTTP response code for the management server",
      "links" : { }
    }, {
      "name" : "webapp.jboss.managementUp",
      "type" : "java.lang.Boolean",
      "description" : "Management server is responding with OK",
      "links" : { }
    }, {
      "name" : "webapp.jboss.managementUrl",
      "type" : "java.lang.String",
      "description" : "URL where management endpoint is available",
      "links" : { }
    }, {
      "name" : "webapp.reqs.bytes.received",
      "type" : "java.lang.Long",
      "description" : "Total bytes received by the webserver",
      "links" : { }
    }, {
      "name" : "webapp.reqs.bytes.sent",
      "type" : "java.lang.Long",
      "description" : "Total bytes sent by the webserver",
      "links" : { }
    }, {
      "name" : "webapp.reqs.errors",
      "type" : "java.lang.Integer",
      "description" : "Request errors",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.last",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (last datapoint)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.windowed",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (over time window)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.last",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing, reported by webserver (percentage, last datapoint)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.windowed",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing, reported by webserver (percentage, over time window)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.max",
      "type" : "java.lang.Integer",
      "description" : "Max processing time for any single request, reported by webserver (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.total",
      "type" : "java.lang.Integer",
      "description" : "Total processing time, reported by webserver (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.total",
      "type" : "java.lang.Integer",
      "description" : "Request count",
      "links" : { }
    }, {
      "name" : "webapp.url",
      "type" : "java.lang.String",
      "description" : "URL",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "deploy",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "url",
        "type" : "java.lang.String",
        "description" : "URL of WAR file",
        "defaultValue" : null
      }, {
        "name" : "targetName",
        "type" : "java.lang.String",
        "description" : "context path where WAR should be deployed (/ for ROOT)",
        "defaultValue" : null
      } ],
      "description" : "Deploys the given artifact, from a source URL, to a given deployment filename/context",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "undeploy",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "targetName",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "Undeploys the given context/artifact",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.webapp.jetty.Jetty6Server",
    "defaultVersion" : "6.1.26",
    "name" : "Jetty6 Server",
    "description" : "Old version (v6 @ Mortbay) of the popular Jetty webapp container",
    "iconUrl" : "classpath:///jetty-logo.png",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://dist.codehaus.org/jetty/jetty-${version}/jetty-${version}.zip",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "http.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8080,18080-65535",
      "description" : "HTTP port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "https.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8443,18443-65535",
      "description" : "HTTP port (with SSL/TLS)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "6.1.26",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.check.hostname.bug",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Check whether hostname is too long and will likely crash Javadue to bug 7089443",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.opts",
      "type" : "java.util.Set",
      "defaultValue" : [ ],
      "description" : "Java command line options",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.sysprops",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Java command line system properties",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jetty.configXml.templateUrl",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Extra XML configuration file template URL if required",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Path to JMX driver on the local machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : "AUTODETECT",
      "description" : "What type of JMX agent to use; defaults to null (autodetect) which means JMXMP_AND_RMI allowing firewall access through a single port as well as local access supporting jconsole (unless JMX_SSL_ENABLED is set, in which case it is JMXMP only)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "AUTODETECT",
        "description" : "AUTODETECT"
      }, {
        "value" : "JMXMP",
        "description" : "JMXMP"
      }, {
        "value" : "JMXMP_AND_RMI",
        "description" : "JMXMP_AND_RMI"
      }, {
        "value" : "JMX_RMI_CUSTOM_AGENT",
        "description" : "JMX_RMI_CUSTOM_AGENT"
      }, {
        "value" : "JMX_RMI",
        "description" : "JMX_RMI"
      }, {
        "value" : "NONE",
        "description" : "NONE"
      } ],
      "links" : null
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "defaultValue" : "jmxrmi",
      "description" : "JMX context path",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "31001-65535",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : null,
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "JMX enabled",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "JMX password",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.cert",
      "type" : "java.security.cert.Certificate",
      "defaultValue" : null,
      "description" : "certificate of key used to access a JMX agent",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.key",
      "type" : "java.security.PrivateKey",
      "defaultValue" : null,
      "description" : "key used to access a JMX agent (typically per entity, embedded in the managed JVM)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "JMX over JMXMP enabled with SSL/TLS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "JMX username",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "rmi.registry.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "1099,19099-65535",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "5m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.by.context",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Map of context keys (path in user-facing URL, typically without slashes) to archives (e.g. WARs by URL) to deploy, supporting file: and classpath: prefixes)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.named",
      "type" : "java.util.List",
      "defaultValue" : null,
      "description" : "Archive files to deploy, as URL strings (supporting file: and classpath: prefixes); context (path in user-facing URL) will be inferred by name",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.root",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "WAR file to deploy as the ROOT, as URL (supporting file: and classpath: prefixes)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.enabledProtocols",
      "type" : "java.util.Set",
      "defaultValue" : [ "http" ],
      "description" : "List of enabled protocols (e.g. http, https)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.https.ssl",
      "type" : "brooklyn.entity.webapp.HttpsSslConfig",
      "defaultValue" : null,
      "description" : "SSL Configuration for HTTPS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "http.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port",
      "links" : { }
    }, {
      "name" : "https.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port (with SSL/TLS)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "description" : "Path to JMX driver on the local machine",
      "links" : { }
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "description" : "JMX context path",
      "links" : { }
    }, {
      "name" : "jmx.direct.port",
      "type" : "java.lang.Integer",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "java.lang.Integer",
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "description" : "JMX password",
      "links" : { }
    }, {
      "name" : "jmx.service.url",
      "type" : "java.lang.String",
      "description" : "The URL for connecting to the MBean Server",
      "links" : { }
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "description" : "JMX username",
      "links" : { }
    }, {
      "name" : "rmi.registry.port",
      "type" : "java.lang.Integer",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    }, {
      "name" : "webapp.deployedWars",
      "type" : "java.util.Set",
      "description" : "Names of archives/contexts that are currently deployed",
      "links" : { }
    }, {
      "name" : "webapp.enabledProtocols",
      "type" : "java.util.Set",
      "description" : "List of enabled protocols (e.g. http, https)",
      "links" : { }
    }, {
      "name" : "webapp.https.ssl",
      "type" : "brooklyn.entity.webapp.HttpsSslConfig",
      "description" : "SSL Configuration for HTTPS",
      "links" : { }
    }, {
      "name" : "webapp.reqs.bytes.received",
      "type" : "java.lang.Long",
      "description" : "Total bytes received by the webserver",
      "links" : { }
    }, {
      "name" : "webapp.reqs.bytes.sent",
      "type" : "java.lang.Long",
      "description" : "Total bytes sent by the webserver",
      "links" : { }
    }, {
      "name" : "webapp.reqs.errors",
      "type" : "java.lang.Integer",
      "description" : "Request errors",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.last",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (last datapoint)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.windowed",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (over time window)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.last",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing, reported by webserver (percentage, last datapoint)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.windowed",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing, reported by webserver (percentage, over time window)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.max",
      "type" : "java.lang.Integer",
      "description" : "Max processing time for any single request, reported by webserver (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.total",
      "type" : "java.lang.Integer",
      "description" : "Total processing time, reported by webserver (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.total",
      "type" : "java.lang.Integer",
      "description" : "Request count",
      "links" : { }
    }, {
      "name" : "webapp.responses.4xx",
      "type" : "java.lang.Integer",
      "description" : "Responses in the 400's",
      "links" : { }
    }, {
      "name" : "webapp.responses.5xx",
      "type" : "java.lang.Integer",
      "description" : "Responses in the 500's",
      "links" : { }
    }, {
      "name" : "webapp.url",
      "type" : "java.lang.String",
      "description" : "URL",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "deploy",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "url",
        "type" : "java.lang.String",
        "description" : "URL of WAR file",
        "defaultValue" : null
      }, {
        "name" : "targetName",
        "type" : "java.lang.String",
        "description" : "context path where WAR should be deployed (/ for ROOT)",
        "defaultValue" : null
      } ],
      "description" : "Deploys the given artifact, from a source URL, to a given deployment filename/context",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "undeploy",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "targetName",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "Undeploys the given context/artifact",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.messaging.kafka.KafkaCluster",
    "name" : "Kafka",
    "description" : "Apache Kafka is a distributed publish-subscribe messaging system",
    "iconUrl" : "classpath://brooklyn/entity/messaging/kafka/kafka-google-doorway.jpg",
    "config" : [ {
      "name" : "cluster.initial.size",
      "type" : "java.lang.Integer",
      "defaultValue" : 1,
      "description" : "Initial cluster size",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "kafka.cluster.brokerSpec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "Spec for Kafka broker entiites to be created",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "kafka.cluster.zookeeper",
      "type" : "brooklyn.entity.zookeeper.ZooKeeperNode",
      "defaultValue" : null,
      "description" : "The zookeeper for the cluster; if null a default be will created",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "kafka.cluster.zookeeperSpec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "Spec for creating the kafka zookeeper",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "kafka.cluster.brokerCluster",
      "type" : "brooklyn.entity.group.DynamicCluster",
      "description" : "Underlying Kafka broker cluster",
      "links" : { }
    }, {
      "name" : "kafka.cluster.brokerSpec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "description" : "Spec for Kafka broker entiites to be created",
      "links" : { }
    }, {
      "name" : "kafka.cluster.zookeeper",
      "type" : "brooklyn.entity.zookeeper.ZooKeeperNode",
      "description" : "The zookeeper for the cluster; if null a default be will created",
      "links" : { }
    }, {
      "name" : "kafka.cluster.zookeeperSpec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "description" : "Spec for creating the kafka zookeeper",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "resize",
      "returnType" : "java.lang.Integer",
      "parameters" : [ {
        "name" : "desiredSize",
        "type" : "java.lang.Integer",
        "description" : "The new size of the cluster",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the entity (e.g. the number of nodes in a cluster)",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.osgi.karaf.KarafContainer",
    "defaultVersion" : "2.3.0",
    "name" : "Karaf",
    "description" : "Apache Karaf is a small OSGi based runtime which provides a lightweight container onto which various components and applications can be deployed.",
    "iconUrl" : "classpath:///karaf-logo.png",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://apache.mirror.anlx.net/karaf/${version}/apache-karaf-${version}.tar.gz",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "2.3.0",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.check.hostname.bug",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Check whether hostname is too long and will likely crash Javadue to bug 7089443",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.opts",
      "type" : "java.util.Set",
      "defaultValue" : [ ],
      "description" : "Java command line options",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.sysprops",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Java command line system properties",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Path to JMX driver on the local machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : "AUTODETECT",
      "description" : "What type of JMX agent to use; defaults to null (autodetect) which means JMXMP_AND_RMI allowing firewall access through a single port as well as local access supporting jconsole (unless JMX_SSL_ENABLED is set, in which case it is JMXMP only)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "AUTODETECT",
        "description" : "AUTODETECT"
      }, {
        "value" : "JMXMP",
        "description" : "JMXMP"
      }, {
        "value" : "JMXMP_AND_RMI",
        "description" : "JMXMP_AND_RMI"
      }, {
        "value" : "JMX_RMI_CUSTOM_AGENT",
        "description" : "JMX_RMI_CUSTOM_AGENT"
      }, {
        "value" : "JMX_RMI",
        "description" : "JMX_RMI"
      }, {
        "value" : "NONE",
        "description" : "NONE"
      } ],
      "links" : null
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "defaultValue" : "karaf-root",
      "description" : "JMX context path",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "44444-65535",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : null,
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "JMX enabled",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "defaultValue" : "karaf",
      "description" : "JMX password",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.cert",
      "type" : "java.security.cert.Certificate",
      "defaultValue" : null,
      "description" : "certificate of key used to access a JMX agent",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.key",
      "type" : "java.security.PrivateKey",
      "defaultValue" : null,
      "description" : "key used to access a JMX agent (typically per entity, embedded in the managed JVM)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "JMX over JMXMP enabled with SSL/TLS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "defaultValue" : "karaf",
      "description" : "JMX username",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "karaf.name",
      "type" : "java.lang.String",
      "defaultValue" : "root",
      "description" : "Karaf instance name",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "karaf.runtime.files",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Property files to be generated, referenced by name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "rmi.registry.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "1099,19099-65535",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "description" : "Path to JMX driver on the local machine",
      "links" : { }
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "description" : "JMX context path",
      "links" : { }
    }, {
      "name" : "jmx.direct.port",
      "type" : "java.lang.Integer",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "java.lang.Integer",
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "description" : "JMX password",
      "links" : { }
    }, {
      "name" : "jmx.service.url",
      "type" : "java.lang.String",
      "description" : "The URL for connecting to the MBean Server",
      "links" : { }
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "description" : "JMX username",
      "links" : { }
    }, {
      "name" : "karaf.admin.instances",
      "type" : "java.util.Map",
      "description" : "Karaf admin instances",
      "links" : { }
    }, {
      "name" : "karaf.admin.isRoot",
      "type" : "java.lang.Boolean",
      "description" : "Karaf admin isRoot",
      "links" : { }
    }, {
      "name" : "karaf.admin.java_opts",
      "type" : "java.lang.String",
      "description" : "Karaf Java opts",
      "links" : { }
    }, {
      "name" : "karaf.admin.location",
      "type" : "java.lang.String",
      "description" : "Karaf install location",
      "links" : { }
    }, {
      "name" : "karaf.admin.pid",
      "type" : "java.lang.Integer",
      "description" : "Karaf instance PID",
      "links" : { }
    }, {
      "name" : "karaf.admin.rmi_registry_port",
      "type" : "java.lang.Integer",
      "description" : "Karaf instance RMI registry port",
      "links" : { }
    }, {
      "name" : "karaf.admin.rmi_server_port",
      "type" : "java.lang.Integer",
      "description" : "Karaf RMI (JMX) server port",
      "links" : { }
    }, {
      "name" : "karaf.admin.ssh_port",
      "type" : "java.lang.Integer",
      "description" : "Karaf SSH Port",
      "links" : { }
    }, {
      "name" : "karaf.admin.state",
      "type" : "java.lang.String",
      "description" : "Karaf instance state",
      "links" : { }
    }, {
      "name" : "karaf.name",
      "type" : "java.lang.String",
      "description" : "Karaf instance name",
      "links" : { }
    }, {
      "name" : "rmi.registry.port",
      "type" : "java.lang.Integer",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "installBundle",
      "returnType" : "long",
      "parameters" : [ {
        "name" : "bundle",
        "type" : "java.lang.String",
        "description" : "URI of bundle to be deployed",
        "defaultValue" : null
      } ],
      "description" : "Deploys the given bundle, returning the bundle id - see osgi.core:type=framework#installBundle()",
      "links" : null
    }, {
      "name" : "installFeature",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "featureName",
        "type" : "java.lang.String",
        "description" : "Name of the feature - see org.apache.karaf:type=features#installFeature()",
        "defaultValue" : null
      } ],
      "description" : "Installs the given OSGi feature",
      "links" : null
    }, {
      "name" : "listBundles",
      "returnType" : "java.util.Map",
      "parameters" : [ ],
      "description" : "Lists all the karaf bundles",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "uninstallBundle",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "bundleId",
        "type" : "java.lang.Long",
        "description" : "Id of the bundle",
        "defaultValue" : null
      } ],
      "description" : "Undeploys the bundle with the given id",
      "links" : null
    }, {
      "name" : "updateServiceProperties",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "serviceName",
        "type" : "java.lang.String",
        "description" : "Name of the OSGi service",
        "defaultValue" : null
      }, {
        "name" : null,
        "type" : "java.util.Map",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "Updates the OSGi Service's properties, adding (and overriding) the given key-value pairs",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.machine.MachineEntity",
    "defaultVersion" : null,
    "name" : "Machine Entity",
    "description" : "Represents a machine, providing metrics about it (e.g. obtained from ssh)",
    "iconUrl" : "",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "machine.cpu",
      "type" : "java.lang.Double",
      "description" : "Current CPU usage",
      "links" : { }
    }, {
      "name" : "machine.loadAverage",
      "type" : "java.lang.Double",
      "description" : "Current load average",
      "links" : { }
    }, {
      "name" : "machine.memory.free",
      "type" : "java.lang.Long",
      "description" : "Current free memory",
      "links" : { }
    }, {
      "name" : "machine.memory.total",
      "type" : "java.lang.Long",
      "description" : "Total memory",
      "links" : { }
    }, {
      "name" : "machine.memory.used",
      "type" : "java.lang.Long",
      "description" : "Current memory usage",
      "links" : { }
    }, {
      "name" : "machine.uptime",
      "type" : "brooklyn.util.time.Duration",
      "description" : "Current uptime",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "execCommand",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "command",
        "type" : "java.lang.String",
        "description" : "Command",
        "defaultValue" : null
      } ],
      "description" : "Execute a command and return the output",
      "links" : null
    }, {
      "name" : "execCommandTimeout",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "command",
        "type" : "java.lang.String",
        "description" : "Command",
        "defaultValue" : null
      }, {
        "name" : "timeout",
        "type" : "brooklyn.util.time.Duration",
        "description" : "Timeout",
        "defaultValue" : null
      } ],
      "description" : "Execute a command and return the output",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.database.mariadb.MariaDbNode",
    "defaultVersion" : "5.5.40",
    "name" : "MariaDB Node",
    "description" : "MariaDB is an open source relational database management system (RDBMS)",
    "iconUrl" : "classpath:///mariadb-logo-180x119.png",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "datastore.creation.script.contents",
      "type" : "java.lang.String",
      "defaultValue" : "",
      "description" : "Contensts of creation script to initialize the datastore",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "datastore.creation.script.url",
      "type" : "java.lang.String",
      "defaultValue" : "",
      "description" : "URL of creation script to use to initialize the datastore (ignored if contents are specified)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "${driver.mirrorUrl}/mariadb-${version}/${driver.downloadParentDir}/mariadb-${version}-${driver.osTag}.tar.gz",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "5.5.40",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mariadb.datadir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for writing data files",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mariadb.install.mirror.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://mirrors.coreix.net/mariadb/",
      "description" : "URL of mirror",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mariadb.password",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Database admin password (or randomly generated if not set)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mariadb.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "3306,13306-65535",
      "description" : "MariaDB port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mariadb.server.conf",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Configuration options for MariaDB server",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mariadb.server.conf.lower_case_table_names",
      "type" : "java.lang.Object",
      "defaultValue" : null,
      "description" : "See MariaDB (or MySQL!) guide. Set 1 to ignore case in table names (useful for OS portability)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mariadb.socketUid",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Socket uid, for use in file /tmp/mysql.sock.<uid>.3306 (or randomly generated if not set)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mariadb.template.configuration.url",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/database/mariadb/my.cnf",
      "description" : "Template file (in freemarker format) for the my.cnf file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "datastore.url",
      "type" : "java.lang.String",
      "description" : "Primary contact URL for a datastore (e.g. mysql://localhost:3306/)",
      "links" : { }
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "mariadb.password",
      "type" : "java.lang.String",
      "description" : "Database admin password (or randomly generated if not set)",
      "links" : { }
    }, {
      "name" : "mariadb.port",
      "type" : "java.lang.Integer",
      "description" : "MariaDB port",
      "links" : { }
    }, {
      "name" : "mariadb.queries.perSec.fromMariadb",
      "type" : "java.lang.Double",
      "description" : "mariadb.queries.perSec.fromMariadb",
      "links" : { }
    }, {
      "name" : "mariadb.socketUid",
      "type" : "java.lang.String",
      "description" : "Socket uid, for use in file /tmp/mysql.sock.<uid>.3306 (or randomly generated if not set)",
      "links" : { }
    }, {
      "name" : "mariadb.template.configuration.url",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the my.cnf file",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "executeScript",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "commands",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "executes the given script contents",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.nosql.mongodb.sharding.MongoDBRouter",
    "defaultVersion" : "2.6.5",
    "name" : "MongoDB Router",
    "description" : "MongoDB (from \"humongous\") is a scalable, high-performance, open source NoSQL database",
    "iconUrl" : "classpath:///mongodb-logo.png",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://fastdl.mongodb.org/${driver.osDir}/${driver.osTag}-${version}.tgz",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "2.6.5",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.config.url",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/nosql/mongodb/default.conf",
      "description" : "Template file (in freemarker format) for a MongoDB configuration file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.data.directory",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Data directory to store MongoDB journals",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.router.config.servers",
      "type" : "java.lang.Iterable",
      "defaultValue" : null,
      "description" : "List of host names and ports of the config servers",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.server.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "27017-65535",
      "description" : "Server port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "mongodb.router.config.shard.count",
      "type" : "java.lang.Integer",
      "description" : "Number of shards that have been added",
      "links" : { }
    }, {
      "name" : "mongodb.router.running",
      "type" : "java.lang.Boolean",
      "description" : "Indicates that the router is running, and can be used to add shards, but is not necessarity available for CRUD operations (e.g. if no shards have been added)",
      "links" : { }
    }, {
      "name" : "mongodb.server.port",
      "type" : "java.lang.Integer",
      "description" : "Server port",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.nosql.mongodb.MongoDBServer",
    "defaultVersion" : "2.6.5",
    "name" : "MongoDB Server",
    "description" : "MongoDB (from \"humongous\") is a scalable, high-performance, open source NoSQL database",
    "iconUrl" : "classpath:///mongodb-logo.png",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://fastdl.mongodb.org/${driver.osDir}/${driver.osTag}-${version}.tgz",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "2.6.5",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.config.enable_rest",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Adds --rest to server startup flags when true",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.config.url",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/nosql/mongodb/default-mongod.conf",
      "description" : "Template file (in freemarker format) for a MongoDB configuration file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.data.directory",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Data directory to store MongoDB journals",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.replicaset",
      "type" : "brooklyn.entity.nosql.mongodb.MongoDBReplicaSet",
      "defaultValue" : null,
      "description" : "The replica set to which the server belongs. Users should not set this directly when creating a new replica set.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.server.httpPort",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "28017-65535",
      "description" : "HTTP port for the server (estimated)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.server.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "27017-65535",
      "description" : "Server port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "mongodb.server.endpoint",
      "type" : "java.lang.String",
      "description" : "The host:port where this server is listening",
      "links" : { }
    }, {
      "name" : "mongodb.server.httpPort",
      "type" : "java.lang.Integer",
      "description" : "HTTP port for the server (estimated)",
      "links" : { }
    }, {
      "name" : "mongodb.server.http_interface",
      "type" : "java.lang.String",
      "description" : "URL of the server's HTTP console",
      "links" : { }
    }, {
      "name" : "mongodb.server.network.bytesIn",
      "type" : "java.lang.Long",
      "description" : "Server incoming network traffic (in bytes)",
      "links" : { }
    }, {
      "name" : "mongodb.server.network.bytesOut",
      "type" : "java.lang.Long",
      "description" : "Server outgoing network traffic (in bytes)",
      "links" : { }
    }, {
      "name" : "mongodb.server.network.numRequests",
      "type" : "java.lang.Long",
      "description" : "Server network requests",
      "links" : { }
    }, {
      "name" : "mongodb.server.opcounters.command",
      "type" : "java.lang.Long",
      "description" : "Server commands",
      "links" : { }
    }, {
      "name" : "mongodb.server.opcounters.delete",
      "type" : "java.lang.Long",
      "description" : "Server deletes",
      "links" : { }
    }, {
      "name" : "mongodb.server.opcounters.getmore",
      "type" : "java.lang.Long",
      "description" : "Server getmores",
      "links" : { }
    }, {
      "name" : "mongodb.server.opcounters.insert",
      "type" : "java.lang.Long",
      "description" : "Server inserts",
      "links" : { }
    }, {
      "name" : "mongodb.server.opcounters.query",
      "type" : "java.lang.Long",
      "description" : "Server queries",
      "links" : { }
    }, {
      "name" : "mongodb.server.opcounters.update",
      "type" : "java.lang.Long",
      "description" : "Server updates",
      "links" : { }
    }, {
      "name" : "mongodb.server.port",
      "type" : "java.lang.Integer",
      "description" : "Server port",
      "links" : { }
    }, {
      "name" : "mongodb.server.replicaSet.isPrimary",
      "type" : "java.lang.Boolean",
      "description" : "True if this server is the write master for the replica set",
      "links" : { }
    }, {
      "name" : "mongodb.server.replicaSet.isSecondary",
      "type" : "java.lang.Boolean",
      "description" : "True if this server is a secondary server in the replica set",
      "links" : { }
    }, {
      "name" : "mongodb.server.replicaSet.memberStatus",
      "type" : "brooklyn.entity.nosql.mongodb.ReplicaSetMemberStatus",
      "description" : "The status of this server in the replica set",
      "links" : { }
    }, {
      "name" : "mongodb.server.replicaSet.primary.endpoint",
      "type" : "java.lang.String",
      "description" : "The host:port of the server which is acting as primary (master) for the replica set",
      "links" : { }
    }, {
      "name" : "mongodb.server.status.bson",
      "type" : "org.bson.BasicBSONObject",
      "description" : "Server status (BSON/JSON map ojbect)",
      "links" : { }
    }, {
      "name" : "mongodb.server.uptime",
      "type" : "java.lang.Double",
      "description" : "Server uptime in seconds",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.nosql.mongodb.sharding.MongoDBShardedDeployment",
    "name" : "MongoDB Sharded Deployment",
    "description" : "MongoDB (from \"humongous\") is a scalable, high-performance, open source NoSQL database",
    "iconUrl" : "classpath:///mongodb-logo.png",
    "config" : [ {
      "name" : "mongodb.colocated.router.group",
      "type" : "brooklyn.entity.Group",
      "defaultValue" : null,
      "description" : "Group to be monitored for the addition of new CoLocatedMongoDBRouter entities",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.config.cluster.size",
      "type" : "java.lang.Integer",
      "defaultValue" : 3,
      "description" : "Number of config servers",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.configserver.spec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : "EntitySpec{type=interface brooklyn.entity.nosql.mongodb.sharding.MongoDBConfigServer}",
      "description" : "Spec for Config Server instances",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.replicaset.spec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : "EntitySpec{type=interface brooklyn.entity.nosql.mongodb.MongoDBReplicaSet}",
      "description" : "Spec for Replica Set",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.router.cluster.initial.size",
      "type" : "java.lang.Integer",
      "defaultValue" : 0,
      "description" : "Initial number of routers (mongos)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.router.spec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : "EntitySpec{type=interface brooklyn.entity.nosql.mongodb.sharding.MongoDBRouter}",
      "description" : "Spec for Router instances",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.router.up.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "5m",
      "description" : "Maximum time to wait for the routers to become available before adding the shards",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.shard.cluster.initial.size",
      "type" : "java.lang.Integer",
      "defaultValue" : 2,
      "description" : "Initial number of shards (replicasets)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mongodb.shard.replicaset.size",
      "type" : "java.lang.Integer",
      "defaultValue" : 3,
      "description" : "Number of servers (mongod) in each shard (replicaset)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "mongodbshardeddeployment.configservers",
      "type" : "brooklyn.entity.nosql.mongodb.sharding.MongoDBConfigServerCluster",
      "description" : "Config servers",
      "links" : { }
    }, {
      "name" : "mongodbshardeddeployment.routers",
      "type" : "brooklyn.entity.nosql.mongodb.sharding.MongoDBRouterCluster",
      "description" : "Routers",
      "links" : { }
    }, {
      "name" : "mongodbshardeddeployment.shards",
      "type" : "brooklyn.entity.nosql.mongodb.sharding.MongoDBShardCluster",
      "description" : "Shards",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.monitoring.monit.MonitNode",
    "defaultVersion" : "5.9",
    "name" : "Monit Node",
    "description" : "Monit is a free open source utility for managing and monitoring, processes, programs, files, directories and filesystems on a UNIX system",
    "iconUrl" : "",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "https://mmonit.com/monit/dist/binary/${version}/monit-${version}-${driver.osTag}.tar.gz",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "5.9",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "monit.control.substitutions",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Additional substitutions to be used in the control file template",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "monit.control.url",
      "type" : "java.lang.String",
      "defaultValue" : "",
      "description" : "URL where monit control (.monitrc) file can be found",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "monit.target.process.name",
      "type" : "java.lang.String",
      "description" : "monit.target.process.name",
      "links" : { }
    }, {
      "name" : "monit.target.process.status",
      "type" : "java.lang.String",
      "description" : "monit.target.process.status",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.database.mysql.MySqlNode",
    "defaultVersion" : "5.5.37",
    "name" : "MySql Node",
    "description" : "MySql is an open source relational database management system (RDBMS)",
    "iconUrl" : "classpath:///mysql-logo-110x57.png",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "datastore.creation.script.contents",
      "type" : "java.lang.String",
      "defaultValue" : "",
      "description" : "Contensts of creation script to initialize the datastore",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "datastore.creation.script.url",
      "type" : "java.lang.String",
      "defaultValue" : "",
      "description" : "URL of creation script to use to initialize the datastore (ignored if contents are specified)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://dev.mysql.com/get/Downloads/MySQL-5.5/mysql-${version}-${driver.osTag}.tar.gz/from/${driver.mirrorUrl}",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "5.5.37",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mysql.datadir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for writing data files",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mysql.install.mirror.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://www.mirrorservice.org/sites/ftp.mysql.com/",
      "description" : "URL of mirror",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mysql.password",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Database admin password (or randomly generated if not set)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mysql.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "3306,13306-65535",
      "description" : "MySQL port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mysql.server.conf",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Configuration options for mysqld",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mysql.server.conf.lower_case_table_names",
      "type" : "java.lang.Object",
      "defaultValue" : null,
      "description" : "See MySQL guide. Set 1 to ignore case in table names (useful for OS portability)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mysql.socketUid",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Socket uid, for use in file /tmp/mysql.sock.<uid>.3306 (or randomly generated if not set)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "mysql.template.configuration.url",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/database/mysql/mysql.conf",
      "description" : "Template file (in freemarker format) for the mysql.conf file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "datastore.url",
      "type" : "java.lang.String",
      "description" : "Primary contact URL for a datastore (e.g. mysql://localhost:3306/)",
      "links" : { }
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "mysql.password",
      "type" : "java.lang.String",
      "description" : "Database admin password (or randomly generated if not set)",
      "links" : { }
    }, {
      "name" : "mysql.port",
      "type" : "java.lang.Integer",
      "description" : "MySQL port",
      "links" : { }
    }, {
      "name" : "mysql.queries.perSec.fromMysql",
      "type" : "java.lang.Double",
      "description" : "mysql.queries.perSec.fromMysql",
      "links" : { }
    }, {
      "name" : "mysql.socketUid",
      "type" : "java.lang.String",
      "description" : "Socket uid, for use in file /tmp/mysql.sock.<uid>.3306 (or randomly generated if not set)",
      "links" : { }
    }, {
      "name" : "mysql.template.configuration.url",
      "type" : "java.lang.String",
      "description" : "Template file (in freemarker format) for the mysql.conf file",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "executeScript",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "commands",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "executes the given script contents",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.proxy.nginx.NginxController",
    "defaultVersion" : "1.3.7",
    "name" : "Nginx Server",
    "description" : "A single Nginx server. Provides HTTP and reverse proxy services",
    "iconUrl" : "classpath:///nginx-logo.jpeg",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "controller.config.serviceUpUrlPath",
      "type" : "java.lang.String",
      "defaultValue" : "",
      "description" : "The path that will be appended to the root URL to determine SERVICE_UP",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : {
        "stickymodule" : "http://nginx-sticky-module.googlecode.com/files/nginx-sticky-module-${addonversion}.tar.gz",
        "pcre" : "ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-${addonversion}.tar.gz"
      },
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://nginx.org/download/nginx-${version}.tar.gz",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "1.3.7",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "loadbalancer.serverpool",
      "type" : "brooklyn.entity.Group",
      "defaultValue" : null,
      "description" : "The default servers to route messages to",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "loadbalancer.urlmappings",
      "type" : "brooklyn.entity.Group",
      "defaultValue" : null,
      "description" : "Special mapping rules (e.g. for domain/path matching, rewrite, etc); not supported by all load balancers",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "member.sensor.hostandport",
      "type" : "brooklyn.event.AttributeSensor",
      "defaultValue" : null,
      "description" : "host:port sensor on members (invalid to configure this and the portNumber or hostname sensors)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "member.sensor.hostname",
      "type" : "brooklyn.event.AttributeSensor",
      "defaultValue" : "Sensor: host.subnet.hostname (java.lang.String)",
      "description" : "Hostname/IP sensor on members (defaults to host.subnet.hostname; not supported in all implementations)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "member.sensor.portNumber",
      "type" : "brooklyn.event.AttributeSensor",
      "defaultValue" : "Sensor: http.port (java.lang.Integer)",
      "description" : "Port number sensor on members (defaults to http.port; not supported in all implementations)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nginx.config.generator",
      "type" : "brooklyn.entity.proxy.nginx.NginxConfigFileGenerator",
      "defaultValue" : "brooklyn.entity.proxy.nginx.NginxDefaultConfigGenerator@6057af75",
      "description" : "The server.conf generator class",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nginx.config.staticContentArchiveUrl",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The URL of an archive file of static content (To be copied to the server)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nginx.config.templateUrl",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/proxy/nginx/server.conf",
      "description" : "The server.conf configuration file URL (FreeMarker template). Only applies if 'nginx.config.generator' specifies a generator which uses a template.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nginx.install.withCcOpt",
      "type" : "java.lang.String",
      "defaultValue" : "-I /usr/local/include",
      "description" : "String to pass in with --with-cc-opt=\"<val>\"",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nginx.install.withLdOpt",
      "type" : "java.lang.String",
      "defaultValue" : "-L /usr/local/lib",
      "description" : "String to pass in with --with-ld-opt=\"<val>\" (and for OS X has pcre auto-appended to this)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nginx.log.access",
      "type" : "java.lang.String",
      "defaultValue" : "logs/access.log",
      "description" : "Nginx access log file location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nginx.log.error",
      "type" : "java.lang.String",
      "defaultValue" : "logs/error.log",
      "description" : "Nginx error log file location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nginx.sensorpoll.http",
      "type" : "java.lang.Long",
      "defaultValue" : 1000,
      "description" : "Poll period (in milliseconds)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nginx.sticky",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Whether to use sticky sessions",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nginx.sticky.version",
      "type" : "java.lang.String",
      "defaultValue" : "1.0",
      "description" : "Version of ngnix-sticky-module to be installed, if required",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pcre.version",
      "type" : "java.lang.String",
      "defaultValue" : "8.33",
      "description" : "Version of PCRE to be installed, if required",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "proxy.domainName",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Domain name that this controller responds to, or null if it responds to all domains",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "proxy.http.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8000,8001-65535",
      "description" : "Main port where this proxy listens if using HTTP",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "proxy.https.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8443,8443-65535",
      "description" : "Main port where this proxy listens if using HTTPS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "proxy.protocol",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Main URL protocol this proxy answers (typically http or https)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "proxy.ssl.config",
      "type" : "brooklyn.entity.proxy.ProxySslConfig",
      "defaultValue" : null,
      "description" : "Configuration (e.g. certificates) for SSL; causes server to run with HTTPS instead of HTTP",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "main.uri",
      "type" : "java.net.URI",
      "description" : "Main URI for contacting the service/endpoint offered by this entity",
      "links" : { }
    }, {
      "name" : "member.sensor.hostandport",
      "type" : "brooklyn.event.AttributeSensor",
      "description" : "host:port sensor on members (invalid to configure this and the portNumber or hostname sensors)",
      "links" : { }
    }, {
      "name" : "member.sensor.hostname",
      "type" : "brooklyn.event.AttributeSensor",
      "description" : "Hostname/IP sensor on members (defaults to host.subnet.hostname; not supported in all implementations)",
      "links" : { }
    }, {
      "name" : "member.sensor.portNumber",
      "type" : "brooklyn.event.AttributeSensor",
      "description" : "Port number sensor on members (defaults to http.port; not supported in all implementations)",
      "links" : { }
    }, {
      "name" : "nginx.log.access",
      "type" : "java.lang.String",
      "description" : "Nginx access log file location",
      "links" : { }
    }, {
      "name" : "nginx.log.error",
      "type" : "java.lang.String",
      "description" : "Nginx error log file location",
      "links" : { }
    }, {
      "name" : "nginx.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "nginx.url.answers.nicely",
      "type" : "java.lang.Boolean",
      "description" : "nginx.url.answers.nicely",
      "links" : { }
    }, {
      "name" : "proxy.domainName",
      "type" : "java.lang.String",
      "description" : "Domain name that this controller responds to, or null if it responds to all domains",
      "links" : { }
    }, {
      "name" : "proxy.http.port",
      "type" : "java.lang.Integer",
      "description" : "Main port where this proxy listens if using HTTP",
      "links" : { }
    }, {
      "name" : "proxy.https.port",
      "type" : "java.lang.Integer",
      "description" : "Main port where this proxy listens if using HTTPS",
      "links" : { }
    }, {
      "name" : "proxy.protocol",
      "type" : "java.lang.String",
      "description" : "Main URL protocol this proxy answers (typically http or https)",
      "links" : { }
    }, {
      "name" : "proxy.serverpool.targets",
      "type" : "java.util.Map",
      "description" : "The downstream targets in the server pool",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    }, {
      "name" : "webapp.url",
      "type" : "java.lang.String",
      "description" : "URL",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "deploy",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "archiveUrl",
        "type" : "java.lang.String",
        "description" : "The URL of the static content archive to deploy",
        "defaultValue" : null
      } ],
      "description" : "Deploys an archive of static content to the server",
      "links" : null
    }, {
      "name" : "getCurrentConfiguration",
      "returnType" : "java.lang.String",
      "parameters" : [ ],
      "description" : "Gets the current server configuration (by brooklyn recalculating what the config should be); does not affect the server",
      "links" : null
    }, {
      "name" : "reload",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Forces reload of the configuration",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "update",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Updates the entities configuration, and then forces reload of that configuration",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.webapp.nodejs.NodeJsWebAppService",
    "defaultVersion" : "stable",
    "name" : "Node.JS Application",
    "description" : "Node.js is a cross-platform runtime environment for server-side and networking applications. Node.js applications are written in JavaScriptq",
    "iconUrl" : "classpath:///nodejs-logo.png",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "http.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "3000",
      "description" : "HTTP port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "https.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8443,18443-65535",
      "description" : "HTTP port (with SSL/TLS)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "stable",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nodejs.app.command",
      "type" : "java.lang.String",
      "defaultValue" : "node",
      "description" : "Command to start the NodeJS application (defaults to node)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nodejs.app.commandLine",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Replacement command line to start the NodeJS application (ignores command and file if set)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nodejs.app.fileName",
      "type" : "java.lang.String",
      "defaultValue" : "app.js",
      "description" : "The NodeJS application file to start",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nodejs.app.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name of the NodeJS application",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nodejs.archive.url",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The URL where the application archive is hosted",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nodejs.gitRepo.url",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The Git repository where the application is hosted",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nodejs.packages",
      "type" : "java.util.List",
      "defaultValue" : [ ],
      "description" : "The NPM packages to install",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "nodejs.serviceUp.path",
      "type" : "java.lang.String",
      "defaultValue" : "/",
      "description" : "Path to use when checking the NodeJS application is running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.enabledProtocols",
      "type" : "java.util.Set",
      "defaultValue" : [ "http" ],
      "description" : "List of enabled protocols (e.g. http, https)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.https.ssl",
      "type" : "brooklyn.entity.webapp.HttpsSslConfig",
      "defaultValue" : null,
      "description" : "SSL Configuration for HTTPS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "http.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port",
      "links" : { }
    }, {
      "name" : "https.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port (with SSL/TLS)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    }, {
      "name" : "webapp.enabledProtocols",
      "type" : "java.util.Set",
      "description" : "List of enabled protocols (e.g. http, https)",
      "links" : { }
    }, {
      "name" : "webapp.https.ssl",
      "type" : "brooklyn.entity.webapp.HttpsSslConfig",
      "description" : "SSL Configuration for HTTPS",
      "links" : { }
    }, {
      "name" : "webapp.reqs.bytes.received",
      "type" : "java.lang.Long",
      "description" : "Total bytes received by the webserver",
      "links" : { }
    }, {
      "name" : "webapp.reqs.bytes.sent",
      "type" : "java.lang.Long",
      "description" : "Total bytes sent by the webserver",
      "links" : { }
    }, {
      "name" : "webapp.reqs.errors",
      "type" : "java.lang.Integer",
      "description" : "Request errors",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.last",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (last datapoint)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.windowed",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (over time window)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.last",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing, reported by webserver (percentage, last datapoint)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.windowed",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing, reported by webserver (percentage, over time window)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.max",
      "type" : "java.lang.Integer",
      "description" : "Max processing time for any single request, reported by webserver (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.total",
      "type" : "java.lang.Integer",
      "description" : "Total processing time, reported by webserver (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.total",
      "type" : "java.lang.Integer",
      "description" : "Request count",
      "links" : { }
    }, {
      "name" : "webapp.url",
      "type" : "java.lang.String",
      "description" : "URL",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.database.postgresql.PostgreSqlNode",
    "defaultVersion" : "9.3-1",
    "name" : "PostgreSQL Node",
    "description" : "PostgreSQL is an object-relational database management system (ORDBMS)",
    "iconUrl" : "classpath:///postgresql-logo-200px.png",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "datastore.creation.script.contents",
      "type" : "java.lang.String",
      "defaultValue" : "",
      "description" : "Contensts of creation script to initialize the datastore",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "datastore.creation.script.url",
      "type" : "java.lang.String",
      "defaultValue" : "",
      "description" : "URL of creation script to use to initialize the datastore (ignored if contents are specified)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "9.3-1",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "postgresql.authConfig.file.url",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URL where PostgreSQL host-based authentication configuration file can be found; if not supplied the blueprint uses the default and customises it",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "postgresql.config.file.url",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URL where PostgreSQL configuration file can be found; if not supplied the blueprint uses the default and customises it",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "postgresql.disconnect.on.stop",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "If true, PostgreSQL will immediately disconnet (pg_ctl -m immediate stop) all current connections when the node is stopped",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "postgresql.maxConnections",
      "type" : "java.lang.Integer",
      "defaultValue" : 100,
      "description" : "Maximum number of connections to the database",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "postgresql.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "5432-65535",
      "description" : "PostgreSQL port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "postgresql.sensorpoll",
      "type" : "java.lang.Long",
      "defaultValue" : 1000,
      "description" : "Poll period (in milliseconds)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "postgresql.sharedMemory",
      "type" : "java.lang.String",
      "defaultValue" : "4MB",
      "description" : "Size of shared memory buffer (must specify as kB, MB or GB, minimum 128kB)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "datastore.url",
      "type" : "java.lang.String",
      "description" : "Primary contact URL for a datastore (e.g. mysql://localhost:3306/)",
      "links" : { }
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "postgresql.port",
      "type" : "java.lang.Integer",
      "description" : "PostgreSQL port",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "executeScript",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "commands",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "Executes the given script contents using psql",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.messaging.qpid.QpidBroker",
    "defaultVersion" : "0.20",
    "name" : "Qpid Broker",
    "description" : "Apache Qpid is an open-source messaging system, implementing the Advanced Message Queuing Protocol (AMQP)",
    "iconUrl" : "classpath:///qpid-logo.jpeg",
    "config" : [ {
      "name" : "amqp.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "5672-65535",
      "description" : "AMQP port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "amqp.version",
      "type" : "java.lang.String",
      "defaultValue" : "0-10",
      "description" : "AMQP protocol version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "amqp.virtualHost",
      "type" : "java.lang.String",
      "defaultValue" : "localhost",
      "description" : "AMQP virtual host name",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://download.nextag.com/apache/qpid/${version}/qpid-java-broker-${version}.tar.gz",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "0.20",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.check.hostname.bug",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Check whether hostname is too long and will likely crash Javadue to bug 7089443",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.opts",
      "type" : "java.util.Set",
      "defaultValue" : [ ],
      "description" : "Java command line options",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.sysprops",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Java command line system properties",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Path to JMX driver on the local machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : "AUTODETECT",
      "description" : "What type of JMX agent to use; defaults to null (autodetect) which means JMXMP_AND_RMI allowing firewall access through a single port as well as local access supporting jconsole (unless JMX_SSL_ENABLED is set, in which case it is JMXMP only)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "AUTODETECT",
        "description" : "AUTODETECT"
      }, {
        "value" : "JMXMP",
        "description" : "JMXMP"
      }, {
        "value" : "JMXMP_AND_RMI",
        "description" : "JMXMP_AND_RMI"
      }, {
        "value" : "JMX_RMI_CUSTOM_AGENT",
        "description" : "JMX_RMI_CUSTOM_AGENT"
      }, {
        "value" : "JMX_RMI",
        "description" : "JMX_RMI"
      }, {
        "value" : "NONE",
        "description" : "NONE"
      } ],
      "links" : null
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "defaultValue" : "jmxrmi",
      "description" : "JMX context path",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "31001-65535",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : null,
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "JMX enabled",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "defaultValue" : "admin",
      "description" : "JMX password",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.cert",
      "type" : "java.security.cert.Certificate",
      "defaultValue" : null,
      "description" : "certificate of key used to access a JMX agent",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.key",
      "type" : "java.security.PrivateKey",
      "defaultValue" : null,
      "description" : "key used to access a JMX agent (typically per entity, embedded in the managed JVM)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "JMX over JMXMP enabled with SSL/TLS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "defaultValue" : "admin",
      "description" : "JMX username",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "qpid.http-management.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : null,
      "description" : "Qpid HTTP management plugin port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "rmi.registry.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "1099,19099-65535",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "amqp.port",
      "type" : "java.lang.Integer",
      "description" : "AMQP port",
      "links" : { }
    }, {
      "name" : "amqp.version",
      "type" : "java.lang.String",
      "description" : "AMQP protocol version",
      "links" : { }
    }, {
      "name" : "amqp.virtualHost",
      "type" : "java.lang.String",
      "description" : "AMQP virtual host name",
      "links" : { }
    }, {
      "name" : "broker.url",
      "type" : "java.lang.String",
      "description" : "Broker Connection URL",
      "links" : { }
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "description" : "Path to JMX driver on the local machine",
      "links" : { }
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "description" : "JMX context path",
      "links" : { }
    }, {
      "name" : "jmx.direct.port",
      "type" : "java.lang.Integer",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "java.lang.Integer",
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "description" : "JMX password",
      "links" : { }
    }, {
      "name" : "jmx.service.url",
      "type" : "java.lang.String",
      "description" : "The URL for connecting to the MBean Server",
      "links" : { }
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "description" : "JMX username",
      "links" : { }
    }, {
      "name" : "qpid.http-management.port",
      "type" : "java.lang.Integer",
      "description" : "Qpid HTTP management plugin port",
      "links" : { }
    }, {
      "name" : "rmi.registry.port",
      "type" : "java.lang.Integer",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.messaging.rabbit.RabbitBroker",
    "defaultVersion" : "2.8.7",
    "name" : "RabbitMQ Broker",
    "description" : "RabbitMQ is an open source message broker software (i.e. message-oriented middleware) that implements the Advanced Message Queuing Protocol (AMQP) standard",
    "iconUrl" : "classpath:///RabbitMQLogo.png",
    "config" : [ {
      "name" : "amqp.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "5672-65535",
      "description" : "AMQP port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "amqp.version",
      "type" : "java.lang.String",
      "defaultValue" : "0-9-1",
      "description" : "AMQP protocol version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "amqp.virtualHost",
      "type" : "java.lang.String",
      "defaultValue" : "localhost",
      "description" : "AMQP virtual host name",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://www.rabbitmq.com/releases/rabbitmq-server/v${version}/rabbitmq-server-generic-unix-${version}.tar.gz",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "erlang.version",
      "type" : "java.lang.String",
      "defaultValue" : "R15B",
      "description" : "Erlang runtime version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "2.8.7",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "rabbitmq.management.plugin",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Management plugin will be enabled",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "rabbitmq.management.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "15672-65535",
      "description" : "Port on which management interface will be available",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "rabbitmq.templateUrl",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/messaging/rabbit/rabbitmq.config",
      "description" : "Template file (in freemarker format) for the rabbitmq.config config file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "amqp.port",
      "type" : "java.lang.Integer",
      "description" : "AMQP port",
      "links" : { }
    }, {
      "name" : "amqp.version",
      "type" : "java.lang.String",
      "description" : "AMQP protocol version",
      "links" : { }
    }, {
      "name" : "amqp.virtualHost",
      "type" : "java.lang.String",
      "description" : "AMQP virtual host name",
      "links" : { }
    }, {
      "name" : "broker.url",
      "type" : "java.lang.String",
      "description" : "Broker Connection URL",
      "links" : { }
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "rabbitmq.management.port",
      "type" : "java.lang.Integer",
      "description" : "Port on which management interface will be available",
      "links" : { }
    }, {
      "name" : "rabbitmq.management.url",
      "type" : "java.lang.String",
      "description" : "Management URL is only available if management plugin flag is true",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.nosql.redis.RedisCluster",
    "name" : "Redis Cluster",
    "description" : "Redis is an open-source, networked, in-memory, key-value data store with optional durability",
    "iconUrl" : "classpath:///redis-logo.png",
    "config" : [ ],
    "sensors" : [ {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.nosql.redis.RedisStore",
    "defaultVersion" : "2.8.4",
    "name" : "Redis Server",
    "description" : "Redis is an open-source, networked, in-memory, key-value data store with optional durability",
    "iconUrl" : "classpath:///redis-logo.png",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://download.redis.io/releases/redis-${version}.tar.gz",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "2.8.4",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "redis.config.templateUrl",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/nosql/redis/redis.conf",
      "description" : "Template file (in freemarker format) for the redis.conf config file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "redis.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "6379-65535",
      "description" : "Redis port number",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "redis.commands.processed.total",
      "type" : "java.lang.Integer",
      "description" : "Total number of commands processed by the server",
      "links" : { }
    }, {
      "name" : "redis.connections.received.total",
      "type" : "java.lang.Integer",
      "description" : "Total number of connections accepted by the server",
      "links" : { }
    }, {
      "name" : "redis.keys.evicted",
      "type" : "java.lang.Integer",
      "description" : "Number of evicted keys due to maxmemory limit",
      "links" : { }
    }, {
      "name" : "redis.keys.expired",
      "type" : "java.lang.Integer",
      "description" : "Total number of key expiration events",
      "links" : { }
    }, {
      "name" : "redis.keyspace.hits",
      "type" : "java.lang.Integer",
      "description" : "Number of successful lookup of keys in the main dictionary",
      "links" : { }
    }, {
      "name" : "redis.keyspace.misses",
      "type" : "java.lang.Integer",
      "description" : "Number of failed lookup of keys in the main dictionary",
      "links" : { }
    }, {
      "name" : "redis.port",
      "type" : "java.lang.Integer",
      "description" : "Redis port number",
      "links" : { }
    }, {
      "name" : "redis.uptime",
      "type" : "java.lang.Integer",
      "description" : "Redis uptime in seconds",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.nosql.riak.RiakCluster",
    "name" : "Riak Cluster",
    "description" : "Riak is a distributed NoSQL key-value data store that offers extremely high availability, fault tolerance, operational simplicity and scalability.",
    "iconUrl" : "",
    "config" : [ {
      "name" : "cluster.initial.quorumSize",
      "type" : "java.lang.Integer",
      "defaultValue" : -1,
      "description" : "Initial cluster quorum size - number of initial nodes that must have been successfully started to report success (if < 0, then use value of INITIAL_SIZE)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cluster.initial.size",
      "type" : "java.lang.Integer",
      "defaultValue" : 1,
      "description" : "Initial cluster size",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.availabilityZones",
      "type" : "java.util.Collection",
      "defaultValue" : null,
      "description" : "availability zones to use (if non-null, overrides other configuration)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.customChildFlags",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Additional flags to be passed to children when they are being created",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.factory",
      "type" : "brooklyn.entity.basic.EntityFactory",
      "defaultValue" : null,
      "description" : "factory for creating new cluster members",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.firstmemberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "entity spec for creating new cluster members, used for the very first member if different",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.memberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "entity spec for creating new cluster members",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.numAvailabilityZones",
      "type" : "java.lang.Integer",
      "defaultValue" : null,
      "description" : "number of availability zones to use (will attempt to auto-discover this number)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.quarantineFailedEntities",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "If true, will quarantine entities that fail to start; if false, will get rid of them (i.e. delete them)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.removalstrategy",
      "type" : "com.google.common.base.Function",
      "defaultValue" : null,
      "description" : "strategy for deciding what to remove when down-sizing",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.enable",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Whether to use availability zones, or just deploy everything into the generic location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.failureDetector",
      "type" : "brooklyn.entity.group.DynamicCluster$ZoneFailureDetector",
      "defaultValue" : "brooklyn.entity.group.zoneaware.ProportionalZoneFailureDetector@77acc39c",
      "description" : "Zone failure detector",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.placementStrategy",
      "type" : "brooklyn.entity.group.DynamicCluster$NodePlacementStrategy",
      "defaultValue" : "brooklyn.entity.group.zoneaware.BalancingNodePlacementStrategy@45498134",
      "description" : "Node placement strategy",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.running",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[all;require=0,100.0%]",
      "description" : "Problems check from children actual states (lifecycle), applied by default to members and children, not checking upness, but requiring by default that none are on-fire",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.up",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[atLeastOne;require=1,0.0%]",
      "description" : "Up check, applied by default to members, requiring at least one present and up",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Add delegate child entities for members of the group",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate.nameFormat",
      "type" : "java.lang.String",
      "defaultValue" : "%s",
      "description" : "Delegate members name format string (Use %s for the original entity display name)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "riak.cluster.delayBeforeAdvertisingCluster",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Delay after cluster is started before checking and advertising its availability",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "cluster.entity",
      "type" : "brooklyn.entity.Entity",
      "description" : "The cluster an entity is a member of",
      "links" : { }
    }, {
      "name" : "cluster.first",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is the first member of a cluster",
      "links" : { }
    }, {
      "name" : "cluster.first.entity",
      "type" : "brooklyn.entity.Entity",
      "description" : "The first member of the cluster",
      "links" : { }
    }, {
      "name" : "cluster.member",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is a member of a cluster",
      "links" : { }
    }, {
      "name" : "dynamiccluster.entityQuarantined",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity failed to start, and has been quarantined",
      "links" : { }
    }, {
      "name" : "dynamiccluster.failedSubLocations",
      "type" : "java.util.Set",
      "description" : "Sub locations that seem to have failed",
      "links" : { }
    }, {
      "name" : "dynamiccluster.quarantineGroup",
      "type" : "brooklyn.entity.group.QuarantineGroup",
      "description" : "Group of quarantined entities that failed to start",
      "links" : { }
    }, {
      "name" : "dynamiccluster.subLocations",
      "type" : "java.util.List",
      "description" : "Locations for each availability zone to use",
      "links" : { }
    }, {
      "name" : "group.members",
      "type" : "java.util.Collection",
      "description" : "Members of the group",
      "links" : { }
    }, {
      "name" : "group.members.added",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity added to group members",
      "links" : { }
    }, {
      "name" : "group.members.count",
      "type" : "java.lang.Integer",
      "description" : "Number of members",
      "links" : { }
    }, {
      "name" : "group.members.removed",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity removed from group members",
      "links" : { }
    }, {
      "name" : "main.uri",
      "type" : "java.net.URI",
      "description" : "Main URI for contacting the service/endpoint offered by this entity",
      "links" : { }
    }, {
      "name" : "riak.cluster.isClusterInit",
      "type" : "java.lang.Boolean",
      "description" : "Flag to determine if the cluster was already initialized",
      "links" : { }
    }, {
      "name" : "riak.cluster.isFirstNodeSet",
      "type" : "java.lang.Boolean",
      "description" : "Flag to determine if the first node has been set",
      "links" : { }
    }, {
      "name" : "riak.cluster.nodeList",
      "type" : "java.lang.String",
      "description" : "List of nodes (including ports), comma separated",
      "links" : { }
    }, {
      "name" : "riak.cluster.nodes",
      "type" : "java.util.Map",
      "description" : "Names of all active Riak nodes in the cluster <Entity,Riak Name>",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "replaceMember",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "memberId",
        "type" : "java.lang.String",
        "description" : "The entity id of a member to be replaced",
        "defaultValue" : null
      } ],
      "description" : "Replaces the entity with the given ID, if it is a member; first adds a new member, then removes this one. Returns id of the new entity; or throws exception if couldn't be replaced.",
      "links" : null
    }, {
      "name" : "resize",
      "returnType" : "java.lang.Integer",
      "parameters" : [ {
        "name" : "desiredSize",
        "type" : "java.lang.Integer",
        "description" : "The new size of the cluster",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the entity (e.g. the number of nodes in a cluster)",
      "links" : null
    }, {
      "name" : "resizeByDelta",
      "returnType" : "java.util.Collection",
      "parameters" : [ {
        "name" : "delta",
        "type" : "int",
        "description" : "The change in number of nodes",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the cluster.",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.nosql.riak.RiakNode",
    "defaultVersion" : "2.1.0",
    "name" : "Riak Node",
    "description" : "Riak is a distributed NoSQL key-value data store that offers extremely high availability, fault tolerance, operational simplicity and scalability.",
    "iconUrl" : "",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "defaultValue" : "http://s3.amazonaws.com/downloads.basho.com/riak/${entity.majorVersion}/${entity.fullVersion}/debian/$OS_RELEASE/riak_${entity.fullVersion}-1_amd64.deb",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "defaultValue" : "http://s3.amazonaws.com/downloads.basho.com/riak/${entity.majorVersion}/${entity.fullVersion}/osx/10.8/riak-${entity.fullVersion}-OSX-x86_64.tar.gz",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "defaultValue" : "http://s3.amazonaws.com/downloads.basho.com/riak/${entity.majorVersion}/${entity.fullVersion}/rhel/${entity.osMajorVersion}/riak-${entity.fullVersion}-1.el${entity.osMajorVersion}.x86_64.rpm",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "defaultValue" : "http://s3.amazonaws.com/downloads.basho.com/riak/${entity.majorVersion}/${entity.fullVersion}/ubuntu/$OS_RELEASE/riak_${entity.fullVersion}-1_amd64.deb",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "epmdListenerPort",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "4369",
      "description" : "Erlang Port Mapper Daemon Listener Port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "erlangPortRangeEnd",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "7999-65535",
      "description" : "Erlang Port Range End",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "erlangPortRangeStart",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "6000-65535",
      "description" : "Erlang Port Range Start",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "handoffListenerPort",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8099-65535",
      "description" : "Handoff Listener Port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "2.1.0",
      "description" : "Version to install (Default 2.1.0)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "riak.appConfig.templateUrl",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/nosql/riak/app.config",
      "description" : "Template file (in freemarker format) for the app.config config file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "riak.networking.optimize",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Optimize host networking when running in a VM",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "riak.pbPort",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8087-65535",
      "description" : "Riak Protocol Buffers Port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "riak.riakConf.additionalContent",
      "type" : "java.lang.String",
      "defaultValue" : "",
      "description" : "Template file (in freemarker format) for setting up additional settings in the riak.conf file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "riak.riakConf.templateUrl.linux",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/nosql/riak/riak.conf",
      "description" : "Template file (in freemarker format) for the app.config config file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "riak.riakConf.templateUrl.mac",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/nosql/riak/riak-mac.conf",
      "description" : "Template file (in freemarker format) for the app.config config file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "riak.vmArgs.templateUrl",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/nosql/riak/vm.args",
      "description" : "Template file (in freemarker format) for the vm.args config file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "riak.webPort",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8098-65535",
      "description" : "Riak Web Port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "search.solr.jmx_port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8985-65535",
      "description" : "Solr port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "search.solr.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8093-65535",
      "description" : "Solr port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.debian",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Debian installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.mac",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the MAC binaries tarball (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.rhelcentos",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux RPM installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url.ubuntu",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the linux Ubuntu installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "epmdListenerPort",
      "type" : "java.lang.Integer",
      "description" : "Erlang Port Mapper Daemon Listener Port",
      "links" : { }
    }, {
      "name" : "erlangPortRangeEnd",
      "type" : "java.lang.Integer",
      "description" : "Erlang Port Range End",
      "links" : { }
    }, {
      "name" : "erlangPortRangeStart",
      "type" : "java.lang.Integer",
      "description" : "Erlang Port Range Start",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "handoffListenerPort",
      "type" : "java.lang.Integer",
      "description" : "Handoff Listener Port",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "main.uri",
      "type" : "java.net.URI",
      "description" : "Main URI for contacting the service/endpoint offered by this entity",
      "links" : { }
    }, {
      "name" : "riak.consistent_get_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Strongly consistent read latency",
      "links" : { }
    }, {
      "name" : "riak.consistent_put_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Strongly consistent write latency",
      "links" : { }
    }, {
      "name" : "riak.coord.redirs.total",
      "type" : "java.lang.Integer",
      "description" : "riak.coord.redirs.total",
      "links" : { }
    }, {
      "name" : "riak.install.onPath",
      "type" : "java.lang.Boolean",
      "description" : "Flag to indicate whether Riak is available on the PATH",
      "links" : { }
    }, {
      "name" : "riak.install.package",
      "type" : "java.lang.Boolean",
      "description" : "Flag to indicate whether Riak was installed using an OS package",
      "links" : { }
    }, {
      "name" : "riak.memory.processes.used",
      "type" : "java.lang.Integer",
      "description" : "riak.memory.processes.used",
      "links" : { }
    }, {
      "name" : "riak.node",
      "type" : "java.lang.String",
      "description" : "Returns the riak node name as defined in vm.args",
      "links" : { }
    }, {
      "name" : "riak.node.gets",
      "type" : "java.lang.Integer",
      "description" : "riak.node.gets",
      "links" : { }
    }, {
      "name" : "riak.node.gets.total",
      "type" : "java.lang.Integer",
      "description" : "riak.node.gets.total",
      "links" : { }
    }, {
      "name" : "riak.node.puts",
      "type" : "java.lang.Integer",
      "description" : "riak.node.puts",
      "links" : { }
    }, {
      "name" : "riak.node.puts.total",
      "type" : "java.lang.Integer",
      "description" : "riak.node.puts.total",
      "links" : { }
    }, {
      "name" : "riak.node.riakNodeHasJoinedCluster",
      "type" : "java.lang.Boolean",
      "description" : "Flag to indicate whether the Riak node has joined a cluster member",
      "links" : { }
    }, {
      "name" : "riak.node_get_fsm_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Time between reception of client read request and subsequent response to client",
      "links" : { }
    }, {
      "name" : "riak.node_put_fsm_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Time between reception of client write request and subsequent response to client",
      "links" : { }
    }, {
      "name" : "riak.object_counter_merge_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Time it takes to perform an Update Counter operation",
      "links" : { }
    }, {
      "name" : "riak.object_map_merge_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Time it takes to perform an Update Map operation",
      "links" : { }
    }, {
      "name" : "riak.object_set_merge_time_mean",
      "type" : "java.lang.Integer",
      "description" : "Time it takes to perform an Update Set operation",
      "links" : { }
    }, {
      "name" : "riak.pbPort",
      "type" : "java.lang.Integer",
      "description" : "Riak Protocol Buffers Port",
      "links" : { }
    }, {
      "name" : "riak.pbc.active",
      "type" : "java.lang.Integer",
      "description" : "riak.pbc.active",
      "links" : { }
    }, {
      "name" : "riak.pbc.connects",
      "type" : "java.lang.Integer",
      "description" : "riak.pbc.connects",
      "links" : { }
    }, {
      "name" : "riak.read.repairs.total",
      "type" : "java.lang.Integer",
      "description" : "riak.read.repairs.total",
      "links" : { }
    }, {
      "name" : "riak.sys.process.count",
      "type" : "java.lang.Integer",
      "description" : "riak.sys.process.count",
      "links" : { }
    }, {
      "name" : "riak.vnode.gets",
      "type" : "java.lang.Integer",
      "description" : "riak.vnode.gets",
      "links" : { }
    }, {
      "name" : "riak.vnode.gets.total",
      "type" : "java.lang.Integer",
      "description" : "riak.vnode.gets.total",
      "links" : { }
    }, {
      "name" : "riak.vnode.puts",
      "type" : "java.lang.Integer",
      "description" : "riak.vnode.puts",
      "links" : { }
    }, {
      "name" : "riak.vnode.puts.total",
      "type" : "java.lang.Integer",
      "description" : "riak.vnode.puts.total",
      "links" : { }
    }, {
      "name" : "riak.webPort",
      "type" : "java.lang.Integer",
      "description" : "Riak Web Port",
      "links" : { }
    }, {
      "name" : "ring.members",
      "type" : "java.util.List",
      "description" : "all the riak nodes in the ring",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "search.solr.jmx_port",
      "type" : "java.lang.Integer",
      "description" : "Solr port",
      "links" : { }
    }, {
      "name" : "search.solr.port",
      "type" : "java.lang.Integer",
      "description" : "Solr port",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "bucketTypeActivate",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "bucketTypeName",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "Activate a bucket type",
      "links" : null
    }, {
      "name" : "bucketTypeCreate",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "bucketTypeName",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      }, {
        "name" : "bucketTypeProperties",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "Create or modify a bucket type before activation",
      "links" : null
    }, {
      "name" : "bucketTypeList",
      "returnType" : "java.util.List",
      "parameters" : [ ],
      "description" : "List all currently available bucket types and their activation status",
      "links" : null
    }, {
      "name" : "bucketTypeStatus",
      "returnType" : "java.util.List",
      "parameters" : [ {
        "name" : "bucketTypeName",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "Display the status and properties of a specific bucket type",
      "links" : null
    }, {
      "name" : "bucketTypeUpdate",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "bucketTypeName",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      }, {
        "name" : "bucketTypeProperties",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "Update a bucket type after activation",
      "links" : null
    }, {
      "name" : "joinCluster",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "nodeName",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "Join the Riak cluster on the given node",
      "links" : null
    }, {
      "name" : "leaveCluster",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Leave the Riak cluster",
      "links" : null
    }, {
      "name" : "recoverFailedNode",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "nodeName",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "Recover and join the Riak cluster on the given node",
      "links" : null
    }, {
      "name" : "removeNode",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "nodeName",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "Remove the given node from the Riak cluster",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.database.rubyrep.RubyRepNode",
    "defaultVersion" : "1.2.0",
    "name" : "RubyRep Node",
    "description" : "RubyRep is a database replication system",
    "iconUrl" : "classpath:///rubyrep-logo.jpeg",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "database.rubyrep.configScriptUrl",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URL where RubyRep configuration can be found - disables other configuration options (except version)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "database.rubyrep.leftDatabase",
      "type" : "brooklyn.entity.database.DatastoreMixins$DatastoreCommon",
      "defaultValue" : null,
      "description" : "Brooklyn database entity to use as the left DBMS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "database.rubyrep.leftDatabaseName",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "name of database to use for left db",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "database.rubyrep.leftPassword",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "password to connect to left db",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "database.rubyrep.leftUsername",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "username to connect to left db",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "database.rubyrep.replicationInterval",
      "type" : "java.lang.Integer",
      "defaultValue" : 30,
      "description" : "Replication Interval",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "database.rubyrep.rightDatabase",
      "type" : "brooklyn.entity.database.DatastoreMixins$DatastoreCommon",
      "defaultValue" : null,
      "description" : "Brooklyn database entity to use as the right DBMS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "database.rubyrep.rightDatabaseName",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "name of database to use for right db",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "database.rubyrep.rightPassword",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "password to connect to right db",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "database.rubyrep.rightUsername",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "username to connect to right db",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "database.rubyrep.startupTimeout",
      "type" : "java.lang.Integer",
      "defaultValue" : 120,
      "description" : "Time to wait until databases have started up (in seconds)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "database.rubyrep.tableRegex",
      "type" : "java.lang.String",
      "defaultValue" : ".",
      "description" : "Regular expression to select tables to sync using RubyRep",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "database.rubyrep.templateConfigurationUrl",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/database/rubyrep/rubyrep.conf",
      "description" : "Template file (in freemarker format) for the rubyrep.conf file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://files.rubyforge.vm.bytemark.co.uk/rubyrep/rubyrep-${version}.zip",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "1.2.0",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "leftdatastore.url",
      "type" : "java.lang.String",
      "description" : "Primary contact URL for a datastore (e.g. mysql://localhost:3306/)",
      "links" : { }
    }, {
      "name" : "rightdatastore.url",
      "type" : "java.lang.String",
      "description" : "Primary contact URL for a datastore (e.g. mysql://localhost:3306/)",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.pool.ServerPool",
    "name" : "Server Pool",
    "description" : "Creates a pre-allocated server pool, which other applications can deploy to",
    "iconUrl" : "",
    "config" : [ {
      "name" : "cluster.initial.quorumSize",
      "type" : "java.lang.Integer",
      "defaultValue" : -1,
      "description" : "Initial cluster quorum size - number of initial nodes that must have been successfully started to report success (if < 0, then use value of INITIAL_SIZE)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cluster.initial.size",
      "type" : "java.lang.Integer",
      "defaultValue" : 2,
      "description" : "Initial cluster size",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.availabilityZones",
      "type" : "java.util.Collection",
      "defaultValue" : null,
      "description" : "availability zones to use (if non-null, overrides other configuration)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.customChildFlags",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Additional flags to be passed to children when they are being created",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.factory",
      "type" : "brooklyn.entity.basic.EntityFactory",
      "defaultValue" : null,
      "description" : "factory for creating new cluster members",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.firstmemberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "entity spec for creating new cluster members, used for the very first member if different",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.memberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : "EntitySpec{type=interface brooklyn.entity.machine.MachineEntity}",
      "description" : "entity spec for creating new cluster members",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.numAvailabilityZones",
      "type" : "java.lang.Integer",
      "defaultValue" : null,
      "description" : "number of availability zones to use (will attempt to auto-discover this number)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.quarantineFailedEntities",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "If true, will quarantine entities that fail to start; if false, will get rid of them (i.e. delete them)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.removalstrategy",
      "type" : "com.google.common.base.Function",
      "defaultValue" : null,
      "description" : "strategy for deciding what to remove when down-sizing",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.enable",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Whether to use availability zones, or just deploy everything into the generic location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.failureDetector",
      "type" : "brooklyn.entity.group.DynamicCluster$ZoneFailureDetector",
      "defaultValue" : "brooklyn.entity.group.zoneaware.ProportionalZoneFailureDetector@77acc39c",
      "description" : "Zone failure detector",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.placementStrategy",
      "type" : "brooklyn.entity.group.DynamicCluster$NodePlacementStrategy",
      "defaultValue" : "brooklyn.entity.group.zoneaware.BalancingNodePlacementStrategy@45498134",
      "description" : "Node placement strategy",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.running",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[all;require=0,100.0%]",
      "description" : "Problems check from children actual states (lifecycle), applied by default to members and children, not checking upness, but requiring by default that none are on-fire",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.up",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[atLeastOne;require=1,0.0%]",
      "description" : "Up check, applied by default to members, requiring at least one present and up",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.dynamicLocation.flags",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Extra creation flags for the Location owned by this entity",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.dynamicLocation.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name of the location owned by this entity (default is auto-generated using prefix and suffix keys)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.dynamicLocation.prefix",
      "type" : "java.lang.String",
      "defaultValue" : "dynamic",
      "description" : "The name prefix for the location owned by this entity",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.dynamicLocation.suffix",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name suffix for the location owned by this entity",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Add delegate child entities for members of the group",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate.nameFormat",
      "type" : "java.lang.String",
      "defaultValue" : "%s",
      "description" : "Delegate members name format string (Use %s for the original entity display name)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "cluster.entity",
      "type" : "brooklyn.entity.Entity",
      "description" : "The cluster an entity is a member of",
      "links" : { }
    }, {
      "name" : "cluster.first",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is the first member of a cluster",
      "links" : { }
    }, {
      "name" : "cluster.first.entity",
      "type" : "brooklyn.entity.Entity",
      "description" : "The first member of the cluster",
      "links" : { }
    }, {
      "name" : "cluster.member",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is a member of a cluster",
      "links" : { }
    }, {
      "name" : "dynamiccluster.entityQuarantined",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity failed to start, and has been quarantined",
      "links" : { }
    }, {
      "name" : "dynamiccluster.failedSubLocations",
      "type" : "java.util.Set",
      "description" : "Sub locations that seem to have failed",
      "links" : { }
    }, {
      "name" : "dynamiccluster.quarantineGroup",
      "type" : "brooklyn.entity.group.QuarantineGroup",
      "description" : "Group of quarantined entities that failed to start",
      "links" : { }
    }, {
      "name" : "dynamiccluster.subLocations",
      "type" : "java.util.List",
      "description" : "Locations for each availability zone to use",
      "links" : { }
    }, {
      "name" : "entity.dynamicLocation",
      "type" : "brooklyn.location.Location",
      "description" : "The location owned by this entity",
      "links" : { }
    }, {
      "name" : "entity.dynamicLocation.definition",
      "type" : "brooklyn.location.LocationDefinition",
      "description" : "The location definition for the location owned by this entity",
      "links" : { }
    }, {
      "name" : "entity.dynamicLocation.name",
      "type" : "java.lang.String",
      "description" : "The name of the location owned by this entity (default is auto-generated using prefix and suffix keys)",
      "links" : { }
    }, {
      "name" : "entity.dynamicLocation.spec",
      "type" : "java.lang.String",
      "description" : "The specification string for the location owned by this entity",
      "links" : { }
    }, {
      "name" : "entity.dynamicLocation.status",
      "type" : "java.lang.Boolean",
      "description" : "The status of the location owned by this entity",
      "links" : { }
    }, {
      "name" : "group.members",
      "type" : "java.util.Collection",
      "description" : "Members of the group",
      "links" : { }
    }, {
      "name" : "group.members.added",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity added to group members",
      "links" : { }
    }, {
      "name" : "group.members.count",
      "type" : "java.lang.Integer",
      "description" : "Number of members",
      "links" : { }
    }, {
      "name" : "group.members.removed",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity removed from group members",
      "links" : { }
    }, {
      "name" : "pool.available",
      "type" : "java.lang.Integer",
      "description" : "The number of locations in the pool that are unused",
      "links" : { }
    }, {
      "name" : "pool.claimed",
      "type" : "java.lang.Integer",
      "description" : "The number of locations in the pool that are in use",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "addExistingMachinesFromSpec",
      "returnType" : "java.util.Collection",
      "parameters" : [ {
        "name" : "spec",
        "type" : "java.lang.String",
        "description" : "Spec",
        "defaultValue" : null
      } ],
      "description" : "Adds additional machines to the pool by resolving the given spec.",
      "links" : null
    }, {
      "name" : "replaceMember",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "memberId",
        "type" : "java.lang.String",
        "description" : "The entity id of a member to be replaced",
        "defaultValue" : null
      } ],
      "description" : "Replaces the entity with the given ID, if it is a member; first adds a new member, then removes this one. Returns id of the new entity; or throws exception if couldn't be replaced.",
      "links" : null
    }, {
      "name" : "resize",
      "returnType" : "java.lang.Integer",
      "parameters" : [ {
        "name" : "desiredSize",
        "type" : "java.lang.Integer",
        "description" : "The new size of the cluster",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the entity (e.g. the number of nodes in a cluster)",
      "links" : null
    }, {
      "name" : "resizeByDelta",
      "returnType" : "java.util.Collection",
      "parameters" : [ {
        "name" : "delta",
        "type" : "int",
        "description" : "The change in number of nodes",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the cluster.",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.messaging.storm.StormDeployment",
    "name" : "Storm Deployment",
    "description" : "A Storm cluster. Apache Storm is a distributed realtime computation system. Storm makes it easy to reliably process unbounded streams of data, doing for realtime processing what Hadoop did for batch processing",
    "iconUrl" : "",
    "config" : [ {
      "name" : "storm.supervisors.count",
      "type" : "java.lang.Integer",
      "defaultValue" : 3,
      "description" : "Number of supervisor nodes",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "storm.zookeepers.count",
      "type" : "java.lang.Integer",
      "defaultValue" : 1,
      "description" : "Number of zookeeper nodes",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.messaging.storm.Storm",
    "defaultVersion" : "0.8.2",
    "name" : "Storm Node",
    "description" : "Apache Storm is a distributed realtime computation system. Storm makes it easy to reliably process unbounded streams of data, doing for realtime processing what Hadoop did for batch processing",
    "iconUrl" : "",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "https://dl.dropboxusercontent.com/s/fl4kr7w0oc8ihdw/storm-${version}.zip",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "0.8.2",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.check.hostname.bug",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Check whether hostname is too long and will likely crash Javadue to bug 7089443",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.opts",
      "type" : "java.util.Set",
      "defaultValue" : [ ],
      "description" : "Java command line options",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.sysprops",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Java command line system properties",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Path to JMX driver on the local machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : "AUTODETECT",
      "description" : "What type of JMX agent to use; defaults to null (autodetect) which means JMXMP_AND_RMI allowing firewall access through a single port as well as local access supporting jconsole (unless JMX_SSL_ENABLED is set, in which case it is JMXMP only)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "AUTODETECT",
        "description" : "AUTODETECT"
      }, {
        "value" : "JMXMP",
        "description" : "JMXMP"
      }, {
        "value" : "JMXMP_AND_RMI",
        "description" : "JMXMP_AND_RMI"
      }, {
        "value" : "JMX_RMI_CUSTOM_AGENT",
        "description" : "JMX_RMI_CUSTOM_AGENT"
      }, {
        "value" : "JMX_RMI",
        "description" : "JMX_RMI"
      }, {
        "value" : "NONE",
        "description" : "NONE"
      } ],
      "links" : null
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "defaultValue" : "jmxrmi",
      "description" : "JMX context path",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "31001-65535",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : null,
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "JMX enabled",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "JMX password",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.cert",
      "type" : "java.security.cert.Certificate",
      "defaultValue" : null,
      "description" : "certificate of key used to access a JMX agent",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.key",
      "type" : "java.security.PrivateKey",
      "defaultValue" : null,
      "description" : "key used to access a JMX agent (typically per entity, embedded in the managed JVM)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "JMX over JMXMP enabled with SSL/TLS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "JMX username",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "rmi.registry.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "1099,19099-65535",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "storm.config.templateUrl",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/messaging/storm/storm.yaml",
      "description" : "Template file (in freemarker format) for the storm.yaml config file",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "storm.local.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Setting for Storm local dir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "storm.nimbus.entity",
      "type" : "brooklyn.entity.Entity",
      "defaultValue" : null,
      "description" : "storm.nimbus.entity",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "storm.nimbus.hostname",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "storm.nimbus.hostname",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "storm.role",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "The Storm server role",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NIMBUS",
        "description" : "NIMBUS"
      }, {
        "value" : "SUPERVISOR",
        "description" : "SUPERVISOR"
      }, {
        "value" : "UI",
        "description" : "UI"
      } ],
      "links" : null
    }, {
      "name" : "storm.start.mutex",
      "type" : "java.lang.Object",
      "defaultValue" : null,
      "description" : "storm.start.mutex",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "storm.thrift.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "6627",
      "description" : "Storm Thrift port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "storm.ui.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8080-65535",
      "description" : "Storm UI port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "storm.zeromq.version",
      "type" : "java.lang.String",
      "defaultValue" : "2.1.7",
      "description" : "zeromq version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "storm.zookeeper.ensemble",
      "type" : "brooklyn.entity.zookeeper.ZooKeeperEnsemble",
      "defaultValue" : null,
      "description" : "Zookeeper ensemble entity",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "description" : "Path to JMX driver on the local machine",
      "links" : { }
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "description" : "JMX context path",
      "links" : { }
    }, {
      "name" : "jmx.direct.port",
      "type" : "java.lang.Integer",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "java.lang.Integer",
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "description" : "JMX password",
      "links" : { }
    }, {
      "name" : "jmx.service.url",
      "type" : "java.lang.String",
      "description" : "The URL for connecting to the MBean Server",
      "links" : { }
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "description" : "JMX username",
      "links" : { }
    }, {
      "name" : "rmi.registry.port",
      "type" : "java.lang.Integer",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    }, {
      "name" : "storm.service.jmx.up",
      "type" : "java.lang.Boolean",
      "description" : "Whether JMX is up for this service",
      "links" : { }
    }, {
      "name" : "storm.thrift.port",
      "type" : "java.lang.Integer",
      "description" : "Storm Thrift port",
      "links" : { }
    }, {
      "name" : "storm.ui.port",
      "type" : "java.lang.Integer",
      "description" : "Storm UI port",
      "links" : { }
    }, {
      "name" : "storm.ui.url",
      "type" : "java.lang.String",
      "description" : "URL",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.webapp.tomcat.TomcatServer",
    "defaultVersion" : "7.0.56",
    "name" : "Tomcat Server",
    "description" : "Apache Tomcat is an open source software implementation of the Java Servlet and JavaServer Pages technologies",
    "iconUrl" : "classpath:///tomcat-logo.png",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://download.nextag.com/apache/tomcat/tomcat-7/v${version}/bin/apache-tomcat-${version}.tar.gz",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "http.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8080,18080-65535",
      "description" : "HTTP port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "https.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "8443,18443-65535",
      "description" : "HTTP port (with SSL/TLS)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "7.0.56",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.check.hostname.bug",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Check whether hostname is too long and will likely crash Javadue to bug 7089443",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.opts",
      "type" : "java.util.Set",
      "defaultValue" : [ ],
      "description" : "Java command line options",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "java.sysprops",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Java command line system properties",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Path to JMX driver on the local machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.agent.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : "AUTODETECT",
      "description" : "What type of JMX agent to use; defaults to null (autodetect) which means JMXMP_AND_RMI allowing firewall access through a single port as well as local access supporting jconsole (unless JMX_SSL_ENABLED is set, in which case it is JMXMP only)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "AUTODETECT",
        "description" : "AUTODETECT"
      }, {
        "value" : "JMXMP",
        "description" : "JMXMP"
      }, {
        "value" : "JMXMP_AND_RMI",
        "description" : "JMXMP_AND_RMI"
      }, {
        "value" : "JMX_RMI_CUSTOM_AGENT",
        "description" : "JMX_RMI_CUSTOM_AGENT"
      }, {
        "value" : "JMX_RMI",
        "description" : "JMX_RMI"
      }, {
        "value" : "NONE",
        "description" : "NONE"
      } ],
      "links" : null
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "defaultValue" : "jmxrmi",
      "description" : "JMX context path",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "31001-65535",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : null,
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "JMX enabled",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "JMX password",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.cert",
      "type" : "java.security.cert.Certificate",
      "defaultValue" : null,
      "description" : "certificate of key used to access a JMX agent",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.access.key",
      "type" : "java.security.PrivateKey",
      "defaultValue" : null,
      "description" : "key used to access a JMX agent (typically per entity, embedded in the managed JVM)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.ssl.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "JMX over JMXMP enabled with SSL/TLS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "JMX username",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "rmi.registry.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "1099,19099-65535",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "5m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "tomcat.serverxml",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/webapp/tomcat/server.xml",
      "description" : "The file to template and use as the Tomcat process' server.xml",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "tomcat.shutdownport",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "31880-65535",
      "description" : "Suggested shutdown port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "tomcat.webxml",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/webapp/tomcat/web.xml",
      "description" : "The file to template and use as the Tomcat process' web.xml",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.by.context",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Map of context keys (path in user-facing URL, typically without slashes) to archives (e.g. WARs by URL) to deploy, supporting file: and classpath: prefixes)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.named",
      "type" : "java.util.List",
      "defaultValue" : null,
      "description" : "Archive files to deploy, as URL strings (supporting file: and classpath: prefixes); context (path in user-facing URL) will be inferred by name",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "wars.root",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "WAR file to deploy as the ROOT, as URL (supporting file: and classpath: prefixes)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.enabledProtocols",
      "type" : "java.util.Set",
      "defaultValue" : [ "http" ],
      "description" : "List of enabled protocols (e.g. http, https)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "webapp.https.ssl",
      "type" : "brooklyn.entity.webapp.HttpsSslConfig",
      "defaultValue" : null,
      "description" : "SSL Configuration for HTTPS",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "http.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port",
      "links" : { }
    }, {
      "name" : "https.port",
      "type" : "java.lang.Integer",
      "description" : "HTTP port (with SSL/TLS)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "jmx.agent.local.path",
      "type" : "java.lang.String",
      "description" : "Path to JMX driver on the local machine",
      "links" : { }
    }, {
      "name" : "jmx.context",
      "type" : "java.lang.String",
      "description" : "JMX context path",
      "links" : { }
    }, {
      "name" : "jmx.direct.port",
      "type" : "java.lang.Integer",
      "description" : "JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.direct.port.legacy.NOT_USED",
      "type" : "java.lang.Integer",
      "description" : "Legacy definition JMX direct/private port (e.g. JMX RMI server port, or JMXMP port, but not RMI registry port)",
      "links" : { }
    }, {
      "name" : "jmx.password",
      "type" : "java.lang.String",
      "description" : "JMX password",
      "links" : { }
    }, {
      "name" : "jmx.service.url",
      "type" : "java.lang.String",
      "description" : "The URL for connecting to the MBean Server",
      "links" : { }
    }, {
      "name" : "jmx.user",
      "type" : "java.lang.String",
      "description" : "JMX username",
      "links" : { }
    }, {
      "name" : "rmi.registry.port",
      "type" : "java.lang.Integer",
      "description" : "RMI registry port, used for discovering JMX (private) port",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    }, {
      "name" : "tomcat.shutdownport",
      "type" : "java.lang.Integer",
      "description" : "Suggested shutdown port",
      "links" : { }
    }, {
      "name" : "webapp.deployedWars",
      "type" : "java.util.Set",
      "description" : "Names of archives/contexts that are currently deployed",
      "links" : { }
    }, {
      "name" : "webapp.enabledProtocols",
      "type" : "java.util.Set",
      "description" : "List of enabled protocols (e.g. http, https)",
      "links" : { }
    }, {
      "name" : "webapp.https.ssl",
      "type" : "brooklyn.entity.webapp.HttpsSslConfig",
      "description" : "SSL Configuration for HTTPS",
      "links" : { }
    }, {
      "name" : "webapp.reqs.bytes.received",
      "type" : "java.lang.Long",
      "description" : "Total bytes received by the webserver",
      "links" : { }
    }, {
      "name" : "webapp.reqs.bytes.sent",
      "type" : "java.lang.Long",
      "description" : "Total bytes sent by the webserver",
      "links" : { }
    }, {
      "name" : "webapp.reqs.errors",
      "type" : "java.lang.Integer",
      "description" : "Request errors",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.last",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (last datapoint)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.perSec.windowed",
      "type" : "java.lang.Double",
      "description" : "Reqs/sec (over time window)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.last",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing, reported by webserver (percentage, last datapoint)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.fraction.windowed",
      "type" : "java.lang.Double",
      "description" : "Fraction of time spent processing, reported by webserver (percentage, over time window)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.max",
      "type" : "java.lang.Integer",
      "description" : "Max processing time for any single request, reported by webserver (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.processingTime.total",
      "type" : "java.lang.Integer",
      "description" : "Total processing time, reported by webserver (millis)",
      "links" : { }
    }, {
      "name" : "webapp.reqs.total",
      "type" : "java.lang.Integer",
      "description" : "Request count",
      "links" : { }
    }, {
      "name" : "webapp.tomcat.connectorStatus",
      "type" : "java.lang.String",
      "description" : "Catalina connector state name",
      "links" : { }
    }, {
      "name" : "webapp.url",
      "type" : "java.lang.String",
      "description" : "URL",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "deploy",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "url",
        "type" : "java.lang.String",
        "description" : "URL of WAR file",
        "defaultValue" : null
      }, {
        "name" : "targetName",
        "type" : "java.lang.String",
        "description" : "context path where WAR should be deployed (/ for ROOT)",
        "defaultValue" : null
      } ],
      "description" : "Deploys the given artifact, from a source URL, to a given deployment filename/context",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "undeploy",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "targetName",
        "type" : "java.lang.String",
        "description" : null,
        "defaultValue" : null
      } ],
      "description" : "Undeploys the given context/artifact",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.basic.VanillaSoftwareProcess",
    "defaultVersion" : "0.0.0",
    "name" : "Vanilla Software Process",
    "description" : "A software process configured with scripts, e.g. for launch, check-running and stop",
    "iconUrl" : "",
    "config" : [ {
      "name" : "checkRunning.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "command to determine whether the process is running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "0.0.0",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.command",
      "type" : "java.lang.String",
      "defaultValue" : "./start.sh",
      "description" : "command to run to launch the process",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "stop.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "command to run to stop the process",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.zookeeper.ZooKeeperNode",
    "defaultVersion" : "3.4.5",
    "name" : "ZooKeeper Node",
    "description" : "Apache ZooKeeper is a server which enables highly reliable distributed coordination.",
    "iconUrl" : "",
    "config" : [ {
      "name" : "children.startable.mode",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "children.startable.mode",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "NONE",
        "description" : "NONE"
      }, {
        "value" : "FOREGROUND",
        "description" : "FOREGROUND"
      }, {
        "value" : "FOREGROUND_LATE",
        "description" : "FOREGROUND_LATE"
      }, {
        "value" : "BACKGROUND",
        "description" : "BACKGROUND"
      }, {
        "value" : "BACKGROUND_LATE",
        "description" : "BACKGROUND_LATE"
      } ],
      "links" : null
    }, {
      "name" : "customize.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking customize until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "defaultValue" : "http://apache.fastbull.org/zookeeper/zookeeper-${version}/zookeeper-${version}.tar.gz",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.running",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, if service already running",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "entity.started",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the startup process entirely, for running services",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "files.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of files, to be copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/installs/${(config['install.unique_label']??)?string(config['install.unique_label']!'X',(entity.entityType.simpleName)+((config['install.version']??)?string('_'+(config['install.version']!'X'),'')))}",
      "description" : "Directory for this software to be installed in",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.skip",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Skip the driver install commands entirely, for pre-installed software",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.unique_label",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Provides a label which uniquely identifies an installation, used in the computation of the install dir; this should include something readable, and must include a hash of all data which differentiates an installation (e.g. version, plugins, etc), but should be the same where install dirs can be shared to allow for re-use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "install.version",
      "type" : "java.lang.String",
      "defaultValue" : "3.4.5",
      "description" : "Suggested version",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "launch.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking launch until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "post.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run after the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.install.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the install method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pre.launch.command",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Command to be run prior to the launch method being called on the driver",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provisioning.properties",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Custom properties to be passed in when provisioning a new machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.install.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking install resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "resources.runtime.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking runtime resources until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "defaultValue" : "${config['onbox.base.dir']!config['brooklyn.datadir']!'/<ERROR>-ONBOX_BASE_DIR-not-set'}/apps/${entity.applicationId}/entities/${entity.entityType.simpleName}_${entity.id}",
      "description" : "Directory for this software to be run from",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking setup until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "shell.env",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Map of environment variables to pass to the runtime shell",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "softwareProcess.maxSensorRebindDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "The maximum delay to apply when reconnecting sensors when rebinding to this entity. Brooklyn will wait a random amount of time, up to the value of this config key, to avoid a thundering herd problem when the entity shares its machine with several others. Set to null or to 0 to disable any delay.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.latch",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Latch for blocking start until ready",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "start.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "2m",
      "description" : "Time to wait for process and for SERVICE_UP before failing (in seconds, default 2m)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.install",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before install, to destination name relative to installDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templates.runtime",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Mapping of templates, to be filled in and copied before customisation, to destination name relative to runDir",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "zookeeper.configTemplate",
      "type" : "java.lang.String",
      "defaultValue" : "classpath://brooklyn/entity/messaging/zookeeper/zoo.cfg",
      "description" : "Zookeeper configuration template (in freemarker format)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "zookeeper.election.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "3888-65535",
      "description" : "Zookeeper election ports",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "zookeeper.leader.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "2888-65535",
      "description" : "Zookeeper leader ports",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "zookeeper.port",
      "type" : "brooklyn.location.PortRange",
      "defaultValue" : "2181-65535",
      "description" : "Zookeeper port",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "download.addon.urls",
      "type" : "java.util.Map",
      "description" : "URL patterns for downloading named add-ons (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "download.url",
      "type" : "java.lang.String",
      "description" : "URL pattern for downloading the installer (will substitute things like ${version} automatically)",
      "links" : { }
    }, {
      "name" : "expandedinstall.dir",
      "type" : "java.lang.String",
      "description" : "Directory for installed artifacts (e.g. expanded dir after unpacking .tgz)",
      "links" : { }
    }, {
      "name" : "host.address",
      "type" : "java.lang.String",
      "description" : "Host IP address",
      "links" : { }
    }, {
      "name" : "host.name",
      "type" : "java.lang.String",
      "description" : "Host name",
      "links" : { }
    }, {
      "name" : "host.subnet.address",
      "type" : "java.lang.String",
      "description" : "Host address as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "host.subnet.hostname",
      "type" : "java.lang.String",
      "description" : "Host name as known internally in the subnet where it is running (if different to host.name)",
      "links" : { }
    }, {
      "name" : "install.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be installed in",
      "links" : { }
    }, {
      "name" : "run.dir",
      "type" : "java.lang.String",
      "description" : "Directory for this software to be run from",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.process.isRunning",
      "type" : "java.lang.Boolean",
      "description" : "Whether the process for the service is confirmed as running",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "softwareprocess.pid.file",
      "type" : "java.lang.String",
      "description" : "PID file",
      "links" : { }
    }, {
      "name" : "softwareservice.provisioningLocation",
      "type" : "brooklyn.location.MachineProvisioningLocation",
      "description" : "Location used to provision a machine where this is running",
      "links" : { }
    }, {
      "name" : "zookeeper.election.port",
      "type" : "java.lang.Integer",
      "description" : "Zookeeper election ports",
      "links" : { }
    }, {
      "name" : "zookeeper.leader.port",
      "type" : "java.lang.Integer",
      "description" : "Zookeeper leader ports",
      "links" : { }
    }, {
      "name" : "zookeeper.myid",
      "type" : "java.lang.Integer",
      "description" : "ZooKeeper node's myId",
      "links" : { }
    }, {
      "name" : "zookeeper.outstandingRequests",
      "type" : "java.lang.Long",
      "description" : "Outstanding request count",
      "links" : { }
    }, {
      "name" : "zookeeper.packets.received",
      "type" : "java.lang.Long",
      "description" : "Total packets received",
      "links" : { }
    }, {
      "name" : "zookeeper.packets.sent",
      "type" : "java.lang.Long",
      "description" : "Total packets sent",
      "links" : { }
    }, {
      "name" : "zookeeper.port",
      "type" : "java.lang.Integer",
      "description" : "Zookeeper port",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.entity.zookeeper.ZooKeeperEnsemble",
    "name" : "ZooKeeper ensemble",
    "description" : "A cluster of ZooKeeper servers. Apache ZooKeeper enables highly reliable distributed coordination.",
    "iconUrl" : "",
    "config" : [ {
      "name" : "cluster.initial.quorumSize",
      "type" : "java.lang.Integer",
      "defaultValue" : -1,
      "description" : "Initial cluster quorum size - number of initial nodes that must have been successfully started to report success (if < 0, then use value of INITIAL_SIZE)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "cluster.initial.size",
      "type" : "java.lang.Integer",
      "defaultValue" : 3,
      "description" : "Initial cluster size",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.availabilityZones",
      "type" : "java.util.Collection",
      "defaultValue" : null,
      "description" : "availability zones to use (if non-null, overrides other configuration)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.customChildFlags",
      "type" : "java.util.Map",
      "defaultValue" : { },
      "description" : "Additional flags to be passed to children when they are being created",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.factory",
      "type" : "brooklyn.entity.basic.EntityFactory",
      "defaultValue" : null,
      "description" : "factory for creating new cluster members",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.firstmemberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "entity spec for creating new cluster members, used for the very first member if different",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.memberspec",
      "type" : "brooklyn.entity.proxying.EntitySpec",
      "defaultValue" : null,
      "description" : "entity spec for creating new cluster members",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.numAvailabilityZones",
      "type" : "java.lang.Integer",
      "defaultValue" : null,
      "description" : "number of availability zones to use (will attempt to auto-discover this number)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.quarantineFailedEntities",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "If true, will quarantine entities that fail to start; if false, will get rid of them (i.e. delete them)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.removalstrategy",
      "type" : "com.google.common.base.Function",
      "defaultValue" : null,
      "description" : "strategy for deciding what to remove when down-sizing",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.enable",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Whether to use availability zones, or just deploy everything into the generic location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.failureDetector",
      "type" : "brooklyn.entity.group.DynamicCluster$ZoneFailureDetector",
      "defaultValue" : "brooklyn.entity.group.zoneaware.ProportionalZoneFailureDetector@77acc39c",
      "description" : "Zone failure detector",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dynamiccluster.zone.placementStrategy",
      "type" : "brooklyn.entity.group.DynamicCluster$NodePlacementStrategy",
      "defaultValue" : "brooklyn.entity.group.zoneaware.BalancingNodePlacementStrategy@45498134",
      "description" : "Node placement strategy",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.running",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[all;require=0,100.0%]",
      "description" : "Problems check from children actual states (lifecycle), applied by default to members and children, not checking upness, but requiring by default that none are on-fire",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "enricher.service_state.children_and_members.quorum.up",
      "type" : "brooklyn.util.collections.QuorumCheck",
      "defaultValue" : "QuorumCheck[atLeastOne;require=1,0.0%]",
      "description" : "Up check, applied by default to members, requiring at least one present and up",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Add delegate child entities for members of the group",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "group.members.delegate.nameFormat",
      "type" : "java.lang.String",
      "defaultValue" : "%s",
      "description" : "Delegate members name format string (Use %s for the original entity display name)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "zookeeper.cluster.name",
      "type" : "java.lang.String",
      "defaultValue" : "BrooklynZookeeperCluster",
      "description" : "Name of the Zookeeper cluster",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ {
      "name" : "cluster.entity",
      "type" : "brooklyn.entity.Entity",
      "description" : "The cluster an entity is a member of",
      "links" : { }
    }, {
      "name" : "cluster.first",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is the first member of a cluster",
      "links" : { }
    }, {
      "name" : "cluster.first.entity",
      "type" : "brooklyn.entity.Entity",
      "description" : "The first member of the cluster",
      "links" : { }
    }, {
      "name" : "cluster.member",
      "type" : "java.lang.Boolean",
      "description" : "Set on an entity if it is a member of a cluster",
      "links" : { }
    }, {
      "name" : "dynamiccluster.entityQuarantined",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity failed to start, and has been quarantined",
      "links" : { }
    }, {
      "name" : "dynamiccluster.failedSubLocations",
      "type" : "java.util.Set",
      "description" : "Sub locations that seem to have failed",
      "links" : { }
    }, {
      "name" : "dynamiccluster.quarantineGroup",
      "type" : "brooklyn.entity.group.QuarantineGroup",
      "description" : "Group of quarantined entities that failed to start",
      "links" : { }
    }, {
      "name" : "dynamiccluster.subLocations",
      "type" : "java.util.List",
      "description" : "Locations for each availability zone to use",
      "links" : { }
    }, {
      "name" : "group.members",
      "type" : "java.util.Collection",
      "description" : "Members of the group",
      "links" : { }
    }, {
      "name" : "group.members.added",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity added to group members",
      "links" : { }
    }, {
      "name" : "group.members.count",
      "type" : "java.lang.Integer",
      "description" : "Number of members",
      "links" : { }
    }, {
      "name" : "group.members.removed",
      "type" : "brooklyn.entity.Entity",
      "description" : "Entity removed from group members",
      "links" : { }
    }, {
      "name" : "service.isUp",
      "type" : "java.lang.Boolean",
      "description" : "Whether the service is active and availability (confirmed and monitored)",
      "links" : { }
    }, {
      "name" : "service.state",
      "type" : "brooklyn.entity.basic.Lifecycle",
      "description" : "Actual lifecycle state of the service",
      "links" : { }
    }, {
      "name" : "zookeeper.cluster.name",
      "type" : "java.lang.String",
      "description" : "Name of the Zookeeper cluster",
      "links" : { }
    }, {
      "name" : "zookeeper.servers",
      "type" : "java.util.List",
      "description" : "Hostnames to connect to cluster with",
      "links" : { }
    } ],
    "effectors" : [ {
      "name" : "replaceMember",
      "returnType" : "java.lang.String",
      "parameters" : [ {
        "name" : "memberId",
        "type" : "java.lang.String",
        "description" : "The entity id of a member to be replaced",
        "defaultValue" : null
      } ],
      "description" : "Replaces the entity with the given ID, if it is a member; first adds a new member, then removes this one. Returns id of the new entity; or throws exception if couldn't be replaced.",
      "links" : null
    }, {
      "name" : "resize",
      "returnType" : "java.lang.Integer",
      "parameters" : [ {
        "name" : "desiredSize",
        "type" : "java.lang.Integer",
        "description" : "The new size of the cluster",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the entity (e.g. the number of nodes in a cluster)",
      "links" : null
    }, {
      "name" : "resizeByDelta",
      "returnType" : "java.util.Collection",
      "parameters" : [ {
        "name" : "delta",
        "type" : "int",
        "description" : "The change in number of nodes",
        "defaultValue" : null
      } ],
      "description" : "Changes the size of the cluster.",
      "links" : null
    }, {
      "name" : "restart",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Restart the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "start",
      "returnType" : "void",
      "parameters" : [ {
        "name" : "locations",
        "type" : "java.lang.Object",
        "description" : "The location or locations to start in, as a string, a location object, a list of strings, or a list of location objects",
        "defaultValue" : null
      } ],
      "description" : "Start the process/service represented by an entity",
      "links" : null
    }, {
      "name" : "stop",
      "returnType" : "void",
      "parameters" : [ ],
      "description" : "Stop the process/service represented by an entity",
      "links" : null
    } ]
  } ],
  "policies" : [ {
    "type" : "brooklyn.policy.autoscaling.AutoScalerPolicy",
    "name" : "Auto-scaler",
    "description" : "Policy that is attached to a Resizable entity and dynamically adjusts its size in response to either keep a metric within a given range, or in response to POOL_COLD and POOL_HOT events",
    "iconUrl" : "",
    "config" : [ {
      "name" : "autoscaler.currentSizeOperator",
      "type" : "com.google.common.base.Function",
      "defaultValue" : "brooklyn.policy.autoscaling.AutoScalerPolicy$4@57bba615",
      "description" : null,
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "autoscaler.entityWithMetric",
      "type" : "brooklyn.entity.Entity",
      "defaultValue" : null,
      "description" : null,
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "autoscaler.maxPoolSize",
      "type" : "java.lang.Integer",
      "defaultValue" : 2147483647,
      "description" : null,
      "reconfigurable" : true,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "autoscaler.maxReachedNotificationDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "0ms",
      "description" : "Time that we consistently wanted to go above the maxPoolSize for, after which the maxSizeReachedSensor (if any) will be emitted",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "autoscaler.maxSizeReachedSensor",
      "type" : "brooklyn.event.basic.BasicNotificationSensor",
      "defaultValue" : null,
      "description" : "Sensor for which a notification will be emitted (on the associated entity) when we consistently wanted to resize the pool above the max allowed size, for maxReachedNotificationDelay milliseconds",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "autoscaler.metric",
      "type" : "brooklyn.event.AttributeSensor",
      "defaultValue" : null,
      "description" : null,
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "autoscaler.metricLowerBound",
      "type" : "java.lang.Number",
      "defaultValue" : null,
      "description" : null,
      "reconfigurable" : true,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "autoscaler.metricUpperBound",
      "type" : "java.lang.Number",
      "defaultValue" : null,
      "description" : null,
      "reconfigurable" : true,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "autoscaler.minPeriodBetweenExecs",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "100ms",
      "description" : null,
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "autoscaler.minPoolSize",
      "type" : "java.lang.Integer",
      "defaultValue" : 0,
      "description" : null,
      "reconfigurable" : true,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "autoscaler.poolColdSensor",
      "type" : "brooklyn.event.basic.BasicNotificationSensor",
      "defaultValue" : "Sensor: resizablepool.cold (java.util.Map)",
      "description" : null,
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "autoscaler.poolHotSensor",
      "type" : "brooklyn.event.basic.BasicNotificationSensor",
      "defaultValue" : "Sensor: resizablepool.hot (java.util.Map)",
      "description" : null,
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "autoscaler.poolOkSensor",
      "type" : "brooklyn.event.basic.BasicNotificationSensor",
      "defaultValue" : "Sensor: resizablepool.cold (java.util.Map)",
      "description" : null,
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "autoscaler.resizeDownStabilizationDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "0ms",
      "description" : null,
      "reconfigurable" : true,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "autoscaler.resizeOperator",
      "type" : "brooklyn.policy.autoscaling.ResizeOperator",
      "defaultValue" : "brooklyn.policy.autoscaling.AutoScalerPolicy$3@46eb524e",
      "description" : null,
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "autoscaler.resizeUpStabilizationDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "0ms",
      "description" : null,
      "reconfigurable" : true,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.policy.ha.ConnectionFailureDetector",
    "name" : "Connection Failure Detector",
    "description" : "HA policy for monitoring a host:port, emitting an event if the connection is lost/restored",
    "iconUrl" : "",
    "config" : [ {
      "name" : "connectionFailureDetector.endpoint",
      "type" : "com.google.common.net.HostAndPort",
      "defaultValue" : null,
      "description" : "connectionFailureDetector.endpoint",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "connectionFailureDetector.pollPeriod",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "1s",
      "description" : "",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "connectionFailureDetector.serviceFailedStabilizationDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "0ms",
      "description" : "Time period for which the connection must be consistently down for (e.g. doesn't report down-up-down) before concluding failure. Note that long TCP timeouts mean there can be long (e.g. 70 second) delays in noticing a connection refused condition.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "connectionFailureDetector.serviceRecoveredStabilizationDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "0ms",
      "description" : "For a failed connection, time period for which the connection must be consistently up for (e.g. doesn't report up-down-up) before concluding recovered",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "failureDetector.pollPeriod",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "1s",
      "description" : "",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "failureDetector.sensor.fail",
      "type" : "brooklyn.event.Sensor",
      "defaultValue" : "Sensor: ha.entityFailed (brooklyn.policy.ha.HASensors$FailureDescriptor)",
      "description" : "A sensor which will indicate failure when set",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "failureDetector.sensor.recover",
      "type" : "brooklyn.event.Sensor",
      "defaultValue" : "Sensor: ha.entityRecovered (brooklyn.policy.ha.HASensors$FailureDescriptor)",
      "description" : "A sensor which will indicate recovery from failure when set",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "failureDetector.serviceFailedStabilizationDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "0ms",
      "description" : "Time period for which the health check consistently fails (e.g. doesn't report failed-ok-faled) before concluding failure.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "failureDetector.serviceRecoveredStabilizationDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "0ms",
      "description" : "Time period for which the health check succeeds continiually (e.g. doesn't report ok-failed-ok) before concluding recovered",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.policy.followthesun.FollowTheSunPolicy",
    "name" : "Follow the Sun",
    "description" : "Policy for moving \"work\" around to follow the demand; the work can be any \"Movable\" entity",
    "iconUrl" : "",
    "config" : [ ]
  }, {
    "type" : "brooklyn.policy.loadbalancing.LoadBalancingPolicy",
    "name" : "Load Balancer",
    "description" : "Policy that is attached to a pool of \"containers\", each of which can host one or more migratable \"items\". The policy monitors the workrates of the items and effects migrations in an attempt to ensure that the containers are all sufficiently utilized without any of them being overloaded.",
    "iconUrl" : "",
    "config" : [ ]
  }, {
    "type" : "brooklyn.policy.ha.ServiceReplacer",
    "name" : "Service Replacer",
    "description" : "HA policy for replacing a failed member of a group",
    "iconUrl" : "",
    "config" : [ {
      "name" : "failOnNumRecurringFailures",
      "type" : "java.lang.Integer",
      "defaultValue" : 5,
      "description" : "abandon replace if replacement has failed this many times (100% of attempts) within the time interval",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "failOnRecurringFailuresInThisDuration",
      "type" : "java.lang.Long",
      "defaultValue" : 300000,
      "description" : "abandon replace if replacement has failed many times within this time interval",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "failureSensorToMonitor",
      "type" : "brooklyn.event.Sensor",
      "defaultValue" : "Sensor: ha.entityFailed.restart (brooklyn.policy.ha.HASensors$FailureDescriptor)",
      "description" : "",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setOnFireOnFailure",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "ticker",
      "type" : "com.google.common.base.Ticker",
      "defaultValue" : null,
      "description" : "A time source (defaults to system-clock, which is almost certainly what's wanted, except in tests)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.policy.ha.ServiceRestarter",
    "name" : "Service Restarter",
    "description" : "HA policy for restarting a service automatically, and for emitting an events if the service repeatedly fails",
    "iconUrl" : "",
    "config" : [ {
      "name" : "failOnRecurringFailuresInThisDuration",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "3m",
      "description" : "Reports entity as failed if it fails two or more times in this time window",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "failureSensorToMonitor",
      "type" : "brooklyn.event.Sensor",
      "defaultValue" : "Sensor: ha.entityFailed (brooklyn.policy.ha.HASensors$FailureDescriptor)",
      "description" : "",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setOnFireOnFailure",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ]
  }, {
    "type" : "brooklyn.policy.ha.SshMachineFailureDetector",
    "name" : "Ssh Connectivity Failure Detector",
    "description" : "HA policy for monitoring an SshMachine, emitting an event if the connection is lost/restored",
    "iconUrl" : "",
    "config" : [ {
      "name" : "failureDetector.pollPeriod",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "1s",
      "description" : "",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "failureDetector.sensor.fail",
      "type" : "brooklyn.event.Sensor",
      "defaultValue" : "Sensor: ha.entityFailed (brooklyn.policy.ha.HASensors$FailureDescriptor)",
      "description" : "A sensor which will indicate failure when set",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "failureDetector.sensor.recover",
      "type" : "brooklyn.event.Sensor",
      "defaultValue" : "Sensor: ha.entityRecovered (brooklyn.policy.ha.HASensors$FailureDescriptor)",
      "description" : "A sensor which will indicate recovery from failure when set",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "failureDetector.serviceFailedStabilizationDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "0ms",
      "description" : "Time period for which the health check consistently fails (e.g. doesn't report failed-ok-faled) before concluding failure.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "failureDetector.serviceRecoveredStabilizationDelay",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "0ms",
      "description" : "Time period for which the health check succeeds continiually (e.g. doesn't report ok-failed-ok) before concluding recovered",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "ha.sshConnection.timeout",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "10s",
      "description" : "How long to wait for conneciton before declaring failure",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ]
  } ],
  "enrichers" : [ ],
  "locations" : [ {
    "type" : "brooklyn.entity.pool.ServerPoolLocation",
    "config" : [ {
      "name" : "maxLocations",
      "type" : "java.lang.Integer",
      "defaultValue" : 0,
      "description" : "The maximum number of sub-locations that can be created; 0 for unlimited",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "owner",
      "type" : "brooklyn.entity.Entity",
      "defaultValue" : null,
      "description" : "The entity owning this location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "pool.location.owner",
      "type" : "brooklyn.entity.pool.ServerPool",
      "defaultValue" : null,
      "description" : "pool.location.owner",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.AddressableLocation",
    "config" : [ ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.MachineLocation",
    "config" : [ ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.MachineManagementMixins$RichMachineProvisioningLocation",
    "config" : [ ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.MachineProvisioningLocation",
    "config" : [ ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.ProvisioningLocation",
    "config" : [ ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.access.PortForwardManager",
    "config" : [ {
      "name" : "brooklyn.portForwardManager.startingPort",
      "type" : "java.lang.Integer",
      "defaultValue" : 11000,
      "description" : "The starting port for assigning port numbers, such as for DNAT",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "scope",
      "type" : "java.lang.String",
      "defaultValue" : "global",
      "description" : "The scope that this applies to, defaulting to global",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.access.PortForwardManagerAuthority",
    "deprecated" : true,
    "config" : [ {
      "name" : "brooklyn.portForwardManager.startingPort",
      "type" : "java.lang.Integer",
      "defaultValue" : 11000,
      "description" : "The starting port for assigning port numbers, such as for DNAT",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "scope",
      "type" : "java.lang.String",
      "defaultValue" : "global",
      "description" : "The scope that this applies to, defaulting to global",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.access.PortForwardManagerClient",
    "deprecated" : true,
    "config" : [ {
      "name" : "brooklyn.portForwardManager.startingPort",
      "type" : "java.lang.Integer",
      "defaultValue" : 11000,
      "description" : "The starting port for assigning port numbers, such as for DNAT",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "scope",
      "type" : "java.lang.String",
      "defaultValue" : "global",
      "description" : "The scope that this applies to, defaulting to global",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.access.PortForwardManagerImpl",
    "config" : [ {
      "name" : "brooklyn.portForwardManager.startingPort",
      "type" : "java.lang.Integer",
      "defaultValue" : 11000,
      "description" : "The starting port for assigning port numbers, such as for DNAT",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "scope",
      "type" : "java.lang.String",
      "defaultValue" : "global",
      "description" : "The scope that this applies to, defaulting to global",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.basic.AbstractLocation",
    "config" : [ {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.basic.AggregatingMachineProvisioningLocation",
    "config" : [ {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.basic.FixedListMachineProvisioningLocation",
    "config" : [ {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.basic.LocalhostMachineProvisioningLocation",
    "config" : [ {
      "name" : "onbox.base.dir.skipResolution",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Whether to skip on-box directory resolution (which can require ssh'ing), and just assume the directory exists; can be set on machine or on entity",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.basic.LocalhostMachineProvisioningLocation$LocalhostMachine",
    "config" : [ {
      "name" : "allocatePTY",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "whether to allocate PTY (vt100); if true then stderr is sent to stdout, but sometimes required for sudo'ing due to requiretty",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklyn.ssh.config.host",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Host to connect to (required)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklyn.ssh.config.port",
      "type" : "java.lang.Integer",
      "defaultValue" : 22,
      "description" : "Port on host to connect to",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "close",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Close the SSH connection after use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "detectMachineDetails",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Attempt to detect machine details automatically. Works with SSH-accessible Linux instances.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "env",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "environment variables to pass to the remote SSH shell session",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "err",
      "type" : "java.io.OutputStream",
      "defaultValue" : null,
      "description" : "err",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "localTempDir",
      "type" : "java.lang.String",
      "defaultValue" : "/tmp/brooklyn-valentin-ssh-tmp",
      "description" : "The directory on the local machine (i.e. running brooklyn) for writing temp files",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "logPrefix",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "logPrefix",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "machineDetails",
      "type" : "brooklyn.location.MachineDetails",
      "defaultValue" : null,
      "description" : "machineDetails",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "noStderrLogging",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "whether to disable logging of stderr from SSH commands (e.g. for verbose commands)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "noStdoutLogging",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "whether to disable logging of stdout from SSH commands (e.g. for verbose commands)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "onbox.base.dir.skipResolution",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Whether to skip on-box directory resolution (which can require ssh'ing), and just assume the directory exists; can be set on machine or on entity",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "out",
      "type" : "java.io.OutputStream",
      "defaultValue" : null,
      "description" : "out",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "password",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Password to use to connect",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyData",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "the private ssh key (e.g. contents of an id_rsa or id_dsa file)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyFile",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "the path of an ssh private key file; leave blank to use defaults (i.e. ~/.ssh/id_rsa and id_dsa)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyPassphrase",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "the passphrase for the ssh private key",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "scpExecutable",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Allows an `scp` executable file to be specified, to be used in place of the default (programmatic) java ssh client",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "scriptDir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "directory where scripts should be placed and executed on the SSH target machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "sshCacheExpiryDuration",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "5m",
      "description" : "Expiry time for unused cached ssh connections",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "sshExecutable",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Allows an `ssh` executable file to be specified, to be used in place of the default (programmatic) java ssh client",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "unique",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Unique ID for the SSH connection",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.basic.LocationInternal",
    "config" : [ {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.basic.MultiLocation",
    "config" : [ {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "subLocations",
      "type" : "java.util.List",
      "defaultValue" : null,
      "description" : "The sub-machines that this location can delegate to",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.basic.SimulatedLocation",
    "config" : [ {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.basic.SingleMachineProvisioningLocation",
    "config" : [ {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.basic.SshMachineLocation",
    "config" : [ {
      "name" : "allocatePTY",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "whether to allocate PTY (vt100); if true then stderr is sent to stdout, but sometimes required for sudo'ing due to requiretty",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklyn.ssh.config.host",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Host to connect to (required)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklyn.ssh.config.port",
      "type" : "java.lang.Integer",
      "defaultValue" : 22,
      "description" : "Port on host to connect to",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "close",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Close the SSH connection after use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "detectMachineDetails",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Attempt to detect machine details automatically. Works with SSH-accessible Linux instances.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "env",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "environment variables to pass to the remote SSH shell session",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "err",
      "type" : "java.io.OutputStream",
      "defaultValue" : null,
      "description" : "err",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "localTempDir",
      "type" : "java.lang.String",
      "defaultValue" : "/tmp/brooklyn-valentin-ssh-tmp",
      "description" : "The directory on the local machine (i.e. running brooklyn) for writing temp files",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "logPrefix",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "logPrefix",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "machineDetails",
      "type" : "brooklyn.location.MachineDetails",
      "defaultValue" : null,
      "description" : "machineDetails",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "noStderrLogging",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "whether to disable logging of stderr from SSH commands (e.g. for verbose commands)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "noStdoutLogging",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "whether to disable logging of stdout from SSH commands (e.g. for verbose commands)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "out",
      "type" : "java.io.OutputStream",
      "defaultValue" : null,
      "description" : "out",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "password",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Password to use to connect",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyData",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "the private ssh key (e.g. contents of an id_rsa or id_dsa file)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyFile",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "the path of an ssh private key file; leave blank to use defaults (i.e. ~/.ssh/id_rsa and id_dsa)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyPassphrase",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "the passphrase for the ssh private key",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "scpExecutable",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Allows an `scp` executable file to be specified, to be used in place of the default (programmatic) java ssh client",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "scriptDir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "directory where scripts should be placed and executed on the SSH target machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "sshCacheExpiryDuration",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "5m",
      "description" : "Expiry time for unused cached ssh connections",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "sshExecutable",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Allows an `ssh` executable file to be specified, to be used in place of the default (programmatic) java ssh client",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "unique",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Unique ID for the SSH connection",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.cloud.AbstractCloudMachineProvisioningLocation",
    "config" : [ {
      "name" : "availabilityZone",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "availabilityZone",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "callerContext",
      "type" : "java.lang.Object",
      "defaultValue" : null,
      "description" : "An object whose toString is used for logging, to indicate wherefore a VM is being created",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "credential",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "credential",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "destroyOnFailure",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Whether to destroy the VM if provisioningLocation.obtain() fails",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "endpoint",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "endpoint",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "identity",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "identity",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "inboundPorts",
      "type" : "java.lang.Object",
      "defaultValue" : null,
      "description" : "Inbound ports to be applied when creating a VM, on supported clouds (either a single port as a String, or an Iterable<Integer> or Integer[])",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "logCredentials",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Whether to log credentials of a new VM - strongly recommended never be used in production, as it is a big security hole!",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "minCores",
      "type" : "java.lang.Integer",
      "defaultValue" : null,
      "description" : "Minimum number of cores, for use in selecting the machine/hardware profile",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "minDisk",
      "type" : "java.lang.Object",
      "defaultValue" : null,
      "description" : "Minimum size of disk, either as string (100gb) or number of GB (100), for use in selecting the machine/hardware profile",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "minRam",
      "type" : "java.lang.Object",
      "defaultValue" : null,
      "description" : "Minimum amount of RAM, either as string (4gb) or number of MB (4096), for use in selecting the machine/hardware profile",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "os64Bit",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Whether to require 64-bit OS images (true), 32-bit images (false), or either (null)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "password",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "password to use for ssh; note some images do not allow password-based ssh access",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "private-key-data",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "ssh private key string to use (takes precedence over privateKeyFile)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "private-key-file",
      "type" : "java.lang.String",
      "defaultValue" : "/home/valentin/.ssh/id_rsa:/home/valentin/.ssh/id_dsa",
      "description" : "a ':' separated list of ssh private key files; uses first in list that can be read",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "private-key-passphrase",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "privateKeyPassphrase",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyData",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "ssh private key string to use (takes precedence over privateKeyFile)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyFile",
      "type" : "java.lang.String",
      "defaultValue" : "/home/valentin/.ssh/id_rsa:/home/valentin/.ssh/id_dsa",
      "description" : "a ':' separated list of ssh private key files; uses first in list that can be read",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyPassphrase",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "privateKeyPassphrase",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "public-key-data",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "ssh public key string to use (takes precedence over publicKeyFile)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "public-key-file",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "ssh public key file to use; if blank will infer from privateKeyFile by appending \".pub\"",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "publicKeyData",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "ssh public key string to use (takes precedence over publicKeyFile)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "publicKeyFile",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "ssh public key file to use; if blank will infer from privateKeyFile by appending \".pub\"",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "region",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "region",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "required.ports",
      "type" : "java.lang.Object",
      "defaultValue" : null,
      "description" : "Required additional ports to be applied when creating a VM, on supported clouds (either a single port as an Integer, or an Iterable<Integer> or Integer[])",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "user",
      "type" : "java.lang.String",
      "defaultValue" : "valentin",
      "description" : "user account for normal access to the remote machine, defaulting to local user",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "vmNameMaxLength",
      "type" : "java.lang.Integer",
      "defaultValue" : 61,
      "description" : "Maximum length of VM name",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "waitForSshable",
      "type" : "java.lang.String",
      "defaultValue" : "5m",
      "description" : "Whether and how long to wait for a newly provisioned VM to be accessible via ssh; if 'false', won't check; if 'true' uses default duration; otherwise accepts a time string e.g. '5m' (the default) or a number of milliseconds",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.jclouds.AbstractJcloudsSubnetSshMachineLocation",
    "config" : [ {
      "name" : "allocatePTY",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "whether to allocate PTY (vt100); if true then stderr is sent to stdout, but sometimes required for sudo'ing due to requiretty",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklyn.ssh.config.host",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Host to connect to (required)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklyn.ssh.config.port",
      "type" : "java.lang.Integer",
      "defaultValue" : 22,
      "description" : "Port on host to connect to",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "close",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Close the SSH connection after use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "detectMachineDetails",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Attempt to detect machine details automatically. Works with SSH-accessible Linux instances.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "env",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "environment variables to pass to the remote SSH shell session",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "err",
      "type" : "java.io.OutputStream",
      "defaultValue" : null,
      "description" : "err",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "localTempDir",
      "type" : "java.lang.String",
      "defaultValue" : "/tmp/brooklyn-valentin-ssh-tmp",
      "description" : "The directory on the local machine (i.e. running brooklyn) for writing temp files",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "logPrefix",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "logPrefix",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "machineDetails",
      "type" : "brooklyn.location.MachineDetails",
      "defaultValue" : null,
      "description" : "machineDetails",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "noStderrLogging",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "whether to disable logging of stderr from SSH commands (e.g. for verbose commands)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "noStdoutLogging",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "whether to disable logging of stdout from SSH commands (e.g. for verbose commands)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "out",
      "type" : "java.io.OutputStream",
      "defaultValue" : null,
      "description" : "out",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "password",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Password to use to connect",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyData",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "the private ssh key (e.g. contents of an id_rsa or id_dsa file)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyFile",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "the path of an ssh private key file; leave blank to use defaults (i.e. ~/.ssh/id_rsa and id_dsa)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyPassphrase",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "the passphrase for the ssh private key",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "scpExecutable",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Allows an `scp` executable file to be specified, to be used in place of the default (programmatic) java ssh client",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "scriptDir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "directory where scripts should be placed and executed on the SSH target machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "sshCacheExpiryDuration",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "5m",
      "description" : "Expiry time for unused cached ssh connections",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "sshExecutable",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Allows an `ssh` executable file to be specified, to be used in place of the default (programmatic) java ssh client",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "unique",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Unique ID for the SSH connection",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.jclouds.JcloudsLocation",
    "config" : [ {
      "name" : "autoAssignFloatingIp",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Whether to generate floating ips (in Nova paralance), or elastic IPs (in CloudStack parlance)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "availabilityZone",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "availabilityZone",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklyn.portforwarding.manager",
      "type" : "brooklyn.location.access.PortForwardManager",
      "defaultValue" : null,
      "description" : "A port-forwarding manager to use at an entity or a location, where supported; note this should normally be a serializable client instance to prevent the creation of multiple disconnected instances via config duplication",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "callerContext",
      "type" : "java.lang.Object",
      "defaultValue" : null,
      "description" : "An object whose toString is used for logging, to indicate wherefore a VM is being created",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "credential",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "credential",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "customCredentials",
      "type" : "org.jclouds.domain.LoginCredentials",
      "defaultValue" : null,
      "description" : "Custom jclouds LoginCredentials object to be used to connect to the VM",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "customTemplateOptionsScriptContents",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "A custom script to pass to jclouds as part of template options, run after AdminAccess, for use primarily where a command which must run as root on first login before switching to the admin user, e.g. to customize sudoers; may start in an odd location (e.g. /tmp/bootstrap); NB: most commands should be run by entities, or if VM-specific but sudo is okay, then via setup.script, not via this",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "customizer",
      "type" : "brooklyn.location.jclouds.JcloudsLocationCustomizer",
      "defaultValue" : null,
      "description" : "Optional location customizer",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "customizerType",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Optional location customizer type (to be class-loaded and constructed with no-arg constructor)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "customizers",
      "type" : "java.util.Collection",
      "defaultValue" : null,
      "description" : "Optional location customizers",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "customizersSupplierType",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Optional type of a Supplier<Collection<JcloudsLocationCustomizer>> (to be class-loaded and constructed with ConfigBag or no-arg constructor)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "defaultImageId",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "A system-specific identifier for the VM image to be used by default when creating a VM (if no other VM image selection criteria are supplied)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "destroyOnFailure",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Whether to destroy the VM if provisioningLocation.obtain() fails",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "disableRootAndPasswordSsh",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Whether to disable direct SSH access for root and disable password-based SSH, if creating a user with a key-based login; defaults to true (set false to leave root users alone)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "dontCreateUser",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Whether to skip creation of 'user' when provisioning machines (default false)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "endpoint",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "endpoint",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "extraSshPublicKeyData",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Additional public key data to add to authorized_keys",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "extraSshPublicKeyUrls",
      "type" : "java.util.List",
      "defaultValue" : null,
      "description" : "Additional public keys (files or URLs, in SSH2/RFC4716/id_rsa.pub format) to add to authorized_keys",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "generate.hostname",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Use the nodename generated by jclouds",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "grantUserSudo",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Whether to grant the created user sudo privileges. Irrelevant if dontCreateUser is true. Default: true.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "groupId",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The Jclouds group provisioned machines should be members of. Users of this config key are also responsible for configuring security groups.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "hardwareId",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "A system-specific identifier for the hardware profile or machine type to be used when creating a VM",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "identity",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "identity",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "imageChooser",
      "type" : "com.google.common.base.Function",
      "defaultValue" : "brooklyn.location.jclouds.BrooklynImageChooser$ImageChooserFromOrdering@31d334b",
      "description" : "An image chooser function to control which images are preferred",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "imageDescriptionRegex",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "A regular expression to be compared against the 'description' when selecting the VM image to be used when creating a VM",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "imageId",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "A system-specific identifier for the VM image to be used when creating a VM",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "imageNameRegex",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "A regular expression to be compared against the 'name' when selecting the VM image to be used when creating a VM",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "inboundPorts",
      "type" : "java.lang.Object",
      "defaultValue" : null,
      "description" : "Inbound ports to be applied when creating a VM, on supported clouds (either a single port as a String, or an Iterable<Integer> or Integer[])",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "installDevUrandom",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Map /dev/random to /dev/urandom to prevent halting on insufficient entropy",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jclouds.computeServiceRegistry",
      "type" : "brooklyn.location.jclouds.ComputeServiceRegistry",
      "defaultValue" : "brooklyn.location.jclouds.ComputeServiceRegistryImpl@1aeb3154",
      "description" : "Registry/Factory for creating jclouds ComputeService; default is almost always fine, except where tests want to customize behaviour",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jclouds.endpoint",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Equivalent to 'endpoint'; provided for jclouds compatibility",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jclouds.openstack-nova.auto-create-floating-ips",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Whether to generate floating ips for Nova",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "jclouds.openstack-nova.auto-generate-keypairs",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Whether to generate keypairs for Nova",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "keyPair",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Custom keypair name to be re-used",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "localTempDir",
      "type" : "java.lang.String",
      "defaultValue" : "/tmp/brooklyn-valentin-ssh-tmp",
      "description" : "The directory on the local machine (i.e. running brooklyn) for writing temp files",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "logCredentials",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Whether to log credentials of a new VM - strongly recommended never be used in production, as it is a big security hole!",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "loginUser",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Override the user who logs in initially to perform setup (otherwise it is detected from the cloud or known defaults in cloud or VM OS)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "loginUser.password",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Custom password for the user who logs in initially",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "loginUser.privateKeyData",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Custom private key for the user who logs in initially",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "loginUser.privateKeyFile",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Custom private key for the user who logs in initially",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "machineCreateAttempts",
      "type" : "java.lang.Integer",
      "defaultValue" : 1,
      "description" : "Number of times to retry if jclouds fails to create a VM",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "machineCreationSemaphore",
      "type" : "java.util.concurrent.Semaphore",
      "defaultValue" : null,
      "description" : "Semaphore for controlling concurrent machine creation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "maxConcurrentMachineCreations",
      "type" : "java.lang.Integer",
      "defaultValue" : 2147483647,
      "description" : "Maximum number of concurrent machine-creations",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "minCores",
      "type" : "java.lang.Integer",
      "defaultValue" : null,
      "description" : "Minimum number of cores, for use in selecting the machine/hardware profile",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "minDisk",
      "type" : "java.lang.Object",
      "defaultValue" : null,
      "description" : "Minimum size of disk, either as string (100gb) or number of GB (100), for use in selecting the machine/hardware profile",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "minRam",
      "type" : "java.lang.Object",
      "defaultValue" : null,
      "description" : "Minimum amount of RAM, either as string (4gb) or number of MB (4096), for use in selecting the machine/hardware profile",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "networkName",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Network name to specify as template option (e.g. GCE)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "openIptables",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Whether to open the INBOUND_PORTS via iptables rules; if true then ssh in to run iptables commands, as part of machine provisioning",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "os64Bit",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Whether to require 64-bit OS images (true), 32-bit images (false), or either (null)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "osFamily",
      "type" : "java.lang.Enum",
      "defaultValue" : null,
      "description" : "OS family, e.g. CentOS, Debian, RHEL, Ubuntu",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : [ {
        "value" : "UNRECOGNIZED",
        "description" : "unrecognized"
      }, {
        "value" : "AIX",
        "description" : "aix"
      }, {
        "value" : "ARCH",
        "description" : "arch"
      }, {
        "value" : "CENTOS",
        "description" : "centos"
      }, {
        "value" : "DARWIN",
        "description" : "darwin"
      }, {
        "value" : "DEBIAN",
        "description" : "debian"
      }, {
        "value" : "ESX",
        "description" : "esx"
      }, {
        "value" : "FEDORA",
        "description" : "fedora"
      }, {
        "value" : "FREEBSD",
        "description" : "freebsd"
      }, {
        "value" : "GENTOO",
        "description" : "gentoo"
      }, {
        "value" : "HPUX",
        "description" : "hpux"
      }, {
        "value" : "LINUX",
        "description" : "linux"
      }, {
        "value" : "SMARTOS",
        "description" : "smartos"
      }, {
        "value" : "AMZN_LINUX",
        "description" : "amzn-linux"
      }, {
        "value" : "MANDRIVA",
        "description" : "mandriva"
      }, {
        "value" : "NETBSD",
        "description" : "netbsd"
      }, {
        "value" : "OEL",
        "description" : "oel"
      }, {
        "value" : "OPENBSD",
        "description" : "openbsd"
      }, {
        "value" : "RHEL",
        "description" : "rhel"
      }, {
        "value" : "SCIENTIFIC",
        "description" : "scientific"
      }, {
        "value" : "GCEL",
        "description" : "gcel"
      }, {
        "value" : "SIGAR",
        "description" : "sigar"
      }, {
        "value" : "SLACKWARE",
        "description" : "slackware"
      }, {
        "value" : "SOLARIS",
        "description" : "solaris"
      }, {
        "value" : "SUSE",
        "description" : "suse"
      }, {
        "value" : "TURBOLINUX",
        "description" : "turbolinux"
      }, {
        "value" : "CLOUD_LINUX",
        "description" : "cloud-linux"
      }, {
        "value" : "UBUNTU",
        "description" : "ubuntu"
      }, {
        "value" : "WINDOWS",
        "description" : "windows"
      } ],
      "links" : null
    }, {
      "name" : "osVersionRegex",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Regular expression for the OS version to load",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "overrideRam",
      "type" : "java.lang.Integer",
      "defaultValue" : null,
      "description" : "Custom ram value",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "password",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "password to use for ssh; note some images do not allow password-based ssh access",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "portforwarding.enabled",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Whether to setup port-forwarding to subsequently access the VM (over the ssh port)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "portforwarding.forwarder",
      "type" : "brooklyn.location.jclouds.networking.JcloudsPortForwarderExtension",
      "defaultValue" : null,
      "description" : "The port-forwarder to use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "private-key-data",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "ssh private key string to use (takes precedence over privateKeyFile)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "private-key-file",
      "type" : "java.lang.String",
      "defaultValue" : "/home/valentin/.ssh/id_rsa:/home/valentin/.ssh/id_dsa",
      "description" : "a ':' separated list of ssh private key files; uses first in list that can be read",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "private-key-passphrase",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "privateKeyPassphrase",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyData",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "ssh private key string to use (takes precedence over privateKeyFile)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyFile",
      "type" : "java.lang.String",
      "defaultValue" : "/home/valentin/.ssh/id_rsa:/home/valentin/.ssh/id_dsa",
      "description" : "a ':' separated list of ssh private key files; uses first in list that can be read",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyPassphrase",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "privateKeyPassphrase",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "provider",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "provider",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "public-key-data",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "ssh public key string to use (takes precedence over publicKeyFile)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "public-key-file",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "ssh public key file to use; if blank will infer from privateKeyFile by appending \".pub\"",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "publicKeyData",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "ssh public key string to use (takes precedence over publicKeyFile)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "publicKeyFile",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "ssh public key file to use; if blank will infer from privateKeyFile by appending \".pub\"",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "region",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "region",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "required.ports",
      "type" : "java.lang.Object",
      "defaultValue" : null,
      "description" : "Required additional ports to be applied when creating a VM, on supported clouds (either a single port as an Integer, or an Iterable<Integer> or Integer[])",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "runAsRoot",
      "type" : "java.lang.Boolean",
      "defaultValue" : null,
      "description" : "Whether to run initial setup as root (default true)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "securityGroups",
      "type" : "java.lang.Object",
      "defaultValue" : null,
      "description" : "Security groups to be applied when creating a VM, on supported clouds (either a single group identifier as a String, or an Iterable<String> or String[])",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.script",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Custom script to customize a node",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "setup.script.vars",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "vars to customize a setup.script i.e.: key1:value1,key2:value2",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "stopIptables",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Whether to stop iptables entirely; if true then ssh in to stop the iptables service, as part of machine provisioning",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "tags",
      "type" : "java.lang.Object",
      "defaultValue" : null,
      "description" : "Tags to be applied when creating a VM, on supported clouds (either a single tag as a String, or an Iterable<String> or String[];note this is not key-value pairs (e.g. what AWS calls 'tags'), for that see userMetadata)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templateBuilder",
      "type" : "org.jclouds.compute.domain.TemplateBuilder",
      "defaultValue" : null,
      "description" : "A TemplateBuilder instance provided programmatically, to be used when creating a VM",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templateOptions",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "Additional jclouds template options",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "templateSpec",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "A jclouds 'spec' string consisting of properties and values to be used when creating a VM (in most cases the properties can, and should, be specified individually using other Brooklyn location config keys)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "useJcloudsSshInit",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Whether to use jclouds for initial ssh-based setup (i.e. as part of the 'TemplateOptions'); if false will use core brooklyn ssh utilities. This config is beta; its default could be changed and/or the option removed in an upcoming release.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "user",
      "type" : "java.lang.String",
      "defaultValue" : "valentin",
      "description" : "user account for normal access to the remote machine, defaulting to local user",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "userData",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Arbitrary user data, as a single string in uuencoded format, on supported clouds (AWS)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "userMetadata",
      "type" : "java.lang.Object",
      "defaultValue" : null,
      "description" : "Arbitrary user metadata, as a map (or String of comma-separated key=value pairs), on supported clouds; note often values cannot be null",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "userMetadataString",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Arbitrary user data, as a single string, on supported clouds (AWS)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "userName",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Equivalent to 'user'; provided for jclouds compatibility",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "vmNameMaxLength",
      "type" : "java.lang.Integer",
      "defaultValue" : 61,
      "description" : "Maximum length of VM name",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "waitForSshable",
      "type" : "java.lang.String",
      "defaultValue" : "5m",
      "description" : "Whether and how long to wait for a newly provisioned VM to be accessible via ssh; if 'false', won't check; if 'true' uses default duration; otherwise accepts a time string e.g. '5m' (the default) or a number of milliseconds",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.location.jclouds.JcloudsSshMachineLocation",
    "config" : [ {
      "name" : "allocatePTY",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "whether to allocate PTY (vt100); if true then stderr is sent to stdout, but sometimes required for sudo'ing due to requiretty",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklyn.ssh.config.host",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Host to connect to (required)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "brooklyn.ssh.config.port",
      "type" : "java.lang.Integer",
      "defaultValue" : 22,
      "description" : "Port on host to connect to",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "close",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "Close the SSH connection after use",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "detectMachineDetails",
      "type" : "java.lang.Boolean",
      "defaultValue" : true,
      "description" : "Attempt to detect machine details automatically. Works with SSH-accessible Linux instances.",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "env",
      "type" : "java.util.Map",
      "defaultValue" : null,
      "description" : "environment variables to pass to the remote SSH shell session",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "err",
      "type" : "java.io.OutputStream",
      "defaultValue" : null,
      "description" : "err",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "localTempDir",
      "type" : "java.lang.String",
      "defaultValue" : "/tmp/brooklyn-valentin-ssh-tmp",
      "description" : "The directory on the local machine (i.e. running brooklyn) for writing temp files",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "logPrefix",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "logPrefix",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "machineDetails",
      "type" : "brooklyn.location.MachineDetails",
      "defaultValue" : null,
      "description" : "machineDetails",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "noStderrLogging",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "whether to disable logging of stderr from SSH commands (e.g. for verbose commands)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "noStdoutLogging",
      "type" : "java.lang.Boolean",
      "defaultValue" : false,
      "description" : "whether to disable logging of stdout from SSH commands (e.g. for verbose commands)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "out",
      "type" : "java.io.OutputStream",
      "defaultValue" : null,
      "description" : "out",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "password",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Password to use to connect",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyData",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "the private ssh key (e.g. contents of an id_rsa or id_dsa file)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyFile",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "the path of an ssh private key file; leave blank to use defaults (i.e. ~/.ssh/id_rsa and id_dsa)",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "privateKeyPassphrase",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "the passphrase for the ssh private key",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "scpExecutable",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Allows an `scp` executable file to be specified, to be used in place of the default (programmatic) java ssh client",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "scriptDir",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "directory where scripts should be placed and executed on the SSH target machine",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "sshCacheExpiryDuration",
      "type" : "brooklyn.util.time.Duration",
      "defaultValue" : "5m",
      "description" : "Expiry time for unused cached ssh connections",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "sshExecutable",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Allows an `ssh` executable file to be specified, to be used in place of the default (programmatic) java ssh client",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "unique",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "Unique ID for the SSH connection",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  }, {
    "type" : "brooklyn.policy.followthesun.DefaultFollowTheSunModel$1",
    "config" : [ {
      "name" : "parentLocation",
      "type" : "brooklyn.location.Location",
      "defaultValue" : null,
      "description" : "parentLocation",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.final",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The actual spec (in a chain) which instantiates a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.named.name",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The name on the (first) named spec in a chain",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    }, {
      "name" : "spec.original",
      "type" : "java.lang.String",
      "defaultValue" : null,
      "description" : "The original spec used to instantiate a location",
      "reconfigurable" : false,
      "label" : null,
      "priority" : null,
      "possibleValues" : null,
      "links" : null
    } ],
    "sensors" : [ ],
    "effectors" : [ ]
  } ],
  "locationResolvers" : [ "brooklyn.catalog", "byon", "host", "id", "jclouds", "jcloudsByon", "localhost", "multi", "named", "pool", "portForwardManager", "single" ]
}
;
