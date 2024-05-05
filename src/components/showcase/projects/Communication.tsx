import React from 'react';
import ResumeDownload from '../ResumeDownload';
import network from '../../../assets/pictures/projects/communication/network.png';

export interface CommunicationProjectsProps {}

const CommunicationProjects: React.FC<CommunicationProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Digital Communication</h1>
            <h3>Ventures</h3>
            <br />
            <ResumeDownload />
            <div className="text-block">
                <p>
                    While I love programming and software development the most, Communication
                    and Digital Studies will always hold a special place in my education and perspective on life.
                </p>
                <br />
                <p>
                    Here are a few projects/things I've done over the years to
                    keep this part of my studies relevant to me. I'm always looking to draw connections between
                    the different skills I possess in my life, and these disciplines intertwine quite easily.
                </p>
            </div>
            <div className="text-block">
                <h2 style={{textAlign: "left"}}>Simulating Communication Applications in Agent-Based Modeling</h2>
                <br />
                <p>
                    That's a long title. I know. We'll get to it, and talk about what it means. 
                </p>
                <div className="captioned-image">
                    <img src={network} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Organizational structure in a network graph of an agent-based
                            simulated model of information and communication technology (ICT) communication.
                        </sub>
                    </p>
                </div>
                <p>
                    In my last semester of my undergrad at UMW during a seminar class in digital rhetoric, I
                    completed a research project which attempted to answer two research questions: 
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>RQ1:</b> How does the utilization of business communication applications' 
                            instant messaging systems impact employees’ perceived well-being, 
                            considering factors such as stress levels, work-life balance, 
                            job satisfaction, and emotional health?
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>RQ2:</b> What insights might a modeled environment to simulate organizational 
                            and employee interactions over information and communication technology (ICT) 
                            applications help reveal in accordance with a connection between instant 
                            messaging communication and workers’ stress levels?
                        </p>
                    </li>
                </ul>
                <br />
                <p>
                    This research was quickly developed into a two part methodology. The first part would be
                    to create a quantitative Likert scale survey, and the second would be to analyze a simulated agent-based model
                    with the <a rel="noreferrer" target="_blank" href="https://mesa.readthedocs.io/en/stable/">
                        <b>Mesa</b> Python Library
                    </a> to simplify a very complex part of human communication into an abstract system that could extract stress (otherwise
                    could be called strain, pressure, or tension) levels quantitatively.
                </p>
                <br />
                <p>
                    The results varied, and you can read more about what agent-based modeling is, and what the study concluded using the link
                    to the paper below. Thanks for checking it out!
                </p>
                <br />
                <h3>Project Links:</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://scholar.umw.edu/cgi/viewcontent.cgi?type=pdf&article=1613&unstamped=yes&date=1714764455&preview_mode=1&context=student_research&/1714764455-text.pdf"
                        >
                            <p>
                                <b>[RESEARCH PAPER]</b> - Simulating Information and Communication Applications in Employee Interaction Network Models
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/mkantrr/ict_modeling"
                        >
                            <p>
                                <b>[GITHUB REPO]</b> - Defined Models and Simulation Code
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
            </div>
            <ResumeDownload />
        </div>
    );
};

export default CommunicationProjects;
