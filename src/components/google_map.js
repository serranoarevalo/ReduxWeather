import React from 'react';
import {GoogleMapLoader, GoogleMap } from 'react-google-maps'

export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        	<GoogleMapLoader
        		containerElement={ <div style={{ height: '200px'}} /> }
        		googleMapElement={
        			<GoogleMap defaultZoom={12} defaultCenter={{lat: this.props.lat, lng: this.props.lon}} />
        		}
        	/>
        );
    }
}
