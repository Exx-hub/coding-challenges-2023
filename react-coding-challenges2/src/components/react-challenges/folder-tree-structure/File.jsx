/* eslint-disable react/prop-types */
import { useState } from "react";

import ArrowIcon from "./ArrowIcon";

function File({ name, children, depth }) {
  const [open, setOpen] = useState(false);

  console.log({ name, children, depth });

  return (
    <div className="flex flex-col cursor-pointer">
      <div
        className={`flex items-center`}
        style={{ marginLeft: children ? `${15 * depth}px` : `${15 * depth + 23}px` }}
        onClick={children ? () => setOpen((prev) => !prev) : null}
      >
        {children && <ArrowIcon open={open} />} {name}
      </div>

      {open && (
        <div>
          {children?.map((subfile) => (
            <File key={subfile.name} {...subfile} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default File;

// recursion is done by passing same component again if there are children
