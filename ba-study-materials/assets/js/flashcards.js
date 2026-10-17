/**
 * BA Study Materials - Interactive Flashcard Engine
 * Powered by window.BA_FLASHCARDS_DATA (48 Cards)
 */

document.addEventListener('DOMContentLoaded', function () {
  const cardViewport = document.getElementById('fcCardViewport');
  const cardElement = document.getElementById('fcCard');
  if (!cardElement || !window.BA_FLASHCARDS_DATA) return;

  const cards = window.BA_FLASHCARDS_DATA;
  let filteredCards = [...cards];
  let currentIndex = 0;
  let isFlipped = false;

  // DOM Elements
  const promptEl = document.getElementById('fcPrompt');
  const answerEl = document.getElementById('fcAnswer');
  const idEl = document.getElementById('fcCardId');
  const catEl = document.getElementById('fcCategoryBadge');
  const typeEl = document.getElementById('fcTypeBadge');
  const sourceEl = document.getElementById('fcSourceBadge');
  const counterEl = document.getElementById('fcCounter');
  const progressFill = document.getElementById('fcProgressFill');

  const prevBtn = document.getElementById('fcPrevBtn');
  const nextBtn = document.getElementById('fcNextBtn');
  const flipBtn = document.getElementById('fcFlipBtn');
  const shuffleBtn = document.getElementById('fcShuffleBtn');

  const catSelect = document.getElementById('fcCategorySelect');
  const typeSelect = document.getElementById('fcTypeSelect');
  const searchInput = document.getElementById('fcSearchInput');

  function getCurrentLang() {
    return document.documentElement.lang || 'vi';
  }

  // Populate category dropdown
  function populateCategories() {
    const lang = getCurrentLang();
    const categories = new Map();
    cards.forEach(c => {
      if (!categories.has(c.category_id)) {
        categories.set(c.category_id, {
          en: c.category_en,
          vi: c.category_vi
        });
      }
    });

    const currentVal = catSelect.value;
    catSelect.innerHTML = `<option value="ALL">${lang === 'vi' ? 'Tất cả 8 Miền Tri thức' : 'All 8 Knowledge Domains'}</option>`;
    
    categories.forEach((names, id) => {
      const opt = document.createElement('option');
      opt.value = id;
      opt.textContent = (lang === 'vi') ? names.vi : names.en;
      catSelect.appendChild(opt);
    });

    catSelect.value = currentVal || 'ALL';
  }

  // Filter cards
  function applyFilters() {
    const selectedCat = catSelect.value;
    const selectedType = typeSelect.value;
    const query = (searchInput.value || '').trim().toLowerCase();
    const lang = getCurrentLang();

    filteredCards = cards.filter(card => {
      const matchCat = (selectedCat === 'ALL' || card.category_id === selectedCat);
      const matchType = (selectedType === 'ALL' || card.type_id === selectedType);
      
      let matchQuery = true;
      if (query) {
        const textToSearch = [
          card.id,
          card.prompt_vi, card.prompt_en,
          card.answer_vi, card.answer_en,
          card.category_vi, card.category_en
        ].join(' ').toLowerCase();
        matchQuery = textToSearch.includes(query);
      }

      return matchCat && matchType && matchQuery;
    });

    currentIndex = 0;
    isFlipped = false;
    cardElement.classList.remove('is-flipped');
    renderCurrentCard();
  }

  function renderCurrentCard() {
    const lang = getCurrentLang();
    const total = filteredCards.length;

    if (total === 0) {
      promptEl.textContent = (lang === 'vi') ? 'Không tìm thấy thẻ ghi nhớ nào phù hợp!' : 'No matching flashcards found!';
      answerEl.textContent = (lang === 'vi') ? 'Vui lòng thử chọn danh mục hoặc từ khóa tìm kiếm khác.' : 'Please adjust your filter or search keywords.';
      idEl.textContent = '0/0';
      catEl.textContent = '-';
      typeEl.textContent = '-';
      sourceEl.textContent = '-';
      counterEl.textContent = `0 / 0`;
      progressFill.style.width = '0%';
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      flipBtn.disabled = true;
      return;
    }

    prevBtn.disabled = (currentIndex === 0);
    nextBtn.disabled = (currentIndex === total - 1);
    flipBtn.disabled = false;

    const card = filteredCards[currentIndex];

    idEl.textContent = card.id;
    promptEl.textContent = (lang === 'vi') ? card.prompt_vi : card.prompt_en;
    answerEl.textContent = (lang === 'vi') ? card.answer_vi : card.answer_en;
    catEl.textContent = (lang === 'vi') ? card.category_vi : card.category_en;
    typeEl.textContent = (lang === 'vi') ? card.type_vi : card.type_en;
    sourceEl.textContent = (lang === 'vi') ? card.source_vi : card.source_en;

    counterEl.textContent = `${currentIndex + 1} / ${total}`;
    const pct = ((currentIndex + 1) / total) * 100;
    progressFill.style.width = pct + '%';
  }

  function toggleFlip() {
    isFlipped = !isFlipped;
    cardElement.classList.toggle('is-flipped', isFlipped);
  }

  function goToCard(idx) {
    if (idx < 0 || idx >= filteredCards.length) return;
    currentIndex = idx;
    isFlipped = false;
    cardElement.classList.remove('is-flipped');
    renderCurrentCard();
  }

  function shuffleCards() {
    for (let i = filteredCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredCards[i], filteredCards[j]] = [filteredCards[j], filteredCards[i]];
    }
    currentIndex = 0;
    isFlipped = false;
    cardElement.classList.remove('is-flipped');
    renderCurrentCard();
  }

  // Event Listeners
  cardElement.addEventListener('click', toggleFlip);
  flipBtn.addEventListener('click', toggleFlip);

  prevBtn.addEventListener('click', () => goToCard(currentIndex - 1));
  nextBtn.addEventListener('click', () => goToCard(currentIndex + 1));
  shuffleBtn.addEventListener('click', shuffleCards);

  catSelect.addEventListener('change', applyFilters);
  typeSelect.addEventListener('change', applyFilters);
  searchInput.addEventListener('input', applyFilters);

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    if (e.code === 'Space') {
      e.preventDefault();
      toggleFlip();
    } else if (e.code === 'ArrowRight') {
      goToCard(currentIndex + 1);
    } else if (e.code === 'ArrowLeft') {
      goToCard(currentIndex - 1);
    }
  });

  // Re-render when language toggle fires
  window.addEventListener('languageChanged', function () {
    populateCategories();
    renderCurrentCard();
  });

  // Initial load
  populateCategories();
  applyFilters();
});
