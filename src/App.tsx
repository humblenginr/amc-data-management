import React, { useEffect, useState } from "react";
import {
  Button,
  Heading,
  majorScale,
  Pane,
} from "evergreen-ui";
import { AddPlane } from "./components/AddPlane";
import { getDatabase } from "@firebase/database";
import { firebaseApp } from "./firebase/config";
import { AddDetail } from "./components/AddNewDetail";
import { DisplayTable } from "./components/DisplayTable";
import { useFirebaseRTBOnValue } from "./hooks";
import { UpdateValue } from "./components/UpdateValue";
import { WelcomeScreen } from "./WelcomeScreen";
import { If } from "./components/if";
import firebaseui from "firebaseui"
import firebase from "firebase"


type DPlanes = DPlane[];

type DPlane = {
  name: string;
  id: string;
  [key: string]: string;
};


const db = getDatabase(firebaseApp);
let ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    // List of OAuth providers supported.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  // Other config options...
});


function App() {

  const data = useFirebaseRTBOnValue(db, "/");
  const [columns, setColums] = useState<string[]>([]);
  const [planes, setPlanes] = useState<DPlanes>([]);
  const [page, setPage] = useState<'welcome' | 'add' | 'edit' | 'view'>('welcome')


  useEffect(() => {
    if (data) {
      if (data.details) {
        setColums(Object.keys(data.details));
      }
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      if (data.planes && data.details) {
        setPlanes(
          Object.values(data.planes)
            .map((plane, idx) => {
              return {
                name: plane,
                id: Object.keys(data.planes)[idx],
              };
            })
            .map((plane) => {
              columns.forEach((col) => {
                if (data.details[col].values)
                  // @ts-ignore
                  plane[col] = data.details[col].values[plane.id];
              });
              return plane;
            })
        );
      }
    }
  }, [data, columns]);


  if (page === "welcome")
    return <WelcomeScreen setPage={setPage} />

  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100vw"
    >
      <Pane
        display="flex"
        padding={majorScale(4)}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        height="100%"
        width="80%"
      // background="tint2"
      >
        <Button onClick={() => setPage('welcome')} marginBottom={majorScale(3)}>Back</Button>
        <If condition={page === "view"}>
          <DisplayTable columns={columns} planes={planes} />
        </If>

        <If condition={page === "add"}>
          <>
            <Heading
              size={600}
              marginTop={majorScale(2)}
              marginBottom={majorScale(2)}
            >
              Add Plane
            </Heading>
            <AddPlane />
            <Heading size={600} marginTop={majorScale(4)}>
              Add Column
            </Heading>
            <AddDetail />
          </>
        </If>


        <If condition={page === "edit"}>
          <>
            <Heading size={600} marginTop={majorScale(4)}>
              Update Value
            </Heading>
            <UpdateValue data={data} columns={columns} />
          </>
        </If>
      </Pane>
    </Pane >
  );
}

export default App;
