import React from 'react';
import {connect} from 'react-redux';
import EssayForm from "./EssayForm";

const CreateEssay = (props) => {
    return (
        <div>
            <EssayForm onSubmit={(essay) => {
                console.log(essay);
                props.history.push("/");
            }}/>

        </div>
    );
};

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(CreateEssay);
