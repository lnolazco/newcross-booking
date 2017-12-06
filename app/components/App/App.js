import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Tabs, Card, Row, Col, Input, Radio, Select, Divider, Icon } from 'antd';
import { getSkills, setClientSummary, setDurationPackage } from '../../actions/booking-actions';
import DurationPackage from '../DurationPackage';

const TabPane = Tabs.TabPane;
const { TextArea } = Input;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class AppContainer extends Component {
  state = {
    numberOfSkills: 1,
  }

  componentWillMount() {
    this.props.getSkills();
  }

  onChangeSummary = (e) => {
    this.props.setClientSummary(e.target.value);
  }

  addAdditionalSkill = () => {
    this.setState(prevState => ({ numberOfSkills: prevState.numberOfSkills + 1 }));
  }

  renderSkills() {
    const skills = [];
    for (let i = 0; i < this.state.numberOfSkills; i = i + 1) {
      skills.push(
        <Select
          key={performance.now}
          showSearch
          style={{ width: '100%' }}
          placeholder="Select Skill or Competency"
        >
          {
            this.props.skills.map(skill => <Option value={skill}>{skill}</Option>)
          }
        </Select>,
      );
    }
    return skills;
  }

  render() {
    console.log('props ', this.props);
    const cardStyle = {
      height: '144px',
    };

    return (
      <div className="app">
        <Tabs type="card">
          <TabPane key="1" tab={<span><Icon type="info-circle-o" />General Information</span>}>
            <div style={{ background: 'whitesmoke', padding: '30px' }}>
              <Row gutter={16}>
                <Col span={12}>
                  <h4>CLIENT SUMMARY</h4>
                  <Card style={cardStyle}>
                    <TextArea
                      rows={4}
                      onChange={this.onChangeSummary}
                      placeholder="Please add summary of the client and why they need care..."
                    />
                  </Card>
                </Col>
                <Col span={12}>
                  <h4>DURATION OF PACKAGE</h4>
                  <DurationPackage
                    onChange={this.props.setDurationPackage}
                  />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <h4>SKILLS & COMPOTENCES REQUIRED</h4>
                  <Card>
                    {this.renderSkills()}
                    <Divider />
                    <Button
                      onClick={this.addAdditionalSkill}
                    >Add Additional Skill</Button>
                  </Card>
                </Col>
                <Col span={12}>
                  <h4>STAFF GENDER PREFERENCES</h4>
                  <Card style={cardStyle}>
                    <RadioGroup onChange={this.onChange} >
                      <Radio value={1}>None</Radio>
                      <Radio value={2}>Male</Radio>
                      <Radio value={3}>Female</Radio>
                    </RadioGroup>
                  </Card>
                </Col>
              </Row>
              <Divider />
              <Button type="primary">NEXT</Button>
            </div>
          </TabPane>
          <TabPane key="2" tab={<span><Icon type="appstore-o" />Package Details</span>}>
            <h4>Tab 2</h4>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

AppContainer.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object),
  getSkills: PropTypes.func.isRequired,
  setClientSummary: PropTypes.func.isRequired,
  setDurationPackage: PropTypes.func.isRequired,
};

AppContainer.defaultProps = {
  skills: [],
};

function mapStateToProperties({ booking }) {
  return {
    skills: booking.skills,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSkills: () => dispatch(getSkills()),
    setClientSummary: value => dispatch(setClientSummary(value)),
    setDurationPackage: data => dispatch(setDurationPackage(data)),
  };
}

export default connect(mapStateToProperties, mapDispatchToProps)(AppContainer);
