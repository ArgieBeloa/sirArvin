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
             


            
               /* start of schedule and data add*/

// table tableBody CSS
const tableBody = document.getElementById('studentScheduleDataId');

// table tableBody CSS
const table = document.querySelector('.student_schedule_event_gradeStatues_container .schedule_Container table');

// Set the styles using JavaScript
table.style.fontSize = "11px";
table.style.height = "60%";  // Set a fixed height for the table
table.style.borderCollapse = "collapse";

const scheduleData = [
    { time: '8:00 AM', day: 'Monday', subject: 'Math', teacher: 'Mr. Smith', room: '101' },
    { time: '9:00 AM', day: 'Tuesday', subject: 'Science', teacher: 'Ms. Jones', room: '102' },
    { time: '10:00 AM', day: 'Wednesday', subject: 'History', teacher: 'Mr. Brown', room: '103' },
    { time: '11:00 AM', day: 'Thursday', subject: 'English', teacher: 'Ms. Green', room: '104' },
    { time: '12:00 PM', day: 'Friday', subject: 'Physics', teacher: 'Dr. White', room: '105' },
    { time: '1:00 PM', day: 'Monday', subject: 'Chemistry', teacher: 'Dr. Blue', room: '106' },
    { time: '2:00 PM', day: 'Tuesday', subject: 'Biology', teacher: 'Mr. Red', room: '107' },
    { time: '3:00 PM', day: 'Wednesday', subject: 'Geography', teacher: 'Ms. Yellow', room: '108' }
];

// Set number of rows per page for normal window size
let currentIndex = 1;
const rowsPerPage = 2; // Set number of rows per page

// button next
const buttonIdNext = document.getElementById('nextButtonClassScheduleId');


// Function to display rows based on the current index
function displayRows() {
    // Get the next set of rows to display
    const rowsToDisplay = scheduleData.slice(currentIndex, currentIndex + rowsPerPage);

    // If there are no more rows to display, return early (no need to display anything)
    if (rowsToDisplay.length === 0) {
        buttonIdNext.style.display = 'none';  // Hide button when all rows are displayed
        return;
    }

    // Clear the existing rows
    tableBody.innerHTML = '';

    // Loop through the data and create rows
    rowsToDisplay.forEach(row => {
        const tr = document.createElement('tr');
        tr.style.fontSize = "8px";
        tr.innerHTML = `
            <td>${row.time}</td>
            <td>${row.day}</td>
            <td>${row.subject}</td>
            <td>${row.teacher}</td>
            <td>${row.room}</td>
        `;
        tableBody.appendChild(tr);
    });

    // Update the current index for the next batch of rows
    currentIndex += rowsPerPage;

    // If there are no more rows to display, hide the "Next" button
    if (currentIndex >= scheduleData.length) {
        buttonIdNext.style.display = 'none';  // Hide button when all rows are displayed
   
    
    } else {
       
       
        buttonIdNext.style.display = 'block';
      
    }
}

// Function to check window size and update display behavior
function checkWindowSize() {
    const windowWidth = window.innerWidth;

    // If the window width is 768px or less (smartphone size), show only 3 rows and provide pagination
    if (windowWidth < 425) {
        buttonIdNext.style.display = 'block'; // Show the Next button for smartphones
        tableBody.innerHTML = ''; // Clear current table content
        scheduleData.slice(0, 2).forEach(row => {  // Display only the first 3 rows initially
            const tr = document.createElement('tr');
            tr.style.fontSize = "8px";
            tr.innerHTML = `
                <td>${row.time}</td>
                <td>${row.day}</td>
                <td>${row.subject}</td>
                <td>${row.teacher}</td>
                <td>${row.room}</td>
            `;
            tableBody.appendChild(tr);
        });

        // tablet
    } else  if (windowWidth > 425 && windowWidth < 1024) {
        // On larger screens (tablet and above), display all rows and hide the Next button
        tableBody.innerHTML = ''; // Clear current table content
    
        scheduleData.forEach(row => {
            const tr = document.createElement('tr');
            tr.style.fontSize = "11px";
            tr.innerHTML = `
                <td>${row.time}</td>
                <td>${row.day}</td>
                <td>${row.subject}</td>
                <td>${row.teacher}</td>
                <td>${row.room}</td>
            `;
            tableBody.appendChild(tr);
        });
        buttonIdNext.style.display = 'none'; // Hide the Next button for tablet and desktop
        
        // laptop
    }else{
        tableBody.innerHTML = ''; // Clear current table content
    
        scheduleData.forEach(row => {
            const tr = document.createElement('tr');
            tr.style.fontSize = "15px";
            tr.innerHTML = `
                <td>${row.time}</td>
                <td>${row.day}</td>
                <td>${row.subject}</td>
                <td>${row.teacher}</td>
                <td>${row.room}</td>
            `;
            tableBody.appendChild(tr);
        });

        

        buttonIdNext.style.display = 'none'; // Hide the Next button for tablet and desktop
    }
}

// Call checkWindowSize initially to determine the display behavior
checkWindowSize();

// Add event listener for window resize to adjust table display on resize
window.addEventListener('resize', checkWindowSize);

// button next event

buttonIdNext.addEventListener('click', () => {
    displayRows();
});

/* end of schedule and data add*/






    /* start of student  event and data add */
      
        // id 
        const tbodyEvents = document.getElementById('studentEventDataId')
        const windowWidth = window.innerWidth;
        // example Data 
        const studentUpcomingEvents = [
            {Title: "Caprisaa", Date: "Decemeber 9-13 2024"},
            {Title: "Christmas Party", Date: "Decemeber 16 2024"}
        
        ]

        //  smartphone
       
      
            
        
        // add to tbodyEvents
        tbodyEvents.innerHTML = ''; // Clear current table content
    
        studentUpcomingEvents.forEach(row => {
            const tr = document.createElement('tr');

          
       
            tr.innerHTML = `

                <td>${row.Title}</td>
                <td>${row.Date}</td>

            `;
            tbodyEvents.appendChild(tr);
        });



















           
      /* end of student  event and data add */
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

