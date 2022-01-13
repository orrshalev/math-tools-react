import React from "react";
import { Container, Table } from "react-bootstrap";
import MathNavbar from "../../components/MathNavbar";
import ToolStart from "../../components/ToolStart";

const tabs = [
  {
    id: 1,
    label: "Tab 1",
    description: (
      <>
        <p>Coming soon!</p>
      </>
    ),
  },
  {
    id: 2,
    label: "Tab 2",
    description: (
      <>
        <p>Coming soon!</p>
      </>
    ),
  },
  {
    id: 3,
    label: "Tab 3",
    description: (
      <>
        <p>Coming soon!</p>
      </>
    ),
  },
];

const title = "Boolean Algebra";
const description = "Coming soon!";

function BooleanAlgebra(): JSX.Element {
  return (
    <>
      <MathNavbar />
      <ToolStart title={title} description={description} tabs={tabs} />
      <div style={{ height: "30px" }} />
      <Container fluid="md">
        <Table responsive={true}>
          <thead>
            <th>{" "}</th>
            <th>Col1</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>val</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <div style={{ height: "30px" }} />
    </>
  );
}

export default BooleanAlgebra;
