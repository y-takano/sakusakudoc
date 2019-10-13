'use strict'

const asdCss = (function() {/*
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
	// Asciidoctor default stylesheet | MIT License | https://asciidoctor.org
	article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}
	audio,video{display:inline-block}
	audio:not([controls]){display:none;height:0}
	html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}
	a{background:none}
	a:focus{outline:thin dotted}
	a:active,a:hover{outline:0}
	h1{font-size:2em;margin:.67em 0}
	abbr[title]{border-bottom:1px dotted}
	b,strong{font-weight:bold}
	dfn{font-style:italic}
	hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}
	mark{background:#ff0;color:#000}
	code,kbd,pre,samp{font-family:monospace;font-size:1em}
	pre{white-space:pre-wrap}
	q{quotes:"\201C" "\201D" "\2018" "\2019"}
	small{font-size:80%}
	sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
	sup{top:-.5em}
	sub{bottom:-.25em}
	img{border:0}
	svg:not(:root){overflow:hidden}
	figure{margin:0}
	fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}
	legend{border:0;padding:0}
	button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}
	button,input{line-height:normal}
	button,select{text-transform:none}
	button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}
	button[disabled],html input[disabled]{cursor:default}
	input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}
	button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}
	textarea{overflow:auto;vertical-align:top}
	table{border-collapse:collapse;border-spacing:0}
	*,*::before,*::after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}
	html,body{font-size:100%}
	body{background:#fff;color:rgba(0,0,0,.8);padding:0;margin:0;font-family:"Noto Serif","DejaVu Serif",serif;font-weight:400;font-style:normal;line-height:1;position:relative;cursor:auto;tab-size:4;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}
	a:hover{cursor:pointer}
	img,object,embed{max-width:100%;height:auto}
	object,embed{height:100%}
	img{-ms-interpolation-mode:bicubic}
	.left{float:left!important}
	.right{float:right!important}
	.text-left{text-align:left!important}
	.text-right{text-align:right!important}
	.text-center{text-align:center!important}
	.text-justify{text-align:justify!important}
	.hide{display:none}
	img,object,svg{display:inline-block;vertical-align:middle}
	textarea{height:auto;min-height:50px}
	select{width:100%}
	.center{margin-left:auto;margin-right:auto}
	.stretch{width:100%}
	.subheader,.admonitionblock td.content>.title,.audioblock>.title,.exampleblock>.title,.imageblock>.title,.listingblock>.title,.literalblock>.title,.stemblock>.title,.openblock>.title,.paragraph>.title,.quoteblock>.title,table.tableblock>.title,.verseblock>.title,.videoblock>.title,.dlist>.title,.olist>.title,.ulist>.title,.qlist>.title,.hdlist>.title{line-height:1.45;color:#7a2518;font-weight:400;margin-top:0;margin-bottom:.25em}
	div,dl,dt,dd,ul,ol,li,h1,h2,h3,#toctitle,.sidebarblock>.content>.title,h4,h5,h6,pre,form,p,blockquote,th,td{margin:0;padding:0;direction:ltr}
	a{color:#2156a5;text-decoration:underline;line-height:inherit}
	a:hover,a:focus{color:#1d4b8f}
	a img{border:0}
	p{font-family:inherit;font-weight:400;font-size:1em;line-height:1.6;margin-bottom:1.25em;text-rendering:optimizeLegibility}
	p aside{font-size:.875em;line-height:1.35;font-style:italic}
	h1,h2,h3,#toctitle,.sidebarblock>.content>.title,h4,h5,h6{font-family:"Open Sans","DejaVu Sans",sans-serif;font-weight:300;font-style:normal;color:#ba3925;text-rendering:optimizeLegibility;margin-top:1em;margin-bottom:.5em;line-height:1.0125em}
	h1 small,h2 small,h3 small,#toctitle small,.sidebarblock>.content>.title small,h4 small,h5 small,h6 small{font-size:60%;color:#e99b8f;line-height:0}
	h1{font-size:2.125em}
	h2{font-size:1.6875em}
	h3,#toctitle,.sidebarblock>.content>.title{font-size:1.375em}
	h4,h5{font-size:1.125em}
	h6{font-size:1em}
	hr{border:solid #dddddf;border-width:1px 0 0;clear:both;margin:1.25em 0 1.1875em;height:0}
	em,i{font-style:italic;line-height:inherit}
	strong,b{font-weight:bold;line-height:inherit}
	small{font-size:60%;line-height:inherit}
	code{font-family:"Droid Sans Mono","DejaVu Sans Mono",monospace;font-weight:400;color:rgba(0,0,0,.9)}
	ul,ol,dl{font-size:1em;line-height:1.6;margin-bottom:1.25em;list-style-position:outside;font-family:inherit}
	ul,ol{margin-left:1.5em}
	ul li ul,ul li ol{margin-left:1.25em;margin-bottom:0;font-size:1em}
	ul.square li ul,ul.circle li ul,ul.disc li ul{list-style:inherit}
	ul.square{list-style-type:square}
	ul.circle{list-style-type:circle}
	ul.disc{list-style-type:disc}
	ol li ul,ol li ol{margin-left:1.25em;margin-bottom:0}
	dl dt{margin-bottom:.3125em;font-weight:bold}
	dl dd{margin-bottom:1.25em}
	abbr,acronym{text-transform:uppercase;font-size:90%;color:rgba(0,0,0,.8);border-bottom:1px dotted #ddd;cursor:help}
	abbr{text-transform:none}
	blockquote{margin:0 0 1.25em;padding:.5625em 1.25em 0 1.1875em;border-left:1px solid #ddd}
	blockquote cite{display:block;font-size:.9375em;color:rgba(0,0,0,.6)}
	blockquote cite::before{content:"\2014 \0020"}
	blockquote cite a,blockquote cite a:visited{color:rgba(0,0,0,.6)}
	blockquote,blockquote p{line-height:1.6;color:rgba(0,0,0,.85)}
	@media screen and (min-width:768px){h1,h2,h3,#toctitle,.sidebarblock>.content>.title,h4,h5,h6{line-height:1.2}
	h1{font-size:2.75em}
	h2{font-size:2.3125em}
	h3,#toctitle,.sidebarblock>.content>.title{font-size:1.6875em}
	h4{font-size:1.4375em}}
	table{background:#fff;margin-bottom:1.25em;border:solid 1px #dedede}
	table thead,table tfoot{background:#f7f8f7}
	table thead tr th,table thead tr td,table tfoot tr th,table tfoot tr td{padding:.5em .625em .625em;font-size:inherit;color:rgba(0,0,0,.8);text-align:left}
	table tr th,table tr td{padding:.5625em .625em;font-size:inherit;color:rgba(0,0,0,.8)}
	table tr.even,table tr.alt{background:#f8f8f7}
	table thead tr th,table tfoot tr th,table tbody tr td,table tr td,table tfoot tr td{display:table-cell;line-height:1.6}
	h1,h2,h3,#toctitle,.sidebarblock>.content>.title,h4,h5,h6{line-height:1.2;word-spacing:-.05em}
	h1 strong,h2 strong,h3 strong,#toctitle strong,.sidebarblock>.content>.title strong,h4 strong,h5 strong,h6 strong{font-weight:400}
	.clearfix::before,.clearfix::after,.float-group::before,.float-group::after{content:" ";display:table}
	.clearfix::after,.float-group::after{clear:both}
	:not(pre):not([class^=L])>code{font-size:.9375em;font-style:normal!important;letter-spacing:0;padding:.1em .5ex;word-spacing:-.15em;background:#f7f7f8;-webkit-border-radius:4px;border-radius:4px;line-height:1.45;text-rendering:optimizeSpeed;word-wrap:break-word}
	:not(pre)>code.nobreak{word-wrap:normal}
	:not(pre)>code.nowrap{white-space:nowrap}
	pre{color:rgba(0,0,0,.9);font-family:"Droid Sans Mono","DejaVu Sans Mono",monospace;line-height:1.45;text-rendering:optimizeSpeed}
	pre code,pre pre{color:inherit;font-size:inherit;line-height:inherit}
	pre>code{display:block}
	pre.nowrap,pre.nowrap pre{white-space:pre;word-wrap:normal}
	em em{font-style:normal}
	strong strong{font-weight:400}
	.keyseq{color:rgba(51,51,51,.8)}
	kbd{font-family:"Droid Sans Mono","DejaVu Sans Mono",monospace;display:inline-block;color:rgba(0,0,0,.8);font-size:.65em;line-height:1.45;background:#f7f7f7;border:1px solid #ccc;-webkit-border-radius:3px;border-radius:3px;-webkit-box-shadow:0 1px 0 rgba(0,0,0,.2),0 0 0 .1em white inset;box-shadow:0 1px 0 rgba(0,0,0,.2),0 0 0 .1em #fff inset;margin:0 .15em;padding:.2em .5em;vertical-align:middle;position:relative;top:-.1em;white-space:nowrap}
	.keyseq kbd:first-child{margin-left:0}
	.keyseq kbd:last-child{margin-right:0}
	.menuseq,.menuref{color:#000}
	.menuseq b:not(.caret),.menuref{font-weight:inherit}
	.menuseq{word-spacing:-.02em}
	.menuseq b.caret{font-size:1.25em;line-height:.8}
	.menuseq i.caret{font-weight:bold;text-align:center;width:.45em}
	b.button::before,b.button::after{position:relative;top:-1px;font-weight:400}
	b.button::before{content:"[";padding:0 3px 0 2px}
	b.button::after{content:"]";padding:0 2px 0 3px}
	p a>code:hover{color:rgba(0,0,0,.9)}
	#header,#content,#footnotes,#footer{width:100%;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;max-width:62.5em;*zoom:1;position:relative;padding-left:.9375em;padding-right:.9375em}
	#header::before,#header::after,#content::before,#content::after,#footnotes::before,#footnotes::after,#footer::before,#footer::after{content:" ";display:table}
	#header::after,#content::after,#footnotes::after,#footer::after{clear:both}
	#content{margin-top:1.25em}
	#content::before{content:none}
	#header>h1:first-child{color:rgba(0,0,0,.85);margin-top:2.25rem;margin-bottom:0}
	#header>h1:first-child+#toc{margin-top:8px;border-top:1px solid #dddddf}
	#header>h1:only-child,body.toc2 #header>h1:nth-last-child(2){border-bottom:1px solid #dddddf;padding-bottom:8px}
	#header .details{border-bottom:1px solid #dddddf;line-height:1.45;padding-top:.25em;padding-bottom:.25em;padding-left:.25em;color:rgba(0,0,0,.6);display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-flow:row wrap;-webkit-flex-flow:row wrap;flex-flow:row wrap}
	#header .details span:first-child{margin-left:-.125em}
	#header .details span.email a{color:rgba(0,0,0,.85)}
	#header .details br{display:none}
	#header .details br+span::before{content:"\00a0\2013\00a0"}
	#header .details br+span.author::before{content:"\00a0\22c5\00a0";color:rgba(0,0,0,.85)}
	#header .details br+span#revremark::before{content:"\00a0|\00a0"}
	#header #revnumber{text-transform:capitalize}
	#header #revnumber::after{content:"\00a0"}
	#content>h1:first-child:not([class]){color:rgba(0,0,0,.85);border-bottom:1px solid #dddddf;padding-bottom:8px;margin-top:0;padding-top:1rem;margin-bottom:1.25rem}
	#toc{border-bottom:1px solid #e7e7e9;padding-bottom:.5em}
	#toc>ul{margin-left:.125em}
	#toc ul.sectlevel0>li>a{font-style:italic}
	#toc ul.sectlevel0 ul.sectlevel1{margin:.5em 0}
	#toc ul{font-family:"Open Sans","DejaVu Sans",sans-serif;list-style-type:none}
	#toc li{line-height:1.3334;margin-top:.3334em}
	#toc a{text-decoration:none}
	#toc a:active{text-decoration:underline}
	#toctitle{color:#7a2518;font-size:1.2em}
	@media screen and (min-width:768px){#toctitle{font-size:1.375em}
	body.toc2{padding-left:15em;padding-right:0}
	#toc.toc2{margin-top:0!important;background:#f8f8f7;position:fixed;width:15em;left:0;top:0;border-right:1px solid #e7e7e9;border-top-width:0!important;border-bottom-width:0!important;z-index:1000;padding:1.25em 1em;height:100%;overflow:auto}
	#toc.toc2 #toctitle{margin-top:0;margin-bottom:.8rem;font-size:1.2em}
	#toc.toc2>ul{font-size:.9em;margin-bottom:0}
	#toc.toc2 ul ul{margin-left:0;padding-left:1em}
	#toc.toc2 ul.sectlevel0 ul.sectlevel1{padding-left:0;margin-top:.5em;margin-bottom:.5em}
	body.toc2.toc-right{padding-left:0;padding-right:15em}
	body.toc2.toc-right #toc.toc2{border-right-width:0;border-left:1px solid #e7e7e9;left:auto;right:0}}
	@media screen and (min-width:1280px){body.toc2{padding-left:20em;padding-right:0}
	#toc.toc2{width:20em}
	#toc.toc2 #toctitle{font-size:1.375em}
	#toc.toc2>ul{font-size:.95em}
	#toc.toc2 ul ul{padding-left:1.25em}
	body.toc2.toc-right{padding-left:0;padding-right:20em}}
	#content #toc{border-style:solid;border-width:1px;border-color:#e0e0dc;margin-bottom:1.25em;padding:1.25em;background:#f8f8f7;-webkit-border-radius:4px;border-radius:4px}
	#content #toc>:first-child{margin-top:0}
	#content #toc>:last-child{margin-bottom:0}
	#footer{max-width:100%;background:rgba(0,0,0,.8);padding:1.25em}
	#footer-text{color:rgba(255,255,255,.8);line-height:1.44}
	#content{margin-bottom:.625em}
	.sect1{padding-bottom:.625em}
	@media screen and (min-width:768px){#content{margin-bottom:1.25em}
	.sect1{padding-bottom:1.25em}}
	.sect1:last-child{padding-bottom:0}
	.sect1+.sect1{border-top:1px solid #e7e7e9}
	#content h1>a.anchor,h2>a.anchor,h3>a.anchor,#toctitle>a.anchor,.sidebarblock>.content>.title>a.anchor,h4>a.anchor,h5>a.anchor,h6>a.anchor{position:absolute;z-index:1001;width:1.5ex;margin-left:-1.5ex;display:block;text-decoration:none!important;visibility:hidden;text-align:center;font-weight:400}
	#content h1>a.anchor::before,h2>a.anchor::before,h3>a.anchor::before,#toctitle>a.anchor::before,.sidebarblock>.content>.title>a.anchor::before,h4>a.anchor::before,h5>a.anchor::before,h6>a.anchor::before{content:"\00A7";font-size:.85em;display:block;padding-top:.1em}
	#content h1:hover>a.anchor,#content h1>a.anchor:hover,h2:hover>a.anchor,h2>a.anchor:hover,h3:hover>a.anchor,#toctitle:hover>a.anchor,.sidebarblock>.content>.title:hover>a.anchor,h3>a.anchor:hover,#toctitle>a.anchor:hover,.sidebarblock>.content>.title>a.anchor:hover,h4:hover>a.anchor,h4>a.anchor:hover,h5:hover>a.anchor,h5>a.anchor:hover,h6:hover>a.anchor,h6>a.anchor:hover{visibility:visible}
	#content h1>a.link,h2>a.link,h3>a.link,#toctitle>a.link,.sidebarblock>.content>.title>a.link,h4>a.link,h5>a.link,h6>a.link{color:#ba3925;text-decoration:none}
	#content h1>a.link:hover,h2>a.link:hover,h3>a.link:hover,#toctitle>a.link:hover,.sidebarblock>.content>.title>a.link:hover,h4>a.link:hover,h5>a.link:hover,h6>a.link:hover{color:#a53221}
	details,.audioblock,.imageblock,.literalblock,.listingblock,.stemblock,.videoblock{margin-bottom:1.25em}
	details>summary:first-of-type{cursor:pointer;display:list-item;outline:none;margin-bottom:.75em}
	.admonitionblock td.content>.title,.audioblock>.title,.exampleblock>.title,.imageblock>.title,.listingblock>.title,.literalblock>.title,.stemblock>.title,.openblock>.title,.paragraph>.title,.quoteblock>.title,table.tableblock>.title,.verseblock>.title,.videoblock>.title,.dlist>.title,.olist>.title,.ulist>.title,.qlist>.title,.hdlist>.title{text-rendering:optimizeLegibility;text-align:left;font-family:"Noto Serif","DejaVu Serif",serif;font-size:1rem;font-style:italic}
	table.tableblock.fit-content>caption.title{white-space:nowrap;width:0}
	.paragraph.lead>p,#preamble>.sectionbody>[class="paragraph"]:first-of-type p{font-size:1.21875em;line-height:1.6;color:rgba(0,0,0,.85)}
	table.tableblock #preamble>.sectionbody>[class="paragraph"]:first-of-type p{font-size:inherit}
	.admonitionblock>table{border-collapse:separate;border:0;background:none;width:100%}
	.admonitionblock>table td.icon{text-align:center;width:80px}
	.admonitionblock>table td.icon img{max-width:none}
	.admonitionblock>table td.icon .title{font-weight:bold;font-family:"Open Sans","DejaVu Sans",sans-serif;text-transform:uppercase}
	.admonitionblock>table td.content{padding-left:1.125em;padding-right:1.25em;border-left:1px solid #dddddf;color:rgba(0,0,0,.6)}
	.admonitionblock>table td.content>:last-child>:last-child{margin-bottom:0}
	.exampleblock>.content{border-style:solid;border-width:1px;border-color:#e6e6e6;margin-bottom:1.25em;padding:1.25em;background:#fff;-webkit-border-radius:4px;border-radius:4px}
	.exampleblock>.content>:first-child{margin-top:0}
	.exampleblock>.content>:last-child{margin-bottom:0}
	.sidebarblock{border-style:solid;border-width:1px;border-color:#dbdbd6;margin-bottom:1.25em;padding:1.25em;background:#f3f3f2;-webkit-border-radius:4px;border-radius:4px}
	.sidebarblock>:first-child{margin-top:0}
	.sidebarblock>:last-child{margin-bottom:0}
	.sidebarblock>.content>.title{color:#7a2518;margin-top:0;text-align:center}
	.exampleblock>.content>:last-child>:last-child,.exampleblock>.content .olist>ol>li:last-child>:last-child,.exampleblock>.content .ulist>ul>li:last-child>:last-child,.exampleblock>.content .qlist>ol>li:last-child>:last-child,.sidebarblock>.content>:last-child>:last-child,.sidebarblock>.content .olist>ol>li:last-child>:last-child,.sidebarblock>.content .ulist>ul>li:last-child>:last-child,.sidebarblock>.content .qlist>ol>li:last-child>:last-child{margin-bottom:0}
	.literalblock pre,.listingblock>.content>pre{-webkit-border-radius:4px;border-radius:4px;word-wrap:break-word;overflow-x:auto;padding:1em;font-size:.8125em}
	@media screen and (min-width:768px){.literalblock pre,.listingblock>.content>pre{font-size:.90625em}}
	@media screen and (min-width:1280px){.literalblock pre,.listingblock>.content>pre{font-size:1em}}
	.literalblock pre,.listingblock>.content>pre:not(.highlight),.listingblock>.content>pre[class="highlight"],.listingblock>.content>pre[class^="highlight "]{background:#f7f7f8}
	.literalblock.output pre{color:#f7f7f8;background:rgba(0,0,0,.9)}
	.listingblock>.content{position:relative}
	.listingblock code[data-lang]::before{display:none;content:attr(data-lang);position:absolute;font-size:.75em;top:.425rem;right:.5rem;line-height:1;text-transform:uppercase;color:inherit;opacity:.5}
	.listingblock:hover code[data-lang]::before{display:block}
	.listingblock.terminal pre .command::before{content:attr(data-prompt);padding-right:.5em;color:inherit;opacity:.5}
	.listingblock.terminal pre .command:not([data-prompt])::before{content:"$"}
	.listingblock pre.highlightjs{padding:0}
	.listingblock pre.highlightjs>code{padding:1em;-webkit-border-radius:4px;border-radius:4px}
	.listingblock pre.prettyprint{border-width:0}
	.prettyprint{background:#f7f7f8}
	pre.prettyprint .linenums{line-height:1.45;margin-left:2em}
	pre.prettyprint li{background:none;list-style-type:inherit;padding-left:0}
	pre.prettyprint li code[data-lang]::before{opacity:1}
	pre.prettyprint li:not(:first-child) code[data-lang]::before{display:none}
	table.linenotable{border-collapse:separate;border:0;margin-bottom:0;background:none}
	table.linenotable td[class]{color:inherit;vertical-align:top;padding:0;line-height:inherit;white-space:normal}
	table.linenotable td.code{padding-left:.75em}
	table.linenotable td.linenos{border-right:1px solid currentColor;opacity:.35;padding-right:.5em}
	pre.pygments .lineno{border-right:1px solid currentColor;opacity:.35;display:inline-block;margin-right:.75em}
	pre.pygments .lineno::before{content:"";margin-right:-.125em}
	.quoteblock{margin:0 1em 1.25em 1.5em;display:table}
	.quoteblock>.title{margin-left:-1.5em;margin-bottom:.75em}
	.quoteblock blockquote,.quoteblock p{color:rgba(0,0,0,.85);font-size:1.15rem;line-height:1.75;word-spacing:.1em;letter-spacing:0;font-style:italic;text-align:justify}
	.quoteblock blockquote{margin:0;padding:0;border:0}
	.quoteblock blockquote::before{content:"\201c";float:left;font-size:2.75em;font-weight:bold;line-height:.6em;margin-left:-.6em;color:#7a2518;text-shadow:0 1px 2px rgba(0,0,0,.1)}
	.quoteblock blockquote>.paragraph:last-child p{margin-bottom:0}
	.quoteblock .attribution{margin-top:.75em;margin-right:.5ex;text-align:right}
	.verseblock{margin:0 1em 1.25em}
	.verseblock pre{font-family:"Open Sans","DejaVu Sans",sans;font-size:1.15rem;color:rgba(0,0,0,.85);font-weight:300;text-rendering:optimizeLegibility}
	.verseblock pre strong{font-weight:400}
	.verseblock .attribution{margin-top:1.25rem;margin-left:.5ex}
	.quoteblock .attribution,.verseblock .attribution{font-size:.9375em;line-height:1.45;font-style:italic}
	.quoteblock .attribution br,.verseblock .attribution br{display:none}
	.quoteblock .attribution cite,.verseblock .attribution cite{display:block;letter-spacing:-.025em;color:rgba(0,0,0,.6)}
	.quoteblock.abstract blockquote::before,.quoteblock.excerpt blockquote::before,.quoteblock .quoteblock blockquote::before{display:none}
	.quoteblock.abstract blockquote,.quoteblock.abstract p,.quoteblock.excerpt blockquote,.quoteblock.excerpt p,.quoteblock .quoteblock blockquote,.quoteblock .quoteblock p{line-height:1.6;word-spacing:0}
	.quoteblock.abstract{margin:0 1em 1.25em;display:block}
	.quoteblock.abstract>.title{margin:0 0 .375em;font-size:1.15em;text-align:center}
	.quoteblock.excerpt,.quoteblock .quoteblock{margin:0 0 1.25em;padding:0 0 .25em 1em;border-left:.25em solid #dddddf}
	.quoteblock.excerpt blockquote,.quoteblock.excerpt p,.quoteblock .quoteblock blockquote,.quoteblock .quoteblock p{color:inherit;font-size:1.0625rem}
	.quoteblock.excerpt .attribution,.quoteblock .quoteblock .attribution{color:inherit;text-align:left;margin-right:0}
	table.tableblock{max-width:100%;border-collapse:separate}
	p.tableblock:last-child{margin-bottom:0}
	td.tableblock>.content>:last-child{margin-bottom:-1.25em}
	td.tableblock>.content>:last-child.sidebarblock{margin-bottom:0}
	table.tableblock,th.tableblock,td.tableblock{border:0 solid #dedede}
	table.grid-all>thead>tr>.tableblock,table.grid-all>tbody>tr>.tableblock{border-width:0 1px 1px 0}
	table.grid-all>tfoot>tr>.tableblock{border-width:1px 1px 0 0}
	table.grid-cols>*>tr>.tableblock{border-width:0 1px 0 0}
	table.grid-rows>thead>tr>.tableblock,table.grid-rows>tbody>tr>.tableblock{border-width:0 0 1px}
	table.grid-rows>tfoot>tr>.tableblock{border-width:1px 0 0}
	table.grid-all>*>tr>.tableblock:last-child,table.grid-cols>*>tr>.tableblock:last-child{border-right-width:0}
	table.grid-all>tbody>tr:last-child>.tableblock,table.grid-all>thead:last-child>tr>.tableblock,table.grid-rows>tbody>tr:last-child>.tableblock,table.grid-rows>thead:last-child>tr>.tableblock{border-bottom-width:0}
	table.frame-all{border-width:1px}
	table.frame-sides{border-width:0 1px}
	table.frame-topbot,table.frame-ends{border-width:1px 0}
	table.stripes-all tr,table.stripes-odd tr:nth-of-type(odd),table.stripes-even tr:nth-of-type(even),table.stripes-hover tr:hover{background:#f8f8f7}
	th.halign-left,td.halign-left{text-align:left}
	th.halign-right,td.halign-right{text-align:right}
	th.halign-center,td.halign-center{text-align:center}
	th.valign-top,td.valign-top{vertical-align:top}
	th.valign-bottom,td.valign-bottom{vertical-align:bottom}
	th.valign-middle,td.valign-middle{vertical-align:middle}
	table thead th,table tfoot th{font-weight:bold}
	tbody tr th{display:table-cell;line-height:1.6;background:#f7f8f7}
	tbody tr th,tbody tr th p,tfoot tr th,tfoot tr th p{color:rgba(0,0,0,.8);font-weight:bold}
	p.tableblock>code:only-child{background:none;padding:0}
	p.tableblock{font-size:1em}
	ol{margin-left:1.75em}
	ul li ol{margin-left:1.5em}
	dl dd{margin-left:1.125em}
	dl dd:last-child,dl dd:last-child>:last-child{margin-bottom:0}
	ol>li p,ul>li p,ul dd,ol dd,.olist .olist,.ulist .ulist,.ulist .olist,.olist .ulist{margin-bottom:.625em}
	ul.checklist,ul.none,ol.none,ul.no-bullet,ol.no-bullet,ol.unnumbered,ul.unstyled,ol.unstyled{list-style-type:none}
	ul.no-bullet,ol.no-bullet,ol.unnumbered{margin-left:.625em}
	ul.unstyled,ol.unstyled{margin-left:0}
	ul.checklist{margin-left:.625em}
	ul.checklist li>p:first-child>.fa-square-o:first-child,ul.checklist li>p:first-child>.fa-check-square-o:first-child{width:1.25em;font-size:.8em;position:relative;bottom:.125em}
	ul.checklist li>p:first-child>input[type="checkbox"]:first-child{margin-right:.25em}
	ul.inline{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-flow:row wrap;-webkit-flex-flow:row wrap;flex-flow:row wrap;list-style:none;margin:0 0 .625em -1.25em}
	ul.inline>li{margin-left:1.25em}
	.unstyled dl dt{font-weight:400;font-style:normal}
	ol.arabic{list-style-type:decimal}
	ol.decimal{list-style-type:decimal-leading-zero}
	ol.loweralpha{list-style-type:lower-alpha}
	ol.upperalpha{list-style-type:upper-alpha}
	ol.lowerroman{list-style-type:lower-roman}
	ol.upperroman{list-style-type:upper-roman}
	ol.lowergreek{list-style-type:lower-greek}
	.hdlist>table,.colist>table{border:0;background:none}
	.hdlist>table>tbody>tr,.colist>table>tbody>tr{background:none}
	td.hdlist1,td.hdlist2{vertical-align:top;padding:0 .625em}
	td.hdlist1{font-weight:bold;padding-bottom:1.25em}
	.literalblock+.colist,.listingblock+.colist{margin-top:-.5em}
	.colist td:not([class]):first-child{padding:.4em .75em 0;line-height:1;vertical-align:top}
	.colist td:not([class]):first-child img{max-width:none}
	.colist td:not([class]):last-child{padding:.25em 0}
	.thumb,.th{line-height:0;display:inline-block;border:solid 4px #fff;-webkit-box-shadow:0 0 0 1px #ddd;box-shadow:0 0 0 1px #ddd}
	.imageblock.left{margin:.25em .625em 1.25em 0}
	.imageblock.right{margin:.25em 0 1.25em .625em}
	.imageblock>.title{margin-bottom:0}
	.imageblock.thumb,.imageblock.th{border-width:6px}
	.imageblock.thumb>.title,.imageblock.th>.title{padding:0 .125em}
	.image.left,.image.right{margin-top:.25em;margin-bottom:.25em;display:inline-block;line-height:0}
	.image.left{margin-right:.625em}
	.image.right{margin-left:.625em}
	a.image{text-decoration:none;display:inline-block}
	a.image object{pointer-events:none}
	sup.footnote,sup.footnoteref{font-size:.875em;position:static;vertical-align:super}
	sup.footnote a,sup.footnoteref a{text-decoration:none}
	sup.footnote a:active,sup.footnoteref a:active{text-decoration:underline}
	#footnotes{padding-top:.75em;padding-bottom:.75em;margin-bottom:.625em}
	#footnotes hr{width:20%;min-width:6.25em;margin:-.25em 0 .75em;border-width:1px 0 0}
	#footnotes .footnote{padding:0 .375em 0 .225em;line-height:1.3334;font-size:.875em;margin-left:1.2em;margin-bottom:.2em}
	#footnotes .footnote a:first-of-type{font-weight:bold;text-decoration:none;margin-left:-1.05em}
	#footnotes .footnote:last-of-type{margin-bottom:0}
	#content #footnotes{margin-top:-.625em;margin-bottom:0;padding:.75em 0}
	.gist .file-data>table{border:0;background:#fff;width:100%;margin-bottom:0}
	.gist .file-data>table td.line-data{width:99%}
	div.unbreakable{page-break-inside:avoid}
	.big{font-size:larger}
	.small{font-size:smaller}
	.underline{text-decoration:underline}
	.overline{text-decoration:overline}
	.line-through{text-decoration:line-through}
	.aqua{color:#00bfbf}
	.aqua-background{background:#00fafa}
	.black{color:#000}
	.black-background{background:#000}
	.blue{color:#0000bf}
	.blue-background{background:#0000fa}
	.fuchsia{color:#bf00bf}
	.fuchsia-background{background:#fa00fa}
	.gray{color:#606060}
	.gray-background{background:#7d7d7d}
	.green{color:#006000}
	.green-background{background:#007d00}
	.lime{color:#00bf00}
	.lime-background{background:#00fa00}
	.maroon{color:#600000}
	.maroon-background{background:#7d0000}
	.navy{color:#000060}
	.navy-background{background:#00007d}
	.olive{color:#606000}
	.olive-background{background:#7d7d00}
	.purple{color:#600060}
	.purple-background{background:#7d007d}
	.red{color:#bf0000}
	.red-background{background:#fa0000}
	.silver{color:#909090}
	.silver-background{background:#bcbcbc}
	.teal{color:#006060}
	.teal-background{background:#007d7d}
	.white{color:#bfbfbf}
	.white-background{background:#fafafa}
	.yellow{color:#bfbf00}
	.yellow-background{background:#fafa00}
	span.icon>.fa{cursor:default}
	a span.icon>.fa{cursor:inherit}
	.admonitionblock td.icon [class^="fa icon-"]{font-size:2.5em;text-shadow:1px 1px 2px rgba(0,0,0,.5);cursor:default}
	.admonitionblock td.icon .icon-note::before{content:"\f05a";color:#19407c}
	.admonitionblock td.icon .icon-tip::before{content:"\f0eb";text-shadow:1px 1px 2px rgba(155,155,0,.8);color:#111}
	.admonitionblock td.icon .icon-warning::before{content:"\f071";color:#bf6900}
	.admonitionblock td.icon .icon-caution::before{content:"\f06d";color:#bf3400}
	.admonitionblock td.icon .icon-important::before{content:"\f06a";color:#bf0000}
	.conum[data-value]{display:inline-block;color:#fff!important;background:rgba(0,0,0,.8);-webkit-border-radius:100px;border-radius:100px;text-align:center;font-size:.75em;width:1.67em;height:1.67em;line-height:1.67em;font-family:"Open Sans","DejaVu Sans",sans-serif;font-style:normal;font-weight:bold}
	.conum[data-value] *{color:#fff!important}
	.conum[data-value]+b{display:none}
	.conum[data-value]::after{content:attr(data-value)}
	pre .conum[data-value]{position:relative;top:-.125em}
	b.conum *{color:inherit!important}
	.conum:not([data-value]):empty{display:none}
	dt,th.tableblock,td.content,div.footnote{text-rendering:optimizeLegibility}
	h1,h2,p,td.content,span.alt{letter-spacing:-.01em}
	p strong,td.content strong,div.footnote strong{letter-spacing:-.005em}
	p,blockquote,dt,td.content,span.alt{font-size:1.0625rem}
	p{margin-bottom:1.25rem}
	.sidebarblock p,.sidebarblock dt,.sidebarblock td.content,p.tableblock{font-size:1em}
	.exampleblock>.content{background:#fffef7;border-color:#e0e0dc;-webkit-box-shadow:0 1px 4px #e0e0dc;box-shadow:0 1px 4px #e0e0dc}
	.print-only{display:none!important}
	@page{margin:1.25cm .75cm}
	@media print{*{-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}
	html{font-size:80%}
	a{color:inherit!important;text-decoration:underline!important}
	a.bare,a[href^="#"],a[href^="mailto:"]{text-decoration:none!important}
	a[href^="http:"]:not(.bare)::after,a[href^="https:"]:not(.bare)::after{content:"(" attr(href) ")";display:inline-block;font-size:.875em;padding-left:.25em}
	abbr[title]::after{content:" (" attr(title) ")"}
	pre,blockquote,tr,img,object,svg{page-break-inside:avoid}
	thead{display:table-header-group}
	svg{max-width:100%}
	p,blockquote,dt,td.content{font-size:1em;orphans:3;widows:3}
	h2,h3,#toctitle,.sidebarblock>.content>.title{page-break-after:avoid}
	#toc,.sidebarblock,.exampleblock>.content{background:none!important}
	#toc{border-bottom:1px solid #dddddf!important;padding-bottom:0!important}
	body.book #header{text-align:center}
	body.book #header>h1:first-child{border:0!important;margin:2.5em 0 1em}
	body.book #header .details{border:0!important;display:block;padding:0!important}
	body.book #header .details span:first-child{margin-left:0!important}
	body.book #header .details br{display:block}
	body.book #header .details br+span::before{content:none!important}
	body.book #toc{border:0!important;text-align:left!important;padding:0!important;margin:0!important}
	body.book #toc,body.book #preamble,body.book h1.sect0,body.book .sect1>h2{page-break-before:always}
	.listingblock code[data-lang]::before{display:block}
	#footer{padding:0 .9375em}
	.hide-on-print{display:none!important}
	.print-only{display:block!important}
	.hide-for-print{display:none!important}
	.show-for-print{display:inherit!important}}
	@media print,amzn-kf8{#header>h1:first-child{margin-top:1.25rem}
	.sect1{padding:0!important}
	.sect1+.sect1{border:0}
	#footer{background:none}
	#footer-text{color:rgba(0,0,0,.6);font-size:.9em}}
	@media amzn-kf8{#header,#content,#footnotes,#footer{padding:0}}
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.6/styles/github.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.6/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];


const markdCss = (function() {/*
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.6/styles/github.min.css">
<style>
@font-face {
  font-family: octicons-link;
  src: url(data:font/woff;charset=utf-8;base64,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) format('woff');
}

body .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

body .anchor {
  float: left;
  line-height: 1;
  margin-left: -20px;
  padding-right: 4px;
}

body .anchor:focus {
  outline: none;
}

body h1 .octicon-link,
body h2 .octicon-link,
body h3 .octicon-link,
body h4 .octicon-link,
body h5 .octicon-link,
body h6 .octicon-link {
  color: #1b1f23;
  vertical-align: middle;
  visibility: hidden;
}

body h1:hover .anchor,
body h2:hover .anchor,
body h3:hover .anchor,
body h4:hover .anchor,
body h5:hover .anchor,
body h6:hover .anchor {
  text-decoration: none;
}

body h1:hover .anchor .octicon-link,
body h2:hover .anchor .octicon-link,
body h3:hover .anchor .octicon-link,
body h4:hover .anchor .octicon-link,
body h5:hover .anchor .octicon-link,
body h6:hover .anchor .octicon-link {
  visibility: visible;
}

body {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  color: #24292e;
  line-height: 1.5;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}

body .pl-c {
  color: #6a737d;
}

body .pl-c1,
body .pl-s .pl-v {
  color: #005cc5;
}

body .pl-e,
body .pl-en {
  color: #6f42c1;
}

body .pl-s .pl-s1,
body .pl-smi {
  color: #24292e;
}

body .pl-ent {
  color: #22863a;
}

body .pl-k {
  color: #d73a49;
}

body .pl-pds,
body .pl-s,
body .pl-s .pl-pse .pl-s1,
body .pl-sr,
body .pl-sr .pl-cce,
body .pl-sr .pl-sra,
body .pl-sr .pl-sre {
  color: #032f62;
}

body .pl-smw,
body .pl-v {
  color: #e36209;
}

body .pl-bu {
  color: #b31d28;
}

body .pl-ii {
  background-color: #b31d28;
  color: #fafbfc;
}

body .pl-c2 {
  background-color: #d73a49;
  color: #fafbfc;
}

body .pl-c2:before {
  content: "^M";
}

body .pl-sr .pl-cce {
  color: #22863a;
  font-weight: 700;
}

body .pl-ml {
  color: #735c0f;
}

body .pl-mh,
body .pl-mh .pl-en,
body .pl-ms {
  color: #005cc5;
  font-weight: 700;
}

body .pl-mi {
  color: #24292e;
  font-style: italic;
}

body .pl-mb {
  color: #24292e;
  font-weight: 700;
}

body .pl-md {
  background-color: #ffeef0;
  color: #b31d28;
}

body .pl-mi1 {
  background-color: #f0fff4;
  color: #22863a;
}

body .pl-mc {
  background-color: #ffebda;
  color: #e36209;
}

body .pl-mi2 {
  background-color: #005cc5;
  color: #f6f8fa;
}

body .pl-mdr {
  color: #6f42c1;
  font-weight: 700;
}

body .pl-ba {
  color: #586069;
}

body .pl-sg {
  color: #959da5;
}

body .pl-corl {
  color: #032f62;
  text-decoration: underline;
}

body details {
  display: block;
}

body summary {
  display: list-item;
}

body a {
  background-color: transparent;
}

body a:active,
body a:hover {
  outline-width: 0;
}

body strong {
  font-weight: inherit;
  font-weight: bolder;
}

body h1 {
  font-size: 2em;
  margin: .67em 0;
}

body img {
  border-style: none;
}

body code,
body kbd,
body pre {
  font-family: monospace,monospace;
  font-size: 1em;
}

body hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

body input {
  font: inherit;
  margin: 0;
}

body input {
  overflow: visible;
}

body [type=checkbox] {
  box-sizing: border-box;
  padding: 0;
}

body * {
  box-sizing: border-box;
}

body input {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

body a {
  color: #0366d6;
  text-decoration: none;
}

body a:hover {
  text-decoration: underline;
}

body strong {
  font-weight: 600;
}

body hr {
  background: transparent;
  border: 0;
  border-bottom: 1px solid #dfe2e5;
  height: 0;
  margin: 15px 0;
  overflow: hidden;
}

body hr:before {
  content: "";
  display: table;
}

body hr:after {
  clear: both;
  content: "";
  display: table;
}

body table {
  border-collapse: collapse;
  border-spacing: 0;
}

body td,
body th {
  padding: 0;
}

body details summary {
  cursor: pointer;
}

body h1,
body h2,
body h3,
body h4,
body h5,
body h6 {
  margin-bottom: 0;
  margin-top: 0;
}

body h1 {
  font-size: 32px;
}

body h1,
body h2 {
  font-weight: 600;
}

body h2 {
  font-size: 24px;
}

body h3 {
  font-size: 20px;
}

body h3,
body h4 {
  font-weight: 600;
}

body h4 {
  font-size: 16px;
}

body h5 {
  font-size: 14px;
}

body h5,
body h6 {
  font-weight: 600;
}

body h6 {
  font-size: 12px;
}

body p {
  margin-bottom: 10px;
  margin-top: 0;
}

body blockquote {
  margin: 0;
}

body ol,
body ul {
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;
}

body ol ol,
body ul ol {
  list-style-type: lower-roman;
}

body ol ol ol,
body ol ul ol,
body ul ol ol,
body ul ul ol {
  list-style-type: lower-alpha;
}

body dd {
  margin-left: 0;
}

body code,
body pre {
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
  font-size: 12px;
}

body pre {
  margin-bottom: 0;
  margin-top: 0;
}

body input::-webkit-inner-spin-button,
body input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

body .border {
  border: 1px solid #e1e4e8!important;
}

body .border-0 {
  border: 0!important;
}

body .border-bottom {
  border-bottom: 1px solid #e1e4e8!important;
}

body .rounded-1 {
  border-radius: 3px!important;
}

body .bg-white {
  background-color: #fff!important;
}

body .bg-gray-light {
  background-color: #fafbfc!important;
}

body .text-gray-light {
  color: #6a737d!important;
}

body .mb-0 {
  margin-bottom: 0!important;
}

body .my-2 {
  margin-bottom: 8px!important;
  margin-top: 8px!important;
}

body .pl-0 {
  padding-left: 0!important;
}

body .py-0 {
  padding-bottom: 0!important;
  padding-top: 0!important;
}

body .pl-1 {
  padding-left: 4px!important;
}

body .pl-2 {
  padding-left: 8px!important;
}

body .py-2 {
  padding-bottom: 8px!important;
  padding-top: 8px!important;
}

body .pl-3,
body .px-3 {
  padding-left: 16px!important;
}

body .px-3 {
  padding-right: 16px!important;
}

body .pl-4 {
  padding-left: 24px!important;
}

body .pl-5 {
  padding-left: 32px!important;
}

body .pl-6 {
  padding-left: 40px!important;
}

body .f6 {
  font-size: 12px!important;
}

body .lh-condensed {
  line-height: 1.25!important;
}

body .text-bold {
  font-weight: 600!important;
}

body:before {
  content: "";
  display: table;
}

body:after {
  clear: both;
  content: "";
  display: table;
}

body>:first-child {
  margin-top: 0!important;
}

body>:last-child {
  margin-bottom: 0!important;
}

body a:not([href]) {
  color: inherit;
  text-decoration: none;
}

body blockquote,
body dl,
body ol,
body p,
body pre,
body table,
body ul {
  margin-bottom: 16px;
  margin-top: 0;
}

body hr {
  background-color: #e1e4e8;
  border: 0;
  height: .25em;
  margin: 24px 0;
  padding: 0;
}

body blockquote {
  border-left: .25em solid #dfe2e5;
  color: #6a737d;
  padding: 0 1em;
}

body blockquote>:first-child {
  margin-top: 0;
}

body blockquote>:last-child {
  margin-bottom: 0;
}

body kbd {
  background-color: #fafbfc;
  border: 1px solid #c6cbd1;
  border-bottom-color: #959da5;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #959da5;
  color: #444d56;
  display: inline-block;
  font-size: 11px;
  line-height: 10px;
  padding: 3px 5px;
  vertical-align: middle;
}

body h1,
body h2,
body h3,
body h4,
body h5,
body h6 {
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 16px;
  margin-top: 24px;
}

body h1 {
  font-size: 2em;
}

body h1,
body h2 {
  border-bottom: 1px solid #eaecef;
  padding-bottom: .3em;
}

body h2 {
  font-size: 1.5em;
}

body h3 {
  font-size: 1.25em;
}

body h4 {
  font-size: 1em;
}

body h5 {
  font-size: .875em;
}

body h6 {
  color: #6a737d;
  font-size: .85em;
}

body ol,
body ul {
  padding-left: 2em;
}

body ol ol,
body ol ul,
body ul ol,
body ul ul {
  margin-bottom: 0;
  margin-top: 0;
}

body li {
  word-wrap: break-all;
}

body li>p {
  margin-top: 16px;
}

body li+li {
  margin-top: .25em;
}

body dl {
  padding: 0;
}

body dl dt {
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
  margin-top: 16px;
  padding: 0;
}

body dl dd {
  margin-bottom: 16px;
  padding: 0 16px;
}

body table {
  display: block;
  overflow: auto;
  width: 100%;
}

body table th {
  font-weight: 600;
}

body table td,
body table th {
  border: 1px solid #dfe2e5;
  padding: 6px 13px;
}

body table tr {
  background-color: #fff;
  border-top: 1px solid #c6cbd1;
}

body table tr:nth-child(2n) {
  background-color: #f6f8fa;
}

body img {
  background-color: #fff;
  box-sizing: content-box;
  max-width: 100%;
}

body img[align=right] {
  padding-left: 20px;
}

body img[align=left] {
  padding-right: 20px;
}

body code {
  background-color: rgba(27,31,35,.05);
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  padding: .2em .4em;
}

body pre {
  word-wrap: normal;
}

body pre>code {
  background: transparent;
  border: 0;
  font-size: 100%;
  margin: 0;
  padding: 0;
  white-space: pre;
  word-break: normal;
}

body .highlight {
  margin-bottom: 16px;
}

body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

body .highlight pre,
body pre {
  background-color: #f6f8fa;
  border-radius: 3px;
  font-size: 85%;
  line-height: 1.45;
  overflow: auto;
  padding: 16px;
}

body pre code {
  background-color: transparent;
  border: 0;
  display: inline;
  line-height: inherit;
  margin: 0;
  max-width: auto;
  overflow: visible;
  padding: 0;
  word-wrap: normal;
}

body .commit-tease-sha {
  color: #444d56;
  display: inline-block;
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
  font-size: 90%;
}

body .blob-wrapper {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  overflow-x: auto;
  overflow-y: hidden;
}

body .blob-wrapper-embedded {
  max-height: 240px;
  overflow-y: auto;
}

body .blob-num {
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  color: rgba(27,31,35,.3);
  cursor: pointer;
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
  font-size: 12px;
  line-height: 20px;
  min-width: 50px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: right;
  user-select: none;
  vertical-align: top;
  white-space: nowrap;
  width: 1%;
}

body .blob-num:hover {
  color: rgba(27,31,35,.6);
}

body .blob-num:before {
  content: attr(data-line-number);
}

body .blob-code {
  line-height: 20px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  vertical-align: top;
}

body .blob-code-inner {
  color: #24292e;
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
  font-size: 12px;
  overflow: visible;
  white-space: pre;
  word-wrap: normal;
}

body .pl-token.active,
body .pl-token:hover {
  background: #ffea7f;
  cursor: pointer;
}

body kbd {
  background-color: #fafbfc;
  border: 1px solid #d1d5da;
  border-bottom-color: #c6cbd1;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #c6cbd1;
  color: #444d56;
  display: inline-block;
  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
  line-height: 10px;
  padding: 3px 5px;
  vertical-align: middle;
}

body :checked+.radio-label {
  border-color: #0366d6;
  position: relative;
  z-index: 1;
}

body .tab-size[data-tab-size="1"] {
  -moz-tab-size: 1;
  tab-size: 1;
}

body .tab-size[data-tab-size="2"] {
  -moz-tab-size: 2;
  tab-size: 2;
}

body .tab-size[data-tab-size="3"] {
  -moz-tab-size: 3;
  tab-size: 3;
}

body .tab-size[data-tab-size="4"] {
  -moz-tab-size: 4;
  tab-size: 4;
}

body .tab-size[data-tab-size="5"] {
  -moz-tab-size: 5;
  tab-size: 5;
}

body .tab-size[data-tab-size="6"] {
  -moz-tab-size: 6;
  tab-size: 6;
}

body .tab-size[data-tab-size="7"] {
  -moz-tab-size: 7;
  tab-size: 7;
}

body .tab-size[data-tab-size="8"] {
  -moz-tab-size: 8;
  tab-size: 8;
}

body .tab-size[data-tab-size="9"] {
  -moz-tab-size: 9;
  tab-size: 9;
}

body .tab-size[data-tab-size="10"] {
  -moz-tab-size: 10;
  tab-size: 10;
}

body .tab-size[data-tab-size="11"] {
  -moz-tab-size: 11;
  tab-size: 11;
}

body .tab-size[data-tab-size="12"] {
  -moz-tab-size: 12;
  tab-size: 12;
}

body .task-list-item {
  list-style-type: none;
}

body .task-list-item+.task-list-item {
  margin-top: 3px;
}

body .task-list-item input {
  margin: 0 .2em .25em -1.6em;
  vertical-align: middle;
}

body hr {
  border-bottom-color: #eee;
}

body .pl-0 {
  padding-left: 0!important;
}

body .pl-1 {
  padding-left: 4px!important;
}

body .pl-2 {
  padding-left: 8px!important;
}

body .pl-3 {
  padding-left: 16px!important;
}

body .pl-4 {
  padding-left: 24px!important;
}

body .pl-5 {
  padding-left: 32px!important;
}

body .pl-6 {
  padding-left: 40px!important;
}

body .pl-7 {
  padding-left: 48px!important;
}

body .pl-8 {
  padding-left: 64px!important;
}

body .pl-9 {
  padding-left: 80px!important;
}

body .pl-10 {
  padding-left: 96px!important;
}

body .pl-11 {
  padding-left: 112px!important;
}

body .pl-12 {
  padding-left: 128px!important;
}
</style>
*/}).toString().match(/\/\*([^]*)\*\//)[1];

const initValue = (function() {/*
:lang: ja
:doctype: book
:toc: left
:toclevels: 3
:toc-title: 目次
:sectnums:
:sectnumlevels: 4
:sectlinks:
:imagesdir: ./_images
:icons: font
:highlightjsdir: highlight
:source-highlighter: highlightjs
:example-caption: 例
:table-caption: 表
:figure-caption: 図
:docname: = asciidocの使い方
:author: asciidoc事業部 開発１グループ
:revnumber: 0.1
:revdate: 2017/10/25
:plantuml-server-url: http://www.plantuml.com/plantuml

= asciidocの使い方

== asciidocとは？

asciidocとは [blue]#軽量マークアップ言語# です

詳しくは<<can_asciidoc,asciidocでできること>>を参照

[[can_asciidoc]]
== asciidocでできること

=== asciidoctor.jsの基本構文

.コードハイライト
[source, json]
{
  "hoge" : "fuga",
  "foo" : [1,2,3]
}

.結合＋箇条書例
[cols="1,2a,3a"]
|====
|列1|列2|列3
3+|3列結合
.2+|2行縦結合|b-1|c-2
|b-2|
* c-3
* c-4
|====

[NOTE]
====
* format="csv"ではできません
====

=== asciidoctor-plantuml.jsによる図の作成

.シーケンス図
[plantuml,format=svg,role=sequence]
----
actor ユーザー as user
user -> ログイン : ログインする
ログイン --> user:
----

.クラス図
[plantuml]
----
class Animal {
  int age
  run()
}

class Cat extends Animal {
}

class Dog extends Animal {
}
----

.ditaa
[ditaa]
....
+----------+   +-------------+
|cAAA      |   |             |
|          +---+ Application |
| Database |   |      cRED{d}|
|       {s}|   +-------------+
+----------+
....

.graphviz
[graphviz]
....
digraph foo {
  node [style=rounded]
  node1 [shape=box]
  node2 [fillcolor=yellow, style="rounded,filled", shape=diamond]
  node3 [shape=record, label="{ a | b | c }"]
   node1 -> node2 -> node3
}
....
*/}).toString().match(/\/\*([^]*)\*\//)[1];

const initValue2 = (function() {/*


# sakusakudoc Markdown

本ページでは以下のMarkdownを利用することができます。

- 標準Markdown
- GitHub Flavored Markdown (GFM)

ただし、プレビュー画面ではリンク等の一部のイベントは抑止されることに注意してください。エクスポートされたHTML上は正常にリンクイベントが動作します。


---

# 標準Markdown

## 基本の書き方

### 段落 Paragraphs

Markdown の段落は、単一 または 複数の行にわたる連続したテキストに、ひとつ以上の改行をつけて表します。


```
段落(だんらく、英語:paragraph)とは文章における1ブロックのことであり、通常は複数の文によって構成される。パラグラフとも呼ばれる。

段落を表す記号として「段落記号(¶)」が存在する。
```


### 見出し Headings

見出しのテキストとなる行の頭に、 ひとつ以上の `#` をつけることで見出しとします。
`#` の数に応じて見出しのレベルを決めることができます。

```
# 最も大きい、見出しレベル 1 (<h1> タグ相当)
## 見出しレベル 2 (<h2> タグ相当)
    :
    : (中略)
    :
###### 最も小さい、見出しレベル 6 (<h6> タグ相当)
```

(勝手に追記) `#` のあとに半角スペースを入れて書き始める必要があるため、注意してください。

### 引用 Blockquotes

引用は `>` を使って表します。


```
今日こういう提案あったんですが、どうですか

> 明日社内でうどん打ちませんか
> またはたこ焼き
```

(勝手に追記) `>` のあとに半角スペースを入れて書き始める必要があるため、注意してください。


### テキストのスタイリング

ボールド、イタリック(斜体)も可能です。

```
*これはイタリック体になります*
**このテキストは太字になります**
```

ボールド、イタリックともに、 `*` だけでなく `_` を代わりに利用できます。
これはつまり、必要に応じてボールド + イタリックも可能ということです。

```
**今日の夕方5時からのうどんミーティングは全員 _参加必須_ です**
```

**今日の夕方5時からのうどんミーティングは全員 _参加必須_ です**


## リスト

### 番号なしリスト Unordered lists

番号なしリストは、 `*` か `-` のどちらかをリストアイテムの行頭に書きます。

```
* リストアイテム
* リストアイテム

- Item
- Item
```

* リストアイテム
* リストアイテム

- Item
- Item

### 番号つきリスト Ordered lists

番号付きリストは、リストアイテムの行頭を数字で始めます。

```
1. Item 1
2. Item 2
3. Item 3
```

1. Item 1
2. Item 2
3. Item 3


### 階層化されたリスト

リストアイテムを 2 スペースでインデントすることで、階層化されたリストにすることができます。

---

```
1. アイテム 1
  1. アイテム 1 の子アイテム
  2. アイテム 1 の子アイテム
2. アイテム 2
  * 番号付きリストの子アイテムは、必ずしも番号付きでなくても良い
    * さらに階層が深くなったため、このアイテムは合計 4 スペース分インデントされています
3. アイテム 3
```

1. アイテム 1
  1. アイテム 1 の子アイテム
  2. アイテム 1 の子アイテム
2. アイテム 2
  * 番号付きリストの子アイテムは、必ずしも番号付きでなくても良い
      * さらに階層が深くなったため、このアイテムは合計 4 スペース分インデントされています
3. アイテム 3


## コードフォーマット

### 行内のコードフォーマット

行内のテキスト、つまりインラインテキストの一部を等幅フォントで表示する場合には、次の例のようにバッククォート ( ` ) を使います。
バッククォートで囲まれたテキストは、見た目通りに表示され、テキストのスタイリングは適用されなくなります。
---

```
Dropbox に `documents/markdown/cheatsheet.md` を追加したのでよかったら見てください。

Markdown で **太字** は `**太字**` と書きます。
```

Dropbox に `documents/markdown/cheatsheet.md` を追加したのでよかったら見てください。

Markdown で **太字** は `**太字**` と書きます。

---



## リンク

リンクを作成するには、リンクのテキストを `[ ]` で囲み、続けて URL を `( )` で囲みます。

例として、 https://github.com/ へのハイパーリンクを、 「GitHub を始めよう！」というテキストで作成する場合、 `[GitHub を始めよう！](https://github.com/)` のように書きます。

これは [GitHub を始めよう！](https://github.com/) のように表示されます。


### 複数行のコードフォーマット

複数行にわたる段落をコードとして等幅フォントで表示するには、 次のようにバッククォートを 3 つ重ねます。

<pre><code>
```
x = 2 + 2
what is x
```
</code></pre>

---

# GitHub Flavored Markdown

## 標準の Markdown との違い

### 単語内に複数のアンダースコアが書ける

通常、Markdown がアンダースコア (`_`) をイタリック体として表示するところを、GFM では単語内に複数出現するアンダースコアを以下のように無視します。

* wow_great_stuff
* do_this_and_do_that_and_another_thing.

これにより、アンダースコアを使ったコードや名称を正しく表示することができます。
イタリック体で強調したい場合、アスタリスク (`*`) を利用してください。


### URL の自動リンク

GFM は一般的な URL を自動でリンクに変換します。
URL をリンクとして表示したいならば、ただ URL を入力するだけですみます。Markdown のリンクテキスト記法を用いる必要はありません。

```
http://example.com
```

http://example.com


### 打ち消し線

GFM では標準の Markdown にはない、打ち消し線の記法が追加されています。


```
~~Mistaken text.~~
```

~~Mistaken text.~~


### コードブロックの囲み記法

標準の Markdown は、行頭 4 つの半角スペースでインデントした段落を、コードブロックに変換します。
GFM でも同じ記法が利用できますが、次のように <code>```</code> でコードを囲むことでも同様の表示になります。 4 スペースでインデントする必要はありません。

4 スペースインデントの記法とは違い、囲み記法の場合は、前の行に改行を入れる必要はありませんが、変換する前の Markdown も読みやすさを保つために改行を入れたほうが良いでしょう。

<pre><code>
Here's an example:
```
function test() {
  console.log("notice the blank line before this function?");
}
```
</code></pre>

注意しなければならない点として、リストの中でコードブロックを正しく表示するには、 囲み記法ではなく 8 スペースでインデントする必要があります。

```
* list item

        code block in list item
        code block in list item
```

次のように表示されます。

* list item

        code block in list item
        code block in list item


### シンタックスハイライト

<pre><code>```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```</code></pre>


```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```


### 表 (テーブル)

表を作成するには、テキスト、行の区切りとしてハイフン `-` (1行目のみ)、列の区切りとしてパイプ `|` を組み合わせます。

```
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
```

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell


```
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |


```
| Name | Description          |
| ------------- | ----------- |
| Help      | Display the help window.|
| Close     | Closes a window     |
```

| Name | Description          |
| ------------- | ----------- |
| Help      | Display the help window.|
| Close     | Closes a window     |


```
| Name | Description          |
| ------------- | ----------- |
| Help      | ~~Display the~~ help window.|
| Close     | _Closes_ a window     |
```

| Name | Description          |
| ------------- | ----------- |
| Help      | ~~Display the~~ help window.|
| Close     | _Closes_ a window     |


テキストの左寄せ、右寄せ、中央寄せ

```
| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |
```

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

*/}).toString().match(/\/\*([^]*)\*\//)[1];
