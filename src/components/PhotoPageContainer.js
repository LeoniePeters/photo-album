import * as React from 'react'
import PhotoPage from './PhotoPage'
import { connect } from 'react-redux';
import { setPhotos, getPhotosByAlbum } from '../actions/photos';

class PhotoPageContainer extends React.Component {
    componentDidMount() {
        const albumId = this.props.match.params.albumId
        this.props.getPhotosByAlbum(albumId)
        console.log(this.props.getPhotosByAlbum)
    }

    render () {
        if (!this.props.photos) return 'Loading...'
        return <PhotoPage photos={this.props.photos} />
    }
}

const mapStateToProps = state => {
    return {
        state: state.photos
    }
}

export default connect(mapStateToProps, {setPhotos, getPhotosByAlbum} )(PhotoPageContainer)