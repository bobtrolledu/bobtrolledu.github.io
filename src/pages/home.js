import React from "react";
import SplitText from './TextAnimations/SplitText/SplitText.jsx';
import Waves from './Backgrounds/Waves/Waves.jsx';

const handleAnimationComplete = () => {};

const Home = () => {
    return (
        <div>
            <Waves
                lineColor="#304078"
                backgroundColor="transparent"
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
            />
            <header className="App">
                <div className="roboto">
                    <SplitText
                        text="Anson Ho"
                        delay={150}
                        animationFrom={{opacity: 0, transform: 'translate3d(0,50px,0)'}}
                        animationTo={{opacity: 1, transform: 'translate3d(0,0,0)'}}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                    />
                </div>
                <div className="roboto-subheading">
                    <SplitText
                        text="Computer Engineering @ UBC"
                        delay={30}
                        animationFrom={{opacity: 0, transform: 'translate3d(0,50px,0)'}}
                        animationTo={{opacity: 1, transform: 'translate3d(0,0,0)'}}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                    />
                </div>
            </header>
        </div>
    );
};

export default Home;