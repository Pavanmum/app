import React from 'react'
import "../less/Client.less"
import {CaretRightOutlined } from '@ant-design/icons';
import { Collapse  } from 'antd';
const { Panel } = Collapse;

const text = `To make an animated collapsible, add max-height: 0, overflow: hidden and a transition for the max-height property, to the panel class.

Then, use JavaScript to slide down the content by setting a calculated max-height, depending on the panel's height on different screen sizes`;

const Seller = () => {
  
  return (
    <>
    <div className="container">
    <h1>FAQ For Students</h1>
    <Collapse className='collapse' expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} >
    <Panel header="What kind of assignments will I be working on?
" key="1"  className='content'>
      <p>{text}</p>
    </Panel>
    <Panel header="How do I get started on a new assignment?" key="2" className='content' >
      <p>{text}</p> 
    </Panel>
    <Panel header="How much will I get paid for completing an assignment?" key="3" className='content'  >
      <p>{text}</p>
    </Panel>
    <Panel header="What is the turnaround time for completing an assignment?" key="4" className='content'>
      <p>{text}</ p>
    </Panel>
    <Panel header="How will I receive payment for completed assignments?" key="5" className='content'>
      <p>{text}</p>
    </Panel>
    <Panel header="What happens if I am unable to complete an assignment?" key="6" className='content' >
      <p>{text}</p>
    </Panel>
    <Panel header="Will I receive credit for my work?
" key="7"className='content' >
      <p>{text}</p>
    </Panel>
    <Panel header="How do I communicate with the client if I have questions or need clarification?
" key="8" className='content'>
      <p>{text}</p>
    </Panel>
    <Panel header="How do I ensure that the completed assignment is original and plagiarism-free?" key="9" className='content'>
      <p>{text}</p>
    </Panel>
    <Panel header="Will I have access to reference materials and resources for completing the assignment?" key="10" className='content' >
      <p>{text}</p>
    </Panel>
    <Panel header="Can I choose which assignments I want to work on?

" key="11" >
      <p>{text}</p>
    </Panel>
    <Panel header="How do I know if I am qualified to work on a particular assignment?
" key="12" className='content'>
      <p>{text}</p>
    </Panel>
    <Panel header="What if the client is not satisfied with my completed work?" key="13"className='content' >
      <p>{text}</p> 
    </Panel>
    <Panel header="Can I choose a specific writer to work on my assignment ?" key="14" className='content'>
      <p>{text}</p>
    </Panel>
    <Panel header="Is my personal information kept confidential?" key="15" className='content' >
      <p>{text}</p>
    </Panel>
    </Collapse>
    </div>
    </>
  )
}

export default Seller 