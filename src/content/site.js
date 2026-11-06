// Every word on the page lives in this file. Each phase adds more exports at the bottom.

export const site = {
  brand: 'MEDCORE',
  name: 'MEDCORE HMS',
  tagline: 'Hospital management that runs on your own network',
}

export const nav = [
  { label: 'How it works', href: '#journey' },
  { label: 'Modules', href: '#modules' },
  { label: 'Roles', href: '#roles' },
  { label: 'Screens', href: '#screens' },
  { label: 'Network', href: '#network' },
  { label: 'Scope', href: '#scope' },
  { label: 'FAQ', href: '#faq' },
]

export const footer = {
  line: "Runs on the hospital's own network.",
  note: 'All patient data shown on this page is fictional.',
}

/* ---------------- Phase 2 ---------------- */

export const hero = {
  eyebrow: 'Hospital management system',
  titleLead: 'Hospital management that runs on',
  titleAccent: 'your own network',
  text: 'MEDCORE brings patient records, appointments, billing, pharmacy and laboratory into one system, and checks every step that involves money or medicine before it moves on.',
  primary: { label: 'See how it works', href: '#journey' },
  secondary: { label: 'View the screens', href: '#screens' },
  image: { name: 'hero-dashboard', alt: 'The MEDCORE HMS dashboard' },
  facts: [
    { icon: 'network-wired', text: "Runs on the hospital's own network" },
    { icon: 'user-shield', text: 'Seven roles, enforced on the server' },
    { icon: 'lock', text: 'Payment-gated workflow' },
    { icon: 'circle-half-stroke', text: 'Light and dark themes' },
  ],
}

export const journey = {
  eyebrow: 'How it works',
  title: "One patient's visit, step by step",
  subtitle:
    'Follow a single patient through the hospital. At every stage the system checks that the previous step is done, and that payment has been recorded, before the next one is allowed.',
  rule: {
    title: 'Money first, then care',
    text: 'An appointment cannot be confirmed, a lab test run, or a prescription dispensed until its invoice is paid in full. These rules are enforced by the server, not just hidden in the interface.',
  },
  gateLabel: 'Payment gate',
  unlocksLabel: 'Unlocks',
  steps: [
    {
      icon: 'user-plus',
      role: 'Receptionist',
      title: 'Register the patient and book a visit',
      text: 'The receptionist registers the patient, then books an appointment with an active doctor on the calendar. Booking automatically creates the consultation invoice at the fee the Admin has set.',
      unlocks: 'The appointment starts as Pending, with an invoice waiting to be paid.',
    },
    {
      icon: 'file-invoice-dollar',
      role: 'Accountant',
      title: 'Record the payment',
      text: "Only the Accountant handles billing. The payment is recorded, a PDF receipt is produced, and the patient receives the receipt by email from the hospital's own mailbox.",
      unlocks: 'The doctor can now confirm the appointment.',
    },
    {
      icon: 'calendar-check',
      role: 'Doctor',
      title: 'Confirm the appointment',
      text: 'Only the assigned doctor can confirm, and only once the invoice is paid in full. The patient is emailed on confirmation, then receives two reminders: about a day before and about two hours before.',
      unlocks: 'The doctor can see the patient, prescribe and order tests.',
      gate: true,
    },
    {
      icon: 'prescription-bottle-medical',
      role: 'Doctor',
      title: 'Prescribe and order tests',
      text: 'The doctor enters the dose, how often and for how long, and the server works out the quantity and the price. A saved prescription cannot be edited, only cancelled. A lab test can be ordered at the same time.',
      unlocks: 'Each one produces an invoice for the Accountant.',
    },
    {
      icon: 'cash-register',
      role: 'Accountant',
      title: 'Clear the invoices',
      text: 'The Accountant records payment for the prescription and the lab test and issues receipts. Refunds are possible later, but only after the appointment or prescription has been cancelled.',
      unlocks: 'The laboratory and the pharmacy can now open the work.',
    },
    {
      icon: 'flask',
      role: 'Lab Technician',
      title: 'Run the test and enter the result',
      text: 'The lab technician can open the order only once it is paid. The result is entered and the report can be attached as a PDF. The doctor is notified at once and the patient is emailed. The receptionist sees the status only, never the result.',
      unlocks: "The doctor can read the result in the patient's profile.",
      gate: true,
    },
    {
      icon: 'pills',
      role: 'Pharmacist',
      title: 'Dispense the medicine',
      text: 'A prescription opens for the pharmacist only once it is paid. Stock is kept in batches with expiry dates, so the earliest-expiring batch is used first and expired stock is never dispensed. The pharmacist confirms the drugs against the prescription and is recorded as the person who dispensed them.',
      unlocks: 'Stock updates, and low-stock alerts reach the team.',
      gate: true,
    },
    {
      icon: 'notes-medical',
      role: 'Doctor',
      title: 'Close the visit',
      text: 'To complete the appointment, the doctor records a diagnosis and a consultation note. Once saved, the result cannot be edited. Only the Admin, Doctor, Nurse and Pharmacist can read it.',
      unlocks: 'The visit is complete, and its history stays on record.',
    },
  ],
}