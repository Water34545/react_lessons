import { useState } from "react";

export default () => {
  const [openItemId, setOpenItemId] = useState(null);
  const toggleOpenItem = id => () =>
    openItemId != id ? setOpenItemId(id) : setOpenItemId(null);

  return { openItemId, toggleOpenItem };
};
