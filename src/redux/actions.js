import { SCROLL_TO } from "./actionTypes";

export const scrollToAction = (scrollTo) => ({
    type: SCROLL_TO,
    payload: {
        scrollTo
    }
});

export const scrollToTopAction = () => ({
    type: SCROLL_TO,
    payload: {
        scrollTo: null
    }
});
