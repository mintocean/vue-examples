<template>
  <div class="card text-center">
    <img class="card-img-top" :src="item.image" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">{{item.contents}}</p>
        <a href="#" class="btn btn-primary" @click="viewDetail">View Detail</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: Object
  },
  methods : {
      viewDetail(){
          alert('View Detail!!!');
      }
  }
}
</script>

<style scoped>
.card{
    margin:10px;
}
</style>
