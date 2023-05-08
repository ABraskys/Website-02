const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  
  // Change button style
  const buttons = document.getElementsByTagName("button")
  swiper.on("slideChange", function(){
    // Removes active class from buttons
    for(let button of buttons){
      button.classList.remove("active")
    }
  
    // Add active class according to active index
    let index = swiper.activeIndex
    buttons[index].classList.add("active")
  })
  
  // Change slide according to button index
  for(let button of buttons){
    button.addEventListener("click", function() {
      swiper.slideTo(this.getAttribute("index"))
    })
  }
  