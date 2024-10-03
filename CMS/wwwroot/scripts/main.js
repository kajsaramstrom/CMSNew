import { fadeInOnScroll } from './effectScript.js';
import { rotateOnScroll } from './effectScript.js';
import { toggleSearchBox } from './searchScript.js';
import { validateForm } from './validationScript.js';


document.addEventListener('DOMContentLoaded', function () {
    fadeInOnScroll();
    rotateOnScroll();
    validateForm();
    toggleSearchBox();
});