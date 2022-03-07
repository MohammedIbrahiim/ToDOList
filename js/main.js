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
    if(list.lists!=""){
      listArray.push(list);
      localStorage.setItem('lists', JSON.stringify(listArray));
      displaylist(listArray)
      count()
      clearInput();
    }


}

function displaylist(displaytasks)
{
    let cartoona =``;
    for(let i=0 ; i<displaytasks.length ; i++)
    {
        cartoona += `
        <div id="exx${i}" class="row d-flex flex-nowrap  w-75 mx-auto gx-0 my-2">
        <div class="col-sm-1 one pe-sm-1  " onclick="itok(${i})">
        <div class="icon  d-flex align-items-center justify-content-center">
            <i class="far fa-check-circle check"></i>               
        </div>
    </div>
    <div id="cheack${i}"  two class="item col-sm-10 ">
        <div class="content mt-3 ms-3 ">
            <h1 class="fs-6">${displaytasks[i].lists}</h1>
        </div>
    </div>
    <div class="col-sm-1 ps-sm-1 three " id="deletebtn" onclick="deleteList(${i})">
        <div class="icon2  d-flex align-items-center justify-content-center">
          <i class="fa-solid fa-trash-can"  ></i>               
        </div>
    </div>
</div>        `
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
        taskLength.innerHTML = `0`;
    
    }else
    {
        taskLength.innerHTML = ` ${listArray.length}`
    }
}

function check(){
    if(taskComplete.innerHTML == null)
    {
        taskComplete.innerHTML =   `0`;
    
    }else 
    {
        taskComplete.innerHTML =  ` ${counter}`
    }
}

