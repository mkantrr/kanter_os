import React from 'react';
import closeUp from '../../assets/pictures/cinematicCloseUp.jpg';
import relationship from '../../assets/pictures/girlfriendAndI.jpg';
import volleyball from '../../assets/pictures/alumniTournament.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Matthew Kanter</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a software engineer currently working at the Naval Surface Warfare Center Dahlgren Division (NSWCDD)! 
                    In May of 2024 I graduated from the University of Mary Washington (UMW)
                    with my B.S. in Computer Science. 
                    I am currently a student at Georgia Tech to earn my M.S. in Computer Science, starting in August of 2024.
                </p>
                <br />
                <p style={{textAlign: "left"}}>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    creating it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:matthew@mattkanter.com">
                        matthew@mattkanter.com
                    </a>.
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    I grew up in Virginia Beach, VA with a loving family.
                    I think I played almost every sport imaginable as a young child, but most fell on deaf ears 
                    in exchange for playing Wii Sports, Super Smash Brothers Brawl, Super Mario Galaxy (1 or 2),
                    or any of the multitude of Kirby games. It is with this infatuation with video games that I started to 
                    develop a healthy love and curiousity for computer systems. 
                    I was quite the disobedient software user, trying to homebrew my Nintendo DS and 3DS, jailbreak my iPhone,
                    and learn about anything I could to break limits and test boundaries on the systems I was using.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={closeUp} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A very cinematic photo taken of me from my good friend Andre on a hike in South Africa! 
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    This love never seemed to go away through my grade school years, and once Advanced Placement (AP) Computer Science
                    was offered as a class during my senior year at {' '}
                    <a rel="noreferrer" target="_blank" href="https://coxhs.vbschools.com/">Frank W. Cox High School</a>, 
                    I couldn't pass up the opportunity to expand my knowledge to programming. 
                    This also occured during the rise of social media usage among all teenagers and young adults
                    and the implications that new digital rhetoric and media might impact our society, and I continued to find learning about
                    and studying communication across computer systems fascinating.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <p>
                            In all of the facets of my life, I have strived to be the best I can be to the best of my ability. 
                            This has led me to value my aptitude for learning throughout my life as one of the most important 
                            parts of my reality. This valuation of scholarship led my love for learning and my love of computers
                            in the direction of Computer Science.
                        </p>
                        <br />
                        <p>
                            In the Fall of 2020 during the Great COVID-19 War (satirically), I matriculated into UMW as an undergraduate
                            seeking my bachelors degree in my double major of Computer Science and Communication & Digital Studies with
                            a minor in Cybersecurity. At the end of my sophomore year I secured an internship with {' '}
                            <a  rel="noreferrer" target="_blank" href="https://keycaliber.com">KeyCaliber</a>, a D.C. based software company 
                            aimed at quantifying risk management and company asset vulnerabilities. 
                            I would return to them to work part time during my last semester at UMW in Spring '24, but before that I maintained
                            an on-campus applications development internship and a couple other internship experiences. You can check them out on
                            my {' '}
                            <Link to='/experience'>Experience</Link> page.
                        </p>
                        <br />
                        <p>
                            During my time at UMW, I met the love of my life, {' '}
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/reese-kubricki-b43b71211/">Reese</a>. She is a
                            fantastic person and has supported me in all avenues of my life even when I might not have even believed in myself. Somehow
                            during a time when not a single person was practically allowed to leave their rooms and houses, and while college freshman
                            were bunkered in our dorm rooms with no contact with others past a mask, we found each other and have been together ever since.
                        </p>
                        <br />
                        <p>

                        </p>
                </div>
                <div style={styles.verticalImage} className="captioned-image">
                    <img src={meNow} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> Me, November 2023
                        </sub>
                    </p>
                </div>
                </div>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'top',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I have a lot of hobbies that I
                            enjoy doing in my free time. The more tangible
                            hobbies I have are playing{' '}
                            <Link to="/projects/sporting">Sports</Link>{' '}
                            and studying{' '}
                            <Link to="/projects/communication">Digital Communication</Link>. You can
                            read more about each of these on their respective
                            pages under my{' '}
                            <Link to="/projects">Projects</Link> tab. Some other hobbies I
                            enjoy are working out, playing volleyball, coaching, and (unsurprisingly)
                            playing video games (sometimes competitively).
                        </p>
                        <br />
                        <p>
                            During my undergrad at UMW, I was a collegiate athlete for {' '}
                            <a  rel="noreferrer" target="_blank" href="https://www.rocketleague.com/en">Rocket League (video game)</a> in which
                            I participated in the competitive scene and intermittently coached new talent. This part of my life
                            was an incredible time, as UMW Esports helped to shape and refine my abilities to work in a team toward
                            something larger than myself.
                        </p>
                        <br />
                        <p>
                            Alongside UMW Esports, I was also an integral player on the{' '}
                            <a  rel="noreferrer" target="_blank" href="https://www.instagram.com/umwmensvolleyball">UMW Mens Club Volleyball</a> team 
                            both in a leadership role and as a vital part of our travel team in competing intercollegiately against other schools
                            that were mostly within Virgina and the Greater D.C. area. Volleyball will forever be a passion of mine, partly
                            because I am good at it, partly because Reese also loves it, but mostly because I love and enjoy the
                            spirit of play with a team I have made a connection and community with.
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p>
                            Any reason you might have for contacting me is acceptable (except for the obvious, like spam, death threats, etc.). I would love to hear from
                            you! You can reach me through the{' '}
                            <Link to="/contact">contact page</Link> or shoot me an email
                            at{' '}
                            <a href="mailto:matthew@mattkanter.com">
                                matthew@mattkanter.com
                            </a>.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={relationship} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 3:</b> Mi amor Reese and I, April 2024 :)
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <div className="captioned-image">
                    <img src={volleyball} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 4:</b> Me (light blue shirt, right) with our mens and womens 
                            volleyball clubs at our annual alumni tournament.
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    <b>P.S.</b> There is an easter egg hidden in this website. See if you can find it :) <b>Hint:</b> KanterOS operations.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
