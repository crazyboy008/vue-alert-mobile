import AlertComponent from './alert.vue'
import { mergeOptions } from './util'

const Alert = {}
Alert.install = (Vue, options) => {
  if (options === undefined || options === null) {
    options = {
      content: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      content: options
    }
  }
  const AlertBox = Vue.extend(AlertComponent)
  let component
  if (!component) {
    component = new AlertBox({
      data: options
    }).$mount()
    if (typeof window !== 'undefined') {
      if (document) document.createElement("div")
    }
  }
  const $alert = {
    show(options) {
      if (typeof options === 'object') {
        mergeOptions(component, options)
      } else if (typeof options === 'string') {
        component.content = options
      }
      this.watcher && this.watcher()
      this.watcher = component.$watch('showValue', (val) => {
        val && options.onShow && options.onShow(component)
        if (!val && options.onHide) {
          options.onHide(component)
          this.watcher && this.watcher()
        }
        if (val) {
          document.querySelector('body').appendChild(component.$el)
        } else {
          setTimeout(() => {
            document.body.removeChild(component.$el)
          }, 300)
        }
      })
      component.showValue = true
    }
  }
  Vue.prototype.$alert = $alert
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Alert);
}

export default Alert
