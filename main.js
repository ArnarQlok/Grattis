import './style.css'
import javascriptLogo from '/ballonger.jpeg'
import viteLogo from '/mamma.jpg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://www.ryanair.com/se/sv/" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="#" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Grattis på 60 års dagen mamma!</h1>
    <div class="card">
      <button id="birthday" type="button">Klicka här</button>
    </div>
    <p class="read-the-docs">
      Klicka på den älskvärda bilden :)
    </p>
  </div>
`



const birthdayButton = document.getElementById("birthday")
const readBirthday = document.querySelector('.read-the-docs')

readBirthday.style.display = "none"


birthdayButton.addEventListener('click', ()=> readBirthday.style.display = "block")
