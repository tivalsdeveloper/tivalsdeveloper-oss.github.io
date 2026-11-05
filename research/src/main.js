const projects = [
  {
    name: 'LOADFX',
    type: 'Python developer utility',
    description:
      'A published Python package in the TivalsDeveloper tool portfolio.',
    packageUrl: 'https://pypi.org/project/loadfx/',
    sourceUrl: 'https://github.com/tivalsdeveloper/loadfx',
    tag: 'Developer tools',
  },
  {
    name: 'TivelText',
    type: 'Python text utility',
    description:
      'A text-focused package distributed through the Python Package Index.',
    packageUrl: 'https://pypi.org/project/tiveltext/',
    sourceUrl: 'https://github.com/tivalsdeveloper/tiveltext',
    tag: 'Python',
  },
  {
    name: 'TivalVideo Offline',
    type: 'Offline video utility',
    description:
      'A video-related Python package listed on PyPI with a public source repository.',
    packageUrl: 'https://pypi.org/project/tivalvideo-offline/',
    sourceUrl: 'https://github.com/tivalsdeveloper/tivalvideo-offline',
    tag: 'Media tools',
  },
  {
    name: 'TivelWeb',
    type: 'Python web utility',
    description:
      'A web-related package published as part of the developer tools portfolio.',
    packageUrl: 'https://pypi.org/project/tivelweb/',
    sourceUrl: 'https://github.com/tivalsdeveloper/tivelweb',
    tag: 'Web',
  },
  {
    name: 'EasyOS',
    type: 'Python operating-system toolkit',
    description:
      'Its README describes helpers for files, directories, paths, environment variables, command execution and system information.',
    packageUrl: 'https://pypi.org/project/tivals-easyos/',
    sourceUrl: 'https://github.com/tivalsdeveloper/easyos',
    tag: 'System utilities',
  },
];

const projectGrid = document.querySelector('#project-grid');
if (projectGrid) {
  projectGrid.innerHTML = projects
    .map(
      (project, index) => `
    <article class="project-card reveal">
      <div class="project-topline">
        <span class="project-index">0${index + 1}</span>
        <span class="tag">${project.tag}</span>
      </div>
      <h3>${project.name}</h3>
      <p class="project-type">${project.type}</p>
      <p class="project-description">${project.description}</p>
      <div class="project-links">
        <a href="${project.packageUrl}" target="_blank" rel="noreferrer">PyPI <span aria-hidden="true">↗</span></a>
        <a href="${project.sourceUrl}" target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  `
    )
    .join('');
}

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav?.classList.toggle('is-open', !isOpen);
});
nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document
  .querySelectorAll('.reveal')
  .forEach(element => observer.observe(element));
