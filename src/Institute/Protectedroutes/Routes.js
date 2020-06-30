import React from 'react';
import{ Route, Redirect } from "react-router-dom";
import store from '../../Redux/store/storage'


export const AlumniRoute = ({component : Component, ...rest}) => {   //Only Alumni Routes
    return(
        <Route {...rest} render = {
            (props) => {
                let state = store.getState();
                let loginstate = state.Auth_state;
                let loginuser = state.Auth_user;
                return (loginstate && loginuser === 'alumni') ? 
                (
                    <Component {...rest}/>

                ) : (
                    <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                )
            }
        }/>
    )
}

export const NoStudentRoute = ({component : Component, ...rest}) => {  //Except Students Routes
    return(
        <Route {...rest} render = {
            (props) => {
                let state = store.getState();
                let loginstate = state.Auth_state;
                let loginuser = state.Auth_user;
                return (loginstate && loginuser !== 'student') ? 
                (
                    <Component {...rest}/>

                ) : (
                    <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                )
            }
        }/>
    )
}

export const CnARoute = ({component : Component, ...rest}) => {  //College and Admin Route
    return(
        <Route {...rest} render = {
            (props) => {
                let state = store.getState();
                let loginstate = state.Auth_state;
                let loginuser = state.Auth_user;
                return (loginstate && (loginuser === 'college' || loginuser === 'admin')) ? 
                (
                    <Component {...rest}/>

                ) : (
                    <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                )
            }
        }/>
    )
}

export const NoCollegeRoute = ({component : Component, ...rest}) => {   //Except College Route
    return(
        <Route {...rest} render = {
            (props) => {
                let state = store.getState();
                let loginstate = state.Auth_state;
                let loginuser = state.Auth_user;
                return (loginstate && loginuser !== 'college') ? 
                (
                    <Component {...rest}/>

                ) : (
                    <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                )
            }
        }/>
    )
}
