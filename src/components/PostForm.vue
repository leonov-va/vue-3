<template>
  <form class="form" @submit.prevent>
    <h4>Создание поста:</h4>
    <input
      class="input"
      type="text"
      placeholder="Название"
      v-model="post.title"
    />
    <input
      class="input"
      type="text"
      placeholder="Описание"
      v-model="post.body"
    />
    <button class="btn" @click="createPost">Создать</button>
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

.input {
  width: 100%;
  margin-top: 15px;
  padding: 10px 15px;
  border: 1px solid teal;
}
.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  border: 1px solid teal;
  background: none;
  color: teal;
}
</style>
