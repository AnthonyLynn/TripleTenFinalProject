import profileImage from "../../images/Profile_Placeholder.jpg";
import "./AboutAuthor.css";

function AboutAuthor() {
  return (
    <section className="about-author">
      <img src={profileImage} alt="profile" className="about-author__image" />
      <div>
        <h2 className="about-author__header">About the author</h2>
        <p className="about-author__description">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with TripleTen, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default AboutAuthor;
