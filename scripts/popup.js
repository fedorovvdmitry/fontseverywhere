document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.querySelectorAll('.tooltip')
    tooltips.forEach((tooltip) => {
      tooltip.addEventListener('click', () => {
        tooltip.children[0].classList.toggle('show')
      })
    })
  })