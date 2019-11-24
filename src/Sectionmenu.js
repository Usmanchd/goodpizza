import React from 'react';
import Items from './Items';
import Item from './Item';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Sectionmenu = props => {
  const match = useRouteMatch();
  return (
    <section id="section-menu" style={{ marginTop: '20px' }}>
      <div>
        <div className="row justify-content-center mb-5">
          <div className="col-md-10 text-center">
            <h2
              className="mb-4 text-uppercase pb_letter-spacing-2"
              style={{ marginTop: '40px', paddingBottom: '0px' }}
            >
              Menu
            </h2>
          </div>
        </div>
        <Switch>
          <Route path={`${match.path}/:name`}>
            <Item />
          </Route>
          <Route path={`${match.path}`}>
            <Items addCart={props.addCart} />
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default Sectionmenu;
