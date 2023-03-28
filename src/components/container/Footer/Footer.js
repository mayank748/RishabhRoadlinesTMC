import React, { Component } from 'react'
import './_footer_page.scss';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileMenuShow: false,
            mobileView: false,
        }
    }


    render() {

        return (
            <>
                <div className="footer">
                    <div className="footer_main">
                        <div className="strip_line">
                            {/* <img src={'/Assets/Images/strip.jpg'} alt="strip2" className="w-100" /> */}
                        </div>
                        <div className="footer">
                            <span id="TC" > Terms &amp; Conditions</span>
                            <span id="Powered_by" >
                                <span>Powered by</span>: Rishabh RoadLine
                            </span>
                        </div>
                    </div>


                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    // console.log('state in value', state);
    return {
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default Footer;