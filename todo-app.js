//STEP 1: Create a user input.
// don't use this: todo = window.prompt("Add a todo: ");
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
// - learn how to create <li> by using: document.createElement('li');



//var mkList = document.createElement("li");
//mkList.innerHTML = ;

const inputBox = document.querySelector(".inputBox");
//const addBtn = document.querySelector("#addBtn");


function addTask()   {
    if (addInput.value === " ") {
        alert("Stop messin' around and enter a todo!");
    }
    else    {
    const ul = document.querySelector("listholder");
    const li = document.createElement("li");
    li.innerHTML(inputBox.value);
    ul.appendChild(li);
    }
}

//keyup isn't an id or class in my HTML so produces error in console.
inputBox.addEventListener("keyup", (event) =>   {
    if (event.which === 13) {
    addTask();
    } 
});

//let inputValue = document.getElementById("enter").value;