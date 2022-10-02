<template>
  <div id="categories"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import * as echarts from 'echarts';

import { get_category_tree } from '../api'

const router = useRouter();

onMounted(() => {
type EChartsOption = echarts.EChartsOption

let chartDom = document.getElementById('categories')!;
let myChart = echarts.init(chartDom);
myChart.on('click', (params) => {
  router.push({path: '/articles', query: {cid: params.data.id}});
});
var option: EChartsOption;

myChart.showLoading();

get_category_tree({id: 0}).then((res) => {
myChart.hideLoading();

console.log(res.data)
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
#categories {
  width: 100%;
  height: 100%;
}
</style>