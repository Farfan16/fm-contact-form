import '../App.css'
import checkIcon from '../assets/images/icon-success-check.svg'

const Alert = () => {
  return (
    <div className="alert-container">
      <div className="row">
        <img src={checkIcon} style={{width: 16, height: 16}} alt="Check icon" />
        <h2>Message Sent</h2>
      </div>
      <div className="message">
        <h3>Thanks for completing the form. We&apos;ll be in touch soon!</h3>
      </div>
    </div>
  );
};

export default Alert;
