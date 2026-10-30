
    const data = {
      water: { name: "Water", formula: "H₂O", mp: 0, bp: 100, desc: "A small molecule with strong hydrogen bonding. At standard pressure, ice melts at 0°C and liquid water boils at 100°C." },
      ethanol: { name: "Ethanol", formula: "C₂H₆O", mp: -114.1, bp: 78.37, desc: "A polar molecule that can form hydrogen bonds. It melts far below water and boils below water at standard pressure." },
      oxygen: { name: "Oxygen", formula: "O₂", mp: -218.79, bp: -182.96, desc: "A small, nonpolar molecule. Weak intermolecular attractions make oxygen a gas at ordinary room temperature." },
      nitrogen: { name: "Nitrogen", formula: "N₂", mp: -210, bp: -195.79, desc: "A small nonpolar molecule with weak attractions; it remains gaseous at ordinary room temperature." },
      carbonDioxide: { name: "Carbon dioxide", formula: "CO₂", mp: -56.6, bp: -78.5, desc: "At 1 atm, carbon dioxide does not melt into a liquid: it sublimates near −78.5°C. Its liquid phase requires pressure above the triple point (~5.18 bar)." },
      methane: { name: "Methane", formula: "CH₄", mp: -182.5, bp: -161.5, desc: "A small nonpolar molecule with weak intermolecular forces. It is a gas at room temperature." },
      ammonia: { name: "Ammonia", formula: "NH₃", mp: -77.73, bp: -33.34, desc: "A polar molecule that can hydrogen-bond. It is gaseous at room temperature at standard pressure." },
      hydrogen: { name: "Hydrogen", formula: "H₂", mp: -259.16, bp: -252.87, desc: "The lightest molecule, with very weak intermolecular attractions. It remains gaseous at ordinary temperatures." },
      chlorine: { name: "Chlorine", formula: "Cl₂", mp: -101.5, bp: -34.04, desc: "A nonpolar diatomic molecule. It is a gas at room temperature, with a boiling point close to −34°C." },
      benzene: { name: "Benzene", formula: "C₆H₆", mp: 5.5, bp: 80.1, desc: "A ring-shaped, nonpolar molecule. It is liquid at room temperature, but hazardous and carcinogenic." },
      acetone: { name: "Acetone", formula: "C₃H₆O", mp: -94.7, bp: 56.05, desc: "A polar solvent with a relatively low boiling point. It is highly flammable." },
      mercury: { name: "Mercury", formula: "Hg", mp: -38.83, bp: 356.73, desc: "An element and metal, not a molecule. It is liquid at room temperature; mercury vapour is toxic." },
      iron: { name: "Iron", formula: "Fe", mp: 1538, bp: 2862, desc: "A metallic element, not a molecule. Its strong metallic bonding gives it a very high melting point." },
      copper: { name: "Copper", formula: "Cu", mp: 1084.62, bp: 2562, desc: "A metallic element, not a molecule. Included to compare molecular substances with metals." },
      sodiumChloride: { name: "Sodium chloride", formula: "NaCl", mp: 801, bp: 1465, desc: "An ionic compound, not a discrete molecule in solid salt. Strong electrostatic attractions produce high phase-change temperatures." },
      sucrose: { name: "Sucrose", formula: "C₁₂H₂₂O₁₁", mp: 186, bp: null, desc: "Sucrose (table sugar) decomposes/caramelizes on heating rather than having a normal, useful boiling point at 1 atm." }
    };
    let current = { ...data.water, key: "water" }, compare = [];
    const $ = id => document.getElementById(id);
    function fmt(v) { return v === null || v === undefined ? "No normal boiling point" : `${v} °C` }
    function applyCurrent(key) {
      if (key === "custom") {
        $("customFields").classList.remove("hidden");
        current = { name: $("customName").value.trim() || "Custom substance", formula: $("customFormula").value.trim() || "—", mp: Number($("customMp").value), bp: Number($("customBp").value), desc: "Custom values supplied by you. They are not automatically predicted from the molecular formula.", key: "custom" };
        if (!Number.isFinite(current.mp) || !Number.isFinite(current.bp) || current.bp < current.mp) { alert("Enter valid temperatures, with boiling point greater than or equal to melting point."); return }
      } else {
        $("customFields").classList.add("hidden"); current = { ...data[key], key };
      }
      render();
    }
    function render() {
      $("currentName").textContent = current.name; $("formulaPill").textContent = current.formula;
      $("description").textContent = current.desc; $("mpValue").textContent = fmt(current.mp); $("bpValue").textContent = fmt(current.bp);
      $("mpKelvin").textContent = `${(current.mp + 273.15).toFixed(2)} K`;
      $("bpKelvin").textContent = current.bp == null ? "—" : `${(current.bp + 273.15).toFixed(2)} K`;
      $("presetInfo").textContent = current.key === "custom" ? "Custom reference values" : `Reference data • ${current.key === "carbonDioxide" || current.key === "sucrose" ? "special phase behaviour" : "approximately 1 atm"}`;
      const t = Number($("tempNumber").value); updateTemp(t);
    }
    function updateTemp(t) {
      if (!Number.isFinite(t)) return;
      $("tempReadout").textContent = `${t} °C`;
      let phase, icon, desc, kind;
      if (current.key === "carbonDioxide" && t > -78.5 && t < -56.6) { phase = "Liquid range requires pressure"; icon = "⚠️"; desc = "At about 1 atm, CO₂ has no liquid phase. Increase pressure for liquid CO₂."; kind = "gas" }
      else if (t < current.mp) { phase = "Solid"; icon = "🧊"; desc = "Particles are held in relatively fixed positions and mainly vibrate."; kind = "solid" }
      else if (current.bp == null) { phase = t >= current.mp ? "Decomposes on heating" : "Solid"; icon = t >= current.mp ? "♨️" : "🧊"; desc = t >= current.mp ? "This substance breaks down before a normal boiling point can be assigned." : "The material is below its listed melting/decomposition temperature."; kind = t >= current.mp ? "liquid" : "solid" }
      else if (t < current.bp) { phase = t === current.mp ? "Melting point" : "Liquid"; icon = t === current.mp ? "🫧" : "💧"; desc = t === current.mp ? "Solid and liquid can coexist at the melting point." : "At this temperature the substance is generally liquid at the stated pressure."; kind = t === current.mp ? "liquid" : "liquid" }
      else { phase = t === current.bp ? "Boiling point" : "Gas"; icon = "☁️"; desc = t === current.bp ? "Liquid and gas can coexist at the boiling point." : "Particles move freely and spread out as a gas."; kind = "gas" }
      $("phaseName").textContent = phase; $("phaseIcon").textContent = icon; $("phaseDesc").textContent = desc;
      const lo = Number($("tempSlider").min), hi = Number($("tempSlider").max);
      $("mpMarker").style.left = (Math.max(0, Math.min(100, (current.mp - lo) / (hi - lo) * 100))) + "%";
      $("bpMarker").style.left = (current.bp == null ? 100 : Math.max(0, Math.min(100, (current.bp - lo) / (hi - lo) * 100))) + "%";
      makeParticles(kind);
    }
    function makeParticles(kind) {
      const stage = $("particles"); stage.innerHTML = "";
      const count = kind === "gas" ? 25 : kind === "liquid" ? 35 : 36;
      for (let i = 0; i < count; i++) {
        const p = document.createElement("i"); p.className = "particle " + kind;
        let x, y;
        if (kind === "solid") { x = 12 + (i % 9) * 9 + Math.random() * 2; y = 17 + Math.floor(i / 9) * 17 + Math.random() * 2 }
        else if (kind === "liquid") { x = 7 + Math.random() * 86; y = 45 + Math.random() * 42 }
        else { x = 4 + Math.random() * 91; y = 5 + Math.random() * 84 }
        p.style.left = x + "%"; p.style.top = y + "%"; p.style.animationDelay = (-Math.random() * 3) + "s"; stage.appendChild(p);
      }
    }
    function addCompare() {
      if (!compare.some(x => x.name === current.name && x.formula === current.formula && x.mp === current.mp && x.bp === current.bp)) compare.push({ ...current });
      renderCompare();
    }
    function renderCompare() {
      const body = $("compareBody"); body.innerHTML = "";
      if (!compare.length) { body.innerHTML = '<tr><td colspan="4" class="small">Add substances to compare them.</td></tr>'; return }
      compare.forEach((x, i) => { const tr = document.createElement("tr");[x.name, x.formula, fmt(x.mp), fmt(x.bp)].forEach(v => { const td = document.createElement("td"); td.textContent = v; tr.appendChild(td) }); const td = document.createElement("td"); const b = document.createElement("button"); b.textContent = "×"; b.className = "secondary"; b.setAttribute("aria-label", "Remove " + x.name); b.onclick = () => { compare.splice(i, 1); renderCompare() }; td.appendChild(b); tr.appendChild(td); body.appendChild(tr) });
    }
    $("apply").onclick = () => applyCurrent($("substance").value);
    $("substance").onchange = () => { if ($("substance").value === "custom") { $("customFields").classList.remove("hidden") } else applyCurrent($("substance").value) };
    $("tempSlider").oninput = () => { $("tempNumber").value = $("tempSlider").value; updateTemp(Number($("tempSlider").value)) };
    $("tempNumber").oninput = () => { const t = Number($("tempNumber").value); if (Number.isFinite(t)) { if (t >= -273.15 && t <= 500) $("tempSlider").value = t; updateTemp(t) } };
    $("addCompare").onclick = addCompare; $("clearCompare").onclick = () => { compare = []; renderCompare() };
    $("reset").onclick = () => { $("substance").value = "water"; $("search").value = ""; $("tempNumber").value = 20; $("tempSlider").value = 20; applyCurrent("water") };
    function searchData(q) {
      const wrap = $("searchResults"); wrap.innerHTML = ""; if (!q.trim()) return;
      const matches = Object.entries(data).filter(([k, v]) => (v.name + " " + v.formula).toLowerCase().includes(q.toLowerCase())).slice(0, 6);
      matches.forEach(([key, v]) => { const b = document.createElement("button"); b.className = "chip"; b.textContent = v.name + " (" + v.formula + ")"; b.onclick = () => { $("substance").value = key; applyCurrent(key); wrap.innerHTML = ""; $("search").value = "" }; wrap.appendChild(b) });
      if (!matches.length) { const s = document.createElement("span"); s.className = "small"; s.textContent = "No match in this small built-in list. Use Custom."; wrap.appendChild(s) }
    }
    $("search").addEventListener("input", e => searchData(e.target.value));
    render();
 