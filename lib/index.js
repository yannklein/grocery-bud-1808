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

// add data-controller to the elements we want to change
// adding data-action to the button
// create methods inside the controller 
// target element input and get its value
// fetch the value and put it inside a new grocery item
// target the list where we want to insert he item
// insert element
//job done


// Remove item
// ///////////

// add data-controller to the element we want to remove
// adding a data action to the X mark
// create methods inside the remove item controller
// target element 
// destroy element


