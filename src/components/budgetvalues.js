var React = require('react');


class Budgetvalues extends React.Component{

   

  render(){
    
    this.props.obj.budget = this.props.obj.income - this.props.obj.expense
    if (this.props.obj.income > 0){
    this.props.obj.percent = (this.props.obj.expense / this.props.obj.income) * 100} 
    else {this.props.obj.percent = -1}

    return(
        <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in <span className="budget__title--month">Month {this.props.obj.budget}</span>:
        </div>
        <div className="budget__value"></div>
        <div className="budget__income clearfix">
          <div className="budget__income--text">Income </div>
          <div className="right">
            <div className="budget__income--value">+ {this.props.obj.income}</div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>
        <div className="budget__expenses clearfix">
          <div className="budget__expenses--text">Expenses </div>
          <div className="right clearfix">
            <div className="budget__expenses--value">- {this.props.obj.expense}</div>
            <div className="budget__expenses--percentage">{Math.round(this.props.obj.percent)}%</div>
          </div>
        </div>
      </div>
    </div>
     );
  }
}

module.exports = Budgetvalues;