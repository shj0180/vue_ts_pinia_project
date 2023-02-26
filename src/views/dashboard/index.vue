<template>
    <!-- {{ state.app_info?.total_apps_num }} -->

    <el-row>
        <!-- <el-col :span="6">
          <el-statistic title="Daily Active Applications" :value="268" />
        </el-col> -->

        <el-col :span="6">
            <el-statistic :value="state.app_info?.up_apps_num">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  Ratio of Daily Active Applications
                 
                </div>
              </template>
              <template #suffix>/ {{ state.app_info?.total_apps_num }}</template>
            </el-statistic>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
    import request from '@/utils/request';
    
    interface appInfo {
        total_apps_num: number
        up_apps_num: number
    }

    const state = reactive<{app_info?: appInfo | null}>({
        app_info : null,

    })

    request({
        method: 'get',
        url: 'polls/activeapp'
    }).then(
        res => {
            state.app_info = toRaw(res.data) 
            console.log(state.app_info);
            // console.log(typeof(state.app_info));
        }
    )

    // let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';
    // // let userStr = "{'total_apps_num': 300, 'up_apps_num': 280}"
    // let userObj = JSON.parse(userStr);
    // console.log(userObj['name']);

</script>

<style lang="scss" scoped>
.el-col {
    text-align: center;
  }

</style>