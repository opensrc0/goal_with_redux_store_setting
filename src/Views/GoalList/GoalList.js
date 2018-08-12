import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Goal from './Goal/Goal';
import mock from './../../ApiMock/Mock';
import './goalList.css';

class GoalList extends Component {
    state = {
        goals: [],
    }

    componentDidMount = () => {
        mock.getGoals().then((goals) => {
          this.setState({ goals: goals});
        });
    }

    goalDelete = (id) => {
        mock.deleteGoals(id).then((result) => {
            this.setState({ goals: result });
        });
    }

    render() {
        const goals = this.state.goals[0] ? this.state.goals : mock.goals;

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

export default GoalList;