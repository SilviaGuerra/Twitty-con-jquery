(function () {
  var contador = 0;
  var letras = 140;

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
    var $hora = $("<p>");
    $hora.text(formatAMPM);



    var identificador = "marcador-" + contador;

    // Personalizamos elementos
    // $postContenedor.addClass("jumbotron");
    // $postCheck.type = "checkbox";
    $postTexto.attr("for", identificador);
    $postTexto.text(mensaje);

    // Agregarlos al DOM
    $postContenedor.append($postTexto);
    $postContenedor.append($hora);


    // Agregarlo a un elemento existente para visualizarlo
    // contenedor.appendChild(postContenedor);
    $contenedor.prepend($postContenedor);


    // Borrar contenido de textarea
    $mensajeContenedor.val("");
    letras = 140 - $("#tweet").val().length;
    $("#contador").text(letras);
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
    letras = 140 - $("#tweet").val().length;
    if(letras >=30){
      $("#contador").css("color", "#000");
    }
    if(letras < 30){
      $("#contador").css("color", "#BCB800");
    }
    if(letras < 20){
      $("#contador").css("color", "red");
    }
    if(letras < 0){
      $("#mandar").prop( "disabled", true );
    }
    $("#contador").text(letras);

  };

  var formatAMPM = function() {
    var date = new Date;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }



  // Cuando carga la página
  $(document).ready(cargarPagina);
})();
