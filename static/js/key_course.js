function add() {
    let desc = document.getElementById('desc')
    let table = document.getElementById('table');
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0)
    cell1.setAttribute("contenteditable", "true")
    let cell2 = row.insertCell(1)
    cell1.innerHTML = desc.value
    let button2 = document.createElement('button')
    button2.innerText = 'Delete'
    button2.setAttribute("class", "btn btn-danger")
    button2.setAttribute("onclick", "deleteRow(this)")
    cell2.appendChild(button2)
    desc.value = null
}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}
function save()
{
    let table=document.getElementById("table")
    let trs=table.getElementsByTagName('tr')
    let data=[]
    for(let i=1;i<trs.length;i++)
    {
        let tds=trs[i].getElementsByTagName('td')
        row=[]
        for(let j=0; j<tds.length-1;j++)
        {
            row.push(tds[j].innerText)
            // console.log(tds[j].innerText)
        }
        data.push(row)
    }
    localStorage.setItem('key_course',JSON.stringify(data))
}