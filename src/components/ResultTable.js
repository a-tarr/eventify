import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import styled from 'styled-components';

const EventifyTable = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
`

class ResultTable extends Component {
  render() {
    return (
      <EventifyTable>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow >
              <TableHeaderColumn>Barcode</TableHeaderColumn>
              <TableHeaderColumn>Pin</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} stripedRows>
            {this.props.codesAndPins.map((row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.barcode}</TableRowColumn>
                <TableRowColumn>{row.pin}</TableRowColumn>
              </TableRow>
          ))}
          </TableBody>
        </Table>
      </EventifyTable>
    );
  }
}

export default ResultTable;