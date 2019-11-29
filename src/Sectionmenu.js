import React from 'react';
import Items from './Items';
import Item from './Item';
import Mycarousel from './Mycarousel';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Sectionmenu = props => {
  const match = useRouteMatch();
  return (
    <section id="section-menu">
      <div>
        <Switch>
          <Route path={`${match.path}/burger`}>
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
            <Items
              addCart={props.addCart}
              category="burger"
              removeCart={props.removeCart}
              removeSingle={props.removeSingle}
              addSingle={props.addSingle}
            />
          </Route>
          <Route path={`${match.path}/pizza`}>
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
            <Items
              addCart={props.addCart}
              category="pizza"
              removeCart={props.removeCart}
              removeSingle={props.removeSingle}
              addSingle={props.addSingle}
            />
          </Route>
          <Route path={`${match.path}/deal`}>
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
            <Items
              addCart={props.addCart}
              category="deal"
              removeCart={props.removeCart}
              removeSingle={props.removeSingle}
              addSingle={props.addSingle}
            />
          </Route>
          <Route path="/sectionmenu/all">
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
            <Items
              addCart={props.addCart}
              category="ALL"
              removeCart={props.removeCart}
              removeSingle={props.removeSingle}
              addSingle={props.addSingle}
            />
          </Route>
          <Route path={`${match.path}/:name`}>
            <Item
              addCart={props.addCart}
              removeCart={props.removeCart}
              removeSingle={props.removeSingle}
              addSingle={props.addSingle}
            />
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
            <Items
              addCart={props.addCart}
              removeCart={props.removeCart}
              removeSingle={props.removeSingle}
              addSingle={props.addSingle}
            />
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default Sectionmenu;
