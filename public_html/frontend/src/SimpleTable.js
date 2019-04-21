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
    console.log(row);
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
    console.log(row);
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
