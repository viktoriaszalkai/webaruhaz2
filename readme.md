# Webáruház publikus felület
## specifikáció
A publikus felületen div-ekben jelenítsük meg az adatokat. (az előzetes minta alapján! Figyelj a reszponzitvitásra!
Az oldalon legyen szűrési és rendezési lehetőség is!
Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!

1.Lehet, hogy szükséged lesz a localStorage használatára. 
2.Ilyenkor készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.  :D
3.Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.

A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.

## függvények
1. adatlista létrehozása:
    adat.js--> x elemű lista, cardok adatait tartalmazza egy elem, temék neve, kép elérési útja, termék leírása, ár, kategória, szín, méret
2.  articleOsszeallit(lista): 
    A lista hosszászor, megfogjuk a divet, és létrehozunk benne egy bootsrapes cardot, ennek átadjuk a lista indexedik elemének az adatait, visszatérési értéke: txt.
3. keres(lista, keresoSzoveg)
    Keresés mezőbe gépelve minden olyan adattal, színnel vagy névvel rendelkező elemet megmutat.
4. szuresEsemeny()
    A main-ben ebben a függvényben hívjuk meg a keres függvényt, a megfogott keresés bezőben történő gépelés eseményére.
    Visszatérési értéke a szűrt lista.
5. rendezAr(lista, irany)/rendezMeret(lista, irany):
    Lenyíló input elemben kiválasztott módon rendezi a cardokat, növekvő, csökkenő ár, a-z, z-a.
    A függvényben paraméterként megadott listát, a megadott irány szerint rendezi "csökkenő", vagy "növekvő" sorrendben.
6. rendezEsemeny()
    A négy lehetőség közül választva, és egyre kattintva ebben a függvényben hívjuk meg a rendező függvények egyikét.
    Visszatérésí értéke a rendezett lista.
7. kosarOsszeallit(lista)
    Ciklussal összeállít egy üres táblázatot.
8. kosarbaRak(lista1, lista2, id)
    A lista1 aktuális id-val rendelkező név és ár elemeit beleteszi a lista2-be.
9. kosarbaEsemeny() 
    "Kosárba" gombra kattintva, a kosarbaRak függyvényt hívjuk meg, mely így listát hoz létre a kiválasztott elemekből., majd a kosarOsszeallit meghíváskor megjeleníti ezt a listát táblázatban.
10. torol(lista, id)
    Törlis a listánból az adott id-val rendelkező elemet.
11. torolEsemeny()
    "Törlés" gombra kattintáskor meghívjuk a torol függvényt, ami kitörli a kosárból a választott elemet.

. kosárba rakás: asideba
    a cardok submit gombjára kattintva a listából az adott elemet egy táblázathoz hozzáadom
    meghívom a táblázat összeállítot és beleteszem az edott elem adatait
. megjelenít: megjeleníti a megfelelő helyen a paraméterként kapott hmtl szövget / elemet és a      paraméterként kapott "megfeleő helyet (article/aside)"