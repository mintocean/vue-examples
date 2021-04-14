<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ name }}</h1>
    <ul>
      <li v-for="(item , idx) in items" :key="idx">
        {{ item.text }}
        <button @click="removeItem(idx)" class="btn btn-primary">Remove Item</button>
      </li>
    </ul>
    <button @click="changeItem" class="btn btn-danger">Change Item</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      name : 'mike lim' ,
      items : [
        {
          value : 1,
          text : 'item 1'
        },
        {
          value : 2,
          text : 'item 2'
        },
        {
          value : 3,
          text : 'item 3'
        }
      ]
    }
  },
  methods : {
    changeName(){
      this.name = 'unknown user';
    },
    changeItem(){
      let n = [
        {
          value : 10 ,
          text : 'new item'
        }
      ];

      this.items = n;
    },
    removeItem(idx){
      this.items.splice(idx , 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {  
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
