<template>
  <div id="xxx"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts';
import { useRouter } from 'vue-router';

import server from '../server'

const router = useRouter();
onMounted(() => {
type EChartsOption = echarts.EChartsOption

let chartDom = document.getElementById('xxx')!;
let myChart = echarts.init(chartDom);
myChart.on('click', (params) => {
  let class_id = params.data.id;
  let class_name = params.data.name;
  router.push({path: '/articles', query: {id: class_id, name: class_name}});
});
var option: EChartsOption;

myChart.showLoading();

server.get('/api/classes').then((res) => {
myChart.hideLoading();

myChart.setOption(
  (option = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [
      {
        type: 'tree',

        name: 'tree1',

        data: [res.data],

        top: '5%',
        left: '7%',
        bottom: '5%',
        right: '15%',

        symbolSize: 9,
        initialTreeDepth: -1,
        layout: 'orthogonal', 
        //layout: 'radial',
        roam: true,

        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right'
        },
        itemStyle: {
          borderColor: '#ff0000',
          color: '#f00'
        },
        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        },

        emphasis: {
          focus: 'descendant'
        },

        expandAndCollapse: false,

        animationDuration: 550,
        animationDurationUpdate: 750
          }
        ]
      })
    );
    option && myChart.setOption(option);
  });
});
</script>

<style scoped>
#xxx {
  width: 100%;
  height: 100%;
}
</style>