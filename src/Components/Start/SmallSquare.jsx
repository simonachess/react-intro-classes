import React from "react";
import DigitSquare from "./DigitSquare"

class SmallSquare extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="big-blue__small" style={{ borderColor: this.props.color }}>
                <DigitSquare number={this.props.number} />
            </div>
        )
    }
}

export default SmallSquare