// SanDhee: small enhancement for keyboard and touch-friendly interactions.
// Navigation uses ordinary links, so both pages also work without JavaScript.
document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    // Let the browser handle navigation normally.
  });
});
