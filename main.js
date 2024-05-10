import {
  articleOsszeallit,
  megjelenit,
  keres,
  rendezAr,
  rendezMeret,
  kosarbaRak,
  kosarOsszeallit,
  torol,
  kosarOsszegez,
  /* ,
  osszegez, */
} from "./fuggvenyek.js";
import { tetkokLISTA } from "./adat.js";

const kartyakELEM = $(".cards");
const kosarELEM = $(".kosar");
kartyakELEM.html(articleOsszeallit(tetkokLISTA));

const kosarLISTA = [];
init(tetkokLISTA);
kosarInit(kosarLISTA);

const KOSARMENU = $("#kosarmenu");

rendezEsemeny();
szuresEsemeny();

export function init(tLISTA) {
  megjelenit(articleOsszeallit(tLISTA), kartyakELEM);
  

}
export function kosarInit(kosarLISTA,lista) {
  kosarbaEsemeny(lista);
  megjelenit(kosarOsszeallit(kosarLISTA), kosarELEM);
  torolEsemeny();
  /* darabszamotValt(); */
}

/* SZURES */
function szuresEsemeny() {
  const keresoELEM = $("#szuro");
  keresoELEM.on("keyup", function () {
    let kereseoSzoveg = keresoELEM.val();
    const szLISTA = keres(tetkokLISTA, kereseoSzoveg);
    //console.log(szLISTA);
    init(szLISTA);
    kosarInit(kosarLISTA,szLISTA)
    
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
    init(tetkokLISTA);
    kosarInit(kosarLISTA.rLISTA);
  });
  arN.on("click", function () {
    const rLISTA = rendezAr(tetkokLISTA, irany);
    //console.log(rLISTA);
    init(tetkokLISTA);
    kosarInit(kosarLISTA,rLISTA);
  });
  meretCS.on("click", function () {
    const rLISTA = rendezMeret(tetkokLISTA, irany * -1);
    //console.log(rLISTA);
    init(tetkokLISTA);
    kosarInit(kosarLISTA,rLISTA);
  });
  meretN.on("click", function () {
    const rLISTA = rendezMeret(tetkokLISTA, irany);
    //console.log(rLISTA);
    init(tetkokLISTA);
    kosarInit(kosarLISTA,rLISTA);
    
  });
}

/* KOSAR */

function kosarbaEsemeny(lista) {
  const kosarbaGOMB = $(".gomb");
  kosarbaGOMB.on("click", function (event) {
    let aktId = event.target.id.replace("k", "");
    console.log(lista[aktId]);
    kosarbaRak(lista, kosarLISTA, aktId);
    let osszeg;
    osszeg += kosarOsszegez(kosarLISTA);
    console.log(osszeg);
    init(lista);
    kosarInit(kosarLISTA,lista);
  });
}

function darabszamotValt() {
  const HANYSZOR = $(".quantity");

  HANYSZOR.on("change", function () {
    //leszedem melyik change, és annak az objektumnak a dbszámát a valuera módosítom
    //utána meghívom az árösszegzés metódust
  });
}

function torolEsemeny() {
  const torolGOMB = $(".gombTORLES");
  torolGOMB.on("click", function (event) {
    let aktId = event.target.id;
    torol(kosarLISTA, aktId);
    kosarInit(kosarLISTA);
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
