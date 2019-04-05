import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
const styles = {
  dropdown: {
    marginTop: "30px"
  }
};
class ViewPage extends Component {
  async componentWillMount() {
    const res = await axios.post("/~mswanso2/public_html/view_route.php", {
      workid: "123",
      tablename: "MISSION"
    });
    console.log(res.body);
  }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      tablename: ""
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onClickMission = event => {
    this.setState({
      tablename: "MISSON"
    });
    //  console.log("mission");
  };
  render() {
    return (
      <Grid>
        <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          style={styles.dropdown}
        >
          <DropdownToggle caret>
            Choose What you would like to see
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.onClickMission}>Mission</DropdownItem>
            <DropdownItem>Project</DropdownItem>
            <DropdownItem>Works_on</DropdownItem>
            <DropdownItem>Employee</DropdownItem>
            <DropdownItem>Contractor</DropdownItem>
            <DropdownItem>Supplies</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Grid>
    );
  }
}

export default ViewPage;
