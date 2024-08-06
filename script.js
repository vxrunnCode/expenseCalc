// script.js

document.getElementById('expense-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get form values
    const product = document.getElementById('product').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    
    // Calculate the total for this expense
    const totalAmount = amount * quantity;
    
    // Add expense to list
    addExpense(product, amount, quantity, totalAmount);
    
    // Update total expense
    updateTotal(totalAmount);
    
    // Clear form
    document.getElementById('product').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('quantity').value = '';
});

function addExpense(product, amount, quantity, totalAmount) {
    const ul = document.getElementById('expenses');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${product} - $${amount.toFixed(2)} x ${quantity} = $${totalAmount.toFixed(2)}`));
    ul.appendChild(li);
}

function updateTotal(totalAmount) {
    const totalElement = document.getElementById('total');
    let currentTotal = parseFloat(totalElement.textContent);
    currentTotal += totalAmount;
    totalElement.textContent = currentTotal.toFixed(2);
}
