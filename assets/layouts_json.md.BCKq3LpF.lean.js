import{_ as i,c as a,af as t,o as h}from"./chunks/framework.JWorlyEv.js";const d=JSON.parse('{"title":"Json layout","description":"","frontmatter":{},"headers":[],"relativePath":"layouts/json.md","filePath":"layouts/json.md","lastUpdated":1733043293000}'),n={name:"layouts/json.md"};function k(l,s,p,e,o,r){return h(),a("div",null,s[0]||(s[0]=[t(`<h1 id="json-layout" tabindex="-1">Json layout <a class="header-anchor" href="#json-layout" aria-label="Permalink to &quot;Json layout&quot;">​</a></h1><ul><li>type - <code>json</code></li><li>separator - string - char that separate each line</li></ul><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {Logger} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/logger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;loggerName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">logger.appenders.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;std-log-json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;console&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  layout: {type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, separator: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  level: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;debug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;trace&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;this is just a test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;of a custom appender&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">warn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;that outputs json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>This example outputs the following:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;startTime&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;2017-06-05T22:23:08.479Z&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;categoryName&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;json-test&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;this is just a test&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">],</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;level&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;INFO&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;context&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;startTime&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;2017-06-05T22:23:08.483Z&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;categoryName&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;json-test&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;of a custom appender&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">],</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;level&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;ERROR&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;context&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;startTime&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;2017-06-05T22:23:08.483Z&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;categoryName&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;json-test&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;that outputs json&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">],</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;level&quot;&quot;WARN&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;context&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">},</span></span></code></pre></div>`,6)]))}const g=i(n,[["render",k]]);export{d as __pageData,g as default};