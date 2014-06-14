USE demo;

INSERT INTO devices (id, type, description, location, unit) VALUES ('1', 'electricityConsumption', 'Heat Pump Electricity Meter (Wh)', 'Kitchen', 'kWh');
INSERT INTO devices (id, type, description, location, unit) VALUES ('2', 'temperatureRadiant', 'Heat Pump Evaporator Air Off Temperature (¡C)', 'Kitchen', 'C');
INSERT INTO devices (id, type, description, location, unit) VALUES ('3', 'temperatureAmbient', 'Ground Ambient Temperature (¡C)', 'Kitchen', 'C');
INSERT INTO devices (id, type, description, location, unit) VALUES ('4', 'relativeHumidity', 'Ambient humidity (%)', 'Kitchen', '%RH');

INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('1', 'electricityConsumption', '2014-05-01 00:00:00', '11');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('1', 'electricityConsumption', '2014-05-01 01:00:00', '13');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('1', 'electricityConsumption', '2014-05-01 02:00:00', '15');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('1', 'electricityConsumption', '2014-05-01 03:00:00', '20');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('1', 'electricityConsumption', '2014-05-01 04:00:00', '21');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('1', 'electricityConsumption', '2014-05-01 05:00:00', '22');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('1', 'electricityConsumption', '2014-05-01 06:00:00', '23');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('1', 'electricityConsumption', '2014-05-01 07:00:00', '24');


INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('2', 'temperatureRadiant', '2014-05-01 00:00:00', '22');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('2', 'temperatureRadiant', '2014-05-01 01:00:00', '22');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('2', 'temperatureRadiant', '2014-05-01 02:00:00', '22.6');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('2', 'temperatureRadiant', '2014-05-01 03:00:00', '23');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('2', 'temperatureRadiant', '2014-05-01 04:00:00', '23.2');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('2', 'temperatureRadiant', '2014-05-01 05:00:00', '23.5');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('2', 'temperatureRadiant', '2014-05-01 06:00:00', '24');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('2', 'temperatureRadiant', '2014-05-01 07:00:00', '24.6');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('2', 'temperatureRadiant', '2014-05-01 08:00:00', '23.1');

INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('3', 'temperatureAmbient', '2014-05-01 00:00:00', '12.8');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('3', 'temperatureAmbient', '2014-05-01 01:00:00', '13.1');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('3', 'temperatureAmbient', '2014-05-01 02:00:00', '13.0');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('3', 'temperatureAmbient', '2014-05-01 03:00:00', '13.3');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('3', 'temperatureAmbient', '2014-05-01 04:00:00', '13.1');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('3', 'temperatureAmbient', '2014-05-01 05:00:00', '14.0');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('3', 'temperatureAmbient', '2014-05-01 06:00:00', '14.6');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('3', 'temperatureAmbient', '2014-05-01 07:00:00', '15.1');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('3', 'temperatureAmbient', '2014-05-01 08:00:00', '15.9');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('3', 'temperatureAmbient', '2014-05-01 09:00:00', '16.0');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('3', 'temperatureAmbient', '2014-05-01 10:00:00', '16.4');

INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('4', 'relativeHumidity', '2014-05-01 00:00:00', '60');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('4', 'relativeHumidity', '2014-05-01 01:00:00', '60');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('4', 'relativeHumidity', '2014-05-01 02:00:00', '60');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('4', 'relativeHumidity', '2014-05-01 03:00:00', '60');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('4', 'relativeHumidity', '2014-05-01 04:00:00', '60');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('4', 'relativeHumidity', '2014-05-01 05:00:00', '61');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('4', 'relativeHumidity', '2014-05-01 06:00:00', '65');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('4', 'relativeHumidity', '2014-05-01 07:00:00', '66');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('4', 'relativeHumidity', '2014-05-01 08:00:00', '67');
INSERT INTO measurements (device_id, type, timestamp, value) VALUES ('4', 'relativeHumidity', '2014-05-01 09:00:00', '70');





  
