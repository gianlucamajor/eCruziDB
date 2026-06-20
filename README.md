# eCruziDB: The T. cruzi Epitopes Database Project 

This project is database of epitopes from T.cruzi coming phage display assay.

## Quick Start
### Usage on LBI
<p>https://projetos.lbi.iq.usp.br/trypanosoma/ecruzidb/</p>
and be happy! ;)


## Dev Setup Instructions

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

5. Building to production 
   ```
   npm run build
   ```

### DEV IGV-webapp 
```
npx http-server -a localhost $igv-webapp-dir$
http://localhost:8080/igv-webapp/?locus=CM026600.1:31354-31391
```


### DEV Usage on LBI
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