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

class AddWorksOnForm extends React.Component {
  state = {
    emp_id: "",
    pid: ""
  };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChangeemp_id = event => {
    this.setState({ emp_id: event.target.value });
  };

  handleChangepid = event => {
    this.setState({ pid: event.target.value });
  };

  onClick = async () => {
    console.log({
      emp_id: this.state.emp_id,
      pid: this.state.pid,
      workid: this.props.workid
    });
    const res = await axios.post("/~mswanso2/assignEMP_route.php", {
      emp_id: this.state.emp_id,
      pid: this.state.pid,
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
          Please enter the information of the Works_on you want to add
        </h3>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">Employee Workid</InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.emp_id}
              onChange={this.handleChangeemp_id}
            />
          </FormControl>
          <br />
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">Project Id</InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.pid}
              onChange={this.handleChangepid}
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

AddWorksOnForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddWorksOnForm);
