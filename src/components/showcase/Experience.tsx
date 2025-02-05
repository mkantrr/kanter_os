import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Career</h1>
                    </div>
                </div>
            </div>
            <br />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>Naval Surface Warfare Center (NSWCDD)</h2>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Dahlgren/'}
                        >
                            <h4>www.navsea.navy.mil</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer</h3>
                        <b>
                            <p>May 2024 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                I began working for the Naval Surface Warfare Center Dahlgren Division in May 2024.
                I have accomplished many technical and career goals in this role, but most notably I have:
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                        Developed fixes, improvements, and new features to tactical communications software for 
                        various missile weapon systems for the U.S. Marine Corps and the broader Navy, 
                        decreasing the capacity for operational error for deployed armed service weapon system operators.
                        </p>
                    </li>
                    <li>
                        <p>
                        Participated in an agile, ticket-based development cycle 
                        using <b>C++</b>, <b>Shell Scripting</b>, <b>Makefile</b>, and <b>Ada</b> programming languages.
                        </p>
                    </li>
                </ul>
                <p>
                My experience at NSWCDD provided me valuable and practical experience with development methodologies such as Agile, 
                solid foundations in OOP principles, adaptability for using tools such 
                as <b>Jenkins</b>, <b>SonarQube</b>, and others for CI/CD pipelining, 
                and overall was a fantastic experience to prop my new career on.
                </p>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>UMW</h2>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://technology.umw.edu/'}
                        >
                            <h4>www.umw.edu</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Applications Developer Intern (Student Aide Programmer)</h3>
                        <b>
                            <p>September 2022 - May 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                For a majority of my time in undergrad I provided my assistance and expertise to UMW's 
                Enterprise Application Services department, 
                who manages UMW's internal databases and provides statistical analytics and internal 
                information to UMW's other internal departments for further administrative use. 
                In becoming an indispensable student aid, I:
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Wrote <b>PL/SQL</b> queries and <b>Power BI</b> paginated reports.
                        </p>
                    </li>
                    <li>
                        <p>
                            Completed, documented, and tested tickets through the <b>Agile JIRA</b> workflow 
                            management system.
                        </p>
                    </li>
                    <li>
                        <p>
                            Provided other miscellaneous technological solutions, 
                            such as training new student aides and configuring settings in connecting to <b>Oracle</b> and <b>MySQL</b> databases.
                        </p>
                    </li>
                </ul>
                <p>
                This experience also provided me valuable in-person workplace experience, 
                and allowed me to gain experience in explaining highly technical and complex problems 
                such as run-time boundaries or specific <b>SQL</b> language issues to career experts.
                </p>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>KeyCaliber</h2>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://keycaliber.com/'}
                        >
                            <h4>www.keycaliber.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer Intern</h3>
                        <b>
                            <p>January 2024 - April 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    For my spring senior semester at UMW, I dedicated a large portion of my time to 
                    part-time work for KeyCaliber for the second time. Going back to KeyCaliber, 
                    I did not go through another interview process after I expressed my interest in 
                    coming back for the semester, and I was given creative freedom to chose a variety of projects 
                    to work on. The project I decided on was to implement <b>Auth0 Role Based Access Control (RBAC)</b> throughout 
                    their application stack to streamline their user login experience and provide a 
                    means for client admins to manage their users on their own. 
                    Their application stack involves <b>Python/Flask</b> and <b>PostgreSQL</b> as their backend frameworks, 
                    and <b>JavaScript/React</b> in their frontend. In doing so, I:
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Furthered my knowledge on <b>JWKs/JWTs</b>, Access/ID tokens, <b>Open ID Connect (OIDC)</b> authorization 
                            standards, validation techniques, and the <b>Proof Key for Code Exchange (PKCE)</b> authentication flow to name a few.
                        </p>
                    </li>
                    <li>
                        <p>
                            Gained valuable practical experience in problem solving situations that involved 
                            a sizeable product/codebase with real marketable consequences.
                        </p>
                    </li>
                    <li>
                        <p>
                            Practiced my skills in communicating detailed and complex issues in a high level 
                            way through technical ad hoc demonstrations.
                        </p>
                    </li>
                    <li>
                        <p>
                            Established regular scrum cadence with supervisors to perform standups to analyze 
                            current solutions and blockers.
                        </p>
                    </li>
                </ul>
                <p>
                    KeyCaliber was one of my favorite positions I have had, and their down to earth, 
                    collaborative, and supportive environment made learning that much easier.  
                </p>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>SitScape</h2>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://sitscape.com/'}
                        >
                            <h4>www.sitscape.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer Intern</h3>
                        <b>
                            <p>June 2023 - August 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Between my junior and senior years of my undergrad, I worked full time 
                    during the summer as a software engineering intern at SitScape helping them to improve a 
                    link/network graph widget that was a vital piece of their site. 
                    My willingness to dig in and work problems out made me a cherished part of the company's 
                    engineering team.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Participated in a weekly agile cadence with the engineering team and ad hoc 
                            technical demonstrations.
                        </p>
                    </li>
                    <li>
                        <p>
                            Researched and integrated the <b>D3.js</b> library and created different visualization 
                            patterns using dynamic user I/O data understood from comprehension of the broader 
                            codebase.
                        </p>
                    </li>
                    <li>
                        <p>
                            Performed back-end programming and database management operations 
                            with <b>PHP</b> and <b>PHPMyAdmin</b> to establish the necessary pipelines and database 
                            structure to allow for that seamless dynamic user I/O data.
                        </p>
                    </li>
                    <li>
                        <p>
                            Provided a myriad of software documentation, both in-line and technical 
                            documents/comments to an unorganized and massive codebase.
                        </p>
                    </li>
                </ul>
                <p>
                    This experience provided valuable experience in an established, corporate environment 
                    focused primarily on maintaining their product for their clients. This allowed me to 
                    further my abilities in applying my conceptual knowledge of computer science principles 
                    in a new environment with a practical application.
                </p>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>South African Travel</h2>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Career Break</h3>
                        <b>
                            <p>May 2023 - June 2023</p>
                        </b>
                    </div>
                </div>
            </div> 
            <div className="text-block">
                <p>
                    After planning for years with my lifelong friends (two of whom were born and somewhat 
                    raised there), we traveled to South Africa as a summer vacation and as a reward for 
                    ourselves for all of our hard work in life. This amazing, once-in-a-lifetime, 
                    culturally enlightening, and personally enlightening experience was the only reason why 
                    I did not start the software engineer internship with SitScape in May.
                </p>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>Gigasheet</h2>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://gigasheet.com/'}
                        >
                            <h4>www.gigasheet.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer Intern</h3>
                        <b>
                            <p>October 2022 - January 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    In an effort to fill up my free time during my fall semester of 2022 at UMW, I 
                    participated in an internship program through the <b>Commonwealth Cyber Initiative (CCI)</b> with 
                    Gigasheet. Gigasheet provides a website product that does better and more fine grained 
                    statistical analysis on spreadsheets, and larger than ones Excel could ever handle, 
                    to their clients. Unfortunately, Gigasheet didn't really have a set plan for me for 
                    the course of my internship, so I worked with a colleague to document specific API 
                    endpoints Gigasheet had written in the <b>Go</b> programming language with a specific 
                    version of <b>SwaggerDocs (swaggo)</b>.
                </p>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>KeyCaliber</h2>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://keycaliber.com/'}
                        >
                            <h4>www.keycaliber.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer Intern</h3>
                        <b>
                            <p>May 2022 - August 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    This position at KeyCaliber was my first ever practical experience in the computer science 
                    industry. KeyCaliber tasked a cohort of interns, including myself, with creating a 
                    Chrome web extension that connects with their main product dashboard to provide the key 
                    insights their product provides without having to go back and forth between browser tabs.
                    This web extension continues to be today a crucial part of their deployment and product 
                    pitch to their clients. In working on this software development project, my learning 
                    expanded by:
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Becoming somewhat of a leader among my cohort in comprehending critical concepts 
                            and communicating my understanding to them as well as encouraging them to 
                            participate and helping them whenever they needed it.
                        </p>
                    </li>
                    <li>
                        <p>
                            Participating in an scrum management environment with every other day standups 
                            with the whole team to sync on current and future tasks/blockers.
                        </p>
                    </li>
                    <li>
                        <p>
                            Building up my expertise in <b>JavaScript</b> and <b>React.js</b> out 
                            of <b>zero prior experience</b>, becoming an indespensable member of the 
                            development team within a couple weeks of bootstrapping web development 
                            concepts and low level details.
                        </p>
                    </li>
                    <li>
                        <p>
                            Learning how to use web UI frameworks such as <b>Material-UI</b>.
                        </p>
                    </li>
                    <li>
                        <p>
                            Working with Chrome's <b>web extension API</b> to interact with <b>localStorage</b> and <b>cookies</b>.
                        </p>
                    </li>
                    <li>
                        <p>
                            Working with manifests and package managers such as <b>npm</b> or <b>yarn</b> to ensuring 
                            minimal amounts of vulnerable dependencies.
                        </p>
                    </li>
                    <li>
                        <p>
                            Working with a <b>REST API</b> to draw data from external sources into resuable 
                            components.
                        </p>
                    </li>
                    <li>
                        <p>
                            Establishing foundational knowledge in <b>HTML</b> and <b>CSS</b>.
                        </p>
                    </li>
                </ul>
                <p>
                    KeyCaliber was one of my favorite positions I have had, and their down to earth, 
                    collaborative, and supportive environment made learning that much easier.  
                </p>
            </div>
            <br />
            <br />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Education</h1>
                    </div>
                </div>
            </div> 
            <br />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>Georgia Institute of Technology</h2>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Master of Science</h3>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Computer Science</h3>
                        <b>
                            <p>August 2024 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Currently undertaking my graduate education at Georgia Tech, and I couldn't be more stoked.
                    This section will be filled in once I have completed my masters graduate degree.
                </p> 
            </div>
            <br />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>University of Mary Washington</h2>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Bachelor of Science</h3>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Computer Science and Communication & Digital Studies</h3>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Cybersecurity Minor</h3>
                        <b>
                            <p>August 2020 - May 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    I graduated with University Honors and Summa Cum Laude (Highest Distinction) 
                    from the University of Mary Washington College of Arts and Sciences with a 
                    double major in Computer Science and Communication & Digital Studies, and a minor in 
                    Cybersecurity. I was also inducted into <b>Chi Alpha Sigma</b>, the Student Athlete honors society
                    and <b>Lambda Phi Eta</b>, the communications honors society. My final GPA was <b>3.77</b>.
                </p>
                <br />
                <p>
                    I kept myself busy throughout my time at UMW by completing numerous internships, working part-time 
                    for the IT department (refer to position above), participating in <b>Men's Club Volleyball</b> and playing 
                    competitively and coaching a video game called Rocket League for <b>UMW Esports</b>. 
                    One of my biggest passions, which is one of the reasons why I chose a double major such as 
                    Communication, is coaching and helping people become the best versions of themselves they can be. 
                    This includes me as well, and one of those ways I try to better myself is completing personal projects 
                    I am interested in or that I have completed in accordance with my schooling. As is the goal of higher 
                    education, I learned a great deal of theoretical knowledge and hands-on experience with a myriad of 
                    concepts and technologies.
                </p>
                <ul>
                    <li>
                        <p>
                            I gained knowledge on programming paradigms 
                            such as <b>Object Oriented (OOP)</b>, <b>Functional</b>, and <b>Event-Driven</b> programming.
                        </p>
                    </li>
                    <li>
                        <p>
                            I wrote object oriented code in <b>Python</b>, <b>Java</b>, and <b>JavaScript</b>.
                        </p>
                    </li>
                    <li>
                        <p>
                            I wrote low level OS and process code in <b>C</b>, as well as implementing some 
                            data structures and high level algorithms.
                        </p>
                    </li>
                    <li>
                        <p>
                            I wrote <b>assembly</b> and <b>C</b> code in tandem to understand computer 
                            architecture and hardware/software interactions.
                        </p>
                    </li>
                    <li>
                        <p>
                            I became well versed in <b>Vim</b>, <b>CLI</b> inner workings, and <b>Unix</b> systems.
                        </p>
                    </li>
                    <li>
                        <p>
                            I applied mathematical computing foundations to small, detail-oriented programming 
                            solutions to implement data structures and algorithms such as linked lists, 
                            stacks, heaps, etc.
                        </p>
                    </li>
                    <li>
                        <p>
                            I studied and implemented a variety of cryptographic methods, such as 
                            Caesar, Augustus, and the standard for web encryption: Advanced Encryption 
                            Standard (AES).
                        </p>
                    </li>
                    <li>
                        <p>
                            I studied and implemented <b>relational and NoSQL databases</b>.
                        </p>
                    </li>
                    <li>
                        <p>
                            I exploited <b>XSS</b>, <b>SQLi</b>, and <b>CSRF</b> vulnerabilities.
                        </p>
                    </li>
                    <li>
                        <p>
                            I exploited buffer overflows, format strings, system libraries, and used 
                            malware analysis software such as <b>Ghidra</b> and <b>Kali Linux</b> programs.
                        </p>
                    </li>
                    <li>
                        <p>
                            I implemented a variety of socket programs as well as configuring <b>Virtual Machines (VM)</b>.
                        </p>
                    </li>
                    <li>
                        <p>
                            I created artificial intelligence agents that solved coverage problems, 
                            Chess playing, <b>A*/Djikstra/greedy searching</b>, n-Queens Chess board puzzles, 
                            Wumpus World players, and Clue game players.
                        </p>
                    </li>
                    <li>
                        <p>
                            I studied Operating System process scheduling, virtualization, 
                            concurrency, persistence, and security.
                        </p>
                    </li>
                    <li>
                        <p>
                            I created a simplistic version of the <b>Unix shell</b>. 
                        </p>
                    </li>
                    <li>
                        <p>
                            I implemented a <b>Multi-Level Feedback Queue (MLFQ)</b> scheduler, lottery, 
                            and modified round robin scheduler into {' '}
                            <a rel="noreferrer" target="_blank" href="https://pdos.csail.mit.edu/6.828/2023/xv6.html">xv6</a>, a barebones OS run in <b>QEMU</b>.
                        </p>
                    </li>
                    <li>
                        <p>
                            I studied computational theory, learning 
                            about <b>finite automata (DFA/NFA)</b>, Turing machines, and the 
                            pumping lemma (decision problems).
                        </p>
                    </li>
                    <li>
                        <p>
                            I studied software engineering methodologies, such as 
                            Agile/Scrum, Waterfall model, Iterative, DevOps, 
                            Functional/Non-functional requirements, etc.
                        </p>
                    </li>
                    <li>
                        <p>
                            I went through the Agile development process 
                            (Requirements, Design, Implementation, Testing, Deployment) 
                            in a codebase for a non-profit organization {' '}
                            <a rel="noreferrer" target="_blank" href="https://www.olddominionhumanesociety.org/">(ODHS)</a> to create a new 
                            full stack volunteer management system. 
                        </p>
                    </li>
                    <li>
                        <p>
                            I developed a chatbot using OpenAI's <b>GPT4 LLM model</b> to mimic my personality in a 
                            text messaging medium as an experiment into the Turing test, as well as 
                            inadvertently creating a trainable chatbot based off of provided .pdf or .txt 
                            files through the <b>Tesseract OCR</b> library (specifically for PDFs) in <b>Python</b>.
                        </p>
                    </li>
                    <li>
                        <p>
                            I wrote a variety of essays on computer ethics and the propagation of 
                            digital rhetoric within new media and emerging technologies 
                            (such as Generative AI).
                        </p>
                    </li>
                    <li>
                        <p>
                            I studied compiler theory and everything that goes along with it in the 
                            mythical "Dragon Book" (insert intense music here).
                        </p>
                    </li>
                </ul>
                <p>
                    In my final semester, I created a simplistic programming language interpreter 
                    designed to help current computational theory students understand finite automata easier. 
                    This project acted as my Honors Capstone project, and can be found on the {' '}
                    <Link to='/projects/software'>Software Projects</Link> page.
                </p>
            </div>
            <br />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>Frank W. Cox High School</h2>
                        <b>
                            <p>September 2016 - June 2020</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    I graduated from Cox HS with a resounding <b>4.42 weighted GPA</b> out of a 4.0 scale. 
                    I was ranked <b>20th</b> out of almost 400 students in my graduating class. 
                    I was able to achieve this by taking a multitude of {' '}
                    <a rel="noreferrer" target="_blank" href="https://www.collegeboard.org/">CollegeBoard</a> Advanced Placement (AP) 
                    classes, including:
                </p>
                <ul>
                    <li>
                        <p>AP Biology</p>
                    </li>
                    <li>
                        <p>AP Calculus BC</p>
                    </li>
                    <li>
                        <p>AP Capstone Seminar</p>
                    </li>
                    <li>
                        <p>AP Capstone Research</p>
                    </li>
                    <li>
                        <p>AP Computer Science A</p>
                    </li>
                    <li>
                        <p>AP English Language and Composition</p>
                    </li>
                    <li>
                        <p>AP English Literature and Composition</p>
                    </li>
                    <li>
                        <p>AP European History</p>
                    </li>
                    <li>
                        <p>AP Human Geography</p>
                    </li>
                    <li>
                        <p>AP Psychology</p>
                    </li>
                    <li>
                        <p>AP United States Government</p>
                    </li>
                    <li>
                        <p>AP United States History</p>
                    </li>
                </ul>
                <p>
                    During my time in high school, I was also a member of the National Honors Society and the 
                    Debate Club.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
