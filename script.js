const registerButton = document.getElementById('registerButton');
  const targetElement = document.getElementById('targetElement');

  registerButton.addEventListener('click', () => {
    targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
  });