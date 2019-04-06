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
import DeleteMissionForm from "./DeleteMissionForm";
import DeleteEmployeeForm from "./DeleteEmployeeForm";
const styles = {
  dropdown: {
    marginTop: "30px"
  }
};
class DeletePage extends Component {
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
  }

  state = {
    dropdownOpen: false,
    tablename: "",
    data: ["NA"],
    formToShow: ""
  };
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onClick = async event => {
    const tablename = event.target.innerHTML.toUpperCase();
    console.log(tablename);
    this.setState({
      formToShow: tablename
    });
    // //  console.log(this.state.tablename);
    // // console.log(this.props.workid);
    // const data = await this.requestBackend(tablename);
    // this.setState({
    //   data
    // });
    // console.log("the state of the data: ");
    // console.log(data);
  };

  renderForms = () => {
    if (this.state.formToShow == "MISSION") {
      return <DeleteMissionForm workid={this.props.workid} />;
    } else if (this.state.formToShow == "EMPLOYEE") {
      return <DeleteEmployeeForm workid={this.props.workid} />;
    } else if (this.state.formToShow == "WORKS_ON") {
      return <p>This is Delete Works_on Form</p>;
    } else if (this.state.formToShow == "PROJECT") {
      return <p>This is Delete Project Form</p>;
    } else if (this.state.formToShow == "SUPPLIES") {
      return <p>This is Delete Supplies Form</p>;
    } else if (this.state.formToShow == "CONTRACTOR") {
      return <p>This is Delete Contractor Form</p>;
    } else {
      return <h2>Please Select the category you want to delete</h2>;
    }
  };
  // requestBackend = async tablename => {
  //   console.log({
  //     workid: this.props.workid,
  //     tablename: tablename
  //   });
  //   const res = await axios.post("/~mswanso2/view_route.php", {
  //     workid: this.props.workid,
  //     tablename: tablename
  //   });
  //   console.log("immediate result after request Mission");
  //   console.log(res);
  //   if (res.data.status === "rejected") {
  //     return [];
  //   }
  //   return res.data;
  // };
  render() {
    return (
      <Grid>
        <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          style={styles.dropdown}
        >
          <DropdownToggle caret>
            Choose What you would like to Delete
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
        {this.renderForms()}
      </Grid>
    );
  }
}

export default DeletePage;
