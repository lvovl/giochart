import * as React from "react";
import { DrawParamsProps, Source} from "../src/ChartProps";
import Chart from "../src/Chart";
import { retentionSourceSelector } from "../src/utils";

const  rr = JSON.parse('{"adjust":"stack","timeRange":"day:15,1","granularities":[{"id":"tm","interval":"86400000"},{"id":"action","levels":[{"type":"trigger","metric":{"id":"woVzKyo2","action":"clck","level":"original","filter":null}},{"type":"trigger","metric":{"id":"GR4vjbwo","action":"clck","level":"original","filter":null}}]}],"attrs":{"selection":[0,1]},"chartType":"retention","columns":[{"id":"turn","name":"留存","isDim":true,"isRate":false,"values":["当天","1天后","2天后","3天后","4天后","5天后","6天后","7天后","8天后","9天后","10天后","11天后","12天后","13天后"]},{"id":"action","name":"用户行为","isDim":true,"isRate":false},{"id":"comparison_value","name":"对比值","isDim":true,"isRate":false},{"id":"retention_rate","name":"留存率","isDim":false,"isRate":true},{"id":"retention","name":"留存人数","isDim":false,"isRate":false}]}');
const ss = JSON.parse('[{"retention":35971,"retention_rate":1,"comparison_value":"0","action":"留存-选择时间段-6月初版_点击量","turn":0},{"retention":1535,"retention_rate":0.044073733777420465,"comparison_value":"0","action":"留存-选择时间段-6月初版_点击量","turn":1},{"retention":768,"retention_rate":0.022924004537042564,"comparison_value":"0","action":"留存-选择时间段-6月初版_点击量","turn":2},{"retention":531,"retention_rate":0.0175502379693284,"comparison_value":"0","action":"留存-选择时间段-6月初版_点击量","turn":3},{"retention":359,"retention_rate":0.013338782789626217,"comparison_value":"0","action":"留存-选择时间段-6月初版_点击量","turn":4},{"retention":246,"retention_rate":0.010232093835787373,"comparison_value":"0","action":"留存-选择时间段-6月初版_点击量","turn":5},{"retention":260,"retention_rate":0.012401621750536608,"comparison_value":"0","action":"留存-选择时间段-6月初版_点击量","turn":6},{"retention":249,"retention_rate":0.013840253460063364,"comparison_value":"0","action":"留存-选择时间段-6月初版_点击量","turn":7},{"retention":208,"retention_rate":0.01247825304457376,"comparison_value":"0","action":"留存-选择时间段-6月初版_点击量","turn":8},{"retention":161,"retention_rate":0.010504338748613559,"comparison_value":"0","action":"留存-选择时间段-6月初版_点击量","turn":9},{"retention":119,"retention_rate":0.009364916974895728,"comparison_value":"0","action":"留存-选择时间段-6月初版_点击量","turn":10},{"retention":57,"retention_rate":0.005903676851372346,"comparison_value":"0","action":"留存-选择时间段-6月初版_点击量","turn":11},{"retention":14,"retention_rate":0.0022222222222222222,"comparison_value":"0","action":"留存-选择时间段-6月初版_点击量","turn":12},{"retention":8,"retention_rate":0.002408187838651415,"comparison_value":"0","action":"留存-选择时间段-6月初版_点击量","turn":13},{"retention":88,"retention_rate":1,"comparison_value":"1","action":"创建单图-保存－按钮点击_点击量","turn":0},{"retention":41,"retention_rate":0.4659090909090909,"comparison_value":"1","action":"创建单图-保存－按钮点击_点击量","turn":1},{"retention":23,"retention_rate":0.26744186046511625,"comparison_value":"1","action":"创建单图-保存－按钮点击_点击量","turn":2},{"retention":13,"retention_rate":0.16049382716049382,"comparison_value":"1","action":"创建单图-保存－按钮点击_点击量","turn":3},{"retention":9,"retention_rate":0.12162162162162163,"comparison_value":"1","action":"创建单图-保存－按钮点击_点击量","turn":4},{"retention":10,"retention_rate":0.16393442622950818,"comparison_value":"1","action":"创建单图-保存－按钮点击_点击量","turn":5},{"retention":10,"retention_rate":0.2,"comparison_value":"1","action":"创建单图-保存－按钮点击_点击量","turn":6},{"retention":8,"retention_rate":0.18604651162790697,"comparison_value":"1","action":"创建单图-保存－按钮点击_点击量","turn":7},{"retention":12,"retention_rate":0.2857142857142857,"comparison_value":"1","action":"创建单图-保存－按钮点击_点击量","turn":8},{"retention":6,"retention_rate":0.15,"comparison_value":"1","action":"创建单图-保存－按钮点击_点击量","turn":9},{"retention":1,"retention_rate":0.03225806451612903,"comparison_value":"1","action":"创建单图-保存－按钮点击_点击量","turn":10},{"retention":1,"retention_rate":0.043478260869565216,"comparison_value":"1","action":"创建单图-保存－按钮点击_点击量","turn":11},{"retention":0,"retention_rate":0,"comparison_value":"1","action":"创建单图-保存－按钮点击_点击量","turn":12},{"retention":0,"retention_rate":0,"comparison_value":"1","action":"创建单图-保存－按钮点击_点击量","turn":13}]');

const legendP = JSON.parse('{"adjust":"stack","chartType":"retention","columns":[{"id":"turn","name":"留存","isDim":true,"isRate":false,"values":["当周","1周后","2周后","3周后","4周后","5周后","6周后","7周后","8周后","9周后","10周后","11周后"]},{"id":"action","name":"用户行为","isDim":true,"isRate":false},{"id":"comparison_value","name":"对比值","isDim":true,"isRate":false},{"id":"retention_rate","name":"留存率","isDim":false,"isRate":true},{"id":"retention","name":"留存人数","isDim":false,"isRate":false}],"timeRange":"day:91,1","granularities":[{"id":"tm","interval":"604800000"},{"id":"action","levels":[{"type":"trigger","metric":{"id":"lPQaxnPp","action":"page","level":"original","filter":null}},{"type":"trigger","metric":{"id":"GR4a3DPM","action":"clck","level":"original","filter":null}},{"type":"trigger","metric":{"id":"j9yBpJdR","action":"page","level":"original","filter":null}},{"type":"trigger","metric":{"id":"QPDWLrlR","action":"page","level":"original","filter":null}},{"type":"trigger","metric":{"id":"5RpDVQrR","action":"page","level":"original","filter":null}},{"type":"trigger","metric":{"id":"L9GwNGe9","action":"clck","level":"original","filter":null}},{"type":"trigger","metric":{"id":"kojmxVKP","action":"clck","level":"original","filter":null}},{"type":"trigger","metric":{"id":"3oLnN7JR","action":"clck","level":"original","filter":null}},{"type":"trigger","metric":{"id":"1R3lKBxP","action":"clck","level":"original","filter":null}},{"type":"trigger","metric":{"id":"4Rzy3YE9","action":"clck","level":"original","filter":null}}]}],"attrs":{"userType":"usv","range":"week","selection":[0,1,2,3,4,5,6,7,8,9]}}');
const legendS = JSON.parse('[{"turn":0,"retention":54831,"retention_rate":1,"action":"页面_看板_页面浏览量","comparison_value":"0"},{"turn":1,"retention":28284,"retention_rate":0.5612016111430782,"action":"页面_看板_页面浏览量","comparison_value":"0"},{"turn":2,"retention":22927,"retention_rate":0.4992487424602051,"action":"页面_看板_页面浏览量","comparison_value":"0"},{"turn":3,"retention":19323,"retention_rate":0.4669195824473226,"action":"页面_看板_页面浏览量","comparison_value":"0"},{"turn":4,"retention":16362,"retention_rate":0.4444142651492517,"action":"页面_看板_页面浏览量","comparison_value":"0"},{"turn":5,"retention":13632,"retention_rate":0.42309124767225326,"action":"页面_看板_页面浏览量","comparison_value":"0"},{"turn":6,"retention":11234,"retention_rate":0.4069847480346339,"action":"页面_看板_页面浏览量","comparison_value":"0"},{"turn":7,"retention":8954,"retention_rate":0.3896601244614648,"action":"页面_看板_页面浏览量","comparison_value":"0"},{"turn":8,"retention":6926,"retention_rate":0.3753929539295393,"action":"页面_看板_页面浏览量","comparison_value":"0"},{"turn":9,"retention":5009,"retention_rate":0.3648747086247086,"action":"页面_看板_页面浏览量","comparison_value":"0"},{"turn":10,"retention":3169,"retention_rate":0.3526596928555531,"action":"页面_看板_页面浏览量","comparison_value":"0"},{"turn":11,"retention":1566,"retention_rate":0.34776815456362425,"action":"页面_看板_页面浏览量","comparison_value":"0"},{"turn":0,"retention":0,"retention_rate":0,"action":"创建看板_点击量","comparison_value":"1"},{"turn":1,"retention":0,"retention_rate":0,"action":"创建看板_点击量","comparison_value":"1"},{"turn":2,"retention":0,"retention_rate":0,"action":"创建看板_点击量","comparison_value":"1"},{"turn":3,"retention":0,"retention_rate":0,"action":"创建看板_点击量","comparison_value":"1"},{"turn":4,"retention":0,"retention_rate":0,"action":"创建看板_点击量","comparison_value":"1"},{"turn":5,"retention":0,"retention_rate":0,"action":"创建看板_点击量","comparison_value":"1"},{"turn":6,"retention":0,"retention_rate":0,"action":"创建看板_点击量","comparison_value":"1"},{"turn":7,"retention":0,"retention_rate":0,"action":"创建看板_点击量","comparison_value":"1"},{"turn":8,"retention":0,"retention_rate":0,"action":"创建看板_点击量","comparison_value":"1"},{"turn":9,"retention":0,"retention_rate":0,"action":"创建看板_点击量","comparison_value":"1"},{"turn":10,"retention":0,"retention_rate":0,"action":"创建看板_点击量","comparison_value":"1"},{"turn":11,"retention":0,"retention_rate":0,"action":"创建看板_点击量","comparison_value":"1"},{"turn":0,"retention":917,"retention_rate":1,"action":"growingio 单图页面_页面浏览量","comparison_value":"2"},{"turn":1,"retention":805,"retention_rate":0.961768219832736,"action":"growingio 单图页面_页面浏览量","comparison_value":"2"},{"turn":2,"retention":730,"retention_rate":0.9419354838709677,"action":"growingio 单图页面_页面浏览量","comparison_value":"2"},{"turn":3,"retention":649,"retention_rate":0.9258202567760342,"action":"growingio 单图页面_页面浏览量","comparison_value":"2"},{"turn":4,"retention":570,"retention_rate":0.912,"action":"growingio 单图页面_页面浏览量","comparison_value":"2"},{"turn":5,"retention":489,"retention_rate":0.889090909090909,"action":"growingio 单图页面_页面浏览量","comparison_value":"2"},{"turn":6,"retention":417,"retention_rate":0.8778947368421053,"action":"growingio 单图页面_页面浏览量","comparison_value":"2"},{"turn":7,"retention":343,"retention_rate":0.8817480719794345,"action":"growingio 单图页面_页面浏览量","comparison_value":"2"},{"turn":8,"retention":267,"retention_rate":0.8668831168831169,"action":"growingio 单图页面_页面浏览量","comparison_value":"2"},{"turn":9,"retention":190,"retention_rate":0.8444444444444444,"action":"growingio 单图页面_页面浏览量","comparison_value":"2"},{"turn":10,"retention":123,"retention_rate":0.8424657534246576,"action":"growingio 单图页面_页面浏览量","comparison_value":"2"},{"turn":11,"retention":60,"retention_rate":0.8695652173913043,"action":"growingio 单图页面_页面浏览量","comparison_value":"2"},{"turn":0,"retention":33998,"retention_rate":1,"action":"看板全部页面（分析师专用勿改）_页面浏览量","comparison_value":"3"},{"turn":1,"retention":19040,"retention_rate":0.609026644915715,"action":"看板全部页面（分析师专用勿改）_页面浏览量","comparison_value":"3"},{"turn":2,"retention":15495,"retention_rate":0.5433410477593099,"action":"看板全部页面（分析师专用勿改）_页面浏览量","comparison_value":"3"},{"turn":3,"retention":13013,"retention_rate":0.5070329242158582,"action":"看板全部页面（分析师专用勿改）_页面浏览量","comparison_value":"3"},{"turn":4,"retention":11123,"retention_rate":0.48686859844174035,"action":"看板全部页面（分析师专用勿改）_页面浏览量","comparison_value":"3"},{"turn":5,"retention":9179,"retention_rate":0.4600310730216008,"action":"看板全部页面（分析师专用勿改）_页面浏览量","comparison_value":"3"},{"turn":6,"retention":7588,"retention_rate":0.44221691240748295,"action":"看板全部页面（分析师专用勿改）_页面浏览量","comparison_value":"3"},{"turn":7,"retention":6029,"retention_rate":0.42344430397527744,"action":"看板全部页面（分析师专用勿改）_页面浏览量","comparison_value":"3"},{"turn":8,"retention":4655,"retention_rate":0.4086200842696629,"action":"看板全部页面（分析师专用勿改）_页面浏览量","comparison_value":"3"},{"turn":9,"retention":3364,"retention_rate":0.3992878338278932,"action":"看板全部页面（分析师专用勿改）_页面浏览量","comparison_value":"3"},{"turn":10,"retention":2103,"retention_rate":0.38573000733675716,"action":"看板全部页面（分析师专用勿改）_页面浏览量","comparison_value":"3"},{"turn":11,"retention":1053,"retention_rate":0.3806941431670282,"action":"看板全部页面（分析师专用勿改）_页面浏览量","comparison_value":"3"},{"turn":0,"retention":39416,"retention_rate":1,"action":"主要功能——单图&看板_页面浏览量","comparison_value":"4"},{"turn":1,"retention":22412,"retention_rate":0.6187058303886925,"action":"主要功能——单图&看板_页面浏览量","comparison_value":"4"},{"turn":2,"retention":18285,"retention_rate":0.5535708879537404,"action":"主要功能——单图&看板_页面浏览量","comparison_value":"4"},{"turn":3,"retention":15404,"retention_rate":0.5182344233615933,"action":"主要功能——单图&看板_页面浏览量","comparison_value":"4"},{"turn":4,"retention":13103,"retention_rate":0.49546245178855025,"action":"主要功能——单图&看板_页面浏览量","comparison_value":"4"},{"turn":5,"retention":10879,"retention_rate":0.4703212139552981,"action":"主要功能——单图&看板_页面浏览量","comparison_value":"4"},{"turn":6,"retention":8994,"retention_rate":0.453029768800685,"action":"主要功能——单图&看板_页面浏览量","comparison_value":"4"},{"turn":7,"retention":7145,"retention_rate":0.433582134838279,"action":"主要功能——单图&看板_页面浏览量","comparison_value":"4"},{"turn":8,"retention":5519,"retention_rate":0.41924946824673354,"action":"主要功能——单图&看板_页面浏览量","comparison_value":"4"},{"turn":9,"retention":3996,"retention_rate":0.410688591983556,"action":"主要功能——单图&看板_页面浏览量","comparison_value":"4"},{"turn":10,"retention":2522,"retention_rate":0.39798011677449896,"action":"主要功能——单图&看板_页面浏览量","comparison_value":"4"},{"turn":11,"retention":1238,"retention_rate":0.38918579063187675,"action":"主要功能——单图&看板_页面浏览量","comparison_value":"4"},{"turn":0,"retention":1491,"retention_rate":1,"action":"单图——另存/另存为_点击量","comparison_value":"5"},{"turn":1,"retention":1284,"retention_rate":0.9406593406593406,"action":"单图——另存/另存为_点击量","comparison_value":"5"},{"turn":2,"retention":1115,"retention_rate":0.8955823293172691,"action":"单图——另存/另存为_点击量","comparison_value":"5"},{"turn":3,"retention":955,"retention_rate":0.8565022421524664,"action":"单图——另存/另存为_点击量","comparison_value":"5"},{"turn":4,"retention":805,"retention_rate":0.8189216683621566,"action":"单图——另存/另存为_点击量","comparison_value":"5"},{"turn":5,"retention":674,"retention_rate":0.7938751472320377,"action":"单图——另存/另存为_点击量","comparison_value":"5"},{"turn":6,"retention":574,"retention_rate":0.7788331071913162,"action":"单图——另存/另存为_点击量","comparison_value":"5"},{"turn":7,"retention":466,"retention_rate":0.7577235772357723,"action":"单图——另存/另存为_点击量","comparison_value":"5"},{"turn":8,"retention":359,"retention_rate":0.7326530612244898,"action":"单图——另存/另存为_点击量","comparison_value":"5"},{"turn":9,"retention":262,"retention_rate":0.7257617728531855,"action":"单图——另存/另存为_点击量","comparison_value":"5"},{"turn":10,"retention":173,"retention_rate":0.7208333333333333,"action":"单图——另存/另存为_点击量","comparison_value":"5"},{"turn":11,"retention":85,"retention_rate":0.6910569105691057,"action":"单图——另存/另存为_点击量","comparison_value":"5"},{"turn":0,"retention":4623,"retention_rate":1,"action":"fqy-创建单图页面-保存按钮_点击量","comparison_value":"6"},{"turn":1,"retention":3844,"retention_rate":0.908103000236239,"action":"fqy-创建单图页面-保存按钮_点击量","comparison_value":"6"},{"turn":2,"retention":3305,"retention_rate":0.8584415584415584,"action":"fqy-创建单图页面-保存按钮_点击量","comparison_value":"6"},{"turn":3,"retention":2799,"retention_rate":0.8091934084995663,"action":"fqy-创建单图页面-保存按钮_点击量","comparison_value":"6"},{"turn":4,"retention":2436,"retention_rate":0.796078431372549,"action":"fqy-创建单图页面-保存按钮_点击量","comparison_value":"6"},{"turn":5,"retention":2020,"retention_rate":0.7593984962406015,"action":"fqy-创建单图页面-保存按钮_点击量","comparison_value":"6"},{"turn":6,"retention":1706,"retention_rate":0.7456293706293706,"action":"fqy-创建单图页面-保存按钮_点击量","comparison_value":"6"},{"turn":7,"retention":1417,"retention_rate":0.7289094650205762,"action":"fqy-创建单图页面-保存按钮_点击量","comparison_value":"6"},{"turn":8,"retention":1078,"retention_rate":0.6941403734707019,"action":"fqy-创建单图页面-保存按钮_点击量","comparison_value":"6"},{"turn":9,"retention":799,"retention_rate":0.6923743500866552,"action":"fqy-创建单图页面-保存按钮_点击量","comparison_value":"6"},{"turn":10,"retention":504,"retention_rate":0.672,"action":"fqy-创建单图页面-保存按钮_点击量","comparison_value":"6"},{"turn":11,"retention":250,"retention_rate":0.6459948320413437,"action":"fqy-创建单图页面-保存按钮_点击量","comparison_value":"6"},{"turn":0,"retention":921,"retention_rate":1,"action":"看板-更新&保存_点击量","comparison_value":"7"},{"turn":1,"retention":852,"retention_rate":0.9250814332247557,"action":"看板-更新&保存_点击量","comparison_value":"7"},{"turn":2,"retention":808,"retention_rate":0.8773072747014115,"action":"看板-更新&保存_点击量","comparison_value":"7"},{"turn":3,"retention":777,"retention_rate":0.8436482084690554,"action":"看板-更新&保存_点击量","comparison_value":"7"},{"turn":4,"retention":757,"retention_rate":0.8219326818675353,"action":"看板-更新&保存_点击量","comparison_value":"7"},{"turn":5,"retention":707,"retention_rate":0.7934904601571269,"action":"看板-更新&保存_点击量","comparison_value":"7"},{"turn":6,"retention":584,"retention_rate":0.7786666666666666,"action":"看板-更新&保存_点击量","comparison_value":"7"},{"turn":7,"retention":474,"retention_rate":0.7596153846153846,"action":"看板-更新&保存_点击量","comparison_value":"7"},{"turn":8,"retention":353,"retention_rate":0.7189409368635438,"action":"看板-更新&保存_点击量","comparison_value":"7"},{"turn":9,"retention":267,"retention_rate":0.7355371900826446,"action":"看板-更新&保存_点击量","comparison_value":"7"},{"turn":10,"retention":153,"retention_rate":0.6923076923076923,"action":"看板-更新&保存_点击量","comparison_value":"7"},{"turn":11,"retention":78,"retention_rate":0.7222222222222222,"action":"看板-更新&保存_点击量","comparison_value":"7"},{"turn":0,"retention":917,"retention_rate":1,"action":"分析+看板_点击量","comparison_value":"8"},{"turn":1,"retention":806,"retention_rate":0.9595238095238096,"action":"分析+看板_点击量","comparison_value":"8"},{"turn":2,"retention":725,"retention_rate":0.939119170984456,"action":"分析+看板_点击量","comparison_value":"8"},{"turn":3,"retention":649,"retention_rate":0.9271428571428572,"action":"分析+看板_点击量","comparison_value":"8"},{"turn":4,"retention":565,"retention_rate":0.9098228663446055,"action":"分析+看板_点击量","comparison_value":"8"},{"turn":5,"retention":484,"retention_rate":0.8864468864468864,"action":"分析+看板_点击量","comparison_value":"8"},{"turn":6,"retention":419,"retention_rate":0.8802521008403361,"action":"分析+看板_点击量","comparison_value":"8"},{"turn":7,"retention":344,"retention_rate":0.884318766066838,"action":"分析+看板_点击量","comparison_value":"8"},{"turn":8,"retention":271,"retention_rate":0.8741935483870967,"action":"分析+看板_点击量","comparison_value":"8"},{"turn":9,"retention":196,"retention_rate":0.8634361233480177,"action":"分析+看板_点击量","comparison_value":"8"},{"turn":10,"retention":128,"retention_rate":0.847682119205298,"action":"分析+看板_点击量","comparison_value":"8"},{"turn":11,"retention":66,"retention_rate":0.8918918918918919,"action":"分析+看板_点击量","comparison_value":"8"},{"turn":0,"retention":40,"retention_rate":1,"action":"单图列表-新建事件分析_点击量","comparison_value":"9"},{"turn":1,"retention":36,"retention_rate":1,"action":"单图列表-新建事件分析_点击量","comparison_value":"9"},{"turn":2,"retention":33,"retention_rate":1,"action":"单图列表-新建事件分析_点击量","comparison_value":"9"},{"turn":3,"retention":26,"retention_rate":1,"action":"单图列表-新建事件分析_点击量","comparison_value":"9"},{"turn":4,"retention":17,"retention_rate":1,"action":"单图列表-新建事件分析_点击量","comparison_value":"9"},{"turn":5,"retention":8,"retention_rate":0.8888888888888888,"action":"单图列表-新建事件分析_点击量","comparison_value":"9"},{"turn":6,"retention":6,"retention_rate":0.8571428571428571,"action":"单图列表-新建事件分析_点击量","comparison_value":"9"},{"turn":7,"retention":0,"retention_rate":0,"action":"单图列表-新建事件分析_点击量","comparison_value":"9"},{"turn":8,"retention":0,"retention_rate":0,"action":"单图列表-新建事件分析_点击量","comparison_value":"9"},{"turn":9,"retention":0,"retention_rate":0,"action":"单图列表-新建事件分析_点击量","comparison_value":"9"},{"turn":10,"retention":0,"retention_rate":0,"action":"单图列表-新建事件分析_点击量","comparison_value":"9"},{"turn":11,"retention":0,"retention_rate":0,"action":"单图列表-新建事件分析_点击量","comparison_value":"9"}]');

const Retention = (props: any) => (
  <Chart chartParams={legendP} source={legendS} gridPanel={true} />
);
export default Retention;
