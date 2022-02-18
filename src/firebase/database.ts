import { toaster } from "evergreen-ui";
import { getDatabase, ref, set, push } from "firebase/database";
import { Detail, Plane } from "../types";
import { firebaseApp } from "./config";

const db = getDatabase(firebaseApp);
export const addNewPlane = (plane: Plane) => {
  const newPlaneRef = ref(db, "planes/" + plane.id);
  set(newPlaneRef, plane.name)
    .then(() => toaster.success("Plane has been added successfully"))
    .catch((e) => toaster.danger("Something went wrong"));
};

export const addNewDetailField = (detail: Detail) => {
  const newDetailRef = ref(db, `details/${detail.name}`);
  set(newDetailRef, detail)
    .then(() => toaster.success("Detail Field has been added successfully"))
    .catch((e) => toaster.danger("Something went wrong"));
};

export const addDetailValues = (
  detailName: string,
  value: string,
  planeId: string | number
) => {
  const valueRef = ref(db, `details/${detailName}/values/${planeId}`);
  set(valueRef, value)
    .then(() => toaster.success("Value has been updated successfully"))
    .catch((e) => toaster.danger("Something went wrong"));
};
