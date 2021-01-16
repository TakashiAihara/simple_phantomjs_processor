// パラメタからurlを取得
var system_in = require('system');
args = system_in.args;
url = args[1];
 
var webPage = require('webpage');
var page = webPage.create();
 
// 表示サイズを設定
page.viewportSize = {
	width  : 1920,
	height : 1080
};
page.open(url, function start(status) {
	// 取得したHTMLを表示
	console.log(page.content);
	phantom.exit();
});
