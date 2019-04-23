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
import BasicSearchForm from "./BasicSearchForm";
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
      data: ["NA"],
      attributes: [],
      initialData: {}
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onClick = async event => {
    const tablename = event.target.innerHTML.toUpperCase();
    console.log(tablename);
    this.setState({
      tablename: tablename
    });
    //  console.log(this.state.tablename);
    // console.log(this.props.workid);
    const data = await this.requestBackend(tablename);
    this.setState({
      data
    });

    //getting attributes
    console.log({
      tablename: this.state.tablename
    });
    const res = await axios.post("/~mswanso2/ATR_route.php", {
      tablename: this.state.tablename
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
      initialData
    });
    console.log(this.state);
  };

  onUpdateData = async tableName => {
    //  console.log(this.state.tablename);
    // console.log(this.props.workid);
    const data = await this.requestBackend(tableName);
    this.setState({
      data
    });
    console.log(data);
  };

  requestBackend = async tablename => {
    console.log({
      workid: this.props.workid,
      tablename: tablename
    });
    const res = await axios.post("/~mswanso2/view_route.php", {
      workid: this.props.workid,
      tablename: tablename
    });
    console.log("immediate result after request Mission");
    console.log(res);
    if (res.data.status === "rejected") {
      return [];
    }
    return res.data;
  };
  setData = data => {
    this.setState({
      initialData: data
    });
  };
  updateSearch = data => {
    this.setState({ data });
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
        <BasicSearchForm
          tablename={this.state.tablename}
          workid={this.props.workid}
          updateSearch={this.updateSearch}
          attributes={this.state.attributes}
          initialData={this.state.initialData}
          setData={this.setData}
        />
        <SimpleTable
          data={this.state.data}
          workid={this.props.workid}
          tableName={this.state.tablename}
          onUpdateData={this.onUpdateData}
        />
      </Grid>
    );
  }
}

export default ViewPage;
