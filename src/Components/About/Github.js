import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="serialkemu"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        loading={(loading) => (
          <p style={{ textAlign: "center", color: "white" }}>Loading...</p>
        )}
        error={(error) => (
          <p style={{ textAlign: "center", color: "red" }}>Failed to load contributions. Please check the username and try again.</p>
        )}
      />
    </Row>
  );
}

export default Github;
