import {parse} from "@interslavic/steen-utils";
import { BareRecord } from '../types/BareRecord';

function split(tsv: string): BareRecord[] {
  return tsv.split('\n').map(line => {
    const [id, isv, genesis, partOfSpeech] = line.split('\t');
    const isPhrase = partOfSpeech === 'phrase';

    return {
      id: +id,
      isv: parse.synset(isv, { isPhrase }),
      genesis: genesis ? parse.genesis(genesis) : undefined,
      partOfSpeech: parse.partOfSpeech(partOfSpeech),
    } as BareRecord;
  });
}

const data = split(`\
5101\ta takože\t\tconj.
1855\ta\t\tconj.
24020\tabak\tI\tm.
6114\tabažur\tF\tm.
35658\tabdikacija\tI\tf.
11\tabdikovati\tI\tv.intr. ipf.
35691\tabeceda\t\tf.
24026\tAbhaz\t\tm.anim.
6165\tAbhazija\t\tf.sg.
36565\tabhazsky\t\tadj.
24029\tablativ\tI\tm.
6375\tabo\t\tconj.
24031\tabolicionist\tI\tm.anim.
24032\tabolicionizm\tI\tm.sg.
34768\tabonement\tF\tm.
6117\tabonent\tF\tm.
6119\tabonovati\tF\tv.tr. ipf.
24038\tabort\tI\tm.
24039\tabrakadabra\tI\tf.sg.
24042\tabrikos\tI\tm.
24044\tabsces\tI\tm.
24045\tabscisa\tI\tf.
15\tabsencija\tI\tf.sg.
24047\tabsint\tF\tm.sg.
24050\tabsolutizm\tI\tm.sg.
6123\tabsolutno\tI\tadv.
6120\tabsolutny\tI\tadj.
24054\tabsorbcija\tI\tf.sg.
19625\tabsorbovati\tI\tv.tr. ipf.
24056\tabstrahovati\tI\tv.tr. ipf./pf.
19626\tabstrakcija\tI\tf.
35132\tabstrakt\tI\tm.
19627\tabstraktny\tI\tadj.
6124\tabsurd\tI\tm.
35784\tabsurdnosť\tI\tf.
6125\tabsurdny\tI\tadj.
1986\taby\tS\tconj.
17101\tače\t\tconj.
35331\tačekoli\t\tconj.
24065\tadadžo\tI\tn.
24067\tadamovo jablȯko\t\tn.
24068\tadaptacija\tI\tf.
24069\tadapter\tI\tm.
24070\tadaptovati\tI\tv.tr. ipf./pf.
24071\tadekvatny\tI\tadj.
6126\tadept\tI\tm.anim.
24076\tadjutant\tI\tm.anim.
2848\tadministracija\tI\tf.
17108\tadministrativny\tI\tadj.
96\tadministrator\tI\tm.anim.
24081\tadministrovati\tI\tv.tr. ipf.
24082\tadmiral\tI\tm.anim.
24084\tadmiraľstvo\tI\tn.
35592\tadopcija\tI\tf.
19628\tadoptovati\tI\tv.tr. ipf.
24086\tadrenalin\tI\tm.sg.
17109\tadres\tI\tm.
248\tadresa\tI\tf.
24089\tadresat\tI\tm.anim.
4540\tadresovati\tI\tv.tr. ipf.
36739\tAdriatičsko morje\tI\tn.
24093\tadventist\tI\tm.anim.
97\tadvokat\tI\tm.anim.
24096\tadvokatura\tI\tf.sg.
36566\tAdžarija\t\tf.sg.
36348\taerodinamičny\tI\tadj.
36349\taerodinamika\tI\tf.sg.
33084\taerodrom\tI\tm.
3423\taeronavtičny\tI\tadj.
3424\taeronavtika\tI\tf.sg.
6129\taeroplan\tI\tm.
99\taeroport\tI\tm.
19629\tafazija\tI\tf.sg.
19630\tafektivny\tI\tadj.
35513\tafera\tF\tf.
5754\tAfganistan\t\tm.sg.
5755\tafgansky\t\tadj.
36756\taforizm\tI\tm.
4743\tAfrika\t\tf.sg.
36719\tAfrikanėc\t\tm.anim.
36720\tAfrikanka\t\tf.
32850\tafrikansky mråvojed\t\tm.anim.
106\tafrikansky\t\tadj.
24102\tAfroamerikanec\t\tm.anim.
36283\tafrodiziak\tI\tm.
24105\tagava\tI\tf.
113\tagencija\tI\tf.
24107\tagent\tI\tm.anim.
24110\t#agentura\tI\tf.
24111\tagitacija\tI\tf.sg.
24112\tagitator\tI\tm.anim.
24113\tagitka\tI\tf.
24114\tagitovati\tI\tv.intr. ipf.
35785\taglomeracija\tI\tf.
19631\taglutinacija\tI\tf.sg.
24116\taglutinativny\tI\tadj.
24118\tagnosticizm\tI\tm.sg.
24119\tagnostik\tI\tm.anim.
24120\tagonija\tI\tf.sg.
24121\tagonizovati\tI\tv.intr. ipf.
24124\tagrarny\tI\tadj.
24125\tagregat\tI\tm.
24127\tagresija\tI\tf.sg.
24128\tagresivny\tI\tadj.
24129\tagresor\tI\tm.anim.
24130\tagrikultura\tI\tf.sg.
24131\tagronom\tI\tm.anim.
24132\tagronomičny\tI\tadj.
24133\tagronomija\tI\tf.sg.
24134\tah\t\tintj.
24135\taha\t\tintj.
4886\tahoj\t\tintj.
24136\taj\t\tintj.
24137\tajsberg\tD\tm.
24138\takacija\tI\tf.
16262\takademičsky\tI\tadj.
4639\takademija\tI\tf.
24141\takademik\tI\tm.anim.
34994\takańje\t\tn.sg.
6130\takcent\tI\tm.
24148\takcentovati\tI\tv.tr. ipf.
24149\takcentuacija\tI\tf.sg.
4951\takceptacija\tI\tf.sg.
111\takceptovati\tI\tv.tr. ipf.
115\takcija\tI\tf.
2849\takcija\tI\tf.
24152\takcioner\tI\tm.anim.
24153\takcionerny kapital\tI\tm.sg.
24154\takciz\tI\tm.
24155\taklimatizacija\tI\tf.sg.
24156\taklimatizovati\tI\tv.intr. ipf.
6387\takne\tI\tn.sg.
17112\tako by\t\tconj.
17113\tako by\t\tconj.
17114\tako by\t\tconj.
6133\tako li\tS\tconj.
23672\tako ne\t\tconj.
17076\tako\t\tconj.
17110\tako\t\tadv.
32593\takolada\tI\tf.
36472\takolada\tI\tf.
24161\takomodacija\tI\tf.
24163\takompanement\tI\tm.sg.
24164\takompaniator\tI\tm.anim.
24165\takompanovati\tI\tv.tr. ipf.
24167\takord\tI\tm.
24168\takordeon\tI\tm.
24169\takr\tI\tm.
24173\takrobat\tI\tm.anim.
34769\takrobatika\tI\tf.sg.
24174\takrobatka\tI\tf.
24175\takrobatsky\tI\tadj.
33563\taksamit\tI\tm.sg.
33564\taksamitny\t\tadj.
32543\taksiaľny\tI\tadj.
24180\taksioma\tI\tf.
119\takt\tI\tm.
2307\taktivist\tI\tm.anim.
24189\taktivistka\tI\tf.
35786\taktivitet\tI\tm.
16921\taktivno\tI\tadv.
5142\taktivnosť\tI\tf.
43\taktivny\tI\tadj.
24190\taktivovati\tI\tv.tr. ipf.
6134\taktor\tI\tm.anim.
24194\taktorka\tI\tf.
36683\taktorsky\t\tadj.
24197\taktrisa\tI\tf.
34899\taktualizacija\tI\tf.
34900\taktualizovati\tI\tv.tr. ipf./pf.
17117\taktuaľnosť\t\tf.
5125\taktuaľny\tI\tadj.
20330\takula\t\tf.
24201\takumulacija\tI\tf.
24202\takumulator\tI\tm.
24203\takumulovati\tI\tv.tr. ipf.
24204\takurat\tI\tadv.
24205\takuratnosť\tI\tf.
24206\takuratny\tI\tadj.
24207\takustičny\tI\tadj.
24208\takustika\tI\tf.
24210\takušerka\tI\tf.
24211\takušersky\tI\tadj.
24212\takušerstvo\tI\tn.sg.
24213\takut\t\tm.
16922\takuzativ\tI\tm.
24216\takvamarin\tI\tm.
24217\takvarelist\tI\tm.anim.
24218\takvarelj\tI\tm.
24219\takvarium\tI\tm.
24220\takvedukt\tI\tm.
24223\talabastr\tI\tm.
24224\talarm\t\tm.
133\tAlbanec\t\tm.anim.
4732\tAlbanija\t\tf.sg.
6388\tAlbanka\t\tf.
142\talbansky\t\tadj.
23563\talbatros\tI\tm.anim.
24248\talbum\tI\tm.
134\tale\t\tconj.
24229\talegoričny\tI\tadj.
5856\talegorija\tI\tf.
24231\taleja\tI\tf.
36743\talergičny\tI\tadj.
36742\talergija\tI\tf.
45\talfabet\tI\tm.
3968\talfabetičny\tI\tadj.
32939\talga\tI\tf.
23490\talgebra\tI\tf.sg.
23492\talgoritm\tI\tm.
24238\talhimija\tI\tf.sg.
24239\talhimik\tI\tm.anim.
107\talians\tI\tm.
24240\talibi\tI\tn.indecl.
24241\taligator\tI\tm.anim.
24244\talimenty\tI\tm.pl.
24245\taliteracija\tI\tf.
24267\taljur\tF\tm.sg.
4647\talkohol\tI\tm.
4648\talkoholičny\tI\tadj.
23277\talkoholik\tI\tm.anim.
24274\talkoholizm\tI\tm.sg.
24253\talkov\tI\tm.
24279\tallegro\tI\tn.
24254\talmanah\tI\tm.
24281\talmaz\t\tm.
24282\talo\tI\tintj.
24283\taloe\tI\tn.sg.
15759\talpijsky\tI\tadj.
5757\talpinist\tI\tm.anim.
24256\talpinizm\tI\tm.sg.
59\tAlpy\t\tf.pl.
23443\talt\tI\tm.
32998\talt\tI\tm.
35767\taltana, altanka\t\tf.
24259\talternativa\tI\tf.
17119\talternativny\tI\tadj.
24261\taltruist\tI\tm.anim.
24262\taltruističny\tI\tadj.
24263\taltruizm\tI\tm.sg.
22608\taluminij\tI\tm.sg.
24265\taluminijevy\tI\tadj.
35536\taluzija\t\tf.
24269\talveolarny\tI\tadj.
5919\tAlžirija\t\tf.sg.
35594\tamater\tF\tm.anim.
36059\tambar\tT\tm.
127\tambasada\tI\tf.
24290\tambicija\tI\tf.
32530\tambiciozny\tI\tadj.
36759\tambivalentnosť\tI\tf.
36758\tambivalentny\tI\tadj.
24291\tambrazura\tI\tf.
24294\tameba\tI\tf.
131\tAmerika\t\tf.sg.
136\tAmerikanec\t\tm.anim.
6400\tAmerikanka\t\tf.
6404\tAmerikanska Samoa\t\tf.sg.
12580\tAmerikanske Děvičje Ostrovy\t\tm.pl.
52\tamerikansky\t\tadj.
24296\tametist\tI\tm.
23198\tamfetamin\tI\tm.sg.
23197\tamfiteatr\tI\tm.
19632\tamin\tI\tintj.
24298\tamnestija\tI\tf.sg.
24299\tamnestovati\tI\tv.tr. ipf./pf.
36331\tamnezija\tI\tf.
24301\tamonij\tI\tm.sg.
24302\tamonijak\tI\tm.sg.
24304\tamoraľny\tI\tadj.
24305\tamortizacija\tI\tf.sg.
3835\tamortizator\tI\tm.
24307\tamortizovati\tI\tv.tr. ipf./pf.
34096\tamputacija\tI\tf.
34095\tamputovati\tI\tv.tr. ipf./pf.
36760\tamulet\tI\tm.
32325\tamunicija\tI\tf.sg.
35336\tanahroničny\tI\tadj.
35337\tanahronizm\tI\tm.
24309\tanalfabet\tI\tm.anim.
24310\tanalfabetizm\tI\tm.sg.
14440\tanalitično\tI\tadv.
4172\tanalitičny\tI\tadj.
904\tanalitik\tI\tm.anim.
4171\tanaliza\tI\tf.
3969\tanalizovati\tI\tv.tr. ipf.
16411\tanaľny\tI\tadj.
23209\tanalogičny\tI\tadj.
23208\tanalogija\tI\tf.
32110\tanamneza\tI\tf.
24311\tananas\tI\tm.
5057\tanarhija\tI\tf.sg.
5058\tanarhist\tI\tm.anim.
23491\tanarhizm\tI\tm.sg.
23494\tanatomičny\tI\tadj.
23493\tanatomija\tI\tf.sg.
24312\tAndora\t\tf.sg.
5718\tanekdota\tI\tf.
36190\taneksija\tI\tf.
36191\taneksovati\tI\tv.tr. ipf./pf.
20331\tanemičny\tI\tadj.
20332\tanemija\tI\tf.sg.
19633\tanestezija\tI\tf.sg.
36752\tanestezija\tI\tf.
229\tangel\tI\tm.anim.
24314\tanglicizm\tI\tm.
20333\tAngličan, Angličanin\t\tm.anim.
35052\tAnglija\t\tf.sg.
19634\tanglijskojęzyčny\t\tadj.
23464\tanglijsky rožek\t\tm.
2850\tanglijsky\t\tadj.
19635\tanglosaksonsky\t\tadj.
256\tAngola\t\tf.sg.
36537\tanimacija\tI\tf.
36700\tanimovany film\tI\tm.
36798\tanis\tI\tm.sg.
3797\tanketa\tF\tf.
32722\tanketa\tF\tf.
35755\tanomalija\tI\tf.
3949\tanonimny\tI\tadj.
34753\tantagonist\tI\tm.anim.
35738\tantagonizm\tI\tm.
4898\tAntarktida\t\tf.sg.
32494\tantena\tI\tf.
16368\tanti-\tI\tprefix
36753\tantibiotik\tI\tm.
16367\tantičnosť\tI\tf.
16369\tantičny\tI\tadj.
17120\tantihrist\tI\tm.anim.
35717\tantikvariat\tI\tm.
32493\tantilopa\tI\tf.
22629\tantimon\tI\tm.sg.
35432\tantipatija\tI\tf.
22808\tantisemitizm\tI\tm.sg.
36754\tantitělo\t\tn.
35825\tantologija\tI\tf.
23495\tantropologija\tI\tf.sg.
4952\tanulacija\tI\tf.
37\tanulovati\tI\tv.tr. ipf./pf.
16250\tanus\tI\tm.
19636\taorist\tI\tm.
6263\taparat\tI\tm.
39\tapelacija\tI\tf.
15689\tapelacijny sųd\tI\tm.
15690\tapelacijny\tI\tadj.
15692\tapelant\tI\tm.anim.
60\tapelovati\tI\tv.intr. ipf.
6422\tapendektomija\tI\tf.sg.
15764\tapendiks\tI\tm.
150\tapetit\tF\tm.sg.
36574\taplikacija\tI\tf.
15240\taplodovańje\tE\tn.sg.
5624\taplodovati\tE\tv.tr. ipf.
36316\tapokalipsa\tI\tf.
36315\tapokaliptičny\tI\tadj.
32728\taposteriorny\tI\tadj.
6167\tapostol\tI\tm.anim.
32556\tapostrof\tI\tm.
4026\taprilj\tI\tm.sg.
32727\tapriorny\tI\tadj.
35575\tArab\t\tm.anim.
35576\tArabka\t\tf.
2166\tarabsky\t\tadj.
36413\taranževati\tF\tv.tr. ipf./pf.
36414\taranžman\tF\tm.
19637\tarbiter\tI\tm.anim.
36761\tarbitraž\tI\tm.
38\tarcivojevoda\t\tm.anim.
5789\tarešt\tI\tm.sg.
122\tareštovati\tI\tv.tr. ipf.
22388\tArgentina\t\tf.sg.
22389\targentinsky\t\tadj.
22614\targon\tI\tm.sg.
19638\targument\tI\tm.
19639\targumentacija\tI\tf.
19640\targumentovati\tI\tv.intr. ipf.
4382\tarhaičny\tI\tadj.
4383\tarhaizm\tI\tm.
4419\tarheolog\tI\tm.anim.
4420\tarheologičny\tI\tadj.
4418\tarheologija\tI\tf.sg.
6166\tarhiepiskop\tI\tm.anim.
36677\tarhipelag\tI\tm.
4893\tarhitekt\tI\tm.anim.
4894\tarhitektura\tI\tf.sg.
35659\tarhitekturny\tI\tadj.
35235\tarhiv\tI\tm.
35281\tarhivny\tI\tadj.
35236\tarhivovati\tI\tv.tr. ipf./pf.
5721\taristokracija\tI\tf.sg.
5720\taristokrat\tI\tm.anim.
5722\taristokratičny\tI\tadj.
17124\taristokratka\tI\tf.
21256\taritmetika\tI\tf.sg.
17126\tarka\tI\tf.
23500\tArktičny okean\t\tm.sg.
5920\tarktičny\t\tadj.
6206\tArktika\t\tf.sg.
5059\tArmenija\t\tf.sg.
5060\tarměnsky\t\tadj.
123\tarmija\tI\tf.
1851\tarogancija\tI\tf.sg.
35635\tarogantny\tI\tadj.
24324\taromat\tI\tm.
22625\tarsen\tI\tm.sg.
34\tarsenal\tI\tm.
35705\tartefakt\tI\tm.
15244\tarterija\tI\tf.
24325\tartikulacija\tI\tf.
24326\tartilerija\tI\tf.sg.
33\tartist\tI\tm.anim.
15768\tartističny\tI\tadj.
31843\tas\tI\tm.
24327\tasfalt\tI\tm.sg.
24328\tasfaltobeton\tI\tm.sg.
36762\tasimetričny\tI\tadj.
16263\tasimilacija\tI\tf.sg.
6246\tasimilovati\tI\tv.tr. ipf.
35787\tasociacija\tI\tf.
19641\taspekt\tI\tm.
21257\tasteroid\tI\tm.
31854\tastma\tI\tf.sg.
22973\tastrolog\tI\tm.anim.
16264\tastrologičny\tI\tadj.
4895\tastrologija\tI\tf.sg.
24330\tastronavt\tI\tm.anim.
21258\tastronom\tI\tm.anim.
16265\tastronomičny\tI\tadj.
18\tastronomija\tI\tf.sg.
32\tataka\tI\tf.
3970\tatakovati\tI\tv.tr. ipf.
23503\tateist\tI\tm.anim.
23502\tateizm\tI\tm.sg.
16923\tatematičny\tI\tadj.
23526\tAtiny\t\tf.pl.
23497\tAtlantičny okean\t\tm.sg.
35020\tatlantičny\tI\tadj.
35093\tatlet\tI\tm.anim.
35095\tatletičny\tI\tadj.
35094\tatletika\tI\tf.sg.
35084\tatmosfera\tI\tf.
4661\tatom\tI\tm.
23321\tatomna bomba\t\tf.
23184\tatrakcija\tI\tf.
35788\tatraktivny\tI\tadj.
36065\tatut\tI\tm.
36825\tau!\t\tintj.
36757\taura\tI\tf.
36767\taureola\tI\tf.
36748\tautist\tI\tm.anim.
36749\tautističny\tI\tadj.
36747\tautizm\tI\tm.
24332\tavangarda\tF\tf.
24334\tavanpost\tF\tm.
24335\tavans\tF\tm.
24337\tavansovati\tI\tv.intr. ipf./pf.
24339\tavansovy\tI\tadj.
24346\tAvar\t\tm.anim.
5766\tavarija\tI\tf.
24348\tavarijny\tI\tadj.
3053\tavgust\tI\tm.sg.
62\taviacija\tI\tf.sg.
17133\taviakarta\tI\tf.
64\tavialinija\tI\tf.
24356\taviator\tI\tm.anim.
233\tavizo\tI\tn.
36074\tavokado\tI\tn.
70\tAvstralija\t\tf.sg.
5756\tavstralijsky\t\tadj.
75\tAvstrija\t\tf.sg.
35339\tAvstrijec\t\tm.anim.
35338\tavstrijsky\t\tadj.
22810\tavtentičny\tI\tadj.
2888\tavto\tI\tn.
24363\tavtobiografičny\tI\tadj.
24365\tavtobiografija\tI\tf.
14449\tavtobomba\tI\tf.
82\tavtobus\tI\tm.
35255\tavtobusna linija\t\tf.
35254\tavtobusna postojka\t\tf.
24370\tavtograf\tI\tm.
24371\tavtohton\tI\tm.anim.
24374\tavtokracija\tI\tf.
24375\tavtokrat\tI\tm.anim.
83\tavtomagistralj\tI\tm.
4358\tavtomat\tI\tm.
24377\tavtomat\t\tm.
4360\tavtomatično\tI\tadv.
4359\tavtomatičny\tI\tadj.
24383\tavtomatika\tI\tf.sg.
24384\tavtomatizacija\tI\tf.sg.
24385\tavtomatizm\tI\tm.
24386\tavtomatizovati\tI\tv.tr. ipf.
23496\tavtomobil\tI\tm.
14451\tavtomobiľny\tI\tadj.
17129\tavtonomija\tI\tf.sg.
17130\tavtonomny\tI\tadj.
6449\tavtopromysl\tM\tm.sg.
87\tavtor\tI\tm.anim.
24393\tavtoritarny\tI\tadj.
10869\tavtoritativno\tI\tadv.
10871\tavtoritativny\tI\tadj.
15772\tavtoritet\tI\tm.
15774\tavtoritetno\tI\tadv.
15775\tavtoritetnosť\tI\tf.sg.
15776\tavtoritetny\tI\tadj.
15773\tavtoritety\tI\tm.pl.
5034\tavtorizacija\tI\tf.
5033\tavtorizovati\tI\tv.tr. ipf.
35314\tavtorka\tI\tf.
35237\tavtorsko pravo\t\tn.
24398\tavtorsky\tI\tadj.
17131\tavtorstvo\tI\tn.sg.
35868\tavtostop\tI\tm.
35870\tavtostopnik\tI\tm.anim.
35869\tavtostopovati\tI\tv.intr. ipf./pf.
24399\tavtostrada\tI\tf.
6451\tavtostrahovka\tI\tf.
6452\tavtozavod\tI\tm.
24400\tavtožir\tI\tm.
24401\tazalija\tI\tf.
36744\tazbest\tI\tm.
16924\tazbuka\t\tf.
76\tAzerbajdžan\t\tm.sg.
92\tAzija\t\tf.sg.
542\tazijatsky\t\tadj.
24407\tazimut\tI\tm.
22600\tazot\tI\tm.sg.
24409\tazotisty\tI\tadj.
24410\tazotny\tI\tadj.
17135\tAzovsko morje\t\tn.sg.
36440\taztečsky\t\tadj.
36439\tAztek\t\tm.anim.
24411\tazurny\tI\tadj.
3591\taž\t\tadv.
2435\tbaba\t\tf.
6460\tbabica\t\tf.
24425\tbabin\t\tadj.
24429\tbabka\t\tf.
24430\tbabsky\t\tadj.
6459\tbabuška\t\tf.
35187\tbacil\tI\tm.
32766\tbadminton\tE\tm.sg.
5070\tbagatela\tF\tf.
1579\tbagatelizovati\tF\tv.tr. ipf.
2438\tbagaž\tF\tm.
384\tbagno\tS\tn.
22453\tbahamsky\t\tadj.
22452\tBahamy\t\tf.pl.
24437\tbajati\t\tv.intr. ipf.
34833\tbajati\t\tv.intr. ipf.
6465\tbajka\t\tf.
36392\tbajonet\tF\tm.
6466\tbajt\tE\tm.
24443\tbak\tI\tm.
24444\tbak\tI\tm.
24445\tbakalavr\tI\tm.
24448\tbaken\tI\tm.
35440\tbakenbardy\tD\tf.pl.
24453\tbaklažan\t\tm.
23505\tbakterija\tI\tf.
24458\tbakteriologija\tI\tf.sg.
24459\tbal\tI\tm.
31963\tbala\t\tf.
24461\tbalada\tI\tf.
24464\tbalalajka\t\tf.
2440\tbalans\tI\tm.
24467\tbalansir\tI\tm.
24468\tbalansovati\tI\tv.intr. ipf.
24469\tbalast\tI\tm.sg.
24470\tbaldahin\tI\tm.
24471\tbalerina\tI\tf.
6102\tbalet\tI\tm.
24474\tbalističny\tI\tadj.
24476\tbalistika\tI\tf.sg.
35340\tbalkansky\t\tadj.
16824\tBalkany\t\tm.pl.
153\tbalkon\tI\tm.
24482\tbalon\tI\tm.
24483\tbalotovati\tI\tv.tr. ipf./pf.
23506\tBaltičsko morje\t\tn.sg.
4737\tbaltičsky\t\tadj.
24484\tbalustrada\tF\tf.
31785\tbalvan\t\tm.
31786\tbalvan\t\tm.
24487\tbalzam\tI\tm.
24489\tbalzamovati\tI\tv.tr. ipf./pf.
24490\tbambus\tI\tm.
31717\tbanaľny\tI\tadj.
24492\tbanan\tI\tm.
2439\tbanda\tI\tf.
24494\tbandaž\tF\tm.
493\tbandit\tI\tm.anim.
24499\tbanditizm\tI\tm.sg.
24500\tbandura\t\tf.
24502\tbandžo\tI\tn.
21847\tbaner\tE\tm.
24503\tbanja\t\tf.
4668\tbank\tI\tm.
24506\tbanka\t\tf.
33326\tbanka\t\tf.
24507\tbanket\tI\tm.
24508\tbankir\tI\tm.anim.
16925\tbanknota\tI\tf.
36391\tbankrot\tI\tm.anim.
24510\tbankrotstvo\tI\tn.
23757\tbaobab\tI\tm.
24513\tbaptist\tI\tm.anim.
24514\tbaptizm\tI\tm.
24515\tbar\tI\tm.
24516\tbaraban\t\tm.
14453\tbarak\tI\tm.
32414\tbarak\tI\tm.
2436\tbaran\t\tm.anim.
24520\tbaranina\t\tf.sg.
24522\tbarbaris\tI\tm.
24524\tbard\tI\tm.anim.
6471\tbarel\tE\tm.
159\tbariera\tF\tf.
24529\tbarikada\tI\tf.
24530\tbarikadovati\tI\tv.tr. ipf.
24533\tbarkarola\tI\tf.
24534\tbarkas\tI\tm.
31977\tbarmen\tE\tm.anim.
154\tbarok\tI\tm.sg.
24535\tbaroko\tI\tn.
24536\tbarometr\tI\tm.
24538\tbaron\tI\tm.anim.
24539\tbaronesa\tI\tf.
20334\tbarsuk\t\tm.anim.
1868\tbarva\t\tf.
24541\tbarvinȯk\t\tm.
5873\tbarviti\t\tv.tr. ipf.
5872\tbarvivo\t\tn.
21259\tbarvna olovka\t\tf.
24542\tbaryj\tI\tm.sg.
24544\tbaryton\tI\tm.
24545\tbarža\tI\tf.
24546\tbas\t\tm.
2437\tbasen\tF\tm.
36210\tBask\t\tm.anim.
24549\tbasketbol\tE\tm.sg.
36209\tbaskijsky\t\tadj.
1846\tbasnj\t\tf.
6483\tbasnjesloveny\t\tadj.
19642\tbasnjevy\t\tadj.
24552\tbasta\tI\tintj.
35240\tbastard\tI\tm.
24553\tbastion\tI\tm.
36569\tbaškirsky\t\tadj.
24559\tbatalion\tF\tm.
24560\tbaterija\tI\tf.
35632\tBavarija\t\tf.sg.
35724\tbavarsky\t\tadj.
2418\tbaviti\t\tv.tr. ipf.
157\tbavȯlna\t\tf.sg.
6487\tbaza danyh\t\tf.
156\tbaza\t\tf.
24565\tbazalt\tI\tm.sg.
16730\tbazar\t\tm.
24567\tbazilik\tI\tm.
31749\tbazilika\tI\tf.
20335\tbazilisk\tI\tm.anim.
19643\tbazovati na\tI\tv.tr. ipf.
24570\tbazovati sę na\tI\tv.refl. ipf.
20336\tbděńje\t\tn.sg.
20338\tbděti\t\tv.intr. ipf.
20339\tbditeljnosť\t\tf.sg.
20340\tbditeljny\t\tadj.
2442\tběda\t\tf.sg.
3836\tběda\t\tf.sg.
2443\tbědny\t\tadj.
2444\tbedrenec\t\tm.anim.
24576\tbedreny\t\tadj.
2445\tbedro\t\tn.
20341\tběg\t\tm.
20342\tběg\t\tm.
20343\tběg\t\tm.
35981\tběgaj!\t\tintj.
2441\tběgati\t\tv.intr. ipf.
20344\tběglosť\t\tf.sg.
20345\tběgly\t\tadj.
36637\tběgly\t\tadj.
32533\tběgstvo\t\tn.
1219\tběgti\t\tv.intr. ipf.
20346\tběgun\t\tm.anim.
35523\tbejsbol\tE\tm.sg.
24583\tbělavy\t\tadj.
24584\tbělěti\t\tv.intr. ipf.
2865\tBelgija\t\tf.sg.
4426\tbelgijsky\t\tadj.
23521\tBělgråd\t\tm.sg.
24586\tbělilo\t\tn.
31731\tběliti\t\tv.tr. ipf.
22454\tBeliz\t\tm.sg.
2446\tbělmo\t\tn.
24591\tbělobrådy\t\tadj.
24595\tbělȯk\t\tm.
24600\tbělopery\t\tadj.
2447\tBělorus\t\tm.anim.
2448\tBěloruś\t\tf.sg.
2864\tbělorussky\t\tadj.
24604\tbělosť\t\tf.sg.
24605\tbělovlåsy\t\tadj.
24606\tbělozųby\t\tadj.
2679\tběly\t\tadj.
23409\tbenzin\tI\tm.
19493\tBerlin\t\tm.sg.
36647\tberserk\tG\tm.anim.
22601\tberylij\tI\tm.sg.
24609\tběs\t\tm.anim.
1811\tbesěda\t\tf.
2880\tbesědovati\t\tv.intr. ipf.
24612\tběsiti sę\t\tv.refl. ipf.
31757\tběsnosť\t\tf.sg.
24613\tběsny\t\tadj.
1721\tbeton\t\tm.sg.
3972\tbetonny\t\tadj.
3044\tbetonomešalka\t\tf.
3415\tbez malogo\t\tadv.
4946\tbez obzira na\t\tprep.
1434\tbez\t\tprep.
3971\tbezbarvny\t\tadj.
19644\tbezbolěsno\t\tadv.
19645\tbezbolěsny\t\tadj.
33128\tbezbožje\t\tn.sg.
33131\tbezbožnik\t\tm.anim.
33123\tbezbožny\t\tadj.
33127\tbezbožny\t\tadj.
24618\tbezbrådy\t\tadj.
35125\tbezbrånny\t\tadj.
17137\tbezčesťje\t\tn.sg.
24620\tbezčestny\t\tadj.
31742\tbezčestny\t\tadj.
4837\tbezdětny\t\tadj.
2335\tbezdna\t\tf.
24626\tbezdomny\t\tadj.
24627\tbezdȯnny\t\tadj.
24628\tbezdȯžďje\t\tn.sg.
14455\tbezdrěvny\t\tadj.
24630\tbezdušny\t\tadj.
19646\tbezdyšny\t\tadj.
24633\tbezglåvy\t\tadj.
24635\tbezhvosty\t\tadj.
14458\tbezhybny\t\tadj.
6515\tbezimenno\t\tadv.
6516\tbezimenny\t\tadj.
36638\tbezizhodnosť\t\tf.sg.
17138\tbezizhodny\t\tadj.
35411\tbezkarnosť\t\tf.sg.
35410\tbezkarny\t\tadj.
14457\tbezkolorny\t\tadj.
6517\tbezkonečje\t\tn.sg.
4296\tbezkonečno\t\tadv.
6519\tbezkonečnosť\t\tf.sg.
6520\tbezkonečny\t\tadj.
6522\tbezkoristny\t\tadj.
24637\tbezkostny\t\tadj.
31733\tbezkrily\t\tadj.
24638\tbezkrȯvny\t\tadj.
6524\tbezlěsny\t\tadj.
6525\tbezlistny\t\tadj.
24644\tbezljudny\t\tadj.
20348\tbezměrnosť\t\tf.sg.
33138\tbezměrny\t\tadj.
20351\tbezmȯlvny\t\tadj.
24646\tbezmozgy\t\tadj.
36175\tbezmytny\t\tadj.
36721\tbeznadějnosť\t\tf.
4345\tbeznadějny\t\tadj.
24647\tbeznogy\t\tadj.
17141\tbezolovny\t\tadj.
20842\tbezopasnosť\t\tf.sg.
20844\tbezopasny\t\tadj.
24650\tbezpamętny\t\tadj.
19494\tbezpartijny\tI\tadj.
20846\tbezpečnosť\t\tf.sg.
20847\tbezpečny\t\tadj.
24652\tbezpery\t\tadj.
20848\tbezplatny\t\tadj.
24653\tbezplodny\t\tadj.
33019\tbezplodny\t\tadj.
19649\tbezpokojęći\t\tadj.
22974\tbezpokojeńje\t\tn.
36698\tbezpokojiti sę\t\tv.refl. ipf.
19654\tbezpokojiti\t\tv.tr. ipf.
19659\tbezpokojny\t\tadj.
19661\tbezpokojstvo\t\tn.sg.
5837\tbezpomoćno\t\tadv.
5836\tbezpomoćnosť\t\tf.sg.
5835\tbezpomoćny\t\tadj.
5090\tbezposrědnje\t\tadv.
1792\tbezposrědnji, bezposrědny\t\tadj.
178\tbezprecedentny\tI\tadj.
3517\tbezprěryvno\t\tadv.
6536\tbezprěryvny\t\tadj.
3493\tbezpričinny\t\tadj.
33236\tbezprikladny\t\tadj.
33232\tbezpriměrny\t\tadj.
17142\tbezråbotica\t\tf.sg.
28504\tbezradostny\t\tadj.
36639\tbezrodny\t\tadj.
24655\tbezrogy\t\tadj.
24656\tbezrųky\t\tadj.
24657\tbezsiľny\t\tadj.
20352\tbezsmyslica\t\tf.sg.
21261\tbezsmysľny\t\tadj.
24658\tbezsněžny\t\tadj.
24659\tbezsȯnnica\t\tf.sg.
24660\tbezsȯnny\t\tadj.
24661\tbezstrašny\t\tadj.
16267\tbezstydnosť\t\tf.sg.
16266\tbezstydny\t\tadj.
3974\tbezšumnosť\t\tf.sg.
177\tbezšumny\t\tadj.
6544\tbeztęžno\t\tadv.
6545\tbeztęžnosť\t\tf.sg.
6546\tbeztęžny\t\tadj.
24008\tbezumje\t\tn.sg.
15247\tbezumnik\t\tm.anim.
15248\tbezumny\t\tadj.
4214\tbezusiľje\t\tn.sg.
4213\tbezusiľno\t\tadv.
4215\tbezusiľnosť\t\tf.sg.
4212\tbezusiľny\t\tadj.
21263\tbezuslovny\t\tadj.
33156\tbezuspěšny\t\tadj.
33157\tbezutěšny\t\tadj.
33436\tbezvěŕje\t\tn.sg.
5051\tbezvěstny\t\tadj.
24664\tbezvětŕje\t\tn.
24665\tbezvinny\t\tadj.
34434\tbezvkųsny\t\tadj.
22486\tbezvladnosť\t\tf.sg.
22487\tbezvladnosť\t\tf.sg.
22485\tbezvladny\t\tadj.
22484\tbezvlasťje\t\tn.sg.
24666\tbezvlåsy\t\tadj.
24668\tbezvodny\t\tadj.
17143\tbezvyhodny\t\tadj.
35126\tbezzaščitny\t\tadj.
179\tběženec\t\tm.anim.
6552\tběženica\t\tf.
23754\tběžeńje\t\tn.
24671\tbeževy\tF\tadj.
24672\tbezzųby\t\tadj.
5040\tbezzvųčny\t\tadj.
4760\tBiblija\tI\tf.
5844\tbiblijsky\tI\tadj.
35088\tbibliografičny\tI\tadj.
35087\tbibliografija\tI\tf.
4364\tbiblioteka\tI\tf.
4365\tbibliotekaŕ\tI\tm.anim.
24673\tbič\t\tm.
34987\tbičevati\t\tv.tr. ipf.
35994\tbifštek\tE\tm.
35872\tbilbord\tE\tm.
1760\tbilet\tI\tm.
35293\tbinarny\tI\tadj.
35227\tbinoklj\tF\tm.
20849\tbiografija\tI\tf.
3975\tbiolog\tI\tm.anim.
3976\tbiologičny\tI\tadj.
1780\tbiologija\tI\tf.sg.
17145\tbiskup\tI\tm.anim.
35992\tbiskvit\tF\tm.
22635\tbismut\tI\tm.sg.
4049\tbiti\t\tv.tr. ipf.
24678\tbiťje\t\tn.
24679\tbitka\t\tf.
20353\tbitva\t\tf.
35833\tBizantija\tI\tf.sg.
35834\tBizantijska imperija\tI\tf.sg.
35341\tbizantijsky\t\tadj.
637\tbiznes\tE\tm.
15785\tbiznesmen\tE\tm.anim.
14464\tbiznesny\tE\tadj.
32788\tbizon\tI\tm.anim.
24681\tbižuterija\tF\tf.
35181\tbjuleten\tF\tm.
3978\tbjurokracija\tI\tf.
2452\tbjurokrat\tI\tm.anim.
3979\tbjurokratičny\tI\tadj.
3176\tbjust\tF\tm.
17146\tblågo\t\tn.
4927\tblågodarę\t\tprep.
4885\tblågodarim, blågodarjų\t\tintj.
4889\tblågodariti\t\tv.tr. ipf.
6575\tblågodarjeńje\t\tn.
6576\tblågodarno\t\tadv.
4905\tblågodarnosť\t\tf.sg.
4903\tblågodarny\t\tadj.
23755\tblågomilosť\t\tf.
15251\tblågomily\t\tadj.
23756\tblågoprijętny\t\tadj.
21264\tblågorodny\t\tadj.
22975\tblågosklonnosť\t\tf.sg.
14466\tblågosklonny\t\tadj.
19662\tblågosklonny\t\tadj.
5574\tblågoslavjati\t\tv.tr. ipf.
5573\tblågosloviti\t\tv.tr. pf.
5901\tblågoslovjeńje\t\tn.
6587\tblågoslovjeńje\t\tn.
6588\tblågoslovny\t\tadj.
21713\tblågostańje\t\tn.sg.
22146\tblågotvorny\t\tadj.
22214\tBlågověšćeńje\t\tn.sg.
22297\tblågovolěti\t\tv.intr. ipf.
22299\tblågovoljny\t\tadj.
35598\tblågozvųčnosť\t\tf.sg.
35599\tblågozvučny\t\tadj.
36893\tblågoželańje\t\tn.
6050\tblågoželati\t\tv.intr. ipf.
620\tblågy\t\tadj.
24683\tblåna\t\tf.
36376\tblåtna kųpělj\t\tf.
14225\tblåtna lavina\t\tf.
24684\tblåtny\t\tadj.
3463\tblåto\t\tn.
312\tblazn\t\tm.anim.
24688\tblazniti sę\t\tv.refl. ipf.
24689\tblaznovati\t\tv.intr. ipf.
24690\tblědněti\t\tv.intr. ipf.
24692\tblědosť\t\tf.sg.
2453\tblědy\t\tadj.
24693\tblejati\t\tv.intr. ipf.
33405\tblekdžek\tI\tm.sg.
24694\tblen\t\tm.
5073\tblěsk\t\tm.
2456\tblěskati\t\tv.intr. ipf.
5066\tblěskavica\t\tf.
24717\tblěskavy\t\tadj.
5869\tblěsklivy\t\tadj.
2035\tblěsknųti\t\tv.intr. pf.
24697\tblěstěti\t\tv.intr. ipf.
24698\tblin\t\tm.
3426\tbliz\t\tadv.
3746\tblizko\t\tadv.
4916\tblizko\t\tprep.
3980\tblizkosť\t\tf.sg.
6603\tBlizky Iztok\t\tm.sg.
2455\tBlizky Vȯzhod\t\tm.sg.
3287\tblizky\t\tadj.
192\tbliznec\t\tm.anim.
7406\tblizneci\t\tm.pl.
24701\tBlizneci\t\tm.pl.
7404\tbliznečky\t\tf.pl.
7407\tbliznečsky\t\tadj.
6610\tblizši\t\tadj.
6609\tbliže\t\tadv.
24702\tbližiti sę\t\tv.refl. ipf.
24703\tbližnji, bližny\t\tadj.
35437\tbljudce\t\tn.
24704\tbljudo\t\tn.
36473\tbljudo\t\tn.
24705\tbljunųti\t\tv.intr. pf.
2458\tbljušč\t\tm.
24707\tbljuvati\t\tv.intr. ipf.
36781\tbljuvotina\t\tf.
16778\tblog\tI\tm.
2460\tblȯha\t\tf.
2459\tblok\t\tm.
4953\tblokada\tI\tf.
33085\tblokflejta\tI\tf.
193\tblokovati\tI\tv.tr. ipf.
17150\tblondin\tI\tm.anim.
2457\tblondinka\tI\tf.
6189\tblųd\t\tm.
2461\tblųditi\t\tv.intr. ipf.
24713\tblųdny\t\tadj.
24714\tblųkati\t\tv.intr. ipf.
20850\tboa\tI\tf.
701\tbob\t\tm.
24721\tbobovy\t\tadj.
2434\tbobr\t\tm.anim.
6620\tbobŕja damba\t\tf.
15253\tbobŕji\t\tadj.
36502\tbobslej\tE\tm.
323\tboćan\t\tm.anim.
14454\tbȯčka\t\tf.
36179\tbočny poględ\t\tm.
3981\tbočny\t\tadj.
14452\tbȯčva\tS\tf.
31753\tbodati sę\t\tv.refl. ipf.
24726\tbodati\t\tv.tr. ipf.
24727\tbodec\t\tm.
24728\tbodlivy\t\tadj.
24730\tbȯdnaŕ\t\tm.anim.
36422\tbodnųti sę\t\tv.refl. pf.
36421\tbodnųti\t\tv.tr. pf.
20354\tbodrosť\t\tf.sg.
20355\tbodry\t\tadj.
2855\tbog\t\tm.anim.
14471\tbogač\t\tm.anim.
24736\tbogatěti\t\tv.intr. ipf.
6624\tbogatosť\t\tf.sg.
6628\tbogatstvo\t\tn.
6629\tbogatši\t\tadj.
212\tbogaty\t\tadj.
14473\tbogatyr\t\tm.anim.
17152\tbogatyrsko\t\tadv.
17151\tbogatyrsky\t\tadj.
4510\tbogohuliti\t\tv.intr. ipf.
4512\tbogohuljeńje\t\tn.sg.
4511\tbogohuľnik\t\tm.anim.
6636\tbogohuľno\t\tadv.
4513\tbogohuľny\t\tadj.
17153\tbogohuľstvo\t\tn.
17154\tBogojavjeńje\t\tn.sg.
20357\tbogomolka\t\tf.
17156\tBogorodica\t\tf.sg.
17157\tbogoslovec\t\tm.anim.
17158\tbogoslovje\t\tn.sg.
17159\tbogoslužba\t\tf.
17160\tbogoslužeńje\t\tn.
16926\tbogyni\t\tf.
32037\tbohanka\t\tf.
35231\tBohemija\t\tf.sg.
2464\tboj\t\tm.
20358\tboj\t\tm.
2465\tbojati sę\t\tv.refl. ipf.
6641\tbojazlivo\t\tadv.
6642\tbojazlivy\t\tadj.
4769\tbojaznj\t\tf.
6644\tbojazno\t\tadv.
6645\tbojazny\t\tadj.
24746\tbojec\t\tm.anim.
2466\tbojevati\t\tv.intr. ipf.
6169\tbojevnik\t\tm.anim.
6651\tbojevy\t\tadj.
2324\tbojka\t\tf.
4954\tbojkot\tI\tm.
2919\tbojkotovati\tI\tv.tr. ipf.
35420\tbojna glåvica\t\tf.
24748\tbojny\t\tadj.
765\tbok\t\tm.
6657\tbolěsno\t\tadv.
6658\tbolěsny\t\tadj.
2011\tbolěti\t\tv.intr. ipf.
36690\tbolěti\t\tv.intr. ipf.
6661\tbolězlivo\t\tadv.
31784\tbolězlivy\t\tadj.
14475\tbolěznj\t\tf.
14028\tbolěznjetvorny\t\tadj.
23478\tboliglåv\t\tm.
2467\tbolinka\t\tf.
22434\tBolivija\t\tf.sg.
22435\tbolivijsky\t\tadj.
1132\tbolj\t\tm.
34901\tbolje ili menje\t\tadv.
16915\tbolje\t\tadv.
201\tboljnica\t\tf.
202\tboljny\t\tadj.
1824\tboljšesť\t\tf.
35660\tboljši\t\tadj.
208\tbomba\tI\tf.
2469\tbombardovati\tI\tv.tr. ipf.
24758\tbonbon\tI\tm.
22602\tbor\tI\tm.sg.
24759\tbor\tI\tm.
207\tboŕba\t\tf.sg.
23988\tbordelj\tI\tm.
24763\tBordo\t\tm.sg.
24764\tbordovy\tI\tadj.
17165\tborec\t\tm.anim.
17168\tboriti sę\t\tv.refl. ipf.
24766\tborovik\t\tm.
1852\tbȯršč\t\tm.sg.
24769\tbȯrščevnik\t\tm.
1379\tBosnija i Hercegovina\t\tf.sg.
35871\tBosnija\tI\tf.sg.
606\tbosnijsky\t\tadj.
20359\tbosnjačsky\t\tadj.
6170\tBosnjak\t\tm.anim.
24772\tbosonogy\t\tadj.
31754\tbosti sę\t\tv.refl. ipf.
24733\tbosti\t\tv.tr. ipf.
2463\tbosy\t\tadj.
23325\tbotaničny sad\tM\tm.
23324\tbotaničny\tI\tadj.
23323\tbotanik\tI\tm.anim.
23322\tbotanika\tI\tf.sg.
36488\tBotsvana\t\tf.sg.
1455\tbȯz\t\tm.
36282\tbȯzina\t\tf.
26843\tbožja kråvka\t\tf.
6262\tbožji\t\tadj.
5295\tbožsky\t\tadj.
17169\tbožstvo\t\tn.
2479\tbråda\t\tf.
24782\tbrådač\t\tm.anim.
24783\tbrådaty\t\tadj.
5886\tbrådavica\t\tf.
473\tbrådavička\t\tf.
36028\tbrådobrivec\tF\tm.anim.
24786\tbrahtati sę\t\tv.refl. ipf.
36111\tBrajlovo pismo\tI\tn.
24787\tbrak\t\tm.
34778\tbrakonier\t\tm.anim.
34777\tbrakonierstvo\t\tn.sg.
2478\tbråna\t\tf.
24792\tbråniti\t\tv.tr. ipf.
23984\tbraslet\tF\tm.
7405\tbrat bliznec\t\tm.anim.
1588\tbrat ili sestra\t\tm.anim.
219\tbrat\t\tm.anim.
24795\tbratati sę\t\tv.refl. ipf.
1877\tbrati\t\tv.tr. ipf.
23522\tBratislava\t\tf.sg.
24799\tbratja\t\tm.pl.
6098\tbratobijstvo\t\tn.
24801\tbratov\t\tadj.
6681\tbratska ljubȯv\t\tf.sg.
6021\tbratsky\t\tadj.
1461\tbratstvo\t\tn.
35655\tbravo\tI\tintj.
221\tbråzda\t\tf.
24805\tbråzditi\t\tv.intr. ipf.
2473\tBrazilija\t\tf.sg.
4753\tbraziľsky\t\tadj.
6081\tBrěg Slonovoj Kosti\t\tm.sg.
2474\tbrěg\t\tm.
24808\tbrěgovy\t\tadj.
24810\tbrěk\t\tm.
24811\tbreknųti\t\tv.intr. ipf.
16338\tbrěmę\t\tn.
17170\tbrěmennosť\t\tf.
17171\tbrěmenny\t\tadj.
24815\tbrenčati\t\tv.intr. ipf.
214\tbrend\tE\tm.
24818\tbrenknųti\t\tv.intr. ipf.
17173\tbrěst\t\tm.
24836\tbrešljan\t\tm.
218\tbrěza\t\tf.
6697\tbrězenj\tS\tm.sg.
24824\tbrěžny\t\tadj.
6699\tbridko\t\tadv.
2475\tbridky\t\tadj.
6698\tbridky\t\tadj.
21265\tbridž\tI\tm.sg.
24826\tbriket\tF\tm.
6702\tBritanske Děvičje Ostrovy\t\tm.pl.
2470\tbritansky\t\tadj.
34140\tbriti sę\t\tv.refl. ipf.
5283\tbriti\t\tv.tr. ipf.
2480\tbritva\t\tf.
24828\tbrjuhaty\t\tadj.
2477\tbrjuho\t\tn.
36592\tbrjušny\t\tadj.
1337\tbŕlog\t\tm.
24831\tBrno\t\tn.sg.
4772\tbrod\t\tm.
24833\tbroditi\t\tv.intr. ipf.
31789\tbroditi\t\tv.intr. ipf.
17175\tbroj\t\tm.
22626\tbrom\tI\tm.sg.
16797\tbrȯnja\t\tf.
6706\tbronza\tI\tf.
36153\tbronzova doba\t\tf.
6707\tbronzovy\tI\tadj.
35183\tbrošura\tF\tf.
2308\tbrȯv\t\tf.
24837\tbrť\t\tf.
24838\tbrtnik\t\tm.anim.
17176\tbrukva\t\tf.
24842\tbrus\t\tm.
36810\tBruselj\tI\tm.
24843\tbrusiti\t\tv.tr. ipf.
6711\tbrusnica\t\tf.
162\tbrutaľnosť\tI\tf.
2483\tbrutaľny\tI\tadj.
24845\tbruto\tI\tadv.
24847\tbŕvno\t\tn.
24849\tbryzgati\t\tv.tr. ipf.
24850\tbryzgnųti\t\tv.tr. pf.
36783\tbrza pomoć\t\tf.sg.
23651\tbrzina\t\tf.
5584\tbrzo\t\tadv.
5583\tbrzy\t\tadj.
17177\tbuba\t\tf.
1802\tbųben\t\tm.
33328\tbųblina\t\tf.
2484\tbučati\t\tv.intr. ipf.
223\tbuda\t\tf.
19665\tBudapest\t\tm.sg.
22979\tbųde/bųdųt\t\tv.aux. ipf.
20360\tbudiľnik\t\tm.
23511\tbudist\tI\tm.anim.
22980\tbuditelj\t\tm.anim.
34791\tbuditi sę\t\tv.tr. ipf.
2485\tbuditi\t\tv.tr. ipf.
23510\tbudizm\tI\tm.sg.
14481\tbudka\t\tf.
918\tbudovati\t\tv.tr. ipf.
1847\tbųdųći\t\tadj.
224\tbųdųćnosť\t\tf.sg.
1968\tbudynȯk\t\tm.
22972\tbudžet\tE\tm.
36675\tbufer obměna\tE\tm.
36674\tbufer\tE\tm.
36676\tbuferna pamęť\t\tf.
35103\tbufet\tF\tm.
24860\tbuhati\t\tv.intr. ipf.
24863\tbuhnųti\t\tv.intr. pf.
24864\tbuhta\t\tf.
6722\tbujno\t\tadv.
6723\tbujnosť\t\tf.sg.
24867\tbujny\t\tadj.
2309\tbuk\t\tm.
1325\tbuket\tF\tm.
2486\tbukva\t\tf.
16755\tbukvaľno\t\tadv.
16754\tbukvaľny\t\tadj.
24871\tbukvica\t\tf.
4725\tBulgar, Bulgarin\t\tm.anim.
1541\tBulgarija\t\tf.sg.
17179\tbulgarizacija\t\tf.sg.
6729\tBulgarka\t\tf.
2482\tbulgarsky\t\tadj.
36095\tbulj-bulj\t\tintj.
24873\tbulka\t\tf.
35245\tbulvar\tF\tm.
31762\tbumerang\tI\tm.
32996\tbunker\tI\tm.
35033\tbunt\tD\tm.
6732\tbuntovati sę\tD\tv.refl. ipf.
226\tbuntovnik\tD\tm.anim.
1801\tburiti\t\tv.tr. ipf.
6736\tburja větra\t\tf.
2451\tburja\t\tf.
24876\tburjan\t\tm.
6737\tbuŕlivy\t\tadj.
24878\tbuŕny\t\tadj.
16745\tbutylka\t\tf.
1821\tby\t\tparticle
24886\tbyček\t\tm.anim.
24885\tbyčji\t\tadj.
1791\tbyk\t\tm.anim.
24887\tByk\t\tm.anim.
17180\tbylina\t\tf.
24889\tbylina\t\tf.
6743\tbyly\t\tadj.
1498\tbystro\t\tadv.
3977\tbystrosť\t\tf.sg.
1762\tbystry\t\tadj.
24894\tbyt\t\tm.sg.
35085\tbyti dȯlžen\t\tv.aux. ipf.
6750\tByti ili ne byti? To jest pytańje\t\tphrase
10343\tbyti ostråžny\t\tv.ipf.
17182\tbyti podobny\t\tv.ipf.
23728\tbyti prěhlåđeny\t\tv.ipf.
2449\tbyti prinuđeny\t\tv.ipf.
4190\tbyti sȯglåsny\t\tv.ipf.
593\tbyti\t\tv.intr. ipf.
24896\tbyti\t\tv.intr. ipf.
160\tbyťje\t\tn.sg.
6753\tbytosť\t\tf.
14462\tbytosť\t\tf.
17183\tbyvati\t\tv.intr. ipf.
24900\tbyvol\t\tm.anim.
2993\tbyvši\t\tadj.
33361\tbzděti\t\tv.intr. ipf.
33362\tbzdnųti\t\tv.intr. pf.
5758\tcaŕ\t\tm.anim.
17187\tcarica\t\tf.
17188\tcarica\t\tf.
35835\tCarigrad\t\tm.sg.
35940\tcaŕsky\t\tadj.
24903\tcaŕstvo\t\tn.
24904\tcědilo\t\tn.
2374\tcěditi\t\tv.tr. ipf.
883\tcegla\t\tf.
19666\tceglina\t\tf.
2204\tcěliti\t\tv.intr. ipf.
421\tcělj\t\tm.
34996\tćelja\tI\tf.
36353\tcěljeva grupa\t\tf.
36358\tcěljevy język\t\tm.
4391\tcělkom\t\tadv.
3009\tcělkovito\t\tadv.
4143\tcělkovity\t\tadj.
36585\tcělo čislo\t\tn.
32747\tcělo\t\tadv.
34925\tcělodenny\t\tadj.
34924\tcělodnevny\t\tadj.
19667\tcělosť\t\tf.sg.
6767\tcělovańje\t\tn.sg.
6769\tcělovatelj\t\tm.anim.
3010\tcělovati\t\tv.tr. ipf.
1027\tcěly\t\tadj.
3008\tcement\tI\tm.
1568\tcěna\t\tf.
24918\tcěniti\t\tv.tr. ipf.
2281\tcěnnosť\t\tf.
1409\tcěnny\t\tadj.
23017\tcentigram\tI\tm.
23021\tcentilitr\tI\tm.
4422\tcentimetr\tI\tm.
1263\tcentr\tI\tm.
1706\tcentrala\tI\tf.
23223\tcentraľna nervna sistema\tI\tf.sg.
31748\tCentraľny Komitet\tI\tm.
1727\tcentraľny\tI\tadj.
2194\tcentrizm\tI\tm.sg.
5296\tcenzura\tI\tf.sg.
5297\tcenzurovati\tI\tv.tr. ipf.
2193\tcěp\t\tm.
4649\tcepelin\tI\tm.
35692\tcěsaŕ\t\tm.anim.
35693\tcěsaŕstvo\t\tn.
32252\tCetińje\t\tn.sg.
24921\tcěvka\t\tf.
34775\tcibulica\t\tf.
1543\tcibulja\t\tf.
6784\tcibuljevity\t\tadj.
14486\tcibuljevy\t\tadj.
116\tcicka\t\tf.
6786\tcicky\t\tf.pl.
17210\tcifra\tI\tf.
35119\tcigara\t\tf.
460\tcigareta\tI\tf.
32070\tcikl\tI\tm.
32071\tcikličny\tI\tadj.
22628\tcin\tI\tm.sg.
22624\tcink\tI\tm.sg.
6265\tcirk\tI\tm.
24924\tcirkulacija\tI\tf.sg.
24925\tcirkulj\t\tm.
36390\tcirkumfleks\tI\tm.
4955\tcitat\tI\tm.
2999\tcitovati\tI\tv.tr. ipf.
36832\tcitra\tI\tf.
2998\tcivil\tI\tm.anim.
23527\tcivilizacija\tI\tf.
35749\tcivilizovany\tI\tadj.
1879\tciviľny\tI\tadj.
32266\tcmokati\t\tv.intr. ipf.
35435\tcolj\t\tm.
16928\tcrkȯv\t\tf.
4386\tcrkȯvnoslovjansky\t\tadj.
35168\tcrkȯvny\t\tadj.
1707\tcrkva\t\tf.
22748\tćuđezemec\t\tm.anim.
25079\tćuđezemny\t\tadj.
610\tćuđi\t\tadj.
36629\tćuđi\t\tadj.
3416\tćuđina\t\tf.sg.
1182\tćuđinec\t\tm.anim.
6928\tćuđinka\t\tf.
31965\tcukina\t\tf.
2243\tcukr\t\tm.sg.
3838\tcukrka\t\tf.
6103\tcunami\tI\tn.indecl.
6794\tcvekla\t\tf.
24929\tcvěliti\t\tv.intr. ipf.
24937\tcvěsti\t\tv.intr. ipf.
1720\tcvět\t\tm.
14487\tcvět\t\tm.
8792\tcvětati\t\tv.intr. ipf.
8791\tcvětenj\tS\tm.sg.
24933\tcvěteńje\t\tn.sg.
35014\tcvětna kapusta\t\tf.
8794\tcvětnųti\t\tv.intr. ipf.
22985\tcvětny pyl\t\tm.
24935\tcvětny\t\tadj.
8793\tcvětųći\t\tadj.
20852\tcviliti\t\tv.intr. ipf.
35090\tcvŕček\t\tm.anim.
33590\tcvŕkati\t\tv.intr. ipf.
33591\tcvŕkot\t\tm.
24939\tčad\t\tm.
24941\tčaditi\t\tv.intr. ipf.
1714\tčaj\t\tm.
6796\tčajiljnja\t\tf.
23472\tčajka\t\tf.
23473\tčajka\t\tf.
35626\tčajna lȯžička\t\tf.
36256\tčajna vrěčka\t\tf.
4792\tčajnik\t\tm.
36255\tčajny paketik\t\tm.
4883\tčao!\t\tintj.
2372\tčaplja\t\tf.
2212\tčar\t\tm.
4831\tčaroděj\t\tm.anim.
4830\tčarodějnica\t\tf.
16870\tčarovati\t\tv.intr. ipf.
6802\tčarovnica\t\tf.
6805\tčarovnik\t\tm.anim.
24953\tčarovny\t\tadj.
24954\tčary\t\tm.pl.
4270\tčas\t\tm.
1278\tčasina\t\tf.
33334\tčasom\t\tadv.
17190\tčasoměr\t\tm.
17191\tčasopis\t\tm.
21266\tčasoslov\t\tm.
23639\tčasova zona\t\tf.
17073\tčasovańje\t\tn.sg.
2165\tčasovnik\t\tm.
23640\tčasovy pas\t\tm.
29\tčasovy\t\tadj.
1732\tčaša\t\tf.
24961\tčaška\t\tf.
35294\tčat\tE\tm.
5921\tčečensky\t\tadj.
24964\tčečetka\t\tf.
2312\tČečnja\t\tf.sg.
24942\tčędo\t\tn.
4730\tČeh\t\tm.anim.
2991\tČehija\t\tf.sg.
17193\tčehoslovačsky\t\tadj.
17194\tČehoslovakija\t\tf.sg.
17195\tčehoslovakizm\t\tm.sg.
3497\tček\t\tm.
23319\tčekaljnja\t\tf.
17196\tčekańje\t\tn.sg.
3003\tčekati\t\tv.intr. ipf.
23460\tčelesta\tI\tf.
17197\tčeličny\t\tadj.
17198\tčelik\t\tm.sg.
24967\tčeljaď\t\tf.sg.
6820\tčeljusť\t\tf.
36026\tčelka\t\tf.
24969\tčeľny\t\tadj.
6821\tčelo\t\tn.
24971\tčelo\t\tn.
14491\tčem\t\tconj.
23459\tčembalo\tI\tn.
24973\tčemerica\t\tf.
1705\tčempion\tE\tm.anim.
2492\tčempionat\tE\tm.
1194\tčemu\t\tadv.
4034\tčemu-nebųď\t\tadv.
1753\tčep\t\tm.
24975\tčepec\t\tm.
6825\tčerep\t\tm.
2356\tčerešnja\t\tf.
24985\tčesalo\t\tn.
2227\tčesati\t\tv.tr. ipf.
510\tčesnȯk\t\tm.sg.
1730\tčęsť mȯlvy\t\tf.
24993\tčęsť světa\t\tf.
1731\tčęsť\t\tf.
3033\tčesť\t\tf.
19669\tčęstěje\t\tadv.
6810\tčęsti mȯlvy\t\tf.pl.
6839\tčęstica\t\tf.
6840\tčęstično\t\tadv.
17202\tčestigodny\t\tadj.
32531\tčestiljubivy\t\tadj.
6842\t#čestitati\t\tv.tr. ipf./pf.
5944\tčestiti\t\tv.tr. ipf.
4664\tčęstka\t\tf.
22981\tčestnosť\t\tf.
1551\tčestny\t\tadj.
137\tčęsto\t\tadv.
17208\tčęstota\t\tf.
2273\tčęsty\t\tadj.
36642\tČeška\t\tf.
2417\tčešsky\t\tadj.
16454\tčetveraky\t\tnum.diff.
16427\tčetverčęta\t\tn.pl.
16458\tčetverka\t\tnum.subst.
16441\tčetverny\t\tnum.mult.
16431\tčetvero\t\tnum.coll.
5275\tčetvŕt\t\tm.
6853\tčetvŕtina\t\tnum.fract.
638\tčetvŕtȯk\t\tm.
636\tčetvŕty\t\tnum.ord.
2856\tčetyri\t\tnum.card.
2857\tčetyridesęť, četyridesęti\t\tnum.card.
19668\tčetyridesęty\t\tnum.ord.
16448\tčetyrikråtno\t\tadv.
1180\tčetyrinadsęť\t\tnum.card.
23682\tčetyrinadsęty\t\tnum.ord.
1022\tčetyrista, četyristo\t\tnum.card.
15269\tčetyrivųgȯľnik\t\tm.
15268\tčetyrokųtnik\t\tm.
6254\tči\t\tconj.
14495\tči\t\tparticle
1179\tčij\t\tpron.poss.
19601\tčijkoli\t\tpron.poss.
14496\tčij-libo\t\tpron.poss.
190\tčij-nebųď\t\tpron.poss.
5759\tČile\t\tn.sg.
6867\tČilijec\t\tm.anim.
6868\tČilijka\t\tf.
5760\tčilijsky\t\tadj.
25011\tčim ... tym ...\t\tadv.
17211\tčim raněje\t\tadv.
17212\tčim skorěje\t\tadv.
14497\tčimno\t\tadv.
1594\tčin\t\tm.
6872\tčinitelj\t\tm.
906\tčiniti\t\tv.tr. ipf.
6876\tčinovnica\t\tf.
584\tčinovnik\t\tm.anim.
6880\tčip\tE\tm.
6879\tčips\tE\tm.
25014\tčir\t\tm.
33589\tčir\t\tm.
17214\tčisliti\t\tv.tr. ipf.
25015\tčisľny\t\tadj.
590\tčislo\t\tn.
17215\tčislo\t\tn.
17074\tčislovnik\t\tm.
25018\tčistina\t\tf.
4465\tčistiti\t\tv.tr. ipf.
25020\tčistosť\t\tf.sg.
25021\tčistota\t\tf.sg.
582\tčisty\t\tadj.
4366\tčitaljnja\t\tf.
4363\tčitatelj\t\tm.anim.
35827\tčitateljnik\t\tm.
6885\tčitati\t\tv.tr. ipf.
17216\tčitkody\tE\tm.pl.
25026\tčiž\t\tm.anim.
14499\tčlanȯk\t\tm.
640\tčlen\t\tm.anim.
25028\tčlen\t\tm.
25029\tčlen\t\tm.
32620\tčlenistonogy\t\tm.anim.
598\tčlenȯk\t\tm.
599\tčlenstvo\t\tn.
6261\tčlověčji\t\tadj.
14500\tčlověčnosť\t\tn.sg.
25031\tčlověčny\t\tadj.
25032\tčlověčsky\t\tadj.
600\tčlověčstvo\t\tn.sg.
592\tčlověk\t\tm.anim.
6894\tčlověkoljubec\t\tm.anim.
36604\tčlověkoljubivy\t\tadj.
6893\tčlověkoljubje\t\tn.sg.
6892\tčlověk-pavųk\t\tm.anim.
601\tčmelj\t\tm.anim.
3499\tčokolada\tI\tf.
25037\tčȯln\t\tm.
2959\tčrěda\t\tf.
25040\tčrěmha\t\tf.
5299\tčrěp\t\tm.
25045\tčrěvo\t\tn.
4473\tčrěz\t\tprep.
23336\tčrězměrno\t\tadv.
22983\tčrězměrnosť\t\tf.sg.
22984\tčrězměrny\t\tadj.
4716\tčrka\t\tf.
23508\tčrna dira\t\tf.
1343\tČrna Gora\t\tf.sg.
32943\tčrna vdova\t\tf.
25048\tčrněti\t\tv.intr. ipf.
17219\tčrnica\t\tf.
25049\tčrnica\t\tf.
6906\tčrnik\t\tm.anim.
3695\tčrnilo\t\tn.
25051\tčrniti\t\tv.tr. ipf.
6908\tČrno morje\t\tn.sg.
25052\tčrnobylj\t\tm.
14504\tčrnoględnica\t\tf.
14505\tčrnoględnik\t\tm.anim.
6027\tčrnoględnosť\t\tf.sg.
6026\tčrnoględny\t\tadj.
349\tČrnogorjan, Črnogorjanin\t\tm.anim.
348\tčrnogorsky\t\tadj.
25053\tčrnota\t\tf.
25054\tčrnuška\t\tf.
520\tčrny\t\tadj.
24978\tčrpak\t\tm.
619\tčrpati\t\tv.tr. ipf.
24981\tčrstvěti\t\tv.intr. ipf.
24982\tčrstvy\t\tadj.
24983\tčrt\t\tm.anim.
696\tčrta\t\tf.
3569\tčrtati\t\tv.tr. ipf.
25058\tčrtež\t\tm.
24984\tčrtov\t\tadj.
345\tčrv\t\tm.anim.
25060\tčrvec\t\tm.anim.
19514\tČrvena Armija\t\tf.
33403\tČrvena Kapučka\t\tf.
6914\tčrvene fasolje\t\tf.pl.
6915\tčrvenec\t\tm.anim.
25061\tčrveněti\t\tv.intr. ipf.
6916\tčrvenica\t\tf.
6830\tčrvenj\tS\tm.sg.
23662\tčrvenogrlka\t\tf.
6919\tčrveny krvinȯk\t\tm.
101\tčrveny\t\tadj.
36530\tčrvilo\t\tn.
25066\tčrvivy\t\tadj.
2266\tčrvjak\t\tm.anim.
25068\tčrvotočina\t\tf.
17220\tčtiti\t\tv.tr. ipf.
34620\tčto bolje\t\tadv.
21268\tčto sę tyče\t\tprep.
16762\tčto vyše\t\tadv.
19670\tčto\t\tpron.int.
19602\tčtokoli\t\tpron.indef.
14502\tčto-libo\t\tpron.indef.
1786\tčto-nebųď\t\tpron.indef.
25070\tčub\t\tm.
25071\tčubaty\t\tadj.
25072\tčučati\t\tv.intr. ipf.
4251\tčudak\tI\tm.anim.
23677\tčudesny\t\tadj.
5044\tčuditi sę\t\tv.refl. ipf.
25073\tčuditi\t\tv.tr. ipf.
17231\tčudno\t\tadv.
17232\tčudny\t\tadj.
25074\tčudny\t\tadj.
1184\tčudo\t\tn.
25077\tčudom\t\tadv.
25078\tčudotvorec\t\tm.anim.
19671\tčudovistny\t\tadj.
608\tčudovišče\t\tn.
36098\tčuma\t\tf.
611\tčuti\t\tv.tr. ipf.
6931\tčuťje\t\tn.
6933\tčuťje\t\tn.
6934\tčutlivo\t\tadv.
4165\tčutlivosť\t\tf.sg.
4164\tčutlivy\t\tadj.
25083\tčutny\t\tadj.
17223\tčuvańje\t\tn.sg.
17224\tčuvańje\t\tn.sg.
36570\tČuvašija\t\tf.sg.
4909\tčuvašsky\t\tadj.
17228\tčuvati sę\t\tv.refl. ipf.
17226\tčuvati\t\tv.intr. ipf.
17227\tčuvati\t\tv.intr. ipf.
6938\tčuvstveno\t\tadv.
6939\tčuvstveny\t\tadj.
2896\tčuvstvo\t\tn.
12869\tda by\t\tconj.
2371\tda\t\tintj.
17233\tda\t\tconj.
17234\tda\t\tparticle
25087\tdača\t\tf.
25088\tdadaizm\tI\tm.sg.
25090\tdagerotipija\tI\tf.
3031\tDagestan\t\tm.sg.
6945\tdakle\t\tadv.
25092\tdaktylologija\tI\tf.sg.
25093\tdaktyloskopija\tI\tf.sg.
5219\tdaleko\t\tadv.
35228\tdalekoględ\tS\tm.
17236\tdalekoskok\t\tm.
6950\tDaleky Iztok\t\tm.sg.
4758\tDaleky Vȯzhod\t\tm.sg.
612\tdaleky\t\tadj.
25098\tdaleměr\t\tm.
3566\tdalj\t\tm.
1177\tdalje\t\tadv.
25102\tdaljnji, daljny\t\tadj.
3032\tdaljši\t\tadj.
35907\tDalmatija\t\tf.sg.
35908\tdalmatinsky\t\tadj.
25103\tdaltonist\tI\tm.anim.
25104\tdaltonizm\tI\tm.sg.
17237\tdama\tI\tf.
25105\tdama\tI\tf.
25106\tdama\tI\tf.
34966\tdamast\tI\tm.
3548\tdane\t\tm.pl.
1178\tDanija\t\tf.sg.
5063\tdanina\t\tf.
25111\tdanj\t\tf.
25112\tdannik\t\tm.anim.
14509\tdanȯk\t\tm.
25113\tdansing\tE\tm.
4427\tdansky\t\tadj.
5697\tdany\t\tadj.
36467\tdaoizm\tI\tm.
4520\tdar krve\t\tm.
6960\tdar\t\tm.
17240\tdar\t\tm.
4521\tdaritelj krve\t\tm.anim.
4325\tdaritelj\t\tm.anim.
4324\tdariti\t\tv.tr. ipf.
17241\tdariti\t\t#v.tr.ipf
25122\tdarmojed\t\tm.anim.
36842\tdarmovo\t\tadv.
25123\tdarmovy\t\tadj.
6966\tdarovańje krve\t\tn.
6965\tdarovańje\t\tn.
6970\tdarovati\t\tv.tr. ipf.
17242\tdarovati\t\tv.tr. ipf.
17243\tdarovity\t\tadj.
25127\tdarvinist\tI\tm.anim.
25128\tdarvinizm\tI\tm.sg.
1967\tdata\tI\tf.
1966\tdateljnik, dateljny padež\t\tm.
6973\tdati råbotų\t\tv.pf.
22987\tdati zajem\t\tv.pf.
664\tdati\t\tv.tr. pf.
16930\tdativ\tI\tm.
25133\tdatovati\tI\tv.tr. ipf./pf.
36072\tdatulja\t\tf.
15276\tdaunlodovańje\tE\tn.sg.
15278\tdaunlodovati\tE\tv.tr. ipf.
25134\tdavač\t\tm.anim.
6979\tdavati råbotų\t\tv.ipf.
22986\tdavati zajem\t\tv.ipf.
2898\tdavati\t\tv.tr. ipf.
25136\tdavec\t\tm.anim.
25137\tdaviti\t\tv.tr. ipf.
25139\tdavno\t\tadv.
2861\tdavny\t\tadj.
1982\tdaže\t\tadv.
2623\tdbati\t\tv.intr. ipf.
1236\tdebata\tI\tf.
25144\tdebatovati\tI\tv.intr. ipf.
25146\tdebelěti\t\tv.intr. ipf.
25147\tdebely\t\tadj.
25148\tdebet\tI\tm.
25150\tdebjut\tF\tm.
25151\tdebjutant\tF\tm.anim.
25152\tdebjutovati\tF\tv.intr. ipf./pf.
25153\tdeblokovati\tI\tv.intr. ipf./pf.
25155\tdecembr\t\tm.sg.
25158\tDěd Mråz\t\tm.anim.
1436\tděd\t\tm.anim.
7068\tdědȯk\t\tm.anim.
25161\tdědov\t\tadj.
25162\tdedukcija\tI\tf.
25163\tdeduktivny\tI\tadj.
25164\tdefekt\tI\tm.
2907\tdefenestracija\tI\tf.sg.
25165\tdeficit\tI\tm.
2624\tdefinicija\tI\tf.
4956\tdefiniovati\tI\tv.tr. ipf.
23693\tdefinitivno\tI\tadv.
23692\tdefinitivny\tI\tadj.
288\tdefis\tI\tm.
15281\tdefisovańje\tI\tn.sg.
15282\tdefisovany\tI\tadj.
15280\tdefisovati\tI\tv.tr. ipf.
289\tdeformovati\tI\tv.tr. ipf.
25167\tdegenerat\tI\tm.anim.
25168\tdegenerativny\tI\tadj.
25169\tdegenerovati\tI\tv.intr. ipf./pf.
25170\tdegeť\t\tm.
25171\tdegradacija\tI\tf.
25172\tdegradovati\tI\tv.tr. ipf./pf.
25173\tdegustacija\tI\tf.
25175\tdegustovati\tI\tv.tr. ipf./pf.
25089\tdęgylj\t\tm.
6986\tdějajųći premier-ministr\tI\tm.anim.
36057\tdějańja apostolov\t\tn.pl.
6987\tdějańja\t\tn.pl.
6988\tdějańje\t\tn.
6990\tdějateljnosť\t\tf.sg.
6992\tdějati sę\t\tv.refl. ipf.
6991\tdějati\t\tv.tr. ipf.
33034\tdekadent\tI\tm.anim.
33035\tdekadentsky\tI\tadj.
33036\tdekadentstvo\tI\tn.sg.
751\tdekembr\tI\tm.sg.
35941\tdeklamovati\tI\tv.tr. ipf./pf.
216\tdeklaracija\tI\tf.
35906\tdekolonizacija\tI\tf.sg.
36123\tdekolt\tF\tm.
23170\tdekoracija\tI\tf.
296\tdękovati\t\tv.intr. ipf.
3175\tdekret\tI\tm.
4884\tdękujų\t\tintj.
4899\tdękujųći\t\tprep.
2612\tděl\t\tm.
2613\tděl\t\tm.
3771\tděl\t\tm.
211\tdělati\t\tv.tr. ipf.
25182\tdělba\t\tf.
35170\tdelegacija\tI\tf.
35171\tdelegat\tI\tm.anim.
20361\tdelfin\tI\tm.anim.
25184\tdelfińji\t\tadj.
25185\tdelikatno\tI\tadv.
25186\tdelikatnosť\tI\tf.sg.
19672\tdelikatny\tI\tadj.
15694\tdelikt\tI\tm.
19673\tdeliričny\tI\tadj.
36012\tděliti sę\t\tv.refl. ipf.
1754\tděliti\t\tv.tr. ipf.
3545\tděljeńje\t\tn.
2616\tdělo\t\tn.
17246\tdělo\t\tn.
35514\tdělo\t\tn.
699\tdeminutiv\tI\tm.
760\tdemisija\tI\tf.
35279\tdemografičny\tI\tadj.
35280\tdemografija\tI\tf.sg.
2878\tdemokracija\tI\tf.
2621\tdemokrat\tI\tm.anim.
2622\tdemokratičny\tI\tadj.
772\tdemonstracija\tI\tf.
623\tdemonstrativny\tI\tadj.
6266\tdemonstrovati\tI\tv.tr. ipf.
7016\tdenj oplakyvańja\t\tm.
4053\tdenj poslě dnja\t\tadv.
5199\tdenj rođeńja\t\tm.
1845\tdenj\t\tm.
25194\tdenny\t\tadj.
17264\tdenonočje\t\tn.
25195\tdentist\tI\tm.anim.
36772\tdepartament\tF\tm.
36773\tdepartament\tF\tm.
2487\tdeportacija\tI\tf.
398\tdeportovati\tI\tv.tr. ipf./pf.
17248\tdepresija\tI\tf.
36183\tdepresivny\tI\tadj.
36184\tdeprimovany\tI\tadj.
36182\tdeprimovati\tI\tv.tr. ipf./pf.
36441\tdeprimujųći\tI\tadj.
35469\tdesert\tI\tm.
1517\tdesęť\t\tnum.card.
16437\tdesętero\t\tnum.coll.
2851\tdesętilěťje\t\tn.
7024\tdesętina\t\tnum.fract.
16464\tdesętka\t\tnum.subst.
1515\tdesęty\t\tnum.ord.
276\tdęsna\t\tf.
25202\tdesnica\t\tf.
32169\tdesnorųky\t\tadj.
25203\tdesny\t\tadj.
32478\tdespot\tI\tm.anim.
1516\tdespotičny\tI\tadj.
35734\tdestabilizacija\tI\tf.sg.
35733\tdestabilizovati\tI\tv.tr. ipf./pf.
17250\tdestalinizacija\tI\tf.sg.
79\tdeševy\t\tadj.
2619\tdetalj\tI\tm.
19674\tdetaljevany\tI\tadj.
298\tdětę\t\tn.
35472\tdetektiv\tI\tm.anim.
1308\tdętel\t\tm.anim.
17251\tdętelina\t\tf.
7033\tdětętko\t\tn.
16731\tděti sę\t\tv.refl. ipf.
1191\tděti\t\tv.tr. ipf.
4832\tděti\t\tf.pl.
7035\tdětinsko\t\tadv.
4836\tdětinskosť\t\tf.sg.
4834\tdětinsky\t\tadj.
4833\tdětinstvo\t\tn.sg.
35828\tdetonator\tI\tm.
4835\tdětsky\t\tadj.
25212\tdětstvo\t\tn.sg.
16414\tděva\t\tf.
25213\tDěva\t\tf.
25215\tdevalvacija\tI\tf.
16413\tděvčę\t\tn.
300\tděvčina\t\tf.
5959\tděvėc\t\tm.anim.
299\tděveŕ\t\tm.anim.
2620\tdevęť\t\tnum.card.
2181\tdevęťdesęt\t\tnum.card.
23689\tdevęťdesęty\t\tnum.ord.
16436\tdevętero\t\tnum.coll.
16404\tdevętina\t\tnum.fract.
16463\tdevętka\t\tnum.subst.
886\tdevętnadsęť\t\tnum.card.
23685\tdevętnadsęty\t\tnum.ord.
1298\tdevęťsȯt, devęťsto\t\tnum.card.
1922\tdevęty\t\tnum.ord.
7069\tDěvica Marija\t\tf.sg.
5956\tděvica\t\tf.
5960\tDěvičje Ostrovy\t\tm.pl.
7053\tděvičji\t\tadj.
5958\tděvičstvo\t\tn.sg.
25230\tdeviz\tI\tm.
25231\tděvka\t\tf.
25233\tdevon\tI\tm.
25234\tděvstvo\t\tn.sg.
25238\tdezerter\tI\tm.anim.
25239\tdezertovati\tI\tv.intr. ipf./pf.
25240\tdezinfekcija\tI\tf.sg.
25241\tdezinfikovati\tI\tv.tr. ipf./pf.
19675\tdezinformacija\tI\tf.
25243\tdezinsekcija\tI\tf.sg.
25244\tděža\t\tf.
25246\tdežurny\tF\tadj.
31822\tdežurstvo\tF\tn.
32111\tdiagnostičny\tI\tadj.
35672\tdiagnostika\tI\tf.sg.
32109\tdiagnoza\tI\tf.
35795\tdiagram\tI\tm.
35943\tdiahroničny\tI\tadj.
305\tdiakon\tI\tm.anim.
17252\tdiakritičny znak\tI\tm.
15807\tdialekt\tI\tm.
35942\tdialektičny\t\tadj.
56\tdialog\tI\tm.
17253\tdiamant\tI\tm.
25248\tdiamantovy\tI\tadj.
1591\tdiametr\tI\tm.
34934\tdiapozitiv\tI\tm.
31836\tdiareja\tI\tf.sg.
35243\tdiaspora\tI\tf.
36831\tdiatoničny\tI\tadj.
2975\tdiavȯl\t\tm.anim.
35991\tdiavȯľsko\t\tadv.
35577\tdieta\tI\tf.
16931\tdigitaľny\tI\tadj.
35258\tdigraf\tI\tm.
36132\tdihotomija\tI\tf.
14521\tdiko\t\tadv.
21270\tdikobraz\t\tm.anim.
14522\tdikosť\t\tf.sg.
3182\tdiktator\tI\tm.anim.
23533\tdiktatura\tI\tf.
33140\tdiktovati\tI\tv.tr. ipf./pf.
15296\tdiky labęď\t\tm.anim.
15297\tdiky mak\t\tm.
14520\tdiky\t\tadj.
34846\tdilema\tI\tf.
35622\tdiler\tI\tm.anim.
22995\tdinamičny\tI\tadj.
22996\tdinamika\tI\tf.sg.
34762\tdinamit\tI\tm.sg.
34591\tdinamo\tI\tn.
35873\tdinar\tI\tm.
1735\tdinastija\tI\tf.
32476\tdinozavr\tI\tm.anim.
23534\tdioda\tI\tf.
36634\tdiplodok\tI\tm.
35628\tdiplom\tI\tm.
23535\tdiplomacija, diplomatija\tI\tf.
275\tdiplomat\tI\tm.anim.
382\tdiplomatičny\tI\tadj.
23507\tdira\t\tf.
25467\tdiravy\t\tadj.
739\tdirektiva\tI\tf.
272\tdirektor\tI\tm.anim.
23509\tdirigent\tI\tm.anim.
36034\tdirkovač\t\tm.
6104\tdisciplina\tI\tf.
35739\tdisertacija\tI\tf.
35510\tdiskreditovati\tI\tv.tr. ipf./pf.
36170\tdiskretny\tI\tadj.
32602\tdiskriminacija\tI\tf.sg.
32603\tdiskriminovati\tI\tv.intr. ipf./pf.
2488\tdiskusija\tI\tf.
15818\tdiskusijny\tI\tadj.
301\tdiskutovati\tI\tv.intr. ipf.
35296\tdiskvalifikacija\tI\tf.
35295\tdiskvalifikovati\tI\tv.tr. ipf./pf.
1101\tdisplej\tE\tm.
35944\tdistancevati sę\tI\tv.refl. ipf./pf.
304\tdistribucija\tI\tf.
25252\tdivan\tI\tm.
25253\tdivina\t\tf.sg.
25254\tdiviti\t\tv.tr. ipf.
7063\tdivnějši\t\tadj.
3531\tdivny\t\tadj.
3351\tdivo\t\tn.
14523\tdivo\t\tadv.
14528\tdivosť\t\tf.sg.
14525\tdivy\t\tadj.
36173\tdizajn\tE\tm.
32466\tdizelj\tI\tm.sg.
32467\tdizeľny motor\tI\tm.
2489\tdlånj\t\tf.
25259\tdlåto\t\tn.
7071\tdlja uspěha!\t\tintj.
1557\tdlja\t\tprep.
21271\tdnem\t\tadv.
36885\tDněpr\t\tm.sg.
5288\tdneś\t\tadv.
36886\tDněstr\t\tm.sg.
17256\tdnešnje\t\tadv.
17254\tdnešnji, dnešny\t\tadj.
7077\tdnevnica\t\tf.
17257\tdnevnik\t\tm.
25265\tdnevny\t\tadj.
17259\tdniti sę\t\tv.refl. ipf.
2490\tdno\t\tn.
7082\tdo časa\t\tadv.
7083\tdo dneś\t\tadv.
7085\tdo dolu\t\tadv.
17260\tdo doma\t\tadv.
17261\tdo gory\t\tadv.
4879\tdo viděńja!\t\tintj.
2134\tdo\t\tprep.
17263\tdoba\t\tf.
21272\tdobaviti\t\tv.tr. pf.
21273\tdobavjati\t\tv.tr. ipf.
25269\tdoběgati do\t\tv.intr. ipf.
7105\tDobra noć!\t\tintj.
7091\tdobra volja\t\tf.
25273\tdobrěti\t\tv.intr. ipf.
14291\tdobro informovany\tI\tadj.
7095\tDobro jutro!\t\tintj.
7096\tdobro nastrojeńje\t\tn.
7097\tdobro obdarjeny\t\tadj.
7098\tdobro orųdovany\t\tadj.
15131\tdobro osvědomjeny\t\tadj.
16276\tDobro utro!\t\tintj.
2491\tdobro\t\tadv.
17268\tdobro\t\tn.
19481\tdobrobyt\t\tm.sg.
17273\tdobročinnosť\t\tf.sg.
17275\tdobročinstvo\t\tn.
25274\tdobroděj\t\tm.anim.
4878\tDobrodošli!\t\tintj.
7101\tdobrodušny\t\tadj.
32465\tdobronaměrny\t\tadj.
5870\tdobropoględny\t\tadj.
4410\tdobrosť\t\tf.sg.
25275\tdobrota\t\tf.sg.
25276\tdobrovoljec\t\tm.anim.
17277\tdobrovoljny\t\tadj.
16277\tDobry denj!\t\tintj.
7106\tDobry večer!\t\tintj.
1144\tdobry\t\tadj.
35371\tdobyti ponovno\t\tv.tr. pf.
3192\tdobyti\t\tv.tr. pf.
7110\tdobyti\t\tv.tr. pf.
1145\tdobytȯk\t\tm.
22988\tdobyvatelj\t\tm.anim.
35370\tdobyvati ponovno\t\tv.tr. ipf.
3191\tdobyvati\t\tv.tr. ipf.
7113\tdobyvati\t\tv.tr. ipf.
1084\tdȯćera\t\tf.
7117\tdȯćerka\t\tf.
7119\tdȯćerska ljubȯv\t\tf.
6023\tdȯćersky\t\tadj.
35250\tdȯći\t\tf.
7114\tdočasny\t\tadj.
311\tdodati\t\tv.tr. pf.
7124\tdodati\t\tv.tr. pf.
36195\tdodatno\t\tadv.
36196\tdodatny\t\tadj.
35191\tdodatȯčno\t\tadv.
7126\tdodatȯčny\t\tadj.
4088\tdodatȯk\t\tm.
4089\tdodatȯk\t\tm.
7129\tdodava\t\tf.
1704\tdodavati\t\tv.tr. ipf.
7133\tdodavati\t\tv.tr. ipf.
35706\tdodneś\t\tadv.
35222\tdodo\tI\tm.anim.
25287\tdoganjati\t\tv.tr. ipf.
25285\tdogarjati\t\tv.tr. ipf.
7135\t#doględati\t\tv.tr. ipf.
7138\tdoględěti\t\tv.tr. pf.
25286\tdognati\t\tv.tr. pf.
14534\tdogoditi sę\t\tv.refl. pf.
31826\tdogorěti\t\tv.tr. pf.
5534\tdogovarjati sę\t\tv.refl. ipf.
2899\tdogovarjati\t\tv.tr. ipf.
125\tdogovor\t\tm.
583\tdogovor\t\tm.
4192\tdogovoriti sę\t\tv.refl. pf.
655\tdogovoriti\t\tv.tr. pf.
35158\tdogovorny\t\tadj.
17283\tdȯhnųti\t\tv.intr. pf.
17284\tdohod\t\tm.
5344\tdohoditi\t\tv.intr. ipf.
5345\tdojdti\t\tv.intr. pf.
5347\tdojehati\t\tv.intr. pf.
17285\tdojem\t\tm.
5349\tdojezd\t\tm.
5348\tdoježđati\t\tv.intr. ipf.
1181\tdojiti\t\tv.tr. ipf.
31810\tdok\tI\tm.
2041\tdokaz\t\tm.
7161\tdokazati\t\tv.tr. pf.
25294\tdokazati\t\tv.tr. pf.
7162\tdokazyvati\t\tv.tr. ipf.
19676\tdokladati\t\tv.tr. ipf.
19536\tdokolě\t\tadv.
19539\tdokolě\t\tconj.
17286\tdokonati\t\tv.tr. pf.
7163\tdokonce\t\tadv.
7164\tdokončeńje\t\tn.
15207\tdokončeny\t\tadj.
7165\tdokončiti\t\tv.tr. pf.
17288\tdokonyvati\t\tv.tr. ipf.
2042\tdoktor\tI\tm.anim.
36424\tdoktor\tI\tm.anim.
35807\tdoktorat\tI\tm.
2040\tdoktrina\tI\tf.
7166\tdokųd\t\tadv.
2029\tdokument\tI\tm.
35270\tdokumentacija\tI\tf.sg.
35176\tdokumentaľny film\tI\tm.
35297\tdokumentovati\tI\tv.tr. ipf./pf.
16480\tdol\t\tm.
2933\tdolar\tI\tm.
1593\tdȯlbti\t\tv.tr. ipf.
2030\tdȯlg\t\tm.
20363\tdȯlgo\t\tadv.
19486\tdȯlgočasiti sę\t\tv.refl. ipf.
19485\tdȯlgočasiti\t\tv.tr. ipf.
19482\tdȯlgočaśje\t\tn.sg.
19487\tdȯlgočasnica\t\tf.
19488\tdȯlgočasnik\t\tm.anim.
19490\tdȯlgočasny\t\tadj.
19489\tdȯlgočašeny\t\tadj.
17299\tdȯlgodenstvo\t\tn.
33038\tdȯlgohvosty papugaj\t\tm.anim.
33037\tdȯlgohvosty\t\tadj.
7172\tdȯlgosť žiťja\t\tf.
3406\tdȯlgosť\t\tf.
25308\tdȯlgota\t\tf.
35308\tdȯlgotrajny\t\tadj.
7174\tdȯlgověčnosť\t\tf.sg.
7175\tdȯlgověčny\t\tadj.
17301\tdȯlgoživeny\t\tadj.
17302\tdȯlgoživosť\t\tf.sg.
17303\tdȯlgoživostno råziskyvańje\t\tn.
17304\tdȯlgoživostny\t\tadj.
3051\tdȯlgy\t\tadj.
2883\tdolina\t\tf.
35488\tdoľno oblěčeńje\t\tn.sg.
185\tdoľnolužičsky\t\tadj.
19677\tdoľnosŕbsky\t\tadj.
19678\tdoľny\t\tadj.
20364\tdoložiti\t\tv.tr. pf.
7179\tdȯlžen\t\tadj.
31743\tdȯlžina valy\t\tf.
23656\tdȯlžina vȯlny\t\tf.
23657\tdȯlžina\t\tf.
25312\tdȯlžiti\t\tv.tr. ipf.
25313\tdȯlžnik\t\tm.anim.
3699\tdȯlžnosť\t\tf.
3573\tdȯlžny\t\tadj.
6161\tdȯlžny\t\tadj.
3162\tdom\t\tm.
16825\tdoma\t\tadv.
36433\tdomašnja gospodynja\t\tf.
23194\tdomašnje životno\t\tn.
17311\tdomašnji spor\t\tm.
23195\tdomašnji zvěŕ\t\tm.anim.
17305\tdomašnji, domašny\t\tadj.
7186\tdomče\t\tn.
36356\tdomen\tI\tm.
36357\tdomenno imę\tI\tn.
20365\tdoměška\t\tf.
35172\tdominacija\tI\tf.sg.
36109\tdominanta\tI\tf.
22455\tDominikanska Republika\t\tf.sg.
694\tdominovati\tI\tv.tr. ipf.
17308\tdomněvati\t\tv.tr. ipf.
17310\tdomorodny\t\tadj.
21274\tdomorodny\t\tadj.
25318\tdomosěd\t\tm.anim.
16826\tdomov\t\tadv.
17312\tdomovina\t\tf.
17313\tdomovy arešt\tI\tm.sg.
25319\tdomovy\t\tadj.
20366\tdomysl\t\tm.
20369\tdomysliti sę\t\tv.refl. pf.
20368\tdomysljati sę\t\tv.refl. ipf.
20370\tdomysľny\t\tadj.
3813\tdonesti\t\tv.tr. pf.
4275\tdonositelj\t\tm.anim.
20372\tdonositelj\t\tm.anim.
3691\tdonositi\t\tv.tr. ipf.
7198\tdopis\t\tm.
6065\tdopisnik\t\tm.anim.
6062\tdopisyvańje\t\tn.
6064\tdopisyvatelj\t\tm.anim.
6061\tdopisyvati\t\tv.tr. ipf.
6208\tdopoka ne\t\tconj.
6207\tdopoka\t\tconj.
36242\tdopȯlniteljny\t\tadj.
7204\tdopȯlniti\t\tv.tr. pf.
7206\tdopȯlnjati\t\tv.tr. ipf.
7205\tdopȯlnjeńje\t\tn.
34890\tdopȯlnjeńje\t\tn.
17317\tdopȯlnjeny\t\tadj.
34868\tdopȯlzati\t\tv.intr. ipf.
34869\tdopȯlzti\t\tv.intr. pf.
17320\tdopŕva\t\tadv.
36755\tdopustimy\t\tadj.
7207\tdopustiti\t\tv.tr. pf.
20862\tdopustiti\t\tv.tr. pf.
7208\tdopušćati\t\tv.tr. ipf.
20859\tdopušćati\t\tv.tr. ipf.
7211\tdorastati\t\tv.intr. ipf.
16416\tdoråsti\t\tv.intr. pf.
23050\tdoråstla\t\tf.
7212\tdoråstlosť\t\tf.sg.
15304\tdoråstly\t\tadj.
22992\tdoråstly\t\tm.anim.
7213\tdoråzuměti sę\t\tv.refl. pf.
7214\tdoråzuměvańje\t\tn.sg.
7215\tdoråzuměvati sę\t\tv.refl. ipf.
7216\tdorųčati\t\tv.tr. ipf.
7218\tdorųčiti\t\tv.tr. pf.
17322\tdosada\t\tf.
17326\tdosaditi sę\t\tv.refl. pf.
17325\tdosaditi\t\tv.tr. pf.
21276\tdosaditi\t\tv.tr. pf.
17327\tdosadny\t\tadj.
17328\tdosadny\t\tadj.
21277\tdosadny\t\tadj.
17324\tdosađati sę\t\tv.refl. ipf.
17323\tdosađati\t\tv.tr. ipf.
21275\tdosađati\t\tv.tr. ipf.
7221\tdosęgajemy\t\tadj.
1686\tdosęgati\t\tv.tr. ipf.
5104\tdosęgneńje\t\tn.
1059\tdosęgnųti\t\tv.tr. pf.
7228\tdosęžeńje\t\tn.
7222\tdosęženy\t\tadj.
2039\tdȯska\t\tf.
4208\tdoskonaliti\t\tv.tr. ipf.
4210\tdoskonalosť\t\tf.sg.
4207\tdoskonaly\t\tadj.
17330\tdoslědno\t\tadv.
35162\tdoslědnosť\t\tf.sg.
17331\tdoslědny\t\tadj.
16753\tdoslovno\t\tadv.
16752\tdoslovny\t\tadj.
423\tdosť\t\tadv.
1900\tdostati\t\tv.tr. pf.
7241\tdostati\t\tv.tr. pf.
7242\tdostatȯčno\t\tadv.
7244\tdostatȯčnosť\t\tf.sg.
2510\tdostatȯčny\t\tadj.
3791\tdostatȯk\t\tm.
21716\tdostatȯk\t\tm.
7248\tdostava\t\tf.
2511\tdostavati\t\tv.tr. ipf.
7266\tdostavati\t\tv.tr. ipf.
21715\tdostavati\t\tv.tr. ipf.
7253\tdostavitelj internetnej služby\t\tm.anim.
7251\tdostavitelj\t\tm.anim.
3105\tdostaviti\t\tv.tr. pf.
21727\tdostaviti\t\tv.tr. pf.
20\tdostavjati\t\tv.tr. ipf.
21726\tdostavjati\t\tv.tr. ipf.
23420\tdostavka i popytka\t\tphrase
5577\tdostavka\t\tf.
21853\tdostigati\t\tv.tr. ipf.
21855\tdostigati\t\tv.tr. ipf.
21854\tdostignųti\t\tv.tr. pf.
21856\tdostignųti\t\tv.tr. pf.
21721\tdostojenstvo\t\tn.
21722\tdostojenstvo\t\tn.
21725\tdostojnik\t\tm.anim.
484\tdostojnosť\t\tf.sg.
3057\tdostojny\t\tadj.
3842\tdostojny\t\tadj.
21719\tdostojny\t\tadj.
21720\tdostojny\t\tadj.
17334\tdostųp\t\tm.
6045\tdostųpnosť\t\tf.sg.
3054\tdostųpny\t\tadj.
7258\tdostųpny\t\tadj.
25345\tdosyta\t\tadv.
25344\tdȯščeny\t\tadj.
22119\tdotknųti sę\t\tv.refl. pf.
481\tdotknųti\t\tv.tr. pf.
19622\tdotolě\t\tadv.
465\tdotųd\t\tadv.
22120\tdotykati sę\t\tv.refl. ipf.
1146\tdotykati\t\tv.tr. ipf.
21280\tdovědati sę\t\tv.refl. ipf.
21283\tdověděti sę\t\tv.refl. pf.
36845\tdověriti sę\t\tv.refl. pf.
3844\tdověriti\t\tv.tr. pf.
36844\tdověrjati sę\t\tv.refl. ipf.
3843\tdověrjati\t\tv.tr. ipf.
36843\tdověrjati\t\tv.intr. ipf.
23982\tdověŕje\t\tn.sg.
7271\tdověrjeńje\t\tn.sg.
22325\tdověrny\t\tadj.
35918\tdovesti do/k\t\tv.tr. pf.
7274\tdovezti\t\tv.tr. pf.
22372\tdovnųtra\t\tprep.
22373\tdovnųtra\t\tadv.
3310\tdovod\t\tm.
22249\tdovod\t\tm.
35917\tdovoditi do/k\t\tv.tr. ipf.
7276\tdovoljno\t\tadv.
25348\tdovoljny\t\tadj.
7277\tdovoz\t\tm.
22414\tdovoz\t\tm.
7278\tdovoziti\t\tv.tr. ipf.
7279\tdovoznik\t\tm.anim.
22566\tdovŕšati\t\tv.tr. ipf.
35298\tdovŕšenosť\t\tf.sg.
35289\tdovŕšeny\t\tadj.
22567\tdovŕšiti\t\tv.tr. pf.
14539\tdozad\t\tadv.
22891\tdozor\t\tm.
4115\tdozrěly\t\tadj.
14301\tdozrěno vino\t\tn.
14302\tdozrěny\t\tadj.
4113\tdozrěti\t\tv.intr. pf.
4114\tdozrěvati\t\tv.intr. ipf.
17338\tdozvaljaje sę\t\tphrase
435\tdozvaljati\t\tv.tr. ipf.
7283\tdozvolimy\t\tadj.
414\tdozvoliti\t\tv.tr. pf.
32670\tdozvoljeńje\t\tn.
7287\tdozvoljeny\t\tadj.
1902\tdȯžď\t\tm.
35032\tdȯžďevy črvjak\t\tm.anim.
25352\tdȯžďevy\t\tadj.
7291\tdȯžditi\t\tv.intr. ipf.
25355\tdȯždlivy\t\tadj.
7292\tdȯždnik\t\tm.
4486\tdožiti\t\tv.tr. pf.
3719\tdožitny\t\tadj.
17335\tdoživeti\t\tv.tr. ipf.
17339\tdrabina\t\tf.
419\tdråga\t\tf.
35839\tdrågocěnnosť\t\tf.sg.
23995\tdrågocěnny\t\tadj.
35042\tdrågoukazatelj\t\tm.
432\tdrågy\t\tadj.
36362\tdrågy\t\tadj.
20373\tdrakon\tI\tm.anim.
23694\tdrama\tI\tf.
36340\tdramatično\tI\tadv.
1903\tdramatičny\tI\tadj.
35790\tdramaturgija\tI\tf.
436\tdrapati\t\tv.tr. ipf.
442\tdrapnųti\t\tv.tr. pf.
440\tdrastičny\tI\tadj.
23220\tdražlivy\t\tadj.
25360\tdražniti\t\tv.tr. ipf.
35036\tdråžny znak\t\tm.
35037\tdråžny\t\tadj.
2513\tdrěmati\t\tv.intr. ipf.
31832\tdrěmlivosť\t\tf.sg.
31831\tdrěmlivy\t\tadj.
449\tdrěmnųti\t\tv.intr. pf.
25362\tdrěmota\t\tf.
25363\tdrěn\t\tm.
36112\tdresura\tI\tf.
33986\tdreti grlo\t\tphrase
1529\tdreti\t\tv.tr. ipf.
7307\tdrěvěny dom\t\tm.
23455\tdrěvěny dyhovy instrument\t\tm.
2512\tdrěvěny\t\tadj.
35197\tdrěvny vųgȯlj\t\tm.
7308\tdrěvny\t\tadj.
25368\tdrěvny\t\tadj.
2137\tdrěvo\t\tn.
5292\tdrěvo\t\tn.
7312\tdrěvorěžeńje\t\tn.sg.
17340\tdrěvorųb\t\tm.anim.
7314\tdrgańje\t\tn.sg.
14540\tdrgati\t\tv.intr. ipf.
34661\tdrgnųti\t\tv.intr. pf.
7318\tdŕkańje\t\tn.sg.
4693\tdŕkati\t\tv.intr. ipf.
7319\tdŕkatnik\t\tm.anim.
25371\tdrn\t\tm.
36415\tdrob\t\tm.
25374\tdrobiti\t\tv.tr. ipf.
36062\tdrobjenec\t\tm.
7320\tdrobne\t\tm.pl.
25375\tdrobny\t\tadj.
25376\tdropja\t\tf.
16423\tdrozd\t\tm.anim.
1603\tdrožđe\t\tf.pl.
14542\tdrug\t\tm.anim.
7328\tdrugar\t\tm.anim.
17342\tdrugorędny\t\tadj.
784\tdrugy\t\tnum.ord.
5076\tdrugy\t\tadj.
7331\tdružba\t\tf.
25384\tdružba\t\tm.anim.
25385\tdružica\t\tf.
5882\tdružina\t\tf.
7333\tdružiti sę\t\tv.refl. ipf.
25388\tdružka\t\tf.
7336\tdružny\t\tadj.
25389\tdružny\t\tadj.
7337\tdružstvo\t\tn.
25392\tdrva\t\tn.pl.
17341\tdrvosěk\t\tm.anim.
35027\tdŕzati\t\tv.intr. ipf.
25395\tdŕzky\t\tadj.
25396\tdŕznųti\t\tv.intr. pf.
25397\tdŕzosť\t\tf.sg.
5231\tdŕžak\t\tm.
25398\tdržalo\t\tn.
6185\tdŕžati glådovkų\t\tv.ipf.
17344\tdŕžati sę něčego\t\tv.refl. ipf.
2617\tdŕžati\t\tv.tr. ipf.
25399\tdržati\t\tv.intr. ipf.
1756\tdŕžava\t\tf.
17346\tdŕžavnik\t\tm.anim.
35173\tdŕžavnosť\t\tf.sg.
6268\tdŕžavny\t\tadj.
7343\tdŕžka\t\tf.
451\tdųb\t\tm.
25404\tdųbiti\t\tv.tr. ipf.
7345\tdubliti\tF\tv.tr. ipf.
14544\tdubljeńje\tF\tn.
25405\tdųbovy\t\tadj.
25407\tduda\t\tf.
25408\tdudaŕ\t\tm.anim.
17347\tdudy\t\tf.pl.
36091\tduel\tI\tm.
292\tdųga\t\tf.
434\tduh\t\tm.anim.
17348\tduh\t\tm.
6198\tduhovenstvo\t\tn.sg.
6197\tduhovnik\t\tm.anim.
284\tduhovny\t\tadj.
2520\tdumati\t\tv.tr. ipf.
23532\tDunaj\t\tm.sg.
25416\tdųnųti\t\tv.intr. pf.
1655\tdupa\t\tf.
36513\tdupja\t\tf.
35291\tduplikat\tI\tm.
36512\tduplo\t\tn.
25424\tdurenj\t\tm.anim.
34192\tdurěti\t\tv.intr. ipf.
14546\tdurno\t\tadv.
14547\tdurnosť\t\tf.
2521\tdurny\t\tadj.
34087\tduš\tF\tm.
703\tduša\t\tf.
7357\tdušeńje\t\tn.sg.
17349\tduševny\t\tadj.
2543\tdušiti\t\tv.tr. ipf.
7358\tdušlivy\t\tadj.
7359\tdušny\t\tadj.
683\tdųti\t\tv.tr. ipf.
5233\tduty\t\tadj.
7364\tduzina\t\tf.
14548\tduže\t\tadv.
4459\tduži\t\tadj.
457\tdva\t\tnum.card.
458\tdvadesęť, dvadesęti\t\tnum.card.
19681\tdvadesęty\t\tnum.ord.
2515\tdvanadsęť\t\tnum.card.
23680\tdvanadsęty\t\tnum.ord.
2964\tdvasto\t\tnum.card.
7369\tdvě tretiny\t\tnum.fract.
2929\tdveri\t\tf.pl.
7393\tdveŕnik\t\tm.anim.
23678\tdvěstě\t\tnum.card.
469\tdvigati sę\t\tv.refl. ipf.
468\tdvigati\t\tv.tr. ipf.
471\tdvignųti\t\tv.tr. pf.
3180\tdvižeńje\t\tn.
36092\tdvoboj\t\tm.
16452\tdvojaky\t\tnum.diff.
17355\tdvojce toliko\t\tadv.
16426\tdvojčany\t\tadj.
15306\tdvojčę\t\tn.
7402\tdvojčęta\t\tn.pl.
472\tdvoje\t\tnum.coll.
19682\tdvojina\t\tf.
25443\tdvojiti\t\tv.tr. ipf.
7414\tdvojka\t\tnum.subst.
25445\tdvojka\t\tf.
7415\t#dvojna komnata\t\tf.
17357\tdvojnik\t\tm.anim.
7417\tdvojno\t\tadv.
7412\tdvojny agent\t\tm.anim.
14552\tdvojny standard\t\tm.
476\tdvojny\t\tadj.
15310\tdvojostry meč\t\tm.
15309\tdvojostry\t\tadj.
16492\tdvojstveno čislo\t\tn.
22118\tdvojtočka\t\tf.
5212\tdvor\t\tm.
25452\tdvor\t\tm.
16810\tdvorjan, dvorjanin\t\tm.anim.
16811\tdvorjansky\t\tadj.
7421\tdvorjanstvo\t\tn.sg.
16763\tdvucifreny\t\tadj.
14549\tdvuetapovy\tI\tadj.
14550\tdvuetažny avtobus\tI\tm.
7376\tdvuetažny\tF\tadj.
17358\tdvuglåska\t\tf.
25440\tdvuglåvy\t\tadj.
22994\tdvujęzyčnosť\t\tf.sg.
22993\tdvujęzyčny\t\tadj.
7370\tdvukolesny\t\tadj.
1800\tdvukråtno\t\tadv.
7410\tdvukråtny\t\tadj.
7380\tdvulicevy\t\tadj.
17359\tdvuličny\t\tadj.
7381\tdvumotorovy\t\tadj.
17361\tdvupěv\t\tm.
17362\tdvusmysľnosť\t\tf.
17363\tdvusmysľny\t\tadj.
2882\tdvustrånny\t\tadj.
7371\tdvustųpny\t\tadj.
7389\tdvutonovy\tI\tadj.
25456\tdvuvlasťje\t\tn.sg.
31872\tdvuvyměrny\t\tadj.
17365\tdvuznačnosť\t\tf.
17367\tdvuznačny\t\tadj.
22852\tdvuznačny\t\tadj.
25457\tdvuženec\t\tm.anim.
17364\tdvuženstvo\t\tn.sg.
7057\tdyh\t\tm.
3468\tdyhańje\t\tn.sg.
25459\tdyhati\t\tv.intr. ipf.
25460\tdyhavica\t\tf.sg.
23454\tdyhovy instrument\t\tm.
25461\tdyhtěti\t\tv.intr. ipf.
2027\tdym\t\tm.
5582\tdymiti cigaretojų\t\tv.ipf.
1257\tdymiti\t\tv.intr. ipf.
25463\tdymnik\t\tm.
2310\t#dynja\t\tf.
17368\tdyšati\t\tv.intr. ipf.
35481\tdyšnik\t\tm.
35482\tdyšno grlo\t\tn.
5049\tdžaz\tE\tm.sg.
475\tđban\t\tm.
7426\tđbanȯk\t\tm.
17369\tdžem\tE\tm.
3291\tdžentelmen\tE\tm.anim.
35893\tdžin\tI\tm.
19683\tdžinsy\tE\tm.pl.
31851\tdžoker\tE\tm.anim.
507\tDžordžija\t\tf.sg.
23583\tdžudo\tI\tn.sg.
21286\tdžungla\tI\tf.
36326\tebenovo drěvo\tI\tn.
22074\tedem\tI\tm.
16932\tedukacija\tI\tf.sg.
16933\tedukacijny\tI\tadj.
3580\tefekt\tI\tm.
19684\tefektivnosť\tI\tf.sg.
480\tefektivny\tI\tadj.
19685\tegalitarny\tI\tadj.
36741\tEgejsko morje\tI\tn.
35865\tEgipćan, Egipćanin\t\tm.anim.
4756\tEgipt\t\tm.sg.
4757\tegiptsky\t\tadj.
22393\tegoist\tI\tm.anim.
22394\tegoističny\tI\tadj.
22392\tegoizm\tI\tm.sg.
17370\tegotizm\tI\tm.sg.
3600\tegzistencija\tI\tf.sg.
15832\tegzistovańje\tI\tn.sg.
4087\tegzistovati\tI\tv.intr. ipf.
35789\tegzotičny\tI\tadj.
23998\teho\tI\tn.
14558\tejakulacija\tI\tf.
17558\tejakulat\tI\tm.
14559\tejakulovati\tI\tv.intr. ipf.
5883\tekipa\tF\tn.
2519\tekolog\tI\tm.anim.
35267\tekologičny\t\tadj.
23540\tekologija\tI\tf.sg.
16795\tekonom\tI\tm.anim.
1778\tekonomičny\tI\tadj.
17371\tekonomija\tI\tf.
15834\tekonomika\tI\tf.sg.
7438\tekran\tF\tm.
15836\tekskavator\tI\tm.
26665\tekskavator\t\tm.
2077\tekskluzivny\tI\tadj.
3597\tekskursija\tI\tf.
3582\tekspansija, ekspanzija\tI\tf.sg.
35716\tekspedicija\tI\tf.
4851\teksperiment\tI\tm.
20374\teksperimentaľny\t\tadj.
4852\teksperimentovati\tI\tv.intr. ipf.
1049\tekspert\tI\tm.anim.
5639\teksploatacija\tI\tf.sg.
5638\teksploatovati\tI\tv.tr. ipf.
4802\teksplodovati\tI\tv.intr. ipf.
4797\teksplozija\tI\tf.
4799\teksplozivny\tI\tadj.
35974\teksponencialny\tI\tadj.
4960\teksport\tI\tm.sg.
371\teksportovati\tI\tv.tr. ipf.
25473\teksterier\tF\tm.
25474\tekstragovati\tI\tv.tr. ipf./pf.
35131\tekstrakt\tI\tm.
35128\tekstrapolacija\tI\tf.
16905\tekstremist\tI\tm.anim.
1685\tekstremističny\tI\tadj.
16906\tekstremizm\tI\tm.sg.
35683\tekumeničny\tI\tadj.
22436\tEkvador\t\tm.sg.
22437\tekvadorsky\t\tadj.
34928\tekvator\tI\tm.
35285\tekvivalent\tI\tm.
36133\tekvivalentny\tI\tadj.
23228\telastičnosť\tI\tf.sg.
19686\telastičny\tI\tadj.
21287\telegantny\tI\tadj.
53\telektričnosť\tI\tf.sg.
4444\telektričny\tI\tadj.
23675\telektrifikacija\tI\tf.sg.
36373\telektrik\tI\tm.anim.
23674\telektrokucija\tI\tf.
4660\telektron\tI\tm.
23542\telektronična pošta\tI\tf.sg.
4445\telektroničny\tI\tadj.
2302\telektronika\tI\tf.sg.
35\telektrostancija\tI\tf.
2922\telektrošokovo orųžje\tI\tn.
36374\telektrotehnik\tI\tm.anim.
23541\telektrotehnika\tI\tf.sg.
17372\telement\tI\tm.
35208\telementarny\tI\tadj.
35169\teliminovati\tI\tv.tr. ipf./pf.
17373\telisa\t\tf.
19687\telita\tI\tf.
1314\telizija\tI\tf.sg.
35750\temancipacija\tI\tf.sg.
6082\tembargo\tI\tn.
4957\temigracija\tI\tf.
4963\temigrant\tI\tm.anim.
2213\temigrovati\tI\tv.intr. ipf.
35971\teminencija\tI\tf.
2522\temisija\tI\tf.
5300\temocija\tI\tf.
561\temocionaľny\tI\tadj.
19688\tenciklopedičny\tI\tadj.
19689\tenciklopedija\tI\tf.
33567\tendemičny\tI\tadj.
35673\tenergetičny\tI\tadj.
2936\tenergetika\tI\tf.sg.
35674\tenergičny\tI\tadj.
1909\tenergija\tI\tf.sg.
485\tentitet\tI\tm.
3586\tentuziast\tI\tm.anim.
7448\tentuziastično\tI\tadv.
7449\tentuziastičny\tI\tadj.
7452\tentuziazm\tI\tm.sg.
7451\tentuziazmovati\tI\tv.tr. ipf.
23543\tenzim\tI\tm.
6172\teparhija\tI\tf.
7453\tepicentr zemjetręseńja\tI\tm.
35019\tepicentr\tI\tm.
35919\tepičsky\tI\tadj.
33566\tepidemija\tI\tf.
25475\tepigraf\tI\tm.
6171\tepiskop\tI\tm.anim.
35894\tepiskopaľny\t\tadj.
35603\tepitet\tI\tm.
35581\tepizod\tI\tm.
4698\tepoha\tI\tf.
4497\tera\tI\tf.
6105\terotičny\tI\tadj.
23695\terupcija\tI\tf.
25478\tesej\tF\tm.
15858\teskadron\tI\tm.
35367\teskalacija\tI\tf.
35366\teskalovati\tI\tv.intr. ipf./pf.
486\teskortovati\tI\tv.tr. ipf.
31775\tesperantist\tI\tm.anim.
7456\tesperanto\tI\tn.
7455\tesperantsky\tI\tadj.
35110\testetičny\tI\tadj.
35109\testetika\tI\tf.sg.
488\tEstonija\tI\tf.sg.
4435\testonsky\tI\tadj.
23240\testrada\tI\tf.
33598\testuarij\tI\tm.
23244\tetap\tI\tm.
2524\tetaž\tI\tm.
23545\tetičny\tI\tadj.
23544\tetika\tI\tf.sg.
23696\tetiketa\tI\tf.
4369\tetimologičny\tI\tadj.
4368\tetimologija\tI\tf.sg.
22776\tEtiopija\t\tf.sg.
22777\tetiopsky\t\tadj.
6173\tetnična čistka\tI\tf.
35224\tetničnosť\tI\tf.
1734\tetničny\tI\tadj.
20863\tetnograf\tI\tm.anim.
20864\tetnografija\tI\tf.sg.
5052\tevakuacija\tI\tf.
5053\tevakuovati\tI\tv.tr. ipf.
17376\tevangeľje\tI\tn.
19690\teventuaľno\tI\tadv.
2033\teventuaľny\tI\tadj.
25481\tEvfrat\tI\tm.sg.
23546\tevolucija\tI\tf.sg.
25482\tEvrazija\tI\tf.sg.
946\tevro\t\tn.
1555\tEvropa\t\tf.sg.
3038\tEvropejec\t\tm.anim.
35822\tEvropejka\t\tf.
7467\tEvropejska Unija\t\tf.sg.
1906\tEvropejsky Sȯjųz\t\tm.sg.
1905\tevropejsky, evropsky\t\tadj.
490\tfabrika\tI\tf.
35570\tfabrikant\t\tm.anim.
25487\tfabrikovati\tI\tv.tr. ipf.
23437\tfagot\tI\tm.
34759\tfajka\t\tf.
14562\tfajl\tE\tm.
36201\tfaklja\tG\tf.
5180\tfaks\tI\tm.
2525\tfakt\tI\tm.
35391\tfaktičny\tI\tadj.
16781\tfaktor\tI\tm.
35537\tfaktura\tI\tf.
35167\tfakultativny\tI\tadj.
35530\tfakultet\tI\tm.
35487\tfalsifikacija\tI\tf.
35486\tfalsifikovati\tI\tv.tr. ipf./pf.
5301\tfalšivy\tD\tadj.
768\tfanat\tI\tm.
19691\tfanatično\tI\tadv.
687\tfanatičny\tI\tadj.
23457\tfanfara\tI\tf.
3959\tfantastičny\tI\tadj.
35909\tfantastika\tI\tf.sg.
19692\tfantazija\tI\tf.
25491\tfantom\tI\tm.anim.
32516\tfaraon\tI\tm.anim.
5095\tfarba\tD\tf.
5096\tfarbovati\tD\tv.tr. ipf.
36484\tFarerske ostrovy\t\tm.pl.
36485\tfarersky\t\tadj.
6269\tfarsa\tF\tf.
34923\tfartuh\tD\tm.
31794\tfasada\tF\tf.
23273\tfasolja\t\tf.
5303\tfašist\tI\tm.anim.
35751\tfašističny\tI\tadj.
5302\tfašizm\tI\tm.sg.
31793\tfataľny\tI\tadj.
25493\tfatamorgana\tI\tf.
140\tfaulj\tE\tm.
19693\tfaza\tI\tf.
23470\tfazan\tI\tm.anim.
23246\tfazovańje\tI\tn.sg.
3063\tfederacija\tI\tf.
3013\tfederaľny\tI\tadj.
1320\tfederativny\tI\tadj.
35959\tfehtovańje\tD\tn.sg.
33198\tfejerverk\tD\tm.
23555\tfeminizm\tI\tm.sg.
32719\tfeniks\tI\tm.anim.
19694\tfenomen\tI\tm.
413\tfermer\tI\tm.anim.
2139\tfestival\tI\tm.
34782\tfeudalizm\tI\tm.sg.
34783\tfeudaľny\tI\tadj.
2303\tfevruaŕ\tI\tm.sg.
17377\tfialka\t\tf.
25497\tfiga\tI\tf.
1673\tfigura\tI\tf.
17378\tfikcija\tI\tf.sg.
17379\tfiktivny\tI\tadj.
36605\tfilantrop\tI\tm.anim.
36606\tfilantropičny\tI\tadj.
36607\tfilantropija\tI\tn.sg.
7482\tfilial\tI\tm.
7483\tfiliaľny\tI\tadj.
36487\tfilipinsky\t\tadj.
36486\tFilipiny\t\tf.pl.
36288\tfilm črtany\t\tm.
36287\tfilm rysovany\t\tm.
418\tfilm\tI\tm.
35177\tfilmografija\tI\tf.
495\tfilmovati\tI\tv.tr. ipf./pf.
35344\tfilolog\tI\tm.
35343\tfilologija\tI\tf.sg.
2526\tfilozof\tI\tm.anim.
496\tfilozofija\tI\tf.
36442\tfilozofsky\tI\tadj.
4949\tfiltr\tI\tm.
4950\tfiltrovati\tI\tv.tr. ipf.
17380\tfinancije\tI\tf.pl.
15874\tfinančnik\tI\tm.anim.
2527\tfinansist\tI\tm.anim.
5150\tfinansovati\tI\tv.tr. ipf.
1931\tfinansovy\tI\tadj.
36073\tfinik\t\tm.
35937\tfinitny\tI\tadj.
3028\tFinlandija\t\tf.sg.
4434\tfinsky\t\tadj.
5274\tfioletovy\tI\tadj.
16780\tfirma\tI\tf.
36528\tfiskaľny\tI\tadj.
35490\tfitilj\tT\tm.
3027\tfizičny\tI\tadj.
2498\tfizika\tI\tf.sg.
32498\tfizioterapija\tI\tf.sg.
32499\tfizioterapist\tI\tm.anim.
36087\tfjuzelaž\tF\tm.
20375\tflamingo\tI\tm.anim.
19695\tflavorizacija\tI\tf.
32277\tflegma\tI\tf.sg.
32278\tflegmatičny\tI\tadj.
23434\tflejta\tI\tf.
23465\tflejta-pikolo\tI\tf.
35542\tfleka\tD\tf.
19696\tfleksibiľny\tI\tadj.
25504\tfleksija\tI\tf.
16746\tfleška\tE\tf.
32902\tflirtovati\tI\tv.intr. ipf.
16744\tfljaška\t\tf.
36009\tflomaster\tE\tm.
32384\tflota\tI\tf.
32385\tflotilja\tI\tf.
22604\tfluor\tI\tm.sg.
25506\tfokus\tI\tm.
25507\tfokus\tI\tm.
36784\tfolija\tI\tf.
17382\tfolklor\tE\tm.
35792\tfolklorny\tE\tadj.
34950\tfon\tF\tm.
1016\tfond\tI\tm.
25508\tfonema\tI\tf.
2678\tfonetičny\tI\tadj.
35945\tfonetika\tI\tf.sg.
36416\tfonologičny\tI\tadj.
2499\tfonologija\tI\tf.sg.
36417\tfont\tE\tm.
2001\tforma\tI\tf.
19697\tformalizacija\tI\tf.sg.
19698\tformalizovati\tI\tv.tr. ipf.
35600\tformaľnosť\tI\tf.
20376\tformaľny\tI\tadj.
35048\tformat\tI\tm.
25511\tformovańje\tI\tn.
25512\tformovati\tI\tv.tr. ipf./pf.
5181\tformula\tI\tf.
5182\tformulaŕ\tI\tm.
19699\tformulovati\tI\tv.tr. ipf.
23430\tfortepiano\tI\tn.
2306\tfortifikacija\tI\tf.sg.
3026\tforum\tI\tm.
22611\tfosfor\tI\tm.sg.
34932\tfotka\tI\tf.
4398\tfotografičny\tI\tadj.
807\tfotografija\tI\tf.
4396\tfotografovati\tI\tv.tr. ipf.
19700\tfragment\tI\tm.
19701\tfragmentacija\tI\tf.sg.
36463\tfragmentarny\tI\tadj.
21288\tfrak\t\tm.
1342\tfrakcija\tI\tf.
1188\tFrancija\t\tf.sg.
20377\tFrancuz\t\tm.anim.
19702\tfrancuzskojęzyčny\t\tadj.
1020\tfrancuzsky\t\tadj.
21290\tfrank\tI\tm.
35780\tfranksky\t\tadj.
14563\tfraze\tI\tn.indecl.
17383\tfraznik\tI\tm.
35648\tfreska\tI\tf.
19703\tfreudovsky\t\tadj.
36027\tfrizer\tF\tm.anim.
19704\tfront\tI\tm.
34678\tfrustracija\tI\tf.
34677\tfrustrovany\tI\tadj.
34676\tfrustrovati\tI\tv.tr. ipf./pf.
17384\tfundacija\tI\tf.
19705\tfundament\tI\tm.
23559\tfundamentalističny\tI\tadj.
23558\tfundamentalizm\tI\tm.sg.
2583\tfunikulor\tI\tm.
1289\tfunkcija\tI\tf.
35303\tfunkcionaľny\tI\tadj.
227\tfunkcionovati\tI\tv.intr. ipf.
5723\tfunt\tI\tm.
7499\tfunt\tI\tm.
25518\tfurgon\tF\tm.
2585\tfutbol\tE\tm.sg.
17386\tfutro\t\tn.
35830\tfuzija\tI\tf.
25520\tgabardin\tI\tm.sg.
36178\tgaće\t\tf.pl.
7505\tgad\t\tm.anim.
16477\tgad\t\tm.anim.
25529\tgadati\t\tv.intr. ipf.
7506\tgaďji\t\tadj.
25533\tgaďji\t\tadj.
25530\tgadny\t\tadj.
35157\tgadžet\tE\tm.
2586\tgaj\t\tm.
22438\tGajana\t\tf.sg.
22439\tgajansky\t\tadj.
17387\tgajdy\t\tf.pl.
23564\tgalaktika\t\tf.
25537\tgalanterija\tI\tf.
25539\tgalantny\tF\tadj.
25540\tgalera\tI\tf.
995\tgalerija\tI\tf.
25542\tgaleta\tF\tf.
6174\tGalicija\t\tf.sg.
25543\tgalicizm\tI\tm.
25544\tgalij\tI\tm.sg.
6175\tGalisija\t\tf.sg.
25551\tgalon\tI\tm.
25552\tgalop\tI\tm.
25553\tgalopovati\tI\tv.intr. ipf./pf.
1725\tgalųź\t\tf.
17388\tgalųzka\t\tf.
25557\tgalvanizacija\tI\tf.
25558\tgalvanizm\tI\tm.sg.
25559\tgalvanizovati\tI\tv.intr. ipf./pf.
25547\tgalvanometr\tI\tm.
25560\tgama\tI\tf.
25561\tgamaša\tF\tf.
25562\tgambit\tI\tm.
2587\tGana\t\tf.sg.
25564\tgangrena\tI\tf.
25566\tgangster\tE\tm.anim.
2588\tgansky\t\tadj.
3648\tgarancija\tI\tf.
14565\tgarant\tI\tm.anim.
14567\tgarantovany\tI\tadj.
14568\tgarantovati\tI\tv.tr. ipf.
2589\tgaraž\tF\tm.
25574\tgardenija\tI\tf.
25575\tgarderoba\tF\tf.
33584\tgargulja\t\tf.
25578\tgarnirovati\tF\tv.tr. ipf.
25579\tgarnitura\tF\tf.
2203\tgarnizon\tI\tm.
25583\tgasilo\t\tn.
4232\tgasitelj\t\tm.anim.
25584\tgasiti\t\tv.tr. ipf.
514\tgaslo\t\tn.
2670\tgasnųti\t\tv.intr. ipf.
25586\tgastrit\tI\tm.sg.
25587\tgastronom\tI\tm.anim.
25589\tgaubica\tI\tf.
818\tgavrån\t\tm.anim.
1990\tgaz\t\tm.
25593\tgaza\t\tf.
25594\tgazela\tI\tf.
4064\tgazeta\tI\tf.
36876\tgazna komora\t\tf.
25599\tgazovana voda\t\tf.
25600\tgazovati\tI\tv.tr. ipf./pf.
25601\tgazovati\tI\tv.intr. ipf.
1991\tgazovod\t\tm.
35567\tgej\tE\tm.anim.
36407\tgekon\tI\tm.anim.
34722\tgel\tI\tm.
17390\tgen\tI\tm.
25603\tgeneracija\tI\tf.
1605\tgeneral\tI\tm.anim.
35427\tgeneralizacija\tI\tf.
35424\tgeneralizovati\tI\tv.tr. ipf./pf.
19706\tgeneraľno\tI\tadv.
32061\tgeneraľny sekretaŕ\tI\tm.anim.
1276\tgeneraľny\tI\tadj.
35910\tgenerator\tI\tm.
23993\tgeneričny\tI\tadj.
31890\tgenerovati\tI\tv.tr. ipf./pf.
35554\tgenetičny\tI\tadj.
35808\tgenetika\tI\tf.
19707\tgeneza\tI\tf.
17391\tgeniaľnosť\tI\tf.
17392\tgeniaľny\tI\tadj.
17394\tgenij\tI\tm.anim.
17091\tgenitiv\tI\tm.
5065\tgenocid\tI\tm.
17395\tgenoterapija\tI\tf.
17396\tgenovo ozdravjeńje\tI\tn.sg.
23996\tgeograf\tI\tm.anim.
23997\tgeografičny\tI\tadj.
2382\tgeografija\tI\tf.
23569\tgeolog\tI\tm.anim.
23570\tgeologičny\tI\tadj.
23568\tgeologija\tI\tf.sg.
23571\tgeometrija\tI\tf.
35129\tgeopolitičny\tI\tadj.
32471\tgepard\tI\tm.anim.
21291\tgeranj\tI\tm.
829\tgerb\t\tm.
35813\tgeriatričny\tI\tadj.
35812\tgeriatrija\tI\tf.
25608\tgermanizacija\tI\tf.
4736\tgermansky\t\tadj.
589\tgest\tF\tm.
32127\tgestikulovati\tI\tv.intr. ipf.
2667\tgeto\tI\tn.
33540\tgigabajt\tI\tm.
836\tgigant\tI\tm.anim.
33535\tgigantsky\tI\tadj.
36536\tgimnastika\tI\tf.
23444\tgitara\tI\tf.
1766\tglåd\t\tm.
25616\tgladiti\t\tv.tr. ipf.
25617\tgladiti\t\tv.tr. ipf.
25618\tgladkosť\t\tf.
837\tgladky\t\tadj.
5235\tglådny\t\tadj.
25621\tglådovati\t\tv.intr. ipf.
6186\tglådovka\t\tf.
827\tglågol\t\tm.
35155\tglagolica\t\tf.
35678\tglagoličny, glagoľsky\t\tadj.
5824\tglågoľny vid\t\tm.
2365\tglås\t\tm.
17398\tglås\t\tm.
17400\tglåsiti\t\tv.tr. ipf.
17401\tglåska\t\tf.
35652\tglåsne struny\t\tf.pl.
4545\tglåsnik\t\tm.
7538\tglåsno\t\tadv.
5246\tglåsny\t\tadj.
1336\tglåsovańje\t\tn.
3780\tglåsovatelj\t\tm.anim.
58\tglåsovati\t\tv.intr. ipf.
40\tglåva\t\tf.
3306\tglåva\t\tf.
17403\tglåva\t\tf.
25629\tglåvaŕ\t\tm.anim.
25630\tglåvaty\t\tadj.
25631\tglåvica\t\tf.
7546\tglåvna strånica\t\tf.
4408\tglåvnik\t\tm.anim.
36202\tglåvnja\t\tf.
5852\tglåvno\t\tadv.
3508\tglåvnokomandovač\t\tm.anim.
2012\tglåvny gråd\t\tm.
2671\tglåvny\t\tadj.
14572\tglåvolomka\t\tf.
35578\tględač\t\tm.anim.
7561\tględęći na\t\tprep.
2003\tględěti\t\tv.intr. ipf.
17407\tględišče\t\tn.
25637\tględnųti\t\tv.intr. pf.
25639\tglezenj\t\tm.
7562\tglina\t\tf.
7566\tgliněny\t\tadj.
1765\tglist\t\tm.anim.
35077\tglobalizacija\tI\tf.
35794\tglobalizovati\tI\tv.tr. ipf./pf.
2002\tglobaľno potepljeńje\t\tn.sg.
34758\tglobaľny\tI\tadj.
35899\tglobus\tI\tm.
25645\tglodati\t\tv.tr. ipf.
25646\tglog\t\tm.
36685\tglosarij\tI\tm.
51\tglųb\t\tm.
7571\tglųbina\t\tf.
14573\tglųbinny\t\tadj.
36361\tglųbinny\t\tadj.
19708\tglųboko\t\tadv.
1757\tglųboky\t\tadj.
5867\tglųbši\t\tadj.
36094\tglug-glug\t\tintj.
25656\tgluhnųti\t\tv.intr. ipf.
33005\tgluhoněmy\t\tadj.
25657\tgluhota\t\tf.
33007\tgluhuněmota\t\tf.
1128\tgluhy\t\tadj.
991\tglupec\t\tm.anim.
25661\tglupěti\t\tv.intr. ipf.
7579\tglupo\t\tadv.
7580\tgluposť\t\tf.
1751\tglupy\t\tadj.
25666\tglušiti\t\tv.tr. ipf.
1815\tgnati\t\tv.tr. ipf.
35483\tgněde vųglje\t\tm.pl.
1812\tgnědy\t\tadj.
1305\tgnesti\t\tv.tr. ipf.
110\tgnet\t\tm.sg.
1127\tgněv\t\tm.sg.
7593\tgněvati sę\t\tv.refl. ipf.
2250\tgněvati\t\tv.tr. ipf.
25677\tgněvlivy\t\tadj.
3433\tgněvny\t\tadj.
25680\tgnězditi sę\t\tv.refl. ipf.
35650\tgnězdko\t\tn.
2666\tgnězdo\t\tn.
727\tgnida\t\tf.
25683\tgnilosť\t\tf.
5307\tgnily\t\tadj.
5306\tgniti\t\tv.intr. ipf.
25684\tgniťje\t\tn.sg.
2183\tgnoj\t\tm.
25687\tgnoj\t\tm.
25689\tgnojišče\t\tn.
25692\tgnojiti sę\t\tv.refl. ipf.
25691\tgnojiti\t\tv.tr. ipf.
31893\tgnojivo\t\tn.
36126\tgnom\tI\tm.anim.
25695\tgnusny\t\tadj.
31897\tgnusny\t\tadj.
17411\tgnųti\t\t#v.intr. ipf.
14576\tgo\t\tpron.pers.
3083\tgod\t\tm.
17412\tgodišnica\t\tf.
14578\tgodišnje\t\tadv.
14579\tgodišnji, godišny\t\tadj.
17413\tgoditi sę\t\tv.refl. ipf.
7598\tgodnosť\t\tf.
2584\tgodny\t\tadj.
17415\tgodovati\t\tv.intr. ipf.
14581\tgodovno\t\tadv.
14582\tgodovy\t\tadj.
14583\tgody\t\tm.pl.
25701\tgogolj\t\tm.anim.
25702\tgojiti\t\tv.tr. ipf.
25704\tgolěnj\t\tf.
21292\tgolf\tI\tm.sg.
34141\tgoliti sę\t\tv.refl. ipf.
25707\tgoliti\t\tv.tr. ipf.
25708\tgoliti\t\tv.tr. ipf.
25709\tgȯlk\t\tm.
25710\tgolobrådy\t\tadj.
25712\tgololed\t\tm.sg.
21293\tgoloslovny\t\tadj.
25715\tgolota\t\tf.
7600\tgȯltańje\t\tn.sg.
17418\tgȯltati sȯlzy\t\tv.ipf.
5304\tgȯltati\t\tv.tr. ipf.
25649\tgȯltka\t\tf.
25650\tgȯltnųti\t\tv.tr. pf.
7599\tgȯltȯk\t\tm.
1656\tgolųb\t\tm.anim.
25719\tgolųbica\t\tf.
25718\tgolųbji\t\tadj.
25722\tgoly\t\tadj.
25724\tgon\t\tm.
17419\tgonec\t\tm.anim.
32990\tgong\tI\tm.
17420\tgonišče\t\tn.
17421\t#goniti\t\tv.tr. ipf.
25728\tgonitva\t\tf.
17422\tgonka\t\tf.
17424\tgonščik avtomobiljev\t\tm.anim.
17423\tgonščik\t\tm.anim.
1429\tgora\t\tf.
17425\tgorčica\t\tf.
25732\tgorčiti\t\tv.intr. ipf.
5666\tgȯrdosť\t\tf.
2673\tgȯrdy\t\tadj.
3665\tgoręće\t\tadv.
3666\tgoręći\t\tadj.
3659\tgoręćnja\t\tf.
17427\tgoręčka\t\tf.
17426\tgorělka\t\tf.
401\tgorěti\t\tv.intr. ipf.
25735\tgoricvět\t\tm.
34427\tgorila\tI\tf.
5232\tgoristy\t\tadj.
25730\tgorjan, gorjanin\t\tm.anim.
7607\tgorka\t\tf.
25738\tgoŕknųti\t\tv.intr. ipf.
25739\tgoŕkosť\t\tf.
2381\tgoŕky\t\tadj.
17428\tgorlivy\t\tadj.
32528\tgorlivy\t\tadj.
1376\tgornik\t\tm.anim.
68\tgornolužičsky\t\tadj.
19709\tgornosŕbsky\t\tadj.
36024\tgorsko pasmo\t\tn.
36023\tgorsky lanec\t\tm.
25743\tgorsky\t\tadj.
7619\tgorše\t\tadv.
1985\tgorši\t\tadj.
17430\tgoršiti\t\tv.tr. ipf.
25745\tgospoď\t\tm.anim.
25746\tgospodaŕ\t\tm.anim.
31902\tgospodaŕ\t\tm.anim.
16793\tgospodaŕstvo\t\tn.
16794\tgospodaŕstvo\t\tn.
36197\tgospodica\t\tf.
3290\tgospodin\t\tm.anim.
5258\tgospodynja\t\tf.
25749\tgospođa\t\tf.
1854\tgosť\t\tm.anim.
35029\tgosteprijemny\t\tadj.
35028\tgosteprijemstvo\t\tn.sg.
7627\tgostiljnja\t\tf.
25752\tgostinec\t\tm.
5234\tgostinica\t\tf.
35031\tgostinnosť\t\tf.
35030\tgostinny\t\tadj.
1693\tgostiti\t\tv.tr. ipf.
35927\tgotičsky\t\tadj.
25761\tgotovina\t\tf.
257\tgotoviti\t\tv.tr. ipf.
7631\tgotovo\t\tadv.
2289\tgotovy\t\tadj.
35926\tgotsky\t\tadj.
7634\tgovędina\t\tf.
25765\tgovęďji\t\tadj.
25763\tgovędo\t\tn.
25766\tgovněny\t\tadj.
316\tgovno\t\tn.
2674\tgovor\t\tm.
4544\tgovoritelj\t\tm.anim.
754\tgovoriti\t\tv.tr. ipf.
2676\tgrab\t\tm.
23406\tgraběž\t\tf.
952\tgrabiti\t\tv.tr. ipf.
23399\tgrabiti\t\tv.intr. ipf.
25771\tgrabiti\t\tv.tr. ipf.
25774\tgrabje\t\tf.pl.
671\tgråd\t\tm.
2665\tgrad\t\tm.
25782\tgrådišče\t\tn.
17433\tgrådonačeľnik\t\tm.anim.
17435\tgrådsky\t\tadj.
2905\tgråđan, gråđanin\t\tm.anim.
15698\tgråđan, gråđanin\t\tm.anim.
7660\tgråđanka\t\tf.
7663\tgråđansky\t\tadj.
7653\tgråđanstvo\t\tn.sg.
7654\tgråđanstvo\t\tn.sg.
36779\tgrafična karta\tI\tf.
35684\tgrafičny\tI\tadj.
17436\tgrafitka\tI\tf.
2545\tgråh\t\tm.
25789\tgråhovy\t\tadj.
23015\tgram\tI\tm.
6328\tgramatičny\tI\tadj.
1831\tgramatika\tI\tf.
33087\tgramofon\tI\tm.
33210\tgramota\t\tf.
33207\tgramotnosť\t\tf.
33208\tgramotnosť\t\tf.
33205\tgramotny\t\tadj.
33206\tgramotny\t\tadj.
36279\tgranat\tI\tm.
36281\tgranata\tI\tf.
36280\tgranatno jablȯko\t\tn.
1265\tgranatomet\t\tm.
1264\tgranica\t\tf.
25793\tgraničiti\t\tv.intr. ipf.
23999\tgranit\tI\tm.sg.
35793\tgrant\tE\tm.
2668\tgravirovati\tI\tv.tr. ipf.
23572\tgravitacija\tI\tf.
2347\tgrb\t\tm.
23891\tgrbač\t\tm.anim.
16407\tgrbaty\t\tadj.
25798\tgrbiti sę\t\tv.refl. ipf.
5665\tgrditi\t\tv.tr. ipf.
1920\tgrebenj\t\tm.
738\tgrebti\t\tv.tr. ipf.
25802\tgrebti\t\tv.tr. ipf.
33926\tgrebti\t\tv.tr. ipf.
2675\tGrecija\t\tf.sg.
3474\tgreča\t\tf.
3183\tgrečsky\t\tadj.
1750\tgrěh\t\tm.
36068\tgrejpfrut\tE\tm.
20378\tGrek\t\tm.anim.
782\tgreměti\t\tv.intr. ipf.
3181\tgremųća zmija\t\tf.
36482\tGrenlandija\t\tf.sg.
36483\tgrenlandsky\t\tadj.
2010\tgrěšiti\t\tv.intr. ipf.
17438\tgrěšiti\t\tv.intr. ipf.
17441\tgrěška\t\tf.
7680\tgrěšnica\t\tf.
2625\tgrěšnik\t\tm.anim.
25813\tgrěšny\t\tadj.
1882\tgrěti\t\tv.tr. ipf.
25815\tgręź\t\tf.
2544\tgręznųti\t\tv.intr. ipf.
673\tgrib\t\tm.
20379\tgrifon\tI\tm.anim.
23422\tgril\tF\tm.
4271\tgrip\tI\tm.sg.
4272\tgripovy\tI\tadj.
674\tgriva\t\tf.
722\tgrivna\t\tf.
25821\tgrivna\t\tf.
25822\tgrlica\t\tf.
492\tgrlo\t\tn.
5272\tgrn\t\tm.
25826\tgrnčaŕ\t\tm.anim.
35192\tgrnčaŕstvo\t\tn.sg.
2282\tgrnec\t\tm.
69\tgrnųti\t\tv.tr. ipf.
688\tgrob\t\tm.
3506\tgrob\t\tm.
4138\tgrobaŕ\t\tm.anim.
17442\tgrobišče\t\tn.
7693\tgrobokopatelj\t\tm.anim.
25837\tgrohtati\t\tv.intr. ipf.
2990\tgrom\t\tm.
6327\tgromada\t\tf.
25839\tgromada\t\tf.
17443\tgromaditi\t\tv.tr. ipf.
676\tgronostaj\t\tm.anim.
17444\tgroš\t\tm.
2567\tgroši\tD\tm.pl.
19710\tgroteskovy\tI\tadj.
690\tgroza\t\tf.
1885\tgroźba\t\tf.
25849\tgrozď\t\tm.
36079\tgrozdinka\t\tf.
25846\tgrozďje\t\tn.
2568\tgroziti\t\tv.intr. ipf.
691\tgrozny\t\tadj.
7701\tgrozny\t\tadj.
1930\tgrsť\t\tf.
1927\tgrtanj\t\tf.
25855\tgrubosť\t\tf.
680\tGruby Nacionaľny Produkt [GNP]\t\tm.sg.
36063\tgruby pěsȯk\t\tm.
1736\tgruby\t\tadj.
17445\tgrųď\t\tf.
2611\tgruda\t\tf.
25860\tgrųdny\t\tadj.
1787\tgrupa\tI\tf.
3950\tgrupovati\tI\tv.tr. ipf.
16935\tgrupovy\tI\tadj.
2569\tgrupy\tI\tf.pl.
2570\tgruša\tI\tf.
25863\tgruševy\t\tadj.
698\tGruzija\t\tf.sg.
1040\tgruzinsky\t\tadj.
7688\tgryzati\t\tv.tr. ipf.
668\tgryzti\t\tv.tr. ipf.
2171\tgųba\t\tf.
7712\tgųba\t\tf.
32332\tgubernator\tI\tm.anim.
13416\tgubi sę!\t\tintj.
36652\tgubiti sę\t\tv.refl. ipf.
36253\tgubiti tęžinų\t\tv.intr. ipf.
17447\tgubiti\t\tv.tr. ipf.
25871\tgubiti\t\tv.tr. ipf.
17446\tgųbka\t\tf.
5281\tguma\t\tf.
1752\tgumno\t\tn.
2571\tgųś\t\tm.anim.
36100\tgųsak\t\tm.anim.
25882\tgųsę\t\tn.
429\tgųsenica\t\tf.
25883\tgųśji\t\tadj.
14591\tgųslaŕ\t\tm.anim.
7715\tgųsli\t\tm.pl.
16469\tgųsljaŕ\t\tm.anim.
16468\tgųslje\t\tf.pl.
25888\tgųstěti\t\tv.intr. ipf.
25890\tgųstiti\t\tv.tr. ipf.
25899\tgųsťje\t\tn.
25892\tgųsto\t\tadv.
25893\tgųstosť\t\tf.
25894\tgųstota\t\tf.
5308\tgųsty\t\tadj.
25896\tgųšća\t\tf.
22384\tGvatemala\t\tf.sg.
22385\tgvatemaľsky\t\tadj.
16782\tGvineja\t\tf.sg.
2574\tgvozď\t\tm.
2912\tgybati\t\tv.intr. ipf.
35205\tgybkosť\t\tf.
17397\tgybky\t\tadj.
2917\tgybnųti\t\tv.intr. pf.
25904\tha!\t\tintj.
25525\thaček\t\tm.
22456\tHaiti\t\tm.indecl.
22457\thaitiansky\t\tadj.
31874\thak\t\tm.
25910\thalucinacija\tI\tf.
25911\thalucinovati\tI\tv.intr. ipf.
25912\thalupa\t\tf.
3651\thalva\tI\tf.
25913\thamak\tI\tm.
35190\thamburger\tD\tm.
35823\thameleon\tI\tm.anim.
25914\thandbol\tE\tm.sg.
25915\thantelj\tI\tf.
33502\thaos\tI\tm.
33504\thaotično\tI\tadv.
33503\thaotičny\tI\tadj.
3184\tharakter\tI\tm.
16936\tharakterističny\tI\tadj.
1763\tharakteristika\tI\tf.
16937\tharakterizovati\tI\tv.tr. ipf.
25921\tharem\tI\tm.
23445\tharfa\tI\tf.
25922\tharmoničny\tI\tadj.
3656\tharmonija\tI\tf.
25924\tharmonika\tI\tf.
7724\tharmonizovati\tI\tv.intr. ipf.
25928\tharpun\tI\tm.
3012\tharta\tI\tf.
23199\thašiš\tI\tm.sg.
7727\thata\t\tf.
25930\thazard\tF\tm.
25931\thazardna igra\t\tf.
19711\thebrejsky\t\tadj.
16938\thegemonija\tI\tf.
35359\thej\t\tintj.
23408\theker\tE\tm.anim.
25905\thektar [ha]\tI\tm.
23020\thektolitr\tI\tm.
23023\thektometr\tI\tm.
22598\thelij\tI\tm.sg.
25933\thelikopter\tI\tm.
14592\thelma\tD\tf.
4663\themičny\tI\tadj.
2573\themija\tI\tf.
2572\themikalija\tI\tf.
7743\thepa\tI\tf.
7744\thepatit\tI\tm.sg.
7745\thepovy\tI\tadj.
2575\theroin\tI\tm.sg.
7747\theroina\tI\tf.
3185\theroj\tI\tm.anim.
32180\therpes\tI\tm.sg.
19712\theterogennosť\tI\tf.
20380\theterogenny\tI\tadj.
32804\thiacint\tI\tm.
4864\thidravličny\tI\tadj.
20381\thiena\t\tf.
25936\thierarh\tI\tm.anim.
25937\thierarhičny\tI\tadj.
19714\thierarhija\tI\tf.
25940\thieroglif\tI\tm.
25941\thieroglifny\tI\tadj.
35188\thigiena\tI\tf.
35189\thigieničny\tI\tadj.
33365\thihot\t\tm.sg.
33364\thihotati sę\t\tv.refl. ipf.
7748\thimera\tI\tf.
7750\thimersky\tI\tadj.
4865\thimn\tI\tm.
23574\thinduizm\tI\tm.sg.
4548\thiperlink\tI\tm.
17448\thipersvęź\t\tf.
19715\thipnotizovati\tI\tv.tr. ipf.
19716\thipnoza\tI\tf.
20382\thipopotam\tI\tm.anim.
34999\thipoteka\tI\tf.
19518\thipotetičny\tI\tadj.
19517\thipoteza\tI\tf.
17449\thirugičny\tI\tadj.
17450\thirugija\tI\tf.
17451\thirurg\tI\tm.anim.
36829\thisteričny\tI\tadj.
36828\thisterija\tI\tf.sg.
16466\thistoričny\tI\tadj.
2496\thistorija\tI\tf.
34889\thistorik\tI\tm.anim.
2576\thlåd\t\tm.
25951\thlåděti\t\tv.intr. ipf.
5276\thlådiľnik\t\tm.
17456\thlåditi sę\t\tv.refl. ipf.
17454\thlåditi\t\tv.tr. ipf.
7759\thlådnějši\t\tadj.
4466\thlådno\t\tadv.
4617\thlådnosť\t\tf.
2579\thlådny\t\tadj.
17453\thlåđeńje\t\tn.sg.
1109\thlåpčik\t\tm.anim.
3335\thlåpec\t\tm.anim.
4338\thlåpstvo\t\tn.sg.
89\thlěb\t\tm.
90\thlěv\t\tm.
17457\thlipati\t\tv.intr. ipf.
17458\thlipnųti\t\tv.intr. pf.
22613\thlor\tI\tm.sg.
33719\thloroform\tI\tm.sg.
2578\thmelj\t\tm.sg.
25975\thmeljny\t\tadj.
32815\thmuriti sę\t\tv.refl. ipf.
32816\thmuriti sę\t\tv.refl. ipf.
32814\thmuriti\t\tv.tr. ipf.
23575\thobi\tE\tm.indecl.
35271\thobist\t\tm.anim.
25979\thobot\t\tm.
3742\thod\t\tm.sg.
3845\thoďba\t\tf.
25982\thodec\t\tm.anim.
7784\thoditelj\t\tm.anim.
17461\thoditeljka\t\tf.
2590\thoditi\t\tv.intr. ipf.
7782\thodnik\t\tm.
25984\thodulja\t\tf.
7780\thođeńje\t\tn.sg.
5802\thokej na ledu\tE\tm.sg.
5801\thokej\tE\tm.sg.
35740\tHolandija\t\tf.sg.
35741\tholandsky\t\tadj.
35099\tholera\tI\tf.
17462\tholesterol\tI\tm.sg.
544\thȯlm\t\tm.
20384\thomjak\t\tm.anim.
23412\thomogenizovati\tI\tv.tr. ipf.
19717\thomogennosť\tI\tf.
19718\thomogenny\tI\tadj.
17463\thomonim\tI\tm.
35566\thomoseksualist\tI\tm.anim.
1511\thomoseksuaľny\tI\tadj.
2582\thomųt\t\tm.
22386\tHonduras\t\tm.sg.
22387\thondurassky\t\tadj.
23449\thor\tI\tm.
32504\thoreografija\tI\tf.
19719\thorizont\tI\tm.
19720\thorizontaľny\tI\tadj.
23011\thoroskop\tI\tm.
706\thorųgva\t\tf.
25997\thoť by\t\tadv.
2581\thoť, hoti\t\tconj.
35268\thotel\tI\tm.
2971\thotěti\t\tv.aux. ipf.
1828\thovati\t\tv.tr. ipf.
25999\thråbrec\t\tm.anim.
4611\thråbrosť\t\tf.
2607\thråbry\t\tadj.
4890\thram\t\tm.
26006\thrånitelj\t\tm.anim.
36791\thråniti sę\t\tv.refl. ipf.
19721\thråniti\t\tv.tr. ipf.
17464\thrånjenec\t\tm.anim.
17466\thrapati\t\tv.intr. ipf.
1639\thråpavy\t\tadj.
17467\thrapnųti\t\tv.intr. pf.
26013\thrčati\t\tv.intr. ipf.
20385\thrček\t\tm.anim.
841\threbet\t\tm.
1928\threbet\t\tm.
67\threbetny mozȯk\t\tm.
26012\threbetny\t\tadj.
3114\thrěn\t\tm.
26015\thrěnovy\t\tadj.
35996\thrěnviršla\t\tf.
35826\threstomatija\tI\tf.
26010\thręšč\t\tm.
35456\thriply\t\tadj.
302\thristijan, hristijanin\tI\tm.anim.
17468\thristijanizacija\tI\tf.
17470\thristijanka\tI\tf.
2606\thristijansky\tI\tadj.
1640\thristijanstvo\tI\tn.sg.
17471\tHristos\tI\tm.anim.
22620\throm\tI\tm.sg.
26018\thromati\t\tv.intr. ipf.
36830\thromatičny\tI\tadj.
34408\throměti\t\tv.intr. ipf.
26019\thromosť\t\tf.
26021\thromy\t\tadj.
35718\thronika\tI\tf.
35774\thronikaŕ\tI\tm.anim.
35398\thronologičny\tI\tadj.
35397\thronologija\tI\tf.
2577\thrt\t\tm.anim.
26024\thrupati\t\tv.intr. ipf.
31916\thrupkavy\t\tadj.
1245\thrust\t\tm.
26026\thrustati\t\tv.intr. ipf.
26028\thrųšč\t\tm.anim.
4727\tHrvat\t\tm.anim.
2580\tHrvatija\t\tf.sg.
4728\thrvatsky\t\tadj.
7739\thtěti\t\tv.aux. ipf.
26030\thtivy\t\tadj.
36251\thudnųti\t\tv.intr. ipf.
17472\thųdožnica\t\tf.
14594\thųdožnik\t\tm.anim.
17473\thųdožno\t\tadv.
14595\thųdožny\t\tadj.
17474\thųdožstvo\t\tn.
26033\thudy\t\tadj.
2064\thuj\t\tm.
14596\thujesȯs\t\tm.anim.
6226\thuligan\tE\tm.anim.
35744\thumanističny\tI\tadj.
2592\thumanitarny\tI\tadj.
35743\thumanizm\tI\tm.sg.
3668\thumor\tI\tm.
19722\thumorističny\tI\tadj.
19495\thunta\tI\tf.
35656\thura\t\tintj.
35837\thusit\t\tm.anim.
14598\tHvala!\t\tintj.
2593\thvala\t\tf.
7828\thvala\t\tprep.
26041\thvalebny\t\tadj.
2890\thvaliti\t\tv.tr. ipf.
17477\thvastati sę\t\tv.refl. ipf.
35476\thvat\t\tm.
2591\thvatati\t\tv.tr. ipf.
34776\thvějati sę\t\tv.refl. ipf.
708\thvějati\t\tv.tr. ipf.
20865\thvějati\t\tv.tr. ipf.
7835\thvilja nazad\t\tadv.
7836\thvilja tomu\t\tadv.
3846\thvilja\t\tf.
17482\thvoja\t\tf.
26045\thvoja\t\tf.
36260\thvojny lěs\t\tm.
26047\thvorěti\t\tv.intr. ipf.
17483\thvoroba sŕdca\t\tf.
3543\thvoroba\t\tf.
7840\thvoroblivo\t\tadv.
36691\thvoroblivy\t\tadj.
3541\thvory\t\tadj.
17484\thvost\t\tm.
26051\thvošč\t\tm.
26052\thyba\t\tf.
26053\thybiti\t\tv.intr. ipf.
10362\thybny\t\tadj.
7751\thytrec\t\tm.anim.
15329\thytrica\t\tf.
7752\thytro\t\tadv.
7753\thytrosť\t\tf.
17452\thytry\t\tadj.
36224\ti ... i ...\t\tconj.
36223\tI slěpa veverica poněkȯgda najde orěh\t\tphrase
36343\ti t.d.\t\tadv.
36341\ti tako dalje\t\tadv.
718\ti\t\tconj.
26056\tibis\tI\tm.anim.
3457\tibo\t\tconj.
206\tideal\tI\tm.
26058\tidealist\t\tm.anim.
26059\tidealističny\t\tadj.
26060\tidealizacija\t\tf.
26061\tidealizm\t\tm.sg.
26062\tidealizovati\tI\tv.tr. ipf./pf.
2595\tideaľny\tI\tadj.
3372\tideja\tI\tf.
12913\tidentični blizneci\t\tm.pl.
35748\tidentičnosť\tI\tf.
2597\tidentičny\tI\tadj.
16421\tidentifikacija\tI\tf.
35274\tidentifikator\tI\tm.
15906\tidentifikovati\tI\tv.tr. ipf.
19723\tidentitet\tI\tm.sg.
26069\tideografija\tI\tf.
2103\tideolog\tI\tm.anim.
23576\tideologičny\tI\tadj.
715\tideologija\tI\tf.
26073\tidila\tI\tf.
26074\tidiličny\tI\tadj.
26075\tidiom\tI\tm.
36363\tidiomatičny\tI\tadj.
23229\tidiot\tI\tm.anim.
26077\tidiotizm\tI\tm.
23230\tidiotsky\tI\tadj.
26078\tidol\tI\tm.anim.
26079\tidolopoklonnik\t\tm.anim.
13823\tidti vprěd\t\tv.ipf.
15654\tidti vzad\t\tv.ipf.
2104\tidti\t\tv.intr. ipf.
2105\tigla\t\tf.
36259\tiglasty lěs\t\tm.
36258\tiglasty\t\tadj.
26082\tiglica\t\tf.
26083\tiglu\tI\tn.indecl.
26084\tignorovańje\tI\tn.sg.
2596\tignorovati\tI\tv.tr. ipf.
26086\tigo\t\tn.
2598\tigra\t\tf.
19724\tigrač\t\tm.anim.
19725\tigračka\t\tf.
22390\tigračka\t\tf.
16940\tigrašna karta\t\tf.
2599\tigrati\t\tv.tr. ipf.
26094\tigrek\tF\tm.
2600\tigrišče\t\tn.
26096\tigrivy\t\tadj.
26097\tiguana\tI\tf.
26098\tigumen\t\tm.anim.
26099\tigumenja\t\tf.
26100\tikati\t\tv.intr. ipf.
26101\tikava\t\tf.
303\tikra\t\tf.
3504\til\t\tm.sg.
766\tili ... ili ...\t\tconj.
724\tili\t\tconj.
36561\tIlinojs\t\tm.sg.
1504\tIlir\t\tm.anim.
26106\tiljm\t\tm.
26107\tilovy\t\tadj.
35300\tilustracija\tI\tf.
19726\tilustrovati\tI\tv.tr. ipf.
35602\tiluzija\tI\tf.
34849\tiluzionist\tI\tm.anim.
26108\tiluzorny\tI\tadj.
36882\timajmo nadějų\t\tadv.
16340\timę\t\tn.
16342\timę\t\tn.
5975\timeniteljnik, imeniteljny padež\t\tm.
874\timěńje\t\tn.
786\timennik\t\tm.
3745\timennik\t\tm.anim.
17486\timenno\t\tadv.
3486\timenovati\t\tv.tr. ipf.
3325\timěti dělo s\t\tv.ipf.
36890\timěti na myslji\t\tv.tr. ipf.
36928\timěti na umu\t\tv.tr. ipf.
17485\timěti nadějų\t\tv.ipf.
33179\timěti njuh za něčto\t\tphrase
876\timěti pravdų\t\tv.ipf.
36402\timěti smysl\t\tv. ipf.
23339\timěti važnosť\t\tv.intr. ipf.
23340\timěti značeńje\t\tv.intr. ipf.
3847\timěti žalj\t\tv.ipf.
417\timěti, imati\t\tv.aux. ipf.
875\timěti, imati\t\tv.tr. ipf.
4958\timigracija\tI\tf.
98\timigrant\tI\tm.anim.
4959\timigrovati\tI\tv.intr. ipf.
36437\timitacija\tI\tf.
36438\timitovati\tI\tv.tr. ipf./pf.
896\timperator\tI\tm.anim.
2630\timperatorica\tI\tf.
16942\timperfekt\tI\tm.sg.
23852\timperializm\tI\tm.sg.
35710\timperija\tI\tf.
35953\timplantovati\tI\tv.tr. ipf./pf.
23846\timponovati\tI\tv.tr. ipf.
23847\timponujųći\tI\tadj.
4961\timport\tI\tm.sg.
4962\timportovati\tI\tv.tr. ipf.
36856\timpotencija\t\tf.
36857\timpotentny\t\tadj.
23848\timprovizacija\tI\tf.
16943\timprovizovati\tI\tv.intr. ipf.
1206\timpuls\tI\tm.
23850\timpulsivny\tI\tadj.
17487\timųći\t\tadj.
35814\timunitet\tI\tm.sg.
35815\timunny\tI\tadj.
17488\timųtȯk\t\tm.
3764\tinače\t\tadv.
7904\tinako\t\tadv.
7905\tinaky\t\tadj.
19572\tinamo\t\tadv.
19727\tinavguraľny\tI\tadj.
35035\tincest\tI\tm.sg.
4914\tincident\tI\tm.
2631\tinde\t\tadv.
16783\tindeks\tI\tm.
26122\tindigo\tI\tn.
1068\tIndija\t\tf.sg.
6405\tIndijan, Indijanin\t\tm.anim.
6406\tIndijanka\t\tf.
6408\tindijansky\t\tadj.
36364\tIndijec\t\tm.anim.
36365\tIndijka\t\tf.
23498\tIndijsky okean\t\tm.sg.
4749\tindijsky\t\tadj.
15915\tindivid\tI\tm.anim.
26123\tindividuaľnosť\tI\tf.
5138\tindividuaľny\tI\tadj.
2634\tindoarijsky\t\tadj.
897\tindoevropejsky\t\tadj.
1667\tindoiransky\t\tadj.
6106\tIndonezija\t\tf.sg.
19728\tindonezsky\t\tadj.
35180\tindustriaľny\tI\tadj.
23474\tindyk\t\tm.anim.
36823\tinercija\tI\tf.
2006\tinfekcija\tI\tf.
521\tinfinitiv\tI\tm.
16784\tinflacija\tI\tf.
769\tinformacija\tI\tf.
7895\tinformant\tI\tm.anim.
36448\tinformatik\tI\tm.anim.
36447\tinformatika\tI\tf.sg.
19729\tinformativny\tI\tadj.
862\tinformovany\tI\tadj.
863\tinformovati\tI\tv.tr. ipf.
23579\tinfračrveno světlo\tI\tn.
35756\tinfračrveny\t\tadj.
16364\tinfrastruktura\tI\tf.
35558\tingredient\tI\tm.
209\tInguš\t\tm.anim.
1783\tIngušetija\t\tf.sg.
1300\tingušsky\t\tadj.
32377\tinicializacija\tI\tf.
32376\tinicializovati\tI\tv.tr. ipf./pf.
5309\tiniciativa\tI\tf.
26125\tinje\t\tn.
26128\tinjekcija\tI\tf.
33250\tinkubator\tI\tm.
1319\tinočij\t\tpron.poss.
307\tinočto\t\tpron.indef.
2633\tinȯgda, inȯgdy\t\tadv.
26129\tinohod\t\tm.sg.
155\tinokto\t\tpron.indef.
19594\tinoliky\t\tadj.
35275\tinoplanetjan, inoplanetjanin\t\tm.anim.
5855\tinoskazańje\t\tn.
21873\tinostrånec\t\tm.anim.
35685\tinovacija\tI\tf.
35753\tinovativny\tI\tadj.
7912\tinovrěmenno\t\tadv.
7913\tinozemec\t\tm.anim.
7914\tinozemny\t\tadj.
17490\tinsekt\tI\tm.anim.
35897\tinspiracija\tI\tf.
35896\tinspirovati\tI\tv.tr. ipf./pf.
2495\tinstalacija\tI\tf.
4968\tinstalovati\tI\tv.tr. ipf.
32805\tinstinkt\tI\tm.
19730\tinstitucija\tI\tf.
26131\tinstitut\tI\tm.
11062\tinstruktor\t\tm.anim.
15478\tinstruktorka\t\tf.
2858\tinstrument\tI\tm.
16944\tinstrumental\tI\tm.
4789\tinstrumentaľny\tI\tadj.
34947\tintegracija\tI\tf.
36084\tintegritet\tI\tm.
34946\tintegrovati\tI\tv.tr. ipf./pf.
3174\tintelektual\tI\tm.anim.
19731\tintelektuaľny\tI\tadj.
36332\tintensivnosť\tI\tf.
2859\tintensivny\tI\tadj.
34853\tinterakcija\tI\tf.
34852\tinteraktivny\tI\tadj.
1330\tinteres\tI\tm.
19732\tinteresno\tI\tadv.
2500\tinteresny\tI\tadj.
15928\tinteresovati sę\tI\tv.refl. ipf.
34992\tinteresovati\tI\tv.tr. ipf.
7916\tinterfejs\tI\tm.
36231\tinterier\tF\tm.
36232\tinterierny dizajn\tI\tm.
31778\tinterlingvist\tI\tm.anim.
31777\tinterlingvističny\tI\tadj.
31776\tinterlingvistika\tI\tf.
31779\tinternacionalizm\tI\tm.sg.
3177\tinternacionalizovati\tI\tv.tr. ipf.
17491\tinternet\tI\tm.sg.
35278\tinternetny\tI\tadj.
4988\tinterpretacija\tI\tf.
4987\tinterpretovati\tI\tv.tr. ipf.
23620\tinterpunkcija\tI\tf.
16945\tinterrogativny zaimennik\tI\tm.
35867\tinterval\tI\tm.
35304\tintervencija\tI\tf.
1819\tintervju\tI\tn.indecl.
35512\tintriga\tF\tf.
35809\tintrigovati\tI\tv.tr. ipf.
35810\tintrigujųći\tI\tadj.
12090\tintrospekcija\tI\tf.
6159\tintuicija\tI\tf.
35161\tintuitivny\tI\tadj.
2493\tinųdy\t\tadv.
34576\tinvalid\tI\tm.anim.
34575\tinvalidsky vozȯk\t\tm.
19496\tinvazija\tI\tf.
23851\tinventarizacija\tI\tf.
4986\tinvesticija\tI\tf.
15933\tinvestor\tI\tm.anim.
1480\tinvestovati\tI\tv.tr. ipf.
864\tiny\t\tadj.
4846\tinženjer\tF\tm.anim.
290\tinženjerstvo\tF\tn.sg.
4658\tion\tI\tm.
1613\tiračsky\t\tadj.
2505\tIrak\t\tm.sg.
1782\tIran\t\tm.sg.
2497\tiransky\t\tadj.
32474\tirbis\tI\tm.anim.
22631\tiridij\tI\tm.sg.
34967\tiris\tI\tm.
34968\tiris\tI\tm.
188\tIrlandija\t\tf.sg.
4432\tirlandsky\t\tadj.
19733\tironičny\tI\tadj.
19734\tironija\tI\tf.
7924\tiskaľnik\t\tm.
36573\tiskańje\t\tn.
7925\tiskatelj\t\tm.anim.
1012\tiskati\t\tv.tr. ipf.
1011\tiskra\t\tf.
3848\tiskrenosť\t\tf.
2024\tiskreny\t\tadj.
26141\tiskriti\t\tv.intr. ipf.
23580\tislam\tI\tm.sg.
35559\tislamsky\tI\tadj.
4430\tIslandija\t\tf.sg.
4431\tislandsky\t\tadj.
7935\tistina\t\tf.
7936\tistinlivo\t\tadv.
7937\tistinlivy\t\tadj.
7938\tistinno\t\tadv.
5108\tistinnosť\t\tf.
3309\tistinny\t\tadj.
14604\tistnovati\t\tv.intr. ipf.
3333\tisto\t\tadv.
5310\tisty\t\tadj.
26147\tIsus Hristos\t\tm.anim.
17492\tIsus\tI\tm.anim.
7947\titak\t\tadv.
2503\tItalija\t\tf.sg.
20386\tItalijan, Italijanin\t\tm.anim.
643\titalijansky\t\tadj.
35301\titeracija\tI\tf.
26150\tiva\t\tf.
1646\tiver\t\tm.
26152\tivovy\t\tadj.
12065\tiz drugoj stråny\t\tadv.
12067\tiz jednoj stråny\t\tadv.
644\tiz\t\tprep.
7953\tiz-\t\tprefix
641\tizba\t\tf.
26155\tizbava\t\tf.
26156\tizbavitelj\t\tm.anim.
5887\tizbaviti sę\t\tv.refl. pf.
17493\tizbaviti\t\tv.tr. pf.
17495\tizbaviti\t\tv.tr. pf.
5888\tizbavjati sę\t\tv.refl. ipf.
17497\tizbavjati\t\tv.tr. ipf.
17499\tizbavjati\t\tv.tr. ipf.
26160\tizbavjeńje\t\tn.sg.
1647\tizběgati\t\tv.intr. ipf.
1953\tizběgati\t\tv.intr. ipf.
36474\tizběgati\t\tv.intr. ipf.
7962\tizběgomy\t\tadj.
642\tizběgti\t\tv.intr. pf.
1875\tizběgti\t\tv.intr. pf.
36475\tizběgti\t\tv.intr. pf.
26161\tizbica\t\tf.
7964\tizbirajemosť\t\tf.
7965\tizbiramy\t\tadj.
7966\tizbirańje\t\tn.sg.
7968\tizbiratelj\t\tm.anim.
7974\tizbirateljstvo\t\tn.
4334\tizbirati\t\tv.tr. ipf.
23862\tizbiti\t\tv.tr. pf.
23864\tizbivati\t\tv.tr. ipf.
26163\tizbljuvati\t\tv.intr. pf.
1641\tizbombardovati\tI\tv.tr. pf.
7977\tizbor ljudij\t\tm.
4333\tizbor\t\tm.
7970\tizborny koledž\t\tm.
7971\tizborny komitet\t\tm.
7969\tizborny podvod\t\tm.
1642\tizbory\t\tm.pl.
17509\tizbrany\t\tadj.
4335\tizbrati\t\tv.tr. pf.
1630\tizbudovati\t\tv.tr. pf.
4796\tizbuh\t\tm.
4800\tizbuhati\t\tv.intr. ipf.
4798\tizbuhlivy\t\tadj.
4801\tizbuhnųti\t\tv.intr. pf.
26167\tizbytȯk\t\tm.
26169\tizcěliti sę\t\tv.refl. pf.
36660\tizcěliti\t\tv.tr. pf.
31720\tizcěljati sę\t\tv.refl. ipf.
36661\tizcěljati\t\tv.tr. ipf.
35983\tizčezaj!\t\tintj.
3550\tizčezati\t\tv.intr. ipf.
7988\tizčezneńje\t\tn.
3557\tizčeznųti\t\tv.intr. pf.
5879\tizčisliti\t\tv.tr. pf.
5878\tizčisljati\t\tv.tr. ipf.
3417\tizčisljeńje\t\tn.
16726\tizčistiti\t\tv.tr. pf.
17511\tizčrkańje\t\tn.
3253\tizčrkati\t\tv.tr. ipf.
3271\tizčrknųti\t\tv.tr. pf.
2143\tizčrpati\t\tv.tr. pf.
1643\tizčrpyvati\t\tv.tr. ipf.
36226\tizdajnik\t\tm.anim.
21295\tizdaleka\t\tadv.
16733\tizdańje\t\tn.
19873\tizdatelj\t\tm.anim.
4855\tizdateljstvo\t\tn.
29069\tizdati zamųž\t\tv.tr. pf.
4854\tizdati\t\tv.tr. pf.
17514\tizdati\t\tv.tr. pf.
4779\tizdavati sę\t\tv.refl. ipf.
34252\tizdavati zamųž\t\tv.tr. ipf.
4853\tizdavati\t\tv.tr. ipf.
17517\tizdavati\t\tv.tr. ipf.
3732\t#izdělati\t\tv.tr. pf.
2384\tizdojiti\t\tv.tr. pf.
19272\tizdȯlbti\t\tv.tr. pf.
1798\tizdŕžlivy\t\tadj.
7996\tizdumati\t\tv.tr. pf.
17523\tizganjańje\t\tn.sg.
1692\tizganjati\t\tv.tr. ipf.
26175\tizgladiti\t\tv.tr. pf.
1696\tizglåsiti\t\tv.tr. pf.
749\tizglašati\t\tv.tr. ipf.
5812\tizględ\t\tm.
5811\tizględati\t\tv.intr. ipf.
33354\tizględati\t\tv.intr. ipf.
13923\tizględka\t\tf.
33355\tizględnųti\t\tv.intr. pf.
17527\tizgnanec\t\tm.
17528\tizgnańje\t\tn.sg.
19279\tizgnanstvo\t\tn.sg.
1695\tizgnati\t\tv.tr. pf.
5593\tizgniti\t\tv.intr. pf.
16827\tizgoda\t\tf.
17531\tizgodny\t\tadj.
26179\tizgojiti\t\tv.tr. pf.
1795\tizgorěti\t\tv.intr. pf.
5553\tizgovarjati\t\tv.tr. ipf.
1797\tizgovor\t\tm.
4370\tizgovoriti\t\tv.tr. pf.
33706\tizgovorka\t\tf.
26181\tizguba\t\tf.
36653\tizgubiti sę\t\tv.refl. pf.
36254\tizgubiti tęžinų\t\tv.intr. pf.
26182\tizgubiti\t\tv.tr. pf.
26183\tizgubiti\t\tv.tr. pf.
26174\tizgynųti\t\tv.intr. pf.
17532\tizhod luny\t\tm.
5356\tizhod\t\tm.
32745\tizhod\t\tm.
5355\tizhoditi\t\tv.intr. ipf.
35259\tizhodny kod\t\tm.
14606\tizigrańje\t\tn.sg.
3936\tizigratelj\t\tm.anim.
1674\tizigrati\t\tv.tr. pf.
1703\tizigryvati\t\tv.tr. ipf.
5515\tizimati\t\tv.tr. ipf.
35372\tiziskati ponovno\t\tv.tr. pf.
17540\tiziskati\t\tv.tr. pf.
35373\tiziskyvati ponovno\t\tv.tr. ipf.
17543\tiziskyvati\t\tv.tr. ipf.
4145\tizjasniti\t\tv.tr. pf.
4144\tizjasnjati\t\tv.tr. ipf.
4146\tizjasnjeńje\t\tn.
3413\tizjaviti sę\t\tv.refl. pf.
17547\tizjaviti\t\tv.tr. pf.
3412\tizjavjati sę\t\tv.refl. ipf.
17548\tizjavjati\t\tv.tr. ipf.
35474\tizjavjeńje\t\tn.sg.
5484\tizjehati\t\tv.intr. pf.
5514\tizjęti\t\tv.tr. pf.
5497\tizjezd\t\tm.
5485\tizježđati\t\tv.intr. ipf.
1610\tizkalkulovati\tI\tv.tr. pf.
16946\tizkazańje\t\tn.
19735\tizkladati\t\tv.tr. ipf.
20387\tizključajųći\t\tprep.
2504\tizključati\t\tv.tr. ipf.
3918\tizključati\t\tv.tr. ipf.
8018\tizključeńje\t\tn.
8024\tizključeńje\t\tn.
8025\tizključiteljno\t\tadv.
8026\tizključiteljny\t\tadj.
482\tizključiti\t\tv.tr. pf.
3920\tizključiti\t\tv.tr. pf.
17552\tizključno\t\tadv.
8023\t#izkljuvati\t\tv.tr. ipf.
5777\tizkonavči\t\tadj.
2523\tizkopati\t\tv.tr. pf.
17555\tizkopyvati\t\tv.tr. ipf.
26191\tizkoreniti\t\tv.tr. pf.
32044\tizkorenjati\t\tv.tr. ipf.
5155\tizkoristati\t\tv.tr. pf.
35261\tizkoristiti\t\tv.tr. pf.
5570\tizkoristyvati\t\tv.tr. ipf.
17557\tizkositi\t\tv.tr. pf.
36922\tizkovati\t\tv.tr. pf.
36921\tizkovyvati\t\tv.tr. ipf.
8033\tizkrikati\t\tv.tr. ipf.
8035\tizkriknųti\t\tv.tr. pf.
8031\tizkrviti do smŕti\t\tv.tr. pf.
4515\tizkrviti\t\tv.tr. pf.
31422\tizkup\t\tm.
3445\tizkųpati\t\tv.tr. pf.
26193\tizkupiti\t\tv.tr. pf.
19736\tizkus\t\tm.
3603\tizkusiti\t\tv.tr. pf.
19743\tizkusny\t\tadj.
4781\tizkušati\t\tv.tr. ipf.
19740\tizkušeńje\t\tn.
3606\tizkušenosť\t\tf.
3607\tizkušeny\t\tadj.
35776\tizkydati\t\tv.tr. ipf.
35777\tizkydnųti\t\tv.tr. pf.
19744\tizlagati\t\tv.tr. ipf.
36663\tizlěčiti sę\t\tv.refl. pf.
4131\tizlěčiti\t\tv.tr. pf.
36549\tizlęgti sę\t\tv.refl. pf.
36547\tizlęgti\t\tv.tr. pf.
17561\tizlet\t\tm.
26196\tizlišek\t\tm.
27228\tizlišnji, izlišny\t\tadj.
26197\tizliti\t\tv.tr. pf.
36396\tizlivati\t\tv.tr. ipf.
26198\tizlomiti\t\tv.tr. pf.
26199\tizloviti\t\tv.tr. pf.
19745\tizložiti\t\tv.tr. pf.
33357\tizmagateljstvo\t\tn.sg.
31423\tizmagati\t\tv.tr. ipf.
5737\tizmama\t\tf.
15699\tizmamitelj\t\tm.anim.
5736\tizmamiti\t\tv.tr. pf.
5735\tizmamjati\t\tv.tr. ipf.
15701\tizmamnica\t\tf.
5738\tizmamnik\t\tm.anim.
4915\tiz-među\t\tprep.
3944\tizměna\t\tf.
1081\tizměniti\t\tv.tr. pf.
711\tizměnjati\t\tv.tr. ipf.
3496\tizměnjeńje\t\tn.
5596\tizměriti\t\tv.tr. pf.
26204\tizmesti\t\tv.tr. pf.
19748\tizměstiti\t\tv.tr. pf.
19746\tizměšćati\t\tv.tr. ipf.
19747\tizměšćeńje\t\tn.sg.
35982\tizmětaj sę!\t\tintj.
32600\tizmětati\t\tv.tr. ipf.
17568\tizmirati\t\tv.intr. ipf.
1597\tizmočiti\t\tv.intr. pf.
36917\tizmodelovati\tI\tv.tr. pf.
36924\tizmodelovati\tI\tv.tr. pf.
33356\tizmogti\t\tv.tr. pf.
26205\tizmoriti\t\tv.tr. pf.
17569\tizmrěti\t\tv.intr. pf.
3599\tizmųčeny\t\tadj.
1595\tizmysl\t\tm.
8060\tizmyslitelj\t\tm.anim.
8061\tizmysliti\t\tv.tr. pf.
8063\tizmysljati\t\tv.tr. ipf.
17570\tizmysljeńje\t\tn.
3610\tizmysljeny\t\tadj.
17571\tizmysljeny\t\tadj.
1796\tiz-nad\t\tprep.
36802\tiznahoditi\t\tv.tr. ipf.
8068\tiznahodlivo\t\tadv.
8069\tiznahodlivosť\t\tf.
8070\tiznahodlivy\t\tadj.
603\tiznahodnik\t\tm.anim.
36804\tiznahodȯk\t\tm.
36803\tiznajdti\t\tv.tr. pf.
23316\tiznajęti\t\tv.tr. pf.
23315\tiznajmati\t\tv.tr. ipf.
26207\tiznemogti\t\tv.intr. pf.
23729\tiznenada\t\tadv.
26208\tiznenadsko\t\tadv.
5459\tiznesti\t\tv.tr. pf.
26209\tizniknųti\t\tv.intr. pf.
35758\tizniščeńje\t\tn.
35759\tizniščiti\t\tv.tr. pf.
5458\tiznositi\t\tv.tr. ipf.
4680\tiznova\t\tadv.
33358\tiznuda\t\tf.
33360\tiznuditi\t\tv.tr. pf.
33359\tiznuđati\t\tv.tr. ipf.
16391\tiznuriti\t\tv.intr. pf.
8082\tiznurjati\t\tv.intr. ipf.
26211\tizobara\tI\tf.
20395\t#izobličati\t\tv.tr. ipf.
20396\tizobličiti\t\tv.tr. pf.
771\tizobraziti\t\tv.tr. pf.
1865\tizobražati\t\tv.tr. ipf.
19750\tizobražeńje\t\tn.
26213\tizoglosa\tI\tf.
5354\tizȯjdti\t\tv.intr. pf.
4965\tizolacija\tI\tf.
26214\tizolator\tI\tm.
21298\tizolovany\tI\tadj.
2015\tizolovati\tI\tv.tr. ipf.
31929\tizopačati\t\tv.tr. ipf.
26216\tizopačiti\t\tv.tr. pf.
26217\tizorati\t\tv.tr. pf.
26218\tizpadati\t\tv.intr. ipf.
36716\tizpasti\t\tv.intr. pf.
26219\tizpekti\t\tv.tr. pf.
26220\tizpepeliti\t\tv.tr. pf.
36799\tizphańje\t\tn.
32917\tizphati\t\tv.tr. pf.
32918\tizphati\t\tv.tr. pf.
32915\tizpihati\t\tv.tr. ipf.
32916\tizpihati\t\tv.tr. ipf.
2608\tizpiti\t\tv.tr. pf.
8087\tizplaćati\t\tv.tr. ipf.
26222\tizplåšiti\t\tv.tr. pf.
4277\tizplata\t\tf.
8089\tizplatiti\t\tv.tr. pf.
13945\tizplatny spisȯk\t\tm.
26223\tizplěti\t\tv.tr. pf.
35124\tizpljunųti\t\tv.tr. pf.
35123\tizpljuvati\t\tv.tr. ipf.
34907\tizpluti\t\tv.intr. pf.
34311\tizplyvati\t\tv.intr. ipf.
34313\tizplyvati\t\tv.intr. ipf.
36726\tizplyvati\t\tv.intr. ipf.
34314\tizplyvti\t\tv.intr. pf.
34315\tizplyvti\t\tv.intr. pf.
2926\tiz-pod\t\tprep.
597\tizpȯlniti\t\tv.tr. pf.
2501\tizpȯlnjati\t\tv.tr. ipf.
36609\tizpȯlnjeńje\t\tn.sg.
17573\tizpȯlzati\t\tv.intr. ipf.
17574\tizpȯlzti\t\tv.intr. pf.
19752\tizpověď\t\tf.
22218\tizpovědati\t\tv.tr. ipf.
22219\tizpověděti\t\tv.tr. pf.
22798\tizprašati\t\tv.tr. ipf.
32299\tizprati mozg\t\tv.tr. pf.
32305\tizprati\t\tv.tr. pf.
2502\tizpraviti\t\tv.tr. pf.
2507\tizpravjati\t\tv.tr. ipf.
26231\tizpråzdniti\t\tv.tr. pf.
31723\tizpråzdnjati\t\tv.tr. ipf.
3043\tiz-prěd\t\tprep.
32773\tizpręgati\t\tv.tr. ipf.
32774\tizpręgti\t\tv.tr. pf.
17575\tizprobovańje\t\tn.sg.
17576\tizprobovati\t\tv.tr. pf.
17577\tizprobovyvati\t\tv.tr. ipf.
16735\tizprodany\t\tadj.
22797\tizprositi\t\tv.tr. pf.
26232\tizpŕva\t\tadv.
26233\tizpųditi\t\tv.tr. pf.
13952\tizpųkly\t\tadj.
5240\tizpustiti\t\tv.tr. pf.
5241\tizpušćati\t\tv.tr. ipf.
16396\tizpytati\t\tv.tr. pf.
20868\tizpytati\t\tv.tr. pf.
16395\tizpytyvati\t\tv.tr. ipf.
20869\tizpytyvati\t\tv.tr. ipf.
681\tizråbiti\t\tv.tr. pf.
8103\tizråbotati\t\tv.tr. pf.
8106\tizråbotyvati\t\tv.tr. ipf.
6084\tizrađati sę\t\tv.refl. ipf.
26239\tIzraelec\t\tm.anim.
4741\tIzraelj\t\tm.sg.
4742\tizraeľsky\t\tadj.
1688\tizråsti\t\tv.intr. pf.
3725\tizråvniti sę\t\tv.refl. pf.
19754\tizråvniti\t\tv.tr. pf.
3723\tizravnjati sę\t\tv.refl. ipf.
19753\tizravnjati\t\tv.tr. ipf.
8115\tizraz\t\tm.
36718\tizraziti sę\t\tv.refl. pf.
2609\tizraziti\t\tv.tr. pf.
17584\tizraznosť\t\tf.
17586\tizrazny\t\tadj.
36717\tizražati sę\t\tv.refl. ipf.
682\tizražati\t\tv.tr. ipf.
719\tizražeńje\t\tn.
21301\tizrěčeńje\t\tn.
21303\tizrěkati\t\tv.tr. ipf.
21305\tizrěkti\t\tv.tr. pf.
8120\tizrězati\t\tv.tr. pf.
36918\tizrězyvati\t\tv.tr. ipf.
6085\tizroditi sę\t\tv.refl. pf.
31433\tizrodȯk\t\tm.anim.
21307\tizrođeńje\t\tn.sg.
6086\tizrođeny\t\tadj.
17587\tizrųbati\t\tv.tr. pf.
17588\tizrųbyvati\t\tv.tr. ipf.
23867\tizrvati\t\tv.tr. pf.
23866\tizryvati\t\tv.tr. ipf.
36425\tizsěkati\t\tv.tr. ipf.
19755\tizsěkti\t\tv.tr. pf.
36426\tizseliti sę\t\tv.refl. pf.
5710\tizseliti\t\tv.tr. pf.
36427\tizseljati sę\t\tv.refl. ipf.
5711\tizseljati\t\tv.tr. ipf.
17589\tizseljenec\t\tm.anim.
17590\tizseljenica\t\tf.
5712\tizseljeńje\t\tn.sg.
8123\tizslati\t\tv.tr. pf.
20398\tizslavjati sę\t\tv.refl. ipf.
20397\tizslavjati\t\tv.tr. ipf.
32751\tizslědȯk\t\tm.
35390\tizslědovańje\t\tn.sg.
1937\tizslědovatelj\t\tm.anim.
21308\tizslědovati\t\tv.tr. ipf.
20400\tizsloviti sę\t\tv.refl. pf.
20399\tizsloviti\t\tv.tr. pf.
12348\tizslušańje\t\tn.
36533\tizslušati\t\tv.tr. pf.
36532\tizslušivati\t\tv.tr. ipf.
13967\tizsmějati\t\tv.tr. pf.
13965\tizsmějivańje\t\tn.sg.
4133\tizsmějivati\t\tv.tr. ipf.
13968\tizsměška\t\tf.
4134\tizsměšnik\t\tm.anim.
17591\tizsměvka\t\tf.
34583\tizsȯhnųti\t\tv.intr. pf.
4151\tizsȯsati\t\tv.tr. pf.
20401\tiz-srěd\t\tprep.
8126\t#izstava, izstavka\t\tf.
16614\tizstava\t\tf.
2602\tizstaviti\t\tv.tr. pf.
931\tizstavjati\t\tv.tr. ipf.
35563\tizstavjeńje\t\tn.sg.
33599\tizstrěl\t\tm.
35676\tizstrěliti\t\tv.tr. pf.
3505\tizstųpati\t\tv.intr. ipf.
21985\tizstųpati\t\tv.intr. ipf.
3535\tizstųpiti\t\tv.intr. pf.
21993\t#izstųpiti\t\tv.intr. pf.
13947\tizsunųti\t\tv.tr. pf.
13951\tizsunųťje\t\tn.sg.
13953\tizsunųty\t\tadj.
33097\tizsušati\t\tv.tr. ipf.
33098\tizsušiti\t\tv.tr. pf.
13949\tizsuvati\t\tv.tr. ipf.
34582\tizsyhati\t\tv.intr. ipf.
17592\tizsylańje\t\tn.sg.
8131\tizsylati\t\tv.tr. ipf.
26245\tizsypati\t\tv.tr. pf.
5567\tizsysati\t\t#v.tr. ipf.
34002\tizšiti\t\tv.tr. pf.
34001\tizšivati\t\tv.tr. ipf.
4845\tizškoliti\t\tv.tr. pf.
22052\tiztęg\t\tm.
3850\tiztęgati\t\tv.tr. ipf.
3849\tiztęgnųti\t\tv.tr. pf.
6070\tiztěkati\t\tv.intr. ipf.
22066\tiztěkati\t\tv.intr. ipf.
6072\tiztekti\t\tv.intr. pf.
22067\tiztekti\t\tv.intr. pf.
2393\tiztirati\t\tv.tr. ipf.
26247\tiztkati\t\tv.tr. pf.
26249\t#iztočiti\t\tv.tr. pf.
23538\tIztočna Evropa\t\tf.sg.
22070\tiztočnik\t\tm.
17594\tiztočnoslovjansky\t\tadj.
13636\tiztočny\t\tadj.
15642\tiztok\t\tm.sg.
26250\tiztok\t\tm.
26251\tiztȯlkti\t\tv.tr. pf.
3277\tiztratiti\t\tv.tr. pf.
34955\tiztręsati\t\tv.tr. ipf.
34954\tiztręsti\t\tv.tr. pf.
5545\tiztreti\t\tv.tr. pf.
22139\tiztrgati\t\tv.tr. ipf.
22140\tiztrgnųti\t\tv.tr. pf.
3820\tiztŕpěti\t\tv.tr. pf.
16400\tiztvarjati\t\tv.tr. ipf.
16397\tiztvor\t\tm.
16398\tiztvoriti\t\tv.tr. pf.
16399\tiztvorjeńje\t\tn.sg.
31724\tizučati\t\tv.tr. ipf.
26256\tizučiti\t\tv.tr. pf.
13934\tizumirańje\t\tn.sg.
5774\tizumirati\t\tv.intr. ipf.
20402\tizumrěly\t\tadj.
5769\tizumreti\t\tv.intr. pf.
36915\tizvajati\t\tv.tr. pf.
763\tizvaljnjati\t\tv.tr. ipf.
22217\tizvědy\t\tm.pl.
558\tizvesti\t\tv.tr. pf.
36764\tizvesti\t\tv.tr. pf.
17596\tizvěstitelj\t\tm.anim.
3688\tizvěstiti\t\tv.tr. pf.
17595\tizvěsťje\t\tn.
14314\tizvěstnik\t\tm.anim.
26264\tizvěstny\t\tadj.
14315\tizvěstoglåsitelj\t\tm.anim.
14316\tizvěstoglåšeńje\t\tn.
22215\tIzvěstovańje\t\tn.sg.
3692\tizvěšćati\t\tv.tr. ipf.
5511\tizvezti\t\tv.tr. pf.
8146\tizvezti\t\tv.tr. pf.
26265\tizvihnųti\t\tv.tr. pf.
3390\tizvini, izvinite\t\tintj.
32398\tizviniti sę\t\tv.refl. pf.
634\tizviniti\t\tv.tr. pf.
32400\tizvinjajųći\t\tadj.
32397\tizvinjati sę\t\tv.refl. ipf.
633\tizvinjati\t\tv.tr. ipf.
32399\tizvinjeńje\t\tn.
22512\tizvlastniti\t\tv.tr. pf.
22511\tizvlastnjati\t\tv.tr. ipf.
36722\tizvlěkati\t\tv.tr. ipf.
26267\tizvlěkti\t\tv.tr. pf.
26269\tizvně\t\tadv.
22395\tizvnųtra\t\tadv.
22276\tizvod\t\tm.
22280\tizvod\t\tm.
5540\tizvoditi\t\tv.tr. ipf.
36763\tizvoditi\t\tv.tr. ipf.
8156\tizvodlivosť\t\tf.
8157\tizvodlivy\t\tadj.
17598\tizvođeńje\t\tn.
8158\tizvolimosť\t\tf.
8159\tizvolimy\t\tadj.
14611\tizvoliti\t\tv.tr. pf.
14612\tizvoljeńje\t\tn.
8168\tizvoljeny\t\tadj.
2956\tizvoljniti\t\tv.tr. pf.
14610\tizvoljny\t\tadj.
26270\tizvor\t\tm.
5907\tizvoz\t\tm.
5510\tizvoziti\t\tv.tr. ipf.
16181\tizvoziti\t\tv.tr. ipf.
22662\tizvraćati\t\tv.tr. ipf.
5629\tizvråćeny\t\tadj.
22661\tizvråtiti\t\tv.tr. pf.
2506\tiz-za\t\tprep.
8172\tiže\t\tpron.rel.
26272\tižica\t\tf.
5858\tizznačati\t\tv.tr. ipf.
5859\tizznačeńje\t\tn.
5857\tizznačiti\t\tv.tr. pf.
8177\tizzȯv\t\tm.
6244\tizzvati\t\tv.tr. pf.
6243\tizzyvati\t\tv.tr. ipf.
2932\tizžęti\t\tv.tr. pf.
1602\tja\t\tpron.pers.
17601\tjablånj\t\tf.
26275\tjablȯčny\t\tadj.
282\tjablȯko\t\tn.
2109\tjad\t\tm.
26282\tjadovity\t\tadj.
36740\tJadransko morje\tI\tn.
1576\tjagnę\t\tn.
26285\tjagnętina\t\tf.
26284\tjagnęťji\t\tadj.
26286\tjagniti sę\t\tv.refl. ipf.
1580\tjagoda\t\tf.
26287\tjagoda\t\tf.
26289\tjagodny\t\tadj.
32472\tjaguar\tI\tm.anim.
4708\tjajca\t\tn.pl.
1478\tjajce\t\tn.
8209\tjajcebělȯk\t\tm.
8214\tjaječko\t\tn.
36552\tjajėčna skorlupa\t\tf.
35431\tjaječny krem\t\tm.
26291\tjaječny\t\tadj.
36848\tjak\tI\tm.
17602\tjalovec\t\tm.
26293\tjalověti\t\tv.intr. ipf.
26294\tjalovica\t\tf.
26296\tjalovy\t\tadj.
36640\tjalovy\t\tadj.
36641\tjalovy\t\tadj.
4995\tjama\t\tf.
16785\tJamajka\t\tf.sg.
22458\tjamajsky\t\tadj.
2106\tjanuaŕ\tI\tm.sg.
19756\tJaponec\t\tm.anim.
3052\tJaponija\t\tf.sg.
1528\tjaponsky\t\tadj.
118\tjar\t\tm.
26299\tjar\t\tm.
35544\tjard\tE\tm.
26303\tjarka\t\tf.
26304\tjarky\t\tadj.
3042\tjaŕmo\t\tn.
26306\tjarosť\t\tf.
26307\tjarovy\t\tadj.
26308\tjasenėc\t\tm.
17603\tjasenj\t\tm.
17605\tjasla-sadȯk\t\tm.
26311\tjasli\t\tm.pl.
26312\tjasněti\t\tv.intr. ipf.
17607\tjasno\t\tadv.
4147\tjasnosť\t\tf.
26317\tjasnota\t\tf.
13615\tjasnovidec\t\tm.anim.
13614\tjasnovidka\t\tf.
17608\tjasnovidnosť\t\tf.
734\tjasny\t\tadj.
33082\tjasny\t\tadj.
527\tjastręb\t\tm.anim.
878\tjaščer\t\tm.anim.
26324\tjatrȯv\t\tf.
17609\tjava\t\tf.
17611\tjava\t\tf.
36480\tJava\t\tf.sg.
36481\tjavansky\t\tadj.
534\tjaviti sę\t\tv.refl. pf.
36730\tjaviti sę\t\tv.refl. pf.
3612\tjavjati sę\t\tv.refl. ipf.
36731\tjavjati sę\t\tv.refl. ipf.
8240\tjavjeńje\t\tn.
17612\tjavjeńje\t\tn.
26327\tjavno\t\tadv.
8241\tjavny\t\tadj.
26329\tjavor\t\tm.
26330\tjavorovy\t\tadj.
26331\tjaź\t\tm.anim.
26332\tjaz\t\tm.
20403\tjazvec\t\tm.anim.
8245\tje, jest\t\tv.ipf.
4461\tjebańje\t\tn.sg.
8248\tjebany\t\tadj.
8249\tjebatelj\t\tm.anim.
528\tjebati\t\tv.tr. ipf.
35993\tjebeno\t\tadv.
2862\tjęčati\t\tv.intr. ipf.
1574\tjęčmenj\t\tm.
36479\tjęčmenj\t\tm.
16798\tjęčmenny\t\tadj.
2944\tjeda\t\tf.
26340\tjedak\t\tm.anim.
8259\tjedańje\t\tn.sg.
15347\tjedatelj\t\tm.anim.
1592\tjedati\t\tv.intr. ipf.
16799\tjedeńje\t\tn.sg.
532\tjedin drugogo\t\tpron.rec.
8268\tjedin protiv drugomu\t\tadv.
531\tjedin\t\tnum.card.
19757\tjedinačka\t\tf.
19758\tjedinak\t\tm.anim.
26345\tjedinec\t\tm.anim.
5174\tjedinica\t\tf.
36735\tjedinka\t\tnum.subst.
533\tjedinnadsęť\t\tnum.card.
23679\tjedinnadsęty\t\tnum.ord.
8278\tjedino pytańje vrěmene\t\tphrase
5098\tjedino\t\tadv.
17615\tjedinovy\t\tadj.
915\tjedinstveno čislo\t\tn.
8282\tjedinstveny\t\tadj.
19759\tjedinstveny\t\tadj.
8283\tjedinstvo\t\tn.sg.
999\tjediny\t\tadj.
26349\tjedivo\t\tn.
8255\tjedlivy\t\tadj.
8296\tjednako\t\tadv.
24009\tjednakovy\t\tadj.
21309\tjednakože, jednakže\t\tadv.
2702\tjednaky\t\tadj.
35251\tjednina\t\tf.
17617\tjednobožstvo\t\tn.sg.
3852\tjednočasno\t\tadv.
3851\tjednočasny\t\tadj.
17618\tjednoglåsno\t\tadv.
17619\tjednoglåsny\t\tadj.
19761\tjednojęzyčny\t\tadj.
741\tjednokråtno\t\tadv.
33398\tjednokråtny\t\tadj.
8276\tjednonočka\t\tf.
8275\tjednonočny seks\t\tm.sg.
8274\tjednonočny\t\tadj.
26352\tjednonogy\t\tadj.
21310\tjednoobrazny\t\tadj.
26353\tjednooky\t\tadj.
32326\tjednopoly\t\tadj.
21311\tjednorodnosť\t\tf.
21312\tjednorodny\t\tadj.
19762\tjednorog\t\tm.anim.
26355\tjednorųky\t\tadj.
16947\tjednosložny\t\tadj.
8301\tjednosměrny\t\tadj.
740\tjednosť\t\tf.
5673\tjednostajnosť\t\tf.
5674\tjednostajny\t\tadj.
8306\tjednostrånno\t\tadv.
1781\tjednostrånny\t\tadj.
16948\tjednovrěmenno\t\tadv.
22574\tjednovrěmenny\t\tadj.
17620\tjednoznačno\t\tadv.
17625\tjednoznačny\t\tadj.
19764\tjednoznačny\t\tadj.
19763\tjednoženstvo\t\tn.sg.
22943\tjedomy\t\tadj.
8200\tjędrna energija\t\tf.
8201\tjędrna sposobnosť\t\tf.
8202\tjędrno odstrašeńje\t\tn.sg.
8205\tjędrny reaktor\t\tm.
2108\tjędrny\t\tadj.
3748\tjędrny\t\tadj.
2107\tjędro\t\tn.
2354\tjedva\t\tadv.
14627\tjedvab\t\tm.sg.
512\tjego\t\tpron.poss.
716\tjego\t\tpron.pers.
6256\tjegov\t\tpron.poss.
8320\tjehati želěznicejų\t\tv.ipf.
2175\tjehati\t\tv.intr. ipf.
2195\tjej\t\tpron.poss.
3015\tjej\t\tpron.pers.
6257\tjejin\t\tpron.poss.
26364\tjela\t\tf.
26365\tjelec\t\tm.anim.
26366\tjelenę\t\tn.
26368\tjelenina\t\tf.
2202\tjelenj\t\tm.anim.
26367\tjeleńji\t\tadj.
3058\tjelito\t\tn.
17616\tjelo\t\tn.
3017\tjemela\t\tf.
5922\tJemen\t\tm.sg.
2771\tjemu\t\tpron.pers.
26374\tjen\tI\tm.
8328\tjer\t\tconj.
15354\tjerbo za\t\tprep.
8329\tjerbo\t\tconj.
26375\tjerębina\t\tf.
25939\tjerej\tI\tm.anim.
26376\tjeremiada\tI\tf.
443\tjesenj\t\tf.
26378\tjesennji, jesenny\t\tadj.
26379\tjesetr\t\tm.anim.
26380\tjesetrina\t\tf.
19765\tjestestvo\t\tn.sg.
19767\tjestestvo\t\tn.sg.
19491\tjesti\t\tv.tr. ipf.
23673\tjestli ne\t\tconj.
8335\tjestli trěba\t\tadv.
2353\tjestli\t\tconj.
14605\tjestvovati\t\tv.intr. ipf.
8341\tješče dva\t\tnum.
1076\tješče\t\tadv.
16800\tjęti\t\tv.tr. ipf.
14628\tjętra\t\tn.pl.
2322\tJevrej\t\tm.anim.
2546\tjevrejskoslovjansky\t\tadj.
255\tjevrejsky\t\tadj.
3572\tjezda\t\tf.
17629\tjezdec\t\tm.anim.
26388\tjezdec\t\tm.anim.
19175\tjezditi na velosipedu\t\tv.ipf.
540\tjezditi\t\tv.intr. ipf.
8349\tjezerny\t\tadj.
2547\tjezero\t\tn.
26392\tjezuit\tI\tm.anim.
17630\tJezus\tI\tm.anim.
31978\tjęzyček\t\tm.
31979\tjęzyčkovy\t\tadj.
17631\tjęzyčny\t\tadj.
541\tjęzyk\t\tm.
545\tjęzyk\t\tm.
36102\tjęzykolomka\t\tf.
17632\tjęzykoslovec\t\tm.anim.
19768\tjęzykotvoritelj, językotvorec\t\tm.anim.
19770\tjęzykotvorjeńje, językotvorstvo\t\tn.sg.
551\tjęzykověd\t\tm.anim.
4443\tjęzykovědstvo\t\tn.sg.
17633\tjęzykoznańje\t\tn.sg.
8354\tjęzykoznavec\t\tm.anim.
19772\tjęzykoznavstvo\t\tn.sg.
846\tjež\t\tm.anim.
3825\tježdna čęsť\t\tf.
26394\tježina\t\tf.
34830\tježiti sę\t\tv.refl. ipf.
26395\tježiti\t\tv.tr. ipf.
35952\tjidiš\tI\tm.sg.
2601\tjih\t\tpron.poss.
2603\tjih\t\tpron.pers.
6258\tjihny\t\tpron.poss.
1871\tjim\t\tpron.pers.
22630\tjod\tI\tm.sg.
23660\tjoga\tI\tf.
4638\tjogurt\t\tm.
5923\tJordanija\t\tf.sg.
4436\tjordansky\t\tadj.
4815\tjų\t\tpron.pers.
5924\tjubilej\t\tm.
23582\tjudaizm\tI\tm.sg.
1527\tjug\t\tm.sg.
36380\tjugoiztočny\t\tadj.
36381\tjugoiztok\t\tm.sg.
129\tJugoslavija\t\tf.sg.
35350\tjugoslavizm\t\tm.sg.
4867\tjugoslavsky\t\tadj.
36382\tjugovȯzhod\t\tm.sg.
36383\tjugovȯzhodny\t\tadj.
36384\tjugozapad\t\tm.sg.
36385\tjugozapadny\t\tadj.
3125\tjulij\tI\tm.sg.
26403\tjunak\t\tm.anim.
26404\tjunak\t\tm.anim.
26405\tjunec\t\tm.anim.
2550\tjunij\tI\tm.sg.
5803\tjunior\tI\tm.anim.
26407\tjunoš, junoša\t\tm.anim.
26408\tjuny\t\tadj.
21313\tJupiter\tI\tm.sg.
2549\tjurisdikcija\tI\tf.
26410\tjurȯk\t\tm.anim.
26412\tjutrenja\t\tf.
8364\tjutrišnji, jutrišny\t\tadj.
8366\tjutro\t\tn.
4746\tJužna Amerika\t\tf.sg.
22772\tJužna Koreja\t\tf.sg.
8367\tjužna polsfera\t\tf.sg.
10849\tjužno sijańje\t\tn.sg.
4186\tjužno\t\tadv.
553\tJužnoafrikanska Republika\t\tf.sg.
35018\tjužnoafrikansky\t\tadj.
4747\tjužnoamerikansky\t\tadj.
35136\tjužnoevropejsky\t\tadj.
22774\tjužnokorejsky\t\tadj.
4425\tjužnoslovjansky\t\tadj.
23501\tJužny okean\t\tm.sg.
23634\tJužny polus\t\tm.sg.
2548\tjužny\t\tadj.
518\tk, ko\t\tprep.
26417\tkabaček\t\tm.
26420\tkabala\tI\tf.
26421\tkabalističny\tI\tadj.
26423\tkabare, kabaret\tF\tm.
26424\tkabarga\t\tf.
4409\tkabelj\tI\tm.
36002\tkabina\tI\tf.
36715\tkabinet\tF\tm.
17635\tkačer\t\tm.anim.
519\tkaď\t\tf.
26429\tkadiľnica\t\tf.
26430\tkadilo\t\tn.
26432\tkaditi\t\tv.intr. ipf.
22627\tkadmij\tI\tm.sg.
658\tkadȯlb\t\tm.
11144\tkadry\tI\tm.pl.
35874\tkafe\tF\tn.indecl.
24439\tkajak\t\tf.
26437\tkajati sę\t\tv.refl. ipf.
1193\tkak, kako\t\tadv.
2043\tkak, kako\t\tprep.
3437\tkak, kako\t\tadv.
34784\tkakao\tI\tn.indecl.
26439\tkakati\t\tv.intr. ipf.
1421\tkako ... tako i ...\t\tconj.
5035\tkako by\t\tconj.
17637\tkako možno ranějše\t\tadv.
17638\tkako možno skorěje\t\tadv.
36619\tkako prědtym\t\tadv.
36618\tkako prěđe\t\tadv.
36620\tkako raněje\t\tadv.
17639\tkako sę govori\t\tphrase
6107\tkako sę tvŕdi\t\tphrase
16828\tkako toliko\t\tadv.
23868\tkakoby\t\tadv.
19606\tkakokoli\t\tadv.
14630\tkako-libo\t\tadv.
2712\tkako-nebųď\t\tadv.
3796\tkakosť\t\tf.
497\tkakostny\t\tadj.
34756\tkaktus\tI\tm.
1454\tkaky\t\tpron.indef.
19605\tkakykoli\t\tpron.indef.
14631\tkaky-libo\t\tpron.indef.
2711\tkaky-nebųď\t\tpron.indef.
341\tkal\t\tm.sg.
26442\tkal\t\tm.sg.
22616\tkalcij\tI\tm.sg.
20870\tkalendaŕ\tI\tm.
35817\tKalifornija\t\tf.sg.
20871\tkaligraf\tI\tm.anim.
35687\tkaligrafičny\tI\tadj.
20872\tkaligrafija\tI\tf.
22615\tkalij\tI\tm.sg.
26444\tkalina\t\tf.
26447\tkaliti\t\tv.tr. ipf.
6164\tkalka\tI\tf.
4966\tkalkulacija\tI\tf.
2553\tkalkulovati\tI\tv.tr. ipf.
26449\tkaľny\t\tadj.
448\tkaluža\t\tf.
26453\tkameněti\t\tv.intr. ipf.
26455\tkamenisty\t\tadj.
1313\tkamenj\t\tm.
36154\tkamenna doba\t\tf.
26459\tkamenny\t\tadj.
20404\tkamenolom\t\tm.
26461\tkamenovati\t\tv.tr. ipf.
851\tkamera\tI\tf.
4227\tkameraman\tI\tm.anim.
26462\tkamion\tF\tm.
19553\tkamo\t\tadv.
19607\tkamokoli\t\tadv.
19569\tkamo-libo\t\tadv.
19568\tkamo-nebųď\t\tadv.
2556\tkampanija\tI\tf.
35824\tkamuflaž\tF\tm.sg.
2321\tKanada\t\tf.sg.
2561\tkanadsky\t\tadj.
23266\tkanal\tI\tm.
23269\tkanalizacija\tI\tf.
23268\tkanalizovati\tI\tv.tr. ipf.
23489\tkanarka\t\tf.
16723\tkancelarija\t\tf.
36330\tkancler\tG\tm.anim.
2007\tkandidat\tI\tm.anim.
33406\tkandidatura\tI\tf.
6270\tkandidovati\tI\tv.tr. ipf.
22959\tkanibal\tI\tm.anim.
22960\tkanibalizm\tI\tm.sg.
22961\tkanibaľsky\tI\tadj.
927\tkanja\t\tf.
26465\tkanja\t\tf.
5202\tkanoe\tI\tn.indecl.
17640\tkanon\tI\tm.
35914\tkanoničny\tI\tadj.
5761\tkanonizovati\tI\tv.tr. ipf.
2557\tkapati\t\tv.intr. ipf.
36103\tkapela\tI\tf.
32457\tkaper\tI\tm.anim.
32458\tkaperstvo\tI\tn.sg.
32707\tkapital\tI\tm.
23513\tkapitalist\tI\tm.anim.
23514\tkapitalističny\tI\tadj.
23512\tkapitalizm\tI\tm.sg.
3489\tkapitan\tI\tm.anim.
2558\tkapitulacija\tI\tf.
4969\tkapitulovati\tI\tv.tr. ipf.
1813\tkapja\t\tf.
33402\tkapjušon\tF\tm.
26470\tkapnųti\t\tv.intr. pf.
604\tkapriz\tI\tm.
4252\tkaprizny\tI\tadj.
4253\tkaprizovati\tI\tv.intr. ipf.
2559\tkapsula\tI\tf.
33401\tkapuca\tD\tf.
36423\tkapusta\t\tf.
631\tkara\t\tf.
16815\tkarabin\tI\tm.
19773\tkaraibsky\t\tadj.
35441\tkaramel\t\tm.
2683\tkarantina\tI\tf.
2564\tkaraś\t\tm.anim.
23584\tkarate\tI\tn.indecl.
2565\tkarati\t\tv.tr. ipf.
35408\tkarati\t\tv.tr. ipf.
35694\tkardinal\tI\tm.anim.
23699\tkareta\t\tf.
35015\tkarfiol\tD\tm.
36577\tkari\tE\tn.
21314\tkariera\tI\tf.
2566\tkarierist\tI\tm.anim.
26750\tkaries\tI\tm.sg.
36286\tkarikatura\tI\tf.
2426\tkarlik\t\tm.anim.
35970\tkarnaval\tI\tm.
19774\tkarny\t\tadj.
32225\tkaro\tF\tn.
870\tkarp\t\tm.anim.
2868\tkarta\tI\tf.
23239\tkarta\tI\tf.
20873\tkartina\t\tf.
2989\tkartofelj\tI\tm.
22803\tkarton\tI\tm.
36538\tkaruselj\tF\tf.
36369\tkaseta\tI\tf.
34586\tkastracija\tI\tf.
26478\tkastrovati\tI\tv.tr. ipf./pf.
2563\tkaša\t\tf.
1830\tkašelj\t\tm.
3520\tkašljati\t\tv.intr. ipf.
5979\tkaštan\tI\tm.
17641\tkaštanovy\t\tadj.
4729\tKašub\t\tm.anim.
176\tkašubsky\t\tadj.
26485\tkat\t\tm.anim.
36586\tkat\tA\tm.
19775\tkatalansky\t\tadj.
33415\tkatalog\tI\tm.
35059\tKatalonija\t\tf.sg.
32447\tKatar\t\tm.sg.
32453\tkatarsky\t\tadj.
4911\tkatastrofa\tI\tf.
4913\tkatastrofičny\tI\tadj.
17643\tkatę\t\tn.
165\tkatedrala\tI\tf.
36705\tkategorično\tI\tadv.
35597\tkategoričny\tI\tadj.
47\tkategorija\tI\tf.
19776\tkategorizacija\tI\tf.
36113\tkategorizovati\tI\tv.tr. ipf./pf.
2233\tkatka\t\tf.
17644\tkatȯčka\t\tf.
23516\tkatolicizm\tI\tm.sg.
2985\tkatoličsky\tI\tadj.
3000\tkatolik\tI\tm.anim.
2560\tkava\t\tf.
32075\tkavalerija\tI\tf.
3484\tkavarnja\t\tf.
26487\tkavka\t\tf.
35062\tKavkaz\t\tm.sg.
26488\tkavovy\t\tadj.
23645\tkazahsky, kazašsky\t\tadj.
1410\tKazahstan\t\tm.sg.
32415\tkazarna\tI\tf.
3116\tkazati sę\t\tv.refl. ipf.
1971\tkazati\t\tv.tr. ipf.
26491\tkazati\t\tv.tr. ipf.
32512\tkazino\t\tn.
26492\tkaziti\t\tv.tr. ipf.
26493\tkazniti\t\tv.tr. ipf.
26494\tkaznj\t\tf.
8428\tkaždodenny\t\tadj.
8429\tkaždogodišnje\t\tadv.
8430\tkaždogodišnji, každogodišny\t\tadj.
8431\tkaždoročno\t\tadv.
8432\tkaždoročny\t\tadj.
937\tkaždy\t\tadj.
942\tkde\t\tadv.
19603\tkdekoli\t\tadv.
14569\tkde-libo\t\tadv.
1794\tkde-nebųď\t\tadv.
35857\tkelner\tD\tm.anim.
36644\tkelnerka\tI\tf.
35726\tKelt\t\tm.anim.
4738\tkeltsky\t\tadj.
32138\tkemping\tE\tm.
20406\tkenguru\tI\tm.anim.
35194\tkeramičny\tI\tadj.
35193\tkeramika\tI\tf.
16764\tkěšenj\t\tf.
26497\tkhaki\tI\tn.indecl.
34921\tkilim\tT\tm.
33538\tkilobajt\tI\tm.
2275\tkilogram\tI\tm.
4421\tkilometr\tI\tm.
35046\tkinematografija\tI\tf.
4795\tkino\tI\tn.
36261\tkinooperator\tI\tm.anim.
34848\tkiosk\tI\tm.
452\tKipr\t\tm.sg.
1417\tkirilica\t\tf.
34781\tkiriličsky, kirilsky\t\tadj.
36529\tkisla smetana\t\tf.
26513\tkita\t\tf.
4752\tKitaj\t\tm.sg.
8448\tKitajec\t\tm.anim.
8449\tKitajka\t\tf.
552\tkitajsky\t\tadj.
36070\tkivi\tI\tn.indecl.
2340\tklåda\t\tf.
26520\tklådec, klådeź\t\tm.
26522\tkladivo\t\tn.
19777\tklanjati sę\t\tv.refl. ipf.
23433\tklarnet\tI\tm.
2265\tklås\t\tm.
3503\tklas\t\tm.
35257\tklasa\tI\tf.
8458\tklasična muzika\tI\tf.
36156\tklasičny kostjum\tF\tm.
8459\tklasičny\tI\tadj.
4967\tklasifikacija\tI\tf.
2892\tklasifikovati\tI\tv.tr. ipf.
26526\tklåsiti sę\t\tv.refl. ipf.
35532\tklasna komnata\t\tf.
901\tklasti\t\tv.tr. ipf.
26528\tklåti\t\tv.tr. ipf.
32009\tklåti\t\tv.tr. ipf.
36765\tklåti\t\tv.tr. ipf.
36546\tklåtiti sę\t\tv.refl. ipf.
574\tklåtiti\t\tv.tr. ipf.
23458\tklavesin\tI\tm.
8462\tklaviatura\tI\tf.
23431\tklavir\tD\tm.
8461\tklaviša\tI\tf.
2555\tklęčati\t\tv.intr. ipf.
1540\tklej\t\tm.
26532\tklejiti\t\tv.tr. ipf.
23297\tklejky\t\tadj.
26534\tklęknųti\t\tv.intr. pf.
26536\tklen\t\tm.
1274\tklěnj\t\tm.anim.
26537\tklenovy\t\tadj.
4091\tklěskańje\t\tn.sg.
4090\tklěskati\t\tv.tr. ipf.
20408\tklěšč\t\tm.anim.
26545\tklěšča\t\tf.
1662\tklěšče\t\tf.pl.
17655\tklęti\t\tv.intr. ipf.
4518\tklětka krve\t\tf.
787\tklětka\t\tf.
4517\tklětka\t\tf.
14645\tklětȯčna terapija\tM\tf.
8472\tklětȯčno ozdravjeńje\t\tn.sg.
8473\tklětȯčny\t\tadj.
17657\tklętva\t\tf.
17658\tklętva\t\tf.
3001\tkleveta\t\tf.
26555\tklevetati\t\tv.intr. ipf.
26556\tklevetnik\t\tm.anim.
5121\tklicati\tI\tv.tr. ipf.
32575\tklicati\t\tv.tr. ipf.
32573\tklička\t\tf.
5139\tklient\tI\tm.anim.
14646\tklienti\tI\tm.pl.
14647\tklientsky\tI\tadj.
8476\tklientstvo\tI\tn.sg.
8477\tklik\tI\tm.
32567\tklik\t\tm.
32561\tklika\tF\tf.
5120\tkliknųti\tI\tv.tr. pf.
32579\tkliknųti\t\tv.tr. pf.
17659\tklima\tI\tf.
2986\tklimaks\tI\tm.
2214\tklimat\tI\tm.
35878\tklimatizacija\tI\tf.
35877\tklimatizator\tI\tm.
8482\tklimatsko potepljeńje\tI\tn.sg.
8481\tklimatsky\tI\tadj.
1368\tklin\t\tm.
19779\tkliničny\tI\tadj.
35555\tklinika\tI\tf.
8484\tkliše\tF\tn.indecl.
2240\tključ\t\tm.
26560\tključaŕ\t\tm.anim.
32016\tključna kosť\t\tf.
26562\tključnica\t\tf.
19784\tključnik\t\tm.anim.
35216\tključno slovo\t\tn.
19786\tključny\t\tadj.
26564\tkljukva\t\tf.
19787\tkljun\t\tm.
26566\tkljunųti\t\tv.tr. pf.
1958\tkljusati\t\tv.intr. ipf.
788\tkljuvati\t\tv.tr. ipf.
26570\tklobuk\t\tm.
2191\tklȯk\t\tm.
26571\tklokot\t\tm.sg.
26572\tklokotati\t\tv.intr. ipf.
19780\tklon\tI\tm.
19782\tkloniti sę\t\tv.refl. ipf.
789\tkloniti\t\tv.tr. ipf.
32136\tkloun\tE\tm.anim.
26576\tklozet\tI\tm.
31886\tklub\tE\tm.
26578\tklųbȯk\t\tm.
36805\tkmin\tI\tm.
17660\tkmotr\t\tm.anim.
17661\tkmotra\t\tf.
8501\tknęgynja\t\tf.
8502\tknęź\t\tm.anim.
17662\tknęžić\t\tm.anim.
26585\tknęžna\t\tf.
16801\tknęžny\t\tadj.
35911\tknęžstvo\tI\tn.
1981\tkniga\t\tf.
32056\tknigarnja\t\tf.
6204\tkniževnosť\t\tf.
6205\tkniževny\t\tadj.
4405\tknižka\t\tf.
17663\tknopka\t\tf.
35489\tknot\t\tm.
20409\tkoala\tI\tf.
550\tkoalicija\tI\tf.
22622\tkobalt\tI\tm.sg.
26588\tkobčik\t\tm.anim.
20410\tkobra\tI\tf.
20411\tkobyla\t\tf.
26592\tkočerga\t\tf.
16951\tkod\tI\tm.
16950\tkodifikacija\tI\tf.
35695\tkodifikovati\tI\tv.tr. ipf./pf.
8505\tkodovati\tI\tv.tr. ipf.
31966\tkofein\tI\tm.sg.
2230\tkȯgda, kȯgdy\t\tadv.
26594\tkȯgda, kȯgdy\t\tconj.
19610\tkȯgdakoli, kȯgdykoli\t\tadv.
14649\tkȯgda-libo, kȯgdy-libo\t\tadv.
120\tkȯgda-nebųď, kȯgdy-nebųď\t\tadv.
143\tkogo\t\tpron.int.
35931\tkohezija\tI\tf.
5693\tkoj\t\tpron.int.
5694\tkoj\t\tpron.rel.
21315\tkojkoli\t\tpron.indef.
5695\tkoj-nebųď\t\tpron.indef.
23196\tkokain\tI\tm.sg.
23701\tkoketka\tF\tf.
32900\tkoketny\tF\tadj.
32901\tkoketovati\tF\tv.intr. ipf.
25534\tkokodakati\t\tv.intr. ipf.
36274\tkokos\tI\tm.
36276\tkokosova palma\t\tf.
36275\tkokosovy orěh\t\tm.
26596\tkokoška\t\tf.
2253\tkokot\t\tm.anim.
33643\tkoktejl\tE\tm.
1949\tkol\t\tm.
26599\tkȯl\t\tm.
1957\tkolač\t\tm.
81\tkolaps\tI\tm.
2370\tkȯlbasa\t\tf.
8504\tkȯlbasa\t\tf.
36539\tkolěbanka\t\tf.
21316\tkolěbati sę\t\tv.refl. ipf.
26605\tkolěbati\t\tv.tr. ipf.
26607\tkolěbka\t\tf.
26608\tkolęda\tI\tf.
8519\tkoledž\tE\tm.
5762\tkolega\tI\tm.anim.
19788\tkolěja\t\tf.
36603\tkolekcija\tI\tf.
32739\tkolektiv\tI\tm.
32740\tkolektivny\tI\tadj.
2201\tkolěno\t\tn.
35875\tkolhoz\t\tm.
4174\tkolibri\tI\tm.anim.
26619\tkoliček\t\tm.
17665\tkoliko ja věm\t\tadv.
5780\tkoliko ja znajų\t\tadv.
1275\tkoliko\t\tadv.
1948\tkoliko\t\tconj.
19613\tkolikokoli\t\tadv.
14655\tkoliko-libo\t\tadv.
23100\tkoliko-nebųď\t\tadv.
16952\tkolikoraky\t\tadj.
4869\tkolikosť\t\tf.
19595\tkolikråt\t\tadv.
19587\tkoliky\t\tadj.
8518\tkoljce\t\tn.
1332\tkolo\t\tn.
4917\tkolo\t\tprep.
17666\tkolokrěslo\t\tn.
16953\tkolona\tI\tf.
32072\tkolona\tI\tf.
20412\tkoloniaľny\tI\tadj.
34179\tkolonija\tI\tf.
36494\tkolonist\tI\tm.anim.
4970\tkolonizacija\tI\tf.
36493\tkolonizator\tI\tm.anim.
283\tkolonizovati\tI\tv.tr. ipf./pf.
1955\tkolor\tI\tm.
35890\tkolorovati\tI\tv.tr. ipf.
19790\tkolovati\t\tv.intr. ipf.
17668\tkolovråt\t\tm.
23700\tkolpak\t\tm.
22440\tKolumbija\t\tf.sg.
22441\tkolumbijsky\t\tadj.
26615\tkȯlzati sę\t\tv.refl. ipf.
26616\tkȯlzky\t\tadj.
2242\tkoma\tI\tf.
23428\tkoma\tI\tf.
3855\tkomanda\tI\tf.
2876\tkomar\t\tm.anim.
16954\tkombinacija\tI\tf.
26625\tkombinatorny\tI\tadj.
16955\tkombinovati\tI\tv.tr. ipf.
36645\tkomedija\tI\tf.
2877\tkomentaŕ\tI\tm.
36317\tkomentator\tI\tm.anim.
568\tkomentovati\tI\tv.tr. ipf.
5148\tkomerciaľny\tI\tadj.
23427\tkometa\tI\tf.
3507\tkomfort\tI\tm.
26627\tkomfortno\tI\tadv.
36478\tkomfortny\tI\tadj.
4403\tkomičny\tI\tadj.
8537\tkomik\tI\tm.anim.
36289\tkomiks\tE\tm.
8538\tkomin\t\tm.
8539\tkominjaŕ\t\tm.anim.
854\tkomisaŕ\tI\tm.anim.
1964\tkomisija\tI\tf.
1110\tkomitet\tI\tm.
815\tkomnata\t\tf.
1842\tkomora\t\tf.
36880\tkomorna muzika\tI\tf.sg.
36878\tkomorny concert\tI\tm.
36879\tkomorny orkestr\tI\tm.
33088\tkompakt-disk\tI\tm.
793\tkompanija\tI\tf.
32931\tkompas\tI\tm.
35376\tkompatibiľnosť\tI\tf.
35375\tkompatibiľny\tI\tadj.
4972\tkompensacija\tI\tf.
524\tkompensovati\tI\tv.tr. ipf./pf.
35965\tkompetentnosť\tI\tf.
35964\tkompetentny\tI\tadj.
820\tkompeticija\tI\tf.
17670\tkompetitivny\tI\tadj.
15957\tkompjuter\tI\tm.
15958\tkompjuterizovany\tI\tadj.
15959\tkompjuterizovati\tI\tv.tr. ipf.
32313\tkompjuterna myš\t\tf.
15960\tkompjuterny\tI\tadj.
34675\tkompleks\tI\tm.
36587\tkompletno\tI\tadv.
4378\tkompletnosť\tI\tf.
4377\tkompletny\tI\tadj.
4971\tkomplikacija\tI\tf.
15952\tkomplikovany\tI\tadj.
821\tkomplikovati\tI\tv.tr. ipf.
20148\tkomponent\tI\tm.
8544\tkomponovati\tI\tv.tr. ipf.
35582\tkompozicija\tI\tf.
816\tkompozitor\tI\tm.anim.
16956\tkompromis\tI\tm.
16957\tkompromisny\tI\tadj.
736\tkomunikacija\tI\tf.
1277\tkomunikovati\tI\tv.intr. ipf.
2074\tkomunist\tI\tm.anim.
1065\tkomunističny\tI\tadj.
4402\tkomunizm\tI\tm.sg.
35120\tkoncentracija\tI\tf.
16958\tkoncentrovati\tI\tv.tr. ipf.
15963\tkoncepcija\tI\tf.
20413\tkonceptuaľny\tI\tadj.
4782\tkoncert\tI\tm.
4785\tkoncert\tI\tm.
23363\tkončati sę\t\tv.refl. ipf.
535\tkončati\t\tv.tr. ipf.
16960\tkončina\t\tf.
21697\tkondicija\t\tn.
16959\tkondicional\tI\tm.
35876\tkondicioner\tE\tm.
15683\tkonduktor\tI\tm.anim.
15365\tkonec tydnja\t\tm.
536\tkonec\t\tm.
14659\tkonečnik\t\tm.
17674\tkonečno\t\tadv.
17676\tkonečnosť\t\tf.
8557\tkonečny\t\tadj.
35912\tkonfederacija\tI\tf.
799\tkonferencija\tI\tf.
844\tkonfiskovati\tI\tv.tr. ipf.
822\tkonflikt\tI\tm.
824\tkonfrontacija\tI\tf.
32454\tKongo\t\tn.sg.
32455\tkongolezsky\t\tadj.
823\tkongres\tI\tm.
26640\tkoničina\t\tf.
26642\tkonina\t\tf.
1038\tkonj\t\tm.anim.
17673\tkonj\t\tm.anim.
4645\tkonjak\tF\tm.
26645\tkonjaŕ\t\tm.anim.
32074\tkonjaŕ\t\tm.anim.
809\tkonjugacija\tI\tf.
808\tkonjunkcija\tI\tf.
20414\tkonkluzija\tI\tf.
23108\tkonkretno\tI\tadv.
810\tkonkretny\tI\tadj.
4973\tkonkurencija\tI\tf.
17679\tkonkurencijny\tI\tadj.
35262\tkonkurent\tI\tm.anim.
811\tkonkurovati\tI\tv.intr. ipf.
812\tkonkurs\tI\tm.
26650\tkonnica\t\tf.
19792\tkonnik\t\tm.anim.
26652\tkonny\t\tadj.
8572\tkonopja\t\tf.
26657\tkonopjany\t\tadj.
35013\tkonotacija\tI\tf.
33321\tkonserva\tI\tf.
17680\tkonservativec\tI\tm.anim.
8574\tkonservativnosť\tI\tf.
2889\tkonservativny\tI\tadj.
8583\tkonservatizm\tI\tm.sg.
8584\tkonservovany\tI\tadj.
1120\tkonservovati\tI\tv.tr. ipf.
2119\tkonsilium\tI\tm.
19793\tkonsistencija\tI\tf.
26658\tkonsky\t\tadj.
26659\tkonsonant\tI\tm.
17681\tkonspiracija\tI\tf.
36049\tkonspirator\tI\tm.anim.
35836\tKonstantinopol\t\tm.sg.
1984\tkonstitucija\tI\tf.
35233\tkonstitucijny\tI\tadj.
4873\tkonstrukcija\tI\tf.
4872\tkonstruovati\tI\tv.tr. ipf.
5926\tkonsul\tI\tm.anim.
5927\tkonsulat\tI\tm.
5127\tkonsultacija\tI\tf.
35568\tkonsultant\tI\tm.anim.
1856\tkonsumerizm\tE\tm.sg.
2054\tkontakt\tI\tm.
36206\tkontaktna sočevica\t\tf.
36395\tkontejner\tE\tm.
19794\tkontekst\tI\tm.
2112\tkontinent\tI\tm.
6210\tkontinentaľny šelf\tI\tm.
15973\tkontingent\tI\tm.
35332\tkontinuum\tI\tm.
3328\tkonto\tI\tn.
4156\tkontrabanda\tI\tf.
8576\tkontrabanda\tI\tf.
4158\tkontrabandnik\tI\tm.anim.
4159\tkontrabandny\tI\tadj.
15367\tkontrabandovańje\tI\tn.sg.
4157\tkontrabandovati\tI\tv.tr. ipf.
23441\tkontrabas\tI\tm.
35844\tkontracepcija\tI\tf.
19795\tkontrakcija\tI\tf.
2146\tkontrarevolucija\tI\tf.
19796\tkontrast\tI\tm.
33001\tkontratenor\tI\tm.anim.
3483\tkontrola, kontrolj\tI\tf.
832\tkontrolovati\tI\tv.tr. ipf.
3482\tkontrolovati\tI\tv.tr. ipf.
19797\tkonvencija\tI\tf.
35047\tkonvencionaľny\tI\tadj.
19798\tkonvent\tI\tm.
36684\tkonversija\tI\tf.
16372\tkonvoj\tI\tm.
1669\tkooperacija\tI\tf.
839\tkooperovati\tI\tv.intr. ipf.
36213\tkoordinacija\tI\tf.
35225\tkoordinata\tI\tf.
835\tkoordinator\tI\tm.anim.
35226\tkoordinovati\tI\tv.tr. ipf./pf.
26664\tkopa\t\tf.
3739\tkopaljnja\t\tf.
26666\tkopańje\t\tn.sg.
834\tkopati\t\tv.tr. ipf.
32080\tkopějka\t\tf.
36813\tKopenhagen\tI\tm.
2113\tkopija\tI\tf.
3519\tkopijovati, kopirovati\tI\tv.tr. ipf.
26674\tkopje\t\tn.
26679\tkopȯť\t\tf.
828\tkopr\t\tm.
538\tkopriva\t\tf.
26678\tkoprivny\t\tadj.
8596\tkoprova supa\t\tf.
8597\tkoprove ogurky\t\tm.pl.
14662\tkoprovy\t\tadj.
35838\tkoptsky\t\tadj.
26680\tkopytnik\t\tm.
2116\tkopyto\t\tn.
764\tkora\t\tf.
26685\tkora\t\tf.
358\tkorab\t\tm.
17682\tkorabnica\t\tf.
17683\tkorabnik\t\tm.anim.
21317\tkorabokrušenec\t\tm.anim.
21318\tkorabokrušeńje\t\tn.
26688\tkoral\tI\tm.anim.
26689\tKoran\tI\tm.
848\tkordon\tI\tm.
6176\tKoreja\t\tf.sg.
22768\tkorejsky\t\tadj.
26694\tkorekcija\tI\tf.
26696\tkorektny\tI\tadj.
26697\tkorektor\tI\tm.anim.
17684\tkorelativ\tI\tm.
26699\tkorenisty\t\tadj.
26700\tkoreniti sę\t\tv.refl. ipf.
2913\tkorenj\t\tm.
26702\tkorenj\t\tm.
6063\tkorespondencija\tI\tf.
6056\tkorespondent\tI\tm.anim.
26707\tkoriandr\tI\tm.sg.
26708\tkorica\t\tf.
1435\tkoričnevy\t\tadj.
26709\tkoridor\tI\tm.
19799\tkorigovati\tI\tv.tr. ipf.
1509\tkorisť\t\tf.
5189\tkoristati\t\tv.tr. ipf.
35260\tkoristiti\t\tv.tr. ipf.
16961\tkoristnik\t\tm.anim.
6271\tkoristny\t\tadj.
8610\tkoriti\t\tv.tr. ipf.
4302\tkorka\t\tf.
36833\tkornet\tI\tm.
35663\tkornijsky\t\tadj.
23189\tkorȯk\t\tm.
857\tkorona\tI\tf.
35682\tkoronacija\tI\tf.
36462\tkoronavirus\tI\tm.
1623\tkoronovati\tI\tv.tr. ipf.
35383\tkorporacija\tI\tf.
35527\tkorporativny\tI\tadj.
4618\tkorpus\tI\tm.
867\tkorupcija\tI\tf.
26718\tkorveta\tF\tf.
26719\tkoryfej\tI\tm.anim.
649\tkoryto\t\tn.
26725\tkoryto\t\tn.
1622\tkos\t\tm.anim.
2965\tkosa\t\tf.
26729\tkosa\t\tf.
26731\tkosaŕ\t\tm.
26732\tkośba\t\tf.
17689\tkositi\t\tv.tr. ipf.
26738\tkosm\t\tm.
26739\tkosmaty\t\tadj.
36682\tkosmetička\tI\tf.
36680\tkosmetičny\tI\tadj.
36681\tkosmetik\tI\tm.anim.
36679\tkosmetika\tI\tf.sg.
17690\tkosmična stancija\tI\tf.
17692\tkosmičny korab\tI\tm.
17691\tkosmičny\tI\tadj.
26741\tkosmonavt\tI\tm.anim.
17694\tkosmos\tI\tm.
26743\tkosooky\t\tadj.
1508\tKosovo\t\tn.sg.
868\tkosovsky\t\tadj.
871\tkosť\t\tf.
22459\tKostarika\t\tf.sg.
22460\tkostarikansky\t\tadj.
8623\tkostel\t\tm.
33588\tkostěnka\t\tf.
26744\tkostěny\t\tadj.
26751\tkostjum\tI\tm.
26746\tkostka\t\tf.
26748\tkostlivy\t\tadj.
23330\tkostno jędro\t\tn.
733\tkostny mozȯk\t\tm.
26749\tkostny\t\tadj.
2635\tkosy\t\tadj.
5658\tkoš odpadov\t\tm.
5194\tkoš\t\tm.
5195\tkošaŕka\t\tf.
26754\tkošeńje\t\tn.sg.
32090\tkošerny\tI\tadj.
1465\tkoštovati\tI\tv.tr. ipf.
4794\tkošulja\t\tf.
1093\tkot\t\tm.anim.
26759\tkotę\t\tn.
23185\tkotel\t\tm.
34416\tkotiti sę\t\tv.refl. ipf.
26763\tkotka\t\tf.
26764\tkotlaŕ\t\tm.anim.
35880\tkotlet\tI\tm.
26765\tkotlina\t\tf.
26766\tkotlovina\t\tf.
26772\tkotva\t\tf.
2419\tkovač\t\tm.anim.
26774\tkovaljnja\t\tf.
26775\tkovańje\t\tn.sg.
530\tkovati\t\tv.tr. ipf.
33929\tkovčeg\t\tm.
34922\tkoverec\t\tm.
34168\tkoverta\tI\tf.
8635\tkovina\t\tf.
26780\tkovny\t\tadj.
26781\tkovylj\t\tm.sg.
74\tkoza\t\tf.
8637\tkozačsky\t\tadj.
8638\tkozak\t\tm.anim.
32021\tkozel odpušćeńja\t\tm.anim.
26784\tkozel\t\tm.anim.
26785\tkozina\t\tf.
26786\tkoźja bråda\t\tf.
32096\tkoźja bråda\t\tf.
26787\tkoźji\t\tadj.
26791\tKozorog\t\tm.anim.
36064\tkozyŕ\t\tm.
1473\tkoža\t\tf.
23212\tkoženy\t\tadj.
17695\tkožuh\t\tm.
26798\tkožuhaŕ\t\tm.anim.
17696\tkrab\t\tm.anim.
791\tkråbka\t\tf.
26802\tkradež\t\tf.
36171\tkradom\t\tadv.
855\tkrađa\t\tf.
4124\tkrah\tD\tm.
860\tkraj\t\tm.
3579\tkraj\t\tm.
36164\tkrajec\t\tm.
4998\tkrajevid\t\tm.
36211\tKrajina Baskov\t\tf.
4559\tkrajina\t\tf.
19801\tkrajina\t\tf.
8647\tkrajnec\t\tm.anim.
8650\tkrajno opasny\t\tadj.
30\tkrajno\t\tadv.
8651\tkrajnosť\t\tf.
36207\tkrajny termin\t\tm.
757\tkrajny\t\tadj.
25790\tkrakati\t\tv.intr. ipf.
26816\tkrålica\t\tf.
20415\tkrålik\t\tm.anim.
1380\tkrålj\t\tm.anim.
17697\tkrålj\t\tm.anim.
31852\tkrålj\t\tm.anim.
26812\tkråljev\t\tadj.
1658\tkråljeva\t\tf.
20874\tkråljevska boa\tI\tf.
20875\tkråljevsky udav\tS\tm.anim.
1832\tkråljevsky\t\tadj.
559\tkråljevstvo\t\tn.
1094\tkrasa\t\tf.
16725\tkrasavec\t\tm.anim.
16724\tkrasavica\t\tf.
26823\tkrasiti\t\tv.tr. ipf.
20416\tkrasivosť\t\tf.
8660\tkrasivši\t\tadj.
2698\tkrasivy\t\tadj.
8662\tkrasnějši\t\tadj.
8663\tkrasnica\t\tf.
21319\tkrasnorěčivosť\t\tf.
21320\tkrasnorěčivy\t\tadj.
8664\tkrasnosť\t\tf.
3790\tkrasny\t\tadj.
20876\tkrasopis\tS\tm.
20877\tkrasopisec\tS\tm.anim.
2695\tkrasota\t\tf.
2642\tkråsta\t\tf.
26829\tkråstavy\t\tadj.
26804\tkrasti sę\t\tv.refl. ipf.
627\tkrasti\t\tv.tr. ipf.
19803\tkråtko\t\tadv.
26833\tkråtkonogy\t\tadj.
26836\tkråtkosť\t\tf.
35282\tkråtkotrajny\t\tadj.
8669\tkråtkovidnik\t\tm.anim.
8671\tkråtkovidnosť\t\tf.
8673\tkråtkovidny\t\tadj.
2641\tkråtky\t\tadj.
8668\t-kråtno\t\tsuffix
1600\tkråva\t\tf.
17698\tkravata\tF\tf.
26840\tkråvji\t\tadj.
849\tkrč\t\tm.
850\tkrčiti\t\tv.tr. ipf.
847\tkrčma\t\tf.
26848\tkreativnosť\tI\tf.
32029\tkreativny\tI\tadj.
3495\tkreda\t\tf.
35104\tkredenc\tD\tm.
3525\tkredit\tI\tm.
26869\tkrěhky\t\tadj.
32032\tkrem\tF\tm.
26853\tkremenisty\t\tadj.
3039\tkremenj\t\tm.
26856\tkremenny\t\tadj.
36198\tKremlj\t\tm.
22609\tkremnij\t\tm.sg.
26858\tkremovy\tF\tadj.
35905\tkreol\tI\tm.
19804\tkreoľsky\t\tadj.
26859\tkrěpěti\t\tv.intr. ipf.
26860\tkrěpiti\t\tv.tr. ipf.
26862\tkrěpkosť\t\tf.
4047\tkrěpky\t\tadj.
3022\tkrěposť\t\tf.
26864\tkresalo\t\tn.
26865\tkresati\t\tv.tr. ipf.
2700\tkrěslo\t\tn.
2428\tkrest\t\tm.
35720\tkrestitelj\t\tm.anim.
2699\tkrestiti\t\tv.tr. ipf.
17704\tkrestna mati\t\tf.
17705\tkrestny otec\t\tm.anim.
6177\tkrestovy pohod\t\tm.
6182\tkrešćeńje\t\tn.
23231\tkreten\tF\tm.anim.
23233\tkretensky\tF\tadj.
33641\tkrevetka\t\tf.
1091\tkričati\t\tv.tr. ipf.
895\tkrijumčariti\t\tv.tr. ipf.
3215\tkrik\t\tm.
35091\tkriket\tE\tm.
747\tkriknųti\t\tv.tr. pf.
26943\tkrilaty\t\tadj.
2637\tkrilo\t\tn.
35707\tkripta\tI\tf.
23162\tkristal\tI\tm.
35365\tkristalizovati\tI\tv.tr. ipf./pf.
23163\tkristaľny\tI\tadj.
19807\tkriterij\tI\tm.
2639\tkritičny\tI\tadj.
80\tkritik\tI\tm.anim.
35039\tkritika\tI\tf.
2164\tkritikovati\tI\tv.tr. ipf.
26879\tkriva\t\tf.
19808\tkrivda\t\tf.
19809\tkrivda\t\tf.
3752\tkrivditi\t\tv.intr. ipf.
3534\tkrivina\t\tf.
19811\tkriviti\t\tv.tr. ipf.
26882\tkrivoboky\t\tadj.
26883\tkrivonogy\t\tadj.
19814\tkrivoprisęžničstvo\t\tn.sg.
26888\tkrivošija\t\tf.
26890\tkrivota\t\tf.
4762\tkrivověrnik\t\tm.anim.
4763\tkrivověrstvo\t\tn.sg.
748\tkrivy\t\tadj.
3366\tkrivy\t\tadj.
4765\tkrivy\t\tadj.
26893\tkrivy\t\tadj.
138\tkriza\tI\tf.
6181\tkriž\t\tm./f.
35934\tkriženosec\t\tm.anim.
33748\tkriževka\t\tf.
17708\tkrižišče\t\tn.
26850\tkrjakati\t\tv.intr. ipf.
758\tkrma\t\tf.
859\tkrmiti\t\tv.tr. ipf.
3735\tkrmjeńje\t\tn.
8717\tkrmna trųbka\t\tf.
14666\tkrmny\t\tadj.
8722\tkroček\t\tm.
26868\tkrȯha\t\tf.
19816\tkroj\t\tm.
19817\tkroj\t\tm.
19818\tkrojač\t\tm.anim.
19819\tkrojiti\t\tv.tr. ipf.
852\tkrok\t\tm.
35447\tkroket\tE\tm.
35448\tkroket\tF\tm.
5298\tkrokodil\tI\tm.anim.
3461\tkromě togo\t\tadv.
318\tkromě\t\tprep.
35719\tkronika\tI\tf.
35775\tkronikaŕ\tI\tm.anim.
26906\tkropilo\t\tn.
26907\tkropiti\t\tv.intr. ipf.
32052\tkrȯšiti sę\t\tv.refl. ipf.
26916\tkrȯšiti\t\tv.tr. ipf.
508\tkrȯt\t\tm.anim.
26910\tkrotiti\t\tv.tr. ipf.
26911\tkrotky\t\tadj.
26912\tkrotosť\t\tf.
1899\tkrȯv\t\tf.
14667\tkrȯvna infekcija\tI\tf.
4519\tkrȯvno těljče\t\tn.
4523\tkrȯvny pritisk\t\tm.
17709\tkrȯvny\t\tadj.
26920\tkrtovina\t\tf.
880\tkrųg\t\tm.
15371\tkrųgla\t\tf.
19497\tkrųgly stol\t\tm.
2341\tkrųgly\t\tadj.
26925\tkrųgovy\t\tadj.
26926\tkrupa\t\tf.
26929\tkrušina\t\tf.
19823\tkrųtiti sę\t\tv.refl. ipf.
19820\tkrųtiti\t\tv.tr. ipf.
26931\tkruty\t\tadj.
26932\tkrųžeńje\t\tn.
32054\tkrųžiti sę\t\tv.refl. ipf.
26933\tkrųžiti\t\tv.tr. ipf.
36543\tkrųžno križišče\t\tn.
4514\tkrvaviti\t\tv.intr. ipf.
36436\tkrvavjeńje\t\tn.
8738\tkrvavši\t\tadj.
4524\tkrvavy\t\tadj.
4516\tkrvinȯk\t\tm.
6434\tkrvonosny sųd\t\tm.
26941\tkrvopijec\t\tm.anim.
26940\tkrvoproliťje\t\tn.sg.
22065\tkrvotok\t\tm.
17710\tKrym\t\tm.sg.
35234\tkrymsky\t\tadj.
17711\tkrysa\t\tf.
17712\tkryti sę\t\tv.refl. ipf.
2638\tkryti\t\tv.tr. ipf.
17713\tkrzno\t\tn.
32027\tksenofob\tI\tm.anim.
32026\tksenofobija\tI\tf.
4786\tksilofon\tI\tm.
3019\tkto\t\tpron.int.
21322\tktokoli\t\tpron.indef.
322\tkto-nebųď\t\tpron.indef.
2643\tktory\t\tpron.rel.
4189\tktory\t\tpron.int.
19614\tktorykoli\t\tpron.indef.
14670\tktory-libo\t\tpron.indef.
2954\tktory-nebųď\t\tpron.indef.
240\tkub\tI\tm.
16278\tKuba\t\tf.sg.
2646\tKubanec\t\tm.anim.
16279\tkubansky\t\tadj.
35956\tkubičny\tI\tadj.
5779\tkubȯk\t\tm.
26955\tkųdělj\t\tf.
498\tkųdeŕ\t\tm.
26958\tkųdlaty\t\tadj.
26960\tkųdravy\t\tadj.
244\tkųdy\t\tadv.
19615\tkųdykoli\t\tadv.
19551\tkųdy-libo\t\tadv.
2688\tkųdy-nebųď\t\tadv.
34761\tkufer\t\tm.
3518\tkuhaŕ\t\tm.anim.
8755\tkuhaŕka\t\tf.
35196\tkuhaŕsky\t\tadj.
23567\tkuhaŕstvo\t\tn.sg.
8756\tkuhati\t\tv.tr. ipf.
8758\tkuhenny\t\tadj.
1790\tkuhnja\t\tf.
26963\tkukati\t\tv.intr. ipf.
22397\tkukla\t\tf.
254\tkųkolj\t\tm.
17714\tkukučka\t\tf.
8760\tkukuruza\t\tf.
26966\tkulik\t\tm.anim.
35195\tkulinarny\tI\tadj.
3475\tkulja\t\tf.
1295\tkuljemet\t\tm.
26967\tkuljgati\t\tv.intr. ipf.
26968\tkuljgavy\t\tadj.
8764\tkulminacija\tI\tf.
8765\tkulminovati\tI\tv.intr. ipf.
36308\tkult\tI\tm.
35723\tkultivar\t\tm.
1301\tkultura\tI\tf.
2647\tkulturny\tI\tadj.
17715\tkum\t\tm.anim.
17716\tkuma\t\tf.
4771\tkuna\t\tf.
26974\tkup\t\tm.
1294\tkupa\t\tf.
3452\tkųpaljnja\t\tf.
3454\tkųpańje\t\tn.sg.
26977\tkųpati sę\t\tv.refl. ipf.
3453\tkųpati\t\tv.tr. ipf.
26979\tkupec\t\tm.anim.
26980\tkupec\t\tm.anim.
3451\tkųpělj\t\tf.
26982\tkųpina\t\tf.
258\tkupiti\t\tv.tr. pf.
26984\tkupja\t\tf.
26987\tkupola\tI\tf.
35016\tkupon\tI\tm.
17717\tkupoprodaž\t\tf.
2648\tkupovatelj\t\tm.anim.
2884\tkupovati\t\tv.tr. ipf.
26989\tkur\t\tm.anim.
1231\tkura\t\tf.
8776\tkurec\t\tm.
26992\tkurętina\t\tf.
26993\tkurgan\t\tm.
33722\tkuriozny\tI\tadj.
26996\tkuriti\t\tv.tr. ipf.
26997\tkurivo\t\tn.
26994\tkuŕji\t\tadj.
26999\tkurnik\t\tm.
27000\tkuropatva\t\tf.
265\tkurort\tD\tm.
3229\tkurs\tI\tm.
245\tkursiv\tI\tm.sg.
32231\tkursivny\tI\tadj.
36243\tkursor\tI\tm.
246\tkurva\t\tf.
27002\tkųs\t\tm.
32123\tkus\t\tm.
17718\tkųsati\t\tv.tr. ipf.
27005\tkųsnųti\t\tv.tr. pf.
247\tkųsȯk\t\tm.
23800\tkust\t\tm.
17720\tkustomizovańje\tI\tn.
17721\tkustomizovati\tI\tv.tr. ipf./pf.
27007\tkusy\t\tadj.
27009\tkusy\t\tadj.
249\tkųt\t\tm.
27011\tkųtny\t\tadj.
23151\tkuvalda\t\tf.
2645\tKuvejt\t\tm.sg.
35571\tkuzen\tF\tm.anim.
35572\tkuzina\tF\tf.
27013\tkuznja\t\tf.
4415\tkvadrat\tI\tm.
4416\tkvadratny\tI\tadj.
27016\tkvakati\t\tv.intr. ipf.
36460\tkvalifikacija\tI\tf.
20417\tkvalifikovati\tI\tv.tr. ipf.
35736\tkvalitet\tI\tm.
35323\tkvantitativny\tI\tadj.
23621\tkvantova mehanika\tI\tf.
32030\tkvarc\t\tm.sg.
36838\tkvarta\tI\tf.
1538\tkvartal\tI\tm.
27017\tkvartira\tI\tf.
8787\tkvas\t\tm.
27018\tkvas\t\tm.sg.
2644\tkvasiti\t\tv.intr. ipf.
6272\tkvestija\tI\tf.
20878\tkvičati\t\tv.intr. ipf.
36839\tkvinta\tI\tf.
27024\tkvintesencija\tI\tf.
35477\tkvitancija\tI\tf.
34847\tkviz\tE\tm.
27026\tkvokati\t\tv.intr. ipf.
2728\tkvorum\tI\tm.
406\tkydati\t\tv.tr. ipf.
2352\tkydnųti\t\tv.tr. pf.
17645\tkyhati\t\tv.intr. ipf.
17646\tkyhnųti\t\tv.intr. pf.
360\tkyj\t\tm.
17647\tKyjev\t\tm.sg.
35662\tkyjevsky\t\tadj.
26501\tkyla\t\tf.
17649\tkymati\t\tv.intr. ipf.
17650\tkymnųti\t\tv.intr. pf.
26503\tkypěńje\t\tn.sg.
2366\tkypěti\t\tv.intr. ipf.
23644\tkyrgyzsky\t\tadj.
152\tKyrgyzstan\t\tm.sg.
14644\tkysle ogurky\t\tm.pl.
23038\tkyslina\t\tf.
22603\tkyslorod\t\tm.sg.
1418\tkysly\t\tadj.
26510\tkysnųti\t\tv.intr. ipf.
20407\tkyt\t\tm.anim.
17652\tkyvati\t\tv.intr. ipf.
17653\tkyvnųti\t\tv.intr. pf.
36888\tLaba\t\tf.sg.
1303\tlabęď\t\tm.anim.
27028\tlabęďji\t\tadj.
35560\tlaboratorija\tI\tf.
27030\tlageŕ\tD\tm.
21323\tlagodno\t\tadv.
21327\tlagodnosť\t\tf.
21331\tlagodny\t\tadj.
27032\tlaj\t\tm.
27033\tlajańje\t\tn.sg.
253\tlajati\t\tv.intr. ipf.
27036\tlajno\t\tn.sg.
36849\tlak\tI\tm.
27037\tlakomec\t\tm.anim.
27039\tlakomstvo\t\tn.
27040\tlakomy\t\tadj.
32146\tlakoničny\tI\tadj.
385\tlåkȯť\t\tm.
36850\tlakovati\tI\tv.tr. ipf.
33581\tlama\tI\tf.
27041\tlamańje\t\tn.
266\tlamati\t\tv.tr. ipf.
20879\tlampa\tI\tf.
17723\tlancuh\t\tm.
17724\tlanec\t\tm.
27044\tlanjėc\t\tm.
5951\tlanji\t\tadv.
32142\tlanjka\t\tf.
5953\tlansky\t\tadj.
502\tlapa\t\tf.
4701\tlapati\t\tv.tr. ipf.
35499\tlapka\t\tf.
27049\tLaplandija\t\tf.
23585\tlaser\tE\tm.
268\tlasica\t\tf.
27052\tlaska\t\tf.
32147\tlaska\t\tf.
32148\tlaska\t\tf.
32150\tlaska\t\tf.
267\tlaskati\t\tv.tr. ipf.
27053\tlaskati\t\tv.tr. ipf.
3226\tlaskavy\t\tadj.
32152\tlaskavy\t\tadj.
32153\tlaskavy\t\tadj.
32154\tlaskavy\t\tadj.
5675\tlaso\tI\tn.
2650\tlastovica\t\tf.
27059\tlatati\t\tv.tr. ipf.
32263\tlateks\tI\tm.anim.
16962\tlatinica\t\tf.
2649\tlatinsky\t\tadj.
879\tLatvija\t\tf.sg.
4724\tLatyš\t\tm.anim.
4723\tlatyšsky\t\tadj.
32157\tlava\tI\tf.
32601\tlavanda\tI\tf.
8807\tlavina\t\tf.
27062\tlavka\t\tf.
33569\tlavr\tI\tm.
32220\tlavreat\tI\tm.anim.
19825\tlaziti\t\tv.intr. ipf.
19826\tlaziti\t\tv.intr. ipf.
27066\tlaznja\t\tf.
27067\tle\t\tadv.
32158\tle\t\tadv.
27068\tlěčebny\t\tadj.
8809\tlěčeńje\t\tn.
4269\tlěčiljnja\t\tf.
14673\tlěčitelj\t\tm.anim.
36662\tlěčiti sę\t\tv.refl. ipf.
4130\tlěčiti\t\tv.tr. ipf.
2729\tled\t\tm.sg.
17725\tleděna gora\t\tf.
36230\tleděna svěća\t\tf.
27072\tleděněti\t\tv.intr. ipf.
27073\tleděniti\t\tv.tr. ipf.
27074\tleděny\t\tadj.
27076\tlednik\t\tm.
5908\tledolomač\t\tm.
32159\tledovec\t\tm.
19827\tledovity\t\tadj.
14674\tledva\t\tadv.
8816\tlędvica\t\tf.
8818\tlędvičny kamenj\t\tm.
8817\tlędvičny\t\tadj.
19498\tlegalizovati\tI\tv.tr. ipf.
19499\tlegaľny\tI\tadj.
20420\tlęgati\t\tv.tr. ipf.
1307\tlegenda\tI\tf.
35920\tlegendarny\tI\tadj.
35353\tlegija\tI\tf.
35352\tlegion\tI\tm.
35504\tlegitimny\tI\tadj.
8826\tlegke pěnęzy\t\tm.pl.
2652\tlegko\t\tadv.
19829\tlegkomysljny\t\tadj.
3286\tlegkosť\t\tf.
16482\tlegkověrny\t\tadj.
884\tlegky\t\tadj.
27273\tlegovišče\t\tn.
19830\tlegše\t\tadv.
17726\tlegši\t\tadj.
36548\tlęgti sę\t\tv.refl. ipf.
20418\tlegti\t\tv.intr. pf.
20421\tlęgti\t\tv.tr. ipf.
894\tlehitsky\t\tadj.
23758\tlejka\t\tf.
27098\tlejtenant\t\tm.anim.
407\tlěk\t\tm.
2873\tlěkaŕ\t\tm.anim.
27103\tlěkaŕka\t\tf.
8831\tlěkaŕsky\t\tadj.
27105\tlěkaŕstvo\t\tn.
2694\tlekcija\tI\tf.
35946\tleksika\tI\tf.
16963\tleksikaľny\tI\tadj.
295\tleksikon\tI\tm.
35210\tlektor\t\tm.anim.
27110\tlelek\t\tm.anim.
2653\tlemeš\t\tm.
306\tlen\t\tm.sg.
27114\tlenišče\t\tn.
27115\tlěniti sę\t\tv.refl. ipf.
15374\tlěnivec\t\tm.anim.
8836\tlěnivo\t\tadv.
27118\tlěnivosť\t\tf.
8837\tlěnivy\t\tadj.
27122\tlěnjesť\t\tf.
1482\tlěnji\t\tadj.
32469\tleopard\tI\tm.anim.
27126\tlepetańje\t\tn.sg.
27127\tlepetati\t\tv.intr. ipf.
23296\tlěpilo\t\tn.
32869\tlěpiti sę\t\tv.refl. ipf.
2298\tlěpiti\t\tv.tr. ipf.
8839\tlěpje\t\tadv.
27207\tlěpkosť\t\tf.
23294\tlěpky\t\tadj.
23872\tlěpo\t\tadv.
27131\tlěpota\t\tf.
32468\tlepra\tI\tf.
2299\tlěpši\t\tadj.
3315\tlěpy\t\tadj.
2651\tlěs\t\tm.
36334\tlesbijka\tI\tf.
36335\tlesbijsky\tI\tadj.
17731\tlěsisty\t\tadj.
2654\tlěska\t\tf.
2655\tleskati\t\tv.intr. ipf.
2697\tlesknųti\t\tv.intr. pf.
27141\tlěsnik\t\tm.anim.
27140\tlěsny orěh\t\tm.
8848\tlěsny požar\t\tm.
23461\tlěsny rog\t\tm.
3632\tlěsny\t\tadj.
5850\tlěsȯk\t\tm.
27145\t#lesť\t\tf.
17732\tlěstvica\t\tf.
27147\tlešč\t\tm.anim.
27148\tleščina\t\tf.
3626\tlet\t\tm.
14676\tlěta\t\tn.pl.
19831\tletač\t\tm.anim.
16879\tlětajųća myš\t\tf.
8852\tlětalo\t\tn.
8855\tlětańje\t\tn.sg.
1202\tlětati\t\tv.intr. ipf.
19832\tletěti\t\tv.intr. ipf.
16275\tletišče\tS\tn.
309\t-lěťje\t\tn.
17733\tlětnji sȯlncevråt\t\tm.
27156\tlětnji, lětny\t\tadj.
2661\tlěto\t\tn.
35962\tletȯk\t\tm.
20880\tlětopis\t\tm.
20882\tlětopisec\t\tm.anim.
17734\tletova kabina\t\tf.
27161\tlětovati\t\tv.intr. ipf.
27162\tlětovišče\t\tn.
2656\tlev\t\tm.anim.
27163\tLev\t\tm.anim.
27165\tlěvak\t\tm.anim.
2696\tlěvica\t\tf.
27167\tlěvica\t\tf.
8859\tlevji\t\tadj.
32167\tlěvorųky\t\tadj.
308\tlěvy\t\tadj.
2660\tlězti\t\tv.intr. ipf.
19833\tlězti\t\tv.intr. ipf.
2659\tležati\t\tv.intr. ipf.
35987\tležęći velosiped\t\tm.
35988\tležiped\t\tm.
2427\tležišče\t\tn.
14678\tležkovina\t\tf.
17735\tlgańje\t\tn.sg.
17736\tlgaŕ\t\tm.anim.
17737\tlgaŕka\t\tf.
2658\tlgati\t\tv.intr. ipf.
2657\tli\t\tconj.
17738\tli\t\tparticle
32448\tLiban\t\tm.sg.
32449\tlibansky\t\tadj.
19502\tliberalizacija\tI\tf.
19501\tliberalizm\tI\tm.sg.
19503\tliberalizovati\tI\tv.tr. ipf.
205\tliberaľny\tI\tadj.
317\tLibija\t\tf.sg.
2710\tlibijsky\t\tadj.
22300\tlibovoljny\t\tadj.
889\tlice\t\tn.
8872\tlice\t\tn.
8876\tliceměr\t\tm.anim.
27186\tliceměriti\t\tv.intr. ipf.
3011\tliceměŕje\t\tn.sg.
8875\tliceměrka\t\tf.
8877\tliceměrno\t\tadv.
8878\tliceměrny\t\tadj.
35778\tlicencija\tI\tf.
36277\tliči\tI\tn.indecl.
20422\tličinka\t\tf.
19834\tlično\t\tadv.
3261\tličnosť\t\tf.
770\tličny\t\tadj.
321\tlider\tE\tm.anim.
2663\tlift\tE\tm.
17740\tliga\t\tf.
16964\tligatura\tI\tf.
35484\tlignit\tI\tm.sg.
2687\tLihtenštejn\t\tm.sg.
27192\tlihva\t\tf.
32170\tlihva\t\tf.
32172\tlihvaŕ\t\tm.anim.
32176\tlihvaŕsky\t\tadj.
32177\tlihvaŕstvo\t\tn.sg.
5313\tlihy\t\tadj.
5315\tlihy\t\tadj.
27193\tlihy\t\tadj.
36366\tlihy\t\tadj.
32873\tliker\tF\tm.
32883\tlikvidacija\tI\tf.
32887\tlikvidator\tI\tm.anim.
32877\tlikvidovati\tI\tv.tr. ipf./pf.
27196\tlilovy\t\tadj.
33323\tlimfa\tI\tf.
33324\tlimfatičny vųzel\t\tm.
319\tlimitovati\tI\tv.tr. ipf.
5239\tlimon\tI\tm.
35585\tlimonada\tI\tf.
34755\tlimuzina\tF\tf.
27198\tlin\t\tm.anim.
36846\tlinčevati\tE\tv.tr. ipf./pf.
35711\tlinearny\tI\tadj.
19835\tlingvističny\tI\tadj.
2664\tlinija\tI\tf.
8885\tlinijka\tI\tf.
2885\tlinjati\t\tv.intr. ipf.
6329\tlink\tI\tm.
32726\tlinza\t\tf.
342\tlipa\t\tf.
27200\tlipan\t\tm.anim.
8890\tlipenj\tS\tm.sg.
36811\tLisabon\tI\tm.
27212\tlisę\t\tn.
327\tlisica\t\tf.
27215\tlisička\t\tf.
27214\tliśji\t\tadj.
1397\tlist\t\tm.
2863\tlist\t\tm.
27221\tlisťje\t\tn.sg.
27219\tlistny\t\tadj.
23859\tlistȯk\t\tm.
8895\tlistopad\tS\tm.sg.
27223\tlistopad\t\tm.sg.
35963\tlistovka\t\tf.
335\tlišaj\t\tm.
27225\tlišaj\t\tm.
36435\tlišati\t\tv.tr. ipf.
20423\tlišiti\t\tv.tr. pf.
27229\tlitera\t\tf.
6203\tliterarny\tI\tadj.
340\tliteratura\tI\tf.
27231\tliteraturny język\t\tm.
35017\tliteraturny\tI\tadj.
338\tliti\t\tv.tr. ipf.
20424\tliti\t\tv.tr. ipf.
22599\tlitij\tI\tm.sg.
343\tlitȯvsky\t\tadj.
23019\tlitr\tI\tm.
332\tliturgičny\tI\tadj.
16965\tliturgija\tI\tf.
331\tLitva\t\tf.sg.
4720\tLitvanec\t\tm.anim.
8903\tLitvanka\t\tf.
333\tliva\t\tf.
14683\tlivada\t\tf.
27236\tlivny\t\tadj.
27237\tlizańje\t\tn.sg.
334\tlizati\t\tv.tr. ipf.
8907\tliznųti\t\tv.tr. pf.
22398\tljaljka\t\tf.
27242\tljněny\t\tadj.
27144\tljstiti\t\tv.tr. ipf.
32205\tljstivy\t\tadj.
14684\tljuba\t\tf.
8908\tljubezno\t\tadv.
3225\tljubezny\t\tadj.
20431\tljubimec\t\tm.anim.
27245\tljubimy\t\tadj.
20432\tljubitelj\t\tm.anim.
35593\tljubitelj\t\tm.anim.
356\tljubiti\t\tv.tr. ipf.
32248\tLjubljana\t\tf.sg.
20433\tljubopytnosť\t\tf.
20434\tljubopytny\t\tadj.
32202\tljubosť\t\tf.
5247\tljubȯv\t\tf.
8916\tljubȯvnica\t\tf.
5248\tljubȯvnik\t\tm.anim.
8918\tljubȯvno\t\tadv.
5892\tljubȯvny\t\tadj.
8919\tljubȯvny\t\tadj.
27256\tljuby\t\tm.anim.
27257\tljud\t\tm.
1941\tljudi\t\tf.pl.
27259\tljudny\t\tadj.
14686\tljudobijstvo\t\tn.sg.
17749\tljudojed\t\tm.anim.
22953\tljudojedsky\t\tadj.
17750\tljudojedstvo\t\tn.sg.
8921\tljudova sila\t\tf.
22956\tljudožerec\t\tm.anim.
22958\tljudožersky\t\tadj.
22957\tljudožerstvo\t\tn.sg.
8924\tljudskomašinovy interfejs\tM\tm.
5316\tljudskosť\t\tf.
4306\tljudsky\t\tadj.
8925\tljudstvo\t\tn.sg.
14688\tljudstvo\t\tn.sg.
23759\tljuljati\t\tv.tr. ipf.
34760\tljuljka\t\tf.
35768\tljutnja\t\tf.
27266\tljutosť\t\tf.
8928\tljuty\tS\tm.sg.
27267\tljuty\t\tadj.
27166\tljvę\t\tn.
27168\tljvica\t\tf.
2494\tlȯb\t\tm.
8929\tlobanja\t\tf.
34851\tlobi\tE\tm.indecl.
17741\tlobist\tI\tm.anim.
27269\tloboda\t\tf.
5788\tlobovati\tI\tv.intr. ipf.
537\tloď\t\tf.
2886\tlodka\t\tf.
32130\tlogaritm\tI\tm.
19836\tlogično\tI\tadv.
363\tlogičny\tI\tadj.
8933\tlogika\tI\tf.
32186\tlogopedija\tI\tf.
17742\tlogovati sę\tI\tv.refl. ipf.
20426\tloj\t\tm.sg.
32757\tlojalist\tI\tm.anim.
32756\tlojaľnosť\tI\tf.
1249\tlojaľny\tI\tadj.
27276\tlojiti\t\tv.tr. ipf.
35702\tlokalitet\tI\tm.
27280\tlokati\t\tv.tr. ipf.
16966\tlokativ\tI\tm.
27282\tloknųti\t\tv.tr. pf.
5669\tlokomotiva\tI\tf.
27286\tlom\t\tm.
32192\tlom\t\tm.
27287\tlomiti\t\tv.tr. ipf.
27288\tlomjeńje\t\tn.sg.
19837\tlomlivy\t\tadj.
23523\tLondon\t\tm.sg.
366\tlono\t\tn.
17744\tlono\t\tn.
367\tlopata\t\tf.
27298\tlopatka\t\tf.
27302\tlopuh\t\tm.
35455\tlori\tI\tm.anim.
386\tloś\t\tm.anim.
32264\tlosion\tF\tm.
36036\tloskotati\t\tv.tr. ipf.
27309\tlosoś\t\tm.anim.
27308\tlososina\t\tf.
8941\tloše\t\tadv.
3446\tloši\t\tadj.
35229\tloterija\tI\tf.
352\tlov\t\tm.
17745\tlovec\t\tm.anim.
32197\tlovec\t\tm.anim.
27314\tlovečsky\t\tadj.
8944\t#lovhata\t\tf.
27315\tlovišče\t\tn.
8945\tlovitelj\t\tm.anim.
12057\tloviti rybų\t\tv.ipf.
1564\tloviti\t\tv.tr. ipf.
27318\tloviti\t\tv.tr. ipf.
27319\tlovitva\t\tf.
8947\tlovjeńje\t\tn.sg.
27321\tlovny\t\tadj.
36158\tloza\t\tf.
16268\tlȯž\tS\tf.
20429\tlože\t\tn.
1893\tlȯžica\t\tf.
20430\tložišče\t\tn.
353\tlȯžka\t\tf.
27329\tlȯžnosť\t\tf.
32196\tlȯžnosť\t\tf.
17746\tlȯžny\t\tadj.
339\tluč\t\tm./f.
375\tlučiti\t\tv.tr. ipf.
20436\tlučše\t\tadv.
14533\tlučši\t\tadj.
27338\tludy\t\tadj.
374\tlųk\t\tm.
17751\tluk\t\tm.
27340\tlųk\t\tm.
376\tlųka\t\tf.
27344\tlukavstvo\t\tn.sg.
27345\tlukavy\t\tadj.
36646\tlųkostrělėc\t\tm.anim.
31866\tlukovica\t\tf.
17752\tlukovy\t\tadj.
2701\tLuksemburg\t\tm.sg.
4910\tluksemburžsky\t\tadj.
23588\tluminescencija\tI\tf.
2690\tluna\tI\tf.
27348\tlunatik\tI\tm.anim.
4119\tlunno světlo\tM\tn.sg.
15988\tlunny\tI\tadj.
27351\tlupina\t\tf.
27352\tlupiti\t\tv.tr. ipf.
27353\tluska\t\tf.
27355\tluskati\t\tv.tr. ipf.
27358\tluščina\t\tf.
27359\tluščiti\t\tv.tr. ipf.
35796\tluteransky\tI\tadj.
2691\tlužičsky\t\tadj.
2662\tlyko\t\tn.
27365\tlysěti\t\tv.intr. ipf.
27366\t#lysina\t\tf.
27368\tlyska\t\tf.
329\tlysy\t\tadj.
6108\tlyža\t\tf.
27374\tlžec\t\tm.anim.
27375\tlživosť\t\tf.
17753\tlživy\t\tadj.
379\tmaćeha\t\tf.
16786\tMadagaskar\t\tm.sg.
359\tMadjar\t\tm.anim.
8964\tMadjarija\t\tf.sg.
27381\tmadjarizacija\tI\tf.
8966\tMadjarka\t\tf.
2681\tmadjarsky\t\tadj.
36812\tMadrid\tI\tm.
19838\tmagazin\tI\tm.
23989\tmagazin\tI\tm.
19839\tmagičny\tI\tadj.
3230\tmagistr\tI\tm.anim.
36066\tmagnat\tI\tm.anim.
23589\tmagnet\tI\tm.
23590\tmagnetičny\tI\tadj.
12198\tmagnetny polus\t\tm.
33086\tmagnetofon\tI\tm.
22607\tmagnezij\tI\tm.sg.
20438\tmah\t\tm.
5729\tmahati glåvojų\t\tv.ipf.
34490\tmahati hvostom\t\tphrase
960\tmahati\t\tv.intr. ipf.
23132\tmahinacija\tI\tf.
5730\tmahnųti glåvojų\t\tv.pf.
203\tmahnųti\t\tv.intr. pf.
264\tmaj\tI\tm.sg.
27391\tmajak\t\tm.
19840\tmajonez\tF\tm.
35079\tmajor\tI\tm.anim.
23697\tmajsky hrųšč\t\tm.anim.
20884\tmajstr\tD\tm.anim.
20885\tmajstrovsko dělo\tD\tn.
34779\tmajstrovsky\t\tadj.
1451\tmak\t\tm.
3256\tMakedonec\t\tm.anim.
4726\tMakedonija\t\tf.sg.
2866\tmakedonsky\t\tadj.
34785\tmakijaž\tF\tm.sg.
27397\tmakovka\t\tf.
27399\tmaksimaľno\tI\tadv.
16422\tmaksimaľny\tI\tadj.
2689\tmaksimum\tI\tm.
22770\tmalajsky\t\tadj.
22769\tMalajzija\t\tf.sg.
35107\tmalarija\tI\tf.
20446\tmalenjkosť\t\tf.
8982\tmalenjky\t\tadj.
27401\tmalěti\t\tv.intr. ipf.
1621\tmalina\t\tf.
27405\tmalinovy\t\tadj.
20886\tmaljaŕ\t\tm.anim.
36551\tmaljaŕ\t\tm.anim.
5097\tmaljevati\tD\tv.tr. ipf.
1535\tmalo\t\tadv.
17755\tmalodušny\t\tadj.
20447\tmalokrvje\t\tn.sg.
20448\tmalolětny\t\tadj.
27412\tmaloljudny\t\tadj.
32226\tmaloměrny\t\tadj.
20450\tmalomȯlvny\t\tadj.
27415\tmalosť\t\tf.
31981\tmalosť\t\tf.
20451\tmalovažny\t\tadj.
22323\tmalověrny\t\tadj.
27416\tmalovodny\t\tadj.
383\tmalpa, malpica\t\tf.
220\tMalta\t\tf.sg.
36817\tmaltejsky\tI\tadj.
35010\tmaltretovati\tI\tv.tr. ipf.
2682\tmaly\t\tadj.
2707\tmama\t\tf.
27423\tmamin\t\tadj.
17757\tmamiti\t\tv.tr. ipf.
27429\tmamlivy\t\tadj.
33537\tmamut\tI\tm.anim.
2708\tmandat\tI\tm.
32507\tmandolina\tI\tf.
3236\tmanera\tI\tf.
16747\tmaněrka\t\tf.
32333\tmanevr\tF\tm.
35921\tmanevrovati\tF\tv.tr. ipf./pf.
32334\tmanevry\tF\tm.pl.
22621\tmangan\tI\tm.sg.
36071\tmango\tI\tn.
35348\tmanifest\tI\tm.
4984\tmanipulacija\tI\tf.
4983\tmanipulovati\tI\tv.tr. ipf.
32445\tmanžeta\tF\tf.
35754\tmapa\tI\tf.
32995\tmarakasy\tI\tm.pl.
36075\tmarakuja\tI\tf.
34443\tmarcipan\tI\tm.sg.
8997\tmarec\tI\tm.sg.
27434\tmarena\t\tf.
35747\tmarginalizacija\tI\tf.
35746\tmarginalizovati\tI\tv.tr. ipf./pf.
34419\tmarginaľny\tI\tadj.
22806\tmarihuana\tI\tf.
32989\tmarimba\tI\tf.
22400\tmarionetka\tI\tf.
22848\tmarka\t\tf.
36008\tmarker\tE\tm.
17762\tmarlivo\t\tadv.
17763\tmarlivosť\t\tf.
17764\tmarlivy\t\tadj.
35436\tmarmelada\tF\tf.
5928\tMaroko\t\tn.sg.
23592\tMars\t\tm.sg.
23593\tMarsian, Marsianin\t\tm.anim.
19504\tmarš\tI\tm.
35369\tmaršal\tI\tm.
2869\tmarširovati\tD\tv.intr. ipf.
35589\tmaršrut\tD\tm.
27436\tmaršrutka\tD\tf.
36891\tmarulja\t\tf.
34420\tmarža\tF\tf.
23594\tmasa\tI\tf.
36337\tmasakra\tI\tf.
19841\tmasakrovati\tI\tv.tr. ipf.
33370\tmasaž\tF\tm.
33371\tmasirovati\tF\tv.tr. ipf.
33372\tmasivny\tI\tadj.
27438\tmaska\tI\tf.
32129\tmaskovati\tI\tv.tr. ipf./pf.
2703\tmaslina\t\tf.
9002\tmaslinovy olej\t\tm.
9001\tmaslinovy\t\tadj.
27440\tmasljak\t\tm.
2704\tmaslo\t\tn.
5804\tmasovy\tI\tadj.
2686\tmasť\t\tf.
27441\tmastiti\t\tv.tr. ipf.
4974\tmasturbacija\tI\tf.
15995\tmasturbovańje\tI\tn.sg.
2685\tmasturbovati\tI\tv.intr. ipf.
2684\tmašina\tI\tf.
27446\tmašinaľno\tI\tadv.
17765\tmašinist\tI\tm.anim.
17766\tmašinopisec\tI\tm.anim.
17767\tmašinostrojeńje\t\tn.sg.
27447\tmat\tI\tm.
36664\tmatč\tE\tm.
4322\tmatčina\t\tf.
36602\tmatematičny\tI\tadj.
2709\tmatematik\tI\tm.anim.
892\tmatematika\tI\tf.
204\tmaterial\tI\tm.
27449\tmateriaľny\tI\tadj.
3289\tmaterija\tI\tf.
27450\tmaterin\t\tadj.
20452\tmaterinsky\t\tadj.
27452\tmaterinstvo\t\tn.sg.
23650\tmaternica\t\tf.
17769\tmaterska klětka\t\tf.
9008\tmaterska ljubȯv\tI\tf.
6022\tmatersky\t\tadj.
17770\tmati\t\tf.
35975\tmatrica\tI\tf.
27459\tmatuška\t\tf.
4891\tmavzolej\tI\tm.
2705\tmaź\t\tf.
1934\tmazati\t\tv.tr. ipf.
36262\tmazati\t\tv.tr. ipf.
20453\tmazilo\t\tn.
20455\tmazivo\t\tn.
1935\tmę\t\tpron.pers.
163\tmebelj\tI\tm.
32971\tmeblovati\tI\tv.tr. ipf./pf.
32999\tmecosopran\tI\tm.
164\tmeč\t\tm.
909\tmęč\t\tm.
911\tmęčkati\t\tv.tr. ipf.
35443\tmečta\t\tf.
35445\tmečtatelj\t\tm.anim.
35446\tmečtateljny\t\tadj.
35444\tmečtati\t\tv.intr. ipf.
639\tmed\t\tm.sg.
2715\tměď\t\tm./f.
27471\tmedalist\tI\tm.anim.
27472\tmedalistka\tI\tf.
5805\tmedalj\tI\tf.
16004\tmedbrat\t\tm.anim.
4897\tmedicina\tI\tf.
6275\tmedija\tI\tn.pl.
5045\tmeditacija\tI\tf.
5043\tmeditovati\tI\tv.intr. ipf.
36451\tmedium\tI\tm.anim.
4525\tmedliti\t\tv.intr. ipf.
14691\tmedlo\t\tadv.
2421\tmedly\t\tadj.
14692\tmedly\t\tadj.
23456\tmědny dyhovy instrument\t\tm.
27474\tmědny, měděny\t\tadj.
27478\tmedonosny\t\tadj.
27479\tmedovar\t\tm.anim.
27480\tmedovina\t\tf.
27481\tmedovy\t\tadj.
396\tmedsestra\t\tf.
27482\tmedunka\t\tf.
20458\tmeduza\tI\tf.
2394\tmedvěď\t\tm.anim.
20459\tmedvěď-grizli\t\tm.anim.
27484\tmedvědica\t\tf.
32508\tmedvědik\t\tm.
9034\tmedvěďje objęťje\t\tn.
27488\tmedvěďji\t\tadj.
9035\tmedvědny\t\tadj.
27486\tmedvěđę\t\tn.
27487\tmedvěđina\t\tf.
2280\tmeđa\t\tf.
27490\tmeđny\t\tadj.
16863\tmeđu drugymi\t\tadv.
16829\tmeđu inymi\t\tadv.
2713\tmeđu\t\tprep.
4929\tmeđu\t\tprep.
32246\tmeđudŕžavny\t\tadj.
27492\tmeđugoŕje\t\tn.
35879\tmeđugrådny\t\tadj.
31841\tmeđugrådsky\tI\tadj.
31839\tmeđukontinentaľny\tI\tadj.
35745\tmeđukulturny\t\tadj.
19843\tmeđuljudsky\t\tadj.
19842\tmeđumeťje\t\tn.
2714\tmeđunarodny\t\tadj.
32413\tmeđuplanetarny\tI\tadj.
27494\tmeđurěčje\t\tn.
31842\tmeđuregionaľny\tI\tadj.
4442\tmeđuslovjansky\t\tadj.
17772\tmeđusobny\t\tadj.
1789\tmeđutym\t\tadv.
22483\tmeđuvlasťje\t\tn.
22575\tmeđuvrěmę\t\tn.
17773\tmeđuvrěmenno\t\tadv.
31840\tmeđuzvězdny\tI\tadj.
33539\tmegabajt\tI\tm.
403\tměh\t\tm.
4862\tmehaničny\tI\tadj.
35773\tmehanik\tI\tm.anim.
4863\tmehanika\tI\tf.
4861\tmehanizm\tI\tm.
4353\tměhuŕ\t\tm.
9046\tměhurny\t\tadj.
33327\tměhurȯk\t\tm.
35368\tmejnstrim\tE\tm.sg.
27501\tmekati\t\tv.intr. ipf.
27502\tmękčeti\t\tv.intr. ipf.
17784\tmękčiti\t\tv.tr. ipf.
27507\tmękko\t\tadv.
4245\tmękkosť\t\tf.
36336\tmękkotěly\t\tm.anim.
515\tmękky\t\tadj.
2870\tmeksikansky\t\tadj.
22461\tMeksiko\t\tn.sg.
9047\tmękše\t\tadv.
27511\tmělina\t\tf.
27513\tmělj\t\tf.
1459\tmělky\t\tadj.
27515\tměľnik\t\tm.anim.
35947\tmelodičny\tI\tadj.
4767\tmelodija\tI\tf.
32239\tmemorandum\tI\tm.
27517\tmemorial\tI\tm.
1489\tměna\t\tf.
4803\tmene\t\tpron.pers.
33809\tmenedžer\tE\tm.anim.
27525\tmenj\t\tm.anim.
32926\tměnjati sę\t\tv.refl. ipf.
20461\tměnjati\t\tv.tr. ipf.
2854\tmenje\t\tadv.
23042\tmenju\tF\tm.indecl.
27527\tměnlivy\t\tadj.
17774\tmenstruacija\tI\tf.
391\tmenši\t\tadj.
1537\tmenšinstvo\t\tn.
19844\tmentaľnosť\tI\tf.
19845\tmentaľny\tI\tadj.
34933\tmentor\tI\tm.anim.
2076\tměra\t\tf.
27533\tmeridian\tI\tm.
20466\tměrilo\t\tn.
1995\tměriti\t\tv.tr. ipf.
27536\tměriti\t\tv.intr. ipf.
885\tměrjeńje\t\tn.
20467\tměrka\t\tf.
23649\tMerkurij\t\tm.sg.
27539\tměrny\t\tadj.
27541\tměrny\t\tadj.
20468\tměrodajny\t\tadj.
23041\tměrodajny\t\tadj.
20887\tmęsaŕ\t\tm.anim.
20888\tmęsarnja\t\tf.
1456\tměsęc\t\tm.
4697\tměsęc\t\tm.
27546\tměsęčina\t\tf.
9066\tměsęčna gazeta\t\tf.
17776\tměsęčnica\t\tf.
27547\tměsęčnik\t\tm.
9063\tměsęčno světlo\t\tn.
14696\tměsęčno\t\tadv.
9065\tměsęčny žurnal\t\tm.
4116\tměsęčny\t\tadj.
14695\tměsęčny\t\tadj.
27552\tmęsisty\t\tadj.
20480\tměsiti\t\tv.tr. ipf.
27553\tmęsnik\t\tm.anim.
27554\tmęsny\t\tadj.
513\tmęso\t\tn.
17785\tmęsojed\t\tm.anim.
22944\tmęsojedny\t\tadj.
27557\tMesopotamija\t\tf.sg.
22945\tmęsožerec\t\tm.anim.
22946\tmęsožerny\t\tadj.
3464\tměstečko\t\tn.
19847\tmesti\t\tv.tr. ipf.
36142\tměstne izbory\t\tm.pl.
16493\tměstnik, městny padež\t\tm.
3436\tměstnosť\t\tf.
3728\tměstny\t\tadj.
5200\tměsto rođeńja\t\tn.
2721\tměsto\t\tn.
9076\tměstoimę\t\tn.
17778\tměstopoložeńje\t\tn.
27564\tmešalka\t\tf.
20470\tměšanec\t\tm.anim.
20471\tměšanec\t\tm.anim.
20475\tměšanina\t\tf.
4155\tměšatelj\t\tm.
2839\tměšati\t\tv.tr. ipf.
20478\tměšćan, měšćanin\t\tm.anim.
20479\tměšćanstvo\t\tn.sg.
27569\tměšek\t\tm.
19848\tmet\t\tm.
27630\tmęta\t\tf.
34863\tmeta\t\tf.
35816\tmetabolizm\tI\tm.sg.
19849\tmetafor\tI\tm.
5255\tmetal\tI\tm.
36247\tmetaličny\t\tadj.
35098\tmetalurgija\tI\tf.sg.
17780\tmetati monetų\t\tv.ipf.
17781\tmetati těnj na\t\tv.ipf.
2716\tmetati\t\tv.tr. ipf.
2720\tmětati\t\tv.tr. ipf.
27573\tmeteńje\t\tn.
36003\tmeteorit\tI\tm.
1424\tmeteorolog\tI\tm.anim.
5974\tmętež\t\tm.
27575\tmętežny\t\tadj.
27576\tmęti\t\tv.tr. ipf.
19850\tmetla\t\tf.
17783\tmetnųti těnj na\t\tv.pf.
397\tmetnųti\t\tv.tr. pf.
2867\tmetoda\tI\tf.
2719\tmetr\tI\tm.
35948\tmetrika\tI\tf.
2979\tmetro\tI\tn.
32882\tmetropolija\tI\tf.
27582\tmezalians\tF\tm.
1369\tmězga\t\tf.
951\tmgla\t\tf.
9093\tmglati\t\tv.intr. ipf.
4135\tmglisty\t\tadj.
4804\tmi\t\tpron.pers.
36338\tmidija\t\tf.
9095\tmig\t\tm.
9097\tmigańje\t\tn.sg.
2180\tmigati\t\tv.intr. ipf.
5980\tmigdalj\t\tm.
858\tmignųti\t\tv.intr. pf.
35246\tmigracija\tI\tf.
27597\tmikrobus\tI\tm.
23018\tmikrogram\tI\tm.
23012\tmikroskop\tI\tm.
23013\tmikroskopičny\tI\tadj.
31744\tmikrovaľna peć\t\tf.
31745\tmikrovȯlnova peć\t\tf.
2724\tmiliard\tI\tnum.card.
2218\tmilicija\tI\tf.
23016\tmiligram\tI\tm.
23022\tmililitr\tI\tm.
23014\tmilimetr\tI\tm.
235\tmilion\tI\tnum.card.
5317\tmilitantny\tI\tadj.
32741\tmilitarizm\tI\tm.sg.
21341\tmilja\tI\tf.
2726\tmiljny kamenj\t\tm.
16485\tmilosŕďje\t\tn.sg.
16486\tmilosŕdny\t\tadj.
23333\tmilosť\t\tf.
27599\tmilostivy\t\tadj.
34780\tmilostynja\t\tf.
9110\tmilovany\t\tadj.
9111\tmilovati\t\tv.tr. ipf.
27606\tmilovati\t\tv.tr. ipf.
36249\tmilovati\t\tv.tr. ipf.
1898\t#mily\t\tadj.
34881\tmim\tI\tm.anim.
32128\tmimičny\tI\tadj.
34882\tmimika\tI\tf.
746\tmimo\t\tprep.
19851\tmimohodęći\t\tadv.
17786\tmimohodny\t\tadj.
5992\tmimohodȯm\t\tadv.
22303\tmimovoljno\t\tadv.
22302\tmimovoljny\t\tadj.
405\tminaret\tI\tm.
16301\tmineral\tI\tm.
16302\tmineraľna voda\tI\tf.
9117\tminet\tI\tm.
35302\tminiatura\tI\tf.
27613\tminibus\tI\tm.
36355\tminimalističny\tI\tadj.
36354\tminimalizm\tI\tm.sg.
18718\tminimalizovati\tI\tv.tr. ipf./pf.
2916\tminimaľny\tI\tadj.
2732\tminimum\tI\tm.
23466\tMinisterstvo Finansov\tI\tn.
23477\tMinisterstvo Obråny\t\tn.
35642\tMinisterstvo Pravosųďja\t\tn.
23326\tMinisterstvo Vněšnjih Děl\t\tn.
23327\tMinisterstvo Vnųtrišnjih Děl\t\tn.
2730\tministerstvo\tI\tn.
2733\tministr\tI\tm.anim.
20482\tminovati\t\tv.tr. ipf.
23520\tMinsk\t\tm.sg.
17788\tminųlosť\t\tf.sg.
2734\tminųly\t\tadj.
16969\tminus\tI\tm.
2727\tminuta\tI\tf.
888\tminųti\t\tv.tr. pf.
2401\tmir\t\tm.sg.
20488\tmir\t\tm.sg.
27623\tmiraž\tI\tm.
20489\tmiriti\t\tv.tr. ipf.
404\tmirny\t\tadj.
893\tmisija\tI\tf.
35360\tmisionaŕ\tI\tm.
5201\tmiska\t\tf.
23300\tmističny\tI\tadj.
35601\tmistifikacija\tI\tf.
23299\tmistik\tI\tm.anim.
23281\tmit\tI\tm.
23282\tmitičny\tI\tadj.
23284\tmitologičny\tI\tadj.
23283\tmitologija\tI\tf.
33009\tmizantrop\tI\tm.anim.
33010\tmizantropija\tI\tf.
36099\tmjau\t\tintj.
36596\tmjaukati\t\tv.intr. ipf.
36597\tmjauknųti\t\tv.intr. pf.
32735\tmjuzikl\tE\tm.
27631\tmlåćeńje\t\tn.sg.
17789\tmlådčica\t\tf.
17790\tmlådčik\t\tm.anim.
27633\tmlådę\t\tn.
167\tmlådec\t\tm.anim.
9146\tmlådečstvo\t\tn.sg.
27636\tmlådenec\t\tm.anim.
27637\tmlådensky\t\tadj.
27638\tmlåděti\t\tv.intr. ipf.
27639\tmlådež\t\tf.
35305\tmlådežny\t\tadj.
9131\tmlådica\t\tf.
9133\tmlådosť\t\tf.
9134\tmlådostno\t\tadv.
15387\tmlådostnosť\tM\tf.
9135\tmlådostny\t\tadj.
9136\tmlådoženih\t\tm.anim.
27632\tmlådoženka\t\tf.
9137\tmlådši\t\tadj.
499\tmlådy\t\tadj.
23152\tmlåt\t\tm.
27650\tmlåťba\t\tf.
27649\tmlåtiti\t\tv.tr. ipf.
310\tmlåtȯk\t\tm.
34439\tmlavy\t\tadj.
27654\tmlěčaj\t\tm.
23566\tMlěčna dråga\t\tf.
23565\tMlěčny pųť\t\tm.sg.
9142\tmlěčny\t\tadj.
27657\tmlěkaŕ\t\tm.anim.
2735\tmlěko\t\tn.
925\tmlěti\t\tv.tr. ipf.
27661\tmlězivo\t\tn.sg.
27662\tmljaskati\t\tv.intr. ipf.
34441\tmlo\t\tadv.
34440\tmlosť\t\tf.
34438\tmly\t\tadj.
23140\tmlyn\t\tm.
23150\tmlynaŕ\t\tm.anim.
1183\tmně\t\tpron.pers.
917\tmněńje\t\tn.
2923\tmněti\t\tv.tr. ipf.
17796\tmněvati\t\tv.tr. ipf.
34865\tmnih\t\tm.anim.
19852\tmniška\t\tf.
2736\tmnogo\t\tadv.
2738\tmnogo\t\tadv.
19853\tmnogobarvny\t\tadj.
17797\tmnogobožstvo\t\tn.sg.
20490\tmnogocentričny\tI\tadj.
27674\tmnogočisľny\t\tadj.
19854\tmnogojęzyčny\t\tadj.
16450\tmnogokråtno\t\tadv.
32565\tmnogokråtny\t\tadj.
19855\tmnogokulturny\t\tadj.
16333\tmnogokųtnik\t\tm.
5131\tmnogolětny\t\tadj.
19856\tmnogoljudny\t\tadj.
32617\tmnogonožky\t\tf.pl.
20491\tmnogoraky\t\tadj.
21343\tmnogorěčivy\t\tadj.
21344\tmnogoslovny\t\tadj.
16971\tmnogosložny\t\tadj.
34917\tmnogostrånny\t\tadj.
16334\tmnogovųgȯľnik\t\tm.
17077\tmnogy\t\tadj.
35252\tmnožina\t\tf.
3698\tmnožinstvo\t\tn.
16972\tmnožiteljny čislovnik\t\tm.
19858\tmnožiti\t\tv.tr. ipf.
2740\tmnožstveno čislo\t\tn.
3084\tmnožstvo\t\tn.
36434\tmnožstvo\t\tn.
4975\tmobilizacija\tI\tf.
2741\tmobilizovati\tI\tv.tr. ipf.
35742\tmobiľnosť\tI\tf.
32256\tmobiľny telefon\tI\tm.
32257\tmobiľny\tI\tadj.
635\tmoć\t\tf.
27687\tmoćněti\t\tv.intr. ipf.
9165\tmoćno\t\tadv.
9166\tmoćnosť\t\tf.
9167\tmoćnosť\t\tf.
2743\tmoćny\t\tadj.
27677\tmoč\t\tf.
624\tmočar\t\tm.
27681\tmočarny\t\tadj.
27683\tmočevina\t\tf.
1829\tmočiti sę\t\tv.refl. ipf.
4161\tmočiti\t\tv.tr. ipf.
15389\tmoda\tI\tf.
19859\tmodel\tI\tm.
36916\tmodelovati\tI\tv.tr. ipf.
36923\tmodelovati\tI\tv.tr. ipf.
5905\tmodernizacija\tI\tf.
5904\tmodernizovati\tI\tv.tr. ipf.
900\tmoderny\tI\tadj.
35647\tmodifikacija\tI\tf.
35646\tmodifikovati\tI\tv.tr. ipf./pf.
27691\tmodistka\tF\tf.
9169\tmodny\tI\tadj.
27692\tmodrěti\t\tv.intr. ipf.
27693\tmodrina\t\tf.
27694\tmodriti\t\tv.tr. ipf.
27695\tmodrooky\t\tadj.
2742\tmodry\t\tadj.
910\tmogti\t\tv.aux. ipf.
20495\tmogųći\t\tadj.
27700\tmogųtny\t\tadj.
2008\tmogyla\t\tf.
2754\tmȯh\t\tm.sg.
920\tmoj\t\tpron.poss.
27710\tmoknųti\t\tv.intr. ipf.
27711\tmokrěti\t\tv.intr. ipf.
27712\tmokrica\t\tf.
17801\tmokrišče\t\tn.
14705\tmokriti\t\tv.tr. ipf.
27715\tmokrosť\t\tf.
27716\tmokrota\t\tf.
2147\tmokry\t\tadj.
27718\tmȯlčalivy\t\tadj.
3361\tmȯlčańje\t\tn.sg.
1862\tmȯlčati\t\tv.intr. ipf.
9187\tmȯlčno\t\tadv.
9188\tmȯlčny\t\tadj.
3258\tMoldavija, Moldova\t\tf.sg.
27722\tmoldavsky\t\tadj.
23596\tmolekula\tI\tf.
16011\tmolekularny\tI\tadj.
35011\tmolestovati\tI\tv.tr. ipf.
27727\tmolitevnik\t\tm.
494\tmoliti sę\t\tv.refl. ipf.
2178\tmolitva\t\tf.
1861\tmolj\t\tm.anim.
27730\tmȯlknųti\t\tv.intr. ipf.
5050\tmȯlnja\t\tf.
9192\tmȯlva\t\tf.
2179\tmȯlviti\t\tv.tr. ipf.
1859\tmoment\tI\tm.
5119\tmomentaľno\tI\tadv.
34864\tmonah\t\tm.anim.
34866\tmonahynja\t\tf.
27734\tMonako\t\tn.sg.
1860\tmonarh\tI\tm.anim.
1863\tmonarhija\tI\tf.
34073\tmonastyr\t\tm.
4464\tmoneta\tI\tf.
22764\tMongolija\t\tf.sg.
22765\tmongoľsky\t\tadj.
27736\tmonisto\t\tn.
32838\tmonogram\tI\tm.
32254\tmonolit\tI\tm.
32255\tmonolitny\tI\tadj.
32253\tmonolog\tI\tm.
19520\tmonopol\tI\tm.
23597\tmonoteizm\tI\tm.sg.
4205\tmontaža\tI\tf.
15390\tmontovańje\tI\tn.sg.
5682\tmontovati\tI\tv.tr. ipf.
1858\tmonument\tI\tm.
4118\tmonumentaľny\tI\tadj.
35045\tmoped\tI\tm.
20496\tmor\t\tm.
2761\tmora\t\tf.
27740\tmoral\tI\tm.
23698\tmoralizovati\tI\tv.intr. ipf.
24000\tmoraľnosť\tI\tf.
32285\tmoraľny\tI\tadj.
14711\tmorati\t\tv.aux. ipf.
2753\tMoravija\t\tf.sg.
35840\tmoravsky\t\tadj.
23704\tmorda\t\tf.
19860\tmorfem\tI\tm.
23202\tmorfin\tI\tm.sg.
35217\tmorfologija\tI\tf.
34832\tmoriti sę\t\tv.refl. ipf.
20497\tmoriti\t\tv.tr. ipf.
20498\tmoriti\t\tv.tr. ipf.
5935\tmorjak\t\tm.anim.
2745\tmorje\t\tn.
5934\tmorjeplavatelj\t\tm.anim.
20890\tmorjeplavstvo\t\tn.sg.
19861\tmorny\t\tadj.
9217\tmoŕska stěna\t\tf.
32938\tmoŕska trava\t\tf.
32937\tmoŕska vodoråsť\t\tf.
20499\tmoŕska zvězda\t\tf.
929\tmoŕsko dno\t\tn.
36625\tmoŕsky jež\tI\tm.
20500\tmoŕsky konik\t\tm.anim.
27754\tmoŕsky\t\tadj.
36085\tmorva\t\tf.
35452\tmorž\t\tm.anim.
4722\tmoskȯvsky\t\tadj.
4721\tMoskva\t\tf.sg.
2747\tmost\t\tm.
27761\tmošna\t\tf.
27763\tmošna\t\tf.
3211\tmotati\t\tv.tr. ipf.
32628\tmotiv\tI\tm.
646\tmotivacija\tI\tf.
2749\tmotivovati\tI\tv.tr. ipf.
36290\tmotocikl\tI\tm.
27767\tmotȯk\t\tm.
21345\tmotor\tI\tm.
27769\tmotovilo\t\tn.
27770\tmotto\tI\tn.
5676\tmotvųz\t\tm.
645\tmotyka\t\tf.
2748\tmotylik\t\tm.anim.
21346\tmotylj\t\tm.anim.
2750\tMozambik\t\tm.sg.
935\tmozg\t\tm.
9230\tmozgova proteza\t\tf.
17805\tmozgovy udar\t\tm.
9229\tmozgovy\t\tadj.
2395\tmozȯčna kosť\t\tf.
27777\tmozolj\t\tf.
934\tmože byti\t\tphrase
9232\tmože\t\tadv.
9246\tmožlivo\t\tadv.
2752\tmožlivosť\t\tf.
280\tmožlivy\t\tadj.
19144\tmožno najskorěje\t\tadv.
926\tmožno\t\tadv.
3395\tmožnosť\t\tf.
3336\tmožny\t\tadj.
27788\tmråčiti sę\t\tv.refl. ipf.
27789\tmråčnosť\t\tf.
6033\tmråčny\t\tadj.
6031\tmråk\t\tm.
35051\tmramor\tI\tm.sg.
17810\tmråvišče\t\tn.
19862\tmråvja kopa\t\tf.
27795\tmråvji\t\tadj.
785\tmråvka\t\tf.
32505\tmråvojed\t\tm.anim.
27797\tmråz\t\tm.
4496\tmråzilka\t\tf.
9269\tmråzina\t\tf.
4140\tmråziti\t\tv.tr. ipf.
27800\tmråzny\t\tadj.
17812\tmråzosušati\t\tv.tr. ipf.
9264\tmråzosušeńje\t\tn.sg.
9270\tmråzosušeny\t\tadj.
9263\tmråzosušiti\t\tv.tr. pf.
17811\tmråženy\t\tadj.
27802\tmrčati\t\tv.tr. ipf.
34493\tmrdati\t\tv.intr. ipf.
34497\tmrdnųti\t\tv.intr. pf.
286\tmrěža\t\tf.
27806\tmŕknųti\t\tv.intr. ipf.
928\tmrkva\t\tf.
23899\tmrmjati\t\tv.tr. ipf.
22954\tmŕša\t\tf.
27807\tmŕščina\t\tf.
31912\tmrščiti brvi\t\tv.intr. ipf.
27809\tmrščiti sę\t\tv.refl. ipf.
27808\tmrščiti\t\tv.tr. ipf.
22955\tmŕšejed\t\tm.anim.
27810\tmŕtvec\t\tm.anim.
27811\tmŕtvečina\t\tf.
27813\tmŕtvěti\t\tv.intr. ipf.
32295\tmŕtvěti\t\tv.intr. ipf.
22908\tmŕtvozornik\t\tm.anim.
1793\tmŕtvy\t\tadj.
3339\tmŕtvy\t\tadj.
34463\tmŕzavec\t\tm.anim.
34466\tmŕzko\t\tadv.
34459\tmŕzkosť\t\tf.
3561\tmŕzky\t\tadj.
2746\tmrznųti\t\tv.intr. ipf.
5599\tmsta\t\tf.
27820\tmstitelj\t\tm.anim.
5597\tmstiti\t\tv.tr. ipf.
5600\tmstivy\t\tadj.
23595\tmša\tI\tf.
14717\tmu\t\tpron.pers.
32309\tmučańje\t\tn.sg.
32310\tmučati\t\tv.intr. ipf.
27824\tmųčenica\t\tf.
32296\tmųčeničstvo\t\tn.sg.
27825\tmųčenik\t\tm.anim.
3856\tmųčeńje\t\tn.
9274\tmųčiljnja\t\tf.
9275\tmųčitelj\t\tm.anim.
27828\tmųčiteljny\t\tadj.
9273\tmųčiti do smŕti\t\tv.ipf.
1173\tmųčiti\t\tv.tr. ipf.
9279\tmudak\t\tm.anim.
27833\tmųdo\t\tn.
23760\tmųdrec\t\tm.anim.
27835\tmųdrěti\t\tv.intr. ipf.
9280\tmųdrosť\t\tf.
2751\tmųdry\t\tadj.
2760\tmuha\t\tf.
27843\tmuholovka\t\tf.
27844\tmuholovka\t\tf.
27845\tmuhomor\t\tm.
905\tmųka\t\tf.
17816\tmųka\t\tf.
27849\tmukańje\t\tn.sg.
27850\tmukati\t\tv.intr. ipf.
27851\tmulj\t\tm.sg.
35797\tmultikulturny\tI\tadj.
32364\tmumija\tI\tf.
14719\tmusěti\t\tv.aux. ipf.
3995\tmuskul\tI\tm.
32513\tmuskus\t\tm.sg.
32514\tmuskusna krysa\t\tf.
922\tmusliman, muslimanin\tI\tm.anim.
35798\tmuslimanka\tI\tf.
35799\tmuslimansky\tI\tadj.
27858\tmuška\t\tf.
20501\tmųť\t\tf.
19863\tmutant\tI\tm.anim.
20503\tmųtiti\t\tv.tr. ipf.
20504\tmųtiti\t\tv.tr. ipf.
27861\tmųtněti\t\tv.intr. ipf.
27862\tmųtnosť\t\tf.
20506\tmųtny\t\tadj.
936\tmuzej\tI\tm.
198\tmuzika\tI\tf.
32737\tmuzikaľna grupa\t\tf.
4791\tmuzikaľny\tI\tadj.
1452\tmuzikant\tI\tm.anim.
1521\tmųž\t\tm.anim.
3313\tmųž\t\tm.anim.
27871\tmųžev\t\tadj.
3402\tmųžiti sę\t\tv.refl. ipf.
9292\tmųžskosť\t\tf.
2755\tmųžsky rod\t\tm.
5251\tmųžsky\t\tadj.
4406\tmųžstvo\t\tn.
2722\tmy\t\tpron.pers.
27882\tmyliti sę\t\tv.refl. ipf.
27880\tmyliti\t\tv.tr. ipf.
27881\tmyliti\t\tv.tr. ipf.
36144\tmyľnica\t\tf.
1878\tmylo\t\tn.
27885\tmys\t\tm.
27887\tmyslim, mysljų\t\tphrase
9310\tmyslimo\t\tadv.
32318\tmyslimy\t\tadj.
27888\tmyslitelj\t\tm.anim.
14724\tmysliti o\t\tv.tr. ipf.
2744\tmysliti\t\tv.tr. ipf.
2731\tmyslj\t\tf.
27905\tmysljeńje\t\tn.sg.
27886\tmysljenny\t\tadj.
1573\tmyš\t\tf.
27898\tmyšasty\t\tadj.
9129\tmyšca\t\tf.
23045\tmyšelovka\t\tf.
27904\tmyškovati\t\tv.intr. ipf.
1788\tmyti\t\tv.tr. ipf.
36176\tmytnica\t\tf.
27911\tmyto\t\tn.
2757\tna dol\t\tadv.
27957\tna dȯlgo\t\tadv.
9317\tna dolu\t\tadv.
33735\tna glås\t\tadv.
16765\tna glåvų naseljeńja\t\tadv.
17821\tna javu\t\tadv.
28005\tna javu\t\tadv.
17822\tna počętku\t\tadv.
36212\tna polovině drågy\t\tadv.
19864\tna prěkor\t\tprep.
9318\tna ščęsťje\t\tadv.
17823\tna vŕhu\t\tadv.
17825\tna vśakų okoľnosť\t\tadv.
17824\tna vśaky slučaj\t\tadv.
2758\tna žalosť\t\tadv.
33330\tna živo\t\tadv.
33331\tna živo\t\tadv.
2756\tna\t\tprep.
4939\tna\t\tprep.
27916\tnabajati\t\tv.intr. pf.
34834\tnabajati\t\tv.intr. pf.
20508\tnaběg\t\tm.
27920\tnaběgati sę\t\tv.refl. pf.
17826\tnabirati\t\tv.tr. ipf.
20513\tnabiti\t\tv.tr. pf.
20511\tnabivati\t\tv.tr. ipf.
20516\tnaboj\t\tm.
17829\tnabožny\t\tadj.
17831\tnabrati\t\tv.tr. pf.
27930\tnabreknųti\t\tv.intr. pf.
27931\tnabrěžna\t\tf.
32382\tnabuhati\t\tv.intr. ipf.
27932\tnabuhnųti\t\tv.intr. pf.
27933\tnabyti\t\tv.tr. pf.
32383\tnabyvati\t\tv.tr. ipf.
33363\tnabzděti\t\tv.intr. pf.
22823\tnacionalist\t\tm.anim.
17834\tnacionalističny\t\tadj.
2759\tnacionalizacija\t\tf.
5318\tnacionalizm\t\tm.sg.
4964\tnacionalizovati\t\tv.tr. ipf.
1522\tnacist\t\tm.anim.
2739\tnacističny\t\tadj.
22824\tnacizm\t\tm.sg.
34203\tnačaditi\t\tv.intr. pf.
9323\tnačeľnik policije\t\tm.anim.
9324\tnačeľnik štaba\t\tm.anim.
948\tnačeľnik\t\tm.anim.
9325\tnačęlo\t\tn.
1502\tnačęti sę\t\tv.refl. pf.
22780\tnačęti\t\tv.tr. pf.
14727\tnačęťje\t\tn.
27937\tnačętȯk\t\tm.
5516\tnačinati sę\t\tv.refl. ipf.
22779\tnačinati\t\tv.tr. ipf.
27940\tnačitati sę\t\tv.refl. pf.
27938\tnačrpati\t\tv.tr. pf.
21347\tnačrtati\t\tv.tr. pf.
27941\tnačto\t\tadv.
2765\tnad\t\tprep.
4932\tnad\t\tprep.
9330\tnad-\t\tprefix
17835\tnadalje\t\tadv.
25121\tnadarmo\t\tadv.
17083\tnadati\t\tv.tr. pf.
16974\tnadavati\t\tv.tr. ipf.
3132\tnaděja\t\tf.
17836\tnadějati sę\t\tv.refl. ipf.
36881\tnadějny\t\tadj.
32618\tnadělati\t\tv.tr. pf.
17837\tnaděti\t\tv.tr. pf.
17838\tnaděti\t\tv.tr. pf.
17840\tnaděvati\t\tv.tr. ipf.
17841\tnaděvati\t\tv.tr. ipf.
27952\tnadežny\t\tadj.
17843\tnadglåvišče\t\tn.
5814\tnadględati\t\tv.ipf.
5817\tnadględěti\t\tv.pf.
5357\tnadigrati\t\tv.tr. pf.
5358\tnadigryvati\t\tv.tr. ipf.
36556\tnadir\t\tm.
19865\tnadljudsky\t\tadj.
23335\tnadměrno\t\tadv.
23334\tnadměrnosť\t\tf.
20517\tnadměrny\t\tadj.
36457\tnadmnožstvo\t\tn.
35396\tnadnacionaľny\t\tadj.
22162\tnadobyčajny\t\tadj.
6278\tnadȯhneńje\t\tn.sg.
6277\tnadȯhnųti\t\tv.tr. pf.
19866\tnadoprošćeny\t\tadj.
20892\tnadpis\t\tm.
27958\tnadpis\t\tm.
36310\tnadprirodny\t\tadj.
5621\tnadųti\t\tv.tr. pf.
33039\tnadųty\t\tadj.
33040\tnadųty\t\tadj.
19867\tnadųvati\t\tv.tr. ipf.
22936\tnadužiti\t\tv.tr. pf.
22935\tnaduživati\t\tv.tr. ipf.
6276\tnadyhati\t\tv.tr. ipf.
2924\tnadzirati\t\tv.tr. ipf.
2766\tnadzor\t\tm.
35186\tnadzornik\t\tm.anim.
2763\tnafta\t\tf.
2762\tnaftoprovod\t\tm.
32806\tnaganjati strah někomu\t\tphrase
32811\tnaganjati\t\tv.tr. ipf.
36236\tnaglåvna nametka\t\tf.
36672\tnaględny\t\tadj.
4247\tnaglo\t\tadv.
9350\tnagly kolaps\t\tm.
2764\tnagly\t\tadj.
15398\tnagly\t\tadj.
32808\tnagnati strah někomu\t\tphrase
27975\tnagnati\t\tv.tr. pf.
27976\tnagnojiti\t\tv.tr. pf.
17846\tnagnųti\t\tv.tr. pf.
9353\tnagorno\t\tadv.
27981\tnagorny\t\tadj.
27982\tnagosť\t\tf.
27983\tnagota\t\tf.
28644\tnagȯtky\t\tm.pl.
27984\tnagovoriti\t\tv.tr. ipf.
943\tnagråda\t\tf.
4121\tnagråditi\t\tv.tr. pf.
4122\tnagrađati\t\tv.tr. ipf.
27991\tnagrěti\t\tv.tr. pf.
32416\tnagrěvati\t\tv.tr. ipf.
17850\tnagromaditi\t\tv.tr. pf.
17848\tnagromađati\t\tv.tr. ipf.
17849\tnagromađeńje\t\tn.
5319\tnagy\t\tadj.
17845\tnagybati\t\tv.tr. ipf.
27998\tnahmuriti\t\tv.tr. pf.
32818\tnahmurjeny\t\tadj.
14285\tnahoditi sę\t\tv.refl. ipf.
2055\tnahoditi\t\tv.tr. ipf.
15399\tnahodka\t\tf.
17851\tnahodnosť\t\tf.
28002\tnahvatati\t\tv.tr. pf.
17854\tnaigrati\t\tv.tr. pf.
17856\tnaigryvati\t\tv.tr. ipf.
9357\tnaivnik\t\tm.anim.
16722\tnaivnosť\t\tf.
16721\tnaivny\t\tadj.
28004\tnaj-\t\tprefix
9359\tnajblizši\t\tadj.
9358\tnajbliže\t\tadv.
9360\tnajbogatši\t\tadj.
16916\tnajbolje\t\tadv.
35661\tnajboljši\t\tadj.
20519\tnajčęstěje\t\tadv.
23044\tnajdalje\t\tadv.
23043\tnajdaljši\t\tadj.
9361\tnajdivnějši\t\tadj.
781\tnajdti\t\tv.tr. pf.
32423\tnajedati sę\t\tv.refl. ipf.
9365\tnajem\t\tm.sg.
28010\tnajemnica\t\tf.
32854\tnajemnik\t\tm.anim.
9409\tnajemny råbotnik\t\tm.anim.
32860\tnajemny ubijca\t\tm.anim.
28012\tnajemny\t\tadj.
28006\tnajesti sę\t\tv.refl. pf.
9410\tnajęti\t\tv.tr. pf.
17861\tnajęti\t\tv.tr. pf.
17860\tnajezd\t\tm.
36046\tnajezdnik\t\tm.anim.
34831\tnaježiti sę\t\tv.refl. pf.
31962\tnaježiti\t\tv.tr. pf.
5868\tnajglųbši\t\tadj.
9369\tnajgorše\t\tadv.
779\tnajgorši\t\tadj.
9371\tnajhlådnějši\t\tadj.
9372\tnajkrasivši\t\tadj.
9373\tnajkrasnějši\t\tadj.
9374\tnajkrvavši\t\tadj.
17862\tnajlegši\t\tadj.
17863\tnajlěpje\t\tadv.
2770\tnajlěpši\t\tadj.
3280\tnajlučši\t\tadj.
9377\tnajmalo\t\tadv.
32859\tnajmatelj\t\tm.anim.
5512\tnajmati\t\tv.tr. ipf.
9408\tnajmati\t\tv.tr. ipf.
35889\tnajmě\t\tadv.
9379\tnajmękši\t\tadj.
4718\tnajmenje\t\tadv.
9381\tnajmenši\t\tadj.
2769\tnajmnogo\t\tadv.
9382\tnajnizši\t\tadj.
3841\tnajnovějši\t\tadj.
16282\tnajpozdněje\t\tadv.
9383\tnajpozdnějši\t\tadj.
17866\tnajprostějši\t\tadj.
19868\tnajpŕvo\t\tadv.
16283\tnajraněje\t\tadv.
9384\tnajranši\t\tadj.
9386\tnajstarějši, najstarši\t\tadj.
20520\tnajvęće\t\tadv.
9364\tnajvęćši\t\tadj.
14734\tnajveliky\t\tadj.
1488\tnajvyše\t\tadv.
9390\tnajzimnějši\t\tadj.
3281\tnajzly\t\tadj.
32013\tnakalati\t\tv.tr. ipf.
28022\tnakapati\t\tv.intr. pf.
5790\tnakaz na arešt\t\tm.
9393\tnakaz\t\tm.
3061\tnakazati\t\tv.tr. pf.
3112\tnakazyvati\t\tv.tr. ipf.
19869\tnaklad\t\tm.
19871\tnaklad\t\tm.
28027\tnaklad\t\tm.
6087\tnakladati\t\tv.tr. ipf.
28028\tnakladati\t\tv.tr. ipf.
21348\tnaklanjati\t\tv.tr. ipf.
28032\tnaklåti na\t\tv.tr. pf.
19875\tnaklon\t\tm.
21349\tnakloniti\t\tv.tr. pf.
35936\tnaklonjeńje\t\tn.
28040\t#naklonjeny\t\tadj.
19876\tnaklonnosť\t\tf.
28041\tnakolěnnik\t\tm.
17869\tnakonec\t\tadv.
28042\tnakopati\t\tv.tr. pf.
32865\tnakopyvati\t\tv.tr. ipf.
23040\tnakovaljnja\t\tf.
5594\tnakrmiti\t\tv.tr. pf.
23703\tnakryti\t\tv.tr. pf.
23702\tnakryvati\t\tv.tr. ipf.
28025\tnakydati\t\tv.tr. pf.
32677\tnakydyvati\t\tv.tr. ipf.
28051\tnalagati\t\tv.tr. ipf.
32679\tnalagati\t\tv.tr. ipf.
20521\tnalegati\t\tv.intr. ipf.
20522\tnalegti\t\tv.intr. pf.
19878\tnalet\t\tm.
9398\tnalěvo\t\tadv.
1010\tnaležati\t\tv.intr. ipf.
20523\tnaležity\t\tadj.
28058\tnaliti\t\tv.tr. ipf.
28059\tnalivati\t\tv.tr. pf.
28060\tnalivka\t\tf.
21350\tnalivno pero\t\tn.
6088\tnaložiti\t\tv.tr. pf.
28030\tnaložiti\t\tv.tr. pf.
20525\tnaložnica\t\tf.
2925\tnam\t\tpron.pers.
28065\tnamastiti\t\tv.tr. pf.
32875\tnamašćati\t\tv.tr. ipf.
32233\tnamazati\t\tv.tr. pf.
32234\tnamazyvati\t\tv.tr. ipf.
9402\tnaměr\t\tm.
5153\tnaměriti\t\tv.tr. pf.
5151\tnaměrjati\t\tv.tr. ipf.
20527\tnaměstnik\t\tm.anim.
4162\tnamočiti\t\tv.tr. pf.
9405\tnamokriti\t\tv.tr. pf.
9406\tnamontovati\t\tv.tr. pf.
23705\tnamordnik\t\tm.
28074\tnamotati\t\tv.tr. pf.
32866\tnamotyvati\t\tv.tr. ipf.
32320\tnamyliti\t\tv.tr. pf.
32321\tnamyljati\t\tv.tr. ipf.
28077\tnanesti\t\tv.tr. pf.
33511\tnanizati\t\tv.tr. pf.
3858\tnanos\t\tm.
28080\tnanositi\t\tv.tr. ipf.
5964\tnanovo\t\tadv.
35419\tnaočila\t\tn.pl.
28081\tnaopak\t\tadv.
28082\tnaostriti\t\tv.tr. pf.
3441\tnapad\t\tm.
20894\tnapad\t\tm.
955\tnapadati\t\tv.tr. ipf.
2031\tnapadati\t\tv.tr. ipf.
28084\tnapadnik\t\tm.anim.
20898\tnapadny\t\tadj.
28089\tnapajati\t\tv.tr. ipf.
32705\tnapajati\t\tv.tr. ipf.
36250\tnapajati\t\tv.tr. ipf.
36807\tnapaljeny\t\tadj.
16750\tnapamęť\t\tadv.
36724\tnaparfumovati sę\t\tv.refl. pf.
23878\tnaparfumovati\t\tv.tr. pf.
32948\tnapasti sę\t\tv.refl. pf.
957\tnapasti\t\tv.intr. pf.
28091\tnapasti\t\tv.tr. pf.
9417\tnapastnik\t\tm.anim.
28095\tnapęti\t\tv.tr. pf.
20900\tnapętosť\t\tf.
20901\tnapęty\t\tadj.
28096\tnapěv\t\tm.
32923\tnaphati\t\tv.tr. pf.
28097\tnapihati\t\tv.tr. ipf.
28098\tnapinati\t\tv.tr. ipf.
28099\tnapirati\t\tv.intr. ipf.
6280\tnapis\t\tm.
958\tnapisati\t\tv.tr. pf.
28102\tnapiti sę\t\tv.refl. pf.
32955\tnapiti sę\t\tv.refl. pf.
2927\tnapitȯk\t\tm.
32956\tnapivati sę\t\tv.refl. ipf.
32957\tnapivati sę\t\tv.refl. ipf.
28106\tnapljuvati\t\tv.intr. pf.
20903\tnaplyv\t\tm.
4094\tnapoj\t\tm.
28109\tnapojiti\t\tv.tr. pf.
32706\tnapojiti\t\tv.tr. pf.
35531\tnapojnica\t\tf.
17876\tnapȯlniti perami\t\tv.tr. pf.
1089\tnapȯlniti\t\tv.tr. pf.
2928\tnapominati\t\tv.tr. ipf.
23875\tnapomněńje\t\tn.
2768\tnapomněti\t\tv.tr. pf.
20904\tnapor\t\tm.
20905\tnapor\t\tm.
17877\tnaposlěd\t\tadv.
17880\tnaposlědȯk\t\tadv.
16975\tnapr.\t\tadv.
3292\tnapravdų\t\tadv.
5548\tnapraviti sę\t\tv.refl. pf.
5550\tnapraviti\t\tv.tr. pf.
28120\tnapraviti\t\tv.tr. pf.
33047\tnapraviti\t\tv.tr. pf.
3658\tnapravjati sę\t\tv.refl. ipf.
5549\tnapravjati\t\tv.tr. ipf.
33051\tnapravjati\t\tv.tr. ipf.
33053\tnapravjati\t\tv.tr. ipf.
28121\tnapravo\t\tadv.
28122\tnapråzdno\t\tadv.
28123\tnapråzdny\t\tadj.
2791\tnaprěd\t\tadv.
20907\tnaprěd\t\tadv.
28129\tnaprěti\t\tv.intr. pf.
20909\tnapręžeńje\t\tn.
28130\tnapriklad\t\tadv.
28131\tnapriměr\t\tadv.
15403\tnaprostrina\t\tf.
4067\tnaprotiv\t\tprep.
28135\tnapŕstȯk\t\tm.
2767\tnaprųžeńje\t\tn.
20910\tnaprųžiti\t\tv.tr. pf.
20913\tnapustiti\t\tv.tr. pf.
20912\tnapušćati\t\tv.tr. ipf.
33056\tnarastati\t\tv.intr. ipf.
28139\tnaråsti\t\tv.intr. pf.
36238\tnarcis\t\tm.
36240\tnarcističny\t\tadj.
36239\tnarcizm\t\tm.
21351\tnarěčena\t\tf.
21352\tnarěčeny\t\tm.anim.
9440\tnarěčje\t\tn.
9441\tnarěčje\t\tn.
21353\tnarěkańje\t\tn.
21354\tnarěkati\t\tv.intr. ipf.
33141\tnarěkati\t\tv.tr. ipf.
28145\tnarěkti\t\tv.tr. pf.
28148\tnarězati\t\tv.tr. ipf.
950\tnarkoman\t\tm.anim.
36284\tnarkomanija\t\tf.
33077\tnarkotik\t\tm.
36285\tnarkoza\t\tf.
28149\tnaročito\t\tadv.
21356\tnaročity\t\tadj.
1013\tnarod\t\tm.
28153\tnaroditi\t\tv.tr. pf.
9444\tnarodna vojna\t\tf.
16976\tnarodnosť\t\tf.
4307\tnarodny\t\tadj.
6096\tnarodobijstvo\t\tn.sg.
20914\tnarodopis\t\tm.
17884\tnarodopisec\t\tm.anim.
28156\tnarođeńje\t\tn.
28157\tnarožny\t\tadj.
36788\tnarųčati\t\tv.tr. ipf.
36787\tnarųčiti\t\tv.tr. pf.
28158\tnarųčje\t\tn.sg.
23985\tnarųčka\t\tf.
36790\tnarųčka\t\tf.
28159\tnarųčny časovnik\t\tm.
2788\tnarušati\t\tv.tr. ipf.
9445\tnarušeńje\t\tn.
1645\tnarušiti\t\tv.tr. pf.
28163\tnarvati\t\tv.tr. pf.
5542\tnarysovati\t\tv.tr. pf.
33188\tnaryvati\t\tv.tr. ipf.
982\tnas\t\tpron.pers.
33191\tnasad\t\tm.
28169\tnasaditi\t\tv.tr. pf.
33190\tnasađati\t\tv.tr. ipf.
34136\tnascati\t\tv.intr. pf.
28172\tnasěděti sę\t\tv.refl. pf.
21360\tnasědka\t\tf.
28174\tnasěkati\t\tv.tr. ipf.
17885\tnasěkomo\t\tn.
28175\tnasěkti\t\tv.tr. pf.
3776\tnaseliti\t\tv.tr. pf.
3781\tnaseljati\t\tv.tr. ipf.
2787\tnaseljeńje\t\tn.
3782\tnaseljeny\t\tadj.
578\tnasiľje\t\tn.sg.
21361\tnasiľnik\t\tm.anim.
9453\tnasiľno\t\tadv.
9454\tnasiľnosť\t\tf.
9455\tnasiľny\t\tadj.
36043\tnasilovańje\t\tn.
36865\tnaskakati\t\tv.intr. ipf.
36866\tnaskakati\t\tv.intr. ipf.
36867\tnaskakati\t\tv.intr. ipf.
28183\tnaskočiti\t\tv.intr. pf.
28184\tnaskočiti\t\tv.intr. pf.
36864\tnaskočiti\t\tv.intr. pf.
9456\tnaskoro\t\tadv.
14737\tnaskroz\t\tadv.
28186\tnaslåda\t\tf.
28189\tnaslåditi sę\t\tv.refl. pf.
28187\tnaslåditi\t\tv.tr. pf.
33275\tnaslađati sę\t\tv.refl. ipf.
33278\tnaslađati\t\tv.tr. ipf.
1195\tnaslěditi\t\tv.tr. pf.
9459\tnaslědnica\t\tf.
969\tnaslědnik\t\tm.anim.
9462\tnaslědnik\t\tm.anim.
9464\tnaslědnosť\t\tf.
15404\tnaslědny\t\tadj.
161\tnaslědȯk\t\tm.
28196\tnaslědovańje\t\tn.
36688\tnaslědovańje\t\tn.sg.
9466\tnaslědovati\t\tv.tr. ipf.
21363\tnaslědovati\t\tv.tr. ipf.
761\tnaslědstvo\t\tn.
28200\tnaslušati sę\t\tv.refl. pf.
28204\tnasmeška\t\tf.
28206\tnasmoliti\t\tv.tr. pf.
35866\tnasos\t\tm.
28209\tnaspati sę\t\tv.refl. pf.
21730\tnastati\t\tv.intr. pf.
21728\tnastavati\t\tv.intr. ipf.
9468\tnastaviti\t\tv.tr. pf.
9469\tnastaviti\t\tv.tr. pf.
28215\tnastaviti\t\tv.tr. pf.
33149\tnastaviti\t\tv.tr. pf.
33150\tnastavjati\t\tv.tr. ipf.
33151\tnastavjati\t\tv.tr. ipf.
33152\tnastavjati\t\tv.tr. ipf.
33153\tnastavjati\t\tv.tr. ipf.
17888\tnastavjeńja\t\tn.pl.
17889\tnastavjeńje\t\tn.
21733\tnastavȯk\t\tm.
28219\tnastěnny\t\tadj.
28220\tnastěž\t\tadv.
28221\tnastignųti\t\tv.tr. pf.
21732\tnastojati\t\tv.intr. pf.
28225\tnastojčivy\t\tadj.
2779\tnastojęći\t\tadj.
36847\tnastojivati\t\tv.intr. ipf.
20915\tnastoľna lampa\t\tf.
20916\tnastoľna světilka\t\tf.
28227\tnastradati sę\t\tv.refl. pf.
33420\tnastrajati\t\tv.tr. ipf.
33421\tnastrajati\t\tv.tr. ipf.
36673\tnastrašiti sę\t\tv.refl. pf.
28228\tnastrašiti\t\tv.tr. pf.
21906\tnastråžiti sę\t\tv.refl. pf.
2777\tnastrojeńje\t\tn.
9472\tnastrojevy\t\tadj.
28232\tnastrojiti\t\tv.tr. pf.
28233\tnastrojiti\t\tv.tr. pf.
17891\tnastrojky\t\tf.pl.
3040\tnastųpajųći\t\tadj.
21928\tnastųpati\t\tv.intr. ipf.
33299\tnastųpati\t\tv.intr. ipf.
21929\tnastųpiti\t\tv.intr. pf.
28236\tnastųpiti\t\tv.intr. pf.
28238\tnastųpnica\t\tf.
28239\tnastųpnik\t\tm.anim.
9474\tnastųpny\t\tadj.
19879\tnasųćny\t\tadj.
33096\tnasųćny\t\tadj.
28260\tnasyćati\t\tv.tr. pf.
28261\tnasyćeńje\t\tn.sg.
21998\tnasyp\t\tm.
28259\tnasypati\t\tv.tr. pf.
28262\tnasytiti\t\tv.tr. pf.
1993\tnaš\t\tpron.poss.
2776\tnaša era\t\tf.
28251\tnašeptati\t\tv.tr. pf.
17886\tnašijnik\t\tm.
28253\tnašiti\t\tv.tr. pf.
28255\tnašivati\t\tv.tr. ipf.
28265\tnatęgati\t\tv.tr. ipf.
28267\tnatęgnųti\t\tv.tr. ipf.
28146\tnatěšiti sę\t\tv.refl. pf.
14741\tnatipkati\t\tv.tr. pf.
28271\tnatirati\t\tv.tr. ipf.
2775\tnatisk\t\tm.
4826\tnatiskati\t\tv.tr. ipf.
3755\tnatisknųti\t\tv.tr. pf.
28278\tnatočiti\t\tv.tr. pf.
33428\tnatočiti\t\tv.tr. pf.
28280\tnatoliko\t\tadv.
5601\tnatȯlkati sę\t\tv.refl. ipf.
2790\tnatȯlkti sę\t\tv.refl. pf.
28285\tnatreti\t\tv.tr. pf.
22606\tnatrij\t\tm.sg.
28288\tnatŕpěti sę\t\tv.refl. pf.
28290\tnatruditi sę\t\tv.refl. pf.
22044\tnatųga\t\tf.
3411\tnaturalističny\t\tadj.
3410\tnaturalizm\t\tm.sg.
3409\tnaturaľny\t\tadj.
28292\tnatvoriti\t\tv.tr. pf.
9483\tnatvrđeńje\t\tn.sg.
985\tnaučiti sę\t\tv.refl. pf.
3540\tnaučiti\t\tv.tr. pf.
2782\tnaučnik\t\tm.anim.
3997\tnaučny\t\tadj.
2005\tnauka\t\tf.
28306\tnaušnica\t\tf.
28307\tnaušnik\t\tm.
16748\tnaušniky\t\tm.pl.
28309\tnavaga\t\tf.
22186\tnaval\t\tm.
22221\tnavěditi\t\tv.tr. pf.
22220\tnavěđati\t\tv.tr. ipf.
28319\tnavěky\t\tadv.
28322\tnavěsiti\t\tv.tr. pf.
28316\tnavesti\t\tv.tr. pf.
31938\tnavesti\t\tv.tr. pf.
28324\tnavěšati\t\tv.tr. ipf.
9490\tnavet\t\tadv.
17892\tnavětrny\t\tadj.
20529\tnavęzati\t\tv.intr. pf.
28326\tnavęzati\t\tv.tr. pf.
20530\tnavęzyvati\t\tv.intr. ipf.
33213\tnavęzyvati\t\tv.tr. ipf.
20531\tnavigacija\t\tf.
35898\tnavigator\t\tm.anim.
28334\tnaviti\t\tv.tr. pf.
28335\tnavivati\t\tv.tr. ipf.
28336\tnavlåčka\t\tf.
22519\tnavlåka\t\tf.
29781\tnavlåžiti\t\tv.tr. pf.
33464\tnavlěkati\t\tv.tr. ipf.
28338\tnavlěkti\t\tv.tr. pf.
28342\tnavoditi\t\tv.tr. ipf.
31933\tnavoditi\t\tv.tr. ipf.
35500\tnavodnica\t\tf.
22551\tnavodniti\t\tv.tr. pf.
28343\tnavodnjańje\t\tn.
22550\tnavodnjati\t\tv.tr. ipf.
28346\tnavoščiti\t\tv.tr. pf.
28351\tnavråžiti\t\tv.intr. pf.
22161\tnavyk\t\tm.
17893\tnavyše\t\tadv.
28355\tnavznak\t\tadv.
2781\tnazad\t\tadv.
9494\tnazadno\t\tadv.
9495\tnazadnosť\t\tf.
9496\tnazadny\t\tadj.
32964\tnazdråviti\t\tv.intr. pf.
32962\tnazdravjati\t\tv.intr. ipf.
28357\tnazemny\t\tadj.
3622\tnaznačati\t\tv.tr. ipf.
22855\tnaznačati\t\tv.tr. ipf.
22858\tnaznačati\t\tv.tr. ipf.
23292\tnaznačeny\t\tadj.
3623\tnaznačiti\t\tv.tr. pf.
22856\tnaznačiti\t\tv.tr. pf.
22859\tnaznačiti\t\tv.tr. pf.
5183\tnazva\t\tf.
971\tnazvany\t\tadj.
2786\tnazvati\t\tv.tr. pf.
16284\tnazyvati sę\t\tv.refl. ipf.
2783\tnazyvati\t\tv.tr. ipf.
5987\tne bųde\t\tadv.
5986\tne bylo\t\tadv.
9553\tne dozvaljaje sę\t\tphrase
3563\tne ględęći na\t\tprep.
17895\tne imaje značeńja\t\tphrase
35354\tne ljubiti\t\tv.tr. ipf.
21368\tne poslušati\t\tv.tr. pf.
14751\tne pozvaljaje sę\t\tphrase
21367\tne slušati\t\tv.tr. ipf.
35248\tne sȯglasiti sę, ne sųglasiti sę\t\tv.refl. pf.
35247\tne sȯglašati sę, ne sųglašati sę\t\tv.refl. ipf.
9525\tNe trati vrěmene!\t\tphrase
9526\tne trěba\t\tphrase
16285\tNe trěba\t\tphrase
2784\tne\t\tadv.
3989\tne\t\tintj.
2020\tneadekvatnosť\t\tf.
19880\tneadekvatny\t\tadj.
34429\tneandertalec\t\tm.anim.
972\tnebesky\t\tadj.
5683\tnebesno tělo\t\tn.
9530\tnebesny\t\tadj.
3547\tnebezpečnosť\t\tf.
3549\tnebezpečny\t\tadj.
4904\tneblågodarny\t\tadj.
2792\tnebo\t\tn.
33199\tnebodrap\t\tm.
17896\tnebogy\t\tadj.
9537\tnebojazlivosť\t\tf.
9540\tnebojazlivy\t\tadj.
9541\tnebojaznik\t\tm.anim.
35387\tnebožčik\t\tm.
14757\tnebrěžnosť\t\tf.
14756\tnebrěžny\t\tadj.
19881\tnebsky\t\tadj.
14745\tnebystry\t\tadj.
28375\tnebyťje\t\tn.sg.
17898\tnebyvaly\t\tadj.
4033\tněčemu\t\tadv.
28376\tnečestivy\t\tadj.
28378\tnečestny\t\tadj.
2772\tněčij\t\tpron.poss.
2481\tnečistota\t\tf.
3556\tnečisty\t\tadj.
19882\tněčto\t\tpron.indef.
14746\tnedaleky\t\tadj.
9545\tnedavno\t\tadv.
963\tnedavny\t\tadj.
16253\tnedbalosť\t\tf.
16255\tnedbaly\t\tadj.
35389\tnedějųći\t\tadj.
9547\tnedělja\t\tf.
36671\tnedobro\t\tadv.
28389\tnedobry\t\tadj.
33135\tnedobry\t\tadj.
20532\tnedomȯlvka\t\tf.
20533\tnedonosȯk\t\tm.anim.
36114\tnedopustimy\t\tadj.
20534\tnedoråzuměńje\t\tn.
20535\tnedoråzuměti\t\tv.tr. pf.
20536\tnedoråzuměvati\t\tv.tr. ipf.
32227\tnedoråzvity\t\tadj.
35664\tnedoslědno\t\tadv.
35665\tnedoslědnosť\t\tf.
35666\tnedoslědny\t\tadj.
19883\tnedostatȯčno\t\tadv.
17899\tnedostatȯčnosť sŕdca\t\tf.
1018\tnedostatȯk\t\tm.
21737\tnedostatȯk\t\tm.
36148\tnedostavati\t\tv.intr. ipf.
19885\tnedostojny\t\tadj.
17900\tnedostųpny\t\tadj.
36083\tnedotykajemosť\t\tf.
36082\tnedotykajemy\t\tadj.
22172\tnedouměńje\t\tn.sg.
33435\tnedověra\t\tf.
35299\tnedovŕšenosť\t\tf.
35290\tnedovŕšeny\t\tadj.
36686\tnedozvoljeny\t\tadj.
35955\tnedŕžavny\t\tadj.
28396\tnedųg\t\tm.
34772\tnedvižimosť\t\tf.
35916\tneefektivny\t\tadj.
20537\tneformaľny\t\tadj.
2173\tnegativny\t\tadj.
28398\tnegodny\t\tadj.
33183\tnegodny\t\tadj.
33186\tnegodny\t\tadj.
17907\tnegodovańje\t\tn.sg.
9555\tnegotovy\t\tadj.
28400\tnegramotnosť\t\tf.
33200\tnegramotnosť\t\tf.
33202\tnegramotny\t\tadj.
33204\tnegramotny\t\tadj.
34915\tnegybky\t\tadj.
9556\tNehaj sila bųde s tobojų!\t\tphrase
9558\tnehaj\t\tparticle
2900\tnehati\t\tv.tr. pf.
33112\tneizběžno\t\tadv.
33115\tneizběžnosť\t\tf.
33111\tneizběžny\t\tadj.
35074\tneizgoda\t\tf.
35075\tneizgodny\t\tadj.
35511\tneizgovorlivy\t\tadj.
36418\tneizměnjeny\t\tadj.
19886\tneizměnny\t\tadj.
33136\tneizměrimy\t\tadj.
16861\tneizvěstny\t\tadj.
35264\tnejasny\t\tadj.
35388\tnejestvujųći\t\tadj.
23262\tnejlon\t\tm.
23263\tnejlonovy\t\tadj.
2297\tněkako\t\tadv.
983\tněkaky\t\tadj.
19567\tněkamo\t\tadv.
35412\tnekaznivosť\t\tf.
35413\tnekaznivy\t\tadj.
2172\tněkde\t\tadv.
2794\tněkȯgda, někȯgdy\t\tadv.
5696\tněkoj\t\tpron.indef.
9575\tněkoliko dnjev nazad\t\tadv.
17911\tněkoliko dnjev tomu\t\tadv.
9576\tněkoliko razov\t\tadv.
2396\tněkoliko\t\tadv.
16451\tněkolikokråtno\t\tadv.
19888\tnekompetencija\t\tf.
19889\tnekompletny\t\tadj.
19890\tnekonsistencija\t\tf.
17912\tnekrasna katȯčka\t\tf.
17913\tnekrasny\t\tadj.
4082\tněkto\t\tpron.indef.
5692\tněktory\t\tadj.
1001\tněkųdy\t\tadv.
1767\tnelegaľny\t\tadj.
28414\tneljudsky\t\tadj.
19891\tnelogičny\t\tadj.
5985\tnemaje, ne imaje\t\tadv.
2793\tnemalo\t\tadv.
28417\tnemaly\t\tadj.
2774\tNěmcija\t\tf.sg.
2780\tNěmec\t\tm.anim.
984\tněmečsky\t\tadj.
28421\tněměti\t\tv.intr. ipf.
23764\tnemilosŕdno\t\tadv.
23763\tnemilosŕdny\t\tadj.
28424\tnemilosť\t\tf.
28423\tnemilostivy\t\tadj.
28425\tnemily\t\tadj.
33120\tneminujemosť\t\tf.
33118\tneminujemy\t\tadj.
28427\tnemirny\t\tadj.
28428\tNěmka\t\tf.
967\tnemnogo\t\tadv.
28431\tnemnogy\t\tadj.
21364\tnemnožko\t\tadv.
20539\tnemoć\t\tf.
20540\tnemoćny\t\tadj.
32286\tnemoraľny\t\tadj.
28435\tněmosť\t\tf.
28436\tněmota\t\tf.
16286\tnemožlivosť\t\tf.
4561\tnemožlivy\t\tadj.
20541\tnemožno\t\tadv.
9587\tnemožnosť\t\tf.
9588\tnemožny\t\tadj.
28438\tnemųdry\t\tadj.
949\tněmy\t\tadj.
32387\tnenadežny\t\tadj.
32623\t#nenaměrjeny\t\tadj.
19893\tnenarušimy\t\tadj.
33816\tnenasytnik\t\tm.anim.
33013\tnenasytnosť\t\tf.
28441\tnenasytny\t\tadj.
16977\tnenaučny\t\tadj.
968\tnenaviděti\t\tv.tr. ipf.
5293\tnenavisť\t\tf.sg.
28446\tnenavistny\t\tadj.
33261\tneniščimy\t\tadj.
4105\tnenormaľno\t\tadv.
4104\tnenormaľnosť\t\tf.
4103\tnenormaľny\t\tadj.
33109\tneobhodimosť\t\tf.
33105\tneobhodimy\t\tadj.
19894\tneobjasnimy\t\tadj.
28447\tneobjętny\t\tadj.
17914\tneobrazovany\t\tadj.
23706\tneobyčno\t\tadv.
6281\tneobyčny\t\tadj.
22893\tneobzrimy\t\tadj.
3860\tneočekyvano\t\tadv.
9598\tneočekyvanosť\t\tf.
9599\tneočekyvany\t\tadj.
33229\tneodčuđajemy, neodčuđimy\t\tadj.
35690\tneoddělimy\t\tadj.
9601\tneodgovorno\t\tadv.
9602\tneodgovornosť\t\tf.
9603\tneodgovorny\t\tadj.
23881\tneodložny\t\tadj.
36651\tneodobrjeńje\t\tn.sg.
4063\tneodpovědaľnosť\t\tf.
4062\tneodpovědaľny\t\tadj.
28450\tneodstųpny\t\tadj.
33116\tneodvråtimy\t\tadj.
35165\tneoficiaľno\t\tadv.
35164\tneoficiaľny\t\tadj.
19895\tneograničeny\t\tadj.
28451\tneohota\t\tf.
14750\tneohotno\t\tadv.
9607\tneohotny\t\tadj.
35714\tneolit\t\tm.sg.
35715\tneolitičny\t\tadj.
35949\tneologizm\t\tm.
22605\tneon\t\tm.sg.
19896\tneopisujemy\t\tadj.
9608\tneoprěděljeno\t\tadv.
9609\tneoprěděljeny\t\tadj.
9638\tneoriginaľny\t\tadj.
33467\tneoskvŕnjeny\t\tadj.
9610\tneosnovany\t\tadj.
35324\tneosporimy\t\tadj.
35864\tneostråžno\t\t#adv.
35863\tneostråžny\t\tadj.
16978\tneoznačeny\t\tadj.
16979\tneoznačiteljny zaimennik\t\tm.
32450\tNepal\t\tm.sg.
32451\tnepaľsky\t\tadj.
20542\tnepamętny\t\tadj.
33230\tneparno čislo\t\tn.
28455\tneparny\t\tadj.
19897\tnepisany\t\tadj.
28457\tneplodny\t\tadj.
2017\tnepodatlivy\t\tadj.
28459\tnepodobny\t\tadj.
17917\tnepogoda\t\tf.
3378\tnepokoj\t\tm.sg.
36699\tnepokojiti sę\t\tv.refl. ipf.
3862\tnepokojiti\t\tv.tr. ipf.
28464\tnepokorny\t\tadj.
17918\tnepȯlnomožnica\t\tf.
17920\tnepȯlnomožnik\t\tm.anim.
17922\tnepȯlnomožnosť\t\tf.
17924\tnepȯlnomožny\t\tadj.
17926\tnepȯlnosposobnica\t\tf.
17928\tnepȯlnosposobnik\t\tm.anim.
17930\tnepȯlnosposobnosť\t\tf.
17932\tnepȯlnosposobny\t\tadj.
28465\tnepȯlny\t\tadj.
19898\tnepomoćny\t\tadj.
33634\tnepopravimy\t\tadj.
36339\tnepopravimy\t\tadj.
9614\tnepopravny\t\tadj.
28466\tneporędny\t\tadj.
994\tneporędȯk\t\tm.sg.
28468\tneporočny\t\tadj.
36081\tneporušimosť\t\tf.
36080\tneporušimy\t\tadj.
28469\tneposěda\t\tm.anim.
36397\tneposědlivosť\t\tf.
21365\tneposědlivy\t\tadj.
23707\tneposlušnosť\t\tf.
23708\tneposlušny\t\tadj.
992\tneposrědnje\t\tadv.
5798\tneposrědnji, neposrědny\t\tadj.
9618\tneposrědnosť\t\tf.
28471\tnepostojanny\t\tadj.
5786\tnepotrěbny\t\tadj.
6004\tnepovaga\t\tf.
35641\tnepoznajemy\t\tadj.
36687\tnepozvoljeny\t\tadj.
35160\tnepraktičnosť\t\tf.
35156\tnepraktičny\t\tadj.
19899\tnepravda\t\tf.
28476\tnepravdivy\t\tadj.
35202\tnepravdopodobny\t\tadj.
3364\tnepraviľny\t\tadj.
28480\tnepravy\t\tadj.
28481\tnepravy\t\tadj.
34838\tneprědvidimy\t\tadj.
34839\tneprědvidlivy\t\tadj.
17937\tneprěhodny\t\tadj.
19901\tneprěstanno\t\tadv.
28482\tneprěstanny\t\tadj.
28483\tneprigodnosť\t\tf.
28484\tneprigodny\t\tadj.
1160\tneprijatelj\t\tm.anim.
28487\tneprijateljsky\t\tadj.
28488\tneprijateljstvo\t\tn.sg.
33016\tneprijemlivy\t\tadj.
28493\tneprijemny\t\tadj.
23810\tneprijętnosť\t\tf.
28490\tneprijętny\t\tadj.
28494\tneprimětny\t\tadj.
9637\tneprirodny\t\tadj.
22809\tneprirodny\t\tadj.
28495\tnepristojnosť\t\tf.
28496\tnepristojny\t\tadj.
28497\tnepristųpnosť\t\tf.
28498\tnepristųpny\t\tadj.
28499\tnepritomny\t\tadj.
33495\tnepritomny\t\tadj.
35881\tneprivykly\t\tadj.
17938\tneprodyšny\t\tadj.
28501\tneprohodny\t\tadj.
33821\tnepromokajemy\t\tadj.
14752\tneprosty\t\tadj.
9628\tneprozråčimosť\t\tf.
9629\tneprozråčno\t\tadv.
9630\tneprozråčnosť\t\tf.
9631\tneprozråčny\t\tadj.
23598\tNeptun\t\tm.sg.
28502\tneråbotny\t\tadj.
19902\tneracionaľny\t\tadj.
28503\tnerado\t\tadv.
28511\tneråvnosť\t\tf.
9639\tneråvny\t\tadj.
36689\tneråvny\t\tadj.
28505\tneråzlųčny\t\tadj.
19903\tneråzuměńje\t\tn.sg.
16980\tneråzumlivy\t\tadj.
28507\tneråzumny\t\tadj.
34515\tneråzvity\t\tadj.
28508\tneręd\t\tm.sg.
36443\tnerědko\t\tadv.
33505\tnerędnosť\t\tf.
16982\tnerędny\t\tadj.
28509\tnerędny\t\tadj.
23776\tneregularno\t\tadv.
33506\tneregularnosť\t\tf.
16981\tneregularny\t\tadj.
23213\tnerv\t\tm.
23224\tnervny\t\tadj.
23226\tnervoznosť\t\tf.
23222\tnervozny\t\tadj.
19905\tnesamovoljny\t\tadj.
35618\tnesčisljeny\t\tadj.
17959\tnesgoda\t\tf.
28516\tneskromny\t\tadj.
28517\tneslavny\t\tadj.
28518\tneslyhany\t\tadj.
17939\tnesmělo\t\tadv.
17940\tnesmělosť\t\tf.
9640\tnesměly\t\tadj.
9641\tnesmysľny\t\tadj.
20544\tnesnosny\t\tadj.
33509\tnesȯglåśje, nesųglåśje\t\tn.
996\tnesȯvŕšeny vid\t\tm.
35256\tnesȯvŕšeny\t\tadj.
9642\tnespokojny\t\tadj.
5909\tnespokojstvo\t\tn.sg.
35636\tnesposobny\t\tadj.
19908\tnespravědlivy\t\tadj.
23879\tnesrųčny\t\tadj.
35929\tnestabiľnosť\t\tf.
35276\tnestabiľny\t\tadj.
9644\tnestaly\t\tadj.
35574\tnestera\t\tf.
20547\tnesti jajca\t\tv.tr. ipf.
1161\tnesti\t\tv.tr. ipf.
3203\tnesųmněno\t\tadv.
6540\tnesųmněny\t\tadj.
9648\tnesvědomo\t\tadv.
6222\tnesvědomosť\t\tf.
6223\tnesvědomy\t\tadj.
19904\tnesvęzany\t\tadj.
14753\tneščęsťje\t\tn.
19906\tneščęsťje\t\tn.
9652\tneščęstlivo\t\tadv.
9653\tneščęstlivy\t\tadj.
16908\tneščęstny slučaj\t\tm.
3386\tneščęstny\t\tadj.
31991\tneškodlivy\t\tadj.
35573\t#netij\t\tm.anim.
3682\tnetočny\t\tadj.
35067\tnetolerantnosť\t\tf.
35069\tnetolerantny\t\tadj.
16862\tnetopyŕ\t\tm.anim.
28532\tnetrězvy\t\tadj.
36709\tnetŕpělivosť\t\tf.sg.
28533\tnetŕpělivy\t\tadj.
28534\tnetŕpěńje\t\tn.sg.
35068\tnetŕpimosť\t\tf.
19909\tnetŕpimy\t\tadj.
35070\tnetŕpimy\t\tadj.
9660\tneubojazno\t\tadv.
9661\tneubojazny\t\tadj.
28535\tneučeny\t\tadj.
28536\tneučtivy\t\tadj.
34975\tneudačnik\t\tm.anim.
34974\tneudačny\t\tadj.
17941\tneudobno\t\tadv.
17942\tneudobny\t\tadj.
35073\tneudobstvo\t\tn.
28538\tneugasimy\t\tadj.
22163\tneuk\t\tm.anim.
22164\tneuk\t\tm.anim.
28540\tneuměńje\t\tn.sg.
28541\tneuměrny\t\tadj.
35638\tneuměstny\t\tadj.
28542\tneumny\t\tadj.
34980\tneumolimy\t\tadj.
9662\tneumorjeno\t\tadv.
9663\tneumorjenosť\t\tf.
9664\tneumorjeny\t\tadj.
32625\tneumysľno\t\tadv.
28543\tneumysľny\t\tadj.
24654\tneurodny\t\tadj.
21370\tneurođaj\t\tm.
6550\tneuspěh\t\tm.
28546\tneuspěšny\t\tadj.
9665\tneustalo\t\tadv.
9666\tneustalosť\t\tf.
9667\tneustaly\t\tadj.
9668\tneustrašno\t\tadv.
9669\tneustrašnosť\t\tf.
9672\tneustrašny\t\tadj.
36649\tneustųplivosť, neustųpnosť\t\tadj.
17943\tneustųplivy, neustųpny\t\tadj.
28548\tneutěšimy\t\tadj.
17944\tnevažno\t\tintj.
23341\tnevažny\t\tadj.
4901\tnevdęčny\t\tadj.
19912\tnevědomy\t\tadj.
28551\tneveliky\t\tadj.
28554\tnevěŕje\t\tn.sg.
22326\tnevěrnik\t\tm.anim.
28555\tnevěrnosť\t\tf.
28556\tnevěrny\t\tadj.
28557\tnevěrny\t\tadj.
4562\tnevěrojętny\t\tadj.
997\tnevěsta\t\tf.
9677\tnevěstinsky\t\tadj.
22222\tnevěža\t\tf.
23710\tnevidimo\t\tadv.
23709\tnevidimy\t\tadj.
5957\tnevinnosť\t\tf.
1157\tnevinny\t\tadj.
28568\tnevinovaty\t\tadj.
9679\tnevojnovy\t\tadj.
22308\tnevolja\t\tf.
22310\tnevolja\t\tf.
28575\tnevoljnica\t\tf.
22311\tnevoljnik\t\tm.anim.
28577\tnevoljny\t\tadj.
28578\tnevoljny\t\tadj.
4533\tnevrolog\t\tm.anim.
4535\tnevrologičny\t\tadj.
4534\tnevrologija\t\tf.sg.
9680\tnevromorfny\t\tadj.
35832\tnevtralizacija\t\tf.
35831\tnevtralizovati\t\tv.tr. ipf./pf.
5037\tnevtraľnosť\t\tf.
5036\tnevtraľny\t\tadj.
4659\tnevtron\t\tm.
17947\tnezabųďka\t\tf.
31774\tnezabytny\t\tadj.
17948\tnezadovaljati\t\tv.tr. ipf.
17953\tnezadovoliti\t\tv.tr. pf.
17950\tnezadovoljeny\t\tadj.
3679\tnezakonny\t\tadj.
17955\tnezaležno\t\tadv.
1019\tnezaležnosť\t\tf.sg.
1425\tnezaležny\t\tadj.
9684\tnezasluženy\t\tadj.
17956\tnezavisno\t\tadv.
17957\tnezavisnosť\t\tf.
17958\tnezavisny\t\tadj.
28582\tnezdråvy\t\tadj.
3059\tnezgrabny\t\tadj.
28587\tnezly\t\tadj.
9686\tneznačny\t\tadj.
17960\tneznajemy\t\tadj.
28589\tneznańje\t\tn.sg.
28590\tneznany\t\tadj.
217\tnež\t\tconj.
6260\tneželi\t\tconj.
36162\tneženjenec\t\tm.anim.
16983\tneživy\t\tadj.
36612\tneživy\t\tadj.
23711\tněžnosť\t\tf.
23712\tněžny\t\tadj.
1628\tni ... ni ...\t\tconj.
4032\tničemu\t\tadv.
993\tničij\t\tpron.poss.
19913\tničto\t\tpron.indef.
1021\tniderlandsky\t\tadj.
2795\tNiderlandy\t\tm.pl.
4754\tNigerija\t\tf.sg.
4755\tnigerijsky\t\tadj.
3344\tnijedin\t\tpron.indef.
1835\tnikako\t\tadv.
3345\tnikaky\t\tadj.
19570\tnikamo\t\tadv.
16787\tNikaragua\t\tf.sg.
22463\tnikaraguansky\t\tadj.
2186\tnikde\t\tadv.
22623\tnikelj\t\tm.sg.
2908\tnikȯgda, nikȯgdy\t\tadv.
19585\tnikoliko\t\tadv.
32835\tnikotin\t\tm.sg.
4\tnikto\t\tpron.indef.
1106\tnikųdy\t\tadv.
23599\tNil\t\tm.sg.
20548\tniľsky konj\t\tm.anim.
36713\tnimfa\t\tf.
36714\tnimfa\t\tf.
9709\tniša\t\tf.
36725\tniša\t\tf.
33262\tniščęći\t\tadj.
3554\tniščeńje\t\tn.
8073\tniščimy\t\tadj.
5749\tniščitelj\t\tm.
5767\tniščitelj\t\tm.anim.
19749\tniščiteljsky\t\tadj.
2799\tniščiti\t\tv.tr. ipf.
8076\tniščivo kritikovańje\t\tn.sg.
8075\tniščivo\t\tadv.
8078\tniščivosť\t\tf.
8077\tniščivy\t\tadj.
14762\tniševy\t\tadj.
1738\tniť\t\tf.
17966\tnitka\t\tf.
956\tniva\t\tf.
9712\tnizańje\t\tn.sg.
28617\tnizati\t\tv.tr. ipf.
1205\tnizina\t\tf.
28619\tnizinny\t\tadj.
9716\tnizko\t\tadv.
28622\tnizkosť\t\tf.
33267\tnizkosť\t\tf.
402\tnizky\t\tadj.
28620\tnizky\t\tadj.
9719\tnizši\t\tadj.
1002\tniže\t\tadv.
19914\tnižnosť\t\tf.
19915\tnižny\t\tadj.
28627\tnjuans\t\tm.
28628\tnjuh\t\tm.
1003\tnjuhati\t\tv.intr. ipf.
28631\tnjuhnųti\t\tv.intr. pf.
14764\tno\t\tconj.
23600\tNobelova nagråda\t\tf.
195\tnoć\t\tf.
21371\tnoćejų\t\tadv.
3863\tnoćevati\t\tv.intr. ipf.
17967\tnoćiś\t\tadv.
28637\tnoćleg\t\tm.
31887\tnoćny klub\t\tm.
4343\tnoćny\t\tadj.
28638\tnočnik\t\tm.anim.
17969\tNoeva arka\t\tf.
1230\tnoga\t\tf.
23124\tnogavica\t\tf.
23120\tnogavice\t\tf.pl.
23125\tnogavka\t\tf.
23121\tnogavky\t\tf.pl.
1229\tnogȯť\t\tm.
2060\tnomer\t\tm.
2812\tnominacija\t\tf.
16984\tnominativ\t\tm.
4976\tnominovati\t\tv.tr. ipf.
34926\tnon-stop\t\tadv.
36643\tnonšalantny\t\tadj.
28648\tnora\t\tf.
21372\tnorka\t\tf.
36131\tnorma\t\tf.
16985\tnormaľno\t\tadv.
23354\tnormaľnosť\t\tf.
5260\tnormaľny\t\tadj.
28651\tnorovisty\t\tadj.
4428\tNorvegija\t\tf.sg.
4429\tnorvežsky\t\tadj.
961\tnos\t\tm.
28655\tnosač\t\tm.anim.
20550\tnosilka\t\tn.pl.
20553\tnosilka\t\tn.pl.
28658\tnositelj\t\tm.anim.
1034\tnositi\t\tv.tr. ipf.
1037\tnositi\t\tv.tr. ipf.
28660\tnosny\t\tadj.
28661\tnosȯk\t\tm.
28662\tnosȯk\t\tm.
20555\tnosorog\t\tm.anim.
23981\tnosovka\t\tf.
36266\tnosovy ubrusok\t\tm.
28663\tnosovy\t\tadj.
4620\tnostalgičny\t\tadj.
4619\tnostalgija\t\tf.
28665\tnošeńje\t\tn.sg.
23451\tnota\t\tf.
36115\tnotacija\t\tf.
15707\tnotaŕ\t\tm.anim.
16986\tnotorično\t\tadv.
36319\tnotoričnosť\t\tf.
16987\tnotoričny\t\tadj.
22759\tnoty\t\tf.pl.
22775\tNova Zelandija\t\tf.sg.
28666\tnovak\t\tm.anim.
9737\tnovembr\t\tm.sg.
28668\tnovina\t\tf.
28669\tnovina\t\tf.
28672\tnovinka\t\tf.
9738\tnoviny\t\tf.pl.
34904\tnovogodišnja jelka\t\tf.
34903\tnovogodišnje drěvo\t\tn.
36449\tnovogrėčsky\t\tadj.
20556\tnovohebrejsky\t\tadj.
19916\tnovonarođeny\t\tadj.
35616\tnovoprišelec\t\tm.anim.
35485\tnovorođenec\t\tm.anim.
9739\tnovoslověnsky\t\tadj.
1237\tnovosť\t\tf.
33264\tnovosť\t\tf.
1510\tnovosti\t\tf.pl.
22147\tnovotvor\t\tm.
22148\tnovotvor\t\tm.
4907\tnovozelandsky\t\tadj.
2804\tnovy\t\tadj.
2397\tnozdra\t\tf.
1014\tnož\t\tm.
5282\tnožice\t\tf.pl.
28687\tnožnica\t\tf.
28691\tnråv\t\tm.
28692\tnråv\t\tm.
28693\tnrěst\t\tm.
33248\tnrěstilišče\t\tn.
33249\tnrěstilišče\t\tn.
28694\tnrěstiti sę\t\tv.refl. ipf.
19917\tnu\t\tintj.
17971\tnuda\t\tf.
17974\tnuditi sę\t\tv.refl. ipf.
17973\tnuditi\t\tv.tr. ipf.
17975\tnudny\t\tadj.
1426\tnųđa\t\tf.
2807\tnųđa\t\tf.
33251\tnųđa\t\tf.
35677\tnuklearna fuzija\t\tf.
35675\tnuklearny\t\tadj.
1015\tnula\t\tnum.card.
2809\tnulovy\t\tnum.ord.
35841\tnumeričny\t\tadj.
36608\tnutrija\t\tf.
28707\tnužny\t\tadj.
5698\tnyně\t\tadv.
19918\tnyněšnji, nyněšny\t\tadj.
28700\tnyrec\t\tm.anim.
9750\tnyrjańje\t\tn.sg.
9751\tnyrjatelj\t\tm.anim.
9752\tnyrjati\t\tv.intr. ipf.
3113\tnyrka\t\tf.
9756\tnyrkovy kamenj\t\tm.
9755\tnyrkovy\t\tadj.
28712\tnyrnųti\t\tv.intr. pf.
9757\to, ob\t\tprep.
28713\to\t\tintj.
34376\toaza\t\tf.
998\toba\t\tnum.card.
19535\tobače\t\tadv.
28716\tobadva\t\tnum.card.
16842\tobagriti\t\tv.tr. pf.
16988\tobćeslovjansky\t\tadj.
35783\tobćežiťje\t\tn.
1000\tobći\t\tadj.
20917\tobčina\t\tf.
20919\tobčiti s\t\tv.ipf.
20918\tobčiti\t\tv.intr. ipf.
23085\tobčudovańje\t\tn.
23713\tobčudovatelj\t\tm.anim.
23084\tobčudovati\t\tv.tr. ipf.
1493\tobdariti\t\tv.tr. pf.
5544\tobdarjati\t\tv.tr. ipf.
4550\tobdarjeny\t\tadj.
28724\tobdirati\t\tv.tr. ipf.
23083\tobdiv\t\tm.sg.
23078\tobdivjati\t\tv.tr. ipf.
9770\tobdobje\t\tn.
34086\tobdreti\t\tv.tr. pf.
9771\tobdumati\t\tv.tr. pf.
9772\toběćańje\t\tn.
990\toběćati\t\tv.tr. pf.
22401\toběćivati\t\tv.tr. ipf.
2038\toběd\t\tm.
9775\tobědati\t\tv.intr. ipf./pf.
28729\tobědny\t\tadj.
28731\toběgati\t\tv.tr. pf.
28732\tobělěti\t\tv.intr. pf.
28733\toběliti\t\tv.tr. pf.
16848\tobezčestiti\t\tv.tr. pf.
16850\tobezčestiti\t\tv.tr. pf.
16849\tobezčešćeńje\t\tn.
773\tobezglåviti\t\tv.tr. pf.
1587\tobezglåvjati\t\tv.tr. ipf.
5376\tobezhråbriti\t\tv.tr. pf.
5375\tobezhrabrjati\t\tv.tr. ipf.
19655\tobezpokojiti\t\tv.tr. pf.
5374\tobezsiliti\t\tv.tr. pf.
5373\tobezsiljati\t\tv.tr. ipf.
16854\tobezuměti\t\tv.intr. pf.
17980\tobezuměvati\t\tv.intr. ipf.
3727\tobględati\t\tv.tr. ipf.
3729\tobględěti\t\tv.tr. pf.
28738\tobglodati\t\tv.tr. pf.
9783\tobgovarjati\t\tv.tr. ipf.
9782\tobgovoriti\t\tv.tr. pf.
28740\tobgryzati\t\tv.tr. ipf.
28741\tobgryzti\t\tv.tr. pf.
28743\tobhod\t\tm.
33195\tobhod\t\tm.
23103\tobhoditi sę bez\t\tv.refl. ipf.
17988\tobhoditi sę s\t\tv.refl. ipf.
28745\tobhoditi sę\t\tv.refl. ipf.
5369\tobhoditi\t\tv.tr. ipf.
28746\tobhodna dråga\t\tf.
17990\tobhvaćati\t\tv.tr. ipf.
17992\tobhvatiti\t\tv.tr. pf.
2806\tobida\t\tf.
28749\tobiděti\t\tv.tr. pf.
34071\tobiđati\t\tv.tr. ipf.
28750\tobiľje\t\tn.
35207\tobiľno\t\tadv.
35206\tobiľny\t\tadj.
3476\tobimati\t\tv.tr. ipf.
1005\tobjasniti\t\tv.tr. pf.
2023\tobjasnjati\t\tv.tr. ipf.
3608\tobjasnjeńje\t\tn.
28758\tobjava\t\tf.
1006\tobjaviti sę\t\tv.refl. pf.
9801\tobjaviti sę\t\tv.refl. pf.
9798\tobjaviti\t\tv.tr. pf.
17995\tobjaviti\t\tv.tr. pf.
17996\tobjaviti\t\tv.tr. pf.
17997\tobjavjańje\t\tn.
9803\tobjavjati sę\t\tv.refl. ipf.
9804\t#objavjati sę\t\tv.refl. ipf.
9802\tobjavjati\t\tv.tr. ipf.
17998\tobjavjati\t\tv.tr. ipf.
17999\tobjavjati\t\tv.tr. ipf.
28762\tobjedati sę\t\tv.refl. ipf.
9806\tobjediniti\t\tv.tr. pf.
9807\tobjedinjati\t\tv.tr. ipf.
13222\tobjedinjeńje\t\tn.sg.
2811\tObjedinjeno Kråljevstvo\t\tn.sg.
2810\tobjedinjeno\t\tadv.
9810\tobjedinjeny\t\tadj.
28766\tobjehati\t\tv.tr. pf.
3759\tobjekt\t\tm.
19920\tobjektiv\t\tm.
32934\tobjektivnosť\t\tf.
19921\tobjektivny\t\tadj.
18000\tobjem\t\tm.sg.
28765\tobjesti sę\t\tv.refl. pf.
3477\tobjęti\t\tv.tr. pf.
5010\tobjęťje\t\tn.
23882\t#objezd\t\tm.
28774\tobjezditi\t\tv.tr. pf.
28776\tobježđati\t\tv.tr. ipf.
19922\tobkaljati\t\tv.tr. ipf.
19923\tobkoliti\t\tv.tr. pf.
28779\tobkradati\t\tv.tr. ipf.
33740\tobkrasti\t\tv.tr. pf.
22532\toblačati\t\tv.tr. ipf.
28784\toblaček\t\tm.
28782\toblåčeńje\t\tn.
22528\toblåčiti\t\tv.tr. pf.
28783\toblåčny\t\tadj.
20557\toblagati\t\tv.tr. ipf.
20559\toblagati\t\tv.tr. ipf.
28786\toblajati\t\tv.tr. pf.
34077\toblajivati\t\tv.tr. ipf.
1125\toblåk\t\tm.
28788\toblamyvati\t\tv.tr. ipf.
1570\toblasť\t\tf.
9820\toblasť\t\tf.
9822\toblastny\t\tadj.
23530\toblěčeńje\t\tn.
23740\toblěčeny\t\tadj.
28794\tobleděněti\t\tv.intr. pf.
19926\toblegčati\t\tv.tr. ipf.
28795\toblegčeńje\t\tn.
19929\toblegčiti\t\tv.tr. pf.
22524\t#oblěkati\t\tv.tr. ipf.
22526\toblěkati\t\tv.tr. ipf.
22520\toblěkti\t\tv.tr. pf.
22523\toblěkti\t\tv.tr. pf.
28801\toblet\t\tm.
28802\toblětati\t\tv.tr. ipf.
28803\tobletěti\t\tv.tr. pf.
1880\tobličje\t\tn.
20560\tobličje\t\tn.
28809\toblik\t\tm.
28810\toblinjati\t\tv.tr. pf.
3786\tobliti\t\tv.tr. pf.
3785\toblivati\t\tv.tr. ipf.
18004\toblizati\t\tv.tr. pf.
18005\toblizyvati\t\tv.tr. ipf.
10172\tobljubjeny\t\tadj.
28817\toblomiti\t\tv.tr. pf.
20561\tobložiti\t\tv.tr. pf.
20563\tobložiti\t\tv.tr. pf.
36222\tobložka\t\tf.
28822\toblupiti\t\tv.tr. pf.
28823\tobluščiti\t\tv.tr. pf.
1881\tobly\t\tadj.
28826\toblysěti\t\tv.intr. pf.
2800\tobman\t\tm.
4218\tobman\t\tm.
9833\tobmannik\t\tm.anim.
5740\tobmanųti\t\tv.tr. pf.
18009\tobmanųti\t\tv.tr. pf.
9831\tobmanyvatelj\t\tm.anim.
4216\tobmanyvati\t\tv.tr. ipf.
18014\tobmanyvati\t\tv.tr. ipf.
28830\tobmazati\t\tv.tr. pf.
36263\tobmazati\t\tv.tr. pf.
34091\tobmazyvati\t\tv.tr. ipf.
2977\tobmeđati\t\tv.tr. ipf.
18016\tobmeđeńje\t\tn.
3724\tobmeđeny\t\tadj.
2801\tobmeđiti\t\tv.tr. pf.
3585\tobměn\t\tm.
28835\tobměniti\t\tv.tr. pf.
34081\tobměnjati\t\tv.tr. ipf.
5371\tobmotati\t\tv.tr. pf.
28840\tobmotka\t\tf.
5372\tobmotyvati\t\tv.tr. ipf.
20564\tobmŕlosť\t\tf.
20565\tobmŕly\t\tadj.
18020\tobmysliti\t\tv.tr. pf.
18018\tobmysljati\t\tv.tr. ipf.
23737\tobmysljeńje\t\tn.
21373\tobnarodovati\t\tv.tr. ipf./pf.
151\tobnavjati\t\tv.tr. ipf.
34417\tobnavjati\t\tv.tr. ipf.
5321\tobnažati sę\t\tv.refl. ipf.
33746\tobnažati\t\tv.tr. ipf.
28845\tobnažiti sę\t\tv.refl. pf.
5320\tobnažiti\t\tv.tr. pf.
28846\tobnesti\t\tv.tr. pf.
34078\tobnesti\t\tv.tr. pf.
19932\tobniziti\t\tv.tr. pf.
19930\tobnižati\t\tv.tr. ipf.
19931\tobnižeńje\t\tn.
29473\tobnjuhati\t\tv.tr. pf.
34442\tobnjuhyvati\t\tv.tr. ipf.
28849\tobnositi\t\tv.tr. ipf.
28850\tobnositi\t\tv.tr. ipf.
28851\tobnova\t\tf.
241\tobnoviti\t\tv.tr. pf.
29477\tobnoviti\t\tv.tr. pf.
9847\tobnovjeńje\t\tn.
35425\tobobćati\t\tv.tr. ipf.
35428\tobobćeńje\t\tn.
35426\tobobćiti\t\tv.tr. pf.
28853\tobod\t\tm.
242\tobogaćati\t\tv.tr. ipf.
28855\tobogatěti\t\tv.intr. pf.
2217\tobogatiti\t\tv.tr. pf.
14768\t#obognjeodparnjati\t\tv.tr. ipf.
14767\tobognjeodporniti\t\tv.tr. pf.
23432\toboj\t\tm.
28857\tobojaky\t\tnum.diff.
18025\tobȯjdti sę bez\t\tv.refl. pf.
18023\tobȯjdti sę\t\tv.refl. pf.
5370\tobȯjdti\t\tv.tr. pf.
16438\toboje\t\tnum.coll.
28859\tobora\t\tf.
9852\toboråvnosť\t\tf.
9853\toboråvny\t\tadj.
21375\tobȯrvanec\t\tm.anim.
9855\tobosobjeńje\t\tn.
9854\tobosobjenosť\t\tf.
28866\tobȯzrěti sę\t\tv.refl. pf.
18026\tobožańje\t\tn.
2817\tobožati\t\tv.tr. ipf.
21685\tobråbotati\t\tv.tr. pf.
21377\tobråbotyvati\t\tv.tr. ipf.
28867\tobraćańje\t\tn.
22682\tobraćati sę k\t\tv.refl. ipf.
22674\tobraćati sę\t\tv.refl. ipf.
22676\tobraćati sę\t\tv.refl. ipf.
22678\tobraćati sę\t\tv.refl. ipf.
3206\tobraćati\t\tv.tr. ipf.
22665\tobraćati\t\tv.tr. ipf.
22667\tobraćati\t\tv.tr. ipf.
22670\tobraćati\t\tv.tr. ipf.
34146\tobraćati\t\tv.tr. ipf.
34850\tobraćati\t\tv.tr. ipf.
18027\tobråćeńje\t\tn.
28873\tobradovati sę\t\tv.refl. pf.
28872\tobradovati\t\tv.tr. pf.
3551\tobråna\t\tf.
1672\tobråniti\t\tv.tr. pf.
973\tobranjati\t\tv.tr. ipf.
19933\tobrånny mehanizm\t\tm.
35115\tobrånny\t\tadj.
33067\tobrastati něčim\t\tv.intr. ipf.
28879\tobråsti něčim\t\tv.intr. pf.
2852\tobråt\t\tm.
22684\tobråt\t\tm.
28882\tobråt\t\tm.
34112\tobråt\t\tm.
14770\t#obråtitelj\t\tm.anim.
22681\tobråtiti sę k\t\tv.refl. pf.
22675\tobråtiti sę\t\tv.refl. pf.
22677\tobråtiti sę\t\tv.refl. pf.
22679\tobråtiti sę\t\tv.refl. pf.
3209\tobråtiti\t\tv.tr. pf.
22666\tobråtiti\t\tv.tr. pf.
22668\tobråtiti\t\tv.tr. pf.
22671\tobråtiti\t\tv.tr. pf.
22673\tobråtiti\t\tv.tr. pf.
34147\tobråtiti\t\tv.tr. pf.
6187\tobråtno\t\tadv.
18030\tobråtny\t\tadj.
22685\tobråtny\t\tadj.
22686\tobråtny\t\tadj.
962\tobraz\t\tm.
18031\tobrazec\t\tm.
21378\tobrazec\t\tm.
21380\tobrazny\t\tadj.
21384\tobrazȯk\t\tm.
1031\tobrazovańje\t\tn.
21385\tobrazovańje\t\tn.
9872\tobrazovany\t\tadj.
35930\tobrazovateljny\t\tadj.
19934\tobrazovity\t\tadj.
1032\tobręd\t\tm.
2798\tobrędny\t\tadj.
16844\tobrěmeniti\t\tv.tr. pf.
16845\tobrěmenjati\t\tv.tr. ipf.
9878\tobrězańje\t\tn.
9879\tobrězati\t\tv.tr. pf.
34142\tobriti sę\t\tv.refl. pf.
28907\tobriti\t\tv.tr. pf.
28909\tobŕnųti sę\t\tv.refl. pf.
34151\tobŕnųti sę\t\tv.refl. pf.
28908\tobŕnųti\t\tv.tr. pf.
34153\tobŕnųti\t\tv.tr. pf.
34154\tobŕnųti\t\tv.tr. pf.
21387\tobrok\t\tm.
21388\tobrųb\t\tm.
21390\tobrųb\t\tm.
2796\tobrųč\t\tm.
9885\tobrųčka\t\tf.
21392\tobrušati sę\t\tv.refl. ipf.
21393\tobrušiti sę\t\tv.refl. pf.
28919\tobrvati\t\tv.tr. pf.
5263\tobrys\t\tm.
9887\tobrysovati\t\tv.tr. ipf.
28923\tobryvati\t\tv.tr. ipf.
28925\tobryvȯk\t\tm.
28926\tobryzgati\t\tv.tr. ipf.
29585\tobsada\t\tf.
29587\tobsaditi\t\tv.tr. pf.
34553\tobsađati\t\tv.tr. ipf.
28928\tobscati\t\tv.tr. pf.
33477\tobscennosť\t\tf.
33476\tobscenny\t\tadj.
28929\tobsęg\t\tm.sg.
28930\tobsęgati\t\tv.tr. ipf.
28931\tobsęgnųti\t\tv.tr. pf.
29597\tobsějati\t\tv.tr. pf.
28935\tobsějivati\t\tv.tr. ipf.
33383\tobsěkati\t\tv.tr. ipf.
28933\tobsěkti\t\tv.tr. pf.
23247\tobservacija\t\tf.
35763\tobservatorija\t\tf.
19935\tobservovati\t\tv.tr. ipf.
36309\tobsesija\t\tf.
35142\tobsęžny\t\tadj.
18032\tobsidian\t\tm.
4225\tobslědovańje\t\tn.
9891\tobslědovatelj\t\tm.anim.
4224\tobslědovati\t\tv.tr. ipf.
5706\tobsluga\t\tf.
5167\tobslugovati\t\tv.tr. ipf.
5704\tobslužiti\t\tv.tr. pf.
28939\tobsȯhnųti\t\tv.intr. pf.
34123\tobsȯhnųti\t\tv.intr. pf.
34124\tobsȯhnųti\t\tv.intr. pf.
28940\tobsrati\t\tv.tr. pf.
18034\tobsrědina\t\tf.
9895\tobstajati\t\tv.intr. ipf.
9897\tobstajati\t\tv.intr. ipf.
1090\tobstanavjati sę\t\tv.refl. ipf.
34789\tobstanavjati\t\tv.tr. ipf.
2797\tobstanoviti sę\t\tv.refl. pf.
34790\t#obstanoviti\t\tv.tr. pf.
21930\tobstųpati\t\tv.tr. ipf.
21931\tobstųpiti\t\tv.tr. pf.
3067\tobsvětliti\t\tv.tr. pf.
1713\tobsvětljati\t\tv.tr. ipf.
28950\tobsyhati\t\tv.intr. ipf.
34125\tobsyhati\t\tv.intr. ipf.
34127\tobsyhati\t\tv.intr. ipf.
9888\tobsypati\t\tv.tr. pf.
16287\tobsypyvati\t\tv.tr. ipf.
32822\tobširno\t\tadv.
32821\tobširnosť\t\tf.
28946\tobširny\t\tadj.
36219\tobšiťje\t\tf.
36218\tobšivka\t\tf.
3133\tobtestovati\t\tv.tr. pf.
16846\tobtęžati\t\tv.tr. ipf.
16847\tobtęžiti\t\tv.tr. pf.
34174\tobtirati sę\t\tv.refl. ipf.
28960\tobtirati\t\tv.tr. ipf.
34173\tobtreti sę\t\tv.refl. pf.
28962\tobtreti\t\tv.tr. pf.
28965\tobučati\t\tv.tr. ipf.
28966\tobučeńje\t\tn.
28967\tobučiti\t\tv.tr. pf.
28969\tobuh\t\tm.
19936\tobustrånny\t\tadj.
28970\tobuti sę\t\tv.refl. pf.
22760\tobuv\t\tf.
28972\tobuvati sę\t\tv.refl. ipf.
22761\tobuvka\t\tf.
32087\tobuvnik\t\tm.anim.
28974\tobuzdati\t\tv.tr. pf.
33815\tobuzdyvati\t\tv.tr. ipf.
4488\tobvadnjati\t\tv.tr. ipf.
16288\tobvažati\t\tv.tr. ipf.
14771\tobvažiti\t\tv.tr. pf.
28980\tobvesti\t\tv.tr. pf.
22225\tobvěstiti\t\tv.tr. pf.
22224\tobvěšćati\t\tv.tr. ipf.
3760\tobvęzati\t\tv.tr. pf.
28989\tobvęzati\t\tv.tr. ipf.
36610\tobvęzno\t\tadv.
35885\tobvęzny\t\tadj.
95\tobvęzȯk\t\tm.
3757\tobvęzyvati\t\tv.tr. ipf.
34191\tobvęzyvati\t\tv.tr. ipf.
762\tobviniti za\t\tv.tr. pf.
16291\tobvinjati za\t\tv.tr. ipf.
4504\tobvinjeńje\t\tn.
28998\tobviti\t\tv.tr. pf.
28999\tobvivati\t\tv.tr. ipf.
22250\tobvod\t\tm.
29000\tobvoditi\t\tv.tr. ipf.
4489\tobvodniti\t\tv.tr. pf.
2930\tobyčaj\t\tm.
18036\tobyčajno\t\tadv.
18040\tobyčajny\t\tadj.
22165\tobyčajny\t\tadj.
3341\tobyčno\t\tadv.
2019\tobyčny\t\tadj.
3199\tobydva\t\tnum.card.
4069\tobyvatelj\t\tm.anim.
9794\tobyvatelj\t\tm.anim.
18043\tobyvati\t\tv.tr. ipf.
29007\tobzirati sę\t\tv.refl. ipf.
22894\tobzor\t\tm.
29008\tobzor\t\tm.
29009\tobžegti\t\tv.tr. pf.
22965\tobžerstvo\t\tn.sg.
29011\tobžigati\t\tv.tr. ipf.
29015\tobžirati sę\t\tv.refl. ipf.
32650\tobžrati sę\t\tv.refl. pf.
18049\tocelj\t\tf.sg.
18050\toceljevy\t\tadj.
14\tocěniti\t\tv.tr. pf.
144\tocěnjati\t\tv.tr. ipf.
5147\tocěnjeńje\t\tn.
29019\tocěnka\t\tf.
1035\tocet\t\tm.
9920\točariti\t\tv.pf.
9921\točarovany\t\tadj.
21395\točarovateljny\t\tadj.
9923\točarovati\t\tv.tr. pf.
18045\točarovati\t\tv.pf.
16893\točarovyvati\t\tv.tr. ipf.
18047\točarovyvati\t\tv.ipf.
35230\točekyvańje\t\tn.
36884\točekyvany\t\tadj.
1233\točekyvati\t\tv.tr. ipf.
20920\točevidec\t\tm.anim.
3960\točevidno\t\tadv.
3961\točevidny\t\tadj.
4876\toči\t\tf.pl.
29028\točistitelj\t\tm.anim.
29029\točistiti\t\tv.tr. pf.
29030\točišćati\t\tv.tr. ipf.
29031\točišćeńje\t\tn.
29033\točny\t\tadj.
20566\točrkati\t\tv.tr. ipf.
20567\točrknųti\t\tv.tr. pf.
29035\točrniti\t\tv.tr. pf.
32657\točrnjati\t\tv.tr. ipf.
23690\tod davna\t\tadv.
18054\tod nyně\t\tadv.
3638\tod počętka\t\tadv.
18058\tod sejčas\t\tadv.
3060\tod stråny\t\tprep.
613\tod\t\tprep.
1234\tod\t\tprep.
34139\toda\t\tf.
5649\todbačati vlěvo\t\tv.intr. ipf.
36711\todbačati vpravo/vdesno\t\tv.intr. ipf.
29040\todběgati\t\tv.intr. ipf.
29042\todběgti\t\tv.intr. pf.
19937\todbirati\t\tv.tr. ipf.
29045\todbirati\t\tv.tr. ipf.
29050\todbiti sę\t\tv.refl. pf.
34100\todbiti sę\t\tv.refl. pf.
20572\todbiti\t\tv.tr. pf.
20573\todbiti\t\tv.tr. pf.
34101\todbiti\t\tv.tr. pf.
34103\todbivati sę\t\tv.refl. ipf.
34104\todbivati sę\t\tv.refl. ipf.
20568\todbivati\t\tv.tr. ipf.
20570\todbivati\t\tv.tr. ipf.
34102\todbivati\t\tv.tr. ipf.
29052\todblěsk\t\tm.
5650\todbočiti vlěvo\t\tv.intr. pf.
36712\todbočiti vpravo/vdesno\t\tv.intr. pf.
29055\todbor\t\tm.
19938\todbrati\t\tv.tr. pf.
32534\todbrati\t\tv.tr. pf.
16741\todbyti sę\t\tv.refl. pf.
16740\todbyvati sę\t\tv.refl. ipf.
34209\todčajano\t\tadv.
29057\todčajany\t\tadj.
29058\todčajati sę\t\tv.refl. pf.
34215\todčajati\t\tv.tr. pf.
34224\todčajivati sę\t\tv.refl. ipf.
34210\todčajivati\t\tv.tr. ipf.
9938\todčiniti\t\tv.tr. pf.
18060\todčinjati\t\tv.tr. ipf.
6284\todčitati\t\tv.tr. pf.
6283\todčityvati\t\tv.tr. ipf.
6211\todčuđati\t\tv.tr. ipf.
6212\todčuđiti\t\tv.tr. pf.
19939\todčuvati\t\tv.tr. ipf.
34237\toddaliti sę\t\tv.refl. pf.
29065\toddaliti\t\tv.tr. pf.
34236\toddaljati sę\t\tv.refl. ipf.
29066\toddaljati\t\tv.tr. ipf.
29063\toddaljeńje\t\tn.
16989\toddaljeny\t\tadj.
29067\toddańje\t\tn.
35533\toddanosť\t\tf.
18062\toddany\t\tadj.
5379\toddati\t\tv.tr. pf.
5378\toddavati\t\tv.tr. ipf.
5187\todděl\t\tm.
14820\todděl\t\tm.
2951\todděliti\t\tv.tr. pf.
3016\todděljati\t\tv.tr. ipf.
29072\todděljeńje\t\tn.
907\todděljeny\t\tadj.
3991\todděľno\t\tadv.
3990\todděľny\t\tadj.
34253\toddirati\t\tv.tr. ipf.
5604\toddȯhnųti\t\tv.intr. pf.
29074\toddreti\t\tv.tr. pf.
14775\toddyh\t\tm.
4072\toddyhati\t\tv.intr. ipf.
16837\toděđa\t\tf.
16840\toděti\t\tv.tr. pf.
23742\toděty\t\tadj.
16838\toděvati\t\tv.tr. ipf.
18065\toděž\t\tf.
5971\todgadati\t\tv.tr. pf.
5970\todgadyvati\t\tv.tr. ipf.
16831\todglås\t\tm.
29114\todgnųti\t\tv.tr. pf.
35938\todgovarjajųći\t\tadj.
5382\todgovarjati\t\tv.tr. ipf.
34094\todgovarjati\t\tv.tr. ipf.
3240\todgovor\t\tm.
3242\todgovoriti\t\tv.tr. pf.
29087\todgovoriti\t\tv.tr. pf.
9953\todgovorno\t\tadv.
9954\todgovornosť\t\tf.
9955\todgovorny\t\tadj.
29089\todgrebati\t\tv.tr. ipf.
29090\todgrebti\t\tv.tr. pf.
5648\todgryzati\t\tv.tr. ipf.
5647\todgryzti\t\tv.tr. pf.
34261\todgybati\t\tv.tr. ipf.
23743\todhod\t\tm.
2968\todhoditi\t\tv.intr. ipf.
14777\todhođeńje\t\tn.
15415\todidti od\t\tv.tr. pf.
19941\todigrati sę\t\tv.refl. pf.
19943\t#odigryvati roljų\t\tv.ipf.
19944\todigryvati sę\t\tv.refl. ipf.
33739\todimańje\t\tn.
18066\todimati\t\tv.tr. ipf.
18067\todimati\t\tv.tr. ipf.
33737\todimati\t\tv.tr. ipf.
8\todinųd\t\tadv.
18068\todjaviti sę\t\tv.refl. pf.
18070\todjavjati sę\t\tv.refl. ipf.
35979\todjebi sę!\t\tintj.
5486\todjehati\t\tv.intr. pf.
18072\todjęti\t\tv.tr. pf.
18073\todjęti\t\tv.tr. pf.
33738\todjęti\t\tv.tr. pf.
5498\todjezd\t\tm.
5487\todježđati\t\tv.intr. ipf.
9964\todkazańje\t\tn.
4626\todkazati sę\t\tv.refl. pf.
19946\todkazati\t\tv.tr. pf.
4629\todkazyvati sę\t\tv.refl. ipf.
19948\todkazyvati\t\tv.tr. ipf.
2225\todkladati\t\tv.tr. ipf.
5568\todkladati\t\tv.tr. ipf.
19954\todklanjati\t\tv.tr. ipf.
36870\todklanjati\t\tv.tr. ipf.
34255\todklejati sę\t\tv.refl. ipf.
34254\todklejati\t\tv.tr. ipf.
34256\todklejiti sę\t\tv.refl. pf.
29108\todklejiti\t\tv.tr. pf.
23128\todključati sę\t\tv.refl. ipf.
23130\todključati\t\tv.tr. ipf.
23129\todključiti sę\t\tv.refl. pf.
23131\todključiti\t\tv.tr. pf.
19958\todkloniti\t\tv.tr. pf.
36871\todkloniti\t\tv.tr. pf.
18075\todklonjeńje\t\tn.
36872\todklonjeńje\t\tn.
14781\todkȯgda, odkȯgdy\t\tadv.
19529\todkȯgda, odkȯgdy\t\tconj.
1017\todkryti\t\tv.tr. pf.
3559\todkryťje\t\tn.
19963\todkrytka\t\tf.
35473\todkryvańje\t\tn.
9979\todkryvatelj\t\tm.anim.
2028\todkryvati\t\tv.tr. ipf.
750\todkųd\t\tadv.
1166\todkųd-nebųď\t\tadv.
19617\todkųdykoli\t\tadv.
14782\todkųdy-libo\t\tadv.
4703\todkųsiti\t\tv.tr. pf.
4702\todkųšati\t\tv.tr. ipf.
1004\todkydati\t\tv.tr. ipf.
132\todkydnųti\t\tv.tr. pf.
5587\todlamyvati\t\tv.tr. ipf.
34258\todlěpiti sę\t\tv.refl. pf.
29110\todlěpiti\t\tv.tr. pf.
34259\todlěpjati sę\t\tv.refl. ipf.
34257\todlěpjati\t\tv.tr. ipf.
2978\todlětati\t\tv.intr. ipf.
2025\todletěti\t\tv.intr. pf.
19965\todličati\t\tv.tr. ipf.
19966\todličiti\t\tv.tr. pf.
10377\todlično\t\tadv.
10378\todličny\t\tadj.
36920\todliti\t\tv.tr. pf.
20574\todliv\t\tm.
36919\todlivati\t\tv.tr. ipf.
18076\todlogovati sę\t\tv.refl. ipf./pf.
2026\todlomiti\t\tv.tr. pf.
5741\todlomȯk\t\tm.
2984\todložiti\t\tv.tr. pf.
5569\todložiti\t\tv.tr. pf.
18080\todmesti\t\tv.tr. pf.
18081\todmětati\t\tv.tr. ipf.
19973\todmetati\t\tv.tr. ipf.
19974\todmetati\t\tv.tr. ipf.
19971\todmeteńje\t\tn.
19977\todmetnųti\t\tv.tr. pf.
19978\todmetnųti\t\tv.tr. pf.
1255\todmstiti\t\tv.tr. pf.
1728\todněkųd\t\tadv.
23343\todnesti sę k\t\tv.refl. pf.
4672\todnesti\t\tv.tr. pf.
10000\todnesti\t\tv.tr. pf.
1222\todnikųd\t\tadv.
1746\todnositeljno\t\tadv.
16990\todnositeljny zaimennik\t\tm.
35263\todnositeljny\t\tadj.
20577\todnositi sę k\t\tv.refl. ipf.
4671\todnositi\t\tv.tr. ipf.
10004\todnositi\t\tv.tr. ipf.
4107\todnosno\t\tprep.
10007\todnosno\t\tadv.
1992\todnošeńje\t\tn.
10012\todobriti\t\tv.tr. pf.
10013\todobrjati\t\tv.tr. ipf.
10011\todobrjeńje\t\tn.sg.
181\todȯjdti\t\tv.intr. pf.
29115\todolěti\t\tv.tr. pf.
34272\todolěvati\t\tv.tr. ipf.
35850\todomašniti\t\tv.tr. pf.
35849\todomašnjati\t\tv.tr. ipf.
23536\todomašnjeńje\t\tn.
18083\todomašnjeny\t\tadj.
19545\todonųd\t\tadv.
21397\todosobniti\t\tv.tr. pf.
21396\todosobnjati\t\tv.tr. ipf.
19544\todovųd\t\tadv.
5662\todpadati\t\tv.intr. ipf.
20921\todpadky\t\tm.pl.
20924\todpadnik\t\tm.anim.
5657\todpady\t\tm.pl.
5663\todpasti\t\tv.intr. pf.
23610\todpečętati\t\tv.tr. pf.
23613\todpečętȯk\t\tm.
32536\todpečętyvati\t\tv.tr. pf.
29124\todpęti\t\tv.tr. pf.
32921\todphati\t\tv.tr. pf.
32919\todpihati\t\tv.tr. ipf.
29128\todpiliti\t\tv.tr. pf.
34280\todpiljati\t\tv.tr. ipf.
29129\todpinati\t\tv.tr. ipf.
10016\todpirati sę\t\tv.refl. ipf.
34298\todpis\t\tm.
29136\todpisati\t\tv.tr. pf.
29137\todpisati\t\tv.tr. pf.
34295\todpisyvati\t\tv.tr. ipf.
34296\todpisyvati\t\tv.tr. ipf.
10020\todpiši vsim\t\tphrase
4480\todplaćati\t\tv.tr. ipf.
4481\todplaćati\t\tv.tr. ipf.
34305\todplaćati\t\tv.tr. ipf.
500\todplata\t\tf.
29143\todplata\t\tf.
29144\todplata\t\tf.
4479\todplatiti\t\tv.tr. pf.
4482\todplatiti\t\tv.tr. pf.
29146\todplatiti\t\tv.tr. pf.
29148\todplesti\t\tv.tr. pf.
29147\todpletati\t\tv.tr. ipf.
34909\todpluti\t\tv.intr. pf.
19980\todplyvati\t\tv.intr. ipf.
36727\todplyvati\t\tv.intr. ipf.
19981\todplyvti\t\tv.intr. pf.
5605\todpočęti\t\tv.intr. pf.
3296\todpočinȯk\t\tm.sg.
3295\todpočivati\t\tv.intr. ipf.
19982\todpor\t\tm.
10032\todpornosť\t\tf.
4235\todporny\t\tadj.
2390\todpověď\t\tf.
10035\todpovědaľno\t\tadv.
10042\todpovědaľnosť\t\tf.
320\todpovědaľny\t\tadj.
2189\todpovědati\t\tv.tr. ipf.
3161\todpovědati\t\tv.tr. ipf.
2972\todpověděti\t\tv.tr. pf.
6282\todpovědnik\t\tm.
34106\todprašati sę\t\tv.refl. ipf.
34107\t#odprašati sę\t\tv.refl. ipf.
16293\todprašati\t\tv.tr. ipf.
10045\todpråšiti\t\tv.tr. pf.
20926\todprava\t\tf.
29167\todpraviti sę\t\tv.refl. pf.
20929\todpraviti\t\tv.tr. pf.
20931\todpraviti\t\tv.tr. pf.
34348\todpravjati sę\t\tv.refl. ipf.
20933\todpravjati\t\tv.tr. ipf.
20934\todpravjati\t\tv.tr. ipf.
29169\todpravjeńje\t\tn.
29170\todpravny punkt\t\tm.
10017\todprěti sę\t\tv.refl. pf.
29181\todprositi sę\t\tv.refl. pf.
34105\todprositi sę\t\tv.refl. pf.
20935\todpųditi\t\tv.tr. pf.
5054\todpusk\t\tm.
34299\todpust\t\tm.
18089\todpustiti\t\tv.tr. pf.
29187\todpustiti\t\tv.tr. pf.
18087\todpušćati\t\tv.tr. ipf.
29191\todpušćati\t\tv.tr. ipf.
20937\todpušćeńje\t\tn.
36889\tOdra\t\tf.sg.
21398\todračati\t\tv.tr. ipf.
29196\todraditi\t\tv.tr. pf.
34349\todrađati\t\tv.tr. ipf.
29198\todraz\t\tm.
29200\todraziti sę\t\tv.refl. pf.
5558\todraziti\t\tv.tr. pf.
21401\todraziti\t\tv.tr. pf.
13479\todråzlika\t\tf.
29202\todražati sę\t\tv.refl. ipf.
5557\todražati\t\tv.tr. ipf.
21400\todražati\t\tv.tr. ipf.
29203\todrěčeńje\t\tn.
35644\todrěčeńje\t\tn.
21402\todrěčny\t\tadj.
22356\todręd\t\tm.
21404\todrěkati sę\t\tv.refl. ipf.
21406\todrěkati\t\tv.tr. ipf.
21410\todrěkti sę\t\tv.refl. pf.
21408\todrěkti\t\tv.tr. pf.
29213\todrěz, odrězȯk\t\tm.
4439\todrězati\t\tv.tr. pf.
5556\todrězyvati\t\tv.tr. ipf.
21415\todročiti\t\tv.tr. pf.
18091\todroda\t\tf.
18093\todrųbati\t\tv.tr. pf.
18094\todrųbyvati\t\tv.tr. ipf.
29223\todrvati\t\tv.tr. pf.
29226\todryti\t\tv.tr. pf.
29227\todryvati\t\tv.tr. ipf.
34361\todryvati\t\tv.tr. ipf.
29233\todsěděti\t\tv.tr. pf.
34369\todsěđati\t\tv.tr. ipf.
29239\todsěkati\t\tv.tr. ipf.
29240\todsěkti\t\tv.tr. pf.
5547\todskakati\t\tv.intr. ipf.
3708\todskočiti\t\tv.intr. pf.
29248\todslanjati\t\tv.tr. ipf.
29116\todslati\t\tv.tr. pf.
34374\todsloniti\t\tv.tr. pf.
29249\todslužiti\t\tv.tr. pf.
29250\todsȯhnųti\t\tv.intr. pf.
3714\todstati\t\tv.intr. pf.
10054\todstava\t\tf.
3713\todstavati\t\tv.intr. ipf.
19983\todstaviti\t\tv.tr. pf.
19985\todstavjati\t\tv.tr. ipf.
10058\todstråniti\t\tv.tr. pf.
21878\todstråniti\t\tv.tr. pf.
21880\todstråniti\t\tv.tr. pf.
21882\todstråniti\t\tv.tr. pf.
21874\todstranjati\t\tv.tr. ipf.
21876\todstranjati\t\tv.tr. ipf.
21877\todstranjati\t\tv.tr. ipf.
21881\todstranjati\t\tv.tr. ipf.
4371\todstrašati\t\tv.tr. ipf.
4372\todstrašiti\t\tv.tr. pf.
5110\todstrěliti\t\tv.tr. pf.
29253\todstrigati\t\tv.tr. ipf.
29255\todstrigti\t\tv.tr. pf.
21948\todstųp\t\tm.
21949\todstųp\t\tm.
21950\todstųp\t\tm.
14787\todstųpańje\t\tn.
29257\todstųpańje\t\tn.
4627\todstųpati\t\tv.intr. ipf.
5074\todstųpati\t\tv.intr. ipf.
10063\todstųpati\t\tv.intr. ipf.
21934\todstųpati\t\tv.intr. ipf.
21937\todstųpati\t\tv.tr. ipf.
15417\todstųpiti od\t\tv.tr. pf.
4628\todstųpiti\t\tv.intr. pf.
5075\todstųpiti\t\tv.intr. pf.
21941\todstųpiti\t\tv.intr. pf.
21942\todstųpiti\t\tv.intr. pf.
21945\todstųpiti\t\tv.tr. pf.
10065\todstųpjeńje\t\tn.
21951\todstųpnik\t\tm.anim.
36228\todstųpnik\t\tm.anim.
19541\todśųd\t\tadv.
20938\todsunųti\t\tv.tr. pf.
36665\todsųtnosť\t\tf.sg.
33492\todsųtny\t\tadj.
10066\todsųtstvo\t\tn.sg.
36666\todsųtstvovati\t\tv.intr. ipf.
20940\todsuvati\t\tv.tr. ipf.
34375\todsyhati\t\tv.intr. ipf.
29271\todsylati\t\tv.tr. pf.
29264\todščepiti\t\tv.tr. pf.
29265\todščepjati\t\tv.tr. ipf.
29266\todščepȯk\t\tm.
4304\todšlupati\t\tv.tr. pf.
5552\todšlupyvati\t\tv.tr. ipf.
29274\todtajati\t\tv.tr. pf.
29275\todtęgati\t\tv.tr. ipf.
29277\todtęgnųti\t\tv.tr. pf.
29278\todtěkati\t\tv.intr. ipf.
34382\todtěkati\t\tv.intr. ipf.
29279\todtekti\t\tv.intr. pf.
34383\todtekti\t\tv.intr. pf.
29280\todtěnȯk\t\tm.
34384\todtirati\t\tv.tr. ipf.
3756\todtisk pŕsta\t\tm.
22095\todtisk\t\tm.
22096\todtisk\t\tm.
22097\todtisk\t\tm.
23611\todtiskati\t\tv.tr. ipf.
23612\todtisknųti\t\tv.tr. pf.
29282\todtreti\t\tv.tr. pf.
54\todtųd\t\tadv.
16295\todučati\t\tv.tr. ipf.
10071\todučeny\t\tadj.
10072\todučiti\t\tv.tr. pf.
29284\todurěti\t\tv.intr. pf.
10074\todvadnjati\t\tv.tr. ipf.
1423\todvaga\t\tf.
3420\todvažny\t\tadj.
4674\todvesti\t\tv.tr. pf.
10085\todvět\t\tm.
36387\todvęzati\t\tv.tr. pf.
5509\todvezti\t\tv.tr. pf.
14788\todvezti\t\tv.tr. pf.
36386\todvęzyvati\t\tv.tr. ipf.
5380\todvinųti\t\tv.tr. pf.
5381\todvivati\t\tv.tr. ipf.
22538\todvlåčivati\t\tv.tr. ipf.
23884\todvlåčivati\t\tv.tr. ipf.
23886\todvlěčeńje\t\tn.
23885\todvlěčeny\t\tadj.
22536\todvlěkati\t\tv.tr. ipf.
36873\todvlěkati\t\tv.tr. ipf.
22537\todvlěkti\t\tv.tr. pf.
23883\todvlěkti\t\tv.tr. pf.
4673\todvoditi\t\tv.tr. ipf.
10093\todvodniti\t\tv.tr. pf.
5508\todvoziti\t\tv.tr. ipf.
14789\todvoziti\t\tv.tr. ipf.
10098\todvožeńje\t\tn.
1042\todvraćati\t\tv.tr. ipf.
4688\todvraćati\t\tv.tr. ipf.
22691\todvraćati\t\tv.tr. ipf.
4689\todvråćeńje\t\tn.
1121\todvråtiti\t\tv.tr. pf.
4687\todvråtiti\t\tv.tr. pf.
22692\todvråtiti\t\tv.tr. pf.
10107\todvråtlivy\t\tadj.
4679\todvråtno\t\tadv.
10110\todvråtny\t\tadj.
19987\todvŕgańje\t\tn.
1175\todvŕgati\t\tv.tr. ipf.
797\todvŕgnųti\t\tv.tr. pf.
32868\todvŕtka\t\tf.
1122\todvśųd\t\tadv.
36321\todvykati sę\t\tv.refl. ipf.
36320\todvykati\t\tv.tr. ipf.
36323\todvyknųti sę\t\tv.refl. pf.
36322\todvyknųti\t\tv.tr. pf.
14790\todzavisiti\t\tv.tr. pf.
15420\todzavisny\t\tadj.
22865\todznaka\t\tf.
29809\todzvati sę\t\tv.refl. pf.
32459\todzvati\t\tv.tr. pf.
22915\todzyv\t\tm.
29822\todzyvati sę\t\tv.refl. ipf.
32460\todzyvati\t\tv.tr. ipf.
19505\toficer\t\tm.anim.
16991\toficiaľno\t\tadv.
291\toficiaľny\t\tadj.
3761\tofis\t\tm.
29291\togarȯk\t\tm.
29292\togladiti\t\tv.tr. pf.
173\toglåsiti\t\tv.tr. pf.
1481\toglašati\t\tv.tr. ipf.
5078\toglåšeńje\t\tn.
29296\toglåvnik\t\tm.
18099\toględ\t\tm.
3379\toględati\t\tv.tr. ipf.
5551\toględěti\t\tv.tr. pf.
29304\togluhnųti, oglušeti\t\tv.intr. pf.
29305\toglupěti\t\tv.intr. pf.
29307\toglušiti\t\tv.tr. pf.
18101\tognišče\t\tn.
29308\tognjeny\t\tadj.
4236\tognjeodporny\t\tadj.
29314\tognojiti\t\tv.tr. pf.
34143\togoliti sę\t\tv.refl. pf.
29316\togoliti\t\tv.tr. pf.
29317\togoliti\t\tv.tr. pf.
18103\togon\t\tm.
826\togȯnj\t\tm.
18104\togorčati\t\tv.tr. ipf.
18106\togorčiti\t\tv.tr. pf.
34395\togovarjańje\t\tn.
34393\togovarjati\t\tv.tr. ipf.
34394\togovarjati\t\tv.tr. ipf.
18108\togovor\t\tm.
29318\togovoriti\t\tv.tr. pf.
34396\togovoriti\t\tv.tr. pf.
23401\tograbiti\t\tv.tr. pf.
23400\tograbjati\t\tv.tr. ipf.
3613\togråda\t\tf.
18112\togråditi\t\tv.tr. pf.
18109\tograđati\t\tv.tr. ipf.
29328\togråđeńje\t\tn.
16297\tograničati\t\tv.tr. ipf.
10129\tograničeńje\t\tn.
19988\tograničeny\t\tadj.
10131\tograničiti\t\tv.tr. pf.
4329\togražati\t\tv.tr. ipf.
29331\togrěti\t\tv.tr. pf.
29332\togrěvati\t\tv.tr. ipf.
18113\togrlica\t\tf.
1048\togromny\t\tadj.
14794\togromny\t\tadj.
4328\togroziti\t\tv.tr. pf.
10138\togrožeńje\t\tn.
10139\t#ogroženy\t\tadj.
29340\togurȯk\t\tm.
29341\tohati\t\tv.intr. ipf.
29344\tohlåděti\t\tv.intr. pf.
29342\tohlåditi\t\tv.tr. pf.
29345\tohlađati\t\tv.tr. ipf.
29346\tohlåđeńje\t\tn.sg.
3552\tohota\t\tf.
18114\tohotnik\t\tm.anim.
3865\tohotno\t\tadv.
10142\tohotnosť\t\tf.
3864\tohotny\t\tadj.
2118\tohråna\t\tf.
1326\tohråniti\t\tv.tr. pf.
1563\tohranjati\t\tv.tr. ipf.
29353\tohrånny\t\tadj.
29354\tohroměti\t\tv.intr. pf.
29356\toj!\t\tintj.
29357\toje\t\tn.
29361\tokameněti\t\tv.intr. pf.
29362\tokameněti\t\tv.intr. pf.
5362\tokameniti\t\tv.tr. pf.
5364\tokameniti\t\tv.tr. pf.
5361\tokamenjati\t\tv.tr. ipf.
5363\tokamenjati\t\tv.tr. ipf.
32994\tokarina\t\tf.
10149\tokazalo sę\t\tphrase
1457\tokazati sę\t\tv.refl. pf.
19990\tokazati\t\tv.tr. pf.
3396\tokazija\t\tf.
29365\tokazyvaje sę\t\tphrase
1612\tokazyvati sę\t\tv.refl. ipf.
19991\tokazyvati\t\tv.tr. ipf.
5261\tokean\t\tm.
4896\tOkeanija\t\tf.sg.
29368\toklevetati\t\tv.tr. pf.
1989\tokno\t\tn.
1\toko\t\tn.
19994\tokolice\t\tf.pl.
29373\tokoličny\t\tadj.
32327\tokolina\t\tf.
18117\tokoľna priroda\t\tf.
3502\tokoľnosť\t\tf.
5797\tokoľny\t\tadj.
2117\tokolo\t\tprep.
19995\tokolo\t\tprep.
36654\tokolorovati\t\tv.tr. pf.
36328\tokȯnnica\t\tf.
29380\tokȯnny\t\tadj.
10159\tokop\t\tm.
29385\tokotiti sę\t\tv.refl. pf.
29386\tokovany\t\tadj.
29387\tokovati\t\tv.tr. pf.
18119\tokovy\t\tm.pl.
29391\tokrajina\t\tf.
34421\tokrajina\t\tf.
29392\tokrajny\t\tadj.
29398\tokrěpnųti\t\tv.intr. pf.
5538\tokrestiti\t\tv.tr. pf.
29403\tokropiti\t\tv.tr. pf.
29404\tokropjati\t\tv.tr. ipf.
19997\tokrųg\t\tm.
5366\tokrųgliti\t\tv.tr. pf.
5365\tokrųgljati\t\tv.tr. ipf.
29410\tokrųglosť\t\tf.
29411\tokrųgly\t\tadj.
16806\tokrutnosť\t\tf.
16805\tokrutny\t\tadj.
234\tokrųžati\t\tv.tr. ipf.
2803\tokrųžiti\t\tv.tr. pf.
29416\tokrųžna dråga\t\tf.
146\toksid\t\tm.
36834\toktava\t\tf.
1988\toktobr\t\tm.sg.
35423\tokuljary\t\tm.pl.
29422\tokunj\t\tm.anim.
10168\tokupacija\t\tf.
10169\tokupant\t\tm.anim.
2111\tokupovati\t\tv.tr. ipf.
1497\tolej\t\tm.
36077\tolejna rěpka\t\tf.
16788\toligarh\t\tm.anim.
16789\toligarhija\t\tf.
18121\tolimpijske igry\t\tf.pl.
35021\tolimpijsky\t\tadj.
35006\tolivka\t\tf.
684\toljha\t\tf.
29432\tolověny\t\tadj.
21417\tolovka\t\tf.
10173\tolovny\t\tadj.
10\tolovo\t\tn.sg.
29434\toltaŕ\t\tm.
4625\tomal\t\tadv.
18123\t#omam\t\tm.
18125\tomamiti\t\tv.tr. pf.
18130\tomamnik\t\tm.anim.
29435\toman\t\tm.
31814\tomar\t\tm.anim.
29436\tomastiti\t\tv.tr. pf.
29440\tomesti\t\tv.tr. pf.
29439\tomětati\t\tv.tr. ipf.
5893\tomiljeny\t\tadj.
29441\tomlåděti\t\tv.intr. pf.
29442\tomlåditi\t\tv.tr. pf.
27642\tomlađati\t\tv.tr. ipf.
34436\tomlet\t\tm.
29446\tomlěti\t\tv.intr. pf.
34437\tomlěvati\t\tv.intr. ipf.
29452\tomŕtvěti\t\tv.intr. pf.
4686\tomŕziti\t\tv.tr. pf.
10178\tomŕzlivy\t\tadj.
10179\tomŕzno\t\tadv.
10180\tomŕzny\t\tadj.
19998\tomŕžajųći\t\tadj.
5608\tomŕžati\t\tv.tr. ipf.
4685\tomŕžeńje\t\tn.
3404\tomųženy\t\tadj.
3403\tomųžiti sę\t\tv.refl. pf.
29456\tomųžiti\t\tv.tr. pf.
2150\ton\t\tpron.pers.
792\tona\t\tpron.pers.
10202\tonako\t\tadv.
19580\tonaky\t\tadj.
19565\tonamo\t\tadv.
32515\tondatra\t\tf.
19533\tonde\t\tadv.
35621\tone\t\tpron.pers.
32831\toněměti\t\tv.intr. pf.
21419\tonesměliti\t\tv.tr. pf.
21418\tonesměljati\t\tv.tr. ipf.
73\toni\t\tpron.pers.
35615\tonlajn, on-lajn\t\tadv.
2821\tono\t\tpron.pers.
16883\tonȯgda, onȯgdy\t\tadv.
16885\tonȯgda, onȯgdy\t\tadv.
34941\tonȯgdašnji, onȯgdašny\t\tadj.
19600\tonoj\t\tpron.dem.
19583\tonoliko\t\tadv.
19591\tonoliky\t\tadj.
36291\tonomatopeja\t\tf.
29478\tonuća\t\tf.
19548\tonųdy\t\tadv.
3062\topačny\t\tadj.
29481\topadati\t\tv.intr. ipf.
36006\topakovańje\t\tn.
36004\topakovati\t\tv.tr. pf.
36007\topakovka\t\tf.
36005\topakovyvati\t\tv.tr. ipf.
29484\topaliti\t\tv.tr. pf.
29485\topaljati\t\tv.tr. ipf.
4136\topalȯk\t\tm.
29486\topariti\t\tv.tr. pf.
34177\toparjati\t\tv.tr. ipf.
14800\topasna burja\t\tf.
10218\topasno prědprijęťje\t\tn.
10217\topasno\t\tadv.
4682\topasnosť\t\tf.
4681\topasny\t\tadj.
29482\topasti\t\tv.intr. pf.
34076\topat\t\tm.anim.
35012\topatka\t\tf.
34075\topatstvo\t\tn.
18132\topcija\t\tf.
35166\topcionaľny\t\tadj.
3302\topeka\t\tf.
3301\topekati\t\tv.tr. ipf.
36267\topeklina\t\tf.
10223\topekun\t\tm.anim.
18133\topekun\t\tm.anim.
20942\topekun\t\tm.anim.
18134\topekunstvo\t\tn.sg.
20943\topekunstvo\t\tn.sg.
29495\topenjka\t\tf.
3\topera\t\tf.
18135\toperacija\t\tf.
32736\topereta\t\tf.
29498\toperiti sę\t\tv.refl. pf.
34508\toperjati sę\t\tv.refl. ipf.
29497\toperjeńje\t\tn.
685\topęť\t\tadv.
36055\topica\t\tf.
23200\topij\t\tm.sg.
20944\topirati sę\t\tv.refl. ipf.
32540\topirati sę\t\tv.refl. ipf.
20000\topis\t\tm.
35306\topisateljny\t\tadj.
2\topisati\t\tv.tr. pf.
686\topisyvati\t\tv.tr. ipf.
29511\topiti sę\t\tv.refl. pf.
29510\topiti\t\tv.tr. pf.
32713\topivati sę\t\tv.refl. ipf.
32712\topivati\t\tv.tr. ipf.
3766\toplačeny\t\tadj.
10229\toplakati\t\tv.tr. pf.
10230\toplakyvańje\t\tn.sg.
10231\toplakyvati\t\tv.tr. ipf.
29519\toplěti\t\tv.tr. pf.
35122\topljunųti\t\tv.tr. pf.
29521\topljuvati\t\tv.tr. ipf.
18146\toploditi\t\tv.tr. pf.
18139\toplođati\t\tv.tr. ipf.
18141\toplođeńje\t\tn.
18143\toplođeny\t\tadj.
29525\t#opluti\t\tv.tr. pf.
34310\toplyvati\t\tv.tr. ipf.
20947\topora\t\tf.
20001\toporędčati\t\tv.tr. ipf.
20002\toporędčeny\t\tadj.
20003\toporędčiti\t\tv.tr. pf.
29531\toporny\t\tadj.
29532\topozdniti sę\t\tv.refl. pf.
34518\topozdniti\t\tv.tr. pf.
34517\topozdnjati sę\t\tv.refl. ipf.
34519\topozdnjati\t\tv.tr. ipf.
2820\topozdnjeńje\t\tn.
355\topozicija\t\tf.
10233\topoznati\t\tv.tr. pf.
10234\topoznavati\t\tv.tr. ipf.
1559\toprašćati\t\tv.tr. ipf.
29536\toprava\t\tf.
29537\topravdańje\t\tn.
32538\topravdańje\t\tn.
10235\topravdati\t\tv.tr. pf.
29538\topravdati\t\tv.tr. pf.
10236\topravdyvati\t\tv.tr. ipf.
32537\topravdyvati\t\tv.tr. ipf.
20948\topraviti\t\tv.tr. pf.
20951\topraviti\t\tv.tr. pf.
20953\topravjati\t\tv.tr. ipf.
20957\topravjati\t\tv.tr. ipf.
35415\topravniti\t\tv.tr. pf.
35416\topravnjati\t\tv.tr. ipf.
35414\topravnjeny\t\tadj.
34532\topråzdniti\t\tv.tr. pf.
34536\topråzdnjati\t\tv.tr. ipf.
29544\toprěděliti\t\tv.tr. pf.
32606\toprěděljati\t\tv.tr. ipf.
10237\toprěděljeno\t\tadv.
10238\toprěděljeny\t\tadj.
20958\toprěti sę\t\tv.refl. pf.
29547\toprěti sę\t\tv.refl. pf.
10239\toprętno\t\tadv.
10240\toprętnosť\t\tf.
10241\toprętny\t\tadj.
2132\toprostiti\t\tv.tr. pf.
20004\toprošćeńje\t\tn.
13334\toprošćeny\t\tadj.
22578\toprovŕgati\t\tv.tr. ipf.
22579\toprovŕgnųti\t\tv.tr. pf.
20582\toptika\t\tf.
35640\toptimaľny\t\tadj.
36352\toptimizovati\t\tv.tr. ipf./pf.
794\topublikovati\t\tv.tr. pf.
10244\topuhati\t\tv.intr. ipf.
10243\topuhly\t\tadj.
10245\topuhneny\t\tadj.
16299\topuhnųti\t\tv.intr. pf.
2909\topustašati\t\tv.tr. ipf.
29554\topustěti\t\tv.intr. pf.
10246\topustiti\t\tv.tr. pf.
20966\topustiti\t\tv.tr. pf.
20967\topustiti\t\tv.tr. pf.
14807\topustošeńje\t\tn.
1546\topustošiti\t\tv.tr. pf.
10250\topušćati\t\tv.tr. ipf.
20960\topušćati\t\tv.tr. ipf.
20962\topušćati\t\tv.tr. ipf.
9758\topušćeńje\t\tn.
10249\topušćeny\t\tadj.
23154\topyliti\t\tv.tr. pf.
23153\topyljati\t\tv.tr. ipf.
23155\topyljeńje\t\tn.
20969\topyt\t\tm.
23308\topyt\t\tm.
29559\torač\t\tm.anim.
35895\torakul\t\tm.anim.
34426\torangutan\t\tm.anim.
29561\toranica\t\tf.
29562\torańje\t\tn.
32348\toranžerija\t\tf.
539\toranževy\t\tadj.
34547\torašati\t\tv.tr. ipf.
34548\torašati\t\tv.tr. ipf.
34549\torašati\t\tv.tr. ipf.
34550\torašati\t\tv.tr. ipf.
34551\torašati\t\tv.tr. ipf.
22890\torati\t\tv.ipf.
36774\torbita\t\tf.
35969\torden\t\tm.
36015\torden\t\tm.
1086\torěh\t\tm.
29566\torěhovka\t\tf.
5982\torěhovo maslo\t\tn.
29567\torěhovy\t\tadj.
2398\torel\t\tm.anim.
36768\toreol\t\tm.
34788\torěšarka\t\tf.
20005\torgan\t\tm.
36165\torgan\t\tm.
36166\torgan\t\tm.
20583\torganičny\t\tadj.
6343\tOrganizacija Sěveroatlantičskogo Dogovora\t\tf.sg.
1123\tOrganizacija Sjedinjenyh Narodov\t\tf.sg.
1064\torganizacija\t\tf.
330\torganizator\t\tm.anim.
23602\torganizm\t\tm.
4977\torganizovati\t\tv.tr. ipf./pf.
32595\torgija\t\tf.
1124\torientacija\t\tf.
3801\torientovati sę\t\tv.refl. ipf.
31759\torigami\t\tn.indecl.
16036\toriginaľno\t\tadv.
16037\toriginaľnosť\t\tf.
1956\toriginaľny\t\tadj.
33797\toriti\t\tv.tr. ipf.
23448\torkestr\t\tm.
29571\torlę\t\tn.
29572\torľji\t\tadj.
35475\tornament\t\tm.
20006\tornitologičny\t\tadj.
20007\tornitologija\t\tf.sg.
29576\torny\t\tadj.
29577\torositi\t\tv.tr. pf.
34543\t#orositi\t\tv.tr. pf.
34544\torositi\t\tv.tr. pf.
34545\torositi\t\tv.tr. pf.
34546\torositi\t\tv.tr. pf.
4394\tortografičny\t\tadj.
4393\tortografija\t\tf.
2278\torųďje\t\tn.
29579\torųďje\t\tn.
3434\torųdovańje\t\tn.
3588\torųdovańje\t\tn.
10263\torųdovany\t\tadj.
10264\torųdovati\t\tv.tr. ipf.
10265\torųdovati\t\tv.tr. ipf.
10268\torųžeńje\t\tn.
29580\torųžiti\t\tv.tr. ipf.
2816\torųžje\t\tn.sg.
10269\torųžjenosec\t\tm.anim.
29582\torųžny\t\tadj.
2815\toś\t\tf.
2369\tosa\t\tf.
2967\tosaditi sę\t\tv.refl. pf.
29588\tosaditi\t\tv.tr. pf.
21420\tosadȯk\t\tm.
34554\tosađati\t\tv.tr. ipf.
29590\tosamotiti sę\t\tv.refl. pf.
14812\tosamotiti\t\tv.tr. pf.
29591\tosědati\t\tv.intr. ipf.
29592\tosedlati\t\tv.tr. pf.
29594\tosědly\t\tadj.
1112\tosel\t\tm.anim.
29599\tosel\t\tm.anim.
29603\toseliti sę\t\tv.refl. pf.
36495\toseljenėc\t\tm.anim.
29601\toseljeńje\t\tn.
29595\tosęsti\t\tv.intr. pf.
6178\tOsetija\t\tf.sg.
36562\tosetinsky\t\tadj.
29666\tośevy\t\tadj.
29614\tosika\t\tf.
21424\tosiliti\t\tv.tr. pf.
21422\tosiljati\t\tv.tr. ipf.
22801\tosiroćeny\t\tadj.
29616\tosirotěti\t\tv.intr. pf.
22800\tosirotiti\t\tv.tr. pf.
29618\tosivěti\t\tv.intr. pf.
29621\toskopiti\t\tv.tr. pf.
29623\toskubati\t\tv.tr. pf.
34592\toskubyvati\t\tv.tr. ipf.
34608\toskųdno\t\tadv.
34611\toskųdnosť\t\tf.
34602\toskųdny\t\tadj.
29627\toskvŕnitelj\t\tm.anim.
33472\toskvŕniti\t\tv.tr. pf.
33470\toskvŕnjati\t\tv.tr. ipf.
29626\toskvŕnjeńje\t\tn.
29629\toslaběti\t\tv.intr. pf.
4670\toslabiti\t\tv.tr. pf.
14815\toslabiti\t\tv.tr. pf.
4669\toslabjati\t\tv.tr. ipf.
14816\toslabjati\t\tv.tr. ipf.
10290\toslabjeńje\t\tn.
1052\toslabjeny\t\tadj.
10292\toslåditi\t\tv.tr. pf.
29635\toslę\t\tn.
29636\toslěpiti\t\tv.tr. pf.
29637\toslěpjati\t\tv.tr. ipf.
29638\toslěpjeńje\t\tn.
29639\toslěpnųti\t\tv.intr. pf.
29640\toslica\t\tf.
14817\tosloženiti\t\tv.tr. pf.
14818\tosloženjati\t\tv.tr. ipf.
18153\tosložnjeńje\t\tn.
314\tosm\t\tnum.card.
35345\tosmansky\t\tadj.
29646\tosmažiti\t\tv.tr. pf.
2970\tosmdesęt\t\tnum.card.
10283\tosmdesęty\t\tnum.ord.
29649\tosměliti sę\t\tv.refl. pf.
10991\tosměliti\t\tv.tr. pf.
34569\tosměljati sę\t\tv.refl. ipf.
16317\tosměljati\t\tv.tr. ipf.
29650\tosmerka\t\tnum.subst.
16435\tosmero\t\tnum.coll.
10296\tosmina\t\tnum.fract.
16462\tosmka\t\tnum.subst.
108\tosmnadsęť\t\tnum.card.
15424\tosmnadsętina\t\tnum.fract.
16465\tosmnadsęty\t\tnum.ord.
29653\tosmoliti\t\tv.tr. pf.
36136\tośmonog\t\tm.anim.
2838\tosmsȯt, osmsto\t\tnum.card.
2824\tosmy\t\tnum.ord.
10299\tosmysljeno\t\tadv.
10300\tosmysljenosť\t\tf.
10301\tosmysljeny\t\tadj.
29656\tosněžiti\t\tv.tr. pf.
2049\tosnova\t\tf.
29658\tosnova\t\tf.
29659\tosnova\t\tf.
29660\tosnovańje\t\tn.
18156\tosnovany na\t\tadj.
10304\tosnovatelj\t\tm.anim.
2938\tosnovateljny\t\tadj.
2115\tosnovati\t\tv.tr. pf.
29663\tosnovati\t\tv.tr. pf.
18158\tosnovno\t\tadv.
2831\tosnovny\t\tadj.
13\tosnovyvati\t\tv.tr. ipf.
2210\tosoba\t\tf.
5080\tosoblivo\t\tadv.
20008\tosoblivosť\t\tf.
5747\tosoblivy\t\tadj.
10320\tosobna pomsta\t\tf.
10312\tosobna potrěba\t\tf.
10314\tosobna vojna\t\tf.
10315\t#osobnik\t\tm.anim.
4293\tosobno\t\tadv.
10317\tosobnosť\t\tf.
29668\tosobny avtomobil\t\tm.
10319\tosobny kompjuter\t\tm.
16992\tosobny zaimennik\t\tm.
4292\tosobny\t\tadj.
29670\tosoliti\t\tv.tr. pf.
29612\tosȯt\t\tm.
18163\tosȯvrěmenniti\t\tv.tr. pf.
18159\tosȯvrěmennjati\t\tv.tr. ipf.
18161\tosȯvrěmennjeńje\t\tn.
21999\tospa\t\tf.
5910\tosparjati\t\tv.tr. ipf.
5939\tosporiti\t\tv.tr. pf.
32547\tosråmiti\t\tv.tr. pf.
32548\tosråmiti\t\tv.tr. pf.
29675\tosrědȯk\t\tm.
29686\tosť\t\tf.
16993\tostaly\t\tadj.
29676\tostanky\t\tm.pl.
29677\tostarěti\t\tv.intr. pf.
466\tostati\t\tv.intr. pf.
3297\tostatny\t\tadj.
1918\tostatȯk\t\tm.
2834\tostavati\t\tv.intr. ipf.
825\tostaviti\t\tv.tr. pf.
21739\tostaviti\t\tv.tr. pf.
505\tostavjati\t\tv.tr. ipf.
21738\tostavjati\t\tv.tr. ipf.
10330\tostavjeńje\t\tn.
3201\tostavjeny\t\tadj.
29683\tostavka\t\tf.
10342\tOstråžno!\t\tintj.
3480\tostråžno\t\tadv.
29688\tostråžnosť\t\tf.
3478\tostråžny\t\tadj.
29691\tostrěgati sę\t\tv.refl. ipf.
18167\tostrěgati\t\tv.tr. ipf.
18166\tostrěgti\t\tv.tr. pf.
23090\tostrěžeńje\t\tn.
31999\tostriga\t\tf.
29693\tostrigati\t\tv.tr. ipf.
5024\tostrigti\t\tv.tr. pf.
32892\tostriti\t\tv.tr. ipf.
29697\tostrižeńje\t\tn.
4499\tostŕje\t\tn.
10339\tostro\t\tadv.
29698\tostroga\t\tf.
18168\tostroumje\t\tn.
10341\tOstrov Man\t\tm.sg.
2044\tostrov\t\tm.
29700\tostrovjan, ostrovjanin\t\tm.anim.
29702\tostrugati\t\tv.tr. pf.
947\tostry\t\tadj.
29713\tostuditi\t\tv.tr. pf.
29715\tosųd\t\tm.sg.
2036\tosųditi\t\tv.tr. pf.
7\tosųđati\t\tv.tr. ipf.
32550\tosųđeńje\t\tn.
29718\tosušati\t\tv.tr. ipf.
29719\tosušiti\t\tv.tr. pf.
34655\tosvajati\t\tv.tr. ipf.
34657\tosvajati\t\tv.tr. ipf.
15709\tosvatiti sę\t\tv.refl. pf.
29721\tosvěćati\t\tv.tr. ipf.
32355\tosvęćati\t\tv.tr. ipf.
29722\tosvěćeńje\t\tn.
23888\tosvědamjati sę\t\tv.refl. ipf.
23887\tosvědomiti sę\t\tv.refl. pf.
29723\tosvętiti\t\tv.tr. pf.
29724\tosvětiti\t\tv.tr. pf.
10354\tosvětliti\t\tv.tr. pf.
10357\tosvětljati\t\tv.tr. ipf.
34650\tosvětljeńje\t\tn.
18169\tosvěžati\t\tv.tr. ipf.
18171\tosvěžiti\t\tv.tr. pf.
18175\tosvobađati sę\t\tv.refl. ipf.
450\tosvobađati\t\tv.tr. ipf.
18179\tosvoboditi sę od\t\tv.refl. pf.
18178\tosvoboditi sę\t\tv.refl. pf.
881\tosvoboditi\t\tv.tr. pf.
29729\tosvobođeńje\t\tn.
29730\tosvojiti\t\tv.tr. ipf.
34654\tosvojiti\t\tv.tr. ipf.
22000\tosypky\t\tm.pl.
16856\tošalěti\t\tv.intr. pf.
29732\toščeniti sę\t\tv.refl. pf.
10364\totcevska ljubȯv\t\tf.
6024\totcevsky\t\tadj.
29737\totčim\t\tm.anim.
4268\totčina\t\tf.
2048\totec\t\tm.anim.
2046\totečstvo\t\tn.
6137\totęgčati\t\tv.tr. ipf.
6138\totęgčati\t\tv.tr. ipf.
6140\totęgčiti\t\tv.tr. pf.
6141\totęgčiti\t\tv.tr. pf.
29743\toteliti sę\t\tv.refl. pf.
18181\totěniti\t\tv.tr. pf.
18180\totěnjati\t\tv.tr. ipf.
5967\totęžeńje\t\tn.
5968\totęženy\t\tadj.
6285\totišati\t\tv.tr. ipf.
6286\totišiti\t\tv.tr. pf.
22073\totok\t\tm.
2823\totrava\t\tf.
29752\totravitelj\t\tm.anim.
3779\totraviti\t\tv.tr. pf.
3777\totravjati\t\tv.tr. ipf.
29751\totravjeńje\t\tn.
29754\totravny\t\tadj.
34957\totręsati\t\tv.tr. ipf.
34958\totręsti\t\tv.tr. pf.
29758\totrězvěti\t\tv.intr. pf.
29759\totrězviti\t\tv.tr. pf.
34674\totrězvjati\t\tv.tr. ipf.
1066\totrųby\t\tf.pl.
6144\totrudniti\t\tv.tr. pf.
6143\totrudnjati\t\tv.tr. ipf.
10381\totrudnjeńje\t\tn.
34693\totųpělosť\t\tf.
34687\totųpěly\t\tadj.
29767\totųpěti\t\tv.intr. pf.
29768\totųpiti\t\tv.tr. pf.
34698\totųpjati\t\tv.tr. ipf.
2399\totvarjati\t\tv.tr. ipf.
3662\totvor\t\tm.
2037\totvoriti\t\tv.tr. pf.
10095\totvorjeny parašut\t\tm.
10094\totvorjeny tenisny čempionat\t\tm.
1056\totvorjeny\t\tadj.
29770\totvŕděti\t\tv.intr. pf.
10387\tov\t\tpron.dem.
10388\tovako\t\tadv.
19579\tovaky\t\tadj.
34986\tovaľny\t\tadj.
19563\tovamo\t\tadv.
628\tovca\t\tf.
32023\tovčaŕ\t\tm.anim.
20009\tovčarnja\t\tf.
32024\tovčaŕsky pes\t\tm.anim.
14821\tovde\t\tadv.
32942\tovdověly\t\tadj.
29773\tovdověti\t\tv.intr. pf.
29774\tovějati\t\tv.tr. pf.
28986\tovějivati\t\tv.tr. ipf.
29775\tOven\t\tm.anim.
29776\toven\t\tm.anim.
18183\tověnčati\t\tv.tr. ipf.
18184\tověnčiti\t\tv.tr. pf.
10391\tověriti\t\tv.tr. pf.
10392\tověrjati\t\tv.tr. ipf.
10390\tověrjeny\t\tadj.
912\toves\t\tm.sg.
20012\tovinųti\t\tv.tr. pf.
20010\tovivati\t\tv.tr. ipf.
22493\tovladnųti\t\tv.tr. pf.
22494\tovladnųti\t\tv.tr. pf.
22489\tovladyvati\t\tv.tr. ipf.
22491\tovladyvati\t\tv.tr. ipf.
2827\tovoć\t\tm.
19525\tovȯgda, ovȯgdy\t\tadv.
29783\tovȯlgnųti\t\tv.intr. pf.
19582\tovoliko\t\tadv.
19590\tovoliky\t\tadj.
29784\tovoščiti\t\tv.tr. pf.
890\tovplyvniti\t\tv.tr. pf.
2828\tovplyvnjati\t\tv.tr. ipf.
36051\tovråtnik\t\tf.
19547\tovųdy\t\tadv.
34715\tozdabjati\t\tv.tr. ipf.
29788\tozdoba\t\tf.
29789\tozdobiti\t\tv.tr. pf.
36544\tozdobny\t\tadj.
29790\tozdråvěti\t\tv.intr. pf.
10400\tozdråviti\t\tv.tr. pf.
10401\tozdravjati\t\tv.tr. ipf.
10402\t#ozdravjeńje\t\tn.
36819\tozdråvnica\t\tf.
29792\tozębti\t\tv.intr. pf.
29793\tozeleniti\t\tv.intr. pf.
29794\tozelenjati\t\tv.intr. ipf.
10405\tozemisko\t\tadv.
10404\tozemisky\t\tadj.
10403\tozemja\t\tf.
29795\tozimina\t\tf.
29796\tozimy\t\tadj.
36859\tozlobiti sę\t\tv.refl. pf.
29799\tozlobiti\t\tv.tr. pf.
29800\tozlobjeńje\t\tn.
1069\toznačati\t\tv.tr. ipf.
10414\toznačati\t\tv.tr. ipf.
22862\toznačati\t\tv.tr. ipf.
10413\toznačeńje\t\tn.
18192\toznačeny\t\tadj.
1070\toznačiti\t\tv.tr. pf.
18194\toznačiti\t\tv.tr. pf.
22863\toznačiti\t\tv.tr. pf.
22864\toznaka\t\tf.
29807\toznamenovati\t\tv.tr. pf.
34735\toznamenovati\t\tv.tr. pf.
34736\toznamenovyvati\t\tv.tr. ipf.
34737\toznamenovyvati\t\tv.tr. ipf.
22861\t#oznaniti\t\tv.tr. pf.
22860\toznanjati\t\tv.tr. ipf.
32847\tozon\t\tm.sg.
32849\tozonovy sloj\t\tm.sg.
29810\tozvěrěti\t\tv.intr. pf.
3400\toženiti sę\t\tv.refl. pf.
29812\toženiti\t\tv.tr. pf.
3401\toženjeny\t\tadj.
29815\tožiti\t\tv.intr. pf.
29816\toživati\t\tv.intr. ipf.
29818\toživiti\t\tv.tr. pf.
36452\toživjati\t\tv.tr. ipf.
14822\toživjeno\t\tadv.
14823\toživjeny\t\tadj.
29820\tožȯltěti\t\tv.intr. pf.
29821\tožrěbiti sę\t\tv.refl. pf.
10418\tpa\t\tconj.
18195\tpacient\t\tm.anim.
29824\t#pad\t\tm.
20970\tpadalina\t\tf.
1771\tpadati\t\tv.intr. ipf.
261\tpadež\t\tm.
20971\tpadųčnica\t\tf.
32134\tpajac\t\tm.anim.
3447\tpaket\t\tm.
1063\tPakistan\t\tm.sg.
22766\tpakistansky\t\tadj.
5471\tpakovati\t\tv.tr. ipf.
1058\tpala\t\tf.
2830\tpalac\t\tm.
31750\tpalačinka\t\tf.
1841\tpalatalizacija\t\tf.
23305\tpalatka\t\tf.
35434\tpalec\t\tm.
2825\tpalestinsky\t\tadj.
2829\tpaliti\t\tv.tr. ipf.
14826\tpaliti\t\tv.tr. ipf.
2826\tpalivo\t\tn.
944\tpaljto\t\tn.
29827\tpalka\t\tf.
16040\tpalma\t\tf.
36159\tpalmeta\t\tf.
1961\tpamęť\t\tf.
1960\tpamętati\t\tv.tr. ipf.
4117\tpamętnik\t\tm.
10438\tpamętny\t\tadj.
35182\tpamflet\t\tm.
350\tpan\t\tm.anim.
35932\tpanaceja\t\tf.
22464\tPanama\t\tf.sg.
22465\tpanamsky\t\tadj.
29832\tpancyŕ\t\tm.
4501\tpancyrovoz\t\tm.
23261\tpančoha\t\tf.
36272\tpanda\t\tf.
10444\tpanel orųdij\t\tm.
2359\tpani\t\tf.
20014\tpanika\t\tf.
18197\tpaniker\t\tm.anim.
35049\tpanorama\t\tf.
16996\tpanslavist\t\tm.anim.
16997\tpanslavističny\t\tadj.
16998\tpanslavizm\t\tm.sg.
23143\tpantofle\t\tm.pl.
1356\tpapa\t\tm.anim.
36067\tpapaja\t\tf.
506\tpapir\t\tm.
35315\tpapirny\t\tadj.
32614\tpapirus\t\tm.
29838\tpapka\t\tf.
1075\tpapråť\t\tf.
35460\tpaprika\t\tf.
6109\tPapua Nova Gvineja\t\tf.sg.
23144\tpapuče\t\tf.pl.
4570\tpapugaj\t\tm.anim.
18200\tpara prikladov\t\tf.
2257\tpara\t\tf.
4993\tpara\t\tf.
29842\tparada\t\tf.
16999\tparadigm\t\tm.
29843\tparadny kostjum\t\tm.
543\tparadoks\t\tm.
2377\tparadoksaľny\t\tadj.
35421\tparafija\t\tf.
15522\tparagraf\t\tm.
22442\tParagvaj\t\tm.sg.
22443\tparagvajsky\t\tadj.
23206\tparalela\t\tf.
23207\tparaleľny\t\tadj.
29848\tparaliza\t\tf.
16790\tparalizovati\t\tv.tr. ipf.
35933\tparametr\t\tm.
29849\tparapet\t\tm.
4066\tparašut\t\tm.
29851\tparašutist\t\tm.anim.
23773\tparavan\t\tm.
1820\tparazit\t\tm.anim.
29855\tparazitizm\t\tm.sg.
29856\tparazitny\t\tadj.
29857\tparazitovati\t\tv.intr. ipf.
23876\tparfum\t\tm.
36723\tparfumovati sę\t\tv.refl. ipf.
23877\tparfumovati\t\tv.tr. ipf.
29859\tpariti\t\tv.intr. ipf.
18201\tPariž\t\tm.sg.
4906\tparižsky\t\tadj.
32408\tpark\t\tm.
32410\tparkovati sę\t\tv.refl. ipf./pf.
32409\tparkovati\t\tv.tr. ipf./pf.
32411\tparkovišče\t\tn.
1185\tparlament\t\tm.
35061\tparlamentarny\t\tadj.
23635\tparna mašina\t\tf.
33231\tparno čislo\t\tn.
36702\tparny valec\t\tm.
29861\tparny\t\tadj.
29863\tparny\t\tadj.
35218\tparodija\t\tf.
35422\tparohija\t\tf.
10456\tparola\t\tf.
22413\tparovoz\t\tm.
32036\tparšivy\t\tadj.
17000\tparticip\t\tm.
2994\tpartija\t\tf.
23452\tpartitura\t\tf.
2911\tpartner\t\tm.anim.
36090\tpartnerka\t\tf.
5161\tpartnerstvo\t\tn.
18202\tpas\t\tm.
36621\tpasaž\t\tm.
36622\tpasaž\t\tm.
3005\tpasažer\t\tm.anim.
2906\tpasažersky\t\tadj.
36710\tpasians\t\tm.sg.
2400\tpasivny\t\tadj.
5264\tpasport\t\tm.
20972\tpasť\t\tf.
32945\tpasti sę\t\tv.refl. ipf.
5015\tpasti\t\tv.intr. pf.
5017\tpasti\t\tv.tr. ipf.
20975\tpastuh\t\tm.anim.
20978\t#pastva\t\tf.
20979\tpastvišče\t\tn.
20980\tpastyŕ\t\tm.anim.
20981\tpastyŕ\t\tm.anim.
36302\tpat\t\tm.
23769\tpatent\t\tm.
35680\tpatriarh\t\tm.anim.
35681\tpatriarhat\t\tm.
35461\tpatriot\t\tm.anim.
35462\tpatriotičny\t\tadj.
35463\tpatriotizm\t\tm.sg.
20015\tpatronizovati\t\tv.tr. ipf.
10465\tpauza\t\tf.
10466\tpauzovati\t\tv.intr. ipf.
33651\tpav\t\tm.anim.
23097\tpavian\t\tm.anim.
10467\tpavųčina\t\tf.
10469\tpavųčja niť\t\tf.
431\tpavųk\t\tm.anim.
35316\tpazigrafija\t\tf.
1697\tpazuha\t\tf.
2842\tpčela\t\tf.
29868\tpčelaŕ\t\tm.anim.
36029\tpčelaŕstvo\t\tn.sg.
29869\tpčeliny\t\tadj.
29871\tpčeľji\t\tadj.
29870\tpčeľnik\t\tm.
20983\tpeć\t\tm.
14829\tpečenj\t\tf.
278\tpečęť\t\tf.
23616\tpečętaŕ\t\tm.anim.
23609\tpečętaŕstvo\t\tn.sg.
2358\tpečętati\t\tv.tr. ipf.
18203\tpečivo\t\tn.
23604\tpedagog\t\tm.anim.
23605\tpedagogičny\t\tadj.
23603\tpedagogika\t\tf.
753\tpedofil\t\tm.anim.
1539\tpěga\t\tf.
2375\tpěgavy\t\tadj.
29872\tpěhota\t\tf.
20985\tpekaŕ\t\tm.anim.
20986\tpekarnja\t\tf.
29873\tpekľny\t\tadj.
29874\tpeklo\t\tn.
20989\tpekti sę\t\tv.refl. ipf.
2840\tpekti\t\tv.tr. ipf.
2277\tpelena\t\tf.
36235\tpelerina\t\tf.
16796\tpelikan\t\tm.anim.
2256\tpelun\t\tm.
32470\tpemza\t\tf.
869\tpěna\t\tf.
2187\tpendžabsky\t\tadj.
14589\tpěnęz\t\tm.
4417\tpěnęzy\t\tm.pl.
10488\tpěnęžny\t\tadj.
16046\tpenis\t\tm.
16047\tpenisovy\t\tadj.
1717\tpenj\t\tm.
36375\tpěnna kųpělj\t\tf.
4847\tpensija\t\tf.
16050\tpensijny fond\t\tm.
16049\tpensijny\t\tadj.
2833\tpensioner\t\tm.anim.
9340\tpenthaus\t\tm.
15397\tpenthausny\t\tadj.
2832\tpepel\t\tm.sg.
10490\tpepelavy\t\tadj.
34855\tpepelisty\t\tadj.
36745\tpepeľnik\t\tm.
3136\tpeprec\t\tm.
29879\tpercepcija\t\tf.
17001\tperfekt\t\tm.
36033\tperforator\t\tm.
32613\tpergament\t\tm.
32097\tperiferija\t\tf.
32098\tperiferijny\t\tadj.
16052\tperiod\t\tm.
35811\tperiodičny\t\tadj.
4787\tperkusija\t\tf.
23289\tperla\t\tf.
36177\tperlovo proso\t\tn.
2336\tpero\t\tn.
3994\tpero\t\tn.
10496\tperovy\t\tadj.
35900\tPersija\t\tf.sg.
35902\tpersijec\t\tm.anim.
35901\tpersijsky\t\tadj.
2343\tpersonal\t\tm.
17002\tpersonaľny zaimennik\t\tm.
29883\tpersonaľny\t\tadj.
23079\tpersonaž\t\tm.
36185\tpersonifikacija\t\tf.
4294\tperspektiva\t\tf.
10498\tPeru\t\tm.indecl.
10499\tPeruanec\t\tm.anim.
14830\tPeruansky\t\tadj.
10500\tPerun\t\tm.anim.
14831\tperun\t\tm.
4318\tperverzija\t\tf.
4320\tperverznik\t\tm.anim.
10503\tperverzno\t\tadv.
4319\tperverznosť\t\tf.
4317\tperverzny\t\tadj.
2345\tpes\t\tm.anim.
5750\tpěsennik\t\tm.anim.
6030\tpesimist\t\tm.anim.
6028\tpesimističny\t\tadj.
6029\tpesimizm\t\tm.sg.
2344\tpěsnja\t\tf.
18207\tpěsȯčna burja\t\tf.
29886\tpěsȯčny\t\tadj.
426\tpěsȯk\t\tm.
1962\tpęsť\t\tf.
36248\tpesticid\t\tm.
615\tpestry\t\tadj.
18208\tpěšak\t\tm.anim.
659\tpěše\t\tadv.
236\tpěšehod, pěšehodec\t\tm.anim.
1079\tpěši\t\tadj.
908\tpęť\t\tnum.card.
44\tpęta\t\tf.
2176\tpęťdesęt\t\tnum.card.
32329\tpęťdesętničsky\t\tadj.
23687\tpęťdesęty\t\tnum.ord.
16455\tpęteraky\t\tnum.diff.
16428\tpęterčęta\t\tn.pl.
34564\tpęterka\t\tnum.subst.
16443\tpęterny\t\tnum.mult.
16432\tpętero\t\tnum.coll.
35848\tpeticija\t\tf.
10535\tpętikųtnik\t\tm.
10533\tpętina\t\tnum.fract.
10534\tpętivųgȯľnik\t\tm.
16459\tpętka\t\tnum.subst.
2368\tpętnadsęť\t\tnum.card.
23683\tpętnadsęty\t\tnum.ord.
35541\tpętno\t\tn.
474\tpętȯk\t\tm.
2279\tpęťsȯt, pęťsto\t\tnum.card.
1876\tpęty\t\tnum.ord.
10537\tpěvańje\t\tn.sg.
1469\tpěvatelj\t\tm.anim.
237\tpěvati\t\tv.tr. ipf.
32924\tphati sę do/za\t\tv.refl. ipf.
32905\tphati\t\tv.tr. ipf.
32907\tphnųti\t\tv.tr. pf.
32491\tpianist\t\tm.anim.
32492\tpianistka\t\tf.
5825\tpica\t\tf.
20016\tpidžin\t\tm.
36367\tpiedestal\t\tm.
34969\tpigment\t\tm.
23278\tpijanica\t\tm./f.
35728\tpijanstvo\t\tn.sg.
14834\tpijany\t\tadj.
388\tpijavica\t\tf.
10591\tpijemy\t\tadj.
35588\tpikantny\t\tadj.
15437\tpikirovańje\t\tn.
10547\tpikirovati\t\tv.intr. ipf.
15436\tpikirovka\t\tf.
15439\tpikirovnica\t\tf.
10549\tpikirovnik\t\tm.anim.
23423\tpiknik\t\tm.
32223\tpiky\t\tf.pl.
2222\tpila\t\tf.
34282\tpilina\t\tf.
34281\tpiliti\t\tv.tr. ipf.
16305\tpilot\t\tm.anim.
33408\tpilulka\t\tf.
20990\tpinati\t\tv.tr. ipf.
32769\tping-pong\t\tm.sg.
20586\tpingvin\t\tm.anim.
6287\tpion\t\tm.
3262\tpioner\t\tm.anim.
10554\tpir\t\tm.
10555\tpiramida\t\tf.
10556\tpiramidovy\t\tadj.
1959\tpirat\t\tm.anim.
32456\tpiratstvo\t\tn.sg.
10558\tpiroman\t\tm.anim.
10560\tpiromaničny\t\tadj.
10559\tpiromanija\t\tf.
10563\tpirotehničny sklad\t\tm.
10562\tpirotehničny\t\tadj.
10564\tpirotehnik\t\tm.anim.
10561\tpirotehnika\t\tf.
10565\tpirovati\t\tv.intr. ipf.
20992\tpisaľny stol\t\tm.
10568\tpisańje\t\tn.
3939\tpisatelj\t\tm.anim.
15680\tpisati nanovo\t\tv.ipf.
141\tpisati\t\tv.tr. ipf.
5984\tpisemny\t\tadj.
1147\tpiskati\t\tv.intr. ipf.
20993\tpiśmę\t\tn.
2988\tpiśmennosť\t\tf.
23119\tpiśmennosť\t\tf.
3002\tpiśmo\t\tn.
20995\tpiśmo\t\tn.
5981\tpistacija\t\tf.
2087\tpistolet\t\tm.
10580\tpistoľnik\t\tm.anim.
14838\tpišati\t\tv.intr. ipf.
5684\tpiščeti\t\tv.intr. ipf.
18209\tpišęća mašina\t\tf.
18210\tpišęći stroj\t\tm.
1973\tpiti\t\tv.tr. ipf.
10590\tpitna voda\t\tf.
4181\tpitny\t\tadj.
35494\tpivnica\t\tf.
35495\tpivnica\t\tf.
2067\tpivo\t\tn.
35730\tpivovar\t\tm.anim.
35729\tpivovarnja\t\tf.
35731\tpivovarsky\t\tadj.
29902\tpizda\t\tf.
10598\tpižama\t\tf.
3210\tplač\t\tm.sg.
10601\tplačlivy\t\tadj.
35219\tplagiat\t\tm.
2261\tplakat\t\tm.
2177\tplakati\t\tv.intr. ipf.
380\tplåmenj\t\tm.
2872\tplan\t\tm.
581\tplaneta\t\tf.
36624\tplankton\t\tm.
650\tplanovati\t\tv.tr. ipf.
29904\tplanšet\t\tm.
2373\tplast\t\tm.
36925\tplastelin\t\tm.
18211\tplastičny\t\tadj.
18212\tplastik\t\tm.sg.
18213\tplastikovy\t\tadj.
2378\tplašč\t\tm.
4276\tplata\t\tf.
10615\tplaťba\t\tf.
10617\tplaťbovy\t\tadj.
10616\tplaťby\t\tf.pl.
3800\tplatform\t\tm.
22632\tplatina\t\tf.sg.
10619\tplatitelj\t\tm.anim.
2114\tplatiti\t\tv.tr. ipf.
94\tplåtno\t\tn.
10625\tplavańje\t\tn.
20997\tplavati\t\tv.intr. ipf.
20999\tplavny\t\tadj.
21001\tplåvy\t\tadj.
5196\tplaž\t\tf.
36910\tplebiscit\t\tm.
16344\tplemę\t\tn.
14841\tplemenec\t\tm.anim.
14842\tplemenica\t\tf.
23403\tplen\t\tm.
23405\tpleniti\t\tv.tr. ipf.
18223\tpleskańje\t\tn.sg.
18224\tpleskati\t\tv.tr. ipf.
18225\tplesknųti\t\tv.tr. pf.
2068\tplěsnj\t\tf.
5019\tplesti\t\tv.tr. ipf.
32092\tpletenka\t\tf.
31722\tplěti\t\tv.tr. ipf.
36060\tplěva\t\tf.
36061\tplěvnja\t\tf.
35543\tpljama\t\tf.
1348\tpljuća\t\tf.
3275\tpljunųti\t\tv.intr. pf.
36852\tpljuskati\t\tv.intr. ipf.
36853\tpljusknųti\t\tv.intr. pf.
32509\tpljuš\t\tm.sg.
32510\tpljuševy\t\tadj.
1105\tpljuvati\t\tv.intr. ipf.
1346\tplod\t\tm.
1377\tplod\t\tm.
23024\tploditi\t\tv.tr. ipf.
23025\tploditi\t\tv.tr. ipf.
36121\tplodnosť\t\tf.
2402\tplodny\t\tadj.
5224\tplosky\t\tadj.
1372\tplošča\t\tf.
1963\tplȯť\t\tf.
5223\tplot\t\tm.
34867\tplȯť\t\tf.
1972\tplug\t\tm.
16970\tplus\t\tm.
17003\tpluskvamperfekt\t\tm.
34913\tpluti\t\tv.intr. ipf.
22638\tplutonij\t\tm.sg.
10626\tplyvti\t\tv.intr. ipf.
18226\tpnevmonija\t\tf.
21009\tpnųti\t\tv.tr. pf.
36703\tpo mojemu mněńju\t\tadv.
10648\tpo mojemu skromnomu mněńju\t\tadv.
18227\tpo odnošeńju k\t\tprep.
35696\tpo pričině\t\tprep.
36147\tpo slučaju\t\tprep.
36233\tpo strělkě časovnika\t\tadv.
36271\tpo svaťbě povęzany\t\tadj.
2215\tpo\t\tprep.
4941\tpo\t\tprep.
4942\tpo\t\tprep.
4943\tpo\t\tprep.
10642\tpo\t\tprep.
10644\tpo\t\tprep.
10645\tpo\t\tprep.
10647\tpo\t\tprep.
10655\tpoběda\t\tf.
34982\tpoběditelj\t\tm.anim.
18232\tpoběditi\t\tv.intr. pf.
18229\tpoběđati\t\tv.intr. ipf.
35862\tpoběgti\t\tv.intr. pf.
4050\tpobiti\t\tv.intr. pf.
10652\tpobiťje\t\tn.
10653\tpobity\t\tadj.
35143\tpoblågodariti\t\tv.tr. pf.
36892\tpoblågoželati\t\tv.intr. pf.
20018\tpoblåžlivosť\t\tf.
20019\tpoblåžlivy\t\tadj.
10656\tpoblizu\t\tadv.
103\tpobrěžny\t\tadj.
2159\tpobuditi\t\tv.tr. pf.
580\tpobuđati\t\tv.tr. ipf.
18233\tpobuđeńje\t\tn.
4549\tpobyťje\t\tn.
112\tpocělovati\t\tv.intr. pf.
1129\tpocělunȯk\t\tm.
10668\tpocěluvka\t\tf.
1085\tpočekati\t\tv.intr. ipf.
22788\tpočęti sę\t\tv.tr. pf.
1078\tpočęti\t\tv.tr. pf.
10672\tpočęťje\t\tn.
10669\tpočętkovo\t\tadv.
10670\tpočętkovy\t\tadj.
20021\tpočętkujųći\t\tadj.
35335\tpočętkujųći\t\tm.anim.
1077\tpočętȯk\t\tm.
18234\tpočin\t\tm.
10675\tpočinati sę\t\tv.refl. ipf.
2835\tpočinati\t\tv.tr. ipf.
23889\tpočrveněti\t\tv.intr. pf.
29916\tpočuťje\t\tn.
3134\tpočva\t\tf.
10678\tpod nakazom\t\tprep.
10679\tpod voditeljstvom\t\tprep.
10681\tpod vodstvom\t\tprep.
737\tpod\t\tprep.
4933\tpod\t\tprep.
35393\tpodańje\t\tn.
18235\tpodanȯk\t\tm.
4323\tpodariti\t\tv.tr. pf.
5580\tpodarȯk\t\tm.
5160\tpodati\t\tv.tr. pf.
18238\tpodavatelj\t\tm.anim.
18243\tpodavati parų prikladov\t\tv.ipf.
5159\tpodavati\t\tv.tr. ipf.
35887\tpodbirati\t\tv.tr. ipf.
1448\tpodbrådȯk\t\tm.
35888\tpodbrati\t\tv.tr. pf.
1626\tpodčas\t\tprep.
2053\tpodčrkati\t\tv.tr. ipf.
2837\tpodčrknųti\t\tv.tr. pf.
4085\tpoddańje\t\tn.
18244\tpoddany\t\tm.anim.
4084\tpoddati sę\t\tv.refl. pf.
36428\tpoddati\t\tv.tr. pf.
10693\tpoddavajemosť\t\tf.
10694\tpoddavajemy\t\tadj.
4083\tpoddavati sę\t\tv.refl. ipf.
10697\tpoddavati\t\tv.tr. ipf.
856\tpoddŕžati\t\tv.tr. pf.
10699\tpoddŕživańje\t\tn.
1951\tpoddŕživati\t\tv.tr. ipf.
36400\tpoddŕžka\t\tf.
5575\tpodękovati\t\tv.intr. pf.
1952\tpoděl\t\tm.
36011\tpoděliti sę\t\tv.refl. pf.
2241\tpoděliti\t\tv.tr. pf.
18249\tpoděti sę\t\tv.refl. pf.
18251\tpoděvati sę\t\tv.refl. ipf.
18253\tpodglåvnica\t\tf.
16306\tpodględ\t\tm.
5385\tpodględati\t\tv.intr. ipf.
5387\tpodględěti\t\tv.intr. pf.
36558\tpodgoŕje\t\tn.
18254\tpodgovarjati\t\tv.tr. ipf.
18255\tpodgovoriti\t\tv.tr. pf.
23892\tpodgrěti\t\tv.tr. pf.
23893\tpodgrěvati\t\tv.tr. ipf.
20022\tpodgrupa\t\tf.
18256\tpodhod\t\tm.
18259\tpodhoditi (k)\t\tv.intr. ipf.
18257\tpodhoditi\t\tv.intr. ipf.
5176\tpodimati\t\tv.tr. ipf.
23241\tpodium\t\tm.
5177\tpodjęti\t\tv.tr. pf.
20595\tpodkategorija\t\tf.
35535\tpodkazka\t\tf.
11099\tpodklad\t\tm.
32682\tpodkladati\t\tv.tr. ipf.
36904\tpodključati sę\t\tv.refl. ipf.
36898\tpodključati\t\tv.tr. ipf.
36901\tpodključiti sę\t\tv.refl. pf.
36895\tpodključiti\t\tv.tr. pf.
453\tpodkopati\t\tv.tr. pf.
2199\tpodkopyvati\t\tv.tr. ipf.
36826\tpodkova\t\tf.
32095\tpodkovati\t\tv.tr. pf.
26778\tpodkovyvati\t\tv.tr. ipf.
20024\tpodkrěpiti\t\tv.tr. pf.
20025\tpodkrěpjati\t\tv.tr. ipf.
36595\tpodkryvje\t\tn.
5791\tpodkup\t\tm.
10724\tpodkupiti\t\tv.tr. pf.
10723\tpodkupovati\t\tv.tr. ipf.
10725\tpodkupstvo\t\tn.sg.
32683\tpodlagati\t\tv.tr. ipf.
18260\tpodle\t\tprep.
15446\tpodlec\t\tm.anim.
20596\tpodležati\t\tv.intr. ipf.
4493\tpodliti\t\tv.tr. pf.
4492\tpodlivati\t\tv.tr. ipf.
20598\tpodlivka\t\tf.
1115\tpodloga\t\tf.
20600\tpodloga\t\tf.
32684\tpodložiti\t\tv.tr. pf.
36245\tpodložka dlja myši\t\tf.
36244\tpodložka\t\tf.
18262\tpodly\t\tadj.
20603\tpodměniti\t\tv.tr. pf.
20602\tpodměnjati\t\tv.tr. ipf.
20027\tpodmet\t\tm.
36456\tpodmnožstvo\t\tn.
34631\tpodmoŕsky\t\tadj.
33718\tpodnapisy\t\tm.pl.
18264\tpodnebje\t\tn.
33560\tpodnebje\t\tn.
18265\tpodnebne izměny\t\tf.pl.
18266\tpodnebny\t\tadj.
20604\tpodnos\t\tm.
18267\tpodnožišče\t\tn.
10729\tpodnurjati\t\tv.tr. ipf.
14850\tpodoba\t\tf.
14851\tpodoba\t\tf.
18268\tpodobati sę\t\tv.refl. ipf.
2404\tpodobno\t\tadv.
3866\tpodobnosť\t\tf.
1718\tpodobny\t\tadj.
33514\tpododděl\t\tm.
34766\tpodȯjdti (k)\t\tv.intr. pf.
36534\tpodȯjdti\t\tv.intr. pf.
34920\tpodokȯnnik\t\tm.
10739\tpodȯlg\t\tprep.
36169\tpodȯšva\t\tf.
16475\tpodpaliti\t\tv.tr. pf.
15453\tpodpaljač\t\tm.anim.
16474\tpodpaljati\t\tv.tr. ipf.
10743\tpodpaljeńje\t\tn.
35657\tpodpazuha\t\tf.
10761\tpodpirany od\t\tadj.
1114\tpodpirati\t\tv.tr. ipf.
36303\tpodpis\t\tm.
3086\tpodpisati\t\tv.tr. pf.
10750\tpodpiska\t\tf.
10751\tpodpisnik\t\tm.anim.
1117\tpodpisyvati\t\tv.tr. ipf.
2296\tpodpor\t\tm.
10758\tpodporiti\t\tv.tr. pf.
21010\tpodporka\t\tf.
10759\tpodpornik\t\tm.anim.
10760\tpodporny\t\tadj.
18271\tpodråstka\t\tf.
18272\tpodråstȯk\t\tm.anim.
36445\tpodråzděl\t\tm.
33516\tpodråzděliti\t\tv.tr. pf.
33517\tpodråzděljati\t\tv.tr. ipf.
33518\tpodråzděljeńje\t\tn.
22358\tpodręditi\t\tv.tr. pf.
22360\tpodrędny\t\tadj.
22359\tpodręđati\t\tv.tr. ipf.
21426\tpodrobnosť\t\tf.
35083\tpodrobny\t\tadj.
1116\tpodrųčnik\t\tm.
10763\tpodrųčny\t\tadj.
10764\tpodružiti sę\t\tv.refl. pf.
6288\tpodsekretaŕ\t\tm.anim.
10769\tpodslušati\t\tv.tr. pf.
10767\tpodslušivańje\t\tn.
10768\tpodslušivatelj\t\tm.anim.
22778\tpodslušivati\t\tv.tr. ipf.
5389\tpodsměhati sę\t\tv.refl. ipf.
5390\tpodsměhnųti sę\t\tv.refl. pf.
21752\tpodstava\t\tf.
36145\tpodstavka na mylo\t\tf.
10772\tpodstrěkańje\t\tn.
10774\tpodstrěkatelj\t\tm.anim.
5612\tpodstrěkati\t\tv.tr. ipf.
4494\tpodstrěknųti\t\tv.tr. ipf.
21959\tpodstųpati k\t\tv.intr. ipf.
21960\tpodstųpiti k\t\tv.intr. pf.
18273\tpodsvědomje\t\tn.
10779\tpodsvědomo\t\tadv.
6220\tpodsvědomosť\t\tf.
6221\tpodsvědomy\t\tadj.
35438\tpodtaliŕka\t\tf.
34623\tpodtekst\t\tm.
36446\tpodtip\t\tm.
10783\tpodtiskańje\t\tn.
10782\tpodtiskati\t\tv.tr. ipf.
20029\tpodtisknųti\t\tv.tr. pf.
34627\t#podton\t\tm.
14860\tpodtrimati\t\tv.tr. pf.
14861\tpodtrimyvańje\t\tn.
14862\tpodtrimyvati\t\tv.tr. ipf.
5267\tpoduška\t\tf.
17085\tpodvajati\t\tv.tr. ipf.
35496\tpodval\t\tm.
6014\tpodvažati\t\tv.tr. ipf.
6016\tpodvažiti\t\tv.tr. pf.
22195\tpodvęzka\t\tf.
18274\tpodvig\t\tm.
10788\tpodvisiti\t\tv.tr. pf.
3142\tpodvodna loď\t\tf.
10727\tpodvodnica\t\tf.
34629\tpodvodno těčeńje\t\tn.
23272\tpodvodny\t\tadj.
17005\tpodvojiti\t\tv.tr. ipf.
35564\tpodvŕgańje\t\tn.
22584\tpodvŕgati\t\tv.tr. ipf.
22585\tpodvŕgnųti\t\tv.tr. pf.
16310\tpodzemje\t\tn.
23573\tpodzemna voda\t\tf.
36655\tpodzemny svět\t\tm.sg.
16308\tpodzemny\t\tadj.
10741\tpodzirati\t\tv.tr. ipf.
10742\tpodzirlivy\t\tadj.
10740\t#podzrěny\t\tadj.
1770\tpodzrěti\t\tv.tr. pf.
2093\tpodzrěvati\t\tv.tr. ipf.
921\tpoema\t\tf.
16311\tpoet\t\tm.anim.
23714\tpoetičny\t\tadj.
20030\tpoezija\t\tf.
36041\tpogaršati\t\tv.tr. ipf.
34386\tpogladiti\t\tv.tr. pf.
34387\tpogladiti\t\tv.tr. pf.
18276\tpoglåvȯk\t\tm.
2405\tpoględ\t\tm.
3357\tpoględ\t\tm.
10796\tpoględańje vitrin\t\tn.
10798\tpoględatelj vitrin\t\tm.anim.
10797\tpoględatelj\t\tm.anim.
5819\tpoględati\t\tv.ipf.
31879\tpoglųbiti\t\tv.tr. pf.
25654\tpoglųbjati\t\tv.tr. ipf.
3868\tpogoda\t\tf.
18277\tpogȯltnųti sȯlzy\t\tv.pf.
10800\tpogȯltnųti\t\tv.tr. pf.
18278\tpogon\t\tm.
18279\tpogon\t\tm.
10801\tpogorno\t\tadv.
36042\tpogoršiti\t\tv.tr. pf.
36572\tpogovoriti\t\tv.intr. pf.
36368\tpograničje\t\tn.
36444\tpograničny\t\tadj.
5664\tpogrdlivy\t\tadj.
35565\tpogreb\t\tm.
36498\tpogrebati\t\tv.tr. ipf.
36499\tpogrebti\t\tv.tr. pf.
18282\tpogrěšiti\t\tv.intr. pf.
491\tpogrěška\t\tf.
21428\tpogrųziti\t\tv.tr. pf.
21427\tpogrųžati\t\tv.tr. ipf.
4308\tpogynati\t\tv.intr. ipf.
4309\tpogynųti\t\tv.intr. pf.
18284\tpohmeľje\t\tn.
3661\tpohod\t\tm.
18285\tpohod\t\tm.
23894\tpohodka\t\tf.
18286\tpohođeńje\t\tn.
32335\tpohođeńje\t\tn.
36318\tpohota\t\tf.
23102\tpohristijaniti\t\tv.tr. pf.
23101\tpohristijanjati\t\tv.tr. ipf.
29921\tpohva\t\tf.
10813\tpohvala\t\tf.
522\tpohvaliti\t\tv.tr. pf.
26040\tpohvaľny\t\tadj.
10814\tpohvaly\t\tf.pl.
6153\tpohybka\t\tf.
10806\tpohyćańje\t\tn.
4351\tpohyćati\t\tv.tr. ipf.
10808\tpohyćenec\t\tm.anim.
4350\tpohyćeńje\t\tn.
10809\tpohyćeny\t\tadj.
4352\tpohytitelj\t\tm.anim.
4349\tpohytiti\t\tv.tr. pf.
18289\tpoiskati\t\tv.tr. pf.
20031\tpoiskyvati\t\tv.tr. ipf.
29922\tpojas\t\tm.
10817\tpojaviti sę\t\tv.refl. pf.
16312\tpojavjati sę\t\tv.refl. ipf.
10818\tpojavjeńje\t\tn.
4027\tpojdti\t\tv.intr. pf.
20034\tpojedinȯk\t\tm.
3274\tpojehati\t\tv.intr. pf.
18291\tpojęti\t\tv.tr. pf.
5005\tpojęťje\t\tn.
1917\tpojezd\t\tm.
32703\tpojiti\t\tv.tr. ipf.
17006\tpojmańje\t\tn.
18292\tpojmati\t\tv.tr. ipf.
10828\tpoka\t\tconj.
31968\tpokajańje\t\tn.
31970\tpokajati sę\t\tv.refl. pf.
1916\tpokarati\t\tv.tr. pf.
35409\tpokarati\t\tv.tr. pf.
20035\tpokarjati\t\tv.tr. ipf.
1915\tpokazati\t\tv.tr. pf.
20037\tpokazny\t\tadj.
1108\tpokazyvati\t\tv.tr. ipf.
32062\tpoker\t\tm.sg.
10829\tpokladati\t\tv.tr. ipf.
32591\tpoklicati\t\tv.intr. ipf.
32592\tpoklik\t\tm.
36105\tpoklon\t\tm.
36591\tpokloniti sę\t\tv.refl. pf.
18294\tpokoj\t\tm.sg.
35386\tpokojnik\t\tm.
35385\tpokojny\t\tadj.
23115\tpokoliko\t\tconj.
2431\tpokoljeńje\t\tn.
14847\tpokoriti\t\tv.tr. pf.
20040\tpokoriti\t\tv.tr. pf.
14846\tpokorjeny\t\tadj.
5028\tpokornosť\t\tf.
5026\tpokorny\t\tadj.
18296\tpokositi\t\tv.tr. pf.
23895\tpokrčati ramenami\t\tv.ipf.
21429\tpokrčiti ramenami\t\tv.pf.
18297\tpokrestiti\t\tv.tr. pf.
10838\tpokromě\t\tadv.
14867\tpokrȯvnik\t\tm.anim.
6158\tpokrȯvnosť\t\tf.
6154\tpokrȯvny\t\tadj.
1769\tpokryti\t\tv.tr. pf.
18298\tpokryťje\t\tn.
523\tpokryv\t\tm.
4506\tpokryva\t\tf.
29926\tpokryvalo\t\tn.
158\tpokryvati\t\tv.tr. ipf.
32114\tpokupka\t\tf.
18299\tpokus\t\tm.
23896\tpokusiti\t\tv.tr. pf.
23897\tpokusiti\t\tv.tr. pf.
347\tpokušati\t\tv.tr. ipf.
23898\tpokušati\t\tv.tr. ipf.
20043\tpokušeńje na něčije žiťje\t\tn.
1172\tpokušeńje\t\tn.
23309\tpokušeńje\t\tn.
3218\tpol-, polu-\t\tprefix
1351\tpol\t\tm.
32331\tpol\t\tm.
21012\tpola\t\tf.
2843\tpolabsky\t\tadj.
36851\tpolakovati\t\tv.tr. pf.
23606\tpolarizacija\t\tf.
10847\tpolarno sijańje\t\tn.sg.
1514\tpolarny\t\tadj.
10850\tpoldenj\t\tm.
36327\tpolder\t\tm.
21014\tpoldnik\t\tm.
36203\tpolěno\t\tn.
10851\tpolet\t\tm.
2921\tpoletěti\t\tv.intr. pf.
1352\tpolěv\t\tprep.
5284\tpolica\t\tf.
2836\tpolicija\t\tf.
2206\tpolicijnik\t\tm.anim.
10855\tpolicijny\t\tadj.
10857\tpolirati\t\tv.tr. ipf.
18300\tpolitbjuro\t\tn.
23607\tpoliteizm\t\tm.sg.
23772\tpoliti\t\tv.tr. pf.
373\tpolitičny\t\tadj.
853\tpolitik\t\tm.anim.
1950\tpolitika\t\tf.
23636\tpolitologija\t\tf.sg.
23771\tpolivati\t\tv.tr. ipf.
20605\tpolivka\t\tf.
1869\tPoljak\t\tm.anim.
3671\tpoljana\t\tf.
3670\tpoljanka\t\tf.
3614\tpolje\t\tn.
28406\tpoljny klen\t\tm.
36139\tpoljny konik\t\tm.
16918\tpoljny\t\tadj.
2844\tPoljska\t\tf.sg.
2935\tpoljsky\t\tadj.
10889\tpoljzovati\t\tv.tr. ipf.
14872\tpȯlk\t\tm.
1207\tpȯlkovnik\t\tm.anim.
1082\tpȯlniti\t\tv.tr. ipf.
3799\tpȯlno\t\tadv.
5257\tpolnoć\t\tf.
10867\tpȯlnolětnosť\t\tf.
21003\tpȯlnolětny\t\tadj.
18301\tpȯlnoluńje\t\tn.
10868\tpȯlnomoćje\t\tn.
18302\tpȯlnomoćnik\t\tm.anim.
36883\tpȯlny naděje\t\tadj.
3141\tpȯlny\t\tadj.
17007\tpolovica\t\tf.
35127\tpolovičny\t\tadj.
3232\tpolovina\t\tf.
21015\tpolovnik\t\tm.anim.
3501\tpoložeńje\t\tn.
10875\tpoloženy\t\tadj.
1284\tpoložiti\t\tv.tr. pf.
4699\tpolučati\t\tv.tr. ipf.
4700\tpolučiti\t\tv.tr. pf.
5259\tpoludńje\t\tn.
3260\tpoluostrov\t\tm.
10888\tpoluostrovny\t\tadj.
20044\tpolus\t\tm.
35842\tpolusamoglåska\t\tf.
35361\tpoluvojenny\t\tadj.
18304\tpȯlzati\t\tv.intr. ipf.
36045\tpȯlzavica\t\tf.
18306\tpȯlzti\t\tv.intr. ipf.
36044\tpȯlzųća råstlina\t\tf.
18303\tpȯlž\t\tm.anim.
2205\tpomagati\t\tv.intr. ipf.
14873\tpomalo\t\tadv.
14874\tpomaly\t\tadj.
4344\tpomaranča\t\tf.
10893\tpomarančevy\t\tadj.
32232\tpomazati\t\tv.tr. pf.
36069\tpomelo\t\tn.
20611\tpoměstiti\t\tv.tr. pf.
23249\tpoměšany\t\tadj.
20609\tpoměšćati\t\tv.tr. ipf.
36780\tpoměščeńje\t\tn.
36476\tpomfritky\t\tf.pl.
1283\tpomidor\t\tm.
23857\tpomilovańje\t\tn.
23855\tpomilovati\t\tv.tr. pf.
1745\tpomimo\t\tprep.
20655\tpomiriti\t\tv.tr. pf.
36037\tpomirjeńje\t\tn.sg.
570\tpomněti\t\tv.tr. ipf.
29940\tpomnik\t\tm.
3945\tpomoć\t\tf.
5831\tpomoćnik\t\tm.anim.
5834\tpomoćnosť\t\tf.
100\tpomoćny\t\tadj.
2229\tpomogti\t\tv.intr. pf.
585\tpomoŕsky\t\tadj.
6089\tpompa\t\tf.
34502\tpomrdati\t\t#v.intr. pf.
14875\tpomsta\t\tf.
29461\tpomyliti sę\t\tv.refl. pf.
29460\tpomyliti\t\tv.tr. pf.
34475\tpomyljeny\t\tadj.
29458\tpomylka\t\tf.
20045\tpomysl\t\tm.
35854\tpomysliti\t\tv.tr. pf.
10904\tponad\t\tprep.
18309\tpončik\t\tm.
709\tponedělȯk\t\tm.
33343\tponěkde\t\tadv.
33335\tponěkȯgda, poněkȯgdy\t\tadv.
35113\tponěkoj\t\tpron.indef.
35112\tponěktory\t\tpron.indef.
10909\tponeže\t\tconj.
23271\tponi\t\tm.anim.
34860\tponiziti\t\tv.tr. pf.
3144\tponiž, poniže\t\tprep.
34861\tponižajųći\t\tadj.
34858\tponižati\t\tv.tr. ipf.
34859\tponižeńje\t\tn.
14876\tponje\t\tadv.
5961\tponovno\t\tadv.
5963\tponovny\t\tadj.
23265\tponožka\t\tf.
36268\tpopaljenina\t\tf.
1133\tpopel\t\tm.sg.
10912\tpopelavy\t\tadj.
34854\tpopelisty\t\tadj.
36746\tpopeľnica\t\tf.
5560\tpopiti\t\tv.tr. pf.
4243\tpopivati\t\tv.tr. ipf.
14877\tpoplava\t\tf.
10916\tpoplaviti\t\tv.tr. pf.
16315\tpoplavjati\t\tv.tr. ipf.
34910\tpopluti\t\tv.intr. pf.
10917\tpoplyvti\t\tv.intr. pf.
23627\tpop-muzika\t\tf.
10918\tpopoldenj\t\tm.
10919\tpopoldenno spańje\t\tn.
10920\tpopoldenny\t\tadj.
10921\tpopȯlno\t\tadv.
10922\tpopȯlnosť\t\tf.
10923\tpopȯlny\t\tadj.
281\tpopoludńje\t\tn.
18311\tpopȯlzati\t\tv.intr. ipf.
18313\tpopȯlzti\t\tv.intr. pf.
1136\tpoprav\t\tprep.
21430\tpoprava\t\tf.
4528\tpopraviti\t\tv.tr. pf.
4527\tpopravjati\t\tv.tr. ipf.
4529\tpopravjeńje\t\tn.
10931\tpopravka\t\tf.
4531\tpopravnosť\t\tf.
4530\tpopravny\t\tadj.
21018\tpoprěčnik\t\tm.
21019\tpoprěčny\t\tadj.
20046\tpoprědnji, poprědny\t\tadj.
228\tpoprěk\t\tprep.
21021\tpoprěk\t\tadv.
3428\tpoprěměnno\t\tadv.
23311\tpoprobovati\t\tv.tr. pf.
23901\tpoprositi\t\tv.tr. pf.
4123\tpopŕśje\t\tn.
21023\tpoprųga\t\tf.
29944\tpopularnosť\t\tf.
662\tpopularny\t\tadj.
35342\tpopulizm\t\tm.sg.
23060\tpopustiti\t\tv.tr. pf.
23059\tpopušćati\t\tv.tr. ipf.
23421\tpopytka i dostavka\t\tphrase
10937\tpora spati\t\tphrase
23353\tporåbiti\t\tv.tr. pf.
23352\tporåbovati\t\tv.tr. ipf.
14878\tporaditi\t\tv.tr. pf.
23029\tporađati\t\tv.tr. ipf.
23031\tporađati\t\tv.tr. ipf.
1135\tporaniti\t\tv.tr. pf.
18317\tporanjeńje\t\tn.
23903\tporåsti\t\tv.intr. pf.
18319\tporåvniti\t\tv.tr. pf.
3143\tporaziti\t\tv.tr. pf.
21431\tporaziti\t\tv.tr. pf.
20612\tporåzuměti sę\t\tv.refl. pf.
20613\tporåzuměvati sę\t\tv.refl. ipf.
5539\tporažati\t\tv.tr. ipf.
21433\tporažka\t\tf.
3783\tporcija\t\tf.
5198\tporęd\t\tprep.
3145\tporędȯk\t\tm.
2360\tporno\t\tn.sg.
32060\tpornografičny\t\tadj.
32059\tpornografija\t\tf.
10946\tporod\t\tm.
23028\tporoditi\t\tv.tr. pf.
36627\tporoditi\t\tv.tr. pf.
36628\tporoditi\t\tv.tr. pf.
21434\tporok\t\tm.
14879\tporota\t\tf.
15472\tporotnica\t\tf.
15474\tporotnik\t\tm.anim.
14880\tporotny\t\tadj.
21777\tport\t\tm.
17008\tportal\t\tm.
23251\tporter\t\tm.
23253\tportier\t\tm.anim.
34757\tportmone\t\tn.indecl.
4793\tportret\t\tm.
16424\tPortugalec\t\tm.anim.
979\tPortugalija\t\tf.sg.
16425\tPortugalka\t\tf.
1353\tportugaľsky\t\tadj.
18321\tporųbati\t\tv.tr. pf.
10961\tporųčati sę\t\tv.refl. ipf.
10960\tporųčenec\t\tm.anim.
3440\tporųčeńje\t\tn.
10955\tporųčeny\t\tadj.
5849\tporųčitelj\t\tm.anim.
3649\tporųčiteljstvo\t\tn.
10959\tporųčiti sę\t\tv.refl. pf.
21436\tporųčnik\t\tm.anim.
21437\tporušiti\t\tv.tr. pf.
21438\tporyv\t\tm.
21439\tposada\t\tf.
34189\tposcati sę\t\tv.refl. pf.
1220\tposěćati\t\tv.tr. ipf.
18322\tposěćeńje\t\tn.
10965\tposědańje\t\tn.
16316\tposědatelj\t\tm.anim.
1138\tposědati\t\tv.tr. ipf.
10964\tposědlivy\t\tadj.
10963\tposědnik\t\tm.anim.
33241\tposějati\t\tv.tr. pf.
18323\tposěkati\t\tv.tr. pf.
18325\tposěkti\t\tv.tr. pf.
6058\tposeljeńje\t\tn.
17009\tposesivny zaimennik\t\tm.
21442\tposęsti\t\tv.tr. pf.
25756\tposětitelj\t\tm.anim.
1024\tposětiti\t\tv.tr. pf.
36794\tposkųpiti sę\t\tv.refl. pf.
21443\tposlanec\t\tm.anim.
2133\tposlańje\t\tn.
2974\tposlannik\t\tm.anim.
1912\tposlati\t\tv.tr. pf.
2058\tposlě\t\tprep.
10975\tposlě\t\tadv.
18328\tposlědica\t\tf.
2323\tposlědnji, poslědny\t\tadj.
4139\tposlědovatelj\t\tm.anim.
10980\tposlědovateljno\t\tadv.
2333\tposlědovateljny\t\tadj.
34870\tposlědovati\t\t#v.tr. pf.
2327\tposlědstvo\t\tn.
18330\tposlěporodny\t\tadj.
10984\tposlětręšeńje\t\tn.
10968\tposlizgnųti sę\t\tv.refl. pf.
71\tposlušati\t\tv.tr. pf.
5032\tposlušnosť\t\tf.
5031\tposlušny\t\tadj.
17010\tposluživati sę\t\tv.refl. ipf.
36509\tposměšišče\t\tn.
20615\t#posmotriti\t\tv.intr. pf.
34938\tposmŕtno\t\tadv.
34937\tposmŕtny\t\tadj.
3430\tposȯl\t\tm.anim.
33027\tposoliti\t\tv.tr. pf.
33029\tposoljeny\t\tadj.
6019\tposȯvětovati\t\tv.tr. pf.
33225\tpospati\t\tv.intr. pf.
5914\tpospěh\t\tm.
3272\tpospěšiti\t\tv.intr. pf.
23814\tpospěšno\t\tadv.
23056\tposrany\t\tadj.
29674\tposrěbriti\t\tv.tr. pf.
33384\tposrěbrjati\t\tv.tr. ipf.
33385\tposrěbrjeny\t\tadj.
3154\tposrěd\t\tprep.
3257\tposrědkovati\t\tv.intr. ipf.
5172\tposrědničstvo\t\tn.sg.
1150\tposrědnik\t\tm.anim.
5091\tposrědnje\t\tadv.
487\tposrědnji, posrědny\t\tadj.
21449\tposrědnji, posrědny\t\tadj.
692\tposrědstvom\t\tprep.
21745\tpostanavjati\t\tv.tr. ipf.
21747\tpostanoviti\t\tv.tr. pf.
21749\tpostanovjeńje\t\tn.
21453\tpostarati sę\t\tv.refl. pf.
21455\tpostarěti\t\tv.intr. pf.
35001\tpostaviti pytańje\t\tv.pf.
11008\tpostaviti\t\tv.tr. pf.
16323\tpostaviti\t\tv.tr. pf.
11009\tpostavjati\t\tv.tr. ipf.
16320\tpostavjati\t\tv.tr. ipf.
11010\tpostavjeńje\t\tn.
16321\tpostavjeńje\t\tn.
11013\tpostelina\t\tf.
33443\tposteliti\t\tv.tr. pf.
11012\tpostelj\t\tf.
15477\tposteljny klop\t\tm.anim.
21862\tpostigati\t\tv.tr. ipf.
21864\tpostignųti\t\tv.tr. pf.
33446\tpostlati\t\tv.tr. pf.
21741\tpostojanno\t\tadv.
20047\tpostojanny\t\tadj.
35253\tpostojka\t\tf.
5866\tpostrah\t\tm.
21883\tpostrånny\t\tadj.
21884\tpostrånny\t\tadj.
23625\tpȯstrųg\t\tm.anim.
36464\tpostulat\t\tm.
36465\tpostulovati\t\tv.tr. ipf./pf.
21955\tpostųp\t\tm.
21957\tpostųp\t\tm.
4231\tpostųpańje\t\tn.
21953\tpostųpati s\t\tv.ipf.
1471\tpostųpati\t\tv.intr. ipf.
21954\tpostųpiti s\t\tv.pf.
3148\tpostųpiti\t\tv.intr. pf.
1174\tpostųpka\t\tf.
1154\tpostųpno\t\tadv.
20051\tpostųpny\t\tadj.
3527\tposųda\t\tf.
35478\tposuvnik\t\tm.
3070\tposvęćati\t\tv.tr. ipf.
35534\tposvęćeńje\t\tn.
18333\tposvęćeny\t\tadj.
22229\tposvědčati\t\tv.tr. ipf.
22227\tposvědčiti\t\tv.tr. pf.
35580\tposvědčiti\t\tv.intr. pf.
652\tposvętiti\t\tv.tr. pf.
1025\tposylati\t\tv.tr. ipf.
5751\tposylka\t\tf.
34896\tpoščęditi\t\tv.tr. pf.
3259\tpoškoditi\t\tv.intr. pf.
16326\tpoškođeńje\t\tn.
11039\tpoškođeny\t\tadj.
4642\tpošta\t\tf.
21024\tpoštaŕ\t\tm.anim.
35400\tpoštny kod\t\tm.
21025\tpoštny uręd\t\tm.
35399\tpoštny\t\tadj.
3869\tpot\t\tm.sg.
4240\tpotapjati\t\tv.tr. ipf.
29744\tpotemněti\t\tv.intr. pf.
3149\tpotencial\t\tm.
4373\tpotenciaľny\t\tadj.
4314\tpotěńje\t\tn.
4313\tpotěti\t\tv.intr. ipf.
34871\tpotiti sę\t\tv.refl. ipf.
22075\tpotok\t\tm.
22077\tpotok\t\tm.
3150\tpotom\t\tadv.
3157\tpotomȯk\t\tm.anim.
32729\tpotomstvo\t\tn.sg.
3152\tpotop\t\tm.
4241\tpotopiti\t\tv.tr. pf.
18334\tpotrajati\t\tv.intr. pf.
11056\tpotrěba\t\tf.
29955\tpotrěbno\t\tadv.
1296\tpotrěbny\t\tadj.
1165\tpotrěbovati\t\tv.tr. ipf.
34956\tpotręsati\t\tv.tr. ipf.
3901\tpotręsti\t\tv.tr. pf.
29956\tpotrohų\t\tadv.
3151\tpotrvati\t\tv.intr. pf.
121\tpotvŕditi\t\tv.tr. pf.
1167\tpotvŕđati\t\tv.tr. ipf.
6224\tpotvŕđeńje\t\tn.
18346\tpotvŕđeny\t\tadj.
16327\tpoučati\t\tv.tr. ipf.
11064\tpoučeńje\t\tn.
11063\tpoučiti\t\tv.tr. pf.
18353\tpouka\t\tf.
6003\tpovaga\t\tf.
20052\tpovažańje\t\tn.sg.
616\tpovažati\t\tv.tr. ipf.
36108\tpovaženy\t\tadj.
3153\tpovažiti\t\tv.tr. pf.
36296\tpovědač\t\tm.anim.
3870\tpovědati\t\tv.tr. ipf.
3871\tpověděti\t\tv.tr. pf.
12478\tpovědka prěd spańjem\t\tf.
3407\tpovědka\t\tf.
2996\tpoveliteljny\t\tadj.
22330\tpověriti\t\tv.tr. pf.
22332\tpověriti\t\tv.tr. pf.
22329\tpověrjati\t\tv.tr. ipf.
22331\tpověrjati\t\tv.tr. ipf.
22328\tpověŕje\t\tn.
22335\tpověrjennik\t\tm.anim.
22336\tpověrjennik\t\tm.anim.
11074\tpoveseliti sę\t\tv.refl. pf.
34190\tpověsiti\t\tv.tr. pf.
22226\tpověsť\t\tf.
20053\tpovęzanosť\t\tf.
22194\tpovęzka\t\tf.
5999\tpovinen\t\tadj.
18357\t#povinno sę\t\tphrase
29961\tpovinny\t\tadj.
22539\tpovlåka\t\tf.
35549\tpovlěkati za sobojų\t\tv.tr. ipf.
35550\tpovlěkti za sobojų\t\tv.tr. pf.
11075\tpovod\t\tm.
36146\tpovodom\t\tprep.
29962\tpovoljno\t\tadv.
33708\tpovoljny\t\tadj.
29963\tpovoz\t\tm.
3204\tpovraćati\t\tv.ipf.
3202\tpovråt\t\tm.
3205\tpovråtiti\t\tv.pf.
4705\tpovråtiti\t\tv.pf.
34874\tpovråtna informacija\t\tf.
11076\tpovråtna klaviša\t\tf.
11084\tpovråtna svęź\t\tf.
22694\tpovråtny bilet\t\tm.
22697\tpovråtny moment\t\tm.
22695\tpovråtny\t\tadj.
4706\tpovråtȯk\t\tm.
18362\tpovråz\t\tm.
5628\tpovrěmenno\t\tadv.
614\tpovŕh\t\tprep.
18365\tpovŕhnja\t\tf.
18366\tpovŕhnosť\t\tf.
22568\tpovŕhny\t\tadj.
22660\tpovŕnųti\t\tv.tr. pf.
18367\tpovŕšina\t\tf.
22659\tpovŕtati\t\tv.tr. ipf.
22344\tpovsednji\t\tadj.
11087\tpovstanec\t\tm.anim.
1460\tpovstańje\t\tn.
11088\tpovstati\t\tv.intr. pf.
34883\tpovstavati\t\tv.intr. ipf.
2000\tpovtarjati\t\tv.tr. ipf.
2305\tpovtoriti\t\tv.tr. pf.
3809\tpovtorno\t\tadv.
36626\tpovtorny\t\tadj.
3687\tpovysiti\t\tv.tr. pf.
5546\tpovyšati\t\tv.tr. ipf.
1299\tpovyše\t\tprep.
11094\tpovyše\t\tadv.
3686\tpovyšeńje\t\tn.
11098\tpovyši\t\tadj.
35417\tpoza\t\tf.
14064\tpozaďje\t\tn.
5193\tpozadu\t\tadv.
23389\tpozajęti\t\tv.tr. pf.
35631\tpozajęto slovo\t\tm.
22391\tpozajmati\t\tv.tr. ipf.
11102\tpozastaviti\t\tv.tr. pf.
11103\tpozastavjeńje\t\tn.
35479\tpozautra\t\tadv.
3359\tpozdněje\t\tadv.
11106\tpozdnějši\t\tadj.
717\tpozdno\t\tadv.
2267\tpozdny\t\tadj.
18368\tpozdråv\t\tintj.
1226\tpozdråviti\t\tv.tr. pf.
1679\tpozdravjati\t\tv.tr. ipf.
11111\tpozemny\t\tadj.
1225\tpozicija\t\tf.
18371\tpozirati (na)\t\tv.intr. ipf.
36120\tpozitivno čislo\t\tn.
1415\tpozitivny\t\tadj.
32973\tpozlaćati\t\tv.tr. ipf.
32975\tpozlåćeny\t\tadj.
32976\tpozlåta\t\tf.
29798\tpozlåtiti\t\tv.tr. pf.
15480\tpoznanec\t\tm.anim.
35066\tpoznańje\t\tn.
6324\tpoznati\t\tv.tr. pf.
18376\tpoznati\t\tv.tr. pf.
6323\tpoznavati\t\tv.tr. ipf.
18377\tpoznavati\t\tv.tr. ipf.
4381\tpozor\t\tm.
11115\tpozornosť\t\tf.
29969\tpozȯv\t\tm.
34885\tpozovati\t\tv.intr. ipf.
20055\tpozrěti (na)\t\tv.intr. pf.
11121\tpozvaljaje sę\t\tphrase
11124\tpozvaljati sobě\t\tv.ipf.
3156\tpozvaljati\t\tv.tr. ipf.
18379\tpozvańje\t\tn.
36168\tpozvati sę na\t\tv.refl. pf.
6194\tpozvati v sųd\t\tv.pf.
3155\tpozvati\t\tv.tr. pf.
11117\tpozvolimy\t\tadj.
11120\tpozvoliti sobě\t\tv.pf.
2946\tpozvoliti\t\tv.tr. pf.
3823\tpozvoniti\t\tv.pf.
36167\tpozyvati sę na\t\tv.refl. ipf.
6193\tpozyvati v sųd\t\tv.tr. ipf.
20054\tpožaliti\t\tv.tr. pf.
4173\tpožar\t\tm.
4237\tpožarna služba\t\tf.
15485\tpožarnik\t\tm.anim.
11128\tpožarny\t\tadj.
11129\tpožarogasnik\t\tm.
2875\tpožędańje\t\tn.
411\tpožędati\t\tv.tr. pf.
11132\tpožędati\t\tv.tr. pf.
35471\tpoželany\t\tadj.
35470\tpoželati\t\tv.tr. pf.
32984\tpožęti\t\tv.intr. pf.
36056\tpožiraľnik\t\tm.
14913\tpožirańje\t\tn.
11134\tpožirati\t\tv.ipf.
11135\tpoživjeńje\t\tn.
18378\tpožrěti\t\tv.tr. pf.
3147\tpožrtvovati\t\tv.tr. pf.
35501\tpra-\t\tprefix
11137\tprababica\t\tf.
11138\tpraca\t\tf.
18380\tpracodavec\t\tm.anim.
14917\tpracovati\t\tv.intr. ipf.
11141\tpracovito\t\tadv.
11142\tpracovitosť\t\tf.
11143\tpracovity\t\tadj.
11140\tpracovnik\t\tm.anim.
35152\tpradavny\t\tadj.
11145\tpradědȯk\t\tm.anim.
2073\tpråg\t\tm.
23519\tPraga\t\tf.sg.
3574\tpråh\t\tm.
35997\tpråhosȯsaľnik\t\tm.
20616\tpraindoevropejsky\t\tadj.
20056\tprajęzyk\t\tm.
11147\tpraksa\t\tf.
20057\tpraktično\t\tadv.
35159\tpraktičnosť\t\tf.
3146\tpraktičny\t\tadj.
4079\tpraktika\t\tf.
3957\tpraktikovati\t\tv.tr. ipf.
21459\tpralěs\t\tm.
36107\tpralna mašina\t\tf.
35804\tpraotec\t\tm.anim.
3158\tpraroditelj\t\tm.anim.
16345\tpråsę\t\tn.
1228\tpråsętko\t\tn.
4387\tpraslovjansky\t\tadj.
21027\tprašćati sę\t\tv.refl. ipf.
21026\tprašćati\t\tv.tr. ipf.
5273\tpråšek\t\tm.
14919\tpråšiti\t\tv.ipf.
11146\tpråšna burja\t\tf.
32298\tprati mozg\t\tv.tr. ipf.
32303\tprati\t\tv.tr. ipf.
33937\tpråti\t\tv.tr. ipf.
3159\tpravda\t\tf.
11154\tpravdivo\t\tadv.
11155\tpravdivosť\t\tf.
3307\tpravdivy\t\tadj.
11159\tpravdopodobno\t\tadv.
11161\tpravdopodobnosť\t\tf.
11162\tpravdopodobny\t\tadj.
18383\tpravedny\t\tadj.
1870\tpravica\t\tf.
5211\tpraviľno\t\tadv.
20059\tpraviľnosť\t\tf.
20060\tpraviľny\t\tadj.
21031\tpraviľny\t\tadj.
3087\tpravilo\t\tn.
3077\tpraviti\t\tv.tr. ipf.
11167\tpravnik\t\tm.anim.
3711\tpravny\t\tadj.
1826\tpravo\t\tn.
3163\tpravopis\t\tm.
11172\tpravopisańje\t\tn.
35024\tpravopisec\t\tm.anim.
35025\tpravopisny\t\tadj.
32168\tpravorųky\t\tadj.
21034\t#Pravoslavje\t\tn.sg.
3088\tpravoslavny\t\tadj.
35697\tpravosť\t\tf.
35698\tpravosť\t\tf.
11175\tpravosųďje\t\tn.
11176\tpravosųdnosť\t\tf.
21035\tpravověrny\t\tadj.
11177\tpravovųgȯľnik\t\tm.
1164\tpravy\t\tadj.
21036\tpravy\t\tadj.
22895\tpravzor\t\tm.
33552\tpråzdničny\t\tadj.
18389\tpråzdnik\t\tm.
35307\tpråzdnina\t\tf.
3248\tpråzdnovati\t\tv.tr. ipf.
5653\tpråzdnověŕje\t\tn.
5654\tpråzdnověrny\t\tadj.
16335\tpråzdny\t\tadj.
10492\tpŕdak\t\tm.
573\tpŕděti\t\tv.intr. ipf.
3160\tprěadresovati\t\tv.tr. pf.
29977\tpreambula\t\tf.
20617\tprěběglik\t\tm.anim.
5397\tprěbudovati\t\tv.tr. pf.
5398\tprěbudovyvati\t\tv.tr. ipf.
18390\tprěbyvańje\t\tn.
16812\tprěbyvati\t\tv.intr. ipf.
919\tprecedent\t\tm.
35883\tprěcěniti\t\tv.tr. pf.
35882\tprěcěnjati\t\tv.tr. ipf.
11185\tprěčęsto\t\tadv.
20619\tprěčiti\t\tv.tr. ipf.
20620\tprěčnik\t\tm.
14921\tprěd davnym časom\t\tadv.
11195\tprěd davnym vrěmenem\t\tadv.
4097\tprěd hviljejų\t\tadv.
11200\tprěd nekoliko dnjev\t\tadv.
4379\tprěd vsem\t\tadv.
1200\tprěd\t\tprep.
4935\tprěd\t\tprep.
11189\tprěd\t\tm.
21038\tprěd\t\tprep.
11202\tprědańje\t\tn.
1189\tprědati\t\tv.tr. pf.
3247\tprědati\t\tv.tr. pf.
35613\tprědati\t\tv.tr. pf.
36545\tpredator\t\tm.anim.
1825\tprědavati\t\tv.tr. ipf.
3246\tprědavati\t\tv.tr. ipf.
35612\tprědavati\t\tv.tr. ipf.
35609\tprědavnica\t\tf.
35611\tprědavničsky\t\tadj.
35608\tprědavnik\t\tm.anim.
35610\tprědavstvo\t\tn.sg.
20621\tprědběžny\t\tadj.
11211\tprědčasny\t\tadj.
23807\tprědčuťje\t\tn.
23904\tprědčuvati\t\tv.tr. ipf.
11214\tprědgråďje\t\tn.
11216\tprědgrådny\t\tadj.
23608\tprědhistoričny\t\tadj.
1199\tprědhistorija\t\tf.
501\tprědhoditi\t\tv.tr. ipf.
35639\tprědhodnik\t\tm.anim.
14924\tprědhodny\t\tadj.
23439\tprědigra\t\tf.
36800\tprědigra\t\tf.
34891\tpredikat\t\tm.
36370\tpredikat\t\tm.
15491\tprědimenovany\t\tadj.
11219\tprědki\t\tm.pl.
11220\tprědkladati\t\tv.tr. ipf.
602\tprědlagati\t\tv.tr. ipf.
5955\tprědlanji\t\tadv.
1158\tprědlog\t\tm.
5122\tprědložeńje\t\tn.
35667\tprědložitelj\t\tm.anim.
1687\tprědložiti\t\tv.tr. pf.
11228\tprědložlivy\t\tadj.
17018\tprědložnik\t\tm.
3168\tprědměsťje\t\tn.
11231\tprědměstny\t\tadj.
3171\tprědmet\t\tm.
3329\tprědmet\t\tm.
11232\tprědmet\t\tm.
11235\tprědmet\t\tm.
18398\tprědminųly\t\tadj.
20061\tprědnje\t\tadv.
3639\tprědnji, prědny\t\tadj.
16836\tprědnosť\t\tf.
21041\tprědnosť\t\tf.
1578\tprědȯjdti\t\tv.tr. pf.
3129\tprědȯk\t\tm.anim.
6146\tprědoplatnik\t\tm.anim.
21043\tprědpis\t\tm.
35310\tprědpisati\t\tv.tr. pf.
35309\tprědpisyvati\t\tv.tr. ipf.
5407\tprědplaćati\t\tv.intr. ipf.
5408\tprědplatiti\t\tv.intr. pf.
11241\tprědpočitańje\t\tn.
3787\tprědpočitati\t\tv.tr. ipf.
5324\tprědpoklad\t\tm.
3130\tprědpokladati\t\tv.tr. ipf.
20062\tprědpolagati\t\tv.tr. ipf.
11247\tprědpoložeńje\t\tn.
20065\tprědpoložiteljno\t\tadv.
18400\tprědpoložiti\t\tv.tr. pf.
4305\tprědposlědnji, prědposlědny\t\tadj.
16759\t#prědpostavjati\t\tv.tr. ipf.
29984\tprědpotopny\t\tadj.
14926\tprědpověď\t\tf.
11250\tprědpovědati\t\tv.tr. ipf.
14927\tprědpověděti\t\tv.tr. pf.
5164\tprědprijemstvo\t\tn.
35201\tprědprijęti\t\tv.tr. pf.
35200\tprědprijmati\t\tv.tr. ipf.
15492\tprědprimetny\t\tadj.
17020\tprědråstka\t\tf.
3131\tprědsědatelj\t\tm.anim.
6292\tprědsědateljstvo\t\tn.sg.
11254\tprědsědati\t\tv.intr. ipf.
14928\tprědsědnik\t\tm.anim.
11256\tprědskazańje\t\tn.
2897\tprědskazati\t\tv.tr. pf.
3127\tprědskazyvati\t\tv.tr. ipf.
18407\tprědslovje\t\tn.
21762\tprědstati\t\tv.intr. pf.
21769\tprědstava\t\tf.
21761\tprědstavati\t\tv.intr. ipf.
1203\tprědstavitelj\t\tm.anim.
5171\tprědstaviteljstvo\t\tn.
5406\tprědstaviti sobě\t\tv.refl. pf.
2422\tprědstaviti\t\tv.tr. pf.
5405\tprědstavjati sobě\t\tv.refl. ipf.
1524\tprědstavjati\t\tv.tr. ipf.
21766\tprědstavjati\t\tv.tr. ipf.
11264\tprědstavjeńje\t\tn.
21763\tprědstojęći\t\tadj.
4080\tprědsųďje\t\tn.
6290\tprědsųdny\t\tadj.
20066\tprědsųdȯk\t\tm.
2423\tprědšedši\t\tadj.
22079\tprědteča\t\tf.
36623\tprědtym\t\tadv.
3128\tprěduprěditi\t\tv.tr. pf.
21047\tprěduprěditi\t\tv.tr. pf.
21048\tprěduprěditi\t\tv.tr. pf.
1884\tprěduprěđati\t\tv.tr. ipf.
21045\tprěduprěđati\t\tv.tr. ipf.
21046\tprěduprěđati\t\tv.tr. ipf.
20067\tprěduprěđeńje\t\tn.
23095\tprěduprěđeńje\t\tn.
36466\tprěduslovje\t\tn.
36575\tprědustavjeńje\t\tn.
35584\tprědvčera\t\tadv.
29987\tprědvečer\t\tm.
22231\tprědvěsťje\t\tn.
5403\tprědviděti\t\tv.tr. pf.
34836\tprědvidimy\t\tadj.
34837\tprědvidlivy\t\tadj.
5404\tprědvidyvati\t\tv.tr. ipf.
3575\tprědvrěmenny\t\tadj.
23357\tprědvyšati\t\tv.tr. ipf.
22871\tprědznak\t\tm.
32106\tpręđa\t\tf.
3763\tprěđe\t\tadv.
16758\tpreferovati\t\tv.tr. ipf.
805\tprefiks\t\tm.
11284\tprěględ\t\tm.
4075\tprěględati\t\tv.tr. ipf.
4076\tprěględěti\t\tv.tr. pf.
11295\tprěględka\t\tf.
18414\tprěgovory\t\tm.pl.
18415\tprěgråda\t\tf.
23726\tprěhlåditi sę\t\tv.refl. pf.
23727\tprěhlađati sę\t\tv.refl. ipf.
23725\tprěhlåđeńje\t\tn.
19506\tprěhod\t\tm.
36524\tprêhoditi ulicų\t\tphrase
2425\tprěhoditi\t\tv.intr. ipf.
11298\tprěhodny\t\tadj.
18419\tprěhodny\t\tadj.
31908\tprěhytriti\t\tv.tr. pf.
31909\tprěhytrjati\t\tv.tr. ipf.
5521\tprěimenovati\t\tv.tr. pf.
34893\tprěimenovyvati\t\tv.tr. ipf.
18420\tprěinačati\t\tv.tr. ipf.
18421\tprěinačeńje\t\tn.
18422\tprěinačeny\t\tadj.
18423\tprěinačiti\t\tv.tr. pf.
36525\tprêjdti ulicų\t\tphrase
1711\tprějdti\t\tv.intr. pf.
5004\tprějęti\t\tv.tr. pf.
5003\tprějmati\t\tv.tr. ipf.
35800\tprěklad\t\tm.
35801\tprěkladatelj\t\tm.anim.
35802\tprěkladati\t\tv.tr. ipf.
11303\tprěključ\t\tm.
11301\tprěključati\t\tv.tr. ipf.
11302\tprěključiti\t\tv.tr. pf.
21462\tprěkrasny\t\tadj.
36345\tprěkryvańje\t\tn.
36344\tprěkryvati sę\t\tv.refl. ipf.
14930\tprěkydańje\t\tn.
23908\tprělěpy\t\tadj.
23907\tprělet\t\tm.
20068\tprěletny\t\tadj.
29989\tprěljubstvo\t\tn.sg.
20625\tprělom\t\tm.
20626\tprělom\t\tm.
32190\tprělom\t\tm.
35803\tprěložiti\t\tv.tr. pf.
3263\tpreludija\t\tf.
20627\tprěmagati\t\tv.tr. ipf.
32972\tprěmeblovati\t\tv.tr. ipf./pf.
2407\tprěměna\t\tf.
18429\tprěměniti sę\t\tv.refl. pf.
18428\tprěměniti\t\tv.tr. pf.
18427\tprěměnjati sę\t\tv.refl. ipf.
18426\tprěměnjati\t\tv.tr. ipf.
35526\tprěměnna\t\tf.
35525\tprěměnny\t\tadj.
6233\tprěměstiti sę\t\tv.refl. pf.
6230\tprěměstiti\t\tv.tr. pf.
6232\tprěměšćati sę\t\tv.refl. ipf.
6228\tprěměšćati\t\tv.tr. ipf.
11308\tprěmešćeńje\t\tn.
2976\tpremiera\t\tf.
2846\tpremier-ministr\t\tm.anim.
2845\tprěmnogo\t\tadv.
11527\tprěmo\t\tadv.
20633\tprěmogti\t\tv.tr. pf.
4413\t#prěmokųtnik\t\tm.
4414\tprěmokųtny\t\tadj.
2982\tprěmȯlviti\t\tv.intr. pf.
2337\tprěmȯlvjati\t\tv.intr. ipf.
11313\tprěmotańje\t\tn.
4250\tprěmotati\t\tv.tr. pf.
5554\tprěmotyvati\t\tv.tr. ipf.
1209\tprěmy\t\tadj.
36181\tprěnapęti\t\tv.tr. pf.
36180\tprěnapinati\t\tv.tr. ipf.
15408\tprěnebrěgati\t\tv.tr. ipf.
15410\tprěnebrěgti\t\tv.tr. pf.
9633\tprěnebrěžeńje\t\tn.sg.
5394\tprěnesti\t\tv.tr. pf.
36265\tprěnesti\t\tv.tr. pf.
4195\tprěnoćevati\t\tv.intr. pf.
5393\tprěnositi\t\tv.tr. ipf.
36264\tprěnositi\t\tv.tr. ipf.
20635\tprěnosny\t\tadj.
20636\tprěnosny\t\tadj.
22704\tprěobraćati\t\tv.tr. ipf.
22706\tprěobraćati\t\tv.tr. ipf.
22702\tprěobråtiti\t\tv.tr. pf.
22707\tprěobråtiti\t\tv.tr. pf.
11320\tprěobraziti\t\tv.tr. pf.
11322\tprěobražati\t\tv.tr. ipf.
20069\tprěobražeńje\t\tn.
36601\tprěocěniti\t\tv.tr. pf.
36600\tprěocěnjati\t\tv.tr. ipf.
35288\tprěoděti sę\t\tv.refl. pf.
35287\tprěoděvati sę\t\tv.refl. ipf.
35679\tpreparat\t\tm.
21049\tprěpirati sę\t\tv.refl. ipf.
11324\tprěpisańje\t\tn.
11325\tprěpisany\t\tadj.
5530\tprěpisati\t\tv.tr. pf.
21050\tprěpiska\t\tf.
5529\tprěpisyvati\t\tv.tr. ipf.
34911\tprěpluti\t\tv.tr. pf.
1850\tprěplyvati\t\tv.tr. ipf.
36728\tprěplyvati\t\tv.tr. ipf.
34325\tprěplyvti\t\tv.tr. pf.
20070\tprěpȯlnjeny\t\tadj.
11332\tprěpona\t\tf.
35213\tprěporųčati\t\tv.tr. ipf.
35214\tprěporųčiti\t\tv.tr. pf.
35215\tprěporųka\t\tf.
3529\tprěprava\t\tf.
3539\tprěpraviti\t\tv.tr. pf.
3528\tprěpravjati\t\tv.tr. ipf.
11337\tprěprogramovati\t\tv.tr. pf.
33068\tprěrastati\t\tv.tr. ipf.
11338\tprěråsti\t\tv.tr. pf.
16832\tprěråzkazańje\t\tn.
16833\tprěråzkazati\t\tv.tr. pf.
16834\tprěråzkazyvati\t\tv.tr. ipf.
21464\tprěrěčeńje\t\tn.
21465\tprěrěkati sę\t\tv.refl. ipf.
21466\tprěrěkti sę\t\tv.refl. pf.
11339\tprěrězati\t\tv.tr. pf.
23359\tprěroditi sę\t\tv.refl. pf.
23360\tprěrođeńje\t\tn.
1772\tprěrvati\t\tv.tr. pf.
21467\tprěryv\t\tm.
11340\tprěryvańje\t\tn.
1849\tprěryvati\t\tv.tr. ipf.
1726\tpresa\t\tf.
2326\tpresa-konferencija\t\tf.
1358\tpresa-reliz\t\tm.
21469\tprěsěčeńje\t\tn.
36214\tprěsědańje\t\tn.
36215\tprěsědati\t\tv.intr. ipf.
5402\tprěsěkati\t\tv.tr. ipf.
5401\tprěsěkti\t\tv.tr. pf.
11349\tprěselenec\t\tm.anim.
11350\tprěselenica\t\tf.
32969\tprěseliti sę\t\tv.refl. pf.
11352\tprěseliti\t\tv.tr. pf.
32968\tprěseljati sę\t\tv.refl. ipf.
11353\tprěseljati\t\tv.tr. ipf.
32970\tprěseljeńje\t\tn.
36216\tprěsęsti\t\tv.intr. pf.
2244\tpreskva\t\tf.
4291\tprěslědovańje\t\tn.
4290\tprěslědovati\t\tv.tr. ipf.
21470\tprěslědovati\t\tv.tr. ipf.
18431\tprěslěpiti\t\tv.tr. pf.
36360\tpręslica\t\tf.
5991\tprěslušati\t\tv.tr. pf.
14932\tprěslušivańje\t\tn.
5990\tprěslušivati\t\tv.tr. ipf.
36038\tprěsměriti\t\tv.tr. pf.
36039\tprěsměrjati\t\tv.tr. ipf.
36040\tprěsměrjeńje\t\tn.
11359\tprěsměšnik\t\tm.anim.
11361\tprěspati\t\tv.intr. pf.
29995\tprěstarati sę\t\tv.refl. pf.
18436\tprěstati\t\tv.intr. pf.
18437\tprěstavati\t\tv.intr. ipf.
21760\tprěstaviti sę\t\tv.refl. pf.
2009\tprěstaviti\t\tv.tr. pf.
21757\tprěstavjati sę\t\tv.refl. ipf.
2931\tprěstavjati\t\tv.tr. ipf.
18456\tpręsti\t\tv.intr. ipf.
18457\tpręsti\t\tv.tr. ipf.
33712\tprěstigati\t\tv.tr. ipf.
29996\tprěstignųti\t\tv.tr. pf.
20071\tprestiž\t\tm.sg.
20072\tprestižny\t\tadj.
36389\tprěstol\t\tm.
1709\tprěstrašeny\t\tadj.
293\tprěstrašiti\t\tv.tr. pf.
11371\tprěstrělka\t\tf.
18438\tprěstųpańje\t\tn.
18439\tprěstųpati\t\tv.tr. ipf.
36371\tprěstųpati\t\tv.tr. ipf.
18440\tprěstųpiti\t\tv.tr. pf.
36372\tprěstųpiti\t\tv.tr. pf.
21961\tprěstųpnik\t\tm.anim.
21962\tprěstųpnik\t\tm.anim.
32336\tprěstųpnosť\t\tf.
21052\tprěstųpny god\t\tm.
21963\tprěstųpny\t\tadj.
18441\tprěstųpȯk\t\tm.
23747\tprěsunųti\t\tv.tr. pf.
23744\tprěsuvati\t\tv.tr. ipf.
11372\tprěsvęzati\t\tv.tr. pf.
11374\tprěsvęzyvati\t\tv.tr. ipf.
14935\tprěškoda\t\tf.
16329\tprětečeńje\t\tn.
6074\tprětěkati\t\tv.intr. ipf.
6076\tprětekti\t\tv.intr. pf.
32532\tpretenciozny\t\tadj.
35966\tpretendovati na\t\tv.intr. ipf./pf.
35968\t#pretendovati\t\tv.tr. ipf./pf.
35967\tpretenzija\t\tf.
21053\tprěti\t\tv.ipf.
35985\tprětok rěky\t\tm.
16878\tprětȯlmačiti\t\tv.tr. pf.
21055\tprětraviti\t\tv.tr. pf.
21056\tprětravjati\t\tv.tr. ipf.
2364\tprětŕpěti\t\tv.tr. pf.
22149\tprětvarjati\t\tv.tr. ipf.
22150\tprětvoriti\t\tv.tr. pf.
22287\tprěuveličati\t\tv.tr. ipf.
35604\tprěuveličeńje\t\tn.
22288\tprěuveličiti\t\tv.tr. pf.
22175\tprěvaga\t\tf.
21058\tprěvariti\t\tv.tr. pf.
21057\tprěvarjati\t\tv.tr. ipf.
35241\tprěvažajųći\t\tadj.
6006\tprěvažati\t\tv.intr. ipf.
6007\tprěvažiti\t\tv.intr. pf.
35242\tprěvažno\t\tadv.
35819\tprevencija\t\tf.
35820\tpreventivny\t\tadj.
3872\tprěvesti\t\tv.tr. pf.
5396\tprěvezti\t\tv.tr. pf.
22499\tprěvladnųti\t\tv.pf.
22497\tprěvladyvati\t\tv.ipf.
1565\tprěvlađeńje\t\tn.
20073\tprěvod\t\tm.
22254\tprěvod\t\tm.
1571\tprěvoditelj\t\tm.anim.
3055\tprěvoditi\t\tv.tr. ipf.
11388\tprěvođeńje\t\tn.
18448\tprěvoz\t\tm.
23112\tprěvoz\t\tm.
18444\tprěvȯzhoditi\t\tv.tr. ipf.
5395\tprěvoziti\t\tv.tr. ipf.
18447\tprěvȯzȯjdti\t\tv.tr. pf.
22698\tprěvråt\t\tm.
16062\tprěvråtnik\t\tm.anim.
22700\tprěvråtny\t\tadj.
22729\tprěvysiti\t\tv.tr. pf.
22728\tprěvyšati\t\tv.tr. ipf.
2284\tprěz\t\tprep.
16063\tprezentacija\t\tf.
2329\tprezident\t\tm.anim.
31747\tprezidentsky\t\tadj.
31746\tprezidium\t\tm.
11394\tprězimę\t\tn.
30000\tprězir\t\tm.
22896\tprězirati\t\tv.tr. ipf.
1710\tprězměrno\t\tadv.
18450\t#prěznačati\t\tv.tr. ipf.
11396\tprěznačeńje\t\tn.
18452\tprěznačeny za\t\tadj.
18454\tprěznačiti\t\tv.tr. pf.
3516\tprězravo\t\tadv.
3515\tprězravy\t\tadj.
20074\tprězrěńje\t\tn.
9634\tprězrěti\t\tv.tr. pf.
11400\tprězvati\t\tv.tr. pf.
11401\tprězvišče\t\tn.
16332\tprězyvati\t\tv.tr. ipf.
4179\tprěžitelj\t\tm.anim.
3604\tprěžiti\t\tv.tr. pf.
4178\tprěžiti\t\tv.tr. pf.
4331\tprěžiti\t\tv.tr. pf.
4180\tprěžiťje\t\tn.
22939\tprěžitȯk\t\tm.
11409\tprěživańje\t\tn.
4330\tprěživati\t\tv.tr. ipf.
11412\tprěživati\t\tv.tr. ipf.
11402\tprěživimosť\t\tf.
11403\tprěživimy\t\tadj.
21059\tpręžka\t\tf.
34065\tprěžuvati\t\tv.tr. pf.
621\tpri\t\tprep.
4607\tpri\t\tprep.
36138\tpribiti\t\tv.tr. pf.
36137\tpribivati\t\tv.tr. ipf.
23813\tpriblizno, približno\t\tadv.
18458\tpribližati sę\t\tv.refl. ipf.
17011\tpribliženy\t\tadj.
23671\tpribližiti sę\t\tv.refl. pf.
18459\tpribor\t\tm.
11416\tpribrěžje\t\tn.
18462\tpribyti\t\tv.intr. pf.
18463\tpribyvati\t\tv.intr. ipf.
1467\tpricěliti\t\tv.pf.
3020\tpričęsťje\t\tn.
2412\tpričina\t\tf.
2363\tpričiniti\t\tv.pf.
1500\tpričinjati\t\tv.ipf.
36347\tpričisliti k\t\tv.tr. pf.
36346\tpričisljati k\t\tv.tr. ipf.
35781\tpridati\t\tv.tr. pf.
18465\tpridatȯk\t\tm.
35782\tpridavati\t\tv.tr. ipf.
17012\tpridavnik\t\tm.
4229\tpridělańje\t\tn.
4228\tpridělati\t\tv.tr. pf.
18467\tpriděliti\t\tv.tr. pf.
18466\tpriděljati\t\tv.tr. ipf.
36563\tPridněstrovje\t\tn.sg.
36564\tpridněstrovsky\t\tadj.
6180\tpridŕživati sę\t\tv.refl. ipf.
14937\tpridumati\t\tv.tr. pf.
35145\tprigađati sę\t\tv.refl. ipf.
36598\tpriględati sę\t\tv.refl. ipf.
11426\tpriględati\t\tv.tr. ipf.
36599\tpriględěti sę\t\tv.refl. pf.
11427\tpriględěti\t\tv.tr. pf.
18469\tprignųti\t\tv.tr. pf.
3126\tprigoda\t\tf.
35144\tprigoditi sę\t\tv.refl. pf.
3050\tprigodny\t\tadj.
18471\tprigodny\t\tadj.
1140\tprigotoviti\t\tv.tr. pf.
23770\tprigotovjeńje\t\tn.
4163\tprigråd\t\tm.
35779\tprigraničny\t\tadj.
18468\tprigybati\t\tv.tr. ipf.
23750\tprihod\t\tm.
1139\tprihoditi\t\tv.intr. ipf.
11436\tprijateliti sę\t\tv.refl. ipf.
1141\tprijatelj\t\tm.anim.
4342\tprijateljka\t\tf.
14938\tprijateljska igra\t\tf.
11439\tprijateljska strěľba\t\tf.
11438\tprijateljskosť\t\tf.
4128\tprijateljsky\t\tadj.
4129\tprijateljstvo\t\tn.
5563\tprijati\t\tv.tr. ipf.
5564\tprijati\t\tv.tr. ipf.
11445\tprijatlivy\t\tadj.
18472\tprijaviti sę\t\tv.refl. pf.
18474\tprijavjati sę\t\tv.refl. ipf.
1151\tprijdti\t\tv.intr. pf.
5206\tprijehati\t\tv.intr. pf.
18476\tprijem\t\tm.
18477\tprijem\t\tm.
33015\tprijemlivy\t\tadj.
18478\tprijemnik\t\tm.
11450\tprijemnosť\t\tf.
3774\tprijemny\t\tadj.
11433\tprijemny\t\tadj.
18479\tprijęti sę\t\tv.refl. pf.
3374\tprijęti\t\tv.tr. pf.
35078\tprijęťje\t\tn.
11454\tprijętno\t\tadv.
23812\tprijętnosť\t\tf.
3314\tprijętny\t\tadj.
5208\tpriježđati\t\tv.intr. ipf.
32339\tprijmajųća krajina\t\tf.
18480\tprijmati sę\t\tv.refl. ipf.
11467\tprijmati\t\tv.tr. ipf.
30223\tprikaz\t\tm.
20076\tprikazati\t\tv.tr. pf.
20078\tprikazyvati\t\tv.tr. ipf.
3595\tpriklad\t\tm.
20079\tprikladati\t\tv.tr. ipf.
3650\tprikop\t\tm.
1143\tprilagateljno imę\t\tn.
20639\tprilegly\t\tadj.
32870\tprilěpiti sę\t\tv.refl. pf.
5561\tprilěpiti\t\tv.tr. pf.
21471\tprilětati\t\tv.intr. ipf.
21472\tpriletěti\t\tv.intr. pf.
3769\tpriličny\t\tadj.
20642\tpriliv\t\tm.
20645\tpriloga\t\tf.
11465\tpriložeńje\t\tn.
11466\tpriložiti\t\tv.tr. pf.
36903\tprilųčati sę\t\tv.refl. ipf.
36897\tprilųčati\t\tv.tr. ipf.
36900\tprilųčiti sę\t\tv.refl. pf.
36894\tprilųčiti\t\tv.tr. pf.
36835\tprima\t\tf.
33214\tprimamka\t\tf.
35320\tprimarny\t\tadj.
30011\tprimat\t\tm.anim.
33486\tpriměćati\t\tv.tr. ipf.
20650\tpriměniti\t\tv.tr. pf.
20649\tpriměnjati\t\tv.tr. ipf.
35515\tpriměnjeńje\t\tn.
3590\tpriměr\t\tm.
20651\tpriměrny\t\tadj.
33487\tprimětiti\t\tv.tr. pf.
34918\tprimětka\t\tf.
20654\tprimiŕje\t\tn.
35198\tprimitivny\t\tadj.
11470\tprimoŕje\t\tn.
390\tprinajmenje\t\tadv.
20656\tprinaležati\t\tv.intr. ipf.
20657\tprinaležnosť\t\tf.
16065\tprinc\t\tm.anim.
2247\tprincesa\t\tf.
5327\tprincip\t\tm.
30012\tprincipiaľny\t\tadj.
3221\tprinesti\t\tv.tr. pf.
20658\tprinos\t\tm.
3220\tprinositi\t\tv.tr. ipf.
23617\tprinter\t\tm.
2136\tprinuditi\t\tv.tr. pf.
1976\tprinuđati\t\tv.tr. ipf.
3631\tprinuđeny\t\tadj.
2135\tprioritet\t\tm.
21061\tpripadati\t\tv.intr. ipf.
21063\tpripasti\t\tv.intr. pf.
21065\tpripęti\t\tv.tr. pf.
21068\tpripinati\t\tv.tr. ipf.
18486\tpripisati\t\tv.tr. pf.
18487\tpripisyvati\t\tv.tr. ipf.
34912\tpripluti\t\tv.intr. pf.
34914\tpriplyvati\t\tv.intr. ipf.
36733\tpriplyvati\t\tv.intr. ipf.
36732\tpriplyvti\t\tv.intr. pf.
5942\tpripominati sobě\t\tv.tr. ipf.
1208\tpripominati\t\tv.tr. ipf.
5943\tpripomněti sobě\t\tv.tr. pf.
2004\tpripomněti\t\tv.tr. pf.
21073\tpripraviti\t\tv.tr. pf.
21075\tpripraviti\t\tv.tr. pf.
21076\tpripravjati\t\tv.tr. ipf.
21078\tpripravjati\t\tv.tr. ipf.
21082\tpripustiti\t\tv.tr. pf.
21083\tpripustiti\t\tv.tr. pf.
21079\tpripušćati\t\tv.tr. ipf.
21080\tpripušćati\t\tv.tr. ipf.
20085\tpriråstka\t\tf.
11480\tpriroda\t\tf.
36522\tprirodne resursy\t\tm.pl.
11482\tprirodničny\t\tadj.
18488\tprirodno\t\tadv.
11484\tprirodnosť\t\tf.sg.
1215\tprirodny\t\tadj.
21473\tprirodopis\t\tm.sg.
22216\tprirodovědstvo\t\tn.sg.
22853\tprirodoznavstvo\t\tn.sg.
21474\tprirųčnik\t\tm.
11486\tprirųčny\t\tadj.
678\tprisęga\t\tf.
35699\tprisęgati\t\tv.tr. ipf.
35686\tprisęgnųti\t\tv.tr. pf.
15497\tprisęžna\t\tf.
1396\tprisęžni\t\tm.pl.
11490\tprisęžny\t\tm.anim.
36902\tprisjediniti sę\t\tv.refl. pf.
36896\tprisjediniti\t\tv.tr. pf.
36905\tprisjedinjati sę\t\tv.refl. ipf.
36899\tprisjedinjati\t\tv.tr. ipf.
35147\tprislati\t\tv.tr. pf.
18489\tprislovica\t\tf.
18490\tprislovje\t\tn.
17013\tprislovnik\t\tm.
1216\tprislovȯk\t\tm.
21476\tprispěti\t\tv.intr. pf.
21477\tprispěvati\t\tv.intr. ipf.
18491\tprisposobiti\t\tv.tr. pf.
18493\tprisposobjati\t\tv.tr. ipf.
35529\tprisposobjeńja\t\tn.pl.
18495\tprisposobjeńje\t\tn.
35528\tprisposobjeny objekt\t\tm.
11493\tpristanišče\t\tn.
21775\tpristanj\t\tm.
21770\tpristojati\t\tv.intr. ipf.
21772\tpristojny\t\tadj.
21896\tpristrastny\t\tadj.
34377\tpristrigati\t\tv.tr. ipf.
34378\tpristrigti\t\tv.tr. pf.
6188\tpristųp\t\tm.
21969\tpristųp\t\tm.
2059\tpristųpati do\t\tv.intr. ipf.
21964\tpristųpati k\t\tv.intr. ipf.
2391\tpristųpiti do\t\tv.intr. pf.
21967\tpristųpiti k\t\tv.intr. pf.
11494\tpristųpjeńje\t\tn.
22008\tprisųditi\t\tv.tr. pf.
22010\tprisųditi\t\tv.tr. pf.
34892\tprisųdȯk\t\tm.
22007\tprisųđati\t\tv.tr. ipf.
22009\tprisųđati\t\tv.tr. ipf.
14939\tprisųtnosť\t\tf.
14940\tprisųtny\t\tadj.
11502\tprisųtstvo\t\tn.sg.
23860\tprisųtstvovati pri\t\tv.intr. ipf.
22022\tprisvajati\t\tv.tr. ipf.
36496\tprisvojeńje\t\tn.sg.
17014\tprisvojiteljny zaimennik\t\tm.
22021\tprisvojiti\t\tv.tr. pf.
1130\tprisvojny\t\tadj.
35146\tprisylati\t\tv.tr. ipf.
23256\tprišiti\t\tv.tr. pf.
23174\tpritęgańje\t\tn.
23178\tpritęgati\t\tv.tr. ipf.
23173\tpritęglivosť\t\tf.
22046\tpritęglivy\t\tadj.
23179\tpritęgnųti\t\tv.tr. pf.
4522\tpritisk krvi\t\tm.sg.
4300\tpritisk\t\tm.sg.
18498\tpritiskańje\t\tn.
4298\tpritiskati\t\tv.tr. ipf.
4299\tpritisknųti\t\tv.tr. pf.
22080\tpritok\t\tm.
22081\tpritok\t\tm.
33496\tpritomny\t\tadj.
33497\tpritomny\t\tadj.
18499\tpritvarjati sę\t\tv.refl. ipf.
18501\tpritvoriti sę\t\tv.refl. pf.
18500\tpritvorny\t\tadj.
22151\tpritvorstvo\t\tn.sg.
5861\tpriučati sę\t\tv.refl. ipf.
32979\tpriučati\t\tv.tr. ipf.
5863\tpriučeny\t\tadj.
5862\tpriučiti sę\t\tv.refl. pf.
32980\tpriučiti\t\tv.tr. pf.
23180\tprivabiti\t\tv.tr. pf.
23182\tprivabjati\t\tv.tr. ipf.
6294\tprivatnosť\t\tf.
6293\tprivatny\t\tadj.
31950\tprivesti\t\tv.tr. pf.
31952\tprivesti\t\tv.tr. pf.
22404\tprivět\t\tm.
22405\tprivětlivy\t\tadj.
22197\tprivęzannosť\t\tf.
21482\tprivęzati\t\tv.tr. pf.
3471\tprivezti\t\tv.tr. pf.
21483\tprivęzyvati\t\tv.tr. ipf.
6099\tprividěńje\t\tn.
22425\tprividěńje\t\tn.
35292\tprividno\t\tadv.
35551\tprividny\t\tadj.
21033\tprivilegija\t\tf.
15502\tprivitańje\t\tn.
11515\t#privitany\t\tadj.
1965\tprivitati\t\tv.tr. pf.
23175\tprivlåčivati\t\tv.tr. ipf.
22501\tprivlastniti sobě\t\tv.tr. pf.
22502\tprivlastnjati sobě\t\tv.tr. ipf.
23172\tprivlěkateljnosť\t\tf.
22543\tprivlěkateljny\t\tadj.
23176\tprivlěkati\t\tv.tr. ipf.
23177\tprivlěkti\t\tv.tr. pf.
11517\tprivoditi\t\tv.tr. ipf.
31946\tprivoditi\t\tv.tr. ipf.
22315\tprivoliti\t\tv.pf.
22314\tprivoljati\t\tv.ipf.
3470\tprivoziti\t\tv.tr. ipf.
22588\tprivŕženec\t\tm.anim.
20086\tprivyčaj\t\tm.
11519\tprivykati sę\t\tv.refl. ipf.
1268\tprivykati\t\tv.tr. ipf.
2392\tprivykly\t\tadj.
5864\tprivykneny\t\tadj.
11520\tprivyknųti sę\t\tv.refl. pf.
351\tprivyknųti\t\tv.tr. pf.
4564\tprizemjati sę\t\tv.refl. ipf.
22750\tprizemje\t\tn.
36734\tprizemjeńje\t\tn.
4565\tprizemjiti sę\t\tv.refl. pf.
3014\tprizemny\t\tadj.
22875\tpriznak\t\tm.
11524\tpriznańje\t\tn.
2287\tpriznati\t\tv.tr. pf.
1214\tpriznavati\t\tv.tr. ipf.
22899\tprizrak\t\tm.
22916\tprizvańje\t\tn.
22917\tprizvańje\t\tn.
20087\tprizvati\t\tv.tr. pf.
20088\tprizyvati\t\tv.tr. ipf.
22941\tpriživnik\t\tm.anim.
3069\tpŕnik\t\tm.
1210\tpro-\t\tprefix
23307\tproba\t\tf.
20659\tproběg\t\tm.
17015\tproběgańje\t\tn.
36021\tprobijati sę\t\tv.refl. ipf.
36017\tprobiti sę\t\tv.refl. pf.
5414\tprobiti\t\tv.tr. pf.
5413\tprobivati\t\tv.tr. ipf.
18503\tprobkovańje\t\tn.
745\tproblem\t\tm.
20660\tproblematičny\t\tadj.
11538\tprobna jezda\t\tf.
18504\tprobny\t\tadj.
18506\tprobȯk\t\tm.
11542\tprobovati snova\t\tv.tr. ipf.
238\tprobovati\t\tv.tr. ipf.
3165\tprobuditi sę\t\tv.refl. pf.
23312\tprobuđeny\t\tadj.
804\tprocedura\t\tf.
2406\tprocent\t\tm.
6184\tproces\t\tm.
33192\tprocesija\t\tf.
139\tprocitovati\t\tv.tr. pf.
32803\tprȯč iz drågy!\t\tphrase
1217\tprȯč\t\tadv.
23912\tpročistiti\t\tv.tr. pf.
23911\tpročišćati\t\tv.tr. ipf.
1190\tpročitati\t\tv.tr. pf.
4263\tprodati\t\tv.tr. pf.
4262\tprodavati\t\tv.tr. ipf.
4264\tprodavec\t\tm.anim.
11549\tprodavica\t\tf.
2262\tprodaž\t\tf.
36020\tprodirati sę\t\tv.refl. ipf.
1007\tprodȯlžati\t\tv.tr. ipf.
4594\tprodȯlžati\t\tv.tr. ipf.
4384\tprodȯlžeńje\t\tn.
4385\tprodȯlžeńje\t\tn.
36294\tprodȯlžeńje\t\tn.
1872\tprodȯlžiti\t\tv.tr. pf.
4595\tprodȯlžiti\t\tv.tr. pf.
36018\tprodreti sę\t\tv.refl. pf.
35178\tproducent\t\tm.anim.
20089\tprodukcija\t\tf.
3078\tprodukovati\t\tv.tr. ipf.
5328\tprodukt\t\tm.
35174\tproduktivny\t\tadj.
11558\tprodumati\t\tv.tr. pf.
20090\tprofanacija\t\tf.
20091\tprofanovati\t\tv.tr. ipf.
4650\tprofesija\t\tf.
34919\tprofesional\t\tm.anim.
35325\tprofesionalizacija\t\tf.
35326\tprofesionalizovati\t\tv.tr. ipf./pf.
4652\tprofesionaľnosť\t\tf.
4651\tprofesionaľny\t\tadj.
48\tprofesor\t\tm.anim.
23227\tprofil\t\tm.
14943\tproganjańje\t\tn.
14944\tproganjany\t\tadj.
14942\tproganjati\t\tv.tr. ipf.
18511\tproglås\t\tm.
18514\tproglåsiti\t\tv.tr. pf.
18512\tproglašati\t\tv.tr. ipf.
18513\tproglåšeńje\t\tn.
33731\tprognoza\t\tf.
21461\tprogȯltati\t\tv.tr. ipf.
18413\tprogȯltnųti sȯlzy\t\tv.pf.
18412\tprogȯltnųti\t\tv.tr. pf.
31\tprograma\t\tf.
23618\tprogramist\t\tm.anim.
11564\tprogramovati\t\tv.tr. ipf.
6237\tprogres\t\tm.
6238\tprogresivny\t\tadj.
18515\tprohlåda\t\tf.
18520\tprohlåditi sę\t\tv.refl. pf.
18517\tprohlåditi\t\tv.tr. pf.
18521\tprohlådnosť\t\tf.
18522\tprohlådny\t\tadj.
15503\tprohod\t\tm.
35586\tprohoditi sę\t\tv.refl. ipf.
5480\tprohoditi\t\tv.tr. ipf.
35587\tprohoďka\t\tf.
20661\tprohodny\t\tadj.
23361\tproigranec\t\tm.anim.
5422\tproigrati\t\tv.tr. pf.
5423\tproigryvati\t\tv.tr. ipf.
11566\tproizhoditi iz\t\tv.ipf.
4843\tproizhođeńje\t\tn.
22082\tproiztěkati\t\tv.intr. ipf.
22084\tproiztekti\t\tv.intr. pf.
11568\tproizvesti\t\tv.tr. pf.
22261\tproizvod\t\tm.
35569\tproizvoditelj\t\tm.anim.
11569\tproizvoditi\t\tv.tr. ipf.
22259\tproizvodstvo\t\tn.sg.
22318\tproizvoljny\t\tadj.
19919\tprojav\t\tm.
5325\tprojaviti\t\tv.tr. pf.
5326\tprojavjati\t\tv.tr. ipf.
35349\tprojavjeńje\t\tn.
5481\tprojdti\t\tv.tr. pf.
5488\tprojehati\t\tv.intr. pf.
5651\tprojekcija\t\tf.
430\tprojekt\t\tm.
5099\tprojektant\t\tm.anim.
4362\tprojektovańje\t\tn.
4361\tprojektovati\t\tv.tr. ipf.
18524\tprojęti\t\tv.tr. pf.
5489\tproježđati\t\tv.intr. ipf.
18525\tprojmati\t\tv.tr. ipf.
18526\tproklęti\t\tv.tr. pf.
18527\tproklęti\t\tv.intr. pf.
20093\tproklęťje\t\tn.
35990\tproklęto\t\tadv.
18528\tproklętstvo\t\tn.
36704\tproklęty\t\tadj.
1221\tprokontrolovati\t\tv.tr. pf.
2269\tprokrijumčariti\t\tv.tr. pf.
6295\tprokuratura\t\tf.
2943\tprokuror\t\tm.anim.
5588\tprolamyvati\t\tv.tr. ipf.
5519\tproletariat\t\tm.sg.
5520\tproletaŕsky\t\tadj.
1223\tproleženina\t\tf.
6152\tproliti\t\tv.tr. pf.
6151\tprolivati\t\tv.tr. ipf.
20662\tprolom\t\tm.
36301\tprolom\t\tm.
4614\tprolomiti\t\tv.tr. pf.
1211\tpromysl\t\tm.
2315\tpromysľnik\t\tm.anim.
35179\tpromysľny\t\tadj.
32301\tpromyti mozg\t\tv.tr. pf.
32300\tpromyvati mozg\t\tv.tr. ipf.
6298\tpronevěriti\t\tv.tr. pf.
6296\tpronevěrjati\t\tv.tr. ipf.
18530\tpronevěrjeńje\t\tn.
4456\tpronikańje\t\tn.
4454\tpronikati\t\tv.intr. ipf.
35552\tproniklivy\t\tadj.
4455\tproniknųti\t\tv.intr. pf.
4310\tpropadati\t\tv.intr. ipf.
21085\tpropadati\t\tv.intr. ipf.
21086\tpropadati\t\tv.intr. ipf.
5329\tpropaganda\t\tf.
5330\tpropagovati\t\tv.tr. ipf.
11592\tpropasť\t\tf.
11594\tpropasť\t\tf.
21088\tpropasť\t\tf.
4311\tpropasti\t\tv.intr. pf.
21089\tpropasti\t\tv.intr. pf.
21090\tpropasti\t\tv.intr. pf.
18532\tpropeler\t\tm.
35765\tpropiti\t\tv.tr. pf.
35764\tpropivati\t\tv.tr. ipf.
4081\tproponovati\t\tv.tr. ipf.
23784\tproporcija\t\tf.
23783\tproporcionaľno\t\tadv.
23782\tproporcionaľny\t\tadj.
22233\tpropověď\t\tf.
5124\tpropozicija\t\tf.
21092\tpropust\t\tm.
21093\tpropust\t\tm.
35643\tpropust\t\tm.
18534\tpropustiti\t\tv.tr. pf.
18533\tpropušćati\t\tv.tr. ipf.
33585\tproročsky\t\tadj.
2235\tprorok\t\tm.anim.
36300\tproryv\t\tm.
22794\tprośak\t\tm.anim.
1232\tprośba\t\tf.
3353\tprosim\t\tintj.
1853\tprositi\t\tv.tr. ipf.
36582\tproslaviti sę\t\tv.refl. pf.
1227\tproslaviti\t\tv.tr. pf.
36578\tproslaviti\t\tv.tr. pf.
36581\tproslavjati sę\t\tv.refl. ipf.
36576\tproslavjati\t\tv.tr. ipf.
36579\tproslavjati\t\tv.tr. ipf.
428\tproslavjeny\t\tadj.
3937\tproso\t\tn.
4197\tprospati\t\tv.intr. pf.
33222\tprospati\t\tv.tr. pf.
36453\tprostačsky\t\tadj.
21096\tprostak\t\tm.anim.
21098\tprostak\t\tm.anim.
21765\tprostata\t\tf.
18540\tprostějši\t\tadj.
21885\tprostirati\t\tv.tr. ipf.
21886\tprostirati\t\tv.tr. ipf.
21100\tprostiti sę\t\tv.refl. pf.
21099\tprostiti\t\tv.tr. pf.
1748\tprostitutka\t\tf.
3753\tprosto\t\tadv.
5531\tprostor\t\tm.
1437\tprostosť\t\tf.
11611\tprostrånna klaviša\t\tf.
16478\tprostrånny\t\tadj.
21889\tprostrånny\t\tadj.
21890\tprostrånny\t\tadj.
11610\tprostrånstvo\t\tn.
21887\tprostrěti\t\tv.tr. pf.
21888\tprostrěti\t\tv.tr. pf.
11613\tprostrina\t\tf.
33418\tprostuditi sę\t\tv.refl. pf.
33419\tprostuđati sę\t\tv.refl. ipf.
2334\tprosty\t\tadj.
22013\t#prosvěćańje\t\tn.
22014\tprosvěćańje\t\tn.
5783\tprosvěćati\t\tv.tr. ipf.
3642\tprosvět\t\tm.
6202\tprosvěta\t\tf.
5784\tprosvětiti\t\tv.tr. pf.
30030\tprošćaľny\t\tadj.
18535\tprošćańje\t\tn.
36523\tprošćati sę\t\tv.refl. ipf.
547\tprošćati\t\tv.tr. ipf.
2288\tprošedšesť\t\tf.sg.
981\tprošedši\t\tadj.
5945\tprošlogodišnji, prošlogodišny\t\tadj.
11622\tprošloročny\t\tadj.
11623\tprošlosť\t\tf.sg.
11624\tprošly\t\tadj.
11626\tprošų\t\tintj.
34752\tprotagonist\t\tm.anim.
23915\tprotęga\t\tf.
23916\tprotęgati sę\t\tv.refl. ipf.
23917\tprotęgnųti sę\t\tv.refl. pf.
23619\tprotein\t\tm.
5419\tprotěkati\t\tv.intr. ipf.
5418\tprotekti\t\tv.intr. pf.
36491\tprotektorat\t\tm.
46\tprotest\t\tm.
361\tprotestant\t\tm.anim.
4609\tprotestant\t\tm.anim.
33729\tprotestantsky\t\tadj.
898\tprotestovati\t\tv.intr. ipf.
17016\tprotetičny\t\tadj.
17087\tproteza\t\tf.
22047\tprotęžeńje\t\tn.
22048\tprotęžny\t\tadj.
362\tprotiv\t\tprep.
5479\tprotivdějati\t\tv.intr. ipf.
1073\tprotivdějstvo\t\tn.sg.
2331\tprotiviti sę\t\tv.refl. ipf.
20666\tprotivlegly\t\tadj.
2881\tprotivnik\t\tm.anim.
4389\tprotivno\t\tadv.
17017\tprotivnosť\t\tf.
4388\tprotivny\t\tadj.
20667\tprotivpoloženy\t\tadj.
4206\tprotivpožarny\t\tadj.
36117\tprotivraketna obråna\t\tf.
21484\tprotivrěčiti\t\tv.intr. ipf.
23802\tprotivrěčnosť\t\tf.
23804\tprotivrěčny\t\tadj.
975\tprotokol\t\tm.
4657\tproton\t\tm.
34841\tprototip\t\tm.
34842\tprototipičny\t\tadj.
21485\tprotreti\t\tv.tr. pf.
18545\tprověriti\t\tv.tr. pf.
18544\tprověrjati\t\tv.tr. ipf.
36697\tprověrka\t\tf.
5506\tprovesti\t\tv.tr. pf.
18546\tprovesti\t\tv.tr. pf.
4623\tprovětriti\t\tv.tr. pf.
4624\tprovětrjati\t\tv.tr. ipf.
22427\tproviděńje\t\tn.
22428\tProviděńje\t\tn.
35466\tprovinciaľny\t\tadj.
1733\tprovincija\t\tf.
11645\tprovod\t\tm.
22255\tprovod\t\tm.
3279\tprovoditi\t\tv.tr. ipf.
3537\tprovoditi\t\tv.tr. ipf.
4230\tprovoditi\t\tv.intr. ipf.
11651\tprovodnik želěznice\t\tm.anim.
22256\tprovodnik\t\tm.anim.
22257\tprovodnik\t\tm.anim.
22258\tprovodnik\t\tm.
18548\tprovođati\t\tv.tr. ipf.
14950\tprovođeńje\t\tn.
18549\tprovođeńje\t\tn.
707\tprovokacija\t\tf.
175\tprovokatorsky\t\tadj.
4978\tprovokovati\t\tv.tr. ipf.
23921\tprovŕćati\t\tv.tr. ipf.
20094\tprovŕgati\t\tv.tr. ipf.
20095\tprovŕgnųti\t\tv.tr. pf.
23920\tprovŕtiti\t\tv.tr. pf.
20096\tproza\t\tf.
11656\tprozråčno\t\tadv.
6214\tprozråčnosť\t\tf.
6213\tprozråčny\t\tadj.
18551\tproživati\t\tv.intr. ipf.
1450\tpŕś\t\tf.
21486\tprskati\t\tv.intr. ipf.
21686\tprsknųti\t\tv.intr. pf.
1723\tpŕst\t\tm.
30033\tpŕstenj\t\tm.
21103\tprųga\t\tf.
35634\tPrusija\t\tf.sg.
16760\tprųt\t\tm.
3833\tprųžina\t\tf.
21105\tprųžiti\t\tv.tr. ipf.
21107\tprųžny\t\tadj.
18553\tpŕva světova vojna\t\tf.
16912\tpŕvak\t\tm.anim.
16913\tpŕvenstvo\t\tn.
18554\tpŕvěstȯk\t\tm.
20097\tpŕvo\t\tadv.
21488\tpŕvobraz\t\tm.
18555\tpŕvobytny\t\tadj.
10506\tpŕvonačęľno\t\tadv.
10508\tpŕvonačęľnosť\t\tf.
10509\tpŕvonačęľny\t\tadj.
22353\tpŕvorędny\t\tadj.
21489\tpŕvorodstvo\t\tn.sg.
18559\tpŕvotny\t\tadj.
20098\tpŕvovzor\t\tm.
3621\tpŕvy raz\t\tm.
1572\tpŕvy\t\tnum.ord.
18563\tpryšč\t\tm.
35977\tpsalm\t\tm.
35978\tpsaltyŕ\t\tm.
35406\tpsevdo-\t\tprefix
35407\tpsevdonauka\t\tf.
18564\tpsevdonim\t\tm.
33734\tpsica\t\tf.
20099\tpsihiatričny\t\tadj.
20100\tpsihičny\t\tadj.
16819\tpsiholog\t\tm.anim.
16820\tpsihologičny\t\tadj.
16818\tpsihologija\t\tf.sg.
16817\tpsihopat\t\tm.anim.
3264\tpsihopatičny\t\tadj.
36701\tpsihovati\t\tv.intr. ipf.
1224\tpšenica\t\tf.
15507\tptačę\t\tn.
14952\tptačji\t\tadj.
14951\tptak\t\tm.anim.
1111\tptica\t\tf.
4478\tptičji\t\tadj.
15508\tptička\t\tf.
36163\tpubertet\t\tm.
23991\tpubličny dom\t\tm.
1213\tpubličny\t\tadj.
18565\tpublika\t\tf.
4979\tpublikacija\t\tf.
1212\tpublikovati\t\tv.tr. ipf.
3250\tpuč\t\tm.
31813\tpuding\t\tm.
21108\tpųditi\t\tv.tr. ipf.
11669\tpuh\t\tm.
4773\tpuhnųti\t\tv.intr. ipf.
11670\tpuhovy\t\tadj.
32275\tpųhyŕ\t\tm.
30415\tpųkati\t\tv.intr. ipf.
30417\tpųknųti\t\tv.intr. pf.
36031\tpulover\t\tm.
21110\tpult\t\tm.
32475\tpuma\t\tf.
2095\tpunkt\t\tm.
23806\tpųp\t\tm.
18566\tpųpȯk\t\tm.
30041\tpurizm\t\tm.sg.
23765\tpurpur\t\tm.
30042\tpurpurny\t\tadj.
32541\tpustěti\t\tv.intr. ipf.
11676\t#pustina\t\tf.
18568\tpustiti\t\tv.tr. pf.
21119\tpustošiti\t\tv.tr. ipf.
1083\tpusty\t\tadj.
21121\tpusty\t\tadj.
2154\tpustynja\t\tf.
18570\tpustynnik\t\tm.anim.
18567\tpušćati\t\tv.tr. ipf.
14954\tpušiti\t\tv.tr. ipf.
16814\tpuška\t\tf.
2155\tpųť\t\tm./f.
18571\tpųť\t\tm./f.
4357\tpųtnik\t\tm.anim.
11681\tpųtovańje\t\tn.
5937\tpųtovatelj\t\tm.anim.
11685\tpųtovateljka\t\tf.
2156\tpųtovati\t\tv.intr. ipf.
4356\tpųtujųći\t\tm.anim.
2246\tpyl\t\tm.
10553\tpyliti\t\tv.intr. ipf.
23362\tpylȯk\t\tm.
6090\tpyšnosť\t\tf.
6091\tpyšny\t\tadj.
32559\tpytaľnik\t\tm.
32560\tpytaľny znak\t\tm.
5768\tpytańje\t\tn.
17021\tpytateljny zaimennik\t\tm.
5938\tpytati\t\tv.tr. ipf.
10592\tpytlivy\t\tadj.
21122\tpytlivy\t\tadj.
5331\tråb\t\tm.anim.
30047\trabarbara\t\tf.
30048\trabat\t\tm.
11987\tråbimy\t\tadj.
30050\trabin\t\tm.anim.
2955\tråbiti\t\tv.tr. ipf.
3701\tråbota\t\tf.
1250\tråbotati\t\tv.intr. ipf.
20101\tråbotči\t\tadj.
35374\tråbotna sila\t\tf.
30621\tråbotnica\t\tf.
19507\tråbotničsky\t\tadj.
11992\tråbotničstvo\t\tn.sg.
5332\tråbotnik\t\tm.anim.
30623\tråbotny\t\tadj.
18579\tråbotodatelj\t\tm.anim.
30051\tråbsky\t\tadj.
1080\tråbstvo\t\tn.sg.
30053\tråbynja\t\tf.
55\tracionalizacija\t\tf.
36351\tracionalizovany\t\tadj.
34862\tracionalizovati\t\tv.tr. ipf./pf.
36350\tracionalizovati\t\tv.tr. ipf./pf.
20102\tracionaľno\t\tadv.
16337\tracionaľny\t\tadj.
30056\trad\t\tadj.
4108\trada\t\tf.
2301\tradar\t\tm.
7209\tradca\t\tm.anim.
11697\traděje\t\tadv.
30057\tradi\t\tprep.
887\tradiacija\t\tf.
22636\tradij\t\tm.sg.
174\tradikaľny\t\tadj.
171\tradio\t\tn.
731\tradioaktivny\t\tadj.
23288\tradiolog\t\tm.anim.
23287\tradiologija\t\tf.sg.
22015\tradioskopija\t\tf.
36221\tradiotelevizijna korporacija\t\tf.
17022\tradiovy\t\tadj.
4109\traditi\t\tv.tr. ipf.
11702\tradničstvo\t\tn.sg.
3316\tradosť\t\tf.
11706\tradostno\t\tadv.
803\tradostny\t\tadj.
3455\tradovati sę\t\tv.refl. ipf.
30061\tradovati\t\tv.tr. ipf.
5179\trady\t\tadj.
32347\trafinerija\t\tf.
20103\trafinovany\t\tadj.
35540\trahunȯk\t\tm.
1496\traj\t\tm.
30064\trajsky\t\tadj.
18581\trak pustynnik\t\tm.anim.
18580\trak\t\tm.
30066\trak\t\tm.anim.
30067\tRak\t\tm.anim.
172\traketa\t\tf.
30075\tralo\t\tn.
5158\trama, ramka\t\tf.
16343\tramę\t\tn.
30077\tramenny\t\tadj.
18582\trana\t\tf.
14958\tranec\t\tm.
11716\tranečnik\t\tm.anim.
4061\traněje\t\tadv.
11719\trang\t\tm.
16072\trang\t\tm.
35562\tranimosť\t\tf.
35561\tranimy\t\tadj.
1381\traniti\t\tv.tr. ipf.
30079\tranji\t\tadj.
1383\trano\t\tadv.
4060\tranši\t\tadj.
517\trany\t\tadj.
902\traport\t\tm.
11725\trasa\t\tf.
23623\trasist\t\tm.anim.
23624\trasističny\t\tadj.
23622\trasizm\t\tm.sg.
11726\trasovo stereotipovańje\t\tn.
11727\trasovo unižeńje\t\tn.
11729\trasovy\t\tadj.
3684\tråst\t\tm.
21491\tråst\t\tm.
3037\tråsti\t\tv.intr. ipf.
6245\tråstlina\t\tf.
35508\tråstlinovod\t\tm.anim.
22947\tråstlinožerec\t\tm.anim.
22948\tråstlinožerny\t\tadj.
21493\tråstly\t\tadj.
23923\tråstȯk\t\tm.
1382\tratifikacija\t\tf.
1119\tratifikovati\t\tv.tr. ipf.
1118\tratuš\t\tm.
1331\traund\t\tm.
11737\tråvěsničska sěť\t\tf.
15509\tråvěsničsky\t\tadj.
30086\tråvěsnik\t\tm.anim.
12023\tråvnako\t\tadv.
21494\tråvnańje\t\tn.
2248\tråvnina\t\tf.
6059\tråvniti sę\t\tv.refl. ipf.
15511\tråvniti\t\tv.tr. ipf.
5860\tråvno kako\t\tconj.
3592\tråvno\t\tadv.
23205\tråvnoběžny\t\tadj.
18584\tråvnodenstvo\t\tn.
11740\tråvnodušnosť\t\tf.
21496\tråvnodušny\t\tadj.
18585\tråvnohalo\t\tn.
35148\tråvnoliko\t\tadv.
23780\tråvnoměrno\t\tadv.
20669\tråvnoměrnosť\t\tf.
20670\tråvnoměrny\t\tadj.
32281\tråvnonogy\t\tf.pl.
18586\tråvnopravnosť\t\tf.
18588\tråvnopravny\t\tadj.
30091\tråvnosť\t\tf.
21497\tråvnovaga\t\tf.
21499\tråvnověśje\t\tn.
12030\tråvnoznačnik\t\tm.
36134\tråvnoznačny\t\tadj.
1242\tråvny\t\tadj.
2239\tråvny\t\tadj.
3877\tråvny\t\tadj.
489\traz\t\tm.
11745\traz\t\tadv.
30100\tråzběgati sę\t\tv.refl. ipf.
30101\tråzběgati sę\t\tv.refl. ipf.
30103\tråzběgti sę\t\tv.refl. pf.
35356\tråzběsniti\t\tv.tr. pf.
35355\tråzběsnjati\t\tv.tr. ipf.
11748\tråzbirati\t\tv.tr. ipf.
16472\tråzbirati\t\tv.tr. ipf.
11750\tråzbiti\t\tv.tr. pf.
3473\tråzbity\t\tadj.
30104\tråzbivati\t\tv.tr. ipf.
20674\tråzboj\t\tm.
30116\tråzbojnica\t\tf.
20675\tråzbojnik\t\tm.anim.
30118\tråzbojny napad\t\tm.
34929\tråzbojny\t\tadj.
11752\tråzbolěti sę\t\tv.refl. pf.
33753\tråzbolěvati sę\t\tv.refl. ipf.
11753\tråzbor\t\tm.
11749\tråzbrati\t\tv.tr. pf.
16473\tråzbrati\t\tv.tr. pf.
3878\tråzbuditi\t\tv.tr. pf.
2295\tråzcvěsti\t\tv.intr. pf.
15372\tråzcvět\t\tm.
1103\tråzcvětati\t\tv.intr. ipf.
30131\tråzčesati\t\tv.tr. pf.
30134\tråzčistiti\t\tv.tr. pf.
33774\tråzčišćati\t\tv.tr. ipf.
30136\tråzčuliti\t\tv.tr. pf.
33777\tråzčuljati\t\tv.tr. ipf.
3675\tråzdati\t\tv.tr. pf.
3652\tråzdavati\t\tv.tr. ipf.
6053\tråzděl\t\tm.
595\tråzděliti\t\tv.tr. pf.
2249\tråzděljati\t\tv.tr. ipf.
33755\tråzděti sę\t\tv.refl. pf.
30143\tråzděti\t\tv.tr. pf.
33756\tråzděvati sę\t\tv.refl. ipf.
30145\tråzděvati\t\tv.tr. ipf.
30147\tråzdirańje\t\tn.
20104\tråzdirati\t\tv.tr. ipf.
30150\tråzdniti sę\t\tv.refl. pf.
33787\tråzdȯlbati\t\tv.tr. ipf.
30151\tråzdȯlbti\t\tv.tr. pf.
30152\tråzdor\t\tm.
23221\tråzdražlivosť\t\tf.
759\tråzdražlivy\t\tadj.
11771\tråzdražniti\t\tv.tr. pf.
11772\tråzdražnjati\t\tv.tr. ipf.
2409\tråzdražnjeńje\t\tn.
23799\tråzdražnjeno\t\tadv.
23797\tråzdražnjeny\t\tadj.
20105\tråzdreti\t\tv.tr. pf.
20106\tråzdrety\t\tadj.
30158\tråzdrobiti\t\tv.tr. pf.
30159\tråzdrobjati\t\tv.tr. ipf.
30160\tråzdrobjeńje\t\tn.
2847\tråzdųti\t\tv.tr. pf.
1558\tråzdųvati\t\tv.tr. ipf.
18592\tråzdvajati\t\tv.tr. ipf.
30165\tråzdvojeńje\t\tn.
18593\tråzdvojiti\t\tv.tr. pf.
30167\tråzgadati\t\tv.tr. pf.
33765\tråzgadyvati\t\tv.tr. ipf.
30168\tråzganjati\t\tv.tr. ipf.
30169\tråzgarjati sę\t\tv.refl. ipf.
30170\tråzgladiti\t\tv.tr. pf.
32662\tråzglađati\t\tv.tr. ipf.
18596\tråzglåsiti\t\tv.tr. pf.
18594\tråzglašati\t\tv.tr. ipf.
30174\tråzględ\t\tm.
5822\tråzględati sę\t\tv.refl. ipf.
11776\tråzględati\t\tv.tr. ipf.
5823\tråzględěti sę\t\tv.refl. pf.
11777\tråzględěti\t\tv.tr. pf.
30176\tråzgnati\t\tv.tr. pf.
23924\tråzgněvany\t\tadj.
2349\tråzgněvati\t\tv.tr. pf.
30180\tråzgon\t\tm.
30182\tråzgorěti sę\t\tv.refl. pf.
5426\tråzgovarjati\t\tv.intr. ipf.
720\tråzgovor\t\tm.
30184\tråzgovoriti sę\t\tv.refl. pf.
18598\tråzgovornik\t\tm.
32664\tråzgovorny język\t\tm.
30186\tråzgovorny\t\tadj.
30187\tråzgrabiti\t\tv.tr. pf.
30188\tråzgrabiti\t\tv.tr. pf.
30189\tråzgrabjati\t\tv.tr. ipf.
33921\tråzgrabjati\t\tv.tr. ipf.
30191\tråzgråditi\t\tv.tr. pf.
33820\tråzgrađati\t\tv.tr. pf.
33759\tråzgraničati\t\tv.tr. ipf.
30192\tråzgraničiti\t\tv.tr. pf.
30196\tråzgrěti\t\tv.tr. pf.
30197\tråzgrěvańje\t\tn.
30198\tråzgrěvati\t\tv.tr. ipf.
30200\tråzgrom\t\tm.
30201\tråzgromiti\t\tv.tr. pf.
30203\tråzgryzati\t\tv.tr. ipf.
30204\tråzgryzti\t\tv.tr. pf.
18600\tråzhod\t\tm.
5424\tråzhoditi sę\t\tv.refl. ipf.
30210\tråzhodny\t\tadj.
30214\tråzigrati sę\t\tv.refl. pf.
33792\tråzigrati\t\tv.tr. pf.
33796\tråzigryvati sę\t\tv.refl. ipf.
33794\tråzigryvati\t\tv.tr. ipf.
11787\tråziskati\t\tv.tr. pf.
18602\tråziskyvańje dȯlgoživosti\t\tn.
11788\tråziskyvańje\t\tn.
11789\tråziskyvatelj\t\tm.anim.
11790\tråziskyvati\t\tv.tr. ipf.
21503\traziteljny\t\tadj.
21505\traziti\t\tv.tr. ipf.
35358\tråzjariti\t\tv.tr. pf.
35357\tråzjarjati\t\tv.tr. ipf.
18605\tråzjasniti\t\tv.tr. pf.
18603\tråzjasnjati\t\tv.tr. ipf.
11791\tråzjebany\t\tadj.
4266\tråzjebati\t\tv.tr. pf.
11793\tråzjebyvati\t\tv.tr. ipf.
36908\tråzjedati\t\tv.tr. ipf.
30215\tråzjediniti\t\tv.tr. pf.
33824\tråzjedinjati\t\tv.tr. ipf.
33771\tråzjehati sę\t\tv.refl. pf.
36909\tråzjesti\t\tv.tr. pf.
30218\tråzježđati sę\t\tv.refl. ipf.
30219\tråzkajańje\t\tn.
30220\tråzkajati sę\t\tv.refl. pf.
30221\tråzkalati\t\tv.tr. ipf.
33887\tråzkaz\t\tm.
21507\tråzkazati\t\tv.tr. pf.
17023\tråzkaznik\t\tm.
36295\tråzkaznik\t\tm.anim.
20126\tråzkazyvati\t\tv.tr. ipf.
5532\tråzklad\t\tm.
5781\tråzklad\t\tm.
18607\tråzkladati\t\tv.tr. ipf.
32691\tråzkladati\t\tv.tr. ipf.
30233\tråzklåti\t\tv.tr. pf.
33828\tråzklejati\t\tv.tr. ipf.
30234\tråzklejiti\t\tv.tr. pf.
11797\tråzkodovati\t\tv.tr. ipf.
30237\tråzkol\t\tm.
30238\tråzkopati\t\tv.tr. pf.
33829\tråzkopyvati\t\tv.tr. ipf.
30239\tråzkoš\t\tf.
30240\tråzkoš\t\tf.
30242\tråzkošny\t\tadj.
30243\tråzkošny\t\tadj.
30244\tråzkovati\t\tv.tr. pf.
33868\tråzkovyvati\t\tv.tr. ipf.
33866\tråzkrajati\t\tv.tr. ipf.
30247\tråzkričati sę\t\tv.refl. pf.
30251\tråzkrojiti\t\tv.tr. pf.
30253\tråzkrȯšiti\t\tv.tr. pf.
33855\tråzkrųćati sę\t\tv.tr. ipf.
33853\tråzkrųćati\t\tv.tr. ipf.
33852\tråzkrųtiti sę\t\tv.tr. pf.
30254\tråzkrųtiti\t\tv.tr. pf.
30256\tråzkryti\t\tv.tr. pf.
30257\tråzkryťje\t\tn.
30258\tråzkryvati\t\tv.tr. ipf.
36412\tråzkvartirovańje\t\tn.sg.
36411\tråzkvartirovati\t\tv.tr. pf.
24162\tråzkvartirovyvati\t\tv.tr. ipf.
30226\tråzkydati\t\tv.tr. pf.
33826\tråzkydyvati\t\tv.tr. ipf.
30261\tråzlad\t\tm.
33836\tråzladiti\t\tv.tr. pf.
33840\tråzlađati\t\tv.tr. ipf.
30263\tråzlagati\t\tv.tr. ipf.
32692\tråzlagati\t\tv.tr. ipf.
30264\tråzlajati sę\t\tv.refl. pf.
5589\tråzlamyvati\t\tv.tr. ipf.
20677\tråzlegati sę\t\tv.refl. ipf.
20678\tråzlegti sę\t\tv.refl. pf.
30269\tråzlěniti sę\t\tv.refl. pf.
30270\tråzlětati sę\t\tv.refl. ipf.
30271\tråzletěti sę\t\tv.refl. pf.
17024\tråzličajųći čislovnik\t\tm.
4695\tråzličati sę\t\tv.refl. ipf.
11804\tråzličati\t\tv.tr. ipf.
20107\tråzličeńje\t\tn.
30276\tråzličiti\t\tv.tr. pf.
27\tråzličje\t\tn.
11802\tråzličnosť\t\tf.
2211\tråzličny\t\tadj.
14963\tråzlika\t\tf.
14964\tråzlikovati sę\t\tv.refl. ipf.
30278\tråzliti\t\tv.tr. pf.
30279\tråzliťje\t\tn.
30280\tråzliv\t\tm.
30282\tråzlivati\t\tv.tr. ipf.
14965\tråzlog\t\tm.
30286\tråzlom\t\tm.
4615\tråzlomiti\t\tv.tr. pf.
36217\tråzložeńje klaviatury\t\tn.
18608\tråzložiti\t\tv.tr. pf.
30231\tråzložiti\t\tv.tr. pf.
20108\tråzlųčati\t\tv.tr. ipf.
30290\tråzlųčeńje\t\tn.
20109\tråzlųčiti\t\tv.tr. pf.
30292\tråzlųčnik\t\tm.anim.
30293\tråzlųka\t\tf.
11807\tråzmah krila\t\tn.
20681\tråzmah\t\tm.
30298\tråzmazati\t\tv.tr. pf.
33894\tråzmazyvati\t\tv.tr. ipf.
30300\tråzmękčati\t\tv.tr. ipf.
30301\tråzmękčiti\t\tv.tr. pf.
3596\tråzměna\t\tf.
17\tråzměniti\t\tv.tr. pf.
324\tråzměnjati\t\tv.tr. ipf.
36\tråzměr\t\tm.
30308\tråzměriti\t\tv.tr. pf.
30309\tråzměrjati\t\tv.tr. ipf.
30317\tråzmesti\t\tv.tr. pf.
128\tråzměstiti\t\tv.tr. pf.
5973\tråzměšany\t\tadj.
23250\tråzměšany\t\tadj.
1041\tråzměšati\t\tv.tr. pf.
12376\tråzměšati\t\tv.tr. pf.
1262\tråzměšćati\t\tv.tr. ipf.
11817\tråzměšćeńje\t\tn.
3004\tråzměšivati\t\tv.tr. ipf.
16898\tråzměšivati\t\tv.tr. ipf.
30315\tråzmětati\t\tv.tr. ipf.
30316\tråzmetati\t\tv.tr. pf.
32245\tråzmęti\t\tv.tr. pf.
32599\tråzmetyvati\t\tv.tr. ipf.
33900\tråzminovati sę\t\tv.refl. ipf.
30318\tråzminųti sę\t\tv.refl. pf.
30320\tråzmlåtiti\t\tv.tr. pf.
30321\tråzmlěti\t\tv.tr. pf.
23626\tråzmnažańje\t\tn.
33291\tråzmnažati sę\t\tv.refl. ipf.
30322\tråzmnažati\t\tv.tr. ipf.
30323\tråzmnožeńje\t\tn.
33293\tråzmnožiti sę\t\tv.refl. pf.
30324\tråzmnožiti\t\tv.tr. pf.
30326\tråzmokati\t\tv.intr. ipf.
30327\tråzmoknųti\t\tv.intr. pf.
5633\tråzmontovati\t\tv.tr. pf.
30329\tråzmotati\t\tv.tr. pf.
23065\tråzmråziti\t\tv.tr. pf.
23066\tråzmražati\t\tv.tr. ipf.
5046\tråzmysliti\t\tv.tr. pf.
11827\tråzmysljańje\t\tn.
3348\tråzmysljati\t\tv.tr. ipf.
20112\tråzmysljeńje\t\tn.
30337\tråzmyti\t\tv.tr. pf.
30338\tråzmyvati\t\tv.tr. ipf.
20686\tråznesti sę\t\tv.refl. pf.
5501\tråznesti\t\tv.tr. pf.
11834\tråznica\t\tf.
30345\tråzniti sę\t\tv.refl. ipf.
21508\tråznorodnosť\t\tf.
21509\tråznorodny\t\tadj.
30349\tråznos\t\tm.
20687\tråznositi sę\t\tv.refl. ipf.
5499\tråznositi\t\tv.tr. ipf.
2034\tråzny\t\tadj.
41\tråzočarovańje\t\tn.
5900\tråzočarovany\t\tadj.
5898\tråzočarovati\t\tv.tr. pf.
5899\tråzočarovyvati\t\tv.tr. ipf.
35645\tråzȯjdti sę\t\tv.refl. pf.
14960\trazȯm\t\tadv.
21510\trazȯm\t\tadv.
30357\tråzorati\t\tv.tr. pf.
30359\tråzoriti\t\tv.tr. pf.
33803\tråzorjati\t\tv.tr. ipf.
30358\tråzorjeńje\t\tn.
23010\tråzorųžati\t\tv.tr. ipf.
6240\tråzorųžeńje\t\tn.
23009\tråzorųžiti\t\tv.tr. pf.
20114\tråzpad\t\tm.
2271\tråzpadati sę\t\tv.refl. ipf.
18610\tråzpakovati\t\tv.tr. pf.
18612\tråzpakovyvati\t\tv.tr. ipf.
30374\tråzpaliti sę\t\tv.refl. pf.
30370\tråzpaliti\t\tv.tr. pf.
33934\tråzpaljati sę\t\tv.refl. ipf.
33930\tråzpaljati\t\tv.tr. ipf.
30377\tråzparjati\t\tv.tr. ipf.
2050\tråzpasti sę\t\tv.refl. pf.
30379\tråzpěniti\t\tv.intr. pf.
30381\tråzpęti na križ\t\tv.tr. pf.
30380\tråzpęti\t\tv.tr. pf.
33944\tråzpęti\t\tv.tr. pf.
21124\tråzpęťje\t\tn.
21125\tråzpęťje\t\tn.
33952\tråzpinati na križ\t\tv.tr. ipf.
33947\tråzpinati\t\tv.tr. ipf.
33950\tråzpinati\t\tv.tr. ipf.
34338\tråzplesti\t\tv.tr. pf.
34334\tråzpletati\t\tv.tr. ipf.
34905\tråzplyvati sę\t\tv.refl. ipf.
34906\tråzplyvti sę\t\tv.refl. pf.
20839\tråzpoložeńje\t\tn.
30389\tråzpoložeńje\t\tn.
2914\tråzpor\t\tm.
23927\tråzporęditi\t\tv.tr. pf.
23929\tråzporęđati\t\tv.tr. ipf.
22363\tråzporęđeńje\t\tn.
22364\tråzporęđeńje\t\tn.
22883\tråzpoznańje\t\tn.
11844\tråzpoznati\t\tv.tr. pf.
22882\tråzpoznati\t\tv.tr. pf.
36455\tråzpoznavajemosť\t\tf.sg.
36454\tråzpoznavajemy\t\tv.tr. ipf.
30398\tråzpoznavańje\t\tn.
11845\tråzpoznavati\t\tv.tr. ipf.
22880\tråzpoznavati\t\tv.tr. ipf.
33955\tråzprašati\t\tv.tr. ipf.
33954\tråzpråšiti\t\tv.tr. pf.
30401\tråzpråti\t\tv.tr. pf.
21129\tråzprava\t\tf.
21130\tråzprava\t\tf.
23069\tråzprava\t\tf.
21126\tråzprja\t\tf.
32671\tråzprodati\t\tv.tr. pf.
30404\tråzprodavati\t\tv.tr. ipf.
30406\tråzprostirati sę\t\tv.refl. ipf.
21892\tråzprostirati\t\tv.tr. ipf.
33907\tråzprostråniti sę\t\tv.refl. pf.
20123\tråzprostråniti\t\tv.tr. pf.
33908\tråzprostranjati sę\t\tv.refl. ipf.
20117\tråzprostranjati\t\tv.tr. ipf.
20120\tråzprostrånjeńje\t\tn.
20122\tråzprostrånjeny\t\tadj.
21893\tråzprostrěti\t\tv.tr. pf.
30416\tråzpųklina\t\tf.
1887\tråzpustiti\t\tv.tr. pf.
21139\tråzpustiti\t\tv.tr. pf.
21141\tråzpustiti\t\tv.tr. pf.
2362\tråzpušćati\t\tv.tr. ipf.
21134\tråzpušćati\t\tv.tr. ipf.
21136\tråzpušćati\t\tv.tr. ipf.
3564\tråzpušćeńje\t\tn.
3530\tråzpųťje\t\tn.
5989\tråzpytati\t\tv.tr. pf.
11851\tråzpytyvańje\t\tn.
5988\tråzpytyvati\t\tv.tr. ipf.
5144\tråzråbotati\t\tv.tr. pf.
5543\tråzråbotyvati\t\tv.tr. ipf.
11855\tråzradovati\t\tv.tr. pf.
30426\tråzrastańje\t\tn.
30427\tråzrastati sę\t\tv.refl. ipf.
30428\tråzråsti sę\t\tv.refl. pf.
18618\tråzråzniti\t\tv.tr. pf.
18617\tråzraznjati\t\tv.tr. ipf.
22362\tråzręd\t\tm.
18619\tråzrěšati\t\tv.tr. ipf.
17025\tråzrěšeńje\t\tn.
18621\tråzrěšiti\t\tv.tr. pf.
30432\tråzrěz\t\tm.
30434\tråzrězati\t\tv.tr. pf.
18623\tråzrųbati\t\tv.tr. pf.
18625\tråzrųbyvati\t\tv.tr. ipf.
30439\tråzruměniti sę\t\tv.refl. pf.
4777\tråzrušati\t\tv.tr. ipf.
14967\tråzrušeńje\t\tn.
30441\tråzrušitelj\t\tm.
3553\tråzrušiti\t\tv.tr. pf.
14968\tråzrušnosť\t\tf.
30443\tråzrvati\t\tv.tr. pf.
30444\tråzryti\t\tv.tr. pf.
30445\tråzryv\t\tm.
30446\tråzryvati\t\tv.tr. ipf.
30447\tråzryvati\t\tv.tr. ipf.
11858\tråzsada\t\tf.
30449\tråzsaditi\t\tv.tr. pf.
30450\tråzsadnik\t\tm.
30451\tråzsađati\t\tv.tr. ipf.
30135\tråzsčitati\t\tv.tr. pf.
35903\tråzsčityvati\t\tv.tr. ipf.
30453\tråzsedlati\t\tv.tr. pf.
34000\tråzsedlyvati\t\tv.tr. ipf.
36751\tråzsějany professor\t\tm.anim.
36750\tråzsějany\t\tadj.
33244\tråzsějati\t\tv.tr. pf.
33242\tråzsějivati\t\tv.tr. ipf.
21517\tråzselina\t\tf.
30361\tråzslati\t\tv.tr. pf.
6236\tråzslěditi\t\tv.tr. pf.
6235\tråzslědovańje\t\tn.
6234\tråzslědovati\t\tv.tr. ipf.
34013\tråzsmatrjati\t\tv.tr. pf.
30462\tråzsmějati sę\t\tv.refl. pf.
4055\tråzsměliti\t\tv.tr. pf.
4059\tråzsměljati\t\tv.tr. ipf.
23930\tråzsměšati\t\tv.tr. ipf.
23931\tråzsměšiti\t\tv.tr. pf.
30464\tråzsmotriti\t\tv.tr. pf.
18627\tråzsŕditi\t\tv.tr. pf.
21780\tråzstati sę\t\tv.refl. pf.
21778\tråzstavati sę\t\tv.refl. ipf.
5632\tråzstaviti\t\tv.tr. pf.
21787\tråzstaviti\t\tv.tr. pf.
5631\tråzstavjati\t\tv.tr. ipf.
21784\tråzstavjati\t\tv.tr. ipf.
5630\tråzstavjeńje\t\tn.
33449\tråzsteliti\t\tv.tr. pf.
33452\t#råzstlati\t\tv.tr. pf.
21782\tråzstojańje\t\tn.
21913\tråzstrajati\t\tv.tr. ipf.
30476\tråzstrěl\t\tm.
34016\tråzstrěliti\t\tv.tr. pf.
30477\tråzstrěljati\t\tv.tr. ipf.
30480\tråzstroj\t\tm.
21918\tråzstrojiti\t\tv.tr. pf.
36194\tråzstrojstvo\t\tn.
23933\tråzsųditi\t\tv.intr. pf.
3311\tråzsųdny\t\tadj.
3312\tråzsųdȯk\t\tm.sg.
22011\tråzsųdȯk\t\tm.sg.
34021\tråzsųđati\t\tv.intr. ipf.
11868\tråzsųđeńje\t\tn.
22016\tråzsvět\t\tm.
21687\tråzsvětliti sę\t\tv.refl. pf.
21519\tråzsvětljati sę\t\tv.refl. ipf.
30499\tråzsvirěpěti\t\tv.intr. pf.
30517\tråzsylati\t\tv.tr. ipf.
30518\tråzsylka\t\tf.
22001\tråzsyp\t\tm.
11859\tråzsypany\t\tadj.
1149\tråzsypati\t\tv.tr. pf.
1866\tråzsypyvati\t\tv.tr. ipf.
30504\tråzščep\t\tm.
30505\tråzščepiti\t\tv.tr. pf.
30506\tråzščepjati\t\tv.tr. ipf.
11871\tråzšifrovati\t\tv.tr. ipf.
11877\tråzširiti sę\t\tv.refl. pf.
1162\tråzširiti\t\tv.tr. pf.
36388\tråzširjati sę\t\tv.refl. ipf.
587\tråzširjati\t\tv.tr. ipf.
3601\tråzširjeńje\t\tn.
11873\tråzširjeny\t\tadj.
23484\tråzšnurovati\t\tv.tr. pf.
23483\tråzšnurovyvati\t\tv.tr. ipf.
30522\tråztajati\t\tv.tr. pf.
30523\tråztapjati\t\tv.tr. ipf.
3025\tråztęgati sę\t\tv.refl. ipf.
30525\tråztęgati\t\tv.tr. ipf.
1290\tråztęgnųti sę\t\tv.refl. pf.
30526\tråztęgnųti\t\tv.tr. pf.
30527\tråztěkati sę\t\tv.refl. ipf.
30528\tråztekti sę\t\tv.refl. pf.
30530\tråztirati\t\tv.tr. ipf.
33461\tråztȯlkati\t\tv.tr. ipf.
30536\tråztȯlkti\t\tv.tr. pf.
30537\tråztȯlstěti\t\tv.intr. pf.
817\tråztopiti\t\tv.tr. pf.
30539\tråztȯptati\t\tv.tr. pf.
34038\tråztȯptyvati\t\tv.tr. ipf.
16768\tråztraćati\t\tv.tr. ipf.
30541\tråztrata\t\tf.
34041\tråztrata\t\tf.
16771\tråztratiti\t\tv.tr. pf.
30546\tråztrěskati\t\tv.tr. ipf.
30547\tråztrěsknųti\t\tv.tr. pf.
30549\tråztreti\t\tv.tr. pf.
30550\tråztrgati\t\tv.tr. ipf.
30551\tråztrgnųti\t\tv.tr. pf.
17026\tråztrojiti\t\tv.tr. pf.
23426\tråztrųbiti\t\tv.tr. pf.
22153\tråztvarjati\t\tv.tr. ipf.
22155\tråztvor\t\tm.
22154\tråztvoriti\t\tv.tr. pf.
657\tråzum\t\tm.
30562\tråzuměje sę\t\tphrase
4347\tråzumějemo\t\tadv.
4348\tråzumějemosť\t\tf.
4346\tråzumějemy\t\tadj.
23071\tråzuměńje\t\tn.
2102\tråzuměti\t\tv.tr. ipf.
11894\tråzumlivo\t\tadv.
11895\tråzumlivosť\t\tf.
11896\tråzumlivy\t\tadj.
30566\tråzumnica\t\tf.
30567\tråzumnik\t\tm.anim.
3807\tråzumno\t\tadv.
11914\tråzumno\t\tadv.
4169\tråzumnosť\t\tf.
4167\tråzumny\t\tadj.
11915\tråzumny\t\tadj.
4166\tråzumovati\t\tv.intr. ipf.
30570\tråzuti sę\t\tv.refl. pf.
30571\tråzuvati sę\t\tv.refl. ipf.
22188\tråzvaliny\t\tf.pl.
30575\tråzvaliti sę\t\tv.refl. pf.
34056\tråzvaliti sę\t\tv.refl. pf.
34050\tråzvaliti\t\tv.tr. pf.
34051\tråzvaliti\t\tv.tr. pf.
34058\tråzvaljati sę\t\tv.refl. ipf.
34060\tråzvaljati sę\t\tv.refl. ipf.
34052\tråzvaljati\t\tv.tr. ipf.
34053\tråzvaljati\t\tv.tr. ipf.
35114\tråzvažańje\t\tn.
6010\tråzvažati\t\tv.tr. ipf.
6011\tråzvažiti\t\tv.tr. pf.
30576\tråzvědati\t\tv.tr. pf.
3255\tråzvědka\t\tf.
34034\tråzvědyvati\t\tv.tr. ipf.
30580\tråzveseliti\t\tv.tr. pf.
30581\tråzveseljati\t\tv.tr. ipf.
22264\tråzvesti sę\t\tv.refl. pf.
5507\tråzvesti\t\tv.tr. pf.
35506\tråzvesti\t\tv.tr. pf.
22198\tråzvęzati\t\tv.tr. pf.
30582\tråzvezti\t\tv.tr. pf.
22199\tråzvęzyvati\t\tv.tr. ipf.
23554\tråzviti sę\t\tv.refl. pf.
1282\tråzviti\t\tv.tr. pf.
30584\tråzviti\t\tv.tr. pf.
5100\tråzviťje\t\tn.
11909\tråzvivajųći\t\tadj.
2318\tråzvivańje\t\tn.
23553\tråzvivati sę\t\tv.refl. ipf.
2101\tråzvivati\t\tv.tr. ipf.
30583\tråzvivati\t\tv.tr. ipf.
22262\tråzvod\t\tm.
22263\tråzvoditi sę\t\tv.refl. ipf.
3565\tråzvoditi\t\tv.tr. ipf.
35505\tråzvoditi\t\tv.tr. ipf.
22552\tråzvoďje\t\tn.
30586\tråzvodny\t\tadj.
18631\tråzvoj\t\tm.
34062\tråzvoziti\t\tv.tr. ipf.
22703\tråzvråt\t\tm.
22708\tråzvråt\t\tm.
22713\tråzvråtnica\t\tf.
22709\tråzvråtnik\t\tm.anim.
22712\tråzvråtnosť\t\tf.
14832\tråzvråtny\t\tadj.
30590\tråžen\t\tm.
30593\tråzžegti\t\tv.tr. pf.
22966\tråzžerati\t\tv.tr. ipf.
32646\tråzžigati\t\tv.tr. ipf.
22970\tråzžrěti\t\tv.tr. pf.
30594\tråzžuvati\t\tv.tr. pf.
25365\trdest\t\tm.
1235\trđa\t\tf.
3828\trđavy\t\tadj.
3803\treagovati\t\tv.intr. ipf.
712\treakcija\t\tf.
6093\treaktor\t\tm.
35080\trealist\t\tm.anim.
35082\trealističny\t\tadj.
3102\trealizacija\t\tf.
35081\trealizm\t\tm.sg.
4980\trealizovati\t\tv.tr. ipf.
16077\treaľnosť\t\tf.
2216\treaľny\t\tadj.
1045\trebro\t\tn.
1046\trecept\t\tm.
1999\trecesija\t\tf.
2196\trěč\t\tf.
11984\trěč\t\tf.
3758\trěčeńje\t\tn.
14973\trěčnik\t\tm.
2283\tręd\t\tm.
3798\tręd\t\tm.
22350\tręd\t\tm.
36016\tręd\t\tm.
20690\tredagovati\t\tv.tr. ipf.
4859\tredakcija\t\tf.
18633\tredakcijny\t\tadj.
4858\tredaktor\t\tm.anim.
4860\tredaktovati\t\tv.tr. ipf.
20128\trědko\t\tadv.
23778\trědkosť\t\tf.
23766\tredkȯvka\t\tf.
2272\trědky\t\tadj.
11927\trędnosť\t\tf.
17027\trędny\t\tadj.
36143\trędȯk\t\tm.
36025\trędovy\t\tm.anim.
30601\tredukcija\t\tf.
5644\tredukovati\t\tv.tr. ipf.
17028\treferencija\t\tf.
2197\treferendum\t\tm.
17029\trefleksivny zaimennik\t\tm.
1243\treforma\t\tf.
4981\treformacija\t\tf.
4848\treformovati\t\tv.tr. ipf.
1279\trefren\t\tm.
34875\trefundacija\t\tf.
3048\tregion\t\tm.
2973\tregionaľny\t\tadj.
4982\tregistracija\t\tf.
36299\tregistracijna tablica\t\tf.
36298\tregistracijny znak\t\tm.
2140\tregistrovati\t\tv.tr. ipf.
20130\tregresija\t\tf.
17030\tregularizacija\t\tf.
23775\tregularno\t\tadv.
5672\tregularnosť\t\tf.
5671\tregularny\t\tadj.
20131\tregulator ritma sŕdca\t\tm.
20691\tregulovati\t\tv.tr. ipf.
36887\tRejn\t\tm.sg.
2285\trěka\t\tf.
3422\treklama\t\tf.
30605\treklamacija\t\tf.
11941\treklamny\t\tadj.
11942\treklamodatelj\t\tm.anim.
11939\treklamovańje\t\tn.
3421\treklamovati\t\tv.tr. ipf.
35212\trekomendacija\t\tf.
5126\trekomendovati\t\tv.tr. ipf./pf.
4874\trekonstrukcija\t\tf.
2332\trekonstruovati\t\tv.tr. ipf.
1241\trekord\t\tm.
1550\trekreacija\t\tf.
5014\trěkti\t\tv.tr. ipf.
35770\trektor\t\tm.anim.
33697\trekviem\t\tm.
17031\trelativny zaimennik\t\tm.
1074\treligija\t\tf.
88\treligiozny\t\tadj.
30608\trelikt\t\tm.
32289\trelikvija\t\tf.
18634\tremenj\t\tm.
3233\tremesľnik\t\tm.anim.
1566\tremeslo\t\tn.
33724\tremont\t\tm.
1519\tremontovati\t\tv.tr. ipf.
36227\trenegat\t\tm.anim.
2949\trenesansa\t\tf.
23285\trentgenovy luč\t\tm.
23286\trentgenovy snimȯk\t\tm.
35185\treorganizacija\t\tf.
35184\treorganizovati\t\tv.tr. ipf./pf.
14974\trěpa\t\tf.
36379\trěpa\t\tf.
36078\trěpka\t\tf.
36333\treplika\t\tf.
6300\trepresija\t\tf.
19508\treprezentovati\t\tv.tr. ipf.
20132\treprodukovati\t\tv.tr. ipf.
2945\trepublika\t\tf.
35519\trepublikanec\t\tm.anim.
35520\trepublikansky\t\tadj.
21522\treputacija\t\tf.
18639\tręsa\t\tf.
35737\trespekt\t\tm.sg.
30610\trestavracija\t\tf.
34930\trestavrovati\t\tv.tr. ipf./pf.
30611\trestoran\t\tm.
1759\tresurs\t\tm.
11952\trěšajųći\t\tadj.
2338\trěšati\t\tv.tr. ipf.
11954\trěšati\t\tv.tr. ipf.
1238\trěšeńje\t\tn.
11957\trěšeńje\t\tn.
18635\trěšeny\t\tadj.
23777\trěšiteljno\t\tadv.
35522\trěšiteljnosť\t\tf.
11955\trěšiteljny\t\tadj.
1256\trěšiti\t\tv.tr. pf.
11960\trěšiti\t\tv.tr. pf.
1251\trešta\t\tf.
20692\tretoromansky\t\tadj.
36505\trev\t\tm.
36521\trevanš\t\tm.
30612\trevenj\t\tm.
35433\treverans\t\tm.
4074\trevidovati\t\tv.tr. ipf.
4077\trevizija\t\tf.
23768\trevmatičny\t\tadj.
23767\trevmatizm\t\tm.sg.
1945\trevnivosť\t\tf.
1668\trevnivy\t\tadj.
2860\trevolucija\t\tf.
11966\trevolucijna boŕba\t\tf.
11967\trevolucijna gvardija\t\tf.
14975\trevolucijnizm\t\tm.sg.
11969\trevolucijnosť\t\tf.
4078\trevolucijny\t\tadj.
3266\trevolucioner\t\tm.anim.
36503\trevti\t\tv.intr. ipf.
3397\trězati\t\tv.tr. ipf.
1244\trezerva\t\tf.
35860\trezervacija\t\tf.
35861\trezervat\t\tm.
35858\trezervovati\t\tv.tr. ipf.
18637\trezjume\t\tn.indecl.
35521\trezolucija\t\tf.
1259\trezultat\t\tm.
3023\trezumovati\t\tv.tr. ipf.
2123\trežim\t\tm.
3741\trežim\t\tm.
35752\trežiser\t\tm.anim.
23525\tRim\t\tm.sg.
23524\tRimska imperija\t\tf.sg.
18640\trimskokatoličsky\t\tadj.
838\trimsky\t\tadj.
11979\triť\t\tf.
20133\tritm\t\tm.
32240\tritmičny\t\tadj.
36127\tritual\t\tm.
36128\trituaľny\t\tadj.
14978\trizično\t\tadv.
1253\trizičny\t\tadj.
1254\trizik\t\tm.
1366\trizikovati\t\tv.tr. ipf.
3948\trobot\t\tm.
18641\tročnica\t\tf.
11995\tročno\t\tadv.
11996\tročny\t\tadj.
1246\trod\t\tm.
3222\trod\t\tm.
11998\trod\t\tm.
21523\trod\t\tm.
20134\trodimy\t\tadj.
4690\trodina\t\tf.
1947\troditelj\t\tm.anim.
1946\troditeljnik, roditeljny padež\t\tm.
36241\troditeljsky\t\tadj.
2198\troditi sę\t\tv.refl. ipf.
2325\troditi\t\tv.tr. ipf.
5184\trodna nazva\t\tf.
20693\trodny\t\tadj.
6097\trodobijstvo\t\tn.sg.
21142\trodopis\t\tm.sg.
21143\trodopisec\t\tm.anim.
21526\trodoslovje\t\tn.
36378\trodoslovje\t\tn.
2122\trodstveny\t\tadj.
12010\trodstvo\t\tn.sg.
12001\trođeńje\t\tn.
18644\tRođeńje\t\tn.
2207\trođeny\t\tadj.
400\trog\t\tm.
36806\trogaty\t\tadj.
33966\troj\t\tm.
34355\trojiti sę\t\tv.refl. ipf.
12014\trok\t\tm.
18647\trokada\t\tf.
31863\trokenrol\t\tm.sg.
18648\trokirovati\t\tv.intr. ipf./pf.
23628\trok-muzika\t\tf.
2063\trolja\t\tf.
35283\troljeva igra\t\tf.
23601\troman\t\tm.
4735\tromansky\t\tadj.
1240\tromanš\t\tm.sg.
2182\tromantičny\t\tadj.
34931\tRomantizm\t\tm.sg.
36174\tromb\t\tm.
18649\troptańje\t\tn.sg.
18651\troptati\t\tv.intr. ipf.
36658\tropuha\t\tf.
18653\trosa\t\tf.
1044\tRosija\t\tf.sg.
30630\tRosijska Federacija\t\tf.sg.
3036\trosijsky\t\tadj.
26\trotacija\t\tf.
12022\trov\t\tm.
149\troza\t\tf.
30632\trozga\t\tf.
5268\trozovy\t\tadj.
12035\troževy\t\tadj.
22633\trtųť\t\tf.sg.
18657\trųbati\t\tv.tr. ipf.
23467\trubin\t\tm.
32081\trublj\t\tm.
5845\trųčiti sę\t\tv.refl. pf.
21528\trųčka\t\tf.
21529\trųčka\t\tf.
18660\trųčnik\t\tm.
18661\trųčno\t\tadv.
18662\trųčny\t\tadj.
5640\truda\t\tf.
35209\trudimentarny\t\tadj.
36777\trudnik\t\tm.
32675\trudy\t\tadj.
3186\truh\t\tm.
20135\truina\t\tf.
20136\truinovati\t\tv.tr. ipf.
12039\trujenj\t\tm.sg.
34176\trųka v rųkě\t\tadv.
2357\trųka\t\tf.
21531\trųkav\t\tm.
21532\trųkav\t\tm.
18664\trųkavica\t\tf.
21533\trųkoděľstvo\t\tn.sg.
18667\trųkojęť\t\tf.
16412\trųkopis\t\tm.
18669\trųkopleskańje\t\tn.sg.
18670\trųkopleskati\t\tv.intr. ipf.
18672\trųkoplesknųti\t\tv.intr. pf.
20694\trųkopoložeńje\t\tn.
5891\trųkovati\t\tv.tr. ipf.
3696\trųkovoditelj\t\tm.anim.
18675\trųkovoditi\t\tv.tr. ipf.
3697\trųkovodstvo\t\tn.
18666\trųky do gory!\t\tphrase
7812\trukzak\t\tm.
33404\truletka\t\tf.
4646\trum\t\tm.
23890\truměnec\t\tm.
33919\truměněti\t\tv.intr. ipf.
370\tRumunija\t\tf.sg.
4433\trumunsky\t\tadj.
36648\truna\t\tf.
33397\truno\t\tn.
1269\tRus\t\tm.anim.
35346\trusifikacija\t\tf.
35347\trusifikovati\t\tv.tr. ipf./pf.
1272\trusinsky\t\tadj.
2311\trussky\t\tadj.
32674\trusy\t\tadj.
21536\trušiti\t\tv.tr. ipf.
20137\trutensky\t\tadj.
32067\trutina\t\tf.
32069\trutinny\t\tadj.
36531\truž\t\tm.
21539\trvati sę\t\tv.refl. ipf.
21537\trvati\t\tv.tr. ipf.
21538\trvati\t\tv.tr. ipf.
1682\tryba\t\tf.
2339\trybak\t\tm.anim.
12059\trybaŕ\t\tm.anim.
2304\trybnik\t\tm.
27310\trybolov\t\tm.
12058\trybolovstvo\t\tn.sg.
30648\tRyby\t\tf.pl.
12062\trycaŕ\t\tm.anim.
18676\trydati\t\tv.intr. ipf.
30650\tryđi\t\tadj.
34356\trygati\t\tv.intr. ipf.
34358\trygnųti\t\tv.intr. pf.
34360\trylo\t\tn.
32131\tryma\t\tf.
32133\trymovati sę\t\tv.refl. ipf.
32132\trymovati\t\tv.tr. ipf.
1252\tryś\t\tm.anim.
21542\trysovanka\t\tf.
3568\trysovati\t\tv.tr. ipf.
33969\tryti\t\tv.intr. ipf.
3821\tryž\t\tm.sg.
5827\ts izključeńjem\t\tprep.
4947\ts obzirȯm na\t\tprep.
1267\ts pomoćjų\t\tprep.
12070\ts prijemnosťjų\t\tintj.
1280\ts, so\t\tprep.
2061\ts, so\t\tprep.
35960\tsablja\t\tf.
35961\tsabljevańje\t\tn.sg.
2157\tsad\t\tm.
12075\tsaditi\t\tv.tr. ipf.
34405\tsadovnik\t\tm.anim.
18761\tsađa\t\tf.
36540\tsafari\t\tn.
21548\tSahara\t\tf.sg.
30653\tsajt\t\tm.
36155\tsako\t\tn.
35130\tsakraľny\t\tadj.
35829\tsakristija\t\tf.
23453\tsaksofon\t\tm.
35633\tSaksonija\t\tf.sg.
269\tsala\t\tf.
32183\tsalata\t\tf.
20723\tsalo\t\tn.
5719\tsalon\t\tm.
22466\tSalvador\t\tm.sg.
22467\tsalvadorsky\t\tadj.
2219\tsam\t\tpron.pers.
5253\tsamec\t\tm.anim.
5222\tsamica\t\tf.
169\tsamit\t\tm.
20170\tsamo\t\tadv.
35502\tsamo-\t\tprefix
12084\tsamoanaliza\t\tf.
18769\tsamobytny\t\tadj.
35149\tsamodostatȯčnosť\t\tf.
35150\tsamodostatȯčny\t\tadj.
18771\tsamodŕžec\t\tm.anim.
16490\tsamoglåska\t\tf.
18772\tsamogon\t\tm.sg.
33788\tsamohvaľstvo\t\tn.sg.
35041\tsamokat\t\tm.
35040\tsamokritika\t\tf.
814\tsamolet\t\tm.
23809\tsamoljubec\t\tm.anim.
23808\tsamoljubny\t\tadj.
12083\tsamoobsluga\t\tf.
16356\tsamoobsluga\t\tf.
18774\tsamoocěna\t\tf.
12089\tsamoposmatrjańje\t\tn.
5342\tsamoråzumno\t\tadv.
5690\tsamoråzumny\t\tadj.
813\tsamorod\t\tm.
18775\tsamostojno\t\tadv.
18776\tsamostojnosť\t\tf.
18777\tsamostojny\t\tadj.
21549\tsamosųd\t\tm.sg.
21551\tsamota\t\tf.
21553\tsamotnosť\t\tf.
1362\tsamotny\t\tadj.
36135\tsamoubijny\t\tadj.
4154\tsamoubijstvo\t\tn.
15528\tsamoubiti\t\tv.intr. pf.
30657\tsamouk\t\tm.anim.
16737\tsamovar\t\tm.
21554\tsamovlada\t\tf.
22482\tsamovlasťje\t\tn.sg.
21557\tsamovoljny\t\tadj.
21558\tsamozvanec\t\tm.anim.
270\tsamy\t\tadj.
36818\tsanatorij\t\tm.
36469\tsandala\t\tf.
36500\tsanje\t\tf.pl.
6241\tsankcija\t\tf.
36501\tsańky\t\tf.pl.
35203\tsanskrit, sanskrt\t\tm.sg.
30659\tsarafan\t\tm.
32251\tSarajevo\t\tn.sg.
36140\tsaranča\t\tf.
35855\tsarkastičny\t\tadj.
35856\tsarkazm\t\tm.sg.
35708\tsarkofag\t\tm.
16094\tsatelit\t\tm.
36129\tsatira\t\tf.
36130\tsatiričny\t\tadj.
23629\tSaturn\t\tm.sg.
32446\tSaudijec\t\tm.anim.
5929\tSaudovska Arabija\t\tf.sg.
33521\tsauna\t\tf.
30660\tsaundtrek\t\tm.
18677\t#sběgati sę\t\tv.refl. ipf.
18679\tsběgti sę\t\tv.refl. pf.
2236\tsbirańje\t\tn.sg.
3788\tsbirati sę\t\tv.refl. ipf.
2918\tsbirati\t\tv.tr. ipf.
35138\tsbirka\t\tf.
20138\tsbližańje\t\tn.sg.
18681\tsbližati sę\t\tv.refl. ipf.
18682\tsbližiti sę\t\tv.refl. pf.
5229\tsbogom!\t\tintj.
3738\tsbor\t\tm.
4704\tsborka\t\tf.
18683\tsbornik\t\tm.
17034\tsborny čislovnik\t\tm.
1978\t#sbože\t\tn.
5442\tsbudovati\t\tv.tr. pf.
34135\tscati\t\tv.intr. ipf.
20726\tscena\t\tf.
20727\tscenarij\t\tm.
35539\tsčet\t\tm.
35617\tsčisliti\t\tv.tr. pf.
1285\tsčitati\t\tv.tr. pf.
5619\t#sčityvati\t\tv.tr. ipf.
18685\tsdanlivo\t\tadv.
18686\tsdanlivy\t\tadj.
14204\tsdavati sę\t\tv.refl. ipf.
14987\tsde\t\tadv.
2874\tsdeformovati\t\tv.tr. pf.
5441\tsdělati\t\tv.tr. pf.
35851\tsdešnji, sdešny\t\tadj.
34353\tsdirati\t\tv.tr. ipf.
17520\tsdȯhnųti\t\tv.intr. pf.
18688\tsdrěmnųti\t\tv.intr. pf.
34351\tsdreti\t\tv.tr. pf.
17522\tsdyhati\t\tv.intr. ipf.
4025\tsę\t\tpron.refl.
4812\tsebe\t\tpron.refl.
35503\tsebe-\t\tprefix
21560\tseběčnjak\t\tm.anim.
18790\tseběčno\t\tadv.
18791\tseběčnosť\t\tf.
18792\tseběčny\t\tadj.
21561\tsebeljubje\t\tn.sg.
15530\tsebesmŕtiti\t\tv.intr. ipf.
21562\tsěča\t\tf.
21563\tsěča\t\tf.
22811\tsěčenj\t\tm.sg.
4441\tsědališče\t\tn.
18793\tsědati\t\tv.intr. ipf.
12124\tsěděńje\t\tn.sg.
1286\tsěděti\t\tv.intr. ipf.
15532\tsědiljnja\t\tf.
33999\tsedlati\t\tv.tr. ipf.
16489\tsedlo\t\tn.
1287\tsedm\t\tnum.card.
2052\tsedmdesęt\t\tnum.card.
12116\tsedmdesęty\t\tnum.ord.
34562\tsedmerka\t\tnum.subst.
16434\tsedmero\t\tnum.coll.
1288\tsedmica\t\tf.
18794\tsedmično\t\tadv.
18795\tsedmičny\t\tadj.
16403\tsedmina\t\tnum.fract.
16461\tsedmka\t\tnum.subst.
1107\tsedmnadsęť\t\tnum.card.
12119\tsedmnadsętina\t\tnum.fract.
12120\tsedmnadsęty\t\tnum.ord.
1367\tsedmsȯt, sedmsto\t\tnum.card.
50\tsedmy\t\tnum.ord.
18796\tsědnųti\t\tv.intr. pf.
12818\tsědy\t\tadj.
21568\tsęgati\t\tv.intr. ipf.
19523\tsegda, segdy\t\tadv.
35151\tsegdašnji, segdašny\t\tadj.
35625\tsegment\t\tm.
21570\tsęgnųti\t\tv.intr. pf.
166\tsego dnja\t\tadv.
1536\tsegodenny\t\tadj.
35805\tsegregacija\t\tf.
1347\tsej\t\tpron.dem.
5334\tsějati\t\tv.tr. ipf.
1604\tsejčas\t\tadv.
3789\tsejčasno\t\tadv.
5117\tsejčasno\t\tadv.
12135\tsejčasnosť\t\tf.
3532\tsejčasny\t\tadj.
12138\tsejčasny\t\tadj.
18798\tsěkati\t\tv.tr. ipf.
1270\tsekcija\t\tf.
18800\tsěknųti\t\tv.tr. pf.
3879\tsekret\t\tm.
6094\tsekretaŕ\t\tm.anim.
35614\tsekretariat\t\tm.
18802\tsekretaŕka\t\tf.
3880\tsekretny\t\tadj.
16355\tseks\t\tm.sg.
32853\tseksi\t\tadj.
35106\tseksist\t\tm.anim.
35105\tseksizm\t\tm.sg.
36840\tseksta\t\tf.
32852\tseksuaľno privlěkateljny\t\tadj.
35244\tseksuaľnosť\t\tf.
1784\tseksuaľny\t\tadj.
35538\tsekta\t\tf.
3398\tsěkti\t\tv.tr. ipf.
35518\tsektor\t\tm.
21567\tsěkųća\t\tf.
170\tsekunda\t\tf.
36836\tsekunda\t\tf.
35321\tsekundarny\t\tadj.
35772\tsekvencija\t\tf.
2947\tsěkyra\t\tf.
35491\tselfi\t\tm.indecl.
19581\tseliko\t\tadv.
19596\tselikråt\t\tadv.
19588\tseliky\t\tadj.
21565\tseliti sę\t\tv.refl. ipf.
3166\tseljan, seljanin\t\tm.anim.
18806\tseljanka\t\tf.
187\tselo\t\tn.
20173\tseľsky\t\tadj.
35043\tsemafor\t\tm.
20174\tsemantičny\t\tadj.
35935\tsemantika\t\tf.
12152\tsěmę\t\tn.
34767\tsěmę\t\tn.
35892\tsěmejstvo\t\tn.
2987\tsěmja\t\tf.
5764\tsenat\t\tm.
35553\tsenator\t\tm.anim.
4994\tsěno\t\tn.sg.
35163\tsentimentaľny\t\tadj.
15713\tsenzor\t\tm.
22826\tseparatist\t\tm.anim.
3267\tseparatističny\t\tadj.
22825\tseparatizm\t\tm.sg.
1156\tseptembr\t\tm.sg.
36841\tseptima\t\tf.
22612\tsěra\t\tf.sg.
31758\tserenada\t\tf.
35286\tserial\t\tm.
5522\tserija\t\tf.
4840\tseriozno\t\tadv.
4839\tseriozny\t\tadj.
30679\tserpentin\t\tm.
35591\tserver\t\tm.
1375\tservis\t\tm.
1560\tsěry\t\tadj.
36096\tseržant\t\tm.anim.
12168\tsesterska ljubȯv\t\tf.
6025\tsestersky\t\tadj.
5610\tsęsti\t\tv.intr. pf.
7401\tsestra bliznečka\t\tf.
1389\tsestra\t\tf.
4244\tsestrinstvo\t\tn.sg.
1373\tsěť\t\tf.
30682\tsětevy\t\tadj.
1311\tsětka\t\tf.
2411\tsěver\t\tm.sg.
4744\tSěverna Amerika\t\tf.sg.
12184\tSěverna Dakota\t\tf.sg.
12185\tSěverna Irlandija\t\tf.sg.
12186\tSěverna Karolina\t\tf.sg.
22771\tSěverna Koreja\t\tf.sg.
36815\tSěverna Makedonija\t\tf.
12187\tsěverna polsfera\t\tf.sg.
12190\tSěverne Marijanske Ostrovi\t\tm.pl.
656\tSěverno morje\t\tn.sg.
14998\tsěverno sijańje\t\tn.sg.
4183\tsěverno\t\tadv.
4745\tsěvernoamerikansky\t\tadj.
35135\tsěvernoevropejsky\t\tadj.
12181\tsěvernoirlandsky\t\tadj.
22773\tsěvernokorejsky\t\tadj.
15534\tsěvernomorsky\t\tadj.
618\tsěvernoslovinsky\t\tadj.
20729\tsěverny jelenj\t\tm.anim.
1938\tsěverny polus\t\tm.sg.
4182\tsěverny\t\tadj.
16467\tSěveroatlantičsky Alians\t\tm.sg.
12200\tsěveroiztočny\t\tadj.
12201\tsěveroiztok\t\tm.sg.
12203\tsěverovȯzhod\t\tm.sg.
12205\tsěverovȯzhodny\t\tadj.
12206\tsěverozapad\t\tm.sg.
12208\tsěverozapadny\t\tadj.
1943\tsezon\t\tm.
4457\tsezonny\t\tadj.
21572\tsęženj\t\tf.
35760\tsfera\t\tf.
35761\tsferičny\t\tadj.
5591\tsgnesti\t\tv.tr. pf.
3630\tsgnųti\t\tv.tr. pf.
14231\tsgodno s\t\tprep.
5559\tsgrěšiti\t\tv.intr. pf.
3629\tsgybati\t\tv.tr. ipf.
18814\tshema\t\tf.
32282\tshematičny plan\t\tm.
18815\tshematičny\t\tadj.
31982\tshizma\t\tf.
5445\tshoditi sę\t\tv.refl. ipf.
5433\tshoditi\t\tv.intr. ipf.
18689\tshodka\t\tf.
23994\tshodnosť\t\tf.
18691\tshodny\t\tadj.
18692\tshovati\t\tv.tr. pf.
36792\tshråniti sę\t\tv.refl. pf.
18696\tshråniti\t\tv.tr. pf.
18694\tshranjati\t\tv.tr. ipf.
18695\tshrånjeńje\t\tn.sg.
36252\tshudnųti\t\tv.intr. pf.
1051\tshvatiti\t\tv.tr. pf.
4811\tsi\t\tpron.refl.
19509\tSiberija\t\tf.sg.
35735\tsidr\t\tm.
18816\tsignal\t\tm.
1196\tsignalizovati\t\tv.tr. ipf.
12214\tsikati\t\tv.intr. ipf.
36293\tsikvel\t\tm.
12218\tsila volje\t\tf.
1309\tsila\t\tf.
30684\tsilaba\t\tf.
30685\tsilabičny\t\tadj.
22610\tsilicij\t\tm.sg.
21573\tsiliti sę\t\tv.refl. ipf.
697\tsiľno\t\tadv.
1312\tsiľno\t\tadv.
1310\tsiľny\t\tadj.
12221\tsimbol\t\tm.
3138\tsimboličny\t\tadj.
35395\tsimbolika\t\tf.
35394\tsimbolizm\t\tm.sg.
1392\tsimbolizovati\t\tv.tr. ipf.
20730\tsimetričnosť\t\tf.
20731\tsimetričny\t\tadj.
4783\tsimfonija\t\tf.
30688\tsimpatičny\t\tadj.
31760\tsimpatija\t\tf.
35732\tsimpatizant\t\tm.anim.
32112\tsimptom\t\tm.
35362\tsimulacija\t\tf.
35363\tsimulovati\t\tv.tr. ipf./pf.
34740\tsinhronizacija\t\tf.
34741\tsinhronizovati\t\tv.tr. ipf./pf.
23471\tsinica\t\tf.
12226\tsinji ekran smŕti\t\tm.
511\tsinji\t\tadj.
16102\tsinonim\t\tm.
3140\tsintaksa\t\tf.
17035\tsintetičny\t\tadj.
19516\tsinteza\t\tf.
32500\tsintezator\t\tm.
30692\tsinusit\t\tm.sg.
35951\tsionizm\t\tm.sg.
34750\tsirena\t\tf.
34751\tsirena\t\tf.
32340\tSirija\t\tf.sg.
32341\tsirijsky\t\tadj.
30693\tSirin\t\tm.anim.
22799\tsirota\t\tf.
32542\tsirotěti\t\tv.intr. ipf.
22802\tsirotišče\t\tn.
1317\tsistema\t\tf.
1316\tsistematičny\t\tadj.
1360\tsituacija\t\tf.
33375\tsivěti\t\tv.intr. ipf.
12231\tsivy\t\tadj.
36738\tsjedati\t\tv.tr. ipf.
8260\tsjedeny\t\tadj.
3705\tsjediniti sę\t\tv.refl. pf.
2085\tsjediniti\t\tv.tr. pf.
15556\tsjediniti\t\tv.tr. pf.
3704\tsjedinjati sę\t\tv.refl. ipf.
2942\tsjedinjati\t\tv.tr. ipf.
15557\tsjedinjati\t\tv.tr. ipf.
1895\tSjedinjene Štaty Ameriky\t\tm.pl.
3513\tsjedinjeńje\t\tn.
12433\tsjedinjenosť\t\tf.
12432\tsjedinjeny\t\tadj.
18697\tsjem\t\tm.
19492\tsjesti\t\tv.tr. pf.
20139\t#sjęti\t\tv.tr. pf.
1384\tsjezd\t\tm.
18701\tsjezd\t\tm.
12234\tskakańje\t\tn.sg.
12233\tskakanna dȯska\t\tf.
3707\tskakati\t\tv.intr. ipf.
729\tskala\t\tf.
35468\tskamenělosť\t\tf.
35467\tskameněly\t\tadj.
35405\tskandal\t\tm.
36468\tskandaľny\t\tadj.
22617\tskandij\t\tm.sg.
35721\tSkandinavija\t\tf.sg.
35722\tskandinavsky\t\tadj.
3882\tskarb\t\tm.
18818\tskarbnica\t\tf.
3883\tskarbnik\t\tm.anim.
12239\tskaredno\t\tadv.
4776\tskaredny\t\tadj.
15000\tskarga\t\tf.
15001\tskaržiti sę\t\tv.refl. ipf.
1318\tskazati\t\tv.tr. pf.
12242\tskazka\t\tf.
33525\tskeč\t\tm.
35092\tskelet\t\tm.
18819\tskenovati\t\tv.tr. ipf.
3080\tskeptičny\t\tadj.
30698\tskica\t\tf.
23562\tskipetr\t\tm.
20144\tsklad\t\tm.
4463\tskladati sę iz\t\tv.refl. ipf.
20695\tskladati sę\t\tv.refl. ipf.
3628\tskladati\t\tv.tr. ipf.
20145\tskladišče\t\tn.
4555\tskladovati\t\tv.tr. ipf.
18703\tsklanjati sę k\t\tv.refl. ipf.
18702\tsklanjati\t\tv.tr. ipf.
32025\tsklejiti\t\tv.tr. pf.
30700\tskljanka\t\tf.
12252\tsklon\t\tm.
20150\tsklon\t\tm.
18707\tskloniti sę k\t\tv.refl. pf.
18706\tskloniti\t\tv.tr. pf.
17038\tsklonjeńje\t\tn.
12253\tsklonnosť\t\tf.
12255\tsklonny\t\tadj.
3750\tskočiti\t\tv.intr. pf.
33272\tskok\t\tm.
34936\tskȯlzavka\t\tf.
16967\tskombinovati\t\tv.tr. pf.
1321\tskompensovati\t\tv.tr. pf.
6135\tskomplikovati\t\tv.tr. pf.
23364\tskončiti sę\t\tv.refl. pf.
12258\tskončiti\t\tv.tr. pf.
12259\tskonfiskovati\t\tv.tr. pf.
23365\tskonstruovany język\t\tm.
34588\tskopiti\t\tv.tr. ipf.
32250\tSkopje\t\tn.sg.
36782\tskora pomoć\t\tf.sg.
12261\tskorěje abo/ili pozdněje\t\tadv.
12260\tskorěje\t\tadv.
15004\tskorěje\t\tadv.
4065\tskorlupa\t\tf.
1324\tskoro\t\tadv.
3208\tskoro\t\tadv.
3747\tskoro\t\tadv.
20732\tskorpion\t\tm.anim.
30705\tSkorpion\t\tm.anim.
32342\tskory\t\tadj.
3726\tskot\t\tm.sg.
32038\tskotnik\t\tm.anim.
36314\tskotobojnja\t\tf.
20733\tskovrånȯk\t\tm.anim.
3139\tskraćati\t\tv.tr. ipf.
953\tskråćeńje\t\tn.
17039\tskråćeny\t\tadj.
647\tskråtiti\t\tv.tr. pf.
18820\tskrb\t\tf.
18821\tskrběti\t\tv.intr. ipf.
35637\tskrinja s orųďjami\t\tf.
18822\tskrinja\t\tf.
12269\tskripač\t\tm.anim.
18823\tskripačka\t\tf.
12850\tskripěńje\t\tn.sg.
18824\tskripěti\t\tv.intr. ipf.
12270\tskripka\t\tf.
18827\tskripnųti\t\tv.intr. pf.
36611\tskript\t\tm.
20157\tskriviti\t\tv.tr. pf.
23332\tskrob\t\tm.sg.
5871\tskromno\t\tadv.
5709\tskromnosť\t\tf.
5029\tskromny\t\tadj.
12275\tskroz\t\tadv.
35607\tskrupulozny\t\tadj.
18710\tskryti sę\t\tv.refl. pf.
20160\tskryti\t\tv.tr. pf.
36172\tskryto\t\tadv.
23369\tskryty\t\tadj.
36506\tskryvališče\t\tn.
18711\tskryvati sę\t\tv.refl. ipf.
20161\tskryvati\t\tv.tr. ipf.
34595\tskubnųti\t\tv.intr. pf.
29624\tskubti\t\tv.intr. ipf.
12276\tskuhati\t\tv.tr. pf.
36926\tskulptor\t\tm.anim.
1322\tskulptura\t\tf.
20734\tskunks\t\tm.anim.
32144\tskųpec\t\tm.anim.
3647\tskupina\t\tf.
36793\tskųpiti sę\t\tv.refl. ipf.
12278\tskųposť\t\tf.
12280\tskųpy\t\tadj.
36220\tskųpy\t\tadj.
35038\tskuter\t\tm.
20735\tskvorec\t\tm.anim.
36208\tskvoter\t\tm.anim.
23372\tskvrčati\t\tv.intr. ipf.
12281\tslabec\t\tm.anim.
34616\tslaběti\t\tv.intr. ipf.
12282\tslabo\t\tadv.
12283\tslabosť\t\tf.
23204\tslaboumny\t\tadj.
1341\tslaby\t\tadj.
35725\tslåd\t\tm.sg.
33279\tslåditi\t\tv.tr. ipf.
23734\tslådko\t\tadv.
12287\tslådkosť\t\tf.
447\tslådky\t\tadj.
15006\tslådnica\t\tf.
15536\tslådnik\t\tm.anim.
12286\tslådoled\t\tm.sg.
34935\tslajd\t\tm.
3886\tslåma\t\tf.
35727\tslåmka\t\tf.
33028\tslåny\t\tadj.
21575\tslati\t\tv.tr. ipf.
1339\tslava\t\tf.
21576\tslava\t\tf.
1329\tslåvej\t\tm.anim.
23979\tSlavija\t\tf.sg.
34557\tslavist\t\tm.anim.
34556\tslavistika\t\tf.
36580\tslaviti sę\t\tv.refl. ipf.
1315\tslaviti\t\tv.tr. ipf.
36583\tslaviti\t\tv.tr. ipf.
1340\tslavjeńje\t\tn.sg.
36584\tslavjeńje\t\tn.sg.
12295\tslavno\t\tadv.
1338\tslavny\t\tadj.
21577\tslěd\t\tm.
3380\tslěditi\t\tv.tr. ipf.
21579\tslěditi\t\tv.tr. ipf.
12301\tslědny\t\tadj.
35139\tslědovateljno\t\tadv.
1939\tslědovati\t\t#v.tr. ipf.
866\tslědstvo\t\tn.
1378\tslědujųći\t\tadj.
1293\tslegka\t\tadv.
35904\tsleng\t\tm.
12305\tslěpec\t\tm.anim.
12306\tslěpica\t\tf.
34571\tslěpnųti\t\tv.intr. ipf.
2941\tslěpy\t\tadj.
32346\tslězena\t\tf.
35984\tslězi iz mene!\t\tintj.
4733\tSlęzk\t\tm.sg.
4734\tslęzsky\t\tadj.
18712\tslgati\t\tv.intr. pf.
18839\tslimak\t\tm.anim.
1292\tslina\t\tf.
18713\tsliti sę\t\tv.refl. pf.
36393\tsliti\t\tv.tr. pf.
36906\tsliv rěky\t\tm.
446\tsliva\t\tf.
18714\tslivańje\t\tn.
20698\tslivańje\t\tn.
18715\tslivati sę\t\tv.refl. ipf.
36394\tslivati\t\tv.tr. ipf.
30713\tslivovica\t\tf.
31883\tsliź\t\tm./f.
12246\tslizgalka\t\tf.
12249\tslizgati\t\tv.intr. ipf.
16358\tslizgnųti\t\tv.intr. pf.
12250\tslizky\t\tadj.
35986\tsljuda\t\tf.
17040\tslog\t\tm.
35950\tslogan\t\tm.
32848\tsloj\t\tm.
3460\tslomiti\t\tv.tr. pf.
3462\tslomjeny\t\tadj.
1684\tslon\t\tm.anim.
15539\tSlovačka\t\tf.
1390\tslovačsky\t\tadj.
4731\tSlovak\t\tm.anim.
1350\tSlovakija\t\tf.sg.
1349\tslovenačsky\t\tadj.
12320\tSlovenec\t\tm.anim.
3082\tSlovenija\t\tf.sg.
12319\tSlovenka\t\tf.
16228\tslovensky\t\tadj.
23118\tslovesnosť\t\tf.
18840\tslovesny\t\tadj.
1357\tSlovjan, Slovjanin\t\tm.anim.
34555\tslovjanizacija\t\tf.
10294\tslovjanizovati\t\tv.tr. ipf./pf.
12325\tSlovjanka\t\tf.
1355\tslovjansky\t\tadj.
4719\tslovjanstvo\t\tn.sg.
23980\tSlovjanščina\t\tf.sg.
15011\tslovničstvo\t\tn.
1328\tslovnik\t\tm.
32840\tslovny\t\tadj.
1361\tslovo\t\tn.
17041\tslovosbor\t\tm.
1370\tsloženo slovo\t\tn.
12336\tsloženosť\t\tf.
6145\tsloženy\t\tadj.
20701\tsložiti sę\t\tv.refl. pf.
3627\tsložiti\t\tv.tr. pf.
1333\tslučaj\t\tm.
16360\tslučajno\t\tadv.
35381\tslučajnosť\t\tf.
3943\tslučajny\t\tadj.
20740\tslučati sę\t\tv.refl. ipf.
20162\tslųčati\t\tv.tr. ipf.
15013\tslučiti sę\t\tv.refl. pf.
20166\tslųčiti\t\tv.tr. pf.
12341\tslučka\t\tf.
1334\tsluga\t\tm.anim.
6042\tsluh\t\tm.
30722\tslum\t\tm.
16749\tslušalky\t\tf.pl.
12343\tslušatelj\t\tm.anim.
1247\tslušati\t\tv.tr. ipf.
1327\tslužba\t\tf.
18843\tslužebnik\t\tm.anim.
33532\tslužebno pųtovańje\t\tn.
30724\tslužebny\t\tadj.
2121\tslužiti\t\tv.intr. ipf.
21580\tslynųti\t\tv.intr. ipf.
1335\tslyšati\t\tv.tr. ipf.
21581\tslyti\t\tv.intr. ipf.
20741\tsmalec\t\tm.
35175\tsmaragd\t\tm.
20742\tsmatrjati\t\tv.intr. ipf.
34637\tsmažiti\t\tv.tr. ipf.
12349\tsmęčkati\t\tv.tr. pf.
425\tsměh\t\tm.
2237\tsmějati sę\t\tv.refl. ipf.
18720\tsmękčati\t\tv.tr. ipf.
18721\tsmękčiti\t\tv.tr. pf.
4058\tsmělosť\t\tf.
4056\tsměly\t\tadj.
20703\tsměna\t\tf.
2062\tsmenšati\t\tv.tr. ipf.
5634\tsmenšeńje\t\tn.
1297\tsmenšiti\t\tv.tr. pf.
5214\tsměr\t\tm.
20704\tsměr\t\tm.
20705\tsměrnica\t\tf.
3740\tsměs\t\tm.
5092\tsměsta\t\tadv.
12372\tsměšany\t\tadj.
14273\tsměšany\t\tadj.
1817\tsměšati\t\tv.tr. pf.
14274\tsměšati\t\tv.tr. pf.
18845\tsměšivati\t\tv.tr. ipf.
36508\tsměška\t\tf.
15551\tsměšnosť\t\tf.
5227\tsměšny\t\tadj.
30730\tsmeť\t\tf.
5972\tsmetana\t\tf.
35450\tsmęteńje\t\tn.sg.
18847\tsmeti\t\tf.pl.
21582\tsměti\t\tv.tr. ipf.
36736\tsmetjaŕ\t\tm.anim.
36737\tsmetjaŕsky voz\t\tm.
36729\tsmetnik\t\tm.
32259\tsmlåtiti\t\tv.tr. pf.
5620\tsmlěti\t\tv.tr. pf.
30731\tsmogti\t\tv.aux. pf.
30732\tsmokva\t\tf.
2071\tsmola\t\tf.
33283\tsmoliti\t\tv.tr. ipf.
20744\t#smotriti\t\tv.intr. ipf.
33175\tsmråd\t\tm.
20177\tsmŕditi\t\tv.intr. ipf.
26370\tsmrěk\t\tm.
34763\tsmrf\t\tm.anim.
33659\tsmrkač\t\tm.anim.
33657\tsmrkati sę\t\tv.refl. ipf.
33656\tsmrkati\t\tv.intr. ipf.
32888\tsmrščeny\t\tadj.
32890\tsmrščiti brvi\t\tv.intr. pf.
32891\tsmrščiti sę\t\tv.refl. pf.
32889\tsmrščiti\t\tv.tr. pf.
2070\tsmŕť\t\tf.
34939\tsmŕteljny\t\tadj.
18851\tsmŕteľna hvoroba\t\tf.
15552\tsmŕteopasny\t\tadj.
23515\tsmŕtna kaznj\t\tf.
12382\tsmŕtny\t\tadj.
12384\tsmŕtonosny\t\tadj.
16739\tsms\t\tm.
14067\tsmućati\t\tv.tr. ipf.
20708\tsmųćati\t\tv.tr. ipf.
14066\t#smųćeny\t\tadj.
23832\tsmųćeny\t\tadj.
20711\tsmųtiti\t\tv.tr. pf.
20712\tsmųtiti\t\tv.tr. pf.
23834\tsmųtno\t\tadv.
617\t#smųtny\t\tadj.
23833\tsmųtȯk\t\tm.
36106\tsmyček\t\tm.
20715\tsmykati\t\tv.tr. ipf.
3324\tsmysl\t\tm.
20716\tsmysľny\t\tadj.
12388\tsmysly\t\tm.pl.
12389\tsnabděti\t\tv.tr. pf.
16357\tsnabděvati\t\tv.tr. ipf.
12390\tsnaha\t\tf.
18852\tsnědańje\t\tn.
18853\tsnědati\t\tv.intr. ipf.
2209\tsněg\t\tm.
30736\tSněgurȯčka\t\tf.
5439\tsnesti\t\tv.tr. pf.
15678\tsnetvarjati\t\tv.tr. ipf.
15677\tsnetvoriti\t\tv.tr. pf.
12395\tsněženj\t\tm.sg.
30737\tsněžinka\t\tf.
4160\tsněžiti\t\tv.intr. ipf.
23290\tsněžnoběly\t\tadj.
36125\tsněžny člověk\t\tm.
32473\tsněžny leopard\t\tm.anim.
18722\tsnimȯk\t\tm.
5215\tsniti\t\tv.tr. ipf.
5636\tsniziti\t\tv.tr. pf.
33527\tsnizu\t\tadv.
5635\tsnižati\t\tv.tr. ipf.
5637\tsnižeńje\t\tn.
2127\tsnižka\t\tf.
5440\tsnositi\t\tv.tr. ipf.
20718\tsnosny\t\tadj.
15019\tsnova i snova\t\tadv.
3104\tsnova\t\tadv.
34003\tsnovati\t\tv.tr. ipf.
18723\tsnuđeny\t\tadj.
337\tsobě, si\t\tpron.refl.
30739\tsȯbrańje\t\tn.
3784\tsȯbrati sę\t\tv.refl. pf.
1494\tsȯbrati\t\tv.tr. pf.
24013\tsobstvenik\t\tm.anim.
21583\tsobstvenosť\t\tf.
21585\tsobstveny\t\tadj.
2350\tsȯbyťje\t\tn.
22822\tsocialist\t\tm.anim.
2223\tsocialističny\t\tadj.
22821\tsocializm\t\tm.sg.
20178\tsociaľny\t\tadj.
23631\tsociolog\t\tm.anim.
23632\tsociologičny\t\tadj.
23630\tsociologija\t\tf.sg.
30740\tsočevica\t\tf.
36205\tsočevica\t\tf.
34940\tsȯčuvstvovati\t\tv.intr. ipf.
23276\tsoda\t\tf.
35379\tSȯdružstvo narodov\t\tn.sg.
35402\tSȯdružstvo Nezavisnyh Dŕžav\t\tn.sg.
3942\tsȯdŕžańje\t\tn.
23751\tsȯdŕžanosť\t\tf.
72\tsȯdŕžati\t\tv.tr. pf.
2163\tsȯdŕživati\t\tv.tr. ipf.
12103\tsȯdŕživati\t\tv.tr. ipf.
12106\tsȯdŕžnik\t\tm.
18857\tSofija\t\tf.sg.
35249\tsoftver\t\tm.sg.
4191\tsȯglåsiti sę, sųglåsiti sę\t\tv.refl. ipf.
20196\tsȯglåśje, sųglåśje\t\tn.sg.
16491\tsȯglåska, sųglåska\t\tf.
364\tsȯglåsno, sųglåsno\t\tprep.
6301\tsȯglåsnosť, sųglåsnosť\t\tf.
20198\tsȯglåsny, sųglåsny\t\tadj.
18858\tsȯglašati sę, sųglašati sę\t\tv.refl. ipf.
4193\tsȯglåšeńje, sųglåšeńje\t\tn.
34119\tsȯhnųti\t\tv.intr. ipf.
34121\tsȯhnųti\t\tv.intr. ipf.
35100\tsoja\t\tf.
5446\tsȯjdti sę\t\tv.refl. pf.
5434\tsȯjdti\t\tv.intr. pf.
36535\tsojka\t\tf.
1385\tsȯjųz\t\tm.
1387\tsȯjųznik\t\tm.anim.
2075\tsok\t\tm.
35999\tsokoiztiskivačka\t\tf.
20746\tsokol\t\tm.anim.
35998\tsokovnik\t\tm.
12441\tsolarny\t\tadj.
19510\tsolidarnosť\t\tf.
19511\tsolidarny\t\tadj.
20179\tsolidny\t\tadj.
33026\tsoliti\t\tv.tr. ipf.
1441\tsolj\t\tf.
33030\tsoljeny\t\tadj.
33031\tsoljnica\t\tf.
560\tsȯlnce\t\tn.
18860\tsȯlncevråt\t\tm.
23633\tsȯlnečna sistema\t\tf.
3887\tsȯlnečny\t\tadj.
35199\tsolo\t\tn.
548\tsȯlza\t\tf.
32324\tsȯlzotvorny gaz\t\tm.
20707\tsȯmknųti\t\tv.tr. pf.
2057\tsȯn\t\tm.
4784\tsonata\t\tf.
30747\tsonda\t\tf.
30748\tsondovati\t\tv.tr. ipf./pf.
36110\tsonet\t\tm.
23055\tsȯobćati sę\t\tv.refl. ipf.
21169\tsȯobćati\t\tv.tr. ipf.
21171\tsȯobčeńje\t\tn.
21172\tsȯobčiti\t\tv.tr. pf.
36052\tsȯočati sę s, sųočati sę s\t\tv.refl. ipf.
36053\tsȯočiti sę s, sųočiti sę s\t\tv.refl. ipf.
33699\tsopelj\t\tm.
33000\tsopran\t\tm.
3223\tsort\t\tm.
34894\tsortovati\t\tv.tr. ipf./pf.
4150\tsȯsati\t\tv.tr. ipf.
23591\tsȯsavec\t\tm.anim.
35995\tsosiska\t\tf.
12739\tsȯska\t\tf.
30750\tsosna\t\tf.
21794\tsȯstav\t\tm.
4202\tsȯstaviti\t\tv.tr. pf.
4201\tsȯstavjati\t\tv.tr. ipf.
18867\tsȯstavjeńje\t\tn.
35557\tsȯstavna čęsť\t\tf.
35556\tsȯstavny\t\tadj.
1874\tsȯstojati sę iz\t\tv.refl. ipf.
16405\tsȯtina\t\tnum.fract.
5793\tsȯtka, sȯtnja\t\tf.
34857\tsȯtkati\t\tv.tr. pf.
2915\tsȯtny\t\tnum.ord.
18868\tsȯučęsťje\t\tn.sg.
15715\tsȯučęstnica\t\tf.
12459\tsȯučęstničstvo\t\tn.sg.
4301\tsȯučęstnik\t\tm.anim.
454\tsova\t\tf.
4474\tsȯvět\t\tm.
5149\tsȯvětničstvo\t\tn.sg.
4341\tsȯvětnik\t\tm.anim.
4475\tsȯvětovati\t\tv.tr. ipf.
2080\tSovětsky Sȯjųz\t\tm.sg.
30757\tSovětsky Svęź\t\tm.sg.
1398\tsovětsky\t\tadj.
16729\tsovka\t\tf.
22506\tsȯvladnųti\t\tv.tr. pf.
22508\tsȯvladnųti\t\tv.tr. pf.
22505\tsȯvladyvati\t\tv.tr. ipf.
22507\tsȯvladyvati\t\tv.tr. ipf.
35382\tsȯvpadeńje\t\tn.
15026\tsȯvrěmennik\t\tm.anim.
5903\tsȯvrěmennosť\t\tf.
5902\tsȯvrěmenny\t\tadj.
22569\tsȯvŕšati\t\tv.tr. ipf.
36808\tsȯvŕšati\t\tv.intr. ipf.
12764\t#sȯvŕšenosť\t\tf.
1742\tsȯvŕšeny vid\t\tm.
15052\tsȯvŕšeny\t\tadj.
22571\tsȯvŕšiti\t\tv.tr. pf.
36809\tsȯvŕšiti\t\tv.intr. pf.
20180\tsȯvsěm, sȯvsim\t\tadv.
22744\tsȯzdati\t\tv.tr. pf.
22743\tsȯzdavati\t\tv.tr. ipf.
5431\tsȯzvati\t\tv.tr. pf.
5429\tsȯzyvati\t\tv.tr. ipf.
32632\t#sȯžegti\t\tv.tr. pf.
5607\tsȯžrati\t\tv.tr. pf.
21144\tspad\t\tm.
21146\tspad\t\tm.
5661\tspadati\t\tv.intr. ipf.
18724\tspakovati sę\t\tv.refl. pf.
5472\tspakovati\t\tv.tr. pf.
455\tspaliti\t\tv.tr. pf.
5197\tspaljnja\t\tf.
4194\tspańje\t\tn.sg.
21147\tspasati\t\tv.tr. ipf.
23373\tspaseńje\t\tn.
12481\tspasitelj\t\tm.anim.
5660\tspasti\t\tv.intr. pf.
21150\tspasti\t\tv.tr. pf.
2224\tspati\t\tv.intr. ipf.
5129\tspecialist\t\tm.anim.
36306\tspecializacija\t\tf.
564\tspeciaľno\t\tadv.
31716\tspeciaľnosť\t\tf.
1907\tspeciaľny\t\tadj.
4404\tspecifičny\t\tadj.
35668\tspecifika\t\tf.
36911\tspektakl\t\tm.
35364\tspektr\t\tm.
2902\tspekulacija\t\tf.
35925\tspekulativny\t\tadj.
16361\tspekulovati\t\tv.intr. ipf.
33655\tsperma\t\tf.
33654\tspermatozoid\t\tm.
3254\tspěšiti\t\tv.intr. ipf.
12490\tspěšny\t\tadj.
30761\tspěvańje\t\tn.sg.
12491\tspěvati\t\tv.tr. pf.
21151\tspirati sę\t\tv.refl. ipf.
4541\tspis\t\tm.
5525\t#spisati\t\tv.tr. pf.
2895\tspisȯk\t\tm.
5526\tspisyvati\t\tv.tr. ipf.
34330\tsplesti\t\tv.tr. pf.
23026\tsploditi\t\tv.tr. pf.
30763\tspod\t\tm.
26226\tspodnica\t\tf.
36557\tspodobati sę\t\tv.refl. pf.
461\tspokojno\t\tadv.
463\tspokojny\t\tadj.
12502\tspokojstvo\t\tn.sg.
17043\tspokrȯvnjeny\t\tadj.
1479\tspoľny\t\tadj.
2254\tspolȯčenstvo\t\tn.
3509\tspolȯčnosť\t\tf.
3393\tspolȯčny\t\tadj.
18879\tspolupracovati\t\tv.intr. ipf.
18880\tspoluråbotyvati\t\tv.intr. ipf.
14157\tspomaliti\t\tv.tr. pf.
14158\tspomaljati\t\tv.tr. ipf.
10891\tspomaljeńje\t\tn.
12515\tspominati\t\tv.tr. ipf.
12514\tspomněti\t\tv.tr. pf.
21152\tspona\t\tf.
34175\tsponka\t\tf.
1477\tsponsor\t\tm.anim.
20183\tspontanno\t\tadv.
2319\tspontanny\t\tadj.
2385\tspor\t\tm.
36305\tsporadično\t\tadv.
35464\tsporadičny\t\tadj.
12520\tsporåzuměvańje\t\tn.sg.
20184\tsporiti\t\tv.intr. ipf.
12521\tsporlivy\t\tadj.
12522\tsporno\t\tadv.
2021\tsporny\t\tadj.
2022\tsport\t\tm.
18882\tsportivny\t\tadj.
2387\tsportnik\t\tm.anim.
3237\tsposob\t\tm.
422\tsposobnosť\t\tf.
2386\tsposobny\t\tadj.
34873\tspotěti\t\tv.intr. pf.
34872\tspotiti sę\t\tv.refl. pf.
22123\tspotknųti sę\t\tv.refl. pf.
35524\tspotrěbitelj\t\tm.anim.
5714\tspotrěbiti\t\tv.tr. pf.
5715\tspotrěbjeńje\t\tn.sg.
5713\tspotrěbovati\t\tv.tr. ipf.
22122\tspotykati sę\t\tv.refl. ipf.
34520\tspozdniti sę\t\tv.refl. pf.
34522\tspozdnjati sę\t\tv.refl. ipf.
34524\tspozdnjeńje\t\tn.
3443\tspoznati\t\tv.tr. pf.
3418\tspoznavati\t\tv.tr. ipf.
2072\tsprašati\t\tv.tr. ipf.
2879\tspravědlivosť\t\tf.
661\tspravědlivy\t\tadj.
30768\tsprědu\t\tadv.
18727\tspręgati\t\tv.tr. ipf.
29545\tspręsti\t\tv.tr. pf.
21154\tsprěti sę\t\tv.refl. pf.
21155\tspręžeńje\t\tn.
4132\tsprijateliti sę\t\tv.refl. pf.
2238\tsprositi\t\tv.tr. pf.
86\tsprotiviti sę\t\tv.refl. pf.
5708\tsprotivjeńje\t\tn.
5622\tspuhnųti\t\tv.intr. pf.
21160\tspust\t\tm.
21161\tspust\t\tm.
35821\tspusť\t\tf.
2692\tspustiti sę\t\tv.refl. pf.
21162\tspustiti\t\tv.tr. pf.
21165\tspustiti\t\tv.tr. pf.
1503\tspušćati sę\t\tv.refl. ipf.
21156\tspušćati\t\tv.tr. ipf.
21159\tspušćati\t\tv.tr. ipf.
12547\tspųtnik\t\tm.
8086\tspytati\t\tv.tr. pf.
23468\t#sråka\t\tf.
23824\tsråm\t\tm.sg.
23825\tsråmęžlivy\t\tadj.
23816\tsråmiti\t\tv.tr. ipf.
23817\tsråmiti\t\tv.tr. ipf.
23821\tsråmny\t\tadj.
23822\tsråmny\t\tadj.
23818\tsråmota\t\tf.
23819\tsråmotny\t\tadj.
35958\tsråst\t\tm.
33075\tsrastańje\t\tn.
33072\tsrastati sę\t\tv.refl. ipf.
18730\tsråsti sę\t\tv.refl. pf.
479\tsrati\t\tv.intr. ipf.
20168\tsråvnimy\t\tadj.
35220\tsråvniteljny\t\tadj.
1142\tsråvniti\t\tv.tr. pf.
679\tsråvnjati\t\tv.tr. ipf.
3510\tsråvnjeńje\t\tn.
26242\tsråzumělosť\t\tf.
2693\tsråzuměti\t\tv.tr. pf.
2410\tSŕb\t\tm.anim.
2200\tSŕbija\t\tf.sg.
20186\tsŕbohrvatsky\t\tadj.
20187\tsŕbolužičan, sŕbolužičanin\t\tm.anim.
20188\tsŕbolužičsky\t\tadj.
591\tsŕbskohrvatsky\t\tadj.
145\tsŕbsky\t\tadj.
32224\tsŕdca\t\tn.pl.
3081\tsŕdce\t\tn.
865\tsŕdcevina\t\tf.
22816\tsŕdcevina\t\tf.
36877\tsŕdėčna komora\t\tf.
12553\tsŕdečno\t\tadv.
18884\tsŕdečnosȯsųdny\t\tadj.
12554\tsŕdečnosť\t\tf.
18886\tsŕdečny napad\t\tm.
3167\tsŕdečny\t\tadj.
21586\tsŕdečny\t\tadj.
14993\tsŕditi\t\tv.tr. ipf.
23752\tsŕdity\t\tadj.
14994\tsŕdnosť\t\tf.
30771\tsrěbristy\t\tadj.
3941\tsrěbrny\t\tadj.
2260\tsrěbro\t\tn.sg.
3117\tsrěd\t\tprep.
3107\tsrěda\t\tf.
2188\tsrědina\t\tf.
12563\tsrědišče\t\tn.
12566\tsrědnje\t\tn.
1712\tsrědnjevěčje\t\tn.sg.
18890\tsrědnjevěčny\t\tadj.
12571\tSrědnji Iztok\t\tm.sg.
2065\tsrědnji rod\t\tm.
12572\tSrědnji Vȯzhod\t\tm.sg.
1544\tsrědnji, srědny\t\tadj.
5191\tsrědnji, srědny\t\tadj.
21588\tsrědoběžny\t\tadj.
21589\tsrědotěčny\t\tadj.
2432\tsrědstvo\t\tn.
21590\tsrědstvo\t\tn.
2433\tSrědzemno morje\t\tn.sg.
20748\tsrna\t\tf.
18643\tsrodnica\t\tf.
12577\tsrodnik\t\tm.anim.
15033\tsrodno slovo\t\tn.
12578\tsrodny\t\tadj.
21543\tsrodstvo\t\tn.
1364\tsŕp\t\tm.
12165\tsŕpenj\t\tm.sg.
18891\tsŕsť\t\tf.
18731\tsrųbati\t\tv.tr. pf.
18733\tsrųbyvati\t\tv.tr. ipf.
14305\tsrųčny\t\tadj.
20169\tsruinovati\t\tv.tr. pf.
21546\tssědati sę\t\tv.refl. ipf.
21547\tssęsti sę\t\tv.refl. pf.
35351\tSSSR\t\tm.sg.
30777\tSŠA\t\tm.pl.
36304\tstabilizacija\t\tf.
34701\tstabilizovati\t\tv.tr. ipf./pf.
35928\tstabiľnosť\t\tf.
577\tstabiľny\t\tadj.
7236\tstačiti\t\tv.intr. ipf.
35818\tstadija\t\tf.
21703\tstado\t\tn.
21705\tstaja\t\tf.
22820\tstalinizm\t\tm.sg.
1395\tstalj\t\tf.sg.
35328\tstalosť\t\tf.
35329\tstalosť\t\tf.
18892\tstalovy\t\tadj.
20749\tstaly\t\tadj.
21709\tstaly\t\tadj.
1403\tstancija\t\tf.
1394\tstandard\t\tm.
20752\tstandardizacija\t\tf.
20753\tstandardizovati\t\tv.tr. ipf.
20754\tstandardny\t\tadj.
16479\tstańje\t\tn.
21700\tstanȯk\t\tm.
18893\tstanovišče\t\tn.
21696\tstanoviti\t\tv.tr. ipf.
6303\tstanųti\t\tv.intr. pf.
5617\tstapjati\t\tv.tr. ipf.
23936\tstaranno\t\tadv.
730\tstaranny\t\tadj.
21591\tstarati sę\t\tv.refl. ipf.
15566\tstarci\t\tm.pl.
15564\tstarec\t\tm.anim.
3581\tstarějši, starši\t\tadj.
12587\tstarěńje\t\tn.sg.
12589\tstarěti\t\tv.intr. ipf.
12592\tstarinna infrastruktura\t\tf.
12591\tstarinny\t\tadj.
17044\tstarocrkȯvnoslovjansky\t\tadj.
16365\tstarodavny\t\tadj.
36450\tstarogrėčsky\t\tadj.
20755\tstarohebrejsky\t\tadj.
23049\tstaromodny\t\tadj.
17045\tstaroslovjansky\t\tadj.
12595\tstarosť\t\tf.
22791\tstart\t\tm.
22792\tstartovati\t\tv.tr. ipf./pf.
30783\tStary Svět\t\tm.sg.
1399\tstary\t\tadj.
4563\tstati sę\t\tv.refl. pf.
2952\tstati\t\tv.aux. pf.
18896\tstatičny\t\tadj.
1405\tstatija\t\tf.
18897\tstatističny\t\tadj.
18898\tstatistika\t\tf.
12603\t#statnosť\t\tf.
21698\tstatny\t\tadj.
1402\tstatuja\t\tf.
1023\tstatus\t\tm.
30787\tstatut\t\tm.
1810\tstavati\t\tv.aux. ipf.
35624\tstaviti na něčto\t\tv.tr. ipf.
35000\tstaviti pytańje\t\tv.ipf.
21692\tstaviti\t\tv.tr. ipf.
21694\tstavjati\t\tv.tr. ipf.
21710\tstavka\t\tf.
21711\tstavka\t\tf.
4710\tsteblo\t\tn.
22086\tstečeńje\t\tn.
36632\tstegozavr\t\tm.
33526\tsteklěna čaša\t\tf.
23719\tsteklěny\t\tadj.
32349\tstekľnik\t\tm.
1408\tsteklo\t\tn.
18737\tstekti\t\tv.intr. pf.
33437\tsteliti\t\tv.tr. ipf.
1406\tstěna\t\tf.
18900\tstěnj\t\tm.
6304\tstereotip\t\tm.
35847\tsterilizacija\t\tf.
35846\tsterilizovati\t\tv.tr. ipf./pf.
35845\tsteriľny\t\tadj.
18901\tstežka\t\tf.
21849\tstigati\t\tv.tr. ipf.
21852\tstigati\t\tv.tr. ipf.
21848\tstignųti\t\tv.tr. pf.
21850\tstignųti\t\tv.tr. pf.
18907\tstih\t\tm.
30790\tstihija\t\tf.
239\tstil, stilj\t\tm.
35418\tstimul\t\tm.
4985\tstimulacija\t\tf.
723\tstimulovati\t\tv.tr. ipf.
30791\tstiskati\t\tv.tr. ipf.
33545\tstisknųti\t\tv.tr. pf.
33440\tstlati\t\tv.tr. ipf.
2184\tsto\t\tnum.card.
36058\tstodola\t\tf.
32077\tstog\t\tm.
12618\tStoj!\t\tintj.
2083\tstojati\t\tv.intr. ipf.
21688\tstojati\t\tv.tr. ipf.
32732\tstojišče\t\tn.
32733\tstojišče\t\tn.
32734\tstojišče\t\tn.
21708\tstojka na rųkah\t\tf.
21706\tstojka\t\tf.
36401\tstojka\t\tf.
36814\tStokholm\t\tm.
16449\tstokråtno\t\tadv.
1414\tstol\t\tm.
30795\tstol\t\tm.
1562\tstolěťje\t\tn.
30798\tstolica\t\tf.
18908\tstoličny\t\tadj.
35096\tstoljaŕ\t\tm.anim.
1663\tstolka\t\tf.
32767\tstoľny tenis\t\tm.
35627\tstolova lȯžica\t\tf.
30799\tstȯlp\t\tm.
4255\tston\t\tm.
12626\tstonańje\t\tn.sg.
4254\tstonati\t\tv.intr. ipf.
32616\tstonožka\t\tf.
16111\tstop\t\tintj.
3996\tstopa\t\tf.
670\tstopiti\t\tv.tr. pf.
5618\tstopjeńje\t\tn.
12632\tstoročnik\t\tm.anim.
16406\tstotina\t\tnum.fract.
61\tstoty\t\tnum.ord.
21894\tstradati\t\tv.intr. ipf.
767\tstrah\t\tm.
4469\tstrahlivec\t\tm.anim.
12645\tstrahlivo\t\tadv.
4471\tstrahlivosť\t\tf.
4470\tstrahlivy\t\tadj.
1416\tstrahovańje\t\tn.
1169\tstrahovati\t\tv.tr. ipf.
1894\tstrajk\t\tm.
24554\tstrajkovati\t\tv.intr. ipf.
30804\tstråna světa\t\tf.
1412\tstråna\t\tf.
21865\tstråna\t\tf.
21866\tstråna\t\tf.
1098\tstrånica\t\tf.
21871\tstråniti sę od\t\tv.refl. ipf.
6305\tstrånnik\t\tm.anim.
21593\tstrånny\t\tadj.
21895\tstrasť\t\tf.
35454\tstrastny\t\tadj.
12655\tstrašeny\t\tadj.
36855\tstrašilo za ptice\t\tn.
36854\tstrašilo\t\tn.
1818\tstrašiti\t\tv.tr. ipf.
12659\tstrašno\t\tadv.
35989\tstrašno\t\tadv.
250\tstrašny\t\tadj.
1186\tstrategičny\t\tadj.
16370\tstrategija\t\tf.
20756\tstraus\t\tm.anim.
18910\tstråž\t\tm.anim.
5792\tstraža\t\tf.
938\tstrčiti\t\tv.intr. ipf.
36398\tstrěćati sę\t\tv.refl. ipf.
1954\tstrěćati\t\tv.tr. ipf.
21901\tstrěgti sę\t\tv.refl. ipf.
21899\tstrěgti\t\tv.tr. ipf.
36013\tstrěha\t\tf.
20757\tstrekoza\t\tf.
1096\tstrěla\t\tf.
4248\tstrěľba\t\tf.
30809\tStrělec\t\tm.anim.
34942\tstrělec\t\tm.anim.
18912\tstrělišče\t\tn.
1442\tstrěliti\t\tv.intr. ipf.
743\tstrěljati\t\tv.intr. ipf.
35769\tstrěľka\t\tf.
12672\tstrěľnik\t\tm.anim.
34897\tstrělȯčnik\t\tm.anim.
35891\tstremę\t\tn.
34961\tstres\t\tm.
13034\tstręseńje mozga\t\tn.
13056\tstręseńje\t\tn.
34962\tstresovy\t\tadj.
36399\tstrěsti sę\t\tv.refl. pf.
1345\tstrěsti\t\tv.tr. pf.
36014\tstrěšna krytina\t\tf.
12664\tstrěteńje\t\tn.
5021\tstrigti\t\tv.tr. ipf.
15042\tstrimati\t\tv.tr. pf.
15044\tstrimyvati\t\tv.tr. ipf.
12675\tstrižik\t\tm.anim.
20189\tstrogo\t\tadv.
33305\tstrogosť\t\tf.
12676\tstrogy\t\tadj.
21910\tstroj\t\tm.
21907\tstrojiti\t\tv.tr. ipf.
21909\tstrojiti\t\tv.tr. ipf.
5203\tstrop\t\tm.
34283\tstrugati\t\tv.tr. ipf.
4989\tstruja\t\tf.
16363\tstruktura\t\tf.
36307\tstrukturny\t\tadj.
1097\tstruna\t\tf.
5680\tstrunny instrument\t\tm.
5681\tstrunny kvartet\t\tm.
34288\tstružka\t\tf.
1192\tstryjec\t\tm.anim.
15040\tstryjenka\t\tf.
1061\tstudent\t\tm.anim.
30811\tstudeny\t\tadj.
4714\tstudija\t\tf.
34943\tstudio\t\tn.
20190\tstudiovati\t\tv.tr. ipf.
33551\tstuditi\t\tv.tr. ipf.
2047\tstudnja\t\tf.
18916\tstukati do/na/v dveri\t\tv.ipf.
18913\tstukati\t\tv.intr. ipf.
18917\tstuknųti\t\tv.intr. pf.
3494\tstul\t\tm.
21926\tstųpati\t\tv.intr. ipf.
3890\tstųpenišče\t\tn.
3252\tstųpenj\t\tm.
21927\tstųpenj\t\tm.
21925\tstųpiti\t\tv.intr. pf.
36151\tstųpnica\t\tf.
17046\tstųpnjevańje\t\tn.sg.
12688\tstvår\t\tm.
6306\tstvarjati\t\tv.tr. ipf.
3293\tstvårno\t\tadv.
20191\tstvårnosť\t\tf.
3382\tstvor\t\tm.
6307\tstvoriti\t\tv.tr. pf.
3381\tstvorjeńje\t\tn.
18738\t#stvŕditi\t\tv.tr. pf.
12612\tstyčenj\t\tm.sg.
1404\tstyd\t\tm.sg.
22121\tstyk\t\tm.
36707\tsųbesědnik\t\tm.anim.
36617\tsubjekt\t\tm.
30812\tsubjektivizm\t\tm.sg.
32933\tsubjektivnosť\t\tf.
32932\tsubjektivny\t\tadj.
30813\tsublimacija\t\tf.
1062\tsųbota\t\tf.
5336\tsubstancija\t\tf.
34844\tsubtiľnosť\t\tf.
34843\tsubtiľny\t\tadj.
33717\tsubtitry\t\tm.pl.
17048\tsųći\t\tadj.
36616\tsųćnosť\t\tf.
20192\tsųćstveno\t\tadv.
20193\tsųćstveny\t\tadj.
35116\tsųčasnik\t\tm.anim.
20758\tsųčasnosť\t\tf.
17047\tsųčasny\t\tadj.
1487\tsųd\t\tm.
3636\tsųďba\t\tf.
2097\tsųditi\t\tv.tr. ipf.
22003\tsųditi\t\tv.tr. ipf.
21595\tsųďja\t\tm.anim.
6183\tsųdny denj\t\tm.
6195\tsųdny pozȯv\t\tm.
30814\tsųdny\t\tadj.
12700\tsųđeńje\t\tn.
1475\tsufiks\t\tm.
3524\tsuhaŕ\t\tm.
14307\tsųharmonizovati\t\tv.intr. pf.
3571\tsuhoplod\t\tm.
1775\tsuhy\t\tadj.
22324\tsujevěŕje\t\tn.
33733\tsuka\t\tf.
36237\t#suknja\t\tf.
35922\tsultan\t\tm.anim.
35923\tsultanat\t\tm.
1427\tsuma\t\tf.
35378\tsųměstimosť\t\tf.
35377\tsųměstimy\t\tadj.
3323\tsųmněńje\t\tn.
15047\tsųmněńje\t\tn.
3322\tsųmněvati sę\t\tv.refl. ipf.
18921\tsųmniteljny\t\tadj.
12709\tsųmnlivo\t\tadv.
12710\tsųmnlivy\t\tadj.
5042\tsųmråk\t\tm.
1304\tsųmŕkati sę\t\tv.refl. ipf.
565\tsųmŕknųti sę\t\tv.refl. pf.
21174\tsunųti\t\tv.tr. pf.
20199\tsųp\t\tm.anim.
32086\tsupa\t\tf.
15048\tsuper-\t\tprefix
35211\tsuperdŕžava\t\tf.
35239\tsuperheroj\t\tm.anim.
1445\tsupermarket\t\tm.
35050\tsųperničstvo\t\tn.sg.
1431\tsųpernik\t\tm.anim.
36869\tsupersila\t\tf.
35459\tsųpostaviti\t\tv.tr. pf.
35458\tsųpostavjati\t\tv.tr. ipf.
4922\tsųprotiv\t\tprep.
5134\tsųprovađati\t\tv.tr. ipf.
5135\tsųprovoditi\t\tv.tr. pf.
5136\tsųprovođeńje\t\tn.sg.
12724\tsųprųg\t\tm.anim.
12725\tsųprųga\t\tf.
21176\tsųprųgi\t\tm.pl.
18922\tsųprųžstvo\t\tn.
21167\tsųpųtnik\t\tm.anim.
35140\tsųråbota\t\tf.
5443\tsųråbotati\t\tv.intr. ipf.
5137\tsųråbotničstvo\t\tn.sg.
5335\tsųråbotnik\t\tm.anim.
20759\tsųråzměrnosť\t\tf.
20760\tsųråzměrny\t\tadj.
12727\tsurfist\t\tm.anim.
12726\tsurfovańje\t\tn.sg.
15050\tsurfovati\t\tv.intr. ipf.
22446\tSurinam\t\tm.sg.
22447\tsurinamsky\t\tadj.
16807\tsurovy\t\tadj.
1446\tsurpriz\t\tm.
35457\tsurrealizm\t\tm.sg.
1873\tsųsěd\t\tm.anim.
12734\tsųsědno do\t\tprep.
5731\tsųsědny\t\tadj.
5732\tsųsědsky\t\tadj.
5625\tsųsědstvo\t\tn.
34944\tsųsrědotočati sę\t\tv.refl. ipf.
16774\tsųsrědotočati\t\tv.tr. ipf.
36706\tsųsrědotočeny\t\tadj.
34945\tsųsrědotočiti sę\t\tv.refl. pf.
16775\tsųsrědotočiti\t\tv.tr. pf.
21796\tsųstav\t\tm.
21898\tsųstradańje\t\tn.
5168\tsųstrěća\t\tf.
20761\tsųstrěćati\t\tv.tr. ipf.
20762\tsųstrěsti\t\tv.tr. pf.
36636\tsuša\t\tf.
18925\tsušiti\t\tv.tr. ipf.
23008\tsųt\t\tv.aux. ipf.
18926\tsutener\t\tm.anim.
35497\tsuteren\t\tm.
566\tsųtruditi\t\tv.intr. ipf.
4536\tsųtrudničsky\t\tadj.
12513\tsųtrudničstvo\t\tn.sg.
36822\tsųtstvo\t\tn.
36821\tsųtstvovati\t\tv.intr. ipf.
21178\tsuvati\t\tv.tr. ipf.
148\tsuvenir\t\tm.
5765\tsuverenitet\t\tm.sg.
1433\tsuverenny\t\tadj.
22432\tsųvisly\t\tadj.
4462\tsųvlađeńje\t\tn.
32991\tsuzafon\t\tm.
22884\tsųznačny\t\tadj.
22942\tsųzvězďje\t\tn.
18927\tsųžalosť\t\tf.
23165\tsvabiti\t\tv.tr. pf.
35954\tsvahili\t\tm.indecl.
12754\tsvariti\t\tv.tr. pf.
22563\tsvariti\t\tv.tr. pf.
22564\tsvarjati\t\tv.tr. ipf.
18928\tsvat\t\tm.anim.
3734\tsvaťba\t\tf.
12750\tsvaťbena obrųčka\t\tf.
12752\tsvaťbena zabava\t\tf.
12753\tsvaťbeni sųprųgi\t\tm.pl.
12749\tsvaťbeny konvoj\t\tm.
15051\tsvaťbeny kostjum\t\tm.
12751\tsvaťbeny oděv\t\tm.
4287\tsvaťbeny\t\tadj.
15581\tsvaťbeny\t\tadj.
15723\tsvatiti sę\t\tv.refl. ipf.
16791\tSvazilend\t\tm.sg.
1744\tsvěća\t\tf.
2089\tsvęćennik\t\tm.anim.
18929\tsvęćeny\t\tadj.
35579\tsvědčiti\t\tv.intr. ipf.
22237\tsvědȯčstvo\t\tn.
21168\tsvědȯk\t\tm.anim.
12757\tsvědomje\t\tn.sg.
6219\tsvědomo\t\t#adv.
6217\tsvědomosť\t\tf.
6218\tsvědomy\t\tadj.
24005\tsvekr\t\tm.anim.
24006\tsvekrȯv\t\tf.
23721\tsvěriti sę\t\tv.refl. pf.
23720\tsvěrjati sę\t\tv.refl. ipf.
586\tsvěsť\t\tf.
35606\tsvěstny\t\tadj.
3137\tsvět\t\tm.
15054\t#Svět\t\tm.
35709\tsvętilišče\t\tn.
5237\tsvětilka\t\tf.
4892\tsvětiľnik\t\tm.
1440\tsvętiti\t\tv.tr. ipf.
23586\tsvětľny god\t\tm.
23587\tsvětľny rok\t\tm.
12770\tsvětlo luny\t\tn.sg.
12771\tsvětlo měsęca\t\tn.sg.
3284\tsvětlo\t\tn.
35044\tsvětlofor\t\tm.
35653\tsvětluška\t\tf.
30825\tsvětly\t\tadj.
22012\tsvětoběžnik\t\tm.anim.
30822\tsvętȯčny\t\tadj.
20200\tsvětoględ\t\tm.
20201\tsvętogrđeńje\t\tn.
12788\tsvętȯk\t\tm.
23659\tSvětova trgova organizacija\t\tf.sg.
36527\tsvětova vojna\t\tf.
23658\tSvětova zdråvstvena organizacija\t\tf.sg.
36526\tsvětovy\t\tadj.
36030\tsvetr\t\tm.
12772\tsvětsky\t\tadj.
36122\tSvęty Graal\t\tm.
3891\tsvęty hrånitelj\t\tm.anim.
2090\tsvęty\t\tadj.
15058\tsvęź\t\tm./f.
18741\tsvęź\t\tm./f.
3512\tsvęzany\t\tadj.
18749\tsvęzati šnurom\t\tv.tr. pf.
3538\tsvęzati\t\tv.tr. pf.
36359\tsvęznik\t\tm.
2320\tsvęzȯk\t\tm.
18752\tsvęzȯk\t\tm.
22205\tsvęzȯk\t\tm.
22206\tsvęzȯk\t\tm.
18758\tsvęzyvati šnurom\t\tv.ipf.
3514\tsvęzyvati\t\tv.tr. ipf.
5225\tsvěži\t\tadj.
15056\tsvila\t\tf.
22634\tsvinec\t\tm.sg.
1438\tsvinja\t\tf.
1439\tsvinovod\t\tm.anim.
18934\tsvinsky\t\tadj.
32216\tsvirěposť\t\tf.
32217\tsvirěposť\t\tf.
32212\tsvirěpy\t\tadj.
32219\tsvirěpy\t\tadj.
5689\tsvist\t\tm.
5686\tsvistati\t\tv.intr. ipf.
5687\tsvistnųti\t\tv.intr. pf.
5688\tsvistȯk\t\tm.
12787\tsvitańje\t\tn.
33575\tsviti\t\tv.tr. pf.
33576\tsviti\t\tv.tr. pf.
33577\tsviti\t\tv.tr. pf.
33578\tsviti\t\tv.tr. pf.
33579\tsviti\t\tv.tr. pf.
30829\tsvitȯk\t\tm.
1258\tsvoboda\t\tf.
23556\tsvobodna volja\t\tf.
13741\tsvobodno vrěmę\t\tn.sg.
20202\tsvobodno\t\tadv.
6041\tsvobodnomyslitelj\t\tm.anim.
12792\tsvobodnomysljny\t\tadj.
1977\tsvobodny\t\tadj.
22265\tsvod\t\tm.
22267\tsvod\t\tm.
22268\tsvodnik\t\tm.anim.
1099\tsvoj\t\tpron.poss.
22017\tsvojak\t\tm.anim.
22020\tsvojevlastny\t\tadj.
22304\tsvojevoljny\t\tadj.
34877\tsvojevrěmenno\t\tadv.
18387\tsvojevrěmennosť\t\tf.
34876\tsvojevrěmenny\t\tadj.
15059\tsvojnosť\t\tf.
18936\tsvojsko\t\tadv.
18935\tsvojsky\t\tadj.
18937\tsvojstvo\t\tn.
22019\tsvojstvo\t\tn.
22557\tsvorenj\t\tm.
18759\tsvråtno\t\tadv.
18760\tsvråtny\t\tadj.
26271\tsvråtny\t\tadj.
35023\tsvŕbęći\t\tadj.
35022\tsvŕběti\t\tv.tr. ipf.
35089\tsvŕček\t\tm.anim.
30833\tsvŕdlo\t\tn.
22590\tsvŕgati\t\tv.tr. ipf.
22592\tsvŕgnųti\t\tv.tr. pf.
12762\tsvŕh-\t\tprefix
12763\t#svŕhny\t\tadj.
30834\tsvŕhu\t\tadv.
783\tsyn\t\tm.anim.
21996\t#sypati\t\tv.tr. ipf.
1822\tsyr\t\tm.
36273\tsyrovatka\t\tf.
17572\tsyrovina\t\tf.
14999\tsyrovy\t\tadj.
33424\tsytiti\t\tv.tr. ipf.
35605\tsyty\t\tadj.
1474\tšablon\t\tm.
34385\tszadu\t\tadv.
35102\tšafa\t\tf.
33732\tšafran\t\tm.sg.
18763\tšah i mat\t\tm.
18764\tšahovnica\t\tf.
36776\tšahta\t\tf.
1054\tšahy\t\tm.pl.
23838\tšal, šalik\t\tm.
30839\tšal\t\tm.
18765\tšalěti\t\tv.intr. ipf.
22814\tšalěti\t\tv.intr. ipf.
23160\tšampansko\t\tn.
16910\tšampion\t\tm.anim.
16911\tšampionat\t\tm.
23159\tšampon\t\tm.
632\tšans\t\tm.
4354\tšantaž\t\tm.sg.
12799\tšantažovati\t\tv.tr. ipf.
1053\tšapka\t\tf.
22833\tšarlatan\t\tm.anim.
22834\tšarlatanstvo\t\tn.sg.
16843\tšarm\t\tm.sg.
30841\tšator\t\tm.
34895\tščęditi\t\tv.tr. ipf.
18778\tščedro\t\tadv.
18781\tščedrosť\t\tf.
18784\tščedry\t\tadj.
36035\tščekotati\t\tv.tr. ipf.
32117\tščenę\t\tn.
34186\tščeniti sę\t\tv.refl. ipf.
1463\tščęsťje\t\tn.
3653\tščęstlivo\t\tadv.
1545\tščęstlivy\t\tadj.
12812\tščęstno\t\tadv.
12814\tŠčęstnogo dnja rođeńja!\t\tintj.
12815\tŠčęstnogo Novogo Goda!\t\tintj.
12810\tŠčęstnogo Velikdnja!\t\tintj.
15060\tščęstnosť\t\tf.
12803\tščęstny\t\tadj.
12811\tŠčęstnyh svętkov!\t\tintj.
30844\tščetina\t\tf.
4780\tščetka\t\tf.
34644\tščigȯl\t\tm.anim.
18787\tščipati\t\tv.tr. ipf.
18788\tščipnųti\t\tv.tr. pf.
12816\tščit\t\tm.
12817\tščititi\t\tv.tr. ipf.
23661\tščitna žlěza\t\tf.
16378\tščrba\t\tf.
18789\tščur\t\tm.anim.
12821\tšef policije\t\tm.anim.
1468\tšef\t\tm.anim.
33271\tšepot\t\tm.
33270\tšeptati\t\tv.tr. pf.
18807\tšeršenj\t\tm.anim.
1739\tšesť\t\tnum.card.
3111\tšesťdesęt\t\tnum.card.
23688\tšesťdesęty\t\tnum.ord.
16456\tšesteraky\t\tnum.diff.
15592\tšesterčęta\t\tn.pl.
34563\tšesterka\t\tnum.subst.
16445\tšesterny\t\tnum.mult.
16433\tšestero\t\tnum.coll.
12832\tšestikųtnik\t\tm.
16402\tšestina\t\tnum.fract.
18808\tšestinožka\t\tf.
12831\tšestivųgȯľnik\t\tm.
16460\tšestka\t\tnum.subst.
1583\tšestnadsęť\t\tnum.card.
23684\tšestnadsęty\t\tnum.ord.
1582\tšesťsȯt, šesťsto\t\tnum.card.
1581\tšesty\t\tnum.ord.
23260\tšev\t\tm.
12835\tšifrovańje\t\tn.sg.
12840\tšifrovany\t\tadj.
12838\t#šifrovati\t\tv.tr. ipf.
12839\tšifrovati\t\tv.tr. ipf.
12841\tšija\t\tf.
34978\tšikarny\t\tadj.
34428\tšimpanz\t\tm.anim.
30851\tšina\t\tf.
36076\tšipka\t\tf.
4280\tširina\t\tf.
35766\tširiti\t\tv.tr. ipf.
4279\tširoko\t\tadv.
4281\tširokosť\t\tf.
196\tširoky\t\tadj.
20175\tširši\t\tadj.
36470\tšiška\t\tf.
23254\tšiti\t\tv.tr. ipf.
6149\tšizofreničny\t\tadj.
6148\tšizofrenija\t\tf.
35101\tškaf\t\tm.
34840\tškala, skala\t\tf.
23264\tškarpetka\t\tf.
3546\tškoda\t\tf.
4472\tškoditi\t\tv.intr. ipf.
6225\tškodlivy\t\tadj.
36097\tškodnik\t\tm.anim.
1584\tškola\t\tf.
4844\tškoliti\t\tv.tr. ipf.
35583\tškoľna tabla\t\tf.
15593\tškoľnik\t\tm.anim.
3884\tškoľny\t\tadj.
35055\tŠkot\t\tm.anim.
35056\tŠkotka\t\tf.
35053\tŠkotska\t\tf.sg.
35054\tškotsky\t\tadj.
5111\tšlěm\t\tm.
3885\tšlepati\t\tv.tr. ipf.
4713\tšlepnųti\t\tv.tr. pf.
34951\tšlifovati\t\tv.tr. ipf.
18830\tšljahetnosť\t\tf.
18831\tšljahetny\t\tadj.
18833\tšljahta\t\tf.
18837\tšljahtić\t\tm.anim.
18836\tšljahtička\t\tf.
36377\tšljuz\t\tm.
4303\tšlupa\t\tf.
34786\tšminka\t\tf.
18854\tšnur\t\tm.
12859\tšnurka\t\tf.
287\tšofer\t\tm.anim.
32668\tšofersko dozvoljeńje\t\tn.
1585\tšok\t\tm.
5727\tšokovany\t\tadj.
5726\tšokovati\t\tv.tr. ipf.
5728\tšokujųći\t\tadj.
263\tšolk\t\tm.sg.
36913\tšou\t\tm.indecl.
33663\tšovinist\t\tm.anim.
33664\tšovinističny\t\tadj.
33662\tšovinizm\t\tm.sg.
35886\t#špala\t\tf.
408\tŠpanija\t\tf.sg.
1980\tšpansky\t\tadj.
34845\tšpinat\t\tm.
3269\tšpion\t\tm.anim.
30857\tšpionaž\t\tm.sg.
32867\tšruba\t\tf.
30858\tštanga\t\tf.
1586\tštat\t\tm.
728\tštopati\t\tv.tr. ipf.
1476\tštučny\t\tadj.
18920\tšuba\t\tf.
2079\tšum\t\tm.
36820\tšuměti\t\tv.intr. ipf.
2346\tšumny\t\tadj.
3672\tšunka\t\tf.
1391\tŠvecija\t\tf.sg.
1420\tšvedsky\t\tadj.
2220\tŠvejcarija\t\tf.sg.
32452\tšvejcarsky\t\tadj.
1501\ttabak\t\tm.sg.
12884\ttabela\t\tf.
33409\ttabletka\t\tf.
13716\ttablo s izslědkami\t\tn.indecl.
36801\ttablo\t\tn.indecl.
30863\ttabor\t\tm.
20203\ttabu\t\tm.indecl.
23646\ttadžičsky, tadžiksky\t\tadj.
5996\tTadžikistan\t\tm.sg.
34023\ttajati\t\tv.tr. ipf.
30864\ttajemny\t\tadj.
4460\ttajeńje\t\tn.sg.
23302\ttajenstveny\t\tadj.
23303\ttajenstvo\t\tn.
32345\ttajfun\t\tm.
12886\ttajiti\t\tv.tr. ipf.
22767\tTajland\t\tm.sg.
12893\ttajna služba\t\tf.
6339\ttajna vojna\t\tf.
3892\ttajna\t\tf.
18940\ttajnica\t\tf.
12889\ttajnik\t\tm.anim.
4288\ttajnišče\t\tn.
21180\ttajnopis\t\tm.
21181\ttajnopisec\t\tm.anim.
4289\ttajnosť\t\tf.
12891\ttajny batalion\t\tm.
2957\ttajny\t\tadj.
4908\ttajsky\t\tadj.
6110\tTajvan\t\tm.sg.
3320\ttak, tako\t\tadv.
12905\ttako ... onako\t\tconj.
12909\ttako kako\t\tconj.
18941\ttako kazati\t\tphrase
625\ttako mnogo\t\tadv.
18942\ttako rěčeny\t\tadj.
12904\ttako skoro kako\t\tconj.
12915\ttako zvany\t\tadj.
12906\ttako že\t\tconj.
6311\ttakovy\t\tadj.
1716\ttakože\t\tadv.
23313\ttaksi\t\tm.indecl.
23314\ttaksometr\t\tm.
33583\ttaksonomičny\t\tadj.
33582\ttaksonomija\t\tf.
20205\ttaktika\t\tf.
12914\ttakto\t\tadv.
3099\ttaky\t\tadj.
20206\ttalent\t\tm.
32160\ttalija\t\tf.
4667\ttaliŕka\t\tf.
20207\ttalisman\t\tm.
1883\ttam\t\tadv.
32993\ttamburin\t\tm.
19560\ttamo\t\tadv.
2263\ttamtoj\t\tpron.dem.
20208\ttancevati\t\tv.intr. ipf.
36553\ttancor\t\tm.anim.
36554\ttancorka\t\tf.
23531\ttanec\t\tm.
845\ttank\t\tm.
22807\tTanzanija\t\tf.sg.
20763\ttarantula\t\tf.
1944\ttaśma\t\tf.
18956\ttata\t\tm.anim.
36568\ttatarsky\t\tadj.
36567\tTatarstan\t\tm.sg.
35689\ttatuaž\t\tm.
35688\ttatuovati\t\tv.tr. ipf./pf.
1816\ttę\t\tpron.pers.
5702\tte\t\tpron.dem.
3123\tteatr\t\tm.
32987\tteatraľny\t\tadj.
4805\ttebe\t\tpron.pers.
6069\ttečeńje\t\tn.
12935\ttečeńje\t\tn.
12936\ttečno\t\tadv.
12937\ttečnosť\t\tf.
12938\ttečny\t\tadj.
3793\ttęgati\t\tv.tr. ipf.
22027\ttęglivy\t\tadj.
49\ttęgnųti\t\tv.tr. ipf.
3124\ttehničny\t\tadj.
16348\ttehnik\t\tm.anim.
16349\ttehnika\t\tf.
16350\ttehnologičny\t\tadj.
1204\ttehnologija\t\tf.
32503\ttekila\t\tf.
30874\tTeksas\t\tm.sg.
2963\ttekst\t\tm.
1484\ttekstilj\t\tm.
5417\ttekti\t\tv.intr. ipf.
6078\ttekųći\t\tadj.
22062\ttekųći\t\tadj.
5242\ttekųtina\t\tf.
15074\ttelę\t\tn.
4640\ttelefon\t\tm.
16351\ttelefonovati\t\tv.intr. ipf.
5795\ttelegrama\t\tf.
23637\ttelekomunikacija\t\tf.
21596\tteleskop\t\tm.
5646\ttělesny\t\tadj.
3100\ttelętko\t\tn.
16353\tteleviděńje\t\tn.sg.
4399\ttelevizija\t\tf.
4400\ttelevizijny program\t\tm.
36770\ttelevizijny\t\tadj.
36571\ttelevizor\t\tm.
34672\tteliti sę\t\tv.refl. ipf.
36088\ttělo samoleta\t\tn.
1485\ttělo\t\tn.
459\ttělohrånitelj\t\tm.anim.
3330\ttema\t\tf.
17049\ttematičny\t\tadj.
35137\ttematika\t\tf.
34670\ttemněti\t\tv.intr. ipf.
30879\ttemnica\t\tf.
18958\ttemnolavandovy\t\tadj.
5116\ttemnosť\t\tf.
15075\ttemnota\t\tf.
30880\ttemnota\t\tf.
1749\ttemny\t\tadj.
1486\ttemperatura\t\tf.
36824\ttempo\t\tn.
16119\ttendencija\t\tf.
1483\ttenis\t\tm.sg.
2110\tteniska\t\tf.
18959\ttěnj\t\tm./f.
1577\ttenky\t\tadj.
32997\ttenor\t\tm.anim.
18960\tteolog\t\tm.anim.
18961\tteologija\t\tf.sg.
16822\tteoretično\t\tadv.
16821\tteoretičny\t\tadj.
4739\tteorija\t\tf.
32350\tteplica\t\tf.
12960\tteplo\t\tn.sg.
20764\tteploměr\t\tm.
15076\tteplota\t\tf.
35034\tteplovaty\t\tadj.
344\tteply\t\tadj.
32497\tterapevt\t\tm.anim.
18962\tterapija materskoj klětki\t\tf.
4740\tterapija\t\tf.
36837\ttercija\t\tf.
35451\tterier\t\tm.anim.
16121\tteritoriaľno\t\tadv.
529\tteritoriaľny\t\tadj.
3101\tteritorija\t\tf.
36149\ttermin dostojenstva\t\tm.
2091\ttermin\t\tm.
36593\ttermin\t\tm.
20765\ttermit\t\tm.anim.
23638\ttermodinamika\t\tf.
5107\tteror\t\tm.
34948\tterorist\t\tm.anim.
262\tterorističny\t\tadj.
16354\tterorizm\t\tm.sg.
36161\ttesati\t\tv.tr. ipf.
22093\ttěsnina\t\tf.
3894\ttěsno\t\tadv.
416\ttěsny\t\tadj.
2388\ttest\t\tm.
24003\ttesť\t\tm.anim.
4759\ttestament\t\tm.
18963\ttěsto\t\tn.
1443\ttestovati\t\tv.tr. ipf.
24004\ttešća\t\tf.
23785\ttěšiti sę iz\t\tv.refl. ipf.
15078\ttetenka\t\tf.
18965\ttętiva\t\tf.
2376\ttetka\t\tf.
15734\ttęznitelj\t\tm.anim.
6190\ttęžba\t\tf.
12971\ttęžina\t\tf.
20209\ttęžko\t\tadv.
22032\ttęžko\t\tadv.
22034\ttęžko\t\tadv.
22038\ttęžko\t\tadv.
18966\ttęžkosť\t\tf.
22039\ttęžkosť\t\tf.
5\ttęžky\t\tadj.
1970\ttęžky\t\tadj.
3654\ttęžky\t\tadj.
3895\ttęžky\t\tadj.
22036\ttęžky\t\tadj.
15737\ttęžnica\t\tf.
15736\ttęžnik\t\tm.anim.
21597\tthoŕ\t\tm.anim.
4809\tti\t\tpron.pers.
1969\ttigr\t\tm.anim.
1411\ttiho\t\tadv.
23499\tTihy okean\t\tm.sg.
1844\ttihy\t\tadj.
32992\ttimpany\t\tm.pl.
18967\ttinejdžer\t\tm.anim.
30888\ttinktura\t\tf.
3224\ttip\t\tm.
12989\ttipično\t\tadv.
12990\ttipičnosť\t\tf.
12991\ttipičny\t\tadj.
12992\ttipka\t\tf.
15080\ttipkati\t\tv.tr. ipf.
18970\ttipkovnica\t\tf.
1567\ttipografija\t\tf.
35973\ttipologičny\t\tadj.
35972\ttipologija\t\tf.
4665\ttir\t\tm.
32477\ttiran\t\tm.anim.
30889\ttiranija\t\tf.
36631\ttiranozavr\t\tm.
23615\ttiskaŕ\t\tm.anim.
23614\ttiskaŕstvo\t\tn.sg.
22091\ttiskati\t\tv.tr. ipf.
22090\ttisknųti\t\tv.tr. pf.
3360\ttišina\t\tf.
1492\ttitan\t\tm.sg.
35453\ttjulenj\t\tm.anim.
19008\ttjuŕma\t\tf.
30920\ttjutjun\t\tm.sg.
18971\ttkanina\t\tf.
35429\ttkanj\t\tf.
34856\ttkati\t\tv.tr. ipf.
22108\ttknųti sę\t\tv.refl. pf.
22099\ttknųti\t\tv.tr. pf.
22101\ttknųti\t\tv.tr. pf.
30892\ttlěńje\t\tn.sg.
30893\ttlěti\t\tv.intr. ipf.
16888\ttlo\t\tn.
34949\ttlo\t\tn.
1126\tťma\t\tf.
30894\ttoalet\t\tm.
34754\ttoaletny papir\t\tm.sg.
1507\ttobě\t\tpron.pers.
6312\ttočiti sę\t\tv.refl. ipf.
36477\ttočiti sę\t\tv.refl. ipf.
22055\ttočiti\t\tv.tr. ipf.
22057\ttočiti\t\tv.tr. ipf.
22058\ttočiti\t\tv.tr. ipf.
22059\ttočiti\t\tv.tr. ipf.
23447\ttočka s komojų\t\tf.
23446\ttočka s zapętojų\t\tf.
20211\ttočka zrěńja\t\tf.
5271\ttočka\t\tf.
13009\ttočno\t\tadv.
18975\ttočnosť\t\tf.
3593\ttočny\t\tadj.
35442\ttofi\t\tn.indecl.
2120\ttȯgda, tȯgdy\t\tadv.
2893\t#toj\t\tpron.dem.
20212\ttojže\t\tpron.dem.
3533\ttok\t\tm.
22060\ttok\t\tm.
22061\ttok\t\tm.
22063\ttokaŕ\t\tm.anim.
35317\ttokråtno\t\tadv.
18977\ttolerancija\t\tf.
34952\ttolerantny\t\tadj.
12901\ttoliko kako\t\tconj.
2144\ttoliko\t\tadv.
15082\ttoliko\t\tadv.
19597\ttolikråt\t\tadv.
19589\ttoliky\t\tadj.
33459\ttȯlkti\t\tv.intr. ipf.
18979\ttȯlmač\t\tm.anim.
873\ttȯlmačeńje\t\tn.
3896\ttȯlmačiti\t\tv.tr. ipf.
22\ttȯlpa\t\tf.
32229\ttȯlsto piśmo\t\tn.
13017\ttȯlstosť\t\tf.
2313\ttȯlsty\t\tadj.
30897\ttomat\t\tm.
4036\ttomu že\t\tconj.
4031\ttomu\t\tadv.
13020\ttomu\t\tadv.
3383\tton\t\tm.
368\ttona\t\tf.
30898\ttȯnky\t\tadj.
5337\ttonųti\t\tv.intr. ipf.
21598\ttonųti\t\tv.intr. ipf.
30899\ttopinambur\t\tm.
18982\ttopišče\t\tn.
1719\ttopiti\t\tv.tr. ipf.
36490\ttopografičny\t\tadj.
36489\ttopografija\t\tf.sg.
34561\ttopolja\t\tf.
36771\ttoponim\t\tm.
34035\ttȯptati\t\t#v.intr. ipf.
15560\ttorba do spańja\t\tf.
32241\ttorba\t\tf.
35480\ttorf\t\tm.
35108\ttornado\t\tn.
32489\ttors\t\tm.
33720\ttort\t\tm.
36541\ttost\t\tm.
36542\ttoster\t\tm.
32742\ttotalitarizm\t\tm.sg.
32743\ttotalitarny\t\tadj.
32744\ttotaľny\t\tadj.
15594\ttotožny\t\tadj.
2192\ttovar\t\tm.
4211\ttovariš\t\tm.anim.
34764\ttovariška\t\tf.
15073\ttovarna\t\tf.
13032\ttȯž\t\tadv.
2314\ttradicija\t\tf.
1458\ttradicijny\t\tadj.
16728\ttradicionalist\t\tm.anim.
2424\ttragedija\t\tf.
4401\ttragičny\t\tadj.
18984\ttrajati\t\tv.intr. ipf.
32481\ttrajny\t\tadj.
35712\tTrakija\t\tf.sg.
35713\ttrakijsky\t\tadj.
35141\ttraktat\t\tm.
35465\ttraktor\t\tm.
3103\ttramvaj\t\tm.
36650\ttrankvilizator\t\tm.
36329\ttranskribovati\t\tv.tr. ipf./pf.
16823\ttranskripcija\t\tf.
3947\ttransliteracija\t\tf.
3946\ttransliterovati\t\tv.tr. ipf.
6314\ttransparent\t\tm.
35430\ttransplantacija\t\tf.
18986\ttransport\t\tm.
36408\ttransportovati\t\tv.tr. ipf./pf.
36022\ttranzitna viza\t\tf.
35590\ttrasa\t\tf.
3602\ttrata\t\tf.
3276\ttratiti\t\tv.tr. ipf.
18987\ttratiti\t\tv.tr. ipf.
34953\ttratiti\t\tv.tr. ipf.
12\ttrava\t\tf.
13039\ttravenj\t\tm.sg.
21182\ttravimy\t\tadj.
21183\ttravjeńje\t\tn.sg.
31869\ttravma\t\tf.
31870\ttravmatizovati\t\tv.tr. ipf./pf.
18988\ttravnik\t\tm.
18989\ttravojed\t\tm.anim.
22949\ttravojedny\t\tadj.
13040\ttŕbuh\t\tm.
13041\ttŕbušny\t\tadj.
13048\ttrěba by bylo\t\tadv.
13049\ttrěba priznati\t\tphrase
13042\ttrěba\t\tadv.
18990\ttrěbovańje\t\tn.
1942\ttrěbovati\t\tv.aux. ipf.
32222\ttrefy\t\tf.pl.
36659\ttrejler\t\tm.
14736\ttrend\t\tm.
13052\ttrener\t\tm.anim.
3898\ttrening\t\tm.
3899\ttreningovy\t\tadj.
3897\ttrenovati\t\tv.tr. ipf.
16909\ttrepetati\t\tv.intr. ipf.
13058\ttręseńje\t\tn.
3523\ttrěsk\t\tm.
13064\ttręsti sę\t\tv.refl. ipf.
3902\ttręsti\t\tv.tr. ipf.
3826\ttreti\t\tv.tr. ipf.
13087\ttretina\t\tnum.fract.
20213\ttreťje\t\tadv.
439\ttreťji\t\tnum.ord.
2961\ttrevoga\t\tf.
3900\ttrevožiti sę\t\tv.refl. ipf.
34829\ttrevožiti\t\tv.tr. ipf.
32486\ttrevožny\t\tadj.
34673\ttrězvěti\t\tv.intr. ipf.
18991\ttrězvy\t\tadj.
2348\ttrg\t\tm.
22130\ttrgati\t\tv.tr. ipf.
22134\ttrgati\t\tv.tr. ipf.
22136\ttrgnųti\t\tv.tr. pf.
22137\ttrgnųti\t\tv.tr. pf.
36875\ttrgova komora\t\tf.
20216\ttrgovańje\t\tn.
3326\ttrgovati\t\tv.intr. ipf.
1413\ttrgovec\t\tm.anim.
20221\ttrgovišče\t\tn.
2300\ttrgovja\t\tf.
4260\ttrgovy\t\tadj.
1466\ttri\t\tnum.card.
36594\ttribuna\t\tf.
36633\ttriceratops\t\tm.
1774\ttridesęť, tridesęti\t\tnum.card.
23686\ttridesęty\t\tnum.ord.
16756\ttrik\t\tm.
2014\ttrikråtno\t\tadv.
4411\ttrikųtnik\t\tm.
4412\ttrikųtny\t\tadj.
36292\ttriler\t\tm.
20222\ttrilětny\t\tadj.
18992\ttrimati sę nečego\t\tv.refl. ipf.
15083\ttrimati\t\tv.tr. ipf.
986\ttrinadsęť\t\tnum.card.
23681\ttrinadsęty\t\tnum.ord.
274\ttrista, tristo\t\tnum.card.
36032\ttriumfaľny lųk\t\tm.
20223\ttriumfaľny\t\tadj.
35284\ttriviaľny\t\tadj.
15605\ttrivųgȯľnik\t\tm.
31871\ttrivyměrny\t\tadj.
34643\ttrizųbec\t\tm.
23724\ttŕn\t\tm.
23402\ttrofej\t\tm.
33555\ttroha\t\tf.
35111\ttrohy, trohų\t\tadv.
34541\tTroja\t\tf.sg.
16453\ttrojaky\t\tnum.diff.
34542\ttrojansky konj\t\tm.anim.
18994\ttrojce toliko\t\tadv.
15601\ttrojčęta\t\tn.pl.
16430\ttroje\t\tnum.coll.
16457\ttrojka\t\tnum.subst.
16439\ttrojny\t\tnum.mult.
18996\ttrojskok\t\tm.
32440\ttrolejbus\t\tm.
32442\ttrolj\t\tm.anim.
23435\ttrombon\t\tm.
988\ttron\t\tm.
974\ttropičny ciklon\t\tm.
34963\ttropičny\t\tadj.
5997\ttrotuar\t\tm.
18999\ttŕpělivosť\t\tf.
23990\ttŕpělivy\t\tadj.
36708\ttŕpěńje\t\tn.sg.
742\ttŕpěti\t\tv.intr. ipf.
3448\ttŕpěti\t\tv.tr. ipf.
18997\ttŕpimosť\t\tf.
18998\ttŕpimy\t\tadj.
5269\ttrųba\t\tf.
23424\ttrųba\t\tf.
976\ttrųbiti\t\tv.tr. ipf.
13095\ttrųbka poživjeńja\t\tf.
32851\ttrųbkozųb\t\tm.anim.
5270\ttrųboprovod\t\tm.
215\ttrud\t\tm.
1525\ttruditi\t\tv.intr. ipf.
13099\ttrudnosť\t\tf.
3093\ttrudny\t\tadj.
19001\ttrudoljubivo\t\tadv.
19002\ttrudoljubivosť\t\tf.
19004\ttrudoljubivy\t\tadj.
19000\ttrudoljubje\t\tn.sg.
5338\ttrup\t\tm.
23171\ttrutenj\t\tm.anim.
30913\ttrvaly\t\tadj.
35939\ttrvańje\t\tn.
1055\ttrvati\t\tv.intr. ipf.
33342\ttu i tam\t\tadv.
1758\ttu\t\tadv.
23436\ttuba\t\tf.
410\ttuberkuloza\t\tf.
4717\ttųdy\t\tadv.
36929\ttųga\t\tf.
22041\ttųgy\t\tadj.
20769\ttuk\t\tm.
1601\ttulipan\t\tm.
30916\ttulov\t\tm.
20770\ttunec\t\tm.anim.
34927\ttunel\t\tm.
5995\tTunizija\t\tf.sg.
34680\ttųpěti\t\tv.intr. ipf.
4775\ttųpy\t\tadj.
3095\tTurcija\t\tf.sg.
1691\tturečsky\t\tadj.
1598\tturist\t\tm.anim.
34965\tturističny\t\tadj.
34964\tturizm\t\tm.sg.
23641\tTurkmenistan\t\tm.sg.
23642\tturkmensky\t\tadj.
30890\tturkysovy\t\tadj.
13110\tturnir\t\tm.
3694\ttuš\t\tm.
15606\ttut\t\tadv.
15607\ttutčas\t\tadv.
15609\ttutčasno\t\tadv.
15610\ttutčasnosť\t\tadv.
15611\ttutčasny\t\tadj.
15612\ttutčasny\t\tadj.
15613\ttutdenj\t\tadv.
15614\ttutdenny\t\tadj.
1534\ttutoj\t\tpron.dem.
36086\ttutovo drěvo\t\tn.
22749\ttuzemec\t\tm.anim.
22043\ttųžiti sę\t\tv.refl. ipf.
22042\ttųžiti\t\tv.intr. ipf.
36093\ttvarog\t\tm.
35976\ttvid\t\tm.
2231\ttvoj\t\tpron.poss.
20224\ttvor\t\tm.
19010\ttvoŕba\t\tf.
19011\ttvorčestvo\t\tn.sg.
1548\ttvorčji\t\tadj.
35771\ttvorec\t\tm.anim.
4841\ttvoritelj\t\tm.anim.
5976\ttvoriteljnik, tvoriteljny padež\t\tm.
3030\ttvoriti\t\tv.tr. ipf.
22144\ttvorivo\t\tn.
17051\ttvorjeńje\t\tn.sg.
34703\ttvŕděti\t\tv.intr. ipf.
6111\ttvŕditi\t\tv.tr. ipf.
13118\ttvŕdnųti\t\tv.intr. ipf.
30923\ttvŕdo\t\tadv.
19015\ttvŕdoglåvy\t\tadj.
13119\ttvŕdosť\t\tf.
1532\ttvŕdy\t\tadj.
16802\ttvŕđa\t\tf.
1087\ttvŕđeńje\t\tn.
675\tty\t\tpron.pers.
19016\ttyčkoskok\t\tm.
13003\ttydenj\t\tm.
16128\ttydnjeva gazeta\t\tf.
12980\ttydnjevo\t\tadv.
13006\ttydnjevy žurnal\t\tm.
12981\ttydnjevy\t\tadj.
22111\ttykalo\t\tn.
22107\ttykati sę\t\tv.refl. ipf.
22098\ttykati\t\tv.tr. ipf.
22100\ttykati\t\tv.tr. ipf.
36405\ttykati\t\tv.tr. ipf.
30927\ttykva\t\tf.
19018\ttyl\t\tm.
16835\ttym ne menje\t\tadv.
31792\ttymijan\t\tm.
2389\ttysęć\t\tnum.card.
4694\ttysęćlěťje\t\tn.
20226\ttysęćlětny\t\tadj.
12999\ttysęćročje\t\tn.
4395\ttysęčny\t\tnum.ord.
4923\tu\t\tprep.
13142\tubědimy\t\tadj.
36667\tuběditi sę\t\tv.refl. pf.
4450\tuběditi\t\tv.tr. pf.
13145\tubědlivy\t\tadj.
20227\tuběđajųći\t\tadj.
36669\tuběđati sę\t\tv.refl. ipf.
4449\tuběđati\t\tv.tr. ipf.
13140\tuběđeńje\t\tn.
13141\tuběđenosť\t\tf.
23753\tuběđeny\t\tadj.
5448\tuběgati\t\tv.intr. ipf.
5449\tuběgti\t\tv.intr. pf.
23986\tuběžišče\t\tn.
277\tubijca\t\tm.anim.
279\tubijstvo\t\tn.
2129\tubiti\t\tv.tr. pf.
2130\tubivati\t\tv.tr. ipf.
13159\tubo\t\tconj.
19019\tubogy\t\tadj.
30934\tubrus\t\tm.
32790\tubrus\t\tm.
32792\tubrus\t\tm.
16873\tučarovany\t\tadj.
16871\tučarovati\t\tv.tr. pf.
16872\tučarovyvati\t\tv.tr. ipf.
19022\tučebnik\t\tm.
13160\tučebny\t\tadj.
2128\tučenica\t\tf.
13167\tučeničsky\t\tadj.
13161\tučenik\t\tm.anim.
17057\tučeńje\t\tn.sg.
22159\tučeńje\t\tn.sg.
13168\tučeny\t\tm.anim.
3767\tučęsťje\t\tn.sg.
13171\tučęstnica\t\tf.
774\tučęstničstvo\t\tn.sg.
5609\tučęstnik\t\tm.anim.
2948\tučęstvovati\t\tv.intr. ipf.
3327\tučet\t\tm.
16377\tučilišče\t\tn.
4448\tučinitelj\t\tm.anim.
2966\t#učiniti\t\tv.tr. pf.
19025\tučinȯk\t\tm.
916\tučitelj\t\tm.anim.
36678\tučiteljka\t\tf.
1531\tučiti sę\t\tv.refl. ipf.
1526\tučiti\t\tv.tr. ipf.
19026\tučtivy\t\tadj.
15097\tudača\t\tf.
15100\tudačlivy\t\tadj.
34973\tudačnik\t\tm.anim.
15099\tudačno\t\tadv.
34972\tudačny\t\tadj.
17095\tudaliti\t\tv.tr. pf.
17096\tudaliti\t\tv.tr. pf.
17052\tudaljati\t\tv.tr. ipf.
17094\tudaljati\t\tv.tr. ipf.
19028\tudaljeńje\t\tn.sg.
3394\tudaljenosť\t\tf.
3754\tudar\t\tm.
3710\tudariti\t\tv.tr. pf.
3709\tudarjati\t\tv.tr. ipf.
13955\tudarjeńje\t\tn.
34971\tudati sę\t\tv.refl. pf.
21184\tudav\t\tm.anim.
34970\tudavati sę\t\tv.refl. ipf.
31819\tudaviti\t\tv.tr. pf.
20228\tuděl\t\tm.
19031\tuděliti\t\tv.tr. pf.
19030\tuděljati\t\tv.tr. ipf.
20230\tudiviteljno\t\tadv.
35204\tudiviteljny\t\tadj.
3909\tudiviti\t\tv.tr. pf.
13199\tudivjajųći\t\tadj.
3349\t#udivjati sę\t\tv.refl. ipf.
3910\tudivjati\t\tv.tr. ipf.
4219\tudivjeńje\t\tn.sg.
5966\tudivjeny\t\tadj.
15102\tudobno\t\tadv.
19034\tudobnosť\t\tf.
19035\tudobny\t\tadj.
35884\tudobstvo\t\tn.
4209\tudoskonaliti\t\tv.tr. pf.
19039\tudŕžati sę od\t\tv.refl. pf.
19037\tudŕžati\t\tv.tr. pf.
19043\tudŕživati sę od\t\tv.refl. ipf.
19041\tudŕživati\t\tv.tr. ipf.
15222\tudušeny\t\tadj.
5562\tudušiti\t\tv.tr. pf.
13203\tudvojeny\t\tadj.
13202\tudvojiti\t\tv.tr. pf.
23937\tugadati\t\tv.tr. pf.
23939\tugadyvańje\t\tn.sg.
23938\tugadyvati\t\tv.tr. ipf.
2291\tugasnųti\t\tv.intr. pf.
1542\tugašati\t\tv.intr. ipf.
5820\tuględati\t\tv.tr. ipf.
5821\tuględěti\t\tv.tr. pf.
19045\tugodny\t\tadj.
13210\tugovor\t\tm.
5595\tugryzti\t\tv.tr. pf.
33407\tuhađati za\t\tv.intr. ipf.
36054\tuho, uško [@]\t\tn.
830\tuho\t\tn.
5482\tuhoditi\t\tv.intr. ipf.
32521\tuhovŕtka\t\tf.
13898\tuj, ujec\t\tm.anim.
5483\tujdti\t\tv.intr. pf.
13223\tujediniti\t\tv.tr. pf.
13224\tujedinjati\t\tv.tr. ipf.
5495\tujehati\t\tv.intr. pf.
15166\tujenka\t\tf.
19048\tujęti\t\tv.tr. pf.
5496\tuježđati\t\tv.intr. ipf.
5930\tUjgur\t\tm.anim.
5931\tujgursky\t\tadj.
19050\tujmati\t\tv.tr. ipf.
13227\tukaz\t\tm.
20238\tukazańje\t\tn.
20239\tukazatelj\t\tm.
17053\tukazateljny zaimennik\t\tm.
20241\tukazati\t\tv.tr. pf.
20242\tukazyvati\t\tv.tr. ipf.
32011\tuklåti\t\tv.tr. pf.
17054\tukončeny\t\tadj.
19052\tukrađeńje\t\tn.
3049\tUkrajina\t\tf.sg.
596\tUkrajinec\t\tm.anim.
831\tukrajinsky\t\tadj.
23168\tukrasiti\t\tv.tr. pf.
941\tukrasti\t\tv.tr. pf.
23167\tukrašati\t\tv.tr. ipf.
23169\tukrašeńje\t\tn.
32100\tukrěpiti\t\tv.tr. pf.
32101\tukrěpjati\t\tv.tr. ipf.
31993\tukrotiti\t\tv.tr. pf.
4176\tukryti\t\tv.tr. pf.
36507\tukryťje\t\tn.
13236\tukryty\t\tadj.
4177\tukryvańje\t\tn.sg.
13238\tukryvatelj\t\tm.anim.
4175\tukryvati\t\tv.tr. ipf.
17719\tukųsiti\t\tv.tr. pf.
23841\tulagađati\t\tv.tr. ipf.
23839\tulagoditi\t\tv.tr. pf.
35072\tulegšati\t\tv.tr. ipf.
35071\tulegšiti\t\tv.tr. pf.
4849\tulěpšati\t\tv.tr. ipf.
6055\tulěpšeńje\t\tn.
4850\tulěpšiti\t\tv.tr. pf.
5450\tulětati\t\tv.intr. ipf.
5451\tuletěti\t\tv.intr. pf.
2098\tulica\t\tf.
24015\tulična lampa\t\tf.
20243\tulja\t\tf.
5743\tulomȯk\t\tm.
5744\tulomȯk\t\tm.
36550\tulov\t\tm.
23647\tultrafioletovo světlo\t\tn.sg.
35757\tultrafioletovy\t\tadj.
20771\tulučati\t\tv.tr. ipf.
20772\tulučiti\t\tv.tr. pf.
35312\tulučšati\t\tv.tr. ipf.
35313\tulučšeńje\t\tn.
35311\tulučšiti\t\tv.tr. pf.
13252\tum\t\tm.
21599\tumarjajųći\t\tadj.
20774\tumarjati\t\tv.tr. ipf.
13531\tuměńje\t\tn.
4101\tumenšati\t\tv.tr. ipf.
4099\tumenšiti\t\tv.tr. pf.
23047\tuměriti\t\tv.tr. pf.
34979\tuměrjati\t\tv.tr. ipf.
20775\tuměrjeny\t\tadj.
3963\tuměstiti\t\tv.tr. pf.
30950\tuměstno\t\tadv.
32794\tuměstny\t\tadj.
3965\tuměšćati\t\tv.tr. ipf.
19055\tuměšćeńje\t\tn.
389\tuměti\t\tv.aux. ipf.
23046\tumětna inteligencija\t\tf.
19056\tumětnica\t\tf.
19057\tumětničsko\t\tadv.
13267\tumětničsky\t\tadj.
13268\tumětnik\t\tm.anim.
2290\tumětnosť\t\tf.
4842\tumětny\t\tadj.
872\tumirati\t\tv.intr. ipf.
13271\tumnik\t\tm.anim.
13272\tumno\t\tadv.
13273\tumnosť\t\tf.
13274\tumny\t\tadj.
22167\tumny\t\tadj.
22168\tumny\t\tadj.
15111\tumoliti\t\tv.tr. pf.
15112\tumoljati\t\tv.tr. ipf.
2980\tumoriti sę\t\tv.refl. pf.
20778\tumoriti\t\tv.tr. pf.
21601\tumorjeńje\t\tn.sg.
13277\tumorjenosť\t\tf.
594\tumorjeny\t\tadj.
4543\tumožniti\t\tv.tr. pf.
4542\tumožnjati\t\tv.tr. ipf.
35384\tumrěly\t\tadj.
977\tumreti\t\tv.intr. pf.
20779\tumŕtviti\t\tv.tr. pf.
20781\tumŕtvjati\t\tv.tr. ipf.
20783\tumysl\t\tm.
20245\tumysľno\t\tadv.
20246\tumysľny\t\tadj.
5290\tumyti\t\tv.tr. pf.
5285\tumyvaľnik\t\tm.
16380\tumyvati\t\tv.tr. ipf.
13286\tunarodniti\t\tv.tr. pf.
13289\tunarodnjati\t\tv.tr. ipf.
13284\tunarodnjeńje\t\tn.
13292\tunemožniti\t\tv.tr. pf.
13293\tunemožnjati\t\tv.tr. ipf.
2100\tuneviniti\t\tv.tr. pf.
1131\tunevinjati\t\tv.tr. ipf.
35913\tuniforma\t\tf.
13296\tunija\t\tf.
35322\tunikaľnosť\t\tf.
35026\tunikaľny\t\tadj.
1708\tUnikod\t\tm.sg.
33260\tuniščeńje\t\tn.
978\tuniščiti\t\tv.tr. pf.
3072\tuniversaľny\t\tadj.
1547\tuniversitet\t\tm.
4508\tuniziti\t\tv.tr. pf.
4223\tunižajųći\t\tadj.
4507\tunižati\t\tv.tr. ipf.
4509\tunižeńje\t\tn.
19059\t#unižnosť\t\tf.
36186\tuosobjeńje\t\tn.
4662\tupad\t\tm.
21185\tupadȯk\t\tm.
19060\tupakovati\t\tv.tr. pf.
19061\tupakovyvati\t\tv.tr. ipf.
1060\tupasti\t\tv.intr. pf.
5537\tupekti\t\tv.tr. pf.
13312\tuperiti\t\tv.tr. pf.
5579\tupiti sę\t\tv.refl. pf.
438\tupity\t\tadj.
5578\tupivati sę\t\tv.refl. ipf.
19064\tupodabnjati sę\t\tv.refl. ipf.
19062\tupodabnjati\t\tv.tr. ipf.
19068\tupodobniti sę\t\tv.refl. pf.
19066\tupodobniti\t\tv.tr. pf.
5897\tupokarnjati\t\tv.tr. ipf.
5896\tupokorniti\t\tv.tr. pf.
3778\tupȯlnomoćeny\t\tadj.
1419\tupȯlnomoćevati\t\tv.tr. ipf.
1779\tupȯlnomoćiti\t\tv.tr. pf.
19070\tuporny\t\tadj.
35654\tupotrěba\t\tf.
4539\tupotrěbimy\t\tadj.
4374\tupotrěbitelj\t\tm.anim.
3092\tupotrěbiti\t\tv.tr. pf.
1388\tupotrěbjati\t\tv.tr. ipf.
1505\tupotrěbjeńje\t\tn.
13330\tuprava\t\tf.
5077\tupravitelj\t\tm.anim.
21194\tupraviti\t\tv.tr. pf.
13332\tupravjati\t\tv.tr. ipf.
21198\tupravjati\t\tv.tr. ipf.
20247\tupravjeńje\t\tn.
32775\tupręž\t\tf.
30955\tupyŕ\t\tm.anim.
35097\turagan\t\tm.
35064\tUral\t\tm.sg.
35063\turaľsky\t\tadj.
1569\turan\t\tm.sg.
23648\tUran\t\tm.sg.
3749\turåvenj\t\tm./f.
20252\turåvniti\t\tv.tr. pf.
20248\turåvnjati\t\tv.tr. ipf.
1028\turaza\t\tf.
1030\turaziti\t\tv.tr. pf.
33390\turazlivy\t\tadj.
622\turažati\t\tv.tr. ipf.
33392\turaženy\t\tadj.
3762\turęd\t\tm.
22369\turęditi\t\tv.tr. pf.
21203\turędnik\t\tm.anim.
22366\turęđati\t\tv.tr. ipf.
21603\turěkati\t\tv.tr. ipf.
21605\turěkti\t\tv.tr. pf.
6330\t#urězati\t\tv.tr. pf.
6332\turězyvati\t\tv.tr. ipf.
32789\turna\t\tf.
34981\turod\t\tm.
1896\turoditi sę\t\tv.refl. pf.
1556\turoditi\t\tv.tr. pf.
21608\turoditi\t\tv.tr. pf.
1660\turodlivy\t\tadj.
21607\turođaj\t\tm.
15116\turođeńje\t\tn.
21609\turok\t\tm.
22448\tUrugvaj\t\tm.sg.
22449\turugvajsky\t\tadj.
23943\turvati\t\tv.tr. pf.
23940\turyvati\t\tv.tr. ipf.
19076\tusęsti\t\tv.intr. pf.
1100\tusiliti\t\tv.tr. pf.
1432\tusiljati\t\tv.tr. ipf.
1614\tusiľje\t\tn.
6317\tusiljeńje\t\tn.
4246\tusilovati\t\tv.intr. ipf.
35318\tuskoriti\t\tv.tr. pf.
35319\tuskorjati\t\tv.tr. ipf.
36313\tuskorjeńje\t\tn.
3094\tuslovje\t\tn.
1618\tuslovny\t\tadj.
15117\tusložniti\t\tv.tr. pf.
15118\tusložnjati\t\tv.tr. ipf.
5128\tusluga\t\tf.
1552\tuslyšati\t\tv.tr. pf.
1624\tusměh\t\tm.
1634\tusměhati sę\t\tv.refl. ipf.
1615\tusměhnųti sę\t\tv.refl. pf.
20789\tusmŕćati\t\tv.tr. ipf.
20790\tusmŕtiti\t\tv.tr. pf.
21615\tusnųti\t\tv.intr. pf.
5453\tusȯhnųti\t\tv.intr. pf.
1616\tuspěh\t\tm.
13362\tuspěhlivy\t\tadj.
15631\tuspěšnica\t\tf.
15632\tuspěšnik\t\tm.anim.
3912\tuspěšno\t\tadv.
3911\tuspěšny\t\tadj.
4042\tuspěti\t\tv.intr. pf.
5565\tuspěvati\t\tv.intr. ipf.
1590\tuspokajati\t\tv.tr. ipf.
5877\tuspokojeńje\t\tn.sg.
13373\tuspokojeny\t\tadj.
1589\tuspokojiti\t\tv.tr. pf.
3830\tusposabjati\t\tv.tr. ipf.
3831\tusposobiti\t\tv.tr. pf.
20256\tuspravědliviti\t\tv.tr. pf.
36409\tuspravědlivjati\t\tv.tr. ipf.
20257\tuspravědlivjeńje\t\tn.
21618\tusŕdny\t\tadj.
1530\tusta\t\tn.pl.
21808\tustaliti\t\tv.tr. pf.
21801\tustaljati\t\tv.tr. ipf.
23293\tustaljeny\t\tadj.
13386\tustalosť\t\tf.
13387\tustaly\t\tadj.
5132\tustanavjati\t\tv.tr. ipf.
34983\tustanovitelj\t\tm.anim.
5133\tustanoviti\t\tv.tr. pf.
13384\tustanovjeny\t\tadj.
16470\tustati\t\tv.intr. pf.
21799\tustati\t\tv.intr. pf.
21809\tustav\t\tm.
21810\tustav\t\tm.
13388\tustavati\t\tv.intr. ipf.
21798\tustavati\t\tv.intr. ipf.
3952\tustaviti\t\tv.tr. pf.
3951\tustavjati\t\tv.tr. ipf.
3953\tustavjeńje\t\tn.
35232\tustavny\t\tadj.
33597\tusťje\t\tn.
5169\tustny\t\tadj.
21923\tustrajati\t\tv.tr. ipf.
31998\tustrica\t\tf.
3913\tustroj\t\tm.
19090\tustrojitelj\t\tm.anim.
21924\tustrojiti\t\tv.tr. pf.
19095\tustrojstvo\t\tn.sg.
732\tustųpati\t\tv.tr. ipf.
21973\tustųpati\t\tv.intr. ipf.
1648\tustųpiti\t\tv.tr. pf.
21977\tustųpiti\t\tv.intr. pf.
15120\tustųpjeńje\t\tn.
1650\tustųpka\t\tf.
6047\tustųpny\t\tadj.
5452\tusyhati\t\tv.intr. ipf.
4877\tuši\t\tf.pl.
5421\tutěkati\t\tv.intr. ipf.
6067\tutěkati\t\tv.intr. ipf.
5420\tutekti\t\tv.intr. pf.
6068\tutekti\t\tv.intr. pf.
19097\tutekųćiniti\t\tv.tr. pf.
19096\tutekųćinjati\t\tv.tr. ipf.
36193\tutělesniti\t\tv.tr. pf.
36192\tutělesnjati\t\tv.tr. ipf.
13409\tutes\t\tm.
23664\tutěšati\t\tv.tr. ipf.
23668\tutěšeńje\t\tn.
23665\tutěšiti\t\tv.tr. pf.
13410\tutęžati\t\tv.tr. ipf.
13411\tutęžiti\t\tv.tr. pf.
36461\tutilitarny\t\tadj.
13412\tutirak\t\tm.
13414\tutirati\t\tv.tr. ipf.
34180\tutišati\t\tv.tr. ipf.
34183\tutišiti\t\tv.tr. pf.
35669\tutočniti\t\tv.tr. pf.
35670\tutočnjati\t\tv.tr. ipf.
35671\tutočnjeńje\t\tn.
3834\tutomljeny\t\tadj.
21620\tutonųti\t\tv.intr. pf.
32389\tutopičny\t\tadj.
32388\tutopija\t\tf.
32390\tutopist\t\tm.anim.
35924\tutopizm\t\tm.sg.
12635\tutraćati čas\t\tv.ipf.
21621\tutraćati sę\t\tv.refl. ipf.
12636\tutraćati udobnomožnosť\t\tv.ipf.
12637\tutraćati vrěmę\t\tv.ipf.
12638\tutraćati vse\t\tv.ipf.
2939\tutraćati\t\tv.tr. ipf.
5068\tutraćeny\t\tadj.
3730\tutrata\t\tf.
21623\tutratiti sę\t\tv.refl. pf.
12663\tutratiti\t\tv.tr. pf.
34029\tutreti\t\tv.tr. pf.
8365\tutrišnji, utrišny\t\tadj.
392\tutro\t\tn.
23793\tutrom\t\tadv.
3818\tutŕpěti\t\tv.tr. pf.
13417\tutrudniti\t\tv.tr. pf.
13418\tutrudnjati\t\tv.tr. ipf.
1651\tutvŕditi\t\tv.tr. pf.
36404\tutvŕditi\t\tv.tr. pf.
393\tutvŕđati\t\tv.tr. ipf.
36403\tutvŕđati\t\tv.tr. ipf.
13421\tutvŕđeńje\t\tn.
13422\tuvadnjati\t\tv.tr. ipf.
5188\tuvaga\t\tf.
19100\tuvaljnjati sę od\t\tv.refl. ipf.
19099\tuvaljnjati sę\t\tv.refl. ipf.
3555\tuvaljnjati\t\tv.tr. ipf.
3562\tuvaljnjati\t\tv.tr. ipf.
13423\tuvažańje\t\tn.sg.
4483\tuvažati\t\tv.tr. ipf.
22178\tuvažati\t\tv.tr. ipf.
19102\tuvažiti\t\tv.tr. pf.
19104\tuvažny\t\tadj.
1620\tuvědamjati\t\tv.tr. ipf.
23949\tuvędati\t\tv.intr. ipf.
23951\tuvędnųti\t\tv.intr. pf.
1619\tuvědomiti\t\tv.tr. pf.
5853\tuvědomjeńje\t\tn.
1611\tuvědomjeny\t\tadj.
30958\tuvěkověčiti\t\tv.tr. pf.
22289\tuveličati\t\tv.tr. ipf.
35060\tuveličeńje\t\tn.
22290\tuveličiti\t\tv.tr. pf.
36668\tuvěriti sę\t\tv.refl. pf.
199\tuvěriti\t\tv.tr. pf.
200\tuvěriti\t\tv.tr. pf.
36670\tuvěrjati sę\t\tv.refl. ipf.
1649\tuvěrjati\t\tv.tr. ipf.
3200\tuvěrjeno\t\tadv.
13434\tuvěrjenosť\t\tf.
1599\tuvěrjeny\t\tadj.
23438\tuvertura\t\tf.
36555\tuvęznųti\t\tv.intr. pf.
5555\tuviděti\t\tv.tr. pf.
13444\tuvodniti\t\tv.tr. pf.
19108\tuvoljniti sę od\t\tv.refl. pf.
19107\tuvoljniti sę\t\tv.refl. pf.
3558\tuvoljniti\t\tv.tr. pf.
3560\tuvoljniti\t\tv.tr. pf.
30961\tuvularny\t\tadj.
23643\tuzbečsky, uzbeksky\t\tadj.
5932\tUzbek\t\tm.anim.
5933\tUzbekistan\t\tm.sg.
32759\tuzda\t\tf.
13455\tuzdråvitelj\t\tm.anim.
15123\tuzdråviti\t\tv.tr. pf.
15124\tuzdravjati\t\tv.tr. ipf.
35065\tuznańje\t\tn.sg.
3805\tuznati\t\tv.tr. pf.
3804\tuznavati\t\tv.tr. ipf.
4044\tuzrěti\t\tv.tr. pf.
36459\tuzurpator\t\tm.anim.
36458\tuzurpovati\t\tv.tr. ipf./pf.
16917\tuž ne\t\tadv.
114\tuž, uže\t\tadv.
13461\tužas\t\tm.
5105\tužasati\t\tv.tr. ipf.
5865\tužasneny\t\tadj.
20258\tužasno\t\tadv.
5106\tužasnųti\t\tv.tr. pf.
13465\tužasny\t\tadj.
22932\tužiti\t\tv.tr. pf.
30964\tuživańje\t\tn.
22931\tuživati\t\tv.tr. ipf.
1606\tv času\t\tprep.
19109\tv domu\t\tadv.
4945\tv imenu\t\tprep.
3615\tv koncu\t\tadv.
13474\tv mig oka\t\tadv.
13472\tv mig\t\tadv.
13476\tv obličju prava\t\tadv.
13478\tv obličju trudnostij\t\tadv.
19113\tv odnošeńju k\t\tprep.
13480\tv odråzlikě od\t\tprep.
35517\tv porędku\t\tadv.
5954\tv prošlȯm godu\t\tadv.
17089\tv protivnosti k\t\tprep.
5156\tv ramkah\t\tprep.
3245\tv råzličji od\t\tprep.
36234\tv směru strělky časovnika\t\tadv.
30967\tv sumě\t\tadv.
4948\tv svęzi s\t\tprep.
19117\tv tečeńju\t\tprep.
13485\tv tom samom vrěmenu\t\tadv.
5829\tv vrěmenu\t\tprep.
13486\tv vśakom slučaju\t\tadv.
15193\tv zaměn za\t\tprep.
13990\tv zaměn\t\tadv.
1607\tv, vo\t\tprep.
3982\tv, vo\t\tprep.
23166\tvabik\t\tm.
23164\tvabiti\t\tv.tr. ipf.
30970\tvaflja\t\tf.
5645\tvaga\t\tf.
22173\tvaga\t\tf.
21638\tvagati sę\t\tv.refl. ipf.
35086\tvagina\t\tf.
1608\tvagon\t\tm.
30973\tvagonetka\t\tf.
30974\tVagy\t\tf.pl.
36927\tvajatelj\t\tm.anim.
36914\tvajati\t\tv.tr. ipf.
30978\tvakacije\t\tf.pl.
30979\tvakancija\t\tf.
30980\tvakantny\t\tadj.
30981\tvakcina\t\tf.
30983\tvakuum\t\tm.
22184\tval\t\tm.
30984\tval\t\tm.
13489\tvala\t\tf.
20283\tvalec\t\tm.
30987\tvalenky\t\tm.pl.
30988\tvalentnosť\t\tf.
30989\tvaleriana\t\tf.
30990\tvalerianka\t\tf.
31853\tvalet\t\tm.anim.
34976\tvalisty papugajek\t\tm.anim.
3472\tvaliti\t\tv.tr. ipf.
30996\tvaljati sę\t\tv.refl. ipf.
22181\tvaljati\t\tv.tr. ipf.
30997\tvaljcevati\t\tv.intr. ipf./pf.
30998\tvalkirija\t\tf.
30999\tvals\t\tm.
31000\tvalsovati\t\tv.intr. ipf.
23462\tvaltorna\t\tf.
31005\tvaltornist\t\tm.anim.
1698\tvaluta\t\tf.
1553\tvam\t\tpron.pers.
31007\tvampir\t\tm.anim.
22619\tvanadij\t\tm.sg.
31009\tvandal\t\tm.anim.
31010\tvandalizm\t\tm.sg.
31012\tvanilin\t\tm.sg.
31011\tvanilja\t\tf.
3450\tvanna\t\tf.
31014\tvanta\t\tf.
31015\tvapno\t\tn.
17058\tvariacija\t\tf.
17059\tvariant\t\tm.
31021\tvariete\t\tn.indecl.
31022\tvariovati\t\tv.intr. ipf./pf.
5210\tvariti\t\tv.tr. ipf.
31024\tVarjag\t\tm.anim.
21211\tvarjeńje\t\tn.sg.
21212\tvarlivy\t\tadj.
23518\tVaršava\t\tf.sg.
19513\tVaršavsky Dogovor\t\tm.sg.
31025\tvarvar\t\tm.anim.
31026\tvarvarizm\t\tm.sg.
31027\tvarvarsky\t\tadj.
2413\tvas\t\tpron.pers.
31028\tvasal\t\tm.anim.
32779\tvasaľna dŕžava\t\tf.
1631\tvaš\t\tpron.poss.
31032\tvat\t\tm.
31033\tvata\t\tf.
31035\tvaterlinija\t\tf.
31038\tVatikan\t\tm.sg.
31039\tvavilonsky\t\tadj.
31040\tvaza\t\tf.
19160\tvazektomija\t\tf.
31041\tvazelin\t\tm.
13495\tvažeńje\t\tn.
6005\tvažiti\t\tv.tr. ipf.
20808\tvažka\t\tf.
13502\tvažno\t\tadv.
19161\tvažnosť\t\tf.
1632\tvažny\t\tadj.
34878\tvčasno\t\tadv.
34879\tvčasnosť\t\tf.
34880\tvčasny\t\tadj.
1067\tvčera\t\tadv.
35266\tvčerašnji, včerašny\t\tadj.
19119\tvčleniti\t\tv.tr. pf.
19118\tvčlenjati\t\tv.tr. ipf.
13505\tvdęčno\t\tadv.
4902\tvdęčnosť\t\tf.
4900\tvdęčny\t\tadj.
31046\tvděti niť v iglų\t\tv.tr. pf.
32941\tvděvati niť v iglų\t\tv.tr. ipf.
23788\tvdȯhnųti\t\tv.tr. pf.
3075\tvdol\t\tadv.
464\tvdova\t\tf.
4284\tvdovec\t\tm.anim.
23787\tvdyhati\t\tv.tr. ipf.
3916\tvebmaster\t\tm.anim.
3074\tveb-sajt, vebsajt\t\tm.
35238\tveb-strånica\t\tf.
1635\tvěć\t\tf.
34902\tvęće ili menje\t\tadv.
4546\tvęće\t\tadv.
22402\tvěće\t\tn.
2264\tvęćinstvo\t\tn.
412\tvęćši\t\tadj.
1653\tvečer\t\tm.
2416\tvečerja\t\tf.
13519\tvečerjati\t\tv.intr. ipf.
23796\tvečerny\t\tadj.
1637\tvečerȯm\t\tadv.
13524\tvěčno\t\tadv.
15634\tvěčnosť\t\tf.
1657\tvěčny\t\tadj.
15126\tvěda\t\tf.
15127\tvěděńje\t\tn.sg.
15128\tvěděti\t\tv.tr. ipf.
31102\tvędly\t\tadj.
4829\tvěďma\t\tf.
13647\tvěďmak\t\tm.anim.
13644\tvędneńje\t\tn.sg.
13642\tvędneny\t\tadj.
15130\tvědnosť\t\tf.
13643\tvędnųti\t\tv.intr. ipf.
36420\tvědomo\t\tadv.
22209\tvědomosť\t\tf.
20284\tvědomy\t\tadj.
1306\tvědro\t\tn.
31063\tvegetacija\t\tf.
31064\tvegetarianec\t\tm.anim.
32754\tvegetarianka\t\tf.
31065\tvegetariansky\t\tadj.
31066\tvegetativny\t\tadj.
36311\tvějalo\t\tn.
36312\tvějaŕ\t\tm.
31068\tvějati\t\tv.intr. ipf.
4110\tvěk\t\tm.
4616\tvěk\t\tm.
31073\tvěko\t\tn.
31074\tvěko\t\tn.
31075\tveksel\t\tm.
31076\tvektor\t\tm.
31092\tvelarny\t\tadj.
3047\tvelblųd\t\tm.anim.
19165\tvelebny\t\tadj.
22283\tvelebny\t\tadj.
31078\tvelen\t\tm.
36868\tvelesila\t\tf.
31079\t#velěti\t\tv.tr. ipf.
13545\tveličejši\t\tadj.
5286\tveličina\t\tf.
31083\tveličje\t\tn.sg.
22284\tveličstveny\t\tadj.
22285\tveličstvo\t\tn.
31084\tVelika Britanija\t\tf.sg.
16374\tVelika Noć\t\tf.
13539\tvelikan\t\tm.anim.
16373\tVelikdenj\t\tm.
19169\tvelikodušno\t\tadv.
19170\tvelikodušnosť\t\tf.
19172\tvelikodušny\t\tadj.
22286\tvelikolěpny\t\tadj.
35595\tvelikosť\t\tf.
31091\tvelikosvetsky\t\tadj.
689\tveliky gråd\t\tm.
130\tveliky palec\t\tm.
10461\tVeliky Pętȯk\t\tm.
19168\tveliky šlem\t\tm.
6\tveliky\t\tadj.
21639\tvelje\t\tadv.
21641\tvelje\t\tadv.
13547\tveľmi rano\t\tadv.
13549\tVeľmi Važna Osoba\t\tf.
13546\tveľmi\t\tadv.
20809\tveľmoža\t\tm.anim.
4476\tvelosiped\t\tm.
31101\tvelosipedist\t\tm.anim.
20811\tveľryb\t\tm.anim.
35057\tVels\t\tm.sg.
35058\tvelssky\t\tadj.
31097\tvelur\t\tm.
13558\tvely\t\tadj.
4239\tvelžnosť\t\tf.
4238\tvelžny\t\tadj.
31103\tvena\t\tf.
31105\tvendeta\t\tf.
704\tvěnec\t\tm.
19177\tVenera\t\tf.
31107\tveneričny\t\tadj.
16792\tVenezuela\t\tf.sg.
22451\tvenezueľsky\t\tadj.
31116\tvenozny\t\tadj.
31118\tventilacija\t\tf.
5830\tventilator\t\tm.
31117\tventilj\t\tm.
31120\tventilovati\t\tv.tr. ipf./pf.
31123\tvepŕ\t\tm.anim.
2429\tvěra\t\tf.
31125\tveranda\t\tf.
31126\tverbaľny\t\tadj.
31127\tverbena\t\tf.
31128\tverbovati\t\tv.tr. ipf./pf.
31129\tverdikt\t\tm.
35333\tvěręći\t\tm.anim.
1897\tverf\t\tm.
32836\tverifikacija\t\tf.
20285\tverifikovajemy\t\tadj.
20286\tverifikovati\t\tv.tr. ipf.
19179\tveriga\t\tf.
22554\tverigy\t\tf.pl.
22322\tvěritelj\t\tm.anim.
3106\tvěriti\t\tv.tr. ipf.
31133\tvermišelj\t\tf.
31134\tvermut\t\tm.
35334\tvěrnik\t\tm.anim.
31135\tvernisaž\t\tm.
3308\tvěrny\t\tadj.
3917\tvěrny\t\tadj.
19181\tvěrodostojnosť\t\tf.
19184\tvěrodostojny\t\tadj.
19187\tvěrogodnosť\t\tf.
19190\tvěrogodny\t\tadj.
1102\tvěrojętno\t\tadv.
13576\tvěrojętnosť\t\tf.
3405\tvěrojętny\t\tadj.
36225\tvěrolomnik\t\tm.anim.
20812\tvěrolomnosť\t\tf.
20814\tvěrolomny\t\tadj.
13564\tvěrozakon\t\tm.
13578\tvěrozakonny\t\tadj.
959\tversija, verzija\t\tf.
31143\tversta\t\tf.
31144\tverš\t\tm.
20287\tvertikaľny\t\tadj.
1676\tveś\t\tpron.indef.
31150\tveś\t\tf.
22342\tvesde\t\tadv.
3583\tveseliti sę\t\tv.refl. ipf.
13581\tveseliti\t\tv.tr. ipf.
980\tveseljańje\t\tn.sg.
6039\tveseľje\t\tn.sg.
19196\tVeselogo Rođeńja!\t\tintj.
13588\tveselosť\t\tf.
16383\tvesely\t\tadj.
19200\tVeselyh Svętkov!\t\tintj.
4046\tvěsiti\t\t#v.tr. ipf.
31151\tveslo\t\tn.
328\tvesna\t\tf.
3073\tvěsť\t\tf.
13592\tvěsti\t\tf.pl.
13593\tvesti\t\tv.tr. ipf.
31155\tvestibulj\t\tm.
19201\tvěstnik\t\tm.anim.
22211\tvěstnik\t\tm.
22212\tvěstnik\t\tm.anim.
19193\tvěšalka\t\tf.
4045\tvěšati\t\tv.tr. ipf.
3270\tveteran\t\tm.anim.
13962\tveteranka\t\tf.
31163\tveterinaŕ\t\tm.anim.
32431\tveterinaŕny\t\tadj.
31165\tvethy\t\tadj.
2153\tvětka\t\tf.
1677\tveto\t\tn.
1678\tvětr\t\tm.
13599\tvětrak\t\tm.
33033\tvětrec\t\tm.
33032\tvětrik\t\tm.
19202\tvětrilo\t\tn.
19203\tvětriti\t\tv.tr. ipf.
15137\tvětrnica\t\tf.
19205\tvětrno plåtno\t\tn.
19206\tvětrnoplåtnica\t\tf.
13596\tvětrny mlyn\t\tm.
13595\tvětrny\t\tadj.
5000\tvětva\t\tf.
1681\tveverica\t\tf.
31170\tvęz\t\tm.
19210\tvęzalo\t\tn.
19215\tvęzati šnurom\t\tv.ipf.
2509\tvęzati\t\tv.tr. ipf.
1702\tvęzenj\t\tm.anim.
2161\tvęzeńje\t\tn.
31172\tvezir\t\tm.anim.
19216\tvęzka\t\tf.
22189\tvęznųti\t\tv.intr. ipf.
36270\tvezti sę\t\tv.refl. pf.
1683\tvezti\t\tv.tr. ipf.
2032\tvěža\t\tf.
19208\tvěža\t\tf.
34984\tvględati sę\t\tv.refl. ipf.
13607\tvględěti sę\t\tv.refl. pf.
31176\tvgorų\t\tadv.
5294\tvhod\t\tm.
65\tvhoditi\t\tv.intr. ipf.
19123\tvhodna karta\t\tf.
19120\tvhođeńje\t\tn.sg.
31177\tviadukt\t\tm.
31178\tvibracija\t\tf.
32988\tvibrafon\t\tm.
31179\tvibrator\t\tm.
31181\tvibrovati\t\tv.intr. ipf./pf.
1689\tvid\t\tm.
22419\tvid\t\tm.
23074\tvid\t\tm.
31183\tvid\t\tm.
31186\tviděńje\t\tn.
13616\tviděny\t\tadj.
2151\tvideo\t\tn.
36778\tvideokarta\t\tf.
2185\tviděti\t\tv.tr. ipf.
20288\tvidimo\t\tadv.
19219\tvidimy\t\tadj.
22423\tvidnokrųg\t\tm.
13619\tvidny\t\tadj.
19220\tViena\t\tf.sg.
4750\tVietnam\t\tm.sg.
4751\tvietnamsky\t\tadj.
31190\tvigvam\t\tm.
31191\tvihȯr\t\tm.
33586\tvihȯr\t\tm.
33587\tvihȯr\t\tm.
31193\tvika\t\tf.
31194\tvikarij\t\tm.anim.
3096\tvikend\t\tm.
16139\tvikendovy\t\tadj.
35076\tviki\t\tf.indecl.
31195\tviking\t\tm.anim.
35277\tVikipedija\t\tf.
31196\tvikont\t\tm.anim.
31197\tvikontesa\t\tf.
31189\tvikunja\t\tf.
31199\tvila\t\tf.
4666\tvilica\t\tf.
31201\tvily\t\tf.pl.
2604\tvina\t\tf.
31204\tvinegret\t\tm.
1159\tviniteljnik, viniteljny padež\t\tm.
2605\tviniti za\t\tv.tr. ipf.
31205\tvinjetka\t\tf.
36157\tvinna loza\t\tf.
15140\tvinnik\t\tm.anim.
15141\tvinnosť\t\tf.
1009\tvinny\t\tadj.
1400\tvino\t\tn.
13626\tvinobrańje\t\tn.
13627\tvinogråd, vinogrådnik\t\tm.
13628\tvinogrådny\t\tadj.
13629\tvinogrådstvo\t\tn.sg.
23733\tvinovaty\t\tadj.
721\tvinovnik\t\tm.anim.
31209\tvint\t\tm.
4148\tvintovka\t\tf.
23442\tviola\t\tf.
16140\tviolina\t\tf.
16141\tviolinist\t\tm.anim.
31212\tviolončelist\t\tm.anim.
23440\tviolončelo\t\tn.
31214\tviraž\t\tm.
31215\tVirdžinija\t\tf.sg.
31867\tvirolog\t\tm.anim.
31868\tvirologija\t\tf.sg.
5173\tvirtuaľny\t\tadj.
31216\tvirtuoz\t\tm.anim.
23654\tvirus\t\tm.
32780\tvisęći zamȯk\t\tm.
22431\tvisělica\t\tf.
1163\tvisěti\t\tv.intr. ipf.
23161\tviski\t\tm./f.
31221\tviskoza\t\tf.
23663\t#Visla\t\tf.sg.
21225\tvisokosny god\t\tm.
31224\tvist\t\tm.
19221\tvišnja\t\tf.
31225\tvišnjevy\t\tadj.
15146\tVitaj!\t\tintj.
15147\tVitajte!\t\tintj.
31227\tvitalist\t\tm.anim.
31228\tvitalističny\t\tadj.
31229\tvitalizm\t\tm.sg.
16303\tvitamin\t\tm.
15148\tvitańje\t\tn.
2981\tvitati\t\tv.tr. ipf.
19222\tvitęź\t\tm.anim.
695\tvitęzstvo\t\tn.
33580\tviti gnězdo\t\tphrase
5627\tviti sę\t\tv.refl. ipf.
31233\tviti\t\tv.tr. ipf.
33571\tviti\t\tv.tr. ipf.
33572\tviti\t\tv.tr. ipf.
33573\tviti\t\tv.tr. ipf.
33574\tviti\t\tv.tr. ipf.
36104\tVitlejem\t\tm.
31234\tvitraž\t\tm.
31235\tvitrina\t\tf.
20289\tvivisekcija\t\tf.
666\tviza\t\tf.
31239\tvizavi\t\tprep.
33002\tvizažist\t\tm.anim.
33003\tvizažistka\t\tf.
23075\tvizija\t\tf.
3035\tvizita\t\tf.
31242\tvizuaľny\t\tadj.
5493\tvjehati\t\tv.intr. pf.
5492\tvježđati\t\tv.intr. ipf.
3956\tvklad\t\tm.
3954\tvkladati\t\tv.tr. ipf.
20263\tvključajųći\t\tprep.
1699\tvključati\t\tv.tr. ipf.
3923\tvključati\t\tv.tr. ipf.
20264\tvključeńje\t\tn.sg.
35221\tvključiteljny\t\tadj.
2162\tvključiti\t\tv.tr. pf.
3926\tvključiti\t\tv.tr. pf.
35330\tvključno\t\tadv.
31244\tvkupě\t\tadv.
2160\tvkųs\t\tm.
2542\tvkųsiti\t\tv.tr. pf.
31248\tvkųsny\t\tadj.
1814\tvkųšati\t\tv.tr. ipf.
22517\tvlåčiti\t\tv.tr. ipf.
22518\tvlåčiti\t\tv.tr. ipf.
2528\tvlada\t\tf.
22468\tvlada\t\tf.
13668\tvladaŕ\t\tm.anim.
13669\tvladaŕka\t\tf.
569\tvladati, vlåděti\t\tv.intr. ipf.
13670\tvladati, vlåděti\t\tv.intr. ipf.
22476\tvladati, vlåděti\t\tv.intr. ipf.
22477\tvladati, vlåděti\t\tv.intr. ipf.
22478\tvladati, vlåděti\t\tv.intr. ipf.
22479\tvladati, vlåděti\t\tv.intr. ipf.
33612\tvladati, vlåděti\t\tv.intr. ipf.
33615\tvladati, vlåděti\t\tv.intr. ipf.
22471\tvladec\t\tm.anim.
35392\tvladny\t\tadj.
22473\tvladyka\t\tm.anim.
19224\tvlåga\t\tf.
13242\tvlagańje\t\tn.
13243\tvlagatelj\t\tm.anim.
15103\tvlagati\t\tv.tr. ipf.
6196\tvlåk\t\tm.
2530\tvlåkno\t\tn.
23398\tvlamyvatelj\t\tm.anim.
5590\tvlamyvati sę\t\tv.refl. ipf.
2529\tvlås\t\tm.
19225\tvlåsaty\t\tadj.
6320\tvlasť\t\tf.
13677\tvlasť\t\tf.
15741\tvlastnica\t\tf.
22481\tvlastničstvo\t\tn.
24014\tvlastničstvo\t\tn.
3363\tvlastnik\t\tm.anim.
13678\tvlastnik\t\tm.anim.
13681\tvlastniti\t\tv.tr. ipf.
13685\tvlastno imę\t\tn.
13683\tvlastnosť\t\tf.
1913\tvlastny\t\tadj.
22480\tvlastny\t\tadj.
34713\tvlåžiti\t\tv.tr. pf.
19228\tvlåžnosť\t\tf.
19231\tvlåžny\t\tadj.
3570\tvlěkti\t\tv.tr. ipf.
5280\tvlěvo\t\tadv.
579\tvlězti\t\tv.intr. pf.
20791\tvliv\t\tm.
20792\tvlivati\t\tv.intr. ipf.
23397\tvlivny\t\tadj.
4612\tvlomiti sę\t\tv.refl. pf.
4613\tvlomjeńje\t\tn.
3955\tvložiti\t\tv.tr. pf.
35545\tvměsati\t\tv.tr. pf.
31258\tvměstiti\t\tv.tr. pf.
2531\tvměsto\t\tprep.
15151\tvměstu\t\tadv.
20270\tvměšańje\t\tn.
2532\tvměšati sę\t\tv.refl. pf.
32434\tvměšćati\t\tv.tr. ipf.
2533\tvměšivati sę\t\tv.refl. ipf.
35546\tvměšivati\t\tv.tr. ipf.
16902\tvně\t\tadv.
16904\tvně\t\tprep.
5455\tvnesti\t\tv.tr. pf.
16903\tvněšnji, vněšny\t\tadj.
35762\tvnězemny\t\tadj.
20795\tvnikati\t\tv.intr. ipf.
20798\tvniknųti\t\tv.intr. pf.
19234\tvnimańje\t\tn.sg.
36795\tvnimateljny\t\tadj.
23378\tvniz\t\tadv.
5454\tvnositi\t\tv.tr. ipf.
35619\tvnučę\t\tn.
15644\tvnučka\t\tf.
1430\tvnuk\t\tm.anim.
2540\tvnųtri\t\tprep.
21642\tvnųtri\t\tadv.
22378\tvnųtrišnji, vnųtrišny\t\tadj.
19235\tvnųtrna valuta\t\tf.
2950\tvnųtrnosť\t\tf.
22376\tvnųtrnosti\t\tf.pl.
19237\tvnųtrny produkt\t\tm.
19238\tvnųtrny spor\t\tm.
2534\tvnųtrny\t\tadj.
16484\tvȯ vśakom slučaju\t\tadv.
2537\tvoda\t\tf.
31270\tvodevilj\t\tm.
22208\tvodič\t\tm.
15152\tvoditelj\t\tm.anim.
13717\tvoditeljstvo\t\tn.sg.
13719\tvoditi k\t\tv.ipf.
2536\tvoditi\t\tv.tr. ipf.
4644\tvodka\t\tf.
31273\tvȯdle\t\tprep.
2538\tvodno polo\t\tn.sg.
33823\tvodny znak\t\tm.
36769\tvodny\t\tadj.
22547\t#vodobojaznj\t\tf.
31274\tvododěl\t\tm.
19240\tvodojem\t\tm.
20816\tVodolěj\t\tm.anim.
33822\tvodoodporny\t\tadj.
4991\tvodopad\t\tm.
31278\tvodopoj\t\tm.
3425\tvodoråsť\t\tf.
22548\tvodoråvny\t\tadj.
22545\tvodorod\t\tm.sg.
36907\tvodosborny basen\t\tm.
4992\tvodoskok\t\tm.
4990\tvodotok\t\tm.
22243\tvodovod\t\tm.
22549\tvodozemny\t\tadj.
13723\tvodstvo\t\tn.sg.
2541\tvođ\t\tm.anim.
31282\tvođa\t\tf.
20290\tvođeńje\t\tn.sg.
3108\tvȯjdti\t\tv.intr. pf.
35493\tvojenna aviacija\t\tf.
13731\tvojenne igry\t\tf.pl.
5056\tvojenno-moŕske sily\t\tf.pl.
35492\tvojenno-vȯzdušne sily\t\tf.pl.
36229\tvojenny stan\t\tm.
2124\tvojenny\t\tadj.
13732\tvojenny\t\tadj.
5340\tvojevati\t\tv.intr. ipf.
15153\tvojevničji\t\tadj.
19241\tvojevnik\t\tm.anim.
22247\tvojevoda\t\tm.anim.
36775\tvojevodstvo\t\tn.
5752\tvojin\t\tm.anim.
31286\tvojinsky\t\tadj.
13727\tvojna ljudij\t\tf.
2535\tvojna\t\tf.
13734\tvojsko\t\tn.
31293\tvokabula\t\tf.
31295\tvokalist\t\tm.anim.
31296\tvokaliza\t\tf.
4790\tvokaľny\t\tadj.
17061\tvokativ\t\tm.
20271\tvokrųg\t\tadv.
2539\tvol\t\tm.anim.
31303\tvolan\t\tm.
31304\tvolapuk\t\tm.sg.
31306\tvȯlčje lyko\t\tn.
31307\tvolejbol\t\tm.sg.
23367\tvolěti\t\tv.tr. ipf.
31312\tvolfram\t\tm.sg.
23655\tVolga\t\tf.sg.
31308\tvȯlga\t\tf.
19245\tvȯlgkosť\t\tf.
19242\tvȯlgky\t\tadj.
31309\tvȯlgnųti\t\tv.intr. ipf.
31311\tvoliera\t\tf.
1518\tvolja\t\tf.
3928\tvoljny čas\t\tm.
4127\tvoljny\t\tadj.
456\tvȯlk\t\tm.anim.
31322\tvȯlkodav\t\tm.anim.
415\tvȯlkolak\t\tm.anim.
2138\tvȯlna\t\tf.
4999\tvȯlna\t\tf.
34977\tvȯlnisty papugajek\t\tm.anim.
2516\tvolt\t\tm.
31318\tvoltmetr\t\tm.
31319\tvoluntarist\t\tm.anim.
31320\tvoluntarizm\t\tm.anim.
2517\tvon\t\tadv.
31327\tvonj\t\tf.
33173\tvonj\t\tf.
33169\tvonjati\t\tv.intr. ipf.
33170\tvonjati\t\tv.intr. ipf.
20817\tvȯobće\t\tadv.
23983\tvȯobražati sobě\t\tv.tr. ipf.
21643\tvȯobražeńje\t\tn.
563\tvȯorųženy\t\tadj.
33024\tvȯorųžiti\t\tv.tr. pf.
32913\tvȯphati\t\tv.tr. pf.
36187\tvȯplȯćati\t\tv.tr. ipf.
36188\tvȯplȯtiti\t\tv.tr. pf.
554\tvȯpros\t\tm.
15646\tvȯprosnik\t\tm.
557\tvosk\t\tm.
1926\tvȯš\t\tf.
32609\tvoščiti\t\tv.tr. ipf.
20291\tvot\t\tintj.
3929\tvoz\t\tm.
19250\tvoz\t\tm.
34988\tvȯzbita smetana\t\tf.
19127\tvȯzbito těsto\t\tn.sg.
20278\tvȯzbogaćati\t\tv.tr. ipf.
20279\tvȯzbogatiti\t\tv.tr. pf.
19130\tvȯzbråniti\t\tv.tr. pf.
19128\tvȯzbranjati\t\tv.tr. ipf.
19129\tvȯzbrånjeny\t\tadj.
13450\tvȯzbudimy\t\tadj.
5466\tvȯzbuditi\t\tv.tr. pf.
13765\tvȯzbudlivo\t\tadv.
5652\tvȯzbudlivy\t\tadj.
13766\tvȯzbudlivy\t\tadj.
5464\tvȯzbuđati\t\tv.tr. ipf.
13760\tvȯzbuđeńje\t\tn.sg.
13761\tvȯzbuđeny\t\tadj.
5061\tvȯzdati česť\t\tv.pf.
5062\tvȯzdavati česť\t\tv.ipf.
19132\tvȯzdȯhnųti\t\tv.intr. pf.
3321\tvȯzdȯlž\t\tprep.
556\tvȯzdŕžati sę\t\tv.refl. pf.
2891\tvȯzdŕživati sę\t\tv.refl. ipf.
1914\tvȯzduh\t\tm.
19133\tvȯzduholoď\t\tf.
13778\tvȯzduhonosima bolěznj\t\tf.
13776\tvȯzduhonosima hvoroba\t\tf.
13781\tvȯzduhonosima infekcija\t\tf.
13777\tvȯzduhonosimo zabolěvańje\t\tn.
4622\tvȯzduhonosimy\t\tadj.
19135\tvȯzduhoplavstvo\t\tn.sg.
13779\tvȯzdušna divizija\t\tf.
5753\tvȯzdušny prostor\t\tm.
4621\tvȯzdušny\t\tadj.
19136\t#vȯzdvigati\t\tv.tr. ipf.
19139\tvȯzdvignųti\t\tv.tr. pf.
4256\tvȯzdyh\t\tm.
19140\tvȯzdyhati\t\tv.intr. ipf.
26176\tvȯzglåvje\t\tn.
19141\tvȯzględ\t\tm.
31463\tvȯzhod sȯlnca\t\tm.
555\tvȯzhod\t\tm.sg.
5462\tvȯzhoditi\t\tv.intr. ipf.
23537\tVȯzhodna Evropa\t\tf.sg.
4185\tvȯzhodno\t\tadv.
35133\tvȯzhodnoevropejsky\t\tadj.
4424\tvȯzhodnoslovjansky\t\tadj.
4184\tvȯzhodny\t\tadj.
36204\tvozilo na vȯzdušnoj poduškě\t\tn.
22412\tvozilo\t\tn.
23955\tvȯzimati\t\tv.tr. ipf.
36269\tvoziti sę\t\tv.refl. ipf.
516\tvoziti\t\tv.tr. ipf.
23957\tvȯzjęti\t\tv.tr. pf.
32557\tvȯzklicaľnik\t\tm.
32558\tvȯzklicaľny znak\t\tm.
32583\tvȯzklicaľny\t\tadj.
32589\tvȯzklicańje\t\tn.
32584\tvȯzklicati\t\tv.tr. ipf.
32586\tvȯzklik\t\tm.
32585\tvȯzkliknųti\t\tv.tr. pf.
32435\tvȯzkresati\t\tv.intr. ipf.
32439\tvȯzkresiti\t\tv.tr. pf.
31339\tvȯzkresnųti\t\tv.intr. pf.
32438\tvȯzkrešati\t\tv.tr. ipf.
36560\tvȯzkrešeńje\t\tn.
20280\t#vȯzkypyvati\t\tv.intr. ipf.
5460\tvȯzlětati\t\tv.intr. ipf.
5461\tvȯzletěti\t\tv.intr. pf.
20799\tVȯzneseńje\t\tn.sg.
20800\tvȯznesti\t\tv.tr. pf.
15156\tvȯznikati\t\tv.intr. ipf.
20801\tvȯznikati\t\tv.intr. ipf.
33155\tvȯznikneńje\t\tn.
20803\tvȯzniknųti\t\tv.intr. pf.
20804\tvȯzniknųti\t\tv.intr. pf.
20805\tvȯznositi\t\tv.tr. ipf.
19251\tvozny\t\tadj.
5463\tvȯzȯjdti\t\tv.intr. pf.
3492\tvozȯk\t\tm.
19145\tvȯzpamętati\t\tv.tr. ipf.
19146\tvȯzpitańje\t\tn.sg.
19149\tvȯzpitati\t\tv.tr. pf.
5949\tvȯzpominati\t\tv.tr. ipf.
19153\tvȯzpomněńje\t\tn.
5950\tvȯzpomněti\t\tv.tr. pf.
16776\tvȯzprijęťje\t\tn.
802\tvȯzråst\t\tm.
21636\tvȯzråst\t\tm.
13810\tvȯzrastati\t\tv.intr. ipf.
16419\tvȯzråsti\t\tv.intr. pf.
19155\tvȯzråstka\t\tf.
23051\tvȯzråstla\t\tf.
626\tvȯzråstlosť\t\tf.
180\tvȯzråstly\t\tadj.
22991\tvȯzråstly\t\tm.anim.
19156\t#vȯzråstȯk\t\tm.anim.
19158\tvȯzroditi\t\tv.tr. pf.
17065\tvȯzrođeńje\t\tn.sg.
17098\tvȯzrođeńje\t\tn.sg.
19157\t#vȯzrođeńje\t\tn.sg.
34725\tvȯzsiliti\t\tv.tr. pf.
34723\tvȯzsilovač\t\tm.
34724\tvȯzsilovati\t\tv.tr. ipf.
23919\tvȯzskakati\t\tv.intr. ipf.
23918\tvȯzskočiti\t\tv.intr. pf.
21826\tvȯzstańje\t\tn.
13881\tvȯzstati\t\tv.intr. pf.
21822\tvȯzstavati\t\tv.intr. ipf.
34959\tvȯztręsati\t\tv.tr. ipf.
34960\tvȯztręsti\t\tv.tr. pf.
22294\tvȯzveličati\t\tv.tr. pf.
22293\tvȯzveličivati\t\tv.tr. ipf.
19159\tvȯzvesti\t\tv.tr. pf.
31267\tvȯzvod\t\tm.
31955\tvȯzvoditi\t\tv.tr. ipf.
22646\tvȯzvraćati\t\tv.tr. ipf.
18360\tvȯzvråćeńje\t\tn.
22647\tvȯzvråtiti\t\tv.tr. pf.
22718\tvȯzvråtny\t\tadj.
13400\tvȯzvŕšati\t\tv.tr. ipf.
13401\tvȯzvŕšeńje\t\tn.
13402\tvȯzvŕšiti\t\tv.tr. pf.
22737\tvȯzvysiti\t\tv.tr. pf.
22742\tvȯzvysiti\t\tv.tr. pf.
22736\tvȯzvyšati\t\tv.tr. ipf.
22739\tvȯzvyšati\t\tv.tr. ipf.
31342\tvȯzvyšeńje\t\tn.
20281\tvȯzvyšenosť\t\tf.
31343\tvȯzvyšeny\t\tadj.
36559\tvȯzvyšeny\t\tadj.
22925\tvȯzzvańje\t\tn.
21205\tvpad\t\tm.
21207\tvpadati\t\tv.intr. ipf.
29828\tvpaly\t\tadj.
21209\tvpasti\t\tv.intr. pf.
23845\t#vpečętlivy\t\tadj.
19252\tvpečętljeńje\t\tn.
32911\tvpihati\t\tv.tr. ipf.
6201\tvpis\t\tm.
6200\tvpisati\t\tv.tr. pf.
6199\tvpisyvati\t\tv.tr. ipf.
23376\tvpiti\t\tv.tr. pf.
23377\tvpivańje\t\tn.sg.
23375\tvpivati\t\tv.tr. ipf.
20272\tvplesti\t\tv.tr. pf.
34327\tvpletati\t\tv.tr. ipf.
2871\tvplyv\t\tm.
1833\tvplyvati\t\tv.intr. ipf.
23396\tvplyvny\t\tadj.
1836\tvplyvti\t\tv.intr. pf.
4566\tvpȯlně, vpȯlno\t\tadv.
5279\tvpravo\t\tadv.
3369\tvprěd\t\tadv.
21199\tvpręgati\t\tv.tr. ipf.
21200\tvpręgti\t\tv.tr. pf.
17062\tvpŕvo\t\tadv.
1837\tvråbec\t\tm.anim.
22658\tvraćati sę\t\tv.refl. ipf.
5917\tvraćati v otčinų\t\tv.ipf.
1839\tvraćati\t\tv.tr. ipf.
13825\tvråg\t\tm.anim.
31350\tvrån\t\tm.anim.
1838\tvråna\t\tf.
1911\tvråta\t\tn.pl.
3109\tvråta\t\tn.pl.
23252\tvråtaŕ\t\tm.anim.
32443\tvråtaŕ\t\tm.anim.
31355\tvråtič\t\tm.
22654\tvråtiti sę\t\tv.refl. pf.
5918\tvråtiti v otčinų\t\tv.tr. pf.
1773\tvråtiti\t\tv.tr. pf.
13844\tvråtiti\t\tv.tr. pf.
15162\tvråtnik\t\tm.anim.
19124\tvražeńje\t\tn.
31357\tvråžiti\t\tv.intr. ipf.
19253\tvråžka\t\tf.
13565\tvŕba\t\tf.
31359\tvrčati\t\tv.intr. ipf.
36257\tvrěća\t\tf.
31360\tvrěd\t\tm.
23953\tvrědny\t\tadj.
13829\tvrěmę goda\t\tn.
13830\tvrěmę roka\t\tn.
2330\tvrěmę\t\tn.
13827\tvrěmę\t\tn.
13828\tvrěmę\t\tn.
22573\tvrěmenny\t\tadj.
31361\tvrěs\t\tm.
13832\tvresenj\t\tm.sg.
31362\tvrěsk\t\tm.
31363\tvrěščati\t\tv.intr. ipf.
22644\tvrěteno\t\tn.
22561\tvrěti\t\tv.intr. ipf.
22576\tvŕgati\t\tv.tr. ipf.
22577\tvŕgnųti\t\tv.tr. pf.
3076\tvŕh\t\tm.
13568\tvŕhnik\t\tm.anim.
13838\tvŕhny načeľnik\t\tm.anim.
13569\tvŕhny voditelj\t\tm.anim.
13570\tvŕhny vođ\t\tm.anim.
1666\tvŕhny\t\tadj.
31366\tvŕhovje\t\tn.
22565\tvŕhovny\t\tadj.
22653\tvŕnųti sę\t\tv.refl. pf.
22645\tvŕnųti\t\tv.tr. pf.
21628\tvrođeny\t\tadj.
31370\tvŕša\t\tf.
31145\tvrštat\t\tm.
22640\tvŕtěti\t\tv.tr. ipf.
22641\tvŕtěti\t\tv.tr. ipf.
22643\tvŕtěti\t\tv.intr. ipf.
19254\tvŕtka\t\tf.
6083\tvŕtolet\t\tm.
19125\tvrųbati\t\tv.tr. pf.
19126\tvrųbyvati\t\tv.tr. ipf.
21629\tvrųčati\t\tv.tr. ipf.
21631\tvrųčiti\t\tv.tr. pf.
5679\tvŕvka\t\tf.
13847\tvsaditi\t\tv.tr. pf.
13848\tvsadȯk\t\tm.
13849\tvsađati\t\tv.tr. ipf.
243\tvśako\t\tadv.
20295\tvśakodenno, vśakodnevno\t\tadv.
93\tvśakodenny, vśakodnevny\t\tadj.
13853\tvśakogodišnje\t\tadv.
13854\tvśakogodišnji, vśakogodišny\t\tadj.
13855\tvśakoročno\t\tadv.
13856\tvśakoročny\t\tadj.
4326\tvśaky\t\tadj.
13864\tvśaky\t\tadj.
19571\tvśamo\t\tadv.
32764\tvse bolje\t\tadv.
19255\tvse jedno\t\tadv.
32765\tvse lěpje\t\tadv.
19256\tvse råvno\t\tadv.
3098\tvse\t\tpron.indef.
31379\tvse\t\tadv.
1675\tvsečto\t\tpron.indef.
780\tvsegda, vsegdy\t\tadv.
23789\tvsěgo\t\tadv.
22951\tvsejed\t\tm.anim.
22950\tvsejedny\t\tadj.
35154\tvsekako\t\tadv.
35153\tvsekaky\t\tadj.
2672\tvsekde\t\tadv.
23853\tvsekråtno\t\tadv.
1823\tvsekto\t\tpron.indef.
19586\tvseliko\t\tadv.
19593\tvseliky\t\tadj.
20819\tvsemir\t\tm.
20820\tvsemogųći\t\tadj.
35620\tvseprisųtny\t\tadj.
17056\tvseslovjansky\t\tadj.
34916\tvsestrånny\t\tadj.
19257\tvsesvět\t\tm.
20294\tvsesvětny\t\tadj.
13879\tVsesvětova pavųčina [VSP]\t\tf.
19258\tvsesvětovy\t\tadj.
36119\tvsevědųći\t\tadj.
36118\tvseznajųći\t\tadj.
22952\tvsežerec\t\tm.anim.
22347\tvsežerny\t\tadj.
23790\tvsi\t\tpron.indef.
21633\tvskočiti\t\tv.intr. pf.
1039\tvslěd\t\tprep.
13352\tvslědno\t\tadv.
13353\tvslědny\t\tadj.
20273\t#vsosati\t\tv.tr. pf.
13377\tvsrěd\t\tprep.
21634\tvsrěd\t\tadv.
6322\tvstati\t\tv.intr. pf.
6321\tvstavati\t\tv.intr. ipf.
13882\tvstaviti\t\tv.tr. pf.
16385\tvstavjati\t\tv.tr. ipf.
31388\tvstavka\t\tf.
3702\tvstųpati\t\tv.intr. ipf.
3347\tvstųpiti\t\tv.intr. pf.
3587\tvstųpjeńje\t\tn.sg.
775\tvśųdy\t\tadv.
35547\tvtęgati\t\tv.tr. ipf.
35548\tvtęgnųti\t\tv.tr. pf.
36189\tvtěljeńje\t\tn.
35649\tvtičnica\t\tf.
20274\tvtiskati\t\tv.tr. ipf.
20276\tvtisknųti\t\tv.tr. pf.
13889\tvtȯgda, vtȯgdy\t\tadv.
19259\t#vtora světova vojna\t\tf.
16249\tvtornik\t\tm.
17064\tvtorny\t\tadj.
20296\tvtoro\t\tadv.
1266\tvtorȯk\t\tm.
16401\tvtory\t\tnum.ord.
2414\tvtrgati\t\tv.intr. ipf.
3097\tvtrgnųti\t\tv.intr. pf.
31394\tvualj\t\tf.
35701\tvųglaty\t\tadj.
1737\tvųglerod\t\tm.sg.
22546\tvųglovodan\t\tm.
13208\tvųgȯl\t\tm.
1453\tvųgȯlj\t\tm.sg.
32763\tvųgȯljny\t\tadj.
2152\tvųgoŕ\t\tm.anim.
3115\tVųgrec\t\tm.anim.
2430\tVųgrija\t\tf.sg.
78\tvųgrsky\t\tadj.
31395\tvulgarizacija\t\tf.
31397\tvulgarizm\t\tm.
32762\tvulgarnosť\t\tf.
31399\tvulgarny\t\tadj.
23722\tvulkan\t\tm.
23723\tvulkaničny\t\tadj.
31402\tvulkanizacija\t\tf.
31404\tvulkanizovati\t\tv.tr. ipf./pf.
3743\tvųsy\t\tm.pl.
15168\tvųtråba\t\tf.
1671\tvųtråby\t\tf.pl.
1057\tvųzel\t\tm.
22191\tvųzel\t\tm.
22193\tvųzel\t\tm.
36000\tvųzkokolejka\t\tf.
36001\tvųzkokolejna dråga\t\tf.
66\tvųzky\t\tadj.
1523\tvųž\t\tm.anim.
3685\tvvedeńje\t\tn.
3678\tvvesti\t\tv.tr. pf.
5504\tvvezti\t\tv.tr. pf.
22417\tvvezti\t\tv.tr. pf.
22271\tvvod\t\tm.
3677\tvvoditi\t\tv.tr. ipf.
22269\tvvodny\t\tadj.
22415\tvvoz\t\tm.
5505\tvvoziti\t\tv.tr. ipf.
22416\tvvoziti\t\tv.tr. ipf.
22594\tvvŕgati\t\tv.tr. ipf.
22596\tvvŕgati\t\tv.tr. ipf.
22595\tvvŕgnųti\t\tv.tr. pf.
22597\tvvŕgnųti\t\tv.tr. pf.
35439\tvvŕh\t\tadv.
1629\tvy\t\tpron.pers.
15172\tvy-\t\tprefix
31407\tvyboj\t\tm.
5011\tvydra\t\tf.
4375\tvygoda\t\tf.
15139\tvygoda\t\tf.
13925\tvygodno\t\tadv.
4376\tvygodny\t\tadj.
16541\tvyjdti\t\tv.intr. pf.
16530\tvyjmati\t\tv.tr. ipf.
36406\t#vykati\t\tv.tr. ipf.
19308\tvymę\t\tn.
31426\tvypad\t\tm.
21215\tvypis\t\tm.
21649\tvyrok\t\tm.
34159\tvyryti\t\tv.tr. pf.
33658\t#vysmrkati sę\t\tv.refl. pf.
22723\tVysočstvo\t\tn.
34765\tvysoko\t\tadv.
13633\tvysokogorsky\t\tadj.
22724\tvysokoparny\t\tadj.
19333\tvysokoskok\t\tm.
409\tvysoky\t\tadj.
31439\tvysota\t\tf.
20830\tvysotoměr\t\tm.
33216\t#vyspati sę\t\tv.refl. pf.
20302\tvysši\t\tadj.
2610\tvyše pozdno\t\tadv.
705\tvyše veliky\t\tadj.
2508\tvyše\t\tadv.
2680\tvyše\t\tadv.
13638\tvyšina\t\tf.
20300\tvyšnosť\t\tf.
20301\tvyšny\t\tadj.
31446\tvyti\t\tv.intr. ipf.
16716\t#vytŕpěti\t\tv.tr. pf.
31448\tvyvěska\t\tf.
22885\t#vyznavati\t\tv.tr. ipf.
13981\tvzad\t\tadv.
13983\tvzadny sklon\t\tm.
15655\tvzadny\t\tadj.
3459\tvzadu\t\tadv.
13986\tvzajemno\t\tadv.
23052\tvzajemnosť\t\tf.
1804\tvzajemny\t\tadj.
15656\tvzajemodějańje\t\tn.
13989\tvzajemodějati\t\tv.intr. ipf.
562\tvzajemodějstvo\t\tn.
9090\tvzajemodějstvovati\t\tv.intr. ipf.
467\tvzęti\t\tv.tr. pf.
16386\tvzor\t\tm.
15195\tvzorny\t\tadj.
34985\tvžiti sę\t\tv.refl. pf.
3673\tvživati sę\t\tv.refl. ipf.
34995\tykańje\t\tn.sg.
14002\tza drěva lěs ne viděti\t\tphrase
19341\tza vśakų cěnų\t\tadv.
31598\tza živo\t\tadv.
33329\tza živo\t\tadv.
833\tza\t\tprep.
1033\tza\t\tprep.
1171\tza\t\tprep.
4936\tza\t\tprep.
4937\tza\t\tprep.
4938\tza\t\tprep.
34989\tza\t\tprep.
36471\tzabarikadovati\t\tv.tr. pf.
3432\tzabava\t\tf.
3768\tzabava\t\tf.
14014\tzabavitelj\t\tm.anim.
3444\tzabaviti\t\tv.tr. pf.
3414\tzabavjati\t\tv.tr. ipf.
4498\tzabavjeńje\t\tn.sg.
15199\tzabavnik\t\tm.anim.
21650\tzabavny\t\tadj.
3633\tzabezpamęćati\t\tv.tr. ipf.
3634\tzabezpamętiti\t\tv.tr. pf.
36613\tzabezpečati\t\tv.tr. ipf.
36615\tzabezpečeńje\t\tn.
36614\tzabezpečiti\t\tv.tr. pf.
31476\tzabijaka\t\tm.anim.
35980\tzabiraj sę!\t\tintj.
23959\tzabirati\t\tv.tr. ipf.
940\tzablokovati\t\tv.tr. pf.
14022\tzablųda\t\tf.
21655\tzablųditi\t\tv.intr. pf.
36657\tzablųditi\t\tv.intr. pf.
14025\tzablųdny\t\tadj.
21652\tzablųđati\t\tv.intr. ipf.
36656\tzablųđati\t\tv.intr. ipf.
19343\tzabobonnosť\t\tf.
19344\tzabobonny\t\tadj.
14027\tzabolěti\t\tv.intr. pf.
36692\tzabolěti\t\tv.intr. pf.
36695\tzabolěvajemosť\t\tf.sg.
15200\tzabolěvańje\t\tn.
36693\tzabolěvati\t\tv.intr. ipf.
14029\tzabolěvši\t\tadj.
14030\tzabråna\t\tf.
2286\tzabråniti\t\tv.tr. pf.
1834\tzabranjati\t\tv.tr. ipf.
23960\tzabrati\t\tv.tr. pf.
2170\tzabyti\t\tv.tr. pf.
2169\tzabyvati\t\tv.tr. ipf.
14037\tzačarovany\t\tadj.
14038\tzačarovati\t\tv.tr. pf.
14039\tzačasny\t\tadj.
14040\tzačęti\t\tv.tr. pf.
35843\tzačęťje\t\tn.
32365\tzačętȯk\t\tm.
14041\tzačinati\t\tv.tr. ipf.
5724\tzačrveniti sę\t\tv.refl. pf.
5725\tzačrvenjati sę\t\tv.refl. ipf.
3987\tzačto\t\tadv.
19619\tzačtokoli\t\tadv.
15197\tzačto-libo\t\tadv.
2328\tzačto-nebųď\t\tadv.
36630\tzačuditi sę\t\tv.refl. pf.
36635\tzačuditi\t\tv.tr. pf.
15201\tzad\t\tm.
3958\tzadańje\t\tn.
25120\tzadarmo\t\tadv.
5524\tzadati\t\tv.tr. pf.
5523\tzadavati\t\tv.tr. ipf.
14052\tzadnica\t\tf.
14053\tzadnik\t\tm.anim.
15202\tzadnja stråna\t\tf.
33561\tzadnjepodnebny\t\tadj.
15203\tzadnjeprohodny\t\tadj.
2317\tzadnji dvor\t\tm.
15204\tzadnji prohod\t\tm.
5192\tzadnji, zadny\t\tadj.
36516\tzadovaljati sę\t\tv.refl. ipf.
444\tzadovaljati\t\tv.tr. ipf.
36517\tzadovoliti sę\t\tv.refl. pf.
3356\tzadovoliti\t\tv.tr. pf.
526\tzadovoljeny\t\tadj.
3318\tzadovoljstvo\t\tn.sg.
19351\tzadrěmati\t\tv.intr. pf.
16488\tzadŕžati dyh\t\tv.pf.
19352\tzadŕžati sę\t\tv.refl. pf.
297\tzadŕžati\t\tv.tr. pf.
19353\tzadŕžati\t\tv.tr. pf.
19356\tzadŕžati\t\tv.tr. pf.
34659\tzadržati\t\tv.intr. pf.
35630\tzadŕžati\t\tv.tr. pf.
36514\tzadŕžati\t\tv.tr. pf.
16487\tzadŕživati dyh\t\tv.ipf.
19355\tzadŕživati sę\t\tv.refl. ipf.
2221\tzadŕživati\t\tv.tr. ipf.
19359\tzadŕživati\t\tv.tr. ipf.
19360\tzadŕživati\t\tv.tr. ipf.
35629\tzadŕživati\t\tv.tr. ipf.
36515\tzadŕživati\t\tv.tr. ipf.
19361\tzadŕžnik\t\tm.
31855\tzaduha\t\tf.
33698\tzadušna mša\t\tf.
5969\tzagadka\t\tf.
15205\tzagadka\t\tf.
14068\tzagadȯčny\t\tadj.
33625\tzagladiti\t\tv.tr. pf.
33626\tzaglađati\t\tv.tr. ipf.
6051\tzaglåvje\t\tn.
31492\tzagorěti\t\tv.intr. pf.
35915\tzagospodariti\t\tv.tr. pf.
31493\tzagovor\t\tm.
36048\tzagovornik\t\tm.anim.
36047\tzagrabnik\t\tm.anim.
31494\tzagranica\t\tf.
14072\tzagraničnik\t\tm.anim.
14071\tzagraničny\t\tadj.
32249\tZagreb\t\tm.sg.
33631\tzagrobno žiťje\t\tn.sg.
33630\tzagrobny\t\tadj.
2190\tzagroziti\t\tv.tr. pf.
31497\tzahod sȯlnca\t\tm.
5475\tzahoditi\t\tv.intr. ipf.
23961\tzahvaćajųći\t\tadj.
2292\tzahvaćati\t\tv.tr. ipf.
19363\tzahvat\t\tm.
34990\tzahvat\t\tm.
34991\tzahvat\t\tm.
571\tzahvatiti\t\tv.tr. pf.
6659\tzahvorěly\t\tadj.
36694\tzahvorěti\t\tv.intr. pf.
36696\tzahvorěvajemosť\t\tf.sg.
26048\tzahvorěvańje\t\tn.
14077\tzahvorěvati\t\tv.intr. ipf.
2270\tzaimę, zaimennik\t\tm.
5175\tzainteresovany\t\tadj.
16147\tzainteresovati sę\t\tv.refl. pf.
34993\tzainteresovati\t\tv.tr. pf.
3294\tzaisto\t\tadv.
35516\tzajavjeńje\t\tn.
5476\tzajdti\t\tv.intr. pf.
35509\tzajebancija\t\tf.
1803\tzajęc\t\tm.anim.
14080\tzajęc\t\tm.anim.
14081\tzajęčlivo\t\tadv.
14083\tzajęčlivosť\t\tf.
14082\tzajęčlivy\t\tadj.
914\tzajedlivosť\t\tf.
36827\tzajedlivy\t\tadj.
1741\tzajedno\t\tadv.
19366\tzajem\t\tm.
19367\tzajęti sę\t\tv.refl. pf.
5002\tzajęti\t\tv.tr. pf.
5008\tzajęťje\t\tn.
19373\tzajęty\t\tadj.
19370\tzajezd\t\tm.
31503\tzajikati sę\t\tv.refl. ipf.
19378\tzajmati sę\t\tv.refl. ipf.
5001\tzajmati\t\tv.tr. ipf.
14129\tzajmlivy\t\tadj.
23390\tzajmodatelj\t\tm.anim.
23391\tzajmoprijmatelj\t\tm.anim.
23715\tzakašljati\t\tv.intr. pf.
14088\tzakaz\t\tm.
14089\t#zakazati\t\tv.tr. pf.
19379\tzakaznik\t\tm.anim.
16388\tzakazyvati\t\tv.tr. ipf.
3449\tzaklad\t\tm.
35623\tzaklad\t\tm.
939\tzakladati\t\tv.tr. ipf.
32698\tzakladati\t\tv.tr. ipf.
32007\tzaklåti\t\tv.tr. pf.
33647\tzaklęti\t\tv.tr. pf.
33653\tzaklęty vråg\t\tm.anim.
31507\tzaklęty\t\tadj.
31506\tzaklinańje\t\tn.
31508\tzaklinati\t\tv.tr. ipf.
31509\tzakliniti\t\tv.tr. pf.
33665\tzaklinovati\t\tv.tr. ipf.
5162\tzaključati\t\tv.intr. ipf.
20305\tzaključati\t\tv.tr. ipf.
34997\tzaključati\t\tv.tr. ipf.
20306\tzaključeńje\t\tn.
36497\tzaključeńje\t\tn.
19382\tzaključiljnja\t\tf.
19384\tzaključiľnik\t\tm.anim.
5163\tzaključiti\t\tv.intr. pf.
20307\tzaključiti\t\tv.tr. pf.
34998\tzaključiti\t\tv.tr. pf.
1901\tzakon\t\tm.
14095\tzakončeńje\t\tn.
2551\tzakončiti\t\tv.tr. pf.
1747\tzakonny\t\tadj.
1921\tzakonodatelj\t\tm.anim.
3717\tzakonodateljny\t\tadj.
2082\tzakonodateljstvo\t\tn.
31513\tzakonoměrny\t\tadj.
4030\tzakopati\t\tv.tr. pf.
4029\tzakopyvati\t\tv.tr. ipf.
17067\tzakoreněly\t\tadj.
35117\tzakoreniti sę\t\tv.refl. pf.
36796\tzakričati\t\tv.tr. pf.
14105\tzakrvavjeny\t\tadj.
20309\tzakryti\t\tv.tr. pf.
20310\tzakryti\t\tv.tr. pf.
20312\tzakryvati\t\tv.tr. ipf.
20313\tzakryvati\t\tv.tr. ipf.
14106\tzakulisne mahinacije\t\tf.pl.
15659\tzakulisne ombany\t\tm.pl.
14107\tzakulisny\t\tadj.
32115\tzakupka\t\tf.
31515\tzakųska\t\tf.
20314\tzakųtȯk\t\tm.
36797\tzalajati\t\tv.intr. pf.
36590\tzaležno\t\tadv.
36589\tzaležnosť\t\tf.sg.
36588\tzaležny\t\tadj.
2552\tzaliv\t\tm.
35403\tzaljubiti sę\t\tv.refl. pf.
35404\tzaljubjeny\t\tadj.
20316\tzalog\t\tm.
19391\tzaložeńje\t\tn.
14111\tzaložiljnja\t\tf.
1740\tzaložiti\t\tv.tr. pf.
14112\tzaložiti\t\tv.tr. pf.
31520\tzaložnik\t\tm.anim.
14113\tzaložny\t\tadj.
31521\tzalp\t\tm.
36510\tZambija\t\tf.
24011\tzamedliti\t\tv.tr. pf.
24012\tzamedljati\t\tv.tr. ipf.
9026\tzamedljeńje\t\tn.
1627\tzaměna\t\tf.
36101\tzaměna\t\tf.
3811\tzaměniti\t\tv.tr. pf.
3810\tzaměnjati\t\tv.tr. ipf.
19395\tzaměnlivy\t\tadj.
22183\tzaměsiti\t\tv.tr. pf.
1808\tzamesti\t\tv.tr. pf.
14117\tzaměsto\t\tprep.
5965\tzaměšańje\t\tn.
35449\tzaměšańje\t\tn.
16900\tzaměšati\t\tv.tr. pf.
16901\tzaměšivajųći\t\tadj.
16899\tzaměšivati\t\tv.tr. ipf.
32598\tzamětati\t\tv.tr. ipf.
14120\tzamglati\t\tv.tr. pf.
33669\tzamirati\t\tv.intr. ipf.
23970\tzamknųti\t\tv.tr. pf.
31523\tzamknųty\t\tadj.
36518\tzamknųty\t\tadj.
14121\tzamnogo\t\tadv.
213\tzamȯk\t\tm.
19396\tzamȯk\t\tm.
20832\tzamȯk\t\tm.
34479\tzamȯlknųti\t\tv.intr. pf.
36785\tzamȯlviti\t\tv.tr. pf.
36786\tzamȯlvjati\t\tv.tr. ipf.
36789\tzamȯlvjeńje\t\tf.
31526\tzamoŕsky\t\tadj.
19398\tzamotany\t\tadj.
2168\tzamråziti\t\tv.tr. pf.
2342\tzamražati\t\tv.tr. ipf.
31527\tzamreti\t\tv.intr. pf.
33675\tzamrzati\t\tv.intr. ipf.
31528\tzamrznųti\t\tv.intr. pf.
31529\tzamša\t\tf.
32716\tzamševy\t\tadj.
23967\tzamykati\t\tv.tr. ipf.
14125\tzamysl\t\tm.
19400\tzamysliti\t\tv.tr. pf.
19399\tzamysljati\t\tv.tr. ipf.
14126\tzamysljeny\t\tadj.
14128\tzanečišćeńje vȯzduha\t\tn.
4297\tzanečišćeńje\t\tn.
1371\tzaněčto\t\tadv.
14754\tzanedbańje\t\tn.
14755\tzanedbati sę\t\tv.refl. pf.
16256\tzanedbati\t\tv.tr. pf.
14758\tzanedbyvati sę\t\tv.refl. ipf.
16257\tzanedbyvati\t\tv.tr. ipf.
35853\tzanepokojeny\t\tadj.
35852\tzanepokojiti\t\tv.tr. pf.
796\tzaničto\t\tadv.
16389\tzanuriti\t\tv.tr. pf.
14130\tzanurjati\t\tv.tr. ipf.
34513\tzaostalosť\t\tf.
34512\tzaostaly\t\tadj.
1776\tzapad\t\tm.sg.
23973\tzapadati\t\tv.intr. ipf.
23539\tZapadna Evropa\t\tf.sg.
31534\tzapadnik\t\tm.anim.
4187\tzapadno\t\tadv.
35134\tzapadnoevropejsky\t\tadj.
4423\tzapadnoslovjansky\t\tadj.
842\tzapadny\t\tadj.
14136\tzapah\t\tm.
5473\tzapakovati\t\tv.tr. pf.
5474\tzapakovyvati\t\tv.tr. ipf.
23795\tzapaliti\t\tv.tr. pf.
23794\tzapaljati\t\tv.tr. ipf.
14138\tzapaljeńje apendeka\t\tn.
16476\tzapaljeńje\t\tn.
36432\tzapaljeńje\t\tn.
5254\tzapalka\t\tf.
35118\tzapaľnička\t\tf.
23054\tzapaľnik\t\tm.
17068\tzapamętati\t\tv.tr. pf.
17099\tzapamętyvati\t\tv.tr. ipf.
3817\tzapas\t\tm.
23976\tzapasti\t\tv.intr. pf.
31537\tzapęsťje\t\tn.
23429\tzapęta\t\tf.
32910\tzaphati v něčto\t\tv.tr. pf.
32909\tzapihati v něčto\t\tv.tr. ipf.
3806\tzapis\t\tm.
36116\tzapis\t\tm.
14144\tzapisańje\t\tn.
14147\tzapisati sę\t\tv.refl. pf.
5527\tzapisati\t\tv.tr. pf.
6250\tzapisati\t\tv.tr. pf.
6251\tzapiska\t\tf.
6252\tzapisnik\t\tm.
14150\tzapisyvati sę\t\tv.refl. ipf.
5528\tzapisyvati\t\tv.tr. ipf.
6249\tzapisyvati\t\tv.tr. ipf.
5477\tzaplakati\t\tv.intr. pf.
36874\tzaplanovati\t\tv.tr. pf.
31538\tzaplata\t\tf.
2983\tzaplatiti\t\tv.tr. pf.
14153\tzaplěniti\t\tv.tr. pf.
14154\tzaplěnjati\t\tv.tr. ipf.
32371\tzapočęti\t\tv.tr. pf.
19401\tzapočinati\t\tv.tr. ipf.
31539\tzapoj\t\tm.
725\tzapȯlniti\t\tv.tr. pf.
24\tzapȯlnjati\t\tv.tr. ipf.
21226\tzapona\t\tf.
21229\tzaponka\t\tf.
21230\tzapor\t\tm.
21231\tzapor\t\tm.
22241\tzapověď\t\tf.
34510\tzapozdněly\t\tadj.
21659\tzapoznati\t\tv.tr. pf.
21660\tzapoznavati\t\tv.tr. ipf.
14159\tzapråšiti\t\tv.tr. pf.
14160\tzapravdų\t\tadv.
21232\tzapraviti\t\tv.tr. pf.
21234\tzapravjati\t\tv.tr. ipf.
34888\tzaprěčiti\t\tv.tr. pf.
21236\tzapręgati\t\tv.tr. ipf.
21237\tzapręgti\t\tv.tr. pf.
20833\tzaprojektovati\t\tv.tr. pf.
21238\tzapropastiti sę\t\tv.refl. pf.
21243\tzapustiti\t\tv.tr. pf.
21239\tzapušćati\t\tv.tr. ipf.
21240\tzapušćeny\t\tadj.
4766\tzapytańje\t\tn.
3438\tzapytati\t\tv.tr. pf.
5535\tzapytyvati\t\tv.tr. ipf.
21661\tzaråbotati\t\tv.tr. pf.
21662\tzaråbotyvati\t\tv.tr. ipf.
21663\tzaradi\t\tprep.
33069\tzarastati\t\tv.intr. ipf.
14162\tzaråsti\t\tv.intr. pf.
31546\tzaraza\t\tf.
21246\tzaraziti\t\tv.tr. pf.
14163\tzarazny\t\tadj.
21244\tzaražati\t\tv.tr. ipf.
5841\tzaražeńje\t\tn.
31548\tzarđavěly\t\tadj.
25\tzaregistrovati\t\tv.tr. pf.
21665\tzarěkati sę\t\tv.refl. ipf.
21667\tzarěkti sę\t\tv.refl. pf.
36504\tzarevti\t\tv.intr. pf.
35859\tzarezervovati\t\tv.tr. pf.
14165\tzaroditelj\t\tm.anim.
14166\tzaroditi sę\t\tv.refl. pf.
21669\tzarodȯk\t\tm.
21670\tzarodȯk\t\tm.anim.
21672\tzarodȯk\t\tm.anim.
31550\tzarok\t\tm.
21674\tzarųčati sę\t\tv.refl. ipf.
21673\tzarųčati\t\tv.tr. ipf.
33332\tzarųčeńje\t\tn.
21676\tzarųčiti sę\t\tv.refl. pf.
21675\tzarųčiti\t\tv.tr. pf.
19407\tzarydati\t\tv.intr. pf.
21677\tzasada\t\tf.
36410\tzasada\t\tf.
14167\tzasaditi\t\tv.tr. pf.
16390\tzasađati\t\tv.tr. ipf.
21678\tzasědańje\t\tn.
33240\tzasějati\t\tv.tr. pf.
33686\tzaslanjati\t\tv.tr. ipf.
31554\tzaslon\t\tm.
31555\tzasloniti\t\tv.tr. pf.
31557\tzasluga\t\tf.
2903\tzasluženy\t\tadj.
20319\tzaslužiti\t\tv.tr. pf.
20320\tzasluživati\t\tv.tr. ipf.
19408\tzasmějati sę\t\tv.refl. pf.
19411\tzasměška\t\tf.
19412\tzasnųti\t\tv.intr. pf.
19413\tzaspanec\t\tm.anim.
19414\tzaspanica\t\tf.
19415\tzaspany\t\tadj.
33220\tzaspati sę\t\tv.refl. pf.
19416\tzaspati\t\tv.intr. pf.
23843\tzasråmiti\t\tv.tr. pf.
23842\tzasramjati\t\tv.tr. ipf.
23844\tzasråmjeny\t\tadj.
1932\tzasrati\t\tv.intr. pf.
5826\tzastarěly\t\tadj.
4112\tzastariti\t\tv.intr. pf.
4111\tzastarjati\t\tv.intr. ipf.
21830\tzastati\t\tv.tr. pf.
21831\tzastati\t\tv.tr. pf.
21842\tzastav\t\tm.
15210\tzastava\t\tf.
21828\tzastavati\t\tv.tr. ipf.
21829\tzastavati\t\tv.tr. ipf.
21837\tzastaviti\t\tv.tr. pf.
21841\tzastaviti\t\tv.tr. pf.
21834\tzastavjati\t\tv.tr. ipf.
21840\tzastavjati\t\tv.tr. ipf.
21832\tzastoj\t\tm.
35003\tzastoj\t\tm.
19417\tzastrašańje\t\tn.
19418\tzastrašati\t\tv.tr. ipf.
19419\tzastrašiti\t\tv.tr. pf.
3268\tzastrěliti\t\tv.tr. pf.
5113\tzastrěljati\t\tv.tr. ipf.
19420\tzastųpati\t\tv.tr. ipf.
21994\tzastųpati\t\tv.tr. ipf.
19421\tzastųpiti\t\tv.tr. pf.
21995\tzastųpiti\t\tv.tr. pf.
1807\tzastųpnik\t\tm.anim.
23716\tzasuvka\t\tf.
21680\tzasvěćati\t\tv.intr. ipf.
21682\t#zasvětiti\t\tv.intr. pf.
36419\tzaščićati\t\tv.tr. ipf.
14176\tzaščita\t\tf.
14177\tzaščititi\t\tv.tr. pf.
31565\tzaščitnik\t\tm.anim.
36050\tzašijka\t\tf.
23255\tzašiti\t\tv.tr. pf.
5616\tzaštopati\t\tv.tr. pf.
1170\tzatemniti\t\tv.tr. pf.
3090\tzatemnjati\t\tv.tr. ipf.
31881\tzatišje\t\tn.
33093\tzatknųti sę\t\tv.refl. pf.
31567\tzatknųti\t\tv.tr. pf.
33692\tzatměvati\t\tv.tr. ipf.
31569\tzatmiti\t\tv.tr. pf.
31568\tzatmjeńje\t\tn.
4035\tzato že, zatože\t\tconj.
3056\tzato\t\tadv.
3832\tzatom\t\tadv.
14183\tzatopiti\t\tv.tr. pf.
15211\tzatopjeńje\t\tn.
35002\tzator\t\tm.
22128\tzatraćenec\t\tm.anim.
13062\tzatręsti\t\tv.tr. pf.
14186\tzatrimati\t\tv.tr. pf.
14185\tzatrimyvati\t\tv.tr. ipf.
31571\tzatųhly\t\tadj.
5204\tzatvarjati\t\tv.tr. ipf.
19422\tzatvor\t\tm.
22556\tzatvor\t\tm.
5205\tzatvoriti\t\tv.tr. pf.
2894\tzatvorjeny\t\tadj.
35498\tzatvorka\t\tf.
22124\tzatyčka\t\tf.
33092\tzatykati sę\t\tv.refl. ipf.
33089\tzatykati\t\tv.tr. ipf.
31573\tzatylȯk\t\tm.
35005\tzaustaviti sę\t\tv.refl. pf.
5656\tzaustaviti\t\tv.tr. pf.
5655\tzaustavjati sę\t\tv.refl. ipf.
35004\tzaustavjati\t\tv.tr. ipf.
1933\tzautra\t\tadv.
14192\tzautraka\t\tf.
14193\tzautrakati\t\tv.intr. ipf.
14195\tzautrišnji, zautrišny\t\tadj.
23977\tzauvažati\t\tv.tr. ipf.
23978\tzauvažiti\t\tv.tr. pf.
3469\tzavaliti\t\tv.tr. pf.
31576\tzavčera\t\tadv.
22408\tzavěćańje\t\tn.
31583\tzavěćati\t\tv.tr. ipf./pf.
22239\tzavědyvati\t\tv.tr. ipf.
2901\tzavěsa\t\tf.
22410\tzavět\t\tm.
19423\tzavětrny\t\tadj.
19424\tzavęzati\t\tv.tr. pf.
19426\tzavęzyvati\t\tv.tr. ipf.
36089\tzaviděti\t\tv.intr. ipf.
31587\tzavidny\t\tadj.
20321\tzavisěti od\t\tv.intr. ipf.
31589\tzavisnosť\t\tf.
36324\tzavisnosť\t\tf.
17069\tzavisny\t\tadj.
36325\tzavisny\t\tadj.
22429\tzavisť\t\tf.
22430\tzavistny\t\tadj.
31592\tzavitȯk\t\tm.
22514\tzavladnųti\t\tv.tr. pf.
22513\tzavladyvati\t\tv.tr. ipf.
4653\tzavod\t\tm.
2355\tzavojevati\t\tv.tr. pf.
2294\tzavojevyvati\t\tv.tr. ipf.
19428\tzavraćati\t\tv.intr. ipf.
19429\tzavråćeńje\t\tn.
19430\tzavråtiti\t\tv.intr. pf.
22720\tzavråtny\t\tadj.
19431\tzavŕšati\t\tv.tr. ipf.
19435\tzavŕšiti\t\tv.tr. pf.
31596\tzavŕtěti\t\tv.intr. pf.
33351\tzavyti\t\tv.intr. pf.
31597\tzavzęty\t\tadj.
22906\tzazor\t\tm.
22907\tzazor\t\tm.
19439\tzažartovati\t\tv.intr. pf.
32639\tzažegti\t\tv.tr. pf.
32642\tzažegti\t\tv.tr. pf.
32644\tzažegti\t\tv.tr. pf.
32633\tzažigati\t\tv.tr. ipf.
32636\tzažigati\t\tv.tr. ipf.
32638\tzažigati\t\tv.tr. ipf.
14201\tzdar!\t\tintj.
4881\tzdråv!\t\tintj.
34731\tzdråvěti\t\tv.intr. ipf.
32965\tzdråvica\t\tf.
576\tzdråvje\t\tn.
3024\tzdråvoohrånjeńje\t\tn.sg.
14210\tzdråvotničstvo\t\tn.sg.
2167\tzdråvy\t\tadj.
23475\tzęba\t\tf.
20834\tzebra\t\tf.
31602\tzębti\t\tv.intr. ipf.
31604\tzebu\t\tm.anim.
31605\tzefir\t\tm.
31623\tzějati\t\tv.intr. ipf.
32185\tzelena salata\t\tf.
19442\tzelenina\t\tf.
21248\tzeleninaŕ\t\tm.anim.
31606\tzelenj\t\tf.
752\tzeleny\t\tadj.
14217\tzemisty\t\tadj.
2255\tzemja\t\tf.
14218\tZemja\t\tf.
22746\tzemjak\t\tm.anim.
31609\tzemjanka\t\tf.
14222\tzemjany\t\tadj.
4691\tzemjedělec\t\tm.anim.
19444\tzemjedělišče\t\tn.
16777\tzemjeděľstvo\t\tn.sg.
20835\tzemjeměr\t\tm.anim.
21249\tzemjepis\t\tm.
21250\tzemjepisec\t\tm.anim.
3577\tzemjetręseńje\t\tn.
31614\tzemnovodny\t\tadj.
5983\tzemny orěh\t\tm.
3765\tzemny\t\tadj.
35806\tzemsky\t\tadj.
31617\tzěnica\t\tf.
31618\tzenit\t\tm.
1925\tzęť\t\tm.anim.
23717\tzěvati\t\tv.intr. ipf.
23718\tzěvnųti\t\tv.intr. pf.
31622\tzigzag\t\tm.
1513\tzima\t\tf.
14232\tzima\t\tf.
36511\tZimbabve\t\tn.
14234\tzimnějši\t\tadj.
14236\tzimnosť\t\tf.
4467\tzimny\t\tadj.
31625\tzimorodȯk\t\tm.anim.
19455\tzimovy sȯlncevråt\t\tm.
14238\tzimovy\t\tadj.
36150\tzip u nogavic\t\tm.
35401\tzip\t\tm.
22900\tzirkati\t\tv.intr. ipf.
22901\tzirknųti\t\tv.intr. pf.
35121\tzlåta rybka\t\tf.
31626\tzlåtaŕ\t\tm.anim.
31627\tzlåtisty\t\tadj.
32974\tzlåtiti\t\tv.tr. ipf.
3046\tzlåto\t\tn.sg.
31630\tzlåtousty\t\tadj.
877\tzlåty\t\tadj.
4557\tzlo\t\tn.
14244\tzlo\t\tadv.
14250\tzloba\t\tf.
36861\tzloba\t\tf.
36858\tzlobiti sę\t\tv.refl. ipf.
34744\tzlobiti\t\tv.tr. ipf.
14247\tzlobnica\t\tf.
14248\tzlobnik\t\tm.anim.
4285\tzlobny\t\tadj.
2226\tzločin\t\tm.
124\tzločinec\t\tm.anim.
3526\tzločinnik\t\tm.anim.
17218\tzločinstvo\t\tn.
3935\tzlodějatelj\t\tm.anim.
36860\tzlonaměrnosť\t\tf.sg.
31636\tzlonaměrny\t\tadj.
22755\tzloradno\t\tadv.
35009\tzloradny\t\tadj.
35007\tzloradosť\t\tf.
35008\tzloradovati sę\t\tv.refl. ipf.
22758\tzlosť\t\tf.
36862\tzlosť\t\tf.sg.
19462\tzlostlivy\t\tadj.
16738\tzloty\t\tm.
15673\tzloumysľnosť\t\tf.
15674\tzloumysľny\t\tadj.
1495\tzloupotrěbiti\t\tv.tr. pf.
1892\tzloupotrěbjati\t\tv.tr. ipf.
14262\tzlověsť\t\tf.
14263\tzlověstno\t\tadv.
15219\tzlověstny priznak\t\tm.
15218\tzlověstny znak\t\tm.
14264\tzlověstny\t\tadj.
31640\tzlověšći\t\tadj.
3089\tzly\t\tadj.
22751\tzly\t\tadj.
36863\tzly\t\tadj.
3045\tzmija\t\tf.
7508\tzmiji\t\tadj.
22840\tznaček\t\tm.
22841\tznaček\t\tm.
3736\tznačeńje\t\tn.
35272\tznačimosť\t\tf.
35273\tznačimy\t\tadj.
1886\tznačiti\t\tv.tr. ipf.
14280\tznačka\t\tf.
19464\tznačno\t\tadv.
4316\tznačnosť\t\tf.
1520\tznačny\t\tadj.
22835\tznahaŕ\t\tm.anim.
22830\tznajema\t\tf.
17070\tznajemy\t\tadj.
22829\tznajemy\t\tm.anim.
36124\tznak citovańja\t\tf.
4086\tznak\t\tm.
15220\tznak\t\tm.
22839\tznak\t\tm.
22836\tznalec\t\tm.anim.
14290\tznalosť\t\tf.
15675\tznamę\t\tn.
22844\tznamę\t\tn.
35380\tznamenitosť\t\tf.
36519\tznamenitosť\t\tf.
2125\tznamenity\t\tadj.
22845\tznameńje\t\tn.
22846\tznameńje\t\tn.
22850\tznamenovati\t\tv.tr. ipf.
22851\tznamenovati\t\tv.tr. ipf.
2126\tznanec\t\tm.anim.
3712\tznańje\t\tn.sg.
477\tznany\t\tadj.
372\tznati\t\tv.tr. ipf.
22832\tznatny\t\tadj.
31656\tzodiak\t\tm.sg.
31657\tzodiakaľny\t\tadj.
24007\tzȯlva\t\tf.
36297\tzombi\t\tm.anim.
17100\tzona\t\tf.
17071\tzonaľny\t\tadj.
31661\tzoolog\t\tm.anim.
251\tzoologičny park\t\tm.
31662\tzoologičny\t\tadj.
19467\tzorja\t\tf.
31664\tzȯv\t\tm.
31665\tzrazy\t\tm.pl.
1777\tzŕcalo\t\tn.
36912\tzrělišče\t\tn.
31667\tzrělosť\t\tf.
31668\tzrěly\t\tadj.
20328\tzrěńje\t\tn.sg.
4043\tzrěti\t\tv.intr. ipf.
19468\tzrěti\t\tv.intr. ipf.
34886\tzritelj\t\tm.anim.
36246\tzŕneno-žitne kuľtury\t\tf.pl.
1363\tzŕno\t\tn.
31673\tzuav\t\tm.anim.
1848\tzųb\t\tm.
31675\tzųbec\t\tm.
23157\tzųbna pasta\t\tf.
23156\tzųbna ščetka\t\tf.
23158\tzųbny lěkaŕ\t\tm.anim.
31676\tzubr\t\tm.anim.
36431\tzubrova trava\t\tf.
31677\tzubrovka\t\tf.
22912\tzvańje\t\tn.
16494\tzvateljnik, zvateljny padež\t\tm.
1994\tzvati\t\tv.tr. ipf.
22909\tzvati\t\tv.tr. ipf.
932\tzvěŕ\t\tm.anim.
15223\tzvěŕ\t\tm.anim.
34748\tzvěrěti\t\tv.intr. ipf.
14311\tzvěŕsky\t\tadj.
1924\tzvěŕstvo\t\tn.
1889\tzvězda\t\tf.
23006\tzvězdaŕ\t\tm.anim.
23007\tzvězdaŕstvo\t\tn.sg.
31684\tzvězdny\t\tadj.
22888\tzvězdoznavec\t\tm.anim.
22887\tzvězdoznavstvo\t\tn.sg.
3824\tzvon\t\tm.
36430\tzvon\t\tm.
31687\tzvonica\t\tf.
3822\tzvoniti\t\tv.intr. ipf.
31689\tzvonȯk\t\tm.
14320\tzvony\t\tm.pl.
1890\tzvųčati\t\tv.intr. ipf.
5851\tzvųčnik\t\tm.
5039\tzvųčny\t\tadj.
31692\tzvųčny\t\tadj.
843\tzvųk\t\tm.
36152\tzvukoręd\t\tm.
23415\tzvųkozapis\t\tm.
2626\tžaba\t\tf.
35651\tžabra\t\tf.
14327\tžaden\t\tpron.indef.
14334\tžaliti sę\t\tv.refl. ipf.
3772\tžaliti\t\tv.tr. ipf.
3931\tžalj\t\tadv.
19386\tžalj\t\tm.
19387\tžaljeńje\t\tn.
14336\tžaloba\t\tf.
3773\tžalosť\t\tf.
3389\tžalostny\t\tadj.
1923\tžalovati sę\t\tv.refl. ipf.
2562\tžar\t\tm.
17075\tžargon\t\tm.
19402\tžariti\t\tv.tr. ipf.
19403\tžarky\t\tadj.
19404\tžarovka\t\tf.
31700\tŽar-ptica\t\tf.
19405\tžart\t\tm.
19406\tžartovati\t\tv.intr. ipf.
12871\tže by\t\tconj.
4037\t#že\t\tconj.
22795\tžebrak\t\tm.anim.
19448\tžędajųći\t\tadj.
665\tžędati\t\tv.tr. ipf.
4637\tžędati\t\tv.tr. ipf.
4632\tžędnosť\t\tf.
14349\tžędny\t\tadj.
34884\tžędny\t\tadj.
3930\tžęđa\t\tf.
36429\tžęđa\t\tf.
32631\tžegti\t\tv.tr. ipf.
3238\tželańje\t\tn.
1047\tželati\t\tv.tr. ipf.
23280\tželatin\t\tm.sg.
23279\tžele\t\tn.indecl.
394\tželěznica\t\tf.
14369\tželězničaŕ\t\tm.anim.
5668\tželěznična stancija\t\tf.
34898\tželězničny prěvod\t\tm.
14366\tželězničny\t\tadj.
3940\tželězny\t\tadj.
395\tželězo\t\tn.sg.
31702\tželězobeton\t\tm.sg.
702\tžęlo\t\tn.
2208\tželųď\t\tm.
16\tželųdȯk\t\tm.
2910\tžena\t\tf.
3231\tžena\t\tf.
3399\tženiti sę\t\tv.refl. ipf.
669\tžensky rod\t\tm.
5220\tžensky\t\tadj.
1201\tžerav\t\tm.anim.
36160\tžestoky\t\tadj.
36520\tžestoky\t\tadj.
1809\tžęti\t\tv.tr. ipf.
32982\tžętva\t\tf.
23561\tžezlo\t\tn.
31486\tžgaga\t\tf.
14383\tŽid\t\tm.anim.
14384\tžidovsky\t\tadj.
1997\tžila\t\tf.
35223\tžilet\t\tm.
20322\tžilišče\t\tn.
32837\tžiľny\t\tadj.
20836\tžirafa\t\tf.
15228\tžitelj\t\tm.anim.
28\tžiti\t\tv.intr. ipf.
7191\tžiti\t\tv.intr. ipf.
14387\tžiťje\t\tn.
15684\tžiťjeopasny\t\tadj.
36492\tžiťjesposobnosť\t\tf.sg.
35596\tžiťjesposobny\t\tadj.
22929\tžito\t\tn.
22930\tžito\t\tn.
22639\tživo srěbro\t\tn.sg.
14392\tživo\t\tadv.
19460\tživobyťje\t\tn.
21251\tživopis\t\tm.
21253\tživopisec\t\tm.anim.
20327\tživosť\t\tf.
1996\tživot\t\tm.
1464\tživotina\t\tf.
35507\tživotinovod\t\tm.anim.
36766\tživotinsky\t\tadj.
21254\tživotopis\t\tm.
14398\tživy TV-pokaz\t\tm.
970\tživy\t\tadj.
1843\tžlěb\t\tm.
427\tžlěza\t\tf.
31713\tžmuriti oči\t\tv.tr. ipf.
31714\tžmurky\t\tf.pl.
1670\tžȯlč\t\tf.
34739\tžȯltěti\t\tv.intr. ipf.
1499\tžȯlty\t\tadj.
20837\tžȯlv\t\tf.
14403\tžopa\t\tf.
32986\tžoviaľnosť\t\tf.
32985\tžoviaľny\t\tadj.
22962\tžravy\t\tadj.
16346\tžrěbę\t\tn.
35265\tžrěbec\t\tm.anim.
1867\tžrěbętko\t\tn.
34178\tžrěbiti sę\t\tv.refl. ipf.
35703\tžrec\t\tm.anim.
15686\tžrěńje\t\tn.sg.
91\tžrěti\t\tv.tr. ipf.
35704\tžrica\t\tf.
2940\tžrlo\t\tn.
22963\tžrlo\t\tn.
5064\tžrtva\t\tf.
21255\tžrtva\t\tf.
14407\t#žrtvena koza\t\tf.
14409\tžrtveny byk\t\tm.anim.
32022\tžrtveny kozel\t\tm.anim.
14408\tžrtveny\t\tadj.
1490\tžrtvovati\t\tv.tr. ipf.
15744\t#žučji\t\tadj.
15743\tžuk\t\tm.anim.
32020\tžuravina\t\tf.
22433\tžuri\t\tm.indecl.
4856\tžurnal\t\tm.
1974\tžurnalist\t\tm.anim.
23581\tžurnalistika\t\tf.
34067\tžuvačka\t\tf.
34068\tžuvaľna gumka\t\tf.
2627\tžuvati\t\tv.intr. ipf.
19473\tžužati\t\tv.intr. ipf.
19475\tžuželka\t\tf.\
`);

export function getCases(nth: number, outOf: number) {
  return [...data].filter((_item, index) => {
    return nth === (index % outOf);
  });
}
