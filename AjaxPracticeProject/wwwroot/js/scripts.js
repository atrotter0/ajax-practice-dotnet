function helloAjax() {
  $.ajax({
    type: 'GET',
    url: '/Home/HelloAjax',
    success: function (result) {
      $('#result1').html(result);
    }
  });
}

function runSum() {
  $.ajax({
    type: 'GET',
    data: { firstNumber: 1, secondNumber: 2 },
    url: '/Home/Sum',
    success: function (result) {
      $('#result2').html(result);
    }
  });
}

function displayObject() {
  $.ajax({
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    url: '/Home/DisplayObject',
    success: function (result) {
      var resultString = 'Id: ' + result.id + '<br/>City: ' + result.city + '<br/>Country: ' + result.country;
      $('#result3').html(resultString);
    }
  });
}

function displayView() {
  $.ajax({
    type: 'GET',
    dataType: 'html',
    url: '/Home/DisplayViewWithAjax',
    success: function (result) {
      $('#result4').html(result);
    }
  });
}

$(document).ready(function() {
  $('.hello-ajax').click(function () {
    helloAjax();
  });

  $('.sum').click(function () {
    runSum();
  });

  $('.display-object').click(function () {
    displayObject();
  });

  $('.display-view').click(function () {
    displayView();
  });
});
