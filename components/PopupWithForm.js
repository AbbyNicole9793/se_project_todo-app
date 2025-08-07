import Popup from "./Popup.js"
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit, increment} ) {
        super({popupSelector})
        this._handleFormSubmit = handleFormSubmit
        this._popupForm = this._popupSelector.querySelector(".popup__form")
        this._inputs = this._popupForm.querySelectorAll(".popup__input")
        this._increment = increment
    }

    _getInputValues() {
        const values = { };
        this._inputs.forEach((input) => {
           values[input.name] = input.value
           if (input.name === "date") {
               
            const date = new Date(input.value);
            date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
            values[input.name] = date
           }
            const id = uuidv4()
            values[input.name] = id

        })
        return values
    }
    setEventListeners() {
        super.setEventListeners()
        this._popupForm.addEventListener("submit", (evt) => {
            evt.preventDefault()
            this._handleFormSubmit( this._getInputValues())
            this._increment()
        })
    }
}
    


export default PopupWithForm