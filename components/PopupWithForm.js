import Popup from "./Popup.js"

class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit} ) {
        super({popupSelector})
        this._handleFormSubmit = handleFormSubmit
        this._popupForm = this._popupSelector.querySelector(".popup__form")
        this._input = this._popupForm.querySelectorAll(".popup__input")
    }

    _getInputValues() {
        const values = { };
        this._input.forEach((input) => {
            // TODO - write code
        })
        return values
    }
    setEventListeners() {
        super.setEventListeners()
        this._popupForm.addEventListener("submit", (evt) => {
            evt.preventDefault()
            this._getInputValues()
            this._handleFormSubmit()
        })
    }
}
const popup = new Popup({
        popupSelector: ".popup__content"
    })

    


export default PopupWithForm