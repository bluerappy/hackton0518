function randombg(){
  var random= Math.floor(Math.random() * 4) + 0;
  var arr_image = ["url('img/dbz.jpg')",
                 "url('img/ring.png')",
                 "url('img/ryuu.png')",
                  "url('img/demonpit.gif')"
                 ];
  document.getElementById("random").style.backgroundImage=arr_image[random];
}

/*BARRE DE VIE JOUEUR1*/
// let health = document.getElementById("health")
// health.value -= 24;
//
// /*BARRE DE VIE JOUEUR2*/
// let health2 = document.getElementById("health2")
// health2.value -= 75;
