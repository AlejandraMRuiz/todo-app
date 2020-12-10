
const savedItems = JSON.parse(localStorage.getItem("userList")) || [];
savedItems.forEach((item) => renderTask(item));    


function renderTask(task)   {
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(task.text));

    const deleteItemBtn = document.createElement("button");
    deleteItemBtn.className = "deleteItemBtn";
    deleteItemBtn.appendChild(document.createTextNode("x"));
    deleteItemBtn.addEventListener("click", function(e) {       
        deleteSingleTaskFromLocalStorage(task.text);
        ul.removeChild(li);
        inputBox.focus();
    });

    li.appendChild(deleteItemBtn);    

    if (task.isChecked === true)    {
        li.style.textDecoration = "line-through";
    }

    checkOffItemAndSaveToLocalStorage(li, task);

    ul.appendChild(li);
}


const inputBox = document.getElementById("inputBox");
inputBox.addEventListener("keyup", addTask);
function addTask(event)   {
    const text = inputBox.value;
    
    if (!text)  {
        alert("Please add a todo")
    }   else if (event.keyCode === 13)  {
        const todoItem = {
            text: inputBox.value,
            isChecked: false
        };    
        renderTask(todoItem);

        inputBox.value = "";
        inputBox.placeholder = "";

        savedItems.push(todoItem);
        }
        localStorage.setItem("userList", JSON.stringify(savedItems));
}


const deleteListBtn = document.getElementById("delete-list-btn");
deleteListBtn.addEventListener("click", deleteList);
function deleteList() {
    document.getElementById("list").remove();
    localStorage.clear();
    inputBox.focus();
}


function deleteSingleTaskFromLocalStorage(taskText) {
    const savedTasks = JSON.parse(localStorage.getItem("userList")) || [];
    const filteredTasks = savedTasks.filter((task) => task.text !== taskText);
    localStorage.setItem("userList", JSON.stringify(filteredTasks));
}


function checkOffItemAndSaveToLocalStorage(li, task)    {
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
}

