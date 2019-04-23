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
import AddEmployeeForm from "./AddForms/AddEmployeeForm";
import AddMissionForm from "./AddForms/AddMissionForm";
import AddContractorForm from "./AddForms/AddContractorForm";
import AddProjectForm from "./AddForms/AddProjectForm";
import AddWorksOnForm from "./AddForms/AddWorksOnForm";
import AddSuppliesForm from "./AddForms/AddSuppliesForm";
const styles = {
  dropdown: {
    marginTop: "30px"
  }
};
class AddPage extends Component {
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
      return <AddMissionForm workid={this.props.workid} />;
    } else if (this.state.formToShow == "EMPLOYEE") {
      return <AddEmployeeForm workid={this.props.workid} />;
    } else if (this.state.formToShow == "WORKS_ON") {
      return <AddWorksOnForm workid={this.props.workid} />;
    } else if (this.state.formToShow == "PROJECT") {
      return <AddProjectForm workid={this.props.workid} />;
    } else if (this.state.formToShow == "SUPPLIES") {
      return <AddSuppliesForm workid={this.props.workid} />;
    } else if (this.state.formToShow == "CONTRACTOR") {
      return <AddContractorForm workid={this.props.workid} />;
    } else {
      return <h2>Please Select the category you want to Add</h2>;
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
            Choose What you would like to Add
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

export default AddPage;
