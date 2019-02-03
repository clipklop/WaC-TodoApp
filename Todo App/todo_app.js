/**
 * ToDo App 🌋
**/


const todoList = {
  todos: [],

  addTodo(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });

    displayTodos()
  },
  changeTodo(position, todoText) {
    if (typeof this.todos[position] === 'undefined') { return }

    this.todos[position].todoText = todoText;
    
    displayTodos();
  },
  deleteTodo(position) {
    if (typeof this.todos[position] === 'undefined') { return }
    
    this.todos.splice(position, 1);
    
    displayTodos();
  },
  toggleCompleted(position) {
    if (typeof this.todos[position] === 'undefined') { return }

    let todo = this.todos[position];
    todo.completed = !todo.completed;

    displayTodos()
  },
  toggleAll() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    // Get number of completed todos
    this.todos.forEach(todo => {
      if (todo.completed) { completedTodos++ }
    });

    // If everthing's true, make everything false, yo, and vice-versa!
    this.todos.forEach(todo => {
      completedTodos === totalTodos ? todo.completed = false
        : todo.completed = true;
      
      displayTodos()
    });
  },
};


// Display/Hide To-Do's
const displayHideButton = document.getElementById('displayHideButton');
const viewSection = document.querySelector('.viewSection');
const displayHide = (section) => {
  section.style.display === 'none' ? section.style.display = 'block'
    : section.style.display = 'none'
}
displayHideButton.addEventListener('click', (e) => displayHide(viewSection));

// Toggle ToDo's
const toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', (e) => todoList.toggleAll());

// Add ToDo
const addTodoButton = document.getElementById('addTodoButton');
const addTodoInput = document.getElementById('addTodoInput');
const addTodo = () => {
  if (addTodoInput.value === '') return;
  
  todoList.addTodo(addTodoInput.value);

  addTodoInput.value = '';
}
addTodoButton.addEventListener('click', addTodo);

// Change ToDo
const changeTodoButton = document.getElementById('changeTodoButton');
const changeTodoPosition = document.getElementById('changeTodoPosition');
const changeTodoInput = document.getElementById('changeTodoInput');
const changeTodo = () => {
  if (changeTodoInput.value === '' || changeTodoPosition.value === '') return;
  
  todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoInput.value);

  changeTodoInput.value = changeTodoPosition.value = '';
}
changeTodoButton.addEventListener('click', changeTodo);

// Toggle ToDo one at a time
const toggleTodoButton = document.getElementById('toggleTodoButton');
const toggleTodoPosition = document.getElementById('toggleTodoPosition');
const toggleTodo = () => {
  if (toggleTodoPosition.value === '') { return };
  
  todoList.toggleCompleted(toggleTodoPosition.valueAsNumber);

  toggleTodoPosition.value = '';
}
toggleTodoButton.addEventListener('click', toggleTodo);


// View
const displayTodos = () => {
  const todosUl = document.querySelector('.todoList');  
  let todosLi = document.createElement('li');

  if (todoList.todos.length === 0) { 
    todosUl.innerHTML = '';
    todosLi.textContent = 'The list is empty.';
    todosUl.appendChild(todosLi);
  } else {
    todosUl.innerHTML = '';
    todoList.todos.forEach((todo, i) => {  
      todosLi = document.createElement('li');
      let todoTextWithCompletion = '';

      todo.completed ? todoTextWithCompletion = `(x) ${todo.todoText}`
        : todoTextWithCompletion = `( ) ${todo.todoText}`

      todosLi.id = i;
      todosLi.textContent = todoTextWithCompletion;
      todosLi.appendChild(createDeleteButton());
      todosUl.appendChild(todosLi);
    });
  }
}

const createDeleteButton = () => {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'deleteButton';

  return deleteButton;
}

const setUpEventListeners = () => {
  const todosUl = document.querySelector('ul');

  // Delete ToDo
  todosUl.addEventListener('click', (e) => {
    if (e.target.className === 'deleteButton') { 
      todoList.deleteTodo(parseInt(e.target.parentNode.id), 10);
    }
  })
}

setUpEventListeners();
displayTodos()

// Module exporting for NodeJS
// module.exports = todoList;