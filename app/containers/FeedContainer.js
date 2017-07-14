/*
 * Feed container
 */
import Feed from '../components/Feed'
import { connect } from 'react-redux'
import { loadFeed } from '../actions/feed'

function mapStateToProps(state) {
  return ({
    data: state.loadFeed.data
  })
}
function mapDispatchToProps(dispatch) {
  return {
    loadFeed: () => {
      dispatch(loadFeed())
    }
  }
}

const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(Feed)
export default FeedContainer
