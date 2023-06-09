import React from 'react'
import "../less/Client.less"
import {PlusCircleOutlined,CaretRightOutlined } from '@ant-design/icons';
import { Collapse,theme  } from 'antd';
const { Panel } = Collapse;

const text = `To make an animated collapsible, add max-height: 0, overflow: hidden and a transition for the max-height property, to the panel class.

Then, use JavaScript to slide down the content by setting a calculated max-height, depending on the panel's height on different screen sizes`;

const Seller = () => {
  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.colorBgLayout,

  };

  const data = [
    {
      "id" : "01",
      "header" : "What kind of assignments will i be working on ?",
      "text" : "As an assignment writer, you will have the opportunity to work on various types of assignments, including essays, research papers, case studies, lab reports, literature reviews, and more. The assignments will cover a wide range of subjects and academic levels based on the requirements of the students."
      
    },
    {
      "id" : "02",
      "header" : "How do I get started on a new assignment?",
      "text" : "Once you are assigned a new assignment, you will receive the necessary details and instructions from the client or the platform. It's essential to carefully review the assignment brief and any provided materials. If you have any questions or need clarification, reach out to the client or the platform's support team."
    },
    {
      "id":"03",
      "header" : "How much will i get paid for completing an assignment?",
      "text" : "The payment for completing an assignment can vary depending on factors such as the length, complexity, and urgency of the assignment, as well as the policies of the startup you are working with. The exact payment terms and rates should be communicated to you by the startup."
    }, {
      "id":"04",
      "header" : "What is the turnaround time for completing an assignment?      ",
      "text" : "The turnaround time for completing an assignment depends on the specific requirements and deadline set by the client. The startup will provide you with the deadline, and it is important to manage your time effectively to meet the given timeframe."
    }, {
      "id":"05",
      "header" : "How will I receive payment for completed assignments?",
      "text" : "The startup will have a designated payment system in place. You will typically receive payment for your completed assignments through methods such as bank transfers, PayPal, or other secure payment platforms. The exact payment process and frequency should be communicated to you by the startup."
    }, {
      "id":"06",
      "header" : "What happens if I am unable to complete an assignment?",
      "text" : "In case you encounter any difficulties or unforeseen circumstances that prevent you from completing an assignment, it is crucial to communicate promptly with the startup. They will provide guidance and assistance to address the situation and find a suitable solution, such as reassigning the task to another writer if necessary."
    }, {
      "id":"07",
      "header" : "Will I receive credit for my work?",
      "text" : "Typically, as an assignment writer working for a startup, you will be compensated financially for your work. The credit for the completed assignment usually goes to the student who submitted the order. However, it's worth discussing the specific credit policy with the startup you are working with."
    }, {
      "id":"08",
      "header" : "How do I communicate with the client if I have questions or need clarification?",
      "text" : "The startup will provide you with a communication channel to interact with the client. This can be a messaging system within the platform, an email address, or another designated communication method. Use this channel to ask questions, seek clarifications, or provide updates on the assignment progress."
    }, {
      "id":"09",
      "header" : "How do I ensure that the completed assignment is original and plagiarism-free?",
      "text" : "Maintaining academic integrity is crucial. As an assignment writer, it's essential to conduct thorough research, use proper citations, and reference all sources accurately. Additionally, most startups have plagiarism detection tools in place to ensure the completed assignments are original. It's your responsibility to deliver plagiarism-free work"
    }, {
      "id":"10",
      "header" : "Will I have access to reference materials and resources for completing the assignment?",
      "text" : "Startups providing assignment help often provide access to reference materials and resources to support writers in completing their assignments. This may include online libraries, academic databases, or other relevant sources. Check with the startup to see what resources are available for you to utilize in your work."
    }, {
      "id":"11",
      "header" : "Can I choose which assignments I want to work on?",
      "text" : "Assignment service providers typically have revision policies that allow customers to request revisions if they are not satisfied with certain aspects of the completed assignment. The specific process for requesting revisions may vary, but it usually involves submitting a revision request specifying the changes or improvements desired."
    }, {
      "id":"12",
      "header" : "How do I know if I am qualified to work on a particular assignment?",
      "text" : " Many assignment service providers offer expedited or rush services for assignments with tight deadlines. However, the availability of such services and their associated fees may vary. It's recommended to check with the specific assignment service provider to see if they can accommodate your timeline."
    }, {
      "id":"13",
      "header" : "What if the client is not satisfied with my completed work?",
      "text" : "Yes, we offer discounts to our valued customers. We understand that students often have budget constraints, so we strive to make our services more affordable. Keep an eye out for our promotional offers, seasonal discounts, and loyalty programs"
    }, {
      "id":"14",
      "header" : "Can I request revisions if the client wants changes made to my completed work?",
      "text" : "Absolutely! We believe in empowering our customers to make informed choices. Once you place an order, we provide you with the option to choose a specific writer from our pool of qualified experts. You can review their profiles, qualifications, and previous customer ratings to make the best selection based on your requirements"
    },
    {
      "id":"15",
      "header" : "Is my personal information kept confidential?",
      "text" : "We have a user-friendly and transparent system in place for tracking the progress of your assignment. Upon placing an order, you will receive login credentials for your personal customer portal. In the portal, you can communicate directly with the assigned writer, exchange messages, and get real-time updates on the status of your assignment. Additionally, our customer support team is available 24/7 to assist you with any inquiries or concerns you may have."
    }
  ]

  return (
    <>
    <div className="container">
    <h1>FAQ For Students
    </h1>
    
    {data.map(ele => {
      return <Collapse  bordered={false} className='collaspse'  expandIcon={({ isActive }) => <CaretRightOutlined  className='icons' rotate={isActive ? 90 : 0} />} 
      expandIconPosition="right"      >
    <Panel 
    header={<>
          <div className="header"> 
          <h1 className="head">{ele.id}</h1>
          <p className="heading">{ele.header}</p>
          </div></>}
           key={ele.id} className='panel' >
       <div className="par">
             <p className='cot'>{ele.text}</p>
            </div>
    </Panel>
    </Collapse>
    })}


    </div>
    </>
  )
}

export default Seller 