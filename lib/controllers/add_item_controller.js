import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["list", "input"];

  connect() {
    console.log("STIMULUSSSSSS")
  }

  add(event) {
    event.preventDefault();
    const input = this.inputTarget.value;
    this.inputTarget.value = "";
    console.log(input);
    this.listTarget.insertAdjacentHTML(
      "beforeend",
      `<li data-controller="remove-item" class="list-group-item d-flex gap-3 align-items-center">
        <div>${input}</div>
        <button data-action="click->remove-item#remove" type="submit" class="btn btn-sm btn-light">❌ Remove</button>
      </li>`
    )
  }
}