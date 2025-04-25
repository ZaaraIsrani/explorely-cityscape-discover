
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { EventData } from '@/types/events';

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
      center: [-74.006, 40.7128], // NYC coordinates
      zoom: 12
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each event
    events.forEach((event) => {
      // Convert the relative x,y coordinates to actual longitude/latitude
      // This is a simplified conversion - you might want to adjust these values
      const lng = -74.006 + (event.x - 50) / 100;
      const lat = 40.7128 + (event.y - 50) / 100;

      const markerColor = {
        'Tech': '#3B82F6', // blue
        'Business': '#10B981', // green
        'Media': '#8B5CF6', // purple
        'Creativity': '#EC4899', // pink
        'Social Impact': '#F59E0B', // amber
        'Fashion Tech': '#F43F5E', // rose
        'Beauty & Cosmetics': '#8B5CF6', // violet
        'Biotech': '#10B981', // emerald
        'Digital Health': '#06B6D4', // cyan
        'FinTech': '#F97316', // orange
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

      // Add popup
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="p-2">
            <h3 class="font-semibold">${event.title}</h3>
            <p class="text-sm text-gray-600">${event.location}</p>
            <p class="text-xs text-gray-500">${event.date}</p>
            <a href="/event/${event.id}" class="mt-2 inline-block px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded hover:bg-blue-600">Learn More</a>
          </div>
        `);

      // Add marker
      new mapboxgl.Marker(markerEl)
        .setLngLat([lng, lat])
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
