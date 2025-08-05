import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../utils/section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js"

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
// const todoTemplate = document.querySelector("#todo-template");
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text")

function handleCheck(completed) {
  todoCounter.updateCompleted(completed)
}

function handleDelete(completed) {
  if (completed) {
  todoCounter.updateCompleted(false)
  }
}


export const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;

};



const addTodo = new PopupWithForm({ popupSelector: "#add-todo-popup",
  handleFormSubmit: (evt) => {
    
  }

})

addTodoButton.addEventListener("click", () => {
  addTodo.open();
  
})


// const openModal = (modal) => {
//   modal.classList.add("popup_visible");
// };

// const closeModal = (modal) => {
//   modal.classList.remove("popup_visible");
// };

// const renderTodo = (item) => {
//     const todo = generateTodo(item);
//     todosList.append(todo);
//   };




// addTodoForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.name.value;
//   const dateInput = evt.target.date.value;

  
//   const date = new Date(dateInput);
//   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//   const id = uuidv4();
//   const values = { name, date, id };
  
//   // renderTodo(values)

//   section.addItem(values)
//   addTodo.close();
//   todoFormValidator.resetValidation();
// });

// initialTodos.forEach((item) => {
//   renderTodo(item)
// });

const todoFormValidator = new FormValidator(validationConfig, addTodoForm);
todoFormValidator.enableValidation();

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
      const todo = generateTodo(item);
      todosList.append(todo);
      
  },
  containerSelector: ".todos__list"
})

section.renderItems()

addTodo.setEventListeners()
