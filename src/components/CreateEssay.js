import React from 'react';
import {connect} from 'react-redux';
import EssayForm from "./EssayForm";
import {AddEssay} from "./actions/Essay";

const CreateEssay = (props) => {
    return (
        <div>
            <EssayForm onSubmit={(essay) => {
                console.log(essay);
                props.dispatch(AddEssay(essay));
                props.history.push("/read");
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
