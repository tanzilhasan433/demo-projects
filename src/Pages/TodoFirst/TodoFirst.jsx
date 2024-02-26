/* eslint-disable react/prop-types */

import  { useState } from 'react';
import { TextInput, Label, Textarea, Button } from 'keep-react';
import { Envelope } from 'phosphor-react';


const PostedData = ({ data }) => {
    return (
        <div>
            <h3 className="text-lg font-bold">Posted Data:</h3>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Subject: {data.subject}</p>
            <p>Comments: {data.comments}</p>
        </div>
    );
};

const TodoFirst = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        comments: ''
    });
    
    const [submitted, setSubmitted] = useState(false);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setSubmitted(true);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold">Get In Touch!</h2>
            <br />
            <p>Please fill out the following form and we will get back shortly</p>
            <br />

            <form onSubmit={handleSubmit}>
                <div className="flex space-x-10 mt-4">
                    <div className="w-full">
                        <Label htmlFor="name" value="Your Name" />
                        <TextInput
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            color="gray"
                        />
                    </div>
                    <div className="w-full">
                        <Label htmlFor="email" value="Your Email" />
                        <TextInput
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@gmail.com"
                            color="gray"
                            sizing="md"
                            addon={<Envelope size={20} color="#5E718D" />}
                            addonPosition="left"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <Label htmlFor="subject" value="Subject" />
                    <TextInput
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        color="gray"
                    />
                </div>
                <div className="mt-4">
                    <Label htmlFor="comments" value="Comments" />
                    <Textarea
                        id="comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        placeholder="Comments Please..."
                        withBg={true}
                        border={false}
                        color="gray"
                        rows={4}
                    />
                </div>
                <div className="mt-4 text-center">
                    <Button size="md" type="submit">Send Message</Button>
                </div>
            </form>
            {submitted && <PostedData data={formData} />}
        </div>
    );
};

export default TodoFirst;
