import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Tabs, Card, Row, Col, Radio, Divider, Icon } from 'antd';
import {
  getSkills,
  setClientSummary,
  setDurationPackage,
  setAddress,
  createPackage,
  setGender,
  setAccessInstructions,
  setUniformDetails,
} from '../../actions/booking-actions';
import DurationPackage from '../DurationPackage';
import Skills from '../Skills';
import Address from '../Address';
import Summary from '../Summary';

const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;

class AppContainer extends Component {
  state = {
    activeKey: '1',
  };

  onChangeTab = (activeKey) => {
    this.setState({ activeKey });
  }

  onChangeGender = (e) => {
    this.props.setGender(e.target.value);
  }

  onChangeUniform = (e) => {
    this.props.setUniformDetails(e.target.value);
  }

  next = () => {
    this.setState({ activeKey: '2' });
  }

  createPackage = () => {
    this.props.createPackage();
  }

  render() {
    const cardStyle = {
      height: '144px',
    };

    return (
      <div className="app">
        <Tabs
          type="card"
          onChange={this.onChangeTab}
          activeKey={this.state.activeKey}
        >
          <TabPane key="1" tab={<span><Icon type="info-circle-o" />General Information</span>}>
            <div style={{ background: 'whitesmoke', padding: '30px' }}>
              <Row gutter={16}>
                <Col span={12}>
                  <h4>CLIENT SUMMARY</h4>
                  <Summary
                    onChange={this.props.setClientSummary}
                    placeholder="Please add summary of the client and why they need care..."
                  />
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
                  <Skills />
                </Col>
                <Col span={12}>
                  <h4>STAFF GENDER PREFERENCES</h4>
                  <Card style={cardStyle}>
                    <RadioGroup onChange={this.onChangeGender} defaultValue="">
                      <Radio value="">None</Radio>
                      <Radio value="M">Male</Radio>
                      <Radio value="F">Female</Radio>
                    </RadioGroup>
                  </Card>
                </Col>
              </Row>
              <Divider />
              <Button
                type="primary"
                onClick={this.next}
                disabled={this.props.skillsSelected.length === 0}
              >NEXT</Button>
            </div>
          </TabPane>
          <TabPane
            key="2"
            tab={<span><Icon type="appstore-o" />Package Details</span>}
            disabled={this.props.skillsSelected.length === 0}
          >
            <div style={{ background: 'whitesmoke', padding: '30px' }}>
              <Row gutter={16}>
                <Col span={12}>
                  <h4>ADDRESS</h4>
                  <Address setAddress={this.props.setAddress} />
                </Col>
                <Col span={12}>
                  <h4>ACCESS INSTRUCTIONS</h4>
                  <Summary
                    placeholder="Please add access instructions..."
                    onChange={this.props.setAccessInstructions}
                  />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <h4>UNIFORM DETAILS</h4>
                  <Card>
                    <RadioGroup onChange={this.onChangeUniform}>
                      <Radio value="Y">Yes</Radio>
                      <Radio value="N">No</Radio>
                    </RadioGroup>
                  </Card>
                </Col>
              </Row>
              <Divider />
              <Button
                type="primary"
                onClick={this.createPackage}
              >CREATE PACKAGE</Button>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

AppContainer.propTypes = {
  skillsSelected: PropTypes.arrayOf(PropTypes.string),
  setClientSummary: PropTypes.func.isRequired,
  setDurationPackage: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
  createPackage: PropTypes.func.isRequired,
  setGender: PropTypes.func.isRequired,
  setAccessInstructions: PropTypes.func.isRequired,
  setUniformDetails: PropTypes.func.isRequired,
};

AppContainer.defaultProps = {
  skillsSelected: [],
};

function mapStateToProperties({ booking }) {
  return {
    skillsSelected: booking.skillsSelected,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSkills: () => dispatch(getSkills()),
    setClientSummary: value => dispatch(setClientSummary(value)),
    setDurationPackage: data => dispatch(setDurationPackage(data)),
    setAddress: (line, value) => dispatch(setAddress(line, value)),
    createPackage: () => dispatch(createPackage()),
    setGender: gender => dispatch(setGender(gender)),
    setAccessInstructions: value => dispatch(setAccessInstructions(value)),
    setUniformDetails: value => dispatch(setUniformDetails(value)),
  };
}

export default connect(mapStateToProperties, mapDispatchToProps)(AppContainer);
