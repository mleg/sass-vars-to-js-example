import React from "react";
import { sass } from "./styles/expose-sass-vars";

const renderVariable = (key: string) => (
  <tr key={key}>
    <td className="text-center">{key}</td>
    <td style={{ backgroundColor: sass[key] }} className="w-50" />
  </tr>
);

export const App: React.FC = () => {
  return (
    <div className="w-100 p-5 d-flex justify-content-center">
      <table className="table table-bordered" style={{ width: 300 }}>
        <tbody>{Object.keys(sass).map(renderVariable)}</tbody>
      </table>
    </div>
  );
};
