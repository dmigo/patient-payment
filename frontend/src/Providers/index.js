import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getProviders } from './actions'
import Provider from './Provider'
import Loading from './Loading'
import Error from './Error'

const Empty = () => (
  <div className="dc-card">There is no providers to show.</div>
)

class Providers extends Component {
  componentDidMount() {
    this.props.getProviders({ limit: 2 })
  }

  render() {
    const { providers, error, loading } = this.props
    return (
      <div>
        {error ? <Error error={error} /> : null}
        {loading ? <Loading /> : null}
        {providers && providers.length ? (
          providers.map((provider, index) => (
            <Provider key={`provider-${index}`} {...provider} />
          ))
        ) : !loading ? (
          <Empty />
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.providers
})
const mapDispatchToProps = {
  getProviders
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Providers)
