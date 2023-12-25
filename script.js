// Playing Notes

const pianoKeys = document.querySelectorAll(".piano-keys .key");
let allKeys = [];
let audio = new Audio("notes/a.wav");

const playTune = (key) => {
  audio.src = `notes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  console.log(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key);
};

document.addEventListener("keydown", pressedKey);

//volume Slider

const volumeSlider = document.querySelector(".volume-slider input");

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

volumeSlider.addEventListener("input", handleVolume);

//checkbox

const keysCheckbox = document.querySelector(".keys-checkbox input");

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

keysCheckbox.addEventListener("click", showHideKeys);
