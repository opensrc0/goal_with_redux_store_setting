import React, { Component } from 'react';
import { withRouter } from 'react-router'
import mock from './../../ApiMock/Mock';
import './goalAdd.css';

class GoalAdd extends Component {
    state = {
        newGoals: [{title: "",description: ""}],
    }

    addNewGoal = () => {
        const goal = {
            title: "",
            description: ""
        };

        this.setState((prevState) => {
            return ({ newGoals: [...prevState.newGoals, goal] });
        });
    }

    removeNewGoal = (id) => () => {
        this.setState((prevState) => {
            prevState.newGoals.splice(id, 1);
            return ({ newGoals: prevState.newGoals});
        });
    }

    changeNewGoal = idx => e => {
        const { name, value } = e.target;
        const newGoals = [...this.state.newGoals];
        newGoals[idx][name] = value;
        this.setState({
            newGoals
        });
    };

    saveNewGoals = () => {
        const { newGoals } = this.state;
        const { history } = this.props;
        const goals = newGoals.filter((goal) => goal.title && goal.description);
        mock.addGoals(goals).then((r) => {
            history.push('/');
        });
    }

    newGoalUi = (index) => {
        const { newGoals } = this.state;
        return (
            <div className="goal__new__ui" key={index}>
                <span
                    className="close"
                    onClick={this.removeNewGoal(index)}
                >
                    &times;
                </span>
                <div className="goal__add__input">
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        onChange={this.changeNewGoal(index)}
                        value={newGoals[index].title}
                        className="goal__add__title"
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter Description"
                        onChange={this.changeNewGoal(index)}
                        value={newGoals[index].description}
                        className="goal__add__description"
                    />
                </div>
            </div>
        );
    }

    render() {
        const { newGoals } = this.state;
        return (
            <div className="goal__add__section">
                {
                    newGoals.map((value, index) => this.newGoalUi(index))
                }
                <div className="goal__add__action">
                    <button className="goal__add__new btn-waring" onClick={this.addNewGoal}>Add a New Goal</button>
                    <button className="goal__add__save btn-success" onClick={this.saveNewGoals}>Save</button>
                </div>
            </div>
        );
    }
};

export default withRouter(GoalAdd);