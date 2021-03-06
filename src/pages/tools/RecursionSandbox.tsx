import React from "react";
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

const title = "Recursion Sandbox";
const description = "Coming soon!";

function RecursionSandbox(): JSX.Element {
  return (
    <>
      <MathNavbar />
      <ToolStart title={title} description={description} tabs={tabs} />
      <div style={{ height: "30px" }} />
    </>
  );
}

export default RecursionSandbox;
