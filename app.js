// Logique interactive complète pour Mars & Vénus PWA (Dr John Gray)

document.addEventListener('DOMContentLoaded', () => {
  initPWA();
  initNetworkStatus();
  initNavigation();
  initPerspectiveFilter();
  initOverview();
  initSeasons();
  initTranslator();
  initCycles();
  initPointsTracker();
  initSupportGuide();
  initLoveLetter();
  initDefensiveStances();
  initSimulator();
  initChapters();
  initTraps();
  initBonusPoints();
  initIndirectDemands();
  initRealLetters();
  initEmotionalMasks();
  initDisputesAnalysis();
  initNinetyTen();
  handleUrlHash();
});

// 0. Enregistrement PWA & Installation
let deferredPrompt = null;

function initPWA() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('[PWA] Service Worker actif :', reg.scope))
        .catch((err) => console.warn('[PWA] Erreur Service Worker :', err));
    });
  }

  const installBanner = document.getElementById('pwa-install-banner');
  const installBtn = document.getElementById('pwa-install-btn');
  const headerInstallBtn = document.getElementById('header-install-btn');
  const dismissBtn = document.getElementById('pwa-dismiss-btn');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (!localStorage.getItem('pwa_dismissed') && installBanner) {
      installBanner.classList.remove('hidden');
    }
    if (headerInstallBtn) headerInstallBtn.classList.remove('hidden');
  });

  function triggerInstall() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
      if (installBanner) installBanner.classList.add('hidden');
      if (headerInstallBtn) headerInstallBtn.classList.add('hidden');
    });
  }

  if (installBtn) installBtn.addEventListener('click', triggerInstall);
  if (headerInstallBtn) headerInstallBtn.addEventListener('click', triggerInstall);
  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      if (installBanner) installBanner.classList.add('hidden');
      localStorage.setItem('pwa_dismissed', 'true');
    });
  }

  window.addEventListener('appinstalled', () => {
    if (installBanner) installBanner.classList.add('hidden');
    if (headerInstallBtn) headerInstallBtn.classList.add('hidden');
  });
}

function initNetworkStatus() {
  const offlineIndicator = document.getElementById('offline-indicator');
  function updateOnlineStatus() {
    if (!offlineIndicator) return;
    if (navigator.onLine) {
      offlineIndicator.classList.add('hidden');
    } else {
      offlineIndicator.classList.remove('hidden');
    }
  }
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
}

// 1. Navigation Unifiée (Desktop & Mobile)
const MORE_TAB_INFO = {
  'tab-support': { icon: '🤝', label: 'Soutien' },
  'tab-letter': { icon: '💌', label: 'Lettre' },
  'tab-simulator': { icon: '🛡️', label: 'Disputes' },
  'tab-chapters': { icon: '📖', label: 'Livre' },
};

function openMobileMoreSheet() {
  const sheet = document.getElementById('mobile-more-sheet');
  if (sheet) {
    sheet.classList.add('sheet-open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMoreSheet() {
  const sheet = document.getElementById('mobile-more-sheet');
  if (sheet) {
    sheet.classList.remove('sheet-open');
    document.body.style.overflow = '';
  }
}

function switchTab(targetId) {
  const navBtns = document.querySelectorAll('.nav-btn');
  const mobileNavBtns = document.querySelectorAll('.mobile-nav-btn');
  const mobilePillBtns = document.querySelectorAll('.mobile-pill-btn');
  const sheetBtns = document.querySelectorAll('.sheet-module-btn');
  const sections = document.querySelectorAll('.tab-section');

  // Desktop Navigation Buttons
  navBtns.forEach(b => {
    if (b.dataset.target === targetId) {
      b.classList.add('bg-rose-500', 'text-white', 'shadow-md', 'active-tab');
      b.classList.remove('text-slate-600', 'hover:bg-slate-100');
    } else {
      b.classList.remove('bg-rose-500', 'text-white', 'shadow-md', 'active-tab');
      b.classList.add('text-slate-600', 'hover:bg-slate-100');
    }
  });

  // Mobile Top Swipeable Pills
  mobilePillBtns.forEach(pill => {
    if (pill.dataset.target === targetId) {
      pill.classList.add('bg-rose-500', 'text-white', 'shadow-xs');
      pill.classList.remove('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200');
      try {
        pill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } catch (e) {}
    } else {
      pill.classList.remove('bg-rose-500', 'text-white', 'shadow-xs');
      pill.classList.add('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200');
    }
  });

  // Mobile Bottom 5-Button Dock
  const moreToggleBtn = document.getElementById('mobile-more-toggle-btn');
  const moreIcon = document.getElementById('mobile-more-btn-icon');
  const moreLabel = document.getElementById('mobile-more-btn-label');
  const moreDot = document.getElementById('mobile-more-btn-dot');
  const isMoreTab = !!MORE_TAB_INFO[targetId];

  mobileNavBtns.forEach(b => {
    if (b === moreToggleBtn) {
      if (isMoreTab) {
        b.classList.add('text-rose-600', 'font-bold');
        b.classList.remove('text-slate-500');
        if (moreIcon) moreIcon.textContent = MORE_TAB_INFO[targetId].icon;
        if (moreLabel) moreLabel.textContent = MORE_TAB_INFO[targetId].label;
        if (moreDot) moreDot.classList.remove('hidden');
      } else {
        b.classList.remove('text-rose-600', 'font-bold');
        b.classList.add('text-slate-500');
        if (moreIcon) moreIcon.textContent = '☰';
        if (moreLabel) moreLabel.textContent = 'Menu';
        if (moreDot) moreDot.classList.add('hidden');
      }
    } else {
      if (b.dataset.target === targetId) {
        b.classList.add('text-rose-600', 'font-bold');
        b.classList.remove('text-slate-500');
      } else {
        b.classList.remove('text-rose-600', 'font-bold');
        b.classList.add('text-slate-500');
      }
    }
  });

  // Highlight in Sheet Drawer
  sheetBtns.forEach(sb => {
    if (sb.dataset.sheetTarget === targetId) {
      sb.classList.add('border-rose-500', 'bg-rose-50/80', 'ring-2', 'ring-rose-200');
      sb.classList.remove('border-slate-200/90', 'bg-slate-50/70');
    } else {
      sb.classList.remove('border-rose-500', 'bg-rose-50/80', 'ring-2', 'ring-rose-200');
      sb.classList.add('border-slate-200/90', 'bg-slate-50/70');
    }
  });

  // Switch sections
  sections.forEach(sec => {
    if (sec.id === targetId) {
      sec.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      sec.classList.add('hidden');
    }
  });

  // Close sheet if open
  closeMobileMoreSheet();
}

function initNavigation() {
  // Desktop navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.target));
  });

  // Mobile top pill buttons
  document.querySelectorAll('.mobile-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.target));
  });

  // Mobile bottom dock buttons (only those with dataset.target)
  document.querySelectorAll('.mobile-nav-btn[data-target]').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.target));
  });

  // Bottom Sheet Drawer Toggle & Close
  const moreToggleBtn = document.getElementById('mobile-more-toggle-btn');
  const moreCloseBtn = document.getElementById('mobile-more-close-btn');
  const moreBackdrop = document.getElementById('mobile-more-backdrop');

  if (moreToggleBtn) {
    moreToggleBtn.addEventListener('click', () => {
      const sheet = document.getElementById('mobile-more-sheet');
      if (sheet && sheet.classList.contains('sheet-open')) {
        closeMobileMoreSheet();
      } else {
        openMobileMoreSheet();
      }
    });
  }

  if (moreCloseBtn) {
    moreCloseBtn.addEventListener('click', closeMobileMoreSheet);
  }

  if (moreBackdrop) {
    moreBackdrop.addEventListener('click', closeMobileMoreSheet);
  }

  // Sheet module items
  document.querySelectorAll('.sheet-module-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.sheetTarget;
      if (target) switchTab(target);
    });
  });
}

function handleUrlHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    switchTab(hash);
  }
}

// 2. Filtre de Perspective (Harmonie / Mars / Vénus)
let currentPerspective = 'all';
function initPerspectiveFilter() {
  const pBtns = document.querySelectorAll('.perspective-btn');
  pBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const p = btn.dataset.perspective;
      pBtns.forEach(b => {
        if (b.dataset.perspective === p) {
          b.classList.remove('bg-slate-100', 'text-slate-600');
          b.classList.add('bg-slate-900', 'text-white', 'shadow');
        } else {
          b.classList.remove('bg-slate-900', 'text-white', 'shadow');
          b.classList.add('bg-slate-100', 'text-slate-600');
        }
      });
      currentPerspective = p;
      applyPerspective();
    });
  });
}

function applyPerspective() {
  const marsCards = document.querySelectorAll('.card-mars');
  const venusCards = document.querySelectorAll('.card-venus');

  if (currentPerspective === 'mars') {
    marsCards.forEach(c => c.style.opacity = '1');
    venusCards.forEach(c => c.style.opacity = '0.35');
  } else if (currentPerspective === 'venus') {
    marsCards.forEach(c => c.style.opacity = '0.35');
    venusCards.forEach(c => c.style.opacity = '1');
  } else {
    marsCards.forEach(c => c.style.opacity = '1');
    venusCards.forEach(c => c.style.opacity = '1');
  }
}

// 3. Overview : Les 6 Paires de Besoins Primaires
function initOverview() {
  const container = document.getElementById('needs-container');
  if (!container) return;

  container.innerHTML = MARS_VENUS_DATA.emotionalNeeds.map(need => `
    <div class="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm card-hover flex flex-col justify-between">
      <div class="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
        <!-- Vénus -->
        <div class="p-3.5 sm:p-4 rounded-xl bg-pink-50/70 border border-pink-200 card-venus transition-smooth">
          <div class="flex items-center gap-2 text-pink-700 font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-1.5">
            <span class="w-2 h-2 rounded-full bg-pink-500"></span>
            Besoin Vénusien
          </div>
          <h4 class="font-bold text-slate-800 text-xs sm:text-sm mb-1">${need.venusNeed}</h4>
          <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed">${need.venusDesc}</p>
        </div>

        <!-- Mars -->
        <div class="p-3.5 sm:p-4 rounded-xl bg-orange-50/70 border border-orange-200 card-mars transition-smooth">
          <div class="flex items-center gap-2 text-orange-700 font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-1.5">
            <span class="w-2 h-2 rounded-full bg-orange-500"></span>
            Besoin Martien
          </div>
          <h4 class="font-bold text-slate-800 text-xs sm:text-sm mb-1">${need.marsNeed}</h4>
          <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed">${need.marsDesc}</p>
        </div>
      </div>

      <!-- Synergie -->
      <div class="bg-slate-50 rounded-xl p-3 border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
        <span class="text-amber-500 text-base leading-none">✨</span>
        <div class="text-[11px] sm:text-xs"><strong class="text-slate-800 font-semibold">Synergie :</strong> ${need.synergy}</div>
      </div>
    </div>
  `).join('');
}

// Les 4 Saisons de l'Amour (Chapitre 13)
function initSeasons() {
  const container = document.getElementById('seasons-container');
  if (!container) return;

  container.innerHTML = MARS_VENUS_DATA.seasons.map(s => `
    <div class="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 card-hover flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="text-2xl">${s.icon}</span>
          <div>
            <h4 class="font-bold text-xs sm:text-sm text-slate-900">${s.name}</h4>
            <span class="text-[10px] font-semibold text-emerald-700">${s.state}</span>
          </div>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed mb-3">${s.desc}</p>
      </div>
      <div class="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-700">
        <strong class="text-emerald-800 block text-[10px] uppercase mb-0.5">Conseil de saison :</strong>
        ${s.advice}
      </div>
    </div>
  `).join('');
}

// 4. Décodeur / Traducteur (28 Expressions)
function initTranslator() {
  const container = document.getElementById('dictionary-cards');
  const searchInput = document.getElementById('dict-search');
  const filterSpeakerBtns = document.querySelectorAll('.dict-filter-btn');
  let speakerFilter = 'all';

  function renderDictionary() {
    if (!container) return;
    const query = (searchInput?.value || '').toLowerCase().trim();

    const filtered = MARS_VENUS_DATA.dictionary.filter(item => {
      const matchSpeaker = speakerFilter === 'all' || item.speaker === speakerFilter;
      const matchQuery = item.phrase.toLowerCase().includes(query) ||
                         item.venusianMeaning.toLowerCase().includes(query) ||
                         (item.martianMeaning && item.martianMeaning.toLowerCase().includes(query)) ||
                         item.goodReaction.toLowerCase().includes(query);
      return matchSpeaker && matchQuery;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-10 text-center text-slate-400">
          <p class="text-base font-semibold">Aucune expression trouvée pour « ${query} ».</p>
          <p class="text-xs text-slate-500 mt-1">Essayez avec un autre mot-clé (ex: "jamais", "écoute", "ça va", "rien").</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => {
      const isVenus = item.speaker === 'venus';
      const badgeBg = isVenus ? 'bg-pink-100 text-pink-700 border-pink-200' : 'bg-orange-100 text-orange-700 border-orange-200';
      const label = isVenus ? '👩 Vénus s\'exprime (Traduction pour lui)' : '👨 Mars s\'exprime (Traduction pour elle)';
      const meaning = isVenus ? item.venusianMeaning : item.martianMeaning;
      const literal = isVenus ? item.literalMartian : item.literalVenusian;

      return `
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 card-hover flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${badgeBg}">${label}</span>
              <span class="text-[11px] text-slate-400 font-medium">Ch. 5</span>
            </div>

            <div class="mb-3.5">
              <p class="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Ce qui est dit verbalement :</p>
              <h3 class="text-base sm:text-lg font-bold text-slate-800 font-serif-title italic">« ${item.phrase} »</h3>
            </div>

            <div class="mb-2.5 p-3 rounded-xl bg-red-50/80 border border-red-200">
              <div class="flex items-center gap-1.5 text-xs font-bold text-red-700 mb-0.5">
                <span>⚠️</span> L'erreur d'interprétation littérale :
              </div>
              <p class="text-xs text-red-800">${literal}</p>
            </div>

            <div class="mb-2.5 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200">
              <div class="flex items-center gap-1.5 text-xs font-bold text-emerald-700 mb-0.5">
                <span>💡</span> La vraie signification profonde :
              </div>
              <p class="text-xs text-emerald-900 font-medium">${meaning}</p>
            </div>

            <div class="mb-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <span class="font-bold text-slate-800">⚡ Réaction toxique à éviter :</span>
              <div class="mt-0.5 italic text-slate-500">« ${item.badReaction} »</div>
            </div>
          </div>

          <div class="mt-3 p-3.5 sm:p-4 rounded-xl ${isVenus ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white' : 'bg-gradient-to-r from-orange-500 to-amber-600 text-white'} shadow-md">
            <div class="text-[10px] sm:text-xs uppercase tracking-wider font-bold opacity-90 mb-1">✨ Réponse recommandée par John Gray :</div>
            <p class="text-xs sm:text-sm font-semibold leading-snug">« ${item.goodReaction} »</p>
          </div>
        </div>
      `;
    }).join('');
  }

  if (searchInput) searchInput.addEventListener('input', renderDictionary);

  filterSpeakerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterSpeakerBtns.forEach(b => {
        b.classList.remove('bg-rose-500', 'text-white', 'border-rose-500');
        b.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
      });
      btn.classList.add('bg-rose-500', 'text-white', 'border-rose-500');
      btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
      speakerFilter = btn.dataset.speaker;
      renderDictionary();
    });
  });

  renderDictionary();
}

// 5. Diagnostic des Cycles : L'Élastique & La Vague
function initCycles() {
  const elasticSlider = document.getElementById('elastic-slider');
  const waveSlider = document.getElementById('wave-slider');

  const elasticStages = [
    {
      label: "Phase 1 : Proximité & Complétude",
      desc: "L'homme se sent proche, attentif et comblé. Il donne sans compter.",
      thoughts: "« Je suis comblé avec elle, j'apprécie cette belle communion amoureuse. »",
      dos: ["Profiter pleinement de cette complicité", "Lui exprimer de l'appréciation pour ses gestes"],
      donts: ["Croire que cet état sera statique et infini", "Le surcharger sans temps de respiration"]
    },
    {
      label: "Phase 2 : L'Élastique s'étire (Besoin d'autonomie)",
      desc: "L'homme ressent le besoin physiologique de prendre du recul pour se retrouver.",
      thoughts: "« J'ai besoin de temps avec moi-même, d'affirmer mon indépendance. »",
      dos: ["Le laisser s'éloigner sereinement sans paniquer", "Vaquer à ses propres passions et voir ses amies"],
      donts: ["Le pourchasser avec des questions ('Qu'est-ce qui ne va pas ?')", "Lui faire des reproches culpabilisateurs"]
    },
    {
      label: "Phase 3 : Au fond de la Caverne (Tension maximale)",
      desc: "L'homme est silencieux, absorbé dans son monde. Ce n'est pas un rejet.",
      thoughts: "« Je dois résoudre ce problème par moi-même pour prouver ma compétence. »",
      dos: ["Lui laisser 30 à 60 minutes de silence complet", "Faire confiance à son retour naturel"],
      donts: ["Entrer dans sa caverne avec des conseils non sollicités", "Le punir par une bouderie à sa sortie"]
    },
    {
      label: "Phase 4 : Le Rebond instantané (Le retour passionné)",
      desc: "L'élastique a atteint son étirement maximal et se détend. L'homme revient avec passion !",
      thoughts: "« Elle m'a tellement manqué ! J'ai hâte de la serrer dans mes bras. »",
      dos: ["L'accueillir avec tendresse et chaleur", "Profiter de sa grande disponibilité pour lui parler de sa journée"],
      donts: ["L'accueillir avec froideur ('Ah monsieur daigne enfin me parler ?')", "Lui demander des comptes sur son silence"]
    }
  ];

  const waveStages = [
    {
      label: "Phase 1 : Crête de la Vague (Rayonnement & Générosité)",
      desc: "La femme se sent épanouie, confiante et rayonnante. Elle donne son amour avec joie.",
      thoughts: "« Je me sens si heureuse et comblée dans notre couple ! »",
      dos: ["Profiter de cette belle harmonie", "Lui témoigner admiration et respect"],
      donts: ["Prendre sa générosité pour acquise sans continuer à la choyer"]
    },
    {
      label: "Phase 2 : La Descente (Les doutes & la fatigue)",
      desc: "La vague commence à faiblir. La fatigue s'installe, les contrariétés prennent de l'ampleur.",
      thoughts: "« J'ai l'impression de tout porter... Suis-je vraiment aimée et soutenue ? »",
      dos: ["Lui proposer un coup de main spontané pour alléger ses tâches", "Lui offrir des gestes tendres"],
      donts: ["Lui dire qu'elle s'inquiète pour des riens", "Tenter de réfuter rationnellement sa fatigue"]
    },
    {
      label: "Phase 3 : Au fond du Puits (Purification émotionnelle)",
      desc: "La vague s'écrase. Ses blessures anciennes remontent. Elle a besoin d'écoute inconditionnelle.",
      thoughts: "« Tout est trop lourd, j'ai besoin de savoir que je compte inconditionnellement. »",
      dos: ["La prendre dans ses bras sans rien dire", "Valider ses sentiments : 'Je comprends que ce soit dur pour toi'"],
      donts: ["Jouer à Monsieur Réparateur avec des solutions logiques", "S'énerver et lui dire qu'elle est hystérique"]
    },
    {
      label: "Phase 4 : La Remontée lumineuse (Renouveau de la vague)",
      desc: "Accueillie dans sa vulnérabilité, son cœur s'allège et la vague remonte avec éclat !",
      thoughts: "« Quel soulagement d'avoir pu libérer tout cela. Je me sens comprise et aimée ! »",
      dos: ["Continuer à la cajoler tendrement", "Célébrer la complicité retrouvée"],
      donts: ["Lui dire avec condescendance : 'Tu vois, tu t'étais affolée pour rien !'"]
    }
  ];

  function updateElasticUI(val) {
    const stage = elasticStages[val];
    document.getElementById('elastic-stage-title').innerText = stage.label;
    document.getElementById('elastic-stage-desc').innerText = stage.desc;
    document.getElementById('elastic-stage-thought').innerText = stage.thoughts;
    document.getElementById('elastic-dos').innerHTML = stage.dos.map(d => `<li class="flex items-start gap-1.5"><span class="text-emerald-500 font-bold">✓</span><span>${d}</span></li>`).join('');
    document.getElementById('elastic-donts').innerHTML = stage.donts.map(d => `<li class="flex items-start gap-1.5"><span class="text-rose-500 font-bold">✕</span><span>${d}</span></li>`).join('');
  }

  function updateWaveUI(val) {
    const stage = waveStages[val];
    document.getElementById('wave-stage-title').innerText = stage.label;
    document.getElementById('wave-stage-desc').innerText = stage.desc;
    document.getElementById('wave-stage-thought').innerText = stage.thoughts;
    document.getElementById('wave-dos').innerHTML = stage.dos.map(d => `<li class="flex items-start gap-1.5"><span class="text-emerald-500 font-bold">✓</span><span>${d}</span></li>`).join('');
    document.getElementById('wave-donts').innerHTML = stage.donts.map(d => `<li class="flex items-start gap-1.5"><span class="text-rose-500 font-bold">✕</span><span>${d}</span></li>`).join('');
  }

  if (elasticSlider) {
    elasticSlider.addEventListener('input', e => updateElasticUI(parseInt(e.target.value)));
    updateElasticUI(0);
  }
  if (waveSlider) {
    waveSlider.addEventListener('input', e => updateWaveUI(parseInt(e.target.value)));
    updateWaveUI(0);
  }
}

// 6. Tableau & Compteur des 101 Points (Chapitre 10)
function initPointsTracker() {
  const container = document.getElementById('points-list');
  const scoreDisplay = document.getElementById('today-score');
  const scoreTargetEl = document.getElementById('score-total-target');
  const catBar = document.getElementById('venus-categories-bar');
  const targetVenusBtn = document.getElementById('points-target-venus');
  const targetMarsBtn = document.getElementById('points-target-mars');
  const catBtns = document.querySelectorAll('.point-cat-btn');

  let activeMode = 'venus'; // 'venus' (101 points) ou 'mars' (10 règles)
  let activeCat = 'Tous';
  const checkedItems = new Set();

  function renderPointsList() {
    if (!container) return;

    if (activeMode === 'venus') {
      const items = MARS_VENUS_DATA.scoringList.filter(item => activeCat === 'Tous' || item.category === activeCat);
      if (scoreTargetEl) scoreTargetEl.innerText = '/ 101 attentions';

      container.innerHTML = items.map(item => {
        const isChecked = checkedItems.has('v_' + item.id);
        return `
          <label class="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border ${isChecked ? 'bg-pink-50/70 border-pink-300' : 'bg-white border-slate-200'} shadow-xs card-hover cursor-pointer transition-smooth active-scale">
            <input type="checkbox" data-point-id="v_${item.id}" ${isChecked ? 'checked' : ''} class="mt-0.5 w-5 h-5 rounded text-pink-600 focus:ring-pink-500 border-slate-300">
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">${item.category}</span>
                <span class="text-[10px] sm:text-xs font-bold text-pink-600 bg-pink-100/80 px-2 py-0.5 rounded-full">+1 Point Vénus</span>
              </div>
              <p class="text-xs sm:text-sm font-medium ${isChecked ? 'text-pink-900 line-through opacity-75' : 'text-slate-800'}">
                <span class="font-bold text-pink-600 mr-1">#${item.id}</span> ${item.text}
              </p>
            </div>
          </label>
        `;
      }).join('');
    } else {
      // Mode Mars : Comment marquer des points auprès d'un homme
      if (scoreTargetEl) scoreTargetEl.innerText = '/ 10 attitudes clés';
      container.innerHTML = MARS_VENUS_DATA.marsScoringList.map(item => {
        const isChecked = checkedItems.has(item.id);
        return `
          <label class="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border ${isChecked ? 'bg-orange-50/70 border-orange-300' : 'bg-white border-slate-200'} shadow-xs card-hover cursor-pointer transition-smooth active-scale">
            <input type="checkbox" data-point-id="${item.id}" ${isChecked ? 'checked' : ''} class="mt-0.5 w-5 h-5 rounded text-orange-600 focus:ring-orange-500 border-slate-300">
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">${item.category}</span>
                <span class="text-[10px] sm:text-xs font-bold text-orange-600 bg-orange-100/80 px-2 py-0.5 rounded-full">+${item.points} Points Mars</span>
              </div>
              <p class="text-xs sm:text-sm font-medium ${isChecked ? 'text-orange-900 line-through opacity-75' : 'text-slate-800'}">${item.text}</p>
            </div>
          </label>
        `;
      }).join('');
    }

    container.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const id = e.target.dataset.pointId;
        if (e.target.checked) checkedItems.add(id); else checkedItems.delete(id);
        updateScore();
        renderPointsList();
      });
    });
  }

  function updateScore() {
    if (scoreDisplay) scoreDisplay.innerText = checkedItems.size;
  }

  if (targetVenusBtn && targetMarsBtn) {
    targetVenusBtn.addEventListener('click', () => {
      activeMode = 'venus';
      targetVenusBtn.classList.add('bg-pink-600', 'text-white');
      targetVenusBtn.classList.remove('text-slate-600');
      targetMarsBtn.classList.remove('bg-orange-600', 'text-white');
      targetMarsBtn.classList.add('text-slate-600');
      if (catBar) catBar.classList.remove('hidden');
      renderPointsList();
    });

    targetMarsBtn.addEventListener('click', () => {
      activeMode = 'mars';
      targetMarsBtn.classList.add('bg-orange-600', 'text-white');
      targetMarsBtn.classList.remove('text-slate-600');
      targetVenusBtn.classList.remove('bg-pink-600', 'text-white');
      targetVenusBtn.classList.add('text-slate-600');
      if (catBar) catBar.classList.add('hidden');
      renderPointsList();
    });
  }

  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => {
        b.classList.remove('bg-pink-600', 'text-white');
        b.classList.add('bg-slate-100', 'text-slate-600');
      });
      btn.classList.add('bg-pink-600', 'text-white');
      btn.classList.remove('bg-slate-100', 'text-slate-600');
      activeCat = btn.dataset.category;
      renderPointsList();
    });
  });

  const resetBtn = document.getElementById('reset-points-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      checkedItems.clear();
      updateScore();
      renderPointsList();
    });
  }

  renderPointsList();
  updateScore();
}

// 7. Demander du Soutien et l'Obtenir (Chapitre 12)
function initSupportGuide() {
  const container = document.getElementById('support-rules-container');
  if (!container) return;

  container.innerHTML = MARS_VENUS_DATA.askingSupportGuide.rules.map(rule => `
    <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs card-hover flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">${rule.num}</span>
          <h4 class="font-bold text-slate-800 text-xs sm:text-sm">${rule.title}</h4>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed">${rule.desc}</p>
      </div>
    </div>
  `).join('');
}

// 8. Atelier "La Lettre d'Amour" en 5 Étapes (Chapitre 11)
function initLoveLetter() {
  const steps = MARS_VENUS_DATA.loveLetterSteps;
  let currentStep = 0;
  const letterContents = { 0: '', 1: '', 2: '', 3: '', 4: '', response: '' };

  const stepNameEl = document.getElementById('ll-step-name');
  const stepSubEl = document.getElementById('ll-step-sub');
  const startersContainer = document.getElementById('ll-starters');
  const textarea = document.getElementById('ll-textarea');
  const prevBtn = document.getElementById('ll-prev-btn');
  const nextBtn = document.getElementById('ll-next-btn');
  const previewContainer = document.getElementById('ll-preview-container');
  const stepIndicators = document.querySelectorAll('.ll-step-indicator');

  function renderStep(idx) {
    currentStep = idx;

    stepIndicators.forEach((ind, i) => {
      if (i === currentStep) {
        ind.classList.add('bg-rose-500', 'text-white', 'ring-2', 'sm:ring-4', 'ring-rose-100');
        ind.classList.remove('bg-slate-100', 'text-slate-500');
      } else if (letterContents[i]?.trim()) {
        ind.classList.add('bg-emerald-500', 'text-white');
        ind.classList.remove('bg-slate-100', 'text-slate-500', 'ring-2', 'sm:ring-4', 'ring-rose-100', 'bg-rose-500');
      } else {
        ind.classList.remove('bg-rose-500', 'text-white', 'ring-2', 'sm:ring-4', 'ring-rose-100', 'bg-emerald-500');
        ind.classList.add('bg-slate-100', 'text-slate-500');
      }
    });

    if (currentStep < 5) {
      const stepData = steps[currentStep];
      stepNameEl.innerText = stepData.title;
      stepSubEl.innerText = stepData.subtitle;
      textarea.value = letterContents[currentStep] || '';
      textarea.placeholder = stepData.placeholder;

      startersContainer.innerHTML = stepData.starters.map(starter => `
        <button type="button" class="starter-tag text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-rose-100 hover:text-rose-700 transition-smooth border border-slate-200 active-scale">
          + "${starter}"
        </button>
      `).join('');

      startersContainer.querySelectorAll('.starter-tag').forEach(btn => {
        btn.addEventListener('click', () => {
          const textToInsert = btn.innerText.replace('+ "', '').replace('"', '');
          if (textarea.value) {
            textarea.value += '\n' + textToInsert + ' ';
          } else {
            textarea.value = textToInsert + ' ';
          }
          letterContents[currentStep] = textarea.value;
          textarea.focus();
          updateLivePreview();
        });
      });
    } else {
      stepNameEl.innerText = "6. Lettre de Réponse Souhaitée";
      stepSubEl.innerText = "Rédigez la réponse idéale que vous aimeriez que votre partenaire vous donne.";
      textarea.value = letterContents.response || '';
      textarea.placeholder = "Exemple : Mon amour, merci de m'avoir partagé tout cela. Je suis désolé de t'avoir blessé(e)...";
      startersContainer.innerHTML = `
        <button type="button" class="starter-tag text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-rose-100 border border-slate-200 active-scale">
          + "Merci de m'avoir ouvert ton cœur..."
        </button>
        <button type="button" class="starter-tag text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-rose-100 border border-slate-200 active-scale">
          + "Je comprends maintenant ce que tu as ressenti..."
        </button>
        <button type="button" class="starter-tag text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-rose-100 border border-slate-200 active-scale">
          + "Je t'aime et je suis fier de nous..."
        </button>
      `;

      startersContainer.querySelectorAll('.starter-tag').forEach(btn => {
        btn.addEventListener('click', () => {
          const textToInsert = btn.innerText.replace('+ "', '').replace('"', '');
          if (textarea.value) {
            textarea.value += '\n' + textToInsert + ' ';
          } else {
            textarea.value = textToInsert + ' ';
          }
          letterContents.response = textarea.value;
          textarea.focus();
          updateLivePreview();
        });
      });
    }

    prevBtn.disabled = (currentStep === 0);
    nextBtn.innerText = (currentStep === 5) ? "Terminer la lettre" : "Étape suivante →";
    updateLivePreview();
  }

  function updateLivePreview() {
    if (!previewContainer) return;
    const hasAnyContent = Object.values(letterContents).some(t => t?.trim());

    if (!hasAnyContent) {
      previewContainer.innerHTML = `
        <div class="text-center py-8 text-slate-400">
          <span class="text-3xl mb-1.5 block">💌</span>
          <p class="font-medium text-slate-600 text-xs sm:text-sm">Votre lettre prendra forme ici au fur et à mesure.</p>
          <p class="text-[11px] text-slate-400 mt-1">La technique de John Gray permet d'apaiser le cœur avant d'échanger.</p>
        </div>
      `;
      return;
    }

    let html = '<div class="space-y-3 font-serif text-slate-800 leading-relaxed text-xs sm:text-sm">';
    if (letterContents[0]?.trim()) {
      html += `<div class="p-2.5 sm:p-3 bg-red-50/70 border-l-4 border-red-500 rounded-r-lg"><strong class="text-red-800 block text-[10px] sm:text-xs font-sans uppercase mb-0.5">Colère & Blâme :</strong>${letterContents[0].replace(/\n/g, '<br>')}</div>`;
    }
    if (letterContents[1]?.trim()) {
      html += `<div class="p-2.5 sm:p-3 bg-blue-50/70 border-l-4 border-blue-500 rounded-r-lg"><strong class="text-blue-800 block text-[10px] sm:text-xs font-sans uppercase mb-0.5">Tristesse & Déception :</strong>${letterContents[1].replace(/\n/g, '<br>')}</div>`;
    }
    if (letterContents[2]?.trim()) {
      html += `<div class="p-2.5 sm:p-3 bg-amber-50/70 border-l-4 border-amber-500 rounded-r-lg"><strong class="text-amber-800 block text-[10px] sm:text-xs font-sans uppercase mb-0.5">Peur & Insécurité :</strong>${letterContents[2].replace(/\n/g, '<br>')}</div>`;
    }
    if (letterContents[3]?.trim()) {
      html += `<div class="p-2.5 sm:p-3 bg-purple-50/70 border-l-4 border-purple-500 rounded-r-lg"><strong class="text-purple-800 block text-[10px] sm:text-xs font-sans uppercase mb-0.5">Regret & Responsabilité :</strong>${letterContents[3].replace(/\n/g, '<br>')}</div>`;
    }
    if (letterContents[4]?.trim()) {
      html += `<div class="p-2.5 sm:p-3 bg-pink-50/70 border-l-4 border-pink-500 rounded-r-lg"><strong class="text-pink-800 block text-[10px] sm:text-xs font-sans uppercase mb-0.5">Amour, Pardon & Vœux :</strong>${letterContents[4].replace(/\n/g, '<br>')}</div>`;
    }
    if (letterContents.response?.trim()) {
      html += `<div class="p-2.5 sm:p-3 bg-emerald-50/80 border-l-4 border-emerald-500 rounded-r-lg mt-4"><strong class="text-emerald-800 block text-[10px] sm:text-xs font-sans uppercase mb-0.5">Réponse idéale souhaitée :</strong>${letterContents.response.replace(/\n/g, '<br>')}</div>`;
    }

    html += '</div>';
    previewContainer.innerHTML = html;
  }

  if (textarea) {
    textarea.addEventListener('input', (e) => {
      if (currentStep < 5) letterContents[currentStep] = e.target.value; else letterContents.response = e.target.value;
      updateLivePreview();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 0) renderStep(currentStep - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep < 5) {
        renderStep(currentStep + 1);
      } else {
        alert("Félicitations ! Votre lettre d'amour est complète. Vous pouvez la copier avec le bouton 'Copier le texte'.");
      }
    });
  }

  stepIndicators.forEach((ind, i) => ind.addEventListener('click', () => renderStep(i)));

  const copyBtn = document.getElementById('ll-copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      let fullText = "=== MA LETTRE D'AMOUR (Protocole John Gray) ===\n\n";
      if (letterContents[0]) fullText += "1. CE QUI ME MET EN COLÈRE :\n" + letterContents[0] + "\n\n";
      if (letterContents[1]) fullText += "2. CE QUI ME REND TRISTE ET ME BLESSE :\n" + letterContents[1] + "\n\n";
      if (letterContents[2]) fullText += "3. CE DONT J'AI PEUR :\n" + letterContents[2] + "\n\n";
      if (letterContents[3]) fullText += "4. CE QUE JE REGRETTE (MA RESPONSABILITÉ) :\n" + letterContents[3] + "\n\n";
      if (letterContents[4]) fullText += "5. MON AMOUR, MES PARDONS ET MES VŒUX :\n" + letterContents[4] + "\n\n";
      if (letterContents.response) fullText += "=== CE QUE J'AIMERAIS ENTENDRE EN RÉPONSE ===\n" + letterContents.response + "\n";

      navigator.clipboard.writeText(fullText).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = "✓ Texte copié !";
        copyBtn.classList.add('bg-emerald-600');
        setTimeout(() => {
          copyBtn.innerText = originalText;
          copyBtn.classList.remove('bg-emerald-600');
        }, 2000);
      });
    });
  }

  renderStep(0);
}

// 9. Les 4 Postures Défensives dans les Disputes (Chapitre 9)
function initDefensiveStances() {
  const container = document.getElementById('stances-container');
  if (!container) return;

  container.innerHTML = MARS_VENUS_DATA.defensiveStances.map(st => `
    <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 card-hover flex flex-col justify-between">
      <div>
        <h4 class="font-bold text-xs sm:text-sm text-slate-900 mb-1">${st.name}</h4>
        <div class="text-[11px] italic text-rose-600 font-medium mb-2">${st.motto}</div>
        <p class="text-xs text-slate-700 leading-relaxed mb-2.5">${st.behavior}</p>
        <div class="p-2 rounded-xl bg-red-50/70 border border-red-200 text-[11px] text-red-800 mb-3">
          <strong>Dommage :</strong> ${st.damage}
        </div>
      </div>
      <div class="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-[11px] text-emerald-900">
        <strong class="text-emerald-800 block text-[10px] uppercase mb-0.5">✨ Remède John Gray :</strong>
        ${st.remedy}
      </div>
    </div>
  `).join('');
}

// 10. Simulateur de Conflits (6 Scénarios Clés)
function initSimulator() {
  const container = document.getElementById('scenarios-container');
  if (!container) return;

  container.innerHTML = MARS_VENUS_DATA.scenarios.map((sc, scIdx) => `
    <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-6 card-hover" id="sc-card-${sc.id}">
      <div class="flex items-center gap-2 mb-2">
        <span class="w-6 h-6 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">${scIdx + 1}</span>
        <h3 class="text-sm sm:text-base font-bold text-slate-800">${sc.title}</h3>
      </div>
      
      <div class="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed mb-3 sm:mb-4">
        ${sc.situation}
      </div>

      <p class="text-[11px] sm:text-xs font-bold text-slate-600 uppercase tracking-wider mb-2.5 sm:mb-3">${sc.question}</p>

      <div class="space-y-2 mb-3 sm:mb-4">
        ${sc.options.map(opt => `
          <button type="button" data-scid="${sc.id}" data-optid="${opt.id}" class="sc-opt-btn w-full text-left p-3 sm:p-3.5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-xs text-slate-800 font-medium transition-smooth flex items-start gap-2.5 sm:gap-3 active-scale">
            <span class="w-5 h-5 rounded-full border border-slate-300 flex-shrink-0 flex items-center justify-center font-bold text-[10px] text-slate-600">${opt.id}</span>
            <span class="leading-relaxed">${opt.text}</span>
          </button>
        `).join('')}
      </div>

      <div id="sc-feedback-${sc.id}" class="hidden p-3.5 sm:p-4 rounded-xl text-xs"></div>
    </div>
  `).join('');

  container.querySelectorAll('.sc-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const scId = btn.dataset.scid;
      const optId = btn.dataset.optid;
      const sc = MARS_VENUS_DATA.scenarios.find(s => s.id === scId);
      const opt = sc.options.find(o => o.id === optId);
      const fbEl = document.getElementById(`sc-feedback-${scId}`);

      const allBtns = document.querySelectorAll(`[data-scid="${scId}"]`);
      allBtns.forEach(b => {
        b.classList.remove('ring-2', 'ring-rose-500', 'bg-rose-50/50', 'border-rose-300');
      });
      btn.classList.add('ring-2', 'ring-rose-500', 'bg-rose-50/50', 'border-rose-300');

      fbEl.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-200', 'text-emerald-900', 'bg-amber-50', 'border-amber-200', 'text-amber-900');
      
      if (opt.points > 0) {
        fbEl.classList.add('bg-emerald-50', 'border', 'border-emerald-200', 'text-emerald-900');
        fbEl.innerHTML = `
          <div class="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-800 mb-1">
            <span>🎉 Bravo !</span> <span>${opt.verdict} (+${opt.points} pts)</span>
          </div>
          <p class="leading-relaxed">${opt.analysis}</p>
        `;
      } else {
        fbEl.classList.add('bg-amber-50', 'border', 'border-amber-200', 'text-amber-900');
        fbEl.innerHTML = `
          <div class="flex items-center gap-2 font-bold text-xs sm:text-sm text-amber-800 mb-1">
            <span>⚠️ Attention :</span> <span>${opt.verdict} (0 pt)</span>
          </div>
          <p class="leading-relaxed">${opt.analysis}</p>
        `;
      }
    });
  });
}

// 11. Encyclopédie Approfondie des 13 Chapitres
function initChapters() {
  const container = document.getElementById('chapters-container');
  const searchInput = document.getElementById('chapter-search');
  if (!container) return;

  function renderChapters() {
    const query = (searchInput?.value || '').toLowerCase().trim();
    const chapters = MARS_VENUS_DATA.chapters.filter(ch => {
      return ch.title.toLowerCase().includes(query) ||
             ch.subtitle.toLowerCase().includes(query) ||
             ch.summary.toLowerCase().includes(query) ||
             ch.keyPoints.some(kp => kp.toLowerCase().includes(query));
    });

    if (chapters.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-10 text-center text-slate-400">
          <p class="text-sm">Aucun chapitre ne correspond à « ${query} ».</p>
        </div>
      `;
      return;
    }

    container.innerHTML = chapters.map(ch => `
      <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-6 card-hover flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-900 text-white">Chapitre ${ch.id}</span>
            <span class="text-[10px] sm:text-xs text-slate-400">Dr John Gray</span>
          </div>
          <h3 class="text-sm sm:text-base font-bold text-slate-800 mb-1 font-serif-title">${ch.title}</h3>
          <p class="text-xs font-semibold text-rose-600 mb-2.5">${ch.subtitle}</p>
          <p class="text-xs text-slate-600 leading-relaxed mb-3.5">${ch.summary}</p>

          <div class="space-y-1.5 mb-3.5">
            <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Points clés du chapitre :</p>
            ${ch.keyPoints.map(kp => `
              <div class="flex items-start gap-1.5 text-xs text-slate-700">
                <span class="text-rose-500 font-bold">•</span>
                <span>${kp}</span>
              </div>
            `).join('')}
          </div>

          ${ch.exercises ? `
            <div class="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs mb-3.5">
              <strong class="text-amber-800 block text-[10px] uppercase tracking-wider mb-1">Exercices pratiques :</strong>
              <ul class="space-y-1 text-slate-700">
                ${ch.exercises.map(ex => `<li class="flex items-start gap-1.5"><span class="text-amber-600 font-bold">👉</span><span>${ex}</span></li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>

        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs italic text-slate-600 flex items-start gap-2">
          <span class="text-rose-500 font-serif text-lg leading-none">“</span>
          <div>${ch.quote}</div>
        </div>
      </div>
    `).join('');
  }

  if (searchInput) searchInput.addEventListener('input', renderChapters);
  renderChapters();
}


// ==========================================================
// 12. RADAR DES 46 PHRASES PIÈGES (CHAPITRE 2 DU LIVRE)
// ==========================================================
function initTraps() {
  const subtabDictBtn = document.getElementById('subtab-dict-btn');
  const subtabTrapsBtn = document.getElementById('subtab-traps-btn');
  const dictView = document.getElementById('dict-view');
  const trapsView = document.getElementById('traps-view');
  const container = document.getElementById('traps-cards');
  const searchInput = document.getElementById('traps-search');
  const filterBtns = document.querySelectorAll('.traps-filter-btn');

  if (subtabDictBtn && subtabTrapsBtn && dictView && trapsView) {
    subtabDictBtn.addEventListener('click', () => {
      dictView.classList.remove('hidden');
      trapsView.classList.add('hidden');
      subtabDictBtn.classList.add('bg-slate-900', 'text-white');
      subtabDictBtn.classList.remove('text-slate-600');
      subtabTrapsBtn.classList.remove('bg-slate-900', 'text-white');
      subtabTrapsBtn.classList.add('text-slate-600');
    });

    subtabTrapsBtn.addEventListener('click', () => {
      trapsView.classList.remove('hidden');
      dictView.classList.add('hidden');
      subtabTrapsBtn.classList.add('bg-slate-900', 'text-white');
      subtabTrapsBtn.classList.remove('text-slate-600');
      subtabDictBtn.classList.remove('bg-slate-900', 'text-white');
      subtabDictBtn.classList.add('text-slate-600');
    });
  }

  if (!container || !MARS_VENUS_DATA.traps46) return;

  let currentTrapFilter = 'all';

  function renderTraps() {
    const query = (searchInput?.value || '').toLowerCase().trim();
    let allItems = [];

    if (currentTrapFilter === 'all' || currentTrapFilter === 'mars') {
      MARS_VENUS_DATA.traps46.marsBourdes23.forEach(t => {
        allItems.push({ ...t, origin: 'mars', typeLabel: '♂ Bourde Martienne', badgeClass: 'bg-orange-100 text-orange-800 border-orange-200' });
      });
    }

    if (currentTrapFilter === 'all' || currentTrapFilter === 'venus') {
      MARS_VENUS_DATA.traps46.venusImpairs23.forEach(t => {
        allItems.push({ ...t, origin: 'venus', typeLabel: '♀ Impair Vénusien', badgeClass: 'bg-pink-100 text-pink-800 border-pink-200' });
      });
    }

    const filtered = allItems.filter(item => {
      const p = item.phrase.toLowerCase();
      const exp = (item.explanation || item.perception || '').toLowerCase();
      return p.includes(query) || exp.includes(query);
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div class="col-span-full py-8 text-center text-slate-400 text-xs">Aucune phrase ne correspond à « ${query} ».</div>`;
      return;
    }

    container.innerHTML = filtered.map(item => `
      <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs card-hover flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeClass}">${item.typeLabel} #${item.id}</span>
            <span class="text-[10px] text-slate-400">Chapitre 2</span>
          </div>
          <h4 class="text-xs sm:text-sm font-bold text-slate-900 mb-2">« ${item.phrase} »</h4>
          <p class="text-xs text-slate-600 leading-relaxed mb-3">
            <strong class="text-slate-800">${item.origin === 'mars' ? 'Effet sur la femme :' : 'Ce que l\'homme ressent :'}</strong>
            ${item.explanation || item.perception}
          </p>
        </div>
        <div class="p-2.5 rounded-xl ${item.origin === 'mars' ? 'bg-orange-50/70 border border-orange-100 text-orange-950' : 'bg-pink-50/70 border border-pink-100 text-pink-950'} text-[11px] font-medium">
          💡 <strong>Conseil John Gray :</strong> ${item.origin === 'mars' ? 'Écoutez sans chercher à minimiser ou à apporter une solution miracle.' : 'Faites confiance à sa capacité à gérer seul sans conseil non sollicité.'}
        </div>
      </div>
    `).join('');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-amber-500', 'text-white', 'shadow-sm');
        b.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
      });
      btn.classList.add('bg-amber-500', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-white', 'text-slate-600', 'border');
      currentTrapFilter = btn.dataset.trapsFilter;
      renderTraps();
    });
  });

  if (searchInput) searchInput.addEventListener('input', renderTraps);
  renderTraps();
}

// ==========================================================
// 13. LES 26 SITUATIONS BONUS POUR MARS (+10 À +50 PTS)
// ==========================================================
function initBonusPoints() {
  const btnVenus = document.getElementById('points-target-venus');
  const btnMars = document.getElementById('points-target-mars');
  const btnBonus = document.getElementById('points-target-bonus');
  const pointsList = document.getElementById('points-list');
  const venusCatBar = document.getElementById('venus-categories-bar');
  const bonusView = document.getElementById('bonus-points-view');
  const bonusListContainer = document.getElementById('bonus-points-list');

  if (!btnBonus || !bonusView || !bonusListContainer || !MARS_VENUS_DATA.bonusPointsWomen26) return;

  const savedBonus = JSON.parse(localStorage.getItem('mars_bonus_checked') || '{}');

  function renderBonus() {
    bonusListContainer.innerHTML = MARS_VENUS_DATA.bonusPointsWomen26.map(item => {
      const isChecked = !!savedBonus[item.id];
      return `
        <div class="p-3.5 sm:p-4 rounded-xl bg-white border ${isChecked ? 'border-amber-400 bg-amber-50/30' : 'border-slate-200'} shadow-xs card-hover flex items-start gap-3">
          <input type="checkbox" id="bonus-chk-${item.id}" data-bonus-id="${item.id}" ${isChecked ? 'checked' : ''} class="bonus-checkbox mt-1 w-4 h-4 rounded text-amber-600 focus:ring-amber-500 cursor-pointer">
          <label for="bonus-chk-${item.id}" class="flex-1 cursor-pointer">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">${item.points}</span>
              <span class="text-[10px] text-slate-400 font-medium">Situation #${item.id}</span>
            </div>
            <p class="text-xs text-slate-700 leading-relaxed">${item.situation}</p>
          </label>
        </div>
      `;
    }).join('');

    bonusListContainer.querySelectorAll('.bonus-checkbox').forEach(chk => {
      chk.addEventListener('change', () => {
        const id = chk.dataset.bonusId;
        savedBonus[id] = chk.checked;
        localStorage.setItem('mars_bonus_checked', JSON.stringify(savedBonus));
        renderBonus();
      });
    });
  }

  btnBonus.addEventListener('click', () => {
    btnBonus.classList.add('bg-amber-500', 'text-white', 'shadow-sm');
    btnBonus.classList.remove('text-slate-600');
    btnVenus.classList.remove('bg-pink-600', 'text-white', 'shadow-sm');
    btnVenus.classList.add('text-slate-600');
    btnMars.classList.remove('bg-orange-600', 'text-white', 'shadow-sm');
    btnMars.classList.add('text-slate-600');

    if (pointsList) pointsList.classList.add('hidden');
    if (venusCatBar) venusCatBar.classList.add('hidden');
    bonusView.classList.remove('hidden');
    renderBonus();
  });

  // Revenir aux vues standard lors des clics sur les autres boutons
  if (btnVenus) {
    btnVenus.addEventListener('click', () => {
      bonusView.classList.add('hidden');
      if (pointsList) pointsList.classList.remove('hidden');
      if (venusCatBar) venusCatBar.classList.remove('hidden');
      btnBonus.classList.remove('bg-amber-500', 'text-white', 'shadow-sm');
      btnBonus.classList.add('text-slate-600');
    });
  }

  if (btnMars) {
    btnMars.addEventListener('click', () => {
      bonusView.classList.add('hidden');
      if (pointsList) pointsList.classList.remove('hidden');
      if (venusCatBar) venusCatBar.classList.add('hidden');
      btnBonus.classList.remove('bg-amber-500', 'text-white', 'shadow-sm');
      btnBonus.classList.add('text-slate-600');
    });
  }
}

// ==========================================================
// 14. DEMANDES DIRECTES VS INDIRECTES & TÉMOIGNAGES (CH. 12)
// ==========================================================
function initIndirectDemands() {
  const demandsContainer = document.getElementById('indirect-demands-container');
  const testimoniesContainer = document.getElementById('testimonies-container');

  if (demandsContainer && MARS_VENUS_DATA.indirectDemandsComparison) {
    demandsContainer.innerHTML = MARS_VENUS_DATA.indirectDemandsComparison.map((item, idx) => `
      <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
        <div class="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs">
          <span class="text-[10px] font-bold text-rose-700 uppercase tracking-wider block mb-1">❌ Demande indirecte :</span>
          <p class="text-slate-800 italic">${item.indirect}</p>
          <p class="text-[11px] text-rose-600 mt-1.5 font-medium">➡️ <em>Perception martienne :</em> ${item.perceived}</p>
        </div>

        <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
          <span class="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">✅ Formulation directe recommandée :</span>
          <p class="text-slate-900 font-bold">${item.direct}</p>
          <p class="text-[11px] text-emerald-700 mt-1 font-medium">➡️ <em>Effet :</em> Laisse l'honneur et le libre arbitre de l'homme intacts.</p>
        </div>
      </div>
    `).join('');
  }

  if (testimoniesContainer && MARS_VENUS_DATA.menTestimonies17) {
    testimoniesContainer.innerHTML = MARS_VENUS_DATA.menTestimonies17.map(t => `
      <div class="p-3.5 rounded-xl bg-white border border-blue-100 shadow-2xs text-xs flex flex-col justify-between">
        <p class="text-slate-700 italic leading-relaxed mb-2">« ${t.quote} »</p>
        <span class="text-[10px] font-bold text-blue-600 uppercase tracking-wider self-end">Témoignage #${t.num}</span>
      </div>
    `).join('');
  }
}

// ==========================================================
// 15. BIBLIOTHÈQUE DES VRAIES LETTRES D'AMOUR (CH. 11)
// ==========================================================
function initRealLetters() {
  const container = document.getElementById('real-letters-container');
  if (!container || !MARS_VENUS_DATA.realLoveLetters) return;

  container.innerHTML = MARS_VENUS_DATA.realLoveLetters.map(item => `
    <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800">Cas Clinique Réel</span>
          <span class="text-xs font-semibold text-slate-500">${item.author}</span>
        </div>
        <h4 class="text-sm font-bold text-slate-900 mb-1.5 font-serif-title">${item.author}</h4>
        <p class="text-xs text-slate-500 italic mb-3">${item.context}</p>

        <div class="space-y-2 text-xs text-slate-700 p-3 rounded-xl bg-slate-50 border border-slate-100 max-h-48 overflow-y-auto mb-3">
          <p><strong class="text-red-700">1. Colère :</strong> ${item.letter.colere}</p>
          <p><strong class="text-blue-700">2. Tristesse :</strong> ${item.letter.tristesse}</p>
          <p><strong class="text-amber-700">3. Peur :</strong> ${item.letter.peur}</p>
          <p><strong class="text-purple-700">4. Regret :</strong> ${item.letter.regret}</p>
          <p><strong class="text-emerald-700">5. Amour :</strong> ${item.letter.amour}</p>
          ${item.letter.ps ? `<p><strong class="text-rose-700">P.-S. :</strong> ${item.letter.ps}</p>` : ''}
          ${item.letter.reponseIdeal ? `<div class="mt-2 pt-2 border-t border-slate-200"><strong class="text-indigo-700">Lettre-Réponse Idéale :</strong> ${item.letter.reponseIdeal}</div>` : ''}
        </div>
      </div>

      <button type="button" data-letter-id="${item.id}" class="load-letter-btn w-full py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs border border-rose-200 transition-smooth active-scale">
        📥 Charger ce modèle dans mon éditeur
      </button>
    </div>
  `).join('');

  container.querySelectorAll('.load-letter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.letterId;
      const target = MARS_VENUS_DATA.realLoveLetters.find(l => l.id === id);
      if (!target) return;

      loveLetterData = [
        target.letter.colere,
        target.letter.tristesse,
        target.letter.peur,
        target.letter.regret,
        target.letter.amour,
        target.letter.reponseIdeal || target.letter.ps || ''
      ];

      currentLoveLetterStep = 0;
      renderLoveLetterStep();
      updateLoveLetterPreview();

      const inputEl = document.getElementById('ll-input');
      if (inputEl) inputEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
}

// ==========================================================
// 16. LES 16 MASQUES ÉMOTIONNELS (CHAPITRE 11)
// ==========================================================
function initEmotionalMasks() {
  const container = document.getElementById('emotional-masks-container');
  if (!container || !MARS_VENUS_DATA.emotionalMasks16) return;

  const { menMasks, womenMasks } = MARS_VENUS_DATA.emotionalMasks16;

  container.innerHTML = `
    <!-- Masques Hommes -->
    <div class="p-5 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-3">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xl">♂</span>
        <h4 class="font-bold text-orange-950 text-sm sm:text-base font-serif-title">Les 8 Masques Défensifs de l'Homme</h4>
      </div>
      <div class="space-y-2">
        ${menMasks.map(m => `
          <div class="p-2.5 rounded-xl bg-white border border-orange-100 text-xs">
            <strong class="text-orange-800 block">${m.id}. ${m.mask}</strong>
            <span class="text-slate-600">Cache : ${m.hiddenEmotion}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Masques Femmes -->
    <div class="p-5 rounded-2xl bg-pink-50/60 border border-pink-200 space-y-3">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xl">♀</span>
        <h4 class="font-bold text-pink-950 text-sm sm:text-base font-serif-title">Les 8 Masques Défensifs de la Femme</h4>
      </div>
      <div class="space-y-2">
        ${womenMasks.map(m => `
          <div class="p-2.5 rounded-xl bg-white border border-pink-100 text-xs">
            <strong class="text-pink-800 block">${m.id}. ${m.mask}</strong>
            <span class="text-slate-600">Cache : ${m.hiddenEmotion}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ==========================================================
// 17. ANATOMIE DES 7 DISPUTES TYPES & RAISONS PROFONDES (CH. 9)
// ==========================================================
function initDisputesAnalysis() {
  const disputesContainer = document.getElementById('disputes-analysis-container');
  const reasonsContainer = document.getElementById('dispute-reasons-container');

  if (disputesContainer && MARS_VENUS_DATA.disputesAnalysis7) {
    disputesContainer.innerHTML = MARS_VENUS_DATA.disputesAnalysis7.map((disp, idx) => `
      <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs">
        <button type="button" class="dispute-toggle-btn w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-800 hover:bg-slate-50 flex items-center justify-between transition-smooth" data-target="disp-body-${idx}">
          <span class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">${idx + 1}</span>
            <span>${disp.title}</span>
          </span>
          <span class="text-slate-400 text-xs">▼</span>
        </button>

        <div id="disp-body-${idx}" class="dispute-body hidden p-4 sm:p-5 pt-0 border-t border-slate-100 space-y-3 text-xs">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <div class="p-3 rounded-xl bg-rose-50/70 border border-rose-200">
              <strong class="text-rose-800 block mb-1">1. Question posée par la femme :</strong>
              <p class="text-slate-700 italic">${disp.questionFemme}</p>
            </div>
            <div class="p-3 rounded-xl bg-orange-50/70 border border-orange-200">
              <strong class="text-orange-800 block mb-1">2. Message perçu par l'homme :</strong>
              <p class="text-slate-700 italic">${disp.messageHomme}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <strong class="text-slate-800 block mb-1">3. L'explication logique qu'il donne :</strong>
              <p class="text-slate-600 italic">${disp.explicationHomme}</p>
            </div>
            <div class="p-3 rounded-xl bg-pink-50/70 border border-pink-200">
              <strong class="text-pink-800 block mb-1">4. Message perçu par la femme :</strong>
              <p class="text-slate-700 italic">${disp.messageFemme}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
            <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-medium">
              <strong class="text-emerald-800 block mb-1">✨ Clé pour Elle (Atténuer sa désapprobation) :</strong>
              <p>${disp.actionFemme}</p>
            </div>
            <div class="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 font-medium">
              <strong class="text-blue-800 block mb-1">🛡️ Clé pour Lui (Affirmer le respect de ses émotions) :</strong>
              <p>${disp.actionHomme}</p>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    disputesContainer.querySelectorAll('.dispute-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const body = document.getElementById(targetId);
        if (!body) return;
        const isHidden = body.classList.contains('hidden');
        disputesContainer.querySelectorAll('.dispute-body').forEach(b => b.classList.add('hidden'));
        if (isHidden) body.classList.remove('hidden');
      });
    });
  }

  if (reasonsContainer && MARS_VENUS_DATA.disputeMotivations) {
    const { menReasons8, womenReasons8 } = MARS_VENUS_DATA.disputeMotivations;
    reasonsContainer.innerHTML = `
      <div class="p-5 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-3">
        <h4 class="font-bold text-orange-950 text-xs sm:text-sm font-serif-title">♂ 8 Raisons pour lesquelles l'homme se dispute</h4>
        <div class="space-y-2">
          ${menReasons8.map(r => `
            <div class="p-2.5 rounded-xl bg-white border border-orange-100 text-xs">
              <p class="font-bold text-slate-800 mb-1">${r.deepReason}</p>
              <p class="text-emerald-700 font-semibold">➡️ Ce dont il a besoin : ${r.need}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="p-5 rounded-2xl bg-pink-50/60 border border-pink-200 space-y-3">
        <h4 class="font-bold text-pink-950 text-xs sm:text-sm font-serif-title">♀ 8 Raisons pour lesquelles la femme se dispute</h4>
        <div class="space-y-2">
          ${womenReasons8.map(r => `
            <div class="p-2.5 rounded-xl bg-white border border-pink-100 text-xs">
              <p class="font-bold text-slate-800 mb-1">${r.deepReason}</p>
              <p class="text-rose-700 font-semibold">➡️ Ce dont elle a besoin : ${r.need}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

// ==========================================================
// 18. BAROMÈTRE DES 90/10 & LES 18 QUESTIONS D'ENFANCE (CH. 13)
// ==========================================================
function initNinetyTen() {
  const triggersContainer = document.getElementById('past-triggers-container');
  const questionsContainer = document.getElementById('childhood-questions-container');
  const countSpan = document.getElementById('childhood-checked-count');

  if (triggersContainer && MARS_VENUS_DATA.ninetyTenPrinciple) {
    triggersContainer.innerHTML = MARS_VENUS_DATA.ninetyTenPrinciple.pastTriggers12.map(item => `
      <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs flex flex-col justify-between">
        <div>
          <span class="text-[10px] font-bold text-rose-600 block mb-1">Déclencheur #${item.id}</span>
          <p class="font-semibold text-slate-800 mb-2">${item.trigger}</p>
        </div>
        <p class="text-[11px] text-slate-500 italic p-2 rounded-lg bg-slate-50 border border-slate-100">
          🔍 <strong>Origine 90% :</strong> ${item.meaning}
        </p>
      </div>
    `).join('');
  }

  if (questionsContainer && MARS_VENUS_DATA.ninetyTenPrinciple) {
    const saved = JSON.parse(localStorage.getItem('childhood_questions_checked') || '{}');

    function updateCount() {
      const total = Object.values(saved).filter(Boolean).length;
      if (countSpan) countSpan.textContent = total;
    }

    questionsContainer.innerHTML = MARS_VENUS_DATA.ninetyTenPrinciple.childhoodQuestions18.map((q, idx) => {
      const isChecked = !!saved[idx];
      return `
        <div class="p-3 rounded-xl bg-white border ${isChecked ? 'border-emerald-300 bg-emerald-50/20' : 'border-slate-200'} shadow-2xs text-xs flex items-start gap-2.5">
          <input type="checkbox" id="child-chk-${idx}" data-idx="${idx}" ${isChecked ? 'checked' : ''} class="childhood-chk mt-1 w-3.5 h-3.5 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer">
          <label for="child-chk-${idx}" class="cursor-pointer text-slate-700 leading-relaxed font-medium">
            ${q}
          </label>
        </div>
      `;
    }).join('');

    questionsContainer.querySelectorAll('.childhood-chk').forEach(chk => {
      chk.addEventListener('change', () => {
        const idx = chk.dataset.idx;
        saved[idx] = chk.checked;
        localStorage.setItem('childhood_questions_checked', JSON.stringify(saved));
        updateCount();
      });
    });

    updateCount();
  }
}
