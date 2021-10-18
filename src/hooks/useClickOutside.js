import { useState, useEffect, forwardRef } from "react";

const createRef = (ref) => {
  return ref;
};

const useClickoutside = (bool, ref) => {
  const [visible, setVisible] = useState(bool);

  let domRef = forwardRef(() => createRef(ref));

  return { domRef, visible };
};

export default useClickoutside;
