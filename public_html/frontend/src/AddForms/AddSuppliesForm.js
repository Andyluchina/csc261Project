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

class AddMissionForm extends React.Component {
  state = {
    mname: "",
    mlid: ""
  };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChangemname = event => {
    this.setState({ mname: event.target.value });
  };

  handleChangemlid = event => {
    this.setState({ mlid: event.target.value });
  };

  onClick = async () => {
    console.log({
      mname: this.state.mname,
      mlid: this.state.mlid,
      workid: this.props.workid
    });
    const res = await axios.post("/~mswanso2/addMIS_route.php", {
      mname: this.state.mname,
      mlid: this.state.mlid,
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
          Please enter the information of the Mission you want to add
        </h3>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">Mission Name</InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.mname}
              onChange={this.handleChangemname}
            />
          </FormControl>
          <br />
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">
              Mission Leader Id
            </InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.mlid}
              onChange={this.handleChangemlid}
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

AddMissionForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddMissionForm);
