import { defineComponent } from "vue";
import classes from "@styles/test-module.css";
export default defineComponent({
  setup() {
    return () => {
      return <div class={`root ${classes.moduleClass}`}> Hellow Vue3 Jsx</div>;
    };
  }
});
