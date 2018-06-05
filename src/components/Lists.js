var React = require('react');
var PropTypes = require('prop-types');
var Income = require('./income');
var Expense = require('./expense');




class Lists extends React.Component{



  render(){
let expenses = []
let incomes = []

this.props.data.map((element, index) => (
element.value == "inc" ? 
incomes.push(
<Income Remove={this.props.Remove} key={index} id={index} text={element.text} value={element.value} number={element.number}/>):
expenses.push(
<Expense key={index} Remove={this.props.Remove} id={index} value={element.value} text={element.text} number={element.number}/>))
	)


    return(
   <div className="container clearfix"> 
   		<div className="income">
                    <h2 className="icome__title">Income</h2>
                    <div className="income__list">
                    	{incomes}
                    </div>
        </div>
        <div className="expenses">
                    <h2 className="expenses__title">Expenses</h2>
                    <div className="expenses__list">
                    	{expenses}
                    </div>
        </div>
    </div>
    );
  }
}

module.exports = Lists;