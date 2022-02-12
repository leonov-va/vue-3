import App from "@/App";
import components from "@/components/UI";
import { createApp } from "vue";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
