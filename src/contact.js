import background from './assets/contactBackground.jpg'
import facebookSVG from './assets/icons/facebook.svg'
import twitterSVG from './assets/icons/twitter.svg'
import instaSVG from './assets/icons/instagram.svg'

export function generateContactPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    //Create elements
    const contactDiv = document.createElement('div')
    const topDiv = document.createElement('div');
    const addressDiv = document.createElement('div');
    const emailPhoneDiv = document.createElement('div');
    const socialsDiv = document.createElement('div');
    const bottomDiv = document.createElement('div');
    const address = document.createElement('h1');
    const street = document.createElement('h2');
    const city = document.createElement('h2');
    const emailHeader = document.createElement('h1')
    const email = document.createElement('h2')
    const phoneHeader = document.createElement('h1')
    const phone = document.createElement('h2')
    const iconsDiv = document.createElement('div')
    const bookingDiv = document.createElement('div')
    const facebookIcon = document.createElement('img')
    const twitterIcon = document.createElement('img')
    const instagramIcon = document.createElement('img')
    const bookTableButton = document.createElement('button')
    const formHeaderDiv = document.createElement('div')
    const formDiv = document.createElement('div')
    // Append divs
    content.appendChild(contactDiv)
    contactDiv.append(topDiv, bottomDiv)
    topDiv.append(addressDiv, emailPhoneDiv, socialsDiv)
    addressDiv.append(address, street, city)
    emailPhoneDiv.append(emailHeader, email, phoneHeader, phone)
    socialsDiv.append(iconsDiv, bookingDiv)
    iconsDiv.append(facebookIcon, twitterIcon, instagramIcon)
    bookingDiv.append(bookTableButton)
    bottomDiv.append(formHeaderDiv, formDiv)

    //Creating classes
    contactDiv.classList.add('contactDiv')
    topDiv.classList.add('topDiv')
    addressDiv.classList.add('addressDiv')
    emailPhoneDiv.classList.add('emailPhoneDiv')
    socialsDiv.classList.add('socialsDiv')
    iconsDiv.classList.add('iconsDiv')
    bottomDiv.classList.add('bottomDiv')
    bookTableButton.classList.add('bookTableButton')
    formHeaderDiv.classList.add('formHeaderDiv')
    //Inner HTML
    address.innerHTML = "Address"
    street.innerHTML = "22 Beach Avenue"
    city.innerHTML = "Los Angeles, California"
    emailHeader.innerHTML = "Email"
    email.innerHTML = "dendytacos@mail.com"
    phoneHeader.innerHTML = "Phone"
    phone.innerHTML = "+1-222-222-2222"
    bookTableButton.innerHTML = "Book a table"
    formHeaderDiv.innerHTML = "Contact"
    //Icons
    facebookIcon.src = facebookSVG;
    twitterIcon.src = twitterSVG;
    instagramIcon.src = instaSVG;

    //Creating the form
    const contactForm = document.createElement('form')
    formDiv.classList.add('formDiv')
    formDiv.append(contactForm)
    const formRow1 = document.createElement('div')
    const formRow2 = document.createElement('div')
    const formRow3 = document.createElement('div')
    contactForm.classList.add('contactForm')
    const inputName = document.createElement('input')
    const nameLabel = document.createElement('label')
    const inputPhone = document.createElement('input')
    const phoneLabel = document.createElement('label')
    const inputEmail = document.createElement('input')
    const emailLabel = document.createElement('label')
    const inputMessage = document.createElement('input')
    const messageLabel = document.createElement('label')
    const formButton = document.createElement('button')
    const nameDiv = document.createElement('div')
    const phoneDiv = document.createElement('div')
    
    contactForm.append(formRow1, formRow2, formRow3, formButton)
    formRow1.append(nameDiv, phoneDiv)
    nameDiv.append(nameLabel, inputName)
    phoneDiv.append(phoneLabel, inputPhone)
    formRow2.append(emailLabel, inputEmail)
    formRow3.append(messageLabel, inputMessage)
    formRow1.classList.add('formRow')
    formRow2.classList.add('formRow')
    formRow3.classList.add('formRow')
    formRow1.setAttribute('id', 'formRow1')
    formRow2.setAttribute('id', 'formRow2')
    formRow3.setAttribute('id', 'formRow3')
    //Name attributes
    nameLabel.setAttribute('for', 'name')
    nameLabel.innerHTML = "Name"
    inputName.setAttribute("type", "text")
    inputName.setAttribute("id", "name")
    nameDiv.classList.add('nameDiv')
    //Phone attributes
    phoneLabel.setAttribute('for', 'phone')
    phoneLabel.innerHTML = "Phone"
    inputPhone.setAttribute('type', "tel")
    inputPhone.setAttribute('id', "phone")
    phoneDiv.classList.add('phoneDiv')
    //Email attributes
    emailLabel.setAttribute('for', 'email')
    emailLabel.innerHTML = "Email"
    inputEmail.setAttribute('type', 'email')
    inputEmail.setAttribute('id', 'email')
    //Message attribute
    messageLabel.setAttribute('for', 'message')
    messageLabel.innerHTML = "Message"
    inputMessage.setAttribute('type', 'text')
    inputMessage.setAttribute('id', 'message')
    //Button
    formButton.innerHTML = "Submit"
    formButton.classList.add('formButton')
}
