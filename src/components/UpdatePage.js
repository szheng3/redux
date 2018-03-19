import React from 'react';
import {connect} from 'react-redux';
import EssayForm from "./EssayForm";

const UpdatePage = (props) => {
    return (
        <div>
            <EssayForm onSubmit={(essay) => {

            }}/>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(
    mapStateToProps,
)(UpdatePage);
