// script.js

// Function to update time
function updateTime() {
    const timeZones = {
        "time-france": "Europe/Paris",
        "time-usa": "America/New_York",
        "time-japan": "Asia/Tokyo",
        "time-china": "Asia/Shanghai",
        "time-brazil": "America/Sao_Paulo"
    };

    for (let id in timeZones) {
        let now = new Date();
        let timeZone = timeZones[id];
        let localTime = now.toLocaleTimeString("fr-FR", { timeZone: timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        document.getElementById(id).innerText = localTime;
    }
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();



// Modal for login
var loginModal = document.getElementById("loginModal");
var loginBtn = document.getElementById("employee-space");
var closeLoginModal = document.getElementById("closeLoginModal");

loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

closeLoginModal.onclick = function() {
    loginModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

// Toggle office list visibility
var officeBtn = document.getElementById("office-locations");
var officeList = document.getElementById("officeList");
var closeOfficeList = document.getElementById("closeOfficeList");

officeBtn.onclick = function() {
    officeList.style.display = "block";
}

closeOfficeList.onclick = function() {
    officeList.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == officeList) {
        officeList.style.display = "none";
    }
}
document.querySelector("#loginModal form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Placeholder logic for user authentication
    if (username === "admin" && password === "password") {
        // Successful login
        window.location.href = "espacecollaboratif.html";
    } else {
        alert("Identifiant ou mot de passe incorrect");
    }
});

    
        window.open('espacecollaboratif.html', '_blank');
        loginModal.style.display = 'none'; // Optionally close the modal
    

