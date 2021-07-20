import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions/index';
import {withRouter} from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues,submitSurvey, history }) =>{
    const reviewFields =  _.map(formFields, field =>{
        return(
            <div key={field.name}>
                <label> {field.label}</label>
                <div>{formValues[field.name]}</div>
            </div>
        );
    });

return(
    <div>
        <h5>Please Confirm your entries </h5>
        {reviewFields} <br/>
         <button className="yellow darken-2 white-text btn-flat" onClick={onCancel}>
             Back
         </button>

         <button className="green white-text btn-flat right" onClick={ () => submitSurvey(formValues, history)}>
             Send Survey <i className="material-icons right">email</i>
         </button>
    </div>
);

};


function mapStateToProps(state){
    //console.log(state);
    return { formValues: state.form.surveyForm.values   };//Accessing Formvalues into Review Screen
    
}

    export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));