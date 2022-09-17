const allLink = document.querySelectorAll('.menu__link');

allLink.forEach((link) => {
   link.onclick = function (event) {
      const element = document.querySelector('.menu_active')

      if (link.closest('.menu__item').querySelector('.menu_sub')) {
         link.closest('.menu__item').querySelector('.menu_sub').classList.toggle('menu_active')

         return false;
      }
   }
})