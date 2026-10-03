---
url: /introduction/capabilities.md
---
# Capabilities

Ts.ED Logger is a Node.js and TypeScript multi-chanel logger.
It provides plugins to log on the console, files, remote services, and more. The logger is designed to be extensible and easy to use.

You can use the logger in your Node.js and browser applications without a complex configuration.

You can find below the list of features and plugins provided by Ts.ED Logger and the compatibility with the different environment.

## Appenders

[Appenders](/appenders/index.md) serialise log events to some form of output.
They can write to files, send emails, send data over the network.
It's basically a plugin that allows you to define where your logs will be written.

Here are the appenders list provided by Ts.ED logger and the compatibility with the different environments:

| Features                                                      | Node.js/Bun.js                                     | Browser                                             |
| ------------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------- |
| [Console](/appenders/console.md)                              |  |   |
| [Connect](/appenders/connect.md)                              |  |  |
| [File](/appenders/file.md)                                    |  |  |
| [File Date](/appenders/file.md)                               |  |  |
| [Stdout](/appenders/stdout.md)/[StdErr](/appenders/stderr.md) |  |  |
| [Insight](/appenders/insight.md)                              |  | ?                                                   |
| [LogEntries](/appenders/logentries.md)                        |  | ?                                                   |
| [LogStash UDP](/appenders/logstash-udp.md)                    |  |  |
| [LogStash Http](/appenders/logstash-http.md)                  |  |   |
| [Loggly](/appenders/loggly.md)                                |  | ?                                                   |
| [RabbitMQ](/appenders/rabbitmq.md)                            |  | ?                                                   |
| [Seq](/appenders/seq.md)                                      |  | ?                                                   |
| [Slack](/appenders/slack.md)                                  |  | ?                                                   |
| [Smtp](/appenders/smtp.md)                                    |  |  |

::: tip
If none of the above appenders meet your needs, you can create your own appender by following the [custom appender](/appenders/custom.md) guide.
:::

## Layouts

[Layouts](/layouts/index.md) are functions used by [appenders](/appenders/index.md) to format log events for output. They take a log event as an argument and return a string. TsLogDebug comes with several layouts built-in, and provides ways to create your own if these are not suitable.

For most use cases you will not need to configure layouts - there are some appenders which do not need layouts defined (for example, logstash-UDP);
all the appenders that use layouts will have a sensible default defined.

Most appender configuration will take a field called layout, which is an object - typically with a single field type which is the name of a layout defined below.
Some layouts require extra configuration options, which should be included in the same object.

| Features                                                 | Description                                                                                                                            |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [Basic](/layouts/basic.md)                               | Basic layout will output the timestamp, level, category, followed by the formatted log event data.                                     |
| [Colored](/layouts/colored.md)                           | Colored layout is the same as basic, except that the timestamp, level and category will be colored according to the log event's level. |
| [Dummy](/layouts/dummy.md)                               | Dummy only outputs the first value in the log event's data.                                                                            |
| [Message Pass-Through](/layouts/message-pass-through.md) | Just formats the log event data, and does not output a timestamp,level or category                                                     |
| [JSON](/layouts/json.md)                                 | JSON layout outputs the log event data as a JSON string.                                                                               |
| [Pattern](/layouts/pattern.md)                           | Pattern layout allows you to define a custom layout using a pattern string.                                                            |

::: tip
If you need to create your own layout, you can follow the [custom layout](/layouts/custom.md) guide.
:::
