document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. NAVEGAÇÃO MOBILE (DRAWER)
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openMenu() {
    mobileDrawer.classList.add('active');
    mobileMenuOverlay.classList.add('active');
  }

  function closeMenu() {
    mobileDrawer.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
  }

  mobileMenuBtn.addEventListener('click', openMenu);
  closeDrawerBtn.addEventListener('click', closeMenu);
  mobileMenuOverlay.addEventListener('click', closeMenu);
  drawerLinks.forEach(link => link.addEventListener('click', closeMenu));

  /* ==========================================================================
     2. CARROSSEL DE IMAGENS AUTOMÁTICO E COM SWIPE
     ========================================================================== */
  const track = document.getElementById('carouselTrack');
  const slides = Array.from(track.children);
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const dotsContainer = document.getElementById('carouselDots');
  const dots = Array.from(dotsContainer.children);

  let currentIndex = 0;
  let autoplayTimer;

  function updateCarousel(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      updateCarousel(currentIndex + 1);
    }, 4500);
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer);
  }

  nextBtn.addEventListener('click', () => {
    stopAutoplay();
    updateCarousel(currentIndex + 1);
    startAutoplay();
  });

  prevBtn.addEventListener('click', () => {
    stopAutoplay();
    updateCarousel(currentIndex - 1);
    startAutoplay();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      stopAutoplay();
      const targetSlide = parseInt(e.target.dataset.slide);
      updateCarousel(targetSlide);
      startAutoplay();
    });
  });

  // Suporte a gestos Touch (Swipe Mobile)
  let startX = 0;
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    stopAutoplay();
  });

  track.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) updateCarousel(currentIndex + 1);
    if (endX - startX > 50) updateCarousel(currentIndex - 1);
    startAutoplay();
  });

  startAutoplay();

  /* ==========================================================================
     3. BANNER PROMOÇÕES FIXO
     ========================================================================== */
  const closePromoBtn = document.getElementById('closePromoBtn');
  const promoBanner = document.getElementById('promoBanner');

  closePromoBtn.addEventListener('click', () => {
    promoBanner.classList.add('hidden');
  });
});


/* FECHAR BARRA PROMOCIONAL SUPERIOR */
const closeTopBannerBtn = document.getElementById('closeTopBannerBtn');
const topDriverBanner = document.getElementById('topDriverBanner');

if (closeTopBannerBtn && topDriverBanner) {
  closeTopBannerBtn.addEventListener('click', () => {
    topDriverBanner.style.display = 'none';
  });
}
