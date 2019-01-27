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
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted(position) {
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


// Browser scripting with DOM manipulation
const displayButton = document.getElementById('displayButton');
displayButton.addEventListener('click', (e) => todoList.displayTodos());

const toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', (e) => todoList.toggleAll());

// Module exporting for NodeJS
// module.exports = todoList;