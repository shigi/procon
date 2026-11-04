---
# ABC 401 C - K-bonacci

| | |
|---|---|
| URL | https://atcoder.jp/contests/abc401/tasks/abc401_c |
| No. | ABC No.401 C |
| Title | K-bonacci |

まず, $A_K = K$ である.

次に $i \gt K$ である $i$ について $A_i$ は,

$$
A_i = A_{i-1} - A_{i-1-K} + A_{i-1} = 2A_{i-1} - A_{i-1-K}
$$

となる. これを順に計算していく.

なお, 本番では overflow 予防のため long を使った.
