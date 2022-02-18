import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { Detail } from "./types";

export const useFirebaseRTBOnValue = (db: any, path: string) => {
  const [data, setData] = useState<{
    planes: { [key: string]: string };
    details: { [key: string]: Detail };
  }>({ planes: {}, details: {} });
  const dbRef = ref(db, path);
  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  }, []);
  return data;
};
