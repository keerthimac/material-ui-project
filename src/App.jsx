import { Box, Stack } from "@mui/system";
import { RightBar } from "./components/RightBar";
import { SideBar } from "./components/SideBar";
import { FeedBar } from "./components/FeedBar";

function App() {
  return (
    <div>
      <Box>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <SideBar />
          <FeedBar />
          <RightBar />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
