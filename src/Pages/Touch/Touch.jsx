// import {  Label, TextInput } from 'keep-react'
// import { FaFileAlt } from "react-icons/fa";
// import { FaPlusCircle } from "react-icons/fa";
// // import { useState } from 'react'
// import { Button } from 'keep-react'
// import {   Table } from "keep-react";
// import { CheckBox } from "keep-react";
// import { FiMinusCircle } from "react-icons/fi";


// const Touch = () => {



//     return (
//         <div className="ms-64 me-64 mb-20">
//             <h2 className="text-2xl text-center">Touch Options </h2>
//             <div>
//             <div className="flex flex-col gap-5">
//                 <div className='flex'>
//                     <div>
//                                 <Label htmlFor="#id-17" value=" Please Gives Input" />
//                                 <TextInput
//                                 id="#id-17"
//                                 placeholder=" This is Input Field here. "
//                                 color="gray"
//                                 withBg={true}
//                                 sizing="md"
//                                 type="text"

//                                 addon={<FaFileAlt size={20} color="#5E718D" />}
//                                 addonPosition="left"            
//                                 />
//                         </div>
//                                   <div className='mt-6 '>
//                                                {/* <Button dismiss={add} onDismiss={onDismiss} type="outlineGray" size="sm">                         
//                                                     <FaPlusCircle size={20} color="#5E718D" />
//                                                 </Button>  */}

//                                                <Button  type="outlineGray" size="sm">                         
//                                                     <FaPlusCircle size={20} color="#5E718D" />
//                                                 </Button> 
//                                   </div>

//                          </div>
 
//                        <div>
                           
//                             <div>
//                             <Table showCheckbox={true} striped={true}>

//                                         <Table.Head>
//                                             <Table.HeadCell className="min-w-[344px]">
//                                             <p className="text-body-6 font-medium text-metal-400">Complete All Task</p>
//                                             </Table.HeadCell>
//                                             <Table.HeadCell className="min-w-[160px]">Clear Completed</Table.HeadCell>
                                            
                                            
//                                             <Table.HeadCell className="min-w-[100px]" />
//                                         </Table.Head>
//                                         <Table.Body className="divide-gray-25 divide-y">
//                                             <Table.Row className="bg-white">
//                                                 <Table.Cell>
//                                                     <div className="flex items-center gap-3">
//                                                         <div className="flex items-center gap-4">
//                                                             <div className="flex items-center gap-2">
//                                                                 <div>
//                                                                     <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Static Next Plan</p>
                                                                    
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </Table.Cell>
//                                                 <Table.Cell>
                                                      
                                                        
//                                                             <div className='flex'>
//                                                                 <div >
//                                                                    <CheckBox
//                                                                         size="md"
//                                                                         variant="circle"
//                                                                         label=""
//                                                                         id="two"
//                                                                         name="countries"
//                                                                         color="success"
//                                                                         // handleChecked={handleChecked}
//                                                                     />
//                                                                </div>
//                                                                 <div>
//                                                                    <CheckBox
//                                                                         size="md"
//                                                                         variant="circle"
//                                                                         label=""
//                                                                         id="two"
//                                                                         name="countries"
//                                                                         color="warning"
//                                                                         // handleChecked={handleChecked}
//                                                                     />
//                                                                 </div>
//                                                                  <div>
//                                                                      <CheckBox
//                                                                         size="md"
//                                                                         variant="circle"
//                                                                         label=""
//                                                                         id="two"
//                                                                         name="countries"
//                                                                         color="info"
//                                                                         // handleChecked={handleChecked}
//                                                                     />              
//                                                                 </div>
//                                                                 <div className='m-1 '>

                                                            
                                                                                                           
//                                                                        <FiMinusCircle 
//                                                                         //   onDismiss={onDismiss}
//                                                                         //   dismiss={showAlert}
//                                                                           rounded={true}
//                                                                             withBorder={true}
//                                                                             withBorderAccent={true}
//                                                                             color='warning'
//                                                                              id="two"
//                                                                              variant="circle"
//                                                                       />            
//                                                                 </div>
                        
//                                                             </div>
                                              
//                                                 </Table.Cell>
//                                             </Table.Row>
//                                             <Table.Row className="bg-white">
//                                                 <Table.Cell>
//                                                     <div className="flex items-center gap-3">
//                                                         <div className="flex items-center gap-4">
//                                                             <div className="flex items-center gap-2">
//                                                                 <div>
//                                                                     <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Static Next Plan 2 </p>
                                                                    
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </Table.Cell>
//                                                 <Table.Cell>
//                                                 <div className='flex'>
//                                                                 <div >
//                                                                    <CheckBox
//                                                                         size="md"
//                                                                         variant="circle"
//                                                                         label=""
//                                                                         id="two"
//                                                                         name="countries"
//                                                                         color="success"
//                                                                         // handleChecked={handleChecked}
//                                                                     />
//                                                                </div>
//                                                                 <div>
//                                                                    <CheckBox
//                                                                         size="md"
//                                                                         variant="circle"
//                                                                         label=""
//                                                                         id="two"
//                                                                         name="countries"
//                                                                         color="warning"
//                                                                         // handleChecked={handleChecked}
//                                                                     />
//                                                                 </div>
//                                                                  <div>
//                                                                      <CheckBox
//                                                                         size="md"
//                                                                         variant="circle"
//                                                                         label=""
//                                                                         id="two"
//                                                                         name="countries"
//                                                                         color="info"
//                                                                         // handleChecked={handleChecked}
//                                                                     />              
//                                                                 </div>
//                                                                  <div className='m-1 '>
                                                                                                           
//                                                                      <FiMinusCircle 
//                                                                      color='warning'
//                                                                      id="two"
//                                                                      variant="circle"
//                                                                      />            
//                                                                 </div>
//                                                             </div>   
//                                                 </Table.Cell>
//                                             </Table.Row>

//                                         </Table.Body>
//                               </Table>
//                             </div>
//                             <div className='flex items-center gap-64 mt-10'>
//                                 <div>
//                                         <p>2 Task left </p>
//                                 </div>
//                                 <div className='flex items-center gap-10'>
//                                         <p>All</p>
//                                         <p>Complete</p>
//                                         <p>InComplete</p>
//                                         <div >
//                                                                    <CheckBox
//                                                                         size="md"
//                                                                         variant="circle"
//                                                                         label=""
//                                                                         id="two"
//                                                                         name="countries"
//                                                                         color="success"
//                                                                         // handleChecked={handleChecked}
//                                                                     />
//                                                                </div>
//                                                                 <div>
//                                                                    <CheckBox
//                                                                         size="md"
//                                                                         variant="circle"
//                                                                         label=""
//                                                                         id="two"
//                                                                         name="countries"
//                                                                         color="warning"
//                                                                         // handleChecked={handleChecked}
//                                                                     />
//                                                                 </div>
//                                                                  <div>
//                                                                      <CheckBox
//                                                                         size="md"
//                                                                         variant="circle"
//                                                                         label=""
//                                                                         id="two"
//                                                                         name="countries"
//                                                                         color="info"
//                                                                         // handleChecked={handleChecked}
//                                                                     />              
//                                                                 </div>
//                                 </div>
//                             </div>
//                         </div>
     
//              </div>
//             </div>
//         </div>
//     );
// };

// export default Touch;

import  { useState } from 'react';
import { Label, TextInput, Button, Table, CheckBox } from 'keep-react';
import { FaFileAlt, FaPlusCircle } from 'react-icons/fa';
import { FiMinusCircle } from 'react-icons/fi';

const Touch = () => {
    const [tasks, setTasks] = useState([]);
    const [inputText, setInputText] = useState('');

    const addTask = (inputText) => {
        const newTask = {
            name: inputText,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setInputText('');
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const handleTaskCompletion = (index, completed) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = completed;
        setTasks(updatedTasks);
    };


    

    return (
        <div className="ms-64 me-64 mb-20">
            <h2 className="text-2xl text-center">Touch Options </h2>
            <div>
                <div className="flex flex-col gap-5">
                    <div className="flex">
                        <div>
                            <Label htmlFor="#id-17" value=" Please Give Input" />
                            <TextInput
                                    id="#id-17"
                                    placeholder=" This is Input Field here. "
                                    color="gray"
                                    withBg={true}
                                    sizing="md"
                                    type="text"
                                    addon={<FaFileAlt size={20} color="#5E718D" />}
                                    addonPosition="left"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                />
                        </div>
                        <div className="mt-6">
                            <Button type="outlineGray" size="sm" onClick={() => addTask(inputText)}>
                                <FaPlusCircle size={20} color="#5E718D" />
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Table showCheckbox={true} striped={true}>
                            <Table.Head>
                                <Table.HeadCell className="min-w-[344px]">
                                    <p className="text-body-6 font-medium text-metal-400">Complete All Task</p>
                                </Table.HeadCell>
                                <Table.HeadCell className="min-w-[160px]">Clear Completed</Table.HeadCell>
                                <Table.HeadCell className="min-w-[100px]" />
                            </Table.Head>
                            <Table.Body className="divide-gray-25 divide-y">
                                {tasks.map((task, index) => (
                                    <Table.Row className="bg-white" key={index}>
                                        <Table.Cell>
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-2">
                                                        <div>
                                                            <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                                                                {task.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="flex">
                                                <CheckBox
                                                    size="md"
                                                    variant="circle"
                                                    label=""
                                                    id={`task-${index}`}
                                                    name={`task-${index}`}
                                                    color="success"
                                                    checked={task.completed}
                                                    onChange={(e) => handleTaskCompletion(index, e.target.checked)}
                                                />
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="m-1">
                                                <FiMinusCircle
                                                    color="warning"
                                                    onClick={() => removeTask(index)}
                                                    variant="circle"
                                                />
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                    <div className="flex items-center gap-64 mt-10">
                        <div>
                            <p>{tasks.length} Task left </p>
                        </div>
                        {/* Additional buttons */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Touch;
