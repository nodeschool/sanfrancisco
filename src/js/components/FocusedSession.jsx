const FocusedSession = () => (
  <section id="focused-session" className="focused section hidden">
    <div className="focused__content section__content">
      <h2 className="focused__heading">Upcoming Focused Session</h2>
      <h3 className="focused__subheading">
        An intro to using SQL databases to build web apps
      </h3>
      <p>
        Kevin Qi (<a href="https://twitter.com/kevinsqi">@kevinsqi</a>) will be
        talking about how to use a relational database like PostgreSQL or MySQL
        to store data for web apps. Using a hypothetical e-commerce site as a
        working example, he will cover:
      </p>

      <ul>
        <li>
          Designing tables and relationships between them (primary and foreign
          keys, one-to-many and many-to-many relationships)
        </li>
        <li>Creating those tables and inserting data (CREATE TABLE, INSERT)</li>
        <li>Querying them to fetch data for your app (SELECT, JOINs).</li>
      </ul>
      <p>
        After covering relational database concepts with raw SQL, he will
        briefly go over how to work with SQL databases in a Node.js app using
        the Knex.js library.
      </p>
    </div>
  </section>
);

export default FocusedSession;
