import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function BigMap() {
  const inputLocation = useRef(null);
  const [location, setLocation] = useState('');
  const [showMap, setShowMap] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission on Enter
      searchLocation();
    }
  };

  function searchLocation() {
    setLocation(inputLocation.current.value);
    setShowMap(true);
  }

  function SearchBar() {
    return (
      <Form className='d-flex'>
        <Form.Control
          ref={inputLocation}
          type='search'
          placeholder='Enter city or location'
          className='ms-0 mt-2'
          aria-label='Search'
          onKeyDown={handleKeyDown}
        />
        <Button
          className='ms-2 mt-2 myFont bold'
          gap={1}
          variant='dark'
          onClick={searchLocation}
        >
          Search
        </Button>
      </Form>
    );
  }

  function Map() {
    const mapURL = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_MAP_API_KEY}&q=${location}`;
    return (
      <iframe
        className='interactive--map'
        title='interactive map'
        style={{ border: 0 }}
        loading='lazy'
        allowFullScreen
        referrerPolicy='no-referrer-when-downgrade'
        src={mapURL}
      ></iframe>
    );
  }

  return (
    <div className='bg--div'>
      <h1 className='bold'>Map</h1>
      <SearchBar />
      {showMap && <Map />}
    </div>
  );
}
