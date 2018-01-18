//Inicia jquery (el data esta listo)
$(document).ready(function () {
  $(".control").click(cargarImagen); // cuando se da click en el elemento que contiene la clase control (button) se ejecuta la función (cargarImagen)
})
var target = 0;

var cargarImagen = function() { //Función (cargar la función)
  // console.log(this.dataset.target);
  var $target = $(this).data("target");//trae al elemento en el que se detona la acción
  console.log($target);
  changeImage($target);// le asigna el argumento ($target) a la función changeImage
  changeColorButton($target);// le asigna el argumento ($target) a la función changeColor Button
}

var changeImage = function (target) {//Inicia la función  changeImage y su argumento es targer
  // console.log($("div.active"));
  var $actualImage = $("div.active");//guarda el div que tiene la clase active en $actualImage
  // console.log($("div[data-slide='"+$target+"']"));
  var $newImage = $("div[data-slide='" + target +"']");//A la variable $newImage le va a asignar "div[data-slide='"target"']"
  $actualImage.removeClass("active");//Quita la clase active
  $newImage.addClass("active");//Pone la clase active $newImage

}

var changeColorButton = function (target) {//Inicia la función changeColorButton y su argumento es target
    var $actualButton = $("button.active");//Guarda el botón que tiene el "active" en $actualButton
    var $newButton = $("button[data-target='" + target +"']");//A la variable $newButton le va a asignar "div[data-slide='"target"']"
    $actualButton.removeClass("active"); //Le quita la clase active al $actualButton
    $newButton.addClass("active");//Le pone la clase active al $newButton
}
