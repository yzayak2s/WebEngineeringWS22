import {serve} from "https://deno.land/std@0.157.0/http/server.ts";
// This package has a disadvantage. See below.
// import {CSVtoJSON} from "https://deno.land/x/data_format_converter@v1.2.0/mod.ts"
// Another approach to use npm packages
import { createRequire } from "https://deno.land/std@0.175.0/node/module.ts";
const require = createRequire(import.meta.url);

const csvtojson = require('csvtojson')

const handler = async (): Promise<Response> => {
    const response = await fetch("https://zenodo.org/api/files/43c8b134-7671-4536-b2e9-bd16687c9c5c/Aktuell_Deutschland_SarsCov2_Infektionen.csv", {
        // The init object here has an headers object containing a
        // header that indicates what type of response we accept.
        // We're not specifying the method field since by default
        // fetch makes a GET request.
        headers: {
            accept: "text/csv",
        },
    });
    // Reference: https://deno.land/x/data_format_converter@v1.2.0#converting-a-csv-string-to-json
    // Issue: allocation failure, when fetching.
    // Solution: Fixed it after passing '--v8-flags='
    //           --v8-flags=--max-old-size=8000
    // References: https://github.com/denoland/deno/discussions/10686
    //             https://medium.com/deno-the-complete-reference/v8-flags-supported-by-deno-f5f7a946dadb
    // At this point my data gets corrupted cause of the CSVtoJSON function.
    /*const csvData = await resp.text()

    console.log(await csvtojson().fromString((csvData)))*/
    const csvData = await response.text();
    // An dieser Stelle war es mir weder mit deno noch mit Online-Converter (CSV to JSON)
    // möglich gewesen die 6,8 Millionen Datensätze zu transformieren.
    // Daher deute ich ab hier nur an, wie genau ich weiter vorgehen würde.
    // Zu aller erst gruppiere ich die Datensätze in Abhängigkeit der Landkreise (IdLandkreis)
    // und greife nach der Transformation mit Object.entries() auf die Attribute
    //      - Altersgruppe
    //      - NeuerFall
    //      - NeuerTodesfall
    //      - NeuGenesen
    //      - AnzahlFall
    //      - AnzahlTodesfall
    //      - AnzahlGenesen.
    // Anschließend berechne ich mithilfe von:
    //      - Math.max(...[]) das Maximum,
    //      - Math.min(...[]) das Minimum,
    //      - .reduce() die Summe und
    //      - Summe / Gesamtanzahl den Durchschnitt
    // (siehe Methode calculate unten).
    //
    // Zu guter letzt erstelle ich mit den DOM-Operationen eine Tabelle
    // mit <th>-Tags und <td>-Tags und füge die Werte mithilfe von '.innerHTML = value'
    // ein.
    return csvtojson().fromString(csvData);
};



console.log("Listening on http://localhost:8000");
serve(handler);