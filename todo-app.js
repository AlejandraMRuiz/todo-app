
const todos = [ "dishes", "laundry", "take over the world" ];

//WORKED:
// function createList() {
//     const ul = document.getElementById("list");
//     const li = document.createElement("li");
//     //just for fun:
//     //li.textContent = "Peralta, you are an amazing detective slash genius";
//     li.textContent = todos[2];
//     ul.appendChild(li);
// }

//DOESN'T WORK YET (console error lists 'inputBox' in if statement as null):
function addTask()   {
    const inputBox = document.getElementById("inputBox");
    //if (inputBox.value === " ") {
    //maybe this is simpler:    
    if (!inputBox.value) {
        alert("Please enter a todo!");
    }
        else if (inputBox.value) and (KeyboardEvent.code === 13); {
            const ul = document.getElementById("list");
            const li = document.createElement("li");
            ul.appendChild(li);
        }
}

window.onload = addTask();

// window.addEventListener("DOMContentLoaded", (event) => {
//     inputBox.addEventListener("inputBox", addTask());  
// });


// inputBox.addEventListener("inputBox", (event) =>   {
//     if (event.which === 13) {
//     addTask();
//     } 
// });




//PROJECT PLAN:

//STEP 1: Create a user input field which accepts user's value.
//*Don't use this: todo = window.prompt("Add a todo: ");
//*Check functionality using: let inputValue = document.getElementById("enter").value;

//STEP 2: Create a button that when clicked will submit user input to UL.
//*Check button functionality using console.log.
//*Create list items dynamically by using document.createElement("li");
//*Check functionality.

//STEP 3: When task completed, user clicks task to strikethrough. 
//*If user clicks task is true then console.log strikethrough works.

//STEP 4: Create a button that individually deletes tasks that are strikethrough.
//*Check button functionality using console.log.



//NOTES:
// - You will need to use addEventlisteners for add and delete buttons. 
// - Learn how to create <li> by using: document.createElement('li');



//CODE SNIPPETS YOU MIGHT NEED:
//var mkList = document.createElement("li");
//mkList.innerHTML = ;

//const inputBox = document.getElementById(".inputBox");
//const addBtn = document.querySelector("#addBtn");

//let inputValue = document.getElementById("enter").value;