import React, { Component } from 'react';
import PureComp from './PureComp';
import RegularComp from './RegularComp';
import MemoComp from './MemoComp';

// class ParentComp extends React.PureComponent {
class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Kate"
        };

        this.intervalId = null;
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                name: "Kate"
            });
        }, 2000);

        // this.setState({
        //     name: "Kate"
        // });
    }

    render() {
        console.log("*************************Parent Component Render******************************")
        return(
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                {/* <PureComp name={this.state.name} /> */}
                {/* <RegularComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp;
