// Change image icon click
// Button id 
const homePageButton = document.getElementById('homePageButtonId')
const scheduleButton = document.getElementById('scheduleButtonId')
const remaindersButton = document.getElementById('remaindersButtonId')
const goalsButton = document.getElementById('goalsButtonId')
const settingsButton = document.getElementById('settingsButtonId')

// image status id
const imgElementHomePage = document.querySelector('#homePageButtonId img');
const imgElementSchedule = document.querySelector('#scheduleButtonId img');
const imgElementRemainders = document.querySelector('#remaindersButtonId img');
const imgElementGoals = document.querySelector('#goalsButtonId img');
// const imgElementSettings = document.querySelector('#settingsButtonId img');



// for changing content dashboard
const contentDivSelector = '.content';




// click homePage button
homePageButton.addEventListener('click',()=> {
   
    // Load HTML
    loadHTMLContent('homePage.html', contentDivSelector);
   
    imgElementHomePage.src = 'images/home.png'
    imgElementSchedule.src = 'images/schedule (1).png'
    imgElementRemainders.scr = 'images/sticky-note (1).png'
    imgElementGoals.src = 'images/goal (1).png'
    // imgElementSettings.src = 'images/logout (1).png'
})


// click schedule button
scheduleButton.addEventListener('click', function () {

    // change icon homePage not fill image
      imgElementHomePage.src = 'images/home (1).png'
      imgElementRemainders.src = 'images/sticky-note (1).png'
      imgElementGoals.src = 'images/goal (1).png'
    //   imgElementSettings.src = 'images/logout (1).png'

    //   schedule fill icon
      imgElementSchedule.src = 'images/schedule.png'
    // Load HTML
    // loadHTMLContent('schedule.html', contentDivSelector);
     
 
});


// events remaindersButton

remaindersButton.addEventListener('click', ()=>{
      
    //change not fill icon rest
    imgElementHomePage.src = 'images/home (1).png'
    imgElementSchedule.src = 'images/schedule (1).png'
    imgElementGoals.src = 'images/goal (1).png'
    // imgElementSettings.src = 'images/logout (1).png'

      // remainders fill icon
    imgElementRemainders.src = 'images/sticky-note.png'
})

// events goals Button
goalsButton.addEventListener('click', ()=>{

    //changes all icon to not fill
    imgElementHomePage.src = 'images/home (1).png'
    imgElementSchedule.src = 'images/schedule (1).png'
    imgElementRemainders.src = 'images/sticky-note (1).png'
    // imgElementSettings.src = 'images/logout (1).png'

    // fill Goal icon
    imgElementGoals.src = 'images/goal.png'
})



















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