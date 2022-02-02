import dashboard from "../../../images/dashboard.svg";
import classes from "../../../images/class.svg";
import admin from "../../../images/admin.svg";
import department from "../../../images/department.svg";
import grades from "../../../images/grades.svg";
import group from "../../../images/groups.svg";
import message from "../../../images/chat.svg";
import call from "../../../images/call.svg";

export const navigation = [
  {
    label: "Dashboard",
    imgSrc: dashboard,
    to: "/dashboard",
  },
  {
    label: "Grades",
    imgSrc: grades,
    to: "/grade",
  },
  {
    label: "Class",
    imgSrc: classes,
    to: "/class",
  },
  {
    label: "Groups",
    imgSrc: group,
    to: "/group",
  },
  {
    label: "Administration",
    imgSrc: admin,
    to: "/admin",
  },
  {
    label: "Department",
    imgSrc: department,
    to: "/Department",
  },
];

export const teams = [
  {
    label: "Message",
    imgSrc: message,
    to: "/message",
  },
  {
    label: "Call Meeting",
    imgSrc: call,
    to: "/call",
  },
];
