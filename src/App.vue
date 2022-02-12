<template>
  <div>
    <form class="form" @submit.prevent>
      <h4>Создание поста:</h4>
      <input
        class="input"
        type="text"
        placeholder="Название"
        v-bind:value="title"
        @input="title = $event.target.value"
      />
      <input
        class="input"
        type="text"
        placeholder="Описание"
        v-bind:value="body"
        @input="body = $event.target.value"
      />
      <button class="btn" @click="createPost">Создать</button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    posts: [
      {
        id: 1,
        title: "1111111",
        body: "1111111",
      },
      {
        id: 2,
        title: "222222",
        body: "222222",
      },
    ],
    title: "",
    body: "",
  }),
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.posts.push(newPost);
      this.title = this.body = "";
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  padding: 28px;
}
.form {
  display: flex;
  flex-direction: column;
}
.post {
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
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
