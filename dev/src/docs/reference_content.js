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

// this is just raw content for the Reference.
// right now all examples are executed in-browser, so they need to be compatible. Maybe swap to XRegExp at some point.
// TODO: rewrite to use multiline template literals?

let reference_content = {}, o = reference_content;
export default reference_content;

o.label = "リファレンス";
o.id = "reference";
o.search = true,
    o.desc = `使える正規表現のトークン一覧。
	<p>リストでアイテムをダブルクリックして挿入する。</p>
	<p>横にある矢印をクリックして例を読み込む。</p>`;

o.kids = [
	{
	label: "文字クラス要素",
	id: "charclasses",
	desc: "文字クラスは、文字や数字の区別など、文字の種類を区別します。",
	kids: [

		{
		id:"set",
		label: "文字グループ",
		desc:"入力文字列に含まれるなら一致と見なされる個別の文字の一覧です",
		example:["[aeiou]","glib jocks vex dwarves!"],
		token:"[ABC]"
		},
		{
		id:"setnot",
		label: "文字グループの否定",
		desc:"入力文字列に含まれない場合に一致と見なされる個別の文字の一覧です",
		example:["[^aeiou]","glib jocks vex dwarves!"],
		token:"[^ABC]"
		},
		{
		id:"range",
		label: "文字範囲",
		tip:"{{getChar(prev)}}から{{getChar(next)}}までの文字(ASCII {{prev.code}}から{{next.code}})まで。 {{getInsensitive()}}",
		example:["[g-s]","abcdefghijklmnopqrstuvwxyz"],
		desc: "ASCIIコード範囲と一致する文字をマッチ。",
		token:"[A-Z]"
		},
		{
		id:"posixcharclass",
		tip:"POSIXクラス'{{value}}'に含めてるどれ1文字にマッチ。",
		label:"POSIX类",
		desc:"POSIX で定められている正規表現。例えば<code>[[:alnum:]$]</code>は英数字 (≡ [0-9A-Za-z])と<code>$</code>にマッチ。",
		ext:"<p>POSIX正規表現，<a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE標準</a>.</p>",
		token:"[:alnum:]"
		},
		{
		id:"dot",
		label: "ドット",
		tip:"任意の1文字{{getDotAll()}}.",
		desc:"改行を除く任意の1文字。",
		ext:" <code>[^\\n\\r]</code>と同じ。",
		example:[".", "glib jocks vex dwarves!"],
		token:"."
		},
		{
		id: "matchanyset",
		label:"全ての文字",
		desc:"改行を含む全ての文字にマッチ。ただしdotallフラグ(<code>s</code>)が有効の時のみ。"+
			"<p>同じ効果を持つ正規表現は<code>[^]</code>。ただしどのブラウザーでも使える訳ではない。</p>",
		example:["[\\s\\S]", "glib jocks vex dwarves!"],
		token:"[\\s\\S]"
		},
		{
		id:"unicodegrapheme",
		label:"Unicode文字(16進数)",
		desc:"任意のUnicode1文字にマッチ。",
		ext:"dotallフラグが有効の時は改行やマルチバイトの書記素も含めます。",
		token:"\\X"
		},
		{
		id:"word",
		label: "単語の文字",
		desc:"すべての半角英数字とアンダースコア。",
		ext:" _を含む英数文字にマッチ。<code>[a-zA-Z0-9_]</code>と同じ。",
		example:["\\w","bonjour, mon fr\u00E8re"],
		token:"\\w"
		},
		{
		id:"notword",
		label: "単語の文字以外",
		desc:"半角英数字とアンダースコア以外すべて",
		ext:"<code>[^A-Za-z0-9_]</code>と同じ。",
		example:["\\W","bonjour, mon fr\u00E8re"],
		token:"\\W"
		},
		{
		id:"digit",
		label: "数字",
		desc:"すべての半角数字（0-9）。",
		ext:"<code>[0-9]</code>と同じ。",
		example:["\\d","+1-(444)-555-1234"],
		token:"\\d"
		},
		{
		id:"notdigit",
		label: "数字以外",
		desc:"半角数字（0-9）以外すべて。",
		ext:" <code>[^0-9]</code>と同じ。",
		example:["\\D","+1-(444)-555-1234"],
		token:"\\D"
		},
		{
		id:"whitespace",
		label: "空白文字",
		desc:"空白文字（半角スペース、\t、\n、\r、\f）すべて",
		example:["\\s", "glib jocks vex dwarves!"],
		token:"\\s"
		},
		{
		id:"notwhitespace",
		label: "空白文字以外",
		desc:"空白文字（半角スペース、\t、\n、\r、\f）以外すべて",
		example:["\\S", "glib jocks vex dwarves!"],
		token:"\\S"
		},
		{
		id:"hwhitespace",
		label:"横スペース",
		desc:"水平空白文字(半角スペースや\t)。",
		token:"\\h"
		},
		{
		id:"nothwhitespace",
		label: "横スペース以外",
		desc:"水平空白文字(半角スペースや\t)以外すべて。",
		token:"\\H"
		},
		{
		id:"vwhitespace",
		label:"縦スペース",
		desc:"垂直タブ（制御コード 0x0b）をマッチ。",
		token:"\\v"
		},
		{
		id:"notvwhitespace",
		label: "垂直タブ以外",
		desc:"垂直タブ（制御コード 0x0b）以外全てをマッチ。",
		token:"\\V"
		},
		{
		id:"linebreak",
		label:"改行",
		desc:"改行文字。CRLF、CRとLFを含む。",
		token:"\\R"
		},
		{
		id:"notlinebreak",
		label:"改行文字以外",
		desc:"改行文字以外の文字全て。",
		ext:"<code>.</code>と似てます。しかしdotallフラグ(<code>s</code>)の影響は受けません。",
		token:"\\N"
		},
		{
		id:"unicodecat",
		tip:"Unicode文字クラス'{{getUniCat()}}'に含む全ての文字。",
		label:"Unicode文字クラス - 一般カテゴリ",
		desc:"指定したUnicode文字クラスに含む全ての文字にマッチ。例えば<code>\\p{Ll}</code>は全ての小文字にマッチします。",
		ext:"<p>Unicode文字クラス一覧：<a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE 標準</a>。</p>"+
			"<p>二つ書き方があります：</p><p><code>\\p{L}</code>と<code>\\pL</code></p>",
		token:"\\p{L}"
		},
		{
		id:"notunicodecat",
		tip:"Unicode文字クラス'{{getUniCat()}}'に含む全ての文字以外の文字。",
		label:"Unicode文字クラス - 一般カテゴリ　以外",
		desc:"指定したUnicode文字クラスに含む全ての文字以外の文字。",
		ext:"<p>Unicode文字クラス一覧：<a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE 標準</a>。</p>"+
			"<p>二つ書き方があります：</p><p><code>\\P{L}</code>と<code>\\p{^L}</code> <code>\\PL</code></p>",
		token:"\\P{L}"
		},
		{
		id:"unicodescript",
		tip:"Unicode文字クラス'{{value}}'に含む全ての文字。",
		label:"Unicode文字クラス - スクリプト",
		desc:"Unicode文字クラスに含む全ての文字にマッチ。例えば、<code>\\p{Arabic}</code>は全てのアラビア語文字にマッチ。",
		ext:"<p>Unicode文字クラス一覧：<a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE 標準</a>。</p>",
		token:"\\p{Han}"
		},
		{
		id:"notunicodescript",
		tip:"Unicode文字クラス'{{value}}'に含む全ての文字以外の文字。",
		label:"Unicode文字クラス - スクリプト　以外",
		desc:"Unicode文字クラスに含む全ての文字以外の文字にマッチ。",
		ext:"<p>Unicode文字クラス一覧：<a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE 標準</a>。</p>"+
			"<p>二つ書き方があります：</p><p><code>\\P{Han}</code>と<code>\\p{^Han}</code>",
		token:"\\P{Han}"
		}
	]
	},

	{
	label:"アンカー",
	id:"anchors",
	desc:"アンカーは文字列が一致する位置を指定します。指定された位置での一致のみが検索されます。",
	kids:[
		{
		id:"bos",
		label:"先頭判断",
		desc:"先頭行の行頭にマッチします。",
		ext:"<code>^</code>と異なって、先頭判断はマルチラインモード(<code>m</code>)の影響は受けません。文字じゃなく、位置をマッチします。",
		token:"\\A"
		},
		{
		id:"eos",
		label:"末尾判断",
		desc:"最終行の行末、または最終行の行末の改行(\n)のひとつ前にマッチします。",
		ext:"<code>$</code>と異なって、末尾判断はマルチラインモード(<code>m</code>)の影響は受けません。文字じゃなく、位置をマッチします。",
		token:"\\Z"
		},
		{
		id:"abseos",
		label:"厳格末尾判断",
		desc:"最終行の行末にマッチします。ただし、<code>$</code>や<code>\\Z</code>と異なって、行末に改行がある場合はマッチしません。",
		ext:"<code>$</code>と異なって、マルチラインモード(<code>m</code>)の影響は受けません。文字じゃなく、位置をマッチします。",
		token:"\\z"
		},
		{
		id:"bof",
		label:"行頭",
		desc:"行頭にマッチします。マルチラインモード(<code>m</code>)がオンの場合は各行の行頭にマッチします。",
		ext:" 文字じゃなく、位置をマッチします。",
		example:["^\\w+","she sells seashells"],
		token:"^"
		},
		{
		id:"eof",
		label:"行末",
		desc:"行末にマッチします。マルチラインモード(<code>m</code>)がオンの場合は各行の行末にマッチします。",
		ext:" 文字じゃなく、位置をマッチします。",
		example:["\\w+$","she sells seashells"],
		token:"$"
		},
		{
		id:"wordboundary",
		label:"語の区切り位置",
		desc:"単語の先頭か末尾である場合にマッチします。ASCII の単語境界 (片側は \\w、もう一方は \\W、\\A、または \\z）",
		ext:" 詳しくは（<code>\w</code>）をご覧ください。",
		example:["s\\b","she sells seashells"],
		token:"\\b"
		},
		{
		id:"notwordboundary",
		label: "語の区切り位置以外",
		desc:"単語の先頭でも末尾でもない場合にマッチします。ASCII 単語境界ではない",
		ext:" 文字じゃなく、位置をマッチします。",
		example:["s\\B","she sells seashells"],
		token:"\\B"
		},
		{
		id:"prevmatchend",
		label: "最後の一致の終わり",
		desc:"最初の行の行頭、もしくはグローバルマッチ(<code>\g</code>)におけるひとつ前のマッチの終了場所にマッチします。",
		ext:" 文字じゃなく、位置をマッチします。",
		token:"\\G"
		}
	]
	},

	{
	label: "エスケープシーケンス",
	id:"escchars",
	desc: "エスケープシーケンスは保留文字、特殊文字やUnicode文字を使うことができます。エスケープ文字は全て<code>\\</code>で始まります。",
	kids: [
		{
		id:"reservedchar",
		label:"メタ文字",
		desc:"正規表現中で意味を持つ文字(メタ文字)は、<code>\\</code>でその意味を無効化(エスケープ)することができます。"+
			"<p><code>{{getEscChars()}}</code></p>"+
			"<p>文字クラスの中では、ただ<code>\\</code>、<code>-</code>と<code>]</code>がエスケープ必要です。</p>",
		example:["\\+","1 + 1 = 2"],
		token:"\\+",
		show:true
		},
		{
		id:"escoctal",
		label:"8進数コード",
		desc:"<code>\\nnn</code>と表します。nnn は、8進文字コードを表す 2桁または 3桁で構成されます。",
		ext:"最大値は255(<code>\\377</code>)です。", // PCRE profile adds to ext.
		example:["\\251","RegExr is \u00A92014"],
		token:"\\000"
		},
		{
		id:"eschexadecimal",
		label:"16進数コード (2桁の数字)",
		desc:"<code>\\xFF</code>と表します。",
		example:["\\xA9","RegExr is \u00A92014"],
		token:"\\xFF"
		},
		{
		id:"escunicodeu",
		label:"Unicodeエスケープシーケンス",
		desc:"<code>\\uFFFF</code>と表します。",
		example:["\\u00A9","RegExr is \u00A92014"],
		token:"\\uFFFF"
		},
		{
		id:"escunicodeub",
		label:"拡張領域のUnicodeエスケープシーケンス",
		desc:"<code>\\u{FFFF}</code>と表します。",
		ext:"<p>Unicode（<code>u</code>）修飾子が必要です。</p>",
		token:"\\u{FFFF}"
		},
		{
		id:"escunicodexb",
		label:"16 進文字コード",
		desc:"<code>\\x{FF}</code>と表します。",
		token:"\\x{FF}"
		},
		{
		id:"esccontrolchar",
		label:"制御文字のエスケープ",
		desc:"<code>\\cX</code>と表します。ASCII の制御文字と一致します。X は制御文字です。 たとえば、<code>\cC</code> は CTRL-C です。",
		ext:"范围从<code>\\cA</code> (SOH, 字符码 1) 至 <code>\\cZ</code> (SUB, 字符码 26)。 <h1>例如：</h1><code>\\cI</code> 匹配（字符码 9）。",
		token:"\\cI"
		},
		{
		id:"escsequence",
		label:"エスケープシーケンス",
		tip: "'{{value}}'をマッチ。",
		desc:"～部分に含まれるメタ文字をメタ文字として解釈しない。<code>\\Q</code>と<code>\\E</code>の間にある文字をそのままマッチする。もし<code>\\E</code>を略した場合は正規表現の終わりまで続きます。",
		ext:" 例えば、<code>/\\Q(?.)\\E/</code>は<code>(?.)</code>をマッチします。",
		token:"\\Q...\\E"
		}
	]
	},

	{
	label: "グルーピングとキャプチャグループ",
	id:"groups",
	desc: "グルーピングを使用しマッチした文字列(グループ)同時に処理することができます。キャプチャグループはマッチした文字列(グループ)を参照することができます。",
	kids: [
		{
		id:"group",
		label: "キャプチャグループ",
		desc: "正規表現の部分式を表し、入力文字列の部分文字列をキャプチャします。 ",
		example:["(ha)+","hahaha haa hah!"],
		token:"(ABC)"
		},
		{
		id:"namedgroup",
		label: "名前付きキャプチャグループ",
		tip:"'{{name}}'と名付けたグループ。",
		desc:"部分式に名前または番号でアクセスできるようなグループを定義する。",
		ext:"<p>幾つか表し方があります：</p><p><code>(?'name'ABC)</code> <code>(?P&lt;name>ABC)</code> <code>(?&lt;name>ABC)</code></p>",
		token:"(?<name>ABC)"
		},
		{
		id:"namedref",
		label:"名前付き参照",
		tip:"'{{group.name}}'と名付けたグループを参照。",
		desc:"名前付きキャプチャグループを参照。",
		ext:"<p>幾つか表し方があります：</p><p><code>\\k'name'</code> <code>\\k&lt;name></code> <code>\\k{name}</code> <code>\\g{name}</code> <code>(?P=name)</code></p>",
		token:"\\k'name'"
		},
		{
		id:"numref",
		label:"番号で参照",
		tip:"#{{group.num}}番目のキャプチャグループを参照。",
		desc:"検索文字列で指定したN番目の(と)で囲まれたパターンと一致した文字列（部分文字列）を引用する。Nは1～9のいずれか。<code>\\N</code>と表す。",
		// PCRE adds relative and alternate syntaxes in ext
		example:["(\\w)a\\1","hah dad bad dab gag gab"],
		token:"\\1"
		},
		{
		id:"branchreset",
		label: "条件マッチング",
		desc:"番号が同じキャプチャグループを定義。",
		ext: "<p>例えば、<code>(?|(a)|(b))</code>では、二つのグループ（aとb）二つとも#1番目のキャプチャグループとする。",
		token:"(?|(a)|(b))"
		},
		{
		id:"noncapgroup",
		label: "非キャプチャグループ",
		desc:"マッチングは通常に行われますが、マッチした文字列が \\1 や $1 などにキャプチャされません。",
		example:["(?:ha)+","hahaha haa hah!"],
		token:"(?:ABC)"
		},
		{
		id:"atomic",
		label:"アトミック グループ",
		desc:"出来うる限りマッチし、バックトラックしない。",
		ext:"<p>例えば、<code>/(?>ab|a)b/</code>は<code>abb</code>にマッチするが、<code>ab</code>をマッチしない。一旦<code>ab</code>にマッチした時に、所有格マッチはバックトラックは<code>a</code>にマッチするのを阻止するからです。</p>",
		token:"(?>ABC)"
		},
		{
		id:"define",
		label: "定義",
		desc:"グループを定義",
		ext:"<p>例えば、<code>/A(?(DEFINE)(?'foo'Z))B\\g'foo'/</code>は<code>ABZ</code>をマッチします。前方で定義した内容はマッチされず、使われた時だけマッチングします。",
		token:"(?(DEFINE)(?'foo'ABC))"
		},
		{
		id:"numsubroutine",
		label:"数字サブルーチン呼び出し",
		tip:"#{{group.num}}番目のグループの正規表現にマッチします。",
		desc:"n番目のグループの正規表現にマッチします。"+
			" 例えば、<code>/(a|b)\\g'1'/</code>は<code>ab</code>をマッチすることができます。<code>\\g'1'</code>を使うことで、<code>a|b</code>が再び実行されたからです。",
		ext:"<p> <code>\\g&lt;1></code>や<code>\\g'1'</code>、<code>(?1)</code>とも書けます。</p>"+
			"<p><code>+</code>や<code>-</code>を使って相対位置を示すこともできます。例えば、<code>\\g<-1></code>1個前のグループにマッチ。</p>",
		token:"\\g'1'"
		},
		{
		id:"namedsubroutine",
		label:"名前付きサブルーチン呼び出し",
		tip:"'{{group.name}}'と名付けたグループの正規表現にマッチします。",
		desc:"名付けたグループの正規表現にマッチします。",
		ext:"<p><code>\\g&lt;name></code>や<code>\\g'name'</code>、<code>(?&name)</code>、<code>(?P>name)</code>とも書けます。</p>",
		token:"\\g'name'"
		}
	]
	},

	{
	label: "後読み・先読み",
	id:"lookaround",
	desc: "ある位置から続く文字列がある部分式にマッチするならばその位置にマッチする。"+
		"<p>「ある位置から続く文字列(先読み、lookahead)/ある位置の手前までの文字列(後読み、lookbehind)」と「マッチする(肯定、positive)/マッチしない(否定、negative)」の組み合わせで4つのパターンがあります。</p>",
	kids: [
		{
		id:"poslookahead",
		label: "先読みアサーション",
		desc:"正規表現に一致する文字列が始まる位置にある検索文字列と一致。",
		example:["\\d(?=px)","1pt 2px 3em 4px"],
		token:"(?=ABC)"
		},
		{
		id:"neglookahead",
		label: "否定先読みアサーション",
		desc:"正規表現に一致しない文字列が始まる位置にある検索文字列と一致。",
		example:["\\d(?!px)","1pt 2px 3em 4px"],
		token:"(?!ABC)"
		},
		{
		id:"poslookbehind",
		label: "後読みアサーション",
		desc:"正規表現に一致する文字列で終わる位置にある検索文字列と一致。",
		token:"(?<=ABC)"
		},
		{
		id:"neglookbehind",
		label: "否定後読みアサーション",
		desc:"正規表現に一致しない文字列で終わる位置にある検索文字列と一致。",
		token:"(?<!ABC)"
		},
		{
		id:"keepout",
		label:"$0 の最初をリセット。",
		desc:"マッチ結果の開始位置を \\K の位置にリセットする。つまり \\K より前の文字がマッチ結果に含まれなくなる。",
		ext:"例えば、/(?<=\t)\w+/ は タブに続く単語にマッチングしますが、タブは $& に 含まれません。 固定幅の後読みのみが動作します。",
		token:"\\K"
		}
	]
	},

	{
	label: "量指定子",
	id:"quants",
	desc: "直前の部分式を何回繰り返すかを指定します。通常、量指定子は最長一致です。できるだけ多くなるように照合が行われます。"+
		"<hr/>選択は論理和と似てます。",
	kids: [
		{
		id:"plus",
		label: "+",
		desc:"1回以上の繰り返しに一致します。",
		example:["b\\w+","b be bee beer beers"],
		token:"+"
		},
		{
		id:"star",
		label: "*",
		desc:"0回以上の繰り返しに一致します。",
		example:["b\\w*","b be bee beer beers"],
		token:"*"
		},
		{
		id:"quant",
		label:"数量詞",
		tip:"{{getQuant()}} 回の繰り返しに一致します。",
		desc:"指定した回数の繰り返しに一致します。"+
			"<code>{1,3}</code>1回から3回の繰り返しに一致します。"+
			"<code>{3}</code>ちょうど3回の繰り返しに一致します。"+
			"<code>{3,}</code>3回以上の繰り返しに一致します。",
		example:["b\\w{2,3}","b be bee beer beers"],
		token:"{1,3}"
		},
		{
		id:"opt",
		label:"任意",
		desc:"0回または1回の繰り返しに一致します。",
		example: ["colou?r", "color colour"],
		token:"?"
		},
		{
		id:"lazy",
		label: "非貪欲",
		tip:"前方にある{{getLazy()}}をできるだけ{{getLazyFew()}}マッチ。",
		desc:"前方にある正規表現を非貪欲にさせ、できるだけ少なくマッチする。",
		ext:"通常、量指定子は最長一致です。",
		example:["b\\w+?","b be bee beer beers"],
		token:"?"
		},
		{
		id:"possessive",
		label: "貪欲",
		desc:"前方にある量指定子を貪欲にさせる、ただしバックトレースはしない。できるだけ多くマッチする。",
		ext:"<p>例えば、<code>/.*a/</code>は<code>aaa</code>にマッチしますけど、<code>/.*+a/</code>はマッチしません。</p>",
		token:"+"
		},
		{
		id:"alt",
		label:"選択",
		desc:"縦棒<code>|</code>によってどちらかにマッチ。選択は論理和と似てます。",
		ext:"<p>グループや正規表現全体の中で使えます。先方にある方を優先にマッチします。</p>",
		example:["b(a|e|i)d","bad bud bod bed bid"],
		token:"|"
		}
	]
	},

	{
	label: "その他",
	id:"other",
	desc: "その他のトークン。",
	kids: [
		{
		id:"comment",
		label: "コメント",
		desc:"正規表現にコメントを挿入することができます。マッチされないです。",
		token:"(?#foo)"
		},
		{
		id:"conditional",
		label: "先読みと後読み付きの条件分岐",
		desc:"先読みの条件が満たされた場合、二つのうちひとつをマッチする。",
		ext:"<p>例えば、<code>/(?(?=a)ab|..)/</code>は<code>ab</code>と<code>zx</code>をマッチします。しかし<code>ax</code>はマッチされません。理由は、もし一つ目の文字が<code>a</code>に満たした場合、<code>ab</code>にマッチすることを試すからです。</p>"+
			"<p>どの先読みもこの条件分岐に使えます。</p>",
		token:"(?(?=A)B|C)"
		},
		{
		id:"conditionalgroup",
		label:"条件分岐",
		desc:"'{{name}}'のグループにマッチした後、二つの選択肢のうちのひとつにマッチする。",
		ext:"<p>例えば、<code>/(z)?(?(1)a|b)/</code>は<code>za</code>にマッチします。一つ目のグループは<code>z</code>にマッチできるから条件分岐はひとつめ<code>a</code>を選びます。</p>"+
			"<p>上記の正規表現は<code>b</code>もマッチします。一つ目のグループがマッチできなかったことで、二つ目の選択肢<code>b</code>をマッチし始めるからです。</p>"+
			"<p>名前付きグループや、番号つきグループ、相対位置も使えます（例：<code>-1</code>）。</p>",
		token:"(?(1)B|C)"
		},
		{
		id:"recursion",
		label: "再帰的パターン",
		desc:"全体の最初から再帰します。",
		ext:"<p>例えば、<code>/a(?R)?z/</code>は任意の数の<code>a</code>をマッチし、同じ数の<code>z</code>をすぐマッチします。<code>az</code>や<code>aaaazzzz</code>にはマッチするが、<code>azzz</code>にはマッチしません。</p>"+
			"<p></p><p><code>(?R)</code> <code>(?0)</code> <code>\\g<0></code> <code>\\g'0'</code>とも書けます。</p>",
		token:"(?R)"
		},
		{
		id:"mode",
		label:"内部オプション設定",
		tip:"{{~getDesc()}}{{~getModes()}}",
		desc:"パターン中で修飾子を変更。",
		ext:"例えば、<code>(?i)</code>は残りの部分に対して大文字小文字を無視します。"+
			"<p>複数の修飾子を指定することもできます。ハイフン<code>-</code>を前につけることにより、そのオプションを 解除することも可能です。例えば、<code>(?im-s)</code>は大文字小文字を無視し、マルチラインモードをオンにして、dotallを無効化にさせます。</p>"+
			"<p>使用可能な修飾子は：<code>i</code> - 大文字小文字無視、<code>s</code> - dotall、<code>m</code> - マルチライン、<code>x</code> - コメントモード、 <code>J</code> - 重複したnameを使用できるようにする、<code>U</code> - 非貪欲。</p>",
		token:"(?i)"
		}
	]
	},

	{
	label: "置換",
	desc: "置換用メタ文字。",
	target: "subst",
	id:"subst",
	kids: [
		{
		id:"subst_$&match",
		label: "マッチ",
		desc:"マッチした文字列を取得。",
		token:"$&"
		},
		{
		id:"subst_0match",
		label: "マッチ",
		desc:"$0 は正規表現にマッチした文字列全体を表します。",
		ext:"<p><code>$0</code> <code>\\0</code> <code>\\{0}</code>とも書けます。</p>",
		token:"$0"
		},
		{
		id:"subst_group",
		label: "グルーピングにマッチした文字列",
		tip:"マッチされてグループ #{{group.num}}を挿入。",
		desc:"マッチされてグループを挿入。例えば。<code>$3</code>は3番目の括弧にマッチした部分文字列を参照できます。",
		// NOTE: javascript profile overrides this:
		ext:"<p></p><p><code>$1</code> <code>\\1</code> <code>\\{1}</code>とも書けます。</p>",
		token:"$1"
		},
		{
		id:"subst_$before",
		label: "手前の文字列",
		desc:"マッチしたテキストの手前の文字列。",
		token:"$`"
		},
		{
		id:"subst_$after",
		label: "後ろの文字列",
		desc:"マッチしたテキストの後ろの文字列。",
		token:"$'"
		},
		{
		id:"subst_$esc",
		label: "ドル記号",
		desc:"ドル記号を挿入（$）",
		token:"$$"
		},
		{
		id: "subst_esc",
		label: "エスケープ文字列",
		token: "\\n",
		desc: "下記の書き方でエスケープ可能です： <code>\\n</code>、<code>\\r</code>、<code>\\t</code>、<code>\\\\</code>、と unicodeエスケープ文字 <code>\\uFFFF</code>。"
		}
	]
	},

	{
	id:"flags",
	label:"修飾子",
	tooltip:"クリックして編集。",
	desc:"正規表現のオプションを指定することで、これらの正規表現の既定の動作とそのいくつかの側面を変更できます。修飾子は終了デリミタ<code>/</code>の後に書きます（例えば、<code>/.+/igm</code>）。",
	target:"flags",
	kids: [
		{
		id:"caseinsensitive",
		label: "大文字・小文字無視モード",
		desc:"大文字小文字を無視する。",
		ext:" 例えば、<code>/aBc/i</code>は<code>AbC</code>をマッチします。",
		token:"i"
		},
		{
		id:"global",
		label: "グローバルマッチモード",
		tip: "対象文字列の先頭から最後までマッチングを連続的に行います。",
		desc:"正規表現が文字列の中で一致する可能性がある場所すべてについてテストを行うことを示します。"+
			"<p>グローバルマッチモード(<code>g</code>)が無効の時、サブシーケンスは同じ結果を出します。</p><hr/>"+
			"RegExrは無限個マッチを防ぐために、一つ目しかマッチしません。",
		token:"g"
		},
		{
		id:"multiline",
		label: "マルチラインモード",
		tip:"<b>^</b>、<b>$</b>、<b>\\A</b>、<b>\\z</b> が改行で区切られた各行の行頭・行末にマッチするようになります。",
		desc:"<b>^</b> と <b>$</b> は、(入力文字列の先頭および末尾ではなく) 各行の先頭および末尾と一致します。"+
			"<p>注意するべきことは<code>/^[\\s\\S]+$/m</code>みたいな場合は改行を含む文字列をマッチされます。アンカーは<b>任意</b>行頭・行末の位置を意味するからです。</p>",
		token:"m"
		},
		{
		id:"unicode",
		label: "Unicode にもマッチ",
		tip:"パターンを一連の Unicode コードポイントとして扱います。",
		desc:"この修飾子が有効の時、<code>\\x{FFFFF}</code>でUnicode文字をエスケープすることができます。"+
			"<p>エスケープにはもっと厳しくなります、認識できないエスケープシーケンス(例えば、<code>\\j</code>)に対してはエラーがでます。</p>",
		token:"u"
		},
		{
		id:"sticky",
		label: "粘着",
		desc:"文字列内の検索を、この正規表現の lastIndex プロパティで示されたインデックスからのみ開始する。しかしsticky と global の両方が定義された正規表現では、 global フラグ(<code>g</code>）は無視されます。",
		// ext:" 因为在RegExr的每次解析是独立的，该标识对已显示的内容没有任何影响。",
		token:"y"
		},
		{
		id:"dotall",
		label: "シングルモード",
		desc:"<code>.</code> を改行文字と一致するようにします。点（<code>.</code>）会匹配任何字符，包括换行符。",
		token:"s"
		},
		{
		id:"extended",
		desc:"この修飾子を設定すると、エスケープするか 文字クラスの内部を除き、 パターンの空白文字は完全に無視されます。複雑なパターンの内部に コメントを記述することが可能となります。",
		token:"x"
		},
		{
		id:"ungreedy",
		tip:"最短マッチと最長マッチを逆転",
		desc:"<code>?</code>を後ろに付けてはじめて貪欲になるようになります。",
		token:"U"
		}
	]
	}
];

// content that isn't included in the Reference menu item:
o.misc = {
	kids:[
		{
		id:"ignorews",
		label:"空白文字",
		tip:"修飾子<b>x</b>が設定してあるので、空白文字は無視されます。"
		},
		{
		id:"extnumref", // alternative syntaxes.
		proxy:"numref"
		},
		{
		id:"char",
		label:"文字",
		tip:"{{getChar()}}文字にマッチ（コード {{code}}）。{{getInsensitive()}}"
		},
		{
		id:"escchar",
		label:"escaped character",
		tip:"{{getChar()}}にマッチ（コード　{{code}}）。"
		},
		{
		id:"open",
		label: "パターンの始め",
		tip:"パターンの開始の位置を示す。"
		},
		{
		id:"close",
		label: "パターンの終わり",
		tip:"バターンの終わりの位置、修飾子の始まりの位置を示す。"
		},
		{
		id:"condition",
		label: "条件",
		tip:"条件分岐の先読みか後読み条件。詳細はレファレンスの「先読みと後読み付きの条件分岐」をご覧ください。"
		},
		{
		id:"conditionalelse",
		label:"または",
		tip:"条件分岐のelseの部分。"
		},
		{
		id:"ERROR",
		tip:"エラーは正規表現の下に赤い線を引きました。カーソルを当てて詳細を見られます。"
		},
		{
		id:"PREG_INTERNAL_ERROR",
		tip:"PCRE内部エラー"
		},
		{
		id:"PREG_BACKTRACK_LIMIT_ERROR",
		tip:"バックトラック数の上限を超えました。"
		},
		{
		id:"PREG_RECURSION_LIMIT_ERROR",
		tip:"最大再帰数を超えました。"
		},
		{
		id:"PREG_BAD_UTF8_ERROR",
		tip:"不無効のUTF-8データ。"
		},
		{
		id:"PREG_BAD_UTF8_OFFSET_ERROR",
		tip:"無効のUTF-8データ。"
		}
	]
};

o.errors = {
	groupopen:"右括弧が左括弧にマッチしません。",
	groupclose:"左括弧が右括弧にマッチしません。",
	setopen:"右角括弧が左角括弧にマッチしません。",
	rangerev:"開始値と最終値が逆です。開始値は最終値より大きいです。",
	quanttarg:"無効な量指定子",
	quantrev:"量指定子の開始値は最終値より大きいです。",
	esccharopen:"エスケープ文字がありません。",
	esccharbad:"無効なエスケープ文字かエスケープの形式が間違っています。",
	unicodebad:"無効なUnicodeカテゴリかスクリプト。",
	posixcharclassbad:"無効なPOSIX文字クラス。",
	posixcharclassnoset:"無効なPOSIX文字クラス。",
	notsupported:"RegExr は\"{{~getLabel()}}\"に対して対応してません。",
	fwdslash:"エスケープしてないスラッシュ。直接正規表現をコピーペーストすると問題が出るかもしれません。",
	esccharbad:"無効なエスケープシーケンス。",
	servercomm:"通信エラー",
	extraelse:"条件分岐に余計なelseがあります。",
	unmatchedref:"無効のグループ\"{{name}}\"を参照してます。",
	modebad:"無効の修飾子\"<code>{{errmode}}</code>\"。",
	badname:"グループ名は数字で始まることはできません。",
	dupname:"同名グループがあります。",
	branchreseterr:"<b>分岐リセット</b> マッチングは正確だけど、RegExrはまだ新グループに番号を付けられません。",
	timeout:"分析タイムアウト！", // TODO: can we couple this to the help content somehow?

	// warnings:
	jsfuture:"全てのブラウザーが\"{{~getLabel()}}\"に適用されてる訳ではありません。",
	infinite:"この正規表現はマッチできないかもしれません。しかし正規表現によって、無限にマッチされるかもしれません。", // TODO: can we couple this to the help content somehow?
};

/*
classes:
quant
set
special
ref
esc
anchor
charclass
group
comment
 */
