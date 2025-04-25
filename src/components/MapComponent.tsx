
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { EventData } from '@/types/events';
import { Link } from 'react-router-dom';

interface MapComponentProps {
  events: Array<EventData>;
  onEventSelect: (event: EventData) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ events, onEventSelect }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hyYXlwYXRlbGwiLCJhIjoiY205aTE1MndkMGIzajJqcTR6czA4M3NvbSJ9.O1iZDgp9VPWf_tQY3Bp7dg';

    // Initialize map centered on NYC
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-73.9856, 40.7497], // NYC coordinates
      zoom: events.some(e => e.category === "Cosmetics") ? 11.5 : 12 // Zoom out slightly for Cosmetics events
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Remove existing markers
    const markers = document.getElementsByClassName('mapboxgl-marker');
    while(markers[0]) {
      markers[0].remove();
    }

    // Add markers for each event
    events.forEach((event) => {
      const markerColor = {
        'Tech': '#3B82F6',
        'Business': '#10B981',
        'Media': '#8B5CF6',
        'Creativity': '#EC4899',
        'Social Impact': '#F59E0B',
        'Fashion Tech': '#F43F5E',
        'Beauty & Cosmetics': '#8B5CF6',
        'Biotech': '#10B981',
        'Digital Health': '#06B6D4',
        'FinTech': '#F97316',
        'Cosmetics': '#EC4899' // Pink color for Cosmetics events
      }[event.category] || '#374151';

      // Create custom marker element
      const markerEl = document.createElement('div');
      markerEl.className = 'cursor-pointer transition-transform hover:scale-110';
      markerEl.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="${markerColor}">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" stroke="white" stroke-width="2"/>
          <circle cx="12" cy="10" r="3" fill="white"/>
        </svg>
      `;

      // Add popup with minimal info and a link
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="p-2">
            <h3 class="font-semibold">${event.title}</h3>
            <p class="text-sm text-gray-600">${event.location}</p>
            <a href="/event/${event.id}" class="mt-2 inline-block px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded hover:bg-blue-600">Learn More</a>
          </div>
        `);

      // Add marker using actual coordinates
      new mapboxgl.Marker(markerEl)
        .setLngLat([event.x, event.y])
        .setPopup(popup)
        .addTo(map.current);

      // Add click handler
      markerEl.addEventListener('click', () => {
        onEventSelect(event);
      });
    });

    return () => map.current?.remove();
  }, [events, onEventSelect]);

  return (
    <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default MapComponent;
