const obj = [
    {
        Task: "Meeting",
        Description: "Client Meeting",
        Duration: "00.50.43",
    },
    {
        Task: "Project-abc",
        Description: "Developing-xyz",
        Duration: "01.42.02",
    },
    {
        Task: "Personal Break",
        Description: "-",
        Duration: "00.22.15",
    },
    {
        Task: "Meeting",
        Description: "Daily Scrum",
        Duration: "00.32.28",
    },
];

// Function to display the initial content in the table
function displayInitialTable() {
    const tableBody = document.querySelector('.tbody');
    obj.forEach((work, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${work.Task}</td>
            <td>${work.Description}</td>
            <td>${work.Duration}</td>
            <td><button onclick="deleteRow(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to delete a row
function deleteRow(index) {
    obj.splice(index, 1);
    displayTable(); // Refresh table
}

// Function to add content to the array and refresh the table
function addContent() {
    let taskInput = document.getElementById("taskInput").value;
    let descriptionInput = document.getElementById("descriptionInput").value;
    let durationInput = document.getElementById("durationInput").value;

    obj.push({
        Task: taskInput,
        Description: descriptionInput,
        Duration: durationInput,
    });

    displayTable(); // Refresh table
}
//timer 

seconds = 0;
minutes = 0;
hours = 0;
isRunning = false;

function startstop() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                minutes++;
                seconds = 0;
                if (minutes >= 60) {
                    hours++;
                    minutes = 0;
                }
            }
            let formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}: ${seconds.toString().padStart(2, "0")}`;
            document.getElementById("stopwatch").innerText = formattedTime;
            document.getElementById("startstop").innerText = "Stop"
        }, 1000);
    } else {
        document.getElementById("startstop").innerText = "Start"
        clearInterval(timer);
        isRunning = false;
    }

};

//reset
function reset() {
    seconds = 0;
    hours = 0;
    minutes = 0;
    let formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    document.getElementById("stopwatch").innerText = formattedTime;
}

// Function to display the filtered content in the table
function filterWork() {
    var val = document.querySelector('.sel').value;
    var filteredObj = obj.filter(work => val === work.Task);
    displayTable(filteredObj);
}

// Function to display the table
function displayTable(data = obj) {
    const tableBody = document.querySelector('.tbody');
    tableBody.innerHTML = '';

    data.forEach((work, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${work.Task}</td>
            <td>${work.Description}</td>
            <td>${work.Duration}</td>
            <td>
            <button onclick="deleteRow(${index})">Delete</button>
            </td>

        `;
        tableBody.appendChild(row);
    });
}

// Event listener for the add button
const contain = document.getElementById("add");
contain.addEventListener("click", event => {
    event.preventDefault();
    addContent();
});

// Initial display of the table
displayInitialTable();

