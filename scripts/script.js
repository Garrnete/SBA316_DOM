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

// Regex for description validation: letters, numbers, spaces, commas, periods, etc.
const descRegex = /^[a-zA-Z0-9\s,.!?-]{2,50}$/;

// Add Expense (with regex validation + DocumentFragment + attribute modification)
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const desc = document.getElementById("desc").value.replace(/\n/g, " ").trim();
  const amount = parseFloat(document.getElementById("amount").value);

  // ✅ Regex validation check
  if (!descRegex.test(desc)) {
    alert("❌ Invalid description. Use only letters, numbers, spaces, and punctuation (2–50 characters).");
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    alert("❌ Please enter a valid amount greater than 0.");
    return;
  }

  // Create list item inside a DocumentFragment
  const fragment = document.createDocumentFragment();
  const li = document.createElement("li");
  li.textContent = `${desc}: $${amount}`;
  fragment.appendChild(li);
  expenseList.appendChild(fragment);

  // Update total
  total += amount;
  totalEl.textContent = total;

  // Reset form
  expenseForm.reset();

  // Temporarily disable the button after submit (attribute modification)
  const submitBtn = expenseForm.querySelector("button");
  submitBtn.setAttribute("disabled", "true");
  setTimeout(() => {
    submitBtn.removeAttribute("disabled");
  }, 1500);
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

// Update progress bar
const progressBar = document.getElementById("progressBar");
let progress = Math.min((total / goal) * 100, 100); // cap at 100%
progressBar.style.width = progress + "%";

// Random Savings Tips (iterate + innerText)
const tips = [
  "Track every dollar you spend.",
  "Cook at home instead of eating out.",
  "Automate your savings transfers.",
  "Create a list for grocery shopping.",
  "Stock up on household supplies when they’re cheap.",
  "Cancel unnecessary subscriptions"
];

tipBtn.addEventListener("click", () => {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  tipEl.innerText = randomTip;
});

// BOM example: show alert if user tries to leave
window.onbeforeunload = () =>
  "Are you sure you want to leave? Your progress may be lost.";
