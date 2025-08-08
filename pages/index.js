
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js"

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const todosList = document.querySelector(".todos__list")

const todoCounter = new TodoCounter(initialTodos, ".counter__text")

function handleCheck(completed) {
  todoCounter.updateCompleted(completed)
}

function handleDelete(completed) {
  if (completed) {
  todoCounter.updateCompleted(false)
  }
}

function increment() {
    todoCounter.updateTotal(true)
}

function incrementDown() {
    todoCounter.updateTotal(false)
}

export const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete, incrementDown);
  const todoElement = todo.getView();
  return todoElement;

};

function generateItem(values) {
  const todosList = generateTodo(values)
  section.addItem(todosList)
}

const addTodo = new PopupWithForm({ popupSelector: "#add-todo-popup",
  handleFormSubmit: (values) => {
    
    generateItem(values)
    addTodo.close();
    todoFormValidator.resetValidation();
  },
  increment

})

addTodoButton.addEventListener("click", () => {
  addTodo.open();
  
})


const todoFormValidator = new FormValidator(validationConfig, addTodoForm);
todoFormValidator.enableValidation();

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
      generateItem(item)
      
  },
  containerSelector: ".todos__list"
})

section.renderItems()

addTodo.setEventListeners()
