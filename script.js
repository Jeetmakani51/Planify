// Global data
let tasks = [];       // for todos
let reminders = [];   // for reminders

const featureContent = {
    Home: "<h2>Home</h2><p>Welcome to Vibe Code!</p>",
    "To-Do": `
        <h2>To-Do</h2>
        <form id="todo-form">
            <input type="text" id="todo-input" placeholder="Add a new task..." required>
            <input type="date" id="todo-deadline">
            <input type="time" id="todo-reminder">
            <select id="todo-priority">
                <option value="low">Low</option>
                <option value="medium" selected>Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit">Add</button>
        </form>
        <ul id="todo-list"></ul>
    `,
     Pomodoro: "<h2>Pomodoro</h2><p>Pomodoro Timer</p>",
     Notes: "<h2>Notes</h2><p>Your notes go here.</p>",
     Habits: "<h2>Habits</h2><p>Track your habits.</p>",
     Reminders: "<h2>Reminders</h2><p>View your Reminders.</p>",
     Setting: "<h2>Setting</h2><p>Adjust your preferences.</p>",

    Pomodoro: `
    <section id="pomodoro-section">
    <h2>⏳ Pomodoro Timer</h2>
    <div id="pomodoro-timer">25:00</div>

    <div id="pomodoro-controls">
        <button id="start-timer">▶ Start</button>
        <button id="pause-timer">⏸ Pause</button>
        <button id="reset-timer">⏹ Reset</button>
    </div>

    <div id="pomodoro-status">Work Time</div>

    <div id="xp-container">
        <div id="xp-bar"></div>
    </div>
    <p id="xp-text">Level 1 - XP: 0 / 100</p>
</section>
`,
Notes: `
    <h2>Notes</h2>
    <form id="pdf-upload-form">
        <label for="pdf-input" style="font-weight:bold;">Upload PDF:</label>
        <input type="file" id="pdf-input" accept="application/pdf">
    </form>
    <div id="notes-gallery" style="display:flex;flex-wrap:wrap;gap:16px;margin-top:16px;">
        <!-- PDF thumbnails will be displayed here -->
`,
    Habits: `
        <h2>Habits</h2>
        <form id="habit-form">
            <input type="text" id="habit-name" placeholder="Habit name" required>
            <select id="habit-frequency">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
            </select>
            <button type="submit">Add Habit</button>
        </form>
        <div id="habit-list"></div>

    `,  
    Reminders: `
      <section id="reminders-section">
          <h2>⏰ Reminders</h2>
          <form id="reminder-form">
              <input type="text" id="reminder-text" placeholder="Reminder text" required>
              <input type="datetime-local" id="reminder-time" required>
              <button type="submit">Add Reminder</button>
          </form>
          <ul id="reminder-list"></ul>
      </section>
    `,
    Home : `
        <section id="home" class="dashboard">
  <h2 id="greeting">Good Morning!</h2>

  <!-- Quick Stats -->
  <div class="stats">
    <div class="stat-card">
      <h3>✅ Tasks</h3>
      <p id="tasks-completed">0/0</p>
    </div>
    <div class="stat-card">
      <h3>⏳ Pomodoro</h3>
      <p id="pomodoro-done">0</p>
    </div>
    <div class="stat-card">
      <h3>🔥 Streak</h3>
      <p id="habit-streak">0 days</p>
    </div>
    <div class="stat-card">
      <h3>⏰ Next Reminder</h3>
      <p id="next-reminder">No reminders</p>
    </div>
  </div>

  <!-- Motivational Quote -->
  <div class="quote-box">
    <blockquote id="daily-quote">"Stay focused, stay strong."</blockquote>
  </div>

  
</section>
    `,
    Setting: `
        <section id="settings" class="dashboard">
  <h2>⚙️ Settings</h2>

  <!-- Theme Selector -->
  <div class="setting-item">
    <label for="theme-select">🎨 Theme</label>
    <select id="theme-select">
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  </div>

  <!-- Default Pomodoro Times -->
  <div class="setting-item">
    <label for="pomodoro-time">🍅 Default Work Time (minutes)</label>
    <input type="number" id="pomodoro-time" min="1" max="180">
  </div>

  <div class="setting-item">
    <label for="break-time">☕ Default Break Time (minutes)</label>
    <input type="number" id="break-time" min="1" max="60">
  </div>

  <!-- Reset Button -->
  <div class="setting-item">
    <button id="reset-data-btn">⚠️ Reset All Data</button>
  </div>
</section>
    `,
};


/*document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll('.Sidebar nav ul li');
    const mainContent = document.querySelector('.main-content');

    sidebarItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all
            sidebarItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked
            this.classList.add('active');
            // Get feature name (remove icon text)
            const feature = this.textContent.trim();
            // Set content
            if (mainContent && featureContent[feature]) {
                mainContent.innerHTML = featureContent[feature];
            }
            // ...inside your click handler...
            if (mainContent && featureContent[feature]) {
                mainContent.innerHTML = featureContent[feature];
                if (feature === "To-Do") setupTodo();
            }
            
        });
    });
});*/

document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll('.Sidebar nav ul li');
    const mainContent = document.querySelector('.main-content');

    function showFeature(feature) {
        if (mainContent && featureContent[feature]) {
            mainContent.innerHTML = featureContent[feature];
            if (feature === "To-Do") setupTodo();
        }
        if (feature === "Pomodoro") {
                mainContent.innerHTML = featureContent[feature];
                setupPomodoro();
            }
        if (feature === "Notes") {
               mainContent.innerHTML = featureContent[feature];
               setupNotes();
            }
        if (feature === "Habits") {
                mainContent.innerHTML = featureContent[feature];
                setupHabits();
            }
        if (feature === "Reminders"){
              mainContent.innerHTML = featureContent[feature];
              setupReminders();
            }
        if (feature === "Home") {
                mainContent.innerHTML = featureContent[feature];
                setupHome();
            }
        if (feature === "Setting") {
                mainContent.innerHTML = featureContent[feature];
                setupSettings();
            }
        } 

    sidebarItems.forEach(item => {
        item.addEventListener('click', function () {
            sidebarItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            const feature = this.textContent.trim();
            showFeature(feature);
        });
    });

    // Show Home by default
    showFeature("Home");
});


/*function setupTodo() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const deadline = document.getElementById('todo-deadline');
    const reminder = document.getElementById('todo-reminder');
    const priority = document.getElementById('todo-priority');
    const list = document.getElementById('todo-list');

    let todos = JSON.parse(localStorage.getItem('todos') || "[]");

    function renderTodos() {
        list.innerHTML = '';
        todos.forEach((todo, idx) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="todo-task ${todo.priority}">${todo.text}</span>
                <span class="todo-meta">
                    ${todo.deadline ? `<span class="deadline">🗓️ ${todo.deadline}</span>` : ""}
                    ${todo.reminder ? `<span class="reminder">⏰ ${todo.reminder}</span>` : ""}
                    <span class="priority ${todo.priority}">${todo.priority}</span>
                </span>
                <button class="edit-btn" data-idx="${idx}">Edit</button>
                <button class="delete-btn" data-idx="${idx}">Delete</button>
            `;
            list.appendChild(li);
        });
        if (typeof updateHomeStats === "function") {
            updateHomeStats();
        }
    }
    form.onsubmit = function (e) {
        e.preventDefault();
        todos.push({
            text: input.value,
            deadline: deadline.value,
            reminder: reminder.value,
            priority: priority.value,
            completed: false
        });
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
        form.reset();

    };

    list.onclick = function (e) {
        if (e.target.classList.contains('delete-btn')) {
            const idx = e.target.dataset.idx;
            todos.splice(idx, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
        }
        if (e.target.classList.contains('edit-btn')) {
            const idx = e.target.dataset.idx;
            const todo = todos[idx];
            input.value = todo.text;
            deadline.value = todo.deadline;
            reminder.value = todo.reminder;
            priority.value = todo.priority;
            todos.splice(idx, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
        }
        };

    renderTodos();
}*/

function setupTodo() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const deadline = document.getElementById('todo-deadline');
    const reminder = document.getElementById('todo-reminder');
    const priority = document.getElementById('todo-priority');
    const list = document.getElementById('todo-list');

    let todos = JSON.parse(localStorage.getItem('todos') || "[]");

    function renderTodos() {
        list.innerHTML = '';
        todos.forEach((todo, idx) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" class="complete-checkbox" data-idx="${idx}" ${todo.completed ? "checked" : ""}>
                <span class="todo-task ${todo.priority} ${todo.completed ? "done" : ""}">${todo.text}</span>
                <span class="todo-meta">
                    ${todo.deadline ? `<span class="deadline">🗓️ ${todo.deadline}</span>` : ""}
                    ${todo.reminder ? `<span class="reminder">⏰ ${todo.reminder}</span>` : ""}
                    <span class="priority ${todo.priority}">${todo.priority}</span>
                </span>
                <button class="edit-btn" data-idx="${idx}">Edit</button>
                <button class="delete-btn" data-idx="${idx}">Delete</button>
            `;
            list.appendChild(li);
        });

        // 🔥 Update dashboard stats after rendering
        if (typeof window.updateDashboard === "function") {
        window.updateDashboard(); // always call the global dashboard update
    }
    }

    form.onsubmit = function (e) {
        e.preventDefault();
        todos.push({
            text: input.value,
            deadline: deadline.value,
            reminder: reminder.value,
            priority: priority.value,
            completed: false
        });
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
        form.reset();
    };

    list.onclick = function (e) {
        const idx = e.target.dataset.idx;

        // ✅ Delete
        if (e.target.classList.contains('delete-btn')) {
            todos.splice(idx, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
        }

        // ✏️ Edit
        if (e.target.classList.contains('edit-btn')) {
            const todo = todos[idx];
            input.value = todo.text;
            deadline.value = todo.deadline;
            reminder.value = todo.reminder;
            priority.value = todo.priority;

            todos.splice(idx, 1); // remove old before re-adding
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
        }

        // ☑️ Mark complete/incomplete
        if (e.target.classList.contains('complete-checkbox')) {
            todos[idx].completed = e.target.checked;
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
        }
    };

    renderTodos();
}


/*function setupPomodoro() {
    const timerDisplay = document.getElementById("pomodoro-timer");
    const startBtn = document.getElementById("start-timer");
    const pauseBtn = document.getElementById("pause-timer");
    const resetBtn = document.getElementById("reset-timer");
    const statusDisplay = document.getElementById("pomodoro-status");
    const xpBar = document.getElementById("xp-bar");
    const xpText = document.getElementById("xp-text");

    // 🔊 Level-up sound
    const levelUpSound = new Audio("level_up.mp3"); // Put the MP3 file in your project folder

    // 🎯 Level titles
    const levelTitles = [
        "Time Rookie",
        "Focus Novice",
        "Task Slayer",
        "Productivity Ninja",
        "Pomodoro Master",
        "Time Wizard",
        "Legend of Focus",
        "DeadLine Warrior",
        "Task Conqueror",
        "Attention Titan",
        "Master Of Momentum",
        "Focus Guru",
        "Time Alchemist"
    ];

    let workTime = 25*60;
    let breakTime = 5*60;
    let timeLeft = workTime;
    let isWork = true;
    let timer = null;

    let xp = 0;
    let level = 1;

    function updateTimerDisplay() {
        const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
        const seconds = String(timeLeft % 60).padStart(2, "0");
        timerDisplay.textContent = `${minutes}:${seconds}`;
    }

    function updateXPBar() {
        const xpNeeded = level * 100;
        const percentage = (xp / xpNeeded) * 100;
        xpBar.style.width = percentage + "%";
        xpText.textContent = `Level ${level} - XP: ${xp} / ${xpNeeded} (${levelTitles[level - 1] || "Focus Legend"})`;
    }

    function addXP(amount) {
        xp += amount;
        const xpNeeded = level * 100;
        if (isWork) { // Only count XP gained from work sessions
        let pomodoroCount = parseInt(localStorage.getItem("pomodoroSessions")) || 0;
        pomodoroCount++;
        localStorage.setItem("pomodoroSessions", pomodoroCount);

        // Refresh dashboard
        if (typeof window.updateDashboard === "function") {
            window.updateDashboard();
        }
    }
        if (xp >= xpNeeded) {
            xp -= xpNeeded;
            level++;
            levelUpSound.play(); // Play sound
            const title = levelTitles[level - 1] || "Focus Legend";
            alert(`🎉 Level Up! You are now Level ${level} - ${title}!`);
        }
        localStorage.setItem("pomodoroXP", xp);
        localStorage.setItem("pomodoroLevel", level);

        updateXPBar();
    }

    function startTimer() {
        if (timer) return;
        timer = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();

            if (timeLeft <= 0) {
                clearInterval(timer);
                timer = null;
                if (isWork) {
                    addXP(25); // Reward XP after a work session
                    timeLeft = breakTime;
                    statusDisplay.textContent = "Break Time";
                } else {
                    timeLeft = workTime;
                    statusDisplay.textContent = "Work Time";
                }
                isWork = !isWork;
                startTimer(); // auto start next session
            }
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timer);
        timer = null;
    }

    function resetTimer() {
        clearInterval(timer);
        timer = null;
        isWork = true;
        timeLeft = workTime;
        statusDisplay.textContent = "Work Time";
        updateTimerDisplay();
    }

    startBtn.addEventListener("click", startTimer);
    pauseBtn.addEventListener("click", pauseTimer);
    resetBtn.addEventListener("click", resetTimer);

    updateTimerDisplay();
    updateXPBar();
}*/

function setupPomodoro() {
    const timerDisplay = document.getElementById("pomodoro-timer");
    const startBtn = document.getElementById("start-timer");
    const pauseBtn = document.getElementById("pause-timer");
    const resetBtn = document.getElementById("reset-timer");
    const statusDisplay = document.getElementById("pomodoro-status");
    const xpBar = document.getElementById("xp-bar");
    const xpText = document.getElementById("xp-text");

    const levelUpSound = new Audio("level_up.mp3");

    const levelTitles = [
        "Time Rookie","Focus Novice","Task Slayer","Productivity Ninja",
        "Pomodoro Master","Time Wizard","Legend of Focus",
        "DeadLine Warrior","Task Conqueror","Attention Titan",
        "Master Of Momentum","Focus Guru","Time Alchemist"
    ];

    // Load default times from localStorage or fallback
    let workTime = (parseInt(localStorage.getItem("defaultWorkTime")) || 25) * 60 ;
    let breakTime = (parseInt(localStorage.getItem("defaultBreakTime")) || 5) * 60;
    let timeLeft = workTime;
    let isWork = true;
    let timer = null;

    let xp = parseInt(localStorage.getItem("pomodoroXP")) || 0;
    let level = parseInt(localStorage.getItem("pomodoroLevel")) || 1;

    function updateTimerDisplay() {
        const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
        const seconds = String(timeLeft % 60).padStart(2, "0");
        timerDisplay.textContent = `${minutes}:${seconds}`;
    }

    function updateXPBar() {
        const xpNeeded = level * 100;
        const percentage = (xp / xpNeeded) * 100;
        xpBar.style.width = percentage + "%";
        xpText.textContent = `Level ${level} - XP: ${xp} / ${xpNeeded} (${levelTitles[level - 1] || "Focus Legend"})`;
    }

    function addXP(amount) {
        xp += amount;
        const xpNeeded = level * 100;
        if (isWork) { // Only count XP gained from work sessions
            let pomodoroCount = parseInt(localStorage.getItem("pomodoroSessions")) || 0;
            pomodoroCount++;
            localStorage.setItem("pomodoroSessions", pomodoroCount);
            if (typeof window.updateDashboard === "function") window.updateDashboard();
        }
        if (xp >= xpNeeded) {
            xp -= xpNeeded;
            level++;
            levelUpSound.play();
            const title = levelTitles[level - 1] || "Focus Legend";
            alert(`🎉 Level Up! You are now Level ${level} - ${title}!`);
        }
        localStorage.setItem("pomodoroXP", xp);
        localStorage.setItem("pomodoroLevel", level);
        updateXPBar();
    }

    function startTimer() {
        if (timer) return;
        timer = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 0) {
                clearInterval(timer);
                timer = null;
                if (isWork) {
                    addXP(25);
                    timeLeft = breakTime;
                    statusDisplay.textContent = "Break Time";
                } else {
                    timeLeft = workTime;
                    statusDisplay.textContent = "Work Time";
                }
                isWork = !isWork;
                startTimer();
            }
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timer);
        timer = null;
    }

    function resetTimer() {
        clearInterval(timer);
        timer = null;
        isWork = true;
        timeLeft = workTime;
        statusDisplay.textContent = "Work Time";
        updateTimerDisplay();
    }

    startBtn.addEventListener("click", startTimer);
    pauseBtn.addEventListener("click", pauseTimer);
    resetBtn.addEventListener("click", resetTimer);

    updateTimerDisplay();
    updateXPBar();

    // Expose methods to update work/break times dynamically
    return {
        setWorkTime: (minutes) => {
            workTime = minutes * 60;
            if (isWork) timeLeft = workTime;
            updateTimerDisplay();
        },
        setBreakTime: (minutes) => {
            breakTime = minutes * 60;
            if (!isWork) timeLeft = breakTime;
            updateTimerDisplay();
        }
    };
}

// Initialize Pomodoro globally
window.pomodoro = setupPomodoro();




function setupNotes() {
    const notesInput = document.getElementById('pdf-input');
    const notesGallery = document.getElementById('notes-gallery');
    let allFiles = [];

    if (!notesInput || !notesGallery) return;

    notesInput.addEventListener('change', function () {
        // Add new files to the array
        allFiles = allFiles.concat(Array.from(notesInput.files));
        renderGallery();
        notesInput.value = "";
    });

    function renderGallery() {
        notesGallery.innerHTML = "";
        allFiles.forEach((file, idx) => {
            const fileURL = URL.createObjectURL(file);
            let item = document.createElement('div');
            item.style.display = "inline-block";
            item.style.margin = "8px";
            item.style.cursor = "pointer";
            let innerHTML = "";

            if (file.type.startsWith("image/")) {
                innerHTML = `
                    <img src="${fileURL}" alt="${file.name}" style="width:120px;height:120px;object-fit:cover;border-radius:10px;box-shadow:0 2px 12px #e2cfa544;">
                    <div style="text-align:center;color:#a67c52;font-size:0.95em;">${file.name}</div>
                `;
            } else if (file.type === "application/pdf") {
                innerHTML = `
                    <div style="width:120px;height:120px;display:flex;align-items:center;justify-content:center;background:#fffbe9;border-radius:10px;box-shadow:0 2px 12px #e2cfa544;">
                        <i class="fa-solid fa-file-pdf" style="font-size:48px;color:#a67c52;"></i>
                    </div>
                    <div style="text-align:center;color:#a67c52;font-size:0.95em;">${file.name}</div>
                `;
            }

            // Add delete button
            innerHTML += `
                <button class="delete-note-btn" style="display:block;margin:6px auto 0 auto;padding:4px 12px;border-radius:6px;background:#ff5e5b;color:#fff;border:none;cursor:pointer;font-size:0.95em;">Delete</button>
            `;

            item.innerHTML = innerHTML;

            // Open file in new tab when clicking thumbnail (not delete button)
            item.querySelector('img')?.addEventListener('click', () => window.open(fileURL, "_blank"));
            item.querySelector('.fa-file-pdf')?.addEventListener('click', () => window.open(fileURL, "_blank"));

            // Delete file
            item.querySelector('.delete-note-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                allFiles.splice(idx, 1);
                renderGallery();
            });

            notesGallery.appendChild(item);
        });
    }
}

/*function setupHabits() {
  const habitForm = document.getElementById("habit-form");
  const habitList = document.getElementById("habit-list");

  if (!habitForm || !habitList) return; // Prevent null errors

  

  habitForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("habit-name").value.trim();
    const frequency = document.getElementById("habit-frequency").value;

    if (!name) return;

    const habitRow = document.createElement("div");
    habitRow.classList.add("habit-row");

    habitRow.innerHTML = `
      <span class="habit-name">${name}</span>
      <span class="habit-frequency">${frequency}</span>
      <span class="habit-streak">🔥 0 days</span>
      <input type="checkbox" class="habit-check">
      <button class="btn btn-edit">Edit</button>
      <button class="btn btn-delete">Delete</button>
    `;

    const checkbox = habitRow.querySelector(".habit-check");
    checkbox.addEventListener("change", () => {
      habitRow.classList.toggle("completed", checkbox.checked);
    });

    // Delete button
    habitRow.querySelector(".btn-delete").addEventListener("click", () => {
      habitRow.remove();
    });

    // Edit button
    habitRow.querySelector(".btn-edit").addEventListener("click", () => {
      const currentName = habitRow.querySelector(".habit-name").textContent;
      const currentFrequency = habitRow.querySelector(".habit-frequency").textContent;

      const newName = prompt("Edit habit name:", currentName);
      if (newName === null || newName.trim() === "") return; // Cancel or empty

      const newFrequency = prompt("Edit frequency (Daily, Weekly, Monthly):", currentFrequency);
      if (newFrequency === null || newFrequency.trim() === "") return;

      habitRow.querySelector(".habit-name").textContent = newName.trim();
      habitRow.querySelector(".habit-frequency").textContent = newFrequency.trim();
    });

    habitList.appendChild(habitRow);
    habitForm.reset();
  });
}*/

function setupHabits() {
    const habitForm = document.getElementById("habit-form");
    const habitList = document.getElementById("habit-list");

    if (!habitForm || !habitList) return; // Prevent null errors

    // Load habits from localStorage
    let habits = JSON.parse(localStorage.getItem("habits") || "[]");

    function renderHabits() {
        habitList.innerHTML = "";
        habits.forEach((habit, idx) => {
            const habitRow = document.createElement("div");
            habitRow.classList.add("habit-row");
            if (habit.completed) habitRow.classList.add("completed");

            habitRow.innerHTML = `
                <span class="habit-name">${habit.name}</span>
                <span class="habit-frequency">${habit.frequency}</span>
                <span class="habit-streak">🔥 ${habit.streak || 0} days</span>
                <input type="checkbox" class="habit-check" ${habit.completed ? "checked" : ""}>
                <button class="btn btn-edit">Edit</button>
                <button class="btn btn-delete">Delete</button>
            `;

            const checkbox = habitRow.querySelector(".habit-check");
            checkbox.addEventListener("change", () => {
                habit.completed = checkbox.checked;
                if (checkbox.checked) habit.streak = (habit.streak || 0) + 1;
                localStorage.setItem("habits", JSON.stringify(habits));
                renderHabits();
                if (typeof window.updateDashboard === "function") window.updateDashboard();
            });

            // Delete button
            habitRow.querySelector(".btn-delete").addEventListener("click", () => {
                habits.splice(idx, 1);
                localStorage.setItem("habits", JSON.stringify(habits));
                renderHabits();
                if (typeof window.updateDashboard === "function") window.updateDashboard();
            });

            // Edit button
            habitRow.querySelector(".btn-edit").addEventListener("click", () => {
                const newName = prompt("Edit habit name:", habit.name);
                if (newName && newName.trim() !== "") habit.name = newName.trim();

                const newFrequency = prompt("Edit frequency (Daily, Weekly, Monthly):", habit.frequency);
                if (newFrequency && newFrequency.trim() !== "") habit.frequency = newFrequency.trim();

                localStorage.setItem("habits", JSON.stringify(habits));
                renderHabits();
            });

            habitList.appendChild(habitRow);
        });
    }

    habitForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("habit-name").value.trim();
        const frequency = document.getElementById("habit-frequency").value;
        if (!name) return;

        habits.push({
            name,
            frequency,
            streak: 0,
            completed: false
        });

        localStorage.setItem("habits", JSON.stringify(habits));
        renderHabits();
        habitForm.reset();
        if (typeof window.updateDashboard === "function") window.updateDashboard();
    });

    renderHabits();
}



function setupReminders() {
    const form = document.getElementById("reminder-form");
    const textInput = document.getElementById("reminder-text");
    const dateInput = document.getElementById("reminder-time");
    const list = document.getElementById("reminder-list");

    let reminders = JSON.parse(localStorage.getItem("reminders") || "[]");

    function renderReminders() {
        list.innerHTML = "";
        reminders.forEach((reminder, idx) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${reminder.text} — <em>${reminder.date}</em></span>
                <button data-idx="${idx}">Delete</button>
            `;
            list.appendChild(li);
        });
        if (typeof window.updateDashboard === "function") {
            window.updateDashboard();
        }
    }

    form.onsubmit = function (e) {
        e.preventDefault();

        const reminderText = textInput.value.trim();
        const reminderDateStr = dateInput.value;

        if (!reminderText) {
            alert("Please enter a reminder text.");
            return;
        }

        if (!reminderDateStr) {
            alert("Please select a date & time.");
            return;
        }

        const reminderDate = new Date(reminderDateStr);

        if (isNaN(reminderDate.getTime())) {
            alert("Invalid date. Please pick a valid date & time.");
            return;
        }

        reminders.push({
            text: reminderText,
            date: reminderDateStr
        });

        localStorage.setItem("reminders", JSON.stringify(reminders));
        renderReminders();
        form.reset();
    };

    list.onclick = function (e) {
        if (e.target.tagName === "BUTTON") {
            const idx = e.target.dataset.idx;
            reminders.splice(idx, 1);
            localStorage.setItem("reminders", JSON.stringify(reminders));
            renderReminders();
        }
    };

    renderReminders();
}

// HOME DASHBOARD SETUP
function setupHome() {
    const greetingEl = document.getElementById("greeting");
    const tasksEl = document.getElementById("tasks-completed");
    const pomoEl = document.getElementById("pomodoro-done");
    const streakEl = document.getElementById("habit-streak");
    const reminderEl = document.getElementById("next-reminder");
    const quoteEl = document.getElementById("daily-quote");

    // ==== GREETING ====
    function updateGreeting() {
        const hours = new Date().getHours();
        let text = "Hello";

        if (hours < 12) text = "☀️ Good Morning!";
        else if (hours < 18) text = "🌤️ Good Afternoon!";
        else text = "🌙 Good Evening!";

        greetingEl.textContent = text;
    }

    // ==== MOTIVATIONAL QUOTES ====
    const quotes = [
        "Stay focused, stay strong.",
        "Discipline beats motivation.",
        "One step at a time.",
        "Dream big. Start small.",
        "Consistency creates results.",
        "He who has a why to live can bear almost any how.",
        "The greatest wealth is to live content with little.",
        "He who conquers himself is the mightiest warrior.",
        "Man suffers only because he takes seriously what the gods made for fun",
        "Each morning we are born again. What we do today is what matters most.",
        "Neither a ship should rely on a single anchor nor a life should depend on a single hope."
    ];

    function updateQuote() {
        let dayIndex = new Date().getDate() % quotes.length;
        quoteEl.textContent = quotes[dayIndex];
    }

    // ==== DASHBOARD STATS ====
    function updateStats() {
        // --- TASKS (use "todos" instead of "tasks") ---
        let todos = JSON.parse(localStorage.getItem("todos") || "[]");
        let completed = todos.filter(t => t.completed).length;
        tasksEl.textContent = `${completed}/${todos.length}`;

        // --- POMODORO ---
        let pomodoroCount = parseInt(localStorage.getItem("pomodoroSessions")) || 0;
        pomoEl.textContent = pomodoroCount;

        // --- HABIT STREAK ---
        let streak = parseInt(localStorage.getItem("habitStreak")) || 0;
        streakEl.textContent = streak;

        // --- REMINDERS ---
        /*let reminders = JSON.parse(localStorage.getItem("reminders") || "[]");
        let now = new Date();
        let upcoming = reminders
            .map(r => ({ ...r, dateObj: new Date(r.date) }))
            .filter(r => r.dateObj > now)
            .sort((a, b) => a.dateObj - b.dateObj)[0];

        reminderEl.textContent = upcoming
            ? `${upcoming.text} at ${upcoming.dateObj.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`
            : "No reminders";*/
        let reminders = JSON.parse(localStorage.getItem("reminders") || "[]");
    let now = new Date();

    // Map dates and ignore invalid ones
    let validReminders = reminders
        .map(r => ({ ...r, dateObj: new Date(r.date) }))
        .filter(r => !isNaN(r.dateObj));

    if (validReminders.length === 0) {
        reminderEl.textContent = "No reminders";
    } else {
        // Sort by date, show the soonest one
        validReminders.sort((a, b) => a.dateObj - b.dateObj);
        let upcoming = validReminders[0];
        reminderEl.textContent = `${upcoming.text} at ${upcoming.dateObj.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`;
    }
    }

    /*// ==== QUICK ACTION BUTTONS ====
    // Add Task button
    document.getElementById("add-task-btn").onclick = () => {
        showFeature('To-Do'); // show the To-Do section
    };

// Quick Pomodoro button
    document.getElementById("quick-pomodoro-btn").onclick = () => {
        showFeature('Pomodoro'); // show the Pomodoro section
    };*/

    // Initial render
    updateGreeting();
    updateQuote();
    updateStats();

    // Expose update function globally so other features can refresh dashboard
    window.updateDashboard = updateStats;
}


function updateHomeStats() {
    // --- Todos ---
    let todos = JSON.parse(localStorage.getItem("todos") || "[]");
    let completed = todos.filter(t => t.completed).length;
    let total = todos.length;
    document.getElementById("tasks-completed").textContent = `${completed}/${total}`;

    // --- Reminders ---
    let reminders = JSON.parse(localStorage.getItem("reminders") || "[]");
    document.getElementById("next-reminder").textContent = reminders.length
        ? reminders[0].text
        : "No reminders";

    // --- Pomodoro ---
    let pomodoroCount = parseInt(localStorage.getItem("pomodoroSessions")) || 0;
    document.getElementById("pomodoro-done").textContent = pomodoroCount;

    // --- Habit Streak ---
    let streak = parseInt(localStorage.getItem("habitStreak")) || 0;
    document.getElementById("habit-streak").textContent = streak;
}

function setupSettings() {
  const themeSelect = document.getElementById("theme-select");
  const resetBtn = document.getElementById("reset-data-btn");
  const pomodoroInput = document.getElementById("pomodoro-time");
  const breakInput = document.getElementById("break-time");

  // === THEME SELECTION ===

// Load saved theme
if (localStorage.getItem("theme")) {
    const savedTheme = localStorage.getItem("theme");
    document.body.classList.add(savedTheme + "-theme");
    themeSelect.value = savedTheme;
} else {
    // Default = dark
    document.body.classList.add("dark-theme");
    themeSelect.value = "dark";
}

// Listen for theme change
themeSelect.addEventListener("change", () => {
    // Remove any existing theme classes
    document.body.classList.remove("light-theme", "dark-theme");

    const selectedTheme = themeSelect.value;
    document.body.classList.add(selectedTheme + "-theme");

    // Save preference
    localStorage.setItem("theme", selectedTheme);
});


  // === RESET ALL DATA ===
  resetBtn.addEventListener("click", () => {
    if (confirm("⚠️ Are you sure you want to reset EVERYTHING? This will delete all tasks, reminders, XP, streaks, and settings.")) {
      localStorage.removeItem("todos");
      localStorage.removeItem("reminders");
      localStorage.removeItem("habitStreak");
      localStorage.removeItem("pomodoroSessions");
      localStorage.removeItem("pomodoroXP");
      localStorage.removeItem("pomodoroLevel");
      localStorage.removeItem("defaultWorkTime");
      localStorage.removeItem("defaultBreakTime");
      localStorage.removeItem("theme");

      // Reload page to apply neutral theme and start fresh
      location.reload();
    }
  });

  // === DEFAULT POMODORO / BREAK TIMES ===
  pomodoroInput.value = localStorage.getItem("defaultWorkTime") || 25;
  breakInput.value = localStorage.getItem("defaultBreakTime") || 5;

  pomodoroInput.addEventListener("change", () => {
    localStorage.setItem("defaultWorkTime", pomodoroInput.value);
  });

  breakInput.addEventListener("change", () => {
    localStorage.setItem("defaultBreakTime", breakInput.value);
  });
}

/*document.addEventListener("DOMContentLoaded", () => {
  const loginSection = document.getElementById("login-section");
  const homeSection = document.getElementById("home");
  const loginBtn = document.getElementById("login-btn");
  const usernameInput = document.getElementById("username-input");
  const greeting = document.getElementById("greeting");
  const logoutBtn = document.getElementById("logout-btn");

  // Hide home initially
  homeSection.style.display = "none";

  // Check if user already logged in
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    showHome(savedUser);
  }*/

  