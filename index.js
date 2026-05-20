let frm=document.getElementById("frm")
let i1=document.getElementById("i1").value
let i2=document.getElementById("i2").value
let btn=document.getElementById("btn")
let tbody=document.getElementById("tbody")
let data=[
    {name:"Seuli",age:21}
]
function readdata(){
    tbody.innerHTML=""

    data.map((e,i)=> {
    let tr=document.createElement("tr")
    tr.innerHTML=`
    <td>${i+1}</td>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td><button onclick="edittedata(${i})">Edit</button></td>
    <td><button onclick="deletedata(${i})">Delete</button></td>
    `
    tbody.append(tr)
    })

}
//it's a func
readdata()
//add fun
//step 3
let editIndex=null
frm.addEventListener("submit",(e)=>{
    //stop the auto refresh
    e.preventDefault()
let i1=document.getElementById("i1").value
let i2=document.getElementById("i2").value
let obj={name:i1,age:i2}
if(editIndex==null)//insert
{
    data.push(obj);
}
else{//update
    data[editIndex]=obj//obj[2]=obj
    editIndex=null
    document.getElementById("btn").innerHTML="save"
    document.getElementById("hd").innerHTML="CRUD OPERATION"

}
readdata()
frm.reset()
})
//Edit
//Step2
function edittedata(i){
    document.getElementById("i1").value = (data[i].name)
    document.getElementById("i2").value = (data[i].age)
    document.getElementById("btn").innerHTML="Update"
    document.getElementById("hd").innerHTML="Update Form"

    editIndex=i //serial number
}
function deletedata(i){
if (window.confirm("Are you sue?")){

data.splice(i,1)//index,how many elements you 
readdata()
frm,reset()

}



}
