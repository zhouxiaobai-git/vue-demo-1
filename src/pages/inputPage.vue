<template>
  <form novalidate v-submit="doSubmit">
    <div class="row">
      <label>姓名</label>
      <ep-input v-model="personName"></ep-input>
    </div>
    <div class="row">
      <label>出生年月</label>
      <ep-calendar v-model="birthDate"></ep-calendar>
    </div>
    <div class="row">
      <label>国籍</label>
      <ep-select></ep-select>
    </div>
    <div class="row">
      <label>是否自贸区</label>
      <ep-radio></ep-radio>
    </div>
    <div class="btn-list">
      <input type="button" @click="doReset()" value="重置" class="btn btn-reset" />
      <input type="submit" value="提交" class="btn btn-submit" />
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      personName: "阿猫",
      birthDate: "19491001",
    };
  },
  methods: {
    // 表单提交方法
    doSubmit() {
      console.warn("表单提交方法触发了");
    },

    // 重置方法
    doReset() {
      console.warn("表单重置方法触发了");
    },
  },
};
</script>
<style lang="scss" scoped>
form {
  width: 295px;
  padding: 10px 0;
  div {
    &.row {
      & > label {
        width: 6em;
        display: inline-block;
        text-align: right;
      }
      line-height: 1.6em;
    }
    &.btn-list {
      text-align: center;
      margin-top: 14px;
      & > .btn {
        padding: 3px 10px;
        border-radius: 6px;
        color: white;
        &.btn-submit {
          background-color: rgb(25, 186, 235);
        }
        &.btn-reset {
          background-color: rgb(214, 210, 204);
        }
      }
    }
  }
}
</style>