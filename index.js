active = ["bg-primary", "text-white"];
inactive = ["bg-base-200", "text-primary"];
current_tab = "all";
const empty_page = document.getElementById("empty_stat");
  
const all = document.getElementById("all-container");
const Interview = document.getElementById("interview-container");
const Rejected = document.getElementById("reject-container");
// console.log(Interview)
const page = [all, Interview, Rejected];
// console.log(page)
function switchtab(tabName) {
  current_tab = tabName;
  const tabs = ["all", "Interview", "Rejected"];
  for (const t of tabs) {
    if (t == tabName) {
      const tab = document.getElementById(t);
      tab.classList.remove(...inactive);
      tab.classList.add(...active);
    } else {
      const tab = document.getElementById(t);
      tab.classList.remove(...active);
      tab.classList.add(...inactive);
    }
  }

  for (const p of page) {
    p.classList.add("hidden");
  }

  empty_page.classList.add("hidden");
  if (tabName == "all") {
    all.classList.remove("hidden");
    if (all.children.length == 0) {
      empty_page.classList.remove("hidden");
    }
  } else if (tabName == "Interview") {
    Interview.classList.remove("hidden");
    if (Interview.children.length == 0) {
      empty_page.classList.remove("hidden");
    }
  } else if (tabName == "Rejected") {
    if (Rejected.children.length == 0) {
      empty_page.classList.remove("hidden");
    }
    Rejected.classList.remove("hidden");
  }
  updateStats();
}

total_stat = document.getElementById("total-stat");
interview_stat = document.getElementById("interview-stat");
reject_stat = document.getElementById("reject-stat");
available_stat = document.getElementById("available_stat");
document
  .getElementById("jobs-container")
  .addEventListener("click", function (event) {
    const clicked_element = event.target;
    const card = clicked_element.closest(".card");
    const parent = card.parentNode;
    const status = card.querySelector(".tmp");
    if (clicked_element.classList.contains("interview")) {
      status.innerText = "Interviewed";
      Interview.appendChild(card);
      updateStats();
    } else if (clicked_element.classList.contains("rejected")) {
      status.innerText = "Rejected";
      Rejected.appendChild(card);
      updateStats();
    } else if (clicked_element.classList.contains("delete")) {
      parent.removeChild(card);
      updateStats();
    }
  });

switchtab(current_tab);

function updateStats() {
  counts = {
    all: all.children.length,
    Interview: Interview.children.length,
    Rejected: Rejected.children.length,
  };
  total_stat.innerText = counts.all;
  interview_stat.innerText = counts.Interview;
  reject_stat.innerText = counts.Rejected;
  available_stat.innerText = counts[current_tab];
  if (counts[current_tab] < 1) {
    empty_page.classList.remove("hidden");
    console.log("Harerama");
  } else {
    console.log("HareKrishna");
    empty_page.classList.add("hidden");
  }
}
updateStats();
