function Sugo() {
    return (
        <div className="p-3 hely">
            <h1 className="text-center my-3">Tudás<kbd className="bg-success p-1 ml-1">ON</kbd> súgó</h1>
            <ul className="list-group">
                <li className="list-group-item border-0">
                    <h1 className="text-success">Cikkek</h1>
                    <h4 className="font-weight-normal ml-2">A cikkeket regisztráció nélkül is olvashatják az oldal látogatói. Törlési joggal csak az adminok rendelkeznek. Mielőtt a szerkesztők által megosztani kívánt szöveget az oldal olvasói láthatnák, az adminoknak engedélyezniük kell azt. Ha úgy gondolják a cikk nem az oldalra illő, egyszerűen csak kitörlik azt.</h4>
                </li>
                <li className="list-group-item border-0">
                    <h1 className="text-success">Fórum</h1>
                    <h4 className="font-weight-normal ml-2">A fórumon több téma között lehet böngészni, vagy akár egy újat létrehozni. A témák alatt minden felhasználó hozzá tud szólni, olvasni mások véleményét.</h4>
                </li>
                <li className="list-group-item border-0">
                    <h1 className="text-success">Admin Felület</h1>
                    <h4 className="font-weight-normal ml-2">Ehhez az oldalhoz csak az adminoknak van jogosultságuk. Más felhasználók és vendégek nem is tudnak a létezéséről. Ennek a résznek a célja az, hogy a szerkesztők által megosztani kívánt cikkeket itt tudják kiválogatni az arra jogosultak.</h4>
                </li>
                <li className="list-group-item border-0">
                    <h1 className="text-success">Belépés/Regisztráció</h1>
                    <h4 className="font-weight-normal ml-2">Ezen az oldalon két oszlopot láthatnak a vendégek. Ha már régebben regisztráltak egy felhasználót, gyorsan be tudnak lépni, hogy teljesen kiélvezhessék oldalunkat. A teljesen újaknak regisztrálniuk kell fiókjukat, melynek adatait mi biztonságban tároljuk. Mindezek után ő is hozzáfér a bővebb oldalhoz.</h4>
                </li>
            </ul>
        </div>
    );

}

export default Sugo;