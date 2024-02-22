import { BlobItem } from "@azure/storage-blob";
import React, { useContext, useEffect, useState } from "react";
import { tap } from "rxjs/operators";
import {
  DeletesViewStateContext,
  DownloadsViewStateContext,
  SharedViewStateContext,
} from "../contexts/viewStateContext";

interface profile {
  user: string;
}

const ItemsList: React.FC<profile> = (props) => {
  const sharedContext = useContext(SharedViewStateContext);
  const downloadsContext = useContext(DownloadsViewStateContext);
  const deletesContext = useContext(DeletesViewStateContext);
  const [items, setItems] = useState<BlobItem[]>([]);
  const { user } = props;
  const [access, setAccess] = useState<Boolean>(false);

  useEffect(() => {
    if (user === "VENDOR") {
      setAccess(false);
    } else {
      setAccess(true);
    }
  }, [user]);

  const getContainerItemsEffect = () => {
    const sub = sharedContext.itemsInContainer$
      .pipe(tap((items) => setItems(items)))
      .subscribe();

    return () => sub.unsubscribe();
  };
  useEffect(getContainerItemsEffect, []);

  return (
    <div className="items-list">
      <table>
        <tr>
          <th>Filnavn</th>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <th>Lagring</th>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <th>Actions</th>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <th>Validering</th>
        </tr>
        {access ? (
          items.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>
                <span>{item.properties.contentLength}</span>
              </td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>
                <button
                  onClick={() => downloadsContext.downloadItem(item.name)}
                >
                  Download
                </button>
              </td>
              <td>
                <button onClick={() => deletesContext.deleteItem(item.name)}>
                  Delete
                </button>
              </td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>
                <h4 className={item.metadata!.color}>
                  <span>{item.metadata!.tag}</span>
                </h4>
              </td>
            </tr>
          ))
        ) : (
          <div></div>
        )}
      </table>
    </div>
  );
};

export default ItemsList;

// return (
//   <div className="items-list">
//     {access ? (
//       items.map((item, i) => (
//         <div key={i}>
//           <span>{item.name}</span>
//           <span>{item.properties.contentLength}</span>
//           <span>{item.properties.lastModified.toISOString()}</span>
//           <div>
//             <button onClick={() => downloadsContext.downloadItem(item.name)}>
//               Download
//             </button>
//             <button onClick={() => deletesContext.deleteItem(item.name)}>
//               Delete
//             </button>
//           </div>
//         </div>
//       ))
//     ) : (
//       <div></div>
//     )}
//   </div>
// );
