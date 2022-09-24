import { useState } from 'react';
import Calendar from '../workshop/Calendar';
import GoodToKnow from './GoodToknow';
import Plan from './Plan';
import TouringBanner from './TouringBanner';
import TripDetails from './TripDetails';

const TouringPlan = () => {
  const [startDate, setDate] = useState(new Date());
  return (
    <div>
      <TouringBanner />
      <Plan />
      <GoodToKnow />
      <TripDetails />
      <Calendar when={startDate} onDateChange={(date: Date) => setDate(date)} />
    </div>
  );
};

export default TouringPlan;
