<template>

</template>

<script>
import * as findComponents from '../../utils/findComponents.js'
export default {
  name:'child',
  data(){
    return {

    }
  },
  mounted () {
    const comP = findComponents.findComponentUpward(this, 'parent')
    if (comP) {
      console.log(comP.name)
      comP.sayHello()
    }
  }
}
</script>

<style>

</style>
