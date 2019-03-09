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

o.label = "正则表达式 参考手册";
o.id = "reference";
o.search = true,
    o.desc = `用于创建正则表达式的元字符列表。
	<p>在列表中 双击 添加到你的正则表达式中。</p>
	<p>点击旁边的箭头来载入示例。</p>`;

o.kids = [
	{
	label: "字符类",
	id: "charclasses",
	desc: "字符类匹配特定集合中的字符。 有许多预定义的字符类，您也可以定义自己的字符集。",
	kids: [

		{
		id:"set",
		label: "字符集",
		desc:"匹配集合中的任何字符。",
		example:["[aeiou]","glib jocks vex dwarves!"],
		token:"[ABC]"
		},
		{
		id:"setnot",
		label: "非集",
		desc:"匹配不在集合中的任何字符。",
		example:["[^aeiou]","glib jocks vex dwarves!"],
		token:"[^ABC]"
		},
		{
		id:"range",
		tip:"匹配ASCII码从{{getChar(prev)}}到{{getChar(next)}}的字符 (char code {{prev.code}} to {{next.code}}). {{getInsensitive()}}",
		example:["[g-s]","abcdefghijklmnopqrstuvwxyz"],
		desc: "匹配ASCII码在指定范围区间的字符。",
		token:"[A-Z]"
		},
		{
		id:"posixcharclass",
		tip:"匹配在'{{value}}' POSIX类中的任何字符.",
		label:"POSIX类",
		desc:"匹配指定POSIX类中的任何字符。必须存在于字符集中。例如, <code>[[:alnum:]$]</code>将匹配字母数字字符和<code>$</code>.",
		ext:"<p>POSIX类列表，请见<a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE规范</a>.</p>",
		token:"[:alnum:]"
		},
		{
		id:"dot",
		tip:"匹配任何字符{{getDotAll()}}.",
		desc:"匹配除换行符之外的任何字符。",
		ext:" Equivalent to <code>[^\\n\\r]</code>.",
		example:[".", "glib jocks vex dwarves!"],
		token:"."
		},
		{
		label:"完全通配",
		desc:"可以用来匹配所有字符，包括换行符，但是除了dotall标符(<code>s</code>)."+
			"<p>另外一种形式是<code>[^]</code>, 但是它不被所有浏览器支持</p>",
		example:["[\\s\\S]", "glib jocks vex dwarves!"],
		token:"[\\s\\S]"
		},
		{
		id:"unicodegrapheme",
		label:"unicode grapheme",
		desc:"Matches any single unicode grapheme (ie. character).",
		ext:" This includes line breaks (regardless of the dotall mode) and graphemes encoded as multiple code points.",
		token:"\\X"
		},
		{
		id:"word",
		desc:"匹配字母、数字、下划线。",
		ext:" Only matches low-ascii characters (no accented or non-roman characters). Equivalent to <code>[A-Za-z0-9_]</code>",
		example:["\\w","bonjour, mon fr\u00E8re"],
		token:"\\w"
		},
		{
		id:"notword",
		label: "非词匹配",
		desc:"匹配非字母、数字、下划线。",
		ext:" Equivalent to <code>[^A-Za-z0-9_]</code>",
		example:["\\W","bonjour, mon fr\u00E8re"],
		token:"\\W"
		},
		{
		id:"digit",
		desc:"匹配任意数字 (0-9).",
		ext:" Equivalent to <code>[0-9]</code>.",
		example:["\\d","+1-(444)-555-1234"],
		token:"\\d"
		},
		{
		id:"notdigit",
		label: "非数字",
		desc:"匹配任意非数字字符 (0-9).",
		ext:" Equivalent to <code>[^0-9]</code>.",
		example:["\\D","+1-(444)-555-1234"],
		token:"\\D"
		},
		{
		id:"whitespace",
		desc:"匹配任何空白字符。(空格, 制表符, 换行符)",
		example:["\\s", "glib jocks vex dwarves!"],
		token:"\\s"
		},
		{
		id:"notwhitespace",
		label: "非空白字符",
		desc:"匹配任何非空白字符。(空格, 制表符, 换行符)",
		example:["\\S", "glib jocks vex dwarves!"],
		token:"\\S"
		},
		{
		id:"hwhitespace",
		label:"horizontal whitespace",
		desc:"Matches any horizontal whitespace character (spaces, tabs).",
		token:"\\h"
		},
		{
		id:"nothwhitespace",
		label: "not horizontal whitespace",
		desc:"Matches any character that is not a horizontal whitespace character (spaces, tabs).",
		token:"\\H"
		},
		{
		id:"vwhitespace",
		label:"vertical whitespace",
		desc:"Matches any vertical whitespace character (line breaks).",
		token:"\\v"
		},
		{
		id:"notvwhitespace",
		label: "not vertical whitespace",
		desc:"Matches any character that is not a vertical whitespace character (line breaks).",
		token:"\\V"
		},
		{
		id:"linebreak",
		label:"换行符",
		desc:"匹配任意换行符, 包括CRLF对, 和单个CR / LF。",
		token:"\\R"
		},
		{
		id:"notlinebreak",
		label:"非换行符",
		desc:"匹配任意非换行符。",
		ext:" Similar to dot (<code>.</code>) but is unaffected by the dotall flag (<code>s</code>).",
		token:"\\N"
		},
		{
		id:"unicodecat",
		tip:"Matches any character in the '{{getUniCat()}}' unicode category.",
		label:"unicode category",
		desc:"Matches a character in the specified unicode category. For example, <code>\\p{Ll}</code> will match any lowercase letter.",
		ext:"<p>For a list of categories, see the <a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE spec</a>.</p>"+
			"<p>There are multiple syntaxes for this feature:</p><p><code>\\p{L}</code> <code>\\pL</code></p>",
		token:"\\p{L}"
		},
		{
		id:"notunicodecat",
		tip:"Matches any character that is not in the '{{getUniCat()}}' unicode category.",
		label:"not unicode category",
		desc:"Matches any character that is not in the specified unicode category.",
		ext:"<p>For a list of categories, see the <a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE spec</a>.</p>"+
			"<p>There are multiple syntaxes for this feature:</p><p><code>\\P{L}</code> <code>\\p{^L}</code> <code>\\PL</code></p>",
		token:"\\P{L}"
		},
		{
		id:"unicodescript",
		tip:"Matches any character in the '{{value}}' unicode script.",
		label:"unicode script",
		desc:"Matches any character in the specified unicode script. For example, <code>\\p{Arabic}</code> will match characters in the Arabic script.",
		ext:"<p>For a list of scripts, see the <a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE spec</a>.</p>",
		token:"\\p{Han}"
		},
		{
		id:"notunicodescript",
		tip:"Matches any character that is not in the '{{value}}' unicode script.",
		label:"not unicode script",
		desc:"Matches any character that is not in the specified unicode script.",
		ext:"<p>For a list of scripts, see the <a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE spec</a>.</p>"+
			"<p>There are multiple syntaxes for this feature:</p><p><code>\\P{Han}</code> <code>\\p{^Han}</code>",
		token:"\\P{Han}"
		}
	]
	},

	{
	label:"Anchors",
	id:"anchors",
	desc:"Anchors are unique in that they match a position within a string, not a character.",
	kids:[
		{
		id:"bos",
		label:"字符串起始",
		desc:"匹配字符串的开头",
		ext:" Unlike <code>^</code>, this is unaffected by the multiline flag (<code>m</code>). This matches a position, not a character.",
		token:"\\A"
		},
		{
		id:"eos",
		label:"字符串结尾",
		desc:"匹配字符串的结尾",
		ext:" Unlike <code>$</code>, this is unaffected by the multiline flag (<code>m</code>). This matches a position, not a character.",
		token:"\\Z"
		},
		{
		id:"abseos",
		label:"strict end of string",
		desc:"Matches the end of the string. Unlike <code>$</code> or <code>\\Z</code>, it does not allow for a trailing newline.",
		ext:" This is unaffected by the multiline flag (<code>m</code>). This matches a position, not a character.",
		token:"\\z"
		},
		{
		id:"bof",
		label:"开头",
		desc:"匹配字符串开头，或者当使用多行标志(<code>m</code>)时，匹配一行的开头。",
		ext:" This matches a position, not a character.",
		example:["^\\w+","she sells seashells"],
		token:"^"
		},
		{
		id:"eof",
		label:"结尾",
		desc:"匹配字符串结尾，或者当使用多行标志(<code>m</code>)时，匹配一行的结尾。",
		ext:" This matches a position, not a character.",
		example:["\\w+$","she sells seashells"],
		token:"$"
		},
		{
		id:"wordboundary",
		label:"词边界",
		desc:"匹配一个单词边界，也就是指单词和空格间的位置。",
		ext:" See the word character class (<code>\w</code>) for more info.",
		example:["s\\b","she sells seashells"],
		token:"\\b"
		},
		{
		id:"notwordboundary",
		label: "非词边界",
		desc:"匹配非单词边界。",
		ext:" This matches a position, not a character.",
		example:["s\\B","she sells seashells"],
		token:"\\B"
		},
		{
		id:"prevmatchend",
		label: "前匹配项结尾",
		desc:"匹配前一个匹配的结束位置。",
		ext:" This matches a position, not a character.",
		token:"\\G"
		}
	]
	},
	
	{
	label: "转义字符",
	id:"escchars",
	desc: "Escape sequences can be used to insert reserved, special, and unicode characters. 所有转义字符以<code>\\</code>为起始.",
	kids: [
		{
		id:"reservedchar",
		label:"reserved characters",
		desc:"The following character have special meaning, and should be preceded by a <code>\\</code> (backslash) to represent a literal character:"+
			"<p><code>{{getEscChars()}}</code></p>"+
			"<p>Within a character set, only <code>\\</code>, <code>-</code>, and <code>]</code> need to be escaped.</p>",
		example:["\\+","1 + 1 = 2"],
		token:"\\+",
		show:true
		},
		{
		id:"escoctal",
		label:"octal escape",
		desc:"Octal escaped character in the form <code>\\000</code>.",
		ext:" Value must be less than 255 (<code>\\377</code>).", // PCRE profile adds to ext.
		example:["\\251","RegExr is \u00A92014"],
		token:"\\000"
		},
		{
		id:"eschexadecimal",
		label:"hexadecimal escape",
		desc:"Hexadecimal escaped character in the form <code>\\xFF</code>.",
		example:["\\xA9","RegExr is \u00A92014"],
		token:"\\xFF"
		},
		{
		id:"escunicodeu",
		label:"unicode escape",
		desc:"Unicode escaped character in the form <code>\\uFFFF</code>",
		example:["\\u00A9","RegExr is \u00A92014"],
		token:"\\uFFFF"
		},
		{
		id:"escunicodeub",
		label:"extended unicode escape",
		desc:"Unicode escaped character in the form <code>\\u{FFFF}</code>.",
		ext:" Supports a full range of unicode point escapes with any number of hex digits. <p>Requires the unicode flag (<code>u</code>).</p>",
		token:"\\u{FFFF}"
		},
		{
		id:"escunicodexb",
		label:"unicode escape",
		desc:"Unicode escaped character in the form <code>\\x{FF}</code>.",
		token:"\\x{FF}"
		},
		{
		id:"esccontrolchar",
		label:"control character escape",
		desc:"Escaped control character in the form <code>\\cZ</code>.",
		ext:" This can range from <code>\\cA</code> (SOH, char code 1) to <code>\\cZ</code> (SUB, char code 26). <h1>Example:</h1><code>\\cI</code> matches TAB (char code 9).",
		token:"\\cI"
		},
		{
		id:"escsequence",
		label:"escape sequence",
		tip: "Matches the literal string '{{value}}'.",
		desc:"All characters between the <code>\\Q</code> and the <code>\\E</code> are interpreted as a literal string. If <code>\\E</code> is omitted, it continues to the end of the expression.",
		ext:" For example, the expression <code>/\\Q(?.)\\E/</code> will match the string <code>(?.)</code>.",
		token:"\\Q...\\E"
		}
	]
	},
	
	{
	label: "Groups & References",
	id:"groups",
	desc: "Groups allow you to combine a sequence of tokens to operate on them together. Capture groups can be referenced by a backreference and accessed separately in the results.",
	kids: [
		{
		id:"group",
		label: "capturing group",
		desc: "Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.",
		example:["(ha)+","hahaha haa hah!"],
		token:"(ABC)"
		},
		{
		id:"namedgroup",
		label: "named capturing group",
		tip:"Creates a capturing group named '{{name}}'.",
		desc:"Creates a capturing group that can be referenced via the specified name.",
		ext:"<p>There are multiple syntaxes for this feature:</p><p><code>(?'name'ABC)</code> <code>(?P&lt;name>ABC)</code> <code>(?&lt;name>ABC)</code></p>",
		token:"(?'name'ABC)"
		},
		{
		id:"namedref",
		label:"named reference",
		tip:"Matches the results of the capture group named '{{group.name}}'.",
		desc:"Matches the results of a named capture group.",
		ext:"<p>There are multiple syntaxes for this feature:</p><p><code>\\k'name'</code> <code>\\k&lt;name></code> <code>\\k{name}</code> <code>\\g{name}</code> <code>(?P=name)</code></p>",
		token:"\\k'name'"
		},
		{
		id:"numref",
		label:"numeric reference",
		tip:"Matches the results of capture group #{{group.num}}.",
		desc:"Matches the results of a capture group. For example <code>\\1</code> matches the results of the first capture group & <code>\\3</code> matches the third.",
		// PCRE adds relative and alternate syntaxes in ext
		example:["(\\w)a\\1","hah dad bad dab gag gab"],
		token:"\\1"
		},
		{
		id:"branchreset",
		label: "branch reset group",
		desc:"Define alternative groups that share the same group numbers.",
		ext: "<p>For example, in <code>(?|(a)|(b))</code> both groups (a and b) would be counted as group #1.",
		token:"(?|(a)|(b))"
		},
		{
		id:"noncapgroup",
		label: "non-capturing group",
		desc:"Groups multiple tokens together without creating a capture group.",
		example:["(?:ha)+","hahaha haa hah!"],
		token:"(?:ABC)"
		},
		{
		id:"atomic",
		label:"atomic group",
		desc:"Non-capturing group that discards backtracking positions once matched.",
		ext:"<p>For example, <code>/(?>ab|a)b/</code> will match <code>abb</code> but not <code>ab</code> because once the <code>ab</code> option has matched, the atomic group prevents backtracking to retry with the <code>a</code> option.</p>",
		token:"(?>ABC)"
		},
		{
		id:"define",
		desc:"Used to define named groups for use as subroutines without including them in the match.",
		ext:"<p>For example, <code>/A(?(DEFINE)(?'foo'Z))B\\g'foo'/</code> will match <code>ABZ</code>, because the define group is ignored in the match except to define the <code>foo</code> subroutine that is referenced later with <code>\\g'foo'</code>.</p>",
		token:"(?(DEFINE)(?'foo'ABC))"
		},
		{
		id:"numsubroutine",
		label:"numeric subroutine",
		tip:"Matches the expression in capture group #{{group.num}}.",
		desc:"Matches the expression in a capture group. Compare this to a reference, that matches the result."+
			" For example <code>/(a|b)\\g'1'/</code> can match <code>ab</code>, because the expression <code>a|b</code> is evaluated again.",
		ext:"<p>There are multiple syntaxes for this feature: <code>\\g&lt;1></code> <code>\\g'1'</code> <code>(?1)</code>.</p>"+
			"<p>Relative values preceded by <code>+</code> or <code>-</code> are also supported. For example <code>\\g<-1></code> would match the group preceding the reference.</p>",
		token:"\\g'1'"
		},
		{
		id:"namedsubroutine",
		label:"named subroutine",
		tip:"Matches the expression in the capture group named '{{group.name}}'.",
		desc:"Matches the expression in a capture group. Compare this to a reference, that matches the result.",
		ext:"<p>There are multiple syntaxes for this feature: <code>\\g&lt;name></code> <code>\\g'name'</code> <code>(?&name)</code> <code>(?P>name)</code>.</p>",
		token:"\\g'name'"
		}
	]
	},
	
	{
	label: "Lookaround",
	id:"lookaround",
	desc: "Lookaround lets you match a group before (lookbehind) or after (lookahead) your main pattern without including it in the result."+
		"<p>Negative lookarounds specify a group that can NOT match before or after the pattern.</p>",
	kids: [
		{
		id:"poslookahead",
		label: "positive lookahead",
		desc:"Matches a group after the main expression without including it in the result.",
		example:["\\d(?=px)","1pt 2px 3em 4px"],
		token:"(?=ABC)"
		},
		{
		id:"neglookahead",
		label: "negative lookahead",
		desc:"Specifies a group that can not match after the main expression (if it matches, the result is discarded).",
		example:["\\d(?!px)","1pt 2px 3em 4px"],
		token:"(?!ABC)"
		},
		{
		id:"poslookbehind",
		label: "positive lookbehind",
		desc:"Matches a group before the main expression without including it in the result.",
		token:"(?<=ABC)"
		},
		{
		id:"neglookbehind",
		label: "negative lookbehind",
		desc:"Specifies a group that can not match before the main expression (if it matches, the result is discarded).",
		token:"(?<!ABC)"
		},
		{
		id:"keepout",
		label:"keep out",
		desc:"Keep text matched so far out of the returned match, essentially discarding the match up to this point.",
		ext:"For example <code>/o\\Kbar/</code> will match <code>bar</code> within the string <code>foobar</code>",
		token:"\\K"
		}
	]
	},
	
	{
	label: "量词 & 多选",
	id:"quants",
	desc: "量词指定了前面的标记需要出现的次数。默认情况下，量词是贪婪的，会尽可能多地匹配字符。"+
		"<hr/>多选表现起来像 逻辑与，匹配这个或那个序列。",
	kids: [
		{
		id:"plus",
		desc:"匹配1个或更多前面的标记。",
		example:["b\\w+","b be bee beer beers"],
		token:"+"
		},
		{
		id:"star",
		desc:"匹配0个或更多前面的标记。",
		example:["b\\w*","b be bee beer beers"],
		token:"*"
		},
		{
		id:"quant",
		label:"quantifier",
		tip:"匹配 {{getQuant()}} 个前面的标记。",
		desc:"匹配指定数量个前面的标记。"+
			"<code>{1,3}</code> 会匹配1个到3个。"+
			"<code>{3}</code> 会匹配正好3个。"+
			"<code>{3,}</code> 会匹配3个或更多。",
		example:["b\\w{2,3}","b be bee beer beers"],
		token:"{1,3}"
		},
		{
		id:"opt",
		label:"optional",
		desc:"匹配0个或1个前面的标记，用于标为可选项。",
		example: ["colou?r", "color colour"],
		token:"?"
		},
		{
		id:"lazy",
		tip:"令前面的标记 {{getLazy()}}, 让其尽可能 {{getLazyFew()}} 地匹配字符。",
		desc:"令前面的标记变慵懒，让其尽可能少地匹配字符。",
		ext:"默认情况下，量词是贪婪的会尽可能多地匹配字符。",
		example:["b\\w+?","b be bee beer beers"],
		token:"?"
		},
		{
		id:"possessive",
		desc:"Makes the preceding quantifier possessive. It will match as many characters as possible, and will not release them to match subsequent tokens.",
		ext:"<p>例如 <code>/.*a/</code> 会匹配到 <code>aaa</code>, 但 <code>/.*+a/</code> 则不会。because the repeating dot would match and not release the last character to match <code>a</code>.</p>",
		token:"+"
		},
		{
		id:"alt",
		label:"alternation",
		desc:"多选表现起来像 逻辑与。匹配<code>|</code>前面的或后面的表达式。",
		ext:"<p>它可以用在分组里面，或在整个表达式中使用。会按顺序尝试匹配。</p>",
		example:["b(a|e|i)d","bad bud bod bed bid"],
		token:"|"
		}
	]
	},
	
	{
	label: "特殊",
	id:"other",
	desc: "其他未分类标记（tokens）。",
	kids: [
		{
		id:"comment",
		desc:"允许你在正则表达式中插入注释，匹配时候会被忽略。",
		token:"(?#foo)"
		},
		{
		id:"conditional",
		desc:"当满足前瞻条件后，从两个选项中选择一个匹配。Conditionally matches one of two options based on whether a lookaround is matched.",
		ext:"<p>例如, <code>/(?(?=a)ab|..)/</code> 会匹配 <code>ab</code> 和 <code>zx</code> 但不会匹配到 <code>ax</code>, 因为如果第一个字符满足条件 <code>a</code> 那么它就尝试匹配表达式 <code>ab</code>。</p>"+
			"<p>任何前瞻都可以用在这个条件上。前瞻会在条件开始的位置启动子序列的匹配过程。后顾则会在结束的位置启动。A lookahead will start the subsequent match at the start of the condition, a lookbehind will start it after.</p>",
		token:"(?(?=A)B|C)"
		},
		{
		id:"conditionalgroup",
		label:"group conditional",
		desc:"当匹配到'{{name}}'分组后，从两个选项中选择一个匹配。",
		ext:"<p>例如，<code>/(z)?(?(1)a|b)/</code> 会匹配到 <code>za</code>。因为第一个分组能成功匹配到 <code>z</code>， 这会让条件分支去选择第一个选项 <code>a</code>。</p>"+
			"<p>相同的表达式会同时匹配到 <code>b</code> on its own。因为第1个分组没有匹配到，所以他会尝试匹配第二个选项 <code>b</code>。</p>"+
			"<p>你可以用分组名称引用分组、数字或相对位置 (ex. <code>-1</code>)。</p>",
		token:"(?(1)B|C)"
		},
		{
		id:"recursion",
		desc:"在相同位置尝试匹配整个表达式。",
		ext:"<p>例如， <code>/a(?R)?z/</code> 会匹配到任意数量的 <code>a</code> 紧跟相同数量的 <code>z</code>: 匹配 <code>az</code> 单词或 <code>aaaazzzz</code>, 但不会匹配<code>azzz</code>。</p>"+
			"<p>可以用不同语法使用这个特性：</p><p><code>(?R)</code> <code>(?0)</code> <code>\\g<0></code> <code>\\g'0'</code></p>",
		token:"(?R)"
		},
		{
		id:"mode",
		label:"mode modifier",
		tip:"{{~getDesc()}}{{~getModes()}}",
		desc:"对正则的余下部分启用或禁用模式。",
		ext:"模式对应于正则表达式的标识。 例如 <code>(?i)</code> 会对余下的正则启用大小写不敏感（即禁用大小写敏感）。"+
			"<p>可以定义多个修饰符，修饰符后面跟<code>-</code>会禁用该修饰符。例如，<code>(?im-s)</code> 会启用 大小写不敏感 和 多行模式，禁用dotall。</p>"+
			"<p>支持的修饰符有： <code>i</code> - 大小写不敏感、<code>s</code> - dotall、<code>m</code> - 多行、<code>x</code> - 无间隔、 <code>J</code> - 允许重复分组子正则、<code>U</code> - 非贪婪。</p>",
		token:"(?i)"
		}
	]
	},

	{
	label: "替换",
	desc: "这些标记（tokens）用来替换字符串，插入到匹配结果的其他部分。",
	target: "subst",
	id:"subst",
	kids: [
		{
		id:"subst_$&match",
		label: "match",
		desc:"插入匹配到的文本。",
		token:"$&"
		},
		{
		id:"subst_0match",
		label: "match",
		desc:"插入匹配到的文本。",
		ext:"<p>可以用不同语法使用这个特性：</p><p><code>$0</code> <code>\\0</code> <code>\\{0}</code></p>",
		token:"$0"
		},
		{
		id:"subst_group",
		label: "capture group",
		tip:"插入匹配到的分组 #{{group.num}}。",
		desc:"插入匹配到的指定分组。例如，<code>$3</code> 会插入匹配到第3个分组。",
		// NOTE: javascript profile overrides this:
		ext:"<p>可以用不同的语法使用这个特性：</p><p><code>$1</code> <code>\\1</code> <code>\\{1}</code></p>",
		token:"$1"
		},
		{
		id:"subst_$before",
		label: "before match",
		desc:"插入匹配到的文本之前的字符串。",
		token:"$`"
		},
		{
		id:"subst_$after",
		label: "after match",
		desc:"插入匹配到的文本之后的字符串。",
		token:"$'"
		},
		{
		id:"subst_$esc",
		label: "escaped $",
		desc:"插入美元符号（$）",
		token:"$$"
		},
		{
		id: "subst_esc",
		label: "escaped characters",
		token: "\\n",
		desc: "方便起见，RegExr支持替换以下转义字符： <code>\\n</code>, <code>\\r</code>, <code>\\t</code>, <code>\\\\</code>, 以及 unicode转义字符 <code>\\uFFFF</code>。这会因你的部署环境而异。"
		}
	]
	},
	
	{
	id:"flags",
	label:"Flags",
	tooltip:"标识可以改变表达式的解析方式。点击以编辑。",
	desc:"标识可以改变表达式的解析方式。标识会在表达式末尾斜杠后(例如. <code>/.+/igm</code> )。",
	target:"flags",
	kids: [
		{
		id:"caseinsensitive",
		label: "ignore case",
		desc:"让整个表达式对大小写不敏感。",
		ext:" 例如，<code>/aBc/i</code> 会匹配到 <code>AbC</code>。",
		token:"i"
		},
		{
		id:"global",
		label: "global search",
		tip: "保留上次匹配结果的位置，允许递归搜索。",
		desc:"保留上次匹配结果的位置，允许子序列从上次匹配的结果继续搜索。"+
			"<p>如果没有全局(<code>g</code>)标识, 后面的查询会返回相同的结果。</p><hr/>"+
			"在禁用全局标识的时候，会RegExr会为了避免无穷个匹配结果而只返回第一个结果。",
		token:"g"
		},
		{
		id:"multiline",
		tip:"使用起始/结尾锚（<b>^</b>/<b>$</b>）会匹配到行首和行尾。",
		desc:"当启用 multiline标识时，使用起始和结尾锚（<b>^</b> 和 <b>$</b>）会匹配到行首和行尾, 而不是整个字符串的头部和尾部。"+
			"<p>需要注意的是类似<code>/^[\\s\\S]+$/m</code>的正则可能会匹配到含有换行符的字符串。因为锚会匹配到<b>任意</b>行的起始/结束位置。</p>",
		token:"m"
		},
		{
		id:"unicode",
		tip:"启用<code>\\x{FFFFF}</code>Unicode转义。",
		desc:"当启用Unicode标识时，你可以按<code>\\x{FFFFF}</code>格式转义unicode字符。"+
			"<p>这会使转义更严格，会对不能识别的转义字符 (例如 <code>\\j</code>) 报错。</p>",
		token:"u"
		},
		{
		id:"sticky",
		desc:"只会从lastIndex位置开始匹配，且如果设置了全局标识(<code>g</code>）的话会被忽略。",
		ext:" 因为在RegExr的每次解析是独立的，该标识对已显示的内容没有任何影响。",
		token:"y"
		},
		{
		id:"dotall",
		desc:"点（<code>.</code>）会匹配任何字符，包括换行符。",
		token:"s"
		},
		{
		id:"extended",
		desc:"除了在字符集中定义的空白字符外，Literal 的空白字符会被忽略。",
		token:"x"
		},
		{
		id:"ungreedy",
		tip:"默认非贪婪（慵懒）匹配。",
		desc:"默认非贪婪（慵懒）匹配。会贪婪匹配带有<code>?</code>的量词。",
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
		label:"ignored whitespace",
		tip:"因已启用<b>x</b>扩展 模式，空白字符已被忽略。"
		},
		{
		id:"extnumref", // alternative syntaxes.
		proxy:"numref"
		},
		{
		id:"char",
		label:"character",
		tip:"匹配 {{getChar()}} 字母 (字符编码 {{code}})。 {{getInsensitive()}}"
		},
		{
		id:"escchar",
		label:"escaped character",
		tip:"匹配 {{getChar()}} (字符编码 {{code}})."
		},
		{
		id:"open",
		tip:"标记正则表达式起始位置。"
		},
		{
		id:"close",
		tip:"标记正则表达式的结束位置和标识的起始位置。"
		},
		{
		id:"condition",
		tip:"The lookaround to match in resolving the enclosing conditional statement. 详情见参考手册中”条件“部分。"
		},
		{
		id:"conditionalelse",
		label:"conditional else",
		tip:"Delimits the 'else' portion of the conditional."
		},
		{
		id:"ERROR",
		tip:"错误已在正则表达式中用红线标出。滚动滚轮以查看详情。"
		},
		{
		id:"PREG_INTERNAL_ERROR",
		tip:"PCRE内部错误"
		},
		{
		id:"PREG_BACKTRACK_LIMIT_ERROR",
		tip:"反向引用个数超出限制。"
		},
		{
		id:"PREG_RECURSION_LIMIT_ERROR",
		tip:"递归层数超出限制。"
		},
		{
		id:"PREG_BAD_UTF8_ERROR",
		tip:"不合法的UTF-8数据。"
		},
		{
		id:"PREG_BAD_UTF8_OFFSET_ERROR",
		tip:"不合法的UTF-8数据。"
		}
	]
};

o.errors = {
	groupopen:"缺少右括号。",
	groupclose:"缺少左括号。",
	setopen:"缺少右中括号。",
	rangerev:"起始值和结束值相反。起始值大于结束值。",
	quanttarg:"无效的量词。",
	quantrev:"量词的起始值大于结束值。",
	esccharopen:"缺少待转义字符。",
	esccharbad:"不存在的转义字符或转义格式错误。",
	unicodebad:"未能识别的UNICODE类别或脚本。",
	posixcharclassbad:"未能识别的POSIX字符类。",
	posixcharclassnoset:"POSIX字符类必须在字符集中。",
	notsupported:"不支持\"{{~getLabel()}}\" 特性。",
	fwdslash:"未转义的斜杠。直接把本正则表达式粘贴到代码可能会导致问题。",
	esccharbad:"无效的转义序列。",
	servercomm:"通信错误。",
	extraelse:"条件组中含有额外的else分支。",
	unmatchedref:"引用了一个不存在的分组 \"{{name}}\"。",
	modebad:"未能识别的标识 \"<code>{{errmode}}</code>\".",
	badname:"分组名称不能以数字开头。",
	dupname:"分组名称不能重复。",
	branchreseterr:"<b>分支重置。</b> 结果是正确的，但是RegExr解析器还不能正确地给新分组编号。敬请期待！",
	timeout:"解析超时！", // TODO: can we couple this to the help content somehow?

	// warnings:
	jsfuture:"\"{{~getLabel()}}\" 功能可能不支持所有浏览器。",
	infinite:"该正则可能会返回空结果，且在个别测试用例上可能会返回无穷个结果。", // TODO: can we couple this to the help content somehow?
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
