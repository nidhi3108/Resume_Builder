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
    const [sectionTitle, setsectionTitle] = useState(
        sections[Object.keys(sections)[0]]
    )
    const [values, setValues] = useState({
        name:activeInformation?.detail?.name||"",
        title:activeInformation?.detail?.title||"",
       linkedin:activeInformation?.detail?.linkedin||"",
       github:activeInformation?.detail?.github||"",
       phone:activeInformation?.detail?.phone||"",
       email:activeInformation?.detail?.email||"",

})

const handlePonitUpdate=(value,index)=>{
    const tempValues={...values};
    tempValues.points[index]=value;
    setValues(tempValues);
}
    
    

//workexpbody
const workExpBody=(
        <div className={styles.detail}>
        <div className={styles.row}>
             <InputControl
             label="Title"
             placeholder="Enter title eg. Frontend developer"
             defaultValue={values.title}
             onChange={(event)=>setValues(prev=>({...prev,title:event.target.value}))}
             />
             
             <InputControl
             label="Company Name"
             placeholder="Enter company name eg. paytm"
             defaultValue={values.companyName}
             onChange={(event)=>setValues(prev=>({...prev,companyName:event.target.value}))}
             />

        </div>
        <div className={styles.row}>
             <InputControl
             label="Certificate Link"
             placeholder="Enter Certificate Link"
             defaultValue={values.certificationLink}
             onChange={(event)=>setValues(prev=>({...prev,certificationLink:event.target.value}))}
             />
             <InputControl
             label="Location"
             placeholder="Enter location eg. Lucknow"
             defaultValue={values.location}
             onChange={(event)=>setValues(prev=>({...prev,location:event.target.value}))}
             />

        </div>
        <div className={styles.row}>
             <InputControl
             label="Start Date"
             type='date'
             placeholder="Enter Start date of work"
             defaultValue={values.startDate}
             onChange={(event)=>setValues(prev=>({...prev,startDate:event.target.value}))}
             />
             
             <InputControl
             label="End Date"
             type='date'
             placeholder="Enter end date of work"
             defaultValue={values.endDate}
             onChange={(event)=>setValues(prev=>({...prev,endDate:event.target.value}))}
             />     
        </div>
        <div className={styles.column}>
            <label className={styles.label}>Enter work description</label>
            <InputControl placeholder="Line 1"
            defaultValue={values.points?values.points[0]:""}
            onChange={(event)=>handlePonitUpdate(event.target.value,0)}
            />
            <InputControl placeholder="Line 2"
            defaultValue={values.points?values.points[1]:""}
            onChange={(event)=>handlePonitUpdate(event.target.value,1)}
            />
            <InputControl placeholder="Line 3"
            defaultValue={values.points?values.points[2]:""}
            onChange={(event)=>handlePonitUpdate(event.target.value,2)}
            />
        </div>
        </div>
    )
    
//projectbody
 const projectBody=(
        <div className={styles.detail}>
        <div className={styles.row}>
             <InputControl
             label="Title"
             placeholder="Enter title eg. Chat application"
             onChange={(event)=>setValues(prev=>({...prev,title:event.target.value}))}
             defaultValue={values.title}/>
        </div>
        <InputControl
            label="Overview"
            placeholder="Enter Basic overview of project"
            onChange={(event)=>setValues(prev=>({...prev,overview:event.target.value}))}
            defaultValue={values.overview}
            />
        <div className={styles.row}>
             <InputControl
             label="Deployed Link"
             placeholder="Enter deployed link of project"
             onChange={(event)=>setValues(prev=>({...prev,link:event.target.value}))}
             defaultValue={values.link}
             />
             <InputControl
             label="Github Link"
             placeholder="Enter github link of project"
             onChange={(event)=>setValues(prev=>({...prev,github:event.target.value}))}
             defaultValue={values.github}
             />
        </div>
        <div className={styles.column}>
            <label className={styles.label}>Enter Project description</label>
            <InputControl placeholder="Line 1"
             onChange={(event)=>handlePonitUpdate(event.target.value,0)}
             defaultValue={values.points?values.points[0]:""}
             />
            <InputControl placeholder="Line 2"
             onChange={(event)=>handlePonitUpdate(event.target.value,1)}
             defaultValue={values.points?values.points[1]:""}
             />
            <InputControl placeholder="Line 3"
             onChange={(event)=>handlePonitUpdate(event.target.value,3)}
             defaultValue={values.points?values.points[2]:""}
             />
        </div>
        </div>
           
         )
           
//educationbody
const educationBody=(
               <div className={styles.detail}>
        <div className={styles.row}>
             <InputControl
             label="Title"
             placeholder="Enter title eg. B.tech"
             onChange={(event)=>setValues(prev=>({...prev,title:event.target.value}))}
             defaultValue={values.title}
             />
        </div>
        <InputControl
            label="College/School Name"
            placeholder="Enter name of your college school"
            onChange={(event)=>setValues(prev=>({...prev,college:event.target.value}))}
            defaultValue={values.college}
        />
 
            <div className={styles.row}>
             <InputControl
             label="Start Date"
             type='date'
             placeholder="Enter Start date of this education"
             onChange={(event)=>setValues(prev=>({...prev,startDate:event.target.value}))}
             defaultValue={values.startDate}
             />
             
             <InputControl
             label="End Date"
             type='date'
             placeholder="Enter end date this education"
             onChange={(event)=>setValues(prev=>({...prev,endDate:event.target.value}))}
             defaultValue={values.endDate}
             />     
        </div>
        </div>
    )
    
//basicinfo
const basicInfoBody=(
    <div className={styles.detail}>
    <div className={styles.row}>
         <InputControl
         label="Name"
         placeholder="Enter your full name eg. Nidhi Verma"
         onChange={(event)=>setValues(prev=>({...prev,name:event.target.value}))}
         defaultValue={values.name}
         />
         <InputControl
         label="Title"
         placeholder="Enter your title eg. Frontend developer"
         onChange={(event)=>setValues(prev=>({...prev,title:event.target.value}))}
         defaultValue={values.title}
         />
    </div>
    <div className={styles.row}>
         <InputControl
         label="Linkedin Link"
         defaultValue={values.linkedin}
         onChange={(event)=>setValues(prev=>({...prev,linkedin:event.target.value}))}
         placeholder="Enter your linkedin profile Link"/>
         <InputControl
         label="Github Link"
         defaultValue={values.github}
         onChange={(event)=>setValues(prev=>({...prev,github:event.target.value}))}
         placeholder="Enter your github profile Link"/>

    </div>
    <div className={styles.row}>
         <InputControl
         label="Email"
         defaultValue={values.email}
         onChange={(event)=>setValues(prev=>({...prev,email:event.target.value}))}
         placeholder="Enter your email"/>
         
         <InputControl
         label="phone"
         defaultValue={values.phone}
         onChange={(event)=>setValues(prev=>({...prev,phone:event.target.value}))}
         placeholder="Enter your phone number"/>     
    </div>
    </div>
)

//achievemnet body
const achievementsBody=(
    <div className={styles.detail}>
    <div className={styles.column}>
        <label className={styles.label}>List your achievemnets</label>
         <InputControl placeholder="Line 1"
            defaultValue={values.points?values.points[0]:""}
            onChange={(event)=>handlePonitUpdate(event.target.value,0)}
            />
            <InputControl placeholder="Line 2"
            defaultValue={values.points?values.points[1]:""}
            onChange={(event)=>handlePonitUpdate(event.target.value,1)}
            />
            <InputControl placeholder="Line 3"
            defaultValue={values.points?values.points[2]:""}
            onChange={(event)=>handlePonitUpdate(event.target.value,2)}
            />
            <InputControl placeholder="Line 4"
            defaultValue={values.points?values.points[3]:""}
            onChange={(event)=>handlePonitUpdate(event.target.value,3)}
            />
    </div>
    </div>
)

//summaryBody
const summaryBody=(
    <div className={styles.detail}>
         <InputControl
         label="Summary"
         defaultValue={values.summary}
         onChange={(event)=>setValues(prev=>({...prev,summary:event.target.value}))}
         placeholder="Enter objective/summary"/>
    </div>
)


//other
const otherBody=(
    <div className={styles.detail}>
         <InputControl
         label="Other"
         onChange={(event)=>setValues(prev=>({...prev,other:event.target.value}))}
         defaultValue={values.other}
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


 //save button
 const handleSubmission=()=>{
    console.log(values);
 }

 useEffect(()=>{
    const activeInfo=information[sections[activeSectionKey]];
     setActiveInformation(activeInfo)
    setsectionTitle(sections[activeSectionKey])
    setValues({
        name:activeInformation?.detail?.name||"",
        overview:activeInformation?.detail ? activeInformation?.detail[0]?.overview||"" : "",
        link:activeInformation?.detail ? activeInformation?.detail[0]?.link||"" : "",
        certificationLink:activeInformation?.detail ? activeInformation?.detail[0]?.certificationLink||"" : "",
        startDate:activeInformation?.detail ? activeInformation?.detail[0]?.startDate||"" : "",
        endDate:activeInformation?.detail ? activeInformation?.detail[0]?.endDate||"" : "",
        points:activeInformation?.detail ? activeInformation?.detail[0]?.points ? [...activeInformation?.detail[0]?.points]:"" : activeInformation?.points?[...activeInformation.points]: "",
        title:activeInformation?.detail?activeInformation?.detail[0]?.title||"":activeInformation?.detail?.title||"",
       linkedin:activeInformation?.detail?.linkedin||"",
       github:activeInformation?.detail?activeInformation?.detail[0]?.github||"":activeInformation?.detail?.github||"",
       phone:activeInformation?.detail?.phone||"",
       email:activeInformation?.detail?.email||"",
    })
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
        <InputControl label="Title" placeholder="Enter section title" value={sectionTitle} onChange={(event)=>setsectionTitle(event.target.value)}/>
        
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

        <button onClick={handleSubmission}>Save</button>
        </div>
    </div>
  )
}

export default Editor