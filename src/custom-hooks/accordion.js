import { useState } from "react";

export default () => {
  const [openItemId, setOpenItemId] = useState(null);
  const toggleOpenItem = id => () => setOpenItemId(id);

  return { openItemId, toggleOpenItem };
};
