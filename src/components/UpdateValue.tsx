import {
  Button,
  majorScale,
  SelectField,
  TextInputField,
  toaster,
} from "evergreen-ui";
import { useState } from "react";
import { v4 } from "uuid";
import { addDetailValues } from "../firebase/database";

// @ts-ignore
export const UpdateValue = ({ data, columns }) => {
  const [selectedPlane, setSelectedPlane] = useState<string>(
    Object.keys(data.planes)[0]
  );
  const [selectedDetail, setSelectedDetail] = useState<string>(columns[0]);
  const [value, setValue] = useState<string>();

  const handleValueUpdate = () => {
    if (selectedPlane && selectedDetail && value) {
      addDetailValues(selectedDetail, value, selectedPlane);
      return;
    }
    toaster.warning("All fields must be filled!");
  };
  console.log({ value, selectedPlane, selectedDetail });

  return (
    <>
      <SelectField
        label="Plane"
        width="40%"
        value={selectedPlane}
        onChange={(e) => setSelectedPlane(e.target.value)}
      >
        {data.planes &&
          Object.keys(data.planes).map((planeId) => (
            <option key={v4()} value={planeId}>
              {data.planes[planeId]}
            </option>
          ))}
      </SelectField>

      <SelectField
        label="DetailsFields"
        onChange={(e) => setSelectedDetail(e.target.value)}
        value={selectedDetail}
        width="40%"
        marginTop={majorScale(2)}
      >
        {columns &&
          columns.map((col: any, idx: number) => (
            <option key={v4()} value={col}>
              {col}
            </option>
          ))}
      </SelectField>

      <TextInputField
        marginTop={majorScale(2)}
        width="40%"
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        placeholder="Value"
      />

      <Button marginTop={majorScale(2)} onClick={handleValueUpdate}>
        Update
      </Button>
    </>
  );
};
