<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery" placeholder="Поиск..." />
    <div class="app__btns">
      <my-button @click="showDialog">Создать пользователя</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
    <post-pagination v-model:page="page" :pages="totalPages" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import PostPagination from "@/components/PostPagination";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
    PostPagination,
  },
  data: () => ({
    posts: [],
    dialogVisible: false,
    isPostsLoading: false,
    selectedSort: "",
    sortOptions: [
      { value: "title", name: "По названию" },
      { value: "body", name: "По содержимому" },
    ],
    searchQuery: "",
    page: 1,
    limit: 10,
    totalPages: 0,
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
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    page() {
      this.fetchPosts();
    },
    // selectedSort(newValue) {
    //   this.posts.sort((post1, post2) =>
    //     post1[newValue]?.localeCompare(post2[newValue])
    //   );
    // },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 28px;
}
.app__btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
}
</style>
