document.addEventListener('DOMContentLoaded', () => {
  const tooltips = document.querySelectorAll('.tooltip')
  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('click', () => {
      tooltip.children[0].classList.toggle('show')
    })
  })

  const popup_about = document.querySelectorAll('.button_about')
    popup_about.addEventListener('click', () => {
      popup_about.classList.toggle('show')
    })

    // function openPopupAbout () {
    //   let popup_about = document.querySelectorAll('.popup_about');
    //   popup_about.classList.toggle("show");
    // }
  
})