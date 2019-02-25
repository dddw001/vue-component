<template>
  <select :value="selected" @change="emitChange($event.target.value)">
    <template v-for="(item, index) in selectData">
      <option :value="item.value" :key="index">{{item.text}}</option>
    </template>
  </select>
</template>

<script>
export default {
  props: {
    selectData: {
      type: Array
    },
    selected: {
      type: [String, Number]
    }
  },
  methods: {
    emitChange (value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style>

</style>
