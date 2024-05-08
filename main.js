import {
  articleOsszeallit,
  megjelenit,
  keres,
  rendezAr,
  rendezMeret,
  kosarbaRak,
  kosarOsszeallit,
  torol/* ,
  osszegez, */
} from "./fuggvenyek.js";
import { tetkokLISTA } from "./adat.js";

const kartyakELEM = $(".cards");
const kosarELEM = $(".kosar");
kartyakELEM.html(articleOsszeallit(tetkokLISTA));

const kosarLISTA = [];
init(tetkokLISTA, kosarLISTA);

const KOSARMENU = $("#kosarmenu");

rendezEsemeny();
szuresEsemeny();

export function init(tLISTA, kLISTA) {
  megjelenit(articleOsszeallit(tLISTA), kartyakELEM);
  megjelenit(kosarOsszeallit(kLISTA), kosarELEM);
  kosarbaEsemeny(tetkokLISTA);
  torolEsemeny();
  darabszamotValt();
}


/* SZURES */
function szuresEsemeny() {
  const keresoELEM = $("#szuro");
  keresoELEM.on("keyup", function () {
    let kereseoSzoveg = keresoELEM.val();
    const szLISTA = keres(tetkokLISTA, kereseoSzoveg);
    //console.log(szLISTA);
    init(szLISTA, kosarLISTA);
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
    init(rLISTA, kosarLISTA);
  });
  arN.on("click", function () {
    const rLISTA = rendezAr(tetkokLISTA, irany);
    //console.log(rLISTA);
    init(rLISTA, kosarLISTA);
  });
  meretCS.on("click", function () {
    const rLISTA = rendezMeret(tetkokLISTA, irany * -1);
    //console.log(rLISTA);
    init(rLISTA, kosarLISTA);
  });
  meretN.on("click", function () {
    const rLISTA = rendezMeret(tetkokLISTA, irany);
    //console.log(rLISTA);
    init(rLISTA, kosarLISTA);
  });
}

/* KOSAR */

function kosarbaEsemeny() {
  const kosarbaGOMB = $(".gomb");
  kosarbaGOMB.on("click", function (event) {
    let aktId = event.target.id.replace("k", "");
    console.log(tetkokLISTA[aktId]);
    kosarbaRak(tetkokLISTA, kosarLISTA, aktId);
    console.log(kosarLISTA);
    init(tetkokLISTA, kosarLISTA);
  });
}

function darabszamotValt(){
  const HANYSZOR = $(".quantity");
  HANYSZOR.on("change", function(event){
    console.log(event.target.value)
  });
}


function torolEsemeny() {
  const torolGOMB = $(".gombTORLES");
  torolGOMB.on("click", function (event) {
    let aktId = event.target.id;
    torol(kosarLISTA, aktId);
    init(tetkokLISTA, kosarLISTA);
  });
}

/* ÖSSZEGZÉS */
/* function osszegzesEsemeny() {
  let osszAr = 0;
  const kosarbaGOMB = $(".gomb");
  kosarbaGOMB.on("click",function(event){
    let aktId = event.target.id;
    osszegez(tetkokLISTA,osszAr,aktId);
    console.log(osszAr);
  });
}
osszegzesEsemeny();
 */