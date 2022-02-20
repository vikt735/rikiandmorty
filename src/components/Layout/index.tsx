import Header from "components/Header";
import { Outlet} from "react-router-dom";
import { Container } from "@mui/material";
const index = () => {
  return (
    <>
      <Header />
      <Container sx={{mt: 8, mb:8}}>
          <Outlet />
      </Container>
    </>
  )
}

export default index;
