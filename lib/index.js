import { Application } from '@hotwired/stimulus';
// import here
import AddItemController from "./controllers/add_item_controller.js";
import RemoveItemController from "./controllers/remove_item_controller.js";

window.Stimulus = Application.start()
// register here
window.Stimulus.register("add-item", AddItemController)
window.Stimulus.register("remove-item", RemoveItemController)

// ///////////
// Pseudocode
// ///////////

// Add item
// ///////////

// put the data-controller in the html
// add data-action to the button
// set the target for the input and get the value
// create a method in the add_item controller
// select the target list element
// insert the HTML into the list element

// Remove item
// ///////////

// put the data controller in the li tag
// add data action to the remove button
// use this.element to get the value
// create a method for remove item
  // use .remove on this.element
