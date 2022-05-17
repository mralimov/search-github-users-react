export default function validateFormInut(input) {
  let error = {};

  //username input check
  if (input.userName == '') {
    error.userName = 'Username required';
  }

  //radio input check
  if (input.radioInput == '') {
    error.radioInput = 'Please select one of the button';
  }

  return error;
}
