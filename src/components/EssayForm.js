import React, {Component} from 'react';
import {connect} from 'react-redux';

class EssayForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            date: ''

        };
    }



    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);


    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input onChange={(e) => {
                        const title = e.target.value;
                        this.setState(() => {
                            return {
                                title
                            }
                        });
                    }}/>
                    <input onChange={(e) => {
                        const content = e.target.value;
                        this.setState(() => ({
                            content
                        }));

                    }}/>
                    <input onChange={(e) => {
                        const date = e.target.value;

                        this.setState(() => ({
                            date
                        }));

                    }}/>
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        essay: state.essay
    };
}

export default connect(
    mapStateToProps,
)(EssayForm);
