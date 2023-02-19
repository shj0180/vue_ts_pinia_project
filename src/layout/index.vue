
<template>
    <div class="common-layout">
        <el-container>
            <AppAside />
            <el-container class="header-and-main">
                <AppHeader />
               
                <el-main>
                   <RouterView />

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script setup lang="ts">
import AppAside from './Sidebar/AppAside.vue';
import AppHeader from './AppHeader.vue';

</script>


<style lang="scss" scoped>
    .header-and-main {
        flex-direction: column;

    }
    
    .el-main{
        background-color:  #ecf5ff;
    }

</style>

