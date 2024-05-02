import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 
    'textInput',
    'listElement'
 ]

  connect() {
    console.log('Hello from add_item_controller.js')
    // console.log(this.testTarget)
  }

  create(event) {
    event.preventDefault();
    const value = this.textInputTarget.value;
    this.listElementTarget.insertAdjacentHTML("beforeend", `
    <li data-controller="remove-item" class="list-group-item d-flex gap-3 align-items-center">
    <div>${value}</div>
    <button data-action="click->remove-item#delete" type="submit" class="btn btn-sm btn-light">❌ Remove</button>
    </li> 
    `)
    this.textInputTarget.value = '';
  }
}