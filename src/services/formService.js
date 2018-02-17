class Form {
  constructor(formId, fieldNames) {
    let fields = {};

    for (let i = 0; i < fieldNames.length; i++) {
      fields[fieldNames[i]] = {
        name: fieldNames[i],
        value: '',
        error: false,
        message: ''
      };
    }

    this.form = {
      formId: formId,
      error: false,
      fields: fields
    };
  }

  reset() {
    let form = document.getElementById(this.form.formId);
    if (form) {
      form.reset();
    }

    for (let field in this.form.fields) {
      this.form.fields[field].value = '';
    }
  }

  getFormFields() {
    return this.form.fields;
  }

  isValid() {
    return !this.form.error;
  }

  validate() {
    let validInputs = [];

    const fields = this.form.fields;
    for (let field in fields) {
      validInputs.push(this.isValidInput(fields[field]));
    }

    this.form.error = validInputs.includes(false);
  }

  isValidInput(input) {
    let isValid = false;

    const name = input.name;
    const value = input.value;

    switch (name) {
      case 'email':
        isValid = isValidEmail(value);
        break;
      default:
        isValid = isValidText(value);
        break;
    }

    if (isValid) {
      this.form.fields[name].error = false;
      this.form.fields[name].message = '';
    }
    else {
      this.form.fields[name].error = true;
      this.form.fields[name].message = `${name} is invalid`;
    }
    this.form.fields[name].value = value;

    return isValid;
  }
}

function isValidEmail(value) {
  let isValid = false;

  const simpleEmailFormat = /^\S+@\S+$/;

  if (value.match(simpleEmailFormat)) {
    isValid = true;
  }

  return isValid;
}

function isValidText(value) {
  let isValid = false;

  if (value !== '') {
    isValid = true;
  }

  return isValid;
}

module.exports = {
  Form: Form,
  isValidEmail: isValidEmail,
  isValidText: isValidText,
};
