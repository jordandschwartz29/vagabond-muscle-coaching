// Vagabond Muscle — progressive reveal on scroll (no-JS safe: content stays visible if this never runs)
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var vh = window.innerHeight || document.documentElement.clientHeight;
  var targets = [].slice.call(document.querySelectorAll('section'));
  var below = targets.filter(function (el) {
    return el.getBoundingClientRect().top > vh * 0.85; // only animate what's below the fold
  });
  if (!below.length || !('IntersectionObserver' in window)) return;
  below.forEach(function (el) { el.classList.add('reveal'); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
  below.forEach(function (el) { io.observe(el); });
})();
