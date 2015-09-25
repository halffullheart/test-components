var React = require('react');

var Button = React.createClass({
  propTypes: {
    style: React.PropTypes.oneOf(['default', 'important'])
  },
  getDefaultProps: function() {
    return {
      style: 'default'
    };
  },
  render: function() {
    var style = {
      backgroundColor:  '#ddd',
      border:           '1px solid #ccc',
      padding:          '5px 15px',
      fontFamily:       '"Helvetica Neue", Arial, Helvetica, sans-serif'
    };
    if (this.props.style === 'important') {
      style.fontFamily      = 'Impact, sans-serif';
      style.fontSize        = '18px';
      style.backgroundColor = '#f22';
      style.borderColor     = '#600';
    }
    return (
      <button style={style}>
        {this.props.children}
      </button>
    );
  }
});

module.exports = Button;
