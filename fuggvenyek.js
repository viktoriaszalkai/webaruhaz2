import { tetkokLISTA } from "./adat.js";

export function articleOsszeallit(lista) {
  let txt = " ";
  for (let index = 0; index < lista.length; index++) {
    txt += `<div class="card bg-black text-white col-md-4" style="width:270px" id = "c${index}">
        <img class="card-img-top" src="${lista[index].kep}">
        <div class="card-body">
          <h4 class="nev">${lista[index].nev}</h4>
          <ul>
            <li class="ar">ár: ${lista[index].ar} ft</li>
            <li class="meret">méret: ${lista[index].meret} cm</li>
            <li class="szin">szín: ${lista[index].szin}</li>
          </ul>
          <button id = "k${index}" type="button" class="gomb">Kosárba</button>
        </div>
      </div>`;
  }
  /* console.log(txt); */
  return txt;
}
export function megjelenit(txt, hova) {
  hova.html(txt);
}

export function keres(lista, keresoSzoveg) {
  const szurtLISTA = lista.filter(function (tetko) {
    let nevFeltetel = tetko.nev
      .toUpperCase()
      .includes(keresoSzoveg.toUpperCase());
    let szinFeltetel = tetko.szin
      .toUpperCase()
      .includes(keresoSzoveg.toUpperCase());
    return nevFeltetel || szinFeltetel;
  });
  return szurtLISTA;
}

export function rendezAr(lista, irany) {
  /* 3. rendez(lista)-> rendezettLista | a paraméterében kapott listát név szerint rendezi; */
  lista.sort(function (e1, e2) {
    /* név szerint */
    let eredmeny = 1;
    if (e1.ar < e2.ar) {
      eredmeny = -1;
    }
    return eredmeny * irany;
    /* visszater egy pozitiv vagy egy negativ szammal, ha negativ akkor felcseréli a két eelemet, ha pozitív nem */
  });
  return lista;
}
export function rendezMeret(lista, irany) {
  /* 3. rendez(lista)-> rendezettLista | a paraméterében kapott listát név szerint rendezi; */
  lista.sort(function (e1, e2) {
    /* név szerint */
    let eredmeny = 1;
    if (e1.meret < e2.meret) {
      eredmeny = -1;
    }
    return eredmeny * irany;
    /* visszater egy pozitiv vagy egy negativ szammal, ha negativ akkor felcseréli a két eelemet, ha pozitív nem */
  });
  return lista;
}

/* KOSARBA HELYEZES */
export function kosarOsszeallit(lista) {
  console.log(lista);
  let txt = "<table class = 'tablazat'>";
  txt += "<h4>Kosár tartalma</h4>";
  txt += "<tbody>";
  let osszeg = 0;
  lista.forEach((element, index) => {
    txt += `<tr>`;
    for (const key in element) {
      if (key != "db") {
        txt += `<td>${element[key]}</td>`;
      }
      if (key === "ar") {
        osszeg += parseInt(element[key] * element.db);
        console.log("kosarosszeallit" + element.db);
      }
    }
    txt += `<td>
       
        <input type="number" class="quantity" id = "A${index}" name="quantity" min="1" max="5" value = ${element.db}>
        <label for="quantity">db</label>     
        </td>`;
    txt += `<td> <button id = "${index}" type="button" class="gombTORLES">Törlés</button></td>`;

    txt += `</tr>`;
  });
  txt += "</tbody></table>";
  txt += `<h5 class = "vegosszeg ">végösszeg: ${osszeg} ft</h5>`;
  txt += `<button type="button" class="gombKESZ">Tovább</button>`;

  return txt;
}
export function kosarbaRak(lista1, lista2, id) {
  const aktOBJ = { nev: lista1[id].nev, ar: lista1[id].ar, ft: "ft" };
  let index = 0;
  while (index < lista2.length && aktOBJ.nev !== lista2[index].nev) {
    index++;
  }
  if (index < lista2.length) {
    lista2[index].db += 1;
    console.log("kosarbarak", +lista2[index].db);

    /* tobbszorValaszt(); */
  } else {
    aktOBJ.db = 1;
    lista2.push(aktOBJ);
  }
}

/* export function tobbszorValaszt(){
  aktOBJ.db++;
} */
export function torol(lista, id) {
  lista.splice(id, 1);
}

export function kosarOsszegez(lista) {
  let osszeg = 0;
  lista.forEach((element) => {
    osszeg = element.ar * element.db;
    console.log("kosarosszegez" + element.db);
  });
  /* console.log(osszeg); */
  return osszeg;
}

export function urlapOsszeallit() {
  let txt = "";
  txt += "<h5>Köszönjük, hogy a csapatunkat választottad!</h5>";
  txt +=
    "<p>Kérlek add meg az adataidat, hogy időpont egyeztetéssel kapcsolatban fel tudjuk venni veled a kapcsolatot!</p>";
/*     txt += `<div class="FORM"> `; */
    txt += `<form class = "urlap row" action="#" method="get">`;
    txt += `<fieldset >`;
    txt += `<div>`;
      txt += `<label for="neve" >név:</label>`;
      txt += `<input type="text" id="neve" name="nev">`;
    txt += `</div>`;
    txt += `<div>`;
      txt += ` <label for="szuldatum">születési dátum:</label>`;
      txt += `<input type="text" id="szuldatum" name="szuldatum">`;
    txt += `</div>`;
    txt += `<div>`;
      txt += `<label for="email">e-mail:</label>`;
      txt += `<input type="email" id="email" name="email"pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$">`;
    txt += `</div>`;
    txt += `<div>`;
      txt += `<label for="telefon">tel.:</label>`;
      txt += `<input type="tel" id="telefon" name="telefon">`;
    txt += `</div>`;
  txt += `</fieldset>`;
  txt += `</form>`;
  txt +=`<br>`;
  txt += `<div class = "mindenKESZ">`;
  txt += `<button type="button" class="gombMINDENKESZ">Vásárlás befejezése</button>`;
  txt += `</div>`;
 /*  txt += `</div>`; */

  return txt;
}

export function  utolsoUzenet(){
  let txt = "";
  txt += `<h5>Köszönjük a bizalmadat!</h5>`;
  txt += `<p>Csapatunk egyik tagja fel fogja venni veled a kapcsolatot.</p>`;
  return txt;
}