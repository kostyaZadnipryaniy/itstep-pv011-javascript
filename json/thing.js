let personData = JSON.parse(PERSON_DATA)

for (let i = 0; i < personData.length; i++) {
    document.getElementById('tb').insertAdjacentHTML("beforeEnd", `<tr>
    <td>${personData[i].id}</td>
    <td>${personData[i].firstname}</td>
    <td>${personData[i].lastname}</td>
    <td>${new Date().getFullYear() - new Date(personData[i].birth_date.substring(0,10)).getFullYear()}</td>
    <td>${personData[i].country}</td>
    <td><input type="checkbox" name="all"></td>
    </tr>`)
}

const addNew = document.getElementById('add')
const delSome = document.getElementById('delete')

 addNew.addEventListener('click', () =>{
     document.getElementById('tb').insertAdjacentHTML("beforeEnd", `<tr>
     <td>${document.getElementById('id').value}</td>
     <td>${document.getElementById('firstname').value}</td>
     <td>${document.getElementById('lastname').value}</td>
     <td>${document.getElementById('birth_date').value}</td>
     <td>${document.getElementById('country').value}</td>
     <td><input type="checkbox" name="all"></td>
     </tr>`)
 })
 let trs = document.querySelectorAll('tr')
 delSome.addEventListener('click', e => {
     for (let i = 1; i < trs.length; i++) {
        if(trs[i].children[5].children[0].checked){
        console.log(trs[i].children[1].innerHTML)
        trs[i].remove()}
    }
    })
