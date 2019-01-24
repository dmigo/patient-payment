import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getProviders, loadMoreProviders } from './actions'
import Provider from './Provider'
import Loading from './Loading'
import Error from '../Error'
import { AMOUNT_OF_PROVIDERS_TO_LOAD } from '../constants'

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
      limit: AMOUNT_OF_PROVIDERS_TO_LOAD
    })
  }

  isLoadMoreVisible() {
    const { providers, error, loading, limit, offset } = this.props
    const totalLoaded = offset + limit
    const providersLoaded = providers && providers.length

    return (
      !error && !loading && providersLoaded && totalLoaded <= providersLoaded
    )
  }

  render() {
    const { providers, error, loading, loadMoreProviders } = this.props

    const providersEmpty = !providers || !providers.length
    const providersList = providers.map((provider, index) => (
      <Provider key={`provider-${index}`} {...provider} />
    ))
    const loadMoreControl = (
      <LoadMore load={() => loadMoreProviders(AMOUNT_OF_PROVIDERS_TO_LOAD)} />
    )

    return (
      <div>
        {error ? <Error error={error} /> : null}
        {providersEmpty ? null : providersList}
        {providersEmpty && !loading ? <Empty /> : null}
        {loading ? <Loading /> : null}
        {this.isLoadMoreVisible() ? loadMoreControl : null}
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
