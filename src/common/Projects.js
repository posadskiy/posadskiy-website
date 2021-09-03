const Project = {
  CostAccounting: {
    name: "Cost Accounting",
    icon: "cost-accounting-icon.png",
    description: "Telegram Bot receives purchases, incomes, and presentations statistics",
  },
  CurrencyConverter: {
    name: "Currency Converter",
    icon: "currency-converter-icon.png",
    description: "Java library provides the current exchange rate for 165+ currencies",
  },
  SkillRepeater: {
    name: "Skill Repeater",
    icon: "skill-repeater-icon.png",
    description: "Mobile device-based system suggests repeating skill in gamification technique",
  },
  StudyEveryday: {
    name: "Study Everyday",
    icon: "study-everyday-icon.png",
    description: "Studying new knowledge and refreshing already discovered",
  },
  BankWork: {
    name: "Bank work",
    icon: "bank-work-icon.png",
    description: "Complete mobile and desktop working space for bank client managers",
  },
  IoTWork: {
    name: "IoT work",
    icon: "iot-work-icon.png",
    description: "Creating the next level of the intelligent climate system",
  },
  SwingTeacher: {
    name: "Swing Teacher",
    icon: "swing-teacher-icon.png",
    description: "IDE with lessons to become from zero to hero in Java Swing",
  },
  ScheduleEditor: {
    name: "Schedule Editor",
    icon: "schedule-editor-icon.png",
    description: "Desktop application for managing lesson schedule for University",
  },
  RestSecurity: {
    name: "Rest Security",
    icon: "rest-security-icon.png",
    description: "Open Source library provides complete abilities for java application protection",
  },
}

const getProjectIconLink = (iconName) => {
  return "project-icons/" + iconName;
}

export {
  Project,
  getProjectIconLink,
}
