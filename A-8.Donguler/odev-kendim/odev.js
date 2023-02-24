

        let list_DOM = document.querySelector("#list")
        list_DOM=""         //----------------
        let todo_DOM=localStorage.getItem("TODO")
        console.log(todo_DOM)
        if(todo_DOM){list_DOM.innerHTML=todo_DOM} else {list_DOM=""}         //----------------
        
        
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
                "d-flex",
                "justify-content-between",
                 )
            liDOM.innerHTML=`${YAPILACAK} <button onclick="remove(this)" >x</button>`
            list_DOM.appendChild(liDOM)

           
            taskDOM.value=""
            $(".toast.success").toast("show")   //eklendi.

            localStorage.setItem("TODO",list_DOM.innerHTML) //----------------
           
          }}
        
          


    const remove=(x)=>{x.parentElement.remove();
        $(".toast.warning").toast("show")       //Oge silindi.

        let list_DOM = document.querySelector("#list")      //----------------
        localStorage.setItem("TODO",list_DOM.innerHTML)     //----------------
                        }

    
                       


  
