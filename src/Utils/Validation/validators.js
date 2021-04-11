export const required = value => {
    if(value) return undefined;
     return 'Field is required';
    }
export const maxLendthCreator = (maxLendth) => (value) => {
    if(value.length > maxLendth) return `Max lendth is ${maxLendth} symbols.`;
     return undefined;
    }  

