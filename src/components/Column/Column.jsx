import React from "react";
import styles from "./Column.module.css";
import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";

// Importing custom SVG icons from assets
import DoneIcon from "../../assets/Done.svg";
import InProgressIcon from "../../assets/in-progress.svg";
import CanceledIcon from "../../assets/Cancelled.svg";
import TodoIcon from "../../assets/To-do.svg";
import BacklogIcon from "../../assets/Backlog.svg";
import NoPriorityIcon from "../../assets/No-priority.svg";
import LowPriorityIcon from "../../assets/Img - Low Priority.svg";
import MediumPriorityIcon from "../../assets/Img - Medium Priority.svg";
import HighPriorityIcon from "../../assets/Img - High Priority.svg";
import UrgentIcon from "../../assets/SVG - Urgent Priority colour.svg";

import AvatarWithStatus from "../Card/Avatar/Avatar";
import FeatureRequestCard from "../Card/FeatureCard";

// Update the icons mapping to use custom SVG icons
const icons = {
  Done: <img src={DoneIcon} alt="Done" />,
  "In progress": <img src={InProgressIcon} alt="In progress" />,
  Canceled: <img src={CanceledIcon} alt="Canceled" />,
  Todo: <img src={TodoIcon} alt="Todo" />,
  Backlog: <img src={BacklogIcon} alt="Backlog" />,
  "No priority": <img src={NoPriorityIcon} alt="No Priority" />,
  Low: <img src={LowPriorityIcon} alt="Low Priority" />,
  Medium: <img src={MediumPriorityIcon} alt="Medium Priority" />,
  High: <img src={HighPriorityIcon} alt="High Priority" />,
  Urgent: <img src={UrgentIcon} alt="Urgent" />,
};

const Column = ({ title, tickets, ordering, grouping }) => {
  return (
    <div className={styles.column}>
      <div className={styles.leftview}>
        <div className="dot">
          {grouping !== undefined && grouping === "user" ? (
            <>
              <div>
                <AvatarWithStatus statusColor={"green"} grouping={grouping} indashBoard={grouping === "user"}/>
              </div>
            </>
          ) : (
            <>{icons[title]}</>
          )}
        </div>
        <div className={styles.name_label}>
          <h4>{title}</h4>
          <h5 className="heading">{tickets.length}</h5>
        </div>
        <div>
          <GoPlus />
          <BsThreeDots />
        </div>
      </div>
      <div className={styles.card_container}>
        {tickets !== undefined &&
          tickets.map((ticket, i) => {
            return (
              <FeatureRequestCard
                key={i}
                id={ticket.id}
                tag={ticket.tag.join("")}
                title={ticket.title}
                grouping={grouping}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Column;
