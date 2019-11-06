<template>
  <div>
    <div class="sidebar">
      <ul>
        <li class="menu_li" v-for="(item, index) in menuList" :key="index">
          <router-link :to="item.path">
            <i :class="item.icon"></i>{{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      menuList: [
        {title: '首页', path: '/home', icon: 'el-icon-s-home'},
        {title: '文章', path: '/articleList', icon: 'el-icon-document'}
      ]
    }
  }
}
</script>

<style>
  .menu_li {
    list-style: none;
  }
  .active_menu_li {
    color: coral;
    background: #fff;
  }
  .sidebar {
    background: cadetblue;
    display: inline-block;
  }
  .content {
    background: burlywood;
    display: inline-block;
  }
</style>
