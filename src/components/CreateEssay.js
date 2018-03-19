import React from 'react';
import {connect} from 'react-redux';
import EssayForm from "./EssayForm";

const CreateEssay = (props) => {
    return (
        <div>
            <EssayForm/>

        </div>
    );
};

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(CreateEssay);
