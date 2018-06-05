var React = require('react');


class Budgetvalues extends React.Component{


  render(){
 
    

    return(
        <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in <span className="budget__title--month"> {Date().split(" ")[1] + " "} {this.props.income - this.props.expense}</span>:
        </div>
        <div className="budget__value"></div>
        <div className="budget__income clearfix">
          <div className="budget__income--text">Income </div>
          <div className="right">
            <div className="budget__income--value">+ {this.props.income}</div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>
        <div className="budget__expenses clearfix">
          <div className="budget__expenses--text">Expenses </div>
          <div className="right clearfix">
            <div className="budget__expenses--value">- {this.props.expense}</div>
            <div className="budget__expenses--percentage">{this.props.income > 0 ? Math.round(this.props.expense / this.props.income * 100) : -1}%</div>
          </div>
        </div>
      </div>
    </div>
     );
  }
}

module.exports = Budgetvalues;