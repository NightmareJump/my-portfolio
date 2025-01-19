// MyTimeline.jsx
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// 引入时间轴的样式
import 'react-vertical-timeline-component/style.min.css';

// 如果你在项目中使用 MUI 的图标包
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

function MyTimeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(142, 172, 80)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Sep 2024 – Present"
        iconStyle={{ background: 'rgb(33, 51, 99)', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">University of Waterloo, Waterloo, ON, Canada</h3>
        <h4 className="vertical-timeline-element-subtitle">Master of Engineering</h4>
        <p>
          Electrical and Computer Engineering, Coop
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(23, 89, 74)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(23, 89, 74)' }}
        date="Sep 2024 – Present"
        iconStyle={{ background: 'rgb(33, 51, 99)', color: '#fff' }}
        icon={<WorkIcon/>}
      >
        <h3 className="vertical-timeline-element-title">Metocean Telematics</h3>
        <h4 className="vertical-timeline-element-subtitle">Product Verification Specialist </h4>
        <p>
        •Contributed to end-to-end software development (front-end to back-end) for maritime and asset
        tracking applications, integrating embedded products with desktop/web platforms.</p> 
        <p>• Developed and maintained automated test pipelines (CI/CD), ensuring rapid delivery and consistent 
        quality for both network and satellite-tracking features. </p>
        <p>• Enhanced performance by refactoring code modules, improving system reliability and maintainability. 
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(142, 172, 80)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Sep 2021 – May 2022"
        iconStyle={{ background: 'rgb(33, 51, 99)', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Nova Scotia Community College, Halifax, NS, Canada </h3>
        <h4 className="vertical-timeline-element-subtitle">IT Embedded Systems Programming </h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(142, 172, 80)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Sep 2024 – Present"
        iconStyle={{ background: 'rgb(33, 51, 99)', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Dalhousie University, Halifax, NS, Canada </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor of Computer Science</h4>
        <p>
        First Class Honours, GPA: 3.79
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(142, 172, 80)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Sep 2024 – Present"
        iconStyle={{ background: 'rgb(33, 51, 99)', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Shanghai University of Engineering and Science, Shanghai, China </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor of Engineering</h4>
        <p>
        Major: Computer Science
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(23, 89, 74)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(23, 89, 74)' }}
        date="Sep 2024 – Present"
        iconStyle={{ background: 'rgb(33, 51, 99)', color: '#fff' }}
        icon={<WorkIcon/>}
      >
        <h3 className="vertical-timeline-element-title">Shanghai Sunflower Industrial Park </h3>
        <h4 className="vertical-timeline-element-subtitle">IT Support Engineer </h4>
        <p>
        •Maintained and upgraded computer equipment, including periodic database updates. </p> 
        <p>• Collaborated closely with cross-functional teams to troubleshoot issues and enhance overall system 
        reliability.  </p>

      </VerticalTimelineElement>
      

      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
}

export default MyTimeline;
