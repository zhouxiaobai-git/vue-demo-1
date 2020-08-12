<template>
  <ul class="radio-root-view">
    <li @click="doIt(true)" class="yes" :class="{selected:value}">是</li>
    <li @click="doIt(false)" class="no" :class="{selected:!value}">否</li>
  </ul>
</template>
<script>
export default {
  props: ["value"],
  methods: {
    doIt(flag) {
      this.$emit("input", flag);
    },
  },
};
</script>
<style lang="scss" scoped>
.radio-root-view {
  display: inline-block;
  & > li {
    display: inline-block;
    line-height: 1em;
    cursor: pointer;
    border-radius: 50%;
    &.yes {
      background-color: rgb(29, 183, 230);
    }
    &.no {
      background-color: rgb(236, 245, 198);
    }
    &.selected {
      border: 3px solid red;
    }
  }
}
</style>