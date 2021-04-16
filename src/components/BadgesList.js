import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar'
import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.usertName}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function BadgesList (props) {
    const badges = props.badges
    const [query, setQuery] = React.useState('')
    const filteresBadges = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
    })

    if (filteresBadges.length === 0) {
      return (
        <div>
          <div className="form-group">
            <label>Filter badges</label>
            <input type="text" 
                    className="form-control" 
                    value={query} 
                    onChange={ (e) => { setQuery(e.target.value)}}
            />
          </div>          
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <div className="BadgesList">
        <div className="form-group">
          <label>Filter badges</label>
          <input type="text" 
                  className="form-control" 
                  value={query} 
                  onChange={ (e) => { setQuery(e.target.value)}}
          />
        </div>

        <ul className="list-unstyled">
          {filteresBadges.map(badge => {
            return (
              <li key={badge.id}>
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                  <BadgesListItem badge={badge} />
                </Link>

              </li>
            );
          })}
        </ul>
      </div>
    );

}

export default BadgesList;