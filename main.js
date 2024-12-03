// Function to load HTML content and add event listeners
function loadHTMLContent(file, targetSelector) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error("Failed to load HTML file");
            return response.text();
        })
        .then(data => {
            const target = document.querySelector(targetSelector);
            target.innerHTML = data;
 // Trigger an event when the content is added
 const contentAddedEvent = new CustomEvent("contentAdded", {
    detail: { message: "HTML content loaded", file },
});
target.dispatchEvent(contentAddedEvent);

            // Add event listeners to the dynamically loaded content
            const clickButton = document.getElementById('click');
            if (clickButton) {
                clickButton.addEventListener('click', () => {
                    console.log('Hi, I am from homepage event');
            
                });
            }
        })
        .catch(error => console.error("Error loading HTML:", error));
}
/// Function to update the circle fill and percentage text
function updateCircleFill(percentage) {
    const circle = document.querySelector(".circle");
    const circlePercentage = document.querySelector(".circle-percentage");

    // Check if elements exist in the DOM before trying to update
    if (!circle) {
        console.error("Circle element not found in the DOM");
        return;
    }

    if (!circlePercentage) {
        console.error("Circle Percentage element not found in the DOM");
        return;
    }

    // Update the circle's background
    // circle.style.background = `conic-gradient(#4caf50 ${percentage}%, #d3d3d3 0)`;

    // Update the percentage text
    // circlePercentage.style.fontSize = '11px';
    // circlePercentage.style.padding = '9px';
    circlePercentage.innerHTML = `${percentage}%`;
}

// Listen for the custom 'contentAdded' event to trigger updates when the content is loaded
document.querySelector('.content').addEventListener('contentAdded', (event) => {
    console.log(event.detail.message); // Logs "HTML content loaded"

    // Initial percentage value
    let percentage = 70;
    updateCircleFill(percentage);

    // Example: Update the circle to 90% after 2 seconds
    // setTimeout(() => {
    //     percentage = 90; // Change percentage dynamically
    //     updateCircleFill(percentage);
    // }, 2000);
});

// Load content on window load
window.onload = function () {
    loadHTMLContent('homePage.html', '.content');
};