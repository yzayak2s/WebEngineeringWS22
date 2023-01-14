function addRow() {
    const table = document.querySelector('table')

    const row = table.insertRow(-1)

    row.setAttribute('contenteditable', true)

    row.insertCell(0);
    row.insertCell(1);

    document.createElement('td')
}

function removeRow() {
    const table = document.querySelector('table')

    if (table.tBodies[0].rows.length > 1) {
        table.deleteRow(-1)
    }
}

function getTableData() {
    const table = document.querySelector('table')

    const myArray = [];

    // Anzahl der 'tr' im 'tbody'
    let rowLength = table.tBodies.item(0).rows.length
    for (let i = 0; i < rowLength; i++) {

        let currentCells = table.tBodies.item(0).rows.item(i).cells;

        // Anzahl der 'td' im 'tr'
        let cellLength = currentCells.length

        let myTempArray = [];

        for (let j = 0; j < cellLength; j++) {
            myTempArray.push(currentCells.item(j).innerHTML);
        }
        myArray.push(myTempArray)

    }
    return myArray;
}