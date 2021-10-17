<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue';
import {mapActions} from 'vuex';
// import {reqFoodCategorys} from './api';
export default {
  components:{
    FooterGuide
  },
  computed:{
    ...mapActions(['getAddress','getUserInfo'])
  },
  // async mounted() {
  //   //测试获取后台接口数据
  //   const result = await reqFoodCategorys()
  //   console.log(result);
  // },
  mounted() {
    this.$store.dispatch('getUserInfo')
    // this.$store.dispatch('getAddress')
  },
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>