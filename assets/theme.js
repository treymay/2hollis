(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initHeader() {
    var header = document.querySelector('[data-header]');
    var hero = document.querySelector('[data-hero]');
    if (!header) return;

    function onScroll() {
      var y = window.scrollY;
      var threshold = hero ? window.innerHeight * 0.12 : 80;
      header.classList.toggle('is-scrolled', y > threshold);
      if (hero && !reduced) {
        hero.classList.toggle('is-fading', y > window.innerHeight * 0.08);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initMenu() {
    var openBtn = document.querySelector('[data-menu-open]');
    var closeBtn = document.querySelector('[data-menu-close]');
    var nav = document.querySelector('[data-mobile-nav]');
    if (!openBtn || !nav) return;

    function close() {
      nav.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', function () {
      nav.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
    if (closeBtn) closeBtn.addEventListener('click', close);
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  }

  function initHero() {
    var hero = document.querySelector('[data-hero]');
    if (!hero) return;

    var video = hero.querySelector('video');
    var poster = hero.querySelector('[data-poster]');
    var sound = hero.querySelector('[data-sound]');

    if (video) {
      video.muted = true;
      var play = video.play();
      if (play && play.catch) {
        play.catch(function () {
          if (poster) poster.style.opacity = '1';
        });
      }
      video.addEventListener('playing', function () {
        if (poster) poster.style.opacity = '0';
      });
    }

    if (sound && video) {
      var muted = true;
      sound.addEventListener('click', function () {
        muted = !muted;
        video.muted = muted;
        sound.setAttribute('aria-pressed', String(!muted));
        sound.textContent = muted ? 'SOUND OFF' : 'SOUND ON';
      });
    }
  }

  function initReveal() {
    if (reduced) {
      document.querySelectorAll('[data-reveal]').forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    items.forEach(function (el) { observer.observe(el); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initHeader();
    initMenu();
    initHero();
    initReveal();
  });
})();
