import { useState } from "react";

export default () => {
  const [isOpen, setIsOpen] = useState(null);
  const toggleOpen = isOpen => () => setIsOpen(!isOpen);

  return { isOpen, toggleOpen };
};
