import { MouseEventHandler, useState } from "react";
import { Button, majorScale, Pane, TextInput, toaster } from "evergreen-ui";
import { Detail } from "../types";
import { addNewDetailField } from "../firebase/database";

export const AddDetail = () => {
  const [detail, setDetail] = useState<Detail>({
    name: "",
    description: "",
    unit: "",
  });
  const handleAddDetail: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (detail.name && detail.description && detail.unit) {
      addNewDetailField(detail);
      return;
    }
    toaster.warning("All fileds are required ");
  };

  return (
    <Pane display="flex" flexDirection="column">
      <TextInput
        placeholder="Enter detail name"
        value={detail?.name}
        required
        marginBottom={majorScale(2)}
        marginTop={majorScale(2)}
        onChange={(e: any) => setDetail({ ...detail, name: e.target.value })}
      />
      <TextInput
        placeholder="Enter detail description"
        value={detail?.description}
        required
        marginBottom={majorScale(2)}
        onChange={(e: any) =>
          setDetail({ ...detail, description: e.target.value })
        }
      />
      <TextInput
        placeholder="Enter detail unit"
        required
        value={detail?.unit}
        marginBottom={majorScale(2)}
        onChange={(e: any) => setDetail({ ...detail, unit: e.target.value })}
      />

      <Button onClick={handleAddDetail}>Add</Button>
    </Pane>
  );
};
