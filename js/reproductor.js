// script.js

document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('ruta-a-tu-audio.mp3');
    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progress = document.getElementById('progress');
    const currentTime = document.getElementById('current-time');
    const duration = document.getElementById('duration');
  
    let isPlaying = false;
    
    // Event listener para cambiar el estado de play/pause
    playBtn.addEventListener('click', () => {
      if (isPlaying) {
        audio.pause();
        playBtn.innerHTML = "&#9658;";  // Play icon
      } else {
        audio.play();
        playBtn.innerHTML = "&#10074;&#10074;";  // Pause icon
      }
      isPlaying = !isPlaying;
    });
  
    // Actualizar la barra de progreso y el tiempo transcurrido
    audio.addEventListener('timeupdate', () => {
      const progressValue = (audio.currentTime / audio.duration) * 100;
      progress.value = progressValue;
      currentTime.textContent = formatTime(audio.currentTime);
    });
  
    // Actualizar el tiempo total (duración) cuando se carguen los metadatos del audio
    audio.addEventListener('loadedmetadata', () => {
      duration.textContent = formatTime(audio.duration);
    });
  
    // Función para formatear el tiempo (min:seg)
    function formatTime(seconds) {
      const min = Math.floor(seconds / 60);
      const sec = Math.floor(seconds % 60);
      return `${min}:${sec < 10 ? '0' + sec : sec}`;
    }
  
    // Cambiar la posición del audio al mover el slider de progreso
    progress.addEventListener('input', () => {
      audio.currentTime = (progress.value / 100) * audio.duration;
    });
  
    // Funciones para avanzar/retrasar la canción
    prevBtn.addEventListener('click', () => {
      audio.currentTime -= 10;  // Retroceder 10 segundos
    });
  
    nextBtn.addEventListener('click', () => {
      audio.currentTime += 10;  // Avanzar 10 segundos
    });
  });
  