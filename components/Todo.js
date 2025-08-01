class Todo {
    constructor(data, selector) {
        this._data = data
        this._todoTemplate = document.querySelector(selector)
    }

    _setEventListeners() {
        this._todoCheckboxEl.addEventListener("change", () => {
            this._data.completed = !this._data.completed
        })
        this._todoDeleteBtn.addEventListener("click", () => {
            this._todoElement.remove();
  });

    }
    getView() {
        this._todoElement = this._todoTemplate.content
        .querySelector(".todo")
        .cloneNode(true);
        this._todoNameEl = this._todoElement.querySelector(".todo__name");
        this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
        this._todoLabel = this._todoElement.querySelector(".todo__label");
        const todoDate = this._todoElement.querySelector(".todo__date");
        this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

        this._todoNameEl.textContent = this._data.name
        this._todoCheckboxEl.checked = this._data.completed

        this._todoCheckboxEl.id = `todo-${this._data.id}`;
        this._todoLabel.setAttribute("for", `todo-${this._data.id}`);  
        
        const dueDate = new Date(this._data.date);
        if (!isNaN(dueDate)) {
            todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            })}`;
  }
        this._setEventListeners()
        return this._todoElement
    }
    
}

export default Todo