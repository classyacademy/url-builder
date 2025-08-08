const supportedCurrencies = [
  "USD",
  "EUR",
  "GBP",
  "AUD",
  "CAD",
  "CHF",
  "DKK",
  "HKD",
  "JPY",
  "MXN",
  "NOK",
  "NZD",
  "SEK",
  "SGD",
]; // Trimmed example list

function toggleCustomSource(value) {
  const customInput = document.getElementById("utmSource");
  customInput.style.display = value === "custom" ? "block" : "none";
  if (value !== "custom") customInput.value = "";
}

function toggleAccordion() {
  const section = document.getElementById("passThroughSection");
  section.style.display =
    section.style.display === "none" ? "block" : "none";
}

function generateUrl() {
  const baseUrl = document.getElementById("baseUrl").value.trim();
  const basePattern = /^https?:\/\/.+\/campaign\/[^\/]+\/donate$/;
  if (!basePattern.test(baseUrl)) {
    alert(
      "Please enter a valid donation URL (e.g., https://giving.classy.org/campaign/123456/donate)"
    );
    return;
  }

  const amount = document.getElementById("amount").value.trim();
  if (
    amount &&
    (!/^\d+(\.\d{1,2})?$/.test(amount) || parseFloat(amount) <= 0)
  ) {
    alert(
      "Amount must be a positive number, optionally with up to 2 decimal places."
    );
    return;
  }

  const currency = document
    .getElementById("currency")
    .value.trim()
    .toUpperCase();
  if (currency && !supportedCurrencies.includes(currency)) {
    alert("Currency must be a valid ISO currency code (e.g., USD, EUR).");
    return;
  }

  const designation = document.getElementById("designation").value.trim();
  if (designation && !/^\d+$/.test(designation)) {
    alert("Designation must be a numeric ID.");
    return;
  }

  const sourceCode = document.getElementById("sourceCode").value.trim();
  const secondSourceCode = document
    .getElementById("secondSourceCode")
    .value.trim();
  const selectedSource = document.getElementById("utmSourceSelect").value;
  const customSource = document.getElementById("utmSource").value.trim();
  const utmSource =
    selectedSource === "custom" ? customSource : selectedSource;
  const utmCampaign = document.getElementById("utmCampaign").value.trim();
  const utmMedium = document.getElementById("utmMedium").value.trim();
  const utmTerm = document.getElementById("utmTerm").value.trim();
  const utmContent = document.getElementById("utmContent").value.trim();
  const recurring = document.getElementById("recurring").value;
  const promo = document.getElementById("promo").value.trim();

  const url = new URL(baseUrl);
  if (sourceCode) url.searchParams.set("c_src", sourceCode);
  if (secondSourceCode) url.searchParams.set("c_src2", secondSourceCode);
  if (utmSource) url.searchParams.set("utm_source", utmSource);
  if (utmCampaign) url.searchParams.set("utm_campaign", utmCampaign);
  if (utmMedium) url.searchParams.set("utm_medium", utmMedium);
  if (utmTerm) url.searchParams.set("utm_term", utmTerm);
  if (utmContent) url.searchParams.set("utm_content", utmContent);
  if (amount) url.searchParams.append("amount", amount);
  if (currency) url.searchParams.append("currency", currency);
  if (recurring) url.searchParams.append("recurring", recurring);
  if (designation) url.searchParams.append("designation", designation);
  if (promo) url.searchParams.append("promo", promo);

  document.getElementById("output").textContent = url.toString();
}

function copyToClipboard() {
  const url = document.getElementById("output").textContent;
  if (!url) return;
  navigator.clipboard
    .writeText(url)
    .then(() => alert("Copied to clipboard!"))
    .catch(() => alert("Failed to copy."));
}
