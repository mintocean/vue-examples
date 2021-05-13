<template>
  <div>
    TwitterList Page
    <br/>
    <ul>
      <li><router-link to="/detail/1">This is card</router-link></li>
      <li><router-link to="/detail/2">This is card</router-link></li>
      <li><router-link to="/detail/3">This is card</router-link></li>
      <li><router-link to="/detail/4">This is card</router-link></li>
      <li><router-link to="/detail/5">This is card</router-link></li>
      <li><router-link to="/detail/6">This is card</router-link></li>
      <li><router-link to="/detail/7">This is card</router-link></li>
      <li><router-link to="/detail/8">This is card</router-link></li>
      <li><router-link to="/detail/9">This is card</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TwitterList',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul,li{list-style:none;}
</style>
