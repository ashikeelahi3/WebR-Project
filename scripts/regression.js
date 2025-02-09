import { WebR } from 'https://webr.r-wasm.org/latest/webr.mjs';

const webR = new WebR({ interactive: false });

let packagesInstalled = false;
const statusElement = document.querySelector("#webr-status>p");
statusElement.textContent = "Initializing WebR...";

async function initializeWebR() {
  try {
      statusElement.textContent = "Installing packages...";

      const packages = ["dplyr"];
      for (let i = 0; i < packages.length; i++) {
        await webR.installPackages([packages[i]], true);
      }
      packagesInstalled = true;
      statusElement.textContent = "Web R Ready!";
      statusElement.style.color = "green";


  } catch (error) {
    console.error("Error installing packages:", error);
    statusElement.textContent = "Error installing packages";
    statusElement.style.color = "red";
  }
}

async function generatePlot() {
  const k = parseInt(document.getElementById("k-value").value, 10);
  const n = parseInt(document.getElementById("n-value").value, 10);
  const sigma = parseFloat(document.getElementById("sigma-value").value, 10);
  const nOutliar = parseInt(document.getElementById("outlier-count").value, 10);
  


  if(!k || !n || !sigma || !nOutliar) {
    statusElement.textContent = "Please fill all the fields"
    statusElement.style.color = "red";
    return;
  }
  statusElement.textContent = 'Generating Plot, Please wait...';
  statusElement.style.color = "green";

  try {

  } catch (error) {
    console.error("Error generating plot:", error);
    statusElement.textContent = "Error generating plot";
    statusElement.style.color = "red";
  }
}


const generateRegression = document.getElementById("generate-regression")

generateRegression.addEventListener("click", async () => {
  if (!packagesInstalled) {
    statusElement.textContent = "Please wait for package installation";
    return;
  }
  generatePlot()
});

initializeWebR()