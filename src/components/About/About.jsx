import profileImage from "../../images/Profile_Placeholder.jpg";
import "./About.css";

function About() {
  return (
    <section className="about">
      <img src={profileImage} alt="profile" className="about__image" />
      <div>
        <h2 className="about__header">About the author</h2>
        <p className="about__description">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with TripleTen, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
