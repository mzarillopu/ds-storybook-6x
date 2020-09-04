import { html } from 'lit-html';

export default {
    title: 'Components/Breadcrumbs'
};

export const Default = () => html`
    <nav class="puds-breadcrumb" aria-label="Breadcrumbs">
      <ol class="puds-breadcrumb__list">
        <li class="puds-breadcrumb__list-item">
          <a href="#" class="puds-breadcrumb__link">Home</a>
        </li>
        <li class="puds-breadcrumb__list-item">
          <a href="#" class="puds-breadcrumb__link">Another Link</a>
        </li>
        <li class="puds-breadcrumb__list-item">
          <a href="#" class="usa-breadcrumb__link">Yet Another Link Level</a>
        </li>
        <li class="puds-breadcrumb__list-item puds-current" aria-current="page">And finally here were are the page description</li>
      </ol>
    </nav>
    
    <small><small>
    Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    https://www.flaticon.com/packs/font-awesome/2
    </small></small>
`;
