import "./styles.css";
import createHomePage from './home.js';
import createMenuPage from './menu.js';
import { addItemToMenu, addToDiv, menuItem, myMenu} from './menu.js';
import { generateContactPage } from "./contact.js";
console.log("this is working")
createHomePage()

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('homeButton');
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            createHomePage()
        })
    } else {
        console.error('homeButton not found')
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            
            createMenuPage()
            addToDiv(myMenu)
            console.log(myMenu)
        })
        
    } else {
        console.error('menuButton not found')
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.getElementById('contactButton');
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            
            generateContactPage()
        })
        
    } else {
        console.error('contactButton not found')
    }
})


