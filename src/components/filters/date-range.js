import React from "react";
import { connect } from "react-redux";
import DayPicker, { DateUtils } from "react-day-picker";

import "react-day-picker/lib/style.css";
import { changeDateFilter } from "../../ac";

function DateRange({ range, changeDateFilter }) {
  const { from, to } = range;
  const selectedRange =
    from && to && `${from.toDateString()} - ${to.toDateString()}`;

  return (
    <div className="date-range">
      <DayPicker
        selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
        onDayClick={day =>
          changeDateFilter(DateUtils.addDayToRange(day, range))
        }
      />
      {selectedRange}
    </div>
  );
}

export default connect(
  state => ({
    range: state.filters.dateRange
  }),
  { changeDateFilter }
)(DateRange);
