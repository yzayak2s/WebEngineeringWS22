// import stopwords from 'stopwords-de' assert {type: "json"}; // array of stopwords
// import stopwords from './bundle'
/**
 * Ich habe an dieser Stelle unzählige Versuche vorgenommen und jegliche Ansätze versucht,
 * um module aus den node_modules zu laden. In diesem Thread
 * (https://stackoverflow.com/xquestions/59317194/how-to-use-npm-package-as-normal-javascript-in-html/59317302#59317302)
 * wird diskutiert, dass das Laden von Modulen im Frontend nicht so einfach ist.
 * Folgende erforderliche Schritte habe ich aus dem Thread zusammengefasst:
 *      - statt require('<module_name>') muss ES6-Syntax genutzt werden (siehe import oben)
 *      - ES6-Code in normalen JS-Code mit 'babel' übersetzen (da Browser ES6-Syntax nicht versteht)
 *      - übersetzten Code mit <script>-Tag importieren.
 * Bei meiner weiteren Recherche bin ich auf das Modul babel/preset-env gestoßen.
 *      - installiere @babel/core, @babel/cli und @babel/preset-env
 *      - erstelle im root Verzeichnis eine config Datei 'babel.config.json'
 *      - ...
 */
function analyzeText(text) {
    console.log(stopwords)

}