/**
 * VerdantPulse Interactive Engine & Data Store (Consolidated Single JS File)
 * Author & Project Lead: Yogesh Chendel
 * Project: Renewable Energy Portal & Microgrid Simulator
 */

/* ==========================================================
   0. Embedded Knowledge & Telemetry Data Store
   ========================================================== */
const SECTOR_DATA = [
  {
    id: "solar",
    title: "Solar Photovoltaic & CSP",
    category: "solar",
    icon: "☀️",
    tag: "Highest Growth",
    efficiency: "21% - 24% (Mono PERC / TOPCon)",
    co2Offset: "850 g/kWh saved vs Coal",
    lcoe: "₹2.20 - ₹2.80 / kWh ($0.03/kWh)",
    shortDesc: "Harvesting photon energy using silicon semiconductors and concentrated mirrors to generate zero-emission DC current and thermal steam.",
    fullDesc: "Solar photovoltaics (PV) convert electromagnetic solar irradiation directly into electrical energy via the photovoltaic effect inside doped silicon p-n junctions. Concentrated Solar Power (CSP) utilizes parabolic mirrors and heliostats to concentrate sunlight onto thermal towers, heating molten salts (up to 565°C) for steam turbine generation with 12+ hours of dispatchable thermal storage.",
    stats: [
      { label: "Global Installed", value: "1,840+ GW" },
      { label: "Levelized Cost", value: "₹2.40 / kWh" },
      { label: "Lifespan", value: "25 - 30 Years" },
      { label: "Avg Yield", value: "4.5 - 5.5 kWh/kWp/day" }
    ],
    pros: [
      "Zero operational greenhouse emissions during power generation",
      "Modular scalability from 1 kW residential rooftop to 2,000 MW ultra-mega solar parks",
      "No moving mechanical parts in standard PV; virtually zero operational noise",
      "Eligible for high government incentives like PM Surya Ghar Scheme"
    ],
    challenges: [
      "Intermittent diurnal generation requires storage or hybrid balancing",
      "Land footprint required for massive utility-scale installations",
      "Efficiency degradation during high ambient temperatures (>45°C ambient)"
    ],
    keyTech: ["Mono-crystalline PERC", "Bifacial n-Type TOPCon", "Tandem Perovskite-Silicon Cells", "Molten Salt Thermal Storage"]
  },
  {
    id: "wind",
    title: "Onshore & Offshore Wind Power",
    category: "wind",
    icon: "💨",
    tag: "High Yield",
    efficiency: "40% - 50% (Betz Limit = 59.3%)",
    co2Offset: "920 g/kWh saved vs Coal",
    lcoe: "₹2.80 - ₹3.40 / kWh",
    shortDesc: "Converting kinetic wind streams into rotational mechanical torque that drives electromagnetic synchronous generators.",
    fullDesc: "Wind turbines extract kinetic energy from atmospheric air mass movements driven by solar thermal gradients and Coriolis forces. Advanced offshore wind platforms deploy 15 MW+ massive direct-drive permanent magnet generators with rotor diameters exceeding 230 meters, capturing strong, laminar sea breezes with high capacity factors (45-55%).",
    stats: [
      { label: "Global Installed", value: "1,020+ GW" },
      { label: "Capacity Factor", value: "35% - 52%" },
      { label: "Turbine Rating", value: "3 MW to 16 MW" },
      { label: "Blade Diameter", value: "Up to 242 meters" }
    ],
    pros: [
      "Excellent nocturnal generation complementary to daytime solar curves",
      "Minimal ground footprint allows dual-use land for agriculture and grazing",
      "Zero water consumption for electricity generation",
      "High energy return on energy invested (EROI > 20:1)"
    ],
    challenges: [
      "Wind variability requires accurate meteorological forecasting",
      "Visual and acoustic considerations in proximity to residential settlements",
      "Blade composite recycling and transportation logistics for 100m+ blades"
    ],
    keyTech: ["Direct-Drive Permanent Magnet Generators (DD-PMG)", "Floating Offshore Spar Buoys", "Smart Pitch & Yaw Aero-actuators", "Recyclable Epoxy Blades"]
  },
  {
    id: "hydro",
    title: "Hydroelectric & Pumped Storage",
    category: "hydro",
    icon: "💧",
    tag: "Base & Peaking",
    efficiency: "85% - 92% (Water to Wire)",
    co2Offset: "900 g/kWh saved vs Coal",
    lcoe: "₹2.10 - ₹3.10 / kWh",
    shortDesc: "Exploiting gravitational potential energy of falling water to power high-efficiency Francis, Kaplan, or Pelton hydraulic turbines.",
    fullDesc: "Hydropower delivers both continuous baseload and fast-response peaking power. Pumped Storage Hydropower (PSH) acts as the world's largest 'water battery'—pumping water to an elevated reservoir during surplus low-cost clean energy hours, and releasing it through reversible pump-turbines during peak evening demand with round-trip efficiency of 75-82%.",
    stats: [
      { label: "Global Installed", value: "1,410+ GW" },
      { label: "Round-trip PSH Eff.", value: "78% - 82%" },
      { label: "Start-up Speed", value: "< 90 Seconds" },
      { label: "Operating Life", value: "50 - 100+ Years" }
    ],
    pros: [
      "Near-instantaneous ramp-up speed provides critical grid frequency stabilization",
      "Acts as bulk energy storage for surplus wind and solar generation",
      "Ancillary benefits include flood regulation, irrigation reservoirs, and drinking water supply",
      "Extremely long operational asset lifespan with lowest life-cycle cost"
    ],
    challenges: [
      "High upfront civil infrastructure and geotechnical capital expenditure",
      "Ecological and biodiversity impacts on riverine freshwater habitats",
      "Sensitivity to prolonged drought and climate-induced precipitation shifts"
    ],
    keyTech: ["Reversible Francis Pump-Turbines", "Closed-Loop Off-River Pumped Storage", "Run-of-the-River Micro-Hydro", "Fish-Friendly Archimedes Screws"]
  },
  {
    id: "hydrogen",
    title: "Green Hydrogen & Clean Fuel Cells",
    category: "storage",
    icon: "⚡",
    tag: "Future Backbone",
    efficiency: "65% - 75% (Electrolysis)",
    co2Offset: "10-12 kg CO₂/kg H₂ vs Grey H₂",
    lcoe: "$3.50 - $4.80 / kg (targeting $1/kg)",
    shortDesc: "Zero-emission energy vector produced via clean water electrolysis, supplying high-heat industry, steelmaking, and heavy haulage.",
    fullDesc: "Green Hydrogen is produced by splitting ultra-pure demineralized water into hydrogen and oxygen gases using renewable electricity in Proton Exchange Membrane (PEM), Alkaline, or Solid Oxide Electrolyzer Cells (SOEC). It serves as the master key for decarbonizing 'hard-to-abate' sectors like blast furnace steel, maritime cargo, aviation, and synthetic fertilizer synthesis.",
    stats: [
      { label: "Energy Density", value: "120 MJ/kg (33.3 kWh/kg)" },
      { label: "Electrolyzer Tech", value: "PEM, Alkaline, SOEC" },
      { label: "2030 Target Cost", value: "₹100 / kg ($1.20/kg)" },
      { label: "Byproduct", value: "Pure Distilled Water (H₂O)" }
    ],
    pros: [
      "Enables deep decarbonization of steel, cement, heavy trucking, and maritime shipping",
      "Can store terawatt-hours of seasonal clean energy over months in underground salt caverns",
      "Zero local particulate or smog emissions during fuel cell oxidation",
      "Strengthens national energy sovereignty by reducing crude oil imports"
    ],
    challenges: [
      "Volumetric storage challenges requiring 700-bar compression or -253°C cryogenic liquefaction",
      "High capital costs of noble metals (Platinum, Iridium) used in PEM catalysts",
      "Round-trip electricity-to-hydrogen-to-electricity efficiency losses (~40-45% net)"
    ],
    keyTech: ["PEM Electrolyzers", "Proton Exchange Membrane Fuel Cells (PEMFC)", "Liquid Organic Hydrogen Carriers (LOHC)", "Type IV Carbon Composite Tanks"]
  },
  {
    id: "biomass",
    title: "Biomass & Biogas Digestion",
    category: "storage",
    icon: "🌾",
    tag: "Circular Carbon",
    efficiency: "30% - 38% (Gas Turbine Combined)",
    co2Offset: "Net Neutral Closed Carbon Loop",
    lcoe: "₹3.50 - ₹4.50 / kWh",
    shortDesc: "Converting organic agricultural crop residue, dairy manure, and municipal solid waste into clean biomethane (CBG) and electricity.",
    fullDesc: "Biomass energy operates inside the short-cycle biogenic carbon loop: plants absorb atmospheric CO₂ via photosynthesis, which is then captured when organic matter undergoes anaerobic digestion into methane-rich biogas (55-65% CH₄). Upgraded Compressed Bio-Gas (CBG) directly substitutes fossil CNG while producing nutrient-dense organic bio-fertilizer.",
    stats: [
      { label: "Methane Yield", value: "55 - 65% CH₄" },
      { label: "CBG Heating Value", value: "52 MJ/kg" },
      { label: "Agricultural Waste", value: "500+ Million Tons/yr" },
      { label: "Byproduct Value", value: "Fermented Organic Manure" }
    ],
    pros: [
      "Directly eliminates destructive crop stubble burning and respiratory air pollution",
      "Provides dispatchable base power unaffected by cloud cover or calm wind",
      "Generates rural employment and supplementary farmer income streams",
      "Yields chemical-free organic fertilizer for sustainable soil regeneration"
    ],
    challenges: [
      "Logistical complexities in biomass harvesting, baling, and transport within a 25km radius",
      "Moisture variability in seasonal agricultural raw feedstock",
      "Requires rigorous scrubbing of hydrogen sulfide (H₂S) and carbon dioxide"
    ],
    keyTech: ["Continuous Stirred-Tank Digesters (CSTR)", "Membrane Biogas Upgrading", "Gasification-Combined Cycle", "Bio-pelletization Systems"]
  },
  {
    id: "ocean",
    title: "Ocean Wave & Tidal Kinetic Energy",
    category: "hydro",
    icon: "🌊",
    tag: "Predictable Power",
    efficiency: "80% - 85% (Hydrodynamic)",
    co2Offset: "910 g/kWh saved vs Coal",
    lcoe: "₹6.00 - ₹9.00 / kWh (Nascent)",
    shortDesc: "Exploiting gravitational lunar tidal swells and continuous surface wind waves with submerged hydrodynamic rotors.",
    fullDesc: "Tidal and wave energy represent immense, highly predictable clean power resources. Unlike solar and wind, lunar tidal currents can be predicted with astronomical precision decades in advance. Tidal stream generators utilize submerged bi-directional turbine blades that turn with incoming flood and outgoing ebb tides in coastal straits.",
    stats: [
      { label: "Predictability", value: "100% Astronomical" },
      { label: "Seawater Density", value: "832x denser than air" },
      { label: "Global Potential", value: "300+ GW" },
      { label: "Rotor Velocity", value: "Gentle 10-12 RPM (Marine safe)" }
    ],
    pros: [
      "Extreme predictability allows flawless scheduling for grid dispatchers",
      "Water's high density allows compact turbine rotors to generate substantial torque",
      "Completely invisible from shoreline with zero visual aesthetic disruption",
      "Harmless to fish populations due to low-speed blade rotation"
    ],
    challenges: [
      "Hostile marine saline environment induces biofouling and metal corrosion",
      "Demanding offshore subsea installation and diver/ROV maintenance costs",
      "High initial levelized cost of energy in early commercialization phase"
    ],
    keyTech: ["Horizontal-Axis Tidal Turbines", "Oscillating Water Columns (OWC)", "Subsea HVDC Export Cables", "Sacrificial Cathodic Protection"]
  }
];

const HOURLY_SIM_PROFILE = [
  // [Solar MW, Wind MW, Hydro MW, Demand MW]
  [0, 240, 140, 480], // 00:00
  [0, 260, 130, 450], // 01:00
  [0, 280, 120, 430], // 02:00
  [0, 290, 120, 420], // 03:00
  [0, 270, 130, 440], // 04:00
  [0, 250, 150, 480], // 05:00
  [40, 230, 180, 560], // 06:00
  [120, 210, 190, 640], // 07:00
  [240, 190, 170, 710], // 08:00
  [380, 180, 150, 750], // 09:00
  [480, 170, 140, 780], // 10:00
  [560, 160, 130, 800], // 11:00
  [590, 160, 120, 790], // 12:00 (Noon - Peak Solar)
  [580, 170, 120, 810], // 13:00
  [530, 180, 130, 820], // 14:00
  [440, 200, 150, 800], // 15:00
  [310, 220, 180, 780], // 16:00
  [160, 240, 220, 820], // 17:00
  [40, 270, 260, 880], // 18:00 (Evening Peak Demand)
  [0, 300, 270, 920], // 19:00
  [0, 310, 250, 890], // 20:00
  [0, 290, 210, 780], // 21:00
  [0, 270, 180, 660], // 22:00
  [0, 250, 160, 540]  // 23:00
];

/* ==========================================================
   Initialization on DOM Load
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLiveClock();
  initAnimatedCounters();
  initSectorExplorer();
  initSectorModal();
  initGridSimulator();
  initSolarCalculator();
  initCarbonAudit();
  initProjectDossier();
  initFaqAccordion();
  initContactForm();
  initMobileNav();
});

/* ==========================================================
   1. Theme Management (Default Light Theme)
   ========================================================== */
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  // Default to light theme as requested!
  const savedTheme = localStorage.getItem('verdant_theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('verdant_theme', newTheme);
      if (typeof window.drawDiurnalChart === 'function') {
        window.drawDiurnalChart();
      }
    });
  }
}

/* ==========================================================
   2. Live Clock & Hero Telemetry
   ========================================================== */
function initLiveClock() {
  const liveTimeEl = document.getElementById('liveTime');
  function updateTime() {
    const now = new Date();
    if (liveTimeEl) {
      liveTimeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
  }
  updateTime();
  setInterval(updateTime, 1000);
}

/* ==========================================================
   3. Animated Counters on Scroll
   ========================================================== */
function initAnimatedCounters() {
  const counters = document.querySelectorAll('.counter');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const isDecimal = target % 1 !== 0;
          const duration = 1600;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = isDecimal ? target.toFixed(1) : Math.round(target).toLocaleString();
              clearInterval(timer);
            } else {
              counter.textContent = isDecimal ? current.toFixed(1) : Math.round(current).toLocaleString();
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.25 });

  const metricsStrip = document.querySelector('.hero-metrics-strip');
  if (metricsStrip) observer.observe(metricsStrip);
}

/* ==========================================================
   4. Renewable Sectors Explorer & Category Filters
   ========================================================== */
function initSectorExplorer() {
  const sectorsGrid = document.getElementById('sectorsGrid');
  const filterBtns = document.querySelectorAll('#sectorFilterBar .filter-btn');

  function renderSectors(filter = 'all') {
    if (!sectorsGrid) return;
    sectorsGrid.innerHTML = '';

    const filtered = filter === 'all' 
      ? SECTOR_DATA 
      : SECTOR_DATA.filter(item => item.category === filter);

    filtered.forEach(sector => {
      const card = document.createElement('article');
      card.className = 'sector-card';
      card.setAttribute('data-id', sector.id);

      card.innerHTML = `
        <div class="sector-card-top">
          <div class="sector-icon-box">${sector.icon}</div>
          <span class="sector-tag">${sector.tag}</span>
        </div>
        <h3>${sector.title}</h3>
        <p>${sector.shortDesc}</p>
        <div class="sector-meta-grid">
          <div class="sector-meta-item">
            <span>Thermal / Conv. Eff.</span>
            <strong>${sector.efficiency}</strong>
          </div>
          <div class="sector-meta-item">
            <span>CO₂ Mitigation</span>
            <strong>${sector.co2Offset}</strong>
          </div>
        </div>
        <span class="sector-cta-link">
          Explore Technical Specs
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      `;

      card.addEventListener('click', () => openSectorModal(sector.id));
      sectorsGrid.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderSectors(filter);
    });
  });

  renderSectors('all');
}

/* ==========================================================
   5. Sector Details Modal
   ========================================================== */
function initSectorModal() {
  const modal = document.getElementById('sectorModal');
  const closeBtn = document.getElementById('closeSectorModal');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeSectorModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeSectorModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeSectorModal();
    }
  });
}

function openSectorModal(sectorId) {
  const modal = document.getElementById('sectorModal');
  const modalContent = document.getElementById('sectorModalContent');
  const sector = SECTOR_DATA.find(s => s.id === sectorId);
  if (!sector || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-header-block">
      <div class="sector-icon-box" style="font-size: 2.2rem; width: 64px; height: 64px;">${sector.icon}</div>
      <div class="modal-title-wrap">
        <span class="sector-tag">${sector.tag} &bull; ${sector.category.toUpperCase()}</span>
        <h2>${sector.title}</h2>
      </div>
    </div>

    <p class="modal-desc-text">${sector.fullDesc}</p>

    <div class="modal-stats-row">
      ${sector.stats.map(st => `
        <div class="modal-stat-box">
          <span>${st.label}</span>
          <strong>${st.value}</strong>
        </div>
      `).join('')}
    </div>

    <div class="modal-split-grid">
      <div class="modal-list-box advantages-box">
        <h4>✨ Engineering Advantages</h4>
        <ul>
          ${sector.pros.map(pro => `<li>${pro}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-list-box challenges-box">
        <h4>⚠️ Technical Bottlenecks &amp; Solutions</h4>
        <ul>
          ${sector.challenges.map(ch => `<li>${ch}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="modal-tech-stack">
      <h4>Cutting-Edge Research &amp; Industry Modules:</h4>
      <div class="modal-tech-pills">
        ${sector.keyTech.map(tech => `<span class="tech-chip">${tech}</span>`).join('')}
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeSectorModal() {
  const modal = document.getElementById('sectorModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

/* ==========================================================
   6. Diurnal Grid Simulator Engine & Canvas Visualizer
   ========================================================== */
function initGridSimulator() {
  const timeSlider = document.getElementById('timeSlider');
  const timeDisplay = document.getElementById('timeDisplay');
  const windSlider = document.getElementById('windSlider');
  const windDisplay = document.getElementById('windDisplay');
  const loadSlider = document.getElementById('loadSlider');
  const loadDisplay = document.getElementById('loadDisplay');
  const weatherBtns = document.querySelectorAll('.preset-pill');
  const playBtn = document.getElementById('togglePlaySim');
  const resetBtn = document.getElementById('resetSimBtn');
  const canvas = document.getElementById('diurnalChart');

  let activeHour = 12;
  let activeWeather = 'clear';
  let weatherMultiplier = 1.0;
  let isPlaying = false;
  let simInterval = null;

  function updateSimulation() {
    if (!timeSlider) return;
    activeHour = parseInt(timeSlider.value, 10);
    const windSpeed = parseFloat(windSlider.value);
    const demandFactor = parseInt(loadSlider.value, 10) / 100;

    const hour12 = activeHour % 12 === 0 ? 12 : activeHour % 12;
    const ampm = activeHour >= 12 ? 'PM' : 'AM';
    const periodName = activeHour === 12 ? 'Noon' : activeHour === 0 ? 'Midnight' : (activeHour >= 6 && activeHour <= 10) ? 'Morning' : (activeHour >= 18 && activeHour <= 21) ? 'Evening Peak' : 'Night';
    timeDisplay.textContent = `${hour12.toString().padStart(2, '0')}:00 ${ampm} (${periodName})`;

    windDisplay.textContent = `${windSpeed.toFixed(1)} m/s (${getWindBeaufort(windSpeed)})`;
    loadDisplay.textContent = `${(demandFactor * 100).toFixed(0)}% (${demandFactor > 1.2 ? 'Peak Stress' : demandFactor < 0.8 ? 'Off-Peak' : 'Baseline'})`;

    const [baseSolar, baseWind, baseHydro, baseDemand] = HOURLY_SIM_PROFILE[activeHour];

    const solarGen = Math.round(baseSolar * weatherMultiplier);
    const windRatio = Math.max(0.1, Math.min(2.5, windSpeed / 9.0));
    const windGen = Math.round(baseWind * Math.pow(windRatio, 1.8));
    const demandTotal = Math.round(baseDemand * demandFactor);

    const reTotal = solarGen + windGen + baseHydro;
    const balance = reTotal - demandTotal;

    let batteryFlow = 0;
    let batteryState = 'Balanced';
    let hydroGen = baseHydro;

    if (balance > 0) {
      batteryFlow = Math.min(200, balance);
      batteryState = `+${batteryFlow} MW (Absorbing Surplus)`;
    } else {
      const deficit = Math.abs(balance);
      const batteryDischarge = Math.min(180, Math.round(deficit * 0.65));
      hydroGen = Math.min(320, baseHydro + Math.round(deficit * 0.35));
      batteryFlow = -batteryDischarge;
      batteryState = `${batteryFlow} MW (Discharging)`;
    }

    updateTelemetryUI(solarGen, windGen, hydroGen, batteryFlow, batteryState, demandTotal);
    updateInsightMessage(activeHour, solarGen, windGen, balance, batteryFlow);
    drawDiurnalChart(activeHour);
  }

  function getWindBeaufort(speed) {
    if (speed < 4) return 'Light Air';
    if (speed < 8) return 'Moderate Breeze';
    if (speed < 14) return 'Strong Wind';
    if (speed < 20) return 'High Gale';
    return 'Storm Gale';
  }

  function updateTelemetryUI(solar, wind, hydro, battFlow, battText, demand) {
    const valSolar = document.getElementById('valSolarGen');
    const valWind = document.getElementById('valWindGen');
    const valHydro = document.getElementById('valHydroGen');
    const valBatt = document.getElementById('valBatteryGen');
    const valDemand = document.getElementById('valDemandTotal');

    const barSolar = document.getElementById('barSolarGen');
    const barWind = document.getElementById('barWindGen');
    const barHydro = document.getElementById('barHydroGen');
    const barBatt = document.getElementById('barBatteryGen');
    const barDemand = document.getElementById('barDemandTotal');

    const maxScale = 950;

    if (valSolar) valSolar.textContent = `${solar} MW`;
    if (valWind) valWind.textContent = `${wind} MW`;
    if (valHydro) valHydro.textContent = `${hydro} MW`;
    if (valBatt) {
      valBatt.textContent = battText;
      valBatt.style.color = battFlow >= 0 ? 'var(--color-success)' : 'var(--color-warning)';
    }
    if (valDemand) valDemand.textContent = `${demand} MW`;

    if (barSolar) barSolar.style.width = `${Math.min(100, (solar / maxScale) * 100)}%`;
    if (barWind) barWind.style.width = `${Math.min(100, (wind / maxScale) * 100)}%`;
    if (barHydro) barHydro.style.width = `${Math.min(100, (hydro / maxScale) * 100)}%`;
    if (barBatt) barBatt.style.width = `${Math.min(100, (Math.abs(battFlow) / 200) * 100)}%`;
    if (barDemand) barDemand.style.width = `${Math.min(100, (demand / maxScale) * 100)}%`;

    const heroSolar = document.getElementById('heroSolarVal');
    const heroWind = document.getElementById('heroWindVal');
    const heroTotalGen = document.getElementById('heroTotalGen');
    const heroCarbonOff = document.getElementById('heroCarbonOff');

    if (heroSolar) heroSolar.textContent = `${Math.min(99, Math.round((solar / 600) * 100))}%`;
    if (heroWind) heroWind.textContent = `${Math.min(99, Math.round((wind / 350) * 100))}%`;
    const totalGenMW = solar + wind + hydro;
    if (heroTotalGen) heroTotalGen.textContent = `${totalGenMW.toLocaleString()} MW`;
    if (heroCarbonOff) heroCarbonOff.textContent = `${Math.round(totalGenMW * 0.82).toLocaleString()} Tons/hr`;
  }

  function updateInsightMessage(hour, solar, wind, balance, batteryFlow) {
    const insightBox = document.getElementById('simInsightText');
    if (!insightBox) return;

    if (hour >= 11 && hour <= 14) {
      insightBox.textContent = `Midday Solar Surplus: Photovoltaic panels generate maximum peak flux (${solar} MW). Smart battery storage (BESS) and green hydrogen electrolyzers absorb surplus power.`;
    } else if (hour >= 18 && hour <= 21) {
      insightBox.textContent = `Evening Peak Demand: Sunset causes solar decline while residential demand climbs. Fast-responding Hydro turbines and BESS batteries step in to guarantee zero blackouts.`;
    } else if (hour >= 1 && hour <= 5) {
      insightBox.textContent = `Nocturnal Baseline: Sustained wind generation (${wind} MW) powers early morning industrial base loads and charges municipal electric transit fleets.`;
    } else {
      insightBox.textContent = `Normal Grid Operation: Clean generation and city demand are synchronized within frequency tolerance (50.00 ± 0.05 Hz).`;
    }
  }

  weatherBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      weatherBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeWeather = btn.getAttribute('data-weather');

      if (activeWeather === 'clear') weatherMultiplier = 1.0;
      else if (activeWeather === 'cloudy') weatherMultiplier = 0.55;
      else if (activeWeather === 'stormy') weatherMultiplier = 0.2;

      updateSimulation();
    });
  });

  if (timeSlider) timeSlider.addEventListener('input', updateSimulation);
  if (windSlider) windSlider.addEventListener('input', updateSimulation);
  if (loadSlider) loadSlider.addEventListener('input', updateSimulation);

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (isPlaying) {
        clearInterval(simInterval);
        isPlaying = false;
        playBtn.querySelector('#playSimIcon').textContent = '▶';
        playBtn.querySelector('#playSimText').textContent = 'Auto-Play 24H Cycle';
      } else {
        isPlaying = true;
        playBtn.querySelector('#playSimIcon').textContent = '⏸';
        playBtn.querySelector('#playSimText').textContent = 'Pause 24H Cycle';
        simInterval = setInterval(() => {
          let nextHour = (parseInt(timeSlider.value, 10) + 1) % 24;
          timeSlider.value = nextHour;
          updateSimulation();
        }, 850);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (isPlaying) playBtn.click();
      timeSlider.value = 12;
      windSlider.value = 9;
      loadSlider.value = 100;
      weatherBtns[0].click();
      updateSimulation();
    });
  }

  function drawDiurnalChart(currentHour = 12) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const isDark = document.body.getAttribute('data-theme') === 'dark';

    ctx.clearRect(0, 0, width, height);

    const padding = { top: 20, right: 25, bottom: 35, left: 45 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;
    const maxMW = 1000;

    // Gridlines with crisp styling
    ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)';
    ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';
    ctx.font = '500 11px system-ui, sans-serif';
    ctx.textAlign = 'right';

    for (let mw = 0; mw <= maxMW; mw += 250) {
      const y = padding.top + chartH - (mw / maxMW) * chartH;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();
      ctx.fillText(`${mw}M`, padding.left - 6, y + 4);
    }

    ctx.textAlign = 'center';
    const hoursToLabel = [0, 4, 8, 12, 16, 20, 23];
    hoursToLabel.forEach(h => {
      const x = padding.left + (h / 23) * chartW;
      const label = `${h}:00`;
      ctx.fillText(label, x, height - 12);
    });

    function plotCurve(dataIndex, color, lineWidth = 2.5, isArea = false, areaColor = '') {
      ctx.beginPath();
      for (let h = 0; h < 24; h++) {
        const x = padding.left + (h / 23) * chartW;
        let val = HOURLY_SIM_PROFILE[h][dataIndex];
        if (dataIndex === 0) val *= weatherMultiplier;
        const y = padding.top + chartH - (val / maxMW) * chartH;
        if (h === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      if (isArea) {
        ctx.lineTo(padding.left + chartW, padding.top + chartH);
        ctx.lineTo(padding.left, padding.top + chartH);
        ctx.closePath();
        ctx.fillStyle = areaColor;
        ctx.fill();
      } else {
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      }
    }

    // Solar (Honey Amber)
    plotCurve(0, '#f59e0b', 2, true, isDark ? 'rgba(245, 158, 11, 0.16)' : 'rgba(245, 158, 11, 0.22)');
    plotCurve(0, '#d97706', 2.8);

    // Wind (Sky Cyan)
    plotCurve(1, '#0284c7', 2.4);

    // Demand (Rose Coral)
    plotCurve(3, '#e11d48', 2.4);

    // Cursor for Active Hour
    const cursorX = padding.left + (currentHour / 23) * chartW;
    ctx.beginPath();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = isDark ? '#f8fafc' : '#0f172a';
    ctx.lineWidth = 1.6;
    ctx.moveTo(cursorX, padding.top);
    ctx.lineTo(cursorX, padding.top + chartH);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.beginPath();
    ctx.arc(cursorX, padding.top, 5.5, 0, Math.PI * 2);
    ctx.fillStyle = '#059669';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  window.drawDiurnalChart = () => drawDiurnalChart(parseInt(timeSlider.value, 10));
  updateSimulation();
}

/* ==========================================================
   7. Solar Rooftop Savings & Yield Calculator
   ========================================================== */
function initSolarCalculator() {
  const billInput = document.getElementById('monthlyBill');
  const areaInput = document.getElementById('rooftopArea');
  const zoneSelect = document.getElementById('solarZone');
  const panelSelect = document.getElementById('panelType');
  const subsidyCheck = document.getElementById('includeSubsidy');
  const batteryCheck = document.getElementById('includeBattery');
  const recalcBtn = document.getElementById('recalcBtn');
  const printBtn = document.getElementById('printAuditReportBtn');

  function calculateSolarYield() {
    if (!billInput) return;
    const monthlyBill = parseFloat(billInput.value) || 3500;
    const roofArea = parseFloat(areaInput.value) || 450;
    const peakSunHours = parseFloat(zoneSelect.value) || 5.0;
    const techMultiplier = parseFloat(panelSelect.value) || 1.0;
    const hasSubsidy = subsidyCheck.checked;
    const hasBattery = batteryCheck.checked;

    const tariffPerUnit = 8.0;
    const monthlyUnitsRequired = monthlyBill / tariffPerUnit;
    const dailyUnitsRequired = monthlyUnitsRequired / 30;

    const dailyYieldPerKw = peakSunHours * 0.78 * techMultiplier;
    let recommendedKw = dailyUnitsRequired / dailyYieldPerKw;

    const maxKwByArea = roofArea / 90;
    recommendedKw = Math.min(recommendedKw, maxKwByArea);
    recommendedKw = Math.max(1.0, Math.round(recommendedKw * 2) / 2);

    const annualGen = Math.round(recommendedKw * dailyYieldPerKw * 365);
    const annualSavings = Math.round(annualGen * tariffPerUnit);

    let baseCost = recommendedKw * 58000;
    if (techMultiplier > 1.0) baseCost *= 1.12;

    if (hasBattery) {
      baseCost += 115000;
    }

    let subsidyAmount = 0;
    if (hasSubsidy) {
      if (recommendedKw >= 3.0) subsidyAmount = 78000;
      else if (recommendedKw >= 2.0) subsidyAmount = 60000;
      else if (recommendedKw >= 1.0) subsidyAmount = 30000;
    }

    const netCost = Math.max(25000, Math.round(baseCost - subsidyAmount));
    const paybackYears = (netCost / annualSavings).toFixed(1);

    const co2Tons25Yr = ((annualGen * 25 * 0.82) / 1000).toFixed(1);
    const treesEquivalent = Math.round(co2Tons25Yr * 1.9);
    const carKmAvoided = Math.round(co2Tons25Yr * 1000);

    document.getElementById('resSysSize').textContent = `${recommendedKw.toFixed(1)} kWp System`;
    document.getElementById('resAnnualGen').textContent = `${annualGen.toLocaleString()} kWh`;
    document.getElementById('resAnnualSavings').textContent = `₹${annualSavings.toLocaleString()}`;
    document.getElementById('resNetCost').textContent = `₹${netCost.toLocaleString()}`;
    document.getElementById('resSubsidyDeduction').textContent = hasSubsidy 
      ? `After ₹${subsidyAmount.toLocaleString()} Govt Subsidy` 
      : 'Zero Subsidy Applied';
    document.getElementById('resPayback').textContent = `${paybackYears} Years`;
    document.getElementById('resTreesCount').textContent = treesEquivalent.toLocaleString();
    document.getElementById('resCarMiles').textContent = carKmAvoided.toLocaleString();
    document.getElementById('resCo2Offset').textContent = `${co2Tons25Yr} Tons`;
  }

  if (recalcBtn) recalcBtn.addEventListener('click', calculateSolarYield);
  [billInput, areaInput, zoneSelect, panelSelect, subsidyCheck, batteryCheck].forEach(elem => {
    if (elem) elem.addEventListener('change', calculateSolarYield);
  });

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  calculateSolarYield();
}

/* ==========================================================
   8. Carbon Footprint Audit Wizard
   ========================================================== */
function initCarbonAudit() {
  const stepDots = document.querySelectorAll('#wizardStepper .step-dot');
  const steps = document.querySelectorAll('.wizard-step');
  const nextBtns = document.querySelectorAll('.next-step-btn');
  const prevBtns = document.querySelectorAll('.prev-step-btn');
  const calcBtn = document.getElementById('calculateAuditBtn');
  const retakeBtn = document.getElementById('retakeAuditBtn');

  function showStep(stepNumber) {
    steps.forEach(s => s.classList.remove('active'));
    stepDots.forEach(d => {
      const dStep = parseInt(d.getAttribute('data-step'), 10);
      d.classList.toggle('active', dStep === stepNumber);
    });

    const targetStep = document.getElementById(`wizardStep${stepNumber}`);
    if (targetStep) targetStep.classList.add('active');
  }

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nextNum = parseInt(btn.getAttribute('data-next'), 10);
      showStep(nextNum);
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const prevNum = parseInt(btn.getAttribute('data-prev'), 10);
      showStep(prevNum);
    });
  });

  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      calculateCarbonScore();
      steps.forEach(s => s.classList.remove('active'));
      const resultStep = document.getElementById('wizardStepResult');
      if (resultStep) resultStep.classList.add('active');
    });
  }

  if (retakeBtn) {
    retakeBtn.addEventListener('click', () => {
      showStep(1);
    });
  }

  function calculateCarbonScore() {
    const energySrc = document.querySelector('input[name="energy_src"]:checked')?.value || 'coal';
    const mobilitySrc = document.querySelector('input[name="mobility_src"]:checked')?.value || 'petrol';
    const hvacSrc = document.querySelector('input[name="hvac_src"]:checked')?.value || 'standard';
    const lifestyleSrc = document.querySelector('input[name="lifestyle_src"]:checked')?.value || 'high';

    let emissions = 1.0;

    if (energySrc === 'coal') emissions += 2.4;
    else if (energySrc === 'hybrid') emissions += 1.2;
    else if (energySrc === 'solar100') emissions += 0.2;

    if (mobilitySrc === 'petrol') emissions += 2.2;
    else if (mobilitySrc === 'transit') emissions += 0.8;
    else if (mobilitySrc === 'ev') emissions += 0.3;

    if (hvacSrc === 'standard') emissions += 1.5;
    else if (hvacSrc === 'inverter') emissions += 0.7;
    else if (hvacSrc === 'heatpump') emissions += 0.3;

    if (lifestyleSrc === 'high') emissions += 1.4;
    else if (lifestyleSrc === 'balanced') emissions += 0.7;
    else if (lifestyleSrc === 'plant') emissions += 0.3;

    const rounded = emissions.toFixed(1);
    const co2El = document.getElementById('auditCo2Tons');
    const titleEl = document.getElementById('auditTitle');
    const benchEl = document.getElementById('auditBenchmark');
    const iconEl = document.getElementById('auditGradeIcon');
    const recList = document.getElementById('auditRecList');

    if (co2El) co2El.textContent = rounded;

    if (emissions <= 2.5) {
      if (titleEl) titleEl.textContent = '🌟 Clean Energy Champion';
      if (iconEl) iconEl.textContent = '🌱';
      if (benchEl) benchEl.textContent = `Ultra low footprint! ${((5.5 - emissions) / 5.5 * 100).toFixed(0)}% lower than average households.`;
      if (recList) {
        recList.innerHTML = `
          <li>Deploy community microgrid sharing or peer-to-peer (P2P) solar energy trading.</li>
          <li>Advocate clean energy transition across college campuses and residential associations.</li>
          <li>Incorporate smart home load shedding to maximize battery life cycles.</li>
        `;
      }
    } else if (emissions <= 5.0) {
      if (titleEl) titleEl.textContent = '🌿 Green Transition Advocate';
      if (iconEl) iconEl.textContent = '🌤️';
      if (benchEl) benchEl.textContent = `Moderate footprint! ${((5.5 - emissions) / 5.5 * 100).toFixed(0)}% lower than standard national benchmark.`;
      if (recList) {
        recList.innerHTML = `
          <li>Install a 3 kWp rooftop solar array to eliminate the remaining thermal grid reliance.</li>
          <li>Switch remaining combustion vehicle commute to public transit or electric scooter.</li>
          <li>Upgrade household water heating to a flat-plate solar thermal collector.</li>
        `;
      }
    } else {
      if (titleEl) titleEl.textContent = '⚠️ High Carbon Footprint';
      if (iconEl) iconEl.textContent = '🏭';
      if (benchEl) benchEl.textContent = `Currently exceeding sustainable thresholds (5.5 Tons/yr). Great opportunity for high-impact clean savings!`;
      if (recList) {
        recList.innerHTML = `
          <li>Prioritize rooftop solar adoption under the PM Surya Ghar Subsidy scheme for instant 80% bill reduction.</li>
          <li>Replace conventional resistive geysers and outdated non-inverter air conditioners.</li>
          <li>Transition daily single-occupant car commutes to metro or electric two-wheelers.</li>
        `;
      }
    }
  }
}

/* ==========================================================
   9. College Project Dossier Expandable Abstract
   ========================================================== */
function initProjectDossier() {
  const toggleBtn = document.getElementById('toggleSynopsisBtn');
  const content = document.getElementById('synopsisContent');
  const arrow = document.getElementById('synopsisArrow');

  if (toggleBtn && content) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = content.classList.contains('open');
      content.classList.toggle('open', !isOpen);
      if (arrow) {
        arrow.innerHTML = isOpen ? '&darr;' : '&uarr;';
      }
    });
  }
}

/* ==========================================================
   10. FAQ Accordions
   ========================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.accordion-item');
  items.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        items.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}

/* ==========================================================
   11. Contact & Review Form
   ========================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('formToast');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('userName')?.value || 'Guest';
      const role = document.getElementById('userRole')?.value || 'faculty';
      const comments = document.getElementById('userMsg')?.value || '';

      const submissions = JSON.parse(localStorage.getItem('verdant_reviews') || '[]');
      submissions.push({ name, role, comments, timestamp: new Date().toISOString() });
      localStorage.setItem('verdant_reviews', JSON.stringify(submissions));

      if (toast) {
        toast.textContent = `✅ Thank you, ${name}! Your feedback has been recorded in Yogesh Chendel's internship project register.`;
        toast.style.display = 'block';
        setTimeout(() => {
          toast.style.display = 'none';
        }, 5000);
      }

      form.reset();
    });
  }
}

/* ==========================================================
   12. Mobile Navigation Toggle
   ========================================================== */
function initMobileNav() {
  const hamburger = document.getElementById('hamburgerBtn');
  const nav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
  }
}

