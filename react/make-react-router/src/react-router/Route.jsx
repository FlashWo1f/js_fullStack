import React from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';

class Route extends React.Component {
    state = {  }
    render() { 
        return (
            <RouterContext.Consumer>
                {
                    (context) => {
                        const location = context.location;
                        const match = matchPath(location.pathname, this.props);
                        const { component: Com } = this.props;
                        return (
                            <RouterContext.Provider>
                                {
                                    match && <Com />
                                }
                            </RouterContext.Provider>
                        )
                    }
                }
            </RouterContext.Consumer>
        );
    }
}
 
export default Route;