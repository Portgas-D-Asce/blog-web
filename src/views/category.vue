<template>
  <div id="categories" class="categories"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import * as echarts from 'echarts';

import { get } from '../api'

const router = useRouter();
const route = useRoute();

type EChartsOption = echarts.EChartsOption
let option : EChartsOption = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove',
    alwaysShowContent: true
  },
  series: [{
    type: 'tree',
    name: 'category-tree',
    data:[],
    top: '5%',
    left: '7%',
    bottom: '5%',
    right: '15%',
    symbolSize: 9,
    label: {
      position: 'left',
      verticalAlign: 'middle',
      align: 'right'
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
    layout: 'orthogonal', 
    roam: true,
    initialTreeDepth: -1,
    //layout: 'radial',
    itemStyle: {
      borderColor: '#ff0000',
      color: '#f00'
    },
    animationDuration: 550,
    animationDurationUpdate: 750
  }]
};
 
onMounted(() => {
  let chartDom = document.getElementById('categories')!;
  let myChart = echarts.init(chartDom);
  myChart.on('click', (params) => {
    router.push({path: '/category/' + params.data["id"]});
  });

  myChart.showLoading();
  get(route.path + "/0/tree").then((res) => {
    myChart.hideLoading();
    option.series[0].data = [res.data];
    myChart.setOption(option);
  });
});
</script>

<style scoped>
.categories {
  width: 100vw;
  height: 100vh;
}
</style>