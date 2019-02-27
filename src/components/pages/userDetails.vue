<template>

</template>

<script>
  export default {
    data () {
      return {
      }
    },
    created() {
      let _this=this;
      console.log(decodeURI(_this.$route.query.id))
    },
  }
</script>

<style lang='scss' scoped=''>

</style>