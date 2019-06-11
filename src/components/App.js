import React from 'react';
import Header from './Header';


class App extends React.Component {
  constructor(props){
    super(props);


this.state ={
   name: ""
};

this.handleChange = this.handleChange.bind(this);
}

handleChange(e){
  this.setState({
      name: e.target.value
  });
}
  render(){
      
     
      return(
      <div>
          <Header /> 
          <div className='container'/>
          <div className='widget'/>
         <div className='body'>
         <label className='output'> My name is {this.state.name}  </label> <br />
         <br/>
         <label className='input'>Add name: </label>
          <input type='text' value={this.state.name} onChange={this.handleChange}/>
     </div>
      </div>
     
  );
}
}

export default App;
