## AUTHORS
Graham Boris, Aidan Keefe, Jacob Metz, Thomas Simono

## OVERVIEW
This code is for a website which can be compiled into a Dockerimage from the Dockerfile and ran via Docker. The website utilizes SQLite to have a database of images which are shown on the website in order of upload. Images can be uploaded either via URL or direct file upload.

## STRUCTURE 

The website uses several files, but mainly the following:<br>
'server.js' - The Node.js server which uses Express to handle HTTP requests and interacts with the SQLite database<br>
'Dockerfile' - The file which is used to build the Docker image, which contains everything to run the website<br>
'build_container.sh' - A shell script to run all terminal commands to build the Docker image from the Dockerfile and then run it<br>
'run_container.sh" - A shell script to run an already built Docker image<br>
'index.html' - The frontend file which uses HTMX to dynamically load and display images without needing to fully reload the page<br>
'images.db' - The SQLite database file that stores all images in the database

## DOCKER 

INSTALL DOCKER then use the .sh file to build then run then stop the processes. The server will run on port localhost:3000. to change this go to the run_container.sh file and change the HOST_PORT variable. Leave the second port alone as it is the node server port in the container.
Installing Docker on Windows may prove difficult, with one of the authors taking over four hours of troubleshooting to try to get it to work and ultimately failing. Some troubleshooting methods included reinstalling Windows Subsystem for Linux (WSL), changing the version of Linux ran by WSL, reinstalling Docker, and downgrading Docker and WSL. 
