import React, { useContext } from 'react';
import DestinationCard from '../components/DestinationCard';
import DestinationsContext from '../context/DestinationsContext';

export default function Destinations() {
  const title = 'Discover story-worthy travel moments - Trip With Me!';
  const description =
    'The results are in! Explore this year’s expert-approved list of must-see destinations, places, and unforgettable experiences guaranteed to inspire. Whether you’re interested in traveling to a new city, going on a cruise, or cooking a new dish — we’re committed to inspiring you to experience travel in a whole new way. ';
  const {
    state: { destinations }, // The object destructuring in destructuring process!! - interesting solution to get data
  } = useContext(DestinationsContext);
  return (
    <div className='destinations'>
      <div className='container'>
        <div className='row'>
          <div className='col-6 destinations__heading'>
            <h3 className='destinations__heading__body'>{title}</h3>
          </div>
          <div className='col-6 destinations__description'>
            <p className='destinations__description__body'>{description}</p>
          </div>
        </div>
        <div className='row'>
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            ></DestinationCard>
          ))}
        </div>
      </div>
    </div>
  );
}
