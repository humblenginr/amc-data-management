import { Button, majorScale, Pane } from "evergreen-ui"

export const WelcomeScreen = ({ setPage }: { setPage: any }) => {

  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
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
        <Button marginBottom={majorScale(4)} onClick={() => setPage("add")}>Add Item</Button>
        <Button marginBottom={majorScale(4)} onClick={() => setPage("edit")}>Edit Item</Button>
        <Button onClick={() => setPage("view")}>View</Button>
      </Pane>
    </Pane>)
}

