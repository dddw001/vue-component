<template>
  <div>
    parent
    <br/>
    <child></child>
  </div>
</template>

<script>
import Child from './child'
export default {
  name:'parent',
  components: {
    Child
  },
  data(){
    return {
      name: 'cdx'
    }
  },
  methods: {
    sayHello () {
      console.log('hello')
    }
  }
}
</script>

<style>

</style>
