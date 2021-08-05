const toggleBtn = document.querySelector('.navbar_toggleBtn');
const list = document.querySelector('.navbar_list');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    list.classList.toggle('active');
    icons.classList.toggle('active'); 
});
   