var React = require('react');
var PropTypes = require('prop-types');



class Expense extends React.Component{

constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
    
  handleClick() {
        this.props.Remove(this.props.id, this.props.value, this.props.number)
    }

  render(){
    return(
                        <div className="item clearfix" id="expense-1">
                            <div className="item__description">{this.props.text}</div>
                            <div className="right clearfix">
                                <div className="item__value">- {this.props.number}</div>
                                <div className="item__percentage">%</div>
                                <div className="item__delete">
                                    <button className="item__delete--btn"><i className="ion-ios-close-outline" onClick={this.handleClick}></i></button>
                                </div>
                            </div>
                        </div>

    );
  }
}

module.exports = Expense;