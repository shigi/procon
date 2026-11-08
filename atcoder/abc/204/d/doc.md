---
# ABC 204 D - Cooking

| | |
|---|---|
| URL | https://atcoder.jp/contests/abc204/tasks/abc204_d |
| No. | ABC No.204 d |
| Title | Cooking |

部分和 DP である.

$i$ 番目の料理までみたときに合計時間を $j$ 分にできるかというのを部分和 DP で求め, すべての料理を見たときに $\ceil{S/2}$ より上で一番 $S/2$ に近い合計時間を求める.
