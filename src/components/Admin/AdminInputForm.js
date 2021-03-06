import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

// material-ui input statements
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';

class AdminInputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newProject: {
        nameIn: null,
        tagIn: null,
        githubIn: null,
        websiteIn: null,
        descriptionIn: null,
        dateIn: new Date,
      }
    }
  }

  handleChange = event => {
    this.setState({
      newProject: {
        ...this.state.newProject,
        [event.target.name]: event.target.value,
      }
    });
  };

  handleDateChange = date => {
    this.setState({
      newProject: {
        ...this.state.newProject,
        dateIn: date,
      }
    });
  };

  addProject = (event) => {
    // prevent the form from refreshing the DOM
    event.preventDefault();
    // add path and description to an object for the database
    this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state.newProject });
    swal("Project added", "You have added a new project.", "success");
    this.setState({
      newProject: {
        nameIn: null,
        tagIn: null,
        githubIn: null,
        websiteIn: null,
        descriptionIn: null,
        dateIn: new Date,
      }
    });

  };

  render() {
    return (
      <form onSubmit={this.addProject}>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <TextField
              label="Name"
              id="name-of-project"
              variant="outlined"
              name="nameIn"
              value={this.state.newProject.nameIn}
              onChange={this.handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">Name</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item>
            <InputLabel htmlFor="tag">Tag</InputLabel>
            <Select
              value={this.state.newProject.tagIn}
              name="tagIn"
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
                <MenuItem key={option.id} value={option.id}>
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
              name="githubIn"
              value={this.state.newProject.githubIn}
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
              name="websiteIn"
              value={this.state.newProject.websiteIn}
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
              name="descriptionIn"
              value={this.state.newProject.descriptionIn}
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
              value={this.state.newProject.dateIn}
              onChange={this.handleDateChange}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Button type="submit" variant="contained" color="primary">
          Submit new project
        </Button>
      </form>
    )
  }
}

const mapStoreToProps = reduxStore => ({
  reduxStore,
});

export default connect(mapStoreToProps)(AdminInputForm);