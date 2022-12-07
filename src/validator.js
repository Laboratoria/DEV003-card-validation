const validator = {
  isValid: function (array) {
    let numPar = 0;
    let sumArr = 0;
    for (let i = 0; i < array.length; i++) {
      let sumDigito = 0;
      if (i % 2 === 1) {
        let numeroDoble = Number(array[i]) * 2;
        numPar = numeroDoble % 10;
        numeroDoble = parseInt(numeroDoble / 10);
        sumDigito = numPar + numeroDoble;
      } else {
        sumDigito = Number(array[i]);
      }
      sumArr += sumDigito;
    }

    return sumArr % 10 === 0;
  },

  maskify: function (creditCardNumber) {
    const length = creditCardNumber.length;
    const cardMaskify = creditCardNumber.substring(length - 4, length);
    return cardMaskify.padStart(length, "#");
  },

  setInputFilter: function (inputEl, isValid, errMsg) {
    const listener = function (e) {
      if (isValid(this.value)) {
        // Accepted value.
        if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
          this.classList.remove("input-error");
          this.setCustomValidity("");
        }

        this.oldValue = this.value;
        // } else if (this.hasOwnProperty("oldValue")) {
      } else if (this.oldValue) {
        // Rejected value: restore the previous one.
        this.classList.add("input-error");
        this.setCustomValidity(errMsg);
        this.reportValidity();
        this.value = this.oldValue;
      } else {
        // Rejected value: nothing to restore.
        this.value = "";
      }
    };

    const events = [
      "input",
      "keydown",
      "keyup",
      "mousedown",
      "mouseup",
      "select",
      "contextmenu",
      "drop",
      "focusout",
    ];

    events.forEach(function (event) {
      inputEl.addEventListener(event, listener);
    });

    return () => {
      events.forEach((evtName) => {
        inputEl.removeEventListener(evtName, listener);
      });
    };
  },
};

export default validator;
