document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const iframe = document.querySelector('iframe');
  if (iframe) {
    iframe.setAttribute('loading', 'lazy');
  }
});
