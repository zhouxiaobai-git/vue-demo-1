<template>
  <div class="select-root-view">
    <input readonly type="text" ref="myinput" @click="isOpen=!isOpen" />
    <ul v-show="isOpen">
      <li @click="isOpen=false;doSelect(key)" v-for="(value,key) in list" :key="key">{{value}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["value", "list"],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    doSelect(key) {
      this.$emit("input", key);
      this.$refs.myinput.value = key + " - " + this.list[key];
    },
  },
  mounted() {
    this.$refs.myinput.value = this.value + " - " + this.list[this.value];
  },
};
</script>
<style lang="scss" scoped>
.select-root-view {
  display: inline-block;
  position: relative;
  & > input {
    cursor: pointer;
    background-image: url("../assets/select.png");
    background-size: auto 70%;
    background-repeat: no-repeat;
    background-position: right center;
  }
  & > ul {
    position: absolute;
    width: 100%;
    background: #e9eff1;
    & > li {
      padding: 10px;
      cursor: pointer;
      &:hover {
        background-color: rgb(165, 165, 207);
      }
    }
  }
}
</style>