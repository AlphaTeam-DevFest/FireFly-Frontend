import React from 'react';
import Head from '../components/Head';
import PeaceZone from '../components/PeaceZone';
import PotentialConflictsZone from '../components/PotentialConflictsZone';
import CrisesZone from '../components/CrisesZone';

const LandingPage = () => {
  return (
    <div className='bg-center bg-cover ' style={{ backgroundImage: 'url(/Slide%2016_9%20-%204.svg)' }}>
      <Head/>
      <PeaceZone/>
      <PotentialConflictsZone/>
      <CrisesZone/>
    </div>
  );
}

export default LandingPage;
