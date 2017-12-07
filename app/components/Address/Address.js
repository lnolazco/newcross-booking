import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, Input } from 'antd';

class Address extends PureComponent {
  onChange = (line) => {
    return (e) => {
      this.props.setAddress(line, e.target.value);
    };
  }

  render() {
    return (
      <Card>
        <Input placeholder="Address Line 1" onChange={this.onChange('line1')} />
        <Input placeholder="Address Line 2" onChange={this.onChange('line2')} />
        <Input placeholder="Address Line 3" onChange={this.onChange('line3')} />
      </Card>
    );
  }
}

Address.propTypes = {
  setAddress: PropTypes.func.isRequired,
};

export default Address;
