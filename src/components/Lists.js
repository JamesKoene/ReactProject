var React = require('react');
var PropTypes = require('prop-types');
var Income = require('./income');
var Expense = require('./expense');




class Lists extends React.Component{


  render(){

    return(
   <div className="container clearfix"> 
   		<div className="income">
                    <h2 className="icome__title">Income</h2>
                    <div className="income__list">
                    	{this.props.data.map((element, index) => (
    element.value == "inc" && <Income key={index} text={element.text} number={element.number}/>))}
                    </div>
        </div>
        <div className="expenses">
                    <h2 className="expenses__title">Expenses</h2>
                    <div className="expenses__list">
                    	{this.props.data.map((element, index) => (
    element.value == "exp" && <Expense key={index} text={element.text} number={element.number}/>))
                    	}
                    </div>
        </div>
    </div>
    );
  }
}

module.exports = Lists;