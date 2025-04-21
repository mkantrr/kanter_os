import React from 'react';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import automata from '../../../assets/pictures/projects/software/automata.png';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>mattkanter.com</h2>
                <br />
                <p>
                    mattkanter.com is my personal website, and also the
                    website you are on right now. This project was heavily inspired from the original creation
                    by <a rel="noreferrer" target="_blank" href="https://henryheffernan.com">
                        <b>Henry Heffernan</b>
                    </a>, but the adaptations I made to it challenged
                    me both technically and creatively. In the endeavor to take Henry's
                    code and make it my own, I learned how to emulate JSDOS games, how to use <b>Blender</b> (and more on 3D renderings),
                    more about <b>React</b> and <b>TypeScript</b>, <b>Three.js</b>, and more. The 3D side of this site is still a WIP, as 
                    learning Blender is a new skill I need to get around to doing.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Blender Scene of the 3D website.
                            The scene from Blender was baked and exported in a
                            GLTF format.
                        </sub>
                    </p>
                </div>
                <p>
                    Now, a quick technical breakdown of the site. The website is
                    split into two parts, the 3D site, and the 2D OS site. The
                    3D site uses <b>Three.js</b> to render the scene and renders the 2D
                    site inside of it using an iframe. The 3D site's scence models and texturing
                    were created within <b>Blender</b>, and the source .glb models and .png baked textures
                    for it are located in the repo for it at the link below. The 2D OS site is a
                    simple TypeScript React site that is hosted{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://os.mattkanter.com/"
                    >
                        here
                    </a>{' '}
                    and works as a standalone web app. The actual rendering of
                    the 2D site is accomplished using a CSS renderer provided by
                    Three.js that transforms the html of the 2D site with 3D CSS
                    transforms to give the illusion of three dimensionality.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://mattkanter.com"
                        >
                            <p>
                                <b>[3D Site]</b> - mattkanter.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://os.mattkanter.com/"
                        >
                            <p>
                                <b>[OS Site]</b> - os.mattkanter.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/mkantrr/dev-website"
                        >
                            <p>
                                <b>[GitHub]</b> - 3D Site Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/mkantrr/kanter_os"
                        >
                            <p>
                                <b>[GitHub]</b> - OS Site Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
                <p>
                    I hope to keep this site up to date and add more flare to it as my career and life 
                    continues. I have many ideas for continuations to this site such as a blog, but 
                    for the time being though, I am extremely excited with how much I am able to 
                    accomplish with this website in its current state and will proudly advertise 
                    it as an extension of myself.
                </p>
            </div>
            <br />
            <div className="text-block">
                <h2>Finite Automata Comprehension Interpreter </h2>
                <br />
                <br />
                <p>
                    The image you see below is a <b>deterministic finite automata (DFA)</b> that accepts 
                    all words over a language that end in '00' or '11'. 
                    It is able to be generated with the interpreter that converts .theory files to tokens, 
                    lexes them, parses them, and interprets them in accordance with compiler theory. 
                    The {' '}
                    <a rel="noreferrer" target="_blank" href="https://github.com/mkantrr/automython">
                        <b>Automython</b>
                    </a> language acts very similar to Python, only with more limitations on 
                    types and usage of built-in functions only.
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
                        <br />
                        <br />
                        <p>
                            This project originially started out as my senior Capstone project at UMW I 
                            would complete to graduate with University Honors. 
                            It originally started out as a proposal to create a whole new programming language, 
                            writing a compiler that translates my designed syntax into machine code to run a 
                            finite automata (either a deterministic finite automata (DFA) or non-deterministic (NFA), 
                            or if time permitted since it was only a one semester project a Turing machine) and 
                            output to the user a graph visualization of the inputted 5-tuple automata, 
                            whether an optional input word was accepted or rejected by the automata, 
                            and a table of transition functions/steps.
                        </p>
                        <br />
                        <br />
                        <br />
                        <p>
                            It slowly evolved as I worked closely with 
                            my fantastic professor, <a rel="noreferrer" target="_blank" href="https://www.marshallandrew.net/">
                                <b>Dr. Andrew Marshall</b>
                            </a> into creating an interpreter to <b>Python</b> to make use of 
                            pre-existing visualization libraries and the small scope of the operations this 
                            language would have to perform. After all, what's the point of creating a 
                            whole new programming language that only performs one basic function when 
                            you could instead create a programming language that translates to a more 
                            widely used and broader use case programming language to make use of already 
                            written higher level logic?
                        </p>
                        <br />
                        <br />
                        <br />
                        <p>
                            This project, while mostly completed in an academic project plan sense, 
                            is published to PyPI to be installed via pip and also hosts a 
                            documentation page as a subdomain of this website. 
                            For the future, I will be trying my best to keep Automython updated 
                            and to provide continual improvements and new features to both the 
                            interpreter architecture and new structures of computational theory.
                        </p>
                        <br />
                        <h3>Links:</h3>
                        <ul>
                            <li>
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://github.com/mkantrr/automython"
                                >
                                    <p>
                                        <b>[GitHub]</b> - Automython Source Code
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://pypi.org/project/automython/"
                                >
                                    <p>
                                        <b>[PyPI]</b> - Automython Project Link
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                <div style={styles.verticalImage} className="captioned-image">
                    <img src={automata} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> A DFA that accepts all words over a language that end
                            with '00' or '11', over the input string '10011'.
                        </sub>
                    </p>
                </div>
            </div>
            </div>
            <ResumeDownload />
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

export default SoftwareProjects;
