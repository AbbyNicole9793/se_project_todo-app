import { generateTodo } from "../pages/index.js"

class Section {
    constructor({ items, renderer, containerSelector}) {
        this._renderedItems = items
        this._renderer = renderer
        this._selector = document.querySelector(containerSelector)
        
    }
    renderItems() {
            this._renderedItems.forEach((item) => {
                this._renderer(item)
            })
        }

    addItem(item) {
            const todo = generateTodo(item)
            this._selector.append(todo)
        }
}

export default Section