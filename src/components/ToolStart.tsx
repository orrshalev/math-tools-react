import { Container, Accordion } from "react-bootstrap";
import React from "react";

type Tab = {
  id: number;
  label: string;
  description: JSX.Element;
};

type ToolProps = {
  title: string;
  description: string;
  tabs: Array<Tab>;
};

function ToolStart(props: ToolProps): JSX.Element {
  // const {id, label, description} = props;
  // let tabs = [{id, label, description}]
  return (
    <>
      <Container fluid="sm">
        <div style={{ height: "20px" }} />
        <h1>{props.title}</h1>
        <div style={{ height: "10px" }} />
        <p className="lead">{props.description}</p>
        <div style={{ height: "10px" }} />
      </Container>
      <Container fluid="md">
        <Accordion>
          {props.tabs.map((tab) => (
            <Accordion.Item eventKey={tab.id.toString()}>
              <Accordion.Header>{tab.label}</Accordion.Header>
              <Accordion.Body>{tab.description}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </>
  );
}

export default ToolStart;
