<template>
  <p v-if="checked">
    <input
      :id="inputId"
      type="checkbox"
      :name="inputName"
      :value="value"
      checked
    />
    <label class="text-sm" :for="labelFor">{{ labelText }}</label>
  </p>
  <p v-else-if="disabled">
    <input
      :id="inputId"
      type="checkbox"
      :name="inputName"
      :value="value"
      disabled
    />
    <label class="text-sm" :for="labelFor">{{ labelText }}</label>
  </p>
  <p v-else>
    <input :id="inputId" type="checkbox" :name="inputName" :value="value" />
    <label class="text-sm" :for="labelFor">{{ labelText }}</label>
  </p>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    inputId: { type: String, required: true },
    inputName: { type: String, required: true },
    labelFor: { type: String, required: true },
    labelText: { type: String, required: true },
    checked: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    value: { type: String, required: true },
  },
}
</script>

<style lang="postcss" scoped>
* {
  font-family: 'IBM Sans';
  color: #1a1f21;
}

[type='checkbox']:checked,
[type='checkbox']:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type='checkbox']:checked + label,
[type='checkbox']:not(:checked) + label {
  position: relative;
  padding-left: 24px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #666;
}
[type='checkbox']:checked + label:before,
[type='checkbox']:not(:checked) + label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  border-radius: 20%;
  background: #fff;
}
[type='checkbox']:checked + label:after,
[type='checkbox']:not(:checked) + label:after {
  content: '';
  width: 12px;
  height: 12px;
  background: #0b97ac;
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 20%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[type='checkbox']:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type='checkbox']:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>
