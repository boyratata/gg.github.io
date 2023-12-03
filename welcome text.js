document.addEventListener("DOMContentLoaded", function() {
    // Get the notification element
    var notification = document.createElement('div');
    notification.className = 'notification';
    notification.id = 'notification';
    notification.innerHTML = 'welcome to my about/bio';

    // Append the notification to the body
    document.body.appendChild(notification);

    // Show the notification
    notification.classList.add('show');

    // Optional: Close the notification after a few seconds
    setTimeout(function() {
        notification.classList.remove('show');
    }, 5000); // Adjust the time as needed
});
