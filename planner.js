// JavaScript for To-Do List

// Selecting elements
const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("todo-button");
const todoItems = document.getElementById("to-do-items");

// Adding event listener to the "Add" button
todoButton.addEventListener("click", addTodo);

// Function to add a new task
function addTodo() {
  // Get the value of the input field
  const todoText = todoInput.value;

  // Create a new list item element
  const li = document.createElement("li");
  li.innerText = todoText;

  // Append the new list item to the to-do items list
  todoItems.appendChild(li);

  // Clear the input field
  todoInput.value = "";
}
