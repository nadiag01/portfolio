import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template:`


<h1>Portfolio</h1>
          <div class="bio-1">
    <p> Hello, My name is Nadia and I am currently a student at Bellevue University in the web development program. </p>
    <p>Outside of graduating with my bachelors and continuing my career in this field, I also have a bucket list of things i hope to accomplish within my lifetime.</p>
    </div>


    <!-- ul for bucket list -->
     <div class="goal-list">
        <h2>Other Aspirations & Goals</h2>
        <br>
        <br>
        <br>
          <ul>
            <li>Traveling around the world</li>
            <li>Being apart of a film production</li>
            <li>Starting a luxuary picnic business</li>
            <li>Creating youtube content</li>
          </ul>
</div>
  `,
  styles: `

ul{

  margin: 0;
  padding:0;

}

li{
 vertical-align: top;
margin-right: 20px;
padding: 10px;
text-align:right;

}

// ul{
//   padding-left: 0;
// text-align:right;
// }

ul,li{
  list-style-position: inside;
}

h2 {
    float:right; /* Aligns header text to the right */
    margin: 10px 0; /* Adjusts top and bottom margin */
    padding-top: 0; /* Ensures no padding at the top */
    border:solid;
}

.bio-1 {
float: left;
width:200px;
}


  `
})
export class HomeComponent {

}
