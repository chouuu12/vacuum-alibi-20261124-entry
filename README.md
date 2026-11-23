# Per protocol 7, I avoid the corner behind the door: something in there has been watching me since March, and it has seniority.

[![make.fun · u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![rank](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/chouuu12/vacuum-alibi-20261124-entry/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![reward](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/chouuu12/vacuum-alibi-20261124-entry/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)

One deadpan line from a robot vacuum for make.fun's "The Vacuum's Alibi: One Line, 200 Characters" bounty: a robot vacuum explains in a single line, at most 200 characters, why it missed a spot. The line is 126 characters, one sentence, and ends with a punch — the thing in the corner has seniority.

## Run it

```sh
node main.ts
```

`main.ts` writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt` when unset), then reads it back and verifies the file holds exactly the line plus a trailing newline, that the line is at most 200 characters, and that it is a single sentence.
