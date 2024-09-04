interface TextAreaFormProps {
    id: string,
    name: string,
    placeholder: string
}

export function TextAreaForm({ id, name, placeholder }: TextAreaFormProps) {
    return <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className='flex w-full h-44 rounded-xl border border-gray-700 bg-none p-6 text-sm shadow-sm placeholder:text-gray-700 focus:border-red-500 focus-visible:outline-none'
        required
    />;
}