import * as React from "react";
import { DrawParamsProps, Source} from "../src/ChartProps";
import Chart from "../src/Chart";
import { retentionSourceSelector } from "../src/utils";

const c = JSON.parse('{"adjust":"stack","timeRange":"day:31,1","granularities":[{"id":"tm","interval":"604800000"}],"attrs":{"selection":[]},"chartType":"retention","columns":[{"id":"tm","name":"起始时间","isDim":true,"isRate":false},{"id":"turn","name":"留存周期","isDim":true,"isRate":false,"values":["次周留存率","2周后留存率","3周后留存率","4周后留存率"]},{"id":"retention_rate","name":"留存率","isDim":false,"isRate":true},{"id":"retention","name":"留存人数","isDim":false,"isRate":false}]}');
const s = JSON.parse('[{"tm":1504108800000,"turn":"1","retention":3054,"retention_rate":0.2331653687585891},{"tm":1504454400000,"turn":"1","retention":4288,"retention_rate":0.16967394745172523},{"tm":1505059200000,"turn":"1","retention":4294,"retention_rate":0.17499388703235796},{"tm":1505664000000,"turn":"1","retention":4304,"retention_rate":0.16711318190642593},{"tm":1504108800000,"turn":"2","retention":2409,"retention_rate":0.18392120934493816},{"tm":1504454400000,"turn":"2","retention":3441,"retention_rate":0.13615859449192783},{"tm":1505059200000,"turn":"2","retention":3261,"retention_rate":0.13289591653761512},{"tm":1504108800000,"turn":"3","retention":2184,"retention_rate":0.16674301420064133},{"tm":1504454400000,"turn":"3","retention":2894,"retention_rate":0.11451408673630896},{"tm":1504108800000,"turn":"4","retention":1849,"retention_rate":0.1411665903191327}]');

const c1 = JSON.parse('{"adjust":"stack","timeRange":"day:15,1","granularities":[{"id":"tm","interval":"86400000"}],"attrs":{"selection":[]},"chartType":"retention","columns":[{"id":"turn","name":"留存","isDim":true,"isRate":false,"values":["当天","次天","2天后","3天后","4天后","5天后","6天后","7天后","8天后","9天后","10天后","11天后","12天后","13天后"]},{"id":"retention_rate","name":"留存率","isDim":false,"isRate":true},{"id":"retention","name":"留存人数","isDim":false,"isRate":false}]}');
const s1 = JSON.parse('[{"retention":43011,"retention_rate":1,"turn":0},{"retention":7830,"retention_rate":0.1898642095053346,"turn":1},{"retention":5374,"retention_rate":0.13501494862196317,"turn":2},{"retention":3816,"retention_rate":0.09906542056074766,"turn":3},{"retention":2528,"retention_rate":0.06752677832091247,"turn":4},{"retention":1522,"retention_rate":0.04182122935729399,"turn":5},{"retention":697,"retention_rate":0.019766881256912738,"turn":6},{"retention":604,"retention_rate":0.017737577822154352,"turn":7},{"retention":570,"retention_rate":0.017388651616839536,"turn":8},{"retention":499,"retention_rate":0.01738009822019435,"turn":9},{"retention":419,"retention_rate":0.018040127443382417,"turn":10},{"retention":340,"retention_rate":0.01958751008180666,"turn":11},{"retention":240,"retention_rate":0.020799029378628996,"turn":12},{"retention":153,"retention_rate":0.02594979647218453,"turn":13}]');

const Retention = (props: any) => (
  <Chart chartParams={c1} source={s1} gridPanel={true} />
);
export default Retention;
