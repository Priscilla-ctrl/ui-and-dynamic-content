// Save the reference to text-field into a variable. | <input type="text">
let input = document.getElementById('txt');

// Save the reference to new-item button into a variable. | <button>ADD ITEM</button>
let button = document.getElementById('btn'); 

// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
let list = document.getElementById('list');

// Save the reference to paragraph for feedback | <p class="feedback"></p>
let feedback = document.getElementById('error');

// Start function addItem.
function addItem() {
    // Create list-item and store output in a variable.
    let item = document.createElement('li');

    // Check if user entered the value in input text-field.
    // If so:
    if (input.value) {
       // Use textContent property on created list-item
       // and assign it with the value of the text written in the text-field
       item.innerText = input.value.trim();

       // Append list item to unordered list.
       list.appendChild(item);

       // Clear a feedback-message.
       feedback.innerText = '';

       // Clear the text-field.
       input.value = '';

       // Put the cursor back to text-field  
       input.focus();

    // End if. 
    } else {
    // Otherwise:
       // Print the message nothing entered in the paragraph "feedback"
       feedback.innerText = 'You have not entered anything yet!';
    // End otherwise.
    }
// End function addItem.
}
// Register your function addItem for click event on button.
button.addEventListener('click', addItem);