import React, { useState, useEffect } from 'react';

import TabContent from './TabContent';
import TabMenu from './TabMenu';

const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobIndex, setJobIndex] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const newJobs = await response.json();
      setJobs(newJobs);
    } catch (err) {
      setError(true);
      console.log(`error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    );
  }

  return (
    <section className='section'>
      <div className='title'>
        <h2>expierence</h2>
        <div className='underline'></div>
      </div>
      {error && <p className='error'>Something went wrong</p>}
      {!error && (
        <div className='jobs-center'>
          <TabMenu jobs={jobs} jobIndex={jobIndex} onClick={(index) => setJobIndex(index)} />
          {jobs[jobIndex] && (
            <TabContent
              company={jobs[jobIndex].company}
              dates={jobs[jobIndex].dates}
              duties={jobs[jobIndex].duties}
              title={jobs[jobIndex].company}
            />
          )}
        </div>
      )}
    </section>
  );
}

export default App;
