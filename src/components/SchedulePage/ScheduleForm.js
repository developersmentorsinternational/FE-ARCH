import React from 'react';
import {
  Paper,
  TextField,
  Button,
  Icon,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FilledInput,
  OutlinedInput
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { TimePicker } from 'material-ui-pickers';
import { handleScheduleChange } from '../../store/actions';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: '500px',
    width: '100%',
    margin: '0 auto'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

class ScheduleForm extends React.Component {
  state = {
    selectedDate: new Date(),
    labelWidth: 0,
    age: ''
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date }, () =>
      console.log(this.state.selectedDate)
    );
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    let date = `${this.state.selectedDate}`;
    let newDate = date.match(/\d+(?=:)/gi);
    const hour = newDate[0];
    const minute = newDate[1];
    console.log(this.props);
  };

  handleScheduleChange = e => {
    console.log(
      '%c from scheduleform ',
      'color: red',
      e.target.name,
      e.target.value
    );
    this.props.handleScheduleChange(e.target.name, e.target.value);
  };

  render() {
    const {
      classes,
      event,
      group,
      dayOfTheMonth,
      month,
      dayOfTheWeek
    } = this.props;
    const { selectedDate } = this.state;
    return (
      <div>
        <Paper className={classes.root}>
          {/* <h2>
            This is a typical crud app. Schedule List, every card is dynamically
            routed, you can edit them individually based on id. Post Request ->
            response to the schedules array in the store and list in the
            homepage by what's coming in first.
          </h2> */}
          <Typography variant='h5' component='h3'>
            Who do you want to send it to?
          </Typography>
          <Typography component='p'>Select a contact:</Typography>
          <FormControl variant='filled' className={classes.formControl}>
            <InputLabel htmlFor='filled-age-simple'>Event</InputLabel>
            <Select
              value={event}
              onChange={this.props.handleChange}
              input={<FilledInput name='event' id='filled-age-simple' />}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {/* map through event array here to <MenuItem /> */}
            </Select>
          </FormControl>
          <FormControl variant='filled' className={classes.formControl}>
            <InputLabel htmlFor='filled-age-simple'>Group</InputLabel>
            <Select
              value={group}
              onChange={this.props.handleChange}
              input={<FilledInput name='group' id='filled-age-simple' />}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {/* map through group array here  */}
              {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
          <form
            className={classes.container}
            noValidate
            autoComplete='off'
            onSubmit={this.handleSubmit}
          >
            <TextField
              id='outlined-multiline-static'
              label='Message'
              multiline
              rows='4'
              className={classes.textField}
              margin='normal'
              variant='outlined'
              fullWidth
              required
              name='messageBody'
              value={this.props.messageBody}
            />
            <div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Typography>Pick a recurring date:</Typography>

                <TimePicker
                  ampm={false}
                  seconds
                  format='HH:mm:ss'
                  value={selectedDate}
                  onChange={this.handleDateChange}
                />
              </MuiPickersUtilsProvider>

              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel htmlFor='outlined-age-simple'>
                  Day of the Month
                </InputLabel>
                <Select
                  value={dayOfTheMonth}
                  onChange={this.handleScheduleChange}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      name='dayOfTheMonth'
                      id='outlined-age-simple'
                    />
                  }
                >
                  
                  <MenuItem value='31'>31</MenuItem>
                  <MenuItem value='30'>30</MenuItem>
                  <MenuItem value='29'>29</MenuItem>
                  <MenuItem value='28'>28</MenuItem>
                  <MenuItem value='27'>27</MenuItem>
                  <MenuItem value='26'>26</MenuItem>
                  <MenuItem value='25'>25</MenuItem>
                  <MenuItem value='24'>24</MenuItem>
                  <MenuItem value='23'>23</MenuItem>
                  <MenuItem value='22'>22</MenuItem>
                  <MenuItem value='21'>21</MenuItem>
                  <MenuItem value='20'>20</MenuItem>
                  <MenuItem value='19'>19</MenuItem>
                  <MenuItem value='18'>18</MenuItem>
                  <MenuItem value='17'>17</MenuItem>
                  <MenuItem value='16'>16</MenuItem>
                  <MenuItem value='15'>15</MenuItem>
                  <MenuItem value='14'>14</MenuItem>
                  <MenuItem value='13'>13</MenuItem>
                  <MenuItem value='12'>12</MenuItem>
                  <MenuItem value='11'>11</MenuItem>
                  <MenuItem value='10'>10</MenuItem>
                  <MenuItem value='9'>09</MenuItem>
                  <MenuItem value='8'>08</MenuItem>
                  <MenuItem value='7'>07</MenuItem>
                  <MenuItem value='6'>06</MenuItem>
                  <MenuItem value='5'>05</MenuItem>
                  <MenuItem value='4'>04</MenuItem>
                  <MenuItem value='3'>03</MenuItem>
                  <MenuItem value='2'>02</MenuItem>
                  <MenuItem value='1'>01</MenuItem>
                  <MenuItem value='*'>
                    <em>None</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            <br />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
            >
              Schedule
              {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>

            <Button variant='contained' className={classes.button}>
              Reset
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  group: state.schedules.group,
  event: state.schedules.event,
  messageBody: state.schedules.messageBody,
  dayOfTheWeek: state.schedules.date.dayOfTheWeek,
  dayOfTheMonth: state.schedules.date.dayOfTheMonth,
  month: state.schedules.date.month,
  date: state.schedules.date
});

export default connect(
  mapStateToProps,
  { handleScheduleChange }
)(withStyles(styles)(ScheduleForm));
