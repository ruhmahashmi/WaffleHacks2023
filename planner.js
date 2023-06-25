// Weekly meal plan data
let mealPlan = [
  { day: 'Monday', meal: 'Breakfast', recipe: 'Omelette' },
  { day: 'Monday', meal: 'Lunch', recipe: 'Grilled Chicken Salad' },
  { day: 'Monday', meal: 'Dinner', recipe: 'Spaghetti Bolognese' },
  { day: 'Tuesday', meal: 'Breakfast', recipe: 'Yogurt with Fruits' },
  { day: 'Tuesday', meal: 'Lunch', recipe: 'Vegetable Stir-Fry' },
  { day: 'Tuesday', meal: 'Dinner', recipe: 'Baked Salmon with Veggies' },
  // Add more meal plan data for the remaining days of the week
];

// Grocery list data
let groceryList = [
  'Eggs',
  'Chicken',
  'Lettuce',
  'Tomatoes',
  'Pasta',
  'Ground beef',
  'Yogurt',
  'Assorted fruits',
  'Assorted vegetables',
  'Salmon fillets',
  // Add more grocery items as needed
];

// To-Do list data
let toDoList = [];

// Function to render the meal plan
function renderMealPlan() {
  const mealPlanContainer = document.getElementById('meal-plan');
  mealPlanContainer.innerHTML = ''; // Clear existing meal plan

  mealPlan.forEach((item) => {
    const mealItem = document.createElement('div');
    mealItem.innerHTML = `<strong>${item.day} - ${item.meal}:</strong> ${item.recipe}`;
    mealPlanContainer.appendChild(mealItem);
  });
}

// Function to render the grocery list
function renderGroceryList() {
  const groceryItemsContainer = document.getElementById('grocery-items');
  groceryItemsContainer.innerHTML = ''; // Clear existing grocery list

  groceryList.forEach((item) => {
    const groceryItem = document.createElement('li');
    groceryItem.textContent = item;
    groceryItemsContainer.appendChild(groceryItem);
  });
}

// Function to render the to-do list
function renderToDoList() {
  const toDoItemsContainer = document.getElementById('to-do-items');
  toDoItemsContainer.innerHTML = ''; // Clear existing to-do list

  toDoList.forEach((item) => {
    const toDoItem = document.createElement('li');
    toDoItem.textContent = item;
    toDoItemsContainer.appendChild(toDoItem);
  });
}

// Function to add a task to the to-do list
function addTask() {
  const taskInput = document.getElementById('todo-input');
  const task = taskInput.value.trim();

  if (task !== '') {
    toDoList.push(task);
    taskInput.value = '';
    renderToDoList();
  }
}

// Initialize the meal planner
document.addEventListener('DOMContentLoaded', () => {
  renderMealPlan();
  renderGroceryList();
  renderToDoList();

  // Add event listener for the "Add" button in the to-do list
  const addTodoButton = document.getElementById('todo-button');
  addTodoButton.addEventListener('click', addTask);
});