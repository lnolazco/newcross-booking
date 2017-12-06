import React, { PureComponent } from 'react';
import { Card, Row, Col, DatePicker, Radio } from 'antd';

const RadioGroup = Radio.Group;

class DurationPackage extends PureComponent {
  onChangeStartDate = (value) => {
    this.setState({ startDate: value });
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
            <RadioGroup onChange={this.onChange} >
              <Radio style={radioStyle} value={1}>Ongoing</Radio>
              <Radio style={radioStyle} value={2}>Specific</Radio>
            </RadioGroup>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default DurationPackage;
