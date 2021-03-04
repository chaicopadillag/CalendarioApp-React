import React from 'react';

const CalendarEvent = ({ event }) => {
	const { title, user } = event;
	return (
		<div>
			<span>{title}</span>
			<strong> - {user.nombre}</strong>
		</div>
	);
};

export default CalendarEvent;
