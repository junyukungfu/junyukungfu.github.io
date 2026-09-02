'use strict';

import {comingSoon} from "./coming-soon.js";

const modInterface = Object.create(null);


modInterface.start = () => {
    return {
        comingSoon: comingSoon.start
    }
};

export const app = Object.freeze(modInterface);
