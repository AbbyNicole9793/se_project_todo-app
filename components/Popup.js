class Popup {
    constructor({ popupSelector }) {
        this._popupSelector = document.querySelector(popupSelector)
        this._popupCloseButton = this._popupSelector.querySelector(".popup__close")
    }

    _handleEscapeClose = (evt) => {
        if (evt.key === "Escape") {
            this.close()
        }

    }

    
    open() {
        this._popupSelector.classList.add("popup_visible")
        document.addEventListener("keyup",  this._handleEscapeClose)
    } 
    close() {
        this._popupSelector.classList.remove("popup_visible")
        document.removeEventListener("keyup", this._handleEscapeClose )
    }
    
    setEventListeners() {
        this._popupCloseButton.addEventListener("click", () => {
            this.close();
        });
        this._popupSelector.addEventListener("mousedown", (evt) => {
            if (evt.target === this._popupSelector) {
                this.close()
            }
        })
    }
}

export default Popup