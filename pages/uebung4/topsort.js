
/**
 * general topological sort
 * @author SHIN Suzuki (shinout310@gmail.com) https://gist.github.com/shinout/1232505
 */

function topsort(kanten) {
    var alleKnoten = {},    // id des Knotens vom Typ String
        sortiert = [],    // sortierte Liste der IDs
        besucht = {};   // id der bereits besuchten Knoten

    var Knoten = function (id) {
        this.id = id;
        this.nachfolger = [];
    }

    // 1. konstruiere Datenstruktur bzw. Graph
    kanten.forEach((v) => {
        var von = v[0], nach = v[1];
        if (!alleKnoten[von]) alleKnoten[von] = new Knoten(von);
        if (!alleKnoten[nach]) alleKnoten[nach] = new Knoten(nach);
        alleKnoten[von].nachfolger.push(nach);
    });

    //  2. topologische Sortierung
    Object.keys(alleKnoten).forEach(function besuche(idstr, vorfahren) {
        var knoten = alleKnoten[idstr],
            id = knoten.id;

        if (besucht[idstr]) return;

        if (!Array.isArray(vorfahren)) vorfahren = [];

        vorfahren.push(id);

        besucht[idstr] = true;

        knoten.nachfolger.forEach((folgeID) => {
            if (vorfahren.indexOf(folgeID) >= 0)    // Wenn bereits in Vorfahren, dann existiert ein Zyklus
                throw new Error('Geschlossene Kette (Zyklus): ' + folgeID + ' zeigt auf ' + id);

            besuche(folgeID.toString(), vorfahren.map((v) => { return v}));
        });

        sortiert.unshift(id);
    });

    return sortiert;
}

const errorMsg = "the # is not even"
console.assert(
    JSON.stringify(topsort([
        ["schlafen","studieren"],
        ["essen","studieren"],
        ["studieren","prüfen"]
    ])) === JSON.stringify(['essen', 'schlafen', 'studieren', 'prüfen'])
);
