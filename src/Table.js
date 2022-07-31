import { render } from "@testing-library/react";
import React from "react";
import Pagination from "./Pagination";
import "./Table.css";

class Table extends React.Component{

    state={

      currentpage :1,
    };


    setpage=(value)=>{
      this.setState({currentpage: value});

    };
    

    
    render(){
      let listmovie=this.props.movie;
    let filter=this.props.SelectedFilter;

    let RequiredList= listmovie.filter((el)=>{
      if(filter==="All Genre"){
        return el;

      }
      else if(filter===el.genre.name){
        return el;

      }
      
    });

    RequiredList= RequiredList.filter((el)=>{
      let requiredtitle=el.title;
      requiredtitle=requiredtitle.toLowerCase();
      let require=this.props.search;
      require=require.toLowerCase();
      return requiredtitle.includes(require);
      console.log(this.props.search);
      
    });

    // this.props.setmovies(RequiredList);

    let numberofpages=Math.ceil(RequiredList.length/4);
    let sindex=(this.state.currentpage-1)*4;
    let eindex=Math.min((sindex+4),RequiredList.length);
    

    let finallist=RequiredList.slice(sindex,eindex);
    return(
        <div class="tble mt-3">
                <table class="table table-success table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                          
                          finallist.map((el) =>{
                             
                            return(
                                <tr key={el._id}>
                                    <th>{el.title}</th>
                                    <th>{el.genre.name}</th>
                                    <th>{el.numberInStock}</th>
                                    <th>{el.dailyRentalRate}</th>
                                    <th  onClick={(e)=>{

                                        this.props.toggleLike(el._id)
                                    }}>
                                          {
                                            el.liked ? 
                                            <span class="material-icons">
                                            thumb_up
                                            </span>  :
                                            <span class="material-icons">
                                            thumb_up_off_alt
                                            </span>
                                          }
                                    </th>
                                    <th>
                                        <button 
                                         onClick={() => {
                                          this.props.deletefilter(el._id);
                                        }}
                                        className="Delete-btn">Delete</button>
                                    </th>
                                </tr>
                            )

                          })

                      }
                    </tbody>
                  </table>
                  <Pagination
                  numberOfPages={numberofpages}
                  currentpage={this.state.currentpage}
                  setpage={this.setpage}
                  />
            </div>
    );
                    }
}

export default Table;