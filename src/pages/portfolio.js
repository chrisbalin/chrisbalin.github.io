import React from "react"
import Layout from "../components/layout"

export default function Portfolio() {
  return (
    <div class="portfolio">
      <h1>Hi, I'm Chris Balin, a product designer who loves solving real problems for real people.</h1>
      <div class="about">
        <div class="about-tile">
          <h2 class="about-header">Wrangling complexity</h2>
          <div class="about-body">Solving problems is why I'm a designer in the first place. I thrive on breaking down complex situations and delivering flexible, easy-to-use solutions.</div>
        </div>
        <div class="about-tile">
          <h2 class="about-header">Pushing to pixel-perfect</h2>
          <div class="about-body">I'd be skeptical of any designer who thinks their first ideas are their best ideas. Ego-less iteration is the key to getting things right.</div>
        </div>
        <div class="about-tile">
          <h2 class="about-header">Collaboration is everything</h2>
          <div class="about-body">The best products are never a solo effort. I'm experienced in partnering with cross-functional stakeholders to build innovative, user-centric products.</div>
        </div>
        <div class="about-tile">
          <h2 class="about-header">Championing the user above all</h2>
          <div class="about-body">While balancing business strategy and technical considerations, I never lose sight of the truth that we're making things for real people.</div>
        </div>
      </div>

      <div class="work">
        <div class="work-copy">
          <h2>Automated software testing, no code needed</h2>
          <p><span class="bold">Applause Codeless Automation</span> is a new offering that enables anyone to create automated software tests without writing a line of code.</p>
          <h3>A brief explanation</h3>
          <p>Let's say you want to test a food delivery app. You want to make sure you can order a pizza without the app breaking. Pretty simple test, right? Choose a restaurant, choose a pizza (pepperoni, obviously), checkout. Nothing breaks? You're good.</p>
          <p>So there are two ways you can test this: have a human do it manually, or write a script to have a computer do it automatically. Having the computer do it saves a bunch of time, and can be repeated over and over - but, first you need someone who can write the script.</p>
          <p>Codeless Automation removes that need. Using a smartphone simulator in the browser, users can create a test flow - ordering that pizza - the same as if they were interacting with an app on their phone.</p>
          <h3>The design process</h3>
          <p>As a stand-alone offering, Codeless Automation was an opportunity to design an entire product from the ground up. Working closely with stakeholders in Product and Engineering, we defined a core set of requirements rooted in business needs and user goals.</p>
          <p>Moving from wireframes to mockups and prototypes, I met consistently with a core internal user group - people with QA backgrounds in both manual and automated testing. Their expertise informed design decisions about how best to simplify the process of recording, organizing, and executing tests.</p>
          <p>In the final weeks before the public launch of Codeless Automation, I dug into the front-end, committing production code to ensure that the final UI is pixel-perfect, responsive, and accessible to all users.</p>
          <a href={'/casestudy1'} class="button">Read Detailed Case Study</a>
        </div>
        <div class="work-images">
          <div class="image"><img src={'/aca2.png'} /></div>
          <div class="image"><img src={'/aca1.png'} /></div>
          <div class="image"><img src={'/aca3.png'} /></div>
        </div>
      </div>
      <div class="work">
        <div class="work-copy">
          <h2>A credit score for software quality</h2>
          <p>The <span class="bold">Applause Quality Score</span> was designed to help dev teams better understand their software's quality and make data-driven release decisions.</p>
          <p>I worked closely with our Product and Data Science teams to build out analytics that remove ambiguity from the QA release process.</p>
        </div>
        <div class="work-images">
          <div class="image"><img src={'/aqs2.png'} /></div>
        </div>
      </div>
      <div class="work">
        <div class="work-copy">
          <h2>Comprehensive test case management</h2>
          <p>A test case is the basic unit of manual software testing. Think of it like a recipe: a set of instructions with an expected result. A tester follows the instructions, and makes sure that nothing in the app breaks when they do.</p>
          <p>Testing managers need to organize all these recipes somehow, and our existing in-platform tools lacked in capability and were decidedly not user-friendly.</p>
          <p>I worked with internal stakeholders to design a better solution, making it easy to organize and manage tests while maintaining flexibility for more complex use cases.</p>
        </div>
        <div class="work-images">
          <div class="image"><img src={'/tcm1.png'} /></div>
          <div class="image"><img src={'/tcm2.png'} /></div>
        </div>
      </div>
      <div class="work">
        <div class="work-copy">
          <h2>Dashboards and E-commerce widgets for a product reviews platform</h2>
          <p>Upon joining <span class="bold">PowerReviews</span>, I was responsible for designing a dashboard for the company's self-service portal. The primary aim in creating this dashboard was to present high-level analytics, actionable items, and relevant notifications.</p>
          <p>I also designed a set of styles to create consistency across the company's charts and analytics.</p>
          <p>I conducted research, created mockups and prototypes, and ultimately built out a static front-end for the dashboard which was handed off to the team's developers.</p>
        </div>
        <div class="work-images">
          <div class="image"><img src={'/pr1.png'} /></div>
          <div class="image"><img src={'/pr2.png'} /></div>
        </div>
      </div>
      <div class="work">
        <div class="work-copy">
          <h2>Web-based 3D design tools for makers</h2>
          <p>At <span class="bold">Inventables</span>, I helped to bring the maker movement to the browser. Easel is a web app designed to work with Inventables' CNC machines. The typical workflow for these kind of machines is complicated, involving multiple pieces of software to actually make anything. In contrast, Easel is an all-in-one solution for users to design in 2D, preview real-time in 3D, and easily send the project to their machine.</p>
          <p>Working closely with the development team, I led all aspects of UX and UI design on Easel. This involved usability testing and user research, wireframes, user flow mockups, along with extensive front-end development.</p>
          <p>In my time at Inventables, Easel grew from a private beta with 15 users to more than 60,000 users.</p>
        </div>
        <div class="work-images">
          <div class="image"><img src={'/easel.png'} /></div>
          <img src={'/inventables1.png'} />
        </div>
      </div>
    </div>
  )
}
