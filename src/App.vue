<template>
  <div>
    <h1>Страница с постами</h1>
    <my-button @click="showDialog" style="margin: 15px 0"
      >Создать пользователя</my-button
    >
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {
    PostForm,
    PostList,
  },
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
    dialogVisible: false,
  }),
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
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
</style>
