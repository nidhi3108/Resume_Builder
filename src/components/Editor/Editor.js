import React, { useEffect, useState } from 'react'
import InputControl from '../InputControl/InputControl'
import styles from './Editor.module.css'
import  {X} from "react-feather";


const Editor = (props) => {
    const sections=props.sections
    const information=props.information


    const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0])

    const [activeInformation, setActiveInformation] = useState(
        information[sections[Object.keys(sections)[0]]]
    )

    const [activeDetailIndex, setActiveDetailIndex] = useState(0);


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

});

const handlePonitUpdate=(value,index)=>{
    const tempValues={...values};
    if(!Array.isArray(tempValues.points)) tempValues.points =[];
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
             value={values.title}
             onChange={(event)=>setValues(prev=>({...prev,title:event.target.value}))}
             />
             
             <InputControl
             label="Company Name"
             placeholder="Enter company name eg. paytm"
             value={values.companyName}
             onChange={(event)=>setValues(prev=>({...prev,companyName:event.target.value}))}
             />

        </div>
        <div className={styles.row}>
             <InputControl
             label="Certificate Link"
             placeholder="Enter Certificate Link"
             value={values.certificationLink}
             onChange={(event)=>setValues(prev=>({...prev,certificationLink:event.target.value}))}
             />
             <InputControl
             label="Location"
             placeholder="Enter location eg. Lucknow"
             value={values.location}
             onChange={(event)=>setValues(prev=>({...prev,location:event.target.value}))}
             />

        </div>
        <div className={styles.row}>
             <InputControl
             label="Start Date"
             type='date'
             placeholder="Enter Start date of work"
             value={values.startDate}
             onChange={(event)=>setValues(prev=>({...prev,startDate:event.target.value}))}
             />
             
             <InputControl
             label="End Date"
             type='date'
             placeholder="Enter end date of work"
             value={values.endDate}
             onChange={(event)=>setValues(prev=>({...prev,endDate:event.target.value}))}
             />     
        </div>
        <div className={styles.column}>
            <label className={styles.label}>Enter work description</label>
            <InputControl placeholder="Line 1"
            value={values.points?values.points[0]:""}
            onChange={(event)=>handlePonitUpdate(event.target.value,0)}
            />
            <InputControl placeholder="Line 2"
            value={values.points?values.points[1]:""}
            onChange={(event)=>handlePonitUpdate(event.target.value,1)}
            />
            <InputControl placeholder="Line 3"
            value={values.points?values.points[2]:""}
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
             value={values.title}/>
        </div>
        <InputControl
            label="Overview"
            placeholder="Enter Basic overview of project"
            onChange={(event)=>setValues(prev=>({...prev,overview:event.target.value}))}
            value={values.overview}
            />
        <div className={styles.row}>
             <InputControl
             label="Deployed Link"
             placeholder="Enter deployed link of project"
             onChange={(event)=>setValues(prev=>({...prev,link:event.target.value}))}
             value={values.link}
             />
             <InputControl
             label="Github Link"
             placeholder="Enter github link of project"
             onChange={(event)=>setValues(prev=>({...prev,github:event.target.value}))}
             value={values.github}
             />
        </div>
        <div className={styles.column}>
            <label className={styles.label}>Enter Project description</label>
            <InputControl placeholder="Line 1"
             onChange={(event)=>handlePonitUpdate(event.target.value,0)}
             value={values.points?values.points[0]:""}
             />
            <InputControl placeholder="Line 2"
             onChange={(event)=>handlePonitUpdate(event.target.value,1)}
             value={values.points?values.points[1]:""}
             />
            <InputControl placeholder="Line 3"
             onChange={(event)=>handlePonitUpdate(event.target.value,3)}
             value={values.points?values.points[2]:""}
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
             value={values.title}
             />
        </div>
        <InputControl
            label="College/School Name"
            placeholder="Enter name of your college school"
            onChange={(event)=>setValues(prev=>({...prev,college:event.target.value}))}
            value={values.college}
        />
 
            <div className={styles.row}>
             <InputControl
             label="Start Date"
             type='date'
             placeholder="Enter Start date of this education"
             onChange={(event)=>setValues(prev=>({...prev,startDate:event.target.value}))}
             value={values.startDate}
             />
             
             <InputControl
             label="End Date"
             type='date'
             placeholder="Enter end date this education"
             onChange={(event)=>setValues(prev=>({...prev,endDate:event.target.value}))}
             value={values.endDate}
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
         value={values.name}
         />
         <InputControl
         label="Title"
         placeholder="Enter your title eg. Frontend developer"
         onChange={(event)=>setValues(prev=>({...prev,title:event.target.value}))}
         value={values.title}
         />
    </div>
    <div className={styles.row}>
         <InputControl
         label="Linkedin Link"
         value={values.linkedin}
         onChange={(event)=>setValues(prev=>({...prev,linkedin:event.target.value}))}
         placeholder="Enter your linkedin profile Link"/>
         <InputControl
         label="Github Link"
         value={values.github}
         onChange={(event)=>setValues(prev=>({...prev,github:event.target.value}))}
         placeholder="Enter your github profile Link"/>

    </div>
    <div className={styles.row}>
         <InputControl
         label="Email"
         value={values.email}
         onChange={(event)=>setValues(prev=>({...prev,email:event.target.value}))}
         placeholder="Enter your email"/>
         
         <InputControl
         label="phone"
         value={values.phone}
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
            value={values.points?values.points[0]:""}
            onChange={(event)=>handlePonitUpdate(event.target.value,0)}
            />
            <InputControl placeholder="Line 2"
            value={values.points?values.points[1]:""}
            onChange={(event)=>handlePonitUpdate(event.target.value,1)}
            />
            <InputControl placeholder="Line 3"
            value={values.points?values.points[2]:""}
            onChange={(event)=>handlePonitUpdate(event.target.value,2)}
            />
            <InputControl placeholder="Line 4"
            value={values.points?values.points[3]:""}
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
         value={values.summary}
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
         value={values.other}
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
    // console.log(values);
    switch(sections[activeSectionKey]){
        case sections.basicInfo:
            {
                const tempDetail={
                    name:values.name,
                    title:values.title,
                    linkedin:values.linkedin,
                    github:values.github,
                    email:values.email,
                    phone:values.phone,
                }
                props.setInformation(prev=>({...prev,[sections.basicInfo]
                    :{...prev[sections.basicInfo],
                        detail:tempDetail,
                        sectionTitle
                    
                    }}))

                    break;
            }
        case sections.workExp:
            {
                const tempDetail={
                    certificationLink:values.certificationLink,
                    title:values.title,
                    startDate:values.startDate,
                    endDate:values.endDate,
                    companyName:values.companyName,
                    location:values.location,
                    points:values.points,
                };

                const tempDetails=[...information[sections.workExp]?.details]
                tempDetails[activeDetailIndex]= tempDetail;

                props.setInformation(prev=>({...prev,[sections.workExp]
                    :{...prev[sections.workExp],
                        details:tempDetail,
                        sectionTitle,

                    }}))
                        
                    break;
            }  

            case sections.project:
            {
                const tempDetail={
                    link:values.link,
                    title:values.title,
                    overview:values.overview,
                    github:values.github,
                    points:values.points,
                }

                const tempDetails=[...information[sections.project]?.details]
                tempDetails[activeDetailIndex]= tempDetail;

                props.setInformation(prev=>({...prev,[sections.project]
                    :{...prev[sections.project],
                        details:tempDetail,
                        sectionTitle,

                    }}))
                        
                    break;
            }  

            case sections.education:
            {
                const tempDetail={
                    title:values.title,
                    college:values.college,
                    startDate:values.startDate,
                    endDate:values.endDate,
                }

                const tempDetails=[...information[sections.education]?.details]
                tempDetails[activeDetailIndex]= tempDetail;

                props.setInformation(prev=>({...prev,[sections.education]
                    :{...prev[sections.education],
                        details:tempDetail,
                        sectionTitle,

                    }}))
                        
                    break;
            }  


            case sections.achievement:
            {
                const tempPoints=values.points;
                props.setInformation(prev=>({...prev,[sections.achievement]
                    :{...prev[sections.achievement],
                        points:tempPoints,
                        sectionTitle,

                    }}))
                        
                    break;
            }
            
            case sections.summary:
            {
                const tempDetail=values.summary;
                props.setInformation(prev=>({...prev,[sections.summary]
                    :{...prev[sections.summary],
                        detail:tempDetail,
                        sectionTitle,

                    }}))
                        
                    break;
            }
            
            case sections.other:
            {
                const tempDetail=values.other;
                props.setInformation(prev=>({...prev,[sections.other]
                    :{...prev[sections.other],
                        detail:tempDetail,
                        sectionTitle,

                    }}))
                        
                    break;
            }
     }
 }

 useEffect(()=>{
    const activeInfo=information[sections[activeSectionKey]];
     setActiveInformation(activeInfo)
    setsectionTitle(sections[activeSectionKey])
    setActiveDetailIndex(0);
    setValues({
        name:activeInfo?.details?.name||"",
        overview:activeInfo?.details ? activeInfo?.details[0]?.overview||"" : "",
        link:activeInfo?.details ? activeInfo?.details[0]?.link||"" : "",
        certificationLink:activeInfo?.details ? activeInfo?.details[0]?.certificationLink||"" : "",
        companyName:activeInfo?.details ? activeInfo?.details[0]?.companyName||"" : "",
        location:activeInfo?.details ? activeInfo?.details[0]?.location||"" : "",
        startDate:activeInfo?.details ? activeInfo?.details[0]?.startDate||"" : "",
        endDate:activeInfo?.details ? activeInfo?.details[0]?.endDate||"" : "",
        points:activeInfo?.details ? activeInfo?.details[0]?.points ? [...activeInfo.details[0]?.points]:"" : activeInfo?.points?[...activeInfo.points]: "",
        title:activeInfo?.details?activeInfo?.details[0]?.title||"":activeInfo?.detail?.title||"",
       linkedin:activeInfo?.details?.linkedin||"",
       github:activeInfo?.details?activeInfo?.details[0]?.github||"":activeInfo?.detail?.github||"",
       phone:activeInfo?.details?.phone||"",
       email:activeInfo?.details?.email||"",
       summary:typeof activeInfo?.detail!=="Object"?activeInfo.detail:"",
       other:typeof activeInfo?.detail!=="Object"?activeInfo.detail:"",
    })
 },[activeSectionKey])

 useEffect(()=>{
  setActiveInformation(information[sections[activeSectionKey]])
 },[information])


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
            <div className={`${styles.chip} ${activeDetailIndex===index?styles.active:""}`} 
            key={item.title+index} 
            onClick={()=>setActiveDetailIndex(index)
            }>
                <p>
                    {sections[activeSectionKey]} {index+1} 
                    </p>
                <X/>
            </div>
              ))
              :" " }
        </div>
        {generateBody()}
        <button onClick={handleSubmission}>Save</button>
        </div>
    </div>
  )
}

export default Editor