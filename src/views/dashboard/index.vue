<template>
    <!-- {{ state.app_info?.total_apps_num }} -->

    <el-row :gutter="20" class="my-row">
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
        <!-- <el-butdton type="primary" plain>Primary</el-butdton> -->
        <el-col :span="6">
          <el-button type="primary" plain>Primary</el-button>
        </el-col>
    </el-row>
    
    <el-row class="my-row"> 
      <h2>应用</h2>
    </el-row>

    <el-row :gutter="20" class="my-row">
      <el-col :span="6">
        <el-button type="primary" plain>Primary</el-button>
      </el-col>
      <!-- <template>
        <el-button type="primary" plain>Primary</el-button>
      </template> -->
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

  .my-row {
    margin-bottom: 20px; /* 设置行之间的间距为 20 像素 */
  }

</style>