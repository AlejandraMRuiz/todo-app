
const inputBox = document.getElementById("inputBox");
const deleteListBtn = document.getElementById("deleteListBtn");
const li = document.createElement("li");
// below className = attempt to flexbox my li(s)
li.className = "taskListItem";
const item = li.textContent;
const text = inputBox.value;
let savedItems = JSON.parse(localStorage.getItem("userList")) || [];


savedItems.forEach((item) => {
    renderTask(item);
});    


function renderTask(task)   {
    const ul = document.getElementById("list");
// isn't const li below unnecessary since it's already created globally?
// I broke the app on commenting out const li, but that doesn't make sense as it's global...
    const li = document.createElement("li");
////// * testing code between comments * //////

    const deleteItemBtn = document.createElement("button");
    deleteItemBtn.className = "deleteItemBtn";
    deleteItemBtn.appendChild(document.createTextNode("Delete"));
    deleteItemBtn.addEventListener("click", function(e) {       
        deleteLocalTask(li);
        ul.removeChild(li);
// what does below line accomplish?
        inputBox.focus();
    });

    li.appendChild(deleteItemBtn);    

////// * testing code between comments * //////
    if (task.isChecked === true)    {
        li.style.textDecoration = "line-through";
    }

    li.addEventListener(
        "click",
        function(e) {
        if (li.style.textDecoration === "line-through")  {
            li.style.textDecoration = "none";
            const savedItems = JSON.parse(localStorage.getItem("userList")) || [];
            for (let i = 0; i < savedItems.length; i++)  {
                if (savedItems[i].text === task.text) {
                    savedItems[i].isChecked = false;
                }
            }
            localStorage.setItem("userList", JSON.stringify(savedItems));
        }   else {
            li.style.textDecoration = "line-through";
            const savedItems = JSON.parse(localStorage.getItem("userList")) || [];
            for (let i = 0; i < savedItems.length; i++)  {
                 if (savedItems[i].text === task.text) {
                     savedItems[i].isChecked = true;
                 }
             }
             localStorage.setItem("userList", JSON.stringify(savedItems));
          }
     }, false);

    ul.appendChild(li);
    li.textContent = task.text;
}


function addTask(keyboardEvent)   {
    if(keyboardEvent.keyCode === 13)   {
        
        const todoItem = {
            text: inputBox.value,
            isChecked: false
            }
        
        renderTask(todoItem);

        inputBox.value = "";
        inputBox.placeholder = "";

        savedItems.push(todoItem);
        localStorage.setItem("userList", JSON.stringify(savedItems));
    }
}


inputBox.addEventListener("keyup", addTask);


function deleteList() {
    const parent = document.getElementById("list");
    parent.textContent = "";
    localStorage.clear();
}


function deleteLocalTask(li)  {
    localStorage.clear(li);    
};


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
//DONE!!!


//STEP 9: Ensure that when user clicks task again, the strikethrough comes off it
//in case they accidentally marked a task as complete.
//Check it.
//DONE!!!

//STEP 10: Eliminate extra space left behind when an item mid-list is deleted.
//Check it.
//DONE!!!

//STEP 11: Change out any "innerHTMLs" for alternative, textContent.
//Check it.
//DONE!!!

//STEP 12: Handle WET code (look into: ul & li global consts + appendChild).
//Check it.
//DONE!!!



//STEP 13: Add button to delete individual list items.
//Check it.

//STEP 14: Upgrade style as needed.
//Check it.

//STEP 15: Clean & refactor code as needed.
//Check it.