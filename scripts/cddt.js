const Bar = React.createClass({
  render: function() {
  	// var bar = Array(this.props.count + 1).join("-");
    const classes = `bar bar-${Math.round((this.props.count * 100) / this.props.highest)}`
    return (<div className={classes}><span className="bar-label">{this.props.count}</span></div>);
  }
});

const Number = React.createClass({
  handleClick: function() {
    this.props.onClick();
  },
  render: function() {
    return <div onClick={this.handleClick}>{this.props.number}</div>;
  }
});

const NumberBox = React.createClass({
	  handleClick: function() {
    this.props.onClick(this.props.object.number);
  },
  render: function() {
    return <div>
      <Number  onClick={this.handleClick} number={this.props.object.number} />
      < Bar count={this.props.object.count} total={this.props.total} highest={this.props.highest} />
    </div>;
  }
});

const Chart = React.createClass({
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
    const totalCount = this.state.numbers.reduce((a, b) => a + b.count, 0);
    const highestCount = this.state.numbers.reduce((a, b) => a > b.count ? a : b.count, 0);
    console.log(totalCount);
    return (
      <div>
      	{this.state.numbers.map( object => <NumberBox object={object} onClick={this.handlePlus} total={totalCount} highest={highestCount}/> )}
        </div>);
  }
});

const numbers = [
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
