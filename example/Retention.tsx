import * as React from "react";
import { DrawParamsProps, Source} from "../src/ChartProps";
import Chart from "../src/Chart";
import { retentionSourceSelector } from "../src/utils";
const retentionData: Source = [
  { comparison_value: "所有符合行为用户", tm: 0, users: 69073, retention_0: 69073, retention_rate_0: 1, retention_1: 12272, retention_rate_1: 0.1938061622526492, retention_2: 8575, retention_rate_2: 0.14944491887275832, retention_3: 7937, retention_rate_3: 0.1546088514882344, retention_4: 6244, retention_rate_4: 0.1378366445916115, retention_5: 5749, retention_rate_5: 0.1318336085121996, retention_6: 5999, retention_rate_6: 0.14526478920986996, retention_7: 5658, retention_rate_7: 0.15860735009671179, retention_8: 3604, retention_rate_8: 0.12200406228842248, retention_9: 2596, retention_rate_9: 0.11131120830117486, retention_10: 2453, retention_rate_10: 0.14757550234628805, retention_11: 1385, retention_rate_11: 0.14388115520465405, retention_12: 1109, retention_rate_12: 0.1430414033277441, retention_13: 843, retention_rate_13: 0.15091299677765843 },
  { comparison_value: "所有符合行为用户", tm: 1498752000000, users: 5586, retention_0: 5586, retention_rate_0: 1, retention_1: 381, retention_rate_1: 0.0682062298603652, retention_2: 264, retention_rate_2: 0.047261009667024706, retention_3: 1350, retention_rate_3: 0.24167561761546724, retention_4: 1113, retention_rate_4: 0.19924812030075187, retention_5: 1041, retention_rate_5: 0.18635875402792695, retention_6: 1026, retention_rate_6: 0.1836734693877551, retention_7: 981, retention_rate_7: 0.17561761546723953, retention_8: 239, retention_rate_8: 0.04278553526673828, retention_9: 158, retention_rate_9: 0.02828499820981024, retention_10: 1012, retention_rate_10: 0.1811672037235947, retention_11: 931, retention_rate_11: 0.16666666666666666, retention_12: 869, retention_rate_12: 0.15556749015395632, retention_13: 843, retention_rate_13: 0.15091299677765843 },
  { comparison_value: "所有符合行为用户", tm: 1498838400000, users: 2167, retention_0: 2167, retention_rate_0: 1, retention_1: 178, retention_rate_1: 0.08214120904476234, retention_2: 343, retention_rate_2: 0.15828334102445776, retention_3: 283, retention_rate_3: 0.13059529303184125, retention_4: 269, retention_rate_4: 0.12413474850023073, retention_5: 257, retention_rate_5: 0.11859713890170744, retention_6: 250, retention_rate_6: 0.11536686663590216, retention_7: 130, retention_rate_7: 0.05999077065066913, retention_8: 88, retention_rate_8: 0.04060913705583756, retention_9: 258, retention_rate_9: 0.11905860636825104, retention_10: 248, retention_rate_10: 0.11444393170281496, retention_11: 249, retention_rate_11: 0.11490539916935856, retention_12: 240, retention_rate_12: 0.11075219197046608 },
  { comparison_value: "所有符合行为用户", tm: 1498924800000, users: 1873, retention_0: 1873, retention_rate_0: 1, retention_1: 292, retention_rate_1: 0.15589962626801923, retention_2: 234, retention_rate_2: 0.12493326214628937, retention_3: 217, retention_rate_3: 0.11585691404164442, retention_4: 205, retention_rate_4: 0.10945008008542445, retention_5: 196, retention_rate_5: 0.10464495461825948, retention_6: 112, retention_rate_6: 0.0597971169247197, retention_7: 104, retention_rate_7: 0.055525894287239724, retention_8: 194, retention_rate_8: 0.10357714895888948, retention_9: 201, retention_rate_9: 0.10731446876668446, retention_10: 188, retention_rate_10: 0.1003737319807795, retention_11: 205, retention_rate_11: 0.10945008008542445 },
  { comparison_value: "所有符合行为用户", tm: 1499011200000, users: 6996, retention_0: 6996, retention_rate_0: 1, retention_1: 1538, retention_rate_1: 0.2198399085191538, retention_2: 1361, retention_rate_2: 0.19453973699256719, retention_3: 1225, retention_rate_3: 0.17510005717552887, retention_4: 1161, retention_rate_4: 0.16595197255574615, retention_5: 288, retention_rate_5: 0.0411663807890223, retention_6: 193, retention_rate_6: 0.027587192681532303, retention_7: 1249, retention_rate_7: 0.1785305889079474, retention_8: 1070, retention_rate_8: 0.15294453973699257, retention_9: 1013, retention_rate_9: 0.14479702687249857, retention_10: 1005, retention_rate_10: 0.14365351629502573 },
  { comparison_value: "所有符合行为用户", tm: 1499097600000, users: 6700, retention_0: 6700, retention_rate_0: 1, retention_1: 1505, retention_rate_1: 0.22462686567164178, retention_2: 1295, retention_rate_2: 0.19328358208955224, retention_3: 1167, retention_rate_3: 0.17417910447761195, retention_4: 298, retention_rate_4: 0.044477611940298506, retention_5: 180, retention_rate_5: 0.026865671641791045, retention_6: 1177, retention_rate_6: 0.17567164179104477, retention_7: 1057, retention_rate_7: 0.15776119402985075, retention_8: 1006, retention_rate_8: 0.15014925373134327, retention_9: 966, retention_rate_9: 0.14417910447761195 },
  { comparison_value: "所有符合行为用户", tm: 1499184000000, users: 6218, retention_0: 6218, retention_rate_0: 1, retention_1: 1509, retention_rate_1: 0.24268253457703443, retention_2: 1239, retention_rate_2: 0.19926021228690896, retention_3: 302, retention_rate_3: 0.04856867159858475, retention_4: 186, retention_rate_4: 0.02991315535541975, retention_5: 1207, retention_rate_5: 0.19411386297844965, retention_6: 1060, retention_rate_6: 0.1704728208427147, retention_7: 1038, retention_rate_7: 0.16693470569314892, retention_8: 1007, retention_rate_8: 0.16194917980057896 },
  { comparison_value: "所有符合行为用户", tm: 1499270400000, users: 6133, retention_0: 6133, retention_rate_0: 1, retention_1: 1498, retention_rate_1: 0.24425240502201206, retention_2: 355, retention_rate_2: 0.05788358062938203, retention_3: 212, retention_rate_3: 0.03456709603782814, retention_4: 1317, retention_rate_4: 0.2147399315180173, retention_5: 1179, retention_rate_5: 0.19223870862546877, retention_6: 1123, retention_rate_6: 0.1831077775966085, retention_7: 1099, retention_rate_7: 0.17919452144138268 },
  { comparison_value: "所有符合行为用户", tm: 1499356800000, users: 5624, retention_0: 5624, retention_rate_0: 1, retention_1: 394, retention_rate_1: 0.07005689900426743, retention_2: 229, retention_rate_2: 0.04071834992887625, retention_3: 1416, retention_rate_3: 0.25177809388335703, retention_4: 1182, retention_rate_4: 0.21017069701280228, retention_5: 1099, retention_rate_5: 0.19541251778093882, retention_6: 1058, retention_rate_6: 0.18812233285917496 },
  { comparison_value: "所有符合行为用户", tm: 1499443200000, users: 2311, retention_0: 2311, retention_rate_0: 1, retention_1: 170, retention_rate_1: 0.07356122890523582, retention_2: 384, retention_rate_2: 0.16616183470359153, retention_3: 336, retention_rate_3: 0.14539160536564258, retention_4: 311, retention_rate_4: 0.13457377758546085, retention_5: 302, retention_rate_5: 0.13067935958459542 },
  { comparison_value: "所有符合行为用户", tm: 1499529600000, users: 1692, retention_0: 1692, retention_rate_0: 1, retention_1: 282, retention_rate_1: 0.16666666666666666, retention_2: 225, retention_rate_2: 0.13297872340425532, retention_3: 214, retention_rate_3: 0.12647754137115838, retention_4: 202, retention_rate_4: 0.11938534278959811 },
  { comparison_value: "所有符合行为用户", tm: 1499616000000, users: 6036, retention_0: 6036, retention_rate_0: 1, retention_1: 1555, retention_rate_1: 0.2576209410205434, retention_2: 1344, retention_rate_2: 0.22266401590457258, retention_3: 1215, retention_rate_3: 0.20129224652087474 },
  { comparison_value: "所有符合行为用户", tm: 1499702400000, users: 6043, retention_0: 6043, retention_rate_0: 1, retention_1: 1479, retention_rate_1: 0.24474598709250373, retention_2: 1302, retention_rate_2: 0.21545589938772133 },
  { comparison_value: "所有符合行为用户", tm: 1499788800000, users: 5942, retention_0: 5942, retention_rate_0: 1, retention_1: 1491, retention_rate_1: 0.2509256142712891 },
  { comparison_value: "所有符合行为用户", tm: 1499875200000, users: 5752, retention_0: 5752, retention_rate_0: 1 }
];

const chartParams: DrawParamsProps = {
  adjust: "stack",
  chartType: "retention",
  columns: [
    { id: "turn", name: "留存周期", isDim: true, isRate: false },
    // { id: "comparison_value", name: "对比值", isDim: true, isRate: false },
    // { id: "tm", name: "时间", isDim: true, isRate: false },
   // { id: "users", name: "用户数", isDim: false, isRate: false },
   { id: "retention", name: "用户数", isDim: false, isRate: false },
   { id: "retention_rate", name: "留存率", isDim: false, isRate: true },
   { id: "retention_0", name: "当天", isDim: false, isRate: false },
   { id: "retention_rate_0", name: "当天留存率", isDim: false, isRate: true },
   { id: "retention_1", name: "1天后", isDim: false, isRate: false },
   { id: "retention_rate_1", name: "1天后留存率", isDim: false, isRate: true },
   { id: "retention_2", name: "2天后", isDim: false, isRate: false },
   { id: "retention_rate_2", name: "2天后留存率", isDim: false, isRate: true },
   { id: "retention_3", name: "3天后", isDim: false, isRate: false },
   { id: "retention_rate_3", name: "3天后留存率", isDim: false, isRate: true },
   { id: "retention_4", name: "4天后", isDim: false, isRate: false },
   { id: "retention_rate_4", name: "4天后留存率", isDim: false, isRate: true },
   { id: "retention_5", name: "5天后", isDim: false, isRate: false },
   { id: "retention_rate_5", name: "5天后留存率", isDim: false, isRate: true },
   { id: "retention_6", name: "6天后", isDim: false, isRate: false },
   { id: "retention_rate_6", name: "6天后留存率", isDim: false, isRate: true },
   { id: "retention_7", name: "7天后", isDim: false, isRate: false },
   { id: "retention_rate_7", name: "7天后留存率", isDim: false, isRate: true },
   { id: "retention_8", name: "8天后", isDim: false, isRate: false },
   { id: "retention_rate_8", name: "8天后留存率", isDim: false, isRate: true },
   { id: "retention_9", name: "9天后", isDim: false, isRate: false },
   { id: "retention_rate_9", name: "9天后留存率", isDim: false, isRate: true },
   { id: "retention_10", name: "10天后", isDim: false, isRate: false },
   { id: "retention_rate_10", name: "10天后留存率", isDim: false, isRate: true },
   { id: "retention_11", name: "11天后", isDim: false, isRate: false },
   { id: "retention_rate_11", name: "11天后留存率", isDim: false, isRate: true },
   { id: "retention_12", name: "12天后", isDim: false, isRate: false },
   { id: "retention_rate_12", name: "12天后留存率", isDim: false, isRate: true },
   { id: "retention_13", name: "13天后", isDim: false, isRate: false },
   { id: "retention_rate_13", name: "13天后留存率", isDim: false, isRate: true }

  ]
};
const a = retentionSourceSelector(retentionData, ["comparison_value"], false);
const Retention = (props: any) => (
  <Chart chartParams={chartParams} source={a} />
);
export default Retention;
