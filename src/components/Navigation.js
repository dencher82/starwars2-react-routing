import React from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/Constants";
import {UserContext} from "../utils/Context";

const Navigation = () => {

    return (
        <nav className="fixed-top ml-4 mt-2">
            <UserContext.Consumer>
                {value => <div className="nav">
                    <div onClick={() => {
                        value(homePage);
                        window.location.href = `/#/${homePage}`;
                    }} className="nav-item btn btn-danger mx-1">Home
                    </div>
                    <div onClick={() => {
                        value(aboutMePage);
                        window.location.href = `/#/${aboutMePage}`;
                    }} className="nav-item btn btn-danger mx-1">About me
                    </div>
                    <div onClick={() => {
                        value(starWarsPage);
                        window.location.href = `/#/${starWarsPage}`;
                    }} className="nav-item btn btn-danger mx-1">Star wars
                    </div>
                    <div onClick={() => {
                        value(contactPage);
                        window.location.href = `/#/${contactPage}`;
                    }} className="nav-item btn btn-danger mx-1">Contact
                    </div>
                </div>}
            </UserContext.Consumer>
        </nav>
    );
};

export default Navigation;
