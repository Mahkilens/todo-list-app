# ✅ To-Do List App
## 🧩 Version 1.0.0

A clean and interactive **vanilla JavaScript To-Do List application** built to practice DOM manipulation, event handling, and localStorage persistence. This project helped me deepen my understanding of state management, user interaction flow, and building fully functional UI components with pure JavaScript.

---

## 🧩 Features
- ➕ Add new tasks  
- ✅ Mark tasks as complete or incomplete  
- ✏️ Edit tasks inline (Enter to save, Esc to cancel)  
- ❌ Delete tasks  
- 💾 Automatic saving using `localStorage`  
- 🎨 Glass-style modern UI with responsive design  

---

## 🧠 What I Learned
- How to **structure a small app using DOM + state + storage**  
- Building **reusable UI elements** entirely with JavaScript  
- Managing **application state** (`tasks[]`) and keeping it synced with the DOM  
- Creating **edit-in-place functionality** with keyboard events  
- Reading and writing data using **localStorage**  
- Improving UX: focus states, animations, clean button interactions  

---

## 🖥️ Tech Stack
- **HTML5** for structure  
- **CSS3** for styling & layout  
- **Vanilla JavaScript (ES6+)** for all logic (no frameworks)  

---

# ✅ Version Log

---

## 🧩 Version 1.0.1  
### ✅ Add Task Flow  
- Implemented form submission listener  
- Creates a new task object using `crypto.randomUUID()`  
- Updates the DOM in real time  
- Saves tasks to `localStorage`  

---

## 🧩 Version 1.0.2  
### ✅ Edit-In-Place Feature  
- Added editable input fields when pressing “Edit”  
- Enter → saves new title  
- Escape → cancels edit  
- Blur → auto-saves (protected from double commits)  
- Ensures empty titles are not allowed  

---

## 🧩 Version 1.0.3  
### ✅ Task Completion  
- Checkbox toggles the task’s `done` state  
- Applies “completed” UI class (line-through + opacity)  
- Updates saved data automatically  

---

## 🧩 Version 1.0.4  
### ✅ Delete Functionality  
- Removes task from DOM  
- Removes task from `tasks[]`  
- Saves updated state  

---

## 🧩 Version 1.0.5  
### ✅ UI/UX Improvements  
- Added glassmorphism card effect and soft shadows  
- Larger checkboxes with `accent-color`  
- Better responsive behavior  
- More accessible focus rings  

---

## 🧩 Version 1.0.6  
### ✅ Code Cleanup  
- Added `makeText()` helper  
- Simplified event delegation  
- Reduced repetitive DOM calls  
- Cleaned up editing logic for readability  

---

## 🧑‍💻 Author  
**Makhilens**  
🔗 @Makhilens on all platforms
