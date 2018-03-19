import React from 'react';
import {connect} from 'react-redux';

const ReadPage = (props) => {
    return (
        <div>
            hi

            {props.essay.map(value => <div key={value.id}><p>{value.title}</p><h1>{value.content}</h1></div>)}

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        essay: state.essay
    };
};

export default connect(
    mapStateToProps,
)(ReadPage);
