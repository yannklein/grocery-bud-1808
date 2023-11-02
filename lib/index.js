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
// Create :
//  -controller file in controllers named add_items
//  -Import Stimulus controller  
//  -Copy the boillerplate 
//  -data-contoller should be inserted on the HTML 
//  -Test the connection 
// Action: put data-action onto addBottun
//         difine the action method on the controller
// Target :Assign the item list   
// Target :Assign the target onto input form      
//         Create and insert a item card with the input value in the list

// Remove item (with a new controller!)
// ///////////
// Create :
//  -controller file in controllers named add_items
//  -Import Stimulus controller  
//  -Copy the boillerplate 
//  -data-contoller should be inserted on the HTML 
//  -Test the connection 
// Action : Put the data-action on remove button of each item card
//          define the action method on the controller
//          Remove the corresponding item card
