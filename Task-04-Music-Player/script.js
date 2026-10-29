
const audio = document.getElementById("audio");
const playlist = document.getElementById("playlist");
const songTitle = document.getElementById("songTitle");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const volume = document.getElementById("volume");
const status = document.getElementById("status");

let songs = [];
let currentIndex = 0;
let shuffle = false;
let repeat = false;

async function loadSongs() {
  try {
    const response = await fetch("songs.json");
    if (!response.ok) throw new Error("Could not read songs.json");

    songs = await response.json();
    document.getElementById("songCount").textContent =
      `${songs.length} ${songs.length === 1 ? "track" : "tracks"}`;

    if (!songs.length) {
      playlist.innerHTML = '<p class="empty">Your playlist is empty.</p>';
      songTitle.textContent = "No songs found";
      return;
    }

    renderPlaylist();
    loadSong(0);
  } catch (error) {
    console.error(error);
    songTitle.textContent = "Playlist unavailable";
    status.textContent = "Check songs.json and run the local server.";
    playlist.innerHTML =
      '<p class="empty">Could not load your songs. Check that songs.json exists and the local server is running.</p>';
  }
}

function renderPlaylist() {
  playlist.replaceChildren();

  songs.forEach((song, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "playlist-item";

    const number = document.createElement("span");
    number.className = "track-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const info = document.createElement("span");
    info.className = "track-info";

    const name = document.createElement("strong");
    name.textContent = song.title || "Unknown track";

    const subtitle = document.createElement("small");
    subtitle.textContent = song.artist || "Your Music Library";

    info.append(name, subtitle);

    const playIcon = document.createElement("span");
    playIcon.className = "track-play";
    playIcon.textContent = "▶";

    item.append(number, info, playIcon);
    item.addEventListener("click", async () => {
      loadSong(index);
      await playSong();
    });

    playlist.appendChild(item);
  });
}

function loadSong(index) {
  if (!songs.length) return;

  currentIndex = (index + songs.length) % songs.length;
  const song = songs[currentIndex];

  audio.src = song.src;
  audio.load();

  songTitle.textContent = song.title || "Unknown track";
  artist.textContent = song.artist || "Your Music Library";
  progress.value = 0;
  currentTimeEl.textContent = "0:00";
  durationEl.textContent = "0:00";

  [...playlist.children].forEach((item, i) => {
    const active = i === currentIndex;
    item.classList.toggle("active", active);
    item.querySelector(".track-play").textContent = active ? "♫" : "▶";
  });

  playlist.children[currentIndex]?.scrollIntoView({
    block: "nearest",
    behavior: "smooth"
  });

  status.textContent = "Ready to play";
}

async function playSong() {
  if (!songs.length) return;

  try {
    await audio.play();
    status.textContent = "Now playing";
  } catch (error) {
    console.error("Audio playback error:", error);
    status.textContent = "Couldn't play this file. Check its path and format.";
  }
}

function togglePlay() {
  if (!songs.length) return;

  if (audio.paused) {
    playSong();
  } else {
    audio.pause();
  }
}

function nextSong() {
  if (!songs.length) return;

  let next = currentIndex + 1;

  if (shuffle && songs.length > 1) {
    do {
      next = Math.floor(Math.random() * songs.length);
    } while (next === currentIndex);
  } else if (next >= songs.length) {
    next = 0;
  }

  loadSong(next);
  playSong();
}

function previousSong() {
  if (!songs.length) return;

  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }

  loadSong(currentIndex - 1);
  playSong();
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60).toString().padStart(2, "0");

  return `${minutes}:${remaining}`;
}

playBtn.addEventListener("click", togglePlay);
document.getElementById("nextBtn").addEventListener("click", nextSong);
document.getElementById("prevBtn").addEventListener("click", previousSong);

document.getElementById("shuffleBtn").addEventListener("click", () => {
  shuffle = !shuffle;
  document.getElementById("shuffleBtn").classList.toggle("active", shuffle);
  status.textContent = shuffle ? "Shuffle on" : "Shuffle off";
});

document.getElementById("repeatBtn").addEventListener("click", () => {
  repeat = !repeat;
  document.getElementById("repeatBtn").classList.toggle("active", repeat);
  status.textContent = repeat ? "Repeat on" : "Repeat off";
});

audio.addEventListener("play", () => {
  playBtn.textContent = "❚❚";
  playBtn.setAttribute("aria-label", "Pause");
  document.body.classList.add("playing");
});

audio.addEventListener("pause", () => {
  playBtn.textContent = "▶";
  playBtn.setAttribute("aria-label", "Play");
  document.body.classList.remove("playing");
});

audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  if (!Number.isFinite(audio.duration) || audio.duration <= 0) return;

  progress.value = (audio.currentTime / audio.duration) * 100;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
});

progress.addEventListener("input", () => {
  if (Number.isFinite(audio.duration) && audio.duration > 0) {
    audio.currentTime = (Number(progress.value) / 100) * audio.duration;
  }
});

volume.addEventListener("input", () => {
  audio.volume = Number(volume.value);
});

audio.addEventListener("ended", () => {
  if (repeat) {
    audio.currentTime = 0;
    playSong();
  } else {
    nextSong();
  }
});

audio.addEventListener("error", () => {
  status.textContent = "Audio file couldn't load. Check the MP3 path.";
});

audio.volume = Number(volume.value);
loadSongs();
