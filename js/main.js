/* ============================================
   THE PETS FATHER — Main JS
   Minimal, no libraries
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* — Header scroll behavior — */
  const header = document.querySelector('.header');
  const scrollThreshold = 60;

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* — Mobile menu — */
  const menuToggle = document.querySelector('.header__menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* — Smooth scroll for anchor links — */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  /* — Scroll reveal — */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* — Reel hover-play — */
  const reels = document.querySelectorAll('.social__reel');

  reels.forEach(reel => {
    const video = reel.querySelector('video');
    if (!video) return;

    reel.addEventListener('mouseenter', () => {
      video.play().catch(() => {});
    });

    reel.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });

    /* Touch: tap to play/pause */
    reel.addEventListener('click', () => {
      if (video.paused) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  });

  /* — Drag-to-scroll for social carousel — */
  const carousel = document.querySelector('.social__carousel');
  if (carousel) {
    let isDown = false, startX, scrollLeft;
    carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });
    carousel.addEventListener('mouseleave', () => { isDown = false; });
    carousel.addEventListener('mouseup', () => { isDown = false; });
    carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      carousel.scrollLeft = scrollLeft - (x - startX) * 1.5;
    });
  }

  /* — Lazy loading for videos — */
  const lazyVideos = document.querySelectorAll('.social__reel video');

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        const source = video.querySelector('source');
        if (source && source.dataset.src) {
          source.src = source.dataset.src;
          video.load();
        }
        videoObserver.unobserve(video);
      }
    });
  }, {
    rootMargin: '200px'
  });

  lazyVideos.forEach(v => videoObserver.observe(v));

  /* — Lazy-load final CTA background video — */
  const ctaVideo = document.querySelector('.final-cta__bg video');
  if (ctaVideo && ctaVideo.preload === 'none') {
    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ctaVideo.preload = 'auto';
          ctaVideo.load();
          ctaObserver.unobserve(ctaVideo);
        }
      });
    }, { rootMargin: '400px' });
    ctaObserver.observe(ctaVideo);
  }

});
