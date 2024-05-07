import React, { useState } from 'react';
import DosPlayer from '../dos/DosPlayer';
import Window from '../os/Window';

export interface TetrisAppProps extends WindowAppProps {}

const TetrisApp: React.FC<TetrisAppProps> = (props) => {
    const [width, setWidth] = useState(920);
    const [height, setHeight] = useState(750);

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle="Tetris"
            windowBarIcon="windowGameIcon"
            windowBarColor="#1C1C1C"
            bottomLeftText={'Powered by JSDOS & DOSBox'}
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <DosPlayer width={width} height={height} bundleUrl="tetris.jsdos" />
        </Window>
    );
};

export default TetrisApp;
