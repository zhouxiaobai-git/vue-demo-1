<template>
  <div class="input-root-view">
    <input ref="myinput" type="text" :value="value" @input="doit()" />
  </div>
</template>
<script>
export default {
  props: ["value"],
  methods: {
    doit() {
      this.$emit("input", this.$refs.myinput.value);
    },
  },
};
</script>
<style lang="scss">
.input-root-view {
  display: inline-block;
  &.ep-invalid > input {
    border: 1px solid red;
    outline: none;
  }
}
</style>