import{_ as i,c as a,af as t,o as n}from"./chunks/framework.JWorlyEv.js";const E=JSON.parse('{"title":"Pattern layout","description":"","frontmatter":{},"headers":[],"relativePath":"layouts/pattern.md","filePath":"layouts/pattern.md","lastUpdated":1733043293000}'),e={name:"layouts/pattern.md"};function l(h,s,p,k,o,d){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="pattern-layout" tabindex="-1">Pattern layout <a class="header-anchor" href="#pattern-layout" aria-label="Permalink to &quot;Pattern layout&quot;">​</a></h1><ul><li>type - pattern</li><li>pattern - string - specifier for the output format, using placeholders as described below</li><li>tokens - object (optional) - user-defined tokens to be used in the pattern</li></ul><h2 id="pattern-format" tabindex="-1">Pattern format <a class="header-anchor" href="#pattern-format" aria-label="Permalink to &quot;Pattern format&quot;">​</a></h2><p>The pattern string can contain any characters, but sequences beginning with <code>%</code> will be replaced with values taken from the log event, and other environmental values.</p><p>Format for specifiers is <code>%[padding].[truncation][field]{[format]} -</code> padding and truncation are optional, and format only applies to a few tokens (notably, date). e.g. <code>%5.10p -</code> left pad the log level by 5 characters, up to a max of 10.</p><p>Fields can be any of:</p><ul><li><code>%r</code> time in toLocaleTimeString format,</li><li><code>%p</code> log level,</li><li><code>%c</code> log category,</li><li><code>%h</code> hostname,</li><li><code>%m</code> log data,</li><li><code>%j</code> log data as JSON,</li><li><code>%d</code> date, formatted - default is <code>ISO8601</code>, format options are: <code>ISO8601</code>, <code>ISO8601_WITH_TZ_OFFSET</code>, <code>ABSOLUTE</code>, <code>DATE</code>, or any string compatible with the date-format library. e.g. <code>%d{DATE}, %d{yyyy/MM/dd-hh.mm.ss}</code>,</li><li><code>%% % -</code> for when you want a literal <code>%</code> in your output,</li><li><code>%n</code> newline,</li><li><code>%z</code> process id (from process.pid),</li><li><code>%x{[tokenname]}</code> add dynamic tokens to your log. Tokens are specified in the tokens parameter,</li><li><code>%X{[tokenname]}</code> add values from the Logger context. Tokens are keys into the context values,</li><li><code>%[</code> start a colored block (color will be taken from the log level, similar to coloredLayout),</li><li><code>%]</code> end a colored block.</li></ul><h2 id="tokens" tabindex="-1">Tokens <a class="header-anchor" href="#tokens" aria-label="Permalink to &quot;Tokens&quot;">​</a></h2><p>User-defined tokens can be either a string or a function. Functions will be passed the log event, and should return a string. For example, you could define a custom token that outputs the log event&#39;s context value for <code>user</code> like so:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {Logger} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/logger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;loggerName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">logger.appenders.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;std-log-custom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;console&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  layout: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pattern&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pattern: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%d %p %c %x{user} %m%n&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tokens: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">logEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AuthLibrary.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">currentUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  level: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;debug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;trace&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;doing something.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>This would output:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2017-06-01</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 08:32:56.283</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INFO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> charlie</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> doing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> something.</span></span></code></pre></div><p>You can also use the Logger context to store tokens (sometimes called Nested Diagnostic Context, or Mapped Diagnostic Context) and use them in your layouts.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {Logger} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/logger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;loggerName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">logger.appenders.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;std-log&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;console&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  layout: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pattern&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pattern: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%d %p %c %X{user} %m%n&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  level: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;debug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;trace&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">logger.context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;charlie&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;doing something.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>This would output:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2017-06-01</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 08:32:56.283</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INFO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> charlie</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> doing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> something.</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Note that you can also add functions to the Logger Context, and they will be passed the logEvent as well.</p></div>`,17)]))}const g=i(e,[["render",l]]);export{E as __pageData,g as default};