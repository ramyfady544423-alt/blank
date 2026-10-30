
        const organisms = [
            {
                id: "human", name: "Human", emoji: "🧍", latin: "Homo sapiens", category: "Mammals", type: "Mammal", diet: "Omnivore", fact: "Many organs work together in organ systems.", description: "The human body is a team of organs that work together to keep you alive. Each organ has its own job, and they cooperate to maintain life.", parts: [
                    ["Heart", "❤️", "Circulatory system", "Pumps blood around the body, delivering oxygen and nutrients to cells.", "Moves blood; helps transport oxygen and nutrients; helps carry waste away.", "About the size of your fist. It keeps beating while you sleep.", "A resting adult heart often beats around 60–100 times per minute."],
                    ["Lungs", "🫁", "Respiratory system", "Two spongy organs that exchange gases between the air and blood.", "Take oxygen into the blood; remove carbon dioxide when you breathe out.", "Protected by the rib cage.", "Your left lung is a little smaller to make room for the heart."],
                    ["Brain", "🧠", "Nervous system", "The body's control centre, receiving information and coordinating responses.", "Helps you think and remember; controls movement; processes senses.", "Protected by the skull.", "The brain contains billions of nerve cells."],
                    ["Stomach", "🫃", "Digestive system", "A stretchy muscular sac that mixes food with acid and digestive juices.", "Stores food briefly; churns food; starts digestion of proteins.", "Sits in the upper abdomen.", "Its lining renews itself regularly to protect it from acid."],
                    ["Liver", "🟤", "Digestive system", "A large organ that processes nutrients and makes bile to help digest fats.", "Processes nutrients; breaks down some harmful substances; makes bile.", "Located mostly on the upper-right side of the abdomen.", "The liver can regrow a portion of its lost tissue."],
                    ["Intestines", "〰️", "Digestive system", "The small and large intestines help absorb nutrients and water and form waste.", "Small intestine absorbs most nutrients; large intestine absorbs water.", "Together, they form a long, folded tube.", "Folds and tiny projections help the small intestine absorb nutrients."],
                    ["Kidneys", "🫘", "Urinary system", "Two bean-shaped organs that filter blood and make urine.", "Remove wastes; balance water and salts; help regulate blood pressure.", "Located toward the back, below the ribs.", "Most people have two kidneys, but one healthy kidney can often do the job."],
                    ["Pancreas", "🟡", "Digestive / endocrine", "An organ that makes digestive enzymes and hormones such as insulin.", "Helps digest food; insulin helps control blood sugar.", "Located behind the stomach.", "It helps with both digestion and hormone control."],
                    ["Skin", "🧴", "Integumentary system", "The body's outer covering and its largest organ.", "Protects the body; senses touch; helps control temperature.", "Covers the entire outside of the body.", "Skin helps stop too much water from leaving the body."],
                    ["Eyes", "👁️", "Sensory system", "Organs that detect light and send signals to the brain so you can see.", "Detect light and colour; help identify shapes and movement.", "Set in protective sockets in the skull.", "Your brain interprets the signals from your eyes into the scene you see."],
                    ["Bones", "🦴", "Skeletal system", "A framework that supports the body and protects delicate organs.", "Support the body; protect organs; work with muscles to enable movement.", "Make up the skeleton.", "Bone is living tissue that continually changes and repairs."],
                    ["Muscles", "💪", "Muscular system", "Tissues that contract to create movement and help hold posture.", "Move body parts; stabilize joints; produce heat.", "Found throughout the body, including inside organs.", "Your heart is made of a special kind of muscle."],
                    ["Bladder", "💧", "Urinary system", "A stretchy muscular organ that stores urine until it is released.", "Stores urine; squeezes to empty it.", "In the lower pelvis.", "It expands as it fills."],
                    ["Thyroid", "🦋", "Endocrine system", "A small gland in the neck that makes hormones affecting how quickly the body uses energy.", "Makes hormones that help regulate metabolism and growth.", "At the front of the neck.", "It uses iodine from food to make thyroid hormones."],
                    ["Spleen", "🟣", "Immune / lymphatic", "An organ that filters blood and helps the immune system respond to germs.", "Filters old blood cells; supports immune defence.", "Upper-left abdomen, near the stomach.", "People can live without a spleen, though they need extra protection against some infections."],
                    ["Reproductive organs", "🌸", "Reproductive system", "Organs that produce reproductive cells and, in many cases, support reproduction.", "Produce eggs or sperm; some organs support pregnancy and birth.", "Different organs are present in different reproductive anatomies.", "Reproductive systems vary considerably among individuals."],
                ]
            },
            {
                id: "dog", name: "Dog", emoji: "🐕", latin: "Canis lupus familiaris", category: "Mammals", type: "Mammal", diet: "Omnivore", fact: "A dog's nose has a powerful sense of smell.", description: "Dogs have many organs similar to humans, but their senses, digestion, and body proportions are adapted to their way of life.", parts: [
                    ["Heart", "❤️", "Circulatory system", "Pumps blood through the dog's body to deliver oxygen and nutrients.", "Circulates blood; supports exercise; carries heat and nutrients.", "A dog's heart size varies with its breed and body size.", "A dog's heart rate is usually faster than a resting adult human's."],
                    ["Lungs", "🫁", "Respiratory system", "Exchange oxygen and carbon dioxide as the dog breathes.", "Bring oxygen in; release carbon dioxide; support activity.", "Inside the chest, protected by ribs.", "Dogs cool themselves partly by panting."],
                    ["Brain", "🧠", "Nervous system", "Coordinates movement, learning, smell, hearing, and behaviour.", "Processes senses; learns; controls body functions.", "Protected by the skull.", "Dogs rely heavily on smell to understand their surroundings."],
                    ["Stomach", "🫃", "Digestive system", "Stores and digests food before it moves into the intestines.", "Mixes food; starts protein digestion; passes food onward.", "In the abdomen.", "Dogs can digest a mixed diet, but some human foods are unsafe for them."],
                    ["Liver", "🟤", "Digestive system", "Processes nutrients and produces bile for digestion.", "Processes nutrients; makes bile; helps break down substances.", "In the upper abdomen.", "The liver has many important jobs beyond digestion."],
                    ["Intestines", "〰️", "Digestive system", "Absorb nutrients and water and move waste through the gut.", "Absorb nutrients; absorb water; form stool.", "Coiled in the abdomen.", "Gut microbes also help with digestion."],
                    ["Kidneys", "🫘", "Urinary system", "Filter waste from blood and balance water and salts.", "Make urine; balance fluids and minerals.", "Near the back of the abdominal cavity.", "Fresh water is important for healthy kidney function."],
                    ["Skin", "🐾", "Integumentary system", "Protects the body and works with fur to help manage temperature.", "Protects tissues; senses touch; supports temperature regulation.", "Covers the body beneath and around the coat.", "Paw pads are specialized skin."],
                    ["Nose", "👃", "Sensory system", "Detects scents with a highly developed smell system.", "Finds food; recognizes scents; gathers information from the environment.", "At the front of the muzzle.", "A dog's sense of smell is far more sensitive than a human's."],
                    ["Bones", "🦴", "Skeletal system", "Support the body and work with muscles for walking and running.", "Support; protect; enable movement.", "The skeleton is adapted for four-legged movement.", "Tail and ear movements also use muscles controlled by nerves."],
                ]
            },
            {
                id: "cat", name: "Cat", emoji: "🐈", latin: "Felis catus", category: "Mammals", type: "Mammal", diet: "Carnivore", fact: "Whiskers help cats sense nearby objects.", description: "Cats are mammals with organs for hunting, movement, digestion, and sensing their environment.", parts: [
                    ["Heart", "❤️", "Circulatory system", "Pumps blood and oxygen around the cat's body.", "Moves blood; delivers oxygen; carries nutrients.", "Inside the chest.", "A cat's resting heart rate is generally faster than a human's."],
                    ["Lungs", "🫁", "Respiratory system", "Exchange oxygen and carbon dioxide with each breath.", "Absorb oxygen; release carbon dioxide.", "Inside the chest.", "Cats breathe through their nose and mouth."],
                    ["Brain", "🧠", "Nervous system", "Coordinates balance, hunting movements, senses, and learning.", "Processes sound and sight; coordinates movement; learns.", "Protected by the skull.", "A cat's balance depends on its brain, inner ear, and muscles working together."],
                    ["Stomach", "🫃", "Digestive system", "Begins breaking down food, especially proteins from a meat-based diet.", "Stores food; mixes food; begins digestion.", "In the abdomen.", "Cats are obligate carnivores and need nutrients found in animal tissues."],
                    ["Eyes", "👁️", "Sensory system", "Detect light and movement and help cats navigate, especially in dim light.", "Detect movement; support depth perception; work in low light.", "At the front of the head.", "Cats see well in dim light but do not see in total darkness."],
                    ["Whiskers", "〰️", "Sensory system", "Specialized hairs detect tiny air movements and contact nearby objects.", "Sense nearby obstacles; help judge spaces; provide touch information.", "Around the muzzle and above the eyes.", "Whiskers are sensitive; they are not ordinary hairs."],
                    ["Kidneys", "🫘", "Urinary system", "Filter blood and help control water balance.", "Remove waste; balance fluids; produce urine.", "In the abdomen.", "Cats can produce concentrated urine, an adaptation to water conservation."],
                    ["Claws and muscles", "🐾", "Movement system", "Work together for climbing, gripping, and catching prey.", "Claws grip; muscles move paws and limbs.", "On the paws and throughout the limbs.", "Most cats can retract their claws."],
                ]
            },
            {
                id: "elephant", name: "Elephant", emoji: "🐘", latin: "Elephantidae", category: "Mammals", type: "Mammal", diet: "Herbivore", fact: "An elephant's trunk combines nose and upper lip.", description: "Elephants are large mammals with specialized body parts for feeding, communication, movement, and keeping cool.", parts: [
                    ["Heart", "❤️", "Circulatory system", "Pumps blood through a very large body.", "Moves blood; transports oxygen and nutrients.", "Inside the chest.", "A large body needs a strong circulatory system."],
                    ["Lungs", "🫁", "Respiratory system", "Take in oxygen and remove carbon dioxide.", "Exchange gases; support movement.", "Inside the chest.", "Elephants breathe air with lungs, just like other mammals."],
                    ["Brain", "🧠", "Nervous system", "Coordinates movement, learning, memory, and social behaviour.", "Processes senses; coordinates actions; supports learning.", "Protected by the skull.", "Elephants show complex social behaviour and impressive memory."],
                    ["Trunk", "🐘", "Feeding and sensing", "A flexible fusion of the nose and upper lip used to smell, breathe, touch, and grasp.", "Smells; picks up food; drinks by drawing water in and moving it to the mouth.", "Extends from the face.", "The trunk has tens of thousands of muscle units and no bones along its length."],
                    ["Tusks", "🦷", "Feeding / defence", "Elongated teeth used for digging, moving objects, and defence.", "Dig; strip bark; help move objects.", "Extend from the upper jaw in many elephants.", "Tusks are modified incisor teeth."],
                    ["Intestines", "〰️", "Digestive system", "Process plant food and absorb water and nutrients.", "Move food; absorb water and nutrients.", "Inside the abdomen.", "Elephants eat large amounts of vegetation each day."],
                    ["Feet", "🐾", "Movement system", "Support weight and spread pressure as the elephant walks.", "Support the body; absorb impact; help movement.", "At the ends of all four legs.", "Their broad feet help distribute their enormous weight."],
                ]
            },
            {
                id: "shark", name: "Shark", emoji: "🦈", latin: "Selachimorpha", category: "Fish", type: "Cartilaginous fish", diet: "Carnivore", fact: "A shark's skeleton is made mostly of cartilage.", description: "Sharks are fish with gills instead of lungs, fins for movement, and sensory systems adapted to life underwater.", parts: [
                    ["Heart", "❤️", "Circulatory system", "Pumps blood through a single main circuit that passes through the gills and body.", "Moves blood; sends it to gills for oxygen; delivers it to tissues.", "Near the gills, on the underside.", "Fish circulation differs from the double circulation of mammals."],
                    ["Gills", "🌊", "Respiratory system", "Take dissolved oxygen from water and release carbon dioxide.", "Exchange gases; use water flowing over thin surfaces.", "Along the sides of the head.", "Sharks do not breathe air with lungs."],
                    ["Brain", "🧠", "Nervous system", "Processes smell, movement, vision, and signals from special sensors.", "Coordinates swimming; processes senses; guides behaviour.", "Inside the skull.", "Sharks can detect electrical signals produced by nearby animals."],
                    ["Fins", "🦈", "Movement system", "Help the shark steer, balance, and move through water.", "Provide lift; steer; stabilize swimming.", "Along the body and tail.", "The tail provides much of the forward thrust."],
                    ["Liver", "🟤", "Digestion / buoyancy", "Processes nutrients and stores oil that helps with buoyancy.", "Processes nutrients; stores energy-rich oils; supports buoyancy.", "Large organ inside the body.", "Many sharks have a large oil-rich liver."],
                    ["Gills and spiracles", "🌊", "Respiratory system", "Some sharks move water over gills while others can draw water in through openings called spiracles.", "Bring water to gills; support gas exchange.", "Behind or around the eyes and along the head, depending on species.", "Different shark species use different ways to keep water flowing over the gills."],
                ]
            },
            {
                id: "frog", name: "Frog", emoji: "🐸", latin: "Anura", category: "Amphibians", type: "Amphibian", diet: "Mostly insect-eating", fact: "Many frogs can exchange gases through their moist skin.", description: "Frogs are amphibians with body systems suited to life in water and on land. Their life cycle often includes a tadpole stage.", parts: [
                    ["Heart", "❤️", "Circulatory system", "Pumps blood; adult frogs usually have a three-chambered heart.", "Moves blood; delivers oxygen; supports body functions.", "In the chest region.", "An adult frog's heart has two atria and one ventricle."],
                    ["Lungs", "🫁", "Respiratory system", "Adult frogs use lungs to breathe air, along with gas exchange through skin.", "Take in oxygen; remove carbon dioxide.", "Inside the body.", "Frogs also exchange gases through their moist skin."],
                    ["Skin", "💧", "Integumentary / respiratory", "Moist skin protects the body and can exchange gases with the surroundings.", "Helps gas exchange; protects; absorbs water.", "Covers the body.", "A frog's skin must stay moist for effective skin breathing."],
                    ["Brain", "🧠", "Nervous system", "Coordinates jumping, feeding, sensing, and responses to danger.", "Processes senses; coordinates movement; supports behaviour.", "Protected by the skull.", "Frog tadpoles and adults have different body shapes and lifestyles."],
                    ["Tongue", "👅", "Feeding", "Many frogs use a fast, sticky tongue to catch prey.", "Captures insects; moves food into the mouth.", "Attached near the front of the mouth in many species.", "Some frogs can flick out their tongue extremely quickly."],
                    ["Leg muscles", "🦵", "Movement system", "Powerful hind legs help many frogs jump and swim.", "Jump; swim; escape predators.", "Especially strong in the back legs.", "Not all frogs are great jumpers; body shapes vary by habitat."],
                ]
            },
            {
                id: "bird", name: "Bird", emoji: "🐦", latin: "Aves", category: "Birds", type: "Bird", diet: "Varies by species", fact: "Birds have lungs connected to air sacs.", description: "Birds have feathers, wings, and a highly efficient breathing system that helps many species stay active and fly.", parts: [
                    ["Heart", "❤️", "Circulatory system", "A four-chambered heart keeps oxygen-rich and oxygen-poor blood separate.", "Moves blood; delivers oxygen; supports high activity.", "Inside the chest.", "Birds have a four-chambered heart like mammals."],
                    ["Lungs", "🫁", "Respiratory system", "Rigid lungs work with air sacs to move air efficiently through the breathing system.", "Exchange gases; supply oxygen; remove carbon dioxide.", "Inside the chest.", "Air can flow through bird lungs in a highly efficient pattern."],
                    ["Wings", "🪽", "Movement system", "Wings and feathers help birds fly, steer, or balance depending on the species.", "Create lift and thrust; steer; help display.", "Forelimbs on either side of the body.", "Not all birds fly; penguins use their wings to swim."],
                    ["Feathers", "🪶", "Body covering", "Feathers provide insulation, protection, colour, and often flight surfaces.", "Keep warm; support flight; communicate through colour and display.", "Cover most of the body.", "Feathers are unique to birds among living animals."],
                    ["Beak", "🐦", "Feeding", "The beak shape is adapted to how a bird feeds.", "Pick up food; crack seeds; catch prey or sip nectar.", "At the front of the head.", "Different beak shapes often reflect different diets."],
                    ["Brain", "🧠", "Nervous system", "Controls movement, navigation, calls, and learned behaviour.", "Coordinates flight; processes senses; supports learning.", "Inside the skull.", "Some birds can learn complex tasks and recognize patterns."],
                ]
            },
            {
                id: "snake", name: "Snake", emoji: "🐍", latin: "Serpentes", category: "Reptiles", type: "Reptile", diet: "Carnivore", fact: "Snakes smell partly by collecting particles with their tongue.", description: "Snakes are reptiles with long bodies, flexible jaws, and organs arranged along the body to fit their shape.", parts: [
                    ["Heart", "❤️", "Circulatory system", "Pumps blood through the body; most snakes have a three-chambered heart.", "Moves blood; transports oxygen and nutrients.", "Inside the front portion of the body.", "A snake's heart can shift position somewhat as its body moves."],
                    ["Lungs", "🫁", "Respiratory system", "Lungs exchange oxygen and carbon dioxide; in many snakes one lung is much larger.", "Take in oxygen; remove carbon dioxide.", "Inside the long body cavity.", "The long body shape affects the arrangement of internal organs."],
                    ["Tongue", "👅", "Sensory system", "A forked tongue collects tiny chemical particles from the air and ground.", "Collects scent particles; helps track prey and surroundings.", "At the front of the mouth.", "The tongue transfers particles to a sensory organ in the roof of the mouth."],
                    ["Stomach", "🫃", "Digestive system", "Digests swallowed prey, sometimes whole.", "Breaks down food; absorbs nutrients downstream.", "Inside the body cavity.", "A snake can stretch to swallow prey larger than its head appears to allow."],
                    ["Scales", "🐍", "Body covering", "Scales protect the skin and help reduce water loss.", "Protect; help movement; reduce water loss.", "Cover the body.", "Snakes shed their outer skin as they grow."],
                    ["Kidneys", "🫘", "Excretory system", "Remove waste while helping conserve water.", "Filter wastes; conserve water; help balance salts.", "Toward the rear of the body cavity.", "Many snakes excrete nitrogen waste in a form that conserves water."],
                ]
            },
            {
                id: "fish", name: "Salmon", emoji: "🐟", latin: "Salmo salar", category: "Fish", type: "Bony fish", diet: "Omnivore / carnivore", fact: "Gills extract oxygen from water.", description: "Fish live in water and use gills to extract oxygen. Their fins help them swim, steer, and remain stable.", parts: [
                    ["Gills", "🌊", "Respiratory system", "Extract dissolved oxygen from water flowing over thin gill surfaces.", "Take oxygen from water; release carbon dioxide.", "On each side of the head, beneath the gill cover.", "Water contains much less available oxygen than air."],
                    ["Heart", "❤️", "Circulatory system", "Pumps blood to the gills and then around the body.", "Circulates blood; sends it to gills for oxygen.", "Near the gills.", "A typical fish heart has two main chambers."],
                    ["Fins", "🐟", "Movement system", "Fins steer, stabilize, and propel the fish through water.", "Help swimming; steering; balance.", "Along the sides, back, belly, and tail.", "The tail fin provides much of the forward push."],
                    ["Swim bladder", "🎈", "Buoyancy", "A gas-filled organ that helps many bony fish control their depth.", "Adjusts buoyancy; helps maintain depth with less effort.", "Inside the body cavity.", "Not all fish have a swim bladder; sharks generally do not."],
                    ["Brain", "🧠", "Nervous system", "Processes signals from the senses and coordinates swimming and feeding.", "Coordinates movement; processes senses; supports behaviour.", "Inside the skull.", "Fish can sense water movement through a system called the lateral line."],
                    ["Lateral line", "〰️", "Sensory system", "Detects vibrations and water movement around the fish.", "Senses nearby movement; helps orient; supports group swimming.", "Runs along the sides of the body.", "It helps fish sense movement even when visibility is poor."],
                ]
            },
            {
                id: "butterfly", name: "Butterfly", emoji: "🦋", latin: "Lepidoptera", category: "Insects", type: "Insect", diet: "Nectar as adult", fact: "Insects breathe through tiny openings called spiracles.", description: "Butterflies are insects. Their bodies have three main sections, six legs, antennae, and wings covered in tiny scales.", parts: [
                    ["Compound eyes", "👀", "Sensory system", "Many tiny visual units help detect light, colour, and movement.", "Detect movement; see patterns and colours; navigate.", "On the head.", "Butterflies can see some colours that humans cannot."],
                    ["Antennae", "〰️", "Sensory system", "Antennae detect smells and help sense the surroundings.", "Detect scents; help orientation; sense air movement.", "On the head.", "Antennae can help butterflies find mates and food."],
                    ["Proboscis", "🌼", "Feeding", "A long, tube-like mouthpart used to sip nectar.", "Sips liquid food; reaches nectar in flowers.", "Coiled under the head when not in use in many butterflies.", "It works a bit like a flexible drinking straw."],
                    ["Wings", "🦋", "Movement system", "Wings allow flight and often display patterns used for camouflage or warning.", "Fly; steer; communicate visually.", "Two pairs attached to the thorax.", "Wing colours often come from tiny scales."],
                    ["Spiracles", "💨", "Respiratory system", "Small openings connect to tubes that carry air through the insect body.", "Bring air into tracheal tubes; deliver oxygen to tissues.", "Along the sides of the body.", "Insects do not have lungs like humans."],
                    ["Heart tube", "💚", "Circulatory system", "A long dorsal vessel moves insect body fluid called haemolymph.", "Moves haemolymph; distributes nutrients and signals.", "Along the back inside the body.", "Insect haemolymph usually does not carry oxygen the way human blood does."],
                ]
            },
            {
                id: "tree", name: "Oak tree", emoji: "🌳", latin: "Quercus (example genus)", category: "Plants", type: "Plant", diet: "Makes its own sugars", fact: "Leaves use sunlight to make sugars by photosynthesis.", description: "Plants have organs too. Roots, stems, leaves, flowers, and fruits work together to obtain resources, grow, and reproduce.", parts: [
                    ["Roots", "🌱", "Root system", "Anchor the plant and absorb water and minerals from the soil.", "Hold plant in place; absorb water; absorb minerals.", "Usually underground.", "Root hairs greatly increase the surface area for absorption."],
                    ["Leaves", "🍃", "Photosynthesis", "Leaves capture light and use carbon dioxide and water to make sugars.", "Capture light; make sugars; exchange gases.", "Usually attached to stems.", "Tiny openings called stomata allow gases to move in and out."],
                    ["Stem", "🌿", "Transport / support", "Supports leaves and flowers and carries water, minerals, and sugars around the plant.", "Holds plant upright; transports water; transports sugars.", "Connects roots with leaves and other parts.", "Tree trunks are made mostly of woody stem tissue."],
                    ["Flowers", "🌸", "Reproduction", "Flowers contain structures involved in sexual reproduction in flowering plants.", "Produce pollen and ovules; help seed formation.", "On flowering branches.", "Not all plants make flowers; mosses and ferns reproduce differently."],
                    ["Fruit and seeds", "🍎", "Reproduction", "Fruits protect or help disperse seeds, which can grow into new plants.", "Protect seeds; help dispersal; start new growth.", "Develop from flowers in flowering plants.", "An acorn is the fruit of an oak tree and contains a seed."],
                    ["Xylem and phloem", "💧", "Transport tissues", "Vascular tissues move water and minerals, and transport sugars through the plant.", "Xylem carries water; phloem transports sugars.", "In roots, stems, and leaves.", "These transport tissues are a bit like a plant's internal delivery network."],
                ]
            },
            {
                id: "mushroom", name: "Mushroom", emoji: "🍄", latin: "Fungi (example)", category: "Fungi", type: "Fungus", diet: "Absorbs nutrients", fact: "The visible mushroom is only part of many fungi.", description: "Fungi are not plants or animals. They absorb nutrients from their surroundings, often using a network of fine threads called hyphae.", parts: [
                    ["Hyphae", "🧵", "Nutrient absorption", "Fine fungal threads grow through food or soil and absorb dissolved nutrients.", "Release digestive enzymes; absorb nutrients; spread through material.", "Often hidden in soil, wood, or food.", "A network of hyphae is called a mycelium."],
                    ["Mycelium", "🕸️", "Growth / feeding", "The network of fungal threads forms much of the living body of many fungi.", "Absorbs nutrients; grows; explores its surroundings.", "Usually inside soil or the material the fungus lives on.", "The mushroom you see may be only a small part of a much larger mycelium."],
                    ["Fruiting body", "🍄", "Reproduction", "The visible mushroom produces and releases spores.", "Produces spores; helps spores spread.", "Above the surface in many familiar mushrooms.", "Spores are tiny reproductive units, not seeds."],
                    ["Gills or pores", "🪶", "Spore production", "Many mushrooms have gills or pores under the cap where spores are produced.", "Provide surfaces for spore production and release.", "Under the cap of many mushrooms.", "Not every fungus makes a mushroom-shaped fruiting body."],
                ]
            },
            {
                id: "amoeba", name: "Amoeba", emoji: "🦠", latin: "Amoeba (example)", category: "Microorganisms", type: "Single-celled eukaryote", diet: "Consumes tiny food particles", fact: "An amoeba is one cell that performs all its life processes.", description: "An amoeba is a single-celled organism. It has no heart, lungs, or stomach: one cell carries out all the jobs needed for life.", parts: [
                    ["Cell membrane", "🫧", "Protection / exchange", "A thin boundary that controls what enters and leaves the cell.", "Protects cell; controls exchange; helps maintain balance.", "Surrounds the whole cell.", "It is selectively permeable, meaning some substances pass more easily than others."],
                    ["Nucleus", "🟣", "Control / information", "Contains genetic material and helps coordinate cell activities.", "Stores DNA; helps direct cell activities.", "Inside the cell in many amoebas.", "Amoebas are eukaryotes, meaning their cells have a nucleus."],
                    ["Cytoplasm", "💧", "Cell interior", "Jelly-like material where many chemical reactions take place.", "Holds cell structures; supports reactions; helps materials move.", "Fills the inside of the cell.", "The cell changes shape as its cytoplasm flows."],
                    ["Pseudopodia", "🫳", "Movement / feeding", "Temporary extensions of the cell help it move and surround food.", "Move cell; surround food particles; help capture prey.", "Extend from the cell surface when needed.", "The name means 'false feet'."],
                    ["Food vacuole", "🫧", "Digestion", "A small compartment where captured food is broken down.", "Encloses food; digests particles; releases nutrients.", "Forms inside the cell around food.", "Amoebas digest food inside the cell rather than in a stomach."],
                    ["Contractile vacuole", "💧", "Water balance", "Collects excess water and pumps it out of the cell in many freshwater amoebas.", "Removes excess water; helps prevent the cell from swelling.", "Inside the cell.", "Freshwater constantly tends to enter the cell by osmosis."],
                ]
            },
            {
                id: "bacteria", name: "Bacterium", emoji: "🧫", latin: "Bacteria (example)", category: "Microorganisms", type: "Single-celled prokaryote", diet: "Varies by species", fact: "Bacteria have no nucleus enclosed by a membrane.", description: "Bacteria are tiny single-celled organisms. Their cell structures differ from those of animals, plants, fungi, and amoebas.", parts: [
                    ["Cell membrane", "🫧", "Protection / exchange", "Controls movement of substances into and out of the cell.", "Controls exchange; helps maintain cell conditions; supports energy processes.", "Surrounds the cell interior.", "Many important processes happen at the bacterial cell membrane."],
                    ["Cell wall", "🧱", "Structure / protection", "A sturdy outer layer helps many bacteria maintain their shape and resist pressure.", "Supports shape; protects; helps prevent bursting.", "Outside the cell membrane in most bacteria.", "Bacterial cell walls differ from plant cell walls."],
                    ["Cytoplasm", "💧", "Cell interior", "Fluid inside the cell where many chemical reactions occur.", "Holds cell contents; supports reactions; helps materials move.", "Fills the cell.", "Bacteria can perform all their life processes within one cell."],
                    ["DNA region", "🧬", "Genetic information", "The main DNA is in a region called the nucleoid, not inside a nucleus.", "Stores genetic instructions; directs cell activity; copies during division.", "Inside the cytoplasm.", "Bacteria have DNA but no membrane-bound nucleus."],
                    ["Ribosomes", "⚙️", "Protein production", "Tiny structures build proteins using genetic instructions.", "Make proteins; support growth; build cell components.", "Throughout the cytoplasm.", "Ribosomes are found in all cells."],
                    ["Flagellum", "🚩", "Movement", "Some bacteria use a whip-like structure to move through liquid.", "Propels cell; helps reach suitable environments.", "Extends from the cell in some species.", "Not all bacteria have flagella, and some move in other ways."],
                ]
            },
            {
                id: "octopus", name: "Octopus", emoji: "🐙", latin: "Octopoda", category: "Mollusks", type: "Mollusk", diet: "Carnivore", fact: "An octopus has three hearts.", description: "Octopuses are soft-bodied marine animals with arms, complex senses, and a nervous system distributed throughout the body.", parts: [
                    ["Hearts", "💗", "Circulatory system", "Two hearts pump blood through the gills; one pumps it to the rest of the body.", "Move blood; send it to gills; deliver oxygen.", "Near the gills and central body.", "An octopus has three hearts and blue blood containing copper-based haemocyanin."],
                    ["Gills", "🌊", "Respiratory system", "Extract oxygen from seawater.", "Take oxygen from water; release carbon dioxide.", "Inside the mantle cavity.", "Water moves through the mantle cavity over the gills."],
                    ["Brain", "🧠", "Nervous system", "Coordinates learning, senses, and movement with help from nerve centres in the arms.", "Processes information; coordinates behaviour; supports learning.", "In the head region.", "Many of an octopus's neurons are in its arms."],
                    ["Arms and suckers", "🐙", "Movement / sensing", "Flexible arms with suckers help the octopus explore, grip, and manipulate objects.", "Move; grip; taste and touch objects.", "Around the mouth.", "Octopus arms can perform complex movements with considerable local control."],
                    ["Ink sac", "🖋️", "Defence", "Many octopuses release ink to confuse predators while escaping.", "Releases ink; helps distract predators.", "Near the digestive tract.", "Ink is a defence tool, but not every octopus species uses it in the same way."],
                ]
            },
            {
                id: "earthworm", name: "Earthworm", emoji: "🪱", latin: "Lumbricina", category: "Worms", type: "Segmented worm", diet: "Decaying organic matter", fact: "Earthworms breathe through their moist skin.", description: "Earthworms have a long segmented body and organ systems suited to burrowing through damp soil.", parts: [
                    ["Skin", "💧", "Respiratory system", "Moist skin allows oxygen and carbon dioxide to diffuse between the body and surroundings.", "Exchanges gases; protects body; senses surroundings.", "Covers the entire body.", "Earthworms can suffocate if their skin dries out."],
                    ["Heart-like arches", "❤️", "Circulatory system", "Several muscular vessels help move blood through the body.", "Pump blood; distribute oxygen and nutrients.", "Near the front portion of the body.", "Earthworms have a closed circulatory system, unlike insects."],
                    ["Digestive tract", "〰️", "Digestive system", "Food passes through a tube where it is processed and nutrients are absorbed.", "Processes soil and organic matter; absorbs nutrients; passes waste.", "Runs along the length of the body.", "Earthworms help mix and aerate soil as they burrow."],
                    ["Muscles", "💪", "Movement system", "Circular and lengthwise muscles work together to stretch and shorten segments.", "Burrow; crawl; change body shape.", "Along the body wall.", "Tiny bristles called setae help many earthworms grip soil."],
                    ["Brain and nerves", "🧠", "Nervous system", "A small nerve centre and nerve cord help coordinate movement and responses.", "Sense surroundings; coordinate muscles; respond to touch.", "Near the front, with a nerve cord along the body.", "An earthworm has a much simpler nervous system than a mammal."],
                ]
            },
            {
                id: "jellyfish", name: "Jellyfish", emoji: "🪼", latin: "Scyphozoa (example)", category: "Cnidarians", type: "Cnidarian", diet: "Mostly small animals", fact: "Jellyfish have no brain, heart, or bones.", description: "Jellyfish are aquatic animals with simple body organization. Their tissues and nerve net coordinate movement and responses without a central brain.", parts: [
                    ["Tentacles", "🪼", "Feeding / defence", "Tentacles carry stinging cells in many species to catch prey and protect the animal.", "Capture prey; deliver stings; sense contact.", "Hang from the bell's edge.", "Stinging cells are called cnidocytes and can fire tiny structures rapidly."],
                    ["Bell", "🔔", "Movement", "The bell contracts to push water and move the jellyfish.", "Pulses to swim; supports body shape; moves water.", "Main dome-shaped body.", "Jellyfish movement is often a combination of pulsing and ocean currents."],
                    ["Nerve net", "✨", "Coordination", "A network of nerve cells senses and coordinates simple responses.", "Detects stimuli; coordinates pulsing; supports reflex-like responses.", "Spread through the body.", "A jellyfish has no centralized brain."],
                    ["Digestive cavity", "🫧", "Digestion", "A central cavity digests food and distributes nutrients through the body.", "Digests prey; distributes nutrients; removes undigested material.", "Inside the bell.", "Many jellyfish have a single main opening for food intake and waste release."],
                ]
            },
            {
                id: "snail", name: "Garden snail", emoji: "🐌", latin: "Gastropoda (example)", category: "Mollusks", type: "Mollusk", diet: "Often plant material", fact: "A snail's radula works like a tiny rasping tongue.", description: "Snails are mollusks with a muscular foot, a protective shell in many species, and organs adapted for slow movement and feeding.", parts: [
                    ["Muscular foot", "🦶", "Movement system", "Wave-like muscle contractions and mucus help the snail glide.", "Moves body; grips surfaces; secretes mucus.", "Under the body.", "The mucus helps reduce friction as the snail moves."],
                    ["Shell", "🐚", "Protection", "A hard shell protects the soft body and helps reduce water loss.", "Protects organs; reduces drying; provides shelter.", "On the back in shelled snails.", "A shell grows with the snail and is made largely of calcium carbonate."],
                    ["Radula", "👅", "Feeding", "A ribbon with many tiny teeth scrapes food from surfaces.", "Scrapes food; breaks material into smaller pieces.", "Inside the mouth.", "The radula is not the same as a vertebrate tongue."],
                    ["Tentacles and eyes", "👀", "Sensory system", "Tentacles carry sensory structures that detect touch, smell, and in some species light.", "Sense environment; locate food; respond to danger.", "At the front of the body.", "Eye placement and ability vary among snail species."],
                    ["Lung or gills", "💨", "Respiratory system", "Land snails often use a lung-like cavity, while many aquatic snails use gills.", "Exchange oxygen and carbon dioxide.", "Inside the body.", "Snail breathing structures vary with habitat and species."],
                ]
            },
            {
                id: "bee", name: "Honey bee", emoji: "🐝", latin: "Apis mellifera", category: "Insects", type: "Insect", diet: "Nectar and pollen", fact: "Bees communicate food locations with movement patterns.", description: "Honey bees are insects with specialized body parts for flying, collecting pollen and nectar, and communicating within a colony.", parts: [
                    ["Wings", "🪽", "Movement system", "Two pairs of wings work together for flight.", "Fly; hover; travel between flowers.", "Attached to the thorax.", "A bee can beat its wings hundreds of times per second."],
                    ["Antennae", "〰️", "Sensory system", "Antennae sense smells, touch, and other environmental signals.", "Detect scents; explore surfaces; help communicate.", "On the head.", "Smell is crucial for recognizing flowers and colony members."],
                    ["Proboscis", "🌼", "Feeding", "A tube-like mouthpart helps the bee drink nectar.", "Collect nectar; move liquid food to the mouth.", "At the front of the head.", "Nectar provides energy, while pollen supplies protein and other nutrients."],
                    ["Spiracles", "💨", "Respiratory system", "Openings connect to tracheal tubes that carry air through the insect.", "Bring air into the body; supply oxygen to tissues.", "Along the sides of the body.", "Insect blood-like haemolymph does not carry most oxygen."],
                    ["Pollen baskets", "🌼", "Food collection", "Specialized areas on the hind legs carry pollen back to the hive.", "Collect pollen; transport it to the colony.", "On the hind legs of worker honey bees.", "Pollen is an important protein source for developing bees."],
                ]
            },
            {
                id: "fern", name: "Fern", emoji: "🌿", latin: "Polypodiopsida", category: "Plants", type: "Plant", diet: "Makes its own sugars", fact: "Ferns reproduce using spores rather than flowers and seeds.", description: "Ferns are plants with roots, stems, and leaves, but they do not produce flowers or seeds. They reproduce using spores.", parts: [
                    ["Roots", "🌱", "Root system", "Anchor the fern and absorb water and minerals.", "Hold plant in place; absorb water; absorb minerals.", "Usually in soil or growing material.", "Some ferns grow on trees without taking nutrients from the tree itself."],
                    ["Fronds", "🍃", "Photosynthesis", "Fern leaves capture light and make sugars.", "Capture light; make sugars; exchange gases.", "Grow from the stem or rhizome.", "Young fern fronds often unfurl from a curled shape."],
                    ["Rhizome", "🌿", "Growth / support", "A stem that often grows horizontally and produces roots and leaves.", "Stores resources; spreads growth; produces new fronds.", "At or below the surface in many ferns.", "A rhizome is a stem, not a root."],
                    ["Sori and spores", "🟤", "Reproduction", "Many ferns produce spores in clusters called sori on the underside of fronds.", "Produce spores; spread the next generation.", "Often on the underside of mature fronds.", "Ferns reproduce without flowers or seeds."],
                ]
            },
            {
                id: "paramecium", name: "Paramecium", emoji: "🔬", latin: "Paramecium (example)", category: "Microorganisms", type: "Single-celled eukaryote", diet: "Consumes tiny food particles", fact: "Tiny cilia help Paramecium move and sweep food inward.", description: "Paramecium is a single-celled organism commonly found in freshwater. Its cilia help it swim and guide food into an oral groove.", parts: [
                    ["Cilia", "〰️", "Movement / feeding", "Tiny hair-like structures beat in coordinated waves.", "Swim; move water; sweep food toward the oral groove.", "Cover the cell surface.", "Cilia are also found in some cells inside larger organisms."],
                    ["Cell membrane", "🫧", "Protection / exchange", "Controls which substances enter and leave the cell.", "Protects; controls exchange; maintains balance.", "Surrounds the cell.", "A single cell still needs to control its internal environment."],
                    ["Nucleus", "🟣", "Genetic information", "Paramecia have a large nucleus and a smaller nucleus with different roles.", "Store DNA; coordinate cell activity; support reproduction.", "Inside the cell.", "Paramecia have two types of nuclei, a distinctive feature of the group."],
                    ["Food vacuoles", "🫧", "Digestion", "Compartments form around food and digest it inside the cell.", "Enclose food; digest particles; distribute nutrients.", "Inside the cell.", "A single-celled organism can digest food without a stomach."],
                    ["Contractile vacuoles", "💧", "Water balance", "Collect and expel excess water that enters from the freshwater environment.", "Pump excess water out; maintain cell balance.", "Inside the cell.", "They help stop the cell from taking in too much water."],
                ]
            },
            {
                id: "yeast", name: "Yeast", emoji: "🧫", latin: "Saccharomyces cerevisiae (example)", category: "Fungi", type: "Single-celled fungus", diet: "Absorbs dissolved nutrients", fact: "Yeast can release carbon dioxide as it ferments sugars.", description: "Yeast is a single-celled fungus used in baking and fermentation. It absorbs nutrients and can reproduce by budding.", parts: [
                    ["Cell wall", "🧱", "Structure / protection", "A firm outer layer supports the cell and protects it.", "Supports shape; protects; helps resist pressure.", "Outside the cell membrane.", "Fungal cell walls contain materials different from plant cell walls."],
                    ["Cell membrane", "🫧", "Protection / exchange", "Controls movement of nutrients and waste into and out of the cell.", "Controls exchange; supports energy processes; maintains balance.", "Just inside the wall.", "The membrane is vital for nutrient uptake."],
                    ["Nucleus", "🟣", "Genetic information", "Contains DNA and coordinates the cell's activities.", "Stores DNA; directs cell activity; supports reproduction.", "Inside the cell.", "Yeast is a eukaryote, unlike bacteria."],
                    ["Vacuole", "💧", "Storage / recycling", "Stores substances and helps break down and recycle cell materials.", "Stores materials; recycles components; helps balance the cell.", "Inside the cell.", "Vacuoles help yeast cells manage nutrients and waste."],
                    ["Budding", "🌱", "Reproduction", "A small outgrowth develops on the parent cell and can separate as a new cell.", "Makes new cells; allows population growth.", "At the cell surface during reproduction.", "Budding is a common way baker's yeast reproduces."],
                ]
            },
            {
                id: "lizard", name: "Lizard", emoji: "🦎", latin: "Lacertilia (informal group)", category: "Reptiles", type: "Reptile", diet: "Varies by species", fact: "Many lizards can drop their tail to escape predators.", description: "Lizards are reptiles with scales, lungs, and body systems adapted to their environments. Some are insect-eaters, while others eat plants or mixed diets.", parts: [
                    ["Heart", "❤️", "Circulatory system", "Pumps blood around the body; most lizards have a partly divided ventricle.", "Moves blood; carries oxygen; transports nutrients.", "Inside the chest.", "Heart structure varies across reptile groups."],
                    ["Lungs", "🫁", "Respiratory system", "Lungs exchange gases with the air.", "Take in oxygen; release carbon dioxide.", "Inside the chest.", "Unlike amphibians, lizards rely on lungs for breathing."],
                    ["Scales", "🦎", "Body covering", "Scales protect the skin and reduce water loss.", "Protect; reduce drying; help movement.", "Cover the body.", "Reptile scales are made from keratin-rich skin structures."],
                    ["Tail", "🦎", "Movement / defence", "The tail helps with balance and movement; some lizards can shed part of it to escape.", "Balance; movement; distraction from predators.", "Extends from the rear of the body.", "Tail regrowth varies by species and may not recreate the original tail exactly."],
                    ["Eyes", "👁️", "Sensory system", "Detect light and movement and help locate food or danger.", "See surroundings; detect movement; guide behaviour.", "On the head.", "Some lizards have a transparent scale over the eye instead of movable eyelids."],
                ]
            },
            {
                id: "ant", name: "Ant", emoji: "🐜", latin: "Formicidae", category: "Insects", type: "Insect", diet: "Varies by species", fact: "Ants use chemical trails to guide nestmates.", description: "Ants are social insects. Their bodies have a head, thorax, and abdomen, with antennae and six legs.", parts: [
                    ["Antennae", "〰️", "Sensory system", "Antennae detect chemical signals, touch, and the surroundings.", "Follow trails; recognize nestmates; explore.", "On the head.", "Ants communicate with chemical signals called pheromones."],
                    ["Mandibles", "🦷", "Feeding / work", "Strong jaws help cut, carry, dig, and handle food.", "Carry food; dig; defend; manipulate objects.", "At the front of the head.", "Different ant species have mandibles suited to different jobs."],
                    ["Spiracles", "💨", "Respiratory system", "Openings connect to tubes that deliver air through the body.", "Bring air in; distribute oxygen through tracheal tubes.", "Along the sides of the body.", "Insects breathe through a tracheal system, not lungs."],
                    ["Legs", "🦵", "Movement system", "Six jointed legs allow ants to walk, climb, and carry objects.", "Walk; climb; grip surfaces.", "Attached to the thorax.", "Ants can carry loads many times their own body weight, depending on the task and species."],
                    ["Heart tube", "💚", "Circulatory system", "A dorsal vessel circulates haemolymph through the body.", "Moves haemolymph; transports nutrients and signals.", "Along the back.", "Insect circulation is different from the closed blood-vessel system of humans."],
                ]
            },
            {
                id: "coral", name: "Coral polyp", emoji: "🪸", latin: "Anthozoa (example)", category: "Cnidarians", type: "Cnidarian", diet: "Small prey / partner algae", fact: "Many corals live with tiny photosynthetic algae.", description: "A coral is made of tiny animals called polyps. Many build a hard skeleton and live with algae that share food made from sunlight.", parts: [
                    ["Tentacles", "🪸", "Feeding / sensing", "Tentacles surround the mouth and may use stinging cells to catch tiny prey.", "Capture food; sense contact; help defend.", "Around the mouth of each polyp.", "Coral polyps are related to sea anemones and jellyfish."],
                    ["Mouth", "⭕", "Feeding / digestion", "Food enters through the mouth into the digestive cavity.", "Takes in food; releases undigested material.", "At the centre of the tentacles.", "The same opening is generally used for taking in food and expelling waste."],
                    ["Body cavity", "🫧", "Digestion", "A simple internal cavity helps digest food and distribute nutrients.", "Digests food; distributes nutrients within the polyp.", "Inside the polyp.", "Corals do not have complex organs such as a heart or lungs."],
                    ["Skeleton", "🪨", "Support / protection", "Many stony corals build a calcium carbonate skeleton.", "Supports polyps; protects; contributes to reef structure.", "Under and around the living tissue.", "Coral reefs are built by generations of tiny animals."],
                ]
            },
            {
                id: "seaweed", name: "Seaweed", emoji: "🌊", latin: "Macroalgae (example)", category: "Plants", type: "Alga", diet: "Makes its own sugars", fact: "Seaweeds are algae, not true plants with roots and stems.", description: "Seaweed is a large algae that lives in water. It uses light to make sugars, but its body is not organized into the same true organs as a flowering plant.", parts: [
                    ["Blade", "🍃", "Photosynthesis", "A leaf-like surface captures light and exchanges gases with the water.", "Captures light; makes sugars; exchanges gases.", "Flat or ribbon-like parts of the body.", "A blade looks like a leaf but is not a true leaf."],
                    ["Holdfast", "🪨", "Attachment", "A root-like structure anchors seaweed to rocks or other surfaces.", "Attaches to surfaces; resists waves.", "At the base of the seaweed.", "A holdfast usually does not absorb nutrients like plant roots do."],
                    ["Stipe", "🌿", "Support", "A stem-like part supports blades in many seaweeds.", "Supports blades; positions them in the water.", "Between holdfast and blades in many species.", "A stipe is not a true plant stem."],
                    ["Air bladders", "🫧", "Buoyancy", "Gas-filled structures in some seaweeds help blades float nearer the light.", "Increase buoyancy; position blades; support light capture.", "Attached to blades or stipes in some species.", "Not all seaweeds have air bladders."],
                ]
            },
            {
                id: "hydra", name: "Hydra", emoji: "🪼", latin: "Hydra (genus)", category: "Cnidarians", type: "Cnidarian", diet: "Tiny aquatic animals", fact: "Hydra can regrow lost body parts in many conditions.", description: "Hydra is a small freshwater animal with a simple body, tentacles, and a nerve net. It has no heart or lungs.", parts: [
                    ["Tentacles", "🪼", "Feeding / defence", "Tentacles carry stinging cells to catch small prey.", "Capture prey; deliver stings; sense contact.", "Around the mouth at one end of the body.", "Stinging cells help hydra catch tiny aquatic animals."],
                    ["Mouth", "⭕", "Feeding / digestion", "Food enters the central digestive cavity through the mouth.", "Takes in food; passes it to the cavity; expels undigested material.", "At the end surrounded by tentacles.", "Hydra has one opening for its digestive cavity."],
                    ["Body column", "🫧", "Support / movement", "The flexible body column can stretch, bend, and contract.", "Supports body; changes shape; helps movement.", "Main tubular body.", "Hydra can attach to surfaces and move in unusual ways."],
                    ["Nerve net", "✨", "Coordination", "A network of nerve cells coordinates simple movements and responses.", "Detects stimuli; coordinates contractions; supports responses.", "Spread through the body.", "Hydra has no centralized brain."],
                ]
            },
            {
                id: "moss", name: "Moss", emoji: "🌱", latin: "Bryophyta (example)", category: "Plants", type: "Plant", diet: "Makes its own sugars", fact: "Mosses absorb much of their water across their surfaces.", description: "Mosses are small plants without the same complex vascular system found in trees. They often grow in damp places and reproduce using spores.", parts: [
                    ["Leaf-like structures", "🍃", "Photosynthesis", "Small structures capture light and make sugars.", "Capture light; make sugars; exchange gases.", "Along moss shoots.", "Moss 'leaves' are not the same as the true leaves of vascular plants."],
                    ["Rhizoids", "🧵", "Attachment", "Fine structures help anchor moss to its surface.", "Attach; stabilize shoot; sometimes aid water movement.", "At the base of the moss.", "Rhizoids are not true roots."],
                    ["Stem-like shoot", "🌿", "Support", "The shoot holds leaf-like structures in position.", "Supports growth; positions photosynthetic parts.", "Above the growing surface.", "Mosses generally lack the complex water-transport tissues of trees."],
                    ["Capsule", "🟤", "Reproduction", "A capsule produces and releases spores.", "Produces spores; releases spores for dispersal.", "Often held on a stalk above the moss.", "Spores can grow into a new stage of the moss life cycle."],
                ]
            },
            {
                id: "seaurchin", name: "Sea urchin", emoji: "🟣", latin: "Echinoidea", category: "Other animals", type: "Echinoderm", diet: "Varies by species", fact: "Tube feet help sea urchins move and grip surfaces.", description: "Sea urchins are marine animals with a hard internal skeleton, movable spines, and a water-vascular system.", parts: [
                    ["Spines", "📌", "Protection / movement", "Movable spines protect the body and can help the animal move or wedge into spaces.", "Discourage predators; protect; assist movement.", "Cover the outside of the body.", "The spines attach to a hard shell-like structure called a test."],
                    ["Tube feet", "🫧", "Movement / sensing", "Small tube feet operate using the water-vascular system.", "Grip surfaces; move; sense surroundings.", "Extend between the spines.", "Tube feet work through fluid pressure."],
                    ["Mouth and teeth", "🦷", "Feeding", "A specialized jaw apparatus scrapes or bites food in many sea urchins.", "Scrapes algae; bites food; processes material.", "On the underside in many species.", "The jaw apparatus is often called Aristotle's lantern."],
                    ["Water-vascular system", "🌊", "Movement / transport", "A fluid-filled system powers tube feet and helps with movement and sensing.", "Operates tube feet; supports movement; senses surroundings.", "Inside the body, connected to tube feet.", "This system is characteristic of echinoderms."],
                ]
            },
        ];
        const categories = [
            ["Mammals", "🐾"], ["Birds", "🐦"], ["Reptiles", "🐍"], ["Amphibians", "🐸"], ["Fish", "🐟"], ["Insects", "🐜"], ["Mollusks", "🐚"], ["Worms", "🪱"], ["Cnidarians", "🪼"], ["Plants", "🌿"], ["Fungi", "🍄"], ["Microorganisms", "🦠"], ["Other animals", "🪸"]
        ];
        const filters = ["All", "Circulatory system", "Respiratory system", "Digestive system", "Nervous system", "Movement system", "Sensory system", "Reproduction", "Protection", "Transport", "Excretory system"];
        let current = organisms[0], selectedPart = current.parts[0], activeFilter = "All", globalSearch = "";
        const $ = id => document.getElementById(id);
        function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
        function renderCategoryList() {
            const counts = {}; organisms.forEach(o => counts[o.category] = (counts[o.category] || 0) + 1);
            $("organismList").innerHTML = categories.map(([c, e]) => `<button class="org-btn ${current.category === c ? 'active' : ''}" data-category="${esc(c)}"><span class="org-emoji">${e}</span><span>${esc(c)}</span><span class="org-count">${counts[c] || 0}</span></button>`).join("");
            $("organismList").querySelectorAll("button").forEach(b => b.onclick = () => { const c = b.dataset.category; const first = organisms.find(o => o.category === c); if (first) selectOrganism(first); });
        }
        function renderChoices() {
            const q = $("sideSearch").value.toLowerCase().trim();
            const list = organisms.filter(o => (!q || (o.name + " " + o.category + " " + o.latin).toLowerCase().includes(q)) && (!globalSearch || (o.name + " " + o.category + " " + o.latin + " " + o.parts.map(p => p[0]).join(" ")).toLowerCase().includes(globalSearch)));
            $("organismChoices").innerHTML = list.map(o => `<button class="org-btn ${current.id === o.id ? 'active' : ''}" data-id="${o.id}"><span class="org-emoji">${o.emoji}</span><span>${esc(o.name)}</span><span class="org-count">›</span></button>`).join("") || '<div class="small text-secondary p-2">No organisms found.</div>';
            $("organismChoices").querySelectorAll("button").forEach(b => b.onclick = () => selectOrganism(organisms.find(o => o.id === b.dataset.id)));
        }
        function renderFilters() {
            $("filters").innerHTML = filters.map(f => `<button class="filter ${activeFilter === f ? 'active' : ''}" data-filter="${esc(f)}">${esc(f)}</button>`).join("");
            $("filters").querySelectorAll("button").forEach(b => b.onclick = () => { activeFilter = b.dataset.filter; renderFilters(); renderParts(); });
        }
        function matchesFilter(p) {
            if (activeFilter === "All") return true;
            const sys = p[2].toLowerCase(), name = p[0].toLowerCase();
            if (activeFilter === "Reproduction") return /reproduc|spore|seed|flower|bud/.test(sys + " " + name);
            if (activeFilter === "Protection") return /protection|skin|shell|scale|wall/.test(sys + " " + name);
            if (activeFilter === "Transport") return /transport|xylem|phloem/.test(sys + " " + name);
            return sys.includes(activeFilter.toLowerCase()) || (activeFilter === "Movement system" && /muscle|fin|wing|leg|foot|trunk|pseudopodia|cilia|tentacle/.test(name)) || (activeFilter === "Sensory system" && /eye|nose|whisker|antenna|tongue|lateral line/.test(name)) || (activeFilter === "Excretory system" && /kidney|bladder|vacuole/.test(name));
        }
        function renderParts() {
            const q = globalSearch;
            const list = current.parts.filter(p => matchesFilter(p) && (!q || (p[0] + " " + p[2] + " " + p[3]).toLowerCase().includes(q)));
            $("organGrid").innerHTML = list.map(p => `<button class="organ-card ${selectedPart && selectedPart[0] === p[0] ? 'active' : ''}" data-part="${esc(p[0])}"><span class="organ-emoji">${p[1]}</span><span class="organ-name">${esc(p[0])}</span></button>`).join("") || '<div class="empty">No body parts match this search or filter. Try “All” or a different word.</div>';
            $("organGrid").querySelectorAll("button").forEach(b => b.onclick = () => { selectedPart = current.parts.find(p => p[0] === b.dataset.part); renderParts(); renderDetail(); });
            $("gridTitle").textContent = current.name + " body parts";
        }
        function renderDetail() {
            if (!selectedPart) return;
            const p = selectedPart;
            $("detailEmoji").textContent = p[1]; $("detailName").textContent = p[0]; $("detailSystem").textContent = p[2];
            $("detailDescription").textContent = p[3];
            const bits = p[4].split(";").map(x => x.trim()).filter(Boolean);
            const icons = ["⚙️", "🧭", "🔬", "🌟"];
            $("functions").innerHTML = bits.map((x, i) => `<div class="function"><div class="function-icon">${icons[i % icons.length]}</div><div><strong>${["Main job", "How it helps", "Why it matters"][i % 3]}</strong><span>${esc(x)}</span></div></div>`).join("");
            $("quickFacts").innerHTML = `<div class="function"><div class="function-icon">📍</div><div><strong>Where / what</strong><span>${esc(p[5])}</span></div></div><div class="function"><div class="function-icon">🧠</div><div><strong>Remember</strong><span>${esc(p[6])}</span></div></div>`;
            $("funfact").textContent = p[6];
            $("compareSelect").innerHTML = organisms.filter(o => o.id !== current.id).map(o => `<option value="${o.id}">${esc(o.emoji + " " + o.name)}</option>`).join("");
            $("compareOutput").style.display = "none";
        }
        function selectOrganism(o) {
            current = o; selectedPart = o.parts[0]; activeFilter = "All";
            $("heroEmoji").textContent = o.emoji; $("heroName").textContent = o.name; $("heroLatin").textContent = o.latin; $("heroDescription").textContent = o.description;
            $("heroType").textContent = "🧬 " + o.type; $("heroDiet").textContent = "🍽️ " + o.diet; $("heroFact").textContent = "💡 " + o.fact;
            renderCategoryList(); renderChoices(); renderFilters(); renderParts(); renderDetail();
        }
        $("sideSearch").addEventListener("input", renderChoices);
        $("topSearch").addEventListener("input", e => { globalSearch = e.target.value.toLowerCase().trim(); renderChoices(); renderParts(); });
        $("compareBtn").onclick = () => {
            const other = organisms.find(o => o.id === $("compareSelect").value); if (!other) return;
            const match = other.parts.find(p => p[0].toLowerCase() === selectedPart[0].toLowerCase()) || other.parts.find(p => p[2].toLowerCase().includes(selectedPart[2].split(" ")[0].toLowerCase()));
            $("compareOutput").style.display = "block";
            $("compareOutput").innerHTML = match ? `<strong>${esc(other.emoji + " " + other.name)} — ${esc(match[0])}</strong><br>${esc(match[3])}<br><br><strong>How it works:</strong> ${esc(match[4])}` : `<strong>${esc(other.emoji + " " + other.name)}</strong><br>This organism does not have a directly matching organ named “${esc(selectedPart[0])}”. It may carry out a similar life function using different body parts or cell structures. ${other.type.toLowerCase().includes("single-celled") ? "Because it is single-celled, one cell performs many jobs that separate organs perform in larger organisms." : ""}`;
        };
        renderCategoryList(); renderChoices(); renderFilters(); renderParts(); renderDetail();
    