document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section, header'); // observe header too
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);

      if (!link) return;

      if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
        link.classList.add('disabled');
      } else {
        link.classList.remove('disabled');
      }
    });
  }, {
    threshold: 0.8,
    rootMargin: '-64px 0px 0px 0px' // adjust based on nav height (4rem = 64px)
  });

  sections.forEach(section => observer.observe(section));

  document.querySelectorAll('.project-image-wrapper').forEach(wrapper => {
    wrapper.addEventListener('mouseenter', () => {
      console.log('mouseenter:', wrapper);
      wrapper.classList.add('hovered');
    });
    wrapper.addEventListener('mouseleave', () => {
      console.log('mouseleave:', wrapper);
      wrapper.classList.remove('hovered');
    });
  });
});

document.querySelectorAll('.project-image-wrapper').forEach(wrapper => {
  wrapper.addEventListener('mouseenter', () => console.log('mouseenter fired'));
  wrapper.addEventListener('mouseleave', () => console.log('mouseleave fired'));
});