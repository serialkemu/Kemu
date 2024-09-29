import React from 'react';  // Single React import
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Github() {
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
  
    return contributions.filter(activity => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="serialkemu"
        blockSize={15}
        blockMargin={5}
        color="red"
        fontSize={16}
        transformData={selectLastHalfYear} 
        labels={{
          totalCount: '{{count}} contributions in the last half year',
        }}
        loading={(loading) => (
          <p style={{ textAlign: 'center', color: 'white' }}>Loading...</p>
        )}
        error={(error) => (
          <p style={{ textAlign: 'center', color: 'red' }}>Failed to load contributions. Please check the username and try again.</p>
        )}
      />
    </Row>
  );
}

export default Github;
