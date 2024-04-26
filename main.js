import {
  articleOsszeallit,
  megjelenit,
  keres,
  rendezAr,
  rendezMeret,
/*   kosarbaRak,
  kosarOsszeallit,
  torol */
} from "./fuggvenyek.js";
import { tetkokLISTA } from "./adat.js";

const kartyakELEM = $(".cards");
const kosarELEM = $(".kosar");
kartyakELEM.html(articleOsszeallit(tetkokLISTA));

const kosarLISTA = [];
init(tetkokLISTA,kosarLISTA);
export function init(tetkokLISTA,kosarLISTA) {
  megjelenit(articleOsszeallit(tetkokLISTA), kartyakELEM);
 /*  megjelenit(kosarOsszeallit(kosarLISTA), kosarELEM);
  kosarbaEsemeny(tetkokLISTA);
  torolEsemeny(); */
}

rendezEsemeny();
szuresEsemeny();


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

/* RENDEZES */

let irany = 1; /* 1 = novekvő rendezés, -1 = csokkeno */
rendezEsemeny();
function rendezEsemeny() {
  const arCS = $("#csokkeno");
  const arN = $("#novekvo");
  const meretCS = $("#meretcs");
  const meretN = $("#meretn");

  arCS.on("click", function () {
    const rLISTA = rendezAr(tetkokLISTA, irany * -1);
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

/* KOSAR */
/* function kosarbaEsemeny() {
  const kosarbaGOMB = $(".gomb");
  kosarbaGOMB.on("click", function (event) {
    let aktId = event.target.id;
    kosarbaRak(tetkokLISTA, kosarLISTA, aktId);
    console.log(kosarLISTA)
    init(tetkokLISTA, kosarLISTA);
  });
}

function torolEsemeny() {
  const torolGOMB = $(".gombTÖRÖL");
  torolGOMB.on("click", function (event) {
    let aktId = event.target.id;
    torol(kosarLISTA, aktId);
    init(tetkokLISTA, kosarLISTA);
  });
}
 */