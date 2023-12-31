import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, setOptions, Popup, Button, Input, Textarea, Checkbox, Datepicker, snackbar, formatDate } from '@mobiscroll/react';
import './scheduler.scss'

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

const defaultEvents = [{
    start: '2023-12-13T06:00',
    end: '2023-12-13T14:00',
    title: 'Farmhouse TPH',
    location: '3339 Spruce Drive',
    resource: ['d2', 'cm2', 'd4', 'cp1', 'cm2', 'ce2', 'b1'],
    color: '#12ca6c',
    cost: 48000
}, {
    start: '2023-12-14T08:00',
    end: '2023-12-14T18:00',
    title: 'Block of flats KXT',
    location: '4698 Mercer Street',
    resource: ['d1', 'cm1', 'd3', 'cp1', 'cm3', 'ce2', 'b2'],
    color: '#c170c3',
    cost: 36000
}, {
    start: '2023-12-15T12:00',
    end: '2023-12-15T20:00',
    title: 'Apartment house UGL',
    location: '3647 Tavern Place',
    resource: ['d3', 'cm2', 'd4', 'cp2', 'cm3', 'ce1', 'b2'],
    color: '#03c9d2',
    cost: 50000
}, {
    start: '2023-12-16T11:00',
    end: '2023-12-16T19:00',
    title: 'Detached house WKB',
    location: '956 Dovetail Estates',
    resource: ['d1', 'cm3', 'd4', 'cp3', 'cm4', 'c2', 'b1', 'ce2'],
    color: '#ff1515',
    cost: 55000
}, {
    start: '2023-12-17T10:00',
    end: '2023-12-17T18:00',
    title: 'Apartment house XAZ',
    location: '4919 Jett Lane, Inglewood',
    resource: ['d1', 'cm4', 'd4', 'cp1', 'cm2', 'c2', 'b2'],
    color: '#12ca6c',
    cost: 62000
}, {
    start: '2023-12-17T08:00',
    end: '2023-12-17T16:00',
    title: 'Block of flats DRG',
    location: '486 Sycamore Fork Road',
    resource: ['d2', 'cm1', 'd3', 'cp2', 'ce2', 'c1', 'b1'],
    color: '#efd414',
    cost: 39000
}, {
    start: '2023-12-18T09:00',
    end: '2023-12-18T17:00',
    title: 'Farmhouse YQK',
    location: '1563 Retreat Avenue',
    resource: ['d2', 'cm4', 'd4', 'cm2', 'cp1', 'c2', 'b2'],
    color: '#cf49d8',
    cost: 45000
}, {
    start: '2023-12-19T07:00',
    end: '2023-12-19T15:00',
    title: 'Apartment house SWP',
    location: '628 Daylene Drive',
    resource: ['d2', 'cm3', 'd3', 'cm1', 'cp2', 'c1', 'b1'],
    color: '#c170c3',
    cost: 53000
}, {
    start: '2023-12-20T10:00',
    end: '2023-12-20T18:00',
    title: 'Detached house OZL',
    location: '1830 Rinehart Road',
    resource: ['d3', 'cm2', 'd4', 'cp2', 'cm3', 'ce1', 'b2'],
    color: '#ff1515',
    cost: 47000
}, {
    start: '2023-12-21T11:00',
    end: '2023-12-21T19:00',
    title: 'Farmhouse PSZ',
    location: '2410 Union Street',
    resource: ['d1', 'cm3', 'd4', 'cp3', 'cm4', 'c2', 'b1', 'ce2'],
    color: '#ff1515',
    cost: 64000
}];
const myResources = [{
    id: 'contractors',
    name: 'Contractors',
    collapsed: true,
    eventCreation: false,
    children: [{
        id: 'builders',
        name: 'Builders',
        eventCreation: false,
        children: [{
            id: 'b1',
            name: 'Jude Chester'
        }, {
            id: 'b2',
            name: 'Willis Kane'
        }]
    }, {
        id: 'carpenters',
        name: 'Carpenters',
        eventCreation: false,
        children: [{
            id: 'c1',
            name: 'Derek Austyn'
        }, {
            id: 'c2',
            name: 'Merv Kenny'
        }]
    }]
}, {
    id: 'employees',
    name: 'Employees',
    eventCreation: false,
    children: [{
        id: 'cement_masons',
        name: 'Cement masons',
        eventCreation: false,
        children: [{
            id: 'ce1',
            name: 'Ford Kaiden'
        }, {
            id: 'ce2',
            name: 'Jewell Ryder'
        }]
    }, {
        id: 'divers',
        name: 'Drivers',
        eventCreation: false,
        children: [{
            id: 'd1',
            name: 'Fred Valdez'
        }, {
            id: 'd2',
            name: 'Jon Drake',
        }, {
            id: 'd3',
            name: 'Lou Andie'
        }, {
            id: 'd4',
            name: 'Leon Porter'
        }]
    }]
}, {
    id: 'equipment',
    name: 'Equipment',
    collapsed: true,
    eventCreation: false,
    children: [{
        id: 'concrete_mixers',
        name: 'Concrete mixers',
        eventCreation: false,
        children: [{
            id: 'cm1',
            name: 'AL 45 RFT'
        }, {
            id: 'cm2',
            name: 'KQ 62 PVZ'
        }, {
            id: 'cm3',
            name: 'RG 91 ZAL'
        }, {
            id: 'cm4',
            name: 'XF 83 GFM'
        }]
    }, {
        id: 'concrete_pumps',
        name: 'Concrete pumps',
        eventCreation: false,
        children: [{
            id: 'cp1',
            name: 'GF 61 BVM'
        }, {
            id: 'cp2',
            name: 'YC 55 ECT'
        }]
    }]
}];
const viewSettings = {
    timeline: {
        type: 'week',
        startDay: 1,
        endDay: 5
    }
};
const responsivePopup = {
    medium: {
        display: 'anchored',
        width: 520,
        fullScreen: false,
        touchUi: false
    }
};

function Scheduler() {
    const [myEvents, setMyEvents] = React.useState(defaultEvents);
    const [tempEvent, setTempEvent] = React.useState(null);
    const [isOpen, setOpen] = React.useState(false);
    const [isEdit, setEdit] = React.useState(false);
    const [anchor, setAnchor] = React.useState(null);
    const [start, startRef] = React.useState(null);
    const [end, endRef] = React.useState(null);
    const [popupEventTitle, setTitle] = React.useState('');
    const [popupEventLocation, setLocation] = React.useState('');
    const [popupEventBill, setBill] = React.useState(0);
    const [popupEventNotes, setNotes] = React.useState('');
    const [popupEventDate, setDate] = React.useState([]);
    const [mySelectedDate, setSelectedDate] = React.useState(new Date());
    const [checkedResources, setCheckedResources] = React.useState([]);
    
    const checkboxChange = React.useCallback((ev) => {
        const value = ev.target.value;

        if (ev.target.checked) {
            setCheckedResources((checkedResources) => [...checkedResources, value]);
        } else {
            setCheckedResources(checkedResources.filter((r) => r !== value));
        }
    }, [checkedResources]);

    const saveEvent = React.useCallback(() => {
        const newEvent = {
            id: tempEvent.id,
            title: popupEventTitle,
            location: popupEventLocation,
            cost: popupEventBill,
            notes: popupEventNotes,
            start: popupEventDate[0],
            end: popupEventDate[1],
            color: tempEvent.color,
            resource: checkedResources,
        };
        if (isEdit) {
            // update the event in the list
            const index = myEvents.findIndex(x => x.id === tempEvent.id);;
            const newEventList = [...myEvents];

            newEventList.splice(index, 1, newEvent);
            setMyEvents(newEventList);
            // here you can update the event in your storage as well
            // ...
        } else {
            // add the new event to the list
            setMyEvents([...myEvents, newEvent]);
            // here you can add the event to your storage as well
            // ...
        }
        setSelectedDate(popupEventDate[0]);
        // close the popup
        setOpen(false);
    }, [isEdit, myEvents, popupEventDate, popupEventNotes, popupEventTitle, popupEventLocation, popupEventBill, tempEvent, checkedResources]);

    const deleteEvent = React.useCallback((event) => {
        setMyEvents(myEvents.filter(item => item.id !== event.id));
        setTimeout(() => {
            snackbar({
                button: {
                    action: () => {
                        setMyEvents(prevEvents => [...prevEvents, event]);
                    },
                    text: 'Undo'
                },
                message: 'Event deleted'
            });
        });
    }, [myEvents]);

    const loadPopupForm = React.useCallback((event) => {
        setTitle(event.title);
        setLocation(event.location);
        setBill(event.cost);
        setNotes(event.notes);
        setDate([event.start, event.end]);
        setCheckedResources(event.resource);
    }, []);

    // handle popup form changes

    const titleChange = React.useCallback((ev) => {
        setTitle(ev.target.value);
    }, []);
    
    const locationChange = React.useCallback((ev) => {
        setLocation(ev.target.value);
    }, []);
    
    const billChange = React.useCallback((ev) => {
        setBill(+ev.target.value || 0);
    }, []);

    const notesChange = React.useCallback((ev) => {
        setNotes(ev.target.value);
    }, []);

    const dateChange = React.useCallback((args) => {
        setDate(args.value);
    }, []);

    const onDeleteClick = React.useCallback(() => {
        deleteEvent(tempEvent);
        setOpen(false);
    }, [deleteEvent, tempEvent]);

    // scheduler options

    const onSelectedDateChange = React.useCallback((event) => {
        setSelectedDate(event.date);
    }, []);

    const onEventClick = React.useCallback((args) => {
        setEdit(true);
        setTempEvent({ ...args.event });
        // fill popup form with event data
        loadPopupForm(args.event);
        setAnchor(args.domEvent.target);
        setOpen(true);
    }, [loadPopupForm]);

    const onEventCreated = React.useCallback((args) => {
        setEdit(false);
        setTempEvent(args.event)
        // fill popup form with event data
        loadPopupForm(args.event);
        setAnchor(args.target);
        // open the popup
        setOpen(true);
    }, [loadPopupForm]);

    const onEventDeleted = React.useCallback((args) => {
        deleteEvent(args.event)
    }, [deleteEvent]);

    // popup options
    const headerText = React.useMemo(() => isEdit ? 'Edit work order' : 'New work order', [isEdit]);
    const popupButtons = React.useMemo(() => {
        if (isEdit) {
            return ['cancel', {
                handler: () => {
                    saveEvent();
                },
                keyCode: 'enter',
                text: 'Save',
                cssClass: 'mbsc-popup-button-primary'
            }];
        } else {
            return ['cancel', {
                handler: () => {
                    saveEvent();
                },
                keyCode: 'enter',
                text: 'Add',
                cssClass: 'mbsc-popup-button-primary'
            }];
        }
    }, [isEdit, saveEvent]);

    const onClose = React.useCallback(() => {
        if (!isEdit) {
            // refresh the list, if add popup was canceled, to remove the temporary event
            setMyEvents([...myEvents]);
        }
        setOpen(false);
    }, [isEdit, myEvents]);
    
    const extendDefaultEvent = React.useCallback((args) => {
        return { 
            title: 'Work order',
            location: '',
            cost: 0
        };
    }, []);
    
    const getCostString = (cost) => {
        return cost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    const renderCustomDay = (args) => {
        const events = args.events;
        let costs = 0;

        if (events) {
            for (const event of events) {
                costs += event.cost;
            }
        }

        return <div>
            <div className="md-work-order-date">{formatDate('DD DDD MMM YYYY', args.date)}</div>
            <div className="md-work-order-date-title">{'Total revenue: $' + getCostString(costs)}</div>
        </div>;
    }
    
    const myScheduleEvent = React.useCallback((event) => {
        return <div>{event.title}<span className="md-work-order-price-tag">${getCostString(event.original.cost)}</span></div>;
    }, []);

    return <div>
        <div>
        <Eventcalendar
            className="md-work-order-scheduling"
            view={viewSettings}
            data={myEvents}
            resources={myResources}
            clickToCreate="double"
            dragToCreate={true}
            dragToMove={true}
            dragToResize={true}
            dragTimeStep={30}
            selectedDate={mySelectedDate}
            onSelectedDateChange={onSelectedDateChange}
            onEventClick={onEventClick}
            onEventCreated={onEventCreated}
            onEventDeleted={onEventDeleted}
            extendDefaultEvent={extendDefaultEvent}
            renderDay={renderCustomDay}
            renderScheduleEventContent={myScheduleEvent}
        />
        <Popup
            display="bottom"
            fullScreen={true}
            contentPadding={false}
            headerText={headerText}
            anchor={anchor}
            buttons={popupButtons}
            isOpen={isOpen}
            onClose={onClose}
            responsive={responsivePopup}
        >
            <div className="mbsc-form-group">
                <Input label="Title" value={popupEventTitle} onChange={titleChange} />
                <Input label="Location" value={popupEventLocation} onChange={locationChange} />
                <Input label="Bill to customer ($)" value={popupEventBill} onChange={billChange} />
                <Textarea label="Notes" value={popupEventNotes} onChange={notesChange} />
            </div>
            <div className="mbsc-form-group">
                <Input ref={startRef} label="Starts" />
                <Input ref={endRef} label="Ends" />
                <Datepicker
                    select="range"
                    controls={['time']}
                    touchUi={true}
                    startInput={start}
                    endInput={end}
                    showRangeLabels={false}
                    onChange={dateChange}
                    value={popupEventDate}
                />
            </div>
            <div className="mbsc-form-group">
                <div className="mbsc-grid mbsc-no-padding">
                    <div className="mbsc-row">
                        {myResources.map((resources) => {
                            return (resources.children.map((res) => {
                                return <div className="mbsc-col-sm-4" key={res.id}>
                                    <React.Fragment>
                                        <div className="mbsc-form-group-title">{res.name}</div>
                                            {res.children.map((r) => {
                                                return <Checkbox key={r.id} value={r.id} checked={checkedResources.indexOf(r.id) > -1} onChange={checkboxChange} theme="material" className="md-work-order-checkbox-label">{r.name}</Checkbox>
                                            })
                                        }
                                    </React.Fragment>
                                </div>
                            }))
                        })}
                    </div>
                </div>
            </div>
            <div className="mbsc-form-group">
                {isEdit && <div className="mbsc-button-group">
                    <Button className="mbsc-button-block" color="danger" variant="outline" onClick={onDeleteClick}>Delete event</Button>
                </div>}
            </div>
        </Popup>
        </div>
    </div>
}

export default Scheduler;