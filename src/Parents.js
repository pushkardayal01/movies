import React from "react";
import Constr from "./Constr";
class Parents extends React.Component{
    state={
        on : false
    }
    render() {
        return(
            <div>
                <button onClick ={()=>{
                    
                    if(this.state.on){
                        this.setState({on : false});
                    }
                    else{
                        this.setState({on: true});
                    }

                }}>Click</button>

                {this.state.on ? <Constr/> : "" }
            </div>
        )
    }



}

export default Parents;