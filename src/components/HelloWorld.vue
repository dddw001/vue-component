<template>
  <div>
    {{msg}}
    <parent></parent>
  </div>
</template>

<script>
import Parent from './test/parent'
export default {
  name:'helloWorld',
  components: {
    Parent
  },
  data () {
   return {
    msg: 'hi'
   }
  }
}
</script>

<style>

</style>
