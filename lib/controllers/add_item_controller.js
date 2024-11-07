import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ["input", "list"]

  connect() {
    console.log("hi")
  }
  
  add(event) {
    event.preventDefault();
    console.log(this.inputTarget.value)
    this.listTarget.insertAdjacentHTML("beforeend", `
      <li class="list-group-item d-flex gap-3 align-items-center" data-controller="remove-item">
        <div>${this.inputTarget.value}</div>
        <button type="submit" class="btn btn-sm btn-light" data-action="click->remove-item#remove" >❌ Remove</button>
      </li> 
    `)
  }
}