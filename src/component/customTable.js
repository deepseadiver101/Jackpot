import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Chip,
  Checkbox,
  Avatar,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomTable(props) {
  const classes = useStyles();
  const head = [
    "Scenario Name",
    "Scenario Description",
    "Scenario Version",
    "Jobs",
    "Last Modified On",
    "Validate",
  ];
  const rows = [
    {
      index: 1,
      scenarioName: "scenario1",
      scenarioDescription: "scenarioDescription1",
      scenarioVersion: "1",
      jobs: ["job1", "job2"],
      lastModifiedDate: "2020-03-20 09:32:55.449",
      validated: true,
    },
    {
      index: 2,
      scenarioName: "scenario2",
      scenarioDescription: "scenarioDescription2",
      scenarioVersion: "1",
      jobs: ["job3"],
      lastModifiedDate: "2020-03-10 16:17:55.449",
      validated: true,
    },
    {
      index: 3,
      scenarioName: "scenario3",
      scenarioDescription: "scenarioDescription3",
      scenarioVersion: "4",
      jobs: ["job1", "job4"],
      lastModifiedDate: "2020-02-05 10:38:55.449",
      validated: false,
    },
    {
      index: 4,
      scenarioName: "scenario4",
      scenarioDescription: "scenarioDescription4",
      scenarioVersion: "2",
      jobs: ["job1", "job3job1", "job3", "job1", "job3"],
      lastModifiedDate: "2019-10-03 18:23:55.449",
      validated: true,
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center"></StyledTableCell>
            {head.map((key) => (
              <StyledTableCell align="center">{key}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          
          {rows.map((row) => (
            <StyledTableRow key={row.index}>
              <StyledTableCell align="center">
                <FormControlLabel
                  value={row.index}
                  control={<Checkbox color="primary" />}
                />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                {row.scenarioName}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.scenarioDescription}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.scenarioVersion}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.jobs.map((k) => (
                  <Chip
                    variant="outlined"
                    label={k}
                    style={{ margin: 2 }}
                    size="small"
                    color="secondary"
                    avatar={<Avatar>J</Avatar>}
                  />
                ))}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.lastModifiedDate}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.validated ? (
                  <div
                    style={{
                      backgroundColor: "blue",
                      height: "15px",
                      width: "15px",
                    }}
                  ></div>
                ) : (
                  <div
                    style={{
                      backgroundColor: "red",
                      height: "15px",
                      width: "15px",
                    }}
                  ></div>
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}
