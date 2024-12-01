import{_ as d,c as s,af as r,o}from"./chunks/framework.JWorlyEv.js";const t="/icons/valid.svg",e="/icons/invalid.svg",g=JSON.parse('{"title":"Capabilities","description":"","frontmatter":{},"headers":[],"relativePath":"introduction/capabilities.md","filePath":"introduction/capabilities.md","lastUpdated":1733043293000}'),i={name:"introduction/capabilities.md"};function l(n,a,h,p,c,u){return o(),s("div",null,a[0]||(a[0]=[r('<h1 id="capabilities" tabindex="-1">Capabilities <a class="header-anchor" href="#capabilities" aria-label="Permalink to &quot;Capabilities&quot;">​</a></h1><p>Ts.ED Logger is a Node.js and TypeScript multi-chanel logger. It provides plugins to log on the console, files, remote services, and more. The logger is designed to be extensible and easy to use.</p><p>You can use the logger in your Node.js and browser applications without a complex configuration.</p><p>You can find below the list of features and plugins provided by Ts.ED Logger and the compatibility with the different environment.</p><h2 id="appenders" tabindex="-1">Appenders <a class="header-anchor" href="#appenders" aria-label="Permalink to &quot;Appenders&quot;">​</a></h2><p><a href="/appenders/">Appenders</a> serialise log events to some form of output. They can write to files, send emails, send data over the network. It&#39;s basically a plugin that allows you to define where your logs will be written.</p><p>Here are the appenders list provided by Ts.ED logger and the compatibility with the different environments:</p><div class="table-features"><table tabindex="0"><thead><tr><th>Features</th><th>Node.js/Bun.js</th><th>Browser</th></tr></thead><tbody><tr><td><a href="/appenders/console.html">Console</a></td><td><img src="'+t+'" width="15" alt="yes"></td><td><img src="'+t+'" width="15" alt="yes"></td></tr><tr><td><a href="/appenders/connect.html">Connect</a></td><td><img src="'+t+'" width="15" alt="yes"></td><td><img src="'+e+'" width="15" alt="no"></td></tr><tr><td><a href="/appenders/file.html">File</a></td><td><img src="'+t+'" width="15" alt="yes"></td><td><img src="'+e+'" width="15" alt="no"></td></tr><tr><td><a href="/appenders/file.html">File Date</a></td><td><img src="'+t+'" width="15" alt="yes"></td><td><img src="'+e+'" width="15" alt="no"></td></tr><tr><td><a href="/appenders/stdout.html">Stdout</a>/<a href="/appenders/stderr.html">StdErr</a></td><td><img src="'+t+'" width="15" alt="yes"></td><td><img src="'+e+'" width="15" alt="no"></td></tr><tr><td><a href="/appenders/insight.html">Insight</a></td><td><img src="'+t+'" width="15" alt="yes"></td><td>?</td></tr><tr><td><a href="/appenders/logentries.html">LogEntries</a></td><td><img src="'+t+'" width="15" alt="yes"></td><td>?</td></tr><tr><td><a href="/appenders/logstash-udp.html">LogStash UDP</a></td><td><img src="'+t+'" width="15" alt="yes"></td><td><img src="'+e+'" width="15" alt="no"></td></tr><tr><td><a href="/appenders/logstash-http.html">LogStash Http</a></td><td><img src="'+t+'" width="15" alt="yes"></td><td><img src="'+t+'" width="15" alt="yes"></td></tr><tr><td><a href="/appenders/loggly.html">Loggly</a></td><td><img src="'+t+'" width="15" alt="yes"></td><td>?</td></tr><tr><td><a href="/appenders/rabbitmq.html">RabbitMQ</a></td><td><img src="'+t+'" width="15" alt="yes"></td><td>?</td></tr><tr><td><a href="/appenders/seq.html">Seq</a></td><td><img src="'+t+'" width="15" alt="yes"></td><td>?</td></tr><tr><td><a href="/appenders/slack.html">Slack</a></td><td><img src="'+t+'" width="15" alt="yes"></td><td>?</td></tr><tr><td><a href="/appenders/smtp.html">Smtp</a></td><td><img src="'+t+'" width="15" alt="yes"></td><td><img src="'+e+'" width="15" alt="no"></td></tr></tbody></table></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If none of the above appenders meet your needs, you can create your own appender by following the <a href="/appenders/custom.html">custom appender</a> guide.</p></div><h2 id="layouts" tabindex="-1">Layouts <a class="header-anchor" href="#layouts" aria-label="Permalink to &quot;Layouts&quot;">​</a></h2><p><a href="/layouts/">Layouts</a> are functions used by <a href="/appenders/">appenders</a> to format log events for output. They take a log event as an argument and return a string. TsLogDebug comes with several layouts built-in, and provides ways to create your own if these are not suitable.</p><p>For most use cases you will not need to configure layouts - there are some appenders which do not need layouts defined (for example, logstash-UDP); all the appenders that use layouts will have a sensible default defined.</p><p>Most appender configuration will take a field called layout, which is an object - typically with a single field type which is the name of a layout defined below. Some layouts require extra configuration options, which should be included in the same object.</p><div class="table-features"><table tabindex="0"><thead><tr><th>Features</th><th>Description</th></tr></thead><tbody><tr><td><a href="/layouts/basic.html">Basic</a></td><td>Basic layout will output the timestamp, level, category, followed by the formatted log event data.</td></tr><tr><td><a href="/layouts/colored.html">Colored</a></td><td>Colored layout is the same as basic, except that the timestamp, level and category will be colored according to the log event&#39;s level.</td></tr><tr><td><a href="/layouts/dummy.html">Dummy</a></td><td>Dummy only outputs the first value in the log event&#39;s data.</td></tr><tr><td><a href="/layouts/message-pass-through.html">Message Pass-Through</a></td><td>Just formats the log event data, and does not output a timestamp,level or category</td></tr><tr><td><a href="/layouts/json.html">JSON</a></td><td>JSON layout outputs the log event data as a JSON string.</td></tr><tr><td><a href="/layouts/pattern.html">Pattern</a></td><td>Pattern layout allows you to define a custom layout using a pattern string.</td></tr></tbody></table></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you need to create your own layout, you can follow the <a href="/layouts/custom.html">custom layout</a> guide.</p></div>',15)]))}const y=d(i,[["render",l]]);export{g as __pageData,y as default};