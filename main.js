import {
  articleOsszeallit,
  megjelenit,
  keres,
  rendezAr,
  rendezMeret,
} from "./fuggvenyek.js";
import { tetkokLISTA } from "./adat.js";

const kartyakELEM = $(".cards");
kartyakELEM.html(articleOsszeallit(tetkokLISTA));

let irany = 1; /* 1 = novekvő rendezés, -1 = csokkeno */
init(tetkokLISTA);
export function init(lista) {
  megjelenit(articleOsszeallit(lista));
  rendezEsemeny();
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
rendezEsemeny();
function rendezEsemeny() {
  const arCS = $("#csokkeno");
  const arN = $("#novekvo");
  const meretCS = $("#meretcs");
  const meretN = $("#meretn");
  arCS.on("click", function () {
    const rLISTA = rendezM(tetkokLISTA, irany*-1);
    //console.log(rLISTA);
    init(rLISTA);
  });
  arN.on("click", function () {
    const rLISTA = rendezAr(tetkokLISTA, irany);
    //console.log(rLISTA);
    init(rLISTA);
  });
  meretCS.on("click", function () {
    const rLISTA = rendezMeret(tetkokLISTA, irany*-1);
    //console.log(rLISTA);
    init(rLISTA);
  });
  meretN.on("click", function () {
    const rLISTA = rendezMeret(tetkokLISTA, irany);
    //console.log(rLISTA);
    init(rLISTA);
  });
}