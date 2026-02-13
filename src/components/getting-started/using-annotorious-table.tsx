import { Check } from 'lucide-react';

import './using-annotorious-table.css';

export const UsingAnnotoriousTable = () => {

  return (
    <table className="using-annotorious">
      <thead>
        <tr>
          <th></th>
          <th>
            <div>Images</div>
          </th>
          <th>
            <div>OpenSeadragon</div>
          </th>
          <th>
            <div>TypeScript Support</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span>Vanilla JS</span>
          </td>
          <td>
            <div><Check size={18} /></div>
          </td>
          <td>
            <div><Check size={18} /></div>
          </td>
          <td>
            <div><Check size={18} /></div>
          </td>
        </tr>
        <tr>
          <td>
            <span>React</span>
          </td>
          <td>
            <div><Check size={18} /></div>
          </td>
          <td>
            <div><Check size={18} /></div>
          </td>
          <td>
            <div><Check size={18} /></div>
          </td>
        </tr>
        <tr>
          <td>
            <span>Svelte</span>
          </td>
          <td>
            <div>incomplete</div>
          </td>
          <td>
            <div><Check size={18} /></div>
          </td>
          <td>
            <div><Check size={18} /></div>
          </td>
        </tr>
      </tbody>
    </table>
  )

}