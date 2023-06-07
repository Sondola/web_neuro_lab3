const table = document.createElement("table");
let rowNumber = 0;

function createTable() {
    if (document.getElementById('table') != null){
        alert("Table has already been created!");
    }
    else {
        table.innerHTML = "<table>\n" +
        "<tr>\n" +
        "<th>" + "id"+ "</th>\n" +
        "<th>" + "random text" + "</th>\n" +
        "</tr>\n"
        "</table>";

        table.setAttribute('id','table')
        document.body.append(table);
        rowNumber++;
    }
}

function addRow(){
    let tab = table.insertRow();
    tab.insertCell().append(rowNumber);
    tab.insertCell().append("Lorem Ipsum");
    rowNumber++;
}

function deleteRow(){
    if (document.getElementById('num').value=="") {
        alert("Enter number first");
        return null;
    }
    num = document.getElementById('num').value;
    try {
        table.deleteRow(num);
    }
    catch (DOMexcepion){
        alert("No row with this number")
    }

}