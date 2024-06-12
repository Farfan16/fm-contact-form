import "./App.css";

function App() {
  return (
    <main>
      <div className="form-card">
        <h1>Contact Us</h1>
        <form className="card">
          {/* Start of name field */}
          <div className="row">
            <div className="field">
              <label htmlFor="firstName" aria-required>
                First Name
              </label>
              <input type="text" name="firstName" id="firstName" required />
            </div>
            <div className="field">
              <label htmlFor="lastName" aria-required>
                Last Name
              </label>
              <input type="text" name="lastName" id="lastName" required />
            </div>
          </div>
          {/* End of name field */}

          {/* Start of email field */}
          <div className="field">
            <label htmlFor="email" aria-required>
              Email Address
            </label>
            <input type="text" name="email" id="email" required />
          </div>
          {/* End of email field */}

          {/* Start of query type field */}
          <div className="field">
            <label htmlFor="queryType" aria-required>
              Query Type
            </label>
            <div className="row">
              <input
                type="radio"
                name="queryType"
                id="general"
                value="General"
              />
              <label htmlFor="general">General Enquiry</label>
              <input
                type="radio"
                name="queryType"
                id="support"
                value="Support"
              />
              <label htmlFor="support">Support Enquiry</label>
            </div>
          </div>
          {/* End of query type field */}

          {/* Start of message */}
          <div className="field">
            <label htmlFor="message" aria-required>
              Message
            </label>
            <textarea name="message" id="message"></textarea>
          </div>
          {/* End of message */}

          {/* Start of consent checkbox */}
          <div className="row">
            <input type="checkbox" name="consent" id="consent" />
            <label htmlFor="consent" aria-required>
              I consent to being contacted by the team
            </label>
          </div>
          {/* End of consent checkbox */}

          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default App;
