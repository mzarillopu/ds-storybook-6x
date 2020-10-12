import { html } from 'lit-html';

export default {
    title: 'Components/Skip To Content'
};

export const Hidden = () => html`
    <a href="#main-content" class="puds-skip-link">Skip to main content</a>
`;

export const Shown = () => html`
    <a href="#main-content" class="puds-skip-link puds-skip-link--shown">Skip to main content</a>
`;
