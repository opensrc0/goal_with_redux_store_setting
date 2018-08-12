import React, { Component } from 'react';
import mock from './../../../ApiMock/Mock';
import './goal.css';

class Goal extends Component {
    state = {
        shouldUpdate: false,
        goal: this.props.goal,
    }

    goalUpdate = (id) => () => {
        this.setState({ shouldUpdate: true });
    }

    goalUpdateSave = (id) => () => {
        const { goal } = this.state;
        mock.updateGoals(id, goal).then(() => {
            this.setState({ shouldUpdate: false });
        });
    }

    goalUpdateCancel = () => {
        this.setState({ shouldUpdate: false });
    }

    goalDelete = (id) => () => {
        if (window.confirm("Are you sure, you want to delete?")) {
            this.props.goalDelete(id);
        }
    }

    changeGoal = e => {
        const { name, value } = e.target;
        const goal = {
            ...this.state.goal,
            [name] : value,
        };

        this.setState({
            goal
        });
    }

    render() {
        const { id } = this.props;
        const { shouldUpdate, goal } = this.state;
        return (
            shouldUpdate ? (
                <div className="goal">
                    <div className="goal__title"> 
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter Title"
                            onChange={this.changeGoal}
                            value={goal.title}
                        />
                    </div>
                    <div className="goal__description">
                        <input
                            type="text"
                            name="description"
                            placeholder="Enter Description"
                            onChange={this.changeGoal}
                            value={goal.description}
                        />
                    </div>
                    <div className="goal__update__delete">
                        <button className="btn-success" onClick={this.goalUpdateSave(id)}>
                            Save
                        </button>
                        <button className="btn-waring" onClick={this.goalUpdateCancel}>
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <div className="goal">
                    <div className="goal__title">{goal.title}</div>
                    <div className="goal__description">{goal.description}</div>
                    <div className="goal__update__delete">
                        <button className="btn-primary" onClick={this.goalUpdate(id)}>
                            Update
                        </button>
                        <button className="btn-danger" onClick={this.goalDelete(id)}>
                            Delete
                        </button>
                    </div>
                </div>
            )
        );
    }
}

export default Goal;