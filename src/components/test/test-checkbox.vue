<template>
  <div>
    <i-checkbox 
      v-model="check"
      :trueValue="3"
      :falseValue="2">
      aaa
    </i-checkbox>
    <button @click="++check">增加</button>
    <hr/>
    <i-checkbox 
      v-model="check2"
      >
      aaa
    </i-checkbox>
    <button @click="check2=!check2">改变</button>
  </div>
</template>

<script>
import iCheckbox from '../checkbox/checkbox'
export default {
  components: {
    iCheckbox
  },
  data () {
    return {
      check: 6,
      check2: false
    }
  }
}
</script>

<style>

</style>
