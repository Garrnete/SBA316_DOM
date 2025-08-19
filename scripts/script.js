// Updated menu data structure with subLinks

// Cache elements
const expenseForm = document.getElementById("expenseForm");
const expenseList = document.querySelector("#expenseList");
const totalEl = document.getElementById("total");
const goalInput = document.getElementById("goal");
const goalStatus = document.getElementById("goalStatus");
const checkGoalBtn = document.getElementById("checkGoal");
const tipBtn = document.getElementById("tipBtn");
const tipEl = document.getElementById("tip");

let total = 0;

// Add Expense (with validation + createElement + appendChild)
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const desc = document.getElementById("desc").value;
  const amount = parseFloat(document.getElementById("amount").value);

  const li = document.createElement("li");
  li.textContent = `${desc}: $${amount}`;
  expenseList.appendChild(li);

  total += amount;
  totalEl.textContent = total;

  // Reset form
  expenseForm.reset();
});

// Savings Goal Check (modify text + classList)
checkGoalBtn.addEventListener("click", () => {
  const goal = parseFloat(goalInput.value);
  if (isNaN(goal) || goal <= 0) {
    goalStatus.textContent = "Please enter a valid goal!";
    goalStatus.classList.add("highlight");
    return;
  }
  if (total < goal) {
    goalStatus.textContent = `Good! You are under your goal by $${goal - total}.`;
    goalStatus.classList.remove("highlight");
  } else {
    goalStatus.textContent = `⚠️ Over your goal by $${total - goal}.`;
    goalStatus.classList.add("highlight");
  }
});

// Random Savings Tips (iterate + innerText)
const tips = [
  "Track every dollar you spend.",
  "Cook at home instead of eating out.",
  "Automate your savings transfers.",
  "Create a list for grocery shopping.",
  "Stock up on household supplies when they’re cheap.",
  "Cancel unnecessary subscriptions",
];

tipBtn.addEventListener("click", () => {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  tipEl.innerText = randomTip;
});

// BOM example: show alert if user tries to leave
window.onbeforeunload = () =>
  "Are you sure you want to leave? Your progress may be lost.";
