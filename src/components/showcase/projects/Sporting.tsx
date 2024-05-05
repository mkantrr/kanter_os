import React from 'react';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';
import hittingLine from '../../../assets/pictures/projects/sporting/hittingLine.mp4';
import ogTeam from '../../../assets/pictures/projects/sporting/OGteam.jpg';

export interface SportingProjectsProps {}

const SportingProjects: React.FC<SportingProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Sporting</h1>
            <h3>Endeavors</h3>
            <br />
            <ResumeDownload />
            <div className="text-block">
                <br />
                <p>
                    Sports have been a massive part of my life since I was a child. As a little kid, I used
                    to play baseball, soccer, tennis, racquetball, Taekwondo, a little gymnastics, and a little rugby.
                    I am sure there were others I don't remember trying out, but this was all before I discovered my
                    love for the game of volleyball, and before I even though about playing a video game competitively.
                </p>
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
                    <h2>Volleyball</h2>
                    <br />
                    <p>
                        I've played volleyball intermittently since the start of my undergrad dependent on my knee and
                        shoulder health (there is never a healthy volleyball player, it's a myth). I played on UMW's travel
                        club team and competed against various other schools, including but not limited to George Mason University,
                        Old Dominion University, American University, and George Washington University. We progressively improved
                        as a team throughout my time in undergrad while losing and gaining players, but unfortunately never won a
                        tournament (we came close, to the semis).
                    </p>
                    <br />
                    <p>
                        I continue to play volleyball recreationally and I am still active in UMW's volleyball
                        community. A huge shoutout to my friends, {' '}
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/harshith-ravuri-2053b4304/">
                            Harsha Ravuri
                        </a>,{' '}
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/thomasbrysonhedges/">
                            Bryson Hedges
                        </a>,{' '}
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/quinn-lipetz-417187206/">
                            Quinn Lipetz
                        </a>, and{' '}
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kranston-blakey-2367a0276/">
                            Kranston Blakey
                        </a> for encouraging my obsession and addiction with playing volleyball, even through 
                        knee pain and suffering (Harsha) {'>'}:(. 
                    </p>
                    </div>
                    <div style={styles.verticalImage} className="captioned-image">
                        <VideoAsset src={hittingLine} />
                        <p style={styles.caption}>
                            <sub>
                                <b>Figure 1:</b> Me, April 2024, hitting a volleyball.
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
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
                    <h2>Esports</h2>
                    <br />
                    <p>
                        Playing Rocket League intercollegiately and competitively under UMW Esports' banner
                        was one of my more formative experiences. The three lovely people (including me) seen
                        to the right were the founding members of the second video game program in UMW Esports.
                        I played again the next semester with two different teammates recruited to UMW for Esports
                        play, and the next semester (my last one) I coached the Rocket League program.
                    </p>
                    <br />
                    <p>
                        This opportunity as a whole taught me the value of cooperation and unity as a group or
                        team in order to work toward a common goal larger than ourselves, and I think this allowed
                        me to further develop my skills in a leadership role as a team captain and coach as well as
                        experiment with working and non-working teamwork motivations and pressures.
                    </p>
                    </div>
                    <div style={styles.verticalImage} className="captioned-image">
                        <img src={ogTeam} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> UMW Esports' original Rocket League team in Spring 2023 with me,{' '}
                                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/eric-bae-455294210/">
                                        Eric Bae
                                    </a>, and{' '}
                                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/garrett-moore-a58384290/">
                                        Garrett Moore
                                    </a>.
                            </sub>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
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

export default SportingProjects;
