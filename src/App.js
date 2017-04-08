import React, { Component } from 'react';
import './App.css';

var Person = {  
  Name : "Bartosz Ciurla",
  Position: "developer",
  Experience : 2,
  Skills: [
    { Key: "ProgrammingLanguages",  Value: "C#" },
    { Key: "Databases", Value: "Ms SQL Server, Oracle, TSQL, NoSql"},
    { Key: "Web", Value: "ASP.NET MVC 4.5 +, HTML 5, CSS3, Bootstrap, Kendo with Razor, jQuery, JavaScript, AngularJS with SPA, AJAX, WebApi" },
    { Key: "Others", Value: "Entity Framework 6+, WinForms, WCF, WPF, XAML, Windows phone 8.1 and UWP, SVN, GIT, Scrum" }
  ],
  ProfessionalExperience: [
    {
      NameOfApp: "Phoenix/web service",
      ProjectDuration: "three months",
      Technologies: "WebApi, Angularjs, Entity Framework 6, TSQL",
      RoleInTheProject: "architecture design, development, testing, implementation",
      Branch: "car dealership"
    },
    {
      NameOfApp: "IPH/web application",
      ProjectDuration: "six months",
      Technologies: "ASP.NET MVC 4.5",
      RoleInTheProject: "creation, maintenance, implementation",
      Branch: "food trading platform for: Piotr i Paweł and others"
    },
    {
      NameOfApp: "DMS Completis",
      ProjectDuration: "two years",
      Technologies: "Visual Basic, C#, WinForms, AdoNet, TSQL",
      RoleInTheProject: "maintenance, implementation",
      Branch: "management system for a car dealership brands : Renault, Dacia"
    }
  ],
  WorkExperience: [
    { Key: "07.2014 – 10.2016", Value: "Developer, Tema komputer"},
    { Key: "10.2016 – now", Value: "Developer, Iteo"}
  ],
  Education: [
    { Key: "2016 - now", Value: "University of Bielsko-Biała"},
    { Key: "2012 - 2016", Value: "University of Bielsko-Biała"}
  ]
}

const Header =() =>{
  return(
    <img className="img-responsive center-block page-header-image-normal"/>
  )
}

const PersonalData = (props) => {
  return(
     <div className="row section-margin-top-before">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <img className="photo-placeholder-medium"/>
        </div>
        <div className="col-md-6 cols-sm-6 col-xs-6 text-right">
          <h1>
            {props.Name}
          </h1>
          <h4 className="base-color">
            position {props.Position}
          </h4>
          <h6>
            {props.Experience} years of experience
          </h6>
        </div>
      </div>
  )
}

const ListHeader = (props) => {
  return(
    <div>
      <h2 className="section-header base-color text-uppercase">
        <strong>
          {props.Header}
        </strong>
      </h2>
    </div>    
  )
} 

class List extends Component{
  render(){
    return(
      <div className="section-margin-top-before">
        <ListHeader Header={this.props.Header}/>
        <div>
          {this.props.List.map((item,index) => <ListDetail key={index} Header={item.Key} Value={item.Value}/>)}
        </div>
      </div>
    )
  }
}

const ListDetail = (props) =>{
  return(
    <div className="row">
      <h4 className="col-md-4">
        <strong className="primary-color">
          {props.Header}
        </strong>
      </h4>
      <h4 className="col-md-8">
        <strong>
          {props.Value}
        </strong>
      </h4>
    </div>
  )
}

class SimpleList extends Component{
  render(){
    return(
       <div className="section-margin-top-before">
        <ListHeader Header={this.props.Header}/>
        <div>
         
        </div>
      </div>
    )
  }
  
}


class App extends Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="container">
          <Header/>       
          <PersonalData Name={Person.Name} Position={Person.Position} Experience={Person.Experience} />
          <List Header={"it skills"} List={Person.Skills}/>
          <SimpleList Header={"professional experience - selected projects"} />
          <List Header={"work experience"} List={Person.WorkExperience}/>
          <List Header={"education"} List={Person.Education}/>
        </div>
      </div>      
    )                 
  }
}

export default App;
