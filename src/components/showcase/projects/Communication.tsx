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
                    could be called strain, pressure, or tension) levels quantitatively. This abstract system utilized random network graph
                    generation algorithms such as Barabasi-Albert's (AKA <b>'preferential attachment'</b> or <b>'scale-free'</b>) algorithm or Watts-Strogatz's
                    (AKA <b>'small world'</b>) algorithm.
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
                    <li style={{textAlign: "left"}}>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://scholar.umw.edu/cgi/viewcontent.cgi?article=1613&context=student_research"
                        >
                            <p>
                                <b>[Research Study]</b> - Simulating Information and Communication Applications in Employee Interaction Network Models
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
                                <b>[GitHub]</b> - Defined Models and Simulation Code
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
            </div>
            <div className="text-block">
                <h2 style={{textAlign: "left"}}>Trainable GPT4 LLM Generative AI Model</h2>
                <br />
                <p>
                    This project was a final project resulting from a semester of work during my undergrad
                     in a class called ChatGPT and Generative AI. In an effort to test some hypotheses that 
                    current chatbot LLM models where becoming more advanced at a rate unheard of 
                    in an ever-expanding AI field, I developed this chatbot program to perform a 
                    series of turing tests personalized to my own "life" data to allow it to mimic how 
                    I might respond to people who know me and who have had close communication with me a
                     good portion of my life over text messaging (SMS) as much as possible.
                </p>
                <br />
                <p>
                    Acting on only the information that it was given, the issue that arose was the 
                    scalability of data. For subjects who have known me for my entire life or know 
                    me very well, there will never be enough data I can feed to the model that would 
                    encompass my entire life memories, experiences, emotions, values, belief systems, 
                    etc. that would completely and accurate depict me to be able to completely mimic me, 
                    as a human. As such, I believe the results to this experiement were indicative in and 
                    of themselves considering the nature of data to act upon.
                </p>
                <br />
                <p>
                    I have hosted the code that one needs to have a chatbot in its shell to train it on 
                    documents over on GitHub. See below the project link to it if you would like to try out
                    the bot yourself, train it on some prompts, and supplement it with some .pdf or .txt files.
                    Happy tampering!
                </p>
                <br />
                <h3>Project Link:</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/mkantrr/personal-turing-test-chatbot"
                        >
                            <p>
                                <b>[GitHub]</b> - Trainable Chatbot
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
