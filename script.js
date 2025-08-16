// Add EmailJS SDK script in your HTML before this script runs
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
// <script>emailjs.init('YOUR_USER_ID');</script>

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form
    const name = event.target.user_name.value;
    const email = event.target.user_email.value;

    // Prepare the email data
    const templateParams = {
        user_name: name,
        user_email: email
    };

    // Send the email via EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            alert('Thank you for reaching out! We will get back to you soon.');
        }, function(error) {
            alert('There was an error sending your message. Please try again later.');
        });
});
