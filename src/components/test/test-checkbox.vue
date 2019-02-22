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
    <hr>
    <i-checkbox-group v-model="group">
      <i-checkbox :label="check3">第一个</i-checkbox>
      <i-checkbox :label="check4">第二个</i-checkbox>
    </i-checkbox-group>
  </div>
</template>

<script>
import iCheckbox from '../checkbox/checkbox'
import iCheckboxGroup from '../checkbox/checkbox-group'
export default {
  components: {
    iCheckbox,
    iCheckboxGroup
  },
  data () {
    return {
      check: 6,
      check2: false,
      check3: 'a',
      check4: 'b',
      group: []
    }
  },
  mounted () {
    this.group = ['a']
  }
}
</script>

<style>

</style>
