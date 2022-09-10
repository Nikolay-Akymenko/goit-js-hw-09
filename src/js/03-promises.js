import Notiflix from 'notiflix';

const inputForm = document.querySelector('.form');
inputForm.addEventListener('input', onInputForm);
inputForm.addEventListener('submit', onSubmitForm);

let delay = 0;
let step = 0;
let amount = 0;

function onInputForm(event) {
  delay = Number(event.currentTarget.delay.value);
  step = Number(event.currentTarget.step.value);
  amount = Number(event.currentTarget.amount.value);
};

function onSubmitForm(event) {
  event.preventDefault();

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        }, delay);
      });
    delay += step;
  }
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay })
    } else {
      reject({ position, delay });
    }
  });
}
