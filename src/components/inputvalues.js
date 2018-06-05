var React = require('react');
var PropTypes = require('prop-types');
var Budgetvalues = require('./budgetvalues');
var Lists = require('./Lists');

class Inputvalues extends React.Component{

constructor(props) {
    super(props);
    this.state = {text: '', number: 0, value: 'inc',income: 0, expense: 0, arr: []};

    this.handleText = this.handleText.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    
    
  }

  handleText(event) {this.setState({text: event.target.value});}

  handleNumber(event) { this.setState({number: event.target.value});}

  handleValue(event) { this.setState({value: event.target.value});}

createObj () {
	var obj = {number: parseFloat(this.state.number),value: this.state.value, text: this.state.text, income: this.state.income, expense: this.state.expense}
	this.setState({arr: this.state.arr.concat([obj])})
}



handleSubmit() {

  	if (this.state.value == 'inc') 
  		    {this.setState({income: parseFloat(this.state.number) + parseFloat(this.state.income)}, () => {this.createObj()});}
       else {this.setState({expense: parseFloat(this.state.number) + parseFloat(this.state.expense)}, () => {this.createObj()});}


    }

handleRemove (index, value, number) {

    if (value == 'inc')
	        {this.setState({income: parseFloat(this.state.income) - parseFloat(number)})}
       else {this.setState({expense: parseFloat(this.state.expense) - parseFloat(number)})}
var NewArray = this.state.arr.filter((ele,indx) => indx != index);   	
this.setState({arr: NewArray})
}


  
  render(){
  	
    return(
    <div>
      <Budgetvalues 
      income={this.state.income} 
      expense={this.state.expense} 
      />   
      <div className="bottom">
      	<div className="add">
                <div className="add__container">
                    <select className="add__type" value={this.state.value} onChange={this.handleValue}>
                        <option value="inc">+</option>
                        <option value="exp">-</option>
                    </select>
                    <input type="text" className="add__description" placeholder="Add description" value={this.state.text} onChange={this.handleText}/>
                    <input type="number" className="add__value" placeholder="Value" value={this.state.number} onChange={this.handleNumber}/>
                    <button className="add__btn"><i className="ion-ios-checkmark-outline" onClick={this.handleSubmit}></i></button>
                </div>
            </div>
        </div>  
        <Lists 
        data={this.state.arr}
        Remove={this.handleRemove}
        />    	
      </div>
    


    );
  }
}



module.exports = Inputvalues;