  import { Controller } from 'stimulus'
  
  export default class extends Controller {
    // static targets = [ 'test' ]
  
    connect() {
      console.log('Hello from remove_item_controller.js')
      // console.log(this.testTarget)
    }

    remove(event) {
      console.log(event);
      this.element.remove();
    }
  }