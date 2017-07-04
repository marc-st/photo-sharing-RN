import Picture from '../components/Picture'

function mapStateToProps(state) {
  return {
    path: state.path
  }
}
const PictureContainer = connect(mapStateToProps, )(Picture)
export default PictureContainer
