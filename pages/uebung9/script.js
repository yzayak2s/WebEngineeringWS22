/**
 * reference: https://www.highcharts.com/demo/bar-basic
 */
fetch('COVID-19-Faelle_7-Tage-Inzidenz_Deutschland.json')
    .then((value) => value.json())
    .then((data) => {

        Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: '7-Tage-Inzidenz der COVID-19-Fälle in Deutschland',
                align: 'left'
            },
            subtitle: {
                text: 'Source: <a ' +
                    'href="https://zenodo.org/record/7580603#.Y9bcDezMK3K"' +
                    'target="_blank">Zenodo.org</a>',
                align: 'left'
            },
            xAxis: {
                categories: ['Meldedatum', 'Altersgruppe', 'Bevoelkerung', 'Faelle_gesamt', 'Faelle_neu', 'Faelle_7', 'Inzidenz_7'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Year 1990',
                data: [631, 727, 3202, 721, 26]
            }, {
                name: 'Year 2000',
                data: [814, 841, 3714, 726, 31]
            }, {
                name: 'Year 2010',
                data: [1044, 944, 4170, 735, 40]
            }, {
                name: 'Year 2018',
                data: [1276, 1007, 4561, 746, 42]
            }]
        });
    })


// Reference: Live-Coding
const xml = fetch( '../../resource/Realisierte_Erzeugung_202211010000_202211112359.xml' )
    .then( response => response.text() )
    .then( str => new DOMParser().parseFromString( str, 'text/xml' ) )
    .then( xml =>
    {
        console.log( xml );
        const topic = xml.querySelector( 'kategorie_name' ).innerHTML;
        const von = xml.querySelector( 'von' ).innerHTML;
        const bis = xml.querySelector( 'bis' ).innerHTML;
        const stand = xml.querySelector( 'stand' ).innerHTML;
        const region = xml.querySelector( 'region' ).innerHTML;
        const bausteine = xml.querySelectorAll( 'baustein' );
        document.querySelector( 'h1' ).innerHTML = topic;
        document.querySelector( 'p' ).innerHTML = `${ topic } in ${ region } im Zeitraum von ${ von } bis ${ bis } - Stand: ${ stand }`;
        const main = document.querySelector( 'main' );
        const einheit = xml.querySelector( 'einheit' ).innerHTML;
        const data = [];
        bausteine.forEach( baustein => {
            const table = document.createElement( 'div' );
            const name = baustein.querySelector( 'baustein_name' ).innerHTML;
            const obj = {
                name: name,
                data: []
            };
            data.push( obj );
            table.innerHTML = `
          <h2>${ name }</h2>
          <table class="table table-striped table-hover table-sm">
            <thead>
              <tr>
                <th scope="col">Datum</td>
                <th scope="col">Uhrzeit</td>
                <th scope="col">Wert [${ einheit }]</td>
              </tr>
            </thead>
            <tbody class="table-group-divider">
            </tbody>
          </table>
        `;
            main.appendChild( table );
            const tbody = table.querySelector( 'tbody' );
            const werte = baustein.querySelectorAll( 'wert_detail' );
            werte.forEach( wert => {
                const datum = wert.querySelector( 'Datum' ).innerHTML;
                const uhrzeit = wert.querySelector( 'Uhrzeit' ).innerHTML;
                const kwh = wert.querySelector( 'wert' ).innerHTML;
                const row = document.createElement( 'tr' );
                const [ day, month, year ] = datum.split( '.' );
                const [ hour, min ] = uhrzeit.split( ':' );
                const date = new Date(
                    parseInt( year ),
                    parseInt( month ) - 1,
                    parseInt( day ),
                    parseInt( hour ),
                    parseInt( min ),
                    0
                );
                obj.data.push( [
                    date.getTime(),
                    parseInt( kwh.replace( '.', '' ) ) || 0
                ] );
                row.innerHTML = `
            <td>${ datum }</td>
            <td>${ uhrzeit }</td>
            <td>${ kwh }</td>
          `;
                tbody.appendChild( row );
            } );
        } );
        console.log( data );
        Highcharts.chart( 'diagram', {
            title: {
                text: ''
            },
            yAxis: {
                title: {
                    text: 'Wert [' + einheit + ']'
                }
            },
            xAxis: {
                type: 'datetime'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            series: data
        } );
    } );