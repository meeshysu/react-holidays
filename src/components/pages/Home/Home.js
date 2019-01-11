import React from 'react';
import './Home.scss';

class Home extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  }


  render() {
    return (
      <div className='Home mx-auto mt-5'>
        <div className="card-deck text-center">
          <div className="card border-dark" id="friends" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fas fa-user-friends fa-7x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Friends</h6>
              <p className="card-text">These are your friends...</p>
            </div>
          </div>
          <div className="card-deck text-center">
            <div className="card border-dark" id="holidays" onClick={this.changeView}>
              <div className="card-body text-center">
                <h4 className="card-title"><i className="fas fa-snowman fa-7x"></i></h4>
                <h6 className="card-subtitle mb-2 text-muted">Holidays</h6>
                <p className="card-text">Here are your holiday details...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
