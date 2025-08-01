import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../utils/Section.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
// const todoTemplate = document.querySelector("#todo-template");
const todosList = document.querySelector(".todos__list");

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
      const todo = generateTodo(item);
      todosList.append(todo);
  },
  containerSelector: ".todos__list"
})

section.renderItems()


const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();
  return todoElement;

  // // Apply id and for attributes.
  // // The id will initially be undefined for new todos.

  // // If a due date has been set, parsing this it with `new Date` will return a
  // // number. If so, we display a string version of the due date in the todo.

  // return todoElement;
};
// const renderTodo = (item) => {
//     const todo = generateTodo(item);
//     todosList.append(todo);
//   };

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };
  
  // renderTodo(values)
  section.addItem(element)
  closeModal(addTodoPopup);
  todoFormValidator.resetValidation();
});

// initialTodos.forEach((item) => {
//   renderTodo(item)
// });

const todoFormValidator = new FormValidator(validationConfig, addTodoForm);
todoFormValidator.enableValidation();
