import { MouseEventHandler, useState } from "react";
import { Button, Pane, TextInput } from "evergreen-ui";
import { Plane } from "../types";
import { v4 } from "uuid";
import { addNewPlane } from "../firebase/database";

export const AddPlane = () => {
  const [name, setName] = useState<string>("");
  const handleAddPlane: MouseEventHandler<HTMLButtonElement> = (e) => {
    const plane: Plane = {
      id: v4(),
      name,
    };

    addNewPlane(plane);
  };

  return (
    <Pane>
      <TextInput
        placeholder="Enter plane name"
        value={name}
        marginRight={12}
        onChange={(e: any) => setName(e.target.value)}
      />

      <Button onClick={handleAddPlane}>Save</Button>
    </Pane>
  );
};
