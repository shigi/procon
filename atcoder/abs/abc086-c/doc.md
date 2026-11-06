---
# ABC086C - Traveling

| | |
|---|---|
| URL | https://atcoder.jp/contests/abs/tasks/arc089_a |
| No. | ABC086C |
| Title | Traveling |

見るのは目標座標の偶奇と距離である.

目標座標を $(x, y)$ とすると, まずは $x+y$ の偶奇と経過時間 $t$ の偶奇は一致しなければ辿り着けない.

あとは現在の座標を $(x^\prime, y^\prime)$, 時刻を $t^\prime$ とすると, $\abs{x-x^\prime} + \abs{y-y^\prime} \leq t - t^\prime$ であることも必要である.
