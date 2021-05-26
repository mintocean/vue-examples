<template>
  <div class="card-wrapper">
    <Card v-for="(item,idx) in items" :key="idx" :item="item"/>
  </div>
</template>

<script>
import Card from '@/components/card/Card.vue'

export default {
  name: 'CardWrapper',
  components: {
    Card
  },
  mounted(){
      console.log( 'mounted event' );
  },
  data(){
    return {
        items : [
            {
                image : 'https://source.unsplash.com/random?q=1' ,
                title : 'title' ,
                contents : 'contents'
            },
            {
                image : 'https://source.unsplash.com/random?q=2' ,
                title : 'title' ,
                contents : 'contents'
            },
            {
                image : 'https://source.unsplash.com/random?q=3' ,
                title : 'title' ,
                contents : 'contents'
            },
            {
                image : 'https://source.unsplash.com/random?q=4' ,
                title : 'title' ,
                contents : 'contents'
            },
            {
                image : 'https://source.unsplash.com/random?q=5' ,
                title : 'title' ,
                contents : 'contents'
            },
            {
                image : 'https://source.unsplash.com/random?q=6' ,
                title : 'title' ,
                contents : 'contents'
            },
            {
                image : 'https://source.unsplash.com/random?q=7' ,
                title : 'title' ,
                contents : 'contents'
            },
            {
                image : 'https://source.unsplash.com/random?q=8' ,
                title : 'title' ,
                contents : 'contents'
            },
            {
                image : 'https://source.unsplash.com/random?q=9' ,
                title : 'title' ,
                contents : 'contents'
            },
            {
                image : 'https://source.unsplash.com/random?q=10' ,
                title : 'title' ,
                contents : 'contents'
            }
        ]
    }
  }
}
</script>

<style scoped>
.card-wrapper{
    max-width:500px;
}
</style>
