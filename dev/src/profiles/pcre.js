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

/*
The PCRE profile is almost a straight copy of the core profile.
*/
let y=true, n=false;

let pcre = {
	id: "pcre",
	label: "PCRE",
	browser: false,
	
	flags: {
		"u": n,
		"y": n
	},
	
	badEscChars: "uUlLN".split("").reduce((o, c) => { o[c] = y; return o}, {}),

	escCharCodes: {
		"v": n // vertical tab // PCRE support \v as vertical whitespace
	},
	
	tokens: {
		"escunicodeu": n, // \uFFFF
		"escunicodeub": n, // \u{00A9}
		// octalo PCRE 8.34+
	},
	
	substTokens: {
		"subst_$esc": n, // $$
		"subst_$&match": n, // $&
		"subst_$before": n, // $`
		"subst_$after": n // $'
	},
	
	config: {
		"reftooctalalways": n, // does a single digit reference \1 become an octal? (vs remain an unmatched ref)
		"substdecomposeref": n, // will a subst reference decompose? (ex. \3 becomes "\" & "3" if < 3 groups)
		"looseesc": n // should unrecognized escape sequences match the character (ex. \u could match "u") // disabled when `u` flag is set
	},
	
	docs: {
		"escoctal":{ext:"+<p><code>\\o{FFF}</code>とも書けます。</p>"},
		"numref":{
			ext:"<p><code>\\1</code> <code>\\g1</code> <code>\\g{1}</code>とも書けます。</p>"+
				"<p><code>+</code>や<code>-</code>で始める相対位置を使用可能です。例えば、<code>\\g-1</code>は相対の位置にマッチします。</p>"
		},
		"lazy": { ext:"+<p>この行為は非貪欲フラグ（<code>U</code>）が設定してる時のみ有効。</p>" }
	}
};

export default pcre;
