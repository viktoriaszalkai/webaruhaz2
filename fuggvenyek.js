 export function articleOsszeallit(lista){
    let txt = " ";
    for (let index = 0; index < lista.length; index++) {
        txt += `<div class="card bg-black text-white col-md-3" style="width:200px" id = "${lista
        [index]}">
        <img class="card-img-top" src="${lista[index].kep}">
        <div class="card-body">
          <h4 class="nev">${lista[index].nev}</h4>
          <ul>
            <li class="ar">ár: ${lista[index].ar} ft</li>
            <li class="meret">méret: ${lista[index].meret} cm</li>
            <li class="szin">szín: ${lista[index].szin}</li>
          </ul>
          <button type="button" class="btn bg-white txt-black">Megtekintés</button>
        </div>
      </div>`       
    }
    console.log(txt)
    return txt;

}