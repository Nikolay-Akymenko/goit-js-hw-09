import Notiflix from 'notiflix';


const inputForm = document.querySelector('.form');
// inputForm.addEventListener('input', onInputForm);
inputForm.addEventListener('submit', onSubmitForm);

// let delay = 0;
// let step = 0;
// let amount = 0;

// function onInputForm(event) {

// };

function onSubmitForm(event) {
  event.preventDefault();

 let delay = Number(event.currentTarget.delay.value);
 let step = Number(event.currentTarget.step.value);
 let amount = Number(event.currentTarget.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
      })
      .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
