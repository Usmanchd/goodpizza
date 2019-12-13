import React from 'react';
import Items from './Items';
import Item from './Item';
import Mycarousel from './Mycarousel';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Sectionmenu = () => {
  const match = useRouteMatch();
  return (
    <section id="section-menu">
      <div>
        <Switch>
          <Route path={`/sectionmenu/product/:name`}>
            <Item />
          </Route>
          <Route path={`/product/:name`}>
            <Item />
          </Route>
          <Route path={`${match.path}/:name`}>
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
            <Items />
          </Route>
          <Route path={`${match.path}`}>
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
            <Mycarousel />
            <Items />
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default Sectionmenu;
