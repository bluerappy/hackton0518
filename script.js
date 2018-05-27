class Combattant {
  constructor(id, name, powerstats, appearance, biography, work, images) {
    this.id = id;
    this.name = name;
    this.powerstats = powerstats;
    this.appearance = appearance;
    this.biography = biography;
    this.work = work;
    this.images = images;
    this.pv = 100;
  }

  // Attaque INT
  intPsy(adv) {
    adv.pv -= Math.floor(this.powerstats.intelligence / 4);
    document.getElementById("textBox").innerText = this.name +
    ' lance psy sur ' + adv.name + '. Il/Elle perd ' +
    Math.floor(this.powerstats.intelligence / 4) + ' points de vie. Il/Elle lui reste ' +
    adv.pv + ' points de vie.';
    if (this.isAlive(adv) === true) {
      document.getElementById("textBox").innerText = adv.name +
      ' est mort(e). Le combat est terminé ! ' + this.name + ' remporte la victoire !!';
    }
  };
  intSoin(adv) {
    this.pv += Math.floor(this.powerstats.intelligence / 3);
  };
  intManipulation(adv) {
    adv.pv -= Math.floor(adv.powerstats.intelligence / 2);
  };

  // Attaque STR
  strCoupDeBoule(adv) {
    adv.pv -= Math.floor(this.powerstats.strength / 4)
  };
  strCoupDePoing(adv) {
    adv.pv -= Math.floor(this.powerstats.strength / 3)
    document.getElementById("textBox").innerText = this.name +
    ' lance coup de poing sur ' + adv.name + '. Il/Elle perd ' +
    Math.floor(this.powerstats.strength / 3) + ' points de vie. Il/Elle lui reste ' +
    adv.pv + ' points de vie !';
    if (this.isAlive(adv) === true) {
      document.getElementById("textBox").innerText = adv.name +
      ' est mort(e). Le combat est terminé ! ' + this.name + ' remporte la victoire !!';
    }
  };
  strCoupDeTete(adv) {
    adv.pv -= Math.floor(this.powerstats.strength / 2)
  };

  // Attaque SPEED
  spEclair(adv) {
    adv.pv -= Math.floor(this.powerstats.speed / 4);
  };
  spLightning(adv) {
    adv.pv -= Math.floor(this.powerstats.speed / 3);
  };
  spForcespeed(adv) {
    adv.pv -= Math.floor(this.powerstats.speed / 2)
    document.getElementById("textBox").innerText = this.name +
    ' lance force speed sur ' + adv.name + '. Il/Elle perd ' +
    Math.floor(this.powerstats.speed / 2) + ' points de vie. Il/Elle lui reste ' +
    adv.pv + ' points de vie !';
    if (this.isAlive(adv) === true) {
      document.getElementById("textBox").innerText = adv.name +
      ' est mort(e). Le combat est terminé ! ' + this.name + ' remporte la victoire !!';
    }
  };

  loadImage1() {
    document.getElementById("imgJ1").src = this.images.lg;
    document.getElementById("imgJ1Back").src = this.images.lg;
  }
  loadImage2() {
    document.getElementById("imgJ2").src = this.images.lg;
    document.getElementById("imgJ2Back").src = this.images.lg;
  }

  isAlive(target) {
    if (target.pv <1){
      document.getElementById("button2").disabled = true;
  		document.getElementById("button22").disabled = true;
  		document.getElementById("button23").disabled = true;
  		document.getElementById("button1").disabled = true;
  		document.getElementById("button11").disabled = true;
  		document.getElementById("button12").disabled = true;
    }
    if (target.pv > 0) {
      return false
    } else {
      return true
    }
  }

  lifeBar1(p) {
    document.getElementById("health2").value = p.pv;
  }
  lifeBar2(p) {
    document.getElementById("health").value = p.pv;
  }

  // Speak
  speak() {
    return `Je suis ${this.name} et je possède actuellement ${this.pvTotal} points de vie!`;
  }
}




let combattant1
let combattant2

function createPerso1() {

  let randomJ1 = Math.floor(Math.random() * 730);
  window.fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/' + randomJ1 + '.json')
    .then(res => res.json())
    .then(resJson => {
      combattant1 = new Combattant(resJson.id, resJson.name, resJson.powerstats, resJson.appearance, resJson.biography, resJson.work, resJson.images);
      combattant1.loadImage1();
      document.getElementById("J1Name").innerText = combattant1.name;
    });
}

function createPerso2() {
  let randomJ2 = Math.floor(Math.random() * 730);
  window.fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/' + randomJ2 + '.json')
    .then(res => res.json())
    .then(resJson => {
      combattant2 = new Combattant(resJson.id, resJson.name, resJson.powerstats, resJson.appearance, resJson.biography, resJson.work, resJson.images);
      combattant2.loadImage2();
      document.getElementById("J2Name").innerText = combattant2.name;
    });
}


/* COMBAT */

createPerso1();
createPerso2();
