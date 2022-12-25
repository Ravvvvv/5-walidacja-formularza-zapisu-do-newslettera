console.log('Warsztaty - walidacja formularz do zapisu Newslatera');


let newsletteForm = document.getElementById('newslette-form')
let agree3Chx = document.getElementById('agree3')
const validate = (event) => {

    let txtName = document.getElementById('name')
    let txtEmail = document.getElementById('email')
    let agree1 = document.getElementById('agree1')
    let errors = document.getElementById('errors')

    errors.innerHTML = '';

    if (txtName.value.trim() === '') {

        let liError = document.createElement('li');

        liError.innerText = "wpisz imie i nazwisko";

        errors.appendChild(liError)

        console.log('wpisz imie i nazwisko:');
        console.log(liError);
    }

    if (txtEmail.value.trim() === '') {

        let liError = document.createElement('li');

        liError.innerText = "wpisz adres email";

        errors.appendChild(liError)

    }

    if (!txtEmail.value.includes('@')) {

        let liError = document.createElement('li');

        liError.innerText = "Adres musi posiadc @";

        errors.appendChild(liError)

    }

    if (!agree1.checked) {

        let liError = document.createElement('li');

        liError.innerText = "Musisz wyrazic zgody 1";

        errors.appendChild(liError)

    }

    console.log(errors.children.length);
    if (errors.children.length > 0) {
        event.preventDefault();

    }



}

const agree3 = (event) => {

    let agree1 = document.getElementById('agree1')
    let agree2 = document.getElementById('agree2')



    agree1.checked = event.target.checked
    agree2.checked = event.target.checked
    agree1.disabled = event.target.checked
    agree2.disabled = event.target.checked
    // console.log(event.target.checked);

}


newsletteForm.addEventListener('submit', validate)
// console.log(newsletteForm);
// console.log(agree3Chx);
agree3Chx.addEventListener('change', agree3)