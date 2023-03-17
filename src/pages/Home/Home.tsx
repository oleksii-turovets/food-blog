import { Typography } from "@mui/material"
import { Container } from "@mui/system"
import HomeCategories from "components/HomeCategories/HomeCategories"
import HomeSlider from "components/HomeSlider/HomeSlider"
import PageContent from "components/PageContent/PageContent"

type Props = {}
const Home = (props: Props) => {
  return (
      <>
          <Typography variant="h1" component="h3">
              Home
          </Typography>
          <HomeSlider />
          <Container
              component="div"
              sx={{
                  maxWidth: { xs: 'none', md: 940, lg: 1170 },
                  height: 1,
                  paddingLeft:{xs: 15, md: 0},
                  paddingRight:{xs: 15, md: 0},
              }}
              disableGutters={true}
          >
              <HomeCategories />
              <PageContent/>
          </Container>
      </>
  )
}
export default Home