import { html } from 'lit-html';

export default { title: 'Components/Buttons' };

export const AllButtons = () => html`
    <h2>Primary</h2>
    <button class="puds-btn">Default</button>
    <button class="puds-btn puds-btn--hover">Hover</button>
    <button class="puds-btn puds-btn--active">Active</button>
    <button class="puds-btn puds-btn--focus puds-focus">Focus</button>
    <button class="puds-btn" disabled>Disabled</button>
    <button class="puds-btn puds-btn--unstyled">Unstyled</button>
    <h2>Secondary</h2>
    
`;

export const hover = () => html`
    <button class="puds-btn pds-btn--hover">Hello, World!</button>
`;
