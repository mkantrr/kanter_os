import React, { useContext } from 'react';
import printer_light from '../../assets/resume/printer_light.gif';
import printer_dark from '../../assets/resume/printer_dark.gif';
import Resume from '../../assets/resume/resume.pdf';
import ThemeContext from '../../hooks/ThemeProvider';

export interface ResumeDownloadProps {
    altText?: string;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ altText }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {theme === "light" && (
            <div id="resumeContainer" style={styles.resumeContainer}>
                <img style={styles.resumePrinter} alt="" src={printer_dark} />
                <div style={styles.resumeContainerText}>
                    <h3>{altText ? altText : 'Looking for my resume?'}</h3>
                    <a rel="noreferrer" target="_blank" href={Resume}>
                        <p>Click here to download it!</p>
                    </a>
                </div>
            </div>
            )}
            {theme === "dark" && (
            <div id="resumeContainer" style={styles.resumeContainer}>
                <img style={styles.resumePrinter} alt="" src={printer_light} />
                <div style={styles.resumeContainerText}>
                    <h3>{altText ? altText : 'Looking for my resume?'}</h3>
                    <a rel="noreferrer" target="_blank" href={Resume}>
                        <p>Click here to download it!</p>
                    </a>
                </div>
            </div>
            )}
        </>
    );
};

const styles: StyleSheetCSS = {
    resumeContainer: {
        padding: 12,
        boxSizing: 'border-box',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%',
        alignItems: 'center',
    },
    resumeContainerText: {
        flexDirection: 'column',
    },
    resumePrinter: {
        width: 56,
        height: 48,
        paddingRight: 24,
    },
};

export default ResumeDownload;
