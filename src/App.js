import './App.css';
import { Component } from 'react';
import FeedbackComponent from "./components/FeedbackComponent"

class App extends Component{ 
  state={
    hidden : true,
    feedbacks : [],
    name : "",
    departement : "CSE",
    rating : 0
  }
  changeName=(e)=>{
    const value=e.target.value;
    this.setState({name : value});
  }
  changeDepartement=(e)=>{
    const value=e.target.value;
    this.setState({departement : value});
  }
  changeRating=(e)=>{
    const value=e.target.value;
    this.setState({rating : value});
  }
  addState=()=>{
    if(this.state.name!==""){
      const feedback={
        name : this.state.name,
        departement : this.state.departement,
        rating : this.state.rating
      }
      const feedbacks=[...this.state.feedbacks,feedback];
      this.setState({feedbacks, hidden:false, name : "", rating : 0});
      
    }
    console.log(this.state.feedbacks);   
  }

  removeState=(index)=>{
    const feedbacks=[...this.state.feedbacks];
    feedbacks.splice(index,1);
    this.setState({feedbacks});
  }

  handelBack=()=>{
    this.setState({hidden : true});
  }

  render(){
    const styleVis={ display : "block" };
    const styleHide={ display : "none"};
    return (
      <div className="App">
                <div style={this.state.hidden ? styleVis : styleHide}>
                  <h1>Employee FeedBack Form</h1>
                  <div id="formDiv">
                        <label>NAME :
                          <input type="text" value={this.state.name} onChange={this.changeName}></input>
                        </label>
                        <label>DEPARTEMENT :
                          <input type="text" value={this.state.departement} onChange={this.changeDepartement}></input>
                        </label>
                        <label>RATINGS :
                          <input type="number" value={this.state.rating} onChange={this.changeRating}></input>
                        </label>
                        <button onClick={this.addState}>SUBMIT</button>
                  </div>
                </div>
                <hr></hr>
                <div id="newPage" style={this.state.hidden ? styleHide : styleVis}>
                  <div id="feedbacksResultDiv" >
                    {this.state.feedbacks.map((value,index)=>{
                      return <FeedbackComponent name={value.name} departement={value.departement} rating={value.rating} delete={()=>{this.removeState(index)}}/>
                    })}
                    
                  </div>
                  <center><button onClick={this.handelBack}>Back</button></center>
                </div>
  
        </div>
    );
  }
}


export default App;
