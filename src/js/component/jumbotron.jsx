import React from "react";

const Jumbotron = () => {
    return (
        <div className="container bg-light-gray mt-4 p-4 rounded" style={{ background: "#CCC", width: "80rem" }}>
            <h1>A Warm Welcome</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. explicabo.</p>
            <button type="button" className="btn btn-primary btn-sm">Call to Action!</button>
        </div>
    );
}

export default Jumbotron;