import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const About = () => {
    return (
        <>
            <Meta title={"About Us"} />
            <BreadCrumb title="About Us" />
            <Container className="policy-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="about">About Us</div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default About;