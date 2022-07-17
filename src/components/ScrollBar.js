import React from 'react';

export class ScrollBar extends React.Component {
    render() {
        return (
            <div className="scrollBarWrapper">
                    {this.props.items.map(item => (
                        <VenueItem ticketLink={item.url}zoomFunc={this.props.zoomFunc} date={item.datetime_local} venue={item.venue} key={item.id}></VenueItem>
                    ))}
            </div>
        );
    }
}

class VenueItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.zoomFunc(this.props.venue.location.lat, this.props.venue.location.lon);
    }

    openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    render() {
        let date = new Date(this.props.date + "Z");
        let shortMonthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format;
        const localClockTime = date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
           });
        let monthName = shortMonthName(date); // "Jul"
        return (
            <div>
                <div className="venueInfoBox" onClick={this.handleClick}><span>{this.props.venue.name} ({this.props.venue.city} - {this.props.venue.state})</span><br /><span className="dateText">{monthName} {date.getDay()}, {localClockTime}</span>
                </div>
                <div onClick={() => this.openInNewTab(this.props.ticketLink)} className="showTicketBox">
                    <span>Book Tickets</span>
                </div>
            </div>
        );
    }
}