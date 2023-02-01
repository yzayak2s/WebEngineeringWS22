function addRow() {
    const table = document.querySelector('table')

    const row = table.insertRow(-1)

    row.insertCell(0).setAttribute('contenteditable', true);
    row.insertCell(1).setAttribute('contenteditable', true);

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

function topSort() {
    const tableData = getTableData();
    return topsort(tableData)

}

function display() {
    const topSortedArray = topSort();

    const ul = document.createElement('ul')

    let counter = 0;
    topSortedArray.map((value) => {
        const li = document.createElement('li')
        const liArrow = document.createElement('li')
        liArrow.innerHTML = `&#8594;`
        li.innerHTML = value
        ul.append(li)
        if (counter < topSortedArray.length - 1) {
            ul.append(liArrow)
        }
        counter++;
    })

    document.body.append(ul)
}

function clearTable() {
    const tBody = document.body.querySelector('tbody')
    if (tBody.rows.length === 1) {
        tBody.rows[0].cells[0].innerHTML = ''
        tBody.rows[0].cells[1].innerHTML = ''
    } else {
        for (let i = tBody.rows.length; i > 1; i--) {
            if (tBody.rows.length === i) {
                tBody.rows[0].cells[0].innerHTML = ''
                tBody.rows[0].cells[1].innerHTML = ''
            }
            tBody.deleteRow(i - 1)
        }
    }

    const ulAll = document.body.querySelectorAll('ul')
    ulAll.forEach((ul) => {
        ul.remove();
    })
}