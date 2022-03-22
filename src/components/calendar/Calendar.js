import React, { useState } from "react";
import { CalendarItem } from "./CalendarItem";

export const Calendar = () => {
  const [activities, setActivities] = useState(null);
  return <CalendarItem />;
};
