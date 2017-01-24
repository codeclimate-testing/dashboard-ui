/**
 * Created by Darkstar on 11/29/2016.
 */
import React from 'react';
import {connect} from 'react-redux';
import Toolbar from '../toolbar/toolbar.js';
import Footer from '../footer/footer.jsx';
import FirstDisplay from './firstDisplay.js'

class Cache extends React.Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }
    static get contextTypes() {
        return {
            router: React.PropTypes.object.isRequired,
        }
    }
    componentWillMount(){
        if(!this.props.appData.viewActive){
            this.context.router.push('/')
        }
    }
    render() {
        return (
            <div id= "" style={{backgroundColor: '#FFF'}}>
                <Toolbar isDashboardMainPage={false}/>
                <div className="cache">
                    <FirstDisplay/>
                </div>
                <Footer id="app-footer"/>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        appData: state.manageApp
    };
};

export default connect(mapStateToProps, null)(Cache);
