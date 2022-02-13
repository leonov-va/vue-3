<template>
  <ul class="pagination">
    <li
      v-for="pageNumber in pages"
      :key="pageNumber"
      class="pagination__item"
      :class="{
        'pagination__item--active': pageNumber === page,
      }"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(pageNumber) {
      this.$emit("update:page", pageNumber);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin: 15px 0 0;
  padding: 0;
  list-style: none;
}
.pagination__item {
  margin: 0 2px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
}
.pagination__item--active {
  border-color: teal;
  background-color: teal;
  color: #fff;
}
</style>
