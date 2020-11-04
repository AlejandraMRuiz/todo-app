
const inputBox = document.getElementById("inputBox");
const deleteListBtn = document.getElementById("deleteListBtn");

let savedItems = JSON.parse(localStorage.getItem("userList")) || [];


//saves user's list
savedItems.forEach((item) => {
    console.log(item);
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = item
});    


function renderTask(keyboardEvent)   {
    if(keyboardEvent.keyCode === 13)   {
        const text = inputBox.value;
        const ul = document.getElementById("list");
        const li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = text;
        console.log("text value is: ", text);
        //testing adding type to element from JS
        const checkbox = document.createAttribute("")
        li.style = checkbox;
        inputBox.value = "";
        inputBox.placeholder = "";

        function singleClick() {
            console.log("you clicked me");
            li.innerHTML = text.strike();
        }

        function doubleClick() {
            console.log("you double-clicked me");
            li.innerHTML = "";
        }
        
        var clickCount = 0;
        
        li.addEventListener("click", function() {
            clickCount++;
            if (clickCount === 1) {
                singleClickTimer = setTimeout(function() {
                clickCount = 0;
                singleClick();
                }, 400);
            } else if (clickCount === 2) {
                clearTimeout(singleClickTimer);
                clickCount = 0;
                doubleClick();
            }
        }, false);

        //testing Andy's suggestion:
        const todoItem = {
        text: text,
        isChecked: false
        }

        //stores saved list locally
        console.log(text);
        //Based on Andy's suggestion, below param changed: text -> todoItem
        savedItems.push(todoItem);
        localStorage.setItem("userList", JSON.stringify(savedItems));
    }
}


inputBox.addEventListener("keyup", renderTask);


function deleteList() {
    const parent = document.getElementById("list");
    parent.innerHTML = "";
    localStorage.clear();
}


deleteListBtn.addEventListener("click", deleteList);



       










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
