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
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

class DeleteEmployeeForm extends React.Component {
  state = {
    name: ""
  };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  onClick = async () => {
    console.log({
      workid: this.props.workid,
      workid1: this.state.name
    });
    const res = await axios.post("/~mswanso2/delEMP_route.php", {
      workid: this.props.workid,
      workid1: this.state.name
    });
    console.log(res);
    alert(res.data);
  };
  render() {
    const { classes } = this.props;

    return (
      <Grid>
        <h3 style={{ marginTop: "30px" }}>
          Please enter the workid of the person you want to delete
        </h3>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">Workid</InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormControl>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={this.onClick}
          >
            DELETE
          </Button>
        </div>
      </Grid>
    );
  }
}

DeleteEmployeeForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DeleteEmployeeForm);
