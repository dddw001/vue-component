<template>
  <label>
    <span>
      <input 
        type="checkbox"
        :disabled="disabled"
        :checked="currentValue"
        @change="change">
    </span>
    <slot></slot>
  </label>
</template>

<script>
import Emitter from '../../mixins/emitter.js'
export default {
  name: 'iCheckbox',
  mixins: [Emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value === this.trueValue
    }
  },
  watch: {
    value (val) {
      if ([this.trueValue, this.falseValue].includes(val)) {
        this.currentValue = this.value
      } else {
        console.error(`value should be ${this.trueValue} or ${this.falseValue}`)
      }
    }
  },
  methods: {
    change (event) {
      if (this.disabled) {
        return false
      }
      const checked = event.target.checked
      this.currentValue = checked

      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value) // 改变父组件的值
      this.$emit('on-change', value)

      this.dispatch('iFormItem', 'on-form-change', value)
    }
  }
}
</script>

<style>

</style>
