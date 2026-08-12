(function () {
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initFlip(box) {
    var faces = box.querySelectorAll('[data-aflip-face]');
    var count = box.querySelector('[data-aflip-count]');
    if (faces.length < 2) return null;
    var idx = 0;
    for (var i = 0; i < faces.length; i++) {
      var f = faces[i];
      f.style.transition = 'transform 0.6s cubic-bezier(.22,1,.36,1), opacity 0.4s ease';
      f.style.backfaceVisibility = 'hidden';
      f.style.transform = i === 0 ? 'rotateY(0deg)' : 'rotateY(180deg)';
      f.style.opacity = i === 0 ? '1' : '0';
      f.style.pointerEvents = i === 0 ? 'auto' : 'none';
    }
    function show(n) {
      for (var i = 0; i < faces.length; i++) {
        faces[i].style.transform = i === n ? 'rotateY(0deg)' : 'rotateY(-180deg)';
        faces[i].style.opacity = i === n ? '1' : '0';
        faces[i].style.pointerEvents = i === n ? 'auto' : 'none';
      }
      if (count) count.textContent = (n + 1) + ' / ' + faces.length;
    }
    if (count) count.textContent = '1 / ' + faces.length;
    var advance = function () { idx = (idx + 1) % faces.length; show(idx); };
    box.style.cursor = 'pointer';
    box.addEventListener('click', advance);
    box.__aflipDone = true;
    return advance;
  }

  function initMarquee(track) {
    if (track.__marqueeDone) return;
    track.__marqueeDone = true;
    if (reduced) return; // la fila queda estática y legible
    var x = 0, last = null, paused = false, speed = 26, gap = 18;
    var wrap = track.parentElement;
    wrap.addEventListener('mouseenter', function () { paused = true; });
    wrap.addEventListener('mouseleave', function () { paused = false; });

    // Fuera de pantalla no se anima: evita gastar batería en móvil.
    var onScreen = true;
    if (window.IntersectionObserver) {
      new IntersectionObserver(function (es) {
        es.forEach(function (en) { onScreen = en.isIntersecting; if (onScreen) last = null; });
      }, { threshold: 0 }).observe(wrap);
    }

    function step(t) {
      if (!onScreen) { last = null; requestAnimationFrame(step); return; }
      if (last === null) last = t;
      var dt = Math.min((t - last) / 1000, 0.05);
      last = t;
      if (!paused) {
        x -= speed * dt;
        var first = track.firstElementChild;
        if (first) {
          var w = first.getBoundingClientRect().width + gap;
          while (w > 0 && x <= -w) { x += w; track.appendChild(track.firstElementChild); }
        }
        track.style.transform = 'translateX(' + x + 'px)';
      }
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var timers = [];
  function boot() {
    var boxes = document.querySelectorAll('[data-aflip]');
    var advancers = [];
    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i].__aflipDone) continue;
      var a = initFlip(boxes[i]);
      if (a) advancers.push(a);
    }
    if (!reduced) {
      advancers.forEach(function (a, i) {
        timers.push(setTimeout(function () { timers.push(setInterval(a, 5200)); }, i * 650));
      });
    }
    var tracks = document.querySelectorAll('[data-marquee-track]');
    for (var j = 0; j < tracks.length; j++) initMarquee(tracks[j]);
  }

  // The DC streams its markup in, so poll briefly until the cards exist.
  var tries = 0;
  var poll = setInterval(function () {
    tries++;
    if (document.querySelector('[data-marquee-track]') || tries > 80) {
      clearInterval(poll);
      boot();
      setTimeout(boot, 800);
    }
  }, 120);
})();
