// ContactMe.jsx
import React from 'react';

function ContactMe() {
  return (
    <section
      className="py-5 text-center"
      style={{
        background: 'linear-gradient(to right,#213363, #213363)', // 浅色渐变背景示例
      }}
    >
      <div className="container">
        <small className="text-uppercase d-block fw-bold mb-2">
          GET IN TOUCH
        </small>
        <h2 className="mb-4">Contact Me</h2>

        {/* 按钮：mailto 用于打开默认邮箱客户端 */}
        <a
          href="mailto:y62meng@uwaterloo.ca"
          className="btn btn-warning px-4 py-2 mb-4"
          style={{ color: '#fff', fontWeight: 'bold' }}
        >
          Send me an email
        </a>

        {/* 姓名 */}
        <div className="mb-2">
          <strong>Yanyue Meng</strong>
        </div>

        {/* 版权信息 */}
        <div>
          © 2025 Copyright:
          {' '}
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            yanyue-meng.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
