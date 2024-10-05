const addTodos = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchTodos = document.querySelector('.search input');

const handleSubmit = ( e => {
    e.preventDefault();
    const task = addTodos.add.value.trim();
    list.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${task}</span>
                <i class="far fa-trash-alt delete"></i>                
            </li>
    `
        addTodos.reset();
});
const handleDelete = e => {
    if(e.target.classList.contains('delete')){
        e.target.parentNode.remove();
    }
}
const handleSearch = () => {
    const text = searchTodos.value.trim();
    const searchText =( text =>{
        Array.from(list.children)
            .filter(input => !input.textContent.includes(text))
            .forEach(todo => todo.classList.add('filter'));
            
            Array.from(list.children)
                .filter(input => input.textContent.includes(text))
                .forEach(todo => todo.classList.remove('filter'));
    });
    searchText(text);
};

addTodos.addEventListener('submit', handleSubmit);
list.addEventListener('click', handleDelete);
searchTodos.addEventListener('keyup', handleSearch);