import { html } from 'lit-html';
import {TextInput} from "./forms.stories";

export default { title: 'Components/Buttons' };

export const All = (args) => html`
    <button class="puds-btn">${ args.label }</button>
    <button class="puds-btn puds-btn--hover">${ args.label }</button>
    <button class="puds-btn puds-btn--active">${ args.label }</button>
    <button class="puds-btn puds-btn--focus puds-focus">${ args.label }</button>
    <button class="puds-btn" disabled>${ args.label }</button>
    <button class="puds-btn puds-btn--unstyled">${ args.label }</button>
`;
All.args = { label: "Label" };

export const Default = (args) => html`
    <button class="puds-btn">${ args.label }</button>
`;
Default.args = {
    label: "Label",
};

export const Hover = (args) => html`<button class="puds-btn puds-btn--hover">${ args.label }</button>`;
Hover.args = {
    label: "Label",
};

export const Active = (args) => html`<button class="puds-btn puds-btn--active">${ args.label }</button>`;
Active.args = {
    label: "Label",
};

export const Focus = (args) => html`
    <button class="puds-btn puds-btn--focus puds-focus">${ args.label }</button>
`;
Focus.args = {
    label: "Label",
};

export const Disabled = (args) => html`<button class="puds-btn" disabled>${ args.label }</button>`;
Disabled.args = {
    label: "Label",
};

export const Unstyled = (args) => html`<button class="puds-btn puds-btn--unstyled">${ args.label }</button>`;
Unstyled.args = {
    label: "Label",
};
