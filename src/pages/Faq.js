import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Faq = () => {
    return (
        <>
            <Meta title={"Faq"} />
            <BreadCrumb title="Faq" />
            <Container className="policy-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="faq">FAQ</div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Faq;