const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const textBox = document.getElementById('text-box');
const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'


// dark or Light img
function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`
    image2.src = `img/undraw_feeling_proud_${color}.svg`
    image3.src = ` img/undraw_conceptual_idea_${color}.svg`
}

//Toggle function
function toggleDarkLightMode(isDark){
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 /50%)'; // wenn es dunkel ist ? benutze dark wenn nicht : dann light
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 /50%)' : 'rgb(0 0 0 / 50%)'; // wenn es dunkel ist ? benutze dark wenn nicht : dann light
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : ('fa-moon', 'fa-sun');
    isDark ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}


// switch theme dynomically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', DARK_THEME);
        localStorage.setItem('theme', DARK_THEME);
        toggleDarkLightMode(LIGHT_THEME);
    }else{
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);
        localStorage.setItem('theme', LIGHT_THEME);
        toggleDarkLightMode(DARK_THEME);
    }
}

// eventlistener 
toggleSwitch.addEventListener('change', switchTheme);

// check localstorage for theme

const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme == DARK_THEME){
        toggleSwitch.checked = LIGHT_THEME;
        toggleDarkLightMode(LIGHT_THEME);
    }
}
