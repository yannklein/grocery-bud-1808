import { Application } from 'stimulus';
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
// 1.add data controller to the container which contains  the text input, button, and list
// 2. make an add function in the add controller
// 3. link to button element on the html data-action
// 4. create targets above connect in controller
// 5. link in the html data-controller-name-target in the text input
// 6. add target for ul and link
// 7. insert li using text-input.value 


// Remove item
// ///////////
// 1. add data controller to li
// 2. make a delete function this.element.delete
// 3. data action in the delete button
