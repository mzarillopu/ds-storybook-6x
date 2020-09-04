import { html } from 'lit-html';

export default { title: 'Components/Buttons' };

export const Primary = () => html`
    <button class="puds-btn">Default</button>
    <button class="puds-btn puds-btn--hover">Hover</button>
    <button class="puds-btn puds-btn--active">Active</button>
    <button class="puds-btn puds-btn--focus puds-focus">Focus</button>
    <button class="puds-btn" disabled>Disabled</button>
    <button class="puds-btn puds-btn--unstyled">Unstyled</button>
`;
