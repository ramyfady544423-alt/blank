
        const liquids = [
            { id: "water", name: "Water", group: "Drinks", emoji: "💧", color: "#18baff", visc: 1, desc: "Very thin" },
            { id: "saltwater", name: "Salt water", group: "Drinks", emoji: "🌊", color: "#4c9fff", visc: 1.1, desc: "Very thin" },
            { id: "milk", name: "Milk", group: "Dairy", emoji: "🥛", color: "#e9f4ff", visc: 2, desc: "Thin" },
            { id: "skim-milk", name: "Skim milk", group: "Dairy", emoji: "🥛", color: "#cce7ff", visc: 1.5, desc: "Thin" },
            { id: "cream", name: "Cream", group: "Dairy", emoji: "🍶", color: "#ffe2a3", visc: 15, desc: "Creamy" },
            { id: "orange-juice", name: "Orange juice", group: "Juices", emoji: "🍊", color: "#ff9e25", visc: 3, desc: "Thin; pulp varies" },
            { id: "apple-juice", name: "Apple juice", group: "Juices", emoji: "🍏", color: "#e5c642", visc: 2, desc: "Thin" },
            { id: "mango-juice", name: "Mango juice", group: "Juices", emoji: "🥭", color: "#ffb52e", visc: 20, desc: "Often thicker" },
            { id: "lemonade", name: "Lemonade", group: "Juices", emoji: "🍋", color: "#f3e85a", visc: 1.5, desc: "Thin" },
            { id: "grape-juice", name: "Grape juice", group: "Juices", emoji: "🍇", color: "#9d5cff", visc: 3, desc: "Thin" },
            { id: "tomato-juice", name: "Tomato juice", group: "Juices", emoji: "🍅", color: "#ff553f", visc: 8, desc: "Some pulp" },
            { id: "smoothie", name: "Fruit smoothie", group: "Juices", emoji: "🍓", color: "#ff6599", visc: 80, desc: "Thick; ingredients vary" },
            { id: "soda", name: "Soft drink / soda", group: "Drinks", emoji: "🥤", color: "#a879ff", visc: 1.5, desc: "Thin" },
            { id: "sparkling-water", name: "Sparkling water", group: "Drinks", emoji: "🫧", color: "#5ad8ff", visc: 1, desc: "Very thin" },
            { id: "tea", name: "Tea", group: "Drinks", emoji: "🍵", color: "#bb8a44", visc: 1.2, desc: "Very thin" },
            { id: "coffee", name: "Black coffee", group: "Drinks", emoji: "☕", color: "#9c6845", visc: 1.5, desc: "Thin" },
            { id: "sugar-syrup", name: "Sugar syrup", group: "Sweet liquids", emoji: "🍯", color: "#ffbd39", visc: 100, desc: "Thicker than water" },
            { id: "maple-syrup", name: "Maple syrup", group: "Sweet liquids", emoji: "🥞", color: "#c77a25", visc: 150, desc: "Thick" },
            { id: "honey", name: "Honey", group: "Sweet liquids", emoji: "🍯", color: "#ffad16", visc: 5000, desc: "Very thick" },
            { id: "molasses", name: "Molasses", group: "Sweet liquids", emoji: "🟤", color: "#75442e", visc: 8000, desc: "Very thick" },
            { id: "vegetable-oil", name: "Vegetable oil", group: "Oils", emoji: "🟠", color: "#ffb52e", visc: 60, desc: "Slippery; flows steadily" },
            { id: "olive-oil", name: "Olive oil", group: "Oils", emoji: "🫒", color: "#a6a72c", visc: 80, desc: "Medium-thin" },
            { id: "motor-oil", name: "Motor oil", group: "Oils", emoji: "⚙️", color: "#b87942", visc: 250, desc: "Grade and temperature vary" },
            { id: "glycerin", name: "Glycerin", group: "Other", emoji: "🧴", color: "#b9d8ed", visc: 900, desc: "Thick and clear" },
            { id: "dish-soap", name: "Dishwashing liquid", group: "Soaps & cleaning", emoji: "🧼", color: "#32d8bb", visc: 800, desc: "Brand-dependent" },
            { id: "hand-soap", name: "Liquid hand soap", group: "Soaps & cleaning", emoji: "🫧", color: "#ff77c8", visc: 1200, desc: "Often thick" },
            { id: "laundry-detergent", name: "Laundry detergent", group: "Soaps & cleaning", emoji: "🧺", color: "#55aaff", visc: 700, desc: "Formula-dependent" },
            { id: "bleach", name: "Household bleach", group: "Soaps & cleaning", emoji: "🧴", color: "#dceaff", visc: 2, desc: "Usually thin" },
            { id: "glass-cleaner", name: "Glass cleaner", group: "Soaps & cleaning", emoji: "🪟", color: "#63c9ff", visc: 1.5, desc: "Very thin" },
            { id: "shampoo", name: "Shampoo", group: "Personal care", emoji: "🧴", color: "#c77dff", visc: 1500, desc: "Brand-dependent" },
            { id: "conditioner", name: "Hair conditioner", group: "Personal care", emoji: "🧴", color: "#f29fc6", visc: 5000, desc: "Often very thick" },
            { id: "body-wash", name: "Body wash", group: "Personal care", emoji: "🫧", color: "#5be0d4", visc: 900, desc: "Formula-dependent" },
            { id: "lotion", name: "Body lotion", group: "Personal care", emoji: "🧴", color: "#f5d9b2", visc: 10000, desc: "Very thick; not always pourable" },
            { id: "ketchup", name: "Ketchup", group: "Sauces & food", emoji: "🍅", color: "#f0473e", visc: 5000, desc: "Non-Newtonian" },
            { id: "mustard", name: "Mustard", group: "Sauces & food", emoji: "🌭", color: "#e6c332", visc: 3000, desc: "Thick sauce" },
            { id: "mayonnaise", name: "Mayonnaise", group: "Sauces & food", emoji: "🥚", color: "#f7e5bb", visc: 10000, desc: "Very thick" },
            { id: "barbecue-sauce", name: "Barbecue sauce", group: "Sauces & food", emoji: "🍖", color: "#a95335", visc: 3000, desc: "Thickness varies" },
            { id: "soy-sauce", name: "Soy sauce", group: "Sauces & food", emoji: "🥢", color: "#80523b", visc: 3, desc: "Thin" },
            { id: "yogurt-drink", name: "Drinkable yogurt", group: "Dairy", emoji: "🥛", color: "#fff0db", visc: 15, desc: "Thicker than milk" },
            { id: "egg-white", name: "Egg white", group: "Other", emoji: "🥚", color: "#d5e9ff", visc: 6, desc: "Stretchy proteins" },
            { id: "liquid-glue", name: "White school glue", group: "Other", emoji: "🧪", color: "#e8f4ff", visc: 5000, desc: "Thick polymer mixture" },
            { id: "acrylic-paint", name: "Acrylic paint", group: "Other", emoji: "🎨", color: "#ff6f91", visc: 3000, desc: "Varies by paint" },
            { id: "shower-gel", name: "Shower gel", group: "Personal care", emoji: "🧴", color: "#53c9ff", visc: 1100, desc: "Brand-dependent" }
        ];
        const $ = id => document.getElementById(id); let selected = new Set(["water", "orange-juice", "dish-soap", "honey", "shampoo"]), running = true;
        const common = ["water", "milk", "orange-juice", "mango-juice", "vegetable-oil", "honey", "dish-soap", "shampoo", "ketchup", "motor-oil"];
        function tempFactor(l) { let t = +$("temp").value; let strength = (["honey", "molasses", "shampoo", "conditioner", "lotion", "ketchup", "mayonnaise", "liquid-glue"].includes(l.id)) ? .035 : .022; return Math.exp(-strength * (t - 20)) }
        function viscosity(l) { return l.visc * tempFactor(l) }
        function push() { return +$("pressure").value }
        function pipeFactor() { return $("pipeWidth").value === "narrow" ? .35 : $("pipeWidth").value === "wide" ? 1.7 : 1 }
        function speed(l) { return Math.max(.05, Math.min(2.2, Math.pow(1 / viscosity(l), .25) * push() / 3 * pipeFactor())) }
        function fmt(v) { return v < 10 ? v.toFixed(1) + " mPa·s" : Math.round(v).toLocaleString() + " mPa·s" }
        function renderPicker() { let q = $("search").value.toLowerCase(); $("liquidPicker").innerHTML = liquids.filter(l => (l.name + " " + l.group + " " + l.id).toLowerCase().includes(q)).map(l => `<label class="liquid-option"><input type="checkbox" value="${l.id}" ${selected.has(l.id) ? "checked" : ""}><span>${l.emoji}</span><span>${l.name}</span></label>`).join(""); $("liquidPicker").querySelectorAll("input").forEach(c => c.addEventListener("change", () => { c.checked ? selected.add(c.value) : selected.delete(c.value); $("selectedCount").textContent = selected.size; render() })); $("selectedCount").textContent = selected.size }
        function render() {
            let list = liquids.filter(l => selected.has(l.id)); $("tempLabel").textContent = $("temp").value + "°C"; $("pressureLabel").textContent = ["", "Very gentle", "Gentle", "Medium", "Strong", "Very strong"][push()]; $("flowStatus").textContent = running ? "● Flowing" : "Ⅱ Paused"; $("toggleFlow").textContent = running ? "Ⅱ Pause flow" : "▶ Resume flow";
            $("pipeStage").innerHTML = list.length ? list.map(l => `<div class="flow-row ${running ? "" : "stopped"}" style="--liquid:${l.color};--speed:${Math.max(.12, 1.4 / speed(l)).toFixed(2)}s"><div class="d-flex align-items-center gap-2"><div class="tank"><div class="tank-fill"></div></div><div class="liquid-tag">${l.emoji} ${l.name}<small>${l.desc}</small></div></div><div class="pipe-wrap"><div class="pipe" style="height:${$("pipeWidth").value === "narrow" ? 22 : $("pipeWidth").value === "wide" ? 46 : 34}px"><div class="fluid"></div></div><div class="outlet"></div></div><div class="visc">Viscosity<strong>${fmt(viscosity(l))}</strong></div></div>`).join("") : `<div class="text-center p-5 muted">Select one or more liquids above to see them flow through the pipes.</div>`;
            $("ranking").innerHTML = list.slice().sort((a, b) => viscosity(b) - viscosity(a)).map(l => { let v = viscosity(l), w = Math.max(1, Math.min(100, Math.log10(v + 1) / Math.log10(10001) * 100)); return `<div><div class="d-flex justify-content-between gap-2 small mb-2"><span><i class="mini-dot" style="--liquid:${l.color}"></i>${l.emoji} ${l.name}</span><span class="muted">${fmt(v)}</span></div><div class="scale-bar"><div class="scale-fill" style="width:${w}%;background:${l.color}"></div></div></div>` }).join("");
        }
        $("search").addEventListener("input", renderPicker); $("temp").addEventListener("input", render); $("pressure").addEventListener("input", render); $("pipeWidth").addEventListener("change", render);
        $("toggleFlow").addEventListener("click", () => { running = !running; render() });
        $("selectAll").addEventListener("click", () => { selected = new Set(liquids.map(l => l.id)); renderPicker(); render() });
        $("selectCommon").addEventListener("click", () => { selected = new Set(common); renderPicker(); render() });
        $("clearAll").addEventListener("click", () => { selected.clear(); renderPicker(); render() });
        $("compareBtn").addEventListener("click", () => { $("pipeStage").scrollIntoView({ behavior: "smooth", block: "center" }) });
        $("resetBtn").addEventListener("click", () => { $("temp").value = 20; $("pressure").value = 3; $("pipeWidth").value = "normal"; running = true; render() });
        renderPicker(); render();
    