var React = require('react');
var Inputvalues = require('../src/components/inputvalues');
var Budgetvalues = require('../src/components/budgetvalues');

class App extends React.Component{
  render(){
    return(
    <div>
      <Inputvalues />
    </div>
    
    );
  }
}

module.exports = App;