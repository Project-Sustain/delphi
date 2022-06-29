import {auth} from "../bugSubmitAuth";

document.getElementById('nav-menu-button').addEventListener('click', openNav);
document.getElementById('nav-close-button').addEventListener('click', closeNav);
document.getElementById('nav-bug-report').addEventListener('click', openBugReport);

function openNav() {
  document.getElementById("sidebar-id").style.width = "52vw";
  document.getElementById("sidebar-id").style.transition = "0.7s";
  document.getElementById("main").style.opacity = "0";
}

export function closeNav() {
  document.getElementById("sidebar-id").style.width = "0";
  document.getElementById("sidebar-id").style.transition = "0.7s";
  document.getElementById("main").style.opacity = "1";
}

export function openBugReport() {
  closeNav();
  document.getElementById("bug-report").style.display = "block";
}

export function closeBugReport() {
  document.getElementById("bug-report").style.display = "none";
}

// export async function sendGitHub(description) {
//   const octokit = new Octokit({
//     auth: auth
//   })
//
//   await octokit.request('POST /repos/Project-Sustain/delphi/issues', {
//     owner: 'Project-Sustain',
//     repo: 'delphi',
//     title: `Bug Report: ${description.split(" ").slice(0, 3).join(" ")}...`,
//     body: description,
//     labels: [
//       'bug', 'userSubmitted'
//     ]
//   })
// }
