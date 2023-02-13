import React, { useState } from 'react'
import styles from './Body.module.css'
import {ArrowDown} from 'react-feather'
import Editor from '../Editor/Editor'
const Body = () => {

    const colors=['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6']
    const sections={
      basicInfo: "Basic Info",
      workExp: "Work Experience",
      project: "Project",
      education: "Education",
      achievements: "Achievement",
      summary: "Summary",
      other: "Other",
    }

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]:{
      id:sections.basicInfo,
      title:sections.basicInfo,
      detail:{},
    },
    [sections.workExp]:{
      id:sections.workExp,
      title:sections.workExp,
      details:[{title: "held"}],
    },
    [sections.project]:{
      id:sections.project,
      title:sections.project,
      details:[],
    },
    [sections.education]:{
      id:sections.education,
      title:sections.education,
      details:[]
    },
    [sections.achievements]:{
      id:sections.achievements,
      title:sections.achievements,
      points:[],
    },
    [sections.summary]:{
      id:sections.summary,
      title:sections.summary,
      detail:"",
    },
    [sections.other]:{
    id:sections.other,
      title:sections.other,
      detail:"",
    },
  });



  return (
    <div className={styles.container}>
        <p className={styles.heading}>Resume Builder</p>
        <div className={styles.toolbar}>
        <div className={styles.colors}>
            {
                colors.map((item)=>(
                     <span 
                    key={item}
                    style={{backgroundColor:item}}
                    className={styles.color}
                    />
                ))
            }
        </div>
        <button>Download <ArrowDown/></button>
        </div>
        <div className={styles.main}>
          <Editor sections={sections} information={resumeInformation}/>
        </div>
    </div>
  )
}

export default Body