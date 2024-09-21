export interface Step1Props {
    stepValue: number;
    email?: string;
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