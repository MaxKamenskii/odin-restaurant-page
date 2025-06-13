import alpastorTacos from './assets/menu/alpastor-tacos.png';
import birriaTacos from './assets/menu/birria-tacos.png';
import carneAsadoTacos from './assets/menu/carne-asado-tacos.png';
import chickenTingaTacos from './assets/menu/chicken-tinga-tacos.png';
import crispyFishTacos from './assets/menu/crispy-fish-tacos.png';
import JackfruitBarbacoaTacos from './assets/menu/jackfruit-barbacoa-tacos.png';
import PoloAsadoTacos from './assets/menu/polo-asado-tacos.png';
import VeggieDelightTacos from './assets/menu/veggie-delight-tacos.png';
import TofuAlCarbonTacos from './assets/menu/tofu-al-carbon-tacos.png';
import tacoBackground from './assets/hard-shell-tacos.jpg.jpg';

function generateMenu() {

    content.innerHTML = '';
}

export const myMenu = [];

export class MenuItem {
    constructor(name, ingredients, price, picture) {
        this.name = name;
        this.ingredients = ingredients;
        this.price = price;
        this.picture = picture;
    }
}

export function addItemToMenu(name, ingredients, price, picture) {
    let item = new MenuItem(name, ingredients, price, picture)
    myMenu.push(item);
}

addItemToMenu("Al Pastor Taco", "Marinated pork, pineapple, onions, cilantro on corn tortillas", 3.45, alpastorTacos)
addItemToMenu("Birria Tacos", "Slow-braised beef, melted cheese, cilantro, corn tortillas", 10.49, birriaTacos)
addItemToMenu("Pollo Asado Tacos", "Grilled chicken, mango salsa, crema, flour tortillas", 8.49, PoloAsadoTacos)
addItemToMenu("Carne Asado Tacos", "Char-grilled steak, pico de gallo, cotija cheese, corn tortillas", 9.99, carneAsadoTacos)
addItemToMenu("Crispy Fish Tacos", "Beer-battered white fish, cabbage slaw, chipotle mayo, flour tortillas", 9.25, crispyFishTacos)
addItemToMenu("Tinga de Pollo Tacos", "Shredded chicken in chipotle sauce, pickled onions, avocado, corn tortillas", 8.75, chickenTingaTacos)
addItemToMenu("Veggie Delight Taco", "Grilled zucchini, bell peppers, vegan crema, corn tortillas", 7.75, VeggieDelightTacos)
addItemToMenu("Jackfruit Barbacoa Taco", "Smoky jackfruit, red onion, cilantro-lime sauce, corn tortillas", 8.25, JackfruitBarbacoaTacos)
addItemToMenu("Tofu Al Carbon Taco", "Marinated grilled tofu, roasted corn, salsa verde, flour tortillas", 7.75, TofuAlCarbonTacos)

export function addToDiv(menuArray) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menuDiv')
    menuDiv.setAttribute("id", "menuDiv");
    content.appendChild(menuDiv)
    var div = document.getElementById('menuDiv');
    for(let i = 0; i < menuArray.length; i++) {
        const item = document.createElement('div')
        item.classList.add('item')
        const itemPic = document.createElement('div')
        itemPic.classList.add("itemPicture")
        const itemName = document.createElement('div')
        itemName.classList.add("itemName")
        const ingredients = document.createElement('div')
        ingredients.classList.add("itemIngredients")
        const price = document.createElement('div')
        price.classList.add('itemPrice')
        const button = document.createElement('button')
        button.classList.add('orderItemButton')
        const image = document.createElement('img')
        image.src = menuArray[i].picture
        menuDiv.appendChild(item)
        item.appendChild(itemPic)
        itemPic.appendChild(image)
        item.appendChild(itemName)
        item.appendChild(ingredients)
        item.appendChild(price)
        
        itemName.innerHTML = (menuArray[i].name)
        ingredients.innerHTML = (menuArray[i].ingredients)
        price.innerHTML = (`$${menuArray[i].price}`)

    }
}

export default generateMenu;