import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as goalListActionCreators from '../../Store/GoalReducer/GoalReducer';
import Goal from './Goal/Goal';
import mock from './../../ApiMock/Mock';
import './goalList.css';

class GoalList extends Component {
    state = {
        goals: [],
    }

    componentDidMount = () => {
        const { goalListActions } = this.props;
        goalListActions.getGoalList();
    }

    goalDelete = (id) => {
        mock.deleteGoals(id).then((result) => {
            this.setState({ goals: result });
        });
    }

    render() {
        const goals = this.state.goals[0] ? this.state.goals : this.props.goalList;

        return (
            <div className="goal__list">
                <header>
                    <div>Title</div>
                    <div>Description</div>
                    <div>Actions</div>
                </header>
                {
                    goals.map((goal, index) => 
                        <Goal 
                            key={goal.id}
                            goal={goal}
                            id={goal.id}
                            goalDelete={this.goalDelete}
                        />
                    )
                }
                <Link to={`/goaladd`}>
                    <button className="goal__add btn-primary">
                        ADD GOAL
                    </button>
                </Link>
            </div>
        )
    }
}



GoalList.propTypes = {
    goalList: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    goalList: state.goal,
});

const mapDispatchToProps = (dispatch) => ({
    goalListActions: bindActionCreators(goalListActionCreators, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GoalList);