
const inputBox = document.getElementById("inputBox");
const deleteListBtn = document.getElementById("deleteListBtn");


function renderTask(keyboardEvent)   {
    if(keyboardEvent.keyCode === 13)   {
        const text = inputBox.value;
        const ul = document.getElementById("list");
        const li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = text;
        console.log("text value is: ", text);
        // li.addEventListener("click", function()    {
        //     console.log("you clicked me");
        //     li.innerHTML = text.strike();
        // });

        //below code WORKS, but not in tandem with "click" event.
        //See: https://www.w3schools.com/jquery/event_dblclick.asp
        li.addEventListener("dblclick", function()  {
            console.log("you double-clicked me");
            li.innerHTML = "";
        });
    }
}

inputBox.addEventListener("keyup", renderTask);


function deleteList() { 
    const parent = document.getElementById("list");
    parent.innerHTML = ""; 
} 

deleteListBtn.addEventListener("click", deleteList);











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
//DONE!!!

//STEP 4: Add a "delete list" button and get it working.
//Check it.
//DONE!!!

//STEP 5: Fix input field so it clears after hitting enter vs. user doing so manually.
//Check it.

//STEP 6: Create a button that individually deletes tasks that are strikethrough.
//*Check button functionality using console.log.

//STEP 7: Ensure that when user clicks task again, the strikethrough comes off it
//in case they accidentally marked a task as complete.
//Check it. 

//STEP 8: Upgrade style.
//Check it.

//STEP 9: Clean & refactor code, including changing out any "innerHTMLs" for alternative.
//Check it.


//NOTES:
// - You will need to use addEventlisteners for add and delete buttons. 


//CODE SNIPPETS YOU MIGHT NEED:
//var mkList = document.createElement("li");
//mkList.innerHTML = ;

//const inputBox = document.getElementById(".inputBox");
//const addBtn = document.querySelector("#addBtn");

// function deleteList()   {
//     list.removeChild(list.childNodes[0]);
// }

// deleteListBtn.addEventListener("click", deleteList);

// var list = document.getElementById("myList");   // Get the <ul> element with id="myList"
//            // Remove <ul>'s first child node (index 0)


//USE THIS TO GET CLICK & DBLCLICK WORKING IN TANDEM:
// var the_div = document.getElementById('the_div');

// function singleClick() {
//     the_div.style.backgroundColor = '#0F0';
// }

// function doubleClick() {
//     the_div.style.backgroundColor = '#00F';
// }

// var clickCount = 0;

// the_div.addEventListener('click', function() {
//     clickCount++;
//     if (clickCount === 1) {
//         singleClickTimer = setTimeout(function() {
//             clickCount = 0;
//             singleClick();
//         }, 400);
//     } else if (clickCount === 2) {
//         clearTimeout(singleClickTimer);
//         clickCount = 0;
//         doubleClick();
//     }
// }, false);