import React from 'react';
import classes from "classnames";

const Error = ({show}) => {

    const classShow = classes("error-message", {"active": show})

    return (
        <div className={classShow}>
            Пиццы закончились (((  Приходите позже!
        </div>
    );
};

export default Error;