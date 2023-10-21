// const postnote=(value,t)=>{
//     let notes=document.getElementById('notes')
//     console.log("done");
//     notes.innerHTML+=`<div class="col-sm-3 mb-3 ">
//     <div class="card">
//       <div class="card-body">
//         <h5 class="card-title">Note ${t}</h5>
//         <p class="card-text">${value}</p>
//         <button type="submit" class="btn btn-primary delc" id="b${t}">Delete Node</button>
//       </div>
//     </div>
//   </div>`

// }
// let t=0;
// let sub=document.getElementById('bt')
// sub.addEventListener("click",
// ()=>{
//     if(txt.value.length>0)
//     {
//         t+=1
//     postnote(txt.value,t)
//     }
// })


// // let dl=document.getElementById('b1')
// // console.log(dl);
// let dl=document.getElementsByClassName('delc')[0]
// console.log(dl)
// dl.addEventListener("click",(e)=>{
//     e.target.id;
//     console.log(e)
// })




console.log("Welcome to Magic Notes")
shownotes();
let b=document.getElementById('bt')
b.addEventListener("click",function(e){
    let t=document.getElementById('txt');
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj =[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    if(t.value.length==0)
    alert("Type Something First")
    else{
    notesObj.push(t.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    t.value="";
    // console.log(notesObj);
    }

    shownotes();
})

function shownotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj =[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html=""
    notesObj.forEach(function (element,index) {
        html+=`<div class="col-sm-3 mb-3 notec ">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
                <p class="card-text">${element}</p>
                <button type="submit" onclick="deletenote(this.id)" class="btn btn-primary " id="${index}">Delete Node</button>
              </div>
            </div>
          </div>`
    });
    let noteselem=document.getElementById('notes');
    if(notesObj.length!=0)
    noteselem.innerHTML=html;
    else
    {
        noteselem.innerHTML=`Nothing to show here add Notes to view!!`;
    }
}

function deletenote(index)
{
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj =[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownotes();
}

let search=document.getElementById('stxt');
search.addEventListener("input",function(){
    let inpv=search.value;
    // console.log("input fired",inpv);
    let nc=document.getElementsByClassName('notec')
    Array.from(nc).forEach(function(element){
        let ctxt= element.getElementsByTagName("p")[0].innerText;
        if(ctxt.includes(inpv))
        {
            element.style.display="block";
        }
        else
        {
            element.style.display="none";
        }

    })
})