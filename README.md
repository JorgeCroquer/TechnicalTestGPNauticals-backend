
# GPN Airport

This project is a Technical Test for GP Nauticals


## Installation


1. Clone the repository
2. Move to the directory using:
```bash 
cd TechnicalTestGPNauticals-backend
```
3. Create a postgre database with the name of your preference

3. Modify the .env file with your database data

4. Modify the orm.config.json file with your database data

5. install dependencies using:

```bash 
npm install
```
6. Run the migrations:
if you are on linux:

```bash
npm run migration:run
```
if you are on windows:

```bash
npm run migrationwindows:run
```
7. Run the initial queries contained in the init.sql at this route:
```
src/common/database/init.sql
```
8. Build the project wit:
```bash
npm run build
```
9. Start the server using the following command: 
```
npm run start:prod
```

Now the backend server is running on port 3000

## Swagger

To access to Swagger documentation, use the following endpoint

```
http://localhost:8080/api/docs
```