import React from "react";
import Jumbotron from "./components/jumbotron";
import JumboData from './fixtures/jumbo';

console.log(JumboData)
const App = () => {
  return (
    <Jumbotron.Container>
      {JumboData.map(item => {
        return (
          <Jumbotron key = {item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image}l alt={item.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        );
      })}
    </Jumbotron.Container>
  )
}

export default App;
