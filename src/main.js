import App from "@/App";
import components from "@/components/UI";
import { createApp } from "vue";
import router from "@/router/router";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).mount("#app");
