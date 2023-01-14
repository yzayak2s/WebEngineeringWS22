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