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

class AddProjectForm extends React.Component {
  state = {
    pname: "",
    mid: "",
    plid: ""
  };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChangepname = event => {
    this.setState({ pname: event.target.value });
  };

  handleChangemid = event => {
    this.setState({ mid: event.target.value });
  };

  handleChangeplid = event => {
    this.setState({ plid: event.target.value });
  };

  onClick = async () => {
    console.log({
      pname: this.state.pname,
      mid: this.state.mid,
      plid: this.state.plid,
      workid: this.props.workid
    });
    const res = await axios.post("/~mswanso2/addPRJ_route.php", {
      pname: this.state.pname,
      mid: this.state.mid,
      plid: this.state.plid,
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
          Please enter the information of the Project you want to add
        </h3>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">Project Name</InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.pname}
              onChange={this.handleChangepname}
            />
          </FormControl>
          <br />
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">Mission Id</InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.mid}
              onChange={this.handleChangemid}
            />
          </FormControl>
          <br />
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">
              Project Leader Id
            </InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.plid}
              onChange={this.handleChangeplid}
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

AddProjectForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddProjectForm);
