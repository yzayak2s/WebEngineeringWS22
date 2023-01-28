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
 *
 *  Der einfachste Ansatz ist 'importmap' zu nutzen!
 */

import stopwords from "stopwords" assert {type: "json"};

const STOPWORDS = stopwords

function textAnalyze() {
    fetch('https://kaul.inf.h-brs.de/ccm/we/ws22/resources/assets/Plagiatsresolution.html')
        .then((response) => response.text())
        .then((responseWithHTML) => removeHTML(responseWithHTML))
        .then((responseWithoutHTML) => {
            let wordCounts = {};

            // remove all line breaks, commas, dots, hyphens, braces and filtered white spaces out
            // Reference for regEx: https://regex101.com/
            const words = responseWithoutHTML.toLowerCase().replaceAll(/["().,-]|\n/gm, '').split(' ').filter((value) => value !== '')

            // Reference: https://stackoverflow.com/questions/34901593/how-to-filter-an-array-from-all-elements-of-another-array/41169035#41169035
            const filteredWords = words.filter((word) => !STOPWORDS.includes(word))

            // Count most common words in string
            // Reference: https://stackoverflow.com/questions/6565333/using-javascript-to-find-most-common-words-in-string/6565353#6565353
            for (let i = 0; i < filteredWords.length; i++) {
                wordCounts[filteredWords[i]] = (wordCounts[filteredWords[i]] || 0) + 1;
            }

            // Descended sorting
            // Reference: https://stackoverflow.com/questions/3524827/sort-a-2d-array-by-the-second-value/3524832#3524832
            const sortedWords = Object.entries(wordCounts).sort((a, b) => {
                return b[1] - a[1];
            })

            // Get 3 first elements in an array
            // Reference: https://stackoverflow.com/questions/34883068/how-to-get-first-n-number-of-elements-from-an-array/34883171#34883171
            console.log(sortedWords.slice(0, 3))
            return sortedWords.slice(0, 3)

            // Alternative solution for counting frequency in a string
            // Reference: https://stackoverflow.com/questions/18619785/counting-frequency-of-characters-in-a-string-using-javascript/42636979#42636979
            /*filteredWords.reduce((total, word) => {
                total[word] ? total[word]++ : total[word] = 1;
                return total;
            }, {})*/

        });
}

window.textAnalyze = textAnalyze

/**
 * @author
 * Reference: https://stackoverflow.com/questions/822452/strip-html-from-text-javascript/47140708#47140708
 * @param html
 * @return {string|string}
 */
function removeHTML(html) {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";

}
