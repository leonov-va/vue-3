<template>
  <div>
    <post-form @create="createPost" />
    <post-list :posts="posts" />
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
  }),
  methods: {
    createPost(post) {
      this.posts.push(post);
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
