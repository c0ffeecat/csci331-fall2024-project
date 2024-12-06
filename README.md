## Website featuring HTMX with Docker

## AUTHORS

Graham Boris, Aidan Keefe, Jacob Metz, Thomas Simono

## OVERVIEW

This code is for a website which can be compiled into a Dockerimage from the Dockerfile and ran via Docker. The website utilizes SQLite to have a database of images which are shown on the website in order of upload. Images can be uploaded either via URL or direct file upload. Image upload and display is handled with HTMX. <br>
Note: The website does NOT keep a copy of websites uploaded via URL, but it stores the URLs themselves. The images will still be shown assuming external URLs remain valid.

## FEATURES

Docker - Used to allow the usage of Docker desktop app to run the server <br>
HTMX - Used in programming for more dynamic page updating with new pictures so the website does not need to be re-rendered <br>
SQL/SQLite - Used to host the images on the server <br>

## RELEVANT LINKS

Website hosted via Render - https://csci331-fall2024-project.onrender.com/ <br>
GitHub Repository - https://github.com/c0ffeecat/csci331-fall2024-project/tree/main <br>
Google Slideshow - https://docs.google.com/presentation/d/13_D7vHj8hXmilwd302EJhkiSeTwmlbxr8-CkZfrrQLA/edit?usp=sharing

## STRUCTURE 

The website uses several files, but mainly the following:<br>
'server.js' - The Node.js server which uses Express to handle HTTP requests and interacts with the SQLite database<br>
'Dockerfile' - The file which is used to build the Docker image, which contains everything to run the website<br>
'build_container.sh' - A shell script to run all terminal commands to build the Docker image from the Dockerfile and then run it<br>
'run_container.sh" - A shell script to run an already built Docker image<br>
'index.html' - The frontend file which uses HTMX to dynamically load and display images without needing to fully reload the page<br>
'images.db' - The SQLite database file that stores all images in the database

## CREATIVE OBJECTIVE

Our objective was to create a website to which images and image URLs could easily be uploaded and kept, and displayed on the site in order of upload. We wanted it to be able to handle both URL and direct file uploads. We also wanted it to be able to dynamically update rather than re-rendering the page, hence usage of HTMX. 

## TECH SUMMARY - OVERVIEW

The main pieces of technology we used were Docker, HTMX, and SQLite. Our website would handle file uploads using HTMX, and then upload them to it's SQLite database (images.db) and update the website in real-time using HTMX, meaning it does not need to be written in JavaScript and did not have to be refreshed to display an up-to-date version of the database.

## TECH SUMMARY - DOCKER 

Docker is a service which allows its users to create, deploy, and manage applications using containers. It does this via the Docker app, which runs compiled Docker images. The main benefit of Docker is that it can help mitigate compatability issues since file dependencies are built into the Docker image, which Docker will then use to build the container. <br>
INSTALL DOCKER then use the .sh file to build then run then stop the processes. The server will run on port localhost:3000. to change this go to the run_container.sh file and change the HOST_PORT variable. Leave the second port alone as it is the node server port in the container. <br>
Installing Docker on Windows may prove difficult. Some common troubleshooting methods include reinstalling Windows Subsystem for Linux (WSL), changing the version of Linux ran by WSL, reinstalling Docker, and downgrading Docker and/or WSL.  <br>

## TECH SUMMARY - HTMX

HTMX is a JavaScript library that allows you to use various JavaScript tools directly in HTML without needing to do JavaScript scripting, as most functionality can be achieved with it through HTML attributes. We use HTMX in our website to dynamically update the display of our database, as well as handle URL and File uploads to our SQL database. One of the benefits of this usage of HTMX is that the website does not need to be refreshed to display newly uploaded images, as they are updated dynamically.

## TECH SUMMARY - SQL/SQLite

SQL is Structured Query Language, the language which accesses and manipulates databases. SQLite is a language library which implements a SQL engine. This means that by using SQLite in our website, we can access and manipulate databases. We used this in order to access our images.db file which displays on our website, as well as upload to the website through both direct file uploads and URL uploads using HTMX.

## INDIVIDUAL MEMBER NOTES

## GRAHAM BORIS

My main contributions to the website came from the documentation and the slideshow. My Linux laptop is 32-bit, meaning it does not support Docker, and I was unable to get Docker to work on my Windows 11 Desktop machine after about 6 hours of troubleshooting. I also assisted in the brainstorming session when we first met as a group, but my main contribution came from working on the majority of the slideshow and documentation for our website. I also handled getting the website working on Render. If I were to do a project like this again, I would make sure that whatever software the group was going to use was compatible with my machine prior to signing up for a group, but regrettably, with this project I was naive and assumed the issue could be resolved, and when I realized it seemed unreasonable to try to join another group so late in the project.

## AIDAN KEEFE

My contributions were creating the interface for the server and database. I assisted in brainstorming the idea for the website. I created the initial documentation. I also set up the docker portions of the project. If I could do this project again I would use redis and implement paging to handle more traffic.


## JACOB METZ



## THOMAS SIMONO



## CONCLUSION
HTMX is a very effective and efficient tool for dynamically updating website displays. SQLite acts as an easy-to-implement method for accessing and manipulating a Database on a server. Docker can be a very helpful tool for the development process, assuming users do not run into compatability issues. If attempting to use Docker, ensure that all members are able to use Docker. We also would have benefitted as a group from meeting up more, as sometimes the work felt disjointed or segmented poorly. Having a larger scope to give everyone a more dedicated task would have been beneficial as well. Perhaps to expand the scope of the project, it could also handle Video upload such as MP4, and Audio upload such as MP3 or WAV. An option to choose between hosting URL-uploaded images on the site or just the URLs themselves could also be useful. A progress bar could be added in the future, as well as some sort of pop-up showing that a file drop upload was successful/prompting users to click "Upload".

## REFERENCES

SQLite Documentation - https://www.sqlite.org/docs.html <br>
HTMX Documentation - https://htmx.org/docs/ <br>
Docker Documentation - https://docs.docker.com/ <br>

