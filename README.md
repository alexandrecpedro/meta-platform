<div align = "center">
    <h1> Meta Platform </h1>
</div>
<br>

<div align = 'center' justify-content = 'space-around' >
   <img height=' 80px ' src= 'https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png' alt = 'Spring React Week' >
</div>
<br>

<h3 align = "center">
  SPRING REACT WEEK - DEVSUPERIOR
</h3>
<br>

|                                                                           |                                                                      |                                                                         | 
|:------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|:-------------------------------------------------------------------------------------:|
| <img width="1604" alt="Platform - Mobile" src="./frontend/src/assets/project/screens/screen1.png">        | <img width="1200" alt="Platform - Desktop (small and medium)" src="./frontend/src/assets/project/screens/screen2.png"> | <img width="1604" alt="Platform - Desktop (large)" src="./frontend/src/assets/project/screens/screen3.png"> |
<br>

<p></p>

<p align="center">
 <a href="#theproject">The Project</a> •
 <a href="#target">Target</a> •
 <a href="#technologies">Technologies</a> •
 <a href="#route">Route</a> •
</p>
<br>

<div id="theproject">
<h2> 📓 The Project </h2>
<p> Meta Platform, made at Spring React Week from DevSuperior (Teacher Nelio Alves) </p>
</div>

<div id="target">
<h2> 💡 Target </h2>
Development of a platform for 
</div>
<br>

<div id="technologies">
<h2> 🛠 Technologies </h2>
The following tools were used in building the project:<br><br>

|                     Type                     |         Tools          |                           References                           |
|:--------------------------------------------:|:----------------------:|:--------------------------------------------------------------:|
|               IDE - Front end                 |         VS CODE        |            https://code.visualstudio.com/                    |
|                IDE - Back end                 |    SPRING TOOL SUITE   |            https://code.visualstudio.com/                    |
|        Design Interface Tool                  | FIGMA  (Prototype - UX/UI)  |              https://www.figma.com/                           | 
|       Programming Language (Front end)        |          REACT         |            https://reactjs.org/                                 | 
|       Programming Language (Front end)        |       TYPESCRIPT       |            https://www.typescriptlang.org/                  | 
|       Programming Language (Back end)         |           JAVA         |            https://dev.java/learn/getting-started-with-java/     | 
|            Java Framework (Back end)          |       SPRING BOOT      |            https://spring.io/projects/spring-boot                 |
| Promise based HTTP client - browser & Node.js |          AXIOS         |            https://axios-http.com/                                 |
|                 Database                      |           SQL          |            https://graphcms.com/                                 |
|               Java SQL Database               |       H2 DATABASE      |            https://www.h2database.com/html/main.html        |
|  Utility-first CSS Framework                  |      TAILWIND CSS      |            https://tailwindcss.com/                                 | 
|  Tool for transforming CSS with JavaScript    |         POST CSS       |            https://postcss.org/                                 | 
|        Tool to build frontend faster          |         VITE.JS        |            https://vitejs.dev/                                 |
|   API platform for building and using APIs    |         POSTMAN        |            https://www.postman.com/                                 |
|              Deploy Project                   |       HEROKU CLI       |            https://www.heroku.com/                                 |
<br>

<div align = 'center'>
  <h3>Backend | API</h3>
  <img height =' 100px ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"/>
  <img height =' 100px ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"/>
  <br>
  <h3>Database</h3>
  <img height =' 100px ' src="./src/assets/project/logo/graphcms_logo.png"/>
  <br>
  <h3>IDE</h3>
  <img height =' 100px ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <img height =' 100px ' src="https://spring.io/images/logo-spring-tools-4-c5e3ea301ba9d85444ef244449335be3.svg" />
  <br>
  <h3>UX/UI</h3>
  <img height =' 100px ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
  <br>
  <h3>Frontend</h3>
  <img width =' 100px ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
  <img width =' 100px ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
  <img height =' 100px ' src="./frontend/src/assets/project/logo/vite_logo.svg"/>
  <br>
  <h3>Deploy</h3>
  <img width =' 100px ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" />
  <br>
</div>

 <div id="route">
<h2> 🔎 Route </h2>

<ol>
    <li>Part 1 - Installing tools
      <ul>
        <li>Build the project prototype: https://www.figma.com/file/R7jageEKLtZ2fhA7HvEP8Z/DSMeta?node-id=0%3A1</li>
        <li>Install VS Code (IDE), Spring Tool Suite (IDE)</li>
        <li>Install VS Code extensions: IntelliCode, ESLint, JSX HTML <tags/> </li>
        <li>Create a Github repository</li>
      </ul>
    </li>
    <br>
    <li>Part 2 - Static Front End
      <ul>
        <li>Create a new React project: yarn create vite frontend --template react-ts</li>
        <li>Static layout</li>
        <li>React components</li>
        <li>DatePicker</li>
        <li>React Hook useState</li>
      </ul>
    <br>
    <li>Part 3 - Back End</li>
      <ul>  
        <li>Create a new Spring Boot project at Spring Initializr:<br>
            * Spring Web<br>
            * Spring Data JPA<br>
            * H2 Database<br>
            * Spring Security<br>
        </li>
        <li>Open project at Spring Toll Suite 4 (STS)</li>
        <li>Modify pom.xml:<br>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-resources-plugin</artifactId>
                <version>3.1.0</version><!--$NO-MVN-MAN-VER$ -->
            </plugin>
        </li>
        <li>Update project: Project (right button) > Maven > Update Project (force update)</li>
        <li>Modeling: entities and relationships</li>
        <li>Database: creation and migrations</li>
        <li>Database seed</li>
        <li>Data listing</li>
        <li>REST API</li>
        <li>SMS integration</li>
      </ul>
    </li>
    <br>
    <li>Part 4 - Integration and Deployment
      <ul>
        <li>Integrate Front end and Back end</li>
        <li>Requests with axios</li>
        <li>React Hook useEffect</li>
        <li>Query parameters</li>
        <li>Cloud deployment</li>
      </ul> 
    </li> 
</ol>
</div>