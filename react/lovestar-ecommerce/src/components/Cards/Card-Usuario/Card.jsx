import stylesCard from "./card.module.css";

import { Icon } from "@iconify/react";


import { useState } from "react";

const Card = ({ displayName, username, rol }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className={stylesCard.card}>
      {displayName ? (
        <div className={stylesCard.nombre}>
          <input name="username" type="text" value={displayName} disabled={isDisabled}></input>{" "}
          <Icon icon="ri:edit-fill" onClick={() => setIsDisabled(!isDisabled)}/>
        </div>
      ) : (
        <div className={stylesCard.nombre}>
          <input type="text" value={username} disabled={isDisabled}></input>
          <Icon icon="ri:edit-fill" onClick={() => setIsDisabled(!isDisabled)}/>
        </div>
      )}
      <p>{rol}</p>
      <Icon icon="streamline-block:basic-ui-delete-user" />
    </div>
  );
};

export default Card;
