const discs = document.querySelectorAll('.disc');
const tooltips = document.querySelectorAll('.tooltip');

discs.forEach((disc, index) => {
  disc.addEventListener('click', () => {

    tooltips.forEach((tooltip) => {
      tooltip.style.opacity = 0;
    });


    tooltips[index].style.opacity = 1;


    document.addEventListener('click', hideTooltip);
  });
});

function hideTooltip(event) {

  let isClickedInsideTooltip = false;
  tooltips.forEach((tooltip) => {
    if (tooltip.contains(event.target)) {
      isClickedInsideTooltip = true;
    }
  });


  if (!isClickedInsideTooltip) {
    tooltips.forEach((tooltip) => {
      tooltip.style.opacity = 0;
    });
    document.removeEventListener('click', hideTooltip);
  }
}
