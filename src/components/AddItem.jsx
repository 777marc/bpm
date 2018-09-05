import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemAction } from '../actions/item';

class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: ''
        }
    }

    addItem = () => {
      this.props.addItemAction({name: 'marc', type: 'developer'})
    }

    render(){
        return(
            <div>
                <p>Add Item</p>
                <button onClick={this.addItem}>Test redux action</button>
                <pre>
                {
                    JSON.stringify(this.props)
                }
                </pre>                  
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
addItemAction: (item) => dispatch(addItemAction(item))
});

export default connect(mapStateToProps,mapDispatchToProps) (AddItem);