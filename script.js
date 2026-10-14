const content = window.CLIP_CONTENT;

function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined && value !== null) node.textContent = value;
  return node;
}

function addLink(parent, label, url) {
  if (!url) return;
  const link = element("a", "text-link", `${label} ↗`);
  link.href = url;
  if (/^https?:/.test(url) || /\.pdf(?:$|\?)/i.test(url)) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  parent.append(link);
}

content.researchAreas.forEach((area, index) => {
  const item = element("article", "research-item");
  item.append(element("span", "research-index", String(index + 1).padStart(2, "0")));
  const body = element("div", "research-copy");
  body.append(element("h3", "", area.title), element("p", "", area.description));
  item.append(body);
  document.querySelector("#research-list").append(item);
});

function renderEntry(item, index, kind) {
  const article = element("article", "entry");
  const meta = element("div", "entry-meta");
  meta.append(element("span", "entry-index", String(index + 1).padStart(2, "0")));
  if (item.status) meta.append(element("span", "entry-status", item.status));
  if (item.venue) meta.append(element("span", "", item.venue));
  article.append(meta, element("h3", "", item.title));
  if (item.authors) article.append(element("p", "entry-authors", item.authors));
  if (item.description) article.append(element("p", "entry-description", item.description));
  const links = element("div", "entry-links");
  addLink(links, kind === "project" ? "Project" : "Author copy (PDF)", item.paperUrl || item.projectUrl);
  addLink(links, "Code", item.codeUrl);
  if (kind !== "project") addLink(links, "Project", item.projectUrl);
  if (links.childElementCount) article.append(links);
  return article;
}

content.publications.filter(item => item.showOnWebsite).forEach((item, index) => {
  document.querySelector("#publication-list").append(renderEntry(item, index, "publication"));
});

const publicSubmissions = content.submissions.filter(item => item.showOnWebsite);
publicSubmissions.forEach((item, index) => {
  document.querySelector("#submission-list").append(renderEntry(item, index, "submission"));
});
document.querySelector("#submission-empty").hidden = publicSubmissions.length > 0;

content.projects.filter(item => item.showOnWebsite).forEach((item, index) => {
  document.querySelector("#project-list").append(renderEntry(item, index, "project"));
});

content.people.filter(person => person.showOnWebsite).forEach(person => {
  const article = element("article", "person");
  const initials = element("span", "person-initials", person.initials);
  initials.setAttribute("aria-hidden", "true");
  const body = element("div", "person-copy");
  body.append(element("h3", "", person.name));
  body.append(element("p", "person-affiliation", person.affiliation));
  body.append(element("p", "", person.bio));
  const links = element("div", "person-links");
  person.links.forEach(link => addLink(links, link.label, link.url));
  body.append(links);
  article.append(initials, body);
  document.querySelector("#people-list").append(article);
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#idea-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  const name = String(fields.get("name")).trim();
  const email = String(fields.get("email")).trim();
  const idea = String(fields.get("idea")).trim();
  if (!name || !email || !idea) return;
  const subject = encodeURIComponent("CLiP Lab — Research collaboration idea");
  const body = encodeURIComponent(`Hello CLiP Lab,\n\n${idea}\n\nName: ${name}\nReply to: ${email}`);
  window.location.href = `mailto:drmikat@gmail.com,tamjidhf@gmail.com?subject=${subject}&body=${body}`;
});
