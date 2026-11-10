# ABC 202 D - aab aba baa

| | |
|---|---|
| URL | https://atcoder.jp/contests/abc202/tasks/abc202_d |
| No. | ABC No.202 D |
| Title | aab aba baa |

まずは先頭が `a` か `b` かだが, 先頭が `a` である文字列の個数は $C(A-1+B, A-1)$ 個となるので, これと $K$ を比較して等しいか $K$ の方が小さければ先頭は `a` となるし, そうでなければ先頭は `b` となる.

以下これを繰り返していく. ただし, 先頭が `b` の場合は $K$ から $C(A-1+B, A-1)$ を引いて続ける.
