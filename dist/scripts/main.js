"use strict";function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function update(e){updateOutput(e.getValue())}function updateOutput(e){var t=document.getElementById("markdown-output"),r=t.cloneNode(!0),o=md.render(e);$("#markdown-output").scrollTop();console.log(o),$("#markdown-output").html(o),$("#printable").html(o),t=document.getElementById("markdown-output");var n=r.getElementsByTagName("*");if(void 0!==n){var i=t.getElementsByTagName("*");if(void 0!==i)for(var d=0,a=Math.min(n.length,i.length);d<a;d++)if(!n[d].isEqualNode(i[d]))return void $("#markdown-output").scrollTop(i[d].offsetTop)}}function printPage(){window.print()}var _CodeMirror$fromTextA,md=window.markdownit({html:!0,linkify:!0,highlight:function(e,t){if(t&&hljs.getLanguage(t))try{return'<pre class="hljs"><code>'+hljs.highlight(t,e,!0).value+"</code></pre>"}catch(r){}return'<pre class="hljs"><code>'+md.utils.escapeHtml(e)+"</code></pre>"}}).use(window.markdownitDeflist),editor=CodeMirror.fromTextArea(document.getElementById("markdown-input"),(_CodeMirror$fromTextA={mode:"gfm",lineNumbers:!0,matchBrackets:!0,lineWrapping:!0,scrollbarStyle:"native"},_defineProperty(_CodeMirror$fromTextA,"lineWrapping",!0),_defineProperty(_CodeMirror$fromTextA,"theme","base16-light"),_defineProperty(_CodeMirror$fromTextA,"extraKeys",{Enter:"newlineAndIndentContinueMarkdownList"}),_CodeMirror$fromTextA),{showToolbar:!0});editor.on("change",update),updateOutput($("#markdown-input").val());