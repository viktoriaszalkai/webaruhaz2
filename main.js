import {
  articleOsszeallit,
  megjelenit,
  keres,
  rendezAr,
  rendezMeret,
 /*  kosarba, */
} from "./fuggvenyek.js";
import { tetkokLISTA } from "./adat.js";

const kartyakELEM = $(".cards");
kartyakELEM.html(articleOsszeallit(tetkokLISTA));

init(tetkokLISTA);
export function init(lista) {
  megjelenit(articleOsszeallit(lista));
  rendezEsemeny();
  /* kosarba(tetkokLISTA); */
  /*   torolEsemeny(); */
}
/* SZURES */
function szuresEsemeny() {
  const keresoELEM = $("#szuro");
  keresoELEM.on("keyup", function () {
    let kereseoSzoveg = keresoELEM.val();
    const szLISTA = keres(tetkokLISTA, kereseoSzoveg);
    //console.log(szLISTA);
    init(szLISTA);
  });
}

szuresEsemeny();
init(tetkokLISTA);

/* RENDEZES */

let irany = 1; /* 1 = novekvő rendezés, -1 = csokkeno */
rendezEsemeny();
function rendezEsemeny() {
  const arCS = $("#csokkeno");
  const arN = $("#novekvo");
  const meretCS = $("#meretcs");
  const meretN = $("#meretn");

  arCS.on("click", function () {
    const rLISTA = rendezM(tetkokLISTA, irany * -1);
    //console.log(rLISTA);
    init(rLISTA);
  });
  arN.on("click", function () {
    const rLISTA = rendezAr(tetkokLISTA, irany);
    //console.log(rLISTA);
    init(rLISTA);
  });
  meretCS.on("click", function () {
    const rLISTA = rendezMeret(tetkokLISTA, irany * -1);
    //console.log(rLISTA);
    init(rLISTA);
  });
  meretN.on("click", function () {
    const rLISTA = rendezMeret(tetkokLISTA, irany);
    //console.log(rLISTA);
    init(rLISTA);
  });
}

