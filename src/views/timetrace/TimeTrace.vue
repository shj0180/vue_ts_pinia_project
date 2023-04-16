<template>
    <el-row align="middle">
        <span class="text-large font-600 mr-3">
            <h1>
                链路追踪分析
            </h1>
        </span>
    </el-row>
    
    <el-row :gutter="30" justify="start" align="middle">
        <el-col :span="300" >
            <!-- <div class="grid-content ep-bg-purple-dark" /> -->
            <el-radio-group v-model="radio1" class="ml-4" >
                <el-radio label="1" size="large">追踪最新PID</el-radio>
                <el-radio label="2" size="large">自定义PID</el-radio>
            </el-radio-group>
        </el-col>

        <el-col :span="5" >
            <el-input v-model="input_pid" placeholder="Please input pid"  :disabled="radio1==='1'" />
        </el-col>
    </el-row>

    <el-row :gutter="30" justify="start" align="middle">
        <el-col :span="30" >
            <el-input v-model="input_ip" placeholder="入口应用IP" /> 
        </el-col>
        <el-col :span="5">
            <el-button size="large" @click="app_track">开始</el-button>
        </el-col>
    </el-row>

    <el-divider />
    <el-row >
        <el-col >
            <tr v-for="site in state.track_info">
                {{ site }}
            </tr>
           
        </el-col>
    </el-row>
    
</template>

<script lang="ts" setup>
import request from '@/utils/request';


interface Tree {
  id: string
  label: string
  children?: Tree[]
}

const getKey = (prefix: string, id: number) => {
  return `${prefix}-${id}`
}

const createData = (
  maxDeep: number,
  maxChildren: number,
  minNodesNumber: number,
  deep = 1,
  key = 'app'
): Tree[] => {
  let id = 0
  return Array.from({ length: minNodesNumber })
    .fill(deep)
    .map(() => {
      const childrenNumber = 
        // deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
        deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
      const nodeKey = getKey(key, ++id)
      return {
        id: nodeKey,
        label: nodeKey,
        children: childrenNumber
          ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
          : undefined,
      }
    })
}

const props = {
  value: 'id',
  label: 'label',
  children: 'children',
}
const data = createData(4, 10, 2)


interface Track {
    track_info: []
}

const state = reactive<{track_info?: Track | null}>({
    track_info : null,
})

// request({
//     method: 'get',
//     url: 'polls/time_trace'
// }).then(
//     res => {
//         state.track_info = toRaw(res.data) 
//         console.log(state.track_info);
//         // console.log(typeof(state.app_info));
//     }
// )


// 按钮
const radio1 = ref('1')

// const radio2 = ref('1')
const input_pid = ref('')
const input_ip = ref('')

//  post 方法
function app_track() {
    request({
    method: 'post',
    url: 'polls/time_trace',
    data: {'pid': input_pid, 'ip': input_ip}
}).then(
    res => {
        state.track_info = toRaw(res.data) 
        console.log(state.track_info);
        // console.log(typeof(state.app_info));
    }
)
}





</script>

<style scoped>
.h1{
    padding:30px;
}

.el-row {
    margin-bottom: 20px;
  }
.el-row:last-child {
margin-bottom: 0;
}
.el-col {
border-radius: 4px;
}

.grid-content {
border-radius: 4px;
min-height: 20px;
}

.radius {
    height: 40px;
    width: 70%;
    border: 1px solid var(--el-border-color);
    border-radius: 0;
    margin-top: 20px;
  }
</style>