const notes = [
  {id:1,subject:"Silviculture",icon:"🌱",title:"Introduction to Silviculture",summary:"Understand the art and science of establishing, tending and regenerating forests.",level:"Foundations",keywords:"regeneration tending forest establishment",sections:[["Meaning and scope","Silviculture is the branch of forestry concerned with establishing, growing, tending and regenerating forest stands to meet defined objectives. Objectives may include timber, biodiversity, soil and water protection, restoration or community needs."],["Key terms","Regeneration means renewal of a forest stand. Natural regeneration develops from natural seed fall or vegetative means; artificial regeneration is assisted by sowing or planting. Tending operations improve the condition or composition of a young or established stand."],["Why it matters","Silvicultural choices depend on species ecology, site conditions, climate, regeneration capacity, management objectives and safeguards for biodiversity and local communities."],["Study reminder","Compare clear-felling, shelterwood, selection and coppice systems using a standard silviculture textbook and your university syllabus. Their suitability depends on species and site; no single system fits every forest."]]},
  {id:2,subject:"Forest Mensuration",icon:"📏",title:"Forest Mensuration: Basics",summary:"A starter guide to diameter, height, basal area and tree volume concepts.",level:"Foundations",keywords:"dbh basal area volume height formula",sections:[["Meaning","Forest mensuration is the measurement and estimation of dimensions, form, volume, growth and yield of individual trees and forest stands."],["Diameter at breast height","DBH is commonly measured at 1.3 m above ground in many forestry conventions. Follow the local or course-specific protocol for sloping ground, buttresses, forks and irregular stems."],["Basal area","For a circular stem cross-section, basal area at the measured diameter is G = πD²/4, where D is diameter in metres and G is in square metres. If diameter is measured in centimetres, convert it to metres before using this form."],["Example","For D = 0.30 m, G = π × (0.30)² / 4 ≈ 0.0707 m². This is the cross-sectional area at that diameter, not the tree's total surface area."],["Measurement quality","Use calibrated equipment, record units, follow a consistent measurement height and document unusual stem form. Tree-volume estimates need a suitable volume equation or form factor; diameter alone is insufficient."]]},
  {id:3,subject:"Forest Ecology",icon:"🦋",title:"Forest Ecosystem Basics",summary:"Explore biotic and abiotic components, food webs, nutrient cycles and succession.",level:"Foundations",keywords:"ecology ecosystem biodiversity succession",sections:[["Ecosystem","A forest ecosystem includes organisms and their physical environment interacting through energy flow and nutrient cycling."],["Biotic components","Producers such as trees and other plants capture energy; consumers feed on organisms; decomposers break down organic matter and help return nutrients to the ecosystem."],["Abiotic components","Important factors include light, temperature, water, soil, nutrients, topography and disturbance."],["Succession","Ecological succession describes changes in community composition and structure over time. Actual pathways depend on climate, soils, disturbance history, dispersal and interactions among species."],["Revision prompt","Draw a forest food web and explain how decomposition links litter production to nutrient availability. Use examples from your local forest type."]]},
  {id:4,subject:"Forest Products",icon:"🪵",title:"Wood: Structure and Properties",summary:"Learn the basic structure of wood and how it relates to use and performance.",level:"Foundations",keywords:"wood science timber physical mechanical properties",sections:[["What wood is","Wood is a biological material formed by the secondary xylem of woody plants. Its anatomy and properties vary among species, within a tree and with growing conditions."],["Main cellular elements","Depending on the group, wood contains fibres, vessels, tracheids, rays and parenchyma. Their arrangement affects water movement, strength, appearance and processing."],["Moisture content","Wood moisture content is commonly expressed on an oven-dry mass basis: MC (%) = [(wet mass − oven-dry mass) / oven-dry mass] × 100."],["Why properties matter","Density, grain direction, moisture, defects and natural durability influence machining, drying, strength and end use. Compare test methods and units when using published values."],["Study prompt","Prepare a comparison table for physical properties (density, shrinkage, moisture content) and mechanical properties (bending strength, compression and hardness)."]]},
  {id:5,subject:"Agroforestry",icon:"🌾",title:"Agroforestry Fundamentals",summary:"Understand tree–crop–livestock interactions, system design and benefits.",level:"Foundations",keywords:"agroforestry silvopasture alley cropping farm trees",sections:[["Definition","Agroforestry deliberately integrates woody perennials with crops and/or animals on the same land-management unit, with ecological and economic interactions."],["Common system types","Examples include agrisilviculture (trees and crops), silvopastoral systems (trees and livestock/pasture) and agrosilvopastoral systems (trees, crops and livestock). Terminology may vary across references."],["Potential benefits","Well-designed systems can diversify farm products, support habitat, protect soil, improve microclimates and provide fodder, fuelwood, fruit or timber. Outcomes depend on species, spacing, management and local conditions."],["Design considerations","Plan for light competition, water availability, root interactions, crop calendars, animal safety, harvesting access, markets and farmer preferences."],["Revision prompt","Sketch a farm layout and label tree rows, crop alleys, livestock movement, water sources and the products expected from each component."]]},
  {id:6,subject:"Forest Management",icon:"🧭",title:"Forest Management: Introduction",summary:"Review management objectives, inventories, planning and sustainable use.",level:"Foundations",keywords:"working plan sustained yield inventory management",sections:[["Purpose","Forest management plans guide actions toward stated ecological, social and economic objectives over a defined period."],["Inventory","A forest inventory gathers information such as area, species composition, diameter distribution, regeneration, growing stock, habitat features and threats."],["Planning cycle","A simplified cycle is: define objectives, collect baseline data, analyse options, prescribe actions, implement, monitor and revise."],["Sustainability","Sustainable management must consider regeneration, biodiversity, soil and water, disturbance, rights and livelihoods, as well as the intended products or services."],["Study prompt","Read an approved working plan or management plan and identify its objectives, inventory methods, prescriptions and monitoring indicators."]]}
];

const species = [
  {common:"Neem",latin:"Azadirachta indica",family:"Meliaceae",note:"A multipurpose tree known for medicinal, agricultural and other traditional uses. Uses and claims should be checked against authoritative sources."},
  {common:"Banyan",latin:"Ficus benghalensis",family:"Moraceae",note:"A large fig tree with spreading branches and aerial prop roots; culturally and ecologically significant."},
  {common:"Peepal",latin:"Ficus religiosa",family:"Moraceae",note:"A fig tree with a distinctive long-tapered leaf tip; important in cultural landscapes and urban ecology."},
  {common:"Pongam / Indian beech",latin:"Pongamia pinnata",family:"Fabaceae",note:"A multipurpose leguminous tree; seeds contain oil and should not be assumed safe for direct feed use."},
  {common:"Tamarind",latin:"Tamarindus indica",family:"Fabaceae",note:"A fruit-bearing tree valued for edible pulp and a range of other products."},
  {common:"Sandalwood",latin:"Santalum album",family:"Santalaceae",note:"A valuable aromatic tree; conservation, harvest and trade are subject to applicable laws and regulations."}
];

const questions = [
 {q:"Which formula gives the basal area of a circular stem cross-section?",options:["πD² / 4","2πD","πD","D² / 2"],answer:0,why:"The area of a circle is πr². Since r = D/2, the formula becomes πD²/4. Use consistent units."},
 {q:"Which term refers to renewal of a forest stand?",options:["Pruning","Regeneration","Thinning","Girdling"],answer:1,why:"Regeneration is the process by which a new forest stand is established naturally or with human assistance."},
 {q:"Which is an abiotic component of a forest ecosystem?",options:["Fungi","Deer","Soil moisture","Bacteria"],answer:2,why:"Soil moisture is a non-living environmental factor. Fungi, deer and bacteria are living components."},
 {q:"What does DBH commonly stand for in forest mensuration?",options:["Daily Biomass Height","Diameter at Breast Height","Diameter Below Horizon","Double Basal Height"],answer:1,why:"DBH means diameter at breast height. A common convention is 1.3 m above ground, but follow the specified field protocol."},
 {q:"Which system deliberately combines woody perennials with crops and/or livestock?",options:["Monoculture only","Agroforestry","Clear-cutting","Mine reclamation only"],answer:1,why:"Agroforestry integrates trees or other woody perennials with crops and/or animals, considering interactions among the components."}
];

const subjectList = ["All subjects", ...new Set(notes.map(n=>n.subject))];
let activeSubject = "All subjects";
let quizIndex = 0;
let quizScore = 0;
let answered = false;
let installPrompt = null;

const $ = (id) => document.getElementById(id);
$("year").textContent = new Date().getFullYear();

function renderFilters(){
  $("filters").innerHTML = subjectList.map(s => `<button type="button" class="filter-chip ${s===activeSubject?"active":""}" data-subject="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join("");
}
function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function renderNotes(){
  const query = $("searchInput").value.trim().toLowerCase();
  const found = notes.filter(n => (activeSubject==="All subjects" || n.subject===activeSubject) && [n.title,n.summary,n.subject,n.keywords].join(" ").toLowerCase().includes(query));
  $("notesGrid").innerHTML = found.length ? found.map(n=>`<article class="note-card">
    <div class="card-icon" aria-hidden="true">${n.icon}</div><div class="card-meta">${escapeHtml(n.subject)} · ${escapeHtml(n.level)}</div>
    <h3>${escapeHtml(n.title)}</h3><p>${escapeHtml(n.summary)}</p>
    <button class="read-link" type="button" data-note="${n.id}">Read notes →</button></article>`).join("") : `<div class="empty-state">No topics match that search. Try a different keyword or subject.</div>`;
}
function renderSpecies(){
  $("speciesGrid").innerHTML = species.map(s=>`<article class="species-card"><div class="card-icon" aria-hidden="true">🌿</div><h3>${escapeHtml(s.common)}</h3><div class="latin">${escapeHtml(s.latin)}</div><div class="card-meta">Family: ${escapeHtml(s.family)}</div><p>${escapeHtml(s.note)}</p></article>`).join("");
}
function openNote(id){
  const n=notes.find(x=>x.id===Number(id)); if(!n)return;
  const backdrop=document.createElement("div"); backdrop.className="modal-backdrop"; backdrop.setAttribute("role","presentation");
  backdrop.innerHTML=`<section class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle"><button class="modal-close" type="button" aria-label="Close notes">Close ✕</button><p class="eyebrow">${escapeHtml(n.subject)}</p><h2 id="modalTitle">${escapeHtml(n.title)}</h2><p>${escapeHtml(n.summary)}</p><div class="modal-content">${n.sections.map(s=>`<h3>${escapeHtml(s[0])}</h3><p>${escapeHtml(s[1])}</p>`).join("")}</div><p class="small-note">Study responsibly: cross-check detailed definitions, equations and recommended practices with your course materials and standard references.</p></section>`;
  document.body.appendChild(backdrop);
  const close=()=>backdrop.remove();
  backdrop.querySelector(".modal-close").addEventListener("click",close);
  backdrop.addEventListener("click",e=>{if(e.target===backdrop)close()});
  document.addEventListener("keydown",function esc(e){if(e.key==="Escape"){close();document.removeEventListener("keydown",esc)}});
  backdrop.querySelector(".modal-close").focus();
}
function renderQuestion(){
  answered=false;
  const q=questions[quizIndex];
  $("quizProgress").textContent=`Question ${quizIndex+1} of ${questions.length}`;
  $("quizScore").textContent=`Score: ${quizScore}`;
  $("progressBar").style.width=`${((quizIndex+1)/questions.length)*100}%`;
  $("questionText").textContent=q.q;
  $("answerFeedback").textContent="";
  $("nextQuestion").disabled=true;
  $("nextQuestion").textContent=quizIndex===questions.length-1?"See results →":"Next question →";
  $("answerOptions").innerHTML=q.options.map((o,i)=>`<button type="button" class="answer-option" data-answer="${i}">${String.fromCharCode(65+i)}. ${escapeHtml(o)}</button>`).join("");
}
function chooseAnswer(index,button){
  if(answered)return; answered=true;
  const q=questions[quizIndex];
  const buttons=[...$("answerOptions").querySelectorAll("button")];
  buttons.forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add("correct");if(i===index&&i!==q.answer)b.classList.add("incorrect")});
  if(index===q.answer)quizScore++;
  $("quizScore").textContent=`Score: ${quizScore}`;
  $("answerFeedback").textContent=(index===q.answer?"Correct! ":"Not quite. ")+q.why;
  $("nextQuestion").disabled=false;
}
function nextQuestion(){
  if(!answered)return;
  if(quizIndex<questions.length-1){quizIndex++;renderQuestion()}
  else{
    $("quizProgress").textContent="Quiz complete";
    $("questionText").textContent=`You scored ${quizScore} out of ${questions.length}.`;
    $("answerOptions").innerHTML=`<p class="feedback">${quizScore===questions.length?"Excellent work!":quizScore>=3?"Good effort — review the explanations and try again.":"Keep learning. Review the notes above and have another go."}</p>`;
    $("answerFeedback").textContent="Your score is shown above. Your answers are not sent to a server.";
    $("nextQuestion").disabled=true;
    $("progressBar").style.width="100%";
  }
}
function restartQuiz(){quizIndex=0;quizScore=0;renderQuestion()}
function showToast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2600)}

$("filters").addEventListener("click",e=>{const b=e.target.closest("[data-subject]");if(!b)return;activeSubject=b.dataset.subject;renderFilters();renderNotes()});
$("searchInput").addEventListener("input",renderNotes);
$("clearSearch").addEventListener("click",()=>{$("searchInput").value="";renderNotes();$("searchInput").focus()});
$("notesGrid").addEventListener("click",e=>{const b=e.target.closest("[data-note]");if(b)openNote(b.dataset.note)});
$("answerOptions").addEventListener("click",e=>{const b=e.target.closest("[data-answer]");if(b)chooseAnswer(Number(b.dataset.answer),b)});
$("nextQuestion").addEventListener("click",nextQuestion);
$("restartQuiz").addEventListener("click",restartQuiz);

renderFilters();renderNotes();renderSpecies();renderQuestion();

if("serviceWorker" in navigator && (location.protocol==="https:" || location.hostname==="localhost")){
  window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>showToast("Offline support could not be enabled in this browser.")));
}
window.addEventListener("beforeinstallprompt",e=>{
  e.preventDefault();installPrompt=e;$("installBtn").classList.remove("hidden");
});
$("installBtn").addEventListener("click",async()=>{
  if(!installPrompt){showToast("Use your browser menu and choose Install app or Add to Home screen.");return}
  installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$("installBtn").classList.add("hidden");
});
window.addEventListener("appinstalled",()=>showToast("Vanam Academy installed successfully."));
