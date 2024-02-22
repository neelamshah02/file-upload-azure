import React, { useContext, useEffect, useState } from "react";
import { tap } from "rxjs/operators";
import { UploadsViewStateContext } from "../contexts/viewStateContext";
import { BlobItemUpload } from "../types/azure-storage";

const ItemsUploaded: React.FC = () => {
  const context = useContext(UploadsViewStateContext);
  const [items, setItems] = useState<BlobItemUpload[]>([]);

  const getUploadsEffect = () => {
    const sub = context.uploadedItems$
      .pipe(tap((items) => setItems(items)))
      .subscribe();

    return () => sub.unsubscribe();
  };
  useEffect(getUploadsEffect, []);

  return (
    <div className="items-list">
      {/* <style>{css}</style> */}
      <h3>Nye opplastinger:</h3>
      <table>
        <tr>
          <th>Filnavn</th>
          <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
          <th>Lagring</th>
          <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
          <th>Progresjon</th>
        </tr>
        {items.map((item, i) => (
          <tr>
            <td>
              {JSON.stringify(item.filename, undefined, 2).replace(/\"/g, "")}
            </td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td className="tableCell">
              {JSON.stringify(item.containerName, undefined, 2).replace(
                /\"/g,
                "",
              )}
            </td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td className="tableCell">
              {JSON.stringify(item.progress, undefined, 2)}
            </td>
            <pre key={i}></pre>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ItemsUploaded;
