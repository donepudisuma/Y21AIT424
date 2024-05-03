document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post('/register', {
            username,
            email,
            password
        });
        alert(response.data.message);
    } catch (error) {
        console.error('Error:', error.response.data.error);
        alert('Registration failed');
    }
});
