<template>
    <el-row>
        <el-col :span="6">
          <el-statistic title="Daily active users" :value="268500" />
        </el-col>

        <el-col :span="6">
            <el-statistic :value="138">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  Ratio of men to women
                 
                </div>
              </template>
              <template #suffix>/100</template>
            </el-statistic>
        </el-col>

    </el-row>


</template>

<script setup lang="ts">
    import request from '@/utils/request';

    request({
        method: 'post',
        url: 'posts'
    }).then(
        (res) => {
            console.log(res);
            
        }
    )





</script>

<style lang="scss" scoped>
.el-col {
    text-align: center;
  }

</style>