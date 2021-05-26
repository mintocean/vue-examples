<template>
  <div>
    <div class="btn-back">
      <router-link to="/" tag="button">Back</router-link>
    </div>
    Twitter Detail Page with {{id}}
  </div>
</template>

<script>

export default {
  name: 'TwitterDetail',
  props: {
    id: String
  },
  data(){
    return {
      
    }
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
