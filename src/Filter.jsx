import React from "react";

let Filter =(props)=>{ 

    return(

        <div class="col-3">
        <ul class="list-group m-4">
            <li 
            onClick ={()=>{
                props.handlefilter("All Genre")
            }}
            
             class={`list-group-item ${props.SelectedFilter == "All Genre" ? "active" : ""}`}
            >All Genres</li>
            {
                props.moviegenre.map((el) =>{
                    return (<li 
                    onClick ={()=>{
                        props.handlefilter(el.name)
                    }}
                     key={el._id} 
                     class={`list-group-item ${props.SelectedFilter == el.name ? "active" : ""}`}
                     >
                         {el.name}</li>
                    );
                    
                })
            }
            
          </ul>
      </div>


    );
    
}

export default Filter;
