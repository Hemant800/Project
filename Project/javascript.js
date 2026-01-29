
        const loginForm = document.querySelector('form');
        
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Page ko reload hone se roko
            
            // Abhi hum bina check kiye redirect kar rahe hain
            // Real backend me hum yahan password verify karenge
            
            window.location.href = "dashboard.html"; // Dashboard par bhejo
        });