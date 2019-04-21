import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  button: {
    marginRight: 5
  }
});

class SimpleTable extends React.Component {
  state = {
    open: false,
    pre: {},
    cur: {}
  };
  renderElements = row => {
    return row.map(ele => {
      return <TableCell align="right">{ele}</TableCell>;
    });
  };

  renderButtons = row => {
    return (
      <TableCell align="right">
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: 5 }}
          onClick={() => this.onClickUpdate(row)}
        >
          Update
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => this.onClickDelete(row)}
        >
          Delete
        </Button>
      </TableCell>
    );
  };

  onClickDelete = async row => {
    console.log({
      workid: this.props.workid,
      tableName: this.props.tableName,
      payload: row
    });
    const res = await axios.post("/~mswanso2/DEL_route.php", {
      workid: this.props.workid,
      tableName: this.props.tableName,
      payload: row
    });
    console.log(res);
    alert(res.data);
    this.props.onUpdateData(this.props.tableName);
  };
  onClickUpdate = row => {
    this.setState({ open: true, pre: row, cur: row });
  };

  handleClose = () => {
    this.setState({ open: false, pre: {}, cur: {} });
  };
  submitUpdate = () => {
    this.setState({ open: false });
    //requestBackend
  };

  render() {
    const { classes } = this.props;
    const data = this.props.data;
    if (data[0] === "NA") {
      return (
        <p>
          There is no data for you to view given your Administrative privilege
        </p>
      );
    }
    const attributes = Object.keys(data[0]);
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {attributes.map(attr => {
                  return <TableCell align="right">{attr}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => {
                return (
                  <TableRow>
                    {this.renderElements(Object.values(row))}
                    {this.renderButtons(row)}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Update</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Update you things here. Click Cancel if you want to quit
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.submitUpdate} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);

// <TableCell>Dessert (100g serving)</TableCell>
// <TableCell align="right">Calories</TableCell>
// <TableCell align="right">Fat (g)</TableCell>
// <TableCell align="right">Carbs (g)</TableCell>
// <TableCell align="right">Protein (g)</TableCell>

// <TableRow>
//   <TableCell align="right">{row.calories}</TableCell>
//   <TableCell align="right">{row.fat}</TableCell>
//   <TableCell align="right">{row.carbs}</TableCell>
//   <TableCell align="right">{row.protein}</TableCell>
// </TableRow>;
