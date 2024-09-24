export interface Step1Props {
    stepValue: number;
    email: string;
    password:string;
    setPassword:React.Dispatch<React.SetStateAction<string>>;
    errMsg: string;
}

export interface Step2Props {
    stepValue: number;
}

export interface Step3Props {
    stepValue: number;
    setAmount?:React.Dispatch<React.SetStateAction<number>>
}

export interface PlansInterface {
    name: string;
    pixels: string;
    monthly_price: string;
    quality: string;
    supported_devices: string;
    no_of_devices: number;
    download_devices: number;
}