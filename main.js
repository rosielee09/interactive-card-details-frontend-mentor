const name = document.querySelector('#cardHolderName')
const cardNumber = document.querySelector('#cardHolderNumber')
const expMonth = document.querySelector('#cardMonth')
const expYear = document.querySelector('#cardYear')
const cvc = document.querySelector('#cardHolderNumberCVC')
const submitButton = document.querySelector(".confirmBtn")

const allForms = document.querySelectorAll('#cardHolderName, #cardHolderNumber, #cardMonth, #cardYear, #cardHolderNumberCVC, .confirmBtn')

submitButton.addEventListener('click', checkForm)
function checkForm(e) {
    //prevent default submit behavior
    e.preventDefault()
    console.log('You just clicked submit!!')
    if ()
    //check inputs are not empty
   
    //check card number, expiry date, or CVC field formatting
}

function checkEmpty(forms) {
    //check if any values are empty

    //check set empty styles
}


