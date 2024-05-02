import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  // static targets = [ 'test' ]

  connect() {
    console.log('Hello from remove_item_controller.js')
    // console.log(this.testTarget)
  }
  delete(){
    this.element.remove();
  }
}