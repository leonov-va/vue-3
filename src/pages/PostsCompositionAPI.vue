<template>
  <div class="post-page">
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery" placeholder="Поиск..." />
    <div class="post-page__btns">
      <my-button>Создать пользователя</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form />
    </my-dialog>
    <post-list :posts="sortedAndSearchedPosts" v-if="!isPostsLoading" />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import PostPagination from "@/components/PostPagination";
import { usePosts } from "@/hooks/usePosts";
import { useSortedPosts } from "@/hooks/useSortedPosts";
import { useSortedAndSearchedPosts } from "@/hooks/useSortedAndSearchedPosts";

export default {
  components: {
    PostForm,
    PostList,
    PostPagination,
  },
  data: () => ({
    dialogVisible: false,
    sortOptions: [
      { value: "title", name: "По названию" },
      { value: "body", name: "По содержимому" },
    ],
  }),
  setup(props) {
    const { posts, totalPages, isPostsLoading } = usePosts(10);
    const { selectedSort, sortedPosts } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },
};
</script>

<style scoped>
.post-page {
}
.post-page__btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
}
</style>
