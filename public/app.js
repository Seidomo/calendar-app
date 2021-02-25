'use strict';

function changeAction(){
  const role = $('#sign-up-select').val();
  console.log(role);
  $('#sign-up').attr('action', `/${role}`);
};



$('#sign-up-select').change(changeAction);