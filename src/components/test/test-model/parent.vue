<template>
  <div>
    <p>test v-model</p>
    <p>selected: {{selected}}</p>
    <child :selected="selected" :selectData="selectData" @change="handleChange"></child>
  </div>
</template>

<script>
import Child from './child'
export default {
  components: {
    Child
  },
  data () {
    return {
      selected: '',
      selectData: [
        {value: 1, text: 1},
        {value: 2, text: 2},
        {value: 3, text: 3}
      ]
    }
  },
  methods: {
    handleChange (val) {
      this.selected = val
    }
  }
}
</script>

<style>

</style>
