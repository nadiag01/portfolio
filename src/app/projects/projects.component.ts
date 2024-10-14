import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    <h2>Projects</h2>

    <div class="project">
      <figure>
        <img src="/pics/biosite_project_pic.png" alt="biositeproject" />
        <figcaption class="pic-text">
          <a href="https://nadiag01.github.io/biosite/index.html">Biosite</a>
        </figcaption>
      </figure>
    </div>
    <div class="project">
      <figure>
        <img src="pics/in-n-out books.png" alt="in-n-out-books project" />
        <figcaption class="pic-text">
          <a
            href="https://nadiag01/github.io/web-420/index.html"
          >
            in-n-out-books</a
          >
        </figcaption>
      </figure>
    </div>
  `,
  styles: `
img {
max-width:30%;
height:
display: block;
  }

  .project {
    margin: 30px 30px;
  }
  `,
})
export class ProjectsComponent {}
