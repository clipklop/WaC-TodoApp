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
    this.displayTodos();
  },
  displayTodos() {
    if (this.todos.length === 0) {
      console.log('The list is empty.')
    } else {
      console.log('My to-do list are: ')
      this.todos.forEach(todo => {
        todo.completed ? console.log(`(x) ${todo.todoText}`)
          : console.log(`( ) ${todo.todoText}`)
      });
    }
  },
  changeTodo(position, todoText) {
    if (typeof this.todos[position] === 'undefined') { return }

    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo(position) {
    if (typeof this.todos[position] === 'undefined') { return }
    
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted(position) {
    if (typeof this.todos[position] === 'undefined') { return }

    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    // Get number of completed todos
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed) completedTodos++
    }

    // If everthing's true, make everything false, yo, and vice-versa!
    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false
      }
    } else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true
      }
    }
    this.displayTodos();
  },
};


// Toggle ToDo's
const displayButton = document.getElementById('displayButton');
displayButton.addEventListener('click', (e) => todoList.displayTodos());
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

// Delete ToDo
const deleteTodoButton = document.getElementById('deleteTodoButton');
const deleteTodoPosition = document.getElementById('deleteTodoPosition');
const deleteTodo = () => {
  if (deleteTodoPosition.value === '') { return };
  
  todoList.deleteTodo(deleteTodoPosition.valueAsNumber);

  deleteTodoPosition.value = '';
}
deleteTodoButton.addEventListener('click', deleteTodo);

// Toggle one ToDo
const toggleTodoButton = document.getElementById('toggleTodoButton');
const toggleTodoPosition = document.getElementById('toggleTodoPosition');
const toggleTodo = () => {
  if (toggleTodoPosition.value === '') { return };
  
  todoList.toggleCompleted(toggleTodoPosition.valueAsNumber);

  toggleTodoPosition.value = '';
}
toggleTodoButton.addEventListener('click', toggleTodo);


// Module exporting for NodeJS
// module.exports = todoList;