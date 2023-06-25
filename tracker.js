//meal tracker

function addMeal() {
  var mealName = document.getElementById('meal-name').value;
  var mealTime = document.getElementById('meal-time').value;
  
  if (mealName.trim() !== '' && mealTime.trim() !== '') {
    var mealList = document.getElementById('meal-list');
    
    var mealItem = document.createElement('div');
    mealItem.classList.add('meal-item');
    
    var nameElement = document.createElement('span');
    nameElement.classList.add('meal-name');
    nameElement.textContent = mealName;
    
    var timeElement = document.createElement('span');
    timeElement.classList.add('meal-time');
    timeElement.textContent = mealTime;
    
    mealItem.appendChild(nameElement);
    mealItem.appendChild(timeElement);
    
    mealList.appendChild(mealItem);
    
    document.getElementById('meal-name').value = '';
    document.getElementById('meal-time').value = '';
  }
}
