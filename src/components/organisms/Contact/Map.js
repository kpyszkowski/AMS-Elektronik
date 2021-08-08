import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const mapContainerStyle = {
	width: '100%',
	height: '400px',
	borderRadius: '10px',
	overflow: 'hidden',
};

const Map = () => {
	const mapContainerRef = useRef(null);

	const [map, setMap] = useState(null);

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			accessToken:
				'pk.eyJ1IjoicXJ4IiwiYSI6ImNrcnl4YXZlMDEwbHQzMW1rZjFlMTBqemUifQ.DUitlik0UJ70PNUn8DBxDA',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [15.693038150000005, 52.2594941],
			zoom: 10.5,
		});
		map.addControl(new mapboxgl.NavigationControl(), 'top-right');

		setMap(map);

		const marker = new mapboxgl.Marker({ color: '#356be9' })
			.setLngLat([15.693038150000005, 52.2594941])
			.addTo(map);

		return () => map.remove();
	}, []);

	return <div ref={mapContainerRef} style={mapContainerStyle} />;
};

export default Map;
