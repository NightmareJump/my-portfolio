import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bustrackerIMG from '../assets/img/bustracker.png'

function ProjectCardGroup() {
  return (
    <div className="container mt-5">
      {/* 标题部分 */}
      <div className="text-center mb-4">
        <small className="d-inline-block fw-bold text-dark text-uppercase">
          My Jobs
        </small>
        <h1>My Projects</h1>
      </div>

      {/* 第一行：放置第 1 个、 第 2 个卡片 */}
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm mb-4">
            <a
              href="https://github.com/NightmareJump/HalifaxBusTracker"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="card-img-top"
                src={bustrackerIMG}
                alt="Random"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Halifax BusTracker</h5>
              <p className="card-text">
                This bus tracker app provides real-time updates on bus locations
                using Leaflet.js, asynchronous JavaScript (fetch API).
              </p>
              <div className="d-flex justify-content-between">
                <a
                  href="https://github.com/NightmareJump/HalifaxBusTracker"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/NightmareJump/HalifaxBusTracker"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 第二个卡片 */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm mb-4">
            <a
              href="./public/projects/Halifax-BusTracker/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="card-img-top"
                src="https://picsum.photos/600/400?random=2"
                alt="Random"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Online Chatroom</h5>
              <p className="card-text">
                This app is built with MongoDB, Express,Vite + React, Socket.IO and Node.js .
              </p>
              <div className="d-flex justify-content-between">
                <a
                  href="https://github.com/NightmareJump/chatRoom"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/NightmareJump/chatRoom"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 第二行：放置第 3 个、 第 4 个卡片 */}
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm mb-4">
            <a
              href="./public/projects/Halifax-BusTracker/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="card-img-top"
                src="https://picsum.photos/600/400?random=3"
                alt="Random"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">SkiResortWeather App</h5>
              <p className="card-text">
                Provides current weather details by ski Resort, dynamically updates
                the UI.
              </p>
              <div className="d-flex justify-content-between">
                <a
                  href="https://github.com/NightmareJump/SkiResortWeather/tree/main"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/NightmareJump/SkiResortWeather/tree/main"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 第四个卡片 (若只有 3 个卡片，可将此卡注释或删除) */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm mb-4">
            <a
              href="./public/projects/Halifax-BusTracker/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="card-img-top"
                src="https://picsum.photos/600/400?random=4"
                alt="Random"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">E-shop Web</h5>
              <p className="card-text">
                Built using react, mySQL, Java and Spring Boot for a full-stack e-commerce
                experience.
              </p>
              <div className="d-flex justify-content-between">
                <a
                  href="https://github.com/NightmareJump/AlimamaShopping"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/NightmareJump/AlimamaShopping"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 第二行：放置第 3 个、 第 4 个卡片 */}
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm mb-4">
            <a
              href="https://github.com/NightmareJump/ZombieWave/tree/main"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="card-img-top"
                src="https://picsum.photos/600/400?random=3"
                alt="Random"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">ZombieWave Unity 3D</h5>
              <p className="card-text">
                a unity 3D FPS game using C# with AIAgent 
              </p>
              <div className="d-flex justify-content-between">
                <a
                  href="https://youtu.be/E0mTpOKJgjw"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/NightmareJump/ZombieWave/tree/main"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
        
        
        
      </div>
    </div>
  );
}

export default ProjectCardGroup;
