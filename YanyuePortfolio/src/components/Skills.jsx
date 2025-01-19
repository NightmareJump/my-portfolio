import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // 若在更上层已引入，可不重复

function Skills() {
  return (
    <section className="container my-5">
      {/* 标题部分 */}
      <div className="text-center mb-5">
        <small className="d-block text-uppercase fw-bold">
          Skills I Can Provide
        </small>
        <h2 className="display-4">My Skills</h2>
      </div>

      <div className="row align-items-start">
        {/* 左侧内容：技能描述 */}
        <div className="col-md-6 mb-4">
          {/* Full Stack */}
          <div className="mb-5">
            <div className="d-flex align-items-center mb-2">
              <span
                role="img"
                aria-label="wrench"
                style={{ fontSize: '1.5rem', marginRight: '8px' }}
              >
                🛠️
              </span>
              <h4 className="text-primary mb-0">Full Stack Development</h4>
            </div>
            <p className="text-muted">
              I excel in both front-end and back-end technologies, leveraging JavaScript, 
              React, Node.js, Express, and various databases (MySQL, MongoDB)
              to build seamless web applications.<br />
              My workflow incorporates Git, Agile, Docker, and GitHub Actions, 
              ensuring efficient development cycles.
            </p>
          </div>

          {/* Testing (替换原 Design) */}
          <div>
            <div className="d-flex align-items-center mb-2">
              <span
                role="img"
                aria-label="test"
                style={{ fontSize: '1.5rem', marginRight: '8px' }}
              >
                🧪
              </span>
              <h4 className="text-primary mb-0">Testing</h4>
            </div>
            <p className="text-muted">
              I have hands-on experience with **Selenium** for end-to-end testing, 
              as well as **Hardware/Firmware** testing to ensure stable performance 
              across multiple platforms. My approach combines automation and 
              thorough QA strategies to deliver robust solutions.
            </p>
          </div>
        </div>

        {/* 右侧内容：进度条 + 图标 */}
        <div className="col-md-6">
          {/* Frontend */}
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className="fw-bold">Frontend</span>
            <div className="d-flex align-items-center">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                alt="React"
                style={{ width: '24px' }}
                className="me-2"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="JS"
                style={{ width: '24px' }}
                className="me-2"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg"
                alt="Bootstrap"
                style={{ width: '24px' }}
                className="me-2"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                alt="HTML5"
                style={{ width: '24px' }}
                className="me-2"
              />

            </div>
          </div>
          <div className="progress mb-4">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '80%', backgroundColor: '#00BCD4' }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>

          {/* Backend */}
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className="fw-bold">Backend</span>
            <div className="d-flex align-items-center">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                style={{ width: '28px' }}
                className="me-2"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
                alt="Express"
                style={{ width: '50px' }}
                className="me-2"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                alt="MySQL"
                style={{ width: '28px' }}
              />
            </div>
          </div>
          <div className="progress mb-4">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '75%', backgroundColor: '#2E7D32' }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              75%
            </div>
          </div>

          {/* Testing (替换原 Design 进度条) */}
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className="fw-bold">Testing</span>
            <div className="d-flex align-items-center">
              {/* 这里没有官方硬件/固件图标，用一些emoji或空着 */}
              <span className="me-2" role="img" aria-label="chip" style={{ fontSize: '1.2rem' }}>
                🔌
              </span>
              <span className="me-2" role="img" aria-label="firmware" style={{ fontSize: '1.2rem' }}>
                🔧
              </span>
              <span className="me-2" role="img" aria-label="selenium" style={{ fontSize: '1.2rem' }}>
                🧪
              </span>
            </div>
          </div>
          <div className="progress mb-4">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '70%', backgroundColor: '#FFC107' }}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              70%
            </div>
          </div>

          {/* Others */}
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className="fw-bold">Others</span>
            <div className="d-flex align-items-center">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
                alt="Docker"
                style={{ width: '28px' }}
                className="me-2"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
                alt="Git"
                style={{ width: '28px' }}
              />
            </div>
          </div>
          <div className="progress mb-4">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '65%', backgroundColor: '#f44336' }}
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              65%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
