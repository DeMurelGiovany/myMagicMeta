import {useForm} from 'react-hook-form'

export default function AddDeckForm({onSaveDeck = (f) => f }) {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const onSubmit = (data) => {
    const {deckname} = data;
    onSaveDeck(deckname);
    reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="deckname">Enter a name for your deck</label>
            <input 
            type="text" 
            name="deckname" 
            {...register('deckname', {required: 'deck name is required', minLength: {value: 2, message: 'Min length is 2'}})} 
            />
            {errors.deckname && <p className="text-red-500">{errors.deckname.message}</p>}
            <button type="submit">Save</button>
        </form>
    )

}