import * as React from 'react'
// import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux';
import { helloWorld, addAlbum, setAlbums, getAlbums } from '../actions/albums'
// import { resolve } from 'url';

// const sleep = time => new Promise(
//     resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
// )

class AlbumsListContainer extends React.Component {
    // state = {}

    componentDidMount() {
        this.props.getAlbums()
        // sleep(2000)
        // .then(message => this.props.setAlbums([
        //   {
        //     id: 1,
        //     title: message
        //   },
        //   {
        //     id: 2,
        //     title: 'This is the second album'
        //   },
        //   {
        //     id: 3,
        //     title: 'The last album'
        //   }
        // ]))
        // request ('https://jsonplaceholder.typicode.com/albums')
        //   .then(response => response.body.map(album => 
        //     this.props.addAlbum(album.id, album.title)))

        //   this.props.helloWorld('Alice','Seriously Alice')
        //   this.props.addAlbum(5, 'Enjoying sunshine')
        //   this.props.addAlbum(10, 'Having fun in the US')
    }


    render() {
        if (!this.props.albums) return 'Loading...'
        return <AlbumsList albums={this.props.albums} />
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albums

    }
}

export default connect(mapStateToProps, 
    { helloWorld, addAlbum, setAlbums, getAlbums })(AlbumsListContainer)