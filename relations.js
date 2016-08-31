var Talker = React.createClass({
	getInitialState: function () {
  	return {
    	message:'Hello'
    }
  },

  inPortuguesePlease: function () {
  	this.setState(
    	{message: 'Olá'}
    )
  },
	render: function () {
  	return (
    	<div>
      	<Messager message={this.state.message}/>
        <button onClick={this.inPortuguesePlease}> Change Props Of Messager - Only the Father can change the entry of a Son </button>
      </div>
    )
  }
});

var Messager = React.createClass({
	getInitialState: function () {
  	return {
    	logs:'',
      anyState:''
    }
  },
  componentWillReceiveProps: function (nextProps) {
    console.log('props updated')
  },

  componentDidUpdate: function (prevProps, prevState) {
  	 console.log('update')
  },
  componentDidMount: function () {
  	 console.log('mounted')
  },
  someRandomEvent: function (){
  	this.setState({anyState: 'whatever'})
  },

  changeMyProp: function () {
    this.props.message = 'a'
  },

	render: function () {
  	console.log('render');
  	return (
    	<div>
        <div> {this.props.message} </div>
        <div> {this.state.logs} </div>
        <button onClick={this.someRandomEvent}> Change State </button>
         <button onClick={this.changeMyProp}> Change My Prop Should Get Error </button>
      </div>
    )
  }
});

ReactDOM.render(
  <Talker />,
  document.getElementById('container')
);
