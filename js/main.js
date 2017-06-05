(function () {
  var contador = 0;
  var letras = 0;

  var cargarPagina = function () {
    // Envío de Tweet
    $("#mensajes").submit(agregarTweet);
    $("#tweet").keyup(validarContenido);
    $("#tweet").keyup(contarLetras);
  };

  var agregarTweet = function (e) {
    e.preventDefault();
    // Obtenemos datos
    var $contenedor = $("#timeline");
    var $mensajeContenedor = $("#tweet");
    var $botonAgregar = $("#mandar");
    var mensaje = $mensajeContenedor.val();

    // Creamos elementos
    var $postContenedor = $("<article />", { "class": "jumbotron" });
    var $postTexto = $("<label />");

    var identificador = "marcador-" + contador;

    // Personalizamos elementos
    // $postContenedor.addClass("jumbotron");
    // $postCheck.type = "checkbox";
    $postTexto.attr("for", identificador);
    $postTexto.text(mensaje);

    // Agregarlos al DOM
    $postContenedor.append($postTexto);

    // Agregarlo a un elemento existente para visualizarlo
    // contenedor.appendChild(postContenedor);
    $contenedor.prepend($postContenedor);

    // Borrar contenido de textarea
    $mensajeContenedor.val("");
    $botonAgregar.attr("disabled", true);

    // bind, apply, call

    contador++;
  };

  var eliminarToDo = function () {
    $(this).parent().remove();
  };

  var validarContenido = function () {
    var $addButton = $("#mandar");
    // .trim() solo borra los espacios de sobra a los costados (izquierda y derecha)
    if($(this).val().trim().length > 0) {
      $addButton.removeAttr("disabled");
    } else {
      $addButton.attr("disabled", true);
    }
  };

  var contarLetras = function (event){
    if(letras < 140){
      if(event.keyCode == 8){
        letras--;
      }else{
        letras ++;
      }
      if(letras == 120){
        $("#contador").css("color", "#BCB800");
      }
      if(letras == 130){
        $("#contador").css("color", "red");
      }
      $("#contador").text(letras);
    }else{
      var $addButton = $("#mandar");
      var $bloquear = $("#tweet");
      $addButton.attr("disabled", true);
      $bloquear.attr("disabled", true);

    }


  };




  // Cuando carga la página
  $(document).ready(cargarPagina);
})();
