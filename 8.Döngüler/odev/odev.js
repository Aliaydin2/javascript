

const newElement=()=>{
    let taskDOM = document.querySelector("#task")
    let YAPILACAK = taskDOM.value
    
    let ifARRAY=YAPILACAK.split("")
    let KOSUL = ifARRAY.every(item=>item===" ") // console.log(KOSUL)  //hepsi bosken true
        

        if ( KOSUL ) {
            
       alert("boş olmaz")
        }
        else{
            let list_DOM = document.querySelector("#list")
            let liDOM =document.createElement("li")
            liDOM.innerHTML=YAPILACAK
            list_DOM.appendChild(liDOM)
            taskDOM.value=""
            alert("eklendi")
            }
        }
    



