var React = require('react');
var PropTypes = require('prop-types');

class Income extends React.Component{

   
   

    handleClick () {

    }


  render(){
    return(
                        <div className="item clearfix" id="income-1">
                            <div className="item__description">{this.props.text}</div>
                            <div className="right clearfix">
                                <div className="item__value">+ {this.props.number}</div>
                                <div className="item__delete">
                                    <button className="item__delete--btn"><i className="ion-ios-close-outline" onClick={this.handleClick}></i></button>
                                </div>
                            </div>
                        </div> 
    );
  }
}

module.exports = Income;