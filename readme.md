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
    adat.js-->x elemű lista, cardok adatait tartalmazza egy elem, temék neve, kép elérési útja, termék leírása, ár, kategória, szín, méret
2. divek összeállítása: article-be
    listaMegjelenit.js-->lista hosszászor, megfogjuk a divet, és létrehozunk benne egy bootsrapes cardot, ennek átadjuk a lista indexedik elemének az adatait
    visszatérési értéke: txt
3. keresés: (SZURES LESZ EZ!!!)
    keresés mezőbe gépelve minden olyan adattal, leírással vagy névvel rendelkező elemet megmutat
4. rendezés:
    lenyíló input elemben kiválasztott módon rendezi a cardokat, növekvő, csökkenő ár, a-z, z-a
5. szűrés: lenyíló input elem lehetőségei között, kategóia, szín és méret alapján szűrhetőek a cardok
6. táblázat összeállítása:

7. kosárba rakás: asideba
    a cardok submit gombjára kattintva a listából az adott elemet egy táblázathoz hozzáadom
    meghívom a táblázat összeállítot és beleteszem az edott elem adatait
8. megjelenít: megjeleníti a megfelelő helyen a paraméterként kapott hmtl szövget / elemet és a      paraméterként kapott "megfeleő helyet (article/aside)"