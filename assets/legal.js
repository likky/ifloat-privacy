/* Progressive enhancement only: printing and small conveniences.
   No tracking, no cookies, no network requests. */
(function () {
  "use strict";

  document.addEventListener("click", function (event) {
    var printButton = event.target.closest("[data-print]");
    if (printButton) {
      event.preventDefault();
      window.print();
    }
  });

  var tocLinks = document.querySelectorAll('.toc a[href^="#"]');
  if (!tocLinks.length || !("IntersectionObserver" in window)) return;

  var sections = [];
  tocLinks.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    var section = document.getElementById(id);
    if (section) sections.push(section);
  });

  if (!sections.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        tocLinks.forEach(function (link) {
          var active = link.getAttribute("href") === "#" + entry.target.id;
          if (active) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
