import tacoBackground from './assets/hard-shell-tacos.jpg.jpg';
import historyPictureImport from './assets/restaurant-outside-photo.png';

function createHomePage() {
    //Creating elements
    console.log('the Home button is working');
    const content = document.getElementById('content');
    content.innerHTML = "";
    const homeScreenDiv = document.createElement('div');
    const messageDiv = document.createElement('div');
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    const historyDiv = document.createElement('div')
    const historyMessage = document.createElement('div')
    const historyPicture = document.createElement('div')
    const historyPic = document.createElement('img')
    historyPic.src = historyPictureImport;

    // Appending elements
    content.appendChild(homeScreenDiv)
    content.appendChild(historyDiv)
    homeScreenDiv.appendChild(messageDiv)
    messageDiv.appendChild(h1)
    messageDiv.appendChild(h2)
    historyDiv.appendChild(historyMessage)
    historyDiv.appendChild(historyPicture)
    historyPicture.appendChild(historyPic)
    // Adding classes
    homeScreenDiv.classList.add("homeScreenDiv")
    messageDiv.classList.add("message")
    historyDiv.classList.add("historyDiv")
    historyMessage.classList.add("historyMessage")
    historyPicture.classList.add("historyPicture")
    historyPic.classList.add("historyPic")
    historyPicture.appendChild(historyPic)
    // Adding innerHTML
    h1.innerHTML = "Welcome to Dendy Tacos!";
    h2.innerHTML = "If only they were real...";
    historyMessage.innerHTML = "Welcome guests! My name is Max Dendy! After studying web-development for 8 straight months I became craving some authentic mexican tacos. (I'm still unable to explain this strange phenomenon.) Since there is no places in my hometown that could provide me this divine dish, I had to open up my own. That is how Dendy Tacos was born!"
    historyPic.innerHTML = `<img class="historyPic" src="./assets/restaurant-outside-photo.png">`
}

export default createHomePage;
