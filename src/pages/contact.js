import React from "react";
import ClickSpark from './Animations/ClickSpark/ClickSpark.jsx';


const Contact = () => {
    return (
        <div className="App">
            <ClickSpark
                sparkColor='#ffffff'
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
            />
            <h>contact</h>
        </div>
    );
};

export default Contact;