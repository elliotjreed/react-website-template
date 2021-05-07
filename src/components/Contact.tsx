import { ReactElement, useState } from "react";
import { Helmet } from "react-helmet";

import { Button } from "./Button";

interface ContactRequestResponse {
  errors?: string[];
}

const renderSuccess: ReactElement = (
  <div className="notification is-primary">Thank you for your enquiry. I&apos;ll get back to you shortly!</div>
);

const Contact = (): ReactElement => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccessful] = useState<boolean>(false);

  const handleSubmit = (event): void => {
    event.preventDefault();
    setLoading(true);
    fetch("https://localhost", {
      body: new URLSearchParams(new FormData(event.target) as URLSearchParams),
      method: "POST"
    })
      .then((response: Response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response: Response) => response.json())
      .then((response: ContactRequestResponse) => {
        if (response.hasOwnProperty("errors")) {
          setError(response as string);
        } else {
          setSuccessful(true);
        }
        setLoading(false);
      })
      .catch((): void => setError("There was an error sending your email, please try again."));
  };

  const renderForm: JSX.Element = (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name" className="label">
          Name
        </label>
        <div className="control">
          <input id="name" className="input" type="text" placeholder="Name&hellip;" name="name" disabled={loading} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email" className="label">
          Email
        </label>
        <div className="control">
          <input
            id="email"
            className="input"
            type="email"
            placeholder="Email address&hellip;"
            name="email"
            disabled={loading}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="phone" className="label">
          Telephone
        </label>
        <div className="control">
          <input
            id="phone"
            className="input"
            type="tel"
            placeholder="Telephone number&hellip;"
            name="phone"
            disabled={loading}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message" className="label">
          Message
        </label>
        <div className="control">
          <textarea id="message" className="textarea" placeholder="Enquiry&hellip;" name="message" readOnly={loading} />
        </div>
      </div>
      <p className="label">Preferred contact method</p>
      <div className="field">
        <div className="control">
          <label className="radio">
            <input type="radio" name="preferredMethod" value="email" disabled={loading} defaultChecked /> Email
          </label>
          <label className="radio">
            <input type="radio" name="preferredMethod" value="phone" disabled={loading} /> Telephone
          </label>
        </div>
      </div>
      {error === "" ? null : <div className="notification is-danger">{error}</div>}
      <div className="field">
        <div className="control ">
          <Button text="SEND" disabled={loading} />
        </div>
      </div>
    </form>
  );

  return (
    <>
      <Helmet>
        <title>Contact | TITLE</title>
        <meta name="description" content="Contact" />
      </Helmet>

      <main id="main-content" className="container">
        <div className="columns is-multiline">
          <div className="column is-12 has-text-centered">
            <h2 className="title">Get in Touch</h2>
            <p>For enquiries, please use the form below.</p>
          </div>
          <div className="column is-8 is-offset-2">{success ? renderSuccess : renderForm}</div>
        </div>
      </main>
    </>
  );
};

export default Contact;
