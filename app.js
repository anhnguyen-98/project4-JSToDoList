const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

const addTodoItem = (e) => {
    //prevent reload page by clicking button
    e.preventDefault();
    todoInput.placeholder = "Enter a task..."
    if (todoInput.value !== "") {
        //create a tag li, which contains the todo-text, completed-button and trash-button
        const todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");
        //create a todo-text, which contains a text about what to do
        const todoText = document.createElement("span");
        todoText.innerText = todoInput.value;
        todoText.classList.add('todo-text');
        //create a completed-button
        const completedButton = document.createElement('button');
        completedButton.classList.add('completed-btn');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        //create a trash-button
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-btn');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        //append tags to build a todo-item
        todoList.appendChild(todoItem);
        todoItem.appendChild(todoText);
        todoItem.appendChild(completedButton);
        todoItem.appendChild(trashButton);
        //Reset value of input to nothing after one todo-text was appended
        todoInput.value = "";
    } else {
        todoInput.placeholder = "Type something!";
    }
}
const checkAndDeleteTodoItem = (e) => {
    //take the tag where you click on
    const clickedTarget = e.target;
    console.log(e.target.parentElement);
    //take the class name of this tag
    const clickedBtn = clickedTarget.classList.value;

    if (clickedBtn === 'completed-btn') {
        const todoItem = clickedTarget.parentElement;
        todoItem.classList.toggle('completed');;
    }
    if (clickedBtn === 'trash-btn') {
        const todoItem = clickedTarget.parentElement;
        todoItem.classList.add('disappear');
        setTimeout(() => todoItem.remove(), 500 )
    }
} 

todoButton.addEventListener('click', addTodoItem);
todoList.addEventListener('click', checkAndDeleteTodoItem);