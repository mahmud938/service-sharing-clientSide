import React, { Suspense } from 'react';
import Banner from './Banner';
import HotService from './HotService';
import Team from './team';
import OtherMember from './otherMember';
import ServiceSection from './ServiceSection';
import AskQst from './AskQst';



const Home = () => {

  const servicePromise = fetch('https://service-sharing-server-lovat.vercel.app/lawers').then(res =>  res.json());
    return (
        <div>
          <Banner></Banner>
         
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}><HotService servicePromise={servicePromise}></HotService></Suspense>
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}><ServiceSection></ServiceSection></Suspense>
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}><Team></Team></Suspense>
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}><OtherMember></OtherMember></Suspense>
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}><AskQst></AskQst></Suspense>
        </div>
    );
};

export default Home;