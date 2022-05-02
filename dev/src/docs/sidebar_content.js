/*
RegExr: Learn, Build, & Test RegEx
Copyright (C) 2017  gskinner.com, inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

let home = {};
export default home;

home.id = "home";
home.label = "メニュー";
home.desc = "[from HTML]";
home.kids = [


	{
	label: "正規表現セッティング",
	id: "share",
	el: "#share_main",
	list: false,
	kids: [
		{
		label: "お気に入りに追加",
		id: "share_favorites",
		el:"#share_favorites"
		},
		{
		label: "共有",
		id: "share_community",
		el:"#share_community"
		}
	]
	},

	{
	label: "お気に入り",
	id:"favorites",
	desc: "上記のリストには作成やお気に入りに入れて正規表現が表示されてます。"+
		"<p>作成した正規表現を編集したい場合はURLをクリック或いは項目をダブルクリックすることで読み込むことができます。編集後、「保存/共享」をクリックして更新することができます。</p>",
	search: true,
	kids: []
	},

	{
	label: "早見表",
	id:"cheatsheet",
	el: "#cheatsheet"
	},

	{ // injected from Reference
	id:"reference"
	},

	{
	label: "コミュニティ",
	id: "community",
	desc: "正規表現コミュニティへようこそ。このコミュニティは貴方みたいのユーザーが提供した正規表現をサーチできる正規表現のデータベースです。"+
		"<p>正規表現を選択後、URLをクリック或いは項目をダブルクリックすることで読み込むことができます。右矢印をクリックすることで正規表現かテキストのみを読み込むことが可能です。</p>"+
		"<p>正規表現に評価するやメニューにある<b>検索&共有</b>で自分の正規表現を提供するこどでコミュニティをより一層よくしましょう。</p>",
	search: true,
	kids: []
	},

	{
	label: "ヘルプ",
	id: "help",
	desc: "RegExrのヘルプ。正規表現の使い方の方は<b>RegExレファレンス</b>に移ってください。",
	kids: [

		{
		label:"サイトについて",
		desc:"RegExr v<%= build_version %> (<%= build_date %>)."+
			"<p><a href='http://twitter.com/gskinner/' target='_blank'>Grant Skinner</a> と <a href='http://gskinner.com/' target='_blank'>gskinner</a> チームより<a href='http://createjs.com/' target='_blank'>CreateJS</a> や <a href='http://codemirror.net/' target='_blank'>CodeMirror</a> ライブラリーを利用し作られた。</p>"+
			"<p><a href='https://github.com/skys215' target='_blank'>skys215</a> より翻訳。</p>"+
			"<p>バグの報告は <a href='http://github.com/gskinner/regexr/' target='_blank'>GitHub</a> で、</p>" +
			"<p>タイポや誤訳は <a href='http://github.com/skys215/regexr-jp/' target='_blank'>GitHub</a> に報告お願いします。</p>"
		},
		{
		label:"はじめに",
		desc:"RegExrはマッチングをリアルタイムに表示ができるし、シンタックスハイライト，ツールヒントや取り消し、やり直し機能が搭載しており（{{getCtrlKey()}}  -  Z / Y）、楽に正規表現を書くことができます。"+
			"<p><b>RegExレファレンス</b>を読み、違った正規表現を試したり，<b>コミュニティー</b>で使用例も検索可能です。</p>"+
			"<p>正規表現を<b>保存</b>し、後程の参考や他人と共有することもできます。<b>ログイン</b>して正規表現を保存しましょう。</p>"+
			"<p><b>正規表現セティング</b>で正規表現の詳細を編集したり、<b>コミュニティー</b>に共有、非公開や削除することができます。</p>",
		kids: [
			{
			label:"正規表現パネル",
			desc:"試したい正規表現を入力できます。マッチング結果は<b>テキスト</b>と<b>ツール</b>パネルで自動的に更新されます。"+
				"カーソルを正規表現の各部分に当てて詳細を見ることができます。"+
				"<p>右側にあるボタンでライブラリーや修飾子を変更可能です。</p>"
			},
			{
			label:"テキストパネル",
			desc:"対象文字列を入力する場所です。ファイルをドラッグ＆ドロップすることでファイル内容を読み込めます。"+
				"<p>入力する際にマッチする内容はハイライトされます。カーソルを当ててマッチングやグループの情報が表示されます。パネルの右上にマッチング数や使った時間が表示されます。</p>"+
				"<p>行頭や行末に現れる薄水色の長方形はマッチングの続きを表してます。</p>"
			},
			{
			label:"テストケースパネル",
			desc:"このパネルでテストケースを追加し、リアルタイムで<b>正規表現</b>を試すことができます。"+
				"<p>各ケースに対して、正規表現にすべてにマッチ、一部マッチ或いはマッチしないかと設定可能です。</p>"+
				"<p><b>テキスト</b>の右側にあるボタンで表示の切り替えができます。保存をクリックした時、テキストもテストも保存されます。</p>"
			},
			{
			label:"ツールパネル",
			desc:"<b>テキスト</b>パネルの下にある<b>ツール</b>パネルをクリックすることで表示の切り替えができます。"+
				"<p>ツールにはマッチング結果を見たり、処理することができます。</p>",
			kids: [
				{
				label:"置換",
				id: "replace",
				desc:"<b>置換</b>ツールでマッチングした文字列を入れ替わることができます。"+
					"<p>リアルタイムに置換結果を表示されます。</p>"+
					"<p>メタ文字やエスケープに置換することができます。例：<code>\\n</code>、<code>\\t</code>、<code>\\u0009</code>。</p>"+
					"<p>カーソルをメタ文字に当てて情報が見られます。詳しい内容は<b>レファレンス</b>に載ってます。</p>"
				},
				{
				label:"リスト",
				id: "list",
				desc:"<b>リスト</b>ツールには全てのマッチが表示されます。"+
					"<p>区切り文字<code>,</code>や<code>\\n</code>を入力することで、マッチング内容を見やすく表示できます。例えばJavascriptライブラリーを使った場合、<code>$1\\n</code>と入力すれば、全てグループ１のマッチングを表示されます。</p>"+
					"<p>エスケープ文字も使えます。例えば<code>\\n</code>、<code>\\t</code>や<code>\\u0009</code>。</p>"+
					"<p>メタ文字の上にカーソルを当てて詳細が見られます。</p>"
				},
				{
				label:"詳細",
				id: "details",
				desc:"<b>詳細</b>ツールにはマッチングとグループの内容を表示できます。"+
					"<p><b>テキスト</b>パネルでハイライトされてるマッチングアイテムをクリックして詳細が見られます。"+
					"<p>カーソルをグループに当てて関連の正規表現部分をハイライトできます。</p>"
				},
				{
				label:"解説",
				id: "explain",
				desc:"<b>解説</b>ツールには正規表現の各部分に対しての解説が書かれている場所です。"+
					"<p>カーソルを解説内容に当てると関連の<b>正規表現</b>がハイライトされます。逆に、カーソルを正規表現に当てれば<b>解説</b>の関連の部分もハイライトされます。</p>"+
					"<p>解説にある項目をクリックすれば、関連している<b>レファレンス</b>が開きます。</p>"
				}
			]
			},
			{
			label:"メニュー",
			desc:"<b>メニュー</b>には<b>ヘルプ</b>、<b>リファレンス</b>、<b>早見表</b>と<b>セッティング</b>が含まれてあります。"+
				"<p><b>RegEx レファレンス</b>で選んだものをダブルクリックすることで、<b>正規表現パネル</b>に挿入することができます。例えの右にある矢印をクリックすると例を読み込むことができます。</p>"+
				"<p>メニューには検索できる<b>コミュニティー</b>や<b>お気に入り</b>があります。</p>"
			}
		]
		},
		{
		label:"新規登録",
		id: "signin",
		desc:"ログインしてない場合は、RegExrはブラウザーのcookieにより臨時アカウントが作られます。つまり別のコンピュターでは貴方の正規表現を見ることはできません。cookieが削除や無効になった場合は、正規表現が削除される可能性があります。"+
			"<p>新規登録することで、どこでも貴方の正規表現を見ることができます。</p>"+
			"<p>新規登録後、既にお気に入りにある正規表現を登録したアカウントに移ります。</p>"+
			"<p>貴方の情報はRegExr日本語版にログインする以外別用途には使いません。</p>"
		},
		{
		id: "engine",
		label:"正規表現ライブラリ",
		desc:"正規表現の機能はほぼ同じですが、各言語によって異なる場合があります。"+
			 "<p>現時点ではRegExrはブラウザーでJavaScriptの正規表現とサーバーでPHPを通じてPCREの正規表現を使うことができます。</p>"+
			 "<p>正規表現パネルの右側でライブラリを変更することが可能です。</p>",
		kids: [
			{
			label:"JavaScript",
			desc:"JavaScriptライブラリはブラウザー側で<code>RegExp.exec()</code>を非同期に実行されます。"+
				"<p>ただし、ブラウザーの間にも異なる部分があります。既知の違いは：<ul>"+
				"<li>古いバージョンのブラウザーではuやyの修飾子は使えません。</li>"+
				"<li>\\8や\\9の処理も異ないます。</li>"+
				"<li>Chromeは\\xと\\uに対して別のブラウザーと処理が違います。</li>"+
				"<li>Chromeでは後読みを使えますが、あと読みはまだJavaScript標準にはまだ載ってません。</li>"+
				"<li>Safariでは、8進数のバイト文字コードを書く時に先頭の0を無視します。(例：\\00020)</li>"+
				"</ul></p>"
			},
			{
			label:"PCRE (PHP)",
			desc:"サーバー側ではPHP {{getPHPVersion()}} と PCRE {{getPCREVersion()}} を利用し正規表現をマッチしてます。"
			}
		]
		},
		{
		label:"クエリ文字列へのサポート",
		desc:"サイトにある<b>保存</b>機能で共有できるリンクを作る以外に、クエリ文字列利用し正規表現やテキストを事前に入力することができます。"+
			"<p>クエリ文字列：<ul>"+
			"<li><code>engine</code> - 使用するライブラリ(<code>js</code>か<code>pcre</code>のみ)</li>"+
			"<li><code>expression</code> - 正規表現。正規表現だけではなく(<code>.*</code>)、修飾子（フラグ）も含めるのをお勧めします(<code>/.*/ig</code>)。</li>"+
			"<li><code>text</code> - 対象文字列</li>"+
			"<li><code>tool</code> - ツール設定 (置換replace、リストlist、詳細details か 解説explain)</li>"+
			"<li><code>input</code> - ツールに事前入力する内容。（tool=replaceの場合、inputの内容は置換する内容となります。現時点ではreplaceかlistにしか反応しません）</li>"+
			"</ul></p>"+
			"例：<a href='http://regexr-jp.com/?expression=/./g&text=test&tool=replace&input=rep'>regexr-jp.com/?expression=/./g&text=test&tool=replace&input=rep</a>"
		}
	]
	}
];
