const Btn = document.querySelector('.navbar_Btn')
const list = document.querySelector('.navbar_list')
const social = document.querySelector('.navbar_social')

Btn.addEventListener('click', () =>{
    list.classList.toggle ('active');
    social.classList.toggle ('active');
})