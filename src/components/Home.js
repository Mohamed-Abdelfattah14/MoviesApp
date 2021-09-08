import React from 'react'

function Home({ movie }) {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card mt-3" key={movie.id}>
                <img src={movie.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>

                    <div className="list mt-4">
                        <span className="card-text"><i className="fa fa-star" aria-hidden="true"></i>{movie.imDbRating}</span> 

                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target={`#sss${movie.id}`}>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                        </button>

                        <div className="modal fade" id={`sss${movie.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">{movie.fullTitle}</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <img src={movie.image} alt="....." />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <h5>Movie Rank : <span>{movie.rank}</span></h5><hr></hr>
                                                <h5>Movie Crew : <span>{movie.crew}</span></h5><hr></hr>
                                                <h5>Total Reviews : <span>{movie.imDbRatingCount}</span> People</h5><hr></hr>
                                                <h5>Year : <span>{movie.year}</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
