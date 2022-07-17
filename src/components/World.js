import React from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';

export class World extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    const polygonsMaterial = new THREE.MeshBasicMaterial({ color: '#EFDFDD', side: THREE.DoubleSide });
    return <Globe 
        ref={this.props.worldRef}
        pathsData={this.props.points}
        showGlobe={false}
        showAtmosphere={false}
        polygonsData={this.props.polygons}
        polygonCapMaterial={polygonsMaterial}
        pathPoints="coords"
        pathPointLat={p => p[0]}
        pathPointLng={p => p[1]}
        pathDashGap={1}
        pathDashAnimateTime={60000}
        pathDashLength={0.02}
        pathStroke={3}
        pathPointAlt={0.02}
        pathColor={path => path.color}
        backgroundColor="rgba(0,0,0,0)"
        polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
        labelsData={this.props.labels}
        labelLat={label => label.lat}
        labelLng={label => label.lng}
        labelText={label => label.name}
        labelSize={() => 0.15}
        labelDotRadius={() => 0.25}
        labelResolution={2}
        labelAltitude = {0.018}
        labelColor={label => label.color}
    />;
  }
};