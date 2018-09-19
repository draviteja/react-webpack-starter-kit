var React = require('react');

var Hello = React.createClass({
    render: function () {
        return (
          <div style={{textAlign: 'center'}}>
            <h1>Hello World</h1>
          </div>
        );
    }
});

module.exports = Hello;
