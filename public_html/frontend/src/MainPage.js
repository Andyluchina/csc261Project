import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import ViewPage from "./ViewPage";
import AddPage from "./AddPage";
const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  Button: {
    marginLeft: "20px"
  },
  ButtonF: {
    marginLeft: "200px"
  },
  content: {
    paddingLeft: "100px",
    paddingRight: "100px"
  }
};

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewStatus: "View",
      workid: this.props.workid
    };
    //   this.toggle = this.toggle.bind(this);
    //   this.state = {
    //     dropdownOpen: false
    //   };
    // }
    //
    // toggle() {
    //   this.setState(prevState => ({
    //     dropdownOpen: !prevState.dropdownOpen
    //   }));
  }

  onClick = () => {
    this.props.clearUser();
    this.props.Logout();
  };

  onClickFunc = event => {
    console.log(event.target.innerHTML);
    this.setState({
      viewStatus: event.target.innerHTML
    });
  };
  renderContent = () => {
    if (this.state.viewStatus === "View") {
      return <ViewPage workid={this.state.workid} />;
    } else if (this.state.viewStatus === "Add") {
      return <AddPage workid={this.state.workid} />;
    }
  };

  render() {
    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={styles.grow}>
              {this.props.workerinfo.FNAME}
            </Typography>
            <Button
              color="inherit"
              style={styles.Button}
              onClick={this.onClick}
            >
              Logout
            </Button>

            <Grid>
              <Button
                color="inherit"
                style={styles.ButtonF}
                onClick={this.onClickFunc}
              >
                Add
              </Button>
              <Button
                color="inherit"
                style={styles.Button}
                onClick={this.onClickFunc}
              >
                View
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid>
          <h3>Your info: </h3>
          <p> Workid: {this.props.workerinfo.WORK_ID}</p>
          <p>
            Name: {this.props.workerinfo.FNAME} {this.props.workerinfo.LNAME}
          </p>
          <p>Phone: {this.props.workerinfo.PHONE_NUM}</p>
        </Grid>
        <Grid container style={styles.content}>
          {this.renderContent()}
        </Grid>
      </div>
    );
  }
}

export default MainPage;

//
// <DropdownItem header>Header</DropdownItem>
// <DropdownItem>Some Action</DropdownItem>
// <DropdownItem disabled>Action (disabled)</DropdownItem>
// <DropdownItem divider />
// <DropdownItem>Foo Action</DropdownItem>
// <DropdownItem>Bar Action</DropdownItem>
// <DropdownItem>Quo Action</DropdownItem>
