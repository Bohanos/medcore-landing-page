// All text on the page lives in this file, so a wording change never needs a code change.
// The order follows the page from top to bottom:
//   site, nav, footer   brand name, menu links and footer text
//   hero                opening block and its short fact list
//   journey             the step-by-step patient visit
//   modules, roles      what the system does, and who can do what
//   screens, network    screenshot gallery and the local-network explanation
//   scope, faq          what is not included, and common questions

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

/* ---------------- Hero and patient journey ---------------- */

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

/* ---------------- Modules and roles ---------------- */

export const modules = {
  eyebrow: 'What it does',
  title: 'Everything a clinic runs on, in one system',
  subtitle:
    'Nine modules share one database and one set of rules, so a payment, a prescription or a lab result is recorded once and seen only by the right people.',
  items: [
    {
      icon: 'users',
      title: 'Patient records',
      text: 'A complete profile for every patient, with each tab shown only to the roles allowed to see it.',
      points: [
        'Appointments, prescriptions, billing and lab results in one profile',
        'Last visit shown in the patient list, registration date on the profile',
        'Patients are never deleted or marked inactive, so a returning patient is always found',
        'Refund account details are kept by the Accountant',
      ],
    },
    {
      icon: 'calendar-days',
      title: 'Appointments',
      text: 'Booking, confirming, rescheduling and closing visits on a calendar built for the clinic.',
      points: [
        'Booked only with an active doctor, and never in the past',
        'Cancelling needs a reason; a missed visit can be rescheduled onto the same invoice with no new billing',
        'The doctor records a diagnosis and consultation note to complete a visit',
        'Patients get emails on confirmation, change or cancellation, plus two reminders',
      ],
    },
    {
      icon: 'file-invoice-dollar',
      title: 'Billing and refunds',
      text: 'One role owns the money, and every payment leaves a record.',
      points: [
        'Invoices are created when an appointment, prescription or test is saved',
        'Payments are recorded with receipts, and paid-invoice receipts are emailed',
        'Refunds are limited to the amount paid, allowed only after a cancellation, and leave revenue at once',
        'A refunds audit page for the Admin and the Accountant',
      ],
    },
    {
      icon: 'pills',
      title: 'Pharmacy and prescriptions',
      text: 'Doctors prescribe, the server calculates, and the pharmacist dispenses from batches that are tracked by expiry date.',
      points: [
        'Drugs by kind (tablet, syrup, injection, drip and more) with strength, pack size and manufacturer',
        'Stock is kept in batches, and the earliest-expiring batch is used first',
        'Expired stock is never prescribed or dispensed, and write-offs record who did them',
        'Alerts at 90 and 30 days before expiry, and when stock runs low',
      ],
    },
    {
      icon: 'flask',
      title: 'Laboratory',
      text: 'Tests are ordered from the patient profile, paid for, then run.',
      points: [
        'A lab order opens only once it is paid',
        'The technician enters the result and attaches the report as a PDF',
        'The doctor is notified and the patient is emailed',
        'Report files stay on the server and are included in every backup',
      ],
    },
    {
      icon: 'user-lock',
      title: 'Staff and access',
      text: 'Accounts are controlled by the Admin, and nothing is ever deleted.',
      points: [
        'New staff have no password; they set their own from an emailed link',
        'Accounts can be deactivated with a reason and reactivated later',
        'Nobody can deactivate themselves or the last active Admin',
        'Argon2 password hashing, sessions that end when the browser closes, and login rate limits',
      ],
    },
    {
      icon: 'chart-line',
      title: 'Reports and dashboards',
      text: 'Weekly, monthly and yearly figures for the people who need them.',
      points: [
        'The Admin sees all five reports and can export one or all to PDF or Excel',
        'The Accountant sees and exports the Revenue report',
        'Each role sees only the dashboard cards it is allowed to see',
        'Search returns only the records the role may open',
      ],
    },
    {
      icon: 'bell',
      title: 'Notifications and email',
      text: 'The right people are told at the right time.',
      points: [
        'In-app notifications, such as results ready, cancelled prescriptions and low stock',
        "Patient emails are sent from the hospital's own Gmail account",
        'If an email cannot be sent, nothing else stops working',
      ],
    },
    {
      icon: 'gear',
      title: 'Settings and backup',
      text: 'The Admin controls how the hospital is set up.',
      points: [
        'Hospital profile, appointment fees, and the roles and permissions matrix',
        'Low-stock and expiry alert preferences',
        'One-click backup of the database and lab reports, with restore instructions inside the file',
        'Light and dark themes for day and night shifts',
      ],
    },
  ],
}

export const roles = {
  eyebrow: 'Seven roles',
  title: 'Everyone sees what their job needs',
  subtitle:
    'Each person signs in to a version of the system built around their role. Billing, clinical results and stock each have one clear owner.',
  canLabel: 'Can',
  cannotLabel: 'Cannot',
  note: 'Every restriction is enforced by the server. An unauthorised request is rejected whatever the screen shows.',
  items: [
    {
      icon: 'user-gear',
      name: 'Admin',
      summary: "Runs the hospital's setup and oversight.",
      can: [
        'Creates and deactivates staff accounts',
        'Books appointments and sets appointment fees',
        'Sees all five reports and exports them',
        'Views invoices, payments, receipts and refunds',
        'Downloads backups and manages hospital settings',
      ],
      cannot: 'Record payments or add drugs',
    },
    {
      icon: 'user-doctor',
      name: 'Doctor',
      summary: 'Sees patients and decides the treatment.',
      can: [
        'Sees only their own appointments',
        'Confirms paid visits and completes them with a diagnosis and note',
        'Writes prescriptions and orders lab tests',
        'Reads lab results',
      ],
      cannot: 'See billing or edit a saved prescription',
    },
    {
      icon: 'user-nurse',
      name: 'Nurse',
      summary: 'Supports care on the ward and in the clinic.',
      can: [
        'Views patient records and appointments',
        'Reads appointment results',
        'Creates lab orders',
        'Is notified when a prescription is cancelled',
      ],
      cannot: 'See billing or dispense medicine',
    },
    {
      icon: 'address-book',
      name: 'Receptionist',
      summary: 'The front desk of the hospital.',
      can: [
        'Registers and updates patient details',
        'Books, reschedules and cancels appointments',
        'Sees whether a lab result is ready',
      ],
      cannot: 'See billing, diagnoses or lab result details',
    },
    {
      icon: 'prescription-bottle-medical',
      name: 'Pharmacist',
      summary: 'Owns the stock and the dispensing.',
      can: [
        'Adds drugs and stock deliveries',
        'Opens and dispenses paid prescriptions',
        'Writes off expired batches',
        'Receives expiry and low-stock alerts',
      ],
      cannot: 'Open an unpaid prescription',
    },
    {
      icon: 'flask-vial',
      name: 'Lab Technician',
      summary: 'Runs the tests and records the results.',
      can: [
        'Opens paid lab orders',
        'Enters results and attaches the PDF report',
        'Marks the order complete',
      ],
      cannot: 'Run an unpaid order',
    },
    {
      icon: 'calculator',
      name: 'Accountant',
      summary: 'The only role that handles money.',
      can: [
        'Creates and edits unpaid invoices',
        'Records payments and issues receipts',
        'Cancels unpaid or partly paid invoices',
        'Processes refunds and keeps refund account details',
        'Sees and exports the Revenue report',
      ],
      cannot: 'Book appointments or dispense medicine',
    },
  ],
}

/* ---------------- Screenshot gallery and local network ---------------- */

export const screens = {
  eyebrow: 'The screens',
  title: 'See the system at work',
  subtitle:
    'Real screens from the system, one for each stage of the visit. Choose a tab to see what each role works with.',
  items: [
    {
      name: 'gate-awaiting-payment',
      tab: 'Payment gate',
      icon: 'lock',
      role: 'Doctor',
      title: 'An unpaid visit cannot be confirmed',
      text: 'The doctor sees the appointment waiting for payment. Confirming is blocked until the invoice is paid in full, and the check is made by the server, so it cannot be skipped from the screen.',
      points: [
        'The appointment starts as Pending',
        'Only the assigned doctor can confirm it',
        'The patient is emailed once it is confirmed',
      ],
      alt: "A doctor's appointment list showing an appointment that is waiting for payment",
    },
    {
      name: 'billing-invoices',
      tab: 'Billing',
      icon: 'file-invoice-dollar',
      role: 'Accountant',
      title: 'Every invoice and its status',
      text: 'The Accountant owns billing. Invoices can be searched by patient name, patient ID or invoice number, and filtered by status: unpaid, partial, paid, cancelled or refunded.',
      points: [
        'Payments are recorded with a PDF receipt',
        'Only an unpaid invoice can be edited',
        'Refunds are limited to the amount paid',
      ],
      alt: 'The billing page listing invoices with their patients, dates, amounts and payment status',
    },
    {
      name: 'prescription-preview',
      tab: 'Prescription',
      icon: 'prescription-bottle-medical',
      role: 'Doctor',
      title: 'The server works out quantity and price',
      text: 'The doctor enters the dose, how often and for how long. The quantity, the price of each line and the total come from the server, never from arithmetic in the browser.',
      points: [
        'Only the fields each kind of drug needs are shown',
        'A saved prescription cannot be edited, only cancelled',
        'The invoice is created when the prescription is saved',
      ],
      alt: 'The new prescription window showing a drug, its dose and the calculated quantity and total price',
    },
    {
      name: 'lab-result',
      tab: 'Laboratory',
      icon: 'flask',
      role: 'Lab Technician',
      title: 'Results are entered once the test is paid',
      text: 'The technician opens a paid order, enters the result and can attach the report as a PDF. The doctor is notified at once and the patient is emailed.',
      points: [
        'Unpaid orders cannot be opened',
        'The receptionist sees the status only, never the result',
        'Report files are kept on the server and included in every backup',
      ],
      alt: 'The laboratory page where a technician enters a test result and attaches a report',
    },
    {
      name: 'pharmacy-dispense',
      tab: 'Pharmacy',
      icon: 'pills',
      role: 'Pharmacist',
      title: 'Dispensing from the right batch',
      text: 'The dispense screen lists each drug with its quantity and which batch to take first. The pharmacist ticks that the drugs were checked against the prescription before the final button unlocks.',
      points: [
        'The earliest-expiring batch is used first',
        'Expired stock is never dispensed',
        'The pharmacist is recorded as the person who dispensed',
      ],
      alt: 'The dispense screen listing drugs, quantities and the stock batch to use first',
    },
    {
      name: 'reports',
      tab: 'Reports',
      icon: 'chart-line',
      role: 'Admin',
      title: 'Reports that export to PDF or Excel',
      text: 'The Admin sees all five reports over a weekly, monthly or yearly range and can export one or all of them. The Accountant sees and exports the Revenue report only.',
      points: [
        'Refunds leave the revenue figures as soon as they are processed',
        'Each role sees only the dashboard cards it may see',
        'Exports are available in PDF and Excel',
      ],
      alt: 'The reports page showing revenue and activity figures with export buttons',
    },
  ],
}

export const network = {
  eyebrow: 'Deployment',
  title: 'Built to run inside the hospital',
  subtitle:
    "MEDCORE is installed on a computer in the hospital and used over the hospital's own network. It is not a cloud service, and it is not designed to be reached from the public internet.",
  diagram: {
    boundary: 'Inside the hospital',
    staff: {
      icon: 'display',
      title: 'Staff computers',
      text: 'Any computer on the hospital network. Staff open the system in a web browser.',
      roles: ['Reception', 'Doctors', 'Nurses', 'Laboratory', 'Pharmacy', 'Accounts', 'Admin'],
    },
    link: 'Hospital network',
    server: {
      icon: 'server',
      title: 'Hospital server',
      tiles: [
        { icon: 'window-maximize', title: 'Web app', text: 'The screens staff see (React)' },
        { icon: 'gears', title: 'API', text: 'Rules, permissions and payment checks (FastAPI)' },
        { icon: 'database', title: 'Database', text: 'Patient, billing and stock records (PostgreSQL)' },
        { icon: 'file-pdf', title: 'Report files', text: 'Lab result PDFs stored on the server' },
      ],
      backup: {
        icon: 'download',
        title: 'Backup download',
        text: 'The Admin downloads one file with the database, the lab reports and restore instructions.',
      },
    },
    email: {
      icon: 'envelope',
      title: "Email: the only part that needs the internet",
      text: "Messages to patients and staff are sent from the hospital's own Gmail account. If email cannot be sent, everything else keeps working.",
    },
  },
  facts: [
    {
      icon: 'building',
      title: 'Patient data stays on site',
      text: "Records are stored on the hospital's own server and are not hosted publicly.",
    },
    {
      icon: 'display',
      title: 'Nothing to install on staff computers',
      text: 'Staff use a web browser. Each person signs in to the view built for their role.',
    },
    {
      icon: 'clock',
      title: "Follows the hospital's time zone",
      text: 'Appointment times and patient emails use the hospital time zone, set once during installation.',
    },
    {
      icon: 'hard-drive',
      title: 'Backups on request',
      text: 'The system does not schedule backups. The hospital decides how often to take one and where copies are kept.',
    },
    {
      icon: 'key',
      title: 'Sessions end with the browser',
      text: 'Staff are signed out when the browser window closes, and a deactivated account loses access on its next action.',
    },
    {
      icon: 'envelope',
      title: 'Email is optional for daily work',
      text: 'A failed email never blocks an action. Every send runs in the background.',
    },
  ],
  needs: {
    title: 'What the hospital provides',
    items: [
      { icon: 'server', text: 'A computer that stays on, to act as the server' },
      { icon: 'network-wired', text: 'A fixed address for it on the hospital network' },
      { icon: 'envelope', text: 'A Gmail account for sending emails (a business account is recommended)' },
      { icon: 'hard-drive', text: 'A person who takes regular backups and keeps a copy elsewhere' },
    ],
  },
  tradeoff: {
    title: 'The trade-off',
    text: 'Because it runs on your own network, the hospital hosts it and looks after it. That keeps patient data in your hands, but it is not built to be used from outside the building.',
  },
  stack: {
    label: 'Built with',
    items: [
      { icon: 'react', style: 'brands', name: 'React' },
      { icon: 'python', style: 'brands', name: 'FastAPI (Python)' },
      { icon: 'database', style: 'solid', name: 'PostgreSQL' },
      { icon: 'lock', style: 'solid', name: 'JWT and Argon2' },
    ],
  },
}

/* ---------------- Scope and FAQ ---------------- */

export const scope = {
  eyebrow: 'Scope and fit',
  title: 'What it is built for, and what it is not',
  subtitle:
    'MEDCORE is built for an outpatient hospital or clinic. This is what is not part of the current build, so you can judge the fit before anything else.',
  fit: {
    icon: 'hospital',
    title: 'Built for',
    text: 'An outpatient hospital or clinic: registering patients, booking and seeing them, billing, dispensing medicine and running tests, with reports for management.',
  },
  rule: {
    icon: 'circle-info',
    title: 'How to read this page',
    text: 'If a feature is not described on this page, treat it as not included. Anything listed below is not partly built: it is not part of this build.',
  },
  notIncludedTitle: 'Not included in this build',
  groups: [
    {
      icon: 'stethoscope',
      title: 'Clinical care',
      items: [
        'Vital signs (temperature, pulse, respiration, blood pressure) and nursing observations',
        'Medical history and family history records',
        'Clinical record-keeping for the Nurse role (nurses can view records and create lab orders)',
      ],
    },
    {
      icon: 'bed',
      title: 'Inpatient services',
      items: [
        'Admissions, wards and beds, transfers and discharge summaries',
        'Operating theatre scheduling',
      ],
    },
    {
      icon: 'microscope',
      title: 'Diagnostics',
      items: [
        'Radiology and imaging orders, or image storage',
        'Connection to laboratory analysers or other medical devices',
      ],
    },
    {
      icon: 'comments',
      title: 'Patients and communication',
      items: [
        'A patient portal or patient mobile app',
        'SMS or WhatsApp notifications (notifications appear in the app and are emailed to patients and staff)',
      ],
    },
    {
      icon: 'receipt',
      title: 'Billing and insurance',
      items: [
        'Insurance claim submission and tracking (insurance details are recorded on the patient, but claims are not processed)',
        'Online payment gateways (payments are recorded by the Accountant)',
      ],
    },
    {
      icon: 'sitemap',
      title: 'Organisation',
      items: [
        'More than one hospital or branch in a single installation',
        'Languages other than English',
      ],
    },
  ],
  runTitle: 'How it is designed to run',
  run: [
    {
      icon: 'network-wired',
      title: 'Local network',
      text: "The system runs on a server inside the hospital. It is not designed to be hosted publicly on the internet.",
    },
    {
      icon: 'envelope',
      title: 'Email',
      text: "Emails are sent from the hospital's own Gmail account. A business account on the hospital's own domain is recommended, because a personal account sending many automated messages is more likely to be treated as spam.",
    },
    {
      icon: 'download',
      title: 'Backups',
      text: 'An Admin downloads a complete backup when needed. The system does not schedule backups, and restoring follows the instructions inside the file. There is no restore button, by design, because a restore replaces all live data.',
    },
  ],
  custom: {
    icon: 'puzzle-piece',
    title: 'Built to be adapted',
    text: 'Every hospital works differently, so the source code is written to be changed. Anything listed above can be added, and existing behaviour can be changed, as a customization for a specific hospital.',
    steps: [
      'The hospital describes the workflow it needs',
      'A written scope and quotation is provided before any work starts',
      'The change is delivered with updated documentation',
    ],
  },
}

export const faq = {
  eyebrow: 'Questions',
  title: 'Common questions',
  items: [
    {
      q: 'Is MEDCORE a cloud service?',
      a: "No. It is installed on a computer in the hospital and used over the hospital's own network. The hospital hosts it and looks after it, which keeps patient data on site. It is not built to be used from outside the building.",
    },
    {
      q: 'Does it need the internet?',
      a: 'Daily work does not. Only email needs the internet, because messages to patients and staff are sent from a Gmail account. If an email cannot be sent, nothing else stops working.',
    },
    {
      q: 'What do staff need to install?',
      a: 'Nothing. Staff open the system in a web browser on any computer connected to the hospital network, and each person sees the screens built for their role.',
    },
    {
      q: 'How is access controlled?',
      a: 'There are seven roles, and every restriction is enforced by the server, so an unauthorised request is rejected whatever the screen shows. Passwords are hashed with Argon2, sessions end when the browser closes, logins are rate limited, and an Admin can deactivate an account at any time.',
    },
    {
      q: 'Is anything ever deleted?',
      a: "No. A staff member's history stays on record after the account is deactivated, drugs are discontinued instead of deleted, and patients are never deleted or marked inactive, so a patient who returns years later is always found.",
    },
    {
      q: 'How do backups and restores work?',
      a: 'An Admin downloads one file containing the database, the lab report PDFs and written restore instructions. The system does not schedule backups, so the hospital decides how often to take one and keeps copies on another device. Restoring is a manual procedure, because a restore replaces all live data.',
    },
    {
      q: 'Can it handle admitted patients?',
      a: 'Not in this build. MEDCORE covers outpatient work. Admissions, wards, beds and discharge are not included, although they can be discussed as a customization.',
    },
    {
      q: 'Can it be changed for our hospital?',
      a: 'Yes. The source code is written to be adapted. Changes are provided as a customization, with a written scope and quotation before any work starts, and they are delivered with updated documentation.',
    },
    {
      q: 'Which languages does it support?',
      a: 'English only. The interface has no language switcher.',
    },
    {
      q: 'What is it built with?',
      a: 'React for the screens, FastAPI (Python) for the server, and PostgreSQL for the database.',
    },
  ],
}