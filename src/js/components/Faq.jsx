const Faq = () => (
  <section id="faq" className="faq section">
    <div className="faq__content section__content">
      <h2 className="faq__heading">Frequently Asked Questions</h2>
      <dl className="faq__questions">
        <dt className="faq__question">
          <h4 className="faq__subheading">
            What is the status of NodeSchoolSF?
          </h4>
        </dt>
        <dd className="faq__answer">
          We&apos;re back! 🎉 - At the moment, we are hosting live events in a
          limited capacity according to safety and health guidelines from the
          city and the venues. For more details, please check the event page
          linked above.
        </dd>

        <dt className="faq__question">
          <h4 className="faq__subheading">What do I need to bring?</h4>
        </dt>
        <dd className="faq__answer">
          Bring a laptop, a desire to learn, and all your friendship!
        </dd>

        <dt className="faq__question">
          <h4 className="faq__subheading">Who organizes this event?</h4>
        </dt>
        <dd className="faq__answer">
          Fernando Larrañaga (<a href="https://twitter.com/xabadu">@xabadu</a>
          ), and Thomas Hunter II (
          <a href="https://twitter.com/tlhunter">@tlhunter</a>) run the SF
          chapter.
        </dd>

        <dt className="faq__question">
          <h4 className="faq__subheading">
            What actually happens at a NodeSchool SF event?
          </h4>
        </dt>
        <dd className="faq__answer">
          NodeSchool SF events are an opportunity to hang out with other
          learners and mentors in a low stress, encouraging environment. Instead
          of the usual follow-along, presentation-driven workshops, learners can
          either work on self-paced{" "}
          <a href="https://nodeschool.io/">workshoppers</a> or hack on their own
          side projects. There is not a structured “curriculum” which must be
          followed.
          <br />
          <br />A typical event follows this schedule:
          <ul className="schedule">
            <li className="schedule__item">
              <strong>1:00</strong> - Doors open
            </li>
            <li className="schedule__item">
              <strong>1:15</strong> - Introduction and opening announcements
            </li>
            <li className="schedule__item">
              <strong>1:30-5:00</strong> - Learning/mentoring
            </li>
            <li className="schedule__item">
              <strong>3:00ish</strong> - Pizza! 🍕
            </li>
            <li className="schedule__item">
              <strong>5:00</strong> - Event ends
            </li>
          </ul>
        </dd>

        <dt className="faq__question">
          <h4 className="faq__subheading">What is a Focused Session?</h4>
        </dt>
        <dd className="faq__answer">
          Focused Sessions happen during our NodeSchool events. While our
          general event is free-form and self-directed, our Focused Sessions are
          more of a lecture-style format led by a mentor on special topics. We
          don&apos;t always have Focused Sessions, so keep an eye on our website
          and Twitter for announcements!
        </dd>

        <dt className="faq__question">
          <h4 className="faq__subheading">How much does it cost to attend?</h4>
        </dt>
        <dd className="faq__answer">
          NodeSchool SF is <strong>free</strong>! And{" "}
          <a href="https://github.com/nodeschool/sanfrancisco">open source</a>!
        </dd>

        <dt className="faq__question">
          <h4 className="faq__subheading">How do I become a mentor?</h4>
        </dt>
        <dd className="faq__answer">
          We&apos;re always looking for people to volunteer to be mentors! We
          ask that prospective mentors:
          <ul>
            <li>
              Have already completed the{" "}
              <a href="http://nodeschool.io/#workshopper-list">
                core NodeSchool workshoppers
              </a>{" "}
              before the event.
            </li>
            <ul>
              <li>
                Having also completed some elective workshoppers is a great
                bonus.
              </li>
            </ul>
            <li>
              Review the{" "}
              <a href="https://github.com/nodeschool/organizers/wiki/Event-Mentor-Best-Practices">
                Mentor Best Practices
              </a>{" "}
              wiki page.
            </li>
            <li>
              Arrive 30 minutes early (12:30p) so we can get setup and have our
              mentor meeting.
            </li>
            <li>
              Sign up on{" "}
              <a href="https:&#x2F;&#x2F;github.com&#x2F;nodeschool&#x2F;sanfrancisco&#x2F;issues&#x2F;297">
                the event&apos;s GitHub issue
              </a>
              !
            </li>
          </ul>
        </dd>

        <dt className="faq__question">
          <h4 className="faq__subheading">How do I sponsor an event?</h4>
        </dt>
        <dd className="faq__answer">
          We are always looking for more locations to host a NodeSchool event!
          These are a great way to get many beginner and intermediate level
          Node.js engineers, as well as advanced mentors, in your office. We are
          looking for the following criteria when it comes to hosts:
          <ul>
            <li>
              The ability to provide a space from 1:00 to 5:00 on a{" "}
              <strong>Saturday</strong>.
            </li>
            <li>Comfortable seating for up to 50 people.</li>
            <li>
              Cover the cost of food, which can range from $300 to $500 per
              event.
            </li>
            <li>
              A company representative who will be willing to say a few words
              about your company.
            </li>
          </ul>
          If you&apos;d like to offer us a hosting location please tell us about
          your space via{" "}
          <a href="https://github.com/nodeschool/sanfrancisco/issues/new">
            Github Issue
          </a>
          .
        </dd>

        <dt className="faq__question">
          <h4 className="faq__subheading">More questions?</h4>
        </dt>
        <dd className="faq__answer">
          <a href="https://github.com/nodeschool/sanfrancisco/issues">
            File an issue at our GitHub repo
          </a>{" "}
          and we&apos;ll answer as soon as possible.
        </dd>
      </dl>
    </div>
  </section>
);

export default Faq;
