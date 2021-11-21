import React from "react";

class DigitSquare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: this.props.number,
        }
    }

    increaceNumber = () => {
        //Wrong
        // this.setState({
        //     number: this.state.number + 1
        // })

        //Correct
        this.setState(state => ({
            number: state.number + 1
        })); //grazina objekta
    }

    render() {
        return (
            <div className="big-blue__small__digit" onClick={this.increaceNumber}>
                {this.state.number}
            </div>
        )
    }

}

export default DigitSquare