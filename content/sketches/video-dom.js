let vid;
function setup() {
  noCanvas();

  vid = createVideo(
    ['/Visual-Computing-2021-2S/sketches/fingers.mov', '/Visual-Computing-2021-2S/sketches/fingers.webm'],
    vidLoad
  );

  vid.size(320, 240);
}

// This function is called when the video loads
function vidLoad() {
  vid.loop();
  vid.volume(0);
}