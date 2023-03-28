import React, { Component } from 'react'
import './header_Styles.scss';
// import downarrow from '../../Assets/downarrow.svg';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    redirectAccount() {
        this.props.history.push('/Account')
        // window._paq.push(['trackEvent', this.props.allCardsDetails !== null ? this.props.allCardsDetails.mobile : '' + '_loginbtn', 'loginbtn Action', 'loginbtn']);
    }

    redirect() {
        window.location.href = window.location.origin + "/AboutJandK";
        // window._paq.push(['trackEvent', this.props.allCardsDetails !== null ? this.props.allCardsDetails.mobile : '' + '_about_jk_reward', 'about_jk_reward Action', 'about_jk_reward']);
        console.log("about")
    }
    jkLogo() {
        // window._paq.push(['trackEvent', this.props.allCardsDetails !== null ? this.props.allCardsDetails.mobile : '' + '_jk_icon', 'jk_icon Action', 'jk_icon']);
        console.log("logo")
    }
    faq() {
        // window._paq.push(['trackEvent', this.props.allCardsDetails !== null ? this.props.allCardsDetails.mobile : '' + '_Faq', 'faq Action', 'faq']);
        console.log("faq")

    }
    contactUs() {
        // window._paq.push(['trackEvent', this.props.allCardsDetails !== null ? this.props.allCardsDetails.mobile : '' + '_contact_us', 'contact_us Action', 'contact_us']);
    }

    render() {

        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <h2>Rishabh RoadLine</h2>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">

                                {/* <li className="nav-item">
                                        <a className="nav-link" id="faq" activeclassname="active" href="/Help">Vechile Entry</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="contact_us" activeclassname="active" href="/ContactUs">Vechile List</a>
                                    </li> */}
                            </ul>
                        </div>

                        <button id="loginbtn" className="btn btn-theme-dark btn-login" onClick={() => window.location.href = '/'}>Logout</button>

                        {/* <button className="btn btn-theme-dark btn-login" onclick="location.href='@Url.Action("Login", "Home")'">Login</button> */}

                    </div>
                </nav>

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
// export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Headers);
export default Headers;
