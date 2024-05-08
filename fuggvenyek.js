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
  lista.forEach((element, index) => {
    txt += `<tr>`;
    for (const key in element) {
      if(key != "db"){
      txt += `<td>${element[key]}</td>`;
      }
    }
    txt += `<td>
        <label for="quantity">db</label>
        <input type="number" class="quantity" id = "A${index}" name="quantity" min="1" max="5" value = ${element.db}>
      </td>`;
    txt += `<td> <button id = "${index}" type="button" class="gombTORLES">Törlés</button></td>`;

    txt += `</tr>`;
  });
  txt += "</tbody></table>";

  return txt;
}
export function kosarbaRak(lista1, lista2, id) {
  const aktOBJ = { nev: lista1[id].nev, ar: lista1[id].ar + "ft", db:1};
  lista2.push(aktOBJ);
}
export function torol(lista, id) {
  lista.splice(id, 1);
}

/* export function osszegez(lista, obj,id){
  const elem = {ar: lista[id].ar + "ft"};
  obj += elem;
}

 */
