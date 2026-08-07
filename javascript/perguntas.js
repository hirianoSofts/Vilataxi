/* ==========================================================================
   INTERAÇÃO DO ACCORDION DO FAQ
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha todos os outros itens
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Alterna o estado do item clicado
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});
