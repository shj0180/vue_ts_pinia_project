<template>
    <el-aside>
        <el-scrollbar>
            <a href="/" class="logo">
                <img src="@/assets/logo.svg" alt="">
                <h1 v-show="!isCollapse">运维管理平台</h1>
            </a> 
            <el-menu router unique-opened :collapse="isCollapse" >

                <el-menu-item :index="item.path" v-for="item in dashboard_list" :key="item.path">
                    <el-icon><Monitor /></el-icon> <span>{{item.meta.title}}</span>
                </el-menu-item>

                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><Watermelon /></el-icon>  <span>应用操作</span>
                    </template>
                    <el-menu-item :index="item.path" v-for="item in app_list" :key="item.path">
                        <el-icon><Watermelon /></el-icon> <span>{{item.meta.title}}</span>
                    </el-menu-item>

                </el-sub-menu>

                <el-sub-menu index="2" >
                    <template #title>
                        <el-icon><Star /></el-icon> <span>数据库</span>
                    </template>
                    <el-menu-item :index="item.path" v-for="item in db_list" :key="item.path">
                        <el-icon><Bowl /></el-icon> <span>{{item.meta.title}}</span>
                    </el-menu-item>

                </el-sub-menu>

                <el-sub-menu index="3" >
                    <template #title>
                        <el-icon><Box /></el-icon> <span>工具类</span>
                    </template>
                    <el-menu-item :index="item.path" v-for="item in time_list" :key="item.path">
                        <el-icon><AlarmClock /></el-icon> <span>{{item.meta.title}}</span>
                    </el-menu-item>

                </el-sub-menu>
                

                <el-menu-item :index="item.path" v-for="item in user_list" :key="item.path">
                    <el-icon><User /></el-icon> <span>{{item.meta.title}}</span>
                </el-menu-item>

            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>

<script setup lang="ts">
    import {isCollapse} from '../index'

    import { useRouter } from 'vue-router';

    const router = useRouter()
    // console.log(router.getRoutes());

    const dashboard_list = router.getRoutes().filter(a => a.meta.isshow_dashboard)
    // console.log(dashboard_list);

    const app_list = router.getRoutes().filter(a => a.meta.isshow_appication)
    // console.log(app_list);
    
    const db_list = router.getRoutes().filter(a => a.meta.isshow_db)
    // console.log(db_list);

    const user_list = router.getRoutes().filter(a => a.meta.isshow_user)
    // console.log(user_list);

    const time_list = router.getRoutes().filter(a => a.meta.isshow_time)
    // console.log(time_list);


</script>

<style lang="scss" scoped>
    .el-aside{
        background-color:  #d9ecff;
        height: 100vh;
        width:auto;
    }
    .el-menu{
       
        background-color:  #d9ecff;
        width: 200px;
        border-right: none;
        &.el-menu--collapse {
            width: 60px;
            & h1 {
                display: none;
            }
        }
    }

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: black;
        height: 60px;
        img {
            width: 32px;
            height: 32px;
        }
    }

   

</style>