
const inputBox = document.getElementById("inputBox");
const deleteListBtn = document.getElementById("deleteListBtn");
let savedItems = JSON.parse(localStorage.getItem("userList"));
if (savedItems == null) {
    savedItems = [];
}

function renderTask(keyboardEvent)   {
    //debugger
    if(keyboardEvent.keyCode === 13)   {
        const text = inputBox.value;
        const ul = document.getElementById("list");
        const li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = text;
        console.log("text value is: ", text);
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
            //debugger
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
        
        console.log(text);
        savedItems.push(text);
        savedItems.forEach(item => {
            localStorage.setItem("userList", JSON.stringify(savedItems));
            localStorage.getItem("userList");
        });
        // create a new li for each item
        // you already have the functionality to create 
        // a list item and display it to the user,            
        // here you can use the same logic to do that.



        // userList.push(text);
        // localStorage.setItem("update", userList);
        // localStorage.getItem("update");
        // we "got" the list above, but we're not DISPLAYING it.

        // for (var i = 0; i < userList.length; i++){
        //     localStorage.getItem("update");
        //     console.log(savedItems);
        // }


        // You're on the right track here with looping through the items 
        // in localStorage to display it back to the user.  
        // However, since the items in localStorage are strings 
        // we need to parse that data back so we can use it.
        

    




        // below 2-line combo didn't work:
        // localStorage.setItem("userData", JSON.stringify(ul));
        // localStorage.getItem("userData");
        
        // below 2-line combo didn't work either:
        // localStorage.setItem("userData", JSON.stringify(text));
        // localStorage.getItem("userData");

        // below 3-line combo didn't work:
        // localStorage.setItem("userData", JSON.stringify(text));
        // const userStorage = localStorage.getItem("userData");
        // li.innerHTML = userStorage;

        // below 3-line combo didn't work either:
        // localStorage.setItem("userData", JSON.stringify(ul));
        // const userStorage = localStorage.getItem("userData");
        // li.innerHTML = userStorage;

    }
}



// In your renderTask() you're setting the localStorage correctly by doing:
// localStorage.setItem('update', JSON.stringify(text)); 

// however, to make this work correctly you need to create either 
// an object or an array to store your todo in.  

// That way all you have to do is loop through the array 
// from localStorage and display that list as you're doing now.  
// Here's what I would suggest:

// 1. create an empty array in your global scope - DONE
// 2. push your todos in that array
// 3. save that array into localStorage
// 4. retrieve the list from localStorage
// 5. display the list











inputBox.addEventListener("keyup", renderTask);


function deleteList() { 
    const parent = document.getElementById("list");
    parent.innerHTML = ""; 
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

//STEP 10: Add app instructions that say, "click task to mark as completed" and "dblclick task to delete it".
//Check it.

//STEP 11: Upgrade style.
//Check it.

//STEP 12: Clean & refactor code, including changing out any "innerHTMLs" for alternative.
//Check it.
