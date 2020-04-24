import React, { Component } from "react"

const WithPlaceholder = WrappedComponent => (
    class HOC extends Component {
        render() {
            return (
                <WrappedComponent />
            )
        }
    }
)

export default WithPlaceholder