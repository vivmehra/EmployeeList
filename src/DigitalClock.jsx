import React, { Component } from 'react';

class DigitalClock extends Component{
    constructor(props) {
        super(props);
        this.state = { clock: new Date() }; 
    }

    componentDidMount() { 
        this.update = setInterval(() => {
            this.setState({ clock: new Date() });
        }, 1000); 
    }

    render() {
        const { clock } = this.state; 

        return (
            <React.Fragment>
            <h2>
                {clock.toLocaleTimeString()}
            </h2>
            </React.Fragment>
        
           
        );
    }
}
export default DigitalClock;

