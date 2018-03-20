import React from 'react';
import {connect} from 'react-redux';
import EssayForm from "./EssayForm";
import {UpdateEssay} from "./actions/Essay";

const UpdatePage = (props) => {
    return (
        <div>
            <EssayForm
                onSubmit={(essay) => {
                    console.log('fuuuuuu');
                    console.log(essay);
                    props.dispatch(UpdateEssay(essay))
                }}
                {...props}
            />

        </div>
    );
};

function mapStateToProps(state, props) {
    return {
        essay: state.essay.find(value => value.id === props.match.params.id)
    };
}

export default connect(
    mapStateToProps,
)(UpdatePage);
