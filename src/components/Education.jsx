

const edu=[

    {
      std:10,
      des: "Saraswathi matriculation Higher Secondary School, Chennai",
      marks: 83.6,
      year:"2018-2019"
  
    },
  
    {
      std:12,
      des: "Zion matriculation Higher Secondary School, Chennai",
      marks: 88.8,
      year:"2020-2021"
  
    },
  
    {
      std:"Bachelor in Computer Science Engineering",
      des: "SRM Valliammai Engineering College, Chennai",
      marks: "7.9 CGPA",
      year:"2021-present"
  
    },
    
  ]

edu.forEach(Education);


function Education(){
    return(
        
        <div className="education">
            <h2>Education</h2>
            <EduCard t={edu}/>
            
       
        </div>
    );
}
export default Education