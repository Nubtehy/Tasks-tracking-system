import React, { Component } from 'react'
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

  const FLAVOURS = [
    { label: 'Chocolate', value: '1' },
    { label: 'Vanilla', value: '2' },
    { label: 'Strawberry', value: '3' },
    { label: 'Caramel', value: '4' },
    { label: 'Cookies and Cream', value: '5' },
    { label: 'Peppermint', value: '6' },
  ];

  const WHY_WOULD_YOU = [
    { label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true },
  ].concat(FLAVOURS.slice(1));

class MultiSelectField extends Component {
    state = {
      removeSelected: true,
      disabled: false,
      crazy: false,
      stayOpen: false,
      value: [],
      rtl: false,
    }

    handleSelectChange = (value) =>  {
      this.setState({ value });
      this.props.addTeam(value)
    }

    render () {
      const { crazy, disabled, stayOpen, value } = this.state;
      const options = crazy ? WHY_WOULD_YOU : FLAVOURS;
      return (
        <div className="section">
          <h3 className="section-heading">{this.props.label}</h3>
          <Select
            closeOnSelect={!stayOpen}
            disabled={disabled}
            multi
            onChange={this.handleSelectChange}
            options={options}
            placeholder="Select team"
            removeSelected={this.state.removeSelected}
            rtl={this.state.rtl}
            simpleValue
            value={value}
          />
        </div>
      );
    }
}
export default MultiSelectField