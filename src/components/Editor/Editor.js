import React, { useEffect, useState } from 'react'
import InputControl from '../inputControl/InputControl'
import styles from './Editor.module.css'
const Editor = (props) => {
    const sections=props.sections
    const information=props.information


    const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0])
    const [activeInformation, setActiveInformation] = useState(
        information[sections[Object.keys(sections)[0]]]
    )

//workexpbody
    const workExpBody=(
        <div className={styles.detail}>
        <div className={styles.row}>
             <InputControl
             label="Title"
             placeholder="Enter title eg. Frontend developer"/>
             <InputControl
             label="Company Name"
             placeholder="Enter company name eg. paytm"/>

        </div>
        <div className={styles.row}>
             <InputControl
             label="Certificate Link"
             placeholder="Enter Certificate Link"/>
             <InputControl
             label="Location"
             placeholder="Enter location eg. Lucknow"/>

        </div>
        <div className={styles.row}>
             <InputControl
             label="Start Date"
             type='date'
             placeholder="Enter Start date of work"/>
             
             <InputControl
             label="End Date"
             type='date'
             placeholder="Enter end date of work"/>     
        </div>
        <div className={styles.column}>
            <label className={styles.label}>Enter work description</label>
            <InputControl placeholder="Line 1"/>
            <InputControl placeholder="Line 2"/>
            <InputControl placeholder="Line 3"/>
        </div>
        </div>
    )

//projectbody
    const projectBody=(
        <div className={styles.detail}>
        <div className={styles.row}>
             <InputControl
             label="Title"
             placeholder="Enter title eg. Chat application"/>
        </div>
        <InputControl
            label="Overview"
            placeholder="Enter Basic overview of project"
        />
        <div className={styles.row}>
             <InputControl
             label="Deployed Link"
             placeholder="Enter deployed link of project"/>
             <InputControl
             label="Github Link"
             placeholder="Enter github link of project"/>
        </div>
        <div className={styles.column}>
            <label className={styles.label}>Enter Project description</label>
            <InputControl placeholder="Line 1"/>
            <InputControl placeholder="Line 2"/>
            <InputControl placeholder="Line 3"/>
        </div>
        </div>
    )

//educationbody
    const educationBody=(
        <div className={styles.detail}>
        <div className={styles.row}>
             <InputControl
             label="Title"
             placeholder="Enter title eg. B.tech"/>
        </div>
        <InputControl
            label="College/School Name"
            placeholder="Enter name of your college school"
        />
 
            <div className={styles.row}>
             <InputControl
             label="Start Date"
             type='date'
             placeholder="Enter Start date of this education"/>
             
             <InputControl
             label="End Date"
             type='date'
             placeholder="Enter end date this education"/>     
        </div>
        </div>
    )
    
//basicinfo
const basicInfoBody=(
    <div className={styles.detail}>
    <div className={styles.row}>
         <InputControl
         label="Name"
         placeholder="Enter your full name eg. Nidhi Verma"/>
         <InputControl
         label="Title"
         placeholder="Enter your title eg. Frontend developer"/>
    </div>
    <div className={styles.row}>
         <InputControl
         label="Linkedin Link"
         placeholder="Enter your linkedin profile Link"/>
         <InputControl
         label="Github Link"
         placeholder="Enter your github profile Link"/>

    </div>
    <div className={styles.row}>
         <InputControl
         label="Email"
         placeholder="Enter your email"/>
         
         <InputControl
         label="phone"
         placeholder="Enter your phone number"/>     
    </div>
    </div>
)

//achievemnet body
const achievementsBody=(
    <div className={styles.detail}>
    <div className={styles.column}>
        <label className={styles.label}>List your achievemnets</label>
        <InputControl placeholder="Line 1"/>
        <InputControl placeholder="Line 2"/>
        <InputControl placeholder="Line 3"/>
        <InputControl placeholder="Line 4"/>
    </div>
    </div>
)

//summaryBody
const summaryBody=(
    <div className={styles.detail}>
         <InputControl
         label="Summary"
         placeholder="Enter objective/summary"/>
    </div>
)


//other
const otherBody=(
    <div className={styles.detail}>
         <InputControl
         label="Other"
         placeholder="Enter something"/>
    </div>
)

 //sb fom ki body alg alg hongi to uske liy function bna lenge
 const generateBody=()=>{
     switch(sections[activeSectionKey]){
        case sections.basicInfo:
            return basicInfoBody;
        case sections.workExp:
            return workExpBody;
        case sections.project:
            return projectBody;
        case sections.education:
            return educationBody;
        case sections.achievements:
            return achievementsBody;
        case sections.summary:
            return summaryBody;
        case sections.other:
            return otherBody;
        default:
            return null;    
     }
 }


 useEffect(()=>{
       setActiveInformation(information[sections[activeSectionKey]])
 },[activeSectionKey])


  return (
    <div className={styles.container}>
        <div className={styles.header}>
            {/* object p hm map ni lga skte isiliye phle hm sari keys nikal lenge niche method se then un keys p hm map lgayemge  */}
          {Object.keys(sections)?.map((key)=>(
          <div 
          className={`${styles.section} ${activeSectionKey===key?styles.active:""}`} 
          key={key}
          onClick={()=> setActiveSectionKey(key)}>
           {sections[key]}
           </div>
            ))}    
        </div>


        <div className={styles.body}>
        <InputControl label="Title" placeholder="Enter section title"/>
        
        <div className={styles.chips}>
               { activeInformation?.details?
                activeInformation?.details?.map((item,index)=>(
            <div className={styles.chip} key={item.title+index}>
                <p>{sections[activeSectionKey]} {index+1} X</p>
                {/* <X/> */}
            </div>
              ))
              :" " }
            {/* <div className={styles.chip}>
                <p>Project 2 X</p>
                <X/>
            </div> */}
        </div>





        {generateBody()}
        </div>
    </div>
  )
}

export default Editor