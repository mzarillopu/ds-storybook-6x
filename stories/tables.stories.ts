import { html } from 'lit-html';

export default { title: 'Components/Tables' };

export const Simple = () => html`
    <table class="puds-table__bordered">
        <thead>
            <tr>
                <th>Column Title</th>
                <th>Column Title Roboto Bold 14/16</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Table Text Roboto Regular 14/16</td>
                <td>A fruit pie in which the principal filling ingredient is apple</td>
                <td>$4.50</td>
            </tr>
            <tr>
                <td>Table Text Roboto Regular 14/16</td>
                <td>A fruit pie in which the principal filling ingredient is apple</td>
                <td>$4.50</td>
            </tr>
            <tr>
                <td>Table Text Roboto Regular 14/16</td>
                <td>A fruit pie in which the principal filling ingredient is apple</td>
                <td>$4.50</td>
            </tr>
        </tbody>
    </table>
`;

export const Borderless = () => html`
    <table class="puds-table__borderless">
        <thead>
            <tr>
                <th>Column Title</th>
                <th>Column Title Roboto Bold 14/16</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Table Text Roboto Regular 14/16</td>
                <td>A fruit pie in which the principal filling ingredient is apple</td>
                <td>$4.50</td>
            </tr>
            <tr>
                <td>Table Text Roboto Regular 14/16</td>
                <td>A fruit pie in which the principal filling ingredient is apple</td>
                <td>$4.50</td>
            </tr>
            <tr>
                <td>Table Text Roboto Regular 14/16</td>
                <td>A fruit pie in which the principal filling ingredient is apple</td>
                <td>$4.50</td>
            </tr>
        </tbody>
    </table>
`;
