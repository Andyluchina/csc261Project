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
    initialData: {},
    referenceData: {}
  };

  componentWillMount() {
    // console.log(res.data);
    // var initialData = {};
    // res.data.forEach(function(element) {
    //   initialData[element] = "";
    // });
    // this.setState({
    //   initialData
    // });
    this.setState({
      referenceData: this.props.initialData
    });
  }

  handleChange = (item, event) => {
    var cur = this.state.initialData;
    cur[item] = event.target.value;
    this.setState({
      initialData: cur
    });
  };

  onClick = async () => {
    console.log({
      tablename: this.props.tablename,
      workid: this.props.workid,
      payload: this.state.initialData
    });
    const res = await axios.post("/~mswanso2/search_route.php", {
      tablename: this.props.tablename,
      workid: this.props.workid,
      payload: this.state.initialData
    });

    //alert(res.data);
    console.log("searching");
    console.log(res);
    this.props.updateSearch(res.data);
  };
  render() {
    const { classes } = this.props;

    if (this.props.tablename === "") {
      return <Grid />;
    }
    if (
      JSON.stringify(this.state.referenceData) ===
      JSON.stringify(this.props.initialData)
    ) {
    } else {
      this.setState({
        initialData: null,
        referenceData: null
      });
      this.setState({
        initialData: this.props.initialData,
        referenceData: this.props.initialData
      });
    }

    return (
      <Grid>
        <h3 style={{ marginTop: "30px" }}>
          Search the {this.props.tablename} Table
        </h3>
        <div className={classes.container}>
          {this.props.attributes.map(item => {
            return (
              <FormControl
                className={classes.formControl}
                variant="filled"
                style={{ marginRight: 7 }}
              >
                <InputLabel htmlFor="component-filled">{item}</InputLabel>
                <FilledInput
                  id="component-filled"
                  value={this.state.initialData[item]}
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
