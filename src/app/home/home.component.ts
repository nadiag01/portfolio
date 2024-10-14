import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="home-main">
      <h1>Portfolio</h1>
      <p>
        Hello, and welcome to my personal portfolio! My name is Nadia, and I am
        currently a student at Bellevue University in the web development
        program.
      </p>
      <p>
        Outside of graduating with my bachelor's and continuing my career in this
        field, I have a bucket list of things I hope to accomplish within
        my lifetime.
      </p>

      <div class="user-img">
        <img src="/pics/portfoliopic1.JPG" alt="Nadia" />
      </div>
    </div>

    <div class="personal-info">
      <h2>🎯 Things I Would Love To Do</h2>
      <ul>
        <li>✈️ Travel to other countries</li>
        <li>🎥 Create a YouTube Channel</li>
        <li>🎬 Be cast in a TV show/Movie</li>
      </ul>
    </div>
  `,
  styles: `
    body {
      background-color: #f0f4f8;
      font-family: 'Arial', sans-serif;
      color: #333;
    }

    .home-main {
      margin: 30px auto;
      max-width: 800px;
      background: linear-gradient(135deg, #ff7e5f, #feb47b);
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;
    }

    .home-main h1 {
      margin: 20px 0;
      font-size: 2.8em;
      color: #fff;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }

    .home-main p {
      margin-bottom: 15px;
      font-size: 1.2em;
      color: #fff;
    }

    .home-main .user-img {
      margin: 30px 0;
      text-align: center;
    }

    .personal-info {
      margin: 30px;
      padding: 20px;
      border-radius: 8px;
      background-color: #ffffff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      position: relative;
      z-index: 1;
    }

    .personal-info h2 {
      margin: 10px 0;
      font-size: 2em;
      color: #ff7e5f;
      border-bottom: 2px solid #feb47b;
      padding-bottom: 10px;
    }

    .personal-info ul {
      list-style-type: none;
      padding-left: 0;
    }

    .personal-info ul li {
      margin-bottom: 15px;
      font-size: 1.1em;
      color: #555;
      position: relative;
      padding-left: 30px;
    }

    .personal-info ul li::before {
      content: '✔️';
      position: absolute;
      left: 0;
      color: #ff7e5f;
    }

    img {
      width: 100%;
      max-width: 300px;
      height: auto;
      border-radius: 12px;
      border: 4px solid #feb47b;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  `,
})
export class HomeComponent {}
