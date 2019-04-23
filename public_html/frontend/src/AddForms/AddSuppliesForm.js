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

class AddSuppliesForm extends React.Component {
  state = {
    pid: "",
    cid: "",
    budget: ""
  };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChangepid = event => {
    this.setState({ pid: event.target.value });
  };

  handleChangecid = event => {
    this.setState({ cid: event.target.value });
  };

  handleChangebudget = event => {
    this.setState({ budget: event.target.value });
  };

  onClick = async () => {
    console.log({
      cid: this.state.cid,
      pid: this.state.pid,
      budget: this.state.budget,
      workid: this.props.workid
    });
    const res = await axios.post("/~mswanso2/assignCON_route.php", {
      cid: this.state.cid,
      pid: this.state.pid,
      budget: this.state.budget,
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
          Please enter the information of the Supplies you want to add
        </h3>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">Contractor id</InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.cid}
              onChange={this.handleChangecid}
            />
          </FormControl>
          <br />
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">Project id</InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.pid}
              onChange={this.handleChangepid}
            />
          </FormControl>
          <br />
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">budget</InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.budget}
              onChange={this.handleChangebudget}
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

AddSuppliesForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddSuppliesForm);
