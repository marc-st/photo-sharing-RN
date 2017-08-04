/*
 * Feed container
 */
import { connect } from 'react-redux'

import { loadFeed } from '../actions/feed'
import { updatePosition } from '../actions/feed'
import Feed from '../components/Feed'


function mapStateToProps(state) {
  return ({
    data: state.loadFeed.data,
    lat: state.updatePosition.lat,
    lon: state.updatePosition.lon
  })
}
function mapDispatchToProps(dispatch) {
  return {
    loadFeed: (images) => {
      dispatch(loadFeed(images))
    },
    updatePosition: (lat, lon) => {
      dispatch(updatePosition(lat, lon))
    }
  }
}

const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(Feed)
export default FeedContainer
