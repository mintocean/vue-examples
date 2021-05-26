<template>
  <div>
    TwitterList Page
    <br/>
    <ul>
      <li v-for="(item,idx) in items" :key="idx"><router-link to="/user/">This is card</router-link></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TwitterList',
  props: {
    msg: String
  },
  data(){
    return {
      items : []
    }
  },
  mounted(){
    // ajax with axios
    axios.get('https://dummyapi.io/data/api/user?limit=10' , {
      'headers' : {
        "app-id" : '609d61a3cfa64e21a68b8e5c'
      }
    })
    .then((res) => {
      this.items = res.data.data;
      console.log( this.items );
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul,li{list-style:none;}
</style>
