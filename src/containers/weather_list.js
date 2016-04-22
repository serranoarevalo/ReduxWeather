import React from 'react';
import { connect } from 'react-redux';

class WeatherList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderWeather(cityData){
    	return (
    		<tr key={cityData.city.name}>
    			<td>{cityData.city.name}</td>
    		</tr>
    	);
    }

    render() {
        return (
        	<table className="table table-hover">
        		<thead>
        			<tr>
        				<th>City</th>
        				<th>Temperature</th>
        				<th>Pressure</th>
        				<th>Humidity</th>
        			</tr>
        		</thead>
        		<tbody>
        			{this.props.weather.map(this.renderWeather)}
        		</tbody>
        	</table>
        );
    }
}

function mapStateToProps({ weather}){
	return {
		weather
	}
}

export default connect(mapStateToProps)(WeatherList);
