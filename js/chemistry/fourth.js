
const elements = [
["Hydrogen","H"],["Helium","He"],["Lithium","Li"],["Beryllium","Be"],
["Boron","B"],["Carbon","C"],["Nitrogen","N"],["Oxygen","O"],
["Fluorine","F"],["Neon","Ne"],["Sodium","Na"],["Magnesium","Mg"],
["Aluminium","Al"],["Silicon","Si"],["Phosphorus","P"],["Sulfur","S"],
["Chlorine","Cl"],["Argon","Ar"],["Potassium","K"],["Calcium","Ca"],
["Scandium","Sc"],["Titanium","Ti"],["Vanadium","V"],["Chromium","Cr"],
["Manganese","Mn"],["Iron","Fe"],["Cobalt","Co"],["Nickel","Ni"],
["Copper","Cu"],["Zinc","Zn"],["Gallium","Ga"],["Germanium","Ge"],
["Arsenic","As"],["Selenium","Se"],["Bromine","Br"],["Krypton","Kr"],
["Rubidium","Rb"],["Strontium","Sr"],["Yttrium","Y"],["Zirconium","Zr"],
["Niobium","Nb"],["Molybdenum","Mo"],["Technetium","Tc"],["Ruthenium","Ru"],
["Rhodium","Rh"],["Palladium","Pd"],["Silver","Ag"],["Cadmium","Cd"],
["Indium","In"],["Tin","Sn"],["Antimony","Sb"],["Tellurium","Te"],
["Iodine","I"],["Xenon","Xe"],["Caesium","Cs"],["Barium","Ba"],
["Lanthanum","La"],["Cerium","Ce"],["Praseodymium","Pr"],["Neodymium","Nd"],
["Promethium","Pm"],["Samarium","Sm"],["Europium","Eu"],["Gadolinium","Gd"],
["Terbium","Tb"],["Dysprosium","Dy"],["Holmium","Ho"],["Erbium","Er"],
["Thulium","Tm"],["Ytterbium","Yb"],["Lutetium","Lu"],["Hafnium","Hf"],
["Tantalum","Ta"],["Tungsten","W"],["Rhenium","Re"],["Osmium","Os"],
["Iridium","Ir"],["Platinum","Pt"],["Gold","Au"],["Mercury","Hg"],
["Thallium","Tl"],["Lead","Pb"],["Bismuth","Bi"],["Polonium","Po"],
["Astatine","At"],["Radon","Rn"],["Francium","Fr"],["Radium","Ra"],
["Actinium","Ac"],["Thorium","Th"],["Protactinium","Pa"],["Uranium","U"],
["Neptunium","Np"],["Plutonium","Pu"],["Americium","Am"],["Curium","Cm"],
["Berkelium","Bk"],["Californium","Cf"],["Einsteinium","Es"],["Fermium","Fm"],
["Mendelevium","Md"],["Nobelium","No"],["Lawrencium","Lr"],["Rutherfordium","Rf"],
["Dubnium","Db"],["Seaborgium","Sg"],["Bohrium","Bh"],["Hassium","Hs"],
["Meitnerium","Mt"],["Darmstadtium","Ds"],["Roentgenium","Rg"],
["Copernicium","Cn"],["Nihonium","Nh"],["Flerovium","Fl"],
["Moscovium","Mc"],["Livermorium","Lv"],["Tennessine","Ts"],["Oganesson","Og"]
];

const $ = id => document.getElementById(id);
const canvas = $("atomCanvas");
const ctx = canvas.getContext("2d");

let Z = 1, P = 1, N = 0, E = 1;

function getShells(electrons) {
    // Simplified Bohr shell model. The first 20 elements are
    // represented using the familiar school-level shell pattern.
    const shells = [];
    let remaining = electrons;

    for (let i = 0; i < 7 && remaining > 0; i++) {
        const capacity = i === 0 ? 2 : i === 1 ? 8 :
                         i === 2 ? 18 : i === 3 ? 32 :
                         i === 4 ? 32 : i === 5 ? 18 : 8;

        const count = Math.min(remaining, capacity);
        shells.push(count);
        remaining -= count;
    }

    return shells;
}

function populateSelect(filter = "") {
    const select = $("elementSelect");
    const oldValue = String(Z);
    const query = filter.trim().toLowerCase();

    select.innerHTML = "";

    elements.forEach(([name, symbol], index) => {
        const number = index + 1;

        if (
            query &&
            !name.toLowerCase().includes(query) &&
            !symbol.toLowerCase().includes(query) &&
            !String(number).includes(query)
        ) return;

        const option = document.createElement("option");
        option.value = number;
        option.textContent = `${number}. ${name} (${symbol})`;
        select.appendChild(option);
    });

    if ([...select.options].some(option => option.value === oldValue)) {
        select.value = oldValue;
    } else if (select.options.length) {
        select.selectedIndex = 0;
    }
}

function selectElement(number) {
    Z = Math.max(1, Math.min(118, Number(number) || 1));
    P = Z;
    E = Z;
    N = Math.max(0, Math.round(Z === 1 ? 0 : Z - 1));

    $("protons").value = P;
    $("neutrons").value = N;
    $("electrons").value = E;

    $("searchElement").value = "";
    populateSelect();
    $("elementSelect").value = String(Z);

    update();
}

function getElement() {
    return elements[Math.max(0, Math.min(117, P - 1))];
}

function getElementName() {
    return P >= 1 && P <= 118
        ? elements[P - 1][0]
        : "Unknown element";
}

function update() {
    P = Math.max(0, Math.min(118, Math.round(Number($("protons").value) || 0)));
    N = Math.max(0, Math.min(300, Math.round(Number($("neutrons").value) || 0)));
    E = Math.max(0, Math.min(118, Math.round(Number($("electrons").value) || 0)));

    $("protons").value = P;
    $("neutrons").value = N;
    $("electrons").value = E;

    const known = P >= 1 && P <= 118;
    const name = getElementName();
    const symbol = known ? elements[P - 1][1] : "?";
    const shells = getShells(E);
    const charge = P - E;

    $("elementSelect").value = known ? String(P) : "";
    $("atomicNumber").textContent = known ? P : "—";
    $("symbol").textContent = symbol;
    $("elementName").textContent = name;

    $("infoZ").textContent = known ? P : "Unknown";
    $("infoMass").textContent = P + N;
    $("infoP").textContent = P;
    $("infoN").textContent = N;
    $("infoE").textContent = E;

    $("shellInfo").textContent = shells.length
        ? shells.map((count, i) => `Shell ${i + 1}: ${count}`).join(" · ")
        : "No electrons";

    $("valenceInfo").textContent = shells.length
        ? `${shells[shells.length - 1]} electron(s) in the outermost shell`
        : "0 electrons";

    $("chargeInfo").textContent =
        `${charge > 0 ? "+" : ""}${charge} (${charge === 0 ? "neutral" : charge > 0 ? "positive ion" : "negative ion"})`;

    $("chargeLabel").textContent =
        charge === 0 ? "Neutral atom" :
        charge > 0 ? `Positive ion (+${charge})` :
        `Negative ion (${charge})`;

    $("description").textContent =
        `${name} has ${P} proton(s), ${N} neutron(s), and ${E} electron(s). ` +
        `Its mass number is ${P + N}. ` +
        (charge === 0
            ? "It has equal numbers of protons and electrons, so its net charge is zero."
            : `Its net electric charge is ${charge > 0 ? "+" : ""}${charge}.`) +
        (known ? "" : " The proton count is outside the range of the 118 named elements.");

    drawAtom(shells);
}

function drawAtom(shells) {
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const maxRadius = Math.min(w * 0.43, h * 0.43);
    const shellCount = Math.max(1, shells.length);

    ctx.clearRect(0, 0, w, h);

    // Background glow
    const glow = ctx.createRadialGradient(cx, cy, 10, cx, cy, maxRadius * 1.5);
    glow.addColorStop(0, "#163a60");
    glow.addColorStop(1, "#071426");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, w, h);

    // Electron shells
    const radii = [];

    for (let s = 0; s < shellCount; s++) {
        const radius = shellCount === 1
            ? maxRadius * 0.58
            : maxRadius * (0.30 + 0.70 * (s + 1) / shellCount);

        radii.push(radius);

        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = "#65aaff";
        ctx.globalAlpha = 0.30;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
    }

    // Draw a nucleus with a maximum number of visible particles
    const totalParticles = P + N;
    const visibleParticles = Math.min(totalParticles, 180);
    const particleRadius = Math.max(
        3.5,
        Math.min(7, 30 / Math.sqrt(Math.max(1, visibleParticles)))
    );
    const nucleusRadius = Math.min(
        55,
        Math.max(10, Math.sqrt(visibleParticles) * particleRadius * 0.9)
    );

    // Soft nucleus glow
    const nucleusGlow = ctx.createRadialGradient(
        cx, cy, 2, cx, cy, nucleusRadius * 1.8
    );
    nucleusGlow.addColorStop(0, "#ff6388aa");
    nucleusGlow.addColorStop(1, "#ff426800");
    ctx.fillStyle = nucleusGlow;
    ctx.beginPath();
    ctx.arc(cx, cy, nucleusRadius * 1.8, 0, Math.PI * 2);
    ctx.fill();

    // Arrange protons and neutrons in a compact spiral
    for (let i = 0; i < visibleParticles; i++) {
        const angle = i * 2.399963;
        const distance = Math.sqrt((i + 0.5) / Math.max(1, visibleParticles))
                       * nucleusRadius;

        const x = cx + Math.cos(angle) * distance;
        const y = cy + Math.sin(angle) * distance;
        const isProton = i < Math.min(P, visibleParticles);

        ctx.beginPath();
        ctx.arc(x, y, particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = isProton ? "#ff4268" : "#91b9e5";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(
            x - particleRadius * 0.25,
            y - particleRadius * 0.3,
            particleRadius * 0.28,
            0, Math.PI * 2
        );
        ctx.fillStyle = "#ffffff80";
        ctx.fill();
    }

    if (totalParticles > visibleParticles) {
        ctx.fillStyle = "#ffffff";
        ctx.font = "12px system-ui";
        ctx.textAlign = "center";
        ctx.fillText(`+${totalParticles - visibleParticles} more`, cx, cy + nucleusRadius + 18);
    }

    // Draw electrons
    shells.forEach((count, shellIndex) => {
        const radius = radii[shellIndex];

        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i / count)
                        - Math.PI / 2
                        + shellIndex * 0.28;

            const x = cx + Math.cos(angle) * radius;
            const y = cy + Math.sin(angle) * radius;

            // Electron trail/glow
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, Math.PI * 2);
            ctx.fillStyle = "#1688ff30";
            ctx.fill();

            ctx.beginPath();
            ctx.arc(x, y, 5.5, 0, Math.PI * 2);
            ctx.fillStyle = "#1688ff";
            ctx.fill();
            ctx.strokeStyle = "#b8e4ff";
            ctx.lineWidth = 1.3;
            ctx.stroke();
        }
    });

    // Small labels around the atom
    ctx.textAlign = "left";
    ctx.font = "13px system-ui";
    ctx.fillStyle = "#ff8199";
    ctx.fillText(`p⁺ ${P}`, 16, 24);
    ctx.fillStyle = "#b3d3f5";
    ctx.fillText(`n⁰ ${N}`, 16, 43);
    ctx.fillStyle = "#57aaff";
    ctx.fillText(`e⁻ ${E}`, 16, 62);

    if (totalParticles > 180) {
        ctx.textAlign = "center";
        ctx.fillStyle = "#a9c3e3";
        ctx.fillText("Nucleus display simplified", cx, h - 14);
    }
}

// Handle plus/minus buttons
document.querySelectorAll("[data-change]").forEach(button => {
    button.addEventListener("click", () => {
        const field = $(button.dataset.change);
        const delta = Number(button.dataset.delta);
        const max = Number(field.max);
        const min = Number(field.min);

        field.value = Math.max(
            min,
            Math.min(max, (Number(field.value) || 0) + delta)
        );

        update();
    });
});

// Handle direct number input
["protons", "neutrons", "electrons"].forEach(id => {
    $(id).addEventListener("input", update);
    $(id).addEventListener("change", update);
});

// Select from the periodic element list
$("elementSelect").addEventListener("change", event => {
    selectElement(Number(event.target.value));
});

// Search element by name, symbol, or atomic number
$("searchElement").addEventListener("input", event => {
    populateSelect(event.target.value);

    if ($("elementSelect").options.length === 1) {
        $("elementSelect").selectedIndex = 0;
    }
});

// Quick element buttons
document.querySelectorAll("[data-z]").forEach(button => {
    button.addEventListener("click", () => {
        selectElement(Number(button.dataset.z));
    });
});

// Reset to the currently selected element's neutral atom
$("resetBtn").addEventListener("click", () => {
    selectElement(Z);
});

// Initialize
populateSelect();
update();

