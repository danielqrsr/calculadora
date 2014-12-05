$(document).ready(function () {
  var memoria = []
  function press (ev) {
    memoria.push(ev.target.innerHTML);
    $("#resultado strong").html(memoria.join(''));
  };
  $("button").on('click', press)
});
