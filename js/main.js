let inputtxt     = document.querySelector('.input');
let plusAdd      = document.getElementById('button');
let unorderList  = document.getElementById('test');
let taskLength   = document.getElementById('taskLength');
let taskComplete = document.getElementById('taskComplete');
let listArray ;


// for refresh if any one do refresh any thing in local storage will be display
if(localStorage.getItem('lists')==null){
    listArray = []
}else{
    listArray = JSON.parse(localStorage.getItem('lists'))
    displaylist(listArray);
    count()

}

function addList()
{
    let list =
    {
        lists : inputtxt.value,
    }
    listArray.push(list);
    localStorage.setItem('lists', JSON.stringify(listArray));
    displaylist(listArray)
    count()
    clearInput();

}

function displaylist(displaytasks)
{
    let cartoona =``;
    for(let i=0 ; i<displaytasks.length ; i++)
    {
        cartoona += `
        <li id="cheack${i}" class="text-start p-3 mt-3 position-relative  ">${displaytasks[i].lists} <button onclick="itok(${i})" class=" position-absolute  btn btn-primary  didIt"> <i class="fa-solid fa-check "></i></button> <button id="deletebtn" onclick="deleteList(${i})"  class="position-absolute  btn2 btn btn-danger "> delete</button></li>
        `
    }
    unorderList.innerHTML = cartoona;
}


// declare it here after it will add 

function deleteList(linkIndexed)
{
    listArray.splice(linkIndexed,1)
    localStorage.setItem('lists', JSON.stringify(listArray));
    displaylist(listArray);
    count()
}

function searchtask(searchTasks)
{
    let searchtaskss = [];
    for(let i = 0 ; i<listArray.length ; i++)
    {
        if(listArray[i].lists.toLowerCase().includes(searchTasks.toLowerCase())==true)
        {
            searchtaskss.push(listArray[i])
        }
    }

    //pass an array 
    displaylist(searchtaskss)
}

function clearInput()
{
    inputtxt.value='' 
}

plusAdd.addEventListener('click',function(){
    addList();
})



let counter = 0;
function itok(index){

    $(`#cheack${index}`).toggleClass('line-decoration');
    if( $(`#cheack${index}`).hasClass('line-decoration')){
        counter+=1
    }else
    {
        counter-=1
    }
    check()
}

function count()
{
    if(taskLength.innerHTML == null)
    {
        taskLength.innerHTML = `Tasks : ` +  `0`;
    
    }else
    {
        taskLength.innerHTML = `Tasks : ` + ` ${listArray.length}`
    }
}

function check(){
    if(taskComplete.innerHTML == null)
    {
        taskComplete.innerHTML = `Completed: ` +  `0`;
    
    }else 
    {
        taskComplete.innerHTML = `Completed: ` + ` ${counter}`
    }
}

