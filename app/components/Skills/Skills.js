import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Divider, Select, List, Modal, Input } from 'antd';

import { getSkills, addSkill, removeSkill } from '../../actions/booking-actions';

const Option = Select.Option;

class Skills extends PureComponent {
  state = {
    showModal: false,
    additionalSkill: '',
  };

  componentWillMount() {
    this.props.getSkills();
  }

  onChange = (value) => {
    this.props.addSkill(value);
  }

  onChangeAdditionalSkill = (e) => {
    this.setState({ additionalSkill: e.target.value });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  addAdditionalSkill = () => {
    this.props.addSkill(this.state.additionalSkill);
    this.setState({ showModal: false, additionalSkill: '' });
  }

  removeSkill = (skill) => {
    return (e) => {
      e.preventDefault();
      this.props.removeSkill(skill);
    };
  }

  render() {
    const { skills, skillsSelected } = this.props;

    return (
      <Card>
        <Select
          key={performance.now}
          showSearch
          onChange={this.onChange}
          style={{ width: '100%' }}
          placeholder="Select Skill or Competency"
        >
          {
            skills.map(skill => (
              <Option key={performance.now} value={skill}>{skill}</Option>
            ))
          }
        </Select>
        <Divider />
        <a href="" onClick={this.openModal}>Add Additional Skill</a>
        <Modal
          title="Add Additional Skill"
          visible={this.state.showModal}
          onOk={this.addAdditionalSkill}
          onCancel={this.closeModal}
        >
          <Input placeholder="type a skill" onChange={this.onChangeAdditionalSkill} />
        </Modal>
        {
          skillsSelected.length > 0 && (
            <List
              dataSource={skillsSelected}
              renderItem={item => (
                <List.Item
                  actions={[<a href="" onClick={this.removeSkill(item)}>remove</a>]}
                >{item}</List.Item>
              )}
            />
          )
        }
      </Card>
    );
  }
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
  getSkills: PropTypes.func.isRequired,
  addSkill: PropTypes.func.isRequired,
  removeSkill: PropTypes.func.isRequired,
  skillsSelected: PropTypes.arrayOf(PropTypes.string),
};

Skills.defaultProps = {
  skills: [],
  skillsSelected: [],
};

function mapStateToProperties({ booking }) {
  return {
    skills: booking.skills,
    skillsSelected: booking.skillsSelected,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSkills: () => dispatch(getSkills()),
    addSkill: skill => dispatch(addSkill(skill)),
    removeSkill: skill => dispatch(removeSkill(skill)),
  };
}

export default connect(mapStateToProperties, mapDispatchToProps)(Skills);
