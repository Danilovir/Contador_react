import React, { Component } from 'react' 


export default class Conversor extends Component{
    render(){
        return(
            <div className="conversor">

           <h2>Nota 1</h2>
           <input type="text"></input>
          <h2>Nota 2</h2>
          <input type="text"></input>

         

          <h2>A Média é:</h2>
         
          <input type="button" value="Media"></input>

            </div>
        )
    }
}