import {FormProvider, useForm, useFormContext, useFormState} from 'react-hook-form';

const LabelInput = ({ label, displayLabel, type, validation, ...rest}) =>{
    const {register, formState:{errors}} = useFormContext();
    return (
        <div>
        <label htmlFor={label}>{displayLabel}</label>
        <input
        {...register(label, validation)}
        placeholder={label}
        type={type} 
        name={label}
        id={label}
        {...rest}/>
        {errors[label] && <p className="text-red-500">{errors[label].message}</p>}
        </div>
    );
};

export default function AddDeckForm({onSaveDeck = (f) => f }) {
    const methods = useForm();
    // const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const saveDeck = (data) => {
    const {deckname} = data;
    onSaveDeck(deckname);
    methods.reset();
    };

    return (
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(saveDeck)}>
            <LabelInput 
            label='deckname' 
            displayLabel='name of deck ' 
            type='text' 
            validation={{required: 'deck name is required', minLength: {value: 2, message: 'Min length is 2'}}}
            />
            <button type="submit">Save</button>
            </form>
            </FormProvider>
            )
        
        }
    
            /* <label htmlFor="deckname">Enter a name for your deck</label>
            <input 
            type="text" 
            name="deckname" 
            {...register('deckname', {required: 'deck name is required', minLength: {value: 2, message: 'Min length is 2'}})} 
            />
            {errors.deckname && <p className="text-red-500">{errors.deckname.message}</p>}
             */
