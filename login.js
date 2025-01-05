
const validCredentials = {
    username: "hans",
    password: "hans"
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

 
    if (username === validCredentials.username && password === validCredentials.password) {
        alert("Login successful!");
        window.location.href = "index.html"; 
    } else {
        document.getElementById("errorMessage").textContent = "Invalid username or password. Please try again.";
    }
});
