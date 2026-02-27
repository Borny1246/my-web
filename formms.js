const form = document.getElementById('personal_det');
const output = document.getElementById('output');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const FirstName = document.getElementById('FirstName').value;
    const Surname = document.getElementById('SName').value;
    const Email = document.getElementById('Email').value;
    const Age = document.getElementById('Age').value;
    const Quali = document.getElementById('Quali').value;


    if (FirstNameame === '') {
        alert('Name is required');
        return;
    }

    if (Age > 50) {
        alert('Youre not eligible');
        return;
    }

    if (!Email.includes('@')) {
        alert('Invalid email')
        return;
    }

    output.textContent = 'Form submitted successfully!';
    form.reset();
});