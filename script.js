document.addEventListener('DOMContentLoaded', function() {
     const sliders = document.querySelectorAll('.product-slider');
     
     sliders.forEach(slider => {
         const container = slider.querySelector('.product-container');
         const leftArrow = slider.querySelector('.arrow-left');
         const rightArrow = slider.querySelector('.arrow-right');
         const cardWidth = 215; // card width + gap
         
         leftArrow.addEventListener('click', function() {
             container.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' });
         });
         
         rightArrow.addEventListener('click', function() {
             container.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
         });
     });
     
     const header = document.querySelector('.header');
     const headerHeight = header.offsetHeight;
     
     window.addEventListener('scroll', function() {
         if (window.scrollY > 40) {
             header.classList.add('fixed');
         } else {
             header.classList.remove('fixed');
         }
     });
 });

 document.addEventListener('DOMContentLoaded', function() {
   const searchButton = document.getElementById('searchButton');
   const searchInput = document.getElementById('searchInput');
   const searchResult = document.getElementById('searchResult');
   const searchTerm = document.getElementById('searchTerm');
   
   searchButton.addEventListener('click', function(e) {
       e.preventDefault();
       const term = searchInput.value.trim();
       
       if (term) {
           searchTerm.textContent = term;
           searchResult.style.display = 'block';
       } else {
           searchResult.style.display = 'none';
       }
   });
   
   searchInput.addEventListener('keypress', function(e) {
       if (e.key === 'Enter') {
           e.preventDefault();
           searchButton.click();
       }
   });
   
   $('.product-container').slick({
       dots: true,
       arrows: true,
       infinite: true,
       speed: 300,
       slidesToShow: 4,
       slidesToScroll: 1,
       responsive: [
           {
               breakpoint: 1024,
               settings: {
                   slidesToShow: 3,
                   slidesToScroll: 1
               }
           },
           {
               breakpoint: 768,
               settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1
               }
           },
           {
               breakpoint: 480,
               settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1
               }
           }
       ]
   });
   
   $('.product-container').on('afterChange', function(event, slick, currentSlide) {
       $('.page-dots .dot').removeClass('active');
       $('.page-dots .dot').eq(currentSlide).addClass('active');
   });
   
   const header = document.querySelector('.header');
   
   window.addEventListener('scroll', function() {
       if (window.scrollY > 40) {
           header.classList.add('fixed');
       } else {
           header.classList.remove('fixed');
       }
   });
});