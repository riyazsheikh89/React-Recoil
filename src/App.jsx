import { Button, Card, Typography } from '@mui/material';
import {RecoilRoot, atom, useRecoilValue, useSetRecoilState} from "recoil"


function App() {

  return (
    <RecoilRoot>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: 100 }}
      >
        <Card style={{ padding: 20, width: 500 }}>
          <Typography textAlign="center" variant="h5">
            Welcome to the counter game
          </Typography>
          <br />
          <br />
          <Buttons/>
          <CountComponent/>
        </Card>
      </div>
    </RecoilRoot>
  );
}

function Buttons() {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
    <Decrease/>
    <Increase/>
  </div>
  )
}

function Increase() {
  const setCount = useSetRecoilState(countState);

  return (
    <div>
      <Button variant={"contained"} onClick={() => {
        setCount((count) => count+1)
      }}>
        Increase +
      </Button>
    </div>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(countState);

  return (
    <div>
      <Button variant={"contained"} onClick={() => {
        setCount((count) => count-1)
      }}>
        Decrease -
      </Button>
    </div>
  );
}

function CountComponent() {
  const count = useRecoilValue(countState);

  return (
    <div>
      <Typography variant="h5" textAlign={"center"}>
        {count}
      </Typography>
    </div>
  );
}

export default App;

// atom -> state
const countState = atom({
  key: 'countState',
  default: 0,
});
