function addData() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const foods = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

    if (!firstName || !lastName || !email || !phone || !state || !country || !address || !gender || !pincode || foods.length < 2 || foods.length > 5) {
        alert('Please fill out all fields and select between 2 to 5 food items.');
        return;
    }

    const table = document.getElementById('userData');
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${state}</td>
        <td>${country}</td>
        <td>${pincode}</td>
        <td>${gender ? gender.value : ''}</td>
        <td>${foods.join(', ')}</td>
    `;

    document.getElementById('form').reset();
}