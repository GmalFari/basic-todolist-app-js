let mytask = document.querySelector('#taskInput');
let pushbtn = document.querySelector('#push');
let mytasks = []
pushbtn.addEventListener('click',function(e){
    if(mytask.value.length===0){
        e.preventDefault()
    }else{
        let mydiv = document.createElement("div");
        mydiv.classList= 'task';
        let myspan = document.createElement('span');
        myspan.id = 'taskname';
        let mybtn = document.createElement('button');
        mybtn.classList = 'delete';        
        let btntext = document.createTextNode('delete');
        mybtn.append(btntext);
        myspan.append(mytask.value);
        mydiv.appendChild(myspan);
        mydiv.appendChild(mybtn);
        mytasks.push(mydiv);
        
        mytask.value = '';
    }
    for(let i =0;i< mytasks.length;i++){
        document.querySelector('#tasks').appendChild(mytasks[i]);
        }

    let delete_btns = document.querySelectorAll('.delete');
    delete_btns.forEach(e=>{
        e.addEventListener('click',function(){
            e.parentElement.remove()
        })
    }
        )
   
})
  

// document.addEventListener('click',function(e){
//         if(e.target.className=='delete'){
//         let mytarget = document.querySelector('e.target.className');
//         console.log(mytarget)
//         }
// })

// function deleteParentElement(index){
//     let e = document.querySelector('')
// }
