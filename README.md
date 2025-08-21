# 💰 Smart Budgeting 💰

This is a simple **budgeting and saving money web application** built as part of the SBA 316: Document Object Model (DOM) assessment.  
It helps users **set savings goals, track expenses, and get random money-saving tips**.  

---

## 💲 Features
- Enter a savings goal and check if you are under/over your limit  
- Random **money-saving tips** at the click of a button   
- Add expenses with a description and amount  
- Automatic calculation of **total expenses**  
- Form validation (both **HTML attributes** and **JavaScript event validation**)  
- Uses **DOM methods** (`createElement`, `appendChild`, `querySelector`, etc.)  
- Includes **event listeners** for form submission and button clicks  
- Uses **BOM** (`window.onbeforeunload`) to warn if the user leaves the page  
- Regex validation on description input (`/^[a-zA-Z0-9\s,.!?-]{2,50}$/`)

---

## 🛠️ Technologies
- **HTML5** for structure  
- **CSS3** for styling  
- **JavaScript (ES6)** for DOM/BOM manipulation and interactivity 

Reflection
1. What could you have done differently during the planning stages of your project to make the execution easier?
If I had created a simple flow chart or wireframe, I would have had a clearer roadmap for which elements needed IDs, which parts would be manipulated with JavaScript, and how the form validation should flow.

2. Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?
The regex validation was the most challenging because it took extra time to test and refine. In future projects, preparing sample test cases and practicing regex patterns beforehand would make it easier to implement.

3. What would you add to, or change about your application if given more time?
If given more time, I would add income tracking alongside expenses, include visual charts to show spending trends.

4. Use this space to make notes for your future self about anything that you think is important to remember about this process, or that may aid you when attempting something similar again:
Plan the structure and required DOM interactions before coding.
