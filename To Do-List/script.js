'use strict';

// ========== DOM ==========
const form = document.getElementById('new-task-form');
const taskInput = document.getElementById('task-input');
const list = document.getElementById('task-list');

// ========== Storage ==========
const STORAGE_KEY = 'todo.v1';

// ========== State ==========
let tasks = []; // [{id, title, done}]

// ========== Persistence helpers ==========
function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasks() {
  const data = localStorage.getItem(STORAGE_KEY);
  tasks = data ? JSON.parse(data) : [];
  list.innerHTML = '';
  tasks.forEach(t => list.appendChild(createTaskElement(t)));
}

// ========== Edit helpers ==========
function startEditingTask(task, row, textElement) {
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'edit-input';
  input.value = task.title;

  const left = row.querySelector('.left-section');
  left.replaceChild(input, textElement);

  input.focus();
  input.select();

  // commit only once (prevents blur + enter double firing)
  let done = false;
  const commit = () => {
    if (done) return;
    done = true;
    finishEditing(task, row, input);
  };
  const cancel = () => {
    if (done) return;
    done = true;
    cancelEditing(row, input, textElement);
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') commit();
    if (e.key === 'Escape') cancel();
  });
  input.addEventListener('blur', commit);
}

function finishEditing(task, row, inputElement) {
  const left = row.querySelector('.left-section');
  if (inputElement.parentNode !== left) return; // already swapped

  const newTitle = inputElement.value.trim();
  if (!newTitle) {
    cancelEditing(row, inputElement, makeText(task.title));
    return;
  }

  task.title = newTitle;

  const newText = makeText(newTitle);
  left.replaceChild(newText, inputElement);
  saveTasks();
}

function makeText(text) {
  const p = document.createElement('p');
  p.className = 'task-text';
  p.textContent = text;
  return p;
}

function cancelEditing(row, inputElement, originalTextElement) {
  const left = row.querySelector('.left-section');
  if (inputElement.parentNode !== left) return;
  left.replaceChild(originalTextElement, inputElement);
}

// ========== Element builder ==========
function createTaskElement(task) {
  // row
  const row = document.createElement('div');
  row.className = 'task';
  row.dataset.id = task.id;
  if (task.done) row.classList.add('completed');

  // left
  const left = document.createElement('div');
  left.className = 'left-section';

  const cb = document.createElement('input');
  cb.type = 'checkbox';
  cb.className = 'task-checkbox';
  cb.checked = task.done;

  const text = makeText(task.title);

  left.append(cb, text);

  // right
  const right = document.createElement('div');
  right.className = 'right-section';

  const edit = document.createElement('button');
  edit.className = 'edit-btn';
  edit.textContent = 'Edit';
  edit.addEventListener('click', () => startEditingTask(task, row, text));

  const del = document.createElement('button');
  del.className = 'delete-btn';
  del.textContent = 'Delete';
  del.addEventListener('click', () => {
    row.remove();
    tasks = tasks.filter(t => t.id !== task.id);
    saveTasks();
  });

  right.append(edit, del);

  row.append(left, right);
  return row;
}

// ========== Add task ==========
function addTask(title) {
  const task = { id: crypto.randomUUID(), title, done: false };
  tasks.push(task);
  list.appendChild(createTaskElement(task));
  saveTasks();
}

// ========== Events ==========
// submit (add)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (!taskText) return;
  addTask(taskText);
  taskInput.value = '';
});

// toggle done (event delegation)
list.addEventListener('change', (e) => {
  if (!e.target.matches('.task-checkbox')) return;
  const row = e.target.closest('.task');
  const id = row.dataset.id;
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  task.done = e.target.checked;
  row.classList.toggle('completed', task.done);
  saveTasks();
});

// ========== Init ==========
loadTasks();
