
function Home() {
  return (
    <>

    <div className="main-container">
      <div className="left-container">
        <p className="title">Human Resource Management System</p>
        <div className="left-bottom">
          <p className="services">
            Payroll, Employee Engagement, Learning, Performance, Development,
            Human Resources and Learning Platform.
          </p>
        </div>
      </div>

      <div className="right-container">
        <div className="top-container">
          <button id="login-button">
            Login
          </button>
          <button id="about-us-button">About us</button>
          <button id="contact-us-button">Contact us</button>
        </div>
        <div className="middle-container">
          <img
            className="home-icon"
            src="./src/assets/icons/hrms.png"
            alt="HRMS icon"
          />
        </div>
      </div>
    </div>
    </>
  );
}
export default Home;
