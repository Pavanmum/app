import React from "react";
import "../less/Client.less";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
const { Panel } = Collapse;

const text = `To make an animated collapsible, add max-height: 0, overflow: hidden and a transition for the max-height property, to the panel class.

Then, use JavaScript to slide down the content by setting a calculated max-height, depending on the panel's height on different screen sizes`;

const Client = () => {
  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.colorBgLayout,
  };

  return (
    <>
      <div className="container">
        <h1>FAQ For Clients</h1>
        <Collapse
          bordered={false}
          className="collapse"
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
        >
          <Panel
            style={panelStyle}
            header="What kind of assignments can you do?
"
            key="1"
          >
            <p>{text}</p>
          </Panel>
          <Panel header="How do I place an order?" key="2" style={panelStyle}>
            <p>{text}</p>
          </Panel>
          <Panel
            header="What is the turnaround time for an assignment?"
            key="3"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel header="How do I pay for my order?" key="4" style={panelStyle}>
            <p>{text}</p>
          </Panel>
          <Panel
            header="Can I communicate with the writer who is working on my  assignment?"
            key="5"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="Is my personal information kept confidential?"
            key="6"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="What if I am not satisfied with the completed assignmen t?"
            key="7"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="What is your refund policy?"
            key="8"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="Are your writers qualified to handle my assignment?"
            key="9"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="How do you ensure that the assignments are plagiarism-f ree?"
            key="10"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="How do you handle revisions?
"
            key="11"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="Can y ou complete an assignment on short notice?"
            key="12"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel header="Do yo u offer discounts?" key="13" style={panelStyle}>
            <p>{text}</p>
          </Panel>
          <Panel
            header="Can I choose a specific writer to work on my assignment ?"
            key="14"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="How do I track the progress of my assignment?"
            key="15"
            style={panelStyle}
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default Client;
