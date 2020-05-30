import React from 'react';
import moment from 'moment'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction";
import { connect } from 'react-redux';
import { crudActions, confirmActions, modalActions } from '../../_actions';
import Form from "./stepperForm";

class Calender extends React.Component {
    componentDidMount() {
        this.props.getAll('tasks', 'tasks/all')
    }

    dateClick = (e) => {
        this.props.openModal({
            open: true,
            height: 350,
            width: 500,
            component: <Form id="new" start_date={e.startStr} end_date={moment(e.endStr).add(-1, 'days').format('YYYY-MM-DD')} />
        })
    }

    render() {
        const { events } = this.props
        return (
            <React.Fragment>
                <FullCalendar
                    defaultView="dayGridMonth"
                    header={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                    }}
                    selectable={true}
                    plugins={[dayGridPlugin, listPlugin, timeGridPlugin, interactionPlugin]}
                    events={events}
                    select={this.dateClick}

                />
            </React.Fragment>
        )
    }
}

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const mapStateToProps = (state) => {
    const { tasks, confirm } = state;

    let events = []
    if (tasks) {
        tasks.forEach(element => {
            events.push({
                title: element.name,
                description: element.details,
                allDay: false,
                // for only date binding
                // start: moment(element.start_date).format('YYYY-MM-DD'),                
                // end: moment(element.end_date).add(1, 'days').format('YYYY-MM-DD'),
                start: `${moment(element.start_date).format('YYYY-MM-DD')}T${moment(element.start_time).format('hh:mm:ssZ')}`,
                end: `${moment(element.end_date).format('YYYY-MM-DD')}T${moment(element.end_time).format('hh:mm:ssZ')}`,
                color: getRandomColor(),
            })
        });
    }

    return { events: events, confirm };
}

const actionCreators = {
    getAll: crudActions._getAll,
    showConfirm: confirmActions.show,
    clearConfirm: confirmActions.clear,
    openModal: modalActions.open,
}

export default connect(mapStateToProps, actionCreators)(Calender);
