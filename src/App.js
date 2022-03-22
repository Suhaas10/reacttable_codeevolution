//https://reqres.in/api/users?page=1

import axios from "axios";
import React, { useState, useEffect } from "react";
import UsersTable from "./components/UsersTable";
import Pagination from "./components/Pagination";
import CheckBoxColumnHiding from "./components/CheckBoxColumnHiding";

function App() {
  const [users, setUsers] = useState({ data: [] });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [columnHeaders, setColumnHeaders] = useState([
    {
      name: "id",
      checked: true,
    },
    {
      name: "first_name",
      checked: true,
    },
    {
      name: "last_name",
      checked: true,
    },
    {
      name: "email",
      checked: true,
    },
  ]);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://reqres.in/api/users?page=${currentPage}`
      );
      setUsers(res.data);
      setLoading(false);
    };

    fetchUsers();
  }, [currentPage]);

  //const columnHeaders = users.data[0] && Object.keys(users.data[0]);

  const filteredColumnHeaders = columnHeaders.filter(
    (columnHeader) => columnHeader.checked === true
  );

  const handleToggleAllChange = () => {
    setColumnHeaders(
      columnHeaders.map((columnHeader) => {
        return {
          name: columnHeader.name,
          checked: !columnHeader.checked,
        };
      })
    );
  };

  const handleCheckBoxToggleChange = (name) => {
    setColumnHeaders(
      columnHeaders.map((columnHeader) => {
        if (name === columnHeader.name) {
          return {
            ...columnHeader,
            checked: !columnHeader.checked,
          };
        }
        return columnHeader;
      })
    );
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="App">
      <h1>Users Table</h1>
      {users.data.length === 0 && <h2>No users</h2>}
      {users.data.length > 0 && (
        <CheckBoxColumnHiding
          columnHeaders={columnHeaders}
          handleToggleAllChange={handleToggleAllChange}
          handleCheckBoxToggleChange={handleCheckBoxToggleChange}
        ></CheckBoxColumnHiding>
      )}

      {users.data.length > 0 && (
        <UsersTable
          filteredColumnHeaders={filteredColumnHeaders}
          rowData={users.data}
          loading={loading}
        ></UsersTable>
      )}
      {users.data.length > 0 && (
        <Pagination
          usersPerPage={users.data.length}
          paginate={paginate}
        ></Pagination>
      )}
    </div>
  );
}

export default App;
