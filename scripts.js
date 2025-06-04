
function toggleFullscreen(video) {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    video.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  }
}
