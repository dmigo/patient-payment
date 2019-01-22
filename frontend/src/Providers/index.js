import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getProviders, loadMoreProviders } from './actions'
import Provider from './Provider'
import Loading from './Loading'
import Error from './Error'

const AMOUNT_OF_PROVIDERS_TO_LOAD = 2

const Empty = () => (
  <div className="dc-card">There is no providers to show.</div>
)

const LoadMore = ({ load }) => (
  <div className="dc-card" onClick={load}>
    <div className="dc-btn">Load more</div>
  </div>
)

class Providers extends Component {
  componentDidMount() {
    this.props.getProviders({
      limit: AMOUNT_OF_PROVIDERS_TO_LOAD,
      state: 'ca',
      min_total_discharges: 900
    })
  }

  isLoadMoreVisible() {
    const { providers, error, loading, parameters } = this.props
    const totalLoaded = (parameters.offset || 0) + (parameters.limit || 0)
    const providersLoaded = providers && providers.length

    return (
      !error && !loading && providersLoaded && totalLoaded <= providersLoaded
    )
  }

  render() {
    const { providers, error, loading, loadMoreProviders } = this.props

    return (
      <div>
        {error ? <Error error={error} /> : null}
        {providers && providers.length ? (
          providers.map((provider, index) => (
            <Provider key={`provider-${index}`} {...provider} />
          ))
        ) : !loading ? (
          <Empty />
        ) : null}
        {loading ? <Loading /> : null}
        {this.isLoadMoreVisible() ? (
          <LoadMore
            load={() => loadMoreProviders(AMOUNT_OF_PROVIDERS_TO_LOAD)}
          />
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.providers
})
const mapDispatchToProps = {
  getProviders,
  loadMoreProviders
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Providers)
