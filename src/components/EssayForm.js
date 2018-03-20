import React, {Component} from 'react';
import {connect} from 'react-redux';

class EssayForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:props.essay?props.essay.id:"",
            title: props.essay?props.essay.title:"",
            content: props.essay?props.essay.content:"",
            date:props.essay?props.essay.date: ""

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
                    <input
                        value={this.state.title}
                        onChange={(e) => {
                        const title = e.target.value;
                        this.setState(() => {
                            return {
                                title
                            }
                        });
                    }}/>
                    <input
                        value={this.state.content}
                        onChange={(e) => {
                        const content = e.target.value;
                        this.setState(() => ({
                            content
                        }));

                    }}/>
                    <input
                        value={this.state.date}
                        onChange={(e) => {
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



export default EssayForm;
