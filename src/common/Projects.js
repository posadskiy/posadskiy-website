const Project = {
  CostAccounting: {
    name: "Cost Accounting",
    icon: "cost-accounting-icon.png",
    description: "Telegram Bot, that accepts purchase data, stores it and displays processed",
  },
  CurrencyConverter: {
    name: "Currency Converter",
    icon: "currency-converter-icon.png",
    description: "Currency converter library for Java applications",
  },
  SkillRepeater: {
    name: "Skill Repeater",
    icon: "skill-repeater-icon.png",
    description: "Train your skills and do not forget to repeat them",
  },
  StudyEveryday: {
    name: "Study Everyday",
    icon: "study-everyday-icon.png",
    description: "Try new technologies and move to modern full-stack guide",
  },
  BankWork: {
    name: "Bank work",
    icon: "bank-work-icon.png",
    description: "Container, mobile and server apps for the biggest russian bank",
  },
  IoTWork: {
    name: "IoT work",
    icon: "iot-work-icon.png",
    description: "Container, mobile and server apps for the biggest russian bank",
  },
  SwingTeacher: {
    name: "Swing Teacher",
    icon: "swing-teacher-icon.png",
    description: "Container app for learning Java Swing with tasks and check system",
  },
  ScheduleEditor: {
    name: "Schedule Editor",
    icon: "schedule-editor-icon.png",
    description: "Container app for editing university lessons schedule",
  },
  RestSecurity: {
    name: "Rest Security",
    icon: "rest-security-icon.png",
    description: "Open Source library for Java App safety",
  },
}

const getProjectIconLink = (iconName) => {
  return "project-icons/" + iconName;
}

export {
  Project,
  getProjectIconLink,
}
