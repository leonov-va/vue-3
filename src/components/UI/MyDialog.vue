<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "my-dialog",
  mixins: [toggleMixin],
};
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog__content {
  margin: auto;
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;
}
</style>
