import React from 'react'

import RouterContext from "./RouterContext";

class Router extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            location: props.history.location
        }
        this.unlisten = props.history.listen(location => {
            this.setState({
                location
            })
        })
    }

    componentWillUnmount() {
        if(this.unlisten) this.unlisten()
    }

    render() {
        return (
            <RouterContext.Provider
                children={this.props.children}
                value={{
                    history: this.props.history,
                    location: this.state.location
                }}
            />
        )
    }
}
export default Router;