import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";
import Login from "./Login";
import Customer from "./Customer";
import Rental from "./Rental";
import Home from "./Home";
class App extends React.Component{

  state={
    movies:[],
    genre:[],
    SelectedFilter : "All Genre",
    totalmovie :0,
    search: "",
  }

  // settotalmovie=(no)=>{
  //   this.setState({totalmovie : no.length});

  // }

  updatevalue=(e)=>{
    let value=e.currentTarget.value;
    let curr=value;
    this.setState({search : curr});
    console.log(this.state.search);

  }

  SetFilter = (filter) =>{
    this.setState({SelectedFilter : filter});

  }
  toggleLike =(id)=>{
    let index= this.state.movies.findIndex((el)=>{
      return el._id===id
    });

    let required=this.state.movies.map((el)=>{
      return el;
    })
    if(required[index].liked){
      required[index].liked=false;

    }
    else{
      required[index].liked=true;
    }

    this.setState({movie:required});

  };

  deletefilter=(id)=>{
    let deletedfilter=this.state.movies.filter((el)=>{
      return el._id!==id;
    });

    this.setState({movies:deletedfilter});
  };
 

  componentDidMount(){

    let f = async() =>{
      let movieresult= await fetch("/movies");
      let genreresult= await fetch("/genre");
      console.log(movieresult);
      console.log(genreresult);
      let moviejson= await movieresult.json();
      console.log(moviejson);
      let genrejson= await genreresult.json();
      console.log(genrejson);


      this.setState({
        movies:moviejson,
        genre:genrejson,
        totalmovie:moviejson.length,
        
      })
      
      
    };

    f();

    

  }

  render(){
    return(
      <Router>


        <div>
        <Navbar/>

        
        <Switch>
          
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/rental">
            <Rental/>
          </Route>
          <Route path="/customer">
            <Customer/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
          <div className="row">

            <Filter 
            moviegenre = {this.state.genre} 
            SelectedFilter ={this.state.SelectedFilter}
            handlefilter ={this.SetFilter}


            />

            <div class="col-9 p-4">
              <Search
              totalmovie={this.state.totalmovie}
              updatevalue={this.updatevalue}
              />
              <Table 
              movie={this.state.movies}
              SelectedFilter ={this.state.SelectedFilter}
              toggleLike={this.toggleLike}
              deletefilter= {this.deletefilter}
              totalmovie={this.state.totalmovie}
              search={this.state.search}
              />
            </div>
            </div>
          </Route>
        </Switch>

        
      </div>


      </Router>
      
    )
  }
}
export default App;
