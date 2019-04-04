import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  Button: {
    marginLeft: "20px"
  }
};

class MainPage extends React.Component {
  onClick = () => {
    this.props.clearUser();
    this.props.Logout();
  };

  render() {
    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={styles.grow}>
              {this.props.workid}
            </Typography>
            <Button
              color="inherit"
              style={styles.Button}
              onClick={this.onClick}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default MainPage;
