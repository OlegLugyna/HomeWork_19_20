(function() {

  var btn =  document.getElementsByClassName('headline__btn');

  for (var i = 0; i<btn.length; i++) {
    btn[i].onclick = function() {
      this.classList.toggle("active");

      //var  panel = this.nextElementSibling;
      var panel = document.getElementsByClassName('pannel__text');
      if(panel.style.display === 'block') {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    };
  }




})();
