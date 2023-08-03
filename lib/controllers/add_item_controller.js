import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ 'input', 'result']

  connect() {
    console.log('Hello from add_item_controller.js')
    // console.log(this.testTarget)
  }

  add(event){
    event.preventDefault();
    this.resultTarget.insertAdjacentHTML("beforeend", `<li data-controller="remove-item" class="list-group-item d-flex gap-3 align-items-center">
    <div>${this.inputTarget.value}</div>
    <button data-action="click->remove-item#remove" type="submit" class="btn btn-sm btn-light">❌ Remove</button>
  </li>`)
    console.log(event)
  }
}