import React from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const UsersTable = ({ filteredColumnHeaders, loading, rowData }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Styles>
      {" "}
      <table>
        <thead>
          <tr>
            {filteredColumnHeaders.map((columnHeader) => (
              <th key={uuid()}>{columnHeader.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((user) => {
            return (
              <tr key={uuid()}>
                {filteredColumnHeaders.some(
                  (columnHeader) => columnHeader.name === "id"
                ) && <td>{user.id}</td>}
                {filteredColumnHeaders.some(
                  (columnHeader) => columnHeader.name === "first_name"
                ) && <td>{user.first_name}</td>}
                {filteredColumnHeaders.some(
                  (columnHeader) => columnHeader.name === "last_name"
                ) && <td>{user.last_name}</td>}
                {filteredColumnHeaders.some(
                  (columnHeader) => columnHeader.name === "email"
                ) && <td>{user.email}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
};

export default UsersTable;
