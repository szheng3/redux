import React from 'react';
import {connect} from 'react-redux';

const ReadPage = (props) => {
    return (
        <div>

            {props.essay.map(value =>
                (
                    <div key={value.id}>
                        <p>{value.title}</p>
                        <h1>{value.content}</h1>
                        <button onClick={(e) => {
                            props.history.push(`/update/${value.id}`);
                        }}>
                            Update
                        </button>
                    </div>
                )
            )}

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
