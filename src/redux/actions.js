import { SCROLL_TO } from "./actionTypes";

export const scrollTo = (scrollTo) => ({
    type: SCROLL_TO,
    payload: {
        scrollTo
    }
});

export const scrollToTop = () => ({
    type: SCROLL_TO,
    payload: {
        scrollTo: null
    }
});
