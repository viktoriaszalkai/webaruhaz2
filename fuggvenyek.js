export function articleOsszeallit(lista) {
  let txt = " ";
  for (let index = 0; index < lista.length; index++) {
    txt += `<div class="card bg-black text-white col-md-4" style="width:270px" id = "${lista[index]}">
        <img class="card-img-top" src="${lista[index].kep}">
        <div class="card-body">
          <h4 class="nev">${lista[index].nev}</h4>
          <ul>
            <li class="ar">ár: ${lista[index].ar} ft</li>
            <li class="meret">méret: ${lista[index].meret} cm</li>
            <li class="szin">szín: ${lista[index].szin}</li>
          </ul>
          <button type="button" class="gomb">Kosárba</button>
        </div>
      </div>`;
  }
  /* console.log(txt); */
  return txt;
}

export function megjelenit(txt) {
  const divCARDS = $(".cards");
  divCARDS.html(txt);
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

/* export function kosarba(lista) {
  console.log(lista)
  let txt ="Kosár tartalma"; 
  const kosarbaGOMB = $(".gomb");
  kosarbaGOMB.on("click", function(event){
    let aktId = Number(lista[event.target.id]);
    txt += `<tr>
              <td>${lista[aktId.nev]}</td>
              <td>${lista[aktId.ar]} ft</td>
            </tr>`
    console.log(txt)
  });
}
 */