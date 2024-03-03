import React from "react";

const ListItem = ({ children, className, href }) => {
  return (
    <li className={className} href={href}>
      {children}
    </li>
  );
};

export default ListItem;
