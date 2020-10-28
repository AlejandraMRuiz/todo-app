
const inputBox = document.getElementById("inputBox");

function addTask(keyboardEvent)   {
    if(keyboardEvent.keyCode === 13)   {
        const text = inputBox.value;
        const ul = document.getElementById("list");
        const li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = text;
        console.log("text value is: ", text);
    }
}

inputBox.addEventListener("keyup", addTask);







//PROJECT PLAN:

//STEP 1: Create a user input field which accepts user's value.
//*Don't use this: todo = window.prompt("Add a todo: ");
//*Check functionality using: let inputValue = document.getElementById("enter").value;
//DONE!!!

//STEP 2: Create a button that when clicked will submit user input to UL.
//*Check button functionality using console.log.
//*Create list items dynamically by using document.createElement("li");
//*Check functionality.
//DONE!!!

//STEP 3: When task completed, user clicks task to strikethrough. 
//*If user clicks task is true then console.log strikethrough works.

//STEP 4: Create a button that individually deletes tasks that are strikethrough.
//*Check button functionality using console.log.



//NOTES:
// - You will need to use addEventlisteners for add and delete buttons. 
// []
// - Learn how to create <li> by using: document.createElement('li');
// [DONE.]



//CODE SNIPPETS YOU MIGHT NEED:
//var mkList = document.createElement("li");
//mkList.innerHTML = ;

//const inputBox = document.getElementById(".inputBox");
//const addBtn = document.querySelector("#addBtn");

//let inputValue = document.getElementById("enter").value;