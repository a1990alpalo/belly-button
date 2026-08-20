# Belly Button Biodiversity Dashboard

[![Code Quality](https://github.com/a1990alpalo/belly-button/actions/workflows/code-quality.yml/badge.svg)](https://github.com/a1990alpalo/belly-button/actions/workflows/code-quality.yml)

An interactive JavaScript dashboard for exploring the Belly Button Biodiversity dataset. Select a test subject to view demographic metadata, the ten most abundant operational taxonomic units (OTUs), and the complete distribution of bacterial cultures found in that sample.

## Live Dashboard

[Explore the Belly Button Biodiversity Dashboard](https://a1990alpalo.github.io/belly-button/)

![Belly Button Biodiversity Dashboard](images/Belly%20Button%20Biodiversity%20Dashboard.png)

## Features

- Populates a dropdown with all available test-subject IDs.
- Displays demographic metadata for the selected subject.
- Shows the ten most abundant OTUs in a horizontal bar chart.
- Visualizes all OTUs in an interactive bubble chart.
- Updates the charts and metadata whenever a different subject is selected.
- Loads the dataset once and reuses it for subsequent dashboard updates.
- Displays user-friendly messages when data cannot be loaded or a subject cannot be found.
- Uses responsive Plotly charts for different screen sizes.

## Technologies

- HTML5
- JavaScript
- D3.js
- Plotly.js
- Bootstrap
- Node.js and npm for local development
- ESLint for JavaScript quality checks
- Prettier for consistent formatting
- GitHub Actions for continuous integration
- GitHub Pages for deployment

## How It Works

1. `index.html` creates the dashboard layout and loads D3, Plotly, and `app.js`.
2. `app.js` loads `samples.json` once during initialization.
3. The subject IDs from the dataset populate the dropdown menu.
4. The application finds the selected subject's metadata and sample measurements.
5. D3 updates the demographic information panel.
6. Plotly renders or updates the bar and bubble charts.
7. Selecting another subject calls `optionChanged()` and refreshes the dashboard.

## Dataset

The included [`samples.json`](samples.json) file contains three main collections:

- `names`: available test-subject IDs
- `metadata`: demographic information for each subject
- `samples`: OTU IDs, bacterial labels, and sample values used by the charts

An operational taxonomic unit, or OTU, is a grouping used to classify closely related microorganisms.

## Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) 24 is recommended because it matches the GitHub Actions environment.
- npm, which is included with Node.js.

### Installation

Clone the repository:

```bash
git clone https://github.com/a1990alpalo/belly-button.git
cd belly-button
```

Install the locked dependency versions:

```bash
npm ci
```

Start the local web server:

```bash
npm start
```

Open the following address in a browser:

```text
http://127.0.0.1:8000
```

Press `Ctrl+C` in the terminal to stop the server.

## Available Commands

| Command                | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| `npm start`            | Serve the dashboard locally on port 8000.     |
| `npm run lint`         | Check JavaScript with ESLint.                 |
| `npm run format`       | Format supported project files with Prettier. |
| `npm run format:check` | Verify formatting without modifying files.    |

## Project Structure

```text
belly-button/
|-- .github/workflows/code-quality.yml
|-- images/
|-- .gitignore
|-- .prettierignore
|-- .prettierrc.json
|-- app.js
|-- eslint.config.mjs
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
`-- samples.json
```

## Code Quality

The GitHub Actions workflow runs automatically for pull requests targeting `main` and for pushes to `main`. It installs the locked dependencies with `npm ci`, runs ESLint, and verifies Prettier formatting.

You can run the same checks locally:

```bash
npm run lint
npm run format:check
```

## Deployment

The dashboard is deployed as a static website through GitHub Pages:

https://a1990alpalo.github.io/belly-button/

## Author

Alberto Medina

- GitHub: [@a1990alpalo](https://github.com/a1990alpalo)
- Repository: [a1990alpalo/belly-button](https://github.com/a1990alpalo/belly-button)
