import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, Input } from 'antd';

const { TextArea } = Input;

class Summary extends PureComponent {
  onChange = (e) => {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <Card>
        <TextArea
          rows={4}
          onChange={this.onChange}
          placeholder={this.props.placeholder}
        />
      </Card>
    );
  }
}

Summary.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Summary;
