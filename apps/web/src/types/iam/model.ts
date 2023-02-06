export interface SliderConfig {
    min: number;
    max: number;
    step: number;
    defaultValue: number;
}

export interface IAMModel {
    id: string;
    label: string;
    name: string;
    description: string;
    url: string;
    slider: SliderConfig
    logo?: string;
}
