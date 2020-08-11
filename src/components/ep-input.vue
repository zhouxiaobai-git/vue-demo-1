<template>
  <div>
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