/* @ds-bundle: {"format":3,"namespace":"FisioGestDesignSystem_a8b99a","components":[],"sourceHashes":{"ui_kits/desktop-app/Agenda.jsx":"7f955a5ce880","ui_kits/desktop-app/App.jsx":"646833b6543e","ui_kits/desktop-app/Incassi.jsx":"ace79b327757","ui_kits/desktop-app/PatientList.jsx":"5ad6de506cba","ui_kits/desktop-app/PatientOverview.jsx":"3ff75b86373e","ui_kits/desktop-app/Sidebar.jsx":"25342123e345","ui_kits/desktop-app/primitives.jsx":"16b1942a47c8","ui_kits/mobile-app/ApptSheet.jsx":"ca4f818ca727","ui_kits/mobile-app/MobileApp.jsx":"0c4f4d8a4c18","ui_kits/mobile-app/MobilePatientOverview.jsx":"59bf808b1bc2","ui_kits/mobile-app/Screens.jsx":"7c9fe9fca4f0","ui_kits/mobile-app/ios-frame.jsx":"be3343be4b51","ui_kits/mobile-app/primitives.jsx":"e96b2e0e6eab"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FisioGestDesignSystem_a8b99a = window.FisioGestDesignSystem_a8b99a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/desktop-app/Agenda.jsx
try { (() => {
// FisioGest Desktop — Agenda (daily schedule)
const APPTS = [{
  time: "08:30 – 09:30",
  name: "Sarah Mitchell",
  svc: "Tecarterapia",
  fee: 80,
  status: "success",
  label: "Confermato"
}, {
  time: "09:45 – 10:30",
  name: "Maria Rossi",
  svc: "Rieducazione posturale",
  fee: 60,
  status: "warning",
  label: "In attesa"
}, {
  time: "11:00 – 12:00",
  name: "Luca Esposito",
  svc: "Terapia manuale",
  fee: 70,
  status: "success",
  label: "Confermato"
}, {
  time: "14:30 – 15:15",
  name: "Giulia Bianchi",
  svc: "Kinesiterapia",
  fee: 55,
  status: "danger",
  label: "Assente"
}, {
  time: "16:00 – 17:00",
  name: "Marco Conti",
  svc: "Valutazione iniziale",
  fee: 90,
  status: "success",
  label: "Confermato"
}];
const WEEK = [{
  d: "Lun",
  n: 22
}, {
  d: "Mar",
  n: 23
}, {
  d: "Mer",
  n: 24,
  on: true
}, {
  d: "Gio",
  n: 25
}, {
  d: "Ven",
  n: 26
}, {
  d: "Sab",
  n: 27
}, {
  d: "Dom",
  n: 28
}];
function Agenda() {
  const [openNote, setOpenNote] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: "20px 24px",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "contact",
    size: 26,
    color: "var(--brand-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fg-h1"
  }, "Agenda"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "calendar-days"
  }, "Maggio 2026"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus"
  }, "Nuovo appuntamento")), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 12,
      display: "flex",
      gap: 8
    }
  }, WEEK.map(w => /*#__PURE__*/React.createElement("div", {
    key: w.n,
    style: {
      flex: 1,
      textAlign: "center",
      padding: "12px 0",
      borderRadius: 10,
      cursor: "pointer",
      background: w.on ? "var(--brand-primary)" : "transparent",
      color: w.on ? "#fff" : "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12px var(--font-sans)",
      opacity: 0.8
    }
  }, w.d), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 20px var(--font-sans)",
      marginTop: 4
    }
  }, w.n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fg-h2"
  }, "Mercoled\xEC 24 maggio"), /*#__PURE__*/React.createElement("span", {
    className: "fg-meta"
  }, "5 appuntamenti \xB7 \u20AC355 previsti")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, APPTS.map((a, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    style: {
      padding: 0,
      overflow: "hidden",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      background: PILL_TONES[a.status][1]
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 16px var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, a.time), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(StatusPill, {
    tone: a.status
  }, a.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: initials(a.name),
    size: 38
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 15px var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, a.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, a.svc)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 15px var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, "Tariffa: \u20AC", a.fee)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpenNote(openNote === i ? -1 : i),
    style: {
      width: "100%",
      marginTop: 16,
      padding: "10px 14px",
      borderRadius: 8,
      cursor: "pointer",
      border: "1px solid var(--border-default)",
      background: "var(--surface-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      font: "500 13px var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, "Note brevi", /*#__PURE__*/React.createElement(Icon, {
    name: openNote === i ? "chevron-up" : "chevron-down",
    size: 16
  })), openNote === i && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px",
      font: "400 13px/20px var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, "Paziente in fase di mantenimento. Proseguire con esercizi di mobilit\xE0; rivalutare ROM a fine seduta."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      flex: 1,
      justifyContent: "center"
    }
  }, "Modifica"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      flex: 1,
      justifyContent: "center"
    }
  }, "Scheda")))))));
}
window.Agenda = Agenda;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/Agenda.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/App.jsx
try { (() => {
// FisioGest Desktop — App shell & routing
function App() {
  const [route, setRoute] = React.useState("pazienti");
  const [patient, setPatient] = React.useState(null);

  // re-render Lucide glyphs after every render
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const navigate = id => {
    setRoute(id);
    if (id !== "patient") setPatient(null);
  };
  const openPatient = p => {
    setPatient(p);
    setRoute("patient");
  };
  let screen;
  if (route === "pazienti") screen = /*#__PURE__*/React.createElement(PatientList, {
    onOpenPatient: openPatient
  });else if (route === "patient") screen = /*#__PURE__*/React.createElement(PatientOverview, {
    patient: patient,
    onBack: () => navigate("pazienti")
  });else if (route === "agenda") screen = /*#__PURE__*/React.createElement(Agenda, null);else if (route === "incassi") screen = /*#__PURE__*/React.createElement(Incassi, null);else screen = /*#__PURE__*/React.createElement(ProfiloScreen, null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100vh",
      background: "var(--background-base)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: route,
    onNavigate: navigate
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, screen));
}
function ProfiloScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 18,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "AM",
    size: 80
  }), /*#__PURE__*/React.createElement("div", {
    className: "fg-h1"
  }, "Dr. Andrea Marini"), /*#__PURE__*/React.createElement("div", {
    className: "fg-body",
    style: {
      color: "var(--text-secondary)"
    }
  }, "Fisioterapista \xB7 Studio FisioGest Milano"), /*#__PURE__*/React.createElement(EmptyIllustration, null), /*#__PURE__*/React.createElement("div", {
    className: "fg-body",
    style: {
      color: "var(--text-secondary)",
      maxWidth: 380
    }
  }, "La schermata Profilo fa parte del kit. Usa la barra laterale per esplorare Agenda, Pazienti e Incassi.")));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/Incassi.jsx
try { (() => {
// FisioGest Desktop — Incassi (collections / billing)
const INVOICES = [{
  name: "Francesca Titus",
  svc: "Tecarterapia",
  date: "19/09/2026",
  amount: 240,
  paid: false
}, {
  name: "Giulia Bianchi",
  svc: "Kinesiterapia",
  date: "28/09/2026",
  amount: 80,
  paid: false
}, {
  name: "Sara Greco",
  svc: "Terapia manuale",
  date: "30/09/2026",
  amount: 60,
  paid: false
}, {
  name: "Maria Rossi",
  svc: "Rieducazione posturale",
  date: "01/10/2026",
  amount: 120,
  paid: true
}, {
  name: "Luca Esposito",
  svc: "Valutazione",
  date: "11/09/2026",
  amount: 90,
  paid: true
}];
function Incassi() {
  const [rows, setRows] = React.useState(INVOICES);
  const dueTotal = rows.filter(r => !r.paid).reduce((s, r) => s + r.amount, 0);
  const paidTotal = rows.filter(r => r.paid).reduce((s, r) => s + r.amount, 0);
  const markPaid = i => setRows(rs => rs.map((r, j) => j === i ? {
    ...r,
    paid: true
  } : r));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: "20px 24px",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "banknote",
    size: 26,
    color: "var(--brand-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fg-h1"
  }, "Incassi"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "download"
  }, "Esporta")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SummaryCard, {
    label: "Da riscuotere",
    value: `€${dueTotal.toFixed(2)}`,
    tone: "warning",
    icon: "clock"
  }), /*#__PURE__*/React.createElement(SummaryCard, {
    label: "Incassato questo mese",
    value: `€${paidTotal.toFixed(2)}`,
    tone: "success",
    icon: "banknote"
  }), /*#__PURE__*/React.createElement(SummaryCard, {
    label: "Pazienti con saldo",
    value: rows.filter(r => !r.paid).length,
    tone: "plain",
    icon: "users"
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      overflow: "hidden",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ["Paziente", "Prestazione", "Data", "Importo", "Stato", ""].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      background: "var(--surface-subtle)",
      textAlign: "left",
      padding: "14px 18px",
      font: "500 12px/16px var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: tdStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: initials(r.name),
    size: 34
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, r.name))), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdStyle,
      color: "var(--text-secondary)"
    }
  }, r.svc), /*#__PURE__*/React.createElement("td", {
    style: tdStyle
  }, r.date), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdStyle,
      fontWeight: 600
    }
  }, "\u20AC", r.amount.toFixed(2)), /*#__PURE__*/React.createElement("td", {
    style: tdStyle
  }, /*#__PURE__*/React.createElement(StatusPill, {
    tone: r.paid ? "success" : "warning"
  }, r.paid ? "Pagato" : "Non pagato")), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdStyle,
      textAlign: "right"
    }
  }, r.paid ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--success-fg)",
      display: "inline-flex",
      gap: 6,
      alignItems: "center",
      font: "500 13px var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  }), "Ricevuta inviata") : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => markPaid(i)
  }, "Segna pagato"))))))));
}
function SummaryCard({
  label,
  value,
  tone,
  icon
}) {
  const fills = {
    plain: "#fff",
    success: "#E0F3EA",
    warning: "#FFF4DF"
  };
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 20,
      background: fills[tone],
      border: tone === "plain" ? "1px solid var(--border-default)" : "none",
      boxShadow: tone === "plain" ? "var(--shadow-sm)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "fg-label"
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 28px var(--font-sans)",
      color: tone === "warning" ? "var(--warning-fg)" : tone === "success" ? "var(--success-fg)" : "var(--text-primary)",
      marginTop: 10
    }
  }, value));
}
window.Incassi = Incassi;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/Incassi.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/PatientList.jsx
try { (() => {
// FisioGest Desktop — Pazienti (patient list)
const PATIENTS = [{
  id: 1,
  name: "Maria Rossi",
  cf: "RSSMRA80A41F205F",
  date: "01/10/2026",
  balance: 120.0,
  status: "ok"
}, {
  id: 2,
  name: "Alessandro Rizzo",
  cf: "RZZLSN80A01F205F",
  date: "12/09/2025",
  balance: 0,
  status: "ok"
}, {
  id: 3,
  name: "Giulia Bianchi",
  cf: "BNCGLI92C55L219K",
  date: "28/09/2026",
  balance: 80.0,
  status: "unpaid"
}, {
  id: 4,
  name: "Marco Conti",
  cf: "CNTMRC75H12A662S",
  date: "03/10/2026",
  balance: 0,
  status: "unset"
}, {
  id: 5,
  name: "Francesca Titus",
  cf: "TTSFNC88D44H501Y",
  date: "19/09/2026",
  balance: 240.0,
  status: "unpaid"
}, {
  id: 6,
  name: "Luca Esposito",
  cf: "SPSLCU83M22F839T",
  date: "11/09/2026",
  balance: 0,
  status: "absent"
}, {
  id: 7,
  name: "Sara Greco",
  cf: "GRCSRA95E60G273M",
  date: "30/09/2026",
  balance: 60.0,
  status: "ok"
}, {
  id: 8,
  name: "Davide Moretti",
  cf: "MRTDVD79B18L736P",
  date: "02/10/2026",
  balance: 0,
  status: "ok"
}];
const FILTERS = [{
  id: "tutti",
  label: "Tutti",
  tone: "neutral"
}, {
  id: "unpaid",
  label: "Non pagato",
  tone: "brand"
}, {
  id: "unset",
  label: "Appuntamento non fissato",
  tone: "warning"
}, {
  id: "absent",
  label: "Assente",
  tone: "danger"
}];
function PatientList({
  onOpenPatient
}) {
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState("tutti");
  const rows = PATIENTS.filter(p => {
    const matchQ = p.name.toLowerCase().includes(query.toLowerCase()) || p.cf.toLowerCase().includes(query.toLowerCase());
    const matchF = filter === "tutti" || p.status === filter;
    return matchQ && matchF;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: "20px 24px",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 26,
    color: "var(--brand-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fg-h1"
  }, "Pazienti"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus"
  }, "Nuovo paziente")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    icon: "search",
    placeholder: "Cerca per nome o codice fiscale\u2026",
    value: query,
    onChange: setQuery,
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "sliders-horizontal"
  }, "Filtri")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f.id,
    tone: f.tone,
    active: filter === f.id,
    onClick: () => setFilter(f.id)
  }, f.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "fg-meta",
    style: {
      alignSelf: "center"
    }
  }, "* Verranno visualizzate tutte le schede presenti")), /*#__PURE__*/React.createElement(Card, {
    style: {
      overflow: "hidden",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ["Nome Paziente", "Codice fiscale", "Prossimo appuntamento", "Contatto", "Saldo sospeso", ""].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      background: "var(--surface-subtle)",
      textAlign: "left",
      padding: "14px 18px",
      font: "500 12px/16px var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(p => /*#__PURE__*/React.createElement("tr", {
    key: p.id,
    onClick: () => onOpenPatient(p),
    className: "row",
    style: {
      cursor: "pointer",
      transition: "background .12s"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--background-base)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("td", {
    style: tdStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: initials(p.name),
    size: 36
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, p.name))), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdStyle,
      color: "var(--text-secondary)"
    }
  }, p.cf), /*#__PURE__*/React.createElement("td", {
    style: tdStyle
  }, p.date), /*#__PURE__*/React.createElement("td", {
    style: tdStyle
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 8,
      alignItems: "center",
      color: "var(--brand-primary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 15
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15
  }))), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdStyle,
      fontWeight: 600,
      color: p.balance > 0 ? "var(--danger-fg)" : "var(--text-primary)"
    }
  }, p.balance > 0 ? `€${p.balance.toFixed(2)}` : "—"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdStyle,
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--text-secondary)"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "16px 18px",
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fg-meta"
  }, "Mostra 1\u2013", rows.length, " di 48 pazienti"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PageBtn, null, "\u2039 Prec"), /*#__PURE__*/React.createElement(PageBtn, {
    active: true
  }, "1"), /*#__PURE__*/React.createElement(PageBtn, null, "2"), /*#__PURE__*/React.createElement(PageBtn, null, "3"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, "\u2026"), /*#__PURE__*/React.createElement(PageBtn, null, "5"), /*#__PURE__*/React.createElement(PageBtn, null, "Succ \u203A")))));
}
const tdStyle = {
  padding: "16px 18px",
  borderTop: "1px solid var(--border-default)",
  font: "400 14px/20px var(--font-sans)",
  color: "var(--text-primary)"
};
function PageBtn({
  children,
  active
}) {
  return /*#__PURE__*/React.createElement("button", {
    style: {
      minWidth: 34,
      height: 34,
      padding: "0 10px",
      borderRadius: 8,
      cursor: "pointer",
      border: `1px solid ${active ? "var(--brand-primary)" : "var(--border-default)"}`,
      background: active ? "var(--brand-primary)" : "#fff",
      color: active ? "#fff" : "var(--text-primary)",
      font: "500 13px var(--font-sans)"
    }
  }, children);
}
function initials(name) {
  return name.split(" ").map(w => w[0]).slice(0, 2).join("");
}
window.PatientList = PatientList;
window.initials = initials;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/PatientList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/PatientOverview.jsx
try { (() => {
// FisioGest Desktop — Patient detail / Overview
function AreaChart({
  data,
  width = 560,
  height = 240
}) {
  const max = Math.max(...data),
    min = Math.min(...data);
  const pad = 16;
  const x = i => pad + i * (width - pad * 2) / (data.length - 1);
  const y = v => pad + (1 - (v - min) / (max - min || 1)) * (height - pad * 2);
  const line = data.map((v, i) => `${i ? "L" : "M"}${x(i)},${y(v)}`).join(" ");
  const area = `${line} L${x(data.length - 1)},${height - pad} L${x(0)},${height - pad} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "areaFill",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#377D60",
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#377D60",
    stopOpacity: "0"
  }))), [0.25, 0.5, 0.75].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: pad,
    x2: width - pad,
    y1: pad + g * (height - pad * 2),
    y2: pad + g * (height - pad * 2),
    stroke: "var(--border-default)",
    strokeDasharray: "3 4"
  })), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#areaFill)"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: "#0A6440",
    strokeWidth: "2.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), data.map((v, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x(i),
    cy: y(v),
    r: i === data.length - 1 ? 6 : 4,
    fill: "#0A6440",
    stroke: "#fff",
    strokeWidth: "2"
  })));
}
function KpiTile({
  label,
  value,
  trend,
  tone = "plain"
}) {
  const fills = {
    plain: "#fff",
    success: "#E0F3EA",
    warning: "#FFF4DF",
    danger: "#FFE5E5"
  };
  const valueColor = tone === "success" || tone === "warning" ? "var(--success-fg)" : "var(--text-primary)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: fills[tone],
      borderRadius: "var(--radius-md)",
      padding: "16px 18px",
      border: tone === "plain" ? "1px solid var(--border-default)" : "none",
      boxShadow: tone === "plain" ? "var(--shadow-sm)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fg-label",
    style: {
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 26px/30px var(--font-sans)",
      color: valueColor,
      margin: "8px 0 4px"
    }
  }, value), trend && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12px var(--font-sans)",
      color: trend.color
    }
  }, trend.text));
}
function PatientOverview({
  patient,
  onBack
}) {
  const [tab, setTab] = React.useState("Overview");
  const p = patient || {
    name: "Maria Rossi"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "28px 40px 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(120% 140% at 88% -10%, #E0F3EA 0%, rgba(224,243,234,0) 55%)"
    }
  }), /*#__PURE__*/React.createElement(DecorMarks, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--brand-primary)",
      font: "600 15px var(--font-sans)",
      padding: 0,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 18
  }), " Torna ai pazienti"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: initials(p.name),
    size: 72
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "fg-h1",
    style: {
      fontSize: 26
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      marginTop: 8,
      color: "var(--text-secondary)",
      font: "400 14px var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15
  }), "340 987 6543"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15
  }), "maria.rossi@mail.com"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "upload"
  }, "Carica"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus"
  }, "Aggiungi appuntamento")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Overview", "Cartella clinica", "Percorso", "Documenti", "Pagamenti"],
    value: tab,
    onChange: setTab
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 40px 40px"
    }
  }, tab === "Overview" ? /*#__PURE__*/React.createElement(OverviewBody, null) : /*#__PURE__*/React.createElement(Placeholder, {
    tab: tab
  })));
}
function OverviewBody() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    soft: true,
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Block, {
    label: "QUADRO CLINICO",
    text: "Lombalgia cronica L4-L5 con discopatia degenerativa"
  }), /*#__PURE__*/React.createElement(Block, {
    label: "OBIETTIVI TERAPEUTICI",
    text: "Recupero ROM lombare, riduzione VAS <2, ritorno attivit\xE0 sportiva"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Block, {
    label: "INIZIO TRATTAMENTO",
    text: "12 marzo 2026",
    inline: true
  }), /*#__PURE__*/React.createElement(Block, {
    label: "SEDUTE",
    text: "10 / 20",
    inline: true
  }))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "fg-label",
    style: {
      letterSpacing: ".04em"
    }
  }, "PROSSIMO APPUNTAMENTO"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 18px var(--font-sans)",
      color: "var(--text-primary)",
      margin: "8px 0 2px"
    }
  }, "Luned\xEC 24 maggio \xB7 10:00"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-secondary)",
      font: "400 14px var(--font-sans)"
    }
  }, "Rieducazione posturale")), /*#__PURE__*/React.createElement(StatusPill, {
    tone: "success"
  }, "Confermato")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "24px 0 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fg-label"
  }, "ADERENZA AL PIANO"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Bar, {
    on: true
  }), /*#__PURE__*/React.createElement(Bar, null), /*#__PURE__*/React.createElement(Bar, null), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      color: "var(--text-secondary)",
      font: "500 13px var(--font-sans)"
    }
  }, "1/3"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      paddingTop: 20,
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fg-label",
    style: {
      letterSpacing: ".04em"
    }
  }, "ULTIMO APPUNTAMENTO"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 16px var(--font-sans)",
      color: "var(--text-primary)",
      marginTop: 8
    }
  }, "Gioved\xEC 17 aprile \xB7 10:00")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "340px 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(KpiTile, {
    label: "Dolore medio",
    value: "4,2/10",
    trend: {
      text: "↓ -2,3",
      color: "var(--danger-fg)"
    }
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Miglioramento",
    value: "35%",
    tone: "success",
    trend: {
      text: "↑ Buona",
      color: "var(--success-fg)"
    }
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Esercizi",
    value: "78%",
    tone: "warning",
    trend: {
      text: "↑ Buona",
      color: "var(--warning-fg)"
    }
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "ROM spalla",
    value: "135\xB0",
    tone: "danger",
    trend: {
      text: "↑ +15°",
      color: "var(--success-fg)"
    }
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: "20px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fg-h3"
  }, "Andamento del dolore (VAS)"), /*#__PURE__*/React.createElement("span", {
    className: "fg-meta"
  }, "19\xAA seduta / 26 totali")), /*#__PURE__*/React.createElement(AreaChart, {
    data: [9, 8.2, 7, 7, 7, 6.2, 5.5, 5.5, 5, 6, 6, 4.5, 3.2]
  }))));
}
function Block({
  label,
  text,
  inline
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: inline ? 0 : 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fg-label",
    style: {
      letterSpacing: ".04em",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 15px/22px var(--font-sans)",
      color: "var(--text-primary)",
      marginTop: 6
    }
  }, text));
}
function Bar({
  on
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      flex: 1,
      borderRadius: 999,
      background: on ? "var(--brand-primary)" : "var(--surface-subtle)"
    }
  });
}
function Placeholder({
  tab
}) {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 48,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(EmptyIllustration, null), /*#__PURE__*/React.createElement("div", {
    className: "fg-h3"
  }, tab), /*#__PURE__*/React.createElement("div", {
    className: "fg-body",
    style: {
      color: "var(--text-secondary)",
      maxWidth: 360
    }
  }, "Questa sezione fa parte del kit ma non \xE8 inclusa in questo prototipo. Seleziona \u201COverview\u201D."));
}
function DecorMarks() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "160",
    height: "90",
    viewBox: "0 0 160 90",
    style: {
      position: "absolute",
      top: 18,
      right: 28,
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "#A6DAC1",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 20 h14 M27 13 v14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M70 40 h12 M76 34 v12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120 16 h12 M126 10 v12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 66 h12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M110 60 h16"
  })));
}
function EmptyIllustration() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "120",
    height: "120",
    viewBox: "0 0 165 165",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "82",
    cy: "80",
    r: "58",
    fill: "#E0F3EA"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M58 44 l2.5 5 5 2.5 -5 2.5 -2.5 5 -2.5 -5 -5 -2.5 5 -2.5z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "44",
    y: "62",
    width: "92",
    height: "40",
    rx: "8",
    fill: "#F5F5F7",
    stroke: "#E0E4EA"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "62",
    cy: "82",
    r: "11",
    fill: "#377D60"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "80",
    y: "74",
    width: "34",
    height: "6",
    rx: "3",
    fill: "#A6DAC1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "80",
    y: "86",
    width: "42",
    height: "6",
    rx: "3",
    fill: "#E0E4EA"
  }));
}
Object.assign(window, {
  PatientOverview,
  AreaChart,
  KpiTile,
  EmptyIllustration
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/PatientOverview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/Sidebar.jsx
try { (() => {
// FisioGest Desktop — left navigation rail
function Sidebar({
  active,
  onNavigate
}) {
  const items = [{
    id: "agenda",
    label: "Agenda",
    icon: "contact"
  }, {
    id: "pazienti",
    label: "Pazienti",
    icon: "users"
  }, {
    id: "incassi",
    label: "Incassi",
    icon: "banknote"
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 96,
      flex: "none",
      background: "#fff",
      borderRight: "1px solid var(--border-default)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "24px 0",
      gap: 8,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 11,
      background: "var(--brand-primary)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(FisioMark, {
    size: 26,
    color: "#fff"
  })), items.map(it => {
    const on = active === it.id || active === "patient" && it.id === "pazienti";
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onNavigate(it.id),
      style: {
        width: 72,
        padding: "10px 0",
        border: "none",
        cursor: "pointer",
        borderRadius: 12,
        background: on ? "var(--brand-primary-soft)" : "transparent",
        color: on ? "var(--brand-primary)" : "var(--text-secondary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        font: "500 11px var(--font-sans)",
        transition: "background .14s, color .14s"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 22
    }), it.label);
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 1,
      background: "var(--border-default)",
      margin: "8px 0"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("profilo"),
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 5,
      color: active === "profilo" ? "var(--brand-primary)" : "var(--text-secondary)",
      font: "500 11px var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "AM",
    size: 44
  }), "Profilo"));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop-app/primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// FisioGest Desktop UI Kit — shared primitives
// Loaded as a Babel script; exports components to window.

// ---- Icon: renders a Lucide glyph (createIcons() is called app-wide on each render) ----
function Icon({
  name,
  size = 20,
  color,
  strokeWidth = 2,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    "data-cc-icon": true,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      color,
      "--lucide-size": size + "px",
      ...style
    },
    ref: el => {
      if (el) {
        el.style.setProperty("width", size + "px");
        el.style.setProperty("height", size + "px");
      }
    }
  });
}
function refreshIcons() {
  if (window.lucide) window.lucide.createIcons({
    attrs: {
      width: undefined,
      height: undefined
    }
  });
}

// ---- Button ----
function Button({
  variant = "primary",
  icon,
  children,
  onClick,
  disabled,
  style = {}
}) {
  const base = {
    font: "500 14px/20px var(--font-sans)",
    borderRadius: "var(--radius-md)",
    padding: "8px 16px",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    transition: "background .14s ease, border-color .14s ease",
    whiteSpace: "nowrap"
  };
  const variants = {
    primary: {
      background: "var(--brand-primary)",
      color: "var(--text-on-brand)"
    },
    secondary: {
      background: "#fff",
      color: "var(--text-primary)",
      borderColor: "var(--border-default)"
    },
    ghost: {
      background: "transparent",
      color: "var(--brand-primary)"
    },
    dark: {
      background: "var(--action-dark)",
      color: "#fff"
    }
  };
  const dis = {
    background: "var(--surface-subtle)",
    color: "var(--text-disabled)",
    borderColor: "transparent"
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === "primary" ? {
    background: "var(--brand-primary-hover)"
  } : variant === "secondary" ? {
    background: "var(--surface-subtle)"
  } : variant === "ghost" ? {
    background: "var(--surface-subtle)"
  } : variant === "dark" ? {
    background: "#0f1820"
  } : {} : {};
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...(disabled ? dis : variants[variant]),
      ...hoverStyle,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }), children);
}

// ---- Avatar ----
function Avatar({
  initials,
  size = 40,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      flex: "none",
      background: "var(--brand-primary)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: `600 ${Math.round(size * 0.38)}px var(--font-sans)`,
      ...style
    }
  }, initials);
}

// ---- StatusPill ----
const PILL_TONES = {
  success: ["#E0F3EA", "#0B7A4B"],
  warning: ["#FFF4DF", "#B95C00"],
  danger: ["#FFE5E5", "#B42318"],
  brand: ["#E0F3EA", "#377D60"],
  neutral: ["#F0F2F4", "#5B6470"]
};
function StatusPill({
  tone = "success",
  children,
  dot = true
}) {
  const [bg, fg] = PILL_TONES[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      font: "600 13px/16px var(--font-sans)",
      color: fg,
      background: bg,
      padding: "6px 12px",
      borderRadius: 999,
      whiteSpace: "nowrap"
    }
  }, dot && /*#__PURE__*/React.createElement("i", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: fg
    }
  }), children);
}

// ---- Chip (filter) ----
function Chip({
  tone = "neutral",
  active,
  children,
  onClick
}) {
  const [bg, fg] = PILL_TONES[tone];
  const activeStyle = active ? {
    background: "var(--brand-primary)",
    color: "#fff"
  } : {
    background: bg,
    color: fg
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      border: "none",
      cursor: "pointer",
      font: "500 13px/20px var(--font-sans)",
      padding: "7px 16px",
      borderRadius: 999,
      ...activeStyle
    }
  }, children);
}

// ---- Card ----
function Card({
  children,
  soft,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: soft ? "var(--brand-primary-soft)" : "#fff",
      border: soft ? "none" : "1px solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      boxShadow: soft ? "none" : "var(--shadow-sm)",
      ...style
    }
  }), children);
}

// ---- Tabs ----
function Tabs({
  tabs,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      borderBottom: "1px solid var(--border-default)"
    }
  }, tabs.map(t => {
    const on = t === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => onChange(t),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0 0 12px",
        font: `${on ? 600 : 500} 15px/20px var(--font-sans)`,
        color: on ? "var(--brand-primary)" : "var(--text-secondary)",
        borderBottom: `2px solid ${on ? "var(--brand-primary)" : "transparent"}`,
        marginBottom: -1,
        transition: "color .14s ease"
      }
    }, t);
  }));
}

// ---- Field / Input ----
function Field({
  icon,
  placeholder,
  value,
  onChange,
  style = {},
  trailing
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: 44,
      padding: "0 14px",
      background: "#fff",
      borderRadius: "var(--radius-md)",
      border: `1px solid ${focus ? "var(--brand-primary)" : "var(--border-default)"}`,
      boxShadow: focus ? "0 0 0 3px var(--brand-primary-soft)" : "none",
      color: "var(--text-secondary)",
      transition: "border-color .14s, box-shadow .14s",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }), /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      border: "none",
      outline: "none",
      flex: 1,
      background: "transparent",
      font: "400 14px var(--font-sans)",
      color: "var(--text-primary)"
    }
  }), trailing);
}
Object.assign(window, {
  Icon,
  refreshIcons,
  Button,
  Avatar,
  StatusPill,
  Chip,
  Card,
  Tabs,
  Field
});

// ---- FisioMark: stylized forward-leaning "F" with trailing motion lines ----
function FisioMark({
  size = 26,
  color = "#fff",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none",
    style: style
  }, /*#__PURE__*/React.createElement("g", {
    stroke: color,
    strokeWidth: "5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "skewX(-12)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.5 7.5 V 25.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 7.5 H 26.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 15.8 H 23.5"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M2 11 H 7",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 19 H 5.5",
    opacity: "0.32"
  })));
}
window.FisioMark = FisioMark;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop-app/primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ApptSheet.jsx
try { (() => {
// FisioGest Mobile — New / Edit appointment modal sheet
function ApptSheet({
  appt,
  onClose
}) {
  const [method, setMethod] = React.useState("WhatsApp");
  const [cadence, setCadence] = React.useState("24h prima");
  const a = appt || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 30,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(30,41,51,0.45)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "#fff",
      borderRadius: "22px 22px 0 0",
      maxHeight: "88%",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 0 6px",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 5,
      borderRadius: 999,
      background: "var(--border-default)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 20px 14px",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fg-h2",
    style: {
      flex: 1
    }
  }, appt ? "Modifica appuntamento" : "Nuovo appuntamento"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: "none",
      background: "var(--surface-subtle)",
      width: 34,
      height: 34,
      borderRadius: 999,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 18,
    color: "var(--text-secondary)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: a.name ? initials(a.name) : "MR",
    size: 48
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 16px var(--font-sans)"
    }
  }, a.name || "Maria Rossi"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, "340 987 6543"))), /*#__PURE__*/React.createElement(FieldRow, {
    label: "Prestazione",
    value: a.svc || "Rieducazione posturale",
    icon: "chevron-down"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(FieldRow, {
    label: "Data",
    value: "24 mag 2026",
    icon: "calendar-days",
    grow: true
  }), /*#__PURE__*/React.createElement(FieldRow, {
    label: "Orario",
    value: a.time || "10:00",
    icon: "clock",
    grow: true
  })), /*#__PURE__*/React.createElement(FieldRow, {
    label: "Tariffa",
    value: `€${a.fee || 60}`
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "fg-label",
    style: {
      marginBottom: 8
    }
  }, "Metodo promemoria"), /*#__PURE__*/React.createElement(Segmented, {
    options: ["WhatsApp", "SMS", "Email"],
    value: method,
    onChange: setMethod
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "fg-label",
    style: {
      marginBottom: 8
    }
  }, "Cadenza promemoria"), /*#__PURE__*/React.createElement(Segmented, {
    options: ["24h prima", "2h prima", "Nessuno"],
    value: cadence,
    onChange: setCadence
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fg-meta",
    style: {
      width: "100%",
      marginBottom: -2
    }
  }, "Scorciatoie"), ["Oggi", "Domani", "Stessa ora settimana prossima"].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      font: "500 13px var(--font-sans)",
      color: "var(--brand-primary)",
      background: "var(--brand-primary-soft)",
      padding: "7px 14px",
      borderRadius: 999
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px 28px",
      borderTop: "1px solid var(--border-default)",
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(MButton, {
    variant: "secondary",
    onClick: onClose,
    style: {
      flex: 1,
      padding: "13px 0"
    }
  }, "Annulla"), /*#__PURE__*/React.createElement(MButton, {
    variant: "primary",
    onClick: onClose,
    style: {
      flex: 2,
      padding: "13px 0"
    }
  }, "Conferma modifica"))));
}
function FieldRow({
  label,
  value,
  icon,
  grow
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: grow ? 1 : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fg-label",
    style: {
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      height: 46,
      padding: "0 14px",
      background: "#fff",
      border: "1px solid var(--border-default)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: "400 15px var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, value), icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16,
    color: "var(--text-secondary)"
  })));
}
window.ApptSheet = ApptSheet;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ApptSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/MobileApp.jsx
try { (() => {
// FisioGest Mobile — app shell, routing, device frame
function MobileApp() {
  const [route, setRoute] = React.useState("pazienti");
  const [patient, setPatient] = React.useState(null);
  const [sheet, setSheet] = React.useState(null); // null | {appt}
  const [toast, setToast] = React.useState(null);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  React.useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 1900);
      return () => clearTimeout(t);
    }
  }, [toast]);
  const nav = id => {
    setRoute(id);
    if (id !== "patient") setPatient(null);
  };
  const openPatient = p => {
    setPatient(p);
    setRoute("patient");
  };
  const showToast = msg => setToast(msg);
  let screen,
    showNav = true;
  if (route === "pazienti") screen = /*#__PURE__*/React.createElement(PazientiListM, {
    onOpenPatient: openPatient
  });else if (route === "patient") {
    showNav = false;
    screen = /*#__PURE__*/React.createElement(PatientOverviewM, {
      patient: patient,
      onBack: () => nav("pazienti"),
      onSegnaPagato: () => showToast("Pagamento registrato")
    });
  } else if (route === "agenda") screen = /*#__PURE__*/React.createElement(AgendaM, {
    onEdit: a => setSheet({
      appt: a
    })
  });else screen = /*#__PURE__*/React.createElement(IncassiM, {
    onSegnaPagato: () => showToast("Pagamento registrato")
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      background: "var(--background-base)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 50,
      flex: "none",
      background: "#fff"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column"
    }
  }, screen), showNav && /*#__PURE__*/React.createElement(BottomNav, {
    active: route,
    onNavigate: nav
  }), sheet && /*#__PURE__*/React.createElement(ApptSheet, {
    appt: sheet.appt,
    onClose: () => setSheet(null)
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: showNav ? 96 : 30,
      display: "flex",
      justifyContent: "center",
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--action-dark)",
      color: "#fff",
      padding: "12px 18px",
      borderRadius: 12,
      font: "600 14px var(--font-sans)",
      display: "flex",
      alignItems: "center",
      gap: 8,
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 18,
    color: "#A6DAC1"
  }), toast)));
}
function Root() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--background-base)",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(IOSDevice, {
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(MobileApp, null)));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Root, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/MobileApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/MobilePatientOverview.jsx
try { (() => {
// FisioGest Mobile — Patient Overview (hero screen)
function MiniArea({
  data,
  h = 130
}) {
  const w = 340,
    pad = 8;
  const max = Math.max(...data),
    min = Math.min(...data);
  const x = i => pad + i * (w - pad * 2) / (data.length - 1);
  const y = v => pad + (1 - (v - min) / (max - min || 1)) * (h - pad * 2);
  const line = data.map((v, i) => `${i ? "L" : "M"}${x(i)},${y(v)}`).join(" ");
  const area = `${line} L${x(data.length - 1)},${h - pad} L${x(0)},${h - pad} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "mFill",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#377D60",
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#377D60",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#mFill)"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: "#0A6440",
    strokeWidth: "2.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), data.map((v, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x(i),
    cy: y(v),
    r: i === data.length - 1 ? 5 : 3.5,
    fill: "#0A6440",
    stroke: "#fff",
    strokeWidth: "2"
  })));
}
function MKpi({
  label,
  value,
  trend,
  tone = "plain"
}) {
  const fills = {
    plain: "#fff",
    success: "#E0F3EA",
    warning: "#FFF4DF",
    danger: "#FFE5E5"
  };
  const vc = tone === "success" || tone === "warning" ? "var(--success-fg)" : "var(--text-primary)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: fills[tone],
      borderRadius: 14,
      padding: "14px 16px",
      border: tone === "plain" ? "1px solid var(--border-default)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fg-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 24px/28px var(--font-sans)",
      color: vc,
      margin: "6px 0 3px"
    }
  }, value), trend && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12px var(--font-sans)",
      color: trend.color
    }
  }, trend.text));
}
function PatientOverviewM({
  patient,
  onBack,
  onSegnaPagato
}) {
  const [tab, setTab] = React.useState("Overview");
  const p = patient || {
    name: "Maria Rossi"
  };
  const tabs = ["Overview", "Cartella", "Percorso", "Documenti"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--background-base)"
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    onBack: onBack,
    trailing: /*#__PURE__*/React.createElement(Icon, {
      name: "more-vertical",
      size: 22,
      color: "var(--text-secondary)"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      padding: "16px 18px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: initials(p.name),
    size: 76,
    style: {
      fontSize: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fg-h1",
    style: {
      fontSize: 22
    }
  }, p.name), /*#__PURE__*/React.createElement(StatusPill, {
    tone: "brand"
  }, "In trattamento"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      width: "100%",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(MButton, {
    variant: "primary",
    icon: "phone",
    full: true,
    style: {
      padding: "11px 0",
      fontSize: 14
    }
  }, "Chiama"), /*#__PURE__*/React.createElement(MButton, {
    variant: "primary",
    icon: "message-circle",
    full: true,
    style: {
      padding: "11px 0",
      fontSize: 14
    }
  }, "Whatsapp"), /*#__PURE__*/React.createElement(MButton, {
    variant: "primary",
    icon: "mail",
    full: true,
    style: {
      padding: "11px 0",
      fontSize: 14
    }
  }, "Mail"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22,
      padding: "0 18px",
      background: "#fff",
      borderBottom: "1px solid var(--border-default)"
    }
  }, tabs.map(t => {
    const on = t === tab;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setTab(t),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "12px 0",
        font: `${on ? 600 : 500} 14px var(--font-sans)`,
        color: on ? "var(--brand-primary)" : "var(--text-secondary)",
        borderBottom: `2px solid ${on ? "var(--brand-primary)" : "transparent"}`,
        marginBottom: -1
      }
    }, t);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(MCard, {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement(MBlock, {
    label: "QUADRO CLINICO",
    text: "Lombalgia cronica L4-L5 con discopatia degenerativa"
  }), /*#__PURE__*/React.createElement(MBlock, {
    label: "OBIETTIVI TERAPEUTICI",
    text: "Recupero ROM lombare, riduzione VAS <2, ritorno attivit\xE0 sportiva"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(MBlock, {
    label: "INIZIO",
    text: "12 mar 2026",
    inline: true
  }), /*#__PURE__*/React.createElement(MBlock, {
    label: "SEDUTE",
    text: "10 / 20",
    inline: true
  }))), /*#__PURE__*/React.createElement(MCard, {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fg-label",
    style: {
      letterSpacing: ".04em"
    }
  }, "PROSSIMO APPUNTAMENTO"), /*#__PURE__*/React.createElement(StatusPill, {
    tone: "success"
  }, "Confermato")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 17px var(--font-sans)",
      color: "var(--text-primary)",
      margin: "10px 0 2px"
    }
  }, "Luned\xEC 24 maggio \xB7 10:00"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-secondary)",
      font: "400 14px var(--font-sans)"
    }
  }, "Rieducazione posturale"), /*#__PURE__*/React.createElement("div", {
    className: "fg-label",
    style: {
      marginTop: 18
    }
  }, "ADERENZA AL PIANO"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Seg, {
    on: true
  }), /*#__PURE__*/React.createElement(Seg, null), /*#__PURE__*/React.createElement(Seg, null), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      color: "var(--text-secondary)",
      font: "500 13px var(--font-sans)"
    }
  }, "1/3"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(MKpi, {
    label: "Dolore medio",
    value: "4,2/10",
    trend: {
      text: "↓ -2,4 punti",
      color: "var(--danger-fg)"
    }
  }), /*#__PURE__*/React.createElement(MKpi, {
    label: "Miglioramento",
    value: "35%",
    tone: "success",
    trend: {
      text: "↑ Buona",
      color: "var(--success-fg)"
    }
  }), /*#__PURE__*/React.createElement(MKpi, {
    label: "Esercizi",
    value: "78%",
    tone: "warning",
    trend: {
      text: "↑ Buona",
      color: "var(--warning-fg)"
    }
  }), /*#__PURE__*/React.createElement(MKpi, {
    label: "ROM spalla",
    value: "135\xB0",
    tone: "danger",
    trend: {
      text: "↑ +15°",
      color: "var(--success-fg)"
    }
  })), /*#__PURE__*/React.createElement(MCard, {
    style: {
      padding: "16px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fg-h3",
    style: {
      fontSize: 15
    }
  }, "Andamento dolore"), /*#__PURE__*/React.createElement("span", {
    className: "fg-meta"
  }, "19\xAA / 26")), /*#__PURE__*/React.createElement(MiniArea, {
    data: [9, 8.2, 7, 7, 6.2, 5.5, 5.5, 5, 6, 4.5, 3.2]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      bottom: 0,
      background: "#fff",
      borderTop: "1px solid var(--border-default)",
      padding: "12px 16px",
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(MButton, {
    variant: "secondary",
    icon: "upload",
    style: {
      flex: 1,
      padding: "12px 0"
    }
  }, "Esporta"), /*#__PURE__*/React.createElement(MButton, {
    variant: "primary",
    onClick: onSegnaPagato,
    style: {
      flex: 2,
      padding: "12px 0"
    }
  }, "Segna pagato"))));
}
function MBlock({
  label,
  text,
  inline
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: inline ? 0 : 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fg-label",
    style: {
      letterSpacing: ".04em"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/20px var(--font-sans)",
      color: "var(--text-primary)",
      marginTop: 5
    }
  }, text));
}
function Seg({
  on
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      flex: 1,
      borderRadius: 999,
      background: on ? "var(--brand-primary)" : "var(--surface-subtle)"
    }
  });
}
Object.assign(window, {
  PatientOverviewM,
  MiniArea,
  MKpi
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/MobilePatientOverview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/Screens.jsx
try { (() => {
// FisioGest Mobile — Pazienti list, Agenda, Incassi
const M_PATIENTS = [{
  name: "Maria Rossi",
  last: "01/10/2026",
  svc: "Rieducazione posturale",
  balance: 120,
  status: "ok"
}, {
  name: "Alessandro Rizzo",
  last: "12/09/2025",
  svc: "Tecarterapia",
  balance: 0,
  status: "ok"
}, {
  name: "Giulia Bianchi",
  last: "28/09/2026",
  svc: "Kinesiterapia",
  balance: 80,
  status: "unpaid"
}, {
  name: "Marco Conti",
  last: "03/10/2026",
  svc: "Valutazione",
  balance: 0,
  status: "unset"
}, {
  name: "Francesca Titus",
  last: "19/09/2026",
  svc: "Tecarterapia",
  balance: 240,
  status: "unpaid"
}, {
  name: "Luca Esposito",
  last: "11/09/2026",
  svc: "Terapia manuale",
  balance: 0,
  status: "absent"
}];
const M_FILTERS = [{
  id: "tutti",
  label: "Tutti",
  tone: "neutral"
}, {
  id: "unpaid",
  label: "Non pagato",
  tone: "brand"
}, {
  id: "unset",
  label: "Non fissato",
  tone: "warning"
}, {
  id: "absent",
  label: "Assente",
  tone: "danger"
}];
function PazientiListM({
  onOpenPatient
}) {
  const [q, setQ] = React.useState("");
  const [f, setF] = React.useState("tutti");
  const rows = M_PATIENTS.filter(p => (f === "tutti" || p.status === f) && p.name.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--background-base)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      padding: "10px 18px 14px",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 24,
    color: "var(--brand-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fg-h2"
  }, "Pazienti"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Avatar, {
    initials: "AM",
    size: 36
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: 42,
      padding: "0 14px",
      background: "var(--surface-subtle)",
      borderRadius: 12,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Cerca paziente\u2026",
    style: {
      border: "none",
      outline: "none",
      background: "transparent",
      flex: 1,
      font: "400 14px var(--font-sans)",
      color: "var(--text-primary)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "12px 18px",
      overflowX: "auto"
    }
  }, M_FILTERS.map(x => {
    const on = f === x.id,
      [bg, fg] = TONES[x.tone];
    return /*#__PURE__*/React.createElement("button", {
      key: x.id,
      onClick: () => setF(x.id),
      style: {
        border: "none",
        cursor: "pointer",
        whiteSpace: "nowrap",
        font: "500 13px var(--font-sans)",
        padding: "7px 14px",
        borderRadius: 999,
        background: on ? "var(--brand-primary)" : bg,
        color: on ? "#fff" : fg
      }
    }, x.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "0 16px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, rows.map((p, i) => /*#__PURE__*/React.createElement(MCard, {
    key: i,
    onClick: () => onOpenPatient(p),
    style: {
      padding: 14,
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: initials(p.name),
    size: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 15px var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px var(--font-sans)",
      color: "var(--text-secondary)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, "Ultimo: ", p.last, " \xB7 ", p.svc)), p.balance > 0 ? /*#__PURE__*/React.createElement(StatusPill, {
    tone: "warning",
    dot: false
  }, "\u20AC", p.balance) : /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--text-secondary)"
  })))));
}

// ---------- Agenda ----------
const M_APPTS = [{
  time: "08:30",
  name: "Sarah Mitchell",
  svc: "Tecarterapia",
  fee: 80,
  status: "success",
  label: "Confermato"
}, {
  time: "09:45",
  name: "Maria Rossi",
  svc: "Rieducazione",
  fee: 60,
  status: "warning",
  label: "In attesa"
}, {
  time: "11:00",
  name: "Luca Esposito",
  svc: "Terapia manuale",
  fee: 70,
  status: "success",
  label: "Confermato"
}, {
  time: "14:30",
  name: "Giulia Bianchi",
  svc: "Kinesiterapia",
  fee: 55,
  status: "danger",
  label: "Assente"
}];
const M_WEEK = [["L", 22], ["M", 23], ["M", 24, true], ["G", 25], ["V", 26], ["S", 27], ["D", 28]];
function AgendaM({
  onEdit
}) {
  const [open, setOpen] = React.useState(-1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--background-base)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      padding: "10px 18px 14px",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "AM",
    size: 36
  }), /*#__PURE__*/React.createElement("span", {
    className: "fg-h2",
    style: {
      flex: 1
    }
  }, "Agenda"), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      border: "none",
      background: "var(--brand-primary)",
      color: "#fff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 14
    }
  }, M_WEEK.map(([d, n, on], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      textAlign: "center",
      padding: "8px 0",
      borderRadius: 10,
      background: on ? "var(--brand-primary)" : "transparent",
      color: on ? "#fff" : "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 11px var(--font-sans)",
      opacity: 0.7
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 16px var(--font-sans)",
      marginTop: 2
    }
  }, n))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fg-h3"
  }, "Mer 24 maggio"), /*#__PURE__*/React.createElement("span", {
    className: "fg-meta"
  }, "4 appuntamenti")), M_APPTS.map((a, i) => /*#__PURE__*/React.createElement(MCard, {
    key: i,
    style: {
      padding: 0,
      overflow: "hidden",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 5,
      background: TONES[a.status][1]
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 15px var(--font-sans)"
    }
  }, a.time), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(StatusPill, {
    tone: a.status
  }, a.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: initials(a.name),
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 14px var(--font-sans)"
    }
  }, a.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, a.svc, " \xB7 \u20AC", a.fee))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: "100%",
      marginTop: 12,
      padding: "9px 12px",
      borderRadius: 10,
      border: "1px solid var(--border-default)",
      background: "var(--surface-subtle)",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      font: "500 13px var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, "Note brevi ", /*#__PURE__*/React.createElement(Icon, {
    name: open === i ? "chevron-up" : "chevron-down",
    size: 15
  })), open === i && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 4px",
      font: "400 13px/19px var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, "Proseguire con esercizi di mobilit\xE0; rivalutare ROM a fine seduta."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(MButton, {
    variant: "secondary",
    onClick: () => onEdit(a),
    style: {
      flex: 1,
      padding: "10px 0",
      fontSize: 14
    }
  }, "Modifica"), /*#__PURE__*/React.createElement(MButton, {
    variant: "primary",
    style: {
      flex: 1,
      padding: "10px 0",
      fontSize: 14
    }
  }, "Scheda")))))));
}

// ---------- Incassi ----------
function IncassiM({
  onSegnaPagato
}) {
  const [rows, setRows] = React.useState(M_PATIENTS.filter(p => p.balance > 0).map(p => ({
    ...p,
    paid: false
  })));
  const due = rows.filter(r => !r.paid).reduce((s, r) => s + r.balance, 0);
  const mark = i => {
    setRows(rs => rs.map((r, j) => j === i ? {
      ...r,
      paid: true
    } : r));
    onSegnaPagato && onSegnaPagato();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--background-base)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      padding: "10px 18px 14px",
      borderBottom: "1px solid var(--border-default)",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "banknote",
    size: 24,
    color: "var(--brand-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fg-h2",
    style: {
      flex: 1
    }
  }, "Incassi"), /*#__PURE__*/React.createElement("button", {
    style: {
      border: "1px solid var(--border-default)",
      background: "#fff",
      borderRadius: 11,
      padding: "8px 12px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 6,
      font: "500 13px var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 16
  }), "Esporta")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(MCard, {
    style: {
      padding: 20,
      background: "var(--brand-primary)",
      border: "none",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 13px var(--font-sans)",
      opacity: 0.85
    }
  }, "Da riscuotere"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 34px var(--font-sans)",
      marginTop: 8
    }
  }, "\u20AC", due.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px var(--font-sans)",
      opacity: 0.85,
      marginTop: 4
    }
  }, rows.filter(r => !r.paid).length, " pazienti con saldo sospeso")), rows.map((r, i) => /*#__PURE__*/React.createElement(MCard, {
    key: i,
    style: {
      padding: 14,
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: initials(r.name),
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 14px var(--font-sans)"
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, r.svc, " \xB7 \u20AC", r.balance)), r.paid ? /*#__PURE__*/React.createElement(StatusPill, {
    tone: "success"
  }, "Pagato") : /*#__PURE__*/React.createElement(MButton, {
    variant: "primary",
    onClick: () => mark(i),
    style: {
      padding: "9px 14px",
      fontSize: 13
    }
  }, "Segna pagato")))));
}
Object.assign(window, {
  PazientiListM,
  AgendaM,
  IncassiM
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/primitives.jsx
try { (() => {
// FisioGest Mobile UI Kit — shared primitives
function Icon({
  name,
  size = 22,
  color,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      color,
      ...style
    }
  });
}
const TONES = {
  success: ["#E0F3EA", "#0B7A4B"],
  warning: ["#FFF4DF", "#B95C00"],
  danger: ["#FFE5E5", "#B42318"],
  brand: ["#E0F3EA", "#377D60"],
  neutral: ["#F0F2F4", "#5B6470"]
};
function StatusPill({
  tone = "success",
  children,
  dot = true
}) {
  const [bg, fg] = TONES[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      font: "600 13px/16px var(--font-sans)",
      color: fg,
      background: bg,
      padding: "5px 11px",
      borderRadius: 999,
      whiteSpace: "nowrap"
    }
  }, dot && /*#__PURE__*/React.createElement("i", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: fg
    }
  }), children);
}
function Avatar({
  initials,
  size = 44,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      flex: "none",
      borderRadius: 999,
      background: "var(--brand-primary)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: `600 ${Math.round(size * 0.36)}px var(--font-sans)`,
      ...style
    }
  }, initials);
}
function MButton({
  variant = "primary",
  icon,
  children,
  onClick,
  full,
  style = {}
}) {
  const base = {
    font: "600 15px/20px var(--font-sans)",
    borderRadius: 12,
    padding: "13px 18px",
    border: "1px solid transparent",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: full ? "100%" : undefined,
    transition: "background .14s"
  };
  const v = {
    primary: {
      background: "var(--brand-primary)",
      color: "#fff"
    },
    secondary: {
      background: "#fff",
      color: "var(--text-primary)",
      borderColor: "var(--border-default)"
    },
    dark: {
      background: "var(--action-dark)",
      color: "#fff"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      ...base,
      ...v[variant],
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  }), children);
}

// segmented control with selectable options (icon shows on selected)
function Segmented({
  options,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "var(--surface-subtle)",
      borderRadius: 999,
      padding: 4,
      gap: 4
    }
  }, options.map(o => {
    const on = o === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      onClick: () => onChange(o),
      style: {
        flex: 1,
        border: "none",
        cursor: "pointer",
        borderRadius: 999,
        padding: "9px 0",
        font: "500 13px/18px var(--font-sans)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        background: on ? "var(--brand-primary-soft)" : "transparent",
        color: on ? "var(--brand-primary-hover)" : "var(--text-secondary)",
        transition: "background .14s"
      }
    }, on && /*#__PURE__*/React.createElement("i", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 999,
        background: "var(--brand-primary)"
      }
    }), o);
  }));
}
function MCard({
  children,
  soft,
  style = {},
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: soft ? "var(--brand-primary-soft)" : "#fff",
      border: soft ? "none" : "1px solid var(--border-default)",
      borderRadius: 16,
      boxShadow: soft ? "none" : "var(--shadow-sm)",
      ...style
    }
  }, children);
}

// Top bar: back link or title + optional trailing
function TopBar({
  title,
  onBack,
  trailing,
  big
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 18px 12px",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      gap: 12,
      borderBottom: big ? "none" : "1px solid var(--border-default)"
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--brand-primary)",
      font: "600 15px var(--font-sans)",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 20
  }), "Indietro") : /*#__PURE__*/React.createElement("span", {
    className: "fg-h2"
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), trailing);
}

// Bottom tab nav
function BottomNav({
  active,
  onNavigate
}) {
  const items = [{
    id: "agenda",
    label: "Agenda",
    icon: "contact"
  }, {
    id: "pazienti",
    label: "Pazienti",
    icon: "users"
  }, {
    id: "incassi",
    label: "Incassi",
    icon: "banknote"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "#fff",
      borderTop: "1px solid var(--border-default)",
      padding: "8px 8px 26px"
    }
  }, items.map(it => {
    const on = active === it.id || active === "patient" && it.id === "pazienti";
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onNavigate(it.id),
      style: {
        flex: 1,
        border: "none",
        background: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        color: on ? "var(--brand-primary)" : "var(--text-secondary)",
        font: "500 12px var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: on ? "var(--brand-primary-soft)" : "transparent",
        borderRadius: 10,
        padding: "5px 18px"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 22
    })), it.label);
  }));
}
function initials(name) {
  return name.split(" ").map(w => w[0]).slice(0, 2).join("");
}
Object.assign(window, {
  Icon,
  StatusPill,
  Avatar,
  MButton,
  Segmented,
  MCard,
  TopBar,
  BottomNav,
  initials,
  TONES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/primitives.jsx", error: String((e && e.message) || e) }); }

})();
