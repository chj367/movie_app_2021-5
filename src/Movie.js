import PropTypes from 'prop-types'

function Movie(){
    return(
     <h1>Hello</h1>   
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie