
// Initialize highlight.js if present (loaded via CDN on the page).
document.addEventListener("DOMContentLoaded", function(){
  if (window.hljs) {
    document.querySelectorAll('pre code').forEach(el => hljs.highlightElement(el));
  }
});
