let Pagination = (props)=>{

  let arr=[];
  for(let i=1;i<=props.numberOfPages;i++){
    arr.push(i);
  }
    return(
        <>
        <div class="pagination">
                <nav aria-label="Page navigation example">
                    <ul class="pagination mt-2 ">
                      
                    
                      {
                        arr.map((el)=>{
                          return(
                            <li 
                            onClick={()=>{
                              props.setpage(el);
                              
                            }}
                            class={`page-item ${props.currentpage === el ? "active" : ""}`}><a class="page-link">{el}</a></li>
                          );
                        })
                      }
                      
                    </ul>
                  </nav>
            </div>
        </>
    );

}
export default Pagination;