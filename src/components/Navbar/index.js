import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { handleChange, login } from '../../store/actions';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    marginLeft: '10px',
    paddingLeft: '10px',
    borderRadius: '3px',
    height: '25px'
  }
};

function ButtonAppBar(props) {
  const handleChange = e => {
    props.handleChange(e.target.name, e.target.value);
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    props.login(loginEmail, loginPassword);
  };

  const { classes, loginEmail, loginPassword } = props;
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {/* {props.isLogginSuccess || props.isRegisterSuccess ? (
            <IconButton
              className={classes.menuButton}
              color='inherit'
              aria-label='Menu'
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Typography variant='h6' color='inherit' className={classes.grow}>
              Mentor's International Training Reminders
            </Typography>
          )} */}
          <Typography variant='h6' color='inherit' className={classes.grow}>
            Mentor's International Training Reminders
          </Typography>

          {/* {props.isLogginSuccess || props.isRegisterSuccess ? null : (
            <form className={classes.form} onSubmit={handleLoginSubmit}>
              <input
                type='email'
                placeholder='Email'
                required
                name='loginEmail'
                value={loginEmail}
                onChange={handleChange}
                className={classes.input}
              />
              <input
                type='password'
                placeholder='Password'
                required
                name='loginPassword'
                value={loginPassword}
                onChange={handleChange}
                className={classes.input}
              />
              <Button type='submit' color='inherit'>
                Login
              </Button>
            </form>
          )} */}
          <form className={classes.form} onSubmit={handleLoginSubmit}>
            <input
              type='email'
              placeholder='Email'
              required
              name='loginEmail'
              value={loginEmail}
              onChange={handleChange}
              className={classes.input}
            />
            <input
              type='password'
              placeholder='Password'
              required
              name='loginPassword'
              value={loginPassword}
              onChange={handleChange}
              className={classes.input}
            />
            <Button type='submit' color='inherit'>
              Login
            </Button>
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  loginPassword: state.auth.loginPassword,
  loginEmail: state.auth.loginEmail
});

export default connect(
  mapStateToProps,
  { handleChange, login }
)(withStyles(styles)(ButtonAppBar));
