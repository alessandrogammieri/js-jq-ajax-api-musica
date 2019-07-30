/* Attraverso una chiamata ajax all’Api di boolean avremo a
disposizione una decina di dischi musicali.
Servendoci di handlebars stampiamo tutto a schermo.
In questo momento non è importante la parte grafica. */


$(document).ready(function() {

  // Richiediamo via ajax all'API i dischi musicali
  $.ajax({
    url : "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data) {
      if (data.success) {
        var dischi = data.response;
        // Creo il clone del messaggio con Handlebars
        var source = $("#template").html();
        var template = Handlebars.compile(source);
        // Ciclo for per generare i dischi
        for (var i = 0; i < dischi.length; i++) {
          var context = {
            poster: dischi[i].poster,
            title: dischi[i].title,
            author: dischi[i].author,
            genre: dischi[i].genre,
            year: dischi[i].year
          };
          // Stampo l'input a schermo
          var html = template(context);
          $(".cds-container").append(html);
        }
      }
    },
    error: function (errore) {
      alert ("C'è stato un errore: " + errore);
    }
  });

});
