<template>
  <label>
    <span>
      <input
        v-if="group"
        type="checkbox"
        :disabled="disabled"
        :value="label"
        v-model="model"
        @change="change">
      <input
        v-else
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
import * as findComponents from '../../utils/findComponents.js'
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
    },
    label: {
      type: [String, Number, Boolean]
    }
  },
  data () {
    return {
      currentValue: this.value === this.trueValue,
      model: [],
      group: false,
      parent: null
    }
  },
  watch: {
    value (val) {
      if ([this.trueValue, this.falseValue].includes(val)) {
        this.updateModel()
      } else {
        console.error(`value should be ${this.trueValue} or ${this.falseValue}`)
      }
    }
  },
  mounted () {
    this.parent = findComponents.findComponentUpward(this, 'iCheckboxGroup')
    if (this.parent) {
      this.group = true
    }
    if (this.group) {
      this.parent.updateModel(true)
    } else {
      this.updateModel()
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
      // this.$emit('input', value) // 改变父组件的值

      if (this.group) {
        this.parent.change(this.model)
      } else {
        // this.$emit('on-change', value)
        this.dispatch('iFormItem', 'on-form-change', value)
      }
    },
    updateModel () {
      this.currentValue = this.value
    }
  }
}
</script>

<style>

</style>
