

const newElement=()=>{
    let taskDOM = document.querySelector("#task")
    let YAPILACAK = taskDOM.value
    
    let ifARRAY=YAPILACAK.split("")
    let KOSUL = ifARRAY.every(item=>item===" ") // console.log(KOSUL)  //hepsi bosken true
        

        if ( KOSUL ) {
            
            $(".toast.error").toast("show")   //boş ekleme yapılamaz
        }
        else{
            let list_DOM = document.querySelector("#list")
            let liDOM =document.createElement("li")
            liDOM.classList.add(
                "list-group-item",
                "list-group-item-info",
                 )
            liDOM.innerHTML=`${YAPILACAK} <button onclick="remove()" >x</button>`
            list_DOM.appendChild(liDOM)

            taskDOM.value=""
            $(".toast.success").toast("show")   //eklendi
          }}
        

const remove=()=>{
    let list_DOM = document.querySelector("#list")
    list_DOM.target.removeChild()
            }
    



