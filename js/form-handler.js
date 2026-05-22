(() => {
  const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');

  if (!form || !message) return;

  const setMessage = (text, type) => {
    message.textContent = text;
    message.classList.remove('error', 'success');
    if (type) message.classList.add(type);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const body = String(formData.get('message') || '').trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
      setMessage('Please enter a valid name (at least 2 characters).', 'error');
      return;
    }
    if (!emailPattern.test(email)) {
      setMessage('Please enter a valid email address.', 'error');
      return;
    }
    if (subject.length < 3) {
      setMessage('Subject must be at least 3 characters.', 'error');
      return;
    }
    if (body.length < 10) {
      setMessage('Message must be at least 10 characters.', 'error');
      return;
    }

    setMessage('Thank you! Your message has been validated. Please send to the listed email address.', 'success');
    form.reset();
  });
})();
