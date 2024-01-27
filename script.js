function calculateAge() {
    var dobInput = document.getElementById('dob').value;
    var dob = new Date(dobInput);
    var today = new Date();

    var age = today.getFullYear() - dob.getFullYear();

    // Check if birthday has occurred this year
    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your age is: ' + age + ' years';
}
