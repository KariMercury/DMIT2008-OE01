import expenses from './expense-data.js';

// custom components
import './components/ExpenseSearch.js';
import './components/ExpenseForm.js';
import './components/ExpenseList.js';
// ExpenseCard is only used/imported by ExpenseList, not here

// grab our DOM elements
const form   = document.querySelector('expense-form');
const search = document.querySelector('expense-search');
const list   = document.querySelector('expense-list');

// function addExpense({title, category, date, amount}) {
//   const maxId = expenses.reduce(
//     (highest, expense) => Math.max(highest, expense.id),
//     0
//   );

//   expenses.push({
//     id: maxId + 1,  // tada!
//     title,
//     category,
//     date,
//     amount
//   });
// }

// function updateExpense(id, fields) {
//   const expense = expenses.find((expense) => expense.id === id);
//   if (expense) Object.assign(expense, fields); 
// }

// function deleteExpense(id) {
//   const index = expenses.findIndex((expense) => expense.id === id);
//   if (index !== -1) expenses.splice(index, 1) 
// }

// function searchExpenses(query) {
//   const q = query.toLowerCase();
//   return expenses.filter(
//     (expense) => expense.title.toLowerCase().includes(q)
//   );
// }

// function handleFormSubmit(event) {
//   event.preventDefault();
//   const formFields = readFormData();

//   if (!validateFormData(formFields)) {
//     alert("Please fill in all fields correctly.");
//     return;
//   }
//   // we'll need to include this somehow:
//   // if (submitButton.innerText === "Add Expense") {
//   //   addExpense(formFields);
//   // } else {
//   //   const id = parseInt(document.getElementById("expense-id").value);
//   //   updateExpense(id, formFields);
//   // }

//   // renderExpenses(expenses);
//   resetForm();
// }

// function handleSearch(event) {
//   const filteredExpenses = searchExpenses(event.target.value);
//   renderExpenses(filteredExpenses);
// }

// function handleExpenseContainerClick(event) {
//   const id = parseInt(event.target.dataset.id);

//   if (event.target.classList.contains("delete-btn")) {
//     deleteExpense(id);
//     renderExpenses(expenses);
//   } else if (event.target.classList.contains("edit-btn")) {
//     const expense = expenses.find((e) => e.id === id);
//     if (expense) populateForm(expense);
//   }
// }


// expenseContainer.addEventListener("click", handleExpenseContainerClick);
document.addEventListener(
  'expense-delete',
  (event) => {
    const expense = expenses.findIndex((expense) => expense.id === id);
    if(index !== -1) expenses.splice(index, 1);
    // this is just logic jacked from deleteExpense helpeer function 
    // the only thins i need to do is change the data in the expnse container
      list.expenses = [...expenses];

  }
)

// this is like "render only" we want this to be stable mable and not influence by others. no spaghetti sauce in the brownie mixture
document.addEventListener('DOMContentLoaded', () => {
  list.expenses = [...expenses];
});
