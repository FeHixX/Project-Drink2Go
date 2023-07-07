const slider = document.querySelector('.range-slider');
const numberInputs = document.querySelectorAll('.number__input');
const buttonReset = document.querySelector('.button--reset');

noUiSlider.create(slider, {
  start: [0, 900],
  connect: true,
  margin: 1,
  step: 1,
  range: {
    'min': 0,
    'max': 1000
  }
});

slider.noUiSlider.on('update', (values, handle) => {
  numberInputs[handle].value = Math.round(values[handle]);
});

const setRangeSlider = (index, value) => {
  const values = [null, null];
  values[index] = value;
  slider.noUiSlider.set(values);
};

numberInputs.forEach((input, index) => {
  input.addEventListener('change', (evt) => {
    setRangeSlider(index, evt.target.value);
  });
});

buttonReset.addEventListener('click', () => {
  slider.noUiSlider.reset();
})
