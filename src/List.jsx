var React = require('react');

var List = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      <ol>
        {this.props.items.map(function(item) { return <li>{item}</li>; })}
      </ol>
    );
  }
});

module.exports = List;
