'use strict';

var React = require('react'),
    TestPage = require('./pages/test'),
    ExampleApp;

ExampleApp = React.createClass({
    render: function() {
        return (
        	/*jshint ignore:start */
            <div className="container">
            	<h2>Input Field Test Cases</h2>
                <TestPage />
            </div>
            /*jshint ignore:end */
        );
    }
});

React.render(
    /*jshint ignore:start */
    <ExampleApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);
