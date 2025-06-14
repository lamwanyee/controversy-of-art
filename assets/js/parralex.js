const sections = document.querySelectorAll('.image-section');
let currentIndex = 0;

const activateSection = (index) => {
  sections.forEach((sec, i) => {
    sec.classList.remove('active', 'prev');
    if (i === index) {
      sec.classList.add('active');
    } else if (i < index) {
      sec.classList.add('prev');
    }
  });
};

window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    // Scroll down
    if (currentIndex < sections.length - 1) {
      currentIndex++;
      activateSection(currentIndex);
    }
  } else {
    // Scroll up
    if (currentIndex > 0) {
      currentIndex--;
      activateSection(currentIndex);
    }
  }
});

window.addEventListener('load', () => {
  activateSection(currentIndex);
});
