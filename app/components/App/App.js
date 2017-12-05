import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Tabs, Card, Row, Col, DatePicker, Input, Radio } from 'antd';
import { getAll, updateUser, addUser, deleteUser } from '../../actions/users';

const TabPane = Tabs.TabPane;
const { TextArea } = Input;
const RadioGroup = Radio.Group;

class AppContainer extends Component {
  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
      <div className="app">
        <Tabs type="card">
          <TabPane tab="Tab Title 1" key="1">
            <Row>
              <Col span={12}>
                <Card>
                  <p>Content of Tab Pane 1</p>
                  <TextArea rows={4} placeholder="Please add summary of the client and why they need care..." />
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <p>Content of Tab Pane 2</p>
                  <DatePicker onChange={this.onChange} />
                  <RadioGroup onChange={this.onChange} >
                    <Radio style={radioStyle} value={1}>Option A</Radio>
                    <Radio style={radioStyle} value={2}>Option B</Radio>
                  </RadioGroup>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Tab Title 2" key="2">
            <p>Content of Tab Pane 2</p>
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
