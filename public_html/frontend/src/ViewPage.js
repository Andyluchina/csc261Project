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
import SimpleTable from "./SimpleTable.js";
const styles = {
  dropdown: {
    marginTop: "30px"
  }
};
class ViewPage extends Component {
  // async componentWillMount() {
  //   const res = await axios.post(
  //     "http://betaweb.csug.rochester.edu/~mswanso2/view_route.php",
  //     {
  //       workid: this.props.workid,
  //       tablename: "MISSION"
  //     }
  //   );
  //   console.log(JSON.parse(res.data));
  // }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      tablename: "",
      data: ["NA"]
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onClick = event => {
    const tablename = event.target.innerHTML.toUpperCase();
    this.setState({
      tablename
    });
    //  console.log(this.state.tablename);
    // console.log(this.props.workid);
    const data = this.requestBackend(tablename);
    this.setState({
      data
    });
    console.log(data);
  };

  requestBackend = async tablename => {
    const res = await axios.post("/~mswanso2/view_route.php", {
      workid: this.props.workid,
      tablename: this.state.tablename
    });
    console.log(res.status);
    if (res.status === "rejected") {
      return [];
    }
    return res.data;
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
            <DropdownItem onClick={this.onClick}>Mission</DropdownItem>
            <DropdownItem onClick={this.onClick}>Project</DropdownItem>
            <DropdownItem onClick={this.onClick}>Works_on</DropdownItem>
            <DropdownItem onClick={this.onClick}>Employee</DropdownItem>
            <DropdownItem onClick={this.onClick}>Contractor</DropdownItem>
            <DropdownItem onClick={this.onClick}>Supplies</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <SimpleTable data={this.state.data} />
      </Grid>
    );
  }
}

export default ViewPage;
