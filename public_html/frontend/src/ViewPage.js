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
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FilledInput from "@material-ui/core/FilledInput";
const styles = {
  dropdown: {
    marginTop: "30px"
  }
};
class ViewPage extends Component {
  async componentWillMount() {
    const res = await axios.post("/~mswanso2/schema_route.php");
    console.log(res.data);

    this.setState({
      schema: res.data
    });
  }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      tablename: "",
      data: ["NA"],
      attributes: [],
      initialData: {},
      schema: {},
      showMassAssign: "showMassAssign",
      MassAssignPid: "",
      AssignedEmployees: []
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
    var attr = this.state.schema[this.state.tablename];
    var initialData = {};
    attr.forEach(function(element) {
      initialData[element] = "";
    });
    this.setState({
      attributes: attr,
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
  onClickMassAssign = async () => {
    this.setState(prevState => {
      if (prevState.showMassAssign === "showMassAssign") {
        return {
          showMassAssign: "hideMassAssign"
        };
      } else {
        return {
          showMassAssign: "showMassAssign"
        };
      }
    });
    if (this.state.showMassAssign === "hideMassAssign") {
      const res = await axios.post("/~mswanso2/search_route.php", {
        tablename: "EMPLOYEE",
        workid: this.props.workid,
        payload: this.state.initialData,
        assignable: true
      });
      this.setState({
        data: res.data
      });
    } else {
      const res = await this.requestBackend("EMPLOYEE");
      this.setState({
        data: res.data
      });
    }
  };

  onClickSubmitMassAssign = () => {};
  handleChangeMassAssignPid = event => {
    this.setState({ MassAssignPid: event.target.value });
  };
  renderAssignableForm = () => {
    if (this.state.showMassAssign === "showMassAssign") {
      return <Grid />;
    } else {
      return (
        <Grid>
          <FormControl variant="filled">
            <InputLabel htmlFor="component-filled">Project Id</InputLabel>
            <FilledInput
              id="component-filled"
              value={this.state.MassAssignPid}
              onChange={this.handleChangeMassAssignPid}
            />
          </FormControl>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.onClickSubmitMassAssign}
          >
            Submit
          </Button>
        </Grid>
      );
    }
  };
  renderMassAssign = () => {
    if (this.state.tablename === "EMPLOYEE") {
      return (
        <Grid>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.onClickMassAssign}
          >
            {this.state.showMassAssign}
          </Button>
          {this.renderAssignableForm()}
        </Grid>
      );
    }
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
        <br />
        {this.renderMassAssign()}
        <SimpleTable
          data={this.state.data}
          workid={this.props.workid}
          tableName={this.state.tablename}
          onUpdateData={this.onUpdateData}
          showMassAssign={this.state.showMassAssign}
          AssignedEmployees={this.state.AssignedEmployees}
        />
      </Grid>
    );
  }
}

export default ViewPage;
