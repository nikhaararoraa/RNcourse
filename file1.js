//StudentInfo.js
//Function Component
import react from 'react';

const StudentInfo =(props)=>{
    return (
        <div>
            <h3>Details </h3>
            <h5>Student Name:{props.studentName}</h5>
            <h5>Student Age:{props.studentAge}</h5>
            <h5>Student Grade:{props.studentGrade}</h5>
        </div>
    );

};

export default StudentInfo;

//Class Component

const StudentInfo extend React.Component(){
    render(){
        return(
            <div>
            <h3>Details </h3>
            <h5>Student Name:{this.props.studentName}</h5>
            <h5>Student Age:{this.props.studentAge}</h5>
            <h5>Student Grade:{this.props.studentGrade}</h5>

            </div>
        );
    }
    
}



//App.js

import StudentInfo from './StudentInfo';

export default function App() {
  return (
    <div>
      <StudentInfo studentName='Nikhar' studentAge={20} studentGrade="A"/>
    </div>
  );
}
