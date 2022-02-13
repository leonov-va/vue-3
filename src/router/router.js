import About from "@/pages/About";
import Main from "@/pages/Main";
import Post from "@/pages/Post";
import Posts from "@/pages/Posts";
import PostsWithStore from "@/pages/PostsWithStore";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: Posts,
  },
  {
    path: "/posts-with-store",
    component: PostsWithStore,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/post/:id",
    component: Post,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
