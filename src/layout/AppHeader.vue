
<template>
    <el-header>
        <!-- 图标 -->
        <el-icon @click="isCollapse =!isCollapse ">
            <Expand v-show="isCollapse"/>
            <Fold v-show="!isCollapse"/>
        </el-icon>

        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item
              ><a href="/">promotion management</a></el-breadcrumb-item
            >
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 下拉菜单 -->
        <el-dropdown>
            <span class="el-dropdown-link">
              <!-- Dropdown List -->
               <!-- 头像 -->
              <el-avatar :size="50" :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" />
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>user</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
        </el-dropdown>

    </el-header>
</template>

<script setup lang="ts">
   import {isCollapse} from '../layout/index'
</script>

<style lang="scss" scoped>
    .el-header{
        display: flex; 
        align-items: center;
        background-color:  #c6e2ff;
        .el-icon {
            margin-right: 30px;
          
        }
    }

    .el-dropdown {
        margin-left: auto;
    }

</style>

