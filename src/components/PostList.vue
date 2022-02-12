<template>
  <div>
    <h3>Список пользователей</h3>
    <post-item v-for="post in posts" :post="post" />
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: {
    PostItem,
  },
  data: () => ({}),
  methods: {},
};
</script>

<style scoped></style>
