# Trypanosoma cruzi Epitopes Database Project (eCruziDB)

This project is database of epitopes from T.cruzi coming phage display assay.

## Project Structure

```
t-cruzi-epitopes-db
├── README.md
└── web-app
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── public
    │   ├── data
    │   │   └── epitopes-data.json
    │   └── favicon.ico
    ├── README.md
    ├── src
    │   ├── App.css
    │   ├── App.tsx
    │   ├── assets
    │   │   └── react.svg
    │   ├── components
    │   │   ├── FeaturesCell.tsx
    │   │   ├── FeaturesModal.tsx
    │   │   ├── PeptidesCell.tsx
    │   │   ├── PeptidesModal.tsx
    │   │   ├── SearchBar.tsx
    │   │   └── Table.tsx
    │   ├── index.css
    │   ├── main.tsx
    │   ├── types
    │   │   ├── Epitope.ts
    │   │   └── User.ts
    │   └── vite-env.d.ts
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/gianlucamajor/t-cruzi-epitopes-db.git
   ```

2. Navigate to the project directory:
   ```
   cd t-cruzi-epitopes-db/web-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```
4. Dev 
   ```
   npm run dev
   ```

## Usage
1. Building to production 
   ```
   npm run build
   ```
## Usage on LBI
<p>This is required to enable show modal by urls. e.g /about or /downloads.</p>
<p>Considering the production url as: https://projetos.lbi.iq.usp.br/trypanosoma/ecruzidb/</p>

1. create a .htacces on trypanosoma/epitopes-db directory and add the followed lines:
   ```
   RewriteEngine On
   RewriteBase /trypanosoma/ecruzidb/
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /trypanosoma/ecruzidb/index.html [L]
   ```
2. Give the required permissions 
   ```
   chmod 744 .htaccess
   ```