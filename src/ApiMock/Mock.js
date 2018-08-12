class Mock {

    goals = [
        {"id": 0, "title" : "Mock Api", "description": "Mock provided by you, is not working, so I have created my own mock. Instead of api call, I used setTimeout inside async function and return a promise. "},
        {"id": 1, "title" : "Angular", "description": "Angular 1.x is failure. Google has improved a lot Angular 2.x to 6.x and it's a framework not a library."},
        {"id": 2, "title" : "Vue", "description": "Combination of react, angular and other frontend framework and library. Author took good parts of framework and build it."},
        {"id": 3, "title" : "Backbone", "description": "Will learn Backbone."},
        {"id": 4, "title" : "React", "description": "React has a best community and incresing day by day. It is developed by Facebook."},
    ];

    // This we will get from API
    lastId = this.goals.length + 1;

    getGoals = async () => {
        return await new Promise((Resolve, Reject) => {
            setTimeout(() => {
                Resolve(this.goals);
            }, 100);
        });
    }

    addGoals = async (goals) => {
        return await new Promise((Resolve, Reject) => {
            setTimeout(() => {
                goals = goals.map((goal) => {
                    this.lastId++;
                    // Id we will get from api, I have added for now
                    return { ...goal, id: this.lastId}
                });
                this.goals = [...this.goals, ...goals];
                Resolve(this.goals);
            }, 100);
        });
    }

    updateGoals = async (updateId, data) => {
        return await new Promise((Resolve, Reject) => {
            setTimeout(() => {
                this.goals = this.goals
                    .map((element) => {
                        if(element.id === updateId) return data;
                        return element;
                    });
                Resolve(this.goals);
            }, 100);
        });
    }

    deleteGoals = async (deleteId) => {
        return await new Promise((Resolve, Reject) => {
            setTimeout(() => {
                this.goals = this.goals
                    .filter((element) => {
                        return element.id !== deleteId;
                    });
                Resolve(this.goals);
            }, 100);
        });
    }
}

export default new Mock();