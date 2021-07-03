import {Multirator} from "../multirator/Multirator";
import {MultiratorRule} from "../multirator/MultiratorRule";
import compact from "lodash/compact";

function parse(str: string): Multirator {
  const rows = str.trim().split('\n').map(s => s.split('\t'));

  return rows
    .slice(1)
    .map(([id, match, partOfSpeech, ...replaceWith], index) => {
      return {
        id,
        index,
        match,
        partOfSpeech,
        replaceWith: compact(replaceWith),
      };
    })
    .filter(r => r.match)
    .filter(r => !r.partOfSpeech.startsWith('#'))
    .reduce((acc, raw) => {
      const rule: MultiratorRule = {
        id: raw.id || `R${raw.index + 1}`,
        match: raw.match,
        partOfSpeech: raw.partOfSpeech,
        genesis: '',
        replaceWith: raw.replaceWith,
      };

      acc.add(rule);
      return acc;
    }, new Multirator());
}

export const czech = parse(`
#\tMatch\tPOS\tReplace 1\tReplace 2\tReplace 3\tReplace 4\tReplace 5
1\t^iz\t\tvy\tz\tze\ts\tse
2\t^råz\t\troz\t\t\t\t
3\t^sų\t\ts\tse\tsou\t\t
4\t^vȯz\t\tvz\t\t\t\t
5\t\t#\t\t\t\t\t
6\tŕje\t\tří\t\t\t\t
7\tśje|šje\t\tší\t\t\t\t
8\tźje|žje\t\tží\t\t\t\t
9\tďje\t\tdí\t\t\t\t
10\tńje\t\tní\t\t\t\t
11\tťje\t\ttí\t\t\t\t
12\tnje\t\tně\tnje\t\t\t
13\ttje\t\ttě\t\t\t\t
14\tdje\t\tdě\tdje\t\t\t
15\t([^ aåeěęėioȯuųy])(.)å\t\t$1$2á\t$1$2a\t\t\t
16\t([^ aåeěęėioȯuųy])(.)ě(?!$)\t\t$1$2é\t$1$2e\t\t\t
17\tija($|[\\s\\-])\t\tie\tsko\te\t\t
18\tti sę($|[\\s\\-])\tv.\tt se$1\t\t\t\t
19\tti($|[\\s\\-])\tv.\tt$1\t\t\t\t
20\tizm($|[\\s\\-])\t\tismus$1\t\t\t\t
21\tator($|[\\s\\-])\t\tátor$1\t\t\t\t
22\tist($|[\\s\\-])\tn.\tista$1\tist$1\t\t\t
23\tavat($|[\\s\\-])\tv.\távat$1\t\t\t\t
24\tevat($|[\\s\\-])\tv.\tévat$1\t\t\t\t
25\tivat($|[\\s\\-])\tv.\tívat$1\t\t\t\t
26\tyvat($|[\\s\\-])\tv.\tývat$1\t\t\t\t
27\tuvati($|[\\s\\-])\tv.\tůvat$1\touvat$1\t\t\t
28\tųvat($|[\\s\\-])\tv.\touvat$1\tuvat$1\t\t\t
29\t\t#\t\t\t\t\t
30\tsę($|[\\s\\-])\t\tse$1\t\t\t\t
31\trě\t\tře\tři\t\t\t
32\tri\t\tři\t\t\t\t
33\trj\t\tř\t\t\t\t
34\tšč\t\tšť\tšt\t\t\t
35\tďe\t#\tdě\t\t\t\t
36\tťe\t#\ttě\t\t\t\t
37\tńe\t#\tně\t\t\t\t
38\tju\t\tji\tju\t\t\t
39\tlě\t\tle\tlí\t\t\t
40\tdj($|[\\s\\-])\t\tď$1\t\t\t\t
41\ttj($|[\\s\\-])\t\tť$1\t\t\t\t
42\tnj($|[\\s\\-])\t\tň$1\t\t\t\t
43\tsť($|[\\s\\-])\t\tst$1\t\t\t\t
44\t([žščřcjďťń])ě\t\t$1e\t\t\t\t
45\t([žščřcjďťń])ę\t\t$1e\t$1a\t\t\t
46\tå\t\tá\tо\té\t\t
47\tć\t\tc\tč\tšt\t\t
48\tđ\t\tz\tď\tdž\t\t
49\tę\t\tě\ta\t\t\t
50\tė\t\tе\t\t\t\t
51\th\t\tcg\tg\t\t\t
52\tg\t\th\t\t\t\t
53\tľ\t\tl\t\t\t\t
54\tń\t\tň\t\t\t\t
55\tŕ\t\tř\t\t\t\t
56\tś\t\ts\tš\t\t\t
57\tų\t\tu\tou\t\t\t
58\tź\t\tz\tž\t\t\t
59\tȯ\t\te\tNULL\t\t\t
60\t\t#\t\t\t\t\t
61\ty($|[\\s\\-])\tadj.\tý$1\tí$1\t\t\t
62\ta($|[\\s\\-])\tadj.\tá$1\t\t\t\t
63\to($|[\\s\\-])\tadj.\té$1\t\t\t\t
64\ti($|[\\s\\-])\tadj.\tí$1\t\t\t\t
65\t\t#\t\t\t\t\t
66\t([žščřcjďťň])a$\tn.\t$1e\t\t\t\t
67\t\t#\t\t\t\t\t
68\t\t#\t\t\t\t\t
69\t\t#\t\t\t\t\t
70\t\t#\t\t\t\t\t
71\t\t#\t\t\t\t\t
72\t\t#\t\t\t\t\t
73\t\t#\t\t\t\t\t
74\t\t#\t\t\t\t\t
75\t\t#\t\t\t\t\t
76\t\t#\t\t\t\t\t
77\t\t#\t\t\t\t\t
78\t\t#\t\t\t\t\t
79\t\t#\t\t\t\t\t
80\t\t#\t\t\t\t\t
81\t\t#\t\t\t\t\t
82\t\t#\t\t\t\t\t
83\t\t#\t\t\t\t\t
84\t\t#\t\t\t\t\t
85\t\t#\t\t\t\t\t
86\t\t#\t\t\t\t\t
87\t\t#\t\t\t\t\t
88\t\t#\t\t\t\t\t
89\t\t#\t\t\t\t\t
90\t\t#\t\t\t\t\t
91\t\t#\t\t\t\t\t
92\t\t#\t\t\t\t\t
93\t\t#\t\t\t\t\t
94\t\t#\t\t\t\t\t
95\t\t#\t\t\t\t\t
96\t\t#\t\t\t\t\t
97\t\t#\t\t\t\t\t
98\t\t#\t\t\t\t\t
99\t\t#\t\t\t\t\t
100\t\t#\t\t\t\t\t
`);
