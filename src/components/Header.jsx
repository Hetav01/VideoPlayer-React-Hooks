import React from 'react';
import "../style/Header.css";

const Header = () => {

    return (
        <div className="header">
            <h1 className="projName" >VidViewer</h1>
            <button className="githubLink"><a className="link" href="https://github.com/Hetav01">Support Me!</a></button>
        </div>
    );
};

export default Header;