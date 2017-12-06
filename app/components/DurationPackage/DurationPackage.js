import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, DatePicker, Radio } from 'antd';

const RadioGroup = Radio.Group;

class DurationPackage extends PureComponent {
  state = {
    startDate: null,
    endDateSpecific: false,
    endDate: null,
  }

  onChangeStartDate = (value) => {
    this.setState({ startDate: value }, () => {
      this.props.onChange(this.state);
    });
  }

  onChangeEndDate = (value) => {
    this.setState({ endDate: value }, () => {
      this.props.onChange(this.state);
    });
  }

  onChangeEndDateRadio = (e) => {
    this.setState({
      endDateSpecific: e.target.value === 'specific',
    }, () => {
      this.props.onChange(this.state);
    });
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    const cardStyle = {
      height: '144px',
    };

    return (
      <Card style={cardStyle}>
        <Row>
          <Col span={12}>
            <h4>Start Date</h4>
            <DatePicker
              format="DD/MM/YYYY"
              placeholder="dd/mm/yyyy"
              onChange={this.onChangeStartDate}
            />
          </Col>
          <Col span={12}>
            <h4>End Date</h4>
            <RadioGroup onChange={this.onChangeEndDateRadio} >
              <Radio style={radioStyle} value="ongoing">Ongoing</Radio>
              <Radio style={radioStyle} value="specific">Specific</Radio>
            </RadioGroup>
            {
              this.state.endDateSpecific && (
                <DatePicker
                  format="DD/MM/YYYY"
                  placeholder="dd/mm/yyyy"
                  onChange={this.onChangeEndDate}
                />
              )
            }
          </Col>
        </Row>
      </Card>
    );
  }
}

DurationPackage.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default DurationPackage;
