////////////////
// only 1 var of 8 is null: liId.
// note const task is affected by this.

const inputBox = document.getElementById("inputBox");
const deleteListBtn = document.getElementById("deleteListBtn");
const ul = document.getElementById("list");

debugger
const li = document.createElement("li");
const burger = "del-eat me when you're done debugging";
// what if this li was not const but let and had an empty array?
// that did not work
// I put const back in place
// let li = document.createElement("li") || [];


// testing below 2 lines to fix null const liId
// debugger shows values for both lines
// but liId remains null
ul.appendChild(li);
const item = li.innerHTML;
// liId = null
// perhaps we don't need const liId
//const liId = document.getElementById("li");
const text = inputBox.value;
// console re: task - Uncaught TypeError: Cannot read property 'value' of null
// if we don't need const liId, we don't need const task
//const task = liId.value;
let savedItems = JSON.parse(localStorage.getItem("userList")) || [];



//saves user's list
savedItems.forEach((item) => {
    console.log(item);
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = item
});    





function addTask(keyboardEvent)   {
    if(keyboardEvent.keyCode === 13)   {
        const text = inputBox.value;
        const ul = document.getElementById("list");
        const li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = text;
        console.log("text value is: ", text);
        //testing adding type to element from JS
        // const checkbox = document.createAttribute("")
        // li.style = checkbox;
        inputBox.value = "";
        inputBox.placeholder = "";

        
        
        var clickCount = 0;
        


        // below need to turn into 2 separate events: 
        // 1. click 
        // 2. dbl-click
        li.addEventListener("click", function(event) {
            clickCount++;
            if (clickCount === 1) {
                singleClickTimer = setTimeout(function() {
                clickCount = 0;
                singleClick(li, text);
                }, 400);
            } else if (clickCount === 2) {
                clearTimeout(singleClickTimer);
                clickCount = 0;
                doubleClick();
            }
        }, false);


        

        //testing Andy's suggestion:
        // const todoItem = {
        // text: text,
        // isChecked: false
        // }


        //stores saved list locally
        console.log(text);
        //Based on Andy's suggestion, below param changed: text -> todoItem
        //savedItems.push(todoItem);
        savedItems.push(text);
        localStorage.setItem("userList", JSON.stringify(savedItems));
    }
}


inputBox.addEventListener("keyup", addTask);


function deleteList() {
    const parent = document.getElementById("list");
    parent.innerHTML = "";
    localStorage.clear();
}


deleteListBtn.addEventListener("click", deleteList);




function singleClick() {
    console.log("you clicked me");
    item.strike();
}


// tested below code snippet to prevent return of null
// did not work
// window.addEventListener("DOMContentLoaded", (event) => {
//     const liContent = document.getElementById("li");
//     liContent.addEventListener("click", singleClick);  
//   });



// tested below code snippet to prevent return of null
// did not work either
// window.onload = document.getElementById("li").onclick = singleClick();



// testing below code from clock app to prevent return of null
window.addEventListener("DOMContentLoaded", () => {
    const liContent = document.getElementById("li");
    liContent.addEventListener("click", function(event) {
      event.stopPropagation();
      singleClick();
    });  
});





// // Get the button, and when the user clicks on it, execute myFunction
// perhaps we can replace this with above code snippet.
//document.getElementById("li").onclick = singleClick();


function doubleClick(li) {
    console.log("you double-clicked me");
    li.innerHTML = "";
}




// li.addEventListener("click", function(event)    {

// });
       










//PROJECT PLAN:

//STEP 1: Create a user input field which accepts user's value.
//Don't use this: todo = window.prompt("Add a todo: ");
//Check functionality using: let inputValue = document.getElementById("enter").value;
//DONE!!!

//STEP 2: Create a button that when clicked will submit user input to UL.
//Check button functionality using console.log.
//Create list items dynamically by using document.createElement("li");
//Check functionality.
//DONE!!!

//STEP 3: When task completed, user clicks task to strikethrough. 
//If user clicks task is true then console.log strikethrough works.
//DONE!!!

//STEP 4: Add a "delete list" button and get it working.
//Check it.
//DONE!!!

//STEP 5: Create a button that individually deletes tasks that are strikethrough.
//Check button functionality using console.log.
//DONE!!!

//STEP 6: Fix input field so it clears after hitting enter vs. user doing so manually.
//Check it.
//DONE!!!

//STEP 7: Clear placeholder "add a todo" in input element.
//Check it.
//DONE!!!

//STEP 8: Get local storage bit working.
//Check it.
// in   p r o g r e s s 


//STEP 9: Ensure that when user clicks task again, the strikethrough comes off it
//in case they accidentally marked a task as complete.
//Check it. 

//STEP 10: Add app instructions that indicate to dblclick task to delete them.
//Check it.

//STEP 11: Eliminate extra space left behind when an item mid-list is deleted.
//Check it.

//STEP 12: Upgrade style.
//Check it.

//STEP 13: Clean & refactor code, including changing out any "innerHTMLs" for alternative.
//Also, is there a better way to do this so you're not repeating yourself (i.e. ul & li consts)?
//Check it.

