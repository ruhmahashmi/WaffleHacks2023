

//nourishED Advice section
function openModal(index) {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const adviceContent = [
    'Smart meal planning content goes here...',
    'Budget-friendly recipes content goes here...',
    'Cooking tips content goes here...',
    'Meal planning ideas content goes here...'
  ];
  modalContent.innerHTML = adviceContent[index - 1];
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

window.onclick = function (event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function openModal(index) {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const adviceContent = [
    `<h3>Smart Meal Planning</h3>
    <div class="advice-image">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8F-4W8lAGtdcXmQGb_zp-aU6RzKbVeiClZA&usqp=CAU" alt="Smart Meal Planning">
    </div>
    <div class="advice-content">
      <p style="text-align: justify;">Smart meal planning can be helpful to overcome food insecurity as a student!<br> By planning your meals in advance, you can avoid impulse purchases and ensure that you have the necessary ingredients on hand.</p>
      <p>Consider the following tips:</p>
      <ul>
        <li><strong>Plan your meals:</strong> <br>Take some time each week to plan your meals. This will help you create a shopping list and avoid buying unnecessary items. <p> Check out <a href="https://www.adobe.com/express/create/planner/meal"> this Meal Planning Website</a> for meal planning templates and ideas.</p></li>
        <br>
        <li><strong>Buy in bulk:</strong> <br>Purchase staple ingredients in larger quantities to save money in the long run. Items like rice, pasta, beans, and canned goods can be stored and used over time.<p> Visit <a href="https://bulkfoodbox.com/">this Bulk Buying Website</a> for bulk purchasing options and discounts.</p></li>
        <br>
        <li><strong>Utilize leftovers:</strong> <br> Get creative with leftovers by repurposing them into new dishes. For example, leftover roasted chicken can be used in sandwiches or salads, and extra cooked vegetables can be turned into flavorful stir-fries or omelettes. <p> Check out <a href="https://no-leftovers.com/">this Leftover Recipes Website</a> for inspiration.</p> </li>
      </ul>
      <p style="text-align: justify;">Remember, smart meal planning not only helps with budgeting but also ensures that you have nutritious meals throughout the week.</p>
    </div>`,
    
    `
<div class="advice-section">
  <h2>Budget-Friendly Meals: Delicious and Affordable Ideas</h2>
  <div class="advice-container">
    <div class="advice-column" onclick="openModal(5)">
      <h3>5-Ingredient Wonders</h3>
      <p>Discover a collection of easy and budget-friendly recipes that require only five ingredients or less. These recipes are simple yet delicious, perfect for students with limited resources who want to prepare nutritious meals on a budget.</p>
    </div>
    <div class="advice-column" onclick="openModal(6)">
      <h3>Dorm Room Delights</h3>
      <p>Get inspired with meal planning ideas specifically tailored for students living in dormitories or small shared spaces. These recipes focus on using minimal cooking equipment, such as microwave-friendly meals, no-bake recipes, or dishes that can be made using a single portable burner.</p>
    </div>
    <div class="advice-column" onclick="openModal(7)">
      <h3>Leftover Remix</h3>
      <p>Don't let your leftovers go to waste! Explore creative recipes that transform yesterday's meal into a delicious new dish. Learn how to turn leftover rice into flavorful fried rice or repurpose roasted chicken into a mouthwatering sandwich filling.</p>
    </div>
    <div class="advice-column" onclick="openModal(8)">
      <h3>Farmers Market Challenge</h3>
      <p>Embark on a Farmers Market Challenge and discover the joys of cooking with fresh, locally sourced ingredients. Learn tips on navigating the market, selecting seasonal produce, and create a delicious meal using exclusively market-bought ingredients.</p>
    </div>
    <div class="advice-column" onclick="openModal(9)">
      <h3>Pantry Staples Makeover</h3>
      <p>Make the most of your pantry staples with versatile recipes that can be adapted to various ingredients. Discover a base recipe for a hearty grain bowl and learn how to create different combinations using canned beans, vegetables, or spices from your pantry.</p>
    </div>
    <div class="advice-column" onclick="openModal(10)">
      <h3>Freezer-Friendly Feasts</h3>
      <p>Master the art of freezer-friendly meal planning and enjoy delicious meals throughout the week. Explore recipes that can be made in bulk and frozen in individual portions for quick and convenient meals. Learn proper storage techniques and reheating instructions.</p>
    </div>
    <div class="advice-column" onclick="openModal(11)">
      <h3>International on a Budget</h3>
      <p>Embark on a culinary journey without breaking the bank. Discover affordable recipes inspired by different cultures and cuisines. Learn how to incorporate global flavors into your meals using readily available and inexpensive ingredients.</p>
    </div>
  </div>
  <div id="modal" class="modal">
    <div class="modal-content" id="modal-content"></div>
  </div>
</div>`, 

      `
<section id="cooking-tips">
  <h2>Cooking Tips and Tricks</h2>
  <div class="tip-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAg85bQ8KyYMyhteJmlYvbJFi11Bz5ZtCfjQ&usqp=CAU" alt="Meal Planning">
    <h3>One-pot meals</h3>
    <p>Explore recipes that require minimal equipment and can be cooked in a single pot or pan. This reduces the need for multiple cooking utensils and saves time on cleaning.</p>
  </div>
  <div class="tip-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_cG3vQLKto36I2_zm7ltt11-nh_En9PD2A&usqp=CAU" alt="Budget-Friendly Ingredients">
    <h3>Budget-Friendly Ingredients</h3>
    <p>Opt for affordable ingredients like rice, beans, and frozen vegetables to save money.These items are often inexpensive, versatile, and have a long shelf life. Invest in a few basic spices and herbs to add flavor to your meals. This can make even simple dishes more enjoyable without the need for expensive sauces or seasonings.</p>
  </div>
  <div class="tip-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiui9CaCEqlhD7-hYLu6IQWvq11xhRr87q7w&usqp=CAU" alt="Bulk Cooking">
    <h3>DIY snacks</h3>
    <p>Make your own snacks instead of buying pre-packaged ones. For example, bake homemade granola bars, prepare trail mix with nuts and dried fruits, or create your own popcorn flavors using kernels and spices.</p>
  </div>
  <div class="tip-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVGlG3IJOQFUdedpZ1640jMNqlMoBVWT1rg&usqp=CAU" alt="Repurpose Leftovers">
    <h3>Repurpose Leftovers</h3>
    <p>Get creative with repurposing leftovers. Turn yesterday's roasted chicken into a sandwich filling, transform cooked rice into a flavorful fried rice, or use extra veggies in omelets, stir-fries, or wraps.</p>
  </div>
</section>
`,
    // Add content for other advice sections here
  ];
  modalContent.innerHTML = adviceContent[index - 1];
  modal.style.display = 'block';
}

// Add the previous JavaScript code for closing the modal


