import React from "react";
import "../less/Client.less";
import { Collapse } from "antd";
import {PlusCircleOutlined , CaretRightOutlined } from '@ant-design/icons';

import { Render } from "./Home";
const { Panel } = Collapse;




const Client = () => {

  const datas = [
    {
      "id" : "01",
      "header" : "What kind of assignments can you do?",
      "text" : "Assignment services typically cover a wide range of academic subjects and disciplines, including essays, research papers, case studies, lab reports, literature reviews, dissertations, and more."
      
    },
    {
      "id" : "02",
      "header" : "How do I place an order?",
      "text" : "The process of placing an order varies depending on the assignment service. Usually, you need to visit our website, fill out an order form, provide assignment details such as the topic, word count, deadline, and any specific instructions, and then proceed further."
    },
    {
      "id":"03",
      "header" : "What is the turnaround time for an assignment?",
      "text" : "The turnaround time depends on the length and complexity of the assignment, as well as your specified deadline. It is important to check with the assignment service provider for their estimated delivery timeframes."
    }, {
      "id":"04",
      "header" : "How do I pay for my order?",
      "text" : " Assignment service providers usually offer various payment options, such as credit/debit card payments, PayPal, or other online payment systems."
    }, {
      "id":"05",
      "header" : "Can I communicate with the writer who is working on my assignment?",
      "text" :"However, the availability of direct communication may vary depending on the service you taken."
    }, {
      "id":"06",
      "header" : "my personal information kept confidential?",
      "text" : " It is 100 percent safe with us. Every customer is imp for us."
    }, {
      "id":"07",
      "header" : "What if I am not satisfied with the completed assignment?",
      "text" : " We typically have revision policies in place. If you are not satisfied with the completed assignment, you can request revisions within a certain timeframe specified by the us."
    }, {
      "id":"08",
      "header" : "What is your refund policy?",
      "text" : "We may offer partial or full refunds based on certain conditions, such as missed deadlines, plagiarism issues, or unsatisfactory work."
    }, {
      "id":"09",
      "header" : "Are your writers qualified to handle my assignment?",
      "text" : "Reputable assignment service providers generally hire qualified writers with expertise in various subjects. They often have rigorous screening processes in place to ensure the competence and qualifications of their writers. You can inquire about the service provider's writer selection and vetting process to gain more insight into their qualifications."
    }, {
      "id":"10",
      "header" : "How do you ensure that the assignments are plagiarism-free?",
      "text" : "Assignment service providers should have plagiarism detection systems and quality control measures in place to ensure the originality of the delivered assignments. Writers are expected to produce unique content, and the assignments are usually checked through plagiarism detection software before being delivered to the customers."
    }, {
      "id":"11",
      "header" : "How do you handle revisions?",
      "text" : "Assignment service providers typically have revision policies that allow customers to request revisions if they are not satisfied with certain aspects of the completed assignment. The specific process for requesting revisions may vary, but it usually involves submitting a revision request specifying the changes or improvements desired."
    }, {
      "id":"12",
      "header" : "Can you complete an assignment on short notice?",
      "text" : " Many assignment service providers offer expedited or rush services for assignments with tight deadlines. However, the availability of such services and their associated fees may vary. It's recommended to check with the specific assignment service provider to see if they can accommodate your timeline."
    }, {
      "id":"13",
      "header" : " Do you offer discounts?",
      "text" : "Yes, we offer discounts to our valued customers. We understand that students often have budget constraints, so we strive to make our services more affordable. Keep an eye out for our promotional offers, seasonal discounts, and loyalty programs"
    }, {
      "id":"14",
      "header" : " Can I choose a specific writer to work on my assignment?",
      "text" : "Absolutely! We believe in empowering our customers to make informed choices. Once you place an order, we provide you with the option to choose a specific writer from our pool of qualified experts. You can review their profiles, qualifications, and previous customer ratings to make the best selection based on your requirements"
    },
    {
      "id":"15",
      "header" : " How do I track the progress of my assignment?",
      "text" : "We have a user-friendly and transparent system in place for tracking the progress of your assignment. Upon placing an order, you will receive login credentials for your personal customer portal. In the portal, you can communicate directly with the assigned writer, exchange messages, and get real-time updates on the status of your assignment. Additionally, our customer support team is available 24/7 to assist you with any inquiries or concerns you may have."
    }
  ]


  return (
    <>
      <div className="container">
        <h1 >FAQ For Clients</h1>

        {datas.map(ev => {
          return(
          <Collapse
          bordered={false}
          className="collaspse"
          expandIcon={({ isActive }) => <CaretRightOutlined  className='icons' rotate={isActive ? 90 : 0} />}
          expandIconPosition="right"

          >
             <Panel
          header={<>
          <div className="header"> 
          <h1 className="head">{ev.id}</h1>
          <p className="heading">{ev.header}</p>
          </div></>}
            className="panel"
            key={ev.id}>
            <div className="par">
              <p className="cot">{ev.text}</p>
            </div>
            </Panel>
        </Collapse>
          )
          })}
      </div>
    </>
  );
};

export default Client;
