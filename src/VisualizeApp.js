import React from 'react';
import {getQueryStringForEventsByPerformer} from './artistSearch.js';
import {ScrollBar} from'./components/ScrollBar.js';
import {World} from'./components/World.js';
import * as topojson from 'topojson';

const ZOOM_ANIM_TIME = 1000;
const ZOOM_ALT =  0.25;


export class VisualizeApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { events: [], eventsPathData: [], propsData: [], polygonData: [], eventsLabelData: [], resultErrorString: "" };
      this.worldRef = React.createRef(); 
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.zoomToVenue = this.zoomToVenue.bind(this);
    }
  
    zoomToVenue(lat, lng) {
      const targetLocation = { lat: lat, lng: lng, altitude: ZOOM_ALT };
      const node = this.worldRef.current;
      node.pointOfView(targetLocation, ZOOM_ANIM_TIME);
    }

    componentDidMount() {
      this.handlePolygonLoad();
    }

    render() {
      return (
        <div className='visualSpace'>
          <ScrollBar zoomFunc={this.zoomToVenue} items={this.state.events} />
          <div id="searchSection">
            <h3>Event Tour Visualizer</h3>
            <form onSubmit={this.handleSubmit}>
              <input
                id="new-todo"
                onChange={this.handleChange}
                value={this.state.text}
                placeholder={"Search band/team!"}
              />
              <button>
                Search
              </button>
            </form>
            <button onClick={() => this.handleButtonPress("Twenty One Pilots")}>
              Twenty One Pilots
            </button>
            <button onClick={() => this.handleButtonPress("Panic at the Disco")}>
              Panic At The Disco
            </button>
            <button  onClick={() => this.handleButtonPress("FC Barcelona")}>
              FC Barcelona
            </button>
            <button onClick={() => this.handleButtonPress("Seattle Mariners")}>
              Seattle Mariners
            </button>
            <div>
              <span className='errorMessage'>
                {this.state.resultErrorString}
              </span>
            </div>
          </div>

          <World worldRef={this.worldRef} points={this.state.eventsPathData} labels={this.state.eventsLabelData} polygons={this.state.polygonData}/>
        </div>
      );
    }
  
    handleButtonPress = (event) => {
      this.setState({ text: event });
      this.handleButtonSubmit(event);
    }

    filterEventDataToGlobeData(eventData, label) {
      let pathData = [];
      let cordData = [];
      let labelData = [];
      let pathColorString = "#4717F6";
      let labelColorString = "#A239CA";
      let lastLat = 0;
      let lastLon = 0;
      for (let i = 0; i <  eventData.length; i++) {
        let lat = eventData[i].venue.location.lat;
        let lon = eventData[i].venue.location.lon;
        if (!(lat === lastLat && lon === lastLon)) {
          cordData.push([lat, lon]);
          labelData.push({"lat" : lat, "lng" : lon, "name" : eventData[i].venue.name, "color" : labelColorString})
          lastLat = lat;
          lastLon =  lon;
        }
      }
      pathData = [{"coords" : cordData, "color" : pathColorString, "name" : label}]

      console.log(pathData)
      return {"pathData" : pathData, "labelData" : labelData};
    }

    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    async handleSubmit(e) {
      if (e) {
        e.preventDefault();
      }
      await this.handleButtonSubmit(this.state.text);
    }

    async handleButtonSubmit(text) {
      if (text.length === 0) {
        return;
      }
      let queryString = getQueryStringForEventsByPerformer(text);
      const response =
        await fetch(queryString)
          .then(function(response) {
              return response.json();
          })
          .then(function(myJson) {
            return myJson.events;
          })
        .catch(function(err) {
              console.log(err);
        });
      let globeData = this.filterEventDataToGlobeData(response, text);
      if (globeData.labelData[0]) {
        this.zoomToVenue(globeData.labelData[0].lat, globeData.labelData[0].lng);
      }
      else {
        this.setState(state => ({
          resultErrorString: "no results for: "+ text + " 😔",
        }));
        return;
      }
      this.setState(state => ({
        events: response,
        eventsPathData: globeData.pathData,
        eventsLabelData: globeData.labelData,
        text: ''
      }));

    }

    async handlePolygonLoad() {
      const response =
        await fetch('//unpkg.com/world-atlas/land-110m.json').then(res => res.json())
        .then(landTopo => {
          this.setState(state => ({
            polygonData: topojson.feature(landTopo, landTopo.objects.land).features,
          }));
        });
    }
}