export const validateName = (value: string) => {
    if (!value) return 'Name is required';
    return '';
};

export const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return 'E-Mail is required';
    if (!emailRegex.test(value)) return 'Invalid email format';
    return '';
};

export const validatePhoneNumber = (value: string) => {
    const phoneRegex = /^\s*\+?[0-9\s]{10,15}\s*$/;
    if (!value) return 'Phone number is required';
    if (!phoneRegex.test(value)) return 'Invalid phone number format';
    return '';
};
