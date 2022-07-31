import React from "react";

class Constr extends React.Component{

    constructor(props){

        super(props)
        
        console.log("Constructor is called");


        this.state={
            temp : false,
        }

    }

    componentDidMount(){
        console.log("Component mounted");
        
    }

    componentDidUpdate(){
        console.log("Component updated");
    }

    componentWillUnmount(){
        console.log("Component unmonted,terminate.........");
    }

    

    render() {
        console.log("Render function is running");
        return(
            <div>
                <button
                onClick = {()=>{
                    
                    if(this.state.temp){
                        this.setState({temp:false})

                    }
                    else{
                        this.setState({temp:true})
                    }
                }}



                >
                    Render

                </button>
            </div>
        )
    }
}
export default Constr;



 