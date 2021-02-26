'use strict';

// function changeAction(){
//   const role = $('#sign-up-select').val();
//   console.log(role);
//   $('#sign-up').attr('action', `/${role}`);
// }



// $('#sign-up-select').change(changeAction);

$('#sign-in-button').on('click', async function (e) {
  e.preventDefault();
  const header = btoa(`${$('#username').val()}:${$('#password').val()}`);
  const response = await $.ajax({
    url: "http://localhost:3005/signin",
    type: 'POST',
    contentType: 'application/json',
    headers: {
      "Authorization": "Basic " + header,
    },
    async: true,
  });
  console.log(response);
  if(response){
    window.location.replace(`${response}`);
  }
});