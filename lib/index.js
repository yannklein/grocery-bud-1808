import { Application, Controller } from 'stimulus';
import AddItemController from "./controllers/add_item_controller.js"
import RemoveItemController from "./controllers/remove_item_controller.js"

window.Stimulus = Application.start()
Stimulus.register("add-item", AddItemController)
Stimulus.register("remove-item", RemoveItemController)
// ///////////
// Pseudocode
// ///////////

// Add item
// ///////////
// 1.) Create the controller
// 2.) Add the controller in the HTML
// 3.) Import it to the JS
// 4.) Console.log in the connect
// 5.) Add data-action in the HTML
// 6.) Defind a method in JS and call it
// 7.) target the text box & button & place where we put the list in HTML
// 8.) insert an items in the LIST

// Remove item (with a new controller!)
// ///////////
// 1.) Create the controller
// 2.) Add the controller in the HTML
// 3.) Import it to the JS
// 4.) Console.log in the connect
// 5.) Add data-action to remove button in the HTML
// 6.) Define a method in JS and call it
// 7.) target the item 
// 8.) remove the item from DOM
