var md = window.markdownit({
	html: true,
	linkify: true,
	highlight: function (str, lang) {
	    if (lang && hljs.getLanguage(lang)) {
	      try {
	        return '<pre class="hljs"><code>' +
	               hljs.highlight(lang, str, true).value +
	               '</code></pre>';
	      } catch (__) {}
	    }

	    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
	}
}).use(window.markdownitDeflist);

var editor = CodeMirror.fromTextArea(document.getElementById('markdown-input'), {
	mode: 'gfm',
	lineNumbers: true,
	matchBrackets: true,
	lineWrapping: true,
	scrollbarStyle: 'native',
	lineWrapping: true,
	theme: 'base16-light',
	extraKeys: {'Enter': 'newlineAndIndentContinueMarkdownList'}
}, { showToolbar: true });
editor.on('change', update);

updateOutput($('#markdown-input').val())

function update(e) {
	updateOutput(e.getValue())
}

function updateOutput(input) {
	var out = document.getElementById('markdown-output');
	var old = out.cloneNode(true);
	var output = md.render(input)
	var scrollOffset = $('#markdown-output').scrollTop();

	$('#markdown-output').html(output);
	$('#printable').html(output);

	out = document.getElementById('markdown-output');
	var allold = old.getElementsByTagName('*');
	if (allold === undefined) return;
		var allnew = out.getElementsByTagName('*');
	if (allnew === undefined) return;

	for (var i = 0, max = Math.min(allold.length, allnew.length); i < max; i++) {
		if (!allold[i].isEqualNode(allnew[i])) {
		  $('#markdown-output').scrollTop(allnew[i].offsetTop);
		  return;
		}
	}
}

function printPage() {
	window.print();
}