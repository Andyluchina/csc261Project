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

class BasicSearchForm extends React.Component {
  state = {
    args: {},
    attributes: []
  };

  async componentWillMount() {
    console.log({
      tablename: this.props.tablename
    });
    const res = await axios.post("/~mswanso2/ATR_route.php", {
      tablename: this.props.tablename
    });
    console.log(res.data);
    this.setState({
      attributes: res.data
    });
    var initialData = {};
    res.data.forEach(function(element) {
      initialData[element] = "";
    });
    this.setState({
      args: initialData
    });
    console.log(this.state);
  }

  handleChange = (item, event) => {
    var cur = this.state.args;
    cur[item] = event.target.value;
    this.setState({ args: cur });
  };

  onClick = async () => {
    console.log({
      tablename: this.props.tablename,
      workid: this.props.workid,
      payload: this.state.args
    });
    const res = await axios.post("/~mswanso2/search_route.php", {
      tablename: this.props.tablename,
      workid: this.props.workid,
      payload: this.state.args
    });

    //alert(res.data);
    console.log("searching");
    console.log(this.state.args);
    console.log(res);
    this.props.updateSearch(res.data);
  };
  render() {
    const { classes } = this.props;

    if (this.props.tablename === "") {
      return <Grid />;
    }

    return (
      <Grid>
        <h3 style={{ marginTop: "30px" }}>
          Search the {this.props.tablename} Table
        </h3>
        <div className={classes.container}>
          {this.state.attributes.map(item => {
            return (
              <FormControl
                className={classes.formControl}
                variant="filled"
                style={{ marginRight: 7 }}
              >
                <InputLabel htmlFor="component-filled">{item}</InputLabel>
                <FilledInput
                  id="component-filled"
                  value={this.state.args[item]}
                  onChange={e => this.handleChange(item, e)}
                />
              </FormControl>
            );
          })}
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={this.onClick}
          >
            Search
          </Button>
        </div>
      </Grid>
    );
  }
}

BasicSearchForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BasicSearchForm);
