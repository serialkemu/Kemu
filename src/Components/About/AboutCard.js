import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harriet Kemunto </span>
            from <span className="purple"> Nairobi,Kenya</span>
            <br />
            <br />
            I have a Degree in Business Information Technology (BBIT)
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Volunteering with the youths
            </li>
            <li className="about-activity">
              <ImPointRight />  Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement."{" "}
          </p>
          <footer className="blockquote-footer">Golda Meir, first female prime minister of Israel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
