import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../actions/simpleAction';

class Nav extends Component {

    simpleAction = (event) => {
        this.props.simpleAction();
    }

    render(){
        return(
            <div>
                <p>main nav</p>
                <button onClick={this.props.simpleAction}>Test redux action</button>
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
    simpleAction: () => dispatch(simpleAction())
  });
  
  export default connect(mapStateToProps,mapDispatchToProps) (Nav);