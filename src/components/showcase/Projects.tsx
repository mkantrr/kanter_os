import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import softwareDark from '../../assets/pictures/projects/software_dark.gif';
import softwareLight from '../../assets/pictures/projects/software_light.gif';
import communicationLight from '../../assets/pictures/projects/communication_light.gif';
import communicationDark from '../../assets/pictures/projects/communication_dark.gif';
import volleyballLight from '../../assets/pictures/projects/volleyball_light.gif';
import volleyballDark from '../../assets/pictures/projects/volleyball_dark.gif';
import ThemeContext from '../../hooks/ThemeProvider';

export interface ProjectsProps {}

interface ProjectBoxProps {
    icon: string;
    title: string;
    subtitle: string;
    route: string;
    iconStyle: React.CSSProperties;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
    icon,
    title,
    subtitle,
    route,
    iconStyle,
}) => {
    const [, setIsHovering] = useState(false);
    const navigation = useNavigate();

    const handleClick = () => {
        navigation(`/projects/${route}`);
    };

    const onMouseEnter = () => {
        setIsHovering(true);
    };

    const onMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            onMouseDown={handleClick}
            className="big-button-container"
            style={styles.projectLink}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div style={styles.projectLinkLeft}>
                <img
                    src={icon}
                    style={Object.assign(
                        {},
                        styles.projectLinkImage,
                        iconStyle
                    )}
                    alt=""
                />
                <div style={styles.projectText}>
                    <h1 style={{ fontSize: 48 }}>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div>
            <div style={styles.projectLinkRight}></div>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = (props) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <h3>& Hobbies</h3>
            <br />
            <p>
                Click on one of the areas below to check out some of the work I've done over the years
                in each category. This is of course only a segment of my time and effort, but feel free to
                get in touch if you want to learn more. Enjoy!
            </p>
            <br />
            {theme === "light" && (
                <div style={styles.projectLinksContainer}>
                    <ProjectBox
                        icon={softwareDark}
                        iconStyle={styles.computerIcon}
                        title="Software"
                        subtitle="PROJECTS"
                        route="software"
                    />
                    <ProjectBox
                        icon={communicationDark}
                        iconStyle={styles.commIcon}
                        title="Communication"
                        subtitle="VENTURES"
                        route="communication"
                    />
                    <ProjectBox
                        icon={volleyballDark}
                        iconStyle={styles.volleyballIcon}
                        title="Sporting"
                        subtitle="ENDEAVORS"
                        route="sporting"
                    />
                </div>
            )}
            {theme === "dark" && (
                <div style={styles.projectLinksContainer}>
                    <ProjectBox
                        icon={softwareLight}
                        iconStyle={styles.computerIcon}
                        title="Software"
                        subtitle="PROJECTS"
                        route="software"
                    />
                    <ProjectBox
                        icon={communicationLight}
                        iconStyle={styles.commIcon}
                        title="Communication"
                        subtitle="VENTURES"
                        route="communication"
                    />
                    <ProjectBox
                        icon={volleyballLight}
                        iconStyle={styles.volleyballIcon}
                        title="Sporting"
                        subtitle="ENDEAVORS"
                        route="sporting"
                    />
                </div>
            )} 
        </div>
    );
};

const styles: StyleSheetCSS = {
    projectLinksContainer: {
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        flex: 1,
    },
    projectLink: {
        marginBottom: 24,
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',

        alignItems: 'center',
        justifyContent: 'space-between',
    },
    projectText: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    projectLinkImage: {
        width: 48,
        // height: 48,
        marginRight: 38,
    },
    projectLinkLeft: {
        marginLeft: 16,
        alignItems: 'center',
    },
    computerIcon: {
        width: 64,
        height: 64,
    },
    volleyballIcon: {
        width: 64,
        height: 64,
    },
    arrowIcon: {
        width: 48,
        height: 48,
    },
    commIcon: {
        width: 64,
        height: 64,
    },
};

export default Projects;
