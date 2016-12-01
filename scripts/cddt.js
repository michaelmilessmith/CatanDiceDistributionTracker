var Bar = React.createClass({
  render: function() {
  	var bar = Array(this.props.count + 1).join("-");
    return (<td>{bar}[{this.props.count}]</td> );
  }
});

var Number = React.createClass({
  handleClick: function() {
    this.props.onClick();
  },
  render: function() {
    return <td onClick={this.handleClick}>{this.props.number}</td>;
  }
});

var NumberBox = React.createClass({
	  handleClick: function() {
    this.props.onClick(this.props.object.number);
  },
  render: function() {
    return <tr>
      <Number  onClick={this.handleClick} number={this.props.object.number} />
      < Bar count={this.props.object.count}/>
    </tr>;
  }
});

var Chart = React.createClass({
        getInitialState: function() {
          return {
            numbers: this.props.numbers
          };
        },
        handlePlus: function(n) {
        numbers = this.state.numbers;
        numbers[n - 2].count++;
        this.setState({numbers: numbers});
},
  render: function() {
    return (
    	<table>
      <tbody>
      	{this.state.numbers.map( object => <NumberBox object={object} onClick={this.handlePlus}/> )}
        </tbody>
      </table>);
  }
});

var numbers = [
{ "number": 2, "count": 0 },
{ "number": 3, "count": 0 },
{ "number": 4, "count": 0 },
{ "number": 5, "count": 0 },
{ "number": 6, "count": 0 },
{ "number": 7, "count": 0 },
{ "number": 8, "count": 0 },
{ "number": 9, "count": 0 },
{ "number": 10, "count": 0 },
{ "number": 11, "count": 0 },
{ "number": 12, "count": 0 }
];
ReactDOM.render(
  <Chart numbers={numbers} />,
  document.getElementById('container')
);
