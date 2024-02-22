import { ContainerItem } from "@azure/storage-blob";
import React, { useContext, useEffect, useState } from "react";
import { tap } from "rxjs/operators";
import { SharedViewStateContext } from "../contexts/viewStateContext";

interface profile {
  user: string;
}

const ContainerList: React.FC<profile> = (props) => {
  const context = useContext(SharedViewStateContext);
  const [items, setItems] = useState<ContainerItem[]>([]);
  const [access, setAccess] = useState<Boolean>(false);

  const { user } = props;
  const getContainersEffect = () => {
    const sub = context.containers$
      .pipe(tap((items) => setItems(items)))
      .subscribe();

    return () => sub.unsubscribe();
  };
  useEffect(getContainersEffect, []);
  useEffect(() => {
    if (user === "VENDOR") {
      setAccess(false);
    } else {
      setAccess(true);
    }
  }, [user]);
  // const onContainerClick = (name: string) => context.getContainerItems(name);
  const onContainerClick = (name: string) => {
    context.getContainerItems(name);
  };

  return (
    <div className="container-list">
      <div className="splitContent">
        <img src="../../forsvar.jpg" alt="forvars logo" className="logoImage" />
        {access ? (
          items.map((item, i) => (
            <div key={i}>
              {item.name === "upload" ? (
                <button onClick={() => onContainerClick(item.name)}>
                  Oppfrisk opplastinger
                </button>
              ) : (
                ""
              )}
            </div>
          ))
        ) : (
          <div>
            <h3>
              Velkommen til Digimat U - Portal for opplasting av materielldata
            </h3>
            {onContainerClick("upload")}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContainerList;
