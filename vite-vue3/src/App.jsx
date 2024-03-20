import { defineComponent } from 'vue'
import classes from '@styles/test.module.css'
import '@styles/test.less'
import { a } from './test'
import logoImg from './assets/vue.svg'
export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <div class={`root ${classes.moduleClass}`}> Hellow {a.name}</div>
          <img src={logoImg} alt="" />
        </div>
      )
    }
  },
})
