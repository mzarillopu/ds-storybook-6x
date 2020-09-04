import { html } from 'lit-html';

export default { title: 'Components/Color' };

export const Primary = () => html`
    <style>
        .color-block {
            display: block;
            width: 175px;
            height: 175px;
            border: 1px solid black;
        }
        .color-block-container {
            display: inline-block;
            margin-right: 10px;
        }
    </style>
    
    <div class="color-block-container">
        <div class="color-block puds-primary-bg"></div>
        .puds-primary-bg
    </div>
    
    <div class="color-block-container">
        <div class="color-block puds-primary-bg-light"></div>
        .puds-primary-bg-light
    </div>
    
    <div class="color-block-container">
        <div class="color-block puds-primary-bg-lighter"></div>
        .puds-primary-bg-lighter
    </div>
    
    <div class="color-block-container">
        <div class="color-block puds-primary-bg-dark"></div>
        .puds-primary-bg-dark
    </div>
    
    <div class="color-block-container">
        <div class="color-block puds-primary-bg-darker"></div>
        .puds-primary-bg-darker
    </div>
    
`;
