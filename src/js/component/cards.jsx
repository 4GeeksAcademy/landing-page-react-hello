import React from "react";

const Cards = () => {
    return (
        <div className="container d-flex justify-content-around mt-4 mb-4" style={{ overflowX: "auto" }}>
            <div className="card m-2" style={{ width: "18rem" }}>
                <img src="https://picsum.photos/500/325?grayscale" className="card-img-top" alt="PERRO" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
            
            <div className="card m-2" style={{ width: "18rem" }}>
                <img src="https://picsum.photos/500/325?grayscale" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>

            <div className="card m-2" style={{ width: "18rem" }}>
                <img src="https://picsum.photos/500/325?grayscale" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>

            <div className="card m-2" style={{ width: "18rem" }}>
                <img src="https://picsum.photos/500/325?grayscale" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>

            <div className="card m-2" style={{ width: "18rem" }}>
                <img src="https://picsum.photos/500/325?grayscale" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>

        </div>
    );
}

/* no se alineaba y para que quedaran las 5 en la misma linea elimine un flex-wrap que tenia y anadi un overflow*/ 
export default Cards;