/* =========================================================
   PIC GALLERY — by Pranav
   CodeAlpha · Task 01
   ========================================================= */

(() => {
  "use strict";

  /* ---------- Data ---------- */
  const collections = {
    cars: "Cars",
    bikes: "Bikes",
    nature: "Nature",
    anime: "Anime"
  };

  const photos = [
    {
      id: "cars-01",
      src: "assets/images/cars-01.jpg",
      title: "Night Drive",
      category: "cars",
      place: "Alpine road, Switzerland",
      year: 2026,
      width: 1400,
      height: 933,
      alt: "A dark sports car photographed from a low angle on an open road",
      tags: ["car", "porsche", "sports car", "coupe", "black", "road"]
    },
    {
      id: "cars-02",
      src: "assets/images/cars-02.jpg",
      title: "Redline",
      category: "cars",
      place: "Detroit, USA",
      year: 2025,
      width: 1400,
      height: 827,
      alt: "A red performance car in dramatic light",
      tags: ["car", "red", "classic", "muscle car", "detroit"]
    },
    {
      id: "cars-03",
      src: "assets/images/cars-03.jpg",
      title: "Blue Hour",
      category: "cars",
      place: "Munich, Germany",
      year: 2024,
      width: 1400,
      height: 933,
      alt: "A blue coupe photographed in soft evening light",
      tags: ["car", "blue", "coupe", "german", "bmw", "mercedes"]
    },
    {
      id: "cars-04",
      src: "assets/images/cars-04.jpg",
      title: "Scarlet",
      category: "cars",
      place: "Modena, Italy",
      year: 2026,
      width: 1400,
      height: 933,
      alt: "A red supercar photographed from the front",
      tags: ["car", "ferrari", "supercar", "red", "italy"]
    },
    {
      id: "bikes-01",
      src: "assets/images/bikes-01.jpg",
      title: "Night Rider",
      category: "bikes",
      place: "Tokyo, Japan",
      year: 2025,
      width: 1400,
      height: 933,
      alt: "A motorcycle on an open road",
      tags: ["bike", "motorcycle", "rider", "night", "road"]
    },
    {
      id: "bikes-02",
      src: "assets/images/bikes-02.jpg",
      title: "Chrome & Dust",
      category: "bikes",
      place: "Route 66, USA",
      year: 2024,
      width: 1400,
      height: 934,
      alt: "A motorcycle in warm, dusty light",
      tags: ["bike", "motorcycle", "chrome", "road", "desert"]
    },
    {
      id: "bikes-03",
      src: "assets/images/bikes-03.jpg",
      title: "Two Wheels",
      category: "bikes",
      place: "Barcelona, Spain",
      year: 2026,
      width: 1400,
      height: 933,
      alt: "A motorcycle parked against a city wall",
      tags: ["bike", "motorcycle", "city", "street", "parked"]
    },
    {
      id: "bikes-04",
      src: "assets/images/bikes-04.jpg",
      title: "Peloton",
      category: "bikes",
      place: "Girona, Spain",
      year: 2025,
      width: 1400,
      height: 933,
      alt: "Cyclists racing together on an open road",
      tags: ["bike", "bicycle", "cycling", "race", "peloton", "road"]
    },
    {
      id: "nature-01",
      src: "assets/images/nature-01.jpg",
      title: "Alpine Silence",
      category: "nature",
      place: "Swiss Alps, Switzerland",
      year: 2025,
      width: 1400,
      height: 933,
      alt: "Snow-capped mountain peaks reflected in a still alpine lake",
      tags: ["nature", "mountain", "lake", "snow", "alps", "reflection"]
    },
    {
      id: "nature-02",
      src: "assets/images/nature-02.jpg",
      title: "Cathedral of Pines",
      category: "nature",
      place: "Black Forest, Germany",
      year: 2024,
      width: 1400,
      height: 932,
      alt: "Sunlight filtering through the tall trunks of a dense green forest",
      tags: ["nature", "forest", "trees", "green", "sunlight"]
    },
    {
      id: "nature-03",
      src: "assets/images/nature-03.jpg",
      title: "Sea of Clouds",
      category: "nature",
      place: "Blue Ridge Mountains, USA",
      year: 2025,
      width: 1400,
      height: 834,
      alt: "Rolling mountain ridges disappearing into a low layer of fog",
      tags: ["nature", "mountain", "clouds", "fog", "ridge"]
    },
    {
      id: "nature-04",
      src: "assets/images/nature-04.jpg",
      title: "Still Waters",
      category: "nature",
      place: "Banff, Canada",
      year: 2023,
      width: 1400,
      height: 933,
      alt: "A turquoise mountain lake framed by rocky peaks",
      tags: ["nature", "lake", "water", "rocky", "banff", "turquoise"]
    },
    {
      id: "anime-01",
      src: "assets/images/anime-01.jpg",
      title: "Quiet Gaze",
      category: "anime",
      place: "Digital illustration",
      year: 2026,
      width: 1014,
      height: 1017,
      alt: "Anime-style portrait of a girl with pale hair and a calm expression",
      tags: ["anime", "portrait", "illustration", "character", "manga"]
    },
    {
      id: "anime-02",
      src: "assets/images/anime-02.jpg",
      title: "Midnight",
      category: "anime",
      place: "Digital illustration",
      year: 2025,
      width: 1006,
      height: 1012,
      alt: "Anime-style portrait of a girl with long black hair",
      tags: ["anime", "portrait", "illustration", "character", "manga", "black hair"]
    },
    {
      id: "anime-03",
      src: "assets/images/anime-03.jpg",
      title: "Crimson",
      category: "anime",
      place: "Digital illustration",
      year: 2024,
      width: 1005,
      height: 1022,
      alt: "Anime-style portrait of a girl with short orange hair",
      tags: ["anime", "portrait", "illustration", "character", "manga", "orange hair"]
    },
    {
      id: "anime-04",
      src: "assets/images/anime-04.jpg",
      title: "Dream State",
      category: "anime",
      place: "Digital illustration",
      year: 2026,
      width: 1024,
      height: 1024,
      alt: "Anime-style portrait with soft, dreamlike colours",
      tags: ["anime", "portrait", "illustration", "character", "manga", "colour"]
    }
  ];

  /* Editorial rhythm for the masonry-style grid.
     Cell total stays balanced so the grid fills without holes. */
  const layoutPattern = [
    "tall", "normal", "wide", "normal",
    "feature", "normal", "normal", "tall",
    "normal", "tall", "normal", "normal",
    "wide", "tall", "normal", "feature"
  ];

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pad = (value) => String(value).padStart(2, "0");
  const normalise = (value) =>
    value
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "");

  const photoById = new Map(photos.map((photo) => [photo.id, photo]));
  const searchIndex = new Map(
    photos.map((photo) => [
      photo.id,
      normalise(
        [
          photo.title,
          photo.place,
          collections[photo.category],
          photo.alt,
          ...photo.tags
        ].join(" ")
      )
    ])
  );

  /* ---------- Elements ---------- */
  const grid = document.getElementById("grid");
  const chips = Array.from(document.querySelectorAll(".chip"));
  const visibleCount = document.getElementById("visibleCount");
  const searchStatus = document.getElementById("searchStatus");
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");
  const emptyState = document.getElementById("emptyState");
  const emptyReset = document.getElementById("emptyReset");
  const monoToggle = document.getElementById("monoToggle");
  const header = document.querySelector(".site-header");

  const lightbox = document.getElementById("lightbox");
  const lbViewer = document.getElementById("lbViewer");
  const lbFigure = document.getElementById("lbFigure");
  const lbImage = document.getElementById("lbImage");
  const lbTitle = document.getElementById("lbTitle");
  const lbMeta = document.getElementById("lbMeta");
  const lbCollection = document.getElementById("lbCollection");
  const lbCounter = document.getElementById("lbCounter");
  const lbProgress = document.getElementById("lbProgress");
  const lbFilm = document.getElementById("lbFilm");
  const lbClose = document.getElementById("lbClose");
  const lbPrev = document.getElementById("lbPrev");
  const lbNext = document.getElementById("lbNext");

  const background = Array.from(
    document.querySelectorAll(".site-header, main, .site-footer, .skip-link")
  );

  /* ---------- State ---------- */
  let activeFilter = "all";
  let searchQuery = "";
  let cards = [];
  let filmButtons = [];
  let lightboxPhotos = [];
  let currentIndex = 0;
  let isOpen = false;
  let lastFocused = null;
  let closeTimer = 0;
  let filterTimer = 0;
  let swapToken = 0;

  /* ---------- Gallery rendering ---------- */
  function buildGallery() {
    const fragment = document.createDocumentFragment();

    photos.forEach((photo, index) => {
      const card = document.createElement("article");
      card.className = `card card--${layoutPattern[index % layoutPattern.length]}`;
      card.dataset.category = photo.category;
      card.dataset.id = photo.id;
      card.style.setProperty("--delay", `${(index % 4) * 60}ms`);

      const button = document.createElement("button");
      button.type = "button";
      button.className = "card__hit";
      button.setAttribute("aria-haspopup", "dialog");
      button.setAttribute(
        "aria-label",
        `View ${photo.title} — ${collections[photo.category]}`
      );

      const img = document.createElement("img");
      img.className = "card__img";
      img.src = photo.src;
      img.alt = photo.alt;
      img.width = photo.width;
      img.height = photo.height;
      img.loading = index < 4 ? "eager" : "lazy";
      img.decoding = "async";

      const shade = document.createElement("span");
      shade.className = "card__shade";
      shade.setAttribute("aria-hidden", "true");

      const number = document.createElement("span");
      number.className = "card__index";
      number.setAttribute("aria-hidden", "true");
      number.textContent = pad(index + 1);

      const body = document.createElement("span");
      body.className = "card__body";

      const cat = document.createElement("span");
      cat.className = "card__cat";
      cat.textContent = collections[photo.category];

      const title = document.createElement("span");
      title.className = "card__title";
      title.textContent = photo.title;

      body.append(cat, title);

      const view = document.createElement("span");
      view.className = "card__view";
      view.setAttribute("aria-hidden", "true");
      view.innerHTML =
        'View <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>';

      button.append(img, shade, number, body, view);
      button.addEventListener("click", () => openLightbox(photo.id));
      card.append(button);
      fragment.append(card);
      cards.push(card);
    });

    grid.append(fragment);
  }

  function revealCards() {
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );

    cards.forEach((card) => observer.observe(card));
  }

  /* ---------- Filtering + search ---------- */
  function matchesFilter(photo, filter = activeFilter) {
    return filter === "all" || photo.category === filter;
  }

  function matchesSearch(photo) {
    if (!searchQuery) return true;
    return (searchIndex.get(photo.id) || "").includes(searchQuery);
  }

  function visiblePhotos() {
    return photos.filter(
      (photo) => matchesFilter(photo) && matchesSearch(photo)
    );
  }

  function syncChips() {
    chips.forEach((chip) => {
      const selected = chip.dataset.filter === activeFilter;
      chip.classList.toggle("is-active", selected);
      chip.setAttribute("aria-pressed", String(selected));
    });
  }

  function updateCount() {
    const count = visiblePhotos().length;

    visibleCount.textContent = count;
    searchStatus.textContent = `${count} photo${count === 1 ? "" : "s"}`;
    grid.hidden = count === 0;
    emptyState.hidden = count !== 0;
    searchClear.hidden = !searchQuery;
    emptyReset.textContent = searchQuery ? "Clear search" : "Show all photos";
  }

  function applyVisibility() {
    cards.forEach((card) => {
      const photo = photoById.get(card.dataset.id);
      card.hidden = !(
        photo &&
        matchesFilter(photo) &&
        matchesSearch(photo)
      );
    });

    updateCount();

    grid.classList.toggle(
      "is-filtered",
      activeFilter !== "all" || Boolean(searchQuery)
    );
  }

  function refresh(animate = false) {
    window.clearTimeout(filterTimer);

    if (animate && !reducedMotion.matches) {
      grid.classList.add("is-filtering");
      grid.setAttribute("aria-busy", "true");

      filterTimer = window.setTimeout(() => {
        applyVisibility();
        grid.classList.remove("is-filtering");
        grid.removeAttribute("aria-busy");
      }, 180);
      return;
    }

    applyVisibility();
    grid.classList.remove("is-filtering");
    grid.removeAttribute("aria-busy");
  }

  function setFilter(filter) {
    if (filter === activeFilter) return;
    activeFilter = filter;
    syncChips();
    refresh(true);
  }

  function clearSearch({ focus = true } = {}) {
    searchInput.value = "";
    searchQuery = "";
    refresh(false);

    if (focus) searchInput.focus({ preventScroll: true });
  }

  chips.forEach((chip) => {
    const filter = chip.dataset.filter;
    const count =
      filter === "all"
        ? photos.length
        : photos.filter((photo) => photo.category === filter).length;

    const countEl = chip.querySelector(".chip__count");
    if (countEl) countEl.textContent = count;

    chip.addEventListener("click", () => setFilter(filter));
  });

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  searchInput.addEventListener("input", () => {
    searchQuery = normalise(searchInput.value.trim());
    refresh(false);
  });

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && searchQuery) {
      event.preventDefault();
      clearSearch();
    }
  });

  searchClear.addEventListener("click", () => clearSearch());

  emptyReset.addEventListener("click", () => {
    activeFilter = "all";
    syncChips();
    clearSearch({ focus: false });
    searchInput.focus({ preventScroll: true });
  });

  /* ---------- Lightbox ---------- */
  function buildFilmstrip() {
    filmButtons = lightboxPhotos.map((photo, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "lightbox__thumb";
      button.setAttribute("aria-label", `Show ${photo.title}`);

      const thumb = document.createElement("img");
      thumb.src = photo.src;
      thumb.alt = "";
      thumb.loading = "lazy";
      thumb.decoding = "async";

      button.append(thumb);
      button.addEventListener("click", () => {
        if (index === currentIndex) return;
        currentIndex = index;
        renderPhoto(true);
      });

      lbFilm.append(button);
      return button;
    });
  }

  function preloadNeighbours() {
    const total = lightboxPhotos.length;
    if (total < 2) return;

    [-1, 1].forEach((offset) => {
      const neighbour = lightboxPhotos[(currentIndex + offset + total) % total];
      const img = new Image();
      img.src = neighbour.src;
    });
  }

  function renderPhoto(animate = true, instantScroll = false) {
    const photo = lightboxPhotos[currentIndex];
    if (!photo) return;

    const total = lightboxPhotos.length;

    lbCollection.textContent = collections[photo.category];
    lbCounter.textContent = `${pad(currentIndex + 1)} / ${pad(total)}`;
    lbTitle.textContent = photo.title;
    lbMeta.textContent = `${photo.place} · ${photo.year}`;
    lbProgress.style.width = `${((currentIndex + 1) / total) * 100}%`;

    filmButtons.forEach((button, index) => {
      const selected = index === currentIndex;
      button.setAttribute("aria-current", selected ? "true" : "false");
      if (selected) {
        button.scrollIntoView({
          behavior:
            instantScroll || reducedMotion.matches ? "auto" : "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    });

    if (animate) lbFigure.classList.add("is-swapping");

    const token = ++swapToken;
    const preload = new Image();
    let revealed = false;

    const reveal = () => {
      if (revealed || token !== swapToken) return;
      revealed = true;

      lbImage.src = photo.src;
      lbImage.alt = photo.alt;
      lbImage.width = photo.width;
      lbImage.height = photo.height;

      // Paint the faded-out state for one frame, then fade the new image in.
      window.requestAnimationFrame(() => {
        if (token === swapToken) lbFigure.classList.remove("is-swapping");
      });
    };

    preload.onload = reveal;
    preload.onerror = reveal;
    preload.src = photo.src;

    if (preload.complete) reveal();

    preloadNeighbours();
  }

  function openLightbox(id) {
    lightboxPhotos = visiblePhotos();

    const found = lightboxPhotos.findIndex((photo) => photo.id === id);
    currentIndex = found >= 0 ? found : 0;
    lastFocused = document.activeElement;

    window.clearTimeout(closeTimer);
    lightbox.hidden = false;
    document.body.classList.add("is-locked");
    setBackgroundInert(true);
    isOpen = true;

    lbFilm.replaceChildren();
    buildFilmstrip();
    renderPhoto(false, true);

    window.requestAnimationFrame(() => {
      lightbox.classList.add("is-open");
      lbClose.focus({ preventScroll: true });
    });
  }

  function closeLightbox() {
    if (!isOpen) return;
    isOpen = false;

    lightbox.classList.remove("is-open");
    document.body.classList.remove("is-locked");
    setBackgroundInert(false);

    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(
      () => {
        lightbox.hidden = true;
        lbFigure.classList.remove("is-swapping");
        if (lastFocused && typeof lastFocused.focus === "function") {
          lastFocused.focus({ preventScroll: true });
        }
      },
      reducedMotion.matches ? 0 : 280
    );
  }

  function setBackgroundInert(state) {
    background.forEach((element) => {
      if (state) {
        element.setAttribute("inert", "");
      } else {
        element.removeAttribute("inert");
      }
    });
  }

  function step(direction) {
    if (!isOpen || lightboxPhotos.length < 2) return;
    const total = lightboxPhotos.length;
    currentIndex = (currentIndex + direction + total) % total;
    renderPhoto(true);
  }

  function trapFocus(event) {
    const focusable = Array.from(
      lightbox.querySelectorAll(
        'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
      )
    ).filter((element) => element.offsetParent !== null);

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (!lightbox.contains(document.activeElement)) {
      event.preventDefault();
      first.focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function onKeydown(event) {
    if (!isOpen) return;

    switch (event.key) {
      case "Escape":
        event.preventDefault();
        closeLightbox();
        break;
      case "ArrowLeft":
        event.preventDefault();
        step(-1);
        break;
      case "ArrowRight":
        event.preventDefault();
        step(1);
        break;
      case "Tab":
        trapFocus(event);
        break;
      default:
        break;
    }
  }

  /* ---------- Swipe / drag navigation ---------- */
  let drag = null;
  let suppressClick = false;

  lbFigure.addEventListener("pointerdown", (event) => {
    if (!isOpen) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (event.target.closest("button, a")) return;

    drag = {
      startX: event.clientX,
      startY: event.clientY,
      dx: 0,
      dragging: false
    };

    if (lbFigure.setPointerCapture) {
      lbFigure.setPointerCapture(event.pointerId);
    }
  });

  lbFigure.addEventListener("pointermove", (event) => {
    if (!drag) return;

    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;

    if (!drag.dragging) {
      if (Math.abs(dx) < 10) return;
      if (Math.abs(dx) <= Math.abs(dy)) {
        drag = null;
        return;
      }
      drag.dragging = true;
      lbFigure.classList.add("is-dragging");
    }

    drag.dx = dx;
    lbFigure.style.transform = `translateX(${dx * 0.4}px)`;
  });

  function endDrag() {
    if (!drag) return;

    const { dragging, dx } = drag;
    drag = null;

    lbFigure.classList.remove("is-dragging");
    lbFigure.style.transform = "";

    if (dragging) {
      suppressClick = true;
      window.setTimeout(() => {
        suppressClick = false;
      }, 60);

      if (Math.abs(dx) > 64) {
        step(dx < 0 ? 1 : -1);
      }
    }
  }

  lbFigure.addEventListener("pointerup", endDrag);
  lbFigure.addEventListener("pointercancel", endDrag);

  /* ---------- Events ---------- */
  lbClose.addEventListener("click", closeLightbox);
  lbPrev.addEventListener("click", () => step(-1));
  lbNext.addEventListener("click", () => step(1));

  lbViewer.addEventListener("click", (event) => {
    if (suppressClick) {
      suppressClick = false;
      return;
    }
    if (event.target === lbViewer || event.target === lbFigure) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", onKeydown);

  document.addEventListener("keydown", (event) => {
    if (isOpen || event.key !== "/") return;

    const target = event.target;
    const isTyping =
      target instanceof HTMLElement &&
      (target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable);

    if (isTyping) return;

    event.preventDefault();
    searchInput.focus({ preventScroll: true });
  });

  monoToggle.addEventListener("click", () => {
    const enabled = monoToggle.getAttribute("aria-pressed") !== "true";
    monoToggle.setAttribute("aria-pressed", String(enabled));
    document.body.classList.toggle("is-mono", enabled);
  });

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Init ---------- */
  buildGallery();
  revealCards();
  refresh(false);
})();
