import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <h2>More About Me</h2>
<br>
<br>
<br>
    <p>I've always enjoyed delving into creativity, specifically when it comes to the internet.</p>
    <p>I first discovered my interest in web development while in my junior year of high school.</p>
    <p>I decided to sign up for a web development class to expand and try something new, I enjoyed It! </p>
    <p>Since then, I have managed the courage to seek out my goals in becoming a full stack web developer.</p>

  `,
  styles: `
p{
  text-align: center;
}
  `
})
export class AboutComponent {

}
