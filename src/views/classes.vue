<template>
  <div id="xxx"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
type EChartsOption = echarts.EChartsOption

let chartDom = document.getElementById('xxx')!;
let myChart = echarts.init(chartDom);
myChart.on('click', (params) => {
  console.log(params.data);
  console.log(params.name);
  console.log(params.value)
  router.push({path: '/articles', query: params.data});
});
var option: EChartsOption;

myChart.showLoading();

const data = {
  id: 0,
  name: 'Home',
  description: 'home',
  children: [
    {
      id: 1,
      name: 'Data Structure & algorithm',
      description: 'interesting'
    },
    {
      id: 2,
      name: 'Linux',
      description: 'important',
      children: [
        { id: 21, name: 'DirtySprite', description: '1111' },
        { id: 22, name: 'LineSprite', description: '2222' },
        { id: 23, name: 'RectSprite', description: '3333' }
      ]
    },
    {
      id: 3,
      name: 'Language',
      description: 'base',
      children: [
        { id: 31, name: 'CC++', description: '4444' },
        { id: 32, name: 'Java', description: '5555' },
      ]
    },
    {
      id: 4,
      name: 'Network',
      description: 'very interesting',
      children: [{ name: 'switch', description: '6666' }]
    },
    {
      id: 5,
      name: 'Math',
      description: 'elegent'
    },
    {
      id: 6,
      name: 'Computer Vision',
      description: 'deriction'
    }
  ]
};

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

        data: [data],

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
</script>

<style scoped>
#xxx {
  width: 100%;
  height: 100%;
}
</style>