import React from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";
import { Dictionary } from "typescript-collections";
import MathNavbar from "../../components/MathNavbar";
import ToolStart from "../../components/ToolStart";

/**
 * Information to fill accordion tabs
 */
type Tab = {
  id: number;
  label: string;
  description: JSX.Element;
};

const tabs: Tab[] = [
  {
    id: 0,
    label: "Learn",
    description:
  <>
    <p>
      A base (also referred to as the radix) number is the number of unique digits
      used to represent a number. In the base 10 system (what we will refer to as
      the ‘anchor’ base!), we represent all numbers using digits 0-9. We also think
      of numbers that we see as groups of 10’s. For example, the number 321 (which
      can also be denoted as (321)<sub>10</sub> to iasize that it is in base
      10) has a single count of 1, two counts of 10’s, and 3 counts of 100’s (100
      in itself being 10 counts of 10!). While this seems very obvious, it is usually
      agreed upon that there is not necessarily any strong reason why we should
      group numbers by 10’s. In fact, it seems that the biggest reason why we have
      agreed to use base 10 as the ‘anchor’ is because it corresponds to us counting
      on our fingers!
    </p>
    <p>
      Consider the same example, 321, in base 5. Base 5 would be a number system
      in which the used digits are 0-4 and in which we count in groups of 5’s. Thus
      , we would represent the number as (321)<sub>5</sub> and understand it to
      be a single count of 1, two counts of 5’s, and 3 counts of 25’s (25 in itself
      being 5 counts of 5’s!). We can add those counts 1 + 5 + 5 + 25 + 25 + 25
      to get the equivelent number in base 10, 86. This can be extended to create
      a general algorithm for understanding any numbering system.
    </p>
    <p>
      By convention, we use the letters a-z to represent the digits 11-35 respectively
      . For example, ‘c’ would represent a count of 13. However, try to think as
      a-z as symbols just like 0-9 which could stand for anything. If in a different
      world the ‘anchor’ system would have been base 12, for example, it is easy
      to imagine that we would have added symbols outside of the alphabet to represent
      the counts of 11 and 12.
    </p>
    <p>
      Why should we care about different numbering systems? For one, it helps us
      think of what numbers are in a better way. We often implicitly think of time
      to be in base 60 as we count seconds and minutes in those groups. If we want
      to make an application that relies on timing, it could be very helpful to
      use to have a solid grasp of how a base 60 system ‘works’ and what implications
      it has for simple arithmetic.
    </p>
    <p>
      More importantly, however, in computing we use the base 2 system, also referred
      to as the binary system, in order to represent all the information that a
      computer holds. After all, a computer (very simplistically) can be seen as
      many switches that are either on or off, so representing on or off as 1 or
      0 comes naturally. Well, naturally to the computer, but for most humans seeing
      the number (1001)<sub>2</sub> does not make much sense, and even people very
      aware of how the binary number system works may have to convert to base 10
      in order to understand what the number represents. However, with a holistic
      approach to number systems, we can find better ways to view and understand
      the binary system that govern how every computer works.
    </p>
    <p>
      In the examples section, we use the base systems, 2, 8, and 16 and show why
      these number systems naturally work together and why they are all so commonly
      used in computing.
    </p>
  </>,

      },
  {
    id: 1,
    label: "Examples",
    description:
  <>

    <p>
      The general algorithm for getting a number from base <i>X</i> to base <i>Y</i> is
      to first convert is to first convert base <i>X</i> to base 10 using a division
      table and then convert from base 10 to base <i>Y</i> using simple multiplication
      and addition. It is important to note that translating into base 10 is simply for
      convenience purposes; doing arithmetic operations in our ‘anchor’ base is much simpler
      for us. <i>Example 4</i> shows an alternative conversion that does not rely
      on converting to base 10 first and which is commonly used in computing.
    </p>
    <h5>Example 1</h5>
    <p>
      Let’s say we want to convert the number 123 to base 16. To do so, since 258 is in
      base 10, we can construct a table where we will continuously divide 258 by 16 (the
      base we want to convert to), keep track of the quotient and remainder, and stop
      dividing once the quotient equals 0. The table would looks as following:
    </p>
    <Table responsive>
      <thead>
        <tr>
          <th>Division</th>
          <th>Quotient</th>
          <th>Remainder</th>
          <th>Digit placement</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>258/16</th>
          <th>16</th>
          <th>2</th>
          <th>0</th>
        </tr>
        <tr>
          <th>16/16</th>
          <th>1</th>
          <th>0</th>
          <th>1</th>
        </tr>
        <tr>
          <th>1/16</th>
          <th>0</th>
          <th>1</th>
          <th>2</th>
        </tr>
      </tbody>
    </Table>
    <p>
      Now we can note the remainder and the digit placement columns to easily come up
      with the new number. If we use the digit placement system …210 and replace the value
      in each position with the remainder we get 102. Thus, (258)<sub>10</sub> = (102)<sub>16</sub>.
    </p>

    <h5>Example 2</h5>

    <p>
      Let’s say that we now want to convert (102)<sub>16</sub> to base 10. We can
      expect the answer to be 258 because of <i>Example 1</i>, but how do we get there
      ? Remember, bases are all about grouping counts. Earlier, we described a number
      such as (102)<sub>16</sub> to be 2 single counts, 0 counts of 16’s, and 1 count
      of 256 (which is 16 counts of 16’s). This idea can be expressed numerically as:

    </p>
    <p>
      (1 x 16<sup>2</sup>) + (0 x 16<sup>1</sup>) + 2
    </p>
    <p>
      When we calculate this we get 258, our answer! Note that for generalization
      purposes we will often really write the last number as being multiplied by the base
      to the power of 0, which really just is 1:
    </p>
    <p>
      (1 x 16<sup>2</sup>) + (0 x 16<sup>1</sup>) + (2 x 16<sup>0</sup>)
    </p>
    <h5>Example 3</h5>
    <p>
      Let’s say we want to convert (102)<sub>16</sub> to base 2 (binary). Remember
      that our general algorithm says that we need to get from the first base to base
      10 and then from base 10 to the end base. We have already done in <i>Example 2</i>
      the translation of (102)<sub>16</sub> to base 10, so our first step is already
      done!
    </p>
    <p>
      Our second step is to get from our answer, 258, to base 2, which once again
      requires a table. The table will be as following:
    </p>
    <Table responsive>
      <thead>
        <tr>
          <th>Division</th>
          <th>Quotient</th>
          <th>Remainder</th>
          <th>Digit placement</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>258/2</th>
          <th>129</th>
          <th>0</th>
          <th>0</th>
        </tr>
        <tr>
          <th>129/2</th>
          <th>64</th>
          <th>1</th>
          <th>1</th>
        </tr>
        <tr>
          <th>64/2</th>
          <th>32</th>
          <th>0</th>
          <th>2</th>
        </tr>
        <tr>
          <th>32/2</th>
          <th>16</th>
          <th>0</th>
          <th>3</th>
        </tr>
        <tr>
          <th>16/2</th>
          <th>8</th>
          <th>0</th>
          <th>4</th>
        </tr>
        <tr>
          <th>8/2</th>
          <th>4</th>
          <th>0</th>
          <th>5</th>
        </tr>
        <tr>
          <th>4/2</th>
          <th>2</th>
          <th>0</th>
          <th>6</th>
        </tr>
        <tr>
          <th>2/2</th>
          <th>1</th>
          <th>0</th>
          <th>7</th>
        </tr>
        <tr>
          <th>1/2</th>
          <th>0</th>
          <th>1</th>
          <th>8</th>
        </tr>
      </tbody>
    </Table>
    <p>
      Thus, using the table we get our answer, (100000010)<sub>2</sub>.
    </p>
    <h5>Example 4</h5>
    <p>
      Remember that our algorithm is for convenience and that if there is a more
      convenient algorithm to convert from a specific base to another, that can be very
      useful. We do know that there is a very simple way to convert from base 16 to base
      2 and back.
    </p>
    <p>
      We start by considering each digit in base 16 as represented as the equivalent
      4 digits in base 2. For example, (2)<sub>16</sub> = (10)<sub>2</sub>, so we can
      represent 2 in base 16 as 0010 in base 10. We build onto this for all digits. Recall
      that a-z are used to denote digits greater than 9, so for example ‘c’ denotes a
      count of 12. (12)<sub>16</sub> = (1100)<sub>2</sub>, so those digits correspond.
      If we want to convert from base 16 to base 2, we can simply replace each digit
      by the corresponding base 2 digits.
    </p>

    <p>
      For example, if we take each digit in (102)<sub>16</sub>, we can get 1 = 0001
      , 0 = 0000, 2 = 0010. Just connect these to get (000100000010)<sub>2</sub>, which
      you can notice is the same answer we got in <i>Example 3</i>! The trailing 0’s are
      of course, as in base 10 system, not counted.

    </p>

    <p>
      Likewise, to convert from base 2 to base 16 we simply can group every 4 digits
      and replace them with the base 16 representation. If we have (100000010)<sub>2</sub>,
      we group (0001)(0000)(0010) and convert each grouping to base 16 to get (102
      )<sub>16</sub>! Note that we added trailing zeros to ensure that each grouping is
      of four digits.
    </p>
  </>,
  },
];

const title = "Number Base Converter";
const description =
  "This tool will let help you convert numbers from one base to another, for example decimal to binary.";

interface Props {}

type State = {
  input: string;
  output: string;
  startBase: number;
  endBase: number;
};

const values = ["0", "1", "2", "3", "4", "5", "6", "7", "8",
"9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
"Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
   15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

const numberTable : Dictionary<string, number> = new Dictionary();

for (let i = 0; i < numbers.length; i++) {
  numberTable.setValue(values[i], numbers[i]);
}

class NumberBaseConverter extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { input: "", output: "", startBase: 2, endBase: 2 };
  }

  convert(input : string) : void {
    this.setState((state, props) => {
    const newexpr : string = parseInt(input, state.startBase).toString(state.endBase);
    return { input, output: newexpr };
    });
  }

  displayOutput() : JSX.Element {
    if (this.state.output === "NaN") {
      return (<></>);
    }
    return (
      <>
        <p>{this.state.output}</p>
      </>
    );
  }

  render(): JSX.Element {
    return (
      <>
        <MathNavbar />
        <ToolStart title={title} description={description} tabs={tabs} />
        <div style={{ height: "30px" }} />
        <Container fluid="md">
          <Row className="gy-3" style={{ margin: "auto" }}>
            <Col sm="auto" style={{ maxWidth: "60px", marginLeft: "10px" }}>
              <p>Starting Base</p>
            </Col>
            <Col sm="auto" style={{ maxWidth: "200px", marginLeft: "10px" }}>
              <Form.Select onChange={(e) =>
                this.setState((state, props) => {
                  const startBase = parseInt(e.target.value, 10);
                  this.convert(state.input);
                  return { startBase };
                })}
              >
                <option>2 (binary)</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8 (octal)</option>
                <option>9</option>
                <option>10 (decimal)</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16 (hex)</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
                <option>32</option>
                <option>33</option>
                <option>34</option>
                <option>35</option>
                <option>36</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="gy-3" style={{ margin: "auto" }}>
            <Col sm="auto" style={{ maxWidth: "60px", marginLeft: "10px" }}>
              <p>Ending Base</p>
            </Col>
            <Col sm="auto" style={{ maxWidth: "200px", marginLeft: "10px" }}>
              <Form.Select onChange={(e) =>
                this.setState((state, props) => {
                  const endBase = parseInt(e.target.value, 10);
                  this.convert(state.input);
                  return { endBase };
                })}
              >
                <option>2 (binary)</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8 (octal)</option>
                <option>9</option>
                <option>10 (decimal)</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16 (hex)</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
                <option>32</option>
                <option>33</option>
                <option>34</option>
                <option>35</option>
                <option>36</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="gy-3" style={{ margin: "auto" }}>
            <Col sm="auto" style={{ maxWidth: "60px", marginLeft: "10px" }}>
              <p>Input</p>
            </Col>
            <Col
              sm="auto"
              style={{
                maxWidth: "9%",
                marginTop: "10px",
                marginLeft: "30px",
                fontSize: "x-large",
              }}
            />
            <Col lg="auto" style={{ width: "60%", marginTop: "13px" }}>
              <Form.Control
                type="text"
                placeholder="Input Expression"
                onChange={(e) => this.convert(e.target.value)}
              />
            </Col>
          </Row>
          <div style={{ height: "30px" }} />
          {this.displayOutput()}
          <div style={{ height: "60px" }} />
        </Container>
      </>
    );
  }
}

export default NumberBaseConverter;
