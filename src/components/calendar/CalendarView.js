import React, { useState } from 'react';
import TopBar from '../ui/TopBar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { messages } from '../../helpers/calendar-es';
import 'moment/locale/es';
import CalendarEvent from './CalendarEvent';
import ModalCalendar from './ModalCalendar';
import { useDispatch, useSelector } from 'react-redux';
import { uiAbrirModal } from '../../acctions/modalAcctions';
import AddNewfab from '../ui/AddNewfab';
import DeleteEventFab from '../ui/DeleteEventFab';
import { enventoClear, setEventoActivo } from '../../acctions/eventosAcctions';
moment.locale('es');

const localizer = momentLocalizer(moment);

const CalendarView = () => {
	const dispatch = useDispatch();
	const { eventos, eventoActivo } = useSelector((state) => state.evento);
	const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

	const handleSelectSlot = (e) => {
		dispatch(enventoClear());
	};

	const eventStyleGetter = (event, start, end, isSelected) => {
		const style = {
			backgroundColor: '#7b4ca0',
			borderRadius: '0px',
			opacity: 0.8,
			display: 'block',
			color: 'white',
		};
		return {
			style,
		};
	};
	const handleDoubleClick = (evento) => {
		handleSelectEvent(evento);
		dispatch(uiAbrirModal());
	};
	const handleSelectEvent = (evento) => {
		dispatch(setEventoActivo(evento));
	};
	const onViewChange = (e) => {
		localStorage.setItem('lastView', e);
		setLastView(e);
	};
	return (
		<div>
			<TopBar />
			<Calendar
				localizer={localizer}
				events={eventos}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 500 }}
				messages={messages}
				eventPropGetter={eventStyleGetter}
				onDoubleClickEvent={handleDoubleClick}
				onSelectEvent={handleSelectEvent}
				onView={onViewChange}
				view={lastView}
				onSelectSlot={handleSelectSlot}
				selectable={true}
				components={{ event: CalendarEvent }}
			/>
			{eventoActivo && <DeleteEventFab />}

			<AddNewfab />
			<ModalCalendar />
		</div>
	);
};

export default CalendarView;
