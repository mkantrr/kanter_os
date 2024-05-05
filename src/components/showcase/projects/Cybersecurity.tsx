import React from 'react';
import ResumeDownload from '../ResumeDownload';
//import { MusicPlayer } from '../../general';

export interface CybersecurityProjectsProps {}

const CybersecurityProjects: React.FC<CybersecurityProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Cybersecurity</h1>
            <h3>Endeavors</h3>
            <br />
            <ResumeDownload />
            <div className="text-block">
            </div>
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default CybersecurityProjects;
