import React, { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import mockevents from '../../db.json';
import EventCard from '../EventCard/EventCard';

const EventList = () => {
  const [events, setEvents] = useState(mockevents.events.map(e => ({
    ...e,
    date: new Date(e.date)
  })));

  return (
    <FlatList 
      data={events}
      renderItem={({ item }) =>  <EventCard event={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default EventList;