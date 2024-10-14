import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  template: `
    <div class="resume-container">
      <header class="resume-header">
        <h1>Resume</h1>
      </header>

      <section class="experience">
        <h2>Experience</h2>
        <div class="job">
          <h3>Licensed Practical Nurse</h3>
          <p class="job-date">HCA Gulf Coast Hospital | November 2021 - Present </p>
          <ul>
            <li>Monitor vital signs and administer medications.</li>
            <li>Assist with daily activities such as bathing and dressing.</li>
          </ul>
        </div>
        <div class="job">
          <h3>Guest Service Representative</h3>
          <p class="job-date">Tyndall AFB | June 2018 - 2021</p>
          <ul>
            <li>Assisted customers with inquiries and provided exceptional service.</li>
            <li>Handled customer complaints and resolved issues promptly.</li>
          </ul>
        </div>
        <div class="job">
          <h3>Dietary Aide</h3>
          <p class="job-date">Bay Medical Sacred Heart | June 2017 - September 2017</p>
          <ul>
            <li>Supported kitchen staff in food preparation and service.</li>
            <li>Ensured dietary needs were met for patients.</li>
          </ul>
        </div>
        <div class="job">
          <h3>Cashier</h3>
          <p class="job-date">Walmart| January 2016 to June 2018</p>
          <ul>
            <li>Processed transactions and handled cash accurately.</li>
            <li>Provided friendly and efficient service to customers.</li>
          </ul>
        </div>
      </section>

      <section class="education">
        <h2>Education</h2>
        <div class="edu-item">
          <h3>Licensed Practical Nurse Licensure</h3>
          <p class="edu-date">Tom P. Haney Technical Center| 2020</p>
        </div>
        <div class="edu-item">
          <h3>General A.A</h3>
          <p class="edu-date">Gulf Coast State College| 2019 </p>
        </div>
        <div class="edu-item">
          <h3>Diploma</h3>
          <p class="edu-date">Rutherford High School| 2015</p>
        </div>
      </section>

      <section class="skills">
        <h2>Skills</h2>
        <ul>
          <li>Fast learner, Great with Multitasking</li>
          <li>Excellent communication, Reliable</li>
          <li>Works well with others</li>
        </ul>
      </section>
    </div>

    <p>Dowload Resume</p>
  `,
  styles: `
    .resume-container {
      max-width: 800px;
      margin: 30px auto;
      padding: 20px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .resume-header {
      text-align: center;
      margin-bottom: 30px;
    }

    .resume-header h1 {
      color: #ff7e5f;
      font-size: 2.5em;
    }

    .resume-header p {
      font-size: 1.2em;
      color: #555;
    }

    section {
      margin-bottom: 20px;
    }

    h2 {
      color: #ff7e5f;
      border-bottom: 2px solid #feb47b;
      padding-bottom: 5px;
      margin-bottom: 10px;
      text-align: left; /* Aligns section headings to the left */
    }

    .job, .edu-item {
      margin-bottom: 15px;
      padding: 10px;
      background: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h3 {
      color: #333;
      margin: 5px 0;
      text-align: left; /* Aligns job titles to the left */
    }

    p {
      margin: 5px 0;
      text-align: left; /* Aligns dates to the left */
    }

    .job-date, .edu-date {
      font-style: italic;
      color: #777; /* Lighter color for dates */
      margin-bottom: 10px; /* Adds space below the date */
    }

    ul {
      list-style-type: disc;
      padding-left: 20px;
      text-align: left; /* Aligns list items to the left */
    }

    ul li {
      margin-bottom: 5px;
    }
  `,
})
export class ResumeComponent {}
