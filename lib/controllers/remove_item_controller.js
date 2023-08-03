import { Controller } from 'stimulus'

export default class extends Controller {

  connect() {
    console.log('Hello from remove_item_controller.js')
    // console.log(this.testTarget)
  }

  remove() {
    this.element.remove()
  }
}