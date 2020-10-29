import React from "react";
import Jumbotron from "../components/jumbotron/index";
import JumboData from '../fixtures/jumbo';

export const JumbotronContainer = () => {
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
