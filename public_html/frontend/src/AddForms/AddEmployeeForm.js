import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import axios from "axios";
const styles = theme => ({
  container: {},
  formControl: {
    margin: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

class AddEmployeeForm extends React.Component {
  state = {
    fname: "",
    mi: "",
    lname: "",
    pnum: "",
    title: ""
  };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChangefname = event => {
    this.setState({ fname: event.target.value });
  };

  handleChangemi = event => {
    this.setState({ mi: event.target.value });
  };
  handleChangelname = event => {
    this.setState({ lname: event.target.value });
  };
  handleChangepnum = event => {
    this.setState({ pnum: event.target.value });
  };
  handleChangetitle = event => {
    this.setState({ title: event.target.value });
  };

  onClick = async () => {
    console.log({
      fname: this.state.fname,
      mi: this.state.mi,
      lname: this.state.lname,
      pnum: this.state.pnum,
      title: this.state.title,
      workid: this.props.workid
    });
    const res = await axios.post("/~mswanso2/addEMP_route.php", {
      fname: this.state.fname,
      mi: this.state.mi,
      lname: this.state.lname,
      pnum: this.state.pnum,
      title: this.state.title,
      workid: this.props.workid
    });
    console.log(res);
    alert(res.data);
  };
  render() {
    const { classes } = this.props;

    return (
      <Grid>
        <h3 style={{ marginTop: "30px" }}>
          Please enter the information of the person you want to add
        </h3>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">FisrtName</InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.fname}
              onChange={this.handleChangefname}
            />
          </FormControl>
          <br />
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">Middle Inital</InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.mi}
              onChange={this.handleChangemi}
            />
          </FormControl>
          <br />
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">Last Name</InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.lname}
              onChange={this.handleChangelname}
            />
          </FormControl>
          <br />
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">Phone Number</InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.pnum}
              onChange={this.handleChangepnum}
            />
          </FormControl>
          <br />
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">Title</InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.title}
              onChange={this.handleChangetitle}
            />
          </FormControl>
          <br />
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={this.onClick}
          >
            ADD
          </Button>
        </div>
      </Grid>
    );
  }
}

AddEmployeeForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddEmployeeForm);
