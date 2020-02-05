const stateResponse = {
  icao24: 0,
  // Callsign of the vehicle (8 chars). Can be null if no callsign has been received.
  callsign: 1,
  // Country name inferred from the ICAO 24-bit address.
  origin_country: 2,
  // Unix timestamp (seconds) for the last position update. Can be null if no position report was received by OpenSky within the past 15s.
  time_position: 3,
  // Unix timestamp (seconds) for the last update in general. This field is updated for any new, valid message received from the transponder.
  last_contact: 4,
  // WGS-84 longitude in decimal degrees. Can be null.
  longitude: 5,
  // WGS-84 latitude in decimal degrees. Can be null.
  latitude: 6,
  // Barometric altitude in meters. Can be null.
  baro_altitude: 7,
  // Boolean value which indicates if the position was retrieved from a surface position report.
  on_ground: 8,
  // Velocity over ground in m/s. Can be null.
  velocity: 9,
  // True track in decimal degrees clockwise from north (north=0°). Can be null.
  true_track: 10,
  // Vertical rate in m/s. A positive value indicates that the airplane is climbing, a negative value indicates that it descends. Can be null.
  vertical_rate: 11,
  // IDs of the receivers which contributed to this state vector. Is null if no filtering for sensor was used in the request.
  sensors: 12,
  // 	Geometric altitude in meters. Can be null.
  geo_altitude: 13,
  // ing	The transponder code aka Squawk. Can be null.
  squawk: 14,
  // Whether flight status indicates special purpose indicator.
  spi: 15,
  // Origin of this state’s position: 0 = ADS-B, 1 = ASTERIX, 2 = MLAT
  position_source: 16
};

module.exports = stateResponse;
