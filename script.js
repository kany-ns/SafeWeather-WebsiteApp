// Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light'); // Save preference
});

// Show/Hide Sections (App-like feel)
function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

// Handling Registration
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Account created successfully! You can now login.');
});

// Handling Complaints
document.getElementById('complaintForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you. Your hazard report has been submitted to the authorities.');
});

// Handling Subscription
document.getElementById('subscribeForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Subscription successful! Check your email for weather alerts.');
});

const apiKey = "1d3157dfde962f1362a3d100078a8e10"; 
const city = "Kuala Lumpur"; 

async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        console.log(`Current Temp: ${data.main.temp}°C`);
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}
getWeather();

function askChatbot(question) {
    if(question.includes("flood")) {
        return "Warning: High risk of flood in your area!";
    } else if(question.includes("help")) {
        return "How can I assist you with the weather updates?";
    }
    return "I am sorry, I don't understand that.";
}