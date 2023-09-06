const form = document.forms.mainForm;
const nameOfPerson = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');
const gender = document.querySelectorAll('input[name="gender"]');
const profession = document.getElementById('profession');
const password = document.getElementById('password');
const passwordRepeat = document.getElementById('passwordRepeat');
const agreement = document.getElementById('agreement');
const submit = document.getElementById('submit')

const nameError = document.getElementById('name-error')
const ageError = document.getElementById('age-error');
const genderError = document.getElementById('gender-error');
const professionError = document.getElementById('profession-error');
const passwordError = document.getElementById('password-error');
const passwordRepeatError = document.getElementById('passwordRepeat-error');
const agreementError = document.getElementById('agreement-error');

form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    if (nameOfPerson.value == "" || email.value == "" || age.value == "" || gender.value == "" || profession.value == "" || password.value == "" || passwordRepeat.value == "" || !agreement.checked) {
        document.querySelector('.errorsInfo').textContent = 'Все поля должны быть заполнены';
        return false;
    }

    if (nameOfPerson.value == "") {
        nameError.textContent = 'Пожалуйста, введите имя';
    }

    if (email.value == "") {
        ageError.textContent = 'Поожалуйста, введите ваш email'
    }

    if (gender.value == "") {
        genderError.textContent = 'Пожалуйста, укажите ваш пол'
    }

    if (profession.value == "") {
        professionError.textContent = 'Пожалуйста, укажите вашу профессию'
    }

    if (password.value == "") {
        passwordError.textContent = 'Поажуйста, придумайте пароль'
    }

    if (passwordRepeat.value == "") {
        passwordRepeatError.textContent = 'Пожалуйста, повторите пароль'
    }

    console.log('Имя:' + nameOfPerson.value);
    console.log('Email:' + email.value);
    console.log('Возраст:' + age.value);
    console.log('Пол:' + gender.value);
    console.log('Профессия:' + profession.value);
    console.log('Пароль:' + password.value);
    console.log('Повторить пароль:' + passwordRepeat.value);
    console.log('Согласие:' + agreement.value);
    form.reset();
    return true;
})

submit.onclick = function () {
    if (!agreement.checked) {
        agreementError.textContent = 'Примите согласие на обработку персональных данных';
    } else {
        agreementError.textContent = '';
    }
}