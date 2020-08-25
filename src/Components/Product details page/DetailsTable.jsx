import React from 'react'

export function DetailsTable({ details }) {

    const multipleDetails = typeof(details) === 'object';

    if (multipleDetails) return (
        <table>
            <tbody>
                <tr>
                    <th>Model name</th>
                    <td>{details.model_name}</td>
                </tr>
                <tr>
                    <th>Dimensions</th>
                    <td>{details.dimensions}</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>{details.material}</td>
                </tr>
                <tr>
                    <th>Tech details</th>
                    <td>{details.technical_details}</td>
                </tr>
                <tr>
                    <th>Color</th>
                    <td>{details.color}</td>
                </tr>
            </tbody>
        </table>
    );

    else return <p>Details: {details}</p>
}
