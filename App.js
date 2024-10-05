const addForm = document.querySelector('.add')
const tasks = document.querySelector('.todos');
const search = document.querySelector('.search input');

const addTodo = todo => {
    let newTask = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo} </span>
                <i class="far fa-trash-alt delete"></i>                
            </li>`

            tasks.innerHTML += newTask; //add a new item task to the list
};

const handleSubmit = e => {
    e.preventDefault();
    const todo = addForm.add.value.trim()  //trim() is a metnod used to remove any blanck space before and after a string
    if (todo.length){
        addTodo(todo);
        addForm.reset(); //this line is to make sure that after every submit, the add task bar is cleared
    }
};

const deleteTask = e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentNode.remove();
    }
};

const handleSearch = () => {
    const text = search.value.trim(); //gets the text typed in the search input field by the user    
    const searchTodos = text => {
        Array.from(tasks.children)
        .filter(task => !task.textContent.includes(text))
        .forEach(todo => todo.classList.add('filter'));
        
        Array.from(tasks.children)
        .filter(task => task.textContent.includes(text))
        .forEach(todo => todo.classList.remove('filter'));
    }
    searchTodos(text);
}

tasks.addEventListener('click', deleteTask);
addForm.addEventListener('submit', handleSubmit);
search.addEventListener('keyup', handleSearch);