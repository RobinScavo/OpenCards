import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as classActions from '../../store/classrooms'


const EditClass = () => {
//     const dispatch = useDispatch();

//     const teacher_class_id = useSelector(state => state.session.user.classrooms_id)
//     dispatch(classActions.getRoom(teacher_class_id))

//     const teacherId = useSelector(state => state.session.user.id);
//     let student_info = useSelector(state => state.classroom.room.students)
//     let classroom_info = useSelector(state => state.classroom.room)

//     const [studentState, updateStudentState] = useState(student_info)
//     const [newStudents, updateNewStudents] = useState([])
//     const [password, updatePassword] = useState('')
//     const [className, setClassName] = useState(classroom_info.name)


// //     let className
// //     let password
// //     let loaded
// //     let updateClassName
// //     let addRow
  
// //     let names
// //     let updateNames
// //     let removeName
    

//     const updateNames = (e) => {
//         let temp_name = [...names]
//         temp_name[e.target.id] = e.target.value
//         setNames(temp_name)
//         // console.log(names)
//     }

//     const updateClassName = (e) => {
//         setClassName(e.target.value)
//     }

//     const removeName = (e) => {
//         e.preventDefault()
//         const removeIndex = e.target.id

//         setNames(names.splice(removeIndex, 1))
//         // console.log(names)
//     }

//     const setPassword = (e) => {
//         setPassword(e.target.value)
//     }

//     const addRow = (e) => {
//         e.preventDefault()
//         setNames([...names, ''])
//         // console.log(names)
//     }



// //     const generateList = () => {
// //         return names.map((el, i) => (
// //             <label>
// //                     Student Name 
// //                     <input id={i} type='text' onChange={updateNames} value={el || ''} placeholder='Charlie R.' />
// //                     <button onClick={removeName}>Remove Student</button>
// //             </label>
            
// //         ))
// //     }

// //     const handleSubmitEdit = async (e) => {
// //         e.preventDefault()

// //         let classroomData = {
// //             'name': className,
// //             'password': password
// //         }
        

// //         await dispatch(classActions.editRoom(teacher_class_id, classroomData))

// //         for (let name in names) {
// //             let studentData = {
// //                 'name': name,
// //                 'classroom_id': teacher_class_id
// //             }

// //             await fetch('/api/students/', {
// //                 method: 'PUT',
// //                 headers: { "Content-Type": "application/json"},
// //                 body: JSON.stringify(studentData),
// //             })

// //         }


// //     }

//     return (
//         loaded && (<div>

//             <h1>Create class</h1>
    
//             <form className='student-creation'> 
//                 <label>
//                     Class Name
//                     <input type='text' value={className} placeholder="Molly's Class" onChange={updateClassName} />
//                 </label>
//                 {generateList()}
//                 <button className='add-row' onClick={addRow}>Add Row</button>
//                 <label>
//                     Secret password for class login 
//                     <input type='text' onClick={setPassword} placeholder='Must change me' />
//                 </label>
                
//                 <button onClick={handleSubmitEdit}>Edit Your Class!</button>
            
//             </form>
//         </div>
//         )
//     )

    return <div>Test</div>
}

export default EditClass