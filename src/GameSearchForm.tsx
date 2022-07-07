import React from "react";

class GameSearchForm extends React.Component<{}, {mins: string, people: string}> {
    constructor(props) {
        super(props);
        this.state = {
            mins: "15",
            people: "5"
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        console.log(event.target);
        switch (event.target.name) {
            case ("mins"):
                this.setState({mins: event.target.value});
                break;
            case ("people"):
                this.setState({people: event.target.value});
                break;
        }
    }

    render() {
        return (
            <form>
                <label>
                    Minutes:
                    <input name="mins" type="text" value={this.state.mins} onChange={this.handleInputChange}></input>
                </label>
                <label>
                    People:
                    <input name="people" type="text" value={this.state.people} onChange={this.handleInputChange}></input>
                </label>
            </form>
        );
    }
}

export default GameSearchForm;