# RentIt

An apartment that lets admins post property that users can view

# Technologies

* Nodejs
* Express
* PostgresSql
* Vue 

# Features

## Admins
* Can add properties
* can update properties
* can delete properties
* can set cron jobs for mails

## Users

* Can view posted properties

# Set up
Here are the steps you need to follow to set up this project on your local machine.

1. Clone this repo by running git clone https://github.com/SomtochiAma/RentIt
2. cd into the cloned repo, then cd into 'api' folder.
3. Create a new PostgreSQL database
4. Create a .env file and input the datails for connecting to your database namely PGUSER( database user), PGPASSWORD (database user password), PGDATABASE (Name of the database), PGHOST (localhost), PGPORT (connection port). Set the connectionString  
or you can manually input these env variables into your terminal.
5. After your databse is set up. Run npm install to install all the dependencies.
6. Run `npm run createTables` to create the database tables
7. Start the server with npm run start and the server sjould be live on localhost:3000. zap
8. Open another terminal window and cd into the client-side folder.
9. Run yarn install to install all dependencies.
10. Run yarn serve to start the dev server.
11. View the vue app on localhost:8080. tada


# Setting up cloudinary cloud
1. Create a cloudinary account here
2. Add your CLOUD_NAME, API_KEY and API_SECRET to your .env file.
3. When images have been uploaded, log into your cloudinary dashboard to view them. tada

# Setting up mailer
1. The application uses gmail to send emails. To set up the mailer,
2. Add your GMAIL and  to your .env file 
3. Tweak the node cron scheduler to schedule intervals at the time you prefer tada

#Contributing
Contributions are very much welcome. Feel free to send in your pull requests.

#Author
Onyekwere Somtochi :smiley: