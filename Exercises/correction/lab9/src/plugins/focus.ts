import type { App } from 'vue'

export default {
  install(app: App): void {
    app.directive('focus', {
      mounted(el: HTMLInputElement) {
        el.focus()
      },
    })
  },
}
