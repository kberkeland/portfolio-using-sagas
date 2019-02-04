import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui input statements
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';

class AdminInputForm extends Component {

  state = {
    nameIn: '',
    tagIn: '',
    githubIn: '',
    websiteIn: '',
    dateIn: new Date('2019-02-01'),
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDateChange = date => {
    this.setState({ dateIn: date });
  };

  render() {
    return (
      <form>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <TextField
              label="Name"
              id="name-of-project"
              variant="outlined"
              value={this.state.nameIn}
              onChange={this.handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">Name</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item>
            <InputLabel htmlFor="tag">Tag</InputLabel>
            <Select
              value={this.state.tagIn}
              onChange={this.handleChange}
              input={
                <OutlinedInput
                  labelWidth={0}
                  name="tagIn"
                  id="tag"
                />
              }
            >
              {this.props.reduxStore.tags.map(option => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <TextField
              label="Github url"
              id="github-url"
              variant="outlined"
              value={this.state.githubIn}
              onChange={this.handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">Url:</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Website url"
              id="website-url"
              variant="outlined"
              value={this.state.websiteIn}
              onChange={this.handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">Url:</InputAdornment>,
              }}
            />
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <TextField
              label="Description"
              id="Description"
              multiline
              rowsMax="4"
              variant="outlined"
              value={this.state.descriptionIn}
              onChange={this.handleChange}
            />
          </Grid>
        </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container spacing={8} alignItems="flex-end">
            <DatePicker
              margin="normal"
              label="Project date"
              variant="outlined"
              value={this.state.dateIn}
              onChange={this.handleDateChange}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </form>
    )
  }
}

const mapStoreToProps = reduxStore => ({
  reduxStore,
});

export default connect(mapStoreToProps)(AdminInputForm);