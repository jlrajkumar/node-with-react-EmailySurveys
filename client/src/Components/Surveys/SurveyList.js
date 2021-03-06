import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component{
    componentDidMount(){
        this.props.fetchSurveys();
    }

    renderSurveys(){
        return this.props.surveys.reverse().map(survey =>{
            return(

                <div className="card blue-grey " key={survey._id}>

                    <div className="card-content white-text">
                        <span className="card-title"> {survey.title} </span>
                        <p>{survey.body}</p>
                        <p className="right">
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>

                    <div className="card-action">
                        <a> Yes: 
                        <span className="white-text"> {survey.yes}</span>
                        </a>
                        <a> No:
                        <span className="white-text">  {survey.no  } </span>
                             </a>
                    </div>
                </div>

            );
                });
    }

    render(){
        return(
            <div> 
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps({surveys}){
    return{ surveys }
}

export default connect(mapStateToProps, { fetchSurveys})(SurveyList);