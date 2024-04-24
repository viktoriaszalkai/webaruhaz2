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

let irany = 1; /* 1 = novekvő rendezés, -1 =  */
init(tetkokLISTA);
export function init(lista) {
  megjelenit(articleOsszeallit(lista));
  /*  rendezEsemeny(); */
  /*   torolEsemeny(); */
}

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
