import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
class Login extends Component {
  state = {
    workid: ""
  };

  onChange = event => {
    this.setState({
      workid: event.target.value
    });
  };

  onClick = event => {
    console.log(this.state.workid);
    //posting the things to the backend
  };

  styles = {
    grid: {
      justifyContent: "center",
      width: "75%",
      margin: "auto",
      textAlign: "center",
      marginTop: "200px"
    },
    container: {
      backgroundColor: "lightblue",
      height: "100vh"
    }
  };

  render() {
    return (
      <Grid style={this.styles.container} container>
        <Grid style={this.styles.grid}>
          <Typography component="h2" variant="h3" gutterBottom>
            The National Aeronautics and Space Administration
          </Typography>
          <Typography variant="h6" gutterBottom>
            Please Login below with workid
          </Typography>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue={this.state.workid}
            margin="normal"
            variant="outlined"
            onChange={this.onChange}
          />
          <br />
          <Button variant="contained" component="span" onClick={this.onClick}>
            Login
          </Button>
          <br />
          <Typography style={{ marginTop: "30px" }} gutterBottom>
            This site is a highly classified site, any attempt to temper with
            this site is illegal
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Login;
