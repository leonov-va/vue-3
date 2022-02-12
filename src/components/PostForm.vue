<template>
  <form class="form" @submit.prevent>
    <h4>Создание поста:</h4>
    <my-input
      class="input"
      type="text"
      placeholder="Название"
      v-model="post.title"
    />
    <my-input
      class="input"
      type="text"
      placeholder="Описание"
      v-model="post.body"
    />
    <my-button
      style="align-self: flex-end; margin-top: 15px"
      @click="createPost"
      >Создать</my-button
    >
  </form>
</template>

<script>
export default {
  data: () => ({
    post: {
      title: "",
      body: "",
    },
  }),
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
</style>
