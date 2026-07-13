import { useState } from "react";

import DashboardNavbar from "../../components/layout/DashboardNavbar";
import ResumeSidebar from "../../components/resume/ResumeSidebar";
import ResumePreview from "../../components/resume/ResumePreview";
import PersonalInfoForm from "../../components/resume/PersonalInfoForm";

import "./ResumeBuilder.css";

const ResumeBuilder = () => {

const [resumeData,setResumeData]=useState({

fullName:"",
title:"",
email:"",
phone:"",
location:"",
linkedin:"",
github:"",
summary:""

});

const [activeSection, setActiveSection] = useState("personal");


const handleChange=(e)=>{

setResumeData({

...resumeData,

[e.target.name]:e.target.value

});

};
console.log(resumeData);
return(

<>

<DashboardNavbar/>

<div className="resume-builder">

<ResumeSidebar
    activeSection={activeSection}
    setActiveSection={setActiveSection}
/>

<PersonalInfoForm

data={resumeData}

onChange={handleChange}

/>

<ResumePreview

data={resumeData}

/>

</div>

</>

);

};

export default ResumeBuilder;