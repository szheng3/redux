import React, {Component} from 'react';
import {connect} from 'react-redux';

class EssayForm extends Component {

    state = {
        title: '',
        content: '',
        date: ''

    };

    render() {
        return (
            <div>
                <form>
                    <input onChange={(e) => {
                        const title = e.target.value;
                        this.setState((state) => {
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
    return {};
}

export default connect(
    mapStateToProps,
)(EssayForm);
