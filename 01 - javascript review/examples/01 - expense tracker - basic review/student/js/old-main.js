// 1. import the data from the file (in lieu of e.g. a database / REST API)
import expenses from './expense-data.js';

// 2. grab relevant DOM elements
const expenseContainer = document.getElementById('expense-container');
const searchBox = document.getElementById('searchbox');
const expenseForm = document.getElementById('expense-form-add');
const submitButton = document.getElementById('submitter');

// 3. render out data into a grid of cards //select the element
function renderExpenses(expenseData) {
  // first, clear out existing HTML for the container (because we're about to re-render it)
  expenseContainer.innerHTML = "";

  // then, take our array of data, and render out a card for each one
  // for a given expense, add a new card containing that data to the expenseContainer's inner HTML
  expenseData.forEach( //grab all the stuff from the expense data and += take what was there and add to it
    (expense) => {
      expenseContainer.innerHTML += `
      <div class="card" id="${expense.id}">
        <div class="header">
          <div>
            <div class="title">${expense.title}</div>
            <div class="meta category">${expense.category}</div>
          </div>
          <div class="amount">${expense.amount}</div>
        </div>
        <div class="meta date">${expense.date}</div>
        <div class="actions">
          <button class="edit-btn" id="${expense.id}">Edit</button>
          <button class="delete-btn" id="${expense.id}">Delete</button>
        </div>
      </div>
    `
    }
  );
}

// 4. call the function to actually do the render
renderExpenses(expenses);

// 5. [skeleton]: form submission:
//we are listening for the submit event on the form, and when it happens, we will call the submitExpense function
//this will take the data from the form, and add it to our array of expenses, and then re-render the expenses to show the new one
// function submitExpense() {
//   // when handling form submission, we want to prevent the default behavior of the form (which is to refresh the page)
//   event.preventDefault();
// }
// expenseForm.addEventListener("submit", submitExpense);
//LETS WRITE INLInE first then clean it up

expenseForm.addEventListener(
    "submit", // Argument 1: the event we want to listen for (in this case, the "submit" event on the form)...click --> submit = "these are the html built in events that we can listen for"
    
     function(event) { // Argument 2: the function we want to run when that event happens (in this case, an anonymous function that takes the event as an argument)
                       // this function will run whenever the form is submitted, and the event object will be passed to it as an argument (this contains information about the event that just happened, like which element was interacted with, etc.)

        console.log(event); // log the event object to the console (this contains information about the event that just happened, like which element was interacted with, etc.)
                            // we can use this event object to get information about the form submission, like the values of the form fields, etc. (we will do this in a later step)

        event.preventDefault(); // prevent the default behavior of the form (which is to refresh the page) "dont refresh the page when the form is submitted or post data to a server"
                    // lets grab all our elements/values from the form, and log them to the console (we will use these values to create a new expense object and add it to our array of expenses in a later step)
      // THESE VARIABLES ARE ONLY AVAILABLE INSIDE THIS FUNCTION (BECAUSE THEY ARE DECLARED WITHIN THE FUNCTION), SO WE CAN'T USE THEM OUTSIDE OF THIS FUNCTION (LIKE IN THE RENDER FUNCTION, OR ANY OTHER FUNCTION) -- THIS IS CALLED "SCOPE" (THE SCOPE OF THESE VARIABLES IS LIMITED TO THIS FUNCTION)

      //---------Validate these inputs before we create the new expense object and add it to our array of expenses (we will do this in a later step)----------------
      // we want to make sure that the title is not empty, the amount is a positive number, the date is a valid date, and the category is not empty (we will write out this validation logic in a later step, but for now we will just log the values to the console to make sure we are grabbing them correctly from the form fields)
        const title = document.getElementById("title").value; // grab the value of the title input field 
        console.log(title); // log the title to the console

        const amount = document.getElementById("amount").value; // grab the value of the amount input field
        console.log(amount); // log the amount to the console

        const date = document.getElementById("date").value; // grab the value of the date input field
        console.log(date); // log the date to the console

        const category = document.getElementById("category").value; // grab the value of the category select field
        console.log(category); // log the category to the console

      // make a new expense if all fields are present and amount is a number  
      if (submitButton.innerText === "Add Expense") {
      if (title && date && category && !isNaN(amount)) { //isNaN = is not a number (this checks if the amount is not a number, and returns true if it is not a number, and false if it is a number) 

      // lets write out our logic 'naively', and beef it up later (this is a good strategy for writing code -- get something working first, then go back and clean it up and make it more efficient, etc.)
        // we want to create a new expense object with the data from the form, and add it to our array of expenses, and then re-render the expenses to show the new one
        const newExpense = { // create a new expense object with the data from the form 
          //if object name and property name are the same we can just write the name once (e.g. title: title --> title,)
           // what ID do i give it? the array od data shows a numerical id
          id: expenses.length + 1, // this is a simple way to generate a new ID for the new expense (it takes the length of the expenses array, and adds 1 to it -- this works because the IDs in our data are sequential and start at 1, so the next ID will always be the length of the array + 1)
          title,
          amount,
          date,
          category,
        };

            
              console.log(newExpense); // log the new expense object to the console

        // now we want to add this new expense object to our array of expenses, and then re-render the expenses to show the new one
        expenses.push(newExpense); // add the new expense object to the end of the expenses array
        console.log(expenses); // log the updated expenses array to the console
        // a change in data --> ui should re-render (with vanilla JS, we have to to trigger that manually -- in frameworks like React, this happens automatically when we update state)

        //then we need to re-render the expenses to show the new one
        renderExpenses(expenses); // call the renderExpenses function with the updated expenses array to re-render the expenses and show the new one

        // after we submit the form we want the form to reset/clear out the values in the form fields, so that it's ready for the next expense to be added
        expenseForm.reset(); // reset the form fields to their default values (this will clear out the values in the form fields after the form is submitted)
        // this has to happen after we grab the values from the form fields (because if we reset the form before we grab the values, then we will just be grabbing the default values from the form fields, which is not what we want)
        //you could also write this .reset(); since the code scopefor the listener is attahced to expsenseform
        // you could also write this.reset() since the code scope for this listener is attached to expenseForm
        // as the parent object — "this" just refers to whatever the parent object for a block of code is
      }
      } else {
      const expenseId = parseInt(document.getElementById("expense-id").value);
      const expenseToEdit = expenses.find(     // find the actual object (we need what's in it, as opposed to simply deleting)
        (expense) => expense.id === expenseId  // we still want a matching object based on ID
      );
      console.log(expenseToEdit);
      // note: when changing/reading data, I'm always looking at the data source, not HTML values
      if (expenseToEdit) {
        // I am directly editing the element in that array in-place (I don't need to re-add it to the array)
        expenseToEdit.title = title;
        expenseToEdit.amount = amount;
        expenseToEdit.date = date;
        expenseToEdit.category = category;

        // we changed data -> ui should re-render
        renderExpenses(expenses);

        // QOL / cleanup
        submitButton.innerText = "Add Expense";
        expenseForm.reset();
      }
    }
      
     });

     /* 6. handle search filtration:
      - the searchbox DOM element as an ob
     */

      searchBox.addEventListener(
        "input", // arg 1: Event type /name (in this case, "input" which fires whenever the value of the input field changes -- this is better than "change" for a search box, because "change" only fires when the input field loses focus, which is not ideal for a search box)
        function(event) { //arg 2: callback function that fires when event is emited 
          const searchTerm = event.target.value.target.toLowerCase(); // 
          const filteredExpenses = expenses.filter (
            (expense) => expense.title.toLowerCase().includes(searchTerm) /* I want to see the object that has the search term in its title */
          );
          renderExpenses(filteredExpenses); // then I want to re-render the filtered expenses...not the original array of expenses  
        }
      );

      //7. Lets handle editing and deleting expenses
      //  - we have one listener for the whole container 
      //  - we will need to attach the listener to the card elements  
      //  - in assn, you attack the whole conainer that holds the cards ... add an event listener.... only one click listener for the whole container.. we can narrow it down later with what was specifically clicked. 

      expenseContainer.addEventListener(
        "click",
        function(event) {
          // event.target will be exactly what got clicked, not just always the container itself ....we want to know the ID on that card
          console.log(event.target.classlist); // this is how we see the class of the element that was clicked (e.g. "edit-btn" or "delete-btn") 
          //event.target will be *exactly* what got clicked within the expense contianer, not just aslways the ontainer itself.
          if (event.target.classlist.contains("delete-btn")) { 
            // 1. get the ID of thhe card / data element that got clicked 
            

             const expenseId = parseInt(event.target.id); 
             //2. now I have to figure out where to find where in the expenses array this object is that I want to delete (I can use the ID to find it, since the ID is unique for each expense object)
             const expenseIndex = expenses.findIndex( /// so i am looking inside the exxpenses array and i want to find the index that matches the variable that i got from the click.. get me the index of the expence where the expense ID matches the ID that I got from the clicked 
              (expense) => expense.id === expenseId
          ); 

            //3. once we have the index we can delte whats at the index in the array:
            if (expenseIndex !== -1) { // if the index is not -1 (which means we found a matching expense in the array), then we can delete it
              expenses.splice(expenseIndex, 1); // "starting at {expenseIndex} this will remove 1 element from the expenses array at the index of expenseIndex (which is the expense that we want to delete)
              renderExpenses(expenses); // then we need to re-render the expenses to show the updated list without the deleted expense
            }

          } else if (event.target.classlist.contains("edit-btn")) { // if the element that was clicked has the class "edit-btn", then we want to edit the expense with the corresponding ID
             // populate the form inputs w/ data from the element/card
      // somehow figure out a way to save back to that element/card instead of creating a new one
      // 1+2. get ID of card & find its index
            const expenseId = parseInt(event.target.id);
            const expenseToEdit = expense.find( // find the actual object (we need what's in it, as opposed to simply deleting)
              (expense) => expense.id === expenseId // we still want a matching object based on ID
            );
            console.log(expenseToEdit);
            // 3. populate the form inputs with data fronm the expense item
            if (expenseToEdit) {
              document.getElementById("title").value = expenseToEdit.title;
              document.getElementById("amount").value = expenseToEdit.amount;
              document.getElementById("date").value = expenseToEdit.date;
              document.getElementById("category").value = expenseToEdit.category;
              document.getElementById("expense-id").value = expenseToEdit.id;

              //bonus QOL: Change button text deending on what we're doing
              submitButton.innerText = "Save";
            }
          }
        }
      );

      //how do we facilitate edit / deleting 
      // user end values are not a good way to grab the DOM
      //we need to select the edit button and its ID
//       why not pull input data from HTML output?
        // single source of truth / decoupling
        // tampering/security
        // generally, you always want data -> ui