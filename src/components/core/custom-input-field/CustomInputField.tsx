interface CustomInputFieldProps {
    label: string;
    key: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
}

export const CustomInputField: React.FC<CustomInputFieldProps> = ({key, label, value, onChange, errorMessage }) => {
    return (
        <div className="relative">
            <input
                type="text"
                id={key}
                name={key}
                value={value}
                onChange={onChange}
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-transparent"
                placeholder={label}
                required
            />
            <span
                className={`absolute left-0 bottom-0 h-0.5 bg-black transition-all duration-500 ${value ? 'w-full' : 'w-0 peer-focus:w-full'}`}></span>
            <label
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
                {label}
            </label>
            {errorMessage && <p className="absolute text-red-500 text-xs mt-1 text-start">{errorMessage}</p>}
        </div>
    );
};
