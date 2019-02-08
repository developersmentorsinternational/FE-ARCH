import React from 'react';
import SignupForm from '../components/Signup';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

const SignupView = props => {
  if (window.localStorage.token) {
    props.history.push('/dashboard');
  }
  console.log('Signup!');
  return (
    <div>
      <Navbar
      // isLogginSuccess={props.isLogginSuccess}
      // isRegisterSuccess={props.isRegisterSuccess}
      />
      <SignupForm />
    </div>
  );
};
const mapStateToProps = state => ({
  isRegisterSuccess: state.auth.isRegisterSuccess,
  isLogginSuccess: state.auth.isLogginSuccess
});

export default connect(
  mapStateToProps,
  {}
)(SignupView);
