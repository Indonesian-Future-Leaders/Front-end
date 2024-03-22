import * as React from "react";

import { CaretDown } from "@phosphor-icons/react";

import { Button } from "../button";

import { CloseMenu } from "../../utils/closeMenu";

const EventsDropdown = ({ isPopoverOpen, setFiltered, setPopoverOpen, filtered, typeList, title, className }) => {
  const dropdownRef = React.useRef(null);

  const filterName = typeList?.map((item) => item?.name);

  const data = ["All"].concat(filterName);

  CloseMenu({ setPopoverOpen, dropdownRef });

  return (
    <span
      ref={dropdownRef}
      className={`events_dropdown ${className ?? ""} ${filtered === "All" ? "text-gray-400" : "text-dark-1"}`}
      onClick={() => setPopoverOpen(!isPopoverOpen)}
    >
      {filtered === "All" ? title : filtered}
      <CaretDown size={16} className={`duration-300 absolute right-2 ${isPopoverOpen && "rotate-180"}`} />
      {isPopoverOpen && (
        <div className="popover !w-full">
          {data?.map((item, index) => (
            <Button
              onClick={() => setFiltered(item)}
              key={index}
              intent={filtered === item ? "secondary" : "primary"}
              size="small"
              className="!w-full whitespace-nowrap uppercase"
              ariaLabel={title}
            >
              {item}
            </Button>
          ))}
        </div>
      )}
    </span>
  );
};

export default EventsDropdown;
