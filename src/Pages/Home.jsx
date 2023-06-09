import React from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

const data = ['Item 1', 'Item 2', 'Item 3',];

const Home = () => {
  const renderPanelHeader = (panel, index) => {
    const serialNumber = index + 1;
    return (
      <div>
        <span>{`Item ${serialNumber}`}</span>
        {panel.header}
      </div>
    );
  };

  return (
    <Collapse>
      {data.map((item, index) => (
        <Panel
          key={index}
          header={item}
          renderExpandIcon={null}
          // header={renderPanelHeader({ header: item }, index)}
        >
          {/* Content of each panel */}
        </Panel>
      ))}
    </Collapse>
  );
};
export default Home
