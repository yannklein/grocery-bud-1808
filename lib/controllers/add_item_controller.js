import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['item', 'list']

  connect() {
    console.log("hey yall");
    console.log(this.element);
  }

  addItem(event) {
    event.preventDefault();
    console.log("what up dog");
    console.log(this.itemTarget.value);
    const item = this.itemTarget.value;
    this.listTarget.insertAdjacentHTML(
      "beforeend", 
      `<li class="list-group-item d-flex gap-3 align-items-center" data-controller="remove-item">
        <div>${item}</div>
        <button type="submit" data-action="click->remove-item#delete" class="btn btn-sm btn-light">❌ Remove</button>
      </li>`);
    this.itemTarget.value = ""
  }
}