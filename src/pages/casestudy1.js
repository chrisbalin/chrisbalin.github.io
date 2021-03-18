import React from "react"
import Layout from "../components/layout"

export default function CaseStudy() {
  return (
    <div class="casestudy">
      <section class="section0">
        <h1>Codeless Automation</h1>
        <div class="description">
          <p class="description-text"><span class="bold">Applause Codeless Automation</span> is a new offering that enables anyone to create automated software tests without writing a line of code.</p>
          <p>👇Scroll down to learn more.</p>
        </div>
      </section>
      <section class="section1">
        <span class="numeral">01</span>
        <h1>The Problem</h1>
        <p>Automated testing saves time and money, but it requires people to be able to write test scripts. This means software engineers must write tests as they develop features, or QA teams need dedicated resources with the skills to write tests.</p>
        <p>In talking with customers, it became clear that QA managers prefer automated testing when possible (vs having people test manually), but they rarely have the resources or time to create tests at the same pace that engineers are releasing features.</p>
        <p>Codeless Automation was conceived to solve this problem, as an in-browser tool to make it so anybody - regardless of coding ability - could create automated tests of mobile and web software</p>
      </section>
      <section class="section2">
        <span class="numeral">02</span>
        <h1>Beginnings</h1>
        <p>Codeless Automation was initially built as a simple proof of concept by Jon, our engineering lead.</p>
        <p>When the business decided to build it out as a fully-fledged product, I was brought on board and began to conduct research and sketch out wireframes.</p>
        <p>Cathy (product manager) and I convened a group of internal users. With a mix of manual and automated QA experience, they reflected the target user personas we were building for.</p>
        <p>We met consistently with this internal user group to ask questions, test wireframes, and validate product decisions. Their feedback was invaluable as I iterated on design ideas.</p>
      </section>
      <section class="section3">
        <span class="numeral">03</span>
        <h1>Creating a Test</h1>
        <p>We agreed early on that <span class="bold">Creating a Test</span> was the core of the product, and it was particularly important to make this flow as clear and simple as possible.</p>
        <p>Creating a test consists of two distinct phases. Let's say you want to test the log in flow of an app. First, using the in-browser device simulator, you record the action of logging in.</p>
        <p>Next, you need to tell the computer how to recognize that you've successfully logged in. This is done using something called assertions, which are bits of logic tied to elements on the screen.</p>
        <p>In this case, you would add an assertion to verify that the text 'Home' appears at the end of the test. If the computer re-runs the test and doesn't find the element containing 'Home', the test will fail.</p>
        <p>We went through a number of iterations of this flow, using regular feedback from the internal user group to guide our product and design decisions. Improvements like the progress indicator at the top, and moving the action buttons to the left of the recording screen, were inspired by and validated in these sessions.</p>
        <h2>Early Wireframes</h2>
        <div class="image"><img src={'/wire1.png'} /></div>
        <div class="image"><img src={'/wire2.png'} /></div>
        <h2>Final Mockups</h2>
        <h3>Recording a test</h3>
        <div class="image"><img src={'/recordtest.png'} /></div>
        <h3>Adding assertions</h3>
        <div class="image"><img src={'/assertion1.png'} /></div>
        <div class="image"><img src={'/assertion2.png'} /></div>
        <div class="image"><img src={'/assertion3.png'} /></div>
        <div class="image"><img src={'/assertion4.png'} /></div>
      </section>
      <section class="section4">
        <span class="numeral">04</span>
        <h1>Organizing and Running Tests</h1>
          <p>Once tests are recorded, it's crucial to be able to organize them across Test Suites. A Test Suite is a bucket of tests with a shared purpose.</p>
          <p>We initially explored using a folder structure for this, but it became clear that our users wanted to easily assign the same test to multiple suites. This led to using a tag approach instead.</p>
          <p>My first approach was to use a list of cards for tests. Over time, we realized that using a table instead would allow for more flexibility in sorting and filtering across large quantities of tests.</p>
          <h3>Early mockup</h3>
          <div class="image"><img src={'/early-test-org.png'} /></div>
          <h3>Final mockup</h3>
          <div class="image"><img src={'/aca1.png'} /></div>
          <h2>Running tests</h2>
          <p>Running tests was the final piece of the core experience that we needed for launch. Once a test is recorded, it can be executed automatically when the user uploads new versions of their app. I used some design patterns for test results that I had already established in separate projects. These had already been validated with users and had the benefit of maintaining consistency between Codeless Automation (a standalone tool) and our primary customer platform.</p>
          <div class="image"><img src={'/aca3.png'} /></div>
      </section>
      <section class="section5">
        <span class="numeral">05</span>
        <h1>Success Metrics</h1>
        <p>There are several metrics we'll use to measure success from a UX and product perspective. The first, and perhaps most important, is ensuring that any user can successfully create and run their first test. Much like Facebook's famous <a href="https://customer.io/blog/finding-aha-moment/">"7 friends in 10 days"</a>, I believe that if we do this successfully, our users will come back again and again to use our product.</p>
        <p>We'll also track overall product usage and engagement. More generally, as the product rolls out in beta and public launch, we'll run targeted usability sessions to validate decisions and find areas for improvement.
        </p>
      </section>
    </div>
  )
}
