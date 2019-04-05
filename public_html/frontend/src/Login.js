import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MainPage from "./MainPage";
import axios from "axios";
class Login extends Component {
  state = {
    workid: "",
    page: "login",
    workerinfo: ""
  };

  onChange = event => {
    this.setState({
      workid: event.target.value
    });
  };

  onClick = async event => {
    console.log(this.state.workid);
    //posting the things to the backend
    const res = await axios.post("/~mswanso2/info_route.php", {
      workid: this.state.workid
    });
    console.log(res);
    if (res.data[0] === "error") {
      alert("illegal workid");
    } else {
      this.setState({
        page: "main"
      });
    }
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

  Logout = () => {
    this.setState({
      page: "login"
    });
  };
  renderLogin = () => {
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
  };

  clearUser = () => {
    this.setState({
      workid: ""
    });
  };

  renderMain = () => {
    return (
      <MainPage
        Logout={this.Logout}
        workid={this.state.workid}
        clearUser={this.clearUser}
      />
    );
  };

  render() {
    if (this.state.page === "login") {
      return this.renderLogin();
    } else if (this.state.page === "main") {
      return this.renderMain();
    }
  }
}

export default Login;
