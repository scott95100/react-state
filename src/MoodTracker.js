import React, { Component } from 'react';

class MoodTracker extends Component {
    state = {
        moodPoints: 1
    }

    increaseMood = ()=> {
        this.setState({
            moodPoints: this.state.moodPoints + 1
        })
    }

    decreaseMood = () => {
        this.setState({
            moodPoints: this.state.moodPoints - 1
        })
    }

    render() {
        return (
            <div>
                <h1>Mood Tracker</h1>
                <p>On a scale of 1-10, what is your mood?</p>
                <p>My current mood is {this.state.moodPoints}</p>
                <button onClick={this.increaseMood}>Cheer up</button>
                <button onClick={this.decreaseMood}>So Sad..</button>
            </div>
        )
    }
}

export default MoodTracker;