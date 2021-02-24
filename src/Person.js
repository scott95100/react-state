import React, { Component } from 'react'; // class-based components
import MoodTracker from './MoodTracker';



class Person extends Component {
  

    render() {
        const { info } = this.props;
        const { name } = info;
        return (
        <div>
            <h2>{name}</h2>
        </div>
        )
    }
}


export default Person;