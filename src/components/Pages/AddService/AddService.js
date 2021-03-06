import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'

const AddService = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    // handle submit *************
    const onSubmit = data => {
        fetch('https://creepy-castle-34408.herokuapp.com/add-service',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then( result => {
            if(result.insertedId){
                alert('Service saved successfully')
                reset()
            }
        })
    };

    return (
        <div className="container">
            <h2 className="mt-4">Add a new service here</h2>
            <div className="add-service-area">
                <h2>&nbsp;</h2>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("name", { required: true })} placeholder="Service Name" defaultValue=""/>
                    {errors.name && <span className="error">Name is required</span>}
                    <input type="number" {...register("price", { required: true }, { min: 1, max: 10000 })} placeholder="Price" defaultValue=""/>
                    {errors.price && <span className="error">Price is required</span>}
                    <input placeholder="Image URL" defaultValue="" {...register("image", { required: true })} />
                    {errors.image && <span className="error">Image is required</span>}
                    <input placeholder="Description" defaultValue="" {...register("description", { required: true })} />
                    {errors.description && <span className="error">Description is required</span>}
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;