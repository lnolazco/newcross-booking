import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Tabs, Card, Row, Col, DatePicker, Input, Radio, Select, Divider, Icon } from 'antd';
import { getAll, updateUser, addUser, deleteUser } from '../../actions/users';

const TabPane = Tabs.TabPane;
const { TextArea } = Input;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class AppContainer extends Component {
  state = {
    numberOfSkills: 1,
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
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>,
      );
    }
    return skills;
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
      <div className="app">
        <Tabs type="card">
          <TabPane key="1" tab={<span><Icon type="info-circle-o" />General Information</span>}>
            <div style={{ background: 'whitesmoke', padding: '30px' }}>
              <Row gutter={16}>
                <Col span={12}>
                  <h4>CLIENT SUMMARY</h4>
                  <Card style={cardStyle}>
                    <TextArea rows={4} placeholder="Please add summary of the client and why they need care..." />
                  </Card>
                </Col>
                <Col span={12}>
                  <h4>DURATION OF PACKAGE</h4>
                  <Card style={cardStyle}>
                    <Row>
                      <Col span={12}>
                        <h4>Start Date</h4>
                        <DatePicker
                          format="DD/MM/YYYY"
                          placeholder="dd/mm/yyyy"
                          onChange={this.onChange}
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
  users: PropTypes.arrayOf(PropTypes.object),
  getAll: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

AppContainer.defaultProps = {
  users: [],
};

function mapStateToProperties(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAll: () => dispatch(getAll()),
    update: user => dispatch(updateUser(user)),
    addUser: () => dispatch(addUser()),
    deleteUser: id => dispatch(deleteUser(id)),
  };
}

export default connect(mapStateToProperties, mapDispatchToProps)(AppContainer);
