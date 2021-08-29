// Imports
import cardList from '../data/card.js'
import bankList from '../data/bank.js'

// Selecting DOM elements
const elBankHeading = document.querySelector('.card__bank-heading')

const elWrapperCardInputs = document.querySelector('.card-data__card-number')

const elCardNumberInput = document.querySelector('.card-data__card-number > #card-number')
const elBankNumberInput = document.querySelector('.card-data__card-number > #bank-number')
const elUserCardIdInput1 = document.querySelector('.card-data__card-number > #user-number-1')
const elUserCardIdInput2 = document.querySelector('.card-data__card-number > #user-number-2')

const elCardDateMonthInput = document.querySelector('.card-data__card-date > #card-number-month')
const elCardDateYearInput = document.querySelector('.card-data__card-date > #card-number-year')

const elCardUsernameInput = document.querySelector('.card__footer > #card-username')

const elCardBrandIcon = document.querySelector('.card-brand-icon')


// Card input checker
function cardInputChecker() {
  switch (elCardNumberInput.value) {
    case '4278':
      elCardBrandIcon.style.opacity = 1
      elCardBrandIcon.setAttribute('src', `${cardList.visa}`)
      break
    case '9860':
      elCardBrandIcon.style.opacity = 1
      elCardBrandIcon.setAttribute('src', `${cardList.humo}`)
      break
    case '8600':
      elCardBrandIcon.style.opacity = 1
      elCardBrandIcon.setAttribute('src', `${cardList.uzcard}`)
      break
    case '5300':
      elCardBrandIcon.style.opacity = 1
      elCardBrandIcon.setAttribute('src', `${cardList.mastercard}`)
      break
    default:
      elCardBrandIcon.style.opacity = 0
    }
}

// Bank input checker
function bankInputChecker() {
  switch (elBankNumberInput.value) {
    case '2742':
      elBankHeading.textContent = `${bankList.nbu}`
      break
    case '7532':
      elBankHeading.textContent = `${bankList.sqb}`
      break
    case '3572':
      elBankHeading.textContent = `${bankList.tbc}`
      break
    case '1135':
      elBankHeading.textContent = `${bankList.xalq}`
      break
    case '1650':
      elBankHeading.textContent = `${bankList.kapitalBank}`
      break
    case '1660':
      elBankHeading.textContent = `${bankList.orientFinance}`
      break
    default:
      elBankHeading.textContent = "Your Bank"
  }
}

// Change focus while fill input
function cardInputChangeFocus() {
  // * Card Numbers
  // Card number
  if (elCardNumberInput?.value.length === 4)
    elBankNumberInput.focus()

  // Bank number
  if (elBankNumberInput?.value.length === 4)
    elUserCardIdInput1.focus()

  if (elUserCardIdInput1?.value.length === 4)
    elUserCardIdInput2.focus()

  if (elUserCardIdInput2?.value.length === 4)
    elCardDateMonthInput.focus()

  // * Card Date
  // Month
  if (elCardDateMonthInput?.value.length === 2)
    elCardDateYearInput.focus()

  // Year
  if (elCardDateYearInput?.value.length === 2)
    elCardUsernameInput.focus()
}

// Events
elCardNumberInput.addEventListener('keyup', cardInputChecker)
elBankNumberInput.addEventListener('keyup', bankInputChecker)

elWrapperCardInputs.addEventListener('keyup', cardInputChangeFocus)