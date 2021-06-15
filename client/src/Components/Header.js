import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './payments';

class Header extends Component{

    renderContent() {
        switch (this.props.auth) {
          case null:
            return;
          case false:
            return <li><a href="/auth/google">Login With Google</a></li>;
          default:
            return ([
              <li key="1"><Payments /></li>,
               
              <li key="3" style={{ margin: '0 10px' }}>
               Credits: {this.props.auth.credits}
             </li>,
             
              <li key="2"><a href="/api/logout">Logout</a></li>
             ] );
        }
      }

    render(){
        return(
           <nav>
               <div className="nav-wrapper">
                   <a className="left brand-logo" href="/"  style={{ margin: '0 10px' }}>JLR Surveys</a>
                  
                   <Link to ={this.props.auth ? '/surveys' : '/'}
                   className = "left brand-logo"  style={{ margin: '0 10px' }}
                   >
                      JLR Surveys 
                   </Link>

                    <ul className="right">  
                         {this.renderContent()}
                     </ul>
               </div>
           </nav>
        );
    }
}

//export default Header;


function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);