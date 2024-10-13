import { Container, styled } from "@mui/material"


const HomeContainer = styled(Container)(() => ({
  margin: "1rem auto",
 
  
}));


function Home() {
  return (
    <HomeContainer maxWidth="xl" className="container">
      <h1>Bienvenido a la app de juegos</h1>
    </HomeContainer>
  )
}

export default Home