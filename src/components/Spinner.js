import React from "react";
import {PacmanLoader} from "react-spinners";

const Spinner = ({loading}) => {
    return (
        <div className="spinner">
            <PacmanLoader
                color={"#00537a"}
                loading={loading}
            />
        </div>
    );
}

export default Spinner