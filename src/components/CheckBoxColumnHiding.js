import React from "react";
import { v4 as uuid } from "uuid";

const CheckBoxColumnHiding = ({
  columnHeaders,
  handleToggleAllChange,
  handleCheckBoxToggleChange,
}) => {
  return (
    <div style={{ display: "flex" }}>
      {/* <div>
        {" "}
        <label>
          <input
            type="checkbox"
            checked={true}
            onChange={handleToggleAllChange}
          />
          Toggle All
        </label>
      </div> */}

      {columnHeaders.map((columnHeader) => (
        <div key={uuid()}>
          <label>
            <input
              type="checkbox"
              checked={columnHeader.checked}
              onChange={() => handleCheckBoxToggleChange(columnHeader.name)}
            />
            {columnHeader.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxColumnHiding;
