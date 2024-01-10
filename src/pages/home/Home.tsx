import React from 'react';
import Tabs from '../../components/Tabs';

function Home() {
  return (<>
    <Tabs 
      tabsArray={['Home', 'About']}
      activeTab={'home'}
      setActiveTab={()=> console.log('hi')}
    />
    <div className="max-w-full border-2 border-black bg-white p-5 font-bold">
      <div>
        <h3>Home</h3>
        <p>Lore ipsum dolor sit amet</p>
      </div>
    </div>
  </>)
}

export default Home;
