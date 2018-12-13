import React from "react";

const Countdown = () => {
    let end = new Date("Feb 16, 2019 12:00:00").getTime();
    let now = Date.now();
    let difference = end - now;
    let daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
    return (
        <div className="bg-gclout-blue mb-4 p-4 text-center countdown">
            <h3>{daysLeft} Days</h3>
            <p className="mb-0 pb-0">to the general elections</p>
        </div>
    )
};
export default Countdown;