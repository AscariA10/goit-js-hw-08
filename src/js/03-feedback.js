const fullForm = document.querySelector('.feedback-form');

const userInformationObject = {};

fullForm.addEventListener('input', () => {
   userInformationObject.text = fullForm.message.value;
   userInformationObject.mailText = fullForm.email.value;

   localStorage.setItem('feedback-form-state', JSON.stringify(userInformationObject));

   console.log(localStorage.getItem('feedback-form-state'));
});

firstOutput();

function firstOutput() {
   fullForm.email.value = JSON.parse(localStorage.getItem('feedback-form-state'))?.mailText
      ? JSON.parse(localStorage.getItem('feedback-form-state')).mailText
      : '';
   fullForm.message.value = JSON.parse(localStorage.getItem('feedback-form-state'))?.text
      ? JSON.parse(localStorage.getItem('feedback-form-state')).text
      : '';
}

fullForm.addEventListener('submit', () => {
   localStorage.removeItem('feedback-form-state');

   fullForm.email.value = '';
   fullForm.message.value = '';
});
//    //    fullForm.email.value = localStorage.getItem('feedback-form-state');

//    const storageInfo = JSON.parse(userInformationObject);
//    console.log(fullForm.email.value);
//    console.log(storageInfo);
// }
