import React, { Component } from "react";
import "../assets/css/external.css";
import Accordion from '../components/accordion/accordion';
import AccordionItem from '../components/accordion/accordionItem';
import Footer from "../components/footer/footer";
import { AuthConsumer } from "../components/authcontext";
import NavBarMobile from "../components/navbar/navBarMobile";
import NavBarAuthenticated from "../components/navbar/navBarAuthenticated";


class HelpPage extends Component {
  render() {
    return (
      <>
        <AuthConsumer>
          {({ logout }) => (
            <>
              <NavBarAuthenticated logout={logout} />
              <NavBarMobile logout={logout} />
            </>
          )}
        </AuthConsumer>
        <div className="external-content">
          <div className="page-title">
            <h1 className="text-center">Frequently Asked Questions</h1>
          </div>
          <div className="body-text container">
          <h4 className="text-gclout-blue">General</h4>
            <br />
            <Accordion atomic={true}>
              <AccordionItem title="Title 1">
                <DummyContent />
              </AccordionItem>
              <AccordionItem title="Title 2">
                <DummyContent />
              </AccordionItem>
              <AccordionItem title="Title 3">
                <DummyContent />
              </AccordionItem>
            </Accordion>
            <br />
            <h4 className="text-gclout-blue">Our Approach</h4>
            <br />
            <Accordion atomic={true}>
              <AccordionItem title="Title 1">
                <DummyContent />
              </AccordionItem>
              <AccordionItem title="Title 2">
                <DummyContent />
              </AccordionItem>
              <AccordionItem title="Title 3">
                <DummyContent />
              </AccordionItem>
            </Accordion>
            <br />
            <h4 className="text-gclout-blue">Account Setup</h4>
            <br />
            <Accordion atomic={true}>
              <AccordionItem title="Title 1">
                <DummyContent />
              </AccordionItem>
              <AccordionItem title="Title 2">
                <DummyContent />
              </AccordionItem>
              <AccordionItem title="Title 3">
                <DummyContent />
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default HelpPage;

const DummyContent = () => (
  <p style={{ padding: '18px' }}>
    This Privacy Policy was last modified on December 7, 2011, and was first published and made effective on December 7, 2011. Bloc, Inc. (“Bloc,” “we,” or “us”) provides this Privacy Policy to explain our practices regarding the collection, use, disclosure, and protection of information that apply to our Service, as well as your choices regarding the collection and use of information. This Privacy Policy does not apply to information we collect by means (including offline) or from other sources other than through the Service. Capitalized terms that are not defined in this Privacy Policy have the meaning given them in our Terms of Use.
  </p>
);