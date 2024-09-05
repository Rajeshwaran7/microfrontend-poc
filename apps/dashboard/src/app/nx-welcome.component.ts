import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-mf-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="homepage">
  <header class="header">
    <h1>Welcome to Micor frontend Application</h1>
    <p>Micro Frontends: This architectural style breaks a frontend app into smaller, independently deployable modules, allowing teams to develop, test, and deploy features independently.</p>
     <p>Module Federation: This Webpack feature allows multiple applications to share code and load modules from other applications at runtime. It's essential for micro frontend architectures as it enables seamless integration between independently developed micro frontends.
</p>
    <a routerLink="/login" class="cta-button">Get Started</a>
  </header>

  <section class="features">
    <h2>Features</h2>
    <div class="feature-cards">
      <div class="feature-card">
        <h3>NX Monorepo</h3>
        <p>Description of feature one. Highlight what makes it valuable to users.</p>
      </div>
      <div class="feature-card">
        <h3>Feature Two</h3>
        <p>Description of feature two. Explain the benefits and how it can be used.</p>
      </div>
      <div class="feature-card">
        <h3>Feature Three</h3>
        <p>Description of feature three. Outline its advantages and key points.</p>
      </div>
    </div>
  </section>

  <section class="about">
    <h2>About Us</h2>
    <p>Learn more about our mission, vision, and the team behind the application. Our goal is to provide the best service and solutions to our users.</p>
  </section>

  <footer class="footer">
    <p>&copy; 2024 Your Company. All rights reserved.</p>
    <a routerLink="/privacy-policy" class="footer-link">Privacy Policy</a>
    <a routerLink="/terms-of-service" class="footer-link">Terms of Service</a>
  </footer>
</div>`,
  styles: [
    `
  .homepage {
    font-family: Arial, sans-serif;
    color: #333;
    padding: 20px;
  }
  .header {
    text-align: center;
    padding: 50px 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  .header h1 {
    margin: 0;
    font-size: 36px;
  }
  .header p {
    font-size: 18px;
    margin: 10px 0;
  }
  .cta-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 18px;
    color: #fff;
    background-color: #007bff;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  .cta-button:hover {
    background-color: #0056b3;
  }
  .features {
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  .features h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  .feature-cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .feature-card {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 30%;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  .feature-card h3 {
    margin-top: 0;
  }
  .about {
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    text-align: center;
  }
  .about h2 {
    margin-bottom: 20px;
  }
  .footer {
    text-align: center;
    padding: 10px 0;
    background-color: #333;
    color: #fff;
  }
  .footer p {
    margin: 0;
  }
  .footer-link {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    font-size: 14px;
    transition: color 0.3s;
  }
  .footer-link:hover {
    color: #ffa500;
  }
`
    
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
