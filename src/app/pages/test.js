'use strict';
var React       = require('react'),
    InputField  = require('../components/input-field'),
    Test;

var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/gi;

Test = React.createClass({

    getInitialState: function() {
        return {
            source: '',
            value: '',
            isValid: true
        };
    },
    _handleInputChange: function(source, value, isValid) {
        this.setState({
            source: source,
            value: value,
            isValid: isValid
        })
    },
    render: function() {
        /* jshint ignore:start */
        return (
            <div>
                <p>
                    Source is: <code>{this.state.source}</code><br/>
                    value is: <code>{this.state.value}</code><br/>
                    isInputValid: <code>{this.state.isValid.toString()}</code>
                </p>

                <h4>Type 1 showcase - regular input field</h4>
                <InputField type={1} name="Regular" label="[Regular]" onChange={this._handleInputChange} />
                <InputField type={1} name="RegularRequired" label="[RegularRequired]" onChange={this._handleInputChange} required={true} />
                <InputField type={1} name="NumberOnly" inputType="number" label="[NumberOnly]" onChange={this._handleInputChange} />
                <InputField type={1} name="Password" inputType="password" label="[Password]" onChange={this._handleInputChange} />
                <InputField type={1} name="Email" inputType="email" label="[Email]" onChange={this._handleInputChange} />
                <InputField type={1} name="CustomRegex" inputType="text" label="[CustomRegex] numbers only ex: /^\d+$/" validationRegex={/^\d+$/} onChange={this._handleInputChange} />

                <hr />
                <h4>Other Variation</h4>
                <InputField type={1} name="RegularLarge" label="[RegularLarge]" onChange={this._handleInputChange} inputSize="large" />
                <InputField type={1} name="RegularLarge" label="[RegularLarge]" onChange={this._handleInputChange} inputSize="small" />
                <InputField type={1} name="Range" label="[Range]" inputType="range" onChange={this._handleInputChange} min={0} max={100} />
                <InputField type={1} name="Placeholder" placeholder="placeholder (no label)" onChange={this._handleInputChange} />

                <hr />
                <h4>Type 2 showcase - input with icon</h4>
                <InputField type={2} name="IconInputUsingText" iconText="$" onChange={this._handleInputChange} />
                <InputField type={2} name="IconInputUsingClass" iconClassName="glyphicon glyphicon-search" onChange={this._handleInputChange} />

            </div>
        );
        /* jshint ignore:end */
    }

});

module.exports = Test;