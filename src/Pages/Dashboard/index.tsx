import React from "react";
import { BaChart, Button, Card, Document, Horizontalbar, PiChart, Spacer } from "../../component/Atoms";
import { PageContainer } from "../PageContainer";
import "./Dashboard.scss";
import icon from "../../images/ClipboardList.svg";

export const Dashboard = () => {
  return (
    <PageContainer>
      <div className="dashboard">
        <h3>Hello Ghazi, Welcome back 👋🏻</h3>
        <h1>Your Dashboard today</h1>
        <Spacer height={20} />
        <div className="dashboardMessageContainer">
          <div className="dashboardMessage">
            <h2>Creative outdoor ads</h2>
            <Spacer height={10} />
            <p>
              Every large design company whether it’s a multi-national branding corporation or a regular down at heel
              tatty magazine publisher needs to fill holes in the workforce.
            </p>
          </div>
          <Button padding="0.8rem 2.5rem" borderRadius="16px" color="#4778EC">
            Get started
          </Button>
        </div>
        <Spacer height={40} />
        <div className="sectionGrid">
          <Card flex="2" header="Semester Grade" padding="1rem">
            <BaChart />
          </Card>
          <Card flex="1.5" header="Lesson" padding="1rem">
            <PiChart />
          </Card>
        </div>
        <Spacer height={50} />
        <div className="sectionHeaderContainer">
          <h3 className="sectionHeader" style={{ flex: 2 }}>
            Your documents
          </h3>
          <Spacer width={40} height={40} />
          <h3 style={{ flex: 1.5 }}>Progress Learning</h3>
        </div>
        <div className="sectionGrid">
          <div className="subsection">
            <Document
              title="Submisson Mobile Programming"
              subTitle="01 Jan, 18:20PM"
              imgSrc={icon}
              padding="20px 30px"
              backgroundcolor="#fff"
            />
            <Spacer width={20} height={20} />
            <Document
              title="Submisson Mobile Programming"
              subTitle="01 Jan, 18:20PM"
              imgSrc={icon}
              padding="20px 30px"
              backgroundcolor="#fff"
            />
            <Spacer width={20} height={20} />
            <Document
              title="Submisson Mobile Programming"
              subTitle="01 Jan, 18:20PM"
              imgSrc={icon}
              padding="20px 30px"
              backgroundcolor="#fff"
            />
          </div>
          <div className="sectionHeaderContainer2">
            <h3 className="sectionHeader" style={{ flex: 2 }}>
              Progress Learning
            </h3>
            <Spacer width={40} height={40} />
            <h3 style={{ flex: 1.5 }}>Progress Learning</h3>
          </div>
          <Card flex="1.5" padding="1rem">
            <div className="progress">
              <div className="progressIcon">
                <h2>UI</h2>
              </div>
              <div className="progressTextContainer">
                <div className="progressText">
                  <h3>Part Typography</h3>
                  <p>User Interface</p>
                </div>
                <div className="progressBar">
                  <Horizontalbar bgColor1="#FFF5CC" bgColor2="#FFB200" width="40%" />
                </div>
              </div>
            </div>
            <Spacer height={40} />
            <div className="progress">
              <div className="progressIcon">
                <h2>DS</h2>
              </div>
              <div className="progressTextContainer">
                <div className="progressText">
                  <h3>Part Data Structure</h3>
                  <p>Computer Science</p>
                </div>
                <div className="progressBar">
                  <Horizontalbar bgColor1="#D1FFDB" bgColor2="#13C525" width="79%" />
                </div>
              </div>
            </div>
            <Spacer height={40} />
            <div className="progress">
              <div className="progressIcon">
                <h2>AS</h2>
              </div>
              <div className="progressTextContainer">
                <div className="progressText">
                  <h3>Part Architecture</h3>
                  <p>Engineering</p>
                </div>
                <div className="progressBar">
                  <Horizontalbar bgColor1="#FFD7D7" bgColor2="#FF4A4A" width="30%" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};
